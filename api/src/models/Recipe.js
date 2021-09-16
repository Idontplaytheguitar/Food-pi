const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.UUID,
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

  sequelize.define('Diet_type', {
    id:{
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING
    }
  });

};
