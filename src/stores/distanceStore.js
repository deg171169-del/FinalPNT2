import { defineStore } from 'pinia';

export const useDistanceStore = defineStore('distance', {
  state: () => ({
    kilometers: 0, 
  }),
  getters: {
    toMeters(state) {
      return (state.kilometers * 1000).toFixed(2);
    },
    toMiles(state) {
      return (state.kilometers * 0.621371).toFixed(4);
    }
  },
  actions: {
    setKilometers(value) {
      this.kilometers = value;
    }
  }
});
