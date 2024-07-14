const asyncHandler = require("express-async-handler")
const sendmsg = require("../modals/sendmsg")
// const Todo = require("../model/Todo")

exports.getmsg = asyncHandler(async (req, res) => {
    const result = await sendmsg.find()
    res.json({ message: "Todo Fetch Success", result })
})
exports.sendmsg = asyncHandler(async (req, res) => {
    await sendmsg.create(req.body)
    res.json({ message: "Todo Add Success" })
})
