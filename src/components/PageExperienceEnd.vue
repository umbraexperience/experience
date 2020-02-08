<template>
  <div>
    <div class="container">
      <button @click="state++">NEXT</button>
      <transition name="fade" mode="out-in" appear>
        <div class="explanation-text" v-if="state === 1" key="1">
          <p class="text1">{{ $t("end.text1") }}</p>
        </div>
        <div class="explanation-text" v-else-if="state === 2" key="2">
          <p>{{ $t("end.text2") }}</p>
        </div>
        <div class="explanation-text" v-else-if="state === 3" key="3">
          <p>{{ $t("end.text3") }}</p>
        </div>
        <div class="explanation-text" v-else-if="state === 4" key="4">
          <p>{{ $t("end.text4") }}</p>
        </div>

        <div v-else-if="state === 5" key="5">
          <div class="video-container">
            <video autoplay loop preload="auto" autobuffer muted>
              <source src="/videos/worldend.mp4" type="video/mp4" />
            </video>
          </div>

          <div class="text-container">
            <p class="font-light">
              <span><slot name="name"></slot></span>
              <span>, <slot name="age"></slot>{{ $t("end.years") }}</span>
              <span>, <slot name="city"></slot></span>
            </p>
            <p class="price font-medium"><slot name="price"></slot></p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 1
    };
  },
  mounted() {}
};
</script>

<style scoped>
* {
  /* border: 2px solid red; */
}

button {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}

video {
  object-fit: cover;
  height: 75%;
  max-width: 100%;
  margin-bottom: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  max-width: 100vw;
}

.explanation-text {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.explanation-text p {
  margin: 0 auto;
  max-width: 45%;
  line-height: 1.5rem;
  font-size: 1.1rem;
  filter: blur(0.06rem);
}

.text-container {
  font-size: 1.3rem;
  filter: blur(0.06rem);
}

.text-container .price {
  font-size: 2.4rem;
}

@media screen and (min-width: 900px) {
  .video-container {
    height: 100vh;
  }
  .text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 1.5rem;
  }
}

.text-container p {
  margin: 0;
  margin-bottom: 0.3rem;
}
</style>
