module.exports = function(sequelize, DataTypes) {
    var Features = sequelize.define("features", {
        name: DataTypes.STRING
    })
    
    return Features
}