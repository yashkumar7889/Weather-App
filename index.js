const apiKey = "34598103dff93507df5acb370463eae0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if(response.ok){
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "&#8451;";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src= "weather-app-img/images/clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src= "weather-app-img/images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src= "weather-app-img/images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src= "weather-app-img/images/mist.png"
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src= "weather-app-img/images/rain.png"
        }
        else if(data.weather[0].main == "Snow")
        {
            weatherIcon.src= "weather-app-img/images/snow.png"
        }
        else if(data.weather[0].main === "Haze")
        {
            weatherIcon.src= "weather-app-img/images/haze.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    else{
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});