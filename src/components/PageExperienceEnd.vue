<template>
  <div>
    <div class="container">
      <div class="explanation-text">
        <p class="text1">{{ $t("end.text1") }}</p>

        <p class="text2">{{ $t("end.text2") }}</p>

        <p class="text3">{{ $t("end.text3") }}</p>

        <p class="text4">{{ $t("end.text4") }}</p>
      </div>

      <div class="world-end">
        <div class="text-expl">
          <p class="">{{ $t("end.text5") }}</p>
          <p class="">{{ $t("end.text6") }}</p>
        </div>

        <div class="video-container-end">
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
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$anime
      .timeline()
      .add({
        targets: ".text1",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 2000 }],
        easing: "easeInOutQuad"
      })
      .add({
        targets: ".text2",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 4000 }],
        easing: "easeInOutQuad"
      })
      .add({
        targets: ".text3",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 4000 }],
        easing: "easeInOutQuad"
      })
      .add({
        targets: ".text4",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 2000 }],
        easing: "easeInOutQuad"
      })
      .add({
        targets: ".world-end",
        duration: 4550,
        opacity: 1,
        delay: 2000,
        easing: "easeInOutQuad"
      });
  }
};
</script>

<style scoped>
* {
  /* border: 2px solid red; */
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

.video-container-end {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  max-width: 100vw;
}

.explanation-text p {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 85%;
  margin: 0 auto;

  line-height: 1.5rem;
  font-size: 1.1rem;
  filter: blur(0.06rem);
}

@media screen and (min-width: 640px) {
  .explanation-text p {
    max-width: 45%;
  }
}

.explanation-text .text1,
.explanation-text .text2,
.explanation-text .text3,
.explanation-text .text4,
.world-end {
  opacity: 0;
}

.text-container {
  font-size: 1.3rem;
  filter: blur(0.06rem);
}

.text-container .price {
  font-size: 2.4rem;
}

.world-end {
  margin-top: 2rem;
}

.world-end .text-expl {
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;

  filter: blur(0.06rem);
}

@media screen and (min-width: 900px) {
  .world-end {
    margin-top: 0;
  }
  .video-container-end {
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
