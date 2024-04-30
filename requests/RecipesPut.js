const { Router } = require('express');

const router = Router();

const recipes = require('../Recipes');

router.put('/:name', (req, res) => {
  let { name } = req.params;
  let recipeToBeUpdate = recipes.find((recipe) => recipe.name === name);

  if(recipeToBeUpdate) {
    const updateRecipe = req.body;

    recipes.forEach((recipe) => {
      if(recipe.name === req.params.name) {
        recipe.name = updateRecipe ? updateRecipe.name : recipe.name;
        res.json({ messege: 'Item apdated' })
      }
    })
  } else {
    res.status(404)
    .json({ messege: `Recipe you are looking for ${req.params.name} dosen't exist` })
  }
})


module.exports = router;