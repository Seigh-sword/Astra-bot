async function askAstraBot(message) {
    const response = await fetch("https://weathered-base-1532.seigh-sword.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userMessage: message })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

// UI hookup
function addMessage(role, text) {
    const chat = document.getElementById("chat");
    const div = document.createElement("div");
    div.className = role;
    div.textContent = text;
    chat.appendChild(div);
}

document.getElementById("sendBtn").addEventListener("click", async () => {
    const input = document.getElementById("userInput").value;
    if (!input.trim()) return;

    addMessage("user", input);

    const reply = await askAstraBot(input);
    addMessage("bot", reply);

    document.getElementById("userInput").value = "";
});
