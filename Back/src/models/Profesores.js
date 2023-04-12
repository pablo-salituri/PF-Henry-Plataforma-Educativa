const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("Profesores", {
    id: {
      //type: DataTypes.UUID,
      type: DataTypes.INTEGER,
      primaryKey: true,
      //defaultValue: DataTypes.UUIDV4,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datebirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false
  });
};
