const express = require("express");
const router = express.Router();


router.get("/students" , (req , res) => {
    res.send("get request from router folder")
})


module.exports = router;
