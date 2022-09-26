character = document.querySelector('.character')
characterRect = character.getBoundingClientRect();
characterX = characterRect.left + characterRect.width/2;
characterY = characterRect.top + characterRect.height/2;

function angle(x1, y1, x2, y2) {
    rise = y2 - y1
    run = x2 - x1
    slope = rise / run

    angleInRad = Math.atan2(rise, run)
    console.log(`slope: ${slope}, atan: ${angleInRad}`)

    angleInDeg = angleInRad * 180 / Math.PI

    return angleInDeg
}

function lookAtMouse(e) {
    mousePointerX = e.clientX
    mousePointerY = e.clientY

    // console.log(mousePointerX, mousePointerY, characterX, characterY);
    angleToSet = angle(characterX, characterY, mousePointerX, mousePointerY)
    eyes = document.querySelectorAll('.eyes')
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${angleToSet}deg)`;
        character.style.filter = `hue-rotate(${angleToSet}deg)`;
    });
}

document.addEventListener('mousemove', lookAtMouse)