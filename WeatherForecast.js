const apiKey = "60ac7e7a6bfd0553aaf968f7627f3f0f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");
const nameWeather =  document.querySelector(".weathername");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".errorcityname").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else if (response.status == 400) {
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".errorcityname").style.display = "none";
    }

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png"
        nameWeather.innerHTML = "Cloudy";

    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png"
        nameWeather.innerHTML = "Sunny";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
        nameWeather.innerHTML = "Rainy";
    }
    else if (data.weather[0].main == "Mist" || data.weather[0].main == "Haze" ) {
        weatherIcon.src = "mist.png"
        nameWeather.innerHTML = data.weather[0].main;
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png"
        nameWeather.innerHTML = "Drizzle";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png"
        nameWeather.innerHTML = "Snow";
    }

}
searchbtn.addEventListener('click', () => {
    checkWeather(searchinput.value);

})

