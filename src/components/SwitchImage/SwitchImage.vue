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
</style>
