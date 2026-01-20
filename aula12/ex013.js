var agora = new Date()
var hora = agora.getHours()

if(hora == 0){
    console.log('Agora é exatamente meia-noite')
} else if(hora == 12){
    console.log('Agora é exatamente meio-dia')
}else if(hora == 1){
    console.log('Agora é exatamente 1 hora')
}else{
    console.log('Agora é extamente ' + hora + ' horas')
}

if(hora < 13 && hora > 4){
    console.log('Bom dia!')
} else if (hora <= 18 && hora >= 13){
    console.log('Boa Tarde!')
} else{
    console.log('Boa Noite!')
}