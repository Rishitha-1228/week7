const mongoose = require("mongoose");

const paymentSchema =
new mongoose.Schema({

  bookingId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Booking"
  },

  amount:{
    type:Number,
    required:true
  },

  status:{
    type:String,
    default:"Paid"
  }

},{
  timestamps:true
});

module.exports =
mongoose.model("Payment",paymentSchema);