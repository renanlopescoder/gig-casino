import { GAMES } from "../constants";

/**
 * @method sortReducer
 * @description sort reducer handles the games sort
 * @param state
 * @param action
 */
const sortReducer = (state = {}, action) => {
    switch (action.type) {
        case GAMES.LOAD:
            return {
                ...state,
                categoryId: action.categoryId,
            };
        case GAMES.SORT_GAMES:
            return {
                ...state,
                sortType: action.sortType,
            };
        default:
            return state;
    }
};

export default sortReducer;
