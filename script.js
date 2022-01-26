
let orgm = document.getElementById('origem')
let dstn = document.getElementById('destino')
let tmp = document.getElementById('tempo')
let plno = document.getElementById('plano')

let comFaleMais = document.getElementById('comFaleMais')
let semFaleMais = document.getElementById('semFaleMais')
let showResult = document.getElementById('showResult')
let dadosIncorretos = document.getElementById('dadosIncorretos')
let linhaIndisponivel = document.getElementById('linhaIndisponivel')
const button = document.getElementById('button')

let tempo = 0;
let origem = "";
let destino = "";
let plano = "";

let tempoExcedente30 = 0 ;
let tempoExcedente60 = 0 ;
let tempoExcedente120 = 0 ;
let sfmResult = 0;
let sfmFormatado = 0; 
let cfmResult30 = 0;
let cfmResult60 = 0;
let cfmResult120 = 0;
let cfmFormatado30 = 0;
let cfmFormatado60 = 0;
let cfmFormatado120 = 0;

let tax = 0;
let taxOne = 1.90 // 011 - 016
let taxTwo = 2.90 // 016 - 011
let taxTree = 1.70 // 011 - 017
let taxFour = 2.70 // 017 - 011
let taxFive = 0.90 // 011 - 018
let taxSix = 1.90 // 018 - 011

// functions

function validation() {

    tempo = Number(tmp.value)
    origem = orgm.value
    destino = dstn.value
    plano = plno.value

    // validação dos dados

    if ( origem == destino || tempo <= 0) {
        showResult.setAttribute('style', "display: none")
        dadosIncorretos.setAttribute('style', "display: flex")
        linhaIndisponivel.setAttribute('style', "display: none")
    } 
    else if ( 
        origem == 16 && destino == 17 ||
        origem == 16 && destino == 18 ||
        origem == 17 && destino == 16 ||
        origem == 17 && destino == 18 || 
        origem == 18 && destino == 16 ||
        origem == 18 && destino == 17 
        ) {
        showResult.setAttribute('style', "display: none")
        dadosIncorretos.setAttribute('style', "display: none")
        linhaIndisponivel.setAttribute('style', "display: flex")
    } 
    else {
        dadosIncorretos.setAttribute('style', "display: none")
        linhaIndisponivel.setAttribute('style', "display: none")
        getRightTax()
    }
}

function getRightTax(){

    if ( origem == 11 && destino == 16) {
        tax = taxOne
        calcular()
    }
    else if ( origem == 11 && destino == 17) {
        tax = taxTree
        calcular()
    }
    else if ( origem == 11 && destino == 18) {
        tax = taxFive
        calcular()
    }
    else if ( origem == 16 && destino == 11) {
        tax = taxTwo
        calcular()
    }
    else if ( origem == 17 && destino == 11) {
        tax = taxFour
        calcular()
    }
    else if ( origem == 18 && destino == 11) {
        tax = taxSix
        calcular()
    }
    else {
        console.log('Erro ao calcular Taxa!')
    }
}

function calcular() {

    console.log( "calcular: " + tempo + origem + destino + plano + ", " + tax )

    // declarando variáveis 

    tempoExcedente30 = tempo - 30;
    tempoExcedente60 = tempo - 60;
    tempoExcedente120 = tempo - 120;
    sfmResult = tempo * taxOne;
    sfmFormatado = sfmResult.toLocaleString('pt-br', {style: "currency", currency: "BRL"} );
    cfmResult30 = tempoExcedente30 * (tax * 1.1);
    cfmResult60 = tempoExcedente60 * (tax * 1.1);
    cfmResult120 = tempoExcedente120 * (tax * 1.1);
    cfmFormatado30 = cfmResult30.toLocaleString('pt-br', {style: "currency", currency: "BRL"} );
    cfmFormatado60 = cfmResult60.toLocaleString('pt-br', {style: "currency", currency: "BRL"} );
    cfmFormatado120 = cfmResult120.toLocaleString('pt-br', {style: "currency", currency: "BRL"} );

    if (origem == 11) {
        calcular011()
    }
    else if (origem == 16) {
        calcular016()
    }
    else if (origem == 17) {
        calcular017()
    }
    else if (origem == 18) {
        calcular018(0)
    }
    else {
        console.log('Atenção! Dados incorretos.')
    }
}

function calcular011 () {

    // 011 - 016 

    if (origem == 11 & destino == 16 & plano == "FaleMais30") {
        calcTaxOne01()
    }
    else if (origem == 11 & destino == 16 & plano == "FaleMais60") {
        calcTaxOne02()
    } 
    else if (origem == 11 & destino == 16 & plano == "FaleMais120") {
        calcTaxOne03()
    }

    // 011 - 017

    else if (origem == 11 & destino == 17 & plano == "FaleMais30") {
        calcTaxTree01()
    }
    else if (origem == 11 & destino == 17 & plano == "FaleMais60") {
        calcTaxTree02()
    } 
    else if (origem == 11 & destino == 17 & plano == "FaleMais120") {
        calcTaxTree03()
    }

    // 011 - 018

    else if (origem == 11 & destino == 18 & plano == "FaleMais30") {
        calcTaxFive01()
    }
    else if (origem == 11 & destino == 18 & plano == "FaleMais60") {
        calcTaxFive02()
    } 
    else if (origem == 11 & destino == 18 & plano == "FaleMais120") {
        calcTaxFive03()
    }

    else {
         console.log('Atenção! Dados inc0orretos!')
    }
}

function calcular016() {

    // 016 - 011

    if (origem == 16 & destino == 11 & plano == "FaleMais30") {
        calcTaxTwo01()
    }
    else if (origem == 16 & destino == 11 & plano == "FaleMais60") {
        calcTaxTwo02()
    } 
    else if (origem == 16 & destino == 11 & plano == "FaleMais120") {
        calcTaxTwo03()
    }
}

function calcular017() {

    // 017 - 011

    if (origem == 17 & destino == 11 & plano == "FaleMais30") {
        calcTaxFour01()
    }
    else if (origem == 17 & destino == 11 & plano == "FaleMais60") {
        calcTaxFour02()
    } 
    else if (origem == 17 & destino == 11 & plano == "FaleMais120") {
        calcTaxFour03()
    }
}

function calcular018() {

    // 018 - 011

    if (origem == 18 & destino == 11 & plano == "FaleMais30") {
        calcTaxSix01()
    }
    else if (origem == 18 & destino == 11 & plano == "FaleMais60") {
        calcTaxSix02()
    } 
    else if (origem == 18 & destino == 11 & plano == "FaleMais120") {
        calcTaxSix03()
    }
}

// calcular 011 - 016

function calcTaxOne01 () {

    if ( tempoExcedente30 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado30
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxOne02 () {

    if ( tempoExcedente60 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado60
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxOne03 () {

    if ( tempoExcedente120 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado120
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

// calcular 011 - 017 

function calcTaxTree01 () {

    if ( tempoExcedente30 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado30
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxTree02 () {

    if ( tempoExcedente60 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado60
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxTree03 () {

    if ( tempoExcedente120 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado120
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

// calcular 011 - 018

function calcTaxFive01 () {

    if ( tempoExcedente30 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado30
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxFive02 () {

    if ( tempoExcedente60 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado60
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxFive03 () {

    if ( tempoExcedente120 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado120
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

// calcular 016 - 011 

function calcTaxTwo01 () {

    if ( tempoExcedente30 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado30
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxTwo02 () {

    if ( tempoExcedente60 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado60
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxTwo03 () {

    if ( tempoExcedente120 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado120
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

// calcular 017 - 011

function calcTaxFour01 () {

    if ( tempoExcedente30 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado30
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxFour02 () {

    if ( tempoExcedente60 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado60
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxFour03 () {

    if ( tempoExcedente120 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado120
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

// calcular 018 - 011

function calcTaxSix01 () {

    if ( tempoExcedente30 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado30
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxSix02 () {

    if ( tempoExcedente60 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado60
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}

function calcTaxSix03 () {

    if ( tempoExcedente120 > 0) {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = cfmFormatado120
        semFaleMais.innerHTML = sfmFormatado
    } else {
        showResult.setAttribute("style", 'display: flex')
        comFaleMais.innerHTML = `R$ 0,00`
        semFaleMais.innerHTML = sfmFormatado
    }
}
