module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Reviews", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      feedback: { type: DataTypes.STRING },
      date: { type: DataTypes.BIGINT },
      id_user: { type: DataTypes.INTEGER },
    });
  };
  