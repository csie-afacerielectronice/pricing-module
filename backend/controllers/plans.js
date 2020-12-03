const db = require("../models/index")

module.exports.findAll = (req, res) => {
    db.Plans.findAll({
        include: [
            {
                model: db.Features
            }
        ]
    }).then((plans) => {
        res.status(200).send(plans)
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Server error')
    })
}