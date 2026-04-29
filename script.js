function addTask() {
    console.log("Botão clicado!");

    const input = document.getElementById('taskInput');
    const lista = document.getElementById('lista-nomes');

    if (input.value.trim() !== "") {
        const novoItem = document.createElement('p');
        
        novoItem.textContent = input.value;
        
        novoItem.style.color = "black";
        novoItem.style.marginTop = "10px";
        novoItem.style.textAlign = "center";

        lista.appendChild(novoItem);

        input.value = "";
    } else {
        alert("Digite algo antes de enviar!");
    }
}