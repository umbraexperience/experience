<template>
  <div>
    <div class="container">
      <div class="explanation-text">
        <p class="text1">{{ $t("end.text1") }}</p>

        <p class="text2">{{ $t("end.text2") }}</p>

        <p class="text3">{{ $t("end.text3") }}</p>

        <p class="text4">{{ $t("end.text4") }}</p>
      </div>

      <div class="world-end">
        <div class="text-expl">
          <p class="text5 font-regular">{{ $t("end.text5") }}</p>
          <p class="text6">{{ $t("end.text6") }}</p>
        </div>
        <div class="text-options">
          <button class="font-light" @click="answered(1)">
            <p class="option1">{{ $t("end.option1") }}</p>
          </button>

          <button class="font-light" @click="answered(2)">
            <p class="option2">{{ $t("end.option2") }}</p>
          </button>
        </div>

        <div class="video-container-end">
          <video autoplay loop preload="auto" autobuffer muted>
            <source :src="mediaUrl + '/videos/worldend.mp4'" type="video/mp4" />
          </video>
        </div>

        <div class="text-container data-price">
          <p class="font-light">
            <span><slot name="name"></slot></span>
            <span>, <slot name="age"></slot>{{ $t("end.years") }}</span>
            <span>, <slot name="city"></slot></span>
          </p>
          <p class="price font-medium"><slot name="price"></slot></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaUrl: ""
    };
  },
  mounted() {
    if (process.env.VUE_APP_MEDIA === "online") {
      this.mediaUrl = process.env.VUE_APP_MEDIA_URL;
    }

    this.$anime
      .timeline()
      .add({
        begin: function(anim) {
          document.getElementsByClassName("text1")[0].style.display = "flex";
        },
        targets: ".text1",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 2000 }],
        easing: "easeInOutQuad",
        complete: function(anim) {
          document.getElementsByClassName("text1")[0].style.display = "none";
        }
      })
      .add({
        begin: function(anim) {
          document.getElementsByClassName("text2")[0].style.display = "flex";
        },
        targets: ".text2",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 4000 }],
        easing: "easeInOutQuad",
        complete: function(anim) {
          document.getElementsByClassName("text2")[0].style.display = "none";
        }
      })
      .add({
        begin: function(anim) {
          document.getElementsByClassName("text3")[0].style.display = "flex";
        },
        targets: ".text3",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 4000 }],
        easing: "easeInOutQuad",
        complete: function(anim) {
          document.getElementsByClassName("text3")[0].style.display = "none";
        }
      })
      .add({
        begin: function(anim) {
          document.getElementsByClassName("text4")[0].style.display = "flex";
        },
        targets: ".text4",
        duration: 4550,
        opacity: [{ value: 1 }, { value: 0, delay: 2000 }],
        easing: "easeInOutQuad"
      })
      .add({
        begin: function(anim) {
          document.getElementsByClassName("world-end")[0].style.display =
            "block";
        },
        targets: ".world-end",
        duration: 2550,
        opacity: 1,
        delay: 1000,
        easing: "easeInOutQuad"
      })

      .add({
        begin: function(anim) {
          document.getElementsByClassName("text5")[0].style.display = "block";
          document.getElementsByClassName("data-price")[0].style.display =
            "block";
        },
        targets: ".text5, .data-price",
        duration: 2550,
        opacity: 1,
        easing: "easeInOutQuad"
      })
      .add({
        begin: function(anim) {
          document.getElementsByClassName("text6")[0].style.display = "block";
        },
        targets: ".text6",
        duration: 2550,
        opacity: 1,
        delay: 1500,
        easing: "easeInOutQuad"
      })
      .add({
        begin: function(anim) {
          document.getElementsByClassName("option1")[0].style.display = "block";
          document.getElementsByClassName("option2")[0].style.display = "block";
        },
        targets: ".option1, .option2",
        duration: 2550,
        opacity: 1,
        easing: "easeInOutQuad"
      });
  },
  methods: {
    answered(option) {
      if (option === 1) {
        this.$anime
          .timeline()
          .add({
            targets: ".option2, .text5, .text6, .data-price",
            duration: 1500,
            opacity: 0,
            easing: "easeInOutQuad"
          })
          .add({
            targets: ".world-end",
            duration: 2800,
            delay: 1000,
            opacity: 0,
            easing: "easeInOutQuad"
          })
          .finished.then(() => {
            this.$router.push("about");
          });
      } else if (option === 2) {
        this.$anime
          .timeline()
          .add({
            targets: ".option1, .text5, .text6, .data-price",
            duration: 1500,
            opacity: 0,
            easing: "easeInOutQuad"
          })
          .add({
            targets: ".world-end",
            duration: 2800,
            delay: 1000,
            opacity: 0,
            easing: "easeInOutQuad"
          })
          .finished.then(() => {
            this.$router.push("about");
          });
      }
    }
  }
};
</script>

<style scoped>
* {
  /* border: 2px solid red; */
}

video {
  object-fit: cover;
  height: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
}

.video-container-end {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  max-width: 100vw;
  margin-top: -1rem;
}

.explanation-text p {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 85%;
  margin: 0 auto;

  line-height: 1.5rem;
  font-size: 1.1rem;
  filter: blur(0.06rem);
}

@media screen and (min-width: 640px) {
  .explanation-text p {
    max-width: 45%;
  }
}

.explanation-text .text1,
.explanation-text .text2,
.explanation-text .text3,
.explanation-text .text4,
.explanation-text .text6,
.world-end,
.world-end .text5,
.world-end .text6,
.world-end .option1,
.world-end .option2,
.world-end .data-price {
  opacity: 0;
  display: none;
}

.text-container {
  font-size: 1.3rem;
  filter: blur(0.06rem);
}

.text-container .price {
  font-size: 2.4rem;
}

.world-end {
  margin-top: 10rem;
}

.world-end .text-expl {
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  font-size: 1rem;
  filter: blur(0.06rem);
  max-width: 25rem;

  margin: 0 auto;
  line-height: 1.5rem;
}

.world-end .text-expl .text5 {
  font-size: 1.2rem;
}

.world-end .text-options {
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  filter: blur(0.06rem);
}

.world-end .text-options button {
  z-index: 10;
  font-size: 0.95rem;
  line-height: 1.4rem;
  background-color: transparent;
  border: none;
  color: white;

  opacity: 0.6;
  padding: 1rem 1rem;
  transition: opacity 1s ease-in-out;
  outline: none;
}

.world-end .text-options button:hover {
  opacity: 1;
}

@media screen and (min-width: 900px) {
  .world-end {
    margin-top: 0;
  }
  .video-container-end {
    height: 100vh;
    margin-top: 0;
  }
  .text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 1.5rem;
  }

  .world-end .text-options {
    position: absolute;
  }
  .world-end .text-options button {
    max-width: 25%;
    padding: 5rem 1rem;
  }
  video {
    height: 75%;
  }
}

.text-container p {
  margin: 0;
  margin-bottom: 0.3rem;
}
</style>
