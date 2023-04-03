const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let weatherSchema = new Schema({
    name: {type: String, required: true},
    temp: {type: Number, required: true},
    feelsLike : {type:Number, required:true}
});

//Export the model
module.exports = mongoose.model('weatherData', weatherSchema);
