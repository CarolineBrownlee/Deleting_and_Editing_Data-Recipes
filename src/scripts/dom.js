// A DOM module to render the recipe HTML representations.

import createRecipeCard from "./factory.js"

const recipeList = document.querySelector("#recipeList")

export default recipes => {
    // Clear the current content
    // The textContent property sets or returns the text content of the specified node, and all its descendants.
    recipeList.textContent = ""
    // for each recipe of recipes array
    for (const recipe of recipes) {
        console.log(recipe)
        // invoke createRecipeCard, store it in a variable
        const recipeCard = createRecipeCard(recipe)
        // and put it on the dom
        recipeList.innerHTML += recipeCard
    }
}