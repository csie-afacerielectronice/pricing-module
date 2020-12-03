const db = require("./index.js")

db.sequelize.sync({force: true}).then(() => {
    console.log("tables created")
})