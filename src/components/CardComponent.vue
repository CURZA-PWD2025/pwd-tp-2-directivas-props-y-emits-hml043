<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Icon } from "@iconify/vue";
  import { defineProps, defineEmits } from 'vue';  
  import Pelicula from '../interfaces/Pelicula.ts'

  const props = defineProps<{pelicula:Pelicula}>()
  const emit = defineEmits(['onClickAddLike']);

  const countLikes = ref(props.pelicula.likes)
  const enableAddLike = ref(true)

  /* tambien funciona
  const props = defineProps({
    pelicula: {
      type: Object,
      required: true
    }
  });
  */

  /* tambien funciona
  function clickLikes() {
    countLikes.value++    
  }
  */

  const clickAddLike = computed(() => {
    emit('onClickAddLike', [ props.pelicula.titulo, enableAddLike.value]);
    if (enableAddLike.value) {
      countLikes.value++
      enableAddLike.value = false
    }
    else {
      countLikes.value--
      enableAddLike.value = true
    }
  })  
</script>

<template>
  <div class="peli-card">

    <div class="peli-card__imagen-contenedor">
      <img :src="props.pelicula.portada" alt="Poster de la película no encontrado" class="peli-card__imagen">
    </div>

    <div class="peli-card__contenido">
      <h3 class="peli-card__titulo">{{ props.pelicula.titulo }}</h3>

      <div class="peli-card__generos">
        <span v-for="genero in props.pelicula.generos" :key="genero" class="peli-card__genero">{{ genero }}</span>
      </div>

      <div class="peli-card__detalle">
        <p class="peli-card__detalle-item">Año: {{ props.pelicula.anio }}</p>
        <p class="peli-card__detalle-item">Director: {{ props.pelicula.director }}</p>
      </div>

      <div class="peli-card__likes">
        <span>&#x1F44D;</span>{{ countLikes }}        
        <button :class="{ disabled: !enableAddLike }" @click="clickAddLike"><Icon icon="mdi:thumb-up" /></button>
        <button :class="{ disabled: enableAddLike }" @click="clickAddLike"><Icon icon="mdi:thumb-down" /></button>
        <!-- <button><Icon icon="mdi:check" /></button> -->
        <!-- <button :class="{ disabled: !enableAddLike }" @click="clickAddLike"><Icon icon="mdi:plus-thick" /></button> -->
      </div>
    </div>

  </div> 
</template>

<style scoped>
  button {
    padding: 10px;
    margin-left: 5px;
    text-align: center;
    font-size: large;
    border-radius: 50%;
    transition-duration: 0.5s;
  }
  button:hover {
    background-color: orange;
    color: gainsboro;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.24), 0 9px 25px 0 rgba(0,0,0,0.19);
  }
  .disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .peli-card {
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .peli-card__imagen-contenedor {
    width: 100%;
    aspect-ratio: 2/3;
    overflow: hidden;
  }

  .peli-card__imagen {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .peli-card__contenido {
    padding: 15px;
  }

  .peli-card__titulo {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .peli-card__generos {
    margin-bottom: 10px;
  }

  .peli-card__genero {
    display: inline-block;
    background-color: #f0f0f0;
    color: #666;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    margin-right: 5px;
  }

  .peli-card__detalle {
    font-size: 0.9em;
    color: #777;
    margin-bottom: 8px;
  }

  .peli-card__likes {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #555;
  }

  .peli-card__likes span {
    margin-right: 5px;
  }
</style>
