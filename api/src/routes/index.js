const { Router } = require('express');
require('dotenv').config()
const {Recipe, Diet_type} = require('../db')
const axios = require('axios');
const e = require('express');
const { set } = require('../app');
const {YOUR_API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//ej:
//const query = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`)
//console.log(query.data)

const router = Router();

/* const v = 'Vegetarian'

router.get('/random', (req,res)=>{
    fetch('https://api.spoonacular.com/recipes/random?apiKey=')
    .then(r => res.send(r))
    .catch(e => console.log('333333333333333333',e,'|||||||||||||||'))
}) */

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get( "/recipes", async function(req, res){           // (y)
    let {nombre} = req.query
    if(!nombre){
        Recipe.findAll()
        .then(r=>{
            if(r.length > 0){
            res.send(r)
        }
            else{
                axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${YOUR_API_KEY}`)
                .then(r => {console.log('||||||||||| RECETAS RANDOM |||||||||||||',r)
                    res.send(r)
                })
                .catch(e => {
                    console.log('|||||||||| ERROR RECETAS RANDOM ||||||||||',e)
                    res.status(404).json('idk')})
            }
    })
        .catch(e => {
            console.log('|||||||| ERROR PROMESA BUSCADORA DE RECETAS |||||||',e)
            res.sendStatus(404)})
    }
    if(nombre){
        let resRecipe = await Recipe.findAll({
            where:{
                name: nombre
            }
        })
        if(resRecipe.length > 0){
            console.log(resRecipe)
            return res.send(resRecipe)
        }
        else{
            await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${nombre}&apiKey=${YOUR_API_KEY}`)
            .then(resR => { 
                res.send(resR.data.results)
            })
            .catch(e =>{
                console.log(e)
                res.send(e)})
        }
    }
})

router.get("/recipes/:idReceta", (req, res) =>{         // (y)
    const {idReceta} = req.params
    // https://api.spoonacular.com/recipes/{id}/information
    console.log(idReceta)
    axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${YOUR_API_KEY}`)
    .then(r => {
        console.log(r.data)
        res.send(r.data)})
    .catch(e => res.send(e)) 
})

router.get('/types', async (req,res) => {           // (y)
    let q = await Diet_type.findAll()
    let diets = []
    for(let i of q){
        diets.push(i.name)
    }
    //console.log(diets)
    res.send(diets)
   
})

/* Recipe.create({
    name: "hola",
    summary:'a ver si',
    rating: 1,
    healthy: true,
    steps:[0,2,"funca"]
}) */

router.post('/recipe', async (req,res)=>{       // (y)
    const {name,summary,rating,healthy,steps} = req.body;
    console.log(name,summary,rating,healthy,steps)
    await Recipe.create({
        name,
        summary,
        rating,
        healthy,
        steps
    })
    .then(r =>res.send('Done!'))
    .catch(e => res.status(401).json(e))
    
})
module.exports = router;
