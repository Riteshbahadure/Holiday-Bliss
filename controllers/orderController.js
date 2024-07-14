const asyncHandler = require("express-async-handler")
const Holiday = require("../modals/Holiday")
const order = require("../modals/order")

exports.placeorder = asyncHandler(async (req, res) => {
    const { userId, holidayId } = req.body
    await order.create(req.body)
    res.json({ message: "order place success" })
})
exports.userOrderHistory = asyncHandler(async (req, res) => {
    // const { userId, holidayId } = req.body
    const result = await order.find({ userId: req.body.userId }).populate("holidayId")
    res.json({ message: "History Fetch Success", result })
})