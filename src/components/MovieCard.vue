<template>
  <li class="movie__list-item">
    <article class="card">
      <div class="image">
        <router-link :to="'/movie/' + movie.id">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" loading="lazy"/>
        </router-link>
        <div class="movie-card__rating">
          {{ movie.vote_average.toFixed(1) }}
        </div>
      </div>
      <div class="content">
        <h2>
          <router-link :to="'/movie/' + movie.id">
            {{ movie.title }}
          </router-link>
        </h2>
        
      </div>
    </article>  
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Movie } from '@/types/movie';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true
    }
  }
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.15);
}

.image {
  min-height: 40rem;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.image img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 0.8rem 0.8rem 0 0;
}

.movie-card__rating {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
  background: #f39c12;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-top: 0.5rem;
}

.card:hover .image img {
  transform: scale(1.05);
}

.content {
  padding: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .card {
    border-radius: 6px;
  }

  h2 {
    font-size: 1.6rem;
  }

  .content {
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.4rem;
  }

  .content {
    padding: 0.6rem;
  }
}
</style>
