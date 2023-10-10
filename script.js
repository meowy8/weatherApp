const temperature = document.getElementById('temperature')
const searchButton = document.getElementById('search-btn')
const input = document.getElementById('input')
const locationName = document.getElementById('location')
const weatherIcon = document.getElementById('weather-icon')

searchButton.addEventListener('click', () => {
  let inputValue = input.value
  if (inputValue) {
    fetchWeatherData(inputValue)
  }
})


async function fetchWeatherData(inputValue) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=911c51c90b2644cd9ae172628232509&q=${inputValue}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    console.log(data);
    console.log(data.current.temp_c);
    

    temperature.innerText = data.current.temp_c + "°C";
    locationName.innerText = data.location.name
    weatherIcon.src = data.current.condition.icon
    input.value = ''
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    temperature.innerText = 'Data Unavailable'
    weatherIcon.src = 'Images/158398.png'
  }
}

