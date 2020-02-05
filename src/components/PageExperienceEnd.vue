<template>
  <div>
    <div class="container">
      <div class="video-container">
        <video autoplay loop preload="auto" autobuffer muted>
          <source src="/videos/worldend.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="explanation-text">
        <p>
          Este es el precio que generarán tus datos. En función de tus
          interacciones, tu edad y geolocalización hemos podido hacer una
          estimación del valor que tendrán tus datos a lo largo de tu vida.
          Pongámonos en esa situación, imagínate que estás en ese futuro
          hipotético,.
        </p>
        <p>
          donde las empresas quieren saber todo lo que hacemos, decidimos,
          consumimos, Si una de estas compañías te ofreciera esta cantidad de
          dinero, a cambio de saber todo lo que haces en cualquier momento de tu
          vida, ¿estarías dispuesto a deshacerte de tu privacidad a cambio de
          este dinero?
        </p>
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

.explanation-text {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;
}
.explanation-text p {
  text-align: left;
  max-width: 28%;
  line-height: 1.4rem;
}
.explanation-text p:last-child {
  text-align: right;
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
