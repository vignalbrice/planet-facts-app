<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwitchButton",
  props: {
    current: {
      type: String,
      required: true,
      default: "overview",
    },
  },
});
</script>

<template>
  <div class="switch-button">
    <button
      @click="$emit('setCurrentData', 'overview', 'planet')"
      :class="current === 'overview' && 'active'"
    >
      <span class="digits">01</span>Overview
    </button>
    <button
      @click="$emit('setCurrentData', 'structure', 'internal')"
      :class="current === 'structure' && 'active'"
    >
      <span class="digits">02</span>Internal Structure
    </button>
    <button
      @click="$emit('setCurrentData', 'geology', 'geology')"
      :class="current === 'geology' && 'active'"
    >
      <span class="digits">03</span>Surface Geology
    </button>
  </div>
</template>

<style></style>
