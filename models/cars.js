'use strict';

module.exports = function(sequelize, DataTypes) {
	var Car = sequelize.define("Car", {
		brand: DataTypes.STRING
	});

	return Car;
}