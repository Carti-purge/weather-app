import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";

const App = () => {
  const getWeatherDetails = (API_URL) => {

  }

  return(
    <div className="container">
      {/* Search section*/}
     <SearchSection getWeatherDetails={getWeatherDetails} />
     


      {/* Weather section*/}
      <div className="weather-section">
        
        <CurrentWeather />
        

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