document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.querySelector(".city-input");
    const getWeatherBtn = document.querySelector(".get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("descrp");
    const errorMessage = document.getElementById("error-msg");
    const API_KEY="7c8a1a56652992cada7bf6638d5795d2";
    
    getWeatherBtn.addEventListener("click", async()=>{
        const city = cityInput.value.trim();
        if(!city) return;
        //it may throw errr
        //server may be only continent it will take time
        try {
         const weatherData =  await fetchWeatherData(city)
         displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }

    })
   async function fetchWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
   const response =  await fetch(url);
   console.log(response);
   if(!response.ok) showError()
   const data = await response.json()

return data;
    }
    function displayWeatherData(weatherData){
     console.log(weatherData);
     const{name,main,weather}=data;
     console.log(name);
     console.log(main);
     console.log(weather);
    //  cityNameDisplay.textContent=name;
    }
    function showError(){
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
    }
});
