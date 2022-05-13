<script lang="ts" setup>
import { reactive, ref, onMounted, watch } from "vue";
import type Data from "@/types/data";
import type { DataImgType, DataType } from "@/types/data";
import { usePlanetsStore } from "../stores/planets";
import SwitchComponent from "../components/SwitchComponent/SwitchComponent.vue";
import CardGroup from "../components/CardGroup/CardGroup.vue";

const planets = usePlanetsStore();

const mars = reactive<Data>(planets.mars);
const current = ref<DataType>("overview");
const img = ref<DataImgType>("planet");
const imgReactive = ref<String | any>("");
const firstImage = ref("");
function setCurrentData({
  name,
  image,
}: {
  name: DataType;
  image: DataImgType;
}) {
  current.value = name;
  img.value = image;
}
onMounted(() => {
  import(`../${mars.images[img.value]}`).then((res) => {
    imgReactive.value = res.default;
    firstImage.value = res.default;
  });
});
watch(img, (oldImg) => {
  import(`../${mars.images[oldImg]}`).then((res) => {
    imgReactive.value = res.default;
  });
});
</script>

<template>
  <switch-component
    :current="current"
    :img="img"
    :data="mars"
    title="Mars"
    :imgReactive="imgReactive"
    :firstImage="firstImage"
    @setCurrentData="setCurrentData"
  />
  <card-group :data="mars" />
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/colors.scss");
</style>
