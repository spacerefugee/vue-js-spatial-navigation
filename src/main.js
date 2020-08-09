import Vue from "vue";
import App from "./App.vue";
import vueSpatialNavigation from "./lib/vueSpatialNavigation";
Vue.config.productionTip = false;

Vue.use(vueSpatialNavigation);
new Vue({
  render: (h) => h(App)
}).$mount("#app");
