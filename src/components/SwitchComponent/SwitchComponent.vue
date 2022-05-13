<script lang="ts">
import { defineComponent } from "vue";
import SwitchImage from "@/components/SwitchImage/SwitchImage.vue";
import SwitchContent from "@/components/SwitchContent/SwitchContent.vue";
import SwitchButton from "../SwitchButton/SwitchButton.vue";

export default defineComponent({
  name: "SwitchComponent",
  props: {
    current: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    imgReactive: {
      type: String,
      required: true,
    },
    firstImage: {
      type: String,
      required: true,
    },
    data: {
      required: true,
      type: Object,
    },
    title: {
      required: true,
      type: String,
    },
  },
  components: { SwitchImage, SwitchContent, SwitchButton },
  methods: {
    setCurrentData(name: string, image: string) {
      this.$emit("setCurrentData", { name, image });
    },
  },
});
</script>
<template>
  <keep-alive>
    <component :is="current">
      <div class="container-switch">
        <!-- Switch Image Component -->
        <switch-image
          :img="img"
          :imgReactive="imgReactive"
          :firstImage="firstImage"
        />
        <aside>
          <!--Switch Content Component -->
          <switch-content :data="data" :current="current" :title="title" />
          <!--Switch Button Component-->
          <switch-button
            :current="current"
            @setCurrentData="(name, image) => setCurrentData(name, image)"
          />
        </aside>
      </div>
    </component>
  </keep-alive>
</template>

<style lang="scss">
.container-switch {
  display: grid;
  grid-template-columns: 1.66fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 70%;

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
    }
    .active {
      background: #419ebb;
      border: none;
    }
  }
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content {
    p {
      width: 350px;
    }
    span {
      font-family: "League Spartan", sans-serif;
      a.source-link {
        font-family: "League Spartan", sans-serif;
        font-weight: bold;
        line-height: 25px;
        color: rgba(255, 255, 255, 0.8);
        margin-left: 0.3rem;
        text-decoration: underline;
      }
      img {
        margin: 0 0 0 0.3rem;
      }
    }
  }
}
</style>
