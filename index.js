const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: "./.env" })
const cookieParser = require("cookie-parser")


const app = express()


app.use(express.json())
app.use(cors({
    origin: true,
    // origin: "https://holiday-q7jo.onrender.com",
    credentials: true
}))
app.use(cookieParser())
app.use(express.static("dist"))
app.use(express.static("HolidayImage"))



app.use("/api/admin", require("./routes/adminRoute"))
app.use("/api/public", require("./routes/publicRoute"))
app.use("/api/auth", require("./routes/authRoute"))
app.use("/api/order", require("./routes/orderRoute"))
app.use("/api/msg", require("./routes/sendMsgRoute"))


app.use("*", (req, res) => {
    // res.status(404).json({ message: "Resource Not Found" })
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})


app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something went wrong" })
})


mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server Running"))
})