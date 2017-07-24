var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var messageSchema = new Schema({
  username: {type: String, required: true},
  message: {type: String, require:true}
});

// export our model
module.exports = mongoose.model('Message', messageSchema);
