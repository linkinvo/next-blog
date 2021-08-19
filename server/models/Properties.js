module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Properties", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        img: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        rating: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        beds: { type: DataTypes.STRING },
        baths: { type: DataTypes.STRING },
      });
  };
  