<template>
  <div class="h-full">
    <div class="flex-col">
      <h1 class="hidden">Loading</h1>
      <div>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          class="circle"
          width="40"
          height="40"
        >
          <circle
            class="svg-circle"
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            stroke-width="6"
          />
        </svg>
        <h2>{{ $t("loading.sphereWarning") }}</h2>
      </div>
    </div>

    <div class="headphones-warning">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-headphones"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path
          d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
        ></path>
      </svg>
      <div class="headphones-text">
        <p>{{ $t("loading.bestExperience") }}</p>
        <p>{{ $t("loading.useHeadphones") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLoading",
  mounted() {}
};
</script>

<style scoped>
.circle {
  filter: blur(0.08rem);
}

.svg-circle {
  transform-origin: 50% 50%;
  animation: 2s ease-in-out infinite both dash;
}

@keyframes dash {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(0.7);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}

h2 {
  filter: blur(0.065rem);
}

h2 {
  margin-top: 0.5rem;
}
.flex-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headphones-warning {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scale(0.8);
}

.headphones-warning .headphones-text {
  filter: blur(0.07rem);
}

.headphones-warning svg {
  filter: blur(0.08rem);
}

@media screen and (min-width: 1000px) {
  .headphones-warning {
    transform: scale(1);
    margin-bottom: 2rem;
  }
}

.headphones-warning svg {
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.2rem;
}

.headphones-text p {
  margin: 0;
  margin-bottom: 0.3rem;
}
</style>
