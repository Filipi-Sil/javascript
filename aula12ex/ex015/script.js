function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //Parte da Mensagens

    if(hora == 0){
        msg.innerHTML = "Agora é meia-noite."
    } else if(hora == 12){
        msg.innerHTML = "Agora é meio-dia."
    } else if(hora == 1){
        msg.innerHTML = "Agora é 1 hora."
    } else{
        msg.innerHTML = "Agora são " + hora + " horas."
    }
    
    //Parte da Imagens

    if(hora >= 5 && hora < 13){

        img.src = 'dia.png'
        document.body.style.background = '#b7b7cb'
    }else if(hora >= 13 && hora <= 18){

        img.src = 'tarde.png'
        document.body.style.background = '#C16333'
    }else{

        img.src = 'noite.png'
        document.body.style.background = '#07283D'
    }
}