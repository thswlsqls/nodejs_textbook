<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => (
    sequelize.define('hashtag', {
      title: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
=======
module.exports = (sequelize, DataTypes) => (
    sequelize.define('hashtag', {
      title: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
>>>>>>> b945e65fc137f6db9717bb2120243867a83a8a16
  );