import categories from "./data/categories-list";
import games from "./data/games-list";

/**
 * @method fetchGamesByCategory
 * @description fetch from the games json file the list of games filtered by category
 * @param {number} categoryId
 * @return {Array} games
 */
const fetchGamesByCategory = async categoryId => {
    let categoryGames = [];
    games.forEach(game => {
        game.categories.forEach(category => {
            if (category.categoryId === categoryId) {
                categoryGames.push(game);
            }
        });
    });

    return categoryGames;
};

/**
 * @method filterGames
 * @description filter from the games json file all games matching with the search string
 * @param {String} search
 * @return {Array} games
 */
const filterGames = async search => {
    const exp = new RegExp(search.trim(), "i");
    const filteredGames = games.filter(game => exp.test(game.name));
    return filteredGames;
};

/**
 * @method fetchCategories
 * @description fetch all the categories from the categories json file
 * @return {Array} categories
 */
const fetchCategories = async () => {
    return categories;
};

export { fetchGamesByCategory, fetchCategories, filterGames };
