function texto(){
    let idade =document.getElementById('input1').value;
    let idadeinteiro = parseInt(idade);
    console.log(idadeinteiro)
    if(idade>=18){
        document.getElementById('texto1').textContent = 'texto'
        console.log(document.getElementById('texto1').textContent ='Maior de idade')
    }else {
        console.log(document.getElementById('texto1').textContent ='Menor de idade')
    }
}

/*let acc = 0//essa function conta quantas vezes voce clicou 
function contador() {
    acc++;
    document.getElementById('texto1').textContent = acc;
}*/