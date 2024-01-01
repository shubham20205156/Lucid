const jwt = require('jsonwebtoken');
const JWT_SECRET = 'whatTheFuck';
const fetchuser = (req, res, next) => {

    // get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzY2NjNzU1YThhNGViNGQxOTc0NTc2In0sImlhdCI6MTY5ODYwMTI2N30.Gi_QeHgJNIU2-QbMSFrV8gfo8oaEjY2e5emQ4UVw1lA";
    
    if (!token) {    
        res.status(401).send({ error: "please authenticate using a valid token 1" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        
        res.status(401).send({ error: "please authenticate using a valid token 2" });

    }

}

module.exports = fetchuser;