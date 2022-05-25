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

<style lang="scss" scoped>
.switch-button {
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 1rem 0;
  button {
    width: 100%;
    height: 48px;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border: thin solid rgba(255, 255, 255, 0.8);
    outline: none;
    margin-bottom: 1rem;
    font-family: "League Spartan", sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    text-align: left;
    transition: all ease 0.3s;
    letter-spacing: 2.57px;
    span {
      margin: 0 1.6rem;
      color: rgba(255, 255, 255, 0.7);
    }
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .active {
    background: #419ebb !important;
    border: none;
  }
}
</style>
