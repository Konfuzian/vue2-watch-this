<template>
  <div>
    <SearchBar @search="search" />
    <MovieList
      :movies="movies"
      :loading="loading"
      :page="page"
      :total_pages="total_pages"
      @more-results="moreResults"
    />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";
import { fetchMovies, fetchDiscoverMovies } from "@/api";

export default {
  name: "App",
  components: {
    MovieList,
    SearchBar,
  },
  data: () => ({
    movies: [],
    loading: true,
    page: 0,
    total_pages: 0,
    query: "",
  }),
  mounted() {
    this.discover();
  },
  methods: {
    async search(query, page) {
      if (this.query === query) {
        return;
      }
      this.loading = true;
      this.query = query;
      if (!query) {
        this.discover();
        return;
      }
      [this.movies, this.page, this.total_pages] = await fetchMovies(
        query,
        page
      );
      this.loading = false;
    },
    async discover() {
      this.loading = true;
      [this.movies, this.page, this.total_pages] = await fetchDiscoverMovies();
      this.loading = false;
    },
    async moreResults() {
      // don't use loading here because that would rerender the video iframes
      const fetchFunc = this.query === "" ? fetchDiscoverMovies : fetchMovies;
      const [movies, page, total_pages] = await fetchFunc(
        this.query,
        this.page + 1
      );
      this.movies = [...this.movies, ...movies];
      this.page = page;
      this.total_pages = total_pages;
    },
  },
};
</script>