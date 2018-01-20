const URLS = {
    CATEGORIES: "https://api.chucknorris.io/jokes/categories",
    RANDOM_FACT: "https://api.chucknorris.io/jokes/random",
    RANDOM_CATEGORY_FACT: "https://api.chucknorris.io/jokes/random?category={category}",
    SEARCH: "https://api.chucknorris.io/jokes/search?query={query}",
};

export const Repository = {

    getCategories() {
        return fetch(URLS.CATEGORIES)
            .then(response => response.json())
            .then(categories => categories.sort())
            .catch(error => console.error(error))
    },

    getRandomFact(category) {
        let url;
        if (typeof category === "undefined") {
            url = URLS.RANDOM_FACT;
        } else {
            url = URLS.RANDOM_CATEGORY_FACT.replace("{category}", category);
        }

        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error))
    },

}