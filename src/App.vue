<template>
  <div>
    <TheNavbar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>