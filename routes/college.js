const mongoose = require('mongoose');
const College = require('../model/College');
const express = require('express');
const router = express.Router();


// Save College
router.post('/', (req, res) => {
    const data = req.body;
    const newCollege = new College(data);
    newCollege.save((error) => {
        if (error) {
            console.log('Oops something went wrong');
            return res.status(500).json({
                error: error
            })
        } else {
            console.log('college has been saved');
            return res.status(201).json({
                message: 'College has been saved'
            })
        }
    })
});


module.exports = router
