//Questão 1 
function questao1 () {
    let index = 1
    let numeros = []
    do { 
        numeros.push(index)
        index+=1
    } while (index <= 20);
    return numeros
}
console.log(questao1());



//Questão 2
function questao2() {
    let numeros = []
    for (let index = 1; index <= 20; index++){
        if(index %2 == 0){
            numeros.push(index)}
    }
    return numeros  
}
console.log(questao2());

//Questão 3
function questao3() {
    let numeros = []
    for (let index = 1; index <= 20; index++){
        if(index %2){
            numeros.push(index)}
    }
    return numeros
}
console.log(questao3());



//Questão 4
function questao4() {
    let numeros = []
    for (let index = 5; index <= 100; index++){
        if(index %5 == 0){
            numeros.push(index)} 
    }
    return numeros
}
console.log(questao4());


//Questão 5
function questao5(){
    let numeros = []
    for (let index = 1; index <= 100; index++){
        if(Math.sqrt(index) % 1 === 0){
            numeros.push(index)}
    }
    return numeros
}
console.log(questao5());


//Questão 6
function questao6() {
    let resultado = []
    for (let index = 20; index >= 1; index--){
        resultado.push(index)}
    return resultado
}
console.log(questao6());



//Questão 7
function questao7() {
    let resultado = []
    for (let index = 20; index >= 1; index--){
        if(index %2 == 0){
            resultado.push(index)
        }
    }
    return resultado
}
console.log(questao7());


//Questão 8
function questao8() {
    let resultado = []
    for (let index = 20; index >= 1; index--) {
        if(index %2){
            resultado.push(index)
        }
    }
    return resultado
}
console.log(questao8());


//Questão 9
function questao9() {
    let resultado = []
    for (let index = 100; index >= 5; index--) {
        if(index %5 == 0){
            resultado.push(index)
        }
    }
    return resultado
}
console.log(questao9());


//Questão 10
function questao10() {
    let resultado = []
    for (let index = 100; index >= 1; index--) {
        if(Math.sqrt(index) % 1 === 0){
            resultado.push(index)
        }
    }
    return resultado
}
console.log(questao10());

