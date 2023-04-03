const weatherData = require("../models/weatherModel");

exports.create = function (req, res) {
  let weather = new weatherData({
    name: req.body.name,
    temp: req.body.temp,
    feelsLike: req.body.feelsLike,
  });
  weather.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("New Location added successfully");
  });
};

exports.delete = function (req, res) {
  weatherData.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted succesfully");
  });
};

exports.update = function (req, res) {
  weatherData.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, data) {
      if (err) return next(err);
      res.send("Weather is updated.");
    }
  );
};

exports.get = function (req, res) {
  weatherData.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.send(data);
  });
};
