import { CATEGORIES } from "../constants";

/**
 * @method categoryReducer
 * @description category reducer handles the category list
 * @param state
 * @param action
 */
const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case CATEGORIES.LOAD_SUCCESS:
            return [...state, ...action.categories];
        default:
            return state;
    }
};

export default categoryReducer;
