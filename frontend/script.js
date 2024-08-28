const chatLog = [
    { username: "Princ..", message: "PAI... e.eeu to aquii" },
    { username: "Pr1nf", message: "SOCO .ç.. rRo" },
    { username: "", message: "diretriz adicionada dados sendo reformulados" },
    { username: "", message: "..." },
    { username: "", message: "" },
];

const chatContainer = document.getElementById('chat-container');
const inputContainer = document.createElement('div');
inputContainer.id = 'input-container';
const input = document.createElement('input'); //input mensage
const button = document.createElement('button');// button send
input.type = 'text';
input.id = 'input';
input.placeholder = '...';

// Adiciona as mensagens ao contêiner
chatLog.forEach((log, index) => {
    const messageElement = document.createElement('p');
    messageElement.innerText = `${log.username}: ${log.message}`;
    chatContainer.appendChild(messageElement);

    // Adiciona o cursor apenas à última mensagem
    if (index === chatLog.length - 1) {
        const cursor = document.createElement('span');
        cursor.classList.add('cursor');
        messageElement.appendChild(cursor);
    }
});

// Adiciona o campo de input dentro do input-container
inputContainer.appendChild(input);
chatContainer.appendChild(inputContainer);

// Ajusta o contêiner para rolar para a parte inferior
chatContainer.scrollTop = chatContainer.scrollHeight;

function mostrarnoConsole() {
    console.log(input.value)
}

mostrarnoConsole()


