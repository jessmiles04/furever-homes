module.exports = function(sequelize, DataTypes) {
  // Define the Foster Sequelize model
  var pets = sequelize.define("FosterHome", 
    {
      // Name
        fosterHome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fosterParents: {
        type: DataTypes.STRING,
        allowNull: false
      },
        address: {
        type: DataTypes.STRING,
        allowNull: false
      },
	  county: {
        type: DataTypes.STRING,
        allowNull: false
      },
	
	  contact: {
        type: DataTypes.STRING,
        allowNull: false
      },

	 email: {
        type: DataTypes.STRING,
        allowNull: false
      },
		  hours: {
        type: DataTypes.STRING,
        allowNull: false
      },

      // Available
      website: {
        type: DataTypes.STRING,
        allowNull: false
  }
  });

  return fosterHome;
};