<template>
  <div
    class="home"
    v-touch:start="startHandler"
    v-touch:touchhold="touchHoldHandler"
  >
    <div class="example h-full" ref="fullscreen">
      <transition name="fade" mode="out-in" appear>
        <PageHome
          v-if="state.screen === 'home' || state.screen === 'register'"
        ></PageHome>
        <PageLoading
          v-else-if="state.screen === 'loadingExperience'"
        ></PageLoading>
        <PageExperienceTest
          ref="experience"
          v-on:interaction-sound="playInteractionSound"
          v-on:experience-ended="endExperience()"
          v-on:experience-started="startExperience()"
          v-on:experience-paused="pauseExperience()"
          v-else-if="state.screen === 'experience'"
        ></PageExperienceTest>
        <PageExperienceEnd v-else-if="state.screen === 'experienceEnd'">
          <template v-slot:name> {{ name }}</template>
          <template v-slot:age>
            {{ age }}
          </template>
          <template v-slot:city> {{ city || "Girona" }}</template>
          <template v-slot:price>{{ (85 - 22) * 5000 }} €</template>
        </PageExperienceEnd>
      </transition>

      <transition name="fade" appear>
        <div
          class="bottom-input padding-sides"
          v-if="state.screen === 'register'"
        >
          <div class="input-group">
            <div class="input-name">
              <input
                type="text"
                :placeholder="$t('home.register.name')"
                class="font-light"
                v-model="name"
                minlength="2"
                maxlength="15"
                required
              />
            </div>
            <div class="input-year">
              <input
                type="number"
                min="13"
                max="95"
                class="font-light"
                :placeholder="$t('home.register.age')"
                v-model="age"
                required
              />
            </div>

            <div class="input-language">
              <div>
                <input
                  type="radio"
                  id="languagees"
                  name="language"
                  class="font-light"
                  value="es"
                  v-model="language"
                />
                <label for="languagees">ES</label>
              </div>

              <div class="language-right">
                <div>
                  <input
                    type="radio"
                    id="languageen"
                    name="language"
                    class="font-light"
                    value="en"
                    v-model="language"
                  />
                  <label for="languageen">EN</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Howl, Howler } from "howler";
import PageHome from "@/components/PageHome";
import PageLoading from "@/components/PageLoading";
// import PageExperience from "@/components/PageExperience";
import PageExperienceTest from "@/components/PageExperienceTest";
import PageExperienceEnd from "@/components/PageExperienceEnd";

document.oncontextmenu = function() {
  return false;
};

var soundExperienceBg = new Howl({
  src: ["sounds/experience_bg_sound.webm"],
  preload: true
});

export default {
  name: "home",
  data: function() {
    return {
      name: "Santi",
      age: "22",
      language: "en",
      state: { screen: "home" },
      holdSound: "",
      city: "",
      test: process.env
    };
  },
  components: {
    PageHome,
    PageLoading,
    // PageExperience,
    PageExperienceTest,
    PageExperienceEnd
  },

  async mounted() {
    // this.filmgrain();
    if (window.matchMedia("(orientation: portrait)").matches) {
      // you're in PORTRAIT mode
      // console.log("you're in PORTRAIT mode");
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      // you're in LANDSCAPE mode
      // console.log("you're in LANDSCAPE mode");
    }

    // https://umbraexperience.s3.eu-west-3.amazonaws.com/begining_web.mp3

    this.soundHome = await new Howl({
      src: ["sounds/begining_web.webm", "sounds/begining_web.mp3"],
      preload: true,
      autoplay: true,
      loop: true
    });
    this.soundLoading = await new Howl({
      src: ["sounds/loading_experience.webm", "sounds/loading_experience.mp3"],
      preload: true
    });
    this.holdSound = await new Howl({
      src: ["sounds/hold.webm", "sounds/hold.mp3"],
      preload: true
    });
    this.soundEnd = new Howl({
      src: ["sounds/final.webm", "sounds/final.mp3"],
      preload: true
    });

    this.soundEmpty1 = new Howl({
      src: ["sounds/empty_1.webm", "sounds/empty_1.mp3"],
      preload: true
    });
    this.soundEmpty2 = new Howl({
      src: ["sounds/empty_2.webm", "sounds/empty_2.mp3"],
      preload: true
    });
    this.soundEmpty3 = new Howl({
      src: ["sounds/empty_3.webm", "sounds/empty_3.mp3"],
      preload: true
    });
    this.soundEmpty4 = new Howl({
      src: ["sounds/empty_4.webm", "sounds/empty_4.mp3"],
      preload: true
    });

    this.soundHome.fade(0, 1, 3000);

    // Change global volume.
    // Howler.volume(0.5);
  },

  methods: {
    enterFullscreen() {
      if (document.fullscreenEnabled) {
        // console.log("You can fullscreen");

        this.$refs.fullscreen.requestFullscreen();
      }

      // this.$fullscreen.enter(this.$el.querySelector(".example"), {
      //   wrap: false,
      //   background: "#000"
      // });
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    register: function() {
      if (this.name && this.age && this.language) {
        this.$root.$i18n.locale = this.language;
        const settings = {
          captions: "true",
          language: this.$root.$i18n.locale
        };

        window.localStorage.setItem("plyr", JSON.stringify(settings));

        this.soundHome.fade(1, 0, 2000);
        // console.log("Form full");
        this.state.screen = "loadingExperience";
        setTimeout(() => {
          this.soundLoading.play();
          this.soundLoading.fade(0, 1, 2000);
        }, 500);

        this.getLocation();

        setTimeout(() => {
          this.state.screen = "experience";
        }, 7000);
      }
    },
    async getLocation() {
      try {
        const response = await this.$axios.get("https://freegeoip.app/json/");

        this.city = response.data.city;
      } catch (error) {
        // console.error(error);
      }
    },
    startHandler() {
      // console.log("started click");
    },
    touchHoldHandler() {
      // console.log("longpress");
      this.holdSound.play();

      if (this.state.screen === "home") {
        // this.enterFullscreen();
        this.state.screen = "register";
      } else if (this.state.screen === "register") {
        this.register();
      }
    },
    playInteractionSound(soundNum) {
      if (soundNum == 1) {
        // console.log("PARENT INTERACTION" + soundNum);
        this.soundEmpty1.play();
      }
      if (soundNum == 2) {
        // console.log("PARENT INTERACTION" + soundNum);
        this.soundEmpty2.play();
      }
      if (soundNum == 3) {
        // console.log("PARENT INTERACTION" + soundNum);
        this.soundEmpty3.play();
      }
      if (soundNum == 4) {
        // console.log("PARENT INTERACTION" + soundNum);
        this.soundEmpty4.play();
      }
    },
    startExperience() {
      soundExperienceBg.seek(40);
      soundExperienceBg.play();
    },
    pauseExperience() {
      soundExperienceBg.pause();
    },
    endExperience() {
      this.soundEnd.play();
      this.soundEnd.fade(0, 1, 2000);
      this.state.screen = "experienceEnd";
    },
    filmgrain() {
      var viewWidth,
        viewHeight,
        canvas = document.getElementById("canvas"),
        ctx;

      // change these settings
      var patternSize = 80,
        patternScaleX = 1,
        patternScaleY = 1,
        patternRefreshInterval = 3,
        patternAlpha = 12; // int between 0 and 255,

      var patternPixelDataLength = patternSize * patternSize * 4,
        patternCanvas,
        patternCtx,
        patternData,
        frame = 0;

      initCanvas();
      initGrain();
      requestAnimationFrame(loop);

      // create a canvas which will render the grain
      function initCanvas() {
        viewWidth = canvas.width = canvas.clientWidth;
        viewHeight = canvas.height = canvas.clientHeight;
        ctx = canvas.getContext("2d");

        ctx.scale(patternScaleX, patternScaleY);
      }

      // create a canvas which will be used as a pattern
      function initGrain() {
        patternCanvas = document.createElement("canvas");
        patternCanvas.width = patternSize;
        patternCanvas.height = patternSize;
        patternCtx = patternCanvas.getContext("2d");
        patternData = patternCtx.createImageData(patternSize, patternSize);
      }

      // put a random shade of gray into every pixel of the pattern
      function update() {
        var value;

        for (var i = 0; i < patternPixelDataLength; i += 4) {
          value = (Math.random() * 255) | 0;

          patternData.data[i] = value;
          patternData.data[i + 1] = value;
          patternData.data[i + 2] = value;
          patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
      }

      // fill the canvas using the pattern
      function draw() {
        ctx.clearRect(0, 0, viewWidth, viewHeight);

        ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
        ctx.fillRect(0, 0, viewWidth, viewHeight);
      }

      function loop() {
        if (++frame % patternRefreshInterval === 0) {
          update();
          draw();
        }

        requestAnimationFrame(loop);
      }
    }
  }
};
</script>

<style>
html,
body,
.home {
  height: 100%;
  overflow: hidden;
}
.popup-orientation {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 11;
  justify-content: center;
  align-items: center;
}
.popup-orientation p {
  filter: blur(0.06rem);
}
#canvas {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  pointer-events: none;
}

@media screen and (orientation: portrait) {
  .popup-orientation {
    display: flex;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

video:focus {
  background: transparent;
  color: transparent;
}

video {
  pointer-events: none;
}

.animation2 .letter,
.animation .letter,
.animation3 .letter {
  opacity: 0;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

a {
  text-decoration: none;
  font-size: 1.2rem;
  filter: blur(0.08rem);
  transition: filter 0.2s ease-in-out, -webkit-text-fill-color 0.4s ease-in-out;
  color: #747474;
}

@media screen and (min-width: 650px) {
  a:hover {
    filter: blur(0.55rem);
  }
}

.padding-sides {
  padding: 0 1.5rem;
}
.bottom {
  position: absolute;
  bottom: 6%;
  left: 0;
  right: 0;
}

.bottom-input {
  position: absolute;
  bottom: 18%;
  left: 0;
  right: 0;
}

@media screen and (max-width: 640px) {
  .bottom-input {
    padding: 0 25%;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  max-width: 30rem;
  filter: blur(0.07rem);
}

.input-group > div {
  margin-top: 1rem;
}

.input-group .input-name input,
.input-group .input-year input {
  padding-left: 0.8rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-left: 2px solid #999999;
  width: 100%;
}

@media screen and (min-width: 640px) {
  .bottom-input {
    bottom: 25%;
  }
  .input-group {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    max-width: 40rem;
    padding-left: 10%;
  }

  .input-group > div {
    width: 33%;
  }

  .input-group .input-name input,
  .input-group .input-year input {
    padding-top: 0rem;
    padding-bottom: 0rem;
    width: 100%;
  }
}

@media screen and (min-width: 1200px) {
  .input-group {
    padding-left: 8rem;
  }
}

input {
  background-color: transparent;
  border: transparent;
  font-size: 1.05rem;
  color: white;
  outline-color: transparent;
}

input:invalid {
  color: rgb(255, 181, 181);
  box-shadow: none;
  outline: none;
}

input::placeholder {
  color: #999999;
}

.input-group .input-name input:focus,
.input-group .input-year input:focus {
  outline: none;
  border-left: 2px solid white;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.input-language {
  display: flex;
  width: 100%;
  align-items: center;
  border-left: 2px solid #999999;
  padding-left: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

@media screen and (min-width: 640px) {
  .input-language {
    padding-top: 0;
    padding-bottom: 0;
  }
}

.input-language * {
  margin: 0;
  padding: 0;
}

.input-language > div {
  margin-top: 0.1rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.input-language > div:nth-child(2) {
  margin-left: 1.5rem;
}

.input-language input {
  display: none;
}

.input-language input:checked + label {
  color: white;
  text-shadow: 0.5px 0 0 currentColor;
}
</style>
