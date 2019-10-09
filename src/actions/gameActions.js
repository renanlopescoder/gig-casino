import { GAMES, DEFAULTS } from "../constants";

const loadGamesCategory = (categoryId = DEFAULTS.CATEGORY_ID) => ({
    type: GAMES.LOAD,
    categoryId,
});

const searchGames = search => ({
    type: GAMES.LOAD_SEARCH,
    search,
});

const resetSearch = () => ({
    type: GAMES.RESET_SEARCH,
});

const sortGames = (
    sortType = DEFAULTS.SORT_TYPE,
    categoryId = DEFAULTS.CATEGORY_ID,
) => ({
    type: GAMES.SORT_GAMES,
    sortType,
    categoryId,
});

const setGames = games => ({
    type: GAMES.LOAD_SUCCESS,
    games,
});

const setGamesLayout = (layout = DEFAULTS.LAYOUT) => ({
    type: GAMES.LAYOUT,
    layout,
});

const setGamesError = error => ({
    type: GAMES.LOAD_FAIL,
    error,
});

export {
    loadGamesCategory,
    setGames,
    setGamesError,
    searchGames,
    resetSearch,
    setGamesLayout,
    sortGames,
};
