<template>
  <div>
    <div class="DEBUG">
      <p>Video playing: {{ this.videoPlaying }}</p>
      <p>Seeked of next video: {{ this.seeked }}</p>
      <button @click="ended()">NEXT VIDEO</button>

      <div v-if="interaction1" class="titol-interaccio">
        INTERACCIÓ 1
      </div>

      <div v-else-if="interaction2" class="titol-interaccio">
        INTERACCIÓ 2
      </div>
      <div v-else-if="interaction3" class="titol-interaccio">
        INTERACCIÓ 3
        <button @click="this.scrollToTop" class="button-1">Anar a dalt</button>
        <button @click="this.scrollToMiddle" class="button-2">
          Anar al mig
        </button>
        <button @click="this.scrollToBottom" class="button-3">
          Anar a baix
        </button>
      </div>
      <div v-else-if="interaction4" class="titol-interaccio">
        INTERACCIÓ 4
      </div>
      <div v-else-if="interaction5" class="titol-interaccio">
        INTERACCIÓ 5
      </div>
      <div v-else-if="interaction6" class="titol-interaccio">
        INTERACCIÓ 6
      </div>
      <div v-else-if="interaction7" class="titol-interaccio">
        INTERACCIÓ 7
      </div>
    </div>

    <div class="interaction1-zone" v-if="interaction1">
      <div @mouseover="mousePosition(1)"></div>
      <div @mouseover="mousePosition(2)"></div>
      <div @mouseover="mousePosition(3)"></div>
      <div @mouseover="mousePosition(4)"></div>
    </div>

    <div class="interaction2-zone" v-if="interaction2">
      <div
        @mouseover="showVideo2Overlay = true"
        @mouseout="showVideo2Overlay = false"
      ></div>
    </div>

    <div class="interaction3-zone" v-if="interaction3">
      <div @mouseover="this.scrollToTop">ZONE 1 UP</div>
      <!-- <div @mouseover="this.scrollToMiddle">ZONE 2 MIDDLE</div> -->
      <div @mouseover="this.scrollToBottom">ZONE 3 DOWN</div>
    </div>

    <div class="interaction4-zone" v-if="interaction4">
      <div @mouseover="scrollToLeft()">LEFT</div>
      <div @mouseover="scrollToRigth()">RIGHT</div>
    </div>

    <div class="video-container" :class="{ paused: pausedVideo }">
      <video
        ref="video1"
        class="video-normal-size"
        @timeupdate="timeupdate()"
        @ended="ended()"
        preload="auto"
        :class="{ hide: videoPlaying !== 1 }"
      >
        <source src="" type="video/mp4" size="1080" />
        <track
          label="English"
          kind="subtitles"
          srclang="en"
          src="captions/video1.vtt"
          default
        />
      </video>

      <transition name="fade-overlay">
        <video
          ref="video2_2"
          class="video-normal-size video2 video2_2"
          preload="auto"
          muted
          :class="{ hide: videoPlaying !== 2 }"
          v-show="showVideo2Overlay === true"
        >
          <source src="" type="video/mp4" size="1080" />
        </video>
      </transition>

      <video
        ref="video2"
        class="video-normal-size video2"
        @ended="ended()"
        preload="auto"
        :class="{ hide: videoPlaying !== 2 }"
      >
        <source src="" type="video/mp4" size="1080" />
      </video>

      <video
        ref="video3"
        class="video-normal-size"
        @ended="ended()"
        preload="auto"
        :class="{ hide: videoPlaying !== 3 }"
      >
        <source src="" type="video/mp4" size="1080" />
      </video>

      <video
        ref="video4"
        @timeupdate="timeupdate()"
        @ended="ended()"
        preload="auto"
        :class="{ hide: videoPlaying !== 4 }"
      >
        <source src="" type="video/mp4" size="1080" />
      </video>

      <video
        ref="video5"
        class="video-pano"
        @ended="ended()"
        preload="auto"
        :class="{ hide: videoPlaying !== 5 }"
      >
        <source src="" type="video/mp4" size="1080" />
      </video>
      <video
        ref="video6"
        class="video-normal-size"
        @ended="ended()"
        preload="auto"
        :class="{ hide: videoPlaying !== 6 }"
      >
        <source src="" type="video/mp4" size="1080" />
      </video>
    </div>

    <button @click="togglePlayPause()" class="interactive-circle-button">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class="circle"
        :class="{
          'circle-animation':
            (interaction1 && !pausedVideo) ||
            (interaction2 && !pausedVideo) ||
            (interaction3 && !pausedVideo) ||
            (interaction4 && !pausedVideo) ||
            (interaction5 && !pausedVideo) ||
            (interaction6 && !pausedVideo) ||
            (interaction7 && !pausedVideo)
        }"
      >
        <circle cx="50" cy="50" r="40" stroke-width="6" />
      </svg>
    </button>
  </div>
</template>

<script>
var isScrolling = false;

export default {
  name: "PageExperience",
  data: function() {
    return {
      pausedVideo: false,
      videoPlaying: 1,
      seeked: "",
      interaction1: false,
      interaction2: false,
      showVideo2Overlay: false,
      interaction3: false,
      interaction4: false,
      interaction5: false,
      interaction6: false,
      interaction7: false
    };
  },
  mounted() {
    this.videoCurrent.src = "videos/00" + this.videoPlaying + "_Video.mp4";
    this.videoCurrent.load();
    this.videoCurrent.play();

    this.videoNext.src = "videos/00" + (this.videoPlaying + 1) + "_Video.mp4";
    this.videoNext.load();

    this.video2Overlay.src = "videos/002_Video_2.mp4";
  },
  computed: {
    videoCurrent() {
      return this.$refs["video" + this.videoPlaying];
    },
    videoNext() {
      return this.$refs["video" + (this.videoPlaying + 1)];
    },
    video2Overlay() {
      return this.$refs.video2_2;
    }
  },
  methods: {
    ended() {
      this.videoCurrent.pause();
      this.videoCurrent.removeAttribute("src");
      this.videoCurrent.load();

      if (this.videoPlaying === 2) {
        this.video2Overlay.removeAttribute("src");
        this.video2Overlay.load();
      }

      if (this.videoPlaying < 6) {
        this.videoPlaying++;
        this.seeked = this.videoCurrent.buffered;
        this.videoCurrent.play();
        if (this.videoPlaying === 2) {
          this.video2Overlay.play();
        }

        if (this.videoPlaying === 2) {
          this.interaction2 = true;
        } else if (this.videoPlaying === 3) {
          this.interaction2 = false;
        } else if (this.videoPlaying === 4) {
          setTimeout(() => {
            this.scrollToMiddle();
          });
        } else if (this.videoPlaying === 5) {
          this.interaction4 = true;
          setTimeout(() => {
            this.scrollToCenter();
          });
        } else if (this.videoPlaying === 6) {
          this.interaction4 = false;
        }

        if (this.videoPlaying < 6) {
          this.videoNext.src =
            "videos/00" + (this.videoPlaying + 1) + "_Video.mp4";
          this.videoNext.load();
        }
      } else if (this.videoPlaying === 6) {
        // console.log("EXPERIENCE ENDED");
        this.$emit("experience-ended");
      }
    },

    togglePlayPause() {
      if (!this.videoCurrent.ended) {
        // console.log("PAUSE");
        // console.log(this.videoPlaying);
        // console.log(this.videoCurrent.paused);

        if (this.videoCurrent.paused) {
          this.pausedVideo = false;
          this.videoCurrent.play();
        } else {
          this.pausedVideo = true;
          this.videoCurrent.pause();
        }
      }
    },
    timeupdate() {
      // console.log(this.$refs.video1.player.currentTime);
      if (
        this.videoPlaying === 1 &&
        this.$refs.video1.currentTime >= 46 &&
        this.$refs.video1.currentTime <= 50.5
      ) {
        // console.log("INTERACCIÓ 1");
        this.interaction1 = true;
      } else {
        this.interaction1 = false;
      }

      if (
        this.videoPlaying === 4 &&
        this.$refs.video4.currentTime >= 1.2 &&
        this.$refs.video4.currentTime <= 10
      ) {
        this.interaction3 = true;
      } else {
        this.interaction3 = false;
      }
    },

    timeupdate6() {
      if (
        this.videoPlaying == 6 &&
        this.$refs.video6.player.currentTime >= 19 &&
        this.$refs.video6.player.currentTime <= 23
      ) {
        // console.log("INTERACCIÓ 5");
        this.interaction5 = true;
      } else if (
        this.videoPlaying == 6 &&
        this.$refs.video6.player.currentTime >= 54 &&
        this.$refs.video6.player.currentTime <= 67
      ) {
        // console.log("INTERACCIÓ 6");
        this.interaction5 = false;
        this.interaction6 = true;
      } else {
        this.interaction5 = false;
        this.interaction6 = false;
      }
    },
    mousePosition(soundNum) {
      this.$emit("my-event", soundNum);
    },
    scrollToMiddleLoad() {
      window.scrollTo({
        top: 800
      });
    },
    scrollToTop() {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      if (isScrolling === false) {
        isScrolling = true;
        this.$anime({
          targets: scrollElement,
          scrollTop: 0,
          duration: 2550,
          easing: "easeInOutQuad"
        }).finished.then(function() {
          isScrolling = false;
        });
      }
    },

    scrollToMiddle() {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      this.$anime({
        targets: scrollElement,
        scrollTop:
          window.document.scrollingElement.scrollHeight / 3 ||
          window.document.documentElement.scrollHeight / 3,
        duration: 1,
        easing: "easeInOutQuad"
      });
    },

    scrollToBottom() {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      if (isScrolling === false) {
        isScrolling = true;
        this.$anime({
          targets: scrollElement,
          scrollTop:
            (window.document.scrollingElement.scrollHeight * 2) / 3 ||
            (window.document.documentElement.scrollHeight * 2) / 3,
          duration: 2550,
          easing: "easeInOutQuad"
        }).finished.then(function() {
          isScrolling = false;
        });
      }
    },
    scrollToLeft() {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      // console.log(scrollElement.scrollWidth);

      this.$anime({
        targets: scrollElement,
        scrollLeft: (-scrollElement.scrollWidth * 2) / 3,
        duration: 5500,
        easing: "easeInOutQuad"
      });
    },
    scrollToCenter() {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      // console.log(scrollElement.scrollWidth);

      this.$anime({
        targets: scrollElement,
        scrollLeft: scrollElement.scrollWidth / 4,
        duration: 1,
        easing: "easeInOutQuad"
      });
    },
    scrollToRigth() {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      // console.log(scrollElement.scrollWidth);

      this.$anime({
        targets: scrollElement,
        scrollLeft: (scrollElement.scrollWidth * 2) / 3,
        duration: 5500,
        easing: "easeInOutQuad"
      });
    }
  }
};
</script>

<style scoped>
.relative {
  position: relative;
}

.hide {
  display: none;
}

.DEBUG {
  position: fixed;
}

.video-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: opacity 0.2s ease-in-out;
}

.paused {
  opacity: 0.15;
}

video {
  width: 100%;
}

video::cue {
  font-size: 1.3rem;
  background-color: rgba(0, 0, 0, 0) !important;
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 400;
  color: #b4b4b4;
}

video::-webkit-media-text-track-display-backdrop {
  background-color: rgba(0, 0, 0, 0) !important;
}

/* video::cue {
  background: transparent;
}

video::-webkit-media-text-track-display {
  background: transparent;
} */

.video-normal-size {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-pano {
  height: 100%;
  width: auto;
}

.video2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.video2_2 {
  z-index: 2;
}

.interaction1-zone {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.interaction1-zone div {
  width: 48%;
  height: 48%;
  /* background-color: red; */
}

.interaction1-zone div:nth-child(3),
.interaction1-zone div:nth-child(4) {
  margin-top: 2%;
}

.interaction2-zone {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.interaction2-zone div {
  margin-right: 5%;
  width: 30%;
  height: 55%;
  /* background-color: red; */
}

.interaction3-zone,
.interaction4-zone {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
}

.interaction3-zone {
  flex-direction: column;
}

.interaction3-zone div {
  width: 100%;
  height: 25%;
  /* background-color: red; */
}

.interaction4-zone div {
  width: 25%;
  height: 100%;
  background-color: red;
}

.paused {
  opacity: 0.15;
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
</style>
