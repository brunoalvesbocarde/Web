const funcs = []

for (let i=0; i<10 ; i++){
funcs.push(function(){
    console.log(i);   
})
}
// como let tem funca de escopo os valores passados sera o mesmo da numero da vetor
funcs[2]()
funcs[8]()

