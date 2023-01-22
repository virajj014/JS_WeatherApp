let temperature = document.getElementById('placetemp');
let weathertype = document.getElementById('weathertype');
let weathertypeimg = document.getElementById('weather-type-img');


function citysubmit() {
    let cityname = document.getElementById('mycity').value;
    // let cityname = "jabalpur";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a5905030ca9c50c3a516d13d5fd3bd59`
    // console.log(url);
    document.getElementById('displaycityname').innerHTML = cityname;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('city-error').style.display = 'none'
        console.log(data);
        weathertype.innerHTML = data.weather[0].main;
        temp = data.main.temp - 273.15;
        temperature.innerHTML = temp.toFixed(2) + ' °C';
        document.getElementById('weathercard').style.display = 'flex'

        if (data.weather[0].main == 'Clouds') {
            weathertypeimg.src = './icons/cloudy.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weathertypeimg.src = './icons/sun.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weathertypeimg.src = './icons/rain.png';
        }
        else if (data.weather[0].main == 'Snow') {
            weathertypeimg.src = './icons/snowman.png';
        }
        else if (data.weather[0].main == 'Thunderstorm') {
            weathertypeimg.src = './icons/thunder.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weathertypeimg.src = './icons/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weathertypeimg.src = './icons/mist.png';
        }
        else if (data.weather[0].main == 'Smoke') {
            weathertypeimg.src = './icons/fog.png';
        }
        else if (data.weather[0].main == 'Haze') {
            weathertypeimg.src = './icons/haze.png';
        }
        else if (data.weather[0].main == 'Dust') {
            weathertypeimg.src = './icons/dust.png';
        }
        else if (data.weather[0].main == 'Fog') {
            weathertypeimg.src = './icons/fog.png';
        }
        else if (data.weather[0].main == 'Sand') {
            weathertypeimg.src = './icons/sand.png';
        }
        else if (data.weather[0].main == 'Ash') {
            weathertypeimg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Squall') {
            weathertypeimg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Tornado') {
            weathertypeimg.src = './icons/hurricane.png';
        }
        else {
            weathertypeimg.src = './icons/sun.png';
        }

    })
        .catch((data) => {
            document.getElementById('city-error').style.display = 'flex'
            document.getElementById('weathercard').style.display = 'none'
        })
}