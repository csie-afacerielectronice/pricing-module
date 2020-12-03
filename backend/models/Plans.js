module.exports = function(sequelize, DataTypes) {
    var Plans = sequelize.define("plans", {
        price: DataTypes.DECIMAL(10, 2),
        offer: DataTypes.STRING,
        call_to_action: DataTypes.STRING,
        value_proposition: DataTypes.STRING,
    })
    
    return Plans
}