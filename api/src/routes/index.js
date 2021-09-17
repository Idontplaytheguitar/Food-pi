const { Router } = require('express');
const {Recipe, Diet_Type} = require('../models/Recipe')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

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
            fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${nombre}`)
            .then(resR => {if(resR)res.send(resR)})
            .catch(e => res.send(e))
        }
    }
})

module.exports = router;
