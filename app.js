const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const textInput = document.getElementById('text');
const fontSizeInput = document.getElementById('font-size');
const fFactorInput = document.getElementById('f-factor');
const speedInput = document.getElementById('speed');

let font;
let fpsInterval, then;

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

    const path = font.getPath(text, 50, 200, fontSize);
    path.commands.forEach(cmd => {
        if (cmd.x) cmd.x += Math.random() * F_FACTOR;
        if (cmd.y) cmd.y += Math.random() * F_FACTOR;
    });

    ctx.clearRect(0, 0, 800, 800);
    path.draw(ctx);
}