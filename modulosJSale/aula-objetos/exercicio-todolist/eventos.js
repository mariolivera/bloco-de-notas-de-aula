
function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = lista_tarefas.length;
}

function listarTarefas(){   /* função que recebe todas as variaveis do ususario e oganizando com o map */
    let conteudo = buscar().sort().map(function(tarefa){
        return `
    <div>
        <input type="checkbox"> ${tarefa.titulo}
                               <span class="badge ${tarefa.prioridade === 'Baixa' && 'bg-primary'} ${tarefa.prioridade === 'Média' && 'bg-warning'} ${tarefa.prioridade === 'Alta' && 'bg-danger'}"> 
                                ${tarefa.prioridade}
                                </span>  
    </div>
`; 
    }) // o ${tarefe.titulo} ele estar pegando as variaveis dos objetos de dentro da arrys, que estão lá em lista_tarefas.
    document.getElementById('tarefas').innerHTML = conteudo.join(''); /* aqui vai receber as variaveis que vão receber todas as variaveis que vão ser colocada nas divs da input.*/
}

function addtarefa(){
    event.preventDefault();
    
let titulo = document.getElementById('input_nova_tarefa').value; 
let prioridade = document.getElementById('input_prioridade').value;
if (titulo.trim() === ''){
    alert('tarefa invalida');
    return
}
if(true === lista_tarefas.includes(titulo)){
    alert('tarefa já existe')
    return
}

salvar(titulo, input_prioridade.value);


document.getElementById('input_nova_tarefa').value ='';


    listarTarefas(); /* chama a função listarTarefas lá de cima. */
    atualizarQuantidade(); /* chama a função atualizarQuantidade lá de cima. */

}

//listarTarefas();//estar chamando as variaveis ´fixa lá de cima, quando ele entrar.
 