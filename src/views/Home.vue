<template>
  <section class="section-search">
    <SearchFilter v-model:query="query" v-model:filter="filter" />
  </section>
  <section class="section-movies__list">
    <div class="movies">
      <MovieList :movies="filteredMovies" />
    </div>
  </section>
    
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/api/api';
import MovieList from '@/components/MovieList.vue';
import type { Movie } from '@/types/movie';
import SearchFilter from '@/components/SearchFilter.vue';

export default defineComponent({
  name: 'Home',
  components: { MovieList, SearchFilter },
  setup() {
    const movies = ref<Movie[]>([]);
    const query = ref('');
    const filter = ref('all');

    const fetchMovies = async () => {
      let data: Movie[] = [];
      switch (filter.value) {
        case 'popular':
          data = await getPopularMovies();
          break;
        case 'now_playing':
          data = await getNowPlayingMovies();
          break;
        case 'top_rated':
          data = await getTopRatedMovies();
          break;
        case 'upcoming':
          data = await getUpcomingMovies();
          break;
        case 'all':
          data = [
            ...(await getPopularMovies()),
            ...(await getNowPlayingMovies()),
            ...(await getTopRatedMovies()),
            ...(await getUpcomingMovies())
          ];
          break;
      }

      movies.value = Array.from(new Map(data.map((movie) => [movie.id, movie])).values());
    };

    const filterByQuery = (movies: Movie[], query: string) => {
      const queryLower = query.toLowerCase();
      return movies.filter((movie) => movie.title.toLowerCase().includes(queryLower));
    };

    const removeDuplicates = (movies: Movie[]) => {
      return movies.reduce((acc, current) => {
        if (!acc.find((item) => item.id === current.id)) {
          acc.push(current);
        }
        return acc;
      }, [] as Movie[]);
    };

    const filteredMovies = computed(() => {
      const queriedMovies = filterByQuery(movies.value, query.value);
      return removeDuplicates(queriedMovies);
    });

    watch(filter, fetchMovies, { immediate: true });

    return { movies, query, filter, filteredMovies };
  },
});
</script>

<style scoped>
.section-movies {
  margin-bottom: 10rem;
}
</style>