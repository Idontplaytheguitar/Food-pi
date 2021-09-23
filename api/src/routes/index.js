const { Router } = require('express');
require('dotenv').config()
const {Recipe, Diet_type} = require('../db')
const axios = require('axios');
const e = require('express');
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
        let found = []
        Recipe.findAll()
        .then(r=>{
            if(r.length > 0){
            found.push(r)
        }
    
        axios.get(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${YOUR_API_KEY}`)
        .then(async r => {
            //console.log('||||||||||| RECETAS RANDOM |||||||||||||',r)
            // acá crearía las recetas si tuviera que hacerlo

            for(let i of r.data.recipes){
                // console.log(i.analyzedInstructions)

                /*  let st = []
                i.analyzedInstructions.forEach(e => {
                    // console.log(e)
                    st.push(e)
                }
                )
                // console.log(st)
                await Recipe.create({
                    name: i.title,
                    summary: i.summary,
                    rating: i.spoonacularScore,
                    healthy: i.veryHealthy,
                    steps: st
                    
                }) no creamos la receta :( */
                    
                    /*      await Recipe.findAll()
                    .then(recipes => 
                        
                        res.send(recipes)
                        ) */
                        
                        /*  let theInfo = {
                            id: i.id,
                            name: i.title,
                            image: i.Image,
                            diets: i.diets
                        } */
                        found.push(i)
                    }
                        return res.send(found)
        })
        .catch(e => {
            console.log('|||||||||| ERROR RECETAS RANDOM ||||||||||',e)
            res.status(404).json('idk')})
            
    })
        /* .catch(e => {
            console.log('|||||||| ERROR PROMESA BUSCADORA DE RECETAS |||||||',e)
            res.sendStatus(404)}) */
    }
    if(nombre){
        var foundRec= []
        await Recipe.findAll({
            where:{
                name: nombre
            }
        })
        .then(r => {
            r.forEach(e => {
                foundRec.push(e)
            })
        })
        /* if(resRecipe.length > 0){
            // console.log('||||||||||||||resRecipe db, no api externa |||||||||||||||',resRecipe)
            return res.send(resRecipe)
        }  No estaría devolviendo también las encontradas en la api porque ahora no estoy guardando las que encuentro :( */

        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${nombre}&addRecipeInformation=true&apiKey=${YOUR_API_KEY}`)
        .then(async resR => { 
            // acá crearia la receta si tuviera que hacerlo
            for(let i of resR.data.results){
                // console.log(i.analyzedInstructions)
              /*   let st = []
                i.analyzedInstructions.forEach(e => {
                    // console.log(e)
                    st.push(e)
                }
                )
                // console.log(st)
                await Recipe.create({
                    name: i.title,
                    summary: i.summary,
                    rating: i.spoonacularScore,
                    healthy: i.veryHealthy,
                    steps: st
                    
                })
                var recipesFound = []
                let recipeFound = await Recipe.findOne({
                    where:{
                        name: i.title
                    }
                })
                recipesFound.push(recipeFound)
ouch */
                foundRec.push(i)
            }
            res.send(foundRec)
        })
        .catch(e =>{
            console.log(e)
            res.send(e)})
        
    }
})





router.get("/recipes/:idReceta", async (req, res) =>{         // (y)
    const {idReceta} = req.params
    // https://api.spoonacular.com/recipes/{id}/information
    // console.log(idReceta)
  
    axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${YOUR_API_KEY}`)
    .then(async r => {
        // console.log(r.data)
        // acá puedo crear la receta si quiero
        let st = []
        r.data.analyzedInstructions.forEach(e => {
            // console.log(e)
            st.push(e)
         }
         )
       // console.log(st)
       let short = r.data;

        /*  await Recipe.create({
             name: short.title,
             summary: short.summary,
             rating: short.spoonacularScore,
             healthy: short.veryHealthy,
             steps: st
            
         }) no creo la receta :( */
        let info = {
            name: short.title,
            summary: short.summary,
            rating: short.spoonacularScore,
            dishTypes: short.dishTypes,
            diets: short.diets,
            healthScore: short.healthScore,
            Image: short.image,
            steps: st
        }

        res.send(info)})
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
