import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні популярних фільмів:', error);
    return [];
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні фільмів з найвищим рейтингом:', error);
    return [];
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/now_playing');
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні фільмів, які показують:', error);
    return [];
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/upcoming');
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні майбутніх фільмів:', error);
    return [];
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await tmdbApi.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Помилка при пошуку фільмів:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні подробиць фільму:', error);
    return null;
  }
};


