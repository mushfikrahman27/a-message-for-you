const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');

function moveButton() {
    // Calculate available space in the window
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Generate random coordinates
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// For Desktop
noBtn.addEventListener('mouseover', moveButton);

// For Mobile/Touchscreens
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking the button on first touch
    moveButton();
});

yesBtn.addEventListener('click', () => {
    // Replace this with your actual message or a redirect
    document.querySelector('.glass-card').innerHTML = `
        <h1 style="color: white;">❤️ She said YES! ❤️</h1>
        <p style="color: white; margin-top: 20px;">Every moment starts now.</p>
    `;
});