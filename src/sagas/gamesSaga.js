import { takeEvery, call, put, select } from "redux-saga/effects";
import { GAMES, DEFAULTS } from "../constants";
import { fetchGamesByCategory, filterGames } from "../api";
import { setGames, sortGames } from "../actions";
import { sortGamesByName, sortGamesByPopularity } from "../helpers/sort";

/**
 * @method handleGamesLoad
 * @description Load the games from the api filtered by category ID and sort the games using the categoryId and default sort type
 * @param action
 */
function* handleGamesLoad(action) {
    let games = yield call(() => fetchGamesByCategory(action.categoryId));
    yield put(setGames(games));
    yield put(sortGames(DEFAULTS.SORT_TYPE, action.categoryId));
}

/**
 * @method handleSearchGames
 * @description Search games handler will return the games when the displayName matches if the search is an empty string will call the handleGamesLoad
 * @param action
 */
function* handleSearchGames(action) {
    const games = yield call(() => filterGames(action.search));
    yield put(setGames(games));
}

/**
 * @method handleSortGames
 * @description Sort games in the main state using sort type (alphabetically / popularity) and the categoryId
 */
function* handleSortGames() {
    let games = yield select(state => state.games);
    const sort = yield select(state => state.sort);
    if (sort.sortType === "alphabetically") {
        games = sortGamesByName(games);
    } else if (sort.sortType === "popularity") {
        games = sortGamesByPopularity(games, sort.categoryId);
    }
    yield put(setGames(games));
}

export default function* watchGames() {
    yield takeEvery(GAMES.LOAD, handleGamesLoad);
    yield takeEvery(GAMES.LOAD_SEARCH, handleSearchGames);
    yield takeEvery(GAMES.RESET_SEARCH, handleGamesLoad);
    yield takeEvery(GAMES.SORT_GAMES, handleSortGames);
}
