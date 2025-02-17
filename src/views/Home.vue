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
import { defineComponent } from 'vue';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/api/api';
import MovieList from '@/components/MovieList.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import type { Movie } from '@/types/movie';

export default defineComponent({
  name: 'Home',
  components: { MovieList, SearchFilter },
  data() {
    return {
      movies: [] as Movie[],
      query: '',
      filter: 'all',
    };
  },
  watch: {
    filter: {
      handler: 'fetchMovies',
      immediate: true,
    },
  },
  methods: {
    async fetchMovies() {
      let data: Movie[] = [];
      switch (this.filter) {
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

      this.movies = Array.from(new Map(data.map((movie) => [movie.id, movie])).values());
    },

    filterByQuery(movies: Movie[], query: string) {
      const queryLower = query.toLowerCase();
      return movies.filter((movie) => movie.title.toLowerCase().includes(queryLower));
    },

    removeDuplicates(movies: Movie[]) {
      return movies.reduce((acc, current) => {
        if (!acc.find((item) => item.id === current.id)) {
          acc.push(current);
        }
        return acc;
      }, [] as Movie[]);
    }
  },
  computed: {
    filteredMovies() {
      const queriedMovies = this.filterByQuery(this.movies, this.query);
      return this.removeDuplicates(queriedMovies);
    }
  }
});
</script>

<style scoped>
.section-movies {
  margin-bottom: 10rem;
}
</style>
