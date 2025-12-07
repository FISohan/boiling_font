const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const textInput = document.getElementById('text');
const fontSizeInput = document.getElementById('font-size');
const fFactorInput = document.getElementById('f-factor');
const speedInput = document.getElementById('speed');

let font;
let fpsInterval, then;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/2;
    // Redraw after resize to ensure proper scaling and positioning
    if (font) {
        draw();
    }
}

// Initial resize
resizeCanvas();
// Add event listener for window resize
window.addEventListener('resize', resizeCanvas);


opentype.load('comic_sans.ttf', (err, loadedFont) => {
    if (err) {
        console.error("Error on font loading.", err);
    } else {
        font = loadedFont;
        const fps = parseInt(speedInput.value, 10);
        fpsInterval = 1000 / fps;
        then = Date.now();
        animate();
    }
});

function animate() {
    requestAnimationFrame(animate);

    const now = Date.now();
    const elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        const fps = parseInt(speedInput.value, 10);
        fpsInterval = 1000 / fps;
        draw();
    }
}

function draw() {
    if (!font) return;

    const F_FACTOR = parseFloat(fFactorInput.value);
    const text = textInput.value;
    const fontSize = parseInt(fontSizeInput.value, 10);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas

    // Set text alignment and baseline for centering
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Calculate text position for centering
    const x = canvas.width / 2;
    const y = canvas.height / 2;

    const path = font.getPath(text, 50, y, fontSize);
    path.commands.forEach(cmd => {
        // Adjust coordinates for random movement relative to their current position
        if (cmd.x) cmd.x += Math.random() * F_FACTOR - (F_FACTOR / 2); // Center random movement around 0
        if (cmd.y) cmd.y += Math.random() * F_FACTOR - (F_FACTOR / 2);
    });

    path.draw(ctx);
}