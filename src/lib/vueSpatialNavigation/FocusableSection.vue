<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import JsSpatialNavigation from "./spatial_navigation.js";
export default {
  name: "FocusableSection",
  props: { defaultElement: String, enterTo: String },
  inject: ["config"],
  provide() {
    return {
      focusableSectionId: this.sectionId
    };
  },
  data() {
    return {
      sectionId: JsSpatialNavigation.add({})
    };
  },
  mounted() {
    let defaultElement = this.defaultElement;
    const enterTo = this.enterTo === undefined ? "default-element" : this.enterTo;

    if (defaultElement && defaultElement === "first") {
      defaultElement = this.selector + ":first-child";
    }

    if (defaultElement && defaultElement === "active") {
      defaultElement = this.selector + `.${this.config.activeClassName}`;
    }

    JsSpatialNavigation.set(this.sectionId, {
      selector: this.selector,
      enterTo: enterTo,
      defaultElement: defaultElement
    });
  },
  beforeDestroy() {
    JsSpatialNavigation.remove(this.sectionId);
  },
  compute: {
    selector() {
      return `.${this.sectionId}`;
    }
  }
};
</script>

<style></style>
