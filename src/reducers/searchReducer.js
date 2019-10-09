import { GAMES } from "../constants";

/**
 * @method searchReducer
 * @param state
 * @param action
 */
const searchReducer = (state = "", action) => {
    switch (action.type) {
        case GAMES.LOAD_SEARCH:
            return action.search;
        case GAMES.RESET_SEARCH:
            return "";
        default:
            return state;
    }
};

export default searchReducer;
