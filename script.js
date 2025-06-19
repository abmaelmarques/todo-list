function adicionarTarefa() {
    const input = document.getElementById("NovaTarefa");
    const textoTarefa = input.value.trim();

    if (textoTarefa !== "") {
        const lista = document.getElementById("ListaTarefas");

        const item = document.createElement("li");
        item.textContent = textoTarefa;

        // Botão para excluir tarefa
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "delete-btn";
        botaoExcluir.onclick = function () {
            lista.removeChild(item);
        };

        // Marcar como concluída ao clicar
        item.onclick = function () {
            item.classList.toggle("completed");
        };

        item.appendChild(botaoExcluir);
        lista.appendChild(item);

        input.value = "";
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}
