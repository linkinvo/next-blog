module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM(["ADMIN", "CLIENT"]), defaulValue: "CLIENT" },
    phone: { type: DataTypes.STRING },
    created_at: { type: DataTypes.BIGINT },
  });
};
