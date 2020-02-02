<template>
  <div>
    <div class="DEBUG">
      <button @click="videoEnd()">NEXT VIDEO</button>

      <div v-if="interactionNum !== null" class="titol-interaccio">
        INTERACCIÓ {{ interactionNum }}
      </div>
    </div>

    <transition name="pause">
      <div class="pause-section" v-show="videoPaused">
        <img src="@/assets/logo.png" alt="umbra logo" />
        <h2>Experience paused</h2>
        <h3>Subtitles language</h3>
        <ul>
          <li>
            English
          </li>
          <li>
            Spanish
          </li>
          <li>
            Off
          </li>
        </ul>
      </div>
    </transition>

    <div
      class="video-container heightfull"
      v-if="this.videoPlaying !== undefined"
    >
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video6"
        :options="playerOptions"
        class="heightfull video-container"
        v-show="this.videoPlaying <= 6"
        v-if="this.videoPlaying <= 6"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video5"
        :options="playerOptions"
        class="heightfull video-container"
        v-show="this.videoPlaying <= 5"
        v-if="this.videoPlaying <= 6"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video4"
        :options="playerOptions"
        class="heightfull video-container"
        v-show="this.videoPlaying <= 4"
        v-if="this.videoPlaying <= 5"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video3"
        :options="playerOptions"
        class="heightfull video-container"
        v-show="this.videoPlaying <= 3"
        v-if="this.videoPlaying <= 4"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video2"
        :options="playerOptions"
        class="heightfull video-container"
        v-show="this.videoPlaying <= 2"
        v-if="this.videoPlaying <= 3"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video1"
        :options="playerOptions"
        class="heightfull video-container"
        v-show="this.videoPlaying === 1"
        v-if="this.videoPlaying <= 2"
      >
        <video preload="auto" class="heightfull">
          <source src="/videos/001_Video.mp4" type="video/mp4" size="1080" />
          <track
            label="English"
            kind="subtitles"
            srclang="en"
            src="/captions/video1.vtt"
          />
          <track
            label="Spanish"
            kind="subtitles"
            srclang="es"
            src="/captions/video1es.vtt"
          />
        </video>
      </vue-plyr>
    </div>

    <button @click="pauseButton()" class="interactive-circle-button">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class="circle"
        :class="{
          'circle-animation': interactionNum !== null && !videoPaused
        }"
      >
        <circle cx="50" cy="50" r="40" stroke-width="6" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoPlaying: 1,
      videoPaused: false,
      interactionNum: null,
      playerOptions: {
        controls: [""],
        captions: { active: true, language: "auto", update: false }
      }
    };
  },
  computed: {
    previousPlayer() {
      return this.$refs["video" + (this.videoPlaying - 1)].player;
    },
    currentPlayer() {
      return this.$refs["video" + this.videoPlaying].player;
    },
    nextPlayer() {
      return this.$refs["video" + (this.videoPlaying + 1)].player;
    },
    player1() {
      return this.$refs.video1.player;
    },
    player2() {
      return this.$refs.video2.player;
    }
  },
  mounted() {
    this.playVideo();

    // console.log((this.currentPlayer.language = "es"));

    this.player2.source = {
      type: "video",
      title: "Video2",
      sources: [
        {
          src: "/videos/002_Video.mp4",
          type: "video/mp4",
          size: 1080
        }
      ]
    };
  },
  methods: {
    pauseButton() {
      this.currentPlayer.togglePlay();
      this.videoPaused = true;
    },
    async playVideo() {
      try {
        await this.currentPlayer.play();
        console.log("PLAY STARTED");
      } catch (error) {
        console.log("AUTOPLAY PREVENTED", error);
      }
    },
    videoEnd() {
      if (this.videoPlaying < 6) {
        this.videoPlaying++;
        this.currentPlayer.play();
        this.previousPlayer.pause();

        this.previousPlayer.destroy();

        if (this.videoPlaying < 6) {
          console.log("loading video" + (this.videoPlaying + 1));
          this.nextPlayer.source = {
            type: "video",
            title: "Video" + (this.videoPlaying + 1),
            sources: [
              {
                src: "/videos/00" + (this.videoPlaying + 1) + "_Video.mp4",
                type: "video/mp4",
                size: 1080
              }
            ]
          };
        }
      } else if (this.videoPlaying === 6) {
        this.currentPlayer.pause();
        this.currentPlayer.destroy();
        this.videoPlaying++;
        setTimeout(() => {
          this.$emit("experience-ended");
        }, 100);
      }
    },
    finish() {}
  }
};
</script>

<style>
.DEBUG {
  position: fixed;
  z-index: 2;
}
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.hide {
  display: none;
}

.pause-section {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 10;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pause-section img {
  max-width: 15rem;
  opacity: 0.9;
}
.pause-section ul {
  padding: 0;
  margin: 0;
  display: flex;
}
.pause-section li {
  list-style-type: none;
  padding: 0;

  margin: 0 1rem;
}

.heightfull {
  height: 100%;
}
.plyr {
  height: 100%;
}
.plyr__captions {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
  padding: 20px !important;
  transform: translateY(-35px) !important;
}

.plyr__captions .plyr__caption {
  background: transparent !important;
  filter: blur(0.04rem);
}
.plyr__video-wrapper {
  height: 100%;
}
.plyr video {
  height: 100% !important;
  object-fit: cover;
}

.interactive-circle-button {
  outline: none;
  border: none;
  margin: 0;
  padding: 0px;
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  z-index: 50;
  background-color: transparent;
  transform: scale(1);
  transition: transform 0.35s ease-in-out;

  filter: blur(0.08rem);
  margin: 0 auto;
}

.interactive-circle-button:hover {
  transform: scale(1.2);
}
.interactive-circle-button .circle {
  stroke: white;
  fill: white;
  fill-opacity: 0;
}
.interactive-circle-button .circle:hover {
  fill-opacity: 1;
}

.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.6s;
}
.fade-overlay-enter,
.fade-overlay-leave-to {
  opacity: 0;
}

.interactive-circle-button .circle.circle-animation {
  transform-origin: 50% 50%;
  animation: 2s ease-in-out infinite both dash;
}

@keyframes dash {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1);
  }
}

.pause-enter-active,
.pause-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.pause-enter, .pause-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
