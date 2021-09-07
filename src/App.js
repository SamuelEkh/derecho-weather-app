import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import { useEffect, useState } from 'react';
import SearchHeader from './components/SearchHeader';
import Degree from './components/cards/Degree';
import FeelsLike from './components/cards/FeelsLike';
import Condition from './components/cards/Condition';
import UVIndex from './components/cards/UVIndex';
import Humidity from './components/cards/Humidity';
import Wind from './components/cards/Wind';
import WindDir from './components/cards/WindDir';
import Gusts from './components/cards/Gusts';
import AQI from './components/cards/AQI';
require('dotenv').config()


function App() {
  const [ searchValue, setSearchValue ] = useState('Stockholm');
  const [ weatherData, setWeatherData ] = useState([]);

  const getSearchValue = (value) => {
    setSearchValue(value);
  }

  useEffect(() => {
    apiFetcher(searchValue);
  }, [searchValue])
 
  const apiFetcher = async (searchValue) => {
    const data = await fetch(`${process.env.API_BASE}/derecho/${searchValue}`);
    const dataJSON = await data.json();

    console.log(dataJSON);

  const weatherObject = {
    degrees: dataJSON.current.temp_c,
    feels_like: dataJSON.current.feelslike_c,
    weather_condition: dataJSON.current.condition.text,
    condition_photo: dataJSON.current.condition.icon,
    wind: dataJSON.current.wind_kph,
    windDir: dataJSON.current.wind_dir,
    gusts: dataJSON.current.gust_kph,
    humidity: dataJSON.current.humidity,
    UV_Index: dataJSON.current.uv,
    AirQI: dataJSON.current.air_quality

  }
  setWeatherData(weatherObject);
  }

  return (
    <main className="App">
      <Header />
      <Searchbar apiFetcher={apiFetcher} getSearchValue={getSearchValue} />
      <SearchHeader searchValue={searchValue} />
      <div className="width-container">
        <section className="card-container">
          <Degree degree={weatherData.degrees} />
          <FeelsLike feels_like={weatherData.feels_like} />
          <Condition condition={weatherData.weather_condition} conditionPhoto={weatherData.condition_photo} />
          <UVIndex UVIndex={weatherData.UV_Index} />
          <Humidity humidity={weatherData.humidity} />
          <Wind wind={weatherData.wind} />
          <WindDir windDir={weatherData.windDir} />
          <Gusts gusts={weatherData.gusts} />
          <AQI aqi={weatherData.AirQI} />
        </section>
      </div>
    </main>
  );
}

export default App;
