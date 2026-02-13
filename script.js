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
yesBtn.style.top = "50%";
yesBtn.style.left = "50%";
yesBtn.style.transform = "translate(-50%, -50%)";
yesBtn.style.width = "80vw";
yesBtn.style.height = "80vh";
yesBtn.style.borderRadius = "0";
yesBtn.style.zIndex = "9999";

yesBtn.style.display = "flex";
yesBtn.style.alignItems = "center";
yesBtn.style.justifyContent = "center";

yesBtn.style.boxSizing = "border-box";
yesBtn.style.padding = "24px";

yesBtn.style.maxWidth = "80vw";
yesBtn.style.maxHeight = "80vh";
yesBtn.style.overflow = "hidden";

yesBtn.style.whiteSpace = "normal";
yesBtn.style.wordBreak = "break-word";
yesBtn.style.textAlign = "center";
yesBtn.style.lineHeight = "1.3";

yesBtn.style.fontSize = "clamp(1.3rem, 5vw, 2.2rem)";

// yesBtn.innerText =
//   "Rompiste el tiempo, la realidad y el espacio.\n\nAhora solo te queda aceptar,\no todo acabará 🐺";
  yesBtn.innerHTML = `
  <div class="final-content">
    <img src="images/happycat.jpg" alt="cute cat" />
    <div>
      Te lo dije, no las elijas.
      Rompiste el tiempo, la realidad y el espacio.<br><br>
      Ahora solo te queda aceptar,<br>
      o todo acabará 
    </div>
    <img src="images/catdespair.jpg" alt="cute cat" />
  </div>
`;
  }

 const maxMove = Math.min(120, window.innerWidth / 4);

noBtn.style.transform = `
  translateY(${Math.min(noCount * 35, maxDown)}px)
  scale(${1 - noCount * 0.08})
`;

  if (noCount >= 8) {
    noBtn.style.opacity = "0";
    setTimeout(() => noBtn.remove(), 300);
  }
}

function sayYes() {
  goToSlide(4);
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
