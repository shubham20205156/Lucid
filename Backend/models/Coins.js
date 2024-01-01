const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoinsSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },
    
    marketCap:{
        type:Number,
        required:true
    },
    DailyChange:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },

  });
   
  const Coins = mongoose.model('Coins',CoinsSchema);
  Coins.createIndexes();
  module.exports = Coins;