import SpatialNavigation from "./SpatialNavigation.vue";
import FocusableSection from "./FocusableSection.vue";
import Focusable from "./Focusable.vue";
import JsSpatialNavigation from "./spatial_navigation.js";
const vueSpatialNavigation = {
  install(Vue) {
    Vue.component("SpatialNavigation", SpatialNavigation);
    Vue.component("FocusableSection", FocusableSection);
    Vue.component("Focusable", Focusable);
    Vue.prototype.$JsSpatialNavigation = JsSpatialNavigation;
  }
};

export default vueSpatialNavigation;
