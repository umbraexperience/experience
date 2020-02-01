<template>
  <div>
    <div class="container">
      <div class="espaivideo">
        <video
          width="100%"
          height="auto"
          autoplay
          loop
          preload="auto"
          autobuffer
          muted
        >
          <source src="/videos/worldend.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="container2">
        <div class="grid-container">
          <div class="informacio">Santi Cros,</div>
          <div class="informacio">22 años,</div>
          <div class="informacio">Barcelona</div>
        </div>
        <div class="flex-container">
          <div class="preu">200.500€</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body {
  max-width: 100%;
}
body {
  background-color: #000000;
}
body * {
  color: #b4b4b4;
}

* {
}

video::-internal-media-controls-overlay-cast-button {
  display: none;
}

#app {
  font-family: serif;
  height: 100%;
  font-family: "Tiempos Headline Light", Times, serif;
  transition: filter 2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.container {
  margin-top: -5rem;
}

.espaivideo {
  margin-top: -2rem;
  width: 100%;
  height: auto;
}

.grid-container {
  text-align: center;
  filter: blur(0.07rem);
  font-size: 1.3rem;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -6rem;
  justify-content: center !important;
}

.flex-container {
  text-align: center;
  filter: blur(0.07rem);
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 900;
  font-family: "Tiempos Headline Light", Times, serif;
}

.informacio {
  padding-left: 0.3rem;
}
/*HOLA SANTI, AQUI VOLIA FER ALLO QUE SEMPRE FEM AL FIGMA DE POSSAR-LI UN COLOR DE FONS AMB BLUR, PERÒ NO HE SIGUT CAPAÇ XD */

@media screen and (max-width: 750px) and (min-width: 300px) {
  .grid-container {
    margin-top: 0rem;
  }
}
</style>
