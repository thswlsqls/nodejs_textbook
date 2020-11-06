<<<<<<< HEAD
// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
      comment: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('NOW()'),
        defaultValue: sequelize.literal('now()'),
      },
    }, {
      timestamps: false,
    });
  };
=======
// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
      comment: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('NOW()'),
        defaultValue: sequelize.literal('now()'),
      },
    }, {
      timestamps: false,
    });
  };
>>>>>>> b945e65fc137f6db9717bb2120243867a83a8a16
