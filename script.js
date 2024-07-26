const chatLog = [
            { username: "Base 05", message: "experimento 085-0?" },
            { username: "H.R", message: "Ele surgiu de uma forma quebrada. A cientista Alexandra Rodrigues teve contato com a criatura e parece ter desenvolvido um tipo de amizade extremamente incomum." },
            { username: "H.R", message: "A cientista foi ##### como prevenção. O 085-0 foi contido numa sala 5x5. Tememos que ele possa fugir." },
            { username: "085-0", message: "..." },
            { username: "H.R", message: "Base informo 085-0 quebrou contenção esta na frente da minha sala mandem o...." }
        ];

        const chatContainer = document.getElementById('chat-container');

        chatLog.forEach((log, index) => {
            const messageElement = document.createElement('p');
            messageElement.innerText = `${log.username}: ${log.message}`;
            chatContainer.appendChild(messageElement);
            
            if (index === chatLog.length - 1) {
                const cursor = document.createElement('span');
                cursor.classList.add('cursor');
                messageElement.appendChild(cursor);
            }
        });