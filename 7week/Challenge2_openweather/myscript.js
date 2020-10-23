let button = document.getElementById("weatherSearch");

button.addEventListener('click', function(){

  let cityname = document.getElementById("searchTxt").value;
  let apiKey = "fd9f3743b23cb8f9d4917a98492f3e1a";

  let xhttp = new XMLHttpRequest();

  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`;

  xhttp.open("GET", apiUrl, true);

  let resultName = document.getElementById("resultName");
  let resultWeather = document.getElementById("resultWeather");
  let resultTemperatur = document.getElementById("resultTemperatur");

    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
          let result = document.getElementById("result");

          let obj = [];

          obj = JSON.parse(this.responseText);

          let name = obj['name'];

          resultName.innerHTML = name;

          let temperatur = parseInt(obj['main']['temp']);

          resultTemperatur.innerHTML = `${temperatur}°`;

          let weather = obj['weather'][0]['description'];

          resultWeather.innerHTML = weather;

        }
    }
    xhttp.send();
});

//http://api.openweathermap.org/data/2.5/weather?q=London&appid=fd9f3743b23cb8f9d4917a98492f3e1a

/**let button = document.getElementById("weatherSearch");

button.addEventListener('click', function(){

  let cityname = document.getElementById("searchTxt").value;
  let apiKey = "139a0b46ffd8a6d1bb30a02289bf4132";

  let resultName = document.getElementById("resultName");
  let resultWeather = document.getElementById("resultWeather");
  let resultTemperatur = document.getElementById("resultTemperatur");

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {

    let name = data['name'];

    resultName.innerHTML = name;

    let temperatur = parseInt(data['main']['temp']);

    resultTemperatur.innerHTML = `${temperatur}°`;

    let weather = data['weather'][0]['description'];

    resultWeather.innerHTML = weather;

  });
}); */