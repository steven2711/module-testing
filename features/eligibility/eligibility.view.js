import {doSomething} from "./eligibility.controller.js"

function changeHeader(text) {
 document.getElementsByTagName("h1").innerHTML(doSomething(text))
}

export {changeHeader}