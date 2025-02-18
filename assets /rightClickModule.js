// ==UserScript==
// @name         гей
// @namespace    none
// @version      none
// @description  none
// @author       You
// @match        none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let lastTime = 0;
    let fps = 0;
    let frameCount = 0;

    function updateFPS() {
        let now = performance.now();
        frameCount++;

        if (now - lastTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = now;
        }

        requestAnimationFrame(updateFPS);
    }

    updateFPS();

    const creditsDisplay = document.createElement('div');
    creditsDisplay.style.position = 'absolute';
    creditsDisplay.style.bottom = '10px';
    creditsDisplay.style.left = '10px';
    creditsDisplay.style.fontSize = '14px';
    creditsDisplay.style.color = 'white';
    creditsDisplay.style.textAlign = 'center';
    creditsDisplay.style.zIndex = '9999';
    creditsDisplay.style.background = 'linear-gradient(45deg, red, yellow, green, blue, purple)';
    creditsDisplay.style.backgroundSize = '400% 400%';
    creditsDisplay.style.animation = 'gradientAnimation 3s ease infinite';

    document.body.appendChild(creditsDisplay);

    creditsDisplay.innerHTML = 'By Mr.Negotiv beta v1 | <a href="https://docs.google.com/spreadsheets/d/1bqLvzatj1TBfln0rGBf8X96T_UzXUhTykiiM9Y6cLVU/edit?gid=1695479590#gid=1695479590" target="_blank" style="color: white; text-decoration: underline;">Инструкция</a>';

    const fpsDisplay = document.createElement('div');
    fpsDisplay.style.position = 'absolute';
    fpsDisplay.style.top = '10px';
    fpsDisplay.style.left = '10px';
    fpsDisplay.style.fontSize = '14px';
    fpsDisplay.style.color = 'white';
    fpsDisplay.style.textAlign = 'center';
    fpsDisplay.style.zIndex = '9999';
    fpsDisplay.style.background = 'linear-gradient(45deg, red, yellow, green, blue, purple)';
    fpsDisplay.style.backgroundSize = '400% 400%';
    fpsDisplay.style.animation = 'gradientAnimation 3s ease infinite';

    document.body.appendChild(fpsDisplay);

    function updateDisplay() {
        fpsDisplay.textContent = 'FPS: ' + fps;
        requestAnimationFrame(updateDisplay);
    }

    updateDisplay();

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
})();
