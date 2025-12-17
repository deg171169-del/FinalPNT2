<template>
  <div class="app">
    <h1>Conversor de Distancias</h1>
    <input v-model="kilometers" type="number" placeholder="Ingresa kilómetros" />
    <p :style="{ color: textColor }">Metros: {{ meters }}</p>
    <p :style="{ color: textColor }">Millas: {{ miles }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useDistanceStore } from './stores/distanceStore';

export default {
  setup() {
    const store = useDistanceStore();
    const kilometers = ref(store.kilometers);

    const meters = computed(() => store.toMeters);
    const miles = computed(() => store.toMiles);

    watch(kilometers, (newVal) => {
      store.setKilometers(Number(newVal));
    });

    const textColor = computed(() => {
      const km = Number(kilometers.value);
      if (km <= 0) return 'blue';
      else if (km < 5) return 'magenta';
      return 'red';
    });

    return { kilometers, meters, miles, textColor };
  }
};
</script>

<style>
.app {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
