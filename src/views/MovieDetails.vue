<template>
  <router-link to="/" class="movie-details__back">BACK</router-link>
  <section class="movie-details" v-if="movie">
    <div class="movie-details__poster">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
    </div>
    <div class="movie-details__info">
      <h2>{{ movie.title }}</h2>
      <p class="movie-details__rating">{{ movie.vote_average.toFixed(1) }}</p>
      <div class="header__info">
        <h3>Overview</h3>
        <p class="movie-details__overview">{{ movie.overview }}</p>  
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { getMovieDetails } from '@/api/api';
import type { Movie } from '@/types/movie';

export default defineComponent({
  name: 'MovieDetails',
  data() {
    return {
      movie: null as Movie | null,
    };
  },
  mounted() {
    const route = useRoute();
    const movieId = Number(route.params.id);
    getMovieDetails(movieId).then((data) => {
      this.movie = data;
    });
  },
});
</script>

<style scoped>
.movie-details {
  display: flex;
  gap: 2rem;
  flex-direction: row;
}

.movie-details__poster {
  width: 30rem;
  min-width: 30rem;
}

.movie-details__poster img {
  width: 100%;
}

.movie-details__info {
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 1.5rem;
  height: auto;
}

.movie-details__rating {
  font-size: 1.5rem;
  color: var(--text-color);
  background: #f39c12;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-details__overview {
  margin: 1rem 0;
}

.movie-details__back {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  margin-bottom: 4rem;
  color: var(--text-color);
  border: 0.1rem solid var(--text-color);
}

@media (max-width: 768px) {
  .movie-details {
    flex-direction: column;
    align-items: center;
  }

  .movie-details__poster {
    width: 100%;
    min-width: 0;
  }

  .movie-details__info {
    padding-left: 0;
    padding-top: 1.5rem;
    align-items: center;
    text-align: left;
  }

  .movie-details__rating {
    width: 3rem;
    height: 3rem;
  }

  .movie-details__overview {
    margin: 1rem 0;
  }

  .movie-details__back {
    margin-top: 2rem;
    padding: 0.6rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .movie-details__rating {
    width: 3rem;
    height: 3rem;
  }

  .movie-details__overview {
    margin: 0.5rem 0;
  }
}
</style>
