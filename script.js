// Ninja Weather Api
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b045b45242msh4b134d3005fa460p13bd1bjsn374b2f5ea3ca",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  // To Capitalize user Input
  function capitalizeFirstLetter(city) {
    return city.charAt(0).toUpperCase() + city.slice(1);
  }
  cityname.innerHTML = capitalizeFirstLetter(city);
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // Unix time to Standard
      function timeConvertor(unix) {
        let unix_timestamp = unix;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime =
          hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
      }

      // To Change Inner Html
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = timeConvertor(response.sunrise);
      sunset.innerHTML = timeConvertor(response.sunset);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

const button = document.querySelector("#subm");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

var randomCities = [
  "Tumkur",
  "Cambridge",
  "Sydney",
  "Perth",
  "Paris",
  "London",
];
var randNum = Math.floor(Math.random() * randomCities.length);
var selected = randomCities[randNum];
console.log(selected);
console.log(randNum);

getWeather(selected);
const getPop = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var i = "1";

      console.log(response);
      Cloud_pct1.innerHTML = response.cloud_pct;
      Feels_like1.innerHTML = response.feels_like;
      Humidity1.innerHTML = response.humidity;
      Max_temp1.innerHTML = response.max_temp;
      Min_temp1.innerHTML = response.min_temp;
      Sunrise1.innerHTML = response.sunrise;
      Sunset1.innerHTML = response.sunset;
      Temp1.innerHTML = response.temp;
      Wind_speed1.innerHTML = response.wind_speed;
      Wind_speed1.innerHTML = response.wind_speed;
      Wind_degrees1.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};
getPop();

const getPop2 = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=cambridge",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var i = "1";

      console.log(response);
      Cloud_pct2.innerHTML = response.cloud_pct;
      Feels_like2.innerHTML = response.feels_like;
      Humidity2.innerHTML = response.humidity;
      Max_temp2.innerHTML = response.max_temp;
      Min_temp2.innerHTML = response.min_temp;
      Sunrise2.innerHTML = response.sunrise;
      Sunset2.innerHTML = response.sunset;
      Temp2.innerHTML = response.temp;
      Wind_speed2.innerHTML = response.wind_speed;
      Wind_speed2.innerHTML = response.wind_speed;
      Wind_degrees2.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};
getPop2();

const getPop3 = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var i = "1";

      console.log(response);
      Cloud_pct3.innerHTML = response.cloud_pct;
      Feels_like3.innerHTML = response.feels_like;
      Humidity3.innerHTML = response.humidity;
      Max_temp3.innerHTML = response.max_temp;
      Min_temp3.innerHTML = response.min_temp;
      Sunrise3.innerHTML = response.sunrise;
      Sunset3.innerHTML = response.sunset;
      Temp3.innerHTML = response.temp;
      Wind_speed3.innerHTML = response.wind_speed;
      Wind_speed3.innerHTML = response.wind_speed;
      Wind_degrees3.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};
getPop3();
