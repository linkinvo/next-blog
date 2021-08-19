"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("User", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING },
      first_name: { type: DataTypes.STRING },
      last_name: { type: DataTypes.STRING },
      role: {
        type: DataTypes.ENUM(["ADMIN", "CLIENT"]),
        defaulValue: "CLIENT",
      },
      phone: { type: DataTypes.STRING },
      created_at: { type: DataTypes.BIGINT },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("User");
  },
};
