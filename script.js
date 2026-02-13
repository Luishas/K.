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

  yesScale += 1.25;
  if (yesScale > 2) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";
    yesBtn.style.zIndex = "999";
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
  } else {
    yesBtn.style.transform = `scale(${yesScale})`;
  }
  if (yesScale > 6) {
  yesBtn.innerText = "Okay okay 😌💗";
}


  noBtn.style.transform = `
    translateX(${noCount * 20}px)
    scale(${1 - noCount * 0.06})
  `;

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
