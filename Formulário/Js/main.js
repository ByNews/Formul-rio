function contador(age, nome){
    if(age > 18){
        console.log(`Olá ${nome}, você foi aprovado!`)
    }else{
        console.log(`Olá ${nome}, você foi reprovado!`)
    }
    nome = nome;
}

contador(17, 'Max')