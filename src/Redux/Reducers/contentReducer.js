import {filmsAPI} from "../../API/API";

const SET_TOP_RATED = "SET_TOP_RATED";
const SET_POPULAR = "SET_POPULAR";
const SET_SHOW_FILM = "SET_SHOW_FILM";
const SET_UN_SHOW_FILM = "SET_UN_SHOW_FILM";

let initialState = {
    topRated: [],
    popular: [],
    showFilm: false
}
const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED: {
            return {
                ...state,
                topRated: [...action.topRated],
            }
        }
        case SET_POPULAR: {
            return {
                ...state,
                popular: [...action.popular],
            }
        }
        case SET_SHOW_FILM: {
            return {
                ...state,
                showFilm: action.prop
            }
        }
        case SET_UN_SHOW_FILM: {
            return {
                ...state,
                showFilm: action.prop
            }
        }
        default:
            return state;
    }
}
///////////////////////////////////////////////////////
const setShowFilmAC = (prop) => ({type: SET_SHOW_FILM, prop})
export const setShowFilm = (prop) => {
    return (dispatch) => {
        dispatch(setShowFilmAC(prop))
    }
}
const setUnShowFilmAC = (prop) => ({type: SET_UN_SHOW_FILM, prop})
export const setUnShowFilm = (prop) => {
    return (dispatch) => {
        dispatch(setUnShowFilmAC(prop))
    }
}
////////////////////////////////////////////////////////
const setTopRatedFilms = (topRated, totalPages, page) => ({type: SET_TOP_RATED, topRated, totalPages, page})
export const getTopRatedThunk = (pageNumber) => {
    return async (dispatch) => {
        let response = await filmsAPI.getTopRated(pageNumber)
        dispatch(setTopRatedFilms(response.data.results, response.data.total_pages, response.data.page))
    }
}
/////////////////////////////////////////////////////////////////////////
const setPopularFilms = (popular, totalPages, page) => ({type: SET_POPULAR, popular, totalPages, page})
export const getPopularThunk = (pageNumber) => {
    return async (dispatch) => {
        let response = await filmsAPI.getPopular(pageNumber)
        dispatch(setPopularFilms(response.data.results, response.data.total_pages, response.data.page))
    }
}

export default contentReducer;
