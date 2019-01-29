const yourName = document.getElementById("name");
const greeting = document.getElementById("intro_p");
const greetingValue = greeting.innerText;
const history1 = document.getElementById("history1");
const history2 = document.getElementById("history2");
const inputs = Array.from(document.getElementsByTagName("input"));

//handler function for input updates
function updater(event) {
  let text = event.target.value;
  document.getElementById(event.target.id + "a").innerText = text;
}


//Adding Handlers for the inputs
inputs.forEach(item => {
  if (item.id != "hobbies") {
    item.addEventListener("keyup", updater)
  } else {
    item.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        document.getElementsByTagName("ul")[0].appendChild(document.createElement("li")).innerText = e.target.value;
        e.target.value = "";
      }
    })
  }
})