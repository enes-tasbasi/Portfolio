import "./styles/index.scss";

window.addEventListener("resize", e => flipDesc(e.target.innerWidth));

let isSwitched = false;

const secondDesc = document.querySelector("#second-desc");
const secondImg = document.querySelector("#second-img");

function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}

function flipDesc(windowWidth) {
  if (windowWidth <= 700 && !isSwitched) {
    isSwitched = true;
    secondDesc.parentElement.removeChild(secondDesc);
    insertAfter(secondDesc, secondImg);
  } else if (windowWidth > 700 && isSwitched) {
    isSwitched = false;
    secondDesc.parentElement.removeChild(secondDesc);
    insertBefore(secondDesc, secondImg);
  }
}

// this is needed to check the window width on load
flipDesc(window.innerWidth);
