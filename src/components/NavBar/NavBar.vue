<script lang="ts">
import { defineComponent } from "vue";
import { pathNames } from "@/router/routes";
export default defineComponent({
  setup() {},
  name: "NavBar",
  data() {
    return {
      pathNames,
    };
  },
});
</script>

<template>
  <nav>
    <h5>THE PLANETS</h5>
    <ul>
      <li v-for="(el, i) in pathNames" :key="i">
        <RouterLink :to="el.path">{{ el.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/colors.scss");

nav {
  display: flex;
  align-items: center;
  border-bottom: thin solid #979797;
  height: 90px;
  h5 {
    flex-grow: 1;
    margin: 0 1.5rem;
  }
  ul {
    display: flex;
    li {
      list-style: none;
      margin: 0 1rem;
      a {
        text-decoration: none;
        font-family: "League Spartan", sans-serif;
        font-weight: bold;
        line-height: 25px;
        font-size: 14px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 1px;
        &:visited {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
}
</style>
