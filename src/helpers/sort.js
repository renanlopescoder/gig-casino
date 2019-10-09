/**
 * @method sortGamesByName
 * @description sort games list by game name
 * @param games
 * @return games
 */
const sortGamesByName = games => {
    const gamesSorted = games.sort(function(prev, current) {
        return prev.name.localeCompare(current.name);
    });
    return gamesSorted;
};

/**
 * @method sortGamesByPopularity
 * @description sort games by category orderNumber
 * @param games
 * @param categoryId
 * @return games
 */
const sortGamesByPopularity = (games, categoryId) => {
    const gamesSorted = games.sort(function(prev, current) {
        let prevOrder;
        let currentOrder;

        prev.categories.forEach(category => {
            if (category.categoryId === categoryId) {
                prevOrder = category.orderNumber;
            }
        });
        current.categories.forEach(category => {
            if (category.categoryId === categoryId) {
                currentOrder = category.orderNumber;
            }
        });

        return prevOrder - currentOrder;
    });

    return gamesSorted;
};

export { sortGamesByName, sortGamesByPopularity };
