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
    creditsDisplay.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
    creditsDisplay.style.padding = '5px';
    creditsDisplay.style.borderRadius = '5px';

    document.body.appendChild(creditsDisplay);

    creditsDisplay.innerHTML = 'By Mr.Negotiv|By Ananas|By Akuma|By Weest_bek | <a href="" target="_blank" style="color: white; text-decoration: underline;">.</a>';

    const fpsDisplay = document.createElement('div');
    fpsDisplay.style.position = 'absolute';
    fpsDisplay.style.top = '10px';
    fpsDisplay.style.left = '10px';
    fpsDisplay.style.fontSize = '14px';
    fpsDisplay.style.color = 'white';
    fpsDisplay.style.textAlign = 'center';
    fpsDisplay.style.zIndex = '9999';
    fpsDisplay.style.background = 'linear-gradient(45deg, #00ff00, #0000ff)';
    fpsDisplay.style.padding = '5px';
    fpsDisplay.style.borderRadius = '5px';

    document.body.appendChild(fpsDisplay);

    function updateDisplay() {
        fpsDisplay.textContent = 'FPS: ' + fps;
        requestAnimationFrame(updateDisplay);
    }

    updateDisplay();
})();

