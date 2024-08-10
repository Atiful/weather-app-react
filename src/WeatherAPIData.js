import axios from "axios"

let url = `https://api.openweathermap.org/data/2.5/weather`;
async function WeatherAPIData(city) {
    try{
  let value =  await axios.get(`${url}?q=${city}&units=metric&appid=${import.meta.env.REACT_APP_API_KEY}`);

  let result = {
    name : value.data.name,
    temp : value.data.main.temp,
    humidity : value.data.main.humidity,
    feelLike : value.data.main.feels_like,
    tempMin : value.data.main.temp_min,
    tempMax : value.data.main.temp_max,
    weather : value.data.weather[0].description
  };

  return result;
    }
    catch(error){
        throw "data not found in API";
    }
}

export {WeatherAPIData};