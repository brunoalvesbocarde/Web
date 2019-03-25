// funcao sem retorno 

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(3,2)
imprimirSoma(2)
imprimirSoma(2,3,6,7,8,9,7,8) // soma os 2 primeiros e ingnora os outos 
imprimirSoma()
imprimirSoma('soma',' tudo')

// funcao com retorno 

function soma(a, b = 1){
    return a + b 
}
soma(4,2) // como a função retorna um valor eu preciso necessariamente colocar dentre do console 
console.log(soma(2,3))
console.log(soma(3))
