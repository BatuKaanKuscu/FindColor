const video = document.querySelector('#cameraFeed');
const canvas = document.querySelector('#sampleCanvas');
const colorPreview = document.querySelector('#colorPreview');
const rgbValue = document.querySelector('#rgbValue');
const hexValue = document.querySelector('#hexValue');
const statusText = document.querySelector('#statusText');
const startButton = document.querySelector('#startButton');
const measureButton = document.querySelector('#measureButton');
const retryButton = document.querySelector('#retryButton');
const lockedColor = document.querySelector('#lockedColor');

const context = canvas.getContext('2d', { willReadFrequently: true });
const measurementSize = 50;
const sampleStep = 2;
const analysisIntervalMs = 400;

let stream = null;
let analysisTimer = null;
let liveColor = null;

function rgbToHex(red, green, blue) {
  return `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, value)).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;
}

function setStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.classList.toggle('is-error', isError);
}

function updateColor(color) {
  liveColor = color;
  colorPreview.style.backgroundColor = color.hex;
  rgbValue.textContent = `${color.red}, ${color.green}, ${color.blue}`;
  hexValue.textContent = color.hex;
  measureButton.disabled = false;
}

function analyzeCenterColor() {
  if (!video.videoWidth || !video.videoHeight) {
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const area = Math.min(measurementSize, canvas.width, canvas.height);
  const startX = Math.max(0, Math.floor((canvas.width - area) / 2));
  const startY = Math.max(0, Math.floor((canvas.height - area) / 2));
  const imageData = context.getImageData(startX, startY, area, area).data;

  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let pixelCount = 0;

  for (let y = 0; y < area; y += sampleStep) {
    for (let x = 0; x < area; x += sampleStep) {
      const offset = (y * area + x) * 4;
      totalR += imageData[offset];
      totalG += imageData[offset + 1];
      totalB += imageData[offset + 2];
      pixelCount += 1;
    }
  }

  if (!pixelCount) {
    return;
  }

  const red = Math.round(totalR / pixelCount);
  const green = Math.round(totalG / pixelCount);
  const blue = Math.round(totalB / pixelCount);

  updateColor({
    red,
    green,
    blue,
    hex: rgbToHex(red, green, blue),
  });
}

function stopCamera() {
  if (analysisTimer) {
    window.clearInterval(analysisTimer);
    analysisTimer = null;
  }

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
}

async function startCamera() {
  stopCamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus('Bu tarayici kamera erisimini desteklemiyor.', true);
    return;
  }

  try {
    setStatus('Kamera izni bekleniyor...');
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    });

    video.srcObject = stream;
    await video.play();

    startButton.classList.add('is-hidden');
    setStatus('Merkezdeki alan olculuyor.');
    analyzeCenterColor();
    analysisTimer = window.setInterval(analyzeCenterColor, analysisIntervalMs);
  } catch (error) {
    startButton.classList.remove('is-hidden');
    measureButton.disabled = true;
    setStatus(`Kamera acilamadi: ${error.message}`, true);
  }
}

startButton.addEventListener('click', startCamera);
retryButton.addEventListener('click', startCamera);

measureButton.addEventListener('click', () => {
  if (!liveColor) {
    return;
  }

  lockedColor.textContent = `Sabitlenen: ${liveColor.hex}`;
});

window.addEventListener('pagehide', stopCamera);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
