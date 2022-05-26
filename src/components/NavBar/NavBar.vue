<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";

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
    height: 100%;
    align-items: center;
    li {
      list-style: none;
      display: flex;
      height: 100%;
      align-items: center;
      margin: 0 1rem;
      transition: all ease 0.3s;
      &:hover {
        color: #fff;
      }
      a {
        text-decoration: none;
        font-family: "League Spartan", sans-serif;
        font-weight: bold;
        line-height: 25px;
        font-size: 14px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.6);
        letter-spacing: 1px;
        &:hover {
          color: #fff;
        }
        &:visited {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
  .active {
    color: #fff;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  nav {
    flex-direction: column;
    height: auto;
    h5 {
      margin: 1.5rem 1.5rem;
    }
    ul {
      padding: 0;
    }
  }
}
@media screen and (max-width: 767px) {
  nav {
    ul {
      padding: 0;
      display: none;
    }
  }
}
.burger-menu {
  cursor: pointer;
}

.sidebar-menu {
  position: absolute;
  background: $black;
  width: 100%;
  height: 107vh;
  top: 6rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    list-style: none;
    display: flex;
    height: 80px;
    align-items: center;
    margin: 0 1rem;
    transition: all ease 0.3s;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    width: 90%;
    border-bottom: thin solid #979797;
    &:first-child {
      margin-top: 2rem;
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      color: #fff;
    }
    .left-sidenav {
      display: flex;
      align-items: center;
      .tabs-rounded {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 1rem;
      }
    }

    a {
      text-decoration: none;
      font-family: "League Spartan", sans-serif;
      font-weight: bold;
      font-size: 15px;
      text-transform: uppercase;
      color: $white;
      letter-spacing: 1.36px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from "vue";
import { pathNames } from "@/router/routes";
import useMedia from "@/hooks/useMedia";
import colors from "@/theme/colors";

export default defineComponent({
  name: "NavBar",
  setup() {
    const paths = ref(pathNames);
    const borderTopColor = ref("transparent");
    const hover = ref<number | null>(null);
    const media = useMedia();
    const isMobileMenuOpen = ref(false);
    const borderTopObject = computed(() => {
      return {
        $red: borderTopColor,
      };
    });

    return {
      borderTopObject,
      paths,
      colors,
      hover,
      media,
      isMobileMenuOpen,
    };
  },
});
</script>

<template>
  <nav>
    <h5>THE PLANETS</h5>
    <ul>
      <li
        v-for="(attr, i) in paths"
        :key="i"
        :style="{
          borderTop: hover === i ? `4px solid ${colors[attr.color]}` : 'none',
        }"
        @mouseover="hover = i"
        @mouseleave="hover = null"
      >
        <RouterLink :to="attr.path" active-class="active">{{
          attr.name
        }}</RouterLink>
      </li>
    </ul>
    <div
      v-if="media.isMobile"
      class="burger-menu"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
    >
      <img src="@/assets/icon-hamburger.svg" alt="" />
    </div>
    <div v-if="media.isMobile && isMobileMenuOpen" class="sidebar-menu">
      <li v-for="(attr, i) in paths" :key="i">
        <div class="left-sidenav">
          <div
            class="tabs-rounded"
            :style="{ background: colors[attr.color] }"
          ></div>
          <RouterLink
            :to="attr.path"
            active-class="active"
            @click="isMobileMenuOpen = false"
            >{{ attr.name }}</RouterLink
          >
        </div>
        <img src="/assets/images/icons/icon-chevron.svg" alt="" />
      </li>
    </div>
  </nav>
</template>
