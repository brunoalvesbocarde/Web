const peso1 = 1.0
const peso2 = Number('2.0')

//console.log(peso1,peso2)
//console.log(Number.isInteger(peso1)) // verifica se é um valor inteiro nessa função 
//console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media) // mostra todo o valor 
//console.log(media.toFixed(2)) // mostra 2 casas decimais 
//console.log(media.toFixed(4)) // mostra 4 casas  decimais 

console.log(media.toString(2) + " valor em binario") // transforma o valor de media em binario 
console.log(media.toString(8) + " valor em octa") // transforma o valor de media em octa
console.log(media.toString(16) + " valor em hexa ") // transforma o valor de media para hexa 

//console.log(typeof media)