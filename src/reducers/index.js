import { combineReducers } from "redux";

import layoutReducer from "./layoutReducer";
import errorReducer from "./errorReducer";
import gamesReducer from "./gamesReducer";
import categoryReducer from "./categoryReducer";
import searchReducer from "./searchReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
    layout: layoutReducer,
    error: errorReducer,
    games: gamesReducer,
    search: searchReducer,
    categories: categoryReducer,
    sort: sortReducer,
});

export default rootReducer;
