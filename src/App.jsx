import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import { useState } from "react";
import { weatherCodes } from "./constants";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  // fetches weather details based on the API URL
  const getWeatherDetails = async (API_URL) => {
    try{
      const response = await fetch(API_URL);
      const data = await response.json();

      // extract current weather
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code));

      setCurrentWeather({temperature, description, weatherIcon})
    }
    catch(error){
      console.log(error);
    }

  }

  return(
    <div className="container">
      {/* Search section*/}
     <SearchSection getWeatherDetails={getWeatherDetails} />
     


      {/* Weather section*/}
      <div className="weather-section">
        
        <CurrentWeather currentWeather={currentWeather}/>
        

        {/* hourly forecast */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeatherItem />
          </ul>
        </div>
      </div>
    </div>
  )

};

export default App;