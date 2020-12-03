const Sequelize = require("sequelize")

const dbConfig = require("../config/db.json")

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: "mysql",
    host: dbConfig.host
})


const db = {}

sequelize.authenticate().then(() => {
    console.log("autentificare cu succes")
}).catch((err) => {
    console.log(err)
})

db.Plans = require("./Plans")(sequelize, Sequelize.DataTypes)
db.Features = require("./Features")(sequelize, Sequelize.DataTypes)
db.PlansFeatures = require("./PlansFeatures")(sequelize, Sequelize.DataTypes)

db.Plans.belongsToMany(db.Features, {through: db.PlansFeatures})
db.Features.belongsToMany(db.Plans, {through: db.PlansFeatures})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db