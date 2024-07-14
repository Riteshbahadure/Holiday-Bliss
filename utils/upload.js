const multer = require("multer")
const { v4: uuid } = require("uuid")
const path = require("path")
const fs = require("fs")


const holidayStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    },
    destination: (req, file, cb) => {
        const folderName = "HolidayImage"
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName)
        }
        cb(null, folderName)
    }
})


module.exports = multer({ storage: holidayStorage }).array("hero", 5)