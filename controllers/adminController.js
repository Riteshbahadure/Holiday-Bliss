const asyncHandler = require("express-async-handler")
const Holiday = require("../modals/Holiday")
const upload = require("../utils/upload")


exports.adminGetAllHolidays = asyncHandler(async (req, res) => {

    const result = await Holiday.find()

    res.json({ message: "Holiday Fetch Success", result })
})



exports.adminAddHolidays = asyncHandler(async (req, res) => {
    upload(req, res, async (err) => {

        if (err) {
            console.log(err)
            return res.status(400).json({ message: err.message || "upload error" })
        }

        const hero = []

        if (req.files) {
            for (const item of req.files) {
                hero.push(item.filename)
            }
        }


        await Holiday.create({ ...req.body, hero })

        res.status(201).json({ message: "Holiday Add Success" })
    })
})




exports.adminDeleteHolidays = asyncHandler(async (req, res) => {

    res.json({ message: "Holiday Delete Success" })
})




exports.adminUpdateHolidays = asyncHandler(async (req, res) => {

    res.json({ message: "Holiday Update Success" })
})

