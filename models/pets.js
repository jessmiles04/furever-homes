module.exports = function(sequelize, DataTypes) {
  // Define the Pets Sequelize model
  var pets = sequelize.define("Pets", 
    {
      // Pet Name
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
	//Species
      species: {
        type: DataTypes.STRING,
        allowNull: false
      },

	  breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
	
	  age: {
        type: DataTypes.STRING,
        allowNull: false
      },

	 temper: {
        type: DataTypes.STRING,
        allowNull: false
      },
	
	  fosterHome: {
        type: DataTypes.STRING,
        allowNull: false
      },

	  Description: {
        type: DataTypes.STRING,
        allowNull: false
      },

      // Available
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
  }, {
      classMethods: {
        associate: function(models) {
          fosterHome.belongsTo(models.fosterHome, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: true
            }
  });
});
  return Pets;
};
