const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    healthy:{
      type: DataTypes.BOOLEAN
    },
    steps:{
      type: DataTypes.ARRAY
    }
  });
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING
    }
  });
};
