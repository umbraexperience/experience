<template>
  <div class="credits">
    <div class="flex-container">
      <div v-for="member in team" :key="member.id" class="person">
        <div class="photo">
          <img src="@/assets/aniol.png" />
        </div>
        <h2 class="name font-medium">{{ member.name }}</h2>
        <h2 class="role font-medium">{{ member.role }}</h2>
      </div>
    </div>

    <div class="crowfunding">
      <h1 class="gracies">{{ $t("credits.acknowledgements") }}</h1>
      <div class="grid-container">
        <div v-for="mecena in mecenes" :key="mecena.id" class="paypal">
          {{ mecena.name }}
        </div>
      </div>
      <div class="patrocinadors">
        <img class="logo" src="@/assets/logo1.png" alt="Cinema Truffaut" />
        <img class="logo" src="@/assets/logo2.png" alt="BTM" />
        <img class="logo" src="@/assets/logo3.png" alt="Doctor Says" />
        <img class="logo" src="@/assets/logo4.png" alt="Desfilart" />
        <img class="logo" src="@/assets/logo4.png" alt="Teatre Bescanó" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "credits",
  data() {
    return {
      team: [
        { id: 0, name: "Marc Vila", role: "Dir & VFX Lead", img: "" },
        { id: 1, name: "Santi Cros", role: "Dir & Lead Developer", img: "" },
        { id: 2, name: "Abel Martínez", role: "VFX & Design", img: "" },
        { id: 3, name: "Adrià Crehuet", role: "Producer & Developer", img: "" },
        { id: 4, name: "Afra Ramió", role: "Sound Director", img: "" },
        { id: 5, name: "Aniol Maeso", role: "Audiovisual Director", img: "" },
        { id: 6, name: "Marta Gallego", role: "Graphic Designer", img: "" }
      ],

      mecenes: [
        { id: 0, name: "Enric Crehuet" },
        { id: 1, name: "Alfonso Ortega" },
        { id: 2, name: "Iván Cortés" },
        { id: 3, name: "Santi Ramió" },
        { id: 4, name: "Mar Palma" },
        { id: 5, name: "Aina Alsina" },
        { id: 6, name: "Adrià Solà" },
        { id: 7, name: "Carles Ponce" },
        { id: 8, name: "Ferran Crehuet" },
        { id: 9, name: "Roser Canals" },
        { id: 10, name: "Laura Amargant" },
        { id: 11, name: "Mayra Segura" },
        { id: 12, name: "Xixi Chen" },
        { id: 13, name: "David Monje" },
        { id: 14, name: "Roser Carbonell" },
        { id: 15, name: "Encarna Jiménez" },
        { id: 16, name: "Tania Tarrés" },
        { id: 17, name: "Èric Bautista" },
        { id: 18, name: "Tania Muñoz" },
        { id: 19, name: "Marc Rovira" },
        { id: 20, name: "Ariadna Gallego" },
        { id: 21, name: "Roser Juanola" },
        { id: 22, name: "Pilar Subirós" },
        { id: 23, name: "Pilar Calatayud" },
        { id: 24, name: "Enrique Cros" },
        { id: 25, name: "Marta Peiró" },
        { id: 26, name: "Joan Maeso" },
        { id: 27, name: "Jordi Cros" },
        { id: 28, name: "Mª Josefa Herrero" }
      ]
    };
  }
};
</script>

<style scoped>
* {
}
.credits {
  height: 100%;
  overflow-y: auto;
}

.flex-container::after {
  content: "";
  flex: auto;
}

.grid-container {
  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-evenly;
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
}

.paypal {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 500;
  filter: blur(0.04rem);
  opacity: 0;
}

.gracies {
  filter: blur(0.07rem);
  margin-top: 10rem;
  text-align: left;
}

h1 {
  margin-top: 5rem;
  text-align: left;
  margin-left: 11.5rem;
}

.paypal:nth-child(odd),
.logo:nth-child(odd) {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
}

.paypal:nth-child(even),
.logo:nth-child(even) {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
  animation-delay: 7s;
}

.patrocinadors {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
}

.logo {
  width: 100%;
  object-fit: contain;
  height: 8rem;
  opacity: 0%;
  filter: blur(0.04rem);
}

@keyframes color-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 90rem;
  margin: 0 auto;
}

.person {
  width: 100%;
  margin-top: 8rem;
}

.person .photo {
  width: 250px;
  height: 300px;
  margin: 0 auto;
}

.person .name {
  margin-top: -20.5rem;
  margin-left: 3.5rem;
  font-size: 2.2rem;
}

.person .role {
  margin-top: 10.5rem;
  margin-left: -16.4rem;
  font-size: 1.5rem;
  transform: rotate(-90deg);
}

.person:nth-child(even) .role {
  margin-top: 8rem;
  transform: rotate(90deg);
  margin-left: 16.4rem;
}

.person:nth-child(even) .name {
  margin-left: 0;
  margin-right: 3.5rem;
}

h2 {
  filter: blur(0.03rem);
}

@media screen and (min-width: 640px) {
  .person {
    width: 50%;
  }
  .person:nth-child(even) {
    padding-top: 8rem;
  }
}

@media screen and (max-width: 640px) {
  .paypal {
    text-align: center;
    font-size: 1rem;
  }
  .gracies {
    margin-top: 8rem;
    margin-left: 0;
    text-align: center;
  }
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 2rem;
  }

  .patrocinadors {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 1rem;
    padding: 0rem;
  }
}

@media screen and (max-width: 1200px) {
  .gracies {
    margin-top: 8rem;
    margin-left: 0;
    text-align: center;
  }
}
</style>
