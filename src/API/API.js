import axios from "axios";

export const filmsAPI = {
    getTopRated() {
        return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c86e7ffd48c254c3b322823b8f0a7c8f&language=en-US`)
    },
    getPopular() {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c86e7ffd48c254c3b322823b8f0a7c8f&language=en-US`)
    },
    getFilm(filmId) {
        return axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=c86e7ffd48c254c3b322823b8f0a7c8f&language=en-US`)
    }
}

