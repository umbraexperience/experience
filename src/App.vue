<template>
  <div id="app" @mousemove="editCursor">
    <div class="cursor2" ref="cursor2"></div>
    <div class="cursor" ref="cursor"></div>

    <div id="nav" v-if="$route.meta.showNav === true">
      <router-link to="/about">About</router-link>
      <router-link to="/credits">Credits</router-link>
      <router-link to="/privacy">Privacy</router-link>
    </div>
    <transition name="page-fade" appear mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
      isMobile: true
    };
  },
  computed: {
    cursor() {
      return this.$refs.cursor;
    },
    cursor2() {
      return this.$refs.cursor2;
    }
  },
  mounted() {
    function isMobileDevice() {
      return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    }

    this.isMobile = isMobileDevice();

    console.log(isMobileDevice());

    if (!this.isMobile) {
      this.createCursor;
    }
  },
  methods: {
    editCursor(e) {
      if (!this.isMobile) {
        this.cursor.style.display = "block";
        this.cursor2.style.display = "block";
        const { clientX: x, clientY: y } = e;

        this.cursor.style.left = x + "px";
        this.cursor.style.top = y + "px";

        this.cursor2.style.left = x + "px";
        this.cursor2.style.top = y + "px";

        requestAnimationFrame(this.editCursor);
      }
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: black;
  color: #b4b4b4;
  cursor: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
*::-moz-selection {
  background-color: rgba(255, 255, 255, 0.15);
}

* {
  cursor: none;
}

.cursor {
  display: none;
  /* filter: blur(1px); */
  position: fixed;
  opacity: 0.8;

  pointer-events: none;
  z-index: 100;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  background-color: rgb(218, 218, 218);
  border-radius: 50%;

  transition: transform 0.3s ease;
}
.cursor2 {
  display: none;
  /* filter: blur(3px); */

  position: fixed;
  opacity: 0.2;

  pointer-events: none;
  z-index: 99;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%);
  background-color: rgb(223, 223, 223);
  border-radius: 50%;

  transition: transform 0.3s ease;
}

.hover-this:hover ~ .cursor {
  transform: scale(8);
}

#app {
  font-family: serif;
  text-align: center;
  height: 100%;
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Light"),
    url("./assets/fonts/TiemposHeadline-Light.woff2") format("woff2");
  font-weight: 300;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Regular"),
    url("./assets/fonts/TiemposHeadline-Regular.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Medium"),
    url("./assets/fonts/TiemposHeadline-Medium.woff2") format("woff2");
  font-weight: 500;
}

.font-light {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
}
.font-regular {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 400;
}
.font-medium {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 500;
}

.text-xl {
  font-size: 2.2rem;
}

@media screen and (min-width: 640px) {
  .text-xl {
    font-size: 3.15rem;
  }
}

.filter-xl {
  filter: blur(0.07rem);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

.hidden {
  display: none;
}

#nav {
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 15rem;
  margin: 0 auto;
  z-index: 50;
}

#nav a {
  opacity: 0.45;
  color: white;
  transition: all 0.35s ease-in-out;
}

#nav a.router-link-exact-active {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.6s;
  transition-delay: 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.page-fade-enter, .page-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
