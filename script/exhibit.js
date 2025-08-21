// // Some of the following code have been inspired from DevDocs
// https://mdn.tlm.cloud/en-US/docs/Web/CSS/animation-play-state/
// https://mdn.tlm.cloud/en-US/docs/Web/API/HTMLElement/pointerdown_event/
// https://mdn.tlm.cloud/en-US/docs/Web/API/HTMLElement/pointermove_event/
// https://mdn.tlm.cloud/en-US/docs/Web/API/Element/mousewheel_event/

let radius = 240;
let autoRotate = true;
let rotateSpeed = 60;
let imgWidth = 120;
let imgHeight = 170;

// start
setTimeout(init, 500);

let odrag = document.getElementById('drag-container');
let ospin = document.getElementById('spin-container');
let aImg = ospin.getElementsByTagName('img');
let aVid = ospin.getElementsByTagName('video');
let aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + 'px';
ospin.style.height = imgHeight + 'px';

let ground = document.getElementById('ground');
ground.style.width = radius * 3 + 'px';
ground.style.height = radius * 3 + 'px';

function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - 1) / 4 + "s";
    }
}

function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}
function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

let sX, sY, nX, nY; 
let desX = 0;
let desY = 0; 
let tX = 0;
let tY = 10;

if (autoRotate) {
    let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    let sX = e.clientX,
        sY = e.clientY;

    this.onpointermove = function (e) {
        e = e || window.event;
        let nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
    }

    this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false)

            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17)
        this.onpointermove = this.onpointerup = null;
    }
    return false; 
}

document.onmousewheel =  function(e){
    e = e || window.event;
    let d = e.wheelDelta / 20 || e.detail;
    radius += d;
    init(1);
}

