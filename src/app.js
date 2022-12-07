function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
