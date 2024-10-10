// Audio Initialization
let audio = new Audio('nooo.mp3');
audio.volume = 1;
let audio2 = new Audio('musicaClicker.mp3');
audio2.volume = 0.125;

// Creating Tap Zone Elements
let tapZone = document.createElement("div");
tapZone.className = "tapZone";

let innerTapZone = document.createElement("div");
innerTapZone.className = "innerTapZone";

document.body.appendChild(tapZone);
tapZone.appendChild(innerTapZone);

// Tap Zone Click Event
tapZone.onclick = () => {
  audio2.play();
  audio.currentTime = 0;
  audio.play();

  innerTapZone.style.animation = "none";
  void innerTapZone.offsetWidth;
  innerTapZone.style.animation = "shake 0.2s linear";

  let point = document.createElement("div");
  point.className = "point";

  let innerTapZoneRect = innerTapZone.getBoundingClientRect();
  tapZone.appendChild(point);

  let randomX = Math.floor(Math.random() * (innerTapZoneRect.width - point.offsetWidth));
  let randomY = Math.floor(Math.random() * (innerTapZoneRect.height - point.offsetHeight));

  point.style.left = `${randomX}px`;
  point.style.top = `${randomY}px`;
  point.innerHTML = "<img src='Ahhh.png' width='50px'>";
  point.style.animation = "fadeUp 0.5s linear";

  point.addEventListener('animationend', () => {
    point.remove();
  });
};