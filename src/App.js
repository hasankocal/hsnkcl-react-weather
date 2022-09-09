
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { usePosition } from 'use-position';
import HavaDurumu from './component/HavaDurumu';

function App() {
  const [weather, setWeather] = useState('');
  const {
    latitude,
    longitude,
  } = usePosition();
  const getWeather = async (lon, lat) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${key}`)
      setWeather(data);
    } catch {
      return (
        <div>Loading..</div>
      )
    }
  };
  useEffect(() => {
    longitude && latitude && getWeather(longitude, latitude);
  }, [latitude, longitude])
  return (
    <div className="App">
      <div className='App-header'>
        Hava Durumu
        <HavaDurumu hava={weather} />
      </div>
    </div>
  );
}

export default App;
