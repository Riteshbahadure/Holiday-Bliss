const asyncHandler = require("express-async-handler")
const { OAuth2Client } = require("google-auth-library")
const User = require("../modals/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


exports.continueWithGoogle = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { credential } = req.body
    const client = new OAuth2Client({ clientId: process.env.GOOGLE_CLIENT_ID })

    const { payload } = await client.verifyIdToken({ idToken: credential })
    const result = await User.findOne({ email: payload.email })
    if (result) {
        // login
        const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("travler", token, { httpOnly: true, maxAge: 100000 * 60000 * 60000 * 24000 })
        res.json({ message: "login Success", result })
    } else {
        // register
        await User.create({
            name: payload.name,
            email: payload.email,
            photo: payload.picture
        })
        const token = jwt.sign({ userId: x._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("travler", token, { httpOnly: true, maxAge: 100000 * 6000 * 6000 * 24 })
        res.json({ message: "resgiter Success", result: x })
    }
})


exports.registerUser = asyncHandler(async (req, res) => {
    const { password, email } = req.body
    const isFound = await User.findOne({ email })
    if (isFound) {
        return res.status(404).json({ message: "Email Already Exist" })
    }
    const hashPass = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, password: hashPass, role: "user" })
    //send Email
    // await sendEmail({ to: email, subject: "Register Success", message: `<h1>welcome, ${req.body.name}</h1>` })
    res.json({ message: `${req.body.name} Register Success` })
})
exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //step 1
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(404).json({ message: "Email Not Found" })
    }

    //step 2
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(404).json({ message: "password do Not Found" })
    }

    //step 3
    const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "6h" })
    //step 4
    res.cookie("travler", token, { httpOnly: true, maxAge: 900000000 })
    res.json({
        message: "login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
            role: result.role,
        }
    })
})
exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie("auth-token")
    res.json({ message: "Logout success" })
})

exports.getAllUsers = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.json({ message: "User fetch success", result })
})