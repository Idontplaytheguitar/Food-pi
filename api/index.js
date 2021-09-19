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
const server = require('./src/app.js');
const { conn, Diet_type } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3002, () => {
    console.log('%s listening at 3002'); // eslint-disable-line no-console

    var vegetarian =  Diet_type.create({
      name: "Vegetarian",
    });
   
    var lactoVegetarian =  Diet_type.create({
      name: "Lacto-Vegetarian",
    });
   
    var ketegenic =  Diet_type.create({
      name: "Ketogenic",
    });

    var ovoVegetarian =  Diet_type.create({
      name: "Ovo-Vegetarian",
    });

    var vegan =  Diet_type.create({
      name: "Vegan",
    });

    var pescetarian =  Diet_type.create({
      name: "Pescetarian",
    });

    var paleo =  Diet_type.create({
      name: "Paleo",
    });

     var primal =  Diet_type.create({
      name: "Primal",
    });
  
    var whole30 =  Diet_type.create({
      name: "Whole30",
    });
   
    Promise.all([vegetarian, lactoVegetarian, ketegenic, ovoVegetarian, vegan, pescetarian, paleo, primal, whole30])
      .then(res => {
        console.log("Dietas precargadas :)");
      });
  });
});
