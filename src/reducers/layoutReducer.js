import { GAMES } from "../constants";

/**
 * @method layoutReducer
 * @description layout reducer handles the change of application layout
 * @param state
 * @param action
 */
const layoutReducer = (state = "", action) => {
    switch (action.type) {
        case GAMES.LAYOUT:
            return action.layout;
        default:
            return state;
    }
};

export default layoutReducer;
