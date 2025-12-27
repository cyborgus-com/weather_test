console.log("test");

const apiKey = "JL9BEJQWXRWZE2J6H27YAGDFF";
const button = document.querySelector("button");
const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const tom2 = document.querySelector("#tomorrow2");
const tom3 = document.querySelector("#tomorrow3");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("input").value;
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      //   console.log(response.days[0].temp);
      today.innerText = `Temperature in ${input} on ${response.days[0].datetime}: ${response.days[0].temp} F`;
      tomorrow.innerText = `Temperature in ${input} on ${response.days[1].datetime}: ${response.days[1].temp} F`;
      tom2.innerText = `Temperature in ${input} on ${response.days[2].datetime}: ${response.days[2].temp} F`;
      tom3.innerText = `Temperature in ${input} on ${response.days[3].datetime}: ${response.days[3].temp} F`;
    })
    .catch(function (error) {
      alert(error);
    });
});
