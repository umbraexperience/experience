<template>
  <div>
    <div v-if="interaction1" class="titol-interaccio">
      INTERACCIÓ 1
    </div>

    <div v-else-if="interaction2" class="titol-interaccio">
      INTERACCIÓ 2
    </div>
    <div v-else-if="interaction3" class="titol-interaccio">
      INTERACCIÓ 3
    </div>
    <div v-else-if="interaction4" class="titol-interaccio">
      INTERACCIÓ 2
    </div>

    <div class="video-container" :class="{ paused: pausedVideo }">
      <vue-plyr
        ref="video6"
        :options="{
          controls: [''],
          clickToPlay: false,
          fullscreen: { enabled: false }
        }"
        class="full-video"
        :class="{ hide: videoPlaying !== 6 }"
      >
        <video preload="auto">
          <source
            src="@/assets/videos/006_Video.mp4"
            type="video/mp4"
            size="1080"
          />
        </video>
      </vue-plyr>
      <vue-plyr
        ref="video5"
        v-on:ended="ended()"
        :options="{
          controls: [''],
          clickToPlay: false,
          fullscreen: { enabled: false }
        }"
        class="full-video"
        :class="{ hide: videoPlaying !== 5 }"
      >
        <video preload="auto">
          <source
            src="@/assets/videos/005_Video.mp4"
            type="video/mp4"
            size="1080"
          />
        </video>
      </vue-plyr>
      <vue-plyr
        ref="video4"
        v-on:ended="ended()"
        :options="{
          controls: [''],
          clickToPlay: false,
          fullscreen: { enabled: false }
        }"
        class="full-video"
        :class="{ hide: videoPlaying !== 4 }"
      >
        <video preload="auto">
          <source
            src="@/assets/videos/004_Video.mp4"
            type="video/mp4"
            size="1080"
          />
        </video>
      </vue-plyr>

      <vue-plyr
        ref="video3"
        v-on:ended="ended()"
        :options="{
          controls: [''],
          clickToPlay: false,
          fullscreen: { enabled: false }
        }"
        class="full-video"
        :class="{ hide: videoPlaying !== 3 }"
      >
        <video preload="auto">
          <source
            src="@/assets/videos/003_Video.mp4"
            type="video/mp4"
            size="1080"
          />
        </video>
      </vue-plyr>

      <vue-plyr
        ref="video2"
        v-on:ended="ended()"
        :options="{
          controls: [''],
          clickToPlay: false,
          fullscreen: { enabled: false }
        }"
        class="full-video"
        :class="{ hide: videoPlaying !== 2 }"
      >
        <video preload="auto">
          <source
            src="@/assets/videos/002_Video.mp4"
            type="video/mp4"
            size="1080"
          />
        </video>
      </vue-plyr>

      <vue-plyr
        v-on:ended="ended()"
        v-on:timeupdate="timeupdate()"
        ref="video1"
        :options="{
          clickToPlay: false,

          fullscreen: { enabled: false }
        }"
        class="full-video"
        :class="{ hide: videoPlaying !== 1 }"
      >
        <video preload="auto">
          <source
            src="@/assets/videos/001_Video.mp4"
            type="video/mp4"
            size="1080"
          />
        </video>
      </vue-plyr>
    </div>
    <button @click="togglePlayPause()" class="interactive-circle-button">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class="circle"
      >
        <circle cx="50" cy="50" r="40" stroke-width="6" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PageExperience",
  data: function() {
    return {
      pausedVideo: false,
      videoPlaying: 1,
      seeked: "",
      interaction1: false,
      interaction2: false,
      interaction3: false,
      interaction4: false,
      interaction5: false,
      interaction6: false,
      interaction7: false
    };
  },
  mounted() {
    this.videoCurrent.play();
    console.log(this.videoCurrent);
  },
  computed: {
    videoCurrent() {
      return this.$refs["video" + this.videoPlaying].player;
    },
    videoNext() {
      return this.$refs["video" + (this.videoPlaying + 1)].player;
    }
  },
  methods: {
    ended() {
      console.log("ended");
      this.videoCurrent.stop();
      this.videoCurrent.destroy();

      this.seeked = this.videoNext.buffered;

      this.hideVideo1 = true;

      this.videoNext.play();
      this.videoPlaying++;

      if (this.videoPlaying === 2) {
        this.interaction2 = true;
      } else if (this.videoPlaying === 4) {
        this.interaction2 = false;
        this.interaction3 = true;
      }
    },

    togglePlayPause() {
      if (!this.videoCurrent.ended) {
        // console.log("PAUSE");
        // console.log(this.videoPlaying);
        // console.log(this.videoCurrent.paused);
        this.videoCurrent.togglePlay();
        if (this.videoCurrent.paused) {
          this.pausedVideo = true;
        } else {
          this.pausedVideo = false;
        }
      }
    },
    timeupdate() {
      // console.log(this.$refs.video1.player.currentTime);
      if (
        this.$refs.video1.player.currentTime >= 35 &&
        this.$refs.video1.player.currentTime < 50
      ) {
        console.log("INTERACCIÓ 1");
        this.interaction1 = true;
      } else {
        this.interaction1 = false;
      }
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

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.plyr__video-wrapper video {
  min-height: 100vh;
  width: 100%;
  object-fit: cover;
}

.video-container {
  transition: opacity 0.2s ease-in-out;
}

/*
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
} */

.paused {
  opacity: 0.15;
}

.interactive-circle-button {
  border: none;
  margin: 0;
  padding: 0px;
  position: absolute;
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
</style>
