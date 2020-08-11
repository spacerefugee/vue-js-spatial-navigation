# vue-spatial-navigation

A wrapper of [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation) to Vue components;

Inspiration by [
react-js-spatial-navigation](https://github.com/dead/react-js-spatial-navigation)

## Installation

### NPM

```shell
    npm install vue-spatial-navigation
```

## Getting Started

```javascript
import Vue from "vue";
import vueSpatialNavigation from "vue-spatial-navigation";

Vue.use(vueSpatialNavigation);
```

## Example

[![Edit condescending-dawn-krksp](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/condescending-dawn-krksp?fontsize=14&hidenavigation=1&theme=dark)

## Documentation

### `<SpatialNavigation>`

This component initialize the Spatial Navigation library.
It should be used only one time and in the root node of the application.
The spatial navigation will only work within the Focusable components.

### `<Focusable>`

A Focusable component that handle the onFocus, onUnfocus, onClickEnter events.

```
Events:
   on-focus: (optional)
     A function that will be fired when the component is focused.

   on-unfocus: (optional)
     A function that will be fired when the component is unfocused.

   on-click-enter: (optional)
     A function that will be fired when the component is focused and enter key is pressed.
```

### `<FocusableSection>`

A Focusable Section can specify a behaviour before focusing an element.
I.e. selecting a default element, the first element or an active one.

```
Props:
   defaultElement: (default: '')
     The default element that will be focused when entering this section.
     This can be:
       * a valid selector string for "querySelectorAll".
       * a NodeList or an array containing DOM elements.
       * a single DOM element.
       * an empty string.

   enterTo: (default: 'default-element')
     If the focus comes from another section, you can define which element in this section should be focused first.
     This can be:
       * 'last-focused' indicates the last focused element before we left this section last time. If this section has never been focused yet, the default element (if any) will be chosen next.
       * 'default-element' indicates the element defined in defaultElement.
       * an empty string.
```
