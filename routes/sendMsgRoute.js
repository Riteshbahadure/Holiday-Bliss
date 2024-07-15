// const { getAllTodos, addTodo } = require("../controllers/sendmsgController")

const { getmsg, sendmsg } = require("../controllers/sendmsgController")
// const sendmsg = require("../modals/sendmsg")

const route = require("express").Router()

route
    .get("/get", getmsg)
    .post("/add", sendmsg)
module.exports = route