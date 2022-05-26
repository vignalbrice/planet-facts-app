<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwitchImage",
  props: {
    img: {
      type: String,
      required: true,
    },
    imgReactive: {
      type: String,
      required: true,
    },
    firstImage: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <section>
    <div v-if="img === 'geology'" class="geology-container">
      <img :src="firstImage" />
      <img :src="imgReactive" class="geology-img" />
    </div>
    <img :src="imgReactive" v-else />
  </section>
</template>

<style lang="scss" scoped>
.geology-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .geology-img {
    position: absolute;
    bottom: 0px;
    width: 163px !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  section {
    height: 400px;
    img {
      max-width: 200px !important;
    }
  }
}
@media screen and (max-width: 767px) {
  section {
    height: 350px;
    img {
      max-width: 111px !important;
    }
  }
}
</style>
