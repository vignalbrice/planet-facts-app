import { filterData, getData } from "@/helpers/filterData";
import { defineStore } from "pinia";

export const usePlanetsStore = defineStore({
  id: "planets",
  state: () => ({
    planets: getData(),
    mercury: filterData("Mercury"),
    venus: filterData("Venus"),
    earth: filterData("Earth"),
    mars: filterData("Mars"),
    jupiter: filterData("Jupiter"),
    saturn: filterData("Saturn"),
    uranus: filterData("Uranus"),
    neptune: filterData("Neptune"),
  }),
  getters: {
    getPlanets: (state) => state.planets,
    getMercuryPlanet: (state) => state.mercury,
    getMarsPlanet: (state) => state.mars,
  },
  actions: {},
});
