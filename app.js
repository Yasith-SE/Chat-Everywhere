let contacts = document.querySelectorAll(".user");
let header = document.querySelector(".chat-header h2");
let messageBox = document.getElementById("messagesId");
let currentChat = "Katya";

// Store messages separately
let chats = {
    "Katya": [],
    "Free": [],
    "User": []
};

// Load messages for selected chat
function loadChat(name) {
    messageBox.innerHTML = "";

    chats[name].forEach(msg => {
        let div = document.createElement("div");
        div.className = "message " + msg.type;
        div.textContent = msg.text;
        messageBox.appendChild(div);    
    });
}

// Click contact
contacts.forEach(contact => {
    contact.addEventListener("click", function () {

        // Remove old active highlight
        contacts.forEach(c => c.classList.remove("active"));

        // Highlight this one
        this.classList.add("active");

        // Set name
        currentChat = this.getAttribute("data-name");
        header.textContent = currentChat;

        // Load chat
        loadChat(currentChat);
    });
});

// Send message
function sendMessage() {
    const input = document.getElementById("txtMessages");
    const text = input.value.trim();

    if (text === "") return;

    // Add to chat memory
    chats[currentChat].push({ type: "sent", text: text });

    loadChat(currentChat); // refresh
    input.value = "";

    autoMessage();
}

// Fake auto reply
function autoMessage() {
    setTimeout(() => {
        chats[currentChat].push({ type: "received", text: "Seen ✔" });
        loadChat(currentChat);
    }, 600);
}
let chatCards = document.querySelectorAll(".chat-card");

chatCards.forEach(card => {
    card.addEventListener("click", function () {

        // remove old active
        chatCards.forEach(c => c.classList.remove("active"));

        // set this active
        this.classList.add("active");
    });
});