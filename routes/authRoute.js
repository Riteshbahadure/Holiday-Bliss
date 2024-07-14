// const { getAllUsers } = require("../controllers/adminController")
const { continueWithGoogle, registerUser, loginUser, logout, getAllUsers } = require("../controllers/authController")


const router = require("express").Router()


router
    .get("/get", getAllUsers)
    .post("/continue-with-google", continueWithGoogle)
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/logout", logout)


module.exports = router