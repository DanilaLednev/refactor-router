const express = require('express');
const app = express();

const getRouter = require('./requests/RecipesGet');
const postRouter = require('./requests/RecipesPost');
const deleteRouter = require('./requests/RecipesDelete');
const putRouter = require('./requests/RecipesPut');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/get', getRouter );
app.use('/post', postRouter);
app.use('/delete', deleteRouter);
app.use('/put', putRouter)


app.listen('4000', () => {
  console.log(`It is 4000`)
})