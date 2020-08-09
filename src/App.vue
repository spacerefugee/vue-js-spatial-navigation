<template>
  <div id="app">
    <SpatialNavigation>
      <div id="container">
        <FocusableSection>
          <div class="leftbox">
            <Focusable @on-focus="onFocus">
              <div></div>
            </Focusable>
            <Focusable @on-unfocus="onUnfocus">
              <div></div>
            </Focusable>
            <Focusable @on-click-enter="onClickEnter">
              <div></div>
            </Focusable>
            <Focusable>
              <div></div>
            </Focusable>
            <div class="nonfocusable"></div>
          </div>
        </FocusableSection>
        <div class="rightbox">
          <Focusable>
            <div id="main"></div>
          </Focusable>
          <FocusableSection>
            <div class="bottombox">
              <Focusable>
                <div></div>
              </Focusable>
              <Focusable>
                <div></div>
              </Focusable>
              <Focusable>
                <div></div>
              </Focusable>
              <br />
              <Focusable>
                <div></div>
              </Focusable>
              <Focusable>
                <div></div>
              </Focusable>
              <Focusable>
                <div></div>
              </Focusable>
            </div>
          </FocusableSection>
        </div>
      </div>
    </SpatialNavigation>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onFocus() {
      console.log("focus!!!");
    },
    onUnfocus() {
      console.log("unfocus!!!");
    },
    onClickEnter() {
      console.log("click!!!");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#container {
  background-color: #eee;
  width: 825px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid black;
}

.leftbox {
  float: left;
}

.rightbox {
  float: right;
}

.bottombox {
  font-size: 0px;
}

.leftbox .focusable,
.bottombox .focusable,
.nonfocusable {
  background-color: blue;
  width: 200px;
  height: 114px;
  margin: 5px;

  color: white;
  text-align: center;
  line-height: 114px;
  vertical-align: top;
  font-size: 1rem;
}

.nonfocusable {
  background-color: #bbb;
  color: black;
}

.nonfocusable::before {
  content: "Non-focusable Element";
}

.bottombox .focusable {
  display: inline-block;
  margin-left: 0px;
  margin-bottom: 0px;
}

#main {
  background-color: green;
  width: 610px;
  height: 352px;
  margin: 5px 0 0 0;
}

.focusable {
  outline: 0;
}

* :focus {
  outline: 2px solid red;
  opacity: 0.5;
}

#sidebox {
  width: 825px;
  margin: 2em auto 0 auto;
}
</style>
