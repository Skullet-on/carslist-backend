module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Car;
};
