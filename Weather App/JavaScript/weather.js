function GetWeather(){
    var rawResponse; 
    var jsonResponse;
    var temp; 
    var feelsLike; 
    var generalWeather;
    var generalWeatherArray;
    navigator.geolocation.getCurrentPosition(
        function(position){
            $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=1fe073b21b334372edaa6a634b91dbc0', function(json_data)
            {       
                rawResponse = JSON.stringify(json_data);
                jsonResponse = JSON.parse(rawResponse);
                temp = (jsonResponse.main.temp - 273.15);
                temp = Math.round((temp + Number.EPSILON) * 10 ) / 10;
                feelsLike = (jsonResponse.main.feels_like - 273.15);
                feelsLike = Math.round((feelsLike + Number.EPSILON) * 10 ) / 10;
                generalWeather = jsonResponse.weather[0].description;
                generalWeatherArray = generalWeather.split(" ");

                for (let i = 0; i < generalWeatherArray.length; i++) {
                    generalWeatherArray[i] = generalWeatherArray[i][0].toUpperCase() + generalWeatherArray[i].substr(1);
                }
                generalWeather = generalWeatherArray.join(" ");
                $("#GeneralWeather").html(generalWeather);
                $("#temperature").html( temp + "°C");
                $("#Humidity").html("Humidity: " + jsonResponse.main.humidity + "%");
                $("#wind").html("Wind speed: " + jsonResponse.wind.speed + "Kph");
                $("#feelsLikeTemperature").html("Feels Like: " + feelsLike + "°C");
                $("#city").html(jsonResponse.name);
                WeatherImage(jsonResponse.weather[0].main);
        });
    });
}

function WeatherImage(weatherMain)
{
    var weatherImage = document.getElementById("image");
    if("Clouds".localeCompare(weatherMain) == 0)
    {
        weatherImage.src = ".//images/cloudy.png";
        document.body.style.backgroundImage = setGrad("#9b9e9d", "#f2f5f4");
        setBottomTiles("tempContainer","cardbodycloud");
        setBottomTiles("windContainer","cardbodycloud");
        setBottomTiles("humidityContainer","cardbodycloud");
    }
    else if("Clear".localeCompare(weatherMain) == 0) 
    {
        weatherImage.src = ".//images/Clear.png"; 
        document.body.style.backgroundImage = setGrad("rgb(103, 197, 228)", "rgb(219, 219, 154)");
        setBottomTiles("tempContainer","cardbodyclear");
        setBottomTiles("windContainer","cardbodyclear");
        setBottomTiles("humidityContainer","cardbodyclear");
    }
    else if("Rain".localeCompare(weatherMain) == 0) 
    {
        weatherImage.src = ".//images/rain.png";
        document.body.style.backgroundImage = setGrad("#4f67f0", "#a2a3a8");  
        setBottomTiles("tempContainer","cardbodyrain");
        setBottomTiles("windContainer","cardbodyrain");
        setBottomTiles("humidityContainer","cardbodyrain");
    }
    else if("Snow".localeCompare(weatherMain) == 0) 
    {     
        weatherImage.src = ".//images/snow.png ";
        document.body.style.backgroundImage = setGrad("#8cd4e6", "#dcf0f5"); 
        setBottomTiles("tempContainer","cardbodysnow");
        setBottomTiles("windContainer","cardbodysnow");
        setBottomTiles("humidityContainer","cardbodysnow");
    }

    else if("ThunderStorm".localeCompare(weatherMain) == 0) 
    {
        weatherImage.src = ".//images/Thunderstorm.png"; 
        document.body.style.backgroundImage = setGrad("#f54c6e", "#8f8d8e"); 
        setBottomTiles("tempContainer","cardbodythunderstorm");
        setBottomTiles("windContainer","cardbodythunderstorm");
        setBottomTiles("humidityContainer","cardbodythunderstorm");
    }
    else if("Fog".localeCompare(weatherMain) == 0) 
    {
        weatherImage.src = ".//images/Fog.png";  
        document.body.style.backgroundImage = setGrad("#ccc4c5", "#f2edee");
        setBottomTiles("tempContainer","cardbodyfog");
        setBottomTiles("windContainer","cardbodyfog");
        setBottomTiles("humidityContainer","cardbodyfog");

    }
    else if("Drizzle".localeCompare(weatherMain) == 0) 
    {
        weatherImage.src = ".//images/Drizzle.png"; 
        document.body.style.backgroundImage = setGrad("#c1ced6", "#729eba");
        setBottomTiles("tempContainer","cardbodydrizzle");
        setBottomTiles("windContainer","cardbodydrizzle");
        setBottomTiles("humidityContainer","cardbodydrizzle");
    }
}

function setGrad(color1, color2) 
{
    var cont = "linear-gradient(" + color1 + ", " + color2 + ")";
    document.body.style.backgroundImage = "-o-" + cont;
    document.body.style.backgroundImage = "-webkit-" + cont;
    document.body.style.backgroundImage = "-ms-" + cont;
    document.body.style.backgroundImage = "-moz-" + cont;
}

function setBottomTiles(element,classListItem)
{   
    document.getElementById(element).setAttribute("class", "");
    document.getElementById(element).classList.add(classListItem);
}