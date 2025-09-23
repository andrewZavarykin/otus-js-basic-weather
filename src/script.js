import "./style.css";

export function renderH1() {
  const elH1 = document.createElement("h1");
  elH1.textContent = "Приложение Погода";
  elH1.className = "header-appName";
  document.body.append(elH1);
  return elH1;
}

export function renderForm() {
  const elForm = document.createElement("form");
  elForm.className = "form-main";

  const elLabel = document.createElement("label");
  elLabel.htmlFor = "city";
  elLabel.textContent = "Укажите город:";

  const elInput = document.createElement("input");
  elInput.type = "text";
  elInput.name = "city";
  elInput.id = "city";
  elInput.required = true;

  const elButton = document.createElement("button");
  elButton.type = "submit";
  elButton.textContent = "отправить";

  elForm.append(elLabel, elInput, elButton);
  document.body.append(elForm);
  return elForm;
}

export function handleForm() {
  const elForm = document.querySelector(".form-main");

  // elForm.addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   const formData = new FormData(elForm);
  //   console.log(formData);
  //   const city = formData.get("city");

  //   const elP = document.createElement("p");
  //   elP.textContent = `в городе ${city} сегодня тепло`;
  //   document.body.append(elP);
  // });
}

export async function renderLocalWeather() {
  const elContainer = document.createElement("div");
  elContainer.className = "weather-container";

  const elP = document.createElement("p");
  const ip = await getMyIP();
  const city = await getMyLocation(ip);
  const temp = await getMyWeather(city);

  elP.textContent = `в городе ${city} температура сегодня ${temp}`;
  elContainer.append(elP);
  document.body.append(elContainer);
}

export async function getMyLocation(ip) {
  const url = `https://get.geojs.io/v1/ip/geo/${ip}.json`;
  const response = await fetch(url);
  const json = await response.json();
  return json.city;
}

export async function getMyIP() {
  const url = "https://get.geojs.io/v1/ip";
  const response = await fetch(url);
  return response.text();
}

export async function getMyWeather(city) {
  const key = "375f8caea31fabad7715ac0882e0aa17";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  const response = await fetch(url);
  const json = await response.json();
  return json.main.temp;
}
