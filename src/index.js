import "./style.css";

export function renderH1() {
  const elH1 = document.createElement("h1");
  elH1.innerText = "Приложение Погода";
  elH1.className = "header-appName";
  document.body.append(elH1);
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
}

export function handleForm() {
  const elForm = document.querySelector(".form-main");

  elForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(elForm);
    console.log(formData);
    const city = formData.get("city");

    const elP = document.createElement("p");
    elP.textContent = `в городе ${city} сегодня тепло`;
    document.body.append(elP);
  });
}

export function getMyLocation() {
  return "Tver";
}

export async function getMyIP() {
  const url = "https://get.geojs.io/v1/ip";
  const response = await fetch(url);
  const result = await response.text();
  console.log(result);
  return result;
}

renderH1();
renderForm();
handleForm();
getMyIP();
