const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Coins = require('../models/Coins');
const { body, validationResult } = require('express-validator');


// route:1 get all the  notes using GET "api/auth/fetchallnotes" login required
router.post('/fetchCoins',async (req, res) => {

    try {
        const {userId}=req.body;
        const coins = await Coins.find({ user: userId});
        res.json(coins);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
    }
})

// route:2 add note use POST "api/auth/addnote" login required
router.post('/addCoins', [   
    body('name').notEmpty().isString(),
    body('price').isNumeric(),
    body('marketCap').isNumeric(),
    body('DailyChange').isNumeric(),
    body('Image').isString(),
    body('quantity').isNumeric(),
    body('user').isString()

], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, price, marketCap,DailyChange,Image,quantity,user } = req.body;
        const coin = new Coins({
            name, price, marketCap,DailyChange,Image,quantity,user
        });

        const savedCoin = await coin.save();
        res.json(savedCoin);
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while saving the coin." });
    }
});

module.exports = router;