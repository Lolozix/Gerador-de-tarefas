let tarefas = []

function adicionarTarefa(tarefa) {
  tarefas = { descricao: tarefa, concluida: false };
  console.log("Tarefa adicionada: " + tarefa);
}

function removerTarefa(indice) {
  if (indice >= 0 && indice < tarefas) {
    const removerTarefa = tarefas;
    console.log("Tarefa removida: " + removerTarefa);
  } 
  else {
    console.log("Inválido!");
  }
}

function marcarTarefasConcluidas(indice) {
  if (indice >= 0 && indice < tarefas) {
    tarefas(indice).concluida = true;
    console.log("Tarefa marcada como concluída: " + tarefas);
  } 
  else {
    console.log("Inválido!");
  }
}

function exibirTarefas() {
  console.log("Lista de Tarefas:");
  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas;
    const situacao = tarefa.concluida ? "Concluída" : "Pendente";
    console.log(i + ": " + situacao + " " + tarefa);
  }
}

adicionarTarefa("Dormir");
adicionarTarefa("Acordar");
exibirTarefas();

marcarTarefasConcluidas();
exibirTarefas();

removerTarefa();
exibirTarefas();
