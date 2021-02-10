<template>
  <div class="card hoverable sticky-action">
    <div
      class="card-image activator waves-effect waves-block waves-dark"
      :style="{
        background: posterPath,
      }"
    >
      <i v-if="!posterPath" id="no-image">No image available</i>
    </div>

    <div class="card-content activator">
      <span class="card-title activator center">
        {{ movie.title }}
      </span>
      <div class="valign-wrapper">
        <h5
          class="rating activator center-align"
          :style="{
            backgroundColor: ratingColor,
          }"
        >
          {{ rating }}
        </h5>
      </div>
    </div>

    <div class="card-reveal">
      <span class="card-title">
        {{ movie.title }} {{ year }}
        <i class="material-icons close">close</i>
      </span>

      <MovieTrailer v-if="!loading" :videos="videos" />

      <p>
        <span v-for="genre of genres" class="chip" :key="genre.id">
          {{ genre }}
        </span>
      </p>

      <p class="overview">
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchMovieVideos } from "@/api";
import MovieTrailer from "./MovieTrailer";

export default {
  props: {
    movie: Object,
    loading: Boolean,
    genresById: Object,
  },
  components: {
    MovieTrailer,
  },
  data: () => ({
    videos: [],
  }),
  async mounted() {
    this.videos = await fetchMovieVideos(this.movie.id);
  },
  computed: {
    posterPath() {
      if (!this.movie.poster_path) return "";
      return `url(https://image.tmdb.org/t/p/original/${this.movie.poster_path})`;
    },
    genres() {
      return this.movie.genre_ids.map((id) => this.genresById[id]);
    },
    year() {
      if (!this.movie.release_date) return "";
      return `(${this.movie.release_date.slice(0, 4)})`;
    },
    rating() {
      if (!this.movie.vote_average) return "-";
      if (this.movie.vote_average === 10) return "10";
      return this.movie.vote_average.toFixed(1);
    },
    ratingColor() {
      if (!this.movie.vote_average) return "rgb(0, 0, 0)";
      const r = 255 - this.movie.vote_average * 25.5;
      const g = this.movie.vote_average * 25.5;
      return `rgb(${r}, ${g}, 0)`;
    },
  },
};
</script>

<style scoped>
.card-content {
  height: 100%;
  background-color: black;
}

.card-title {
  user-select: none;
}

.card-image {
  background-repeat: no-repeat !important;
  height: 20rem;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-color: black !important;
}

.card-reveal {
  background-color: black !important;
  border: 3px solid white;
  border-radius: 1rem;
  padding-bottom: 1rem !important;
}

.overview {
  font-weight: 300;
}

.rating {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 10%;
  z-index: 1;
  width: 75px;
  height: 75px;
  padding: 16px 0;
  font-family: "Anton", sans-serif;
  font-size: 32px;
  text-align: center;
  border: 4px solid white;
  border-radius: 50%;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.chip {
  background-color: #222;
  color: #DDD;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.card-reveal::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.card-reveal {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

#no-image {
  display: flex;
  justify-content: center;
  padding-top: 30%;
  color: #333;
}
</style>