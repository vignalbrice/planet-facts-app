<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  name: "Container",
});
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
