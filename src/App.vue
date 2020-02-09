<template>
  <div id="app">
    <div id="nav" v-if="$route.meta.showNav === true">
      <router-link to="/about">About</router-link>
      <router-link to="/credits">Credits</router-link>
      <router-link to="/privacy">Privacy</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: black;
  color: #b4b4b4;
  cursor: url("./assets/cursor.svg"), pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
*::-moz-selection {
  background-color: rgba(255, 255, 255, 0.15);
}

* {
  cursor: url("./assets/cursor.svg"), pointer;
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
</style>
