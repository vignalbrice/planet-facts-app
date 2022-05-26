<script lang="ts">
import { defineComponent } from "vue";
import SwitchImage from "@/components/SwitchImage/SwitchImage.vue";
import SwitchContent from "@/components/SwitchContent/SwitchContent.vue";
import SwitchButton from "../SwitchButton/SwitchButton.vue";
import colors from "@/theme/colors";
import { pathNames } from "@/router/routes";

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
  setup() {
    return {
      pathNames,
      colors,
    };
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
          <div class="responsive-content">
            <!--Switch Content Component -->
            <switch-content :data="data" :current="current" :title="title" />
          </div>
          <!--Switch Button Component-->
          <switch-button
            :current="current"
            @setCurrentData="(name, image) => setCurrentData(name, image)"
            :color="
              colors[pathNames.filter((el) => el.name === title)[0].color]
            "
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
  position: relative;
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
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .container-switch {
    display: block;
    height: auto;
  }
  aside {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    /* margin: 0 auto; */
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .container-switch {
    display: block;
    height: auto;
  }
  aside {
    flex-direction: row;
    width: 100%;
  }
  .responsive-content {
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
