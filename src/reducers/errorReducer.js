import { GAMES, CATEGORIES } from "../constants";

/**
 * @method errorReducer
 * @description error reducer handles all api calls failures to show to the user
 * @param state
 * @param action
 */
const errorReducer = (state = false, action) => {
    switch (action.type) {
        case GAMES.LOAD_FAIL:
            return action.error;
        case GAMES.LOAD:
        case GAMES.LOAD_SUCCESS:
            return null;
        case CATEGORIES.LOAD_FAIL:
            return action.error;
        case CATEGORIES.LOAD:
        case CATEGORIES.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
