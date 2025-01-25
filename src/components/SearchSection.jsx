
const SearchSection = () => {
    const handleCitySearch = (e) =>{
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        console.log(searchInput.value);
    }

  return (
    <div className="search-section">
        <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span class="material-symbols-rounded">search</span>
           <input type="search" placeholder="Enter a city name" className="search-input" required />
        </form>
        <button className="location-button">
        <span class="material-symbols-outlined">
my_location
</span>
        </button>
      </div>
  )
}

export default SearchSection
