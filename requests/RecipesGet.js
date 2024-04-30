const { Router } = require('express')

const router = Router();
const recipes = require('../Recipes');

router.get('/', (req, res) => {
  res.json(recipes)
})

module.exports = router