# vue-js-spatial-navigation [![npm version](http://img.shields.io/npm/v/vue-js-spatial-navigation.svg?style=flat)](https://npmjs.org/package/vue-js-spatial-navigation "View this project on npm")

Vue directive of [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation);

## Installation

### NPM

```shell
    npm install vue-js-spatial-navigation
```

## Getting Started

```javascript
import Vue from "vue";
import vjsn from "vue-js-spatial-navigation";

Vue.use(vjsn);
```

#### Optional global [Configuration](https://github.com/luke-chang/js-spatial-navigation#configuration)

```javascript
const config = {
  straightOnly: false,
  straightOverlapThreshold: 0.5,
  rememberSource: false,
  disabled: false,
  defaultElement: "",
  enterTo: "",
  leaveFor: null,
  restrict: "self-first",
  tabIndexIgnoreList: "a, input, select, textarea, button, iframe, [contentEditable=true]",
  navigableFilter: null
};
Vue.use(vjsn, config);
```

## Documentation

### `$SpatialNavigation`

A global Vue instance property for [SpatialNavigation](https://github.com/luke-chang/js-spatial-navigation#api-reference);

```javascript
// you can access SpatialNavigation in every instance
this.$SpatialNavigation;
```

### `v-focus`

A directive that make the element focusable.

The element with `v-focus` must under the element with `v-focus-section`, see [v-focus-section](#`v-focus-section`)

```html
<div v-focus>
  <div></div>
</div>
```

### `v-focus-section`

A directive that define a focus [Section](https://github.com/luke-chang/js-spatial-navigation#spatialnavigationaddsectionid-config)

```html
<div v-focus-section>
  <div v-focus>
    <div></div>
  </div>
  <div v-focus>
    <div></div>
  </div>
</div>
```

#### Pass a specified section id or configuration

```html
<!-- section id -->
<div v-focus-section:my-section></div>
<!-- configuration -->
<div v-focus-section:my-section="{enterTo:'last-focused'}"></div>
```
