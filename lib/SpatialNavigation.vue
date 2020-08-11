<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import JsSpatialNavigation from "./spatial_navigation.js";

export default {
  name: "SpatialNavigation",
  props: {
    activeClassName: { type: String, default: "active" },
    focusableClassName: { type: String, default: "focusable" },
    selector: { type: String, default: ".focusable" },
    customInit: Function,
    defaultElement: String,
    disabled: Boolean,
    enterTo: String,
    leaveFor: Object,
    navigableFilter: Function,
    rememberSource: String,
    restrict: String,
    straightOnly: Boolean,
    straightOverlapThreshold: Number,
    tabIndexIgnoreList: String
  },
  provide() {
    return {
      config: this.config,
      focusableSectionId: ""
    };
  },
  data() {
    return {
      config: {
        activeClassName: this.activeClassName,
        focusableClassName: this.focusableClassName,
        customInit: this.customInit,
        defaultElement: this.defaultElement,
        disabled: this.disabled,
        enterTo: this.enterTo,
        leaveFor: this.leaveFor,
        navigableFilter: this.navigableFilter,
        rememberSource: this.rememberSource,
        restrict: this.restrict,
        selector: this.selector,
        straightOnly: this.straightOnly,
        straightOverlapThreshold: this.straightOverlapThreshold,
        tabIndexIgnoreList: this.tabIndexIgnoreList
      }
    };
  },
  mounted() {
    if (!this.customInit) {
      JsSpatialNavigation.init();
      JsSpatialNavigation.add(this.config);
      JsSpatialNavigation.focus();
    } else {
      this.customInit(this.config);
    }
  },
  beforeDestroy() {
    JsSpatialNavigation.uninit();
  },
  methods: {
    getConfigFromProps() {
      return {
        activeClassName: this.activeClassName,
        focusableClassName: this.focusableClassName,
        customInit: this.customInit,
        defaultElement: this.defaultElement,
        disabled: this.disabled,
        enterTo: this.enterTo,
        leaveFor: this.leaveFor,
        navigableFilter: this.navigableFilter,
        rememberSource: this.rememberSource,
        restrict: this.restrict,
        selector: this.selector,
        straightOnly: this.straightOnly,
        straightOverlapThreshold: this.straightOverlapThreshold,
        tabIndexIgnoreList: this.tabIndexIgnoreList
      };
    }
  }
};
</script>
