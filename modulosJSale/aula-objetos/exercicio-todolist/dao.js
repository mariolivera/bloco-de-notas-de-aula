//dao é data acesses ofice

let lista_tarefas = []; /* aqui é a lista de tarefas que o usuario anexa */

function salvar(titulo,prioridade){
/* add um novo objeto em uma array de tarefas, 
    lista_tarefas.push({
    titulo:titulo, // esse titulo da direita é o valor que o usuario digitou.
    prioridade: prioridade,   //ele estar pegando esse valor do --let prioridade = document.getElementById('input_prioridade').value; que estar linkado no HTML-- ou pode ser assim prioridade: input_prioridade.value,
});*/

let dados=buscar();

dados.push({
titulo: titulo,
prioridade: prioridade,

});
localStorage.setItem('tarefas', JSON.stringify(dados));
}

function buscar(){
return JSON.parse(localStorage.getItem('tarefas') || '[]'
    );
}