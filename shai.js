// script.js

function saveMessage() {
    const messageBox = document.getElementById("message-box");
    const messageContainer = document.getElementById("messages-container");

    if (messageBox.value.trim() !== "") {
        const message = document.createElement("p");
        message.textContent = messageBox.value;
        messageContainer.appendChild(message);
        messageBox.value = "";
    }
}

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    const size = Math.random() * 20 + 10 + "px";
    heart.style.fontSize = size;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Generate hearts every 500 milliseconds
setInterval(createHeart, 500);
