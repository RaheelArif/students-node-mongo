const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel")

router.get("/" , (req , res) => {
   Student.find().then(std => res.json(std))
})



//postman software
router.post("/" , (req , res) => {
    const newStd = new Student({
        name: req.body.name,
        age: req.body.age
    })
    newStd.save().then(student => res.json(student))
 })


 router.delete("/:id" , (req , res) => {
 
    Student.findById(req.params.id)
    .then(std => std.remove().then(() => res.send("deleted")))
    .catch(err => res.status(404).json("user not deleted"))
 })




module.exports = router;
