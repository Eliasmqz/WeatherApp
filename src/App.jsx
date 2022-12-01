import { useEffect, useState } from 'react'
import axios from 'axios';
import CardWeather from './components/CardWeather';

function App() {



  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();


const success = (pos) => {
  const newCoords = {
    lat:pos.coords.latitude,
    lon:pos.coords.longitude
  }

  setCoords(newCoords)
}

useEffect(() => {
  if (coords){
    const apiKey = "fce5824b2caf91326ca083535541f05a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;
    setTimeout(() => {
      axios.get(url)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
    }, 2000);
  }
}, [coords])


useEffect(() => {
  navigator.geolocation.getCurrentPosition(success)
}, [])



  return (
    <div className="App" style={ weather? {backgroundImage: `url(/${weather.weather[0].icon}.jpg)`} :{backgroundColor: "darkblue"}}>
      <div>
        {
          weather ? <CardWeather weather= {weather} /> :
          <span className="loader"></span>
        }
      </div>
    </div>
  )
}

export default App
