<template>
  <div class="about">
    <div class="container">
      <h1 class="title text-xl filter-xl">{{ $t("about.title") }}</h1>
    </div>
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat">{{ $t("about.narrative.title") }}</div>
          <div class="descripcio">
            <p>
              {{ $t("about.narrative.description") }}
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat2">{{ $t("about.project.title") }}</div>
          <div class="descripcio2">
            <p>
              {{ $t("about.project.description") }}
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat">{{ $t("about.us.title") }}</div>
          <div class="descripcio">
            <p>
              {{ $t("about.us.description") }}
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="contingut">
          <div class="apartat2">{{ $t("about.data.title") }}</div>
          <div class="descripcio2">
            <p>
              {{ $t("about.data.description") }}
            </p>
          </div>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
Flickity.beforeDestroy = undefined;

export default {
  name: "about",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        autoPlay: 9500,
        wrapAround: true,
        prevNextButtons: false

        // any options from Flickity can be used
      }
    };
  }
};
</script>

<style>
.flickity-page-dots {
  bottom: 15rem;
  transform: rotate(90deg);
  margin-left: 35rem;
}
/* white circles */
.flickity-page-dots .dot {
  width: 11px;
  height: 11px;
  opacity: 1;
  background: transparent;
  border: 1px solid white;
  filter: blur(0.07rem);
  cursor: inherit;
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: white;
}

@media screen and (max-width: 650px) {
  .container {
    margin-top: 50rem;
  }
}

@media screen and (max-width: 1150px) {
  .flickity-page-dots {
    bottom: 0rem;
    transform: rotate(0deg);
    margin-left: 0rem;
  }
}

@media screen and (max-width: 1200px) {
  .flickity-page-dots {
    transform: rotate(0deg);
    margin-left: 0rem;
    margin-bottom: 2rem;
  }
}
</style>

<style scoped>
/* * {
  border: 2px solid red;
} */
.about {
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
}

.container {
  padding: 0 2rem;
  max-width: 1000px;
  margin: 0 auto;
  word-wrap: break-word;
}

.title {
  text-align: left;
  margin-top: 5.1rem;
  /* margin-left: 13.5rem; */
  color: #f5f9fb;
  width: 30rem;
  white-space: normal;
  word-wrap: break-word;
  max-width: 100%;
}

.carousel-cell {
  width: 100%; /* full width */
  height: 380px; /* height of carousel */
  margin-right: 10px;
  will-change: transform;
}
.flickity {
  margin-top: 5rem;
}

.contingut {
  /* margin-left:20rem; */
  margin: 0 auto;
  height: 20rem;
  max-width: 35rem;
}

.carousel-cell .cell-title {
  font-size: 4.7rem;
  font-weight: 500;
  opacity: 0.3;
  filter: blur(0.1rem);
  color: #4b4b50;
  padding-left: 1rem;
  padding-right: 1rem;
}

.apartat {
  color: #202022;
  font-size: 4.2rem;
  font-weight: 500;
  filter: blur(0.14rem);
  text-align: left;
  max-width: 30rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.descripcio {
  text-align: left;
  margin-left: 6rem;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  filter: blur(0.04rem);
  padding-left: 1rem;
  padding-right: 1rem;
}

.apartat2 {
  color: #202022;
  font-size: 4.2rem;
  font-weight: 500;
  filter: blur(0.14rem);
  text-align: right;
  padding-left: 1rem;
  padding-right: 1rem;
}

.descripcio2 {
  text-align: right;
  margin-right: 4rem;
  margin-top: -3.2rem;
  font-size: 1.15rem;
  filter: blur(0.04rem);
  padding-left: 1rem;
  padding-right: 1rem;
}

@media screen and (max-width: 640px) {
  .apartat {
    font-size: 1.85rem;
    filter: blur(0.1rem);
    margin-left: 1rem;
  }

  .apartat2 {
    font-size: 1.85rem;
    filter: blur(0.1rem);
    margin-right: 1rem;
  }

  .descripcio {
    font-size: 1rem;
    margin-top: -2rem;
    padding-right: 2rem;
    margin-left: 2rem;
  }

  .descripcio2 {
    font-size: 1rem;
    margin-top: -2rem;
    padding-left: 2rem;
    margin-right: 2rem;
  }

  .carousel-cell {
    height: 390px;
  }
}

@media screen and (min-width: 1350px) {
  .container {
    margin-top: 8.5rem;
  }
}

@media screen and (min-width: 1550px) {
  .container {
    margin-top: 12rem;
  }
}

@media screen and (min-width: 1750px) {
  .container {
    margin-top: 15rem;
  }
}
</style>
