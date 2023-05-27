import axios from 'axios';

const API_KEY = 'ab3c7a1f4b7b762e75644aace7b7c5d5'; // замените на свой ключ API
const BASE_URL = 'https://api.themoviedb.org/3';


// Функция для получения списка актеров
export const getActors = async(page = 1) => {
    const response = await axios.get(`${BASE_URL}/person/popular?api_key=${API_KEY}&page=${page}`);
    return response.data.results;
};

// Функция для получения списка жанров
export const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return response.data.genres;
};

// Функция для получения списка фильмов с поддержкой пагинации
export const getMovies = async (page = 1) => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    return response.data.results;
};

// Функция для поиска фильмов с поддержкой пагинации
export const searchMovies = async (query, page = 1) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    return response.data.results;
};

// Функция для поиска фильмов с поддержкой пагинации
export const searchActors = async (query, page = 1) => {
    const response = await axios.get(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    return response.data.results;
};


// Функция для получения подробной информации о фильме по ID
export const getMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
};

// Функция для получения подробной информации о актере по ID
export const getActorDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/person/${id}?api_key=${API_KEY}`);
    return response.data;
};

// Функция для получения подробной информации о актере по ID
export const getActorFilms = async (id) => {
    const response = await axios.get(`${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`);
    return response.data;
};

export const getTopMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Ошибка при получении топовых фильмов: ", error);
    }
  };