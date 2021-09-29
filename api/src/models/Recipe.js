const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      defaultValue: "",
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    healthy:{
      type: DataTypes.BOOLEAN
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.JSON)
    }
  });
};
