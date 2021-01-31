/*
const SET_SEARCH_ID = "SET_SEARCH_ID";
let initialState = {
    searchId: null
}
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_ID: {
            return {
                ...state,
                searchId: action.searchId,
            }
        }
        default:
            return state;
    }
}
const searchIdAC = (searchId) => ({type: SET_SEARCH_ID, searchId})
export const setSearchIdThunk = (searchId) => (dispatch) => {
    dispatch(searchIdAC(searchId));
}
export default headerReducer;
*/
