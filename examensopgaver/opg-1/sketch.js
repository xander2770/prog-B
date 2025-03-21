let url = 'https://api.open-meteo.com/v1/forecast?latitude=55.6761&longitude=12.5683&current_weather=true'
let data
let Temperaturen
let Vindhastighed
let Vejrkode
async function getdata(url) {
    let response = await fetch(url);
    data = await response.json();
    console.log(data);
    updateWeather();
}

async function updateWeather() {
  let res = await (await fetch('./weather_codes.json')).json()
  let currentHour = data.current_weather.time.slice(-5)
  let weatherCode = data.current_weather.weathercode;

  let weather;
  if (data.current_weather.is_day === 1) {
    weather = res[weatherCode].day;
  } else {
    weather = res[weatherCode].night;
  }
  console.log(weather);

  document.getElementById('Vejrkode').innerText = `Det er: ${weather['description']}`;
  document.getElementById('Temperaturean').innerText = `Temperature: ${data.current_weather.temperature}°C`;
  document.getElementById('Vindhastighed').innerText = `Wind Speed: ${data.current_weather.windspeed} m/s`;
  
}

function setup() {
  getdata(url);

}