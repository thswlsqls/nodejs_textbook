<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => (
    sequelize.define('post', {
      content: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
=======
module.exports = (sequelize, DataTypes) => (
    sequelize.define('post', {
      content: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
>>>>>>> b945e65fc137f6db9717bb2120243867a83a8a16
  );