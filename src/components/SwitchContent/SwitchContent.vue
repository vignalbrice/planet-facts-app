<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwitchContent",
  props: {
    data: {
      required: true,
      type: Object,
    },
    current: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="content">
    <p>{{ data[current].content }}</p>
    <span
      >Source :
      <a :href="data[current].source" class="source-link" target="_blank"
        >Wikipedia
      </a>
      <img src="/assets/images/icons/icon-source.svg" alt="wikipedia" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) and (max-width: 1023px) {
  h1 {
    font-size: 44px !important;
  }
  p {
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 40px !important;
    line-height: normal;
  }
  p {
    font-size: 11px;
  }
}
</style>
