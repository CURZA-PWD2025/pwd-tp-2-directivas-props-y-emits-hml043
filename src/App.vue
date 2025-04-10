<script setup lang="ts">
  import { ref } from 'vue';  
  import CardComponent from './components/CardComponent.vue'  
  import peliculas from '../resource/movies.ts'
</script>

<template>
  <div>
    <h1>PELICULAS</h1>
  </div>
  <div>
    <h3>Votadas:</h3>
  </div>
  <div class="pelis-lista">
    <CardComponent
      v-for="pelicula in peliculas"
      :key="pelicula.id"
      :pelicula="pelicula"
    />
  </div>
</template>

<style scoped>
  .pelis-lista {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
</style>
