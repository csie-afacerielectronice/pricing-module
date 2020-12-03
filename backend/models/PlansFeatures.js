module.exports = function(sequelize, DataTypes) {
    var PlansFeatures = sequelize.define("plans_features", {
        planId: DataTypes.INTEGER,
        featureId: DataTypes.INTEGER
    })
    
    return PlansFeatures
}