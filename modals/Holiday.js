const mongoose = require("mongoose")


const holidaySchema = new mongoose.Schema({
    name: {
        type: String
       
    },
    duration: {
        type: String
    },
    type: {
        type: String
    },
    groupSize: {
        type: String
    },
    price: {
        type: Number
    },

    hero: {
        type: [String]
    },

    overview: {
        type: String

    },

    highlights: {
        type: String

    },

    includes: {
        type: String

    },

    excludes: {
        type: String

    },

    itenary: {
        type: String

    },

    faq: {
        type: String
    },
    location: {
        type: String
    },

    discount: {
        type: String
    },


}, { timestamps: true })


module.exports = mongoose.model("holiday", holidaySchema)