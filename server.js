const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = 3002

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
"mongodb+srv://ritik:sinha@cluster0.stzb7ed.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// const Weather = mongoose.model('WeatherData', { location:String,temp: Number,feelsLike:Number });

// const newLocation = new Weather({ location:'Kolkata',temp : 32, feelsLike:38 });
// newLocation.save().then(() => console.log('done'));

const data = require('./routes/weatherRoutes'); 
app.use('/weather',data);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;