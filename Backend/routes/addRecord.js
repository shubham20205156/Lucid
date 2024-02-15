const express = require('express');
const User = require('../models/User')
const record = require('../models/Records')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser.js');
const JWT_SECRET = 'whatTheFuck';

// Create a user using : POST "/api/auth/createuser" No login required
router.post('/add', [
    body('type','enter valid type'),
    body('host', 'Enter a valid host').isLength({min:2}),
    body('value', 'Enter a valid name').isLength({ min: 3 }),
    body('ttl', 'Enter a valid ttl')

], async (req, res) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    
    try {
       
       const recordVal = await record.create({
            type:req.body.type,
            host: req.body.host,
            value: req.body.value,
            ttl: req.body.ttl,
        })
       
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})
router.get('/retrive', async (req, res) => {
  
    
    try { 
        const records = await record.find();      
         
        res.json({records});
       
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})

module.exports = router;