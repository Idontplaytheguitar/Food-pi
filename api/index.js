//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn, Diet_type } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

  
    var vegetarian =  Diet_type.create({
      name: "Vegetarian",
    })
    .catch(e => console.log(e))
   
    var lactoVegetarian =  Diet_type.create({
      name: "Lacto-Vegetarian",
    })
    .catch(e => console.log(e))
   
    var ketegenic =  Diet_type.create({
      name: "Ketogenic",
    })
    .catch(e => console.log(e))

    var ovoVegetarian =  Diet_type.create({
      name: "Ovo-Vegetarian",
    })
    .catch(e => console.log(e))

    var vegan =  Diet_type.create({
      name: "Vegan",
    })
    .catch(e => console.log(e))

    var pescetarian =  Diet_type.create({
      name: "Pescetarian",
    })
    .catch(e => console.log(e))

    var paleo =  Diet_type.create({
      name: "Paleo",
    })
    .catch(e => console.log(e))

     var primal =  Diet_type.create({
      name: "Primal",
    })
    .catch(e => console.log(e))
  
    var whole30 =  Diet_type.create({
      name: "Whole30",
    })
    .catch(e => console.log(e))
   
    Promise.all([vegetarian, lactoVegetarian, ketegenic, ovoVegetarian, vegan, pescetarian, paleo, primal, whole30])
      .then(res => {
        console.log("Dietas precargadas :)");
      })
      .catch(e => console.log(e))
  });
});
