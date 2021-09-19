const { Router } = require('express');
const {Recipe, Diet_type} = require('../db')
const {YOUR_API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

/* const v = 'Vegetarian'

router.get('/random', (req,res)=>{
    fetch('https://api.spoonacular.com/recipes/random?apiKey=e85f86d8e2c74fc395346e39a231edb5')
    .then(r => res.send(r))
    .catch(e => console.log('333333333333333333',e,'|||||||||||||||'))
}) */

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get( "/recipes", async function(req, res){
    let {nombre} = req.query
    if(nombre){
        let resRecipe = await Recipe.findAll({
            where:{
                name: nombre
            }
        })
        if(resRecipe){
            return res.send(resRecipe)
        }
        else{
         /*    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${nombre}apiKey=${YOUR_API_KEY}`)
            .then(resR => {if(resR)res.send(resR)})
            .catch(e => res.send(e)) */
        }
    }
})

router.get("/recipes/:idReceta", (req, res) =>{
    const {idReceta} = req.params
    // https://api.spoonacular.com/recipes/{id}/information
    
  /*   fetch(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${YOUR_API_KEY}`)
    .then(r => res.send(r))
    .catch(e => res.send(e)) */
})

router.get("/types", (req,res) =>{

})
module.exports = router;
