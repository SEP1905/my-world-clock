function updateTime() {
    //london
    let londonElement = document.querySelector("#london");
    if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Berlin
    let berlinElement = document.querySelector("#berlin");
    if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Jamaica
    let jamaicaElement = document.querySelector("#jamaica");
    if (jamaicaElement) {
    let jamaicaDateElement = jamaicaElement.querySelector(".date");
    let jamaicaTimeElement = jamaicaElement.querySelector(".time");
    let jamaicaTime = moment().tz("America/Jamaica");

    jamaicaDateElement.innerHTML = jamaicaTime.format("MMMM Do YYYY");
    jamaicaTimeElement.innerHTML = jamaicaTime.format("h:mm:ss [<small>]A[</small>]");
    }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);