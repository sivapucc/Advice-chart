let container = document.createElement("div");
container.className = "container";
let box = document.createElement("div");
box.classList.add("box", "col-md-12", "col-sm-12");
let content = document.createElement("div");
content.className = "content";
content.innerHTML = advice();
let h1 = document.createElement("h1");
h1.innerHTML = "Tom Advice";
let button = document.createElement("button");
button.classList.add("button", "btn", "btn-primary");
let i = document.createElement("i");
i.className = "fa fa-refresh";
button.appendChild(i);
button.innerHTML += " Refresh";
button.addEventListener("click", advice);
box.append(content, button);
container.append(h1, box);
document.body.appendChild(container);

async function advice() {
  try {
    let api = await fetch("https://api.adviceslip.com/advice");
    let res = await api.json();
    console.log(res);
    content.innerHTML = `${res.slip.advice}`;
  } catch (error) {
    console.log(error);
    content.innerHTML = "Please check Your Internet connection";
  }
}
