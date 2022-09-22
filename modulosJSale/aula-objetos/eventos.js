/*let valor = 326.7896; 
console.log(
    (valor).toFixed(2)// o .tofixed(2)ele fixa os dois ultimos numeros, ou qualquer quantidade de numeros que vc colocar dentro dos parenteces 
*/

let carro = {
    cor: "vermelho",
    modelo: "fusca",
    acelerar: function(velocidade){
        console.log(velocidade + "vrum vrum...")
        console.log(`${velocidade + "vrum vrum..."}`)
    },
    frear: function(){
        console.log("freando...")
    }
};

console.log(
    carro.acelerar(100),
    carro.acelerar(105)
)

let aluno = {
    nome:"mario",
    cpf:"123-456-789-12",
    dataDeNascimento:"10/12/12",
    endereço:{
        logradouro:'rua GB',
        numero:'1234',
        cidade:'fortaleza',
    },    
    endereço1: function(logradouro,numero,cidade){
        console.log()
    },
    frenquentar: function(){
        console.log('aulas')
    },
    concluirmatricula: function(){
        console.log('concluido')
    },
    cancelarMatricula: function(){
        console.log('cancelamento')
    }
}

aluno.frenquentar()
aluno.concluirmatricula()
aluno.cancelarMatricula()
document.write(aluno.endereço)
console.log(aluno.endereço)