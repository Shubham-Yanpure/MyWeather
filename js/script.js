let weather = {
    "apiKey" : "0ed2f83385475a7db60029cf2c7c3e5f",
    fetchWeather : function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid=0ed2f83385475a7db60029cf2c7c3e5f"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;

        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText = "Wind speed: "+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    document.querySelector(".weather").classList.add("loading");
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        document.querySelector(".weather").classList.add("loading");
        weather.search();
    }
})
weather.fetchWeather("pune");
document.querySelector(".search input").focus();
