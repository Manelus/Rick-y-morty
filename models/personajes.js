'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personajes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personajes.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personajes',
  });
  return personajes;
};