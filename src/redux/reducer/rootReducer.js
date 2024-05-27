import {productReducer} from "./productReducer";
import {combineReducers} from "redux";
import {popularMovieReducer} from "./popularMovieReducer";

export const rootReducer = combineReducers({
    productR: productReducer,
    popularMovieR: popularMovieReducer,
});