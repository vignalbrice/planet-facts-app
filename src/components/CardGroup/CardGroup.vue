<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardGroup",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
<template>
  <div class="container-info">
    <div class="card">
      <div class="card-content">
        <h3>ROTATION TIME</h3>
        <h2>{{ data.rotation }}</h2>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>REVOLUTION TIME</h3>
        <h2>{{ data.revolution }}</h2>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>RADIUS</h3>
        <h2>{{ data.radius }}</h2>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>AVERAGE TEMP.</h3>
        <h2>{{ data.temperature }}</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .card {
    width: 255px;
    height: 128px;
    border: thin solid rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1rem;

    .card-content {
      margin: 0 1rem;
      h3 {
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase !important;
      }
      h2 {
        color: #fff;
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  h2 {
    font-size: 24px !important;
  }
  h3 {
    font-size: 8px !important;
  }
  .card {
    margin: 1.5rem 1rem !important;
    height: 88px !important;
    width: 164px !important;
  }
}
@media screen and (max-width: 767px) {
  .container-info {
    flex-direction: column;
    .card {
      width: auto;
      height: 48px;
      margin: 0.4rem;
      .card-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        h3 {
          font-size: 8px !important;
          margin: 0 1rem;
        }
        h2 {
          font-size: 20px !important;
          margin: 0 1rem;
        }
      }
    }
  }
}
</style>
