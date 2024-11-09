const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')
require('dotenv').config();
const uri = process.env.MONGO_URI;
mongoose.connect(
'uri',{ useNewUrlParser: true,
   useUnifiedTopology: true
    
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

const messageSchema = new mongoose.Schema({
    sender:{type:String,required :true,},
    receiver:{type:String,required :true,},
    messageContent:{type:String,required :true,},
    timeStamp :{type: Date, default: Date.now},
    readStatus:{type:boolean, default:false}
})
const Message = mongoose.model('Message', messageSchema);
module.exports= Message