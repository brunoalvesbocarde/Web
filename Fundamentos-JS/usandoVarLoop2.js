const funcs = []

for (var i=0; i<10 ; i++){
funcs.push(function(){
    console.log(i);   
})
}
//tem como var é global e nao tem escopo de função qualquer elemento passado tera o ultimo valor add
funcs[2]()
funcs[8]()

