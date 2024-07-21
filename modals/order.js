const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: false },
    holidayId: { type: mongoose.Types.ObjectId, ref: "holiday", required: false },
    address:{type: String, required:false}
}, { timestamps: true })


module.exports = mongoose.model("order", orderSchema)