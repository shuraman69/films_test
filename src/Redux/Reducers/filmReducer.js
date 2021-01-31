import {filmsAPI} from "../../API/API";

const SET_FIlM = "SET_FIlM";
let initialState = {
    id: null,
    overview: null,
    genres: null,
    poster: null,
    release_date: null,
    runtime: null,
    title:null,
    budget:null,
    tagline:null
}
const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIlM: {
            return {
                ...state,
                id: action.id,
                overview: action.overview,
                genres: [...action.genres],
                poster: action.poster,
                release_date: action.release_date,
                runtime: action.runtime,
                title:action.title,
                budget:action.budget,
                tagline:action.tagline
            }
        }
        default:
            return state;
    }
}
const setFilm = (id, overview, genres, poster, release_date, runtime,title,budget,tagline) => ({
    type: SET_FIlM,
    id,
    overview,
    genres,
    poster,
    release_date,
    runtime,
    title,
    budget,
    tagline
})

export const getFilmThunk = (filmId) => {
    return async (dispatch) => {
        let response = await filmsAPI.getFilm(filmId)
        let data=response.data;
        dispatch(setFilm(data.id,data.overview,data.genres,data.poster_path,data.release_date,data.runtime,data.title,data.budget,data.tagline))
    }
}

export default filmReducer;
