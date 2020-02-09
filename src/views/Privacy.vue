<template>
  <div class="privacy">
    <div class="container">
      <h1 class="title text-xl filter-xl">
        {{ $t("privacy.title") }}
      </h1>
      <div class="textspace">
        <div class="text font-regular" v-html="$t('privacy.description')"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "privacy"
};
</script>

<style scoped>
/* * {
  border: 2px solid red;
} */
.privacy {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 1rem;
}

.textspace {
  margin-right: 0;
}

.text {
  max-height: 51vh;
  overflow-y: auto;
  margin-left: 10%;
  margin-right: 10%;

  text-align: left;
  line-height: 1.4rem;
  filter: blur(0.04rem);
}

.title {
  text-align: left;
  margin-left: 0;
  color: #f5f9fb;
  margin: 0;
  margin-bottom: 2rem;
  padding: 0;
}

.container {
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0 1rem;
  margin: 0 auto;
}

@media screen and (max-width: 399px) {
  .text {
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media screen and (min-width: 640px) {
  .textspace {
    max-width: 85vw;
  }
}

@media screen and (min-width: 1200px) {
  .textspace {
    max-width: 55vw;
  }
}
</style>
