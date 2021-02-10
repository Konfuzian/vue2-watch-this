<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper">
        <router-link id="logo" to="/" class="brand-logo left">
          WatchThis
        </router-link>
        <ul id="nav-mobile" class="right">
          <li><router-link to="/" exact>Movies</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-wrapper {
  background-color: black;
  font-weight: 300;
  border-bottom: 1px solid #333;
}

.nav-wrapper * {
  color: #DDD !important;
}

.brand-logo {
  margin-left: 12px;
}

.router-link-active {
  background-color: rgb(31, 25, 126) !important;
}

#logo {
  font-family: "Righteous", cursive;
  color: #EEE !important;
  background-color: transparent !important;
}
</style>