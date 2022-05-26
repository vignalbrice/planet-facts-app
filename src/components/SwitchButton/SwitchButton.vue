<script lang="ts">
import useMedia from "@/hooks/useMedia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwitchButton",
  props: {
    current: {
      type: String,
      required: true,
      default: "overview",
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup() {
    const media = useMedia();
    return {
      media,
    };
  },
});
</script>

<template>
  <div class="switch-mobile" v-if="media.isMobile">
    <button @click="$emit('setCurrentData', 'overview', 'planet')">
      Overview
      <span
        class="border-active"
        :style="{
          backgroundColor: current === 'overview' ? color : 'transparent',
        }"
      ></span>
    </button>
    <button @click="$emit('setCurrentData', 'structure', 'internal')">
      Internal
      <span
        class="border-active"
        :style="{
          backgroundColor: current === 'structure' ? color : 'transparent',
        }"
      ></span>
    </button>
    <button @click="$emit('setCurrentData', 'geology', 'geology')">
      Surface
      <span
        class="border-active"
        :style="{
          backgroundColor: current === 'geology' ? color : 'transparent',
        }"
      ></span>
    </button>
  </div>
  <div class="switch-button" v-else>
    <button
      @click="$emit('setCurrentData', 'overview', 'planet')"
      :style="{
        backgroundColor: current === 'overview' ? color : 'transparent',
        border: current === 'overview' ? 'none' : 'thin solid white',
      }"
    >
      <span class="digits">01</span>Overview
    </button>
    <button
      @click="$emit('setCurrentData', 'structure', 'internal')"
      :style="{
        backgroundColor: current === 'structure' ? color : 'transparent',
        border: current === 'structure' ? 'none' : 'thin solid white',
      }"
    >
      <span class="digits">02</span>Internal Structure
    </button>
    <button
      @click="$emit('setCurrentData', 'geology', 'geology')"
      :style="{
        backgroundColor: current === 'geology' ? color : 'transparent',
        border: current === 'geology' ? 'none' : 'thin solid white',
      }"
    >
      <span class="digits">03</span>Surface Geology
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
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
      background: rgba(255, 255, 255, 0.3) !important;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .switch-button {
    width: auto;
    button {
      font-size: 9px !important;
      width: 280px !important;
      height: 40px !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .switch-button {
    display: none;
  }
  .switch-mobile {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #979797;
    button {
      border: none;
      color: #fff;
      font-family: "League Spartan", sans-serif;
      font-weight: bold;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1.93px;
      background: transparent;
    }
    .border-active {
      height: 4px;
      display: block;
      width: 65px;
      position: absolute;
      bottom: -2px;
    }
  }
}
</style>
