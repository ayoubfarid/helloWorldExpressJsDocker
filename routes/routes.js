const express = require('express');
const Model = require('../model/model')
const router = express.Router()
//Post Method
router.post('/post', (req, res) => {
    const data = new Model({
        subject: req.body.subject,
        content: req.body.content
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:_id', async(req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.put('/update/:_id', async(req, res) => {
    try {
        
        const updatedpost = await Model.updateOne({_id:req.params._id}, {$set: req.body});
        res.status(200).json(updatedpost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
  
})

//Delete by ID Method
router.delete('/delete/:_id', async(req, res) => {
    try {
       
       
        const data = await Model.deleteOne({_id:req.params._id})
        res.send(`Document with ${data.subject} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;