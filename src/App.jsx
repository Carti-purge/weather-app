const App = () => {

  return(
    <div className="container">
      {/* Search section*/}
      <div className="search-section">
        <form action="#" className="search-form">
          <img src="assets/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="" />          
          <input type="search" placeholder="Enter a city name"
           className="search-input" required />
        </form>
        <button className="location-button">
           <span class="material-symbols-rounded">my_location</span>
        </button>
      </div>


      {/* Search section*/}
      <div className="weather-section">
        <div className="current-weather">
          <img src="icons/clouds.svg" className="weather-icon" />
          <h2 className="temperature">20<span>°C</span></h2> 
          <p className="description">Partly cloudy</p>       
        </div>

        {/* hourly forecast */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

};

export default App;