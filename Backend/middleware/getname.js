const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'whatTheFuck';
const User = require('../models/User')
router.post('/getusername', async (req, res) => {

    const { token } = await req.body;
    if(!token){
        return res.status(400).json({ error: 'JWT token must be provided'})
    }   
    // const token2 = JSON.parse(token);
    // const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzY2NjNzU1YThhNGViNGQxOTc0NTc2In0sImlhdCI6MTY5ODYwMTI2N30.Gi_QeHgJNIU2-QbMSFrV8gfo8oaEjY2e5emQ4UVw1lA";
    const data = jwt.verify(token, JWT_SECRET);
    //    const data = '65337ff2ee59ef20867d4252';
    const user = await User.findById(data.user.id);
    res.send(user);

})

module.exports = router;