function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.getElementById('res')

        if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
            alert("Preencha os campos abaixo!")
        } else{
            res.innerHTML = 'Contando... <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(pass.value)

            if(i < f){
                //contagem crescente
                for(let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }

            } else {
                //contagem regressiva
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }

            }
            res.innerHTML += ` ${c} \u{1F3C1}`
        }

}