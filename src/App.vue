<script setup></script>

<template>
  <div class ="app">
  <h1>Conversor de Distancia</h1>
  <input v-model="kilometros" type="number" placeholder="Ingresa kilometros" />
  <p :style="{color: textColor }">Metros: {{ meters }}</p>
   <p :style="{color: textColor }">Millas: {{ miles }}</p>
   </div>
</template>

<style scoped></style>
