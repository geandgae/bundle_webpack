import _ from "lodash";
import printMe from "./print";

function components() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["hello", "world"], " ");

  btn.innerHTML = "click!!";
  btn.onclick = printMe;

  element.appendChild(btn);
  
  return element
}

document.body.appendChild(components());