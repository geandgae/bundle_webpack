import _ from "lodash";
import "./style.css";
import icon from "./icon.png";

function components() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["hello", "world"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);

  return element
}

document.body.appendChild(components());