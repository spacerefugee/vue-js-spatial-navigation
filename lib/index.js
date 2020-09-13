import SpatialNavigation from "./spatial_navigation.js";
const vueSpatialNavigation = {
  install(Vue, config) {
    const globalConfig = {
      selector: `[data-focusable="true"]`
    };
    Object.assign(globalConfig, config);
    SpatialNavigation.init();
    SpatialNavigation.set(globalConfig);
    Vue.prototype.$SpatialNavigation = SpatialNavigation;

    // focus section directive
    Vue.directive("focus-section", {
      bind(el, binding) {
        let sectionId = null;
        let sectionConfig = Object.assign({}, globalConfig);
        if (binding.arg) {
          sectionId = binding.arg;
          SpatialNavigation.add(sectionId, {});
        } else {
          sectionId = SpatialNavigation.add({});
        }
        if (binding.value) {
          Object.assign(sectionConfig, binding.value);
        }
        // set sectionid to data set for removing when unbinding
        el.dataset.sectionId = sectionId;
        sectionConfig.selector = `[data-section-id="${sectionId}"] [data-focusable="true"]`;
        SpatialNavigation.set(sectionId, sectionConfig);
      },
      unbind(el) {
        SpatialNavigation.remove(el.dataset.sectionId);
      }
    });

    // focusable directive
    Vue.directive("focus", {
      bind(el) {
        el.tabIndex = -1;
        el.dataset.focusable = true;
      }
    });
  }
};

export default vueSpatialNavigation;
