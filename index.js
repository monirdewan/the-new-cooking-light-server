const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
const recipes = require('./data/recipes.json')

app.get('/',(req,res)=>{
    res.send("The new cooking light server is running");
})

app.get('/recipes',(req, res)=>{
    res.send(recipes)
})




app.listen(port, ()=>{
    console.log(`the new cooking light is running on port:${port}`)
})