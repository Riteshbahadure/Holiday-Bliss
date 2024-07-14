const { getPublicTours, getTourDetail } = require("../controllers/publicController")

const router = require("express").Router()


router
    .get("/tours", getPublicTours)
    .get("/tours/:id", getTourDetail)

module.exports = router