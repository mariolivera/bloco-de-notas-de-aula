function addtarefa(){
    event.preventDefault();
    


let titulo = document.getElementById('input_nova_tarefa').value;

document.getElementById('input_nova_tarefa').value ='';

document.getElementById('tarefas').innerHTML += `
    <div>
        <input type="checkbox"> ${titulo}
    </div>
`;

}