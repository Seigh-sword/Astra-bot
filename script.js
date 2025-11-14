const sendBtn = document.getElementById("sendBtn");
const userMessage = document.getElementById("userMessage");
const chatBox = document.getElementById("chatBox");

function addMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.innerHTML = "<strong>" + sender + ":</strong> " + text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAstraResponse(message) {
    return "Astra-Bot: " + message.split("").reverse().join("");
}

sendBtn.addEventListener("click", async () => {
    const msg = userMessage.value;
    if (!msg) return;

    addMessage("You", msg);
    userMessage.value = "";

    const response = await getAstraResponse(msg);
    addMessage("Astra-Bot", response);
});

userMessage.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendBtn.click();
});
