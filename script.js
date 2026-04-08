function createFloating() {
  const container = document.querySelector(".floating");
  const emojis = ["❤️", "💍"];

  setInterval(() => {
    const span = document.createElement("span");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = (Math.random() * 20 + 15) + "px";

    container.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 10000);
  }, 500);
}

createFloating();
