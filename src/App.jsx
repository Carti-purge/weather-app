import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";

const App = () => {

  return(
    <div className="container">
      {/* Search section*/}
     <SearchSection />
     


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