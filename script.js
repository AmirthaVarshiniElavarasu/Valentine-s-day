
window.addEventListener('load', () => {
    const loadingscreen = document.getElementById('loadingscreen');

    const minimumTime = 3000; // 3 seconds visible

    setTimeout(() => {
        loadingscreen.style.transition = 'opacity 0.5s ease';
        loadingscreen.style.opacity = '0';

        setTimeout(() => {
            loadingscreen.style.display = 'none';
        }, 500);

    }, minimumTime);
    
});
const noBtn = document.getElementById("nobtn");
const yesBtn = document.getElementById("yesbtn");
const box = document.querySelector(".center-box");
const loveMessage = document.getElementById("loveMessage");

let scale = 1;

noBtn.style.position = "absolute";
noBtn.style.left = "50%";
noBtn.style.top = "50%";

box.addEventListener("mousemove", (e) => {

    const boxRect = box.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const buttonX = btnRect.left + btnRect.width / 2;
    const buttonY = btnRect.top + btnRect.height / 2;

    const dx = e.clientX - buttonX;
    const dy = e.clientY - buttonY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const safeDistance = 100;

    if (distance < safeDistance) {

    const force = 100;

    const angle = Math.atan2(dy, dx);

    let newLeft = noBtn.offsetLeft - Math.cos(angle) * force;
    let newTop  = noBtn.offsetTop  - Math.sin(angle) * force;

    const maxLeft = box.clientWidth - noBtn.offsetWidth;
    const maxTop  = box.clientHeight - noBtn.offsetHeight;

    // If hitting boundary, teleport to safe random position inside box
    if (newLeft <= 0 || newLeft >= maxLeft ||
        newTop <= 0 || newTop >= maxTop) {

        newLeft = Math.random() * maxLeft;
        newTop  = Math.random() * maxTop;
    }

    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top  = `${newTop}px`;

    scale += 0.0005;
    yesBtn.style.transform = `scale(${scale})`;
}


});
yesbtn.addEventListener("click", () => {
    window.location.href="yes.html";
});

