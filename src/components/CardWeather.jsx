import React, { useState } from 'react'

const CardWeather = ({weather}) => {

    console.log(weather);
    const tempCelcius = (weather.main.temp -273.1).toFixed(2);
    const tempFahrenheit = (tempCelcius *9/5 + 32).toFixed(2) ;

    const [temp, setTemp] = useState(false)
    const handleClick = () => {
        setTemp(!temp)
    }

    return (
        <article className='card_weather'>
            <h1>Weather App</h1>
            <section className='card_content'>
                <h2 className='location_title'>{weather.name.toUpperCase()} , {weather.sys.country}</h2>
                <img className='weather_icon' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                <h3 className='weather_desc'>{weather.weather[0].description.toUpperCase()}</h3>
                <h3 className='temp'>{temp? (tempCelcius + "°C") : (tempFahrenheit + "°F")}</h3>
                <button className='btn btn_temp' onClick={handleClick}> Change temperature scale °C/°F</button> 
                <ul>
                    <li>Humidity: {weather.main.humidity} %</li>
                    <li>Wind speed: {weather.wind.speed} mph</li>
                </ul>          
            </section>
        </article>
    )
}

export default CardWeather