<script lang="ts">
import { defineComponent } from "vue";
import { usePlanetsStore } from "../stores/planets";
import SwitchComponent from "../components/SwitchComponent/SwitchComponent.vue";
import CardGroup from "../components/CardGroup/CardGroup.vue";
import { useGlobalMixins } from "@/mixins/global";

const planets = usePlanetsStore();

export default defineComponent({
  name: "UranusView",
  setup() {
    const { current, firstImage, img, imgReactive, data, setCurrentData } =
      useGlobalMixins(planets.uranus);
    return {
      current,
      firstImage,
      img,
      urnaus: data,
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
    :data="urnaus"
    title="Urnaus"
    :imgReactive="imgReactive"
    :firstImage="firstImage"
    @setCurrentData="setCurrentData"
  />
  <card-group :data="urnaus" />
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/colors.scss");
</style>
