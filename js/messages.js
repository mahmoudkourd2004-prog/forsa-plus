window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    const content = document.querySelector(".main-content");

    setTimeout(() => {
        loader.classList.add("hide");
        content.style.display = "block";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 2000);
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});



const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

// إرسال عند الضغط على إنتر
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && messageInput.value.trim() !== "") {
        addMessage(messageInput.value, "sent"); // "sent" للرسائل المرسلة
        messageInput.value = "";
    }
});

function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.classList.add("message");
    if (type === "sent") msg.classList.add("sent"); // تضيف اللون الأخضر

    msg.textContent = text;
    chatMessages.appendChild(msg);

    // ننزل للرسالة الأخيرة تلقائياً
    chatMessages.scrollTop = chatMessages.scrollHeight;
}









