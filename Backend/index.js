
const connectToMongo = require('./db');
var cors = require('cors')

connectToMongo(); 
const express = require('express')
const app = express()
const port = 5000


app.use(cors())
app.use(express.json());
// availabel routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/stocks',require('./routes/stocks'));
app.use('/api/getname',require('./middleware/getname'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})