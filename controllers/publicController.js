const asyncHandler = require("express-async-handler")
const Holiday = require("../modals/Holiday")


exports.getPublicTours = asyncHandler(async (req, res) => {

    // const result = await Holiday.find().populate("holiday", { name: 1, price: 1, location: 1, hero: 1, discount: 1 })
    const result = await Holiday.find()


    res.status(200).json({ message: "Public tours fetch success", result })
})


exports.getTourDetail = asyncHandler(async (req, res) => {
    const { id } = req.params


    const result = await Holiday.findById(id)

    console.log(result)

    res.status(200).json({ message: "Public tours fetch success", result })
})