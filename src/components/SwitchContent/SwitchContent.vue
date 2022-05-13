<script lang="ts">
import type Data from "@/types/data";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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
      <img src="@/assets/images/icons/icon-source.svg" alt="wikipedia" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
