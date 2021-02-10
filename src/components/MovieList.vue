<template>
  <div>
    <div v-if="movies.length > 0" class="container">
      <MovieCard
        v-for="movie of movies"
        :key="movie.id"
        :movie="movie"
        :loading="loading"
        :genresById="genres"
      />
    </div>
    <div
      v-else-if="!loading && Object.keys(genres).length > 0"
      class="container center"
    >
      <i>No search results.</i>
    </div>

    <div class="center scroll-fix">
      <a
        v-if="this.page < this.total_pages"
        class="waves-effect waves-light btn"
        @click="moreResults"
      >
        More movies
      </a>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import MovieCard from "./MovieCard";
import { fetchGenres } from "@/api";

export default {
  components: { MovieCard },
  props: {
    movies: Array,
    loading: Boolean,
    page: Number,
    total_pages: Number,
  },
  data: () => ({
    genres: {},
  }),
  async mounted() {
    const genres = await fetchGenres();
    this.genres = genres.reduce(function (acc, cur) {
      acc[cur.id] = cur.name;
      return acc;
    }, {});
  },
  methods: {
    moreResults: _.debounce(function () {
      this.$emit("more-results");
    }, 1000),
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.btn {
  background-color: black;
  border: 1px solid white;
  margin-top: 1rem;
}

.btn:hover {
  background-color: rgb(31, 25, 126);
}

.scroll-fix {
  /* scrolling does a weird jump when you are at the end
  of the list and reveal a card in the last row, this fixes it */
  margin-bottom: 20rem;
}
</style>