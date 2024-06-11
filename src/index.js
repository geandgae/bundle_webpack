// if (process.env.MODE_ENV !== "production") {
//   console.log("development");
// }

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello webpack!!!";

  return element;
}

document.body.appendChild(component());
