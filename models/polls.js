// has zero or 1 feedback

module.exports = function (sequelize, DataTypes) {
  var Polls = sequelize.define("polls", {
    // Giving the Polls model a name of type STRING
    name: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // Associating Polls with Feedback
          // When an User is deleted, also delete any associated Posts
          Polls.hasMany(models.Feedback, {
            onDelete: "cascade"
          });
          Polls.belongsTo(models.Events, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });

  // Polls.associate = function(models) {
  //   // Associating Polls with Feedback
  //   // When an User is deleted, also delete any associated Posts
  //   Polls.hasMany(models.Feedback, {
  //     onDelete: "cascade"
  //   });
  //   Polls.belongsTo (models.Events, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  return Polls;
};


//   add belongs to events