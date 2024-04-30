const { Router } = require('express');

const router = Router();

const recipes = require('../Recipes')

router.delete('/:name', (req, res) => {
  let { name } = req.params;
  let recipeToBeDeleted = recipes.find((recipe) => recipe.name === name);
  
  if(recipeToBeDeleted) {
    res.json({
      message: 'Recipe deleted',
      recipes: recipes.filter((recipe) => recipe.name !== name)
    })
  } else {
    res.status(404)
    .json({ messege: `Recipe you are looking for dosen't exist` })
  }
})

module.exports = router;