var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')





let weather = [
  { cityName: "London", description: "cloudy", main: "clouds", tempMin: 12.95, tempMax: 17.39 },
  {
    cityName: "Rio de Janeiro",
    main: "clear",
    description: "sunny",
    tempMin: 23.98,
    tempMax: 28.63,
  },
  {
    cityName: "Stockholm",
    description: "sunny",
    main: "clear",
    tempMin: 6.03,
    tempMax: 10.59,
  },
];


router.post('/weather', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=f2a471301547d22990ee72bc9e0856d1&units=metric`)
  .then(response => response.json())
  .then(data => {
    if(!weather.some(e=>e.cityName.toLowerCase() === req.body.cityName.toLowerCase())){
      const newCity = {
        cityName : data.cityName,
        description : data.weather[0].description,
        main : data.weather[0].main,
        temp_Min : data.main.temp_Min,
        temp_Max : data.main.temp_Max,
      }
      weather.push(newCity)
      res.json({result : true, weather : newCity})
    }else {
      res.json({result : false, error : "City already saved"});
    }   
  });
});


router.get("/weather", (req, res) => {
  res.json({weather})
});

router.get('/weather/:cityName', (req, res) => {
  const searchedWeather = weather.find(e => e.cityName === req.params.cityName);

  if (searchedWeather) {
    res.json({ result: true, weather: searchedWeather });
  } else {
    res.json({ result: false, error: 'City not found' });
  }
});

router.delete('/weather/:cityName', (req, res) => {
  const searchedWeather = weather.find(e => e.cityName === req.params.cityName);

  if (searchedWeather) {
    weather = weather.filter(e => e.cityName !== req.params.cityName);
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: 'City not found' });
  }
});

module.exports = router;
