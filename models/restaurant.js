const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Order = sequelize.define("restaurant", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  orderamount:{
    type:Sequelize.INTEGER,
    allowNull:false,
  } ,

  orderdish: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  ordertable: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Order;
