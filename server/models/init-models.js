const DataTypes = require("sequelize").DataTypes;
const _User = require("./User");
const _Properties = require("./Properties");

function initModels(sequelize) {
  const User = _User(sequelize, DataTypes);
  const Properties = _Properties(sequelize, DataTypes);

  return {
    User,
    Properties,
  };
}
module.exports = { initModels };



// const sequelize = require("../../config");
// const { DataTypes } = require("sequelize");

// const User = sequelize.define("user", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   email: { type: DataTypes.STRING, unique: true },
//   password: { type: DataTypes.STRING },
//   first_name: { type: DataTypes.STRING },
//   last_name: { type: DataTypes.STRING },
//   role: { type: DataTypes.ENUM(["ADMIN", "CLIENT"]), defaulValue: "CLIENT" },
//   phone: { type: DataTypes.STRING },
//   created_at: { type: DataTypes.BIGINT },
// });

// const Properties = sequelize.define("properties", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   img: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.STRING },
//   rating: { type: DataTypes.INTEGER, allowNull: false },
//   price: { type: DataTypes.INTEGER, allowNull: false },
//   beds: { type: DataTypes.STRING },
//   baths: { type: DataTypes.STRING },
// });

// const Reviews = sequelize.define("review", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   feedback: { type: DataTypes.STRING },
//   date: { type: DataTypes.BIGINT },
//   id_user: { type: DataTypes.INTEGER },
// });


//linking models 
// User.hasMany(Reviews);
// Reviews.belongsTo(User);


//(№№№ many to many №№№)
// Type.belongsToMany(Brand, {through: TypeBrand })
// Brand.belongsToMany(Type, {through: TypeBrand })

// module.exports = {
//   User,
//   Properties,
//   Reviews,
// };

