import SpatialNavigation from "./spatial_navigation.js";
const vueSpatialNavigation = {
  install(Vue, config) {
    const globalConfig = {
      focusableClassName: "focusable",
      selector: ".focusable"
    };
    Object.assign(globalConfig, config);
    SpatialNavigation.init();
    SpatialNavigation.add(globalConfig);
    Vue.prototype.$SpatialNavigation = SpatialNavigation;

    // focus section directive
    Vue.directive("focus-section", {
      bind(el, binding) {
        let sectionId = null;
        let sectionConfig = {};
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
        el.classList.add(sectionId);
        sectionConfig.selector = `.${sectionId} .${globalConfig.focusableClassName}`;
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
        el.classList.add(globalConfig.focusableClassName);
      }
    });
  }
};

export default vueSpatialNavigation;
