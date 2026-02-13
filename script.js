function goToSlide(index) {
  const slides = document.querySelector(".slides");
  if (!slides) return;

  slides.style.transform = `translateX(-${index * 100}vw)`;
}

let noCount = 0;
let yesScale = 1;

function sayNo() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (!yesBtn || !noBtn) return;

  noCount++;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  noBtn.style.transform = `scale(${Math.max(0.4, 1 - noCount * 0.05)})`;

  if (noCount === 5) {
    noBtn.innerText = "Are you sure? 😅";
  }

  if (noCount >= 10) {
    noBtn.style.opacity = "0";
    setTimeout(() => {
      noBtn.style.display = "none";
    }, 200);
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
