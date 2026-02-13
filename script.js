function goToSlide(index) {
  const slides = document.querySelector(".slides");
  if (!slides) return;

  slides.style.transform = `translateX(-${index * 100}vw)`;
}

let noCount = 0;
let yesScale = 1;

function sayNo() {
  noCount++;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // fase 1: crece normal
  if (noCount < 7) {
    yesBtn.style.transform = `scale(${1 + noCount * 0.55})`;
  }
  // fase 2: se convierte en pantalla
  else {
yesBtn.style.position = "fixed";
yesBtn.style.top = "0";
yesBtn.style.left = "0";
yesBtn.style.width = "100vw";
yesBtn.style.height = "100vh";
yesBtn.style.borderRadius = "0";
yesBtn.style.zIndex = "9999";

yesBtn.style.display = "flex";
yesBtn.style.alignItems = "center";
yesBtn.style.justifyContent = "center";

yesBtn.style.boxSizing = "border-box";
yesBtn.style.padding = "24px";

yesBtn.style.maxWidth = "100vw";
yesBtn.style.maxHeight = "100vh";
yesBtn.style.overflow = "hidden";

yesBtn.style.whiteSpace = "normal";
yesBtn.style.wordBreak = "break-word";
yesBtn.style.textAlign = "center";
yesBtn.style.lineHeight = "1.3";

yesBtn.style.fontSize = "clamp(1.3rem, 5vw, 2.2rem)";

// yesBtn.innerText =
//   "Rompiste el tiempo, la realidad y el espacio.\n\nAhora solo te queda aceptar,\no todo acabará 🐺";
  yesBtn.innerHTML = `
  <span style="
    max-width: 90vw;
    display: block;
    text-align: center;
  ">
    Rompiste el tiempo, la realidad y el espacio.<br><br>
    Ahora solo te queda aceptar,<br>
    o todo acabará 🐺
  </span>
`;
  }

  // el botón no huye
  noBtn.style.transform = `
    translateX(${noCount * 50}px)
    scale(${1 - noCount * 0.08})
  `;

  if (noCount >= 8) {
    noBtn.style.opacity = "0";
    setTimeout(() => noBtn.remove(), 300);
  }
}

function sayYes() {
  const response = document.getElementById("response");
  if (!response) return;

  response.innerText =
    "Yay! Best decision of today 💕 Ice cream approved.";

  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
