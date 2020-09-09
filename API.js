import axios from 'axios';

const TMDB_KEY = '5e3713c53085fc1cdc4fd14cde979ad9';

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params) => {
  try {
    const {
      data: { results },
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlay: () =>
    getAnything('/movie/now_playing', { language: 'ko', region: 'kr' }),
  popular: () =>
    getAnything('/movie/popular', { language: 'ko', region: 'kr' }),
  upcoming: () =>
    getAnything('/movie/upcoming', { language: 'ko', region: 'kr' }),
  search: (query) =>
    getData('/search/movie', { query, language: 'ko', region: 'kr' }),
  movie: (movie_id) => getAnything(`/movie/${movie_id}`, { language: 'ko' }),
  discover: () =>
    getAnything('/discover/movie', { language: 'ko', region: 'kr' }),
};

export const tvApi = {
  today: () => getAnything('/tv/airing_today', { language: 'ko' }),
  thisWeek: () => getAnything('/tv/on_the_air', { language: 'ko' }),
  topRated: () => getAnything('/tv/top_rated', { language: 'ko' }),
  popular: () => getAnything('/tv/popular', { language: 'ko' }),
  search: (query) => getAnything('/search/tv', { query, language: 'ko' }),
  show: (tv_id) => getAnything(`/tv/${tv_id}`, { language: 'ko' }),
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
