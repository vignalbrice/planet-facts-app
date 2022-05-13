<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style lang="scss">
// import assets
@import url("@/assets/styles/typography.scss");
@import url("@/assets/styles/colors.scss");
@import url("@/assets/styles/main.scss");

#app {
  height: 100%;
}
</style>
