'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookings.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfPeople: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    additionalNote: {
      type: DataTypes.STRING,
      allowNull: false
    }
    },{
    sequelize,
    modelName: 'bookings',
  });
  return bookings;
};