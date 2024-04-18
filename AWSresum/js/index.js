//Javascript Code
const counter = document.querySelector(".countern");
async function updateCounter() {
let response = await fetch("https://rke6n7igffryfyesrpibuccb7i0zfpuu.lambda-url.us-east-1.on.aws/");
let data = await response.json();
counter.innerHTML = `Hits: ${data}`;
}
updateCounter();