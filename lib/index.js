import SpatialNavigation from "./spatial_navigation.js";
import "focus-options-polyfill";
if (!("scrollBehavior" in document.documentElement.style)) {
  import("scroll-behavior-polyfill");
}

const vueSpatialNavigation = {
  install(Vue, config) {
    const globalConfig = {
      selector: `[data-focusable=true]`
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
          try {
            SpatialNavigation.add(sectionId, {});
          } catch (error) {}
        } else {
          sectionId = SpatialNavigation.add({});
        }
        if (binding.value) {
          Object.assign(sectionConfig, binding.value);
        }

        // set sectionid to data set for removing when unbinding
        el.dataset.sectionId = sectionId;
        sectionConfig.selector = `[data-section-id="${sectionId}"] [data-focusable=true]`;
        SpatialNavigation.set(sectionId, sectionConfig);
        // set default section
        if (binding.modifiers.default) {
          SpatialNavigation.setDefaultSection(sectionId);
        }
      },
      update(el, binding) {
        if (binding.value) {
          SpatialNavigation.set(el.dataset.sectionId, binding.value);
        }
      },
      unbind(el) {
        SpatialNavigation.remove(el.dataset.sectionId);
      }
    });

    const disableSection = (sectionId, disable) => {
      if (disable == false) {
        SpatialNavigation.enable(sectionId);
      } else {
        SpatialNavigation.disable(sectionId);
      }
    };
    // diasble focus section directive
    Vue.directive("disable-focus-section", {
      bind(el, binding) {
        disableSection(el.dataset.sectionId, binding.value);
      },
      update(el, binding) {
        disableSection(el.dataset.sectionId, binding.value);
      }
    });

    const disableElement = (el, disable) => {
      if (disable == false) {
        el.dataset.focusable = false;
      } else {
        el.tabIndex = -1;
        el.dataset.focusable = true;
      }
    };
    // focusable directive
    Vue.directive("focus", {
      bind(el, binding) {
        disableElement(el, binding.value);
      },
      update(el, binding) {
        disableElement(el, binding.value);
      }
    });
  }
};

export default vueSpatialNavigation;
