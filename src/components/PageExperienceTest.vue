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
        <h2>{{ $t("experience.pauseMenu.title") }}</h2>
        <h3>{{ $t("experience.pauseMenu.languagesTitle") }}</h3>

        <ul>
          <li>
            {{ $t("languageNames.english") }}
          </li>
          <li>
            {{ $t("languageNames.spanish") }}
          </li>
          <li>
            {{ $t("experience.pauseMenu.off") }}
          </li>
        </ul>

        <p>{{ $t("experience.pauseMenu.circleAdvice") }}</p>
      </div>
    </transition>

    <div class="interaction1-zone" v-if="interactionNum === 1">
      <div @mouseover="mousePosition(1)"></div>
      <div @mouseover="mousePosition(2)"></div>
      <div @mouseover="mousePosition(3)"></div>
      <div @mouseover="mousePosition(4)"></div>
    </div>

    <div class="interaction2-zone" v-if="interactionNum === 2">
      <div
        @mouseover="showVideo2Overlay = true"
        @mouseout="showVideo2Overlay = false"
      ></div>
    </div>

    <div class="interaction3-zone" v-if="interactionNum === 3">
      <div @mousemove="verticalScroll('up')">ZONE 1 UP</div>
      <div @mousemove="verticalScroll('down')">ZONE 3 DOWN</div>
    </div>

    <div class="interaction4-zone" v-if="interactionNum === 4">
      <div @mousemove="horizontalScroll('left')">LEFT</div>
      <div @mousemove="horizontalScroll('right')">RIGHT</div>
    </div>

    <div class="explanation-interaction">
      <transition name="fade-overlay">
        <p v-if="intExplanationNum !== null">
          {{
            $t(
              "experience.interactionExplanations.int" + this.intExplanationNum
            )
          }}
        </p>
      </transition>
    </div>

    <div
      class="video-container heightfull"
      v-if="this.videoPlaying !== undefined"
    >
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        @timeupdate="timeCheck(6)"
        ref="video6"
        :options="playerOptions"
        class="heightfull video-container normal-video-size"
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
        class="video5 heightfull video-container"
        v-show="this.videoPlaying <= 5"
        v-if="this.videoPlaying <= 6"
        id="video5"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        @timeupdate="timeCheck(4)"
        ref="video4"
        :options="playerOptions"
        class="video4 heightfull video-container"
        v-show="this.videoPlaying <= 4"
        v-if="this.videoPlaying <= 5"
        id="video4"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video3"
        :options="playerOptions"
        class="heightfull video-container normal-video-size"
        v-show="this.videoPlaying <= 3"
        v-if="this.videoPlaying <= 4"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>

      <transition name="fade-overlay">
        <vue-plyr
          ref="video2_2"
          :options="playerOptions"
          class="video2_2 heightfull video-container normal-video-size"
          muted
          v-if="this.videoPlaying <= 3"
          v-show="showVideo2Overlay === true"
        >
          <video preload="auto" class="heightfull"></video>
        </vue-plyr>
      </transition>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        ref="video2"
        :options="playerOptions"
        class="heightfull video-container normal-video-size"
        v-show="this.videoPlaying <= 2"
        v-if="this.videoPlaying <= 3"
      >
        <video preload="auto" class="heightfull"></video>
      </vue-plyr>
      <vue-plyr
        @ended="videoEnd()"
        @play="videoPaused = false"
        @timeupdate="timeCheck(1)"
        ref="video1"
        :options="playerOptions"
        class="heightfull video-container normal-video-size"
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

    <div class="bottom-circle-container">
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
  </div>
</template>

<script>
var isScrolling = false;
export default {
  data() {
    return {
      videoPlaying: 1,
      videoPaused: false,
      interactionNum: null,
      intExplanationNum: null,
      showVideo2Overlay: false,
      playerOptions: {
        controls: [""],
        captions: {
          active: true,
          language: this.$root.$i18n.locale,
          update: false
        }
      },
      mediaUrl: ""
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
    },
    player2Overlay() {
      return this.$refs.video2_2.player;
    }
  },
  mounted() {
    this.playVideo();

    // console.log((this.currentPlayer.language = "es"));

    // /videos/002_Video.mp4
    // https://umbraexperience.s3.eu-west-3.amazonaws.com/videos/002_Video.mp4

    if (process.env.VUE_APP_MEDIA === "online") {
      this.mediaUrl = process.env.VUE_APP_MEDIA_URL;
    }

    this.player2.source = {
      type: "video",
      title: "Video2",
      sources: [
        {
          src: this.mediaUrl + "/videos/002_Video.mp4",
          type: "video/mp4",
          size: 1080
        }
      ]
    };

    this.player2Overlay.source = {
      type: "video",
      title: "Video2",
      sources: [
        {
          src: this.mediaUrl + "/videos/002_Video_2.mp4",
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
        // console.log("PLAY STARTED");
      } catch (error) {
        // console.log("AUTOPLAY PREVENTED", error);
        // this.videoPaused = true;
      }
    },
    videoEnd() {
      this.interactionNum = null;
      if (this.videoPlaying < 6) {
        this.videoPlaying++;
        this.currentPlayer.play();
        this.previousPlayer.pause();

        this.previousPlayer.destroy();

        if (this.videoPlaying === 2) {
          this.interactionNum = 2;
          this.intExplanationNum = 2;

          setTimeout(() => {
            this.intExplanationNum = null;
          }, 5000);
        } else if (this.videoPlaying === 3) {
          this.$refs.video2_2.player.destroy();
        } else if (this.videoPlaying === 4) {
          const video4Height = document
            .getElementById("video4")
            .getElementsByTagName("video")[0].scrollHeight;

          const containerHeight = document.getElementById("video4")
            .scrollHeight;

          document
            .getElementById("video4")
            .getElementsByTagName("video")[0].style.transform =
            "translateY(" + -(video4Height - containerHeight) / 2 + "px)";
        } else if (this.videoPlaying === 5) {
          const video5Width = document
            .getElementById("video5")
            .getElementsByTagName("video")[0].scrollWidth;

          const containerWidth = document.getElementById("video5").scrollWidth;

          document
            .getElementById("video5")
            .getElementsByTagName("video")[0].style.transform =
            "translateX(" + -(video5Width - containerWidth) / 2 + "px)";
          this.interactionNum = 4;

          this.intExplanationNum = 4;

          setTimeout(() => {
            this.intExplanationNum = null;
          }, 5000);
        }

        if (this.videoPlaying < 6) {
          // console.log("loading video" + (this.videoPlaying + 1));
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
    timeCheck(video) {
      // console.log("timecheck", video);
      if (
        video === 1 &&
        this.currentPlayer.currentTime >= 46 &&
        this.currentPlayer.currentTime <= 50.5
      ) {
        this.interactionNum = 1;
        this.intExplanationNum = 1;
        if (this.currentPlayer.currentTime > 49) {
          this.intExplanationNum = null;
        }
      } else if (video === 4 && this.currentPlayer.currentTime <= 9) {
        this.interactionNum = 3;
        this.intExplanationNum = 3;

        if (this.currentPlayer.currentTime > 5) {
          this.intExplanationNum = null;
        }
      } else if (
        video === 6 &&
        this.currentPlayer.currentTime >= 19 &&
        this.currentPlayer.currentTime <= 23
      ) {
        this.interactionNum = 5;
      } else if (
        video === 6 &&
        this.currentPlayer.currentTime >= 54 &&
        this.currentPlayer.currentTime <= 67
      ) {
        this.interactionNum = 6;
      } else {
        this.interactionNum = null;
        this.intExplanationNum = null;
      }
    },
    mousePosition(soundNum) {
      // console.log("PLAY SOUND", soundNum);
      this.$emit("interaction-sound", soundNum);
    },
    verticalScroll(position) {
      if (isScrolling === false) {
        const video4Height = document
          .getElementById("video4")
          .getElementsByTagName("video")[0].scrollHeight;

        const containerHeight = document.getElementById("video4").scrollHeight;

        if (position == "up") {
          // console.log("SCROLL TO TOP");
          isScrolling = true;
          this.$anime({
            targets: ".video4 video",
            translateY: 0,
            duration: 3550,
            easing: "easeInOutQuad"
          }).finished.then(function() {
            isScrolling = false;
          });
        } else if (position == "down") {
          // console.log("SCROLL TO BOTTOM");
          isScrolling = true;
          this.$anime({
            targets: ".video4 video",
            translateY: -(video4Height - containerHeight),
            duration: 3550,
            easing: "easeInOutQuad"
          }).finished.then(function() {
            isScrolling = false;
          });
        }
      }
    },
    horizontalScroll(position) {
      const video5Width = document
        .getElementById("video5")
        .getElementsByTagName("video")[0].scrollWidth;

      const containerWidth = document.getElementById("video5").scrollWidth;
      if (isScrolling === false) {
        if (position == "left") {
          // console.log("SCROLL TO LEFT");
          isScrolling = true;
          this.$anime({
            targets: ".video5 video",
            translateX: 0,
            duration: 3550,
            easing: "easeInOutQuad"
          }).finished.then(function() {
            isScrolling = false;
          });
        } else if (position == "right") {
          // console.log("SCROLL TO RIGHT");
          isScrolling = true;
          this.$anime({
            targets: ".video5 video",
            translateX: -(video5Width - containerWidth),
            duration: 3550,
            easing: "easeInOutQuad"
          }).finished.then(function() {
            isScrolling = false;
          });
        }
      }
    }
  }
};
</script>

<style>
.DEBUG {
  position: fixed;
  z-index: 7;
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
  filter: blur(0.05rem);
}

.pause-section li:hover {
  filter: blur(0.08rem);
}

.pause-section p {
  filter: blur(0.06rem);
  margin-top:1rem;
}

.pause-section h2 {
  filter: blur(0.06rem);
  margin-top:1rem;
}

.pause-section h3 {
  filter: blur(0.06rem);
  
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
  width: 100%;
  min-height: 100%;
}

.video2_2 {
  z-index: 2;
}

.video5 .plyr video {
  min-height: 100%;
  width: auto;
}

.normal-video-size .plyr video {
  object-fit: cover;
}

.bottom-circle-container {
  width: 100%;
  height: 2.2rem;
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  z-index: 50;
}

.interactive-circle-button {
  outline: none;
  border: none;
  margin: 0;
  padding: 0px;
  background-color: transparent;
}

.interactive-circle-button .circle {
  width: 2.2rem;
  height: 2.2rem;
  transition: transform 0.35s ease-in-out;
  filter: blur(0.08rem);
  stroke: white;
  fill: white;
  fill-opacity: 0;
  transform-origin: 50% 50%;
}
.interactive-circle-button:hover .circle {
  transform: scale(1.3);
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

.explanation-interaction {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  display: flex;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.explanation-interaction p {
  filter: blur(0.065rem);
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.interaction1-zone,
.interaction2-zone,
.interaction3-zone,
.interaction4-zone {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100%;
  display: flex;
  z-index: 6;
}

.interaction1-zone {
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
  align-items: center;
  justify-content: flex-end;
}

.interaction2-zone div {
  margin-right: 5%;
  width: 30%;
  height: 55%;
  /* background-color: red; */
  opacity: 0.6;
}

.interaction3-zone,
.interaction4-zone {
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
  /* background-color: red; */
}

.pause-enter-active,
.pause-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.pause-enter, .pause-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
