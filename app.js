const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const textInput = document.getElementById('text');
const fontSizeInput = document.getElementById('font-size');
const fFactorInput = document.getElementById('f-factor');

setInterval(() => {
    draw();
}, 100);

function draw() {
    const F_FACTOR = parseFloat(fFactorInput.value);
    const text = textInput.value;
    const fontSize = parseInt(fontSizeInput.value, 10);
    opentype.load('comic_sans.ttf', (err, font) => {
        if (err) {
            console.error("Error on font loading.", err);
        } else {
            const path = font.getPath(text, 50, 200, fontSize);
            path.commands.forEach(cmd => {
                if (cmd.x) cmd.x += Math.random() * F_FACTOR;
                if (cmd.y) cmd.y += Math.random() * F_FACTOR;
            });

            ctx.clearRect(0, 0, 800, 800);
            path.draw(ctx);

        }
    })
}