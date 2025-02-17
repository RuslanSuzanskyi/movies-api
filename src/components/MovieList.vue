<template>
  <ul class="movie__list">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Movie } from '@/types/movie';
import MovieCard from './MovieCard.vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'MovieList',
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true
    }
  },
});
</script>

<style scoped>
.movie__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  justify-content: center;
}

@media (max-width: 1024px) {
  .movie__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .movie__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
}

@media (max-width: 480px) {
  .movie__list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

</style>
