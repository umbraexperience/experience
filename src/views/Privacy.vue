<template>
  <div class="privacy">
    <div class="container">
      <h1 class="title font-regular">
        <p v-html="$t('privacy.title')" class="title"></p>
      </h1>
      <div class="textspace">
        <div class="text font-regular">
          <p v-html="$t('privacy.description')"></p>
        </div>
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

  font-size: 1.3rem;
  text-align: left;
  line-height: 1.4rem;
  filter: blur(0.04rem);
}

.title {
  font-size: 3.15rem;
  font-weight: 500;
  text-align: left !important;

  margin-left: 0;
  color: #f5f9fb;
  filter: blur(0.07rem);
  margin: 0;
  margin-bottom: 2rem;
  padding: 0;
}

.container {
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0 1rem;
}

@media screen and (max-width: 399px) {
  .title {
    font-size: 2.2rem;
  }

  .text {
    font-size: 1.1rem;
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
