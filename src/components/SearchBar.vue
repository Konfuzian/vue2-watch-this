<template>
  <div class="row">
    <form class="col s12" autocomplete="off">
      <div class="row">
        <div class="input-field col offset-m1 offset-l2 s11 m10 l8">
          <i class="material-icons prefix">search</i>
          <input
            id="autocomplete_input"
            type="text"
            placeholder="Search for a movie..."
            @keyup="search"
            @keypress.enter.prevent="(e) => e.target.blur()"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  methods: {
    search(e) {
      if (this.cancel) this.cancel();
      this.cancel = setTimeout(() => this.$emit("search", e.target.value), 500);
    },
  },
};
</script>

<style scoped>
.row {
  padding-top: 0.5rem;
}

input[type="text"] {
  font-weight: 300;
  font-size: 20px !important;
  background-color: white !important;
  padding-left: 1.5rem !important;
  border-radius: 0.5rem !important;
  color: #333;
}

/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid orange !important;
  box-shadow: 0 1px 0 0 orange !important;
}

/* icon prefix focus color */
.input-field .prefix.active {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transition: text-shadow 0.5s ease;
}

.input-field .prefix {
  transition: text-shadow 0.5s ease;
}
</style>