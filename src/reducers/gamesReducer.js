import { GAMES } from "../constants";

/**
 * @method gamesReducer
 * @description games reducer handles the game list
 * @param state
 * @param action
 */
const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case GAMES.LOAD:
        case GAMES.LOAD_SEARCH:
            return [];
        case GAMES.LOAD_SUCCESS:
            return [...action.games];
        default:
            return state;
    }
};

export default gamesReducer;
