<script lang="ts">
import { defineComponent } from "vue";
import { usePlanetsStore } from "../stores/planets";
import SwitchComponent from "../components/SwitchComponent/SwitchComponent.vue";
import CardGroup from "../components/CardGroup/CardGroup.vue";
import useGlobalMixins from "@/mixins/global";

const planets = usePlanetsStore();

export default defineComponent({
  name: "NeptuneView",
  setup() {
    const { current, firstImage, img, imgReactive, data, setCurrentData } =
      useGlobalMixins(planets.neptune);
    return {
      current,
      firstImage,
      img,
      neptune: data,
      imgReactive,
      setCurrentData,
    };
  },
  components: { SwitchComponent, CardGroup },
});
</script>

<template>
  <switch-component
    :current="current"
    :img="img"
    :data="neptune"
    title="Neptune"
    :imgReactive="imgReactive"
    :firstImage="firstImage"
    @setCurrentData="setCurrentData"
  />
  <card-group :data="neptune" />
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/colors.scss");
</style>
