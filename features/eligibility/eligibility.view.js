import {doSomething} from "./eligibility.controller.js"

function changeHeader(text) {
 document.getElementById("test").innerHTML = doSomething(text)
}

export {changeHeader}