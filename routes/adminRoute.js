const { adminGetAllHolidays, adminAddHolidays, adminDeleteHolidays, adminUpdateHolidays } = require("../controllers/adminController")
const User = require("../modals/User")

const router = require("express").Router()



router
    .get("/holidays", adminGetAllHolidays)
    .post("/add-holiday", adminAddHolidays)
    .delete("/delete-holiday/:id", adminDeleteHolidays)
    .put("/update-holiday/:id", adminUpdateHolidays)




module.exports = router