const { placeorder, userOrderHistory } = require("../controllers/orderController")
const { protectedRoute } = require("../utils/protected")

const router = require("express").Router()


router
    .post("/place-order", protectedRoute, placeorder)
    .get("/history", protectedRoute, userOrderHistory)


module.exports = router