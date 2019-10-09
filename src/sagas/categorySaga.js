import { take, call, put } from "redux-saga/effects";
import { CATEGORIES } from "../constants";
import { fetchCategories } from "../api";
import { setCategories } from "../actions";

/**
 * @method handleCategoriesLoad
 * @description Load the categories from the api this just need to be called once
 */
function* handleCategoriesLoad() {
    const categories = yield call(fetchCategories);
    yield put(setCategories(categories));
}

export default function* watchGamesLoad() {
    yield take(CATEGORIES.LOAD);
    yield call(handleCategoriesLoad);
}
