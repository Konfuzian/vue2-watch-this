import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Movies from "@/views/Movies";
import About from "@/views/About";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/vue2-watch-this/",
  routes: [
    { path: "/", component: Movies },
    { path: "/about", component: About },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
