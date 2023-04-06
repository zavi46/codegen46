
const express = require("express")
const router = express.Router()

const { getBlogPost } = require("../controllers/index")

router.route("/").get(getBlogPost)

module.exports = router

