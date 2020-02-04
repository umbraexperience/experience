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
        { id: 0, name: "Pol Valverde" },
        { id: 1, name: "Hans Ludwig" },
        { id: 2, name: "Terenci Corominas" },
        { id: 3, name: "David Gimbernat" },
        { id: 4, name: "Pere Puigbert" },
        { id: 5, name: "Arnau Gifreu" },
        { id: 6, name: "Jordi Caralt" },
        { id: 7, name: "Enric Crehuet" },
        { id: 8, name: "Alfonso Ortega" },
        { id: 9, name: "Iván Cortés" },
        { id: 10, name: "Santi Ramió" },
        { id: 11, name: "Mar Palma" },
        { id: 12, name: "Aina Alsina" },
        { id: 13, name: "Adrià Solà" },
        { id: 14, name: "Carles Ponce" },
        { id: 15, name: "Ferran Crehuet" },
        { id: 16, name: "Roser Canals" },
        { id: 17, name: "Laura Amargant" },
        { id: 18, name: "Mayra Segura" },
        { id: 19, name: "Xixi Chen" },
        { id: 20, name: "David Monje" },
        { id: 21, name: "Roser Carbonell" },
        { id: 22, name: "Encarna Jiménez" },
        { id: 23, name: "Tania Tarrés" },
        { id: 24, name: "Èric Bautista" },
        { id: 25, name: "Tania Muñoz" },
        { id: 26, name: "Marc Rovira" },
        { id: 27, name: "Ariadna Gallego" },
        { id: 28, name: "Roser Juanola" },
        { id: 29, name: "Pilar Subirós" },
        { id: 30, name: "Pilar Calatayud" },
        { id: 31, name: "Enrique Cros" },
        { id: 32, name: "Marta Peiró" },
        { id: 33, name: "Joan Maeso" },
        { id: 34, name: "Jordi Cros" },
        { id: 35, name: "Mª Josefa Herrero" },
        { id: 36, name: "Montse Peiró" },
        { id: 37, name: "Pau Pinós" },
        { id: 38, name: "Roser Maeso" },
        { id: 39, name: "Aina Alsina" },
        { id: 40, name: "Aida Lozano" },
        { id: 41, name: "Judith Portero" },
        { id: 42, name: "Rubén Pubill" },
        { id: 43, name: "Ona Calvo" }
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

@media screen and (min-width: 2500px) {
  .gracies {
    margin-top: 8rem;
    margin-left: 0;
    text-align: center;
  }
}
</style>
