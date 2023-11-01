const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  userRef: { type: Schema.Types.ObjectId, ref: 'User' },
  choice:[{

    // type: mongoose.Schema.Types.ObjectId,
    // ref: "House",
    type:Map
   
   },
   ],
  locked: { type: Boolean, default: false }
});


module.exports = mongoose.model('Choice', requestSchema)