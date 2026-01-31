function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fAno.value.length  == 0 || fAno.value > ano){
        alert("!!!ERRO!!! Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if(fsex[0].checked){
            genero = "Masculino"
            if(idade >= 0 && idade < 9){
                img.src = 'imagens/bm.jpg'
            } else if (idade >= 9 && idade < 21){
                img.src = 'imagens/jm.jpg'
            } else if (idade >= 21 && idade < 50){
                img.src = 'imagens/am.jpg'
            } else{
                img.src = 'imagens/im.jpg'
            }
        } else if (fsex[1].checked){
            genero = "Feminino"
            if(idade >= 0 && idade < 9){
                img.src = 'imagens/bf.jpg'
            } else if (idade >= 9 && idade < 21){
                img.src = 'imagens/jf.jpg'
            } else if (idade >= 21 && idade < 50){
                img.src = 'imagens/af.jpg'
            } else{
                img.src = 'imagens/if.jpg'
            }
        }
        res.style.textAlign = 'center' //Utilização de CSS no Js
        res.innerHTML = "Detectamos o gênero " + genero + " com " + idade + " anos."

    }
}