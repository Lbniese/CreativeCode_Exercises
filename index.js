const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const backgroundImage = new Image();
const redRocketImage = new Image();

// Helper function to get an element's exact position
function getPosition(el) {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    if (el.tagName === 'BODY') {
      // deal with browser quirks with body/window/document and page scroll
      const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      const yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos,
  };
}

let canvasPos = getPosition(canvas);
let mouseX = 0;
let mouseY = 0;
const sqSize = 300;
let xPos = 0;
let yPos = 0;
let dX = 0;
let dY = 0;

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

canvas.addEventListener('mousemove', setMousePosition, false);

function animate() {
  dX = mouseX - xPos;
  dY = mouseY - yPos;

  xPos += (dX / 10);
  yPos += (dY / 10);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  context.drawImage(redRocketImage, xPos - sqSize / 2, yPos - sqSize / 2, sqSize, sqSize);

  requestAnimationFrame(animate);
}
animate();

function updatePosition() {
  canvasPos = getPosition(canvas);
}

// deal with the page getting resized or scrolled
window.addEventListener('scroll', updatePosition, false);
window.addEventListener('resize', updatePosition, false);

window.addEventListener('load', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  redRocketImage.src = './assets/red_rocket_mod.png';
  backgroundImage.src = './assets/background_sky.jpg';
  backgroundImage.onload = () => {
  };
});
