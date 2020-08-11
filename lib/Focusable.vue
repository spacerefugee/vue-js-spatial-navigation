<template>
  <div :class="classes" tabIndex="-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Focusable",
  props: { active: Boolean, className: String },
  inject: ["config", "focusableSectionId"],
  data() {
    return {
      classes: []
    };
  },
  created() {
    this.classes.push(this.focusableSectionId);
    this.classes.push(this.config.focusableClassName);
    if (this.active) {
      this.classes.push(this.config.activeClassName);
    }
    if (this.className) {
      this.classes.push(this.className);
    }
  },
  mounted() {
    this.$el.addEventListener("sn:focused", this.onFocus);
    this.$el.addEventListener("sn:unfocused", this.onUnfocus);
    this.$el.addEventListener("sn:enter-up", this.onCliekEnter);
  },
  beforeDestroy() {
    this.$el.removeEventListener("sn:focused", this.onFocus);
    this.$el.removeEventListener("sn:unfocused", this.onUnfocus);
    this.$el.removeEventListener("sn:enter-up", this.onCliekEnter);
  },
  methods: {
    onFocus(e) {
      this.$emit("on-focus", e);
    },
    onUnfocus(e) {
      this.$emit("on-unfocus", e);
    },
    onCliekEnter(e) {
      this.$emit("on-click-enter", e);
    }
  }
};
</script>
