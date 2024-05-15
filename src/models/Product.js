const { DataTypes } = require("sequelize");

module.exports = ( sequelize ) => {
  sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    },
    brand: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    detail: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    img: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    status: {
        type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });
};