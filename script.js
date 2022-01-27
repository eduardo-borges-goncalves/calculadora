
let display = document.getElementById('display')
let displayOn = ""
let index = 0
display.innerHTML = index


let result ;
let transformX ;

let plus = "+"
let less = "-"
let multiply = "x"
let divide = "/"
let equal = "="
let dot = "."

function calc () {

    transformX = displayOn.replace(/x/g, "*")

    result = eval(transformX)
    displayOn = String(result)
    display.innerHTML = result

}

function addNumber(valor) {

    displayOn = displayOn + valor
    index = (displayOn.length) - 2 

    if ( 
        valor === plus &&  displayOn[index ] === plus ||     
        valor === plus &&  displayOn[index ] === less ||
        valor === plus &&  displayOn[index ] === multiply ||
        valor === plus &&  displayOn[index ] === divide 
    ) {
        displayOn = displayOn.substring(0, displayOn.length - 2)
        displayOn = displayOn + valor
        showNumber()
    }
    else if (  
        valor === less &&  displayOn[index ] === plus ||
        valor === less &&  displayOn[index ] === less ||  
        valor === less &&  displayOn[index ] === multiply ||
        valor === less &&  displayOn[index ] === divide 
    ) {
        displayOn = displayOn.substring(0, displayOn.length - 2)
        displayOn = displayOn + valor
        showNumber()
    }
    else if (  
        valor === multiply &&  displayOn[index ] === plus||
        valor === multiply &&  displayOn[index ] === less ||
        valor === multiply &&  displayOn[index ] === multiply||  
        valor === multiply &&  displayOn[index ] === divide 
    ) {
        displayOn = displayOn.substring(0, displayOn.length - 2)
        displayOn = displayOn + valor
        showNumber()
    }
    else if (   
        valor === divide &&  displayOn[index ] === plus ||
        valor === divide &&  displayOn[index ] === less ||
        valor === divide &&  displayOn[index ] === multiply ||
        valor === divide &&  displayOn[index ] === divide
    ) {
        displayOn = displayOn.substring(0, displayOn.length - 2)
        displayOn = displayOn + valor
        showNumber()
    }
    else {
        showNumber()
    }
}

function showNumber() {
    display.innerHTML = displayOn
}

function displayClean() {

    display.innerHTML = "0"
    displayOn = ""


}

function dropCharac() {

    displayOn = displayOn.substring(0, displayOn.length - 1)
    if (displayOn.length == 0) {

        display.innerHTML = "0"

    } else {
        showNumber()
    }

}