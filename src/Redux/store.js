import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./Reducers/contentReducer";
import thunkMiddleware from "redux-thunk";
import filmReducer from "./Reducers/filmReducer";
import headerReducer from "./Reducers/headerReducer";

let reducers = combineReducers({
    header: headerReducer,
    content: contentReducer,
    film: filmReducer

})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;