const mongoose = require("mongoose");

const bookingSchema =
new mongoose.Schema({

  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  serviceId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Service"
  },

  bookingDate:{
    type:String,
    required:true
  },

  bookingTime:{
    type:String,
    required:true
  },

  status:{
    type:String,
    default:"Pending"
  }

},{
  timestamps:true
});

module.exports =
mongoose.model("Booking",bookingSchema);