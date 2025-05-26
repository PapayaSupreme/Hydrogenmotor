function sendMessage() {
    const input = document.getElementById("user-input");
    const chat = document.getElementById("chat-messages");
    const msg = input.value.trim();
    if (!msg) return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.innerHTML = `<span>🧍‍♂️ ${msg}</span>`;
    chat.appendChild(userMsg);
    input.value = "";

    // Typing indicator
    const typingMsg = document.createElement("div");
    typingMsg.textContent = "🤖 is typing...";
    typingMsg.id = "typing-indicator";
    chat.appendChild(typingMsg);
    chat.scrollTop = chat.scrollHeight;

    fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
    })
        .then(res => res.json())
        .then(data => {
            // Remove typing indicator
            const typing = document.getElementById("typing-indicator");
            if (typing) typing.remove();

            // Bot reply
            const botMsg = document.createElement("div");
            botMsg.innerHTML = `<span>🤖 ${data.reply}</span>`;
            chat.appendChild(botMsg);
            chat.scrollTop = chat.scrollHeight;
        })
        .catch(err => {
            console.error(err);
            if (typingMsg) typingMsg.textContent = "❌ Error getting response.";
        });
}
