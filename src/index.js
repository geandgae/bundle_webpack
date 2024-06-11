import _ from "lodash";

function components() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["hello", "world"], " ");
  
  return element
}

document.body.appendChild(components());