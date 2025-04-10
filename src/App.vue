<script setup lang="ts">
  import { ref } from 'vue';  
  import CardComponent from './components/CardComponent.vue'  
  import peliculas from '../resource/movies.ts'

  //const message = ref('No message yet');
  const pelisVotadas = ref([]);

  const handleButtonClickAddLike = (msg) => {
    //message.value = msg[0];
    //console.log(msg[1])
    if (msg[1]) {   //voto positivo
      pelisVotadas.value.push(msg[0]) //message.value
    }
    else {
      const index: number = pelisVotadas.value.findIndex(a => a === msg[0]);
      if (index != -1) {
        pelisVotadas.value.splice(index, 1);
      }
    }
    //console.log(message.value)
    //console.log(pelisVotadas)
  };
</script>

<template>
  <div>
    <h1>PELICULAS</h1>
  </div>
  <div>
    <h3>Votadas:</h3>
    <div class="contenedor-array">    
      <span class="item-array" v-for="titulo in pelisVotadas">{{ titulo }}</span>
    </div>
  </div>
  <div class="pelis-lista">
    <CardComponent
      v-for="pelicula in peliculas"
      :key="pelicula.id"
      :pelicula="pelicula"
      @onClickAddLike="handleButtonClickAddLike"
    />
  </div>
</template>

<style scoped>
  .pelis-lista {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .contenedor-array {
    background-color: white; /* Opcional: fondo blanco para los items */
    display: flex; /* Alinea los elementos en fila */
    flex-wrap: wrap; /* Permite el ajuste de línea */
    padding: 10px; /* Espacio alrededor de los elementos */
    gap: 10px; /* Separación entre los elementos */
    margin-bottom: 10px;
    max-width: 900px; /* Establece el ancho máximo a 500 píxeles */
    width: 100%; /* Permite que el div se expanda hasta el ancho máximo */
  }

  .item-array {
    /* Estilos adicionales para los elementos del array */
    background-color: lightblue; /* Azul pálido */
    padding: 5px 10px; /* Espacio dentro de los items */
    border-radius: 5px; /* Bordes redondeados */
  }
</style>
