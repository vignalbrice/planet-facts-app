<script lang="ts">
import { usePlanetsStore } from "../stores/planets";
import SwitchComponent from "../components/SwitchComponent/SwitchComponent.vue";
import CardGroup from "../components/CardGroup/CardGroup.vue";
import { defineComponent, onMounted, ref, watch } from "vue";
import { useGlobalMixins } from "@/mixins/global";

const planets = usePlanetsStore();

export default defineComponent({
  name: "VenusView",
  setup() {
    const { current, firstImage, img, imgReactive, data, setCurrentData } =
      useGlobalMixins(planets.venus);
    return {
      current,
      firstImage,
      img,
      venus: data,
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
    :data="venus"
    title="Venus"
    :imgReactive="imgReactive"
    :firstImage="firstImage"
    @setCurrentData="setCurrentData"
  />
  <card-group :data="venus" />
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/colors.scss");
</style>
