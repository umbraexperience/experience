<template>
  <div>
    <div class="container">
      <div class="video-container">
        <video autoplay loop preload="auto" autobuffer muted>
          <source src="/videos/worldend.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="text-container">
        <p class="font-light">
          <span><slot name="name"></slot>,</span>
          <span><slot name="age"></slot> {{ $t("end.years") }},</span>
          <span><slot name="city"></slot></span>
        </p>
        <p class="price font-medium"><slot name="price"></slot></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  max-width: 100vw;
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
