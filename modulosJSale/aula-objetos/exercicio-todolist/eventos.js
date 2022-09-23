let lista_tarefas = []; /* aqui é a lista de tarefas que o usuario anexa */

function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = lista_tarefas.length;
}

function listarTarefas(){   /* função que recebe todas as variaveis do ususario e oganizando com o map */
    let conteudo = lista_tarefas.sort().map(function(tarefa){
        return `
    <div>
        <input type="checkbox"> ${tarefa}
    </div>
`; 
    })
    document.getElementById('tarefas').innerHTML = conteudo.join(''); /* aqui vai receber as variaveis que vão receber todas as variaveis que vão ser colocada nas divs da input.*/
}

function addtarefa(){
    event.preventDefault();
    
let titulo = document.getElementById('input_nova_tarefa').value; 
if (titulo.trim() === ''){
    alert('tarefa invalida');
    return
}
if(true === lista_tarefas.includes(titulo)){
    alert('tarefa já existe')
    return
}


lista_tarefas.push(titulo);


document.getElementById('input_nova_tarefa').value ='';


    listarTarefas(); /* chama a função listarTarefas lá de cima. */
    atualizarQuantidade(); /* chama a função atualizarQuantidade lá de cima. */

}