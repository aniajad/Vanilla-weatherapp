function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
}

let apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
