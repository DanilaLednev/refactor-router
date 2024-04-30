const { Router } = require('express');

const router = Router();

const recipes = require('../Recipes');


router.post('/', (req, res) => {
  const newRecipe = {
    name: req.body.name,
    id: req.body.id,
    price: req.body.price
  }
    recipes.push(newRecipe);
    res.json(recipes)
})


module.exports = router;