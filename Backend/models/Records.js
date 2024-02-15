const mongoose = require('mongoose');
const { Schema } = mongoose;

const Records = new Schema({
    type:{
         type:String,
         required:true
    },
    host:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
    
    ttl:{
        type:String,
        required:true
    },

  });
   
  const record = mongoose.model('Records',Records);
  record.createIndexes();
  module.exports = record;