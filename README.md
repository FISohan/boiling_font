# Boiling Text Animation

This project demonstrates a "boiling" text animation effect using JavaScript and the `opentype.js` library. The text's individual points are slightly randomized in position over time, creating a fluid, animated look.

## Setup

1.  **Download/Clone:** Download or clone this repository to your local machine.
2.  **Font File:** Ensure the `comic_sans.ttf` font file is present in the project directory. This font is used by `opentype.js` to render the text.
3.  **Open in Browser:** Simply open the `index.html` file in your web browser.

## Usage

Once `index.html` is opened, you will see a canvas displaying animated text and a set of controls:

*   **Text:** An input field where you can type the text you want to animate.
*   **Font Size:** A number input to adjust the size of the animated text.
*   **F Factor:** A number input that controls the intensity of the "boiling" effect. Higher values will result in more erratic movement of the text points.

Adjust these controls to see the animation change in real-time.

## Technologies Used

*   **HTML:** For the basic page structure and input controls.
*   **CSS:** For basic styling.
*   **JavaScript:** For the animation logic and interaction with `opentype.js`.
*   **opentype.js:** A JavaScript library used to parse and draw OpenType fonts on HTML canvases.

## Files

*   `index.html`: The main HTML file that sets up the canvas and controls.
*   `app.js`: The JavaScript file containing the animation logic.
*   `comic_sans.ttf`: The font file used for rendering the text.