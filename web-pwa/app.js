const storageKeys = {
  colors: 'findColor.colors',
  profile: 'findColor.profile',
  settings: 'findColor.settings',
  selectedColor: 'findColor.selectedColor',
};

const translations = {
  tr: {
    appMode: 'Mobil renk studyosu',
    welcome: 'Hos geldin',
    homeCopy: 'Olculen renkleri kaydet, galeride gez ve mililitreye gore demo pigment oranlarini hesapla.',
    openCamera: 'Kamerayi Ac',
    openGallery: 'Galeri',
    openAI: 'AI Gorsel',
    savedColors: 'Kayitli renkler',
    selectedColor: 'Secili',
    latestColors: 'Son renkler',
    seeAll: 'Tumunu gor',
    topMeasure: 'Olc',
    topGallery: 'Galeri',
    topFormation: 'Olusum',
    topAI: 'AI',
    topDevice: 'Cihaz',
    liveCamera: 'CANLI KAMERA',
    centerSampling: 'Merkez olcum',
    startCamera: 'Kamerayi Baslat',
    detectedColor: 'ALGILANAN RENK',
    cameraPrompt: 'Baslamak icin kamera izni ver.',
    saveColor: 'Rengi Kaydet',
    catalog: 'KATALOG',
    colorGallery: 'Renk galerisi',
    clear: 'Temizle',
    mixing: 'KARISIM',
    formulaTitle: 'Rengin olusumu',
    savedGalleryTitle: 'Kaydedilen renkler',
    vibrantCatalog: 'Canli renk katalogu',
    tapToFormula: 'Bir renge dokununca olusum hesaplama ekranina gider.',
    targetMl: 'Hedef miktar (ml)',
    formulaNote: 'Sadece demo pigment orani; endustriyel kimyasal formul degildir.',
    chooseColor: 'Renk sec',
    device: 'CIHAZ',
    connectDevice: 'Cihazini bagla',
    offline: 'Cevrimdisi',
    online: 'Bagli',
    pairDevice: 'Demo cihazi eslestir',
    deviceMl: 'Cihaz miktari (ml)',
    sendToDevice: 'Receteyi cihaza gonder',
    profile: 'PROFIL',
    profileShort: 'Profil',
    userModule: 'Kullanici modulu',
    userName: 'Kullanici adi',
    workspace: 'Calisma alani',
    saveProfile: 'Profili kaydet',
    siteColor: 'Site rengi',
    navHome: 'Ana',
    navCamera: 'Kamera',
    navGallery: 'Galeri',
    navMix: 'Karisim',
    navAI: 'AI',
    navDevice: 'Cihaz',
    navProfile: 'Profil',
    noColors: 'Henuz renk kaydedilmedi.',
    saved: 'Renk galeriye kaydedildi.',
    catalogColor: 'Katalog rengi',
    savedColor: 'Olculen renk',
    measuring: 'Merkezdeki alan olculuyor.',
    waitingPermission: 'Kamera izni bekleniyor...',
    cameraUnsupported: 'Bu tarayici kamera erisimini desteklemiyor.',
    cameraNeedsSecureContext: 'Kamera icin siteyi HTTPS uzerinden acman gerekiyor.',
    cameraPermissionDenied: 'Kamera izni reddedildi. Tarayici ayarlarindan Find Color icin kamerayi ac.',
    cameraPermissionBlocked: 'Kamera izni engellenmis. Site ayarlarindan kamera iznini sifirlayip tekrar dene.',
    cameraInUse: 'Kamera baska bir uygulama tarafindan kullaniliyor olabilir.',
    cameraNoDevice: 'Bu cihazda kullanilabilir kamera bulunamadi.',
    cameraFailed: 'Kamera acilamadi',
    profileSaved: 'Profil kaydedildi.',
    selectColorFirst: 'Once galeriden bir renk sec.',
    demoConnected: 'Demo cihaz baglandi.',
    recipeSent: 'Demo paket hazirlandi. Gercek cihaza gonderim simule edildi.',
    clearConfirm: 'Tum kayitli renkler silinsin mi?',
    aiStudio: 'AI STUDYO',
    aiTitle: 'Gorsel uretici',
    freeNoToken: 'Token yok',
    aiPrompt: 'Prompt',
    aiPromptPlaceholder: 'Cekilen fotografin icindeki grafitinin kapatilmis halini goster',
    aiCameraPrompt: 'AI kamerayi ac ve grafitili alanin tamamini kadraja al.',
    startAICamera: 'AI kamerayi ac',
    captureAndSendAI: 'Fotografi AI a gonder',
    useSelectedColor: 'Rengi kapatma icin kullan',
    generateImage: 'Gorsel uret',
    aiReady: 'Ucretsiz gorsel uretimi API anahtari olmadan Pollinations ile calisir.',
    aiPromptRequired: 'Once bir prompt yaz.',
    aiCameraStarting: 'AI kamerasi aciliyor...',
    aiCameraReady: 'Kareyi hazirla, sonra fotografi AI a gonder.',
    aiPhotoRequired: 'Once AI kamerayi ac.',
    aiPhotoCaptured: 'Fotograf yakalandi, AI fotografin tamamini inceliyor...',
    aiVisionFailed: 'Fotograf AI tarafindan okunamadi.',
    aiGenerating: 'Gorsel uretiliyor...',
    aiGenerated: 'Gorsel hazir.',
    aiFailed: 'Gorsel uretilirken hata olustu.',
    aiResult: 'Sonuc',
    openImage: 'Ac',
    aiImagePlaceholder: 'Uretilen gorsel burada gorunecek.',
  },
  en: {
    appMode: 'Mobile color studio',
    welcome: 'Welcome',
    homeCopy: 'Save measured colors, browse your gallery, and calculate demo pigment ratios by milliliter.',
    openCamera: 'Open Camera',
    openGallery: 'Gallery',
    openAI: 'AI Image',
    savedColors: 'Saved colors',
    selectedColor: 'Selected',
    latestColors: 'Latest colors',
    seeAll: 'See all',
    topMeasure: 'Measure',
    topGallery: 'Gallery',
    topFormation: 'Formation',
    topAI: 'AI',
    topDevice: 'Device',
    liveCamera: 'LIVE CAMERA',
    centerSampling: 'Center sampling',
    startCamera: 'Start Camera',
    detectedColor: 'DETECTED COLOR',
    cameraPrompt: 'Allow camera access to start.',
    saveColor: 'Save Color',
    catalog: 'CATALOG',
    colorGallery: 'Color gallery',
    clear: 'Clear',
    mixing: 'MIXING',
    formulaTitle: 'Color formation',
    savedGalleryTitle: 'Saved colors',
    vibrantCatalog: 'Vibrant color catalog',
    tapToFormula: 'Tap a color to open the formation calculator.',
    targetMl: 'Target amount (ml)',
    formulaNote: 'Demo pigment ratios only; not an industrial chemical formula.',
    chooseColor: 'Choose color',
    device: 'DEVICE',
    connectDevice: 'Connect device',
    offline: 'Offline',
    online: 'Online',
    pairDevice: 'Pair demo device',
    deviceMl: 'Device amount (ml)',
    sendToDevice: 'Send recipe to device',
    profile: 'PROFILE',
    profileShort: 'Profile',
    userModule: 'User module',
    userName: 'User name',
    workspace: 'Workspace',
    saveProfile: 'Save profile',
    siteColor: 'Site color',
    navHome: 'Home',
    navCamera: 'Camera',
    navGallery: 'Gallery',
    navMix: 'Mix',
    navAI: 'AI',
    navDevice: 'Device',
    navProfile: 'Profile',
    noColors: 'No saved colors yet.',
    saved: 'Color saved to gallery.',
    catalogColor: 'Catalog color',
    savedColor: 'Measured color',
    measuring: 'Center area is being measured.',
    waitingPermission: 'Waiting for camera permission...',
    cameraUnsupported: 'This browser does not support camera access.',
    cameraNeedsSecureContext: 'Camera access requires opening the site over HTTPS.',
    cameraPermissionDenied: 'Camera permission was denied. Enable camera access for Find Color in browser settings.',
    cameraPermissionBlocked: 'Camera permission is blocked. Reset the camera permission in site settings and try again.',
    cameraInUse: 'The camera may already be in use by another app.',
    cameraNoDevice: 'No usable camera was found on this device.',
    cameraFailed: 'Camera could not be opened',
    profileSaved: 'Profile saved.',
    selectColorFirst: 'Choose a color from the gallery first.',
    demoConnected: 'Demo device connected.',
    recipeSent: 'Demo packet prepared. Real device transfer was simulated.',
    clearConfirm: 'Delete all saved colors?',
    aiStudio: 'AI STUDIO',
    aiTitle: 'Image generator',
    freeNoToken: 'No token',
    aiPrompt: 'Prompt',
    aiPromptPlaceholder: 'Show the graffiti in the captured photo covered over',
    aiCameraPrompt: 'Open the AI camera and frame the full graffiti photo.',
    startAICamera: 'Open AI camera',
    captureAndSendAI: 'Send photo to AI',
    useSelectedColor: 'Use color to cover',
    generateImage: 'Generate image',
    aiReady: 'Free image generation uses Pollinations without an API key.',
    aiPromptRequired: 'Write a prompt first.',
    aiCameraStarting: 'Opening AI camera...',
    aiCameraReady: 'Frame the shot, then send the photo to AI.',
    aiPhotoRequired: 'Open the AI camera first.',
    aiPhotoCaptured: 'Photo captured. AI is reading the full photo...',
    aiVisionFailed: 'AI could not read the photo.',
    aiGenerating: 'Generating image...',
    aiGenerated: 'Image is ready.',
    aiFailed: 'The image could not be generated.',
    aiResult: 'Result',
    openImage: 'Open',
    aiImagePlaceholder: 'Your generated image will appear here.',
  },
};

const pigmentLabels = {
  tr: {
    white: 'Beyaz baz',
    cyan: 'Cyan pigment',
    magenta: 'Magenta pigment',
    yellow: 'Sari pigment',
    black: 'Siyah toner',
    binder: 'Seffaf baglayici',
  },
  en: {
    white: 'White base',
    cyan: 'Cyan pigment',
    magenta: 'Magenta pigment',
    yellow: 'Yellow pigment',
    black: 'Black toner',
    binder: 'Clear binder',
  },
};

const themeOptions = ['#4dd0e1', '#6ee7b7', '#f8c146', '#ff7a90', '#a78bfa'];

const catalogColors = [
  { id: 'cat-coral', name: { tr: 'Canli mercan', en: 'Vivid coral' }, red: 255, green: 92, blue: 92, hex: '#FF5C5C' },
  { id: 'cat-amber', name: { tr: 'Parlak amber', en: 'Bright amber' }, red: 255, green: 190, blue: 64, hex: '#FFBE40' },
  { id: 'cat-lime', name: { tr: 'Lime yesili', en: 'Lime green' }, red: 132, green: 235, blue: 82, hex: '#84EB52' },
  { id: 'cat-mint', name: { tr: 'Nane', en: 'Mint' }, red: 63, green: 224, blue: 181, hex: '#3FE0B5' },
  { id: 'cat-cyan', name: { tr: 'Elektrik cyan', en: 'Electric cyan' }, red: 47, green: 211, blue: 255, hex: '#2FD3FF' },
  { id: 'cat-blue', name: { tr: 'Kobalt mavi', en: 'Cobalt blue' }, red: 70, green: 112, blue: 255, hex: '#4670FF' },
  { id: 'cat-violet', name: { tr: 'Mor neon', en: 'Neon violet' }, red: 166, green: 104, blue: 255, hex: '#A668FF' },
  { id: 'cat-pink', name: { tr: 'Fusya', en: 'Fuchsia' }, red: 255, green: 78, blue: 174, hex: '#FF4EAE' },
  { id: 'cat-terracotta', name: { tr: 'Terracotta', en: 'Terracotta' }, red: 198, green: 91, blue: 61, hex: '#C65B3D' },
  { id: 'cat-sage', name: { tr: 'Ada cayi', en: 'Sage' }, red: 143, green: 167, blue: 128, hex: '#8FA780' },
];

const hueNames = {
  tr: [
    ['Kirmizi', 15],
    ['Turuncu', 45],
    ['Sari', 75],
    ['Yesil', 165],
    ['Cyan', 195],
    ['Mavi', 255],
    ['Mor', 285],
    ['Pembe', 345],
    ['Kirmizi', 360],
  ],
  en: [
    ['Red', 15],
    ['Orange', 45],
    ['Yellow', 75],
    ['Green', 165],
    ['Cyan', 195],
    ['Blue', 255],
    ['Purple', 285],
    ['Pink', 345],
    ['Red', 360],
  ],
};

const video = document.querySelector('#cameraFeed');
const canvas = document.querySelector('#sampleCanvas');
const colorPreview = document.querySelector('#colorPreview');
const rgbValue = document.querySelector('#rgbValue');
const hexValue = document.querySelector('#hexValue');
const statusText = document.querySelector('#statusText');
const startButton = document.querySelector('#startButton');
const measureButton = document.querySelector('#measureButton');
const retryButton = document.querySelector('#retryButton');
const recentColors = document.querySelector('#recentColors');
const homeRecentColors = document.querySelector('#homeRecentColors');
const savedGalleryGrid = document.querySelector('#savedGalleryGrid');
const catalogGalleryGrid = document.querySelector('#catalogGalleryGrid');
const clearGalleryButton = document.querySelector('#clearGalleryButton');
const savedGalleryCount = document.querySelector('#savedGalleryCount');
const savedCount = document.querySelector('#savedCount');
const selectedHex = document.querySelector('#selectedHex');
const formulaSwatch = document.querySelector('#formulaSwatch');
const formulaColorTitle = document.querySelector('#formulaColorTitle');
const recipeList = document.querySelector('#recipeList');
const mlInput = document.querySelector('#mlInput');
const deviceMlInput = document.querySelector('#deviceMlInput');
const deviceState = document.querySelector('#deviceState');
const connectDeviceButton = document.querySelector('#connectDeviceButton');
const sendRecipeButton = document.querySelector('#sendRecipeButton');
const deviceLog = document.querySelector('#deviceLog');
const languageButton = document.querySelector('#languageButton');
const userNameInput = document.querySelector('#userNameInput');
const workspaceInput = document.querySelector('#workspaceInput');
const saveProfileButton = document.querySelector('#saveProfileButton');
const welcomeTitle = document.querySelector('#welcomeTitle');
const themePalette = document.querySelector('#themePalette');
const aiCameraFeed = document.querySelector('#aiCameraFeed');
const aiCaptureCanvas = document.querySelector('#aiCaptureCanvas');
const capturedAIPhoto = document.querySelector('#capturedAIPhoto');
const aiCameraPlaceholder = document.querySelector('#aiCameraPlaceholder');
const startAICameraButton = document.querySelector('#startAICameraButton');
const captureAIPhotoButton = document.querySelector('#captureAIPhotoButton');
const aiPromptInput = document.querySelector('#aiPromptInput');
const useSelectedColorButton = document.querySelector('#useSelectedColorButton');
const generateImageButton = document.querySelector('#generateImageButton');
const aiStatusText = document.querySelector('#aiStatusText');
const generatedImage = document.querySelector('#generatedImage');
const aiImagePlaceholder = document.querySelector('#aiImagePlaceholder');
const openGeneratedImageLink = document.querySelector('#openGeneratedImageLink');
const aiImageFrame = document.querySelector('.ai-image-frame');
const context = canvas.getContext('2d', { willReadFrequently: true });

const measurementSize = 50;
const sampleStep = 2;
const analysisIntervalMs = 400;

let stream = null;
let aiStream = null;
let analysisTimer = null;
let liveColor = null;
let deviceConnected = false;

let colors = readJson(storageKeys.colors, []);
let profile = readJson(storageKeys.profile, { name: '', workspace: '' });
let settings = readJson(storageKeys.settings, { language: 'tr', accent: '#4dd0e1' });
let selectedColor = readJson(storageKeys.selectedColor, colors[0] || null);

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function t(key) {
  return translations[settings.language][key] || translations.en[key] || key;
}

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

function setView(viewName) {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('is-active', view.id === `${viewName}View`);
  });

  document.querySelectorAll('.nav-button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.view === viewName);
  });

  document.querySelectorAll('.top-tab').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.go === viewName);
  });

  if (viewName !== 'camera') {
    stopCamera();
  }

  if (viewName !== 'ai') {
    stopAICamera();
  }
}

function applyLanguage() {
  document.documentElement.lang = settings.language;
  languageButton.textContent = settings.language.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  setStatus(t('cameraPrompt'));
  setAIStatus(t('aiReady'));
  renderAll();
}

function applyTheme() {
  document.documentElement.style.setProperty('--accent', settings.accent);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', settings.accent || '#101214');
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
  updateColor({ red, green, blue, hex: rgbToHex(red, green, blue) });
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

  video.pause();
  video.srcObject = null;
}

async function startCamera() {
  stopCamera();
  stopAICamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus(t('cameraUnsupported'), true);
    return;
  }

  if (!window.isSecureContext) {
    setStatus(t('cameraNeedsSecureContext'), true);
    return;
  }

  try {
    startButton.disabled = true;
    measureButton.disabled = true;
    setStatus(t('waitingPermission'));
    stream = await requestCameraStream();

    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');
    video.muted = true;
    video.playsInline = true;
    video.srcObject = stream;
    await waitForVideoMetadata();
    await video.play();
    startButton.classList.add('is-hidden');
    setStatus(t('measuring'));
    analyzeCenterColor();
    analysisTimer = window.setInterval(analyzeCenterColor, analysisIntervalMs);
  } catch (error) {
    stopCamera();
    startButton.classList.remove('is-hidden');
    measureButton.disabled = true;
    setStatus(buildCameraErrorMessage(error), true);
  } finally {
    startButton.disabled = false;
  }
}

function stopAICamera() {
  if (aiStream) {
    aiStream.getTracks().forEach((track) => track.stop());
    aiStream = null;
  }

  aiCameraFeed.pause();
  aiCameraFeed.srcObject = null;
  aiCameraFeed.closest('.ai-camera-frame').classList.remove('has-camera');
}

async function startAICamera() {
  stopCamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    setAIStatus(t('cameraUnsupported'), true);
    return;
  }

  if (!window.isSecureContext) {
    setAIStatus(t('cameraNeedsSecureContext'), true);
    return;
  }

  try {
    startAICameraButton.disabled = true;
    captureAIPhotoButton.disabled = true;
    setAIStatus(t('aiCameraStarting'));
    aiStream = await requestCameraStream();

    aiCameraFeed.setAttribute('playsinline', '');
    aiCameraFeed.setAttribute('autoplay', '');
    aiCameraFeed.muted = true;
    aiCameraFeed.playsInline = true;
    aiCameraFeed.srcObject = aiStream;
    await waitForAIVideoMetadata();
    await aiCameraFeed.play();

    capturedAIPhoto.removeAttribute('src');
    aiCameraFeed.closest('.ai-camera-frame').classList.add('has-camera');
    aiCameraFeed.closest('.ai-camera-frame').classList.remove('has-capture');
    setAIStatus(t('aiCameraReady'));
  } catch (error) {
    stopAICamera();
    setAIStatus(buildCameraErrorMessage(error), true);
  } finally {
    startAICameraButton.disabled = false;
    captureAIPhotoButton.disabled = false;
  }
}

function waitForAIVideoMetadata() {
  if (aiCameraFeed.videoWidth && aiCameraFeed.videoHeight) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const timeout = window.setTimeout(resolve, 1500);
    aiCameraFeed.addEventListener(
      'loadedmetadata',
      () => {
        window.clearTimeout(timeout);
        resolve();
      },
      { once: true },
    );
  });
}

function captureAIPhotoDataUrl() {
  if (!aiStream || !aiCameraFeed.videoWidth || !aiCameraFeed.videoHeight) {
    throw new Error(t('aiPhotoRequired'));
  }

  const maxSize = 768;
  const ratio = Math.min(maxSize / aiCameraFeed.videoWidth, maxSize / aiCameraFeed.videoHeight, 1);
  const width = Math.round(aiCameraFeed.videoWidth * ratio);
  const height = Math.round(aiCameraFeed.videoHeight * ratio);
  const context2d = aiCaptureCanvas.getContext('2d', { willReadFrequently: true });

  aiCaptureCanvas.width = width;
  aiCaptureCanvas.height = height;
  context2d.drawImage(aiCameraFeed, 0, 0, width, height);

  return aiCaptureCanvas.toDataURL('image/jpeg', 0.82);
}

async function requestCameraStream() {
  const constraintOptions = [
    {
      audio: false,
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    },
    {
      audio: false,
      video: {
        facingMode: 'environment',
      },
    },
    {
      audio: false,
      video: true,
    },
  ];

  let lastError = null;

  for (const constraints of constraintOptions) {
    try {
      return await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(t('cameraFailed'));
}

function waitForVideoMetadata() {
  if (video.videoWidth && video.videoHeight) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const timeout = window.setTimeout(resolve, 1500);
    video.addEventListener(
      'loadedmetadata',
      () => {
        window.clearTimeout(timeout);
        resolve();
      },
      { once: true },
    );
  });
}

function buildCameraErrorMessage(error) {
  const name = error?.name || '';

  if (name === 'NotAllowedError' || name === 'SecurityError') {
    return t('cameraPermissionDenied');
  }

  if (name === 'PermissionDeniedError') {
    return t('cameraPermissionBlocked');
  }

  if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
    return t('cameraNoDevice');
  }

  if (name === 'NotReadableError' || name === 'TrackStartError') {
    return t('cameraInUse');
  }

  const detail = error?.message || name;
  return detail ? `${t('cameraFailed')}: ${detail}` : t('cameraFailed');
}

function setAIStatus(message, isError = false) {
  aiStatusText.textContent = message;
  aiStatusText.classList.toggle('is-error', isError);
}

function applySelectedColorToPrompt() {
  if (!selectedColor) {
    setAIStatus(t('selectColorFirst'), true);
    return;
  }

  const colorName = getColorName(selectedColor, t('savedColor'));
  aiPromptInput.value =
    settings.language === 'tr'
      ? `Cekilen fotografin icindeki grafitinin ${colorName} ${selectedColor.hex} boya ile kapatilmis halini goster`
      : `Show the graffiti in the captured photo covered over with ${colorName} ${selectedColor.hex} paint`;
  setAIStatus(t('aiReady'));
}

function buildAIImageUrl(prompt) {
  const params = new URLSearchParams({
    width: '768',
    height: '768',
    model: 'flux',
    private: 'true',
    safe: 'true',
    nologo: 'true',
    seed: String(Date.now() % 1000000000),
    referrer: 'find-color-pwa',
  });

  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?${params.toString()}`;
}

function getSelectedColorHint() {
  return selectedColor
    ? `, covered with paint color ${selectedColor.hex}, RGB ${selectedColor.red} ${selectedColor.green} ${selectedColor.blue}`
    : '';
}

function generateAIImage() {
  const prompt = aiPromptInput.value.trim();

  if (!prompt) {
    setAIStatus(t('aiPromptRequired'), true);
    aiPromptInput.focus();
    return;
  }

  renderGeneratedAIImage(`${prompt}${getSelectedColorHint()}`, prompt);
}

function renderGeneratedAIImage(generationPrompt, altText) {
  const imageUrl = buildAIImageUrl(generationPrompt);
  generateImageButton.disabled = true;
  captureAIPhotoButton.disabled = true;
  openGeneratedImageLink.href = '#';
  openGeneratedImageLink.classList.add('is-disabled');
  aiImageFrame.classList.remove('has-image');
  aiImagePlaceholder.textContent = t('aiGenerating');
  setAIStatus(t('aiGenerating'));

  generatedImage.onload = () => {
    generateImageButton.disabled = false;
    captureAIPhotoButton.disabled = false;
    aiImageFrame.classList.add('has-image');
    openGeneratedImageLink.href = imageUrl;
    openGeneratedImageLink.classList.remove('is-disabled');
    setAIStatus(t('aiGenerated'));
  };

  generatedImage.onerror = () => {
    generateImageButton.disabled = false;
    captureAIPhotoButton.disabled = false;
    aiImageFrame.classList.remove('has-image');
    openGeneratedImageLink.href = '#';
    openGeneratedImageLink.classList.add('is-disabled');
    aiImagePlaceholder.textContent = t('aiImagePlaceholder');
    setAIStatus(t('aiFailed'), true);
  };

  generatedImage.alt = altText || generationPrompt;
  generatedImage.src = imageUrl;
}

async function buildGraffitiCoverPromptFromPhoto(imageDataUrl) {
  const colorInstruction = selectedColor
    ? `Use ${selectedColor.hex} paint as the cover color where appropriate.`
    : 'Use a realistic clean wall or matching paint color where appropriate.';

  const payload = {
    model: 'openai',
    private: true,
    referrer: 'find-color-pwa',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: [
              'Look at the full photo. Write one concise English image-generation prompt.',
              'The prompt must preserve the same camera angle, wall, lighting, environment, and composition.',
              'The result should show the graffiti covered over with paint, clean and realistic, with no visible graffiti text.',
              colorInstruction,
              'Return only the prompt. No quotes, no explanation.',
            ].join(' '),
          },
          {
            type: 'image_url',
            image_url: {
              url: imageDataUrl,
            },
          },
        ],
      },
    ],
  };

  const response = await fetch('https://text.pollinations.ai/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const result = await response.json();
  return result?.choices?.[0]?.message?.content?.trim() || '';
}

async function captureAndGenerateAIPhoto() {
  let imageDataUrl;

  try {
    imageDataUrl = captureAIPhotoDataUrl();
  } catch (error) {
    setAIStatus(error.message || t('aiPhotoRequired'), true);
    return;
  }

  capturedAIPhoto.src = imageDataUrl;
  capturedAIPhoto.alt = t('captureAndSendAI');
  aiCameraFeed.closest('.ai-camera-frame').classList.remove('has-camera');
  aiCameraFeed.closest('.ai-camera-frame').classList.add('has-capture');

  try {
    startAICameraButton.disabled = true;
    captureAIPhotoButton.disabled = true;
    generateImageButton.disabled = true;
    setAIStatus(t('aiPhotoCaptured'));

    const prompt = await buildGraffitiCoverPromptFromPhoto(imageDataUrl);
    if (!prompt) {
      throw new Error(t('aiVisionFailed'));
    }

    aiPromptInput.value = prompt;
    renderGeneratedAIImage(`${prompt}${getSelectedColorHint()}`, prompt);
  } catch (error) {
    setAIStatus(`${t('aiVisionFailed')} ${error.message || ''}`.trim(), true);
    captureAIPhotoButton.disabled = false;
    generateImageButton.disabled = false;
  } finally {
    startAICameraButton.disabled = false;
  }
}

function saveLiveColor() {
  if (!liveColor) {
    return;
  }

  const color = {
    ...liveColor,
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now()),
    source: 'camera',
    name: buildColorName(liveColor),
    createdAt: new Date().toISOString(),
  };

  colors = [color, ...colors].slice(0, 80);
  selectedColor = color;
  writeJson(storageKeys.colors, colors);
  writeJson(storageKeys.selectedColor, selectedColor);
  setStatus(t('saved'));
  renderAll();
}

function selectColor(color) {
  selectedColor = color;
  writeJson(storageKeys.selectedColor, selectedColor);
  renderAll();
  setView('formula');
}

function getColorName(color, fallback = '') {
  if (typeof color.name === 'string') {
    return color.name;
  }

  if (color.name && typeof color.name === 'object') {
    return color.name[settings.language] || color.name.en || fallback;
  }

  const generated = buildColorName(color);
  return generated[settings.language] || generated.en || fallback;
}

function buildColorName(color) {
  const { hue, saturation, lightness } = rgbToHsl(color.red, color.green, color.blue);
  const language = settings.language;

  if (saturation < 8) {
    if (lightness < 18) {
      return { tr: 'Siyah', en: 'Black' };
    }

    if (lightness > 84) {
      return { tr: 'Beyaz', en: 'White' };
    }

    return { tr: lightness > 50 ? 'Acik gri' : 'Koyu gri', en: lightness > 50 ? 'Light gray' : 'Dark gray' };
  }

  const base = hueNames[language].find((item) => hue <= item[1])?.[0] || hueNames[language][0][0];
  const englishBase = hueNames.en.find((item) => hue <= item[1])?.[0] || hueNames.en[0][0];
  const toneTr = lightness < 28 ? 'Koyu' : lightness > 72 ? 'Acik' : saturation > 62 ? 'Canli' : 'Yumusak';
  const toneEn = lightness < 28 ? 'Dark' : lightness > 72 ? 'Light' : saturation > 62 ? 'Vivid' : 'Soft';

  return {
    tr: `${toneTr} ${base.toLowerCase()}`,
    en: `${toneEn} ${englishBase.toLowerCase()}`,
  };
}

function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;

  if (max === min) {
    return { hue: 0, saturation: 0, lightness: lightness * 100 };
  }

  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue;

  if (max === r) {
    hue = (g - b) / delta + (g < b ? 6 : 0);
  } else if (max === g) {
    hue = (b - r) / delta + 2;
  } else {
    hue = (r - g) / delta + 4;
  }

  return {
    hue: hue * 60,
    saturation: saturation * 100,
    lightness: lightness * 100,
  };
}

function colorToRecipe(color, totalMl) {
  if (!color) {
    return [];
  }

  const c = 255 - color.red;
  const m = 255 - color.green;
  const y = 255 - color.blue;
  const black = Math.min(c, m, y) * 0.28;
  const white = ((color.red + color.green + color.blue) / 765) * 90;
  const binder = 14;

  const raw = [
    ['white', white],
    ['cyan', Math.max(0, c - black)],
    ['magenta', Math.max(0, m - black)],
    ['yellow', Math.max(0, y - black)],
    ['black', black],
    ['binder', binder],
  ];

  const sum = raw.reduce((total, item) => total + item[1], 0) || 1;
  return raw.map(([key, amount]) => {
    const percent = (amount / sum) * 100;
    return {
      key,
      label: pigmentLabels[settings.language][key],
      percent,
      ml: (percent * totalMl) / 100,
    };
  });
}

function renderColorStrip(target, limit = 8) {
  target.innerHTML = '';
  const items = colors.length ? colors.slice(0, limit) : catalogColors.slice(0, limit);

  if (!items.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = t('noColors');
    target.append(empty);
    return;
  }

  items.forEach((color) => {
    const button = document.createElement('button');
    button.className = 'color-chip';
    button.type = 'button';
    button.style.setProperty('--chip', color.hex);
    button.title = color.hex;
    button.addEventListener('click', () => selectColor(color));
    target.append(button);
  });
}

function renderGallery() {
  savedGalleryGrid.innerHTML = '';
  catalogGalleryGrid.innerHTML = '';
  savedGalleryCount.textContent = String(colors.length);

  if (!colors.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = t('noColors');
    savedGalleryGrid.append(empty);
  }

  colors.forEach((color) => {
    savedGalleryGrid.append(createGalleryCard(color, getColorName(color, t('savedColor'))));
  });

  catalogColors.forEach((color) => {
    catalogGalleryGrid.append(createGalleryCard(color, getColorName(color, t('catalogColor'))));
  });
}

function createGalleryCard(color, title) {
  const card = document.createElement('button');
  card.className = 'gallery-card';
  card.type = 'button';
  card.innerHTML = `
    <div class="gallery-swatch" style="--swatch: ${color.hex}"></div>
    <strong>${title}</strong>
    <span>${color.hex}</span>
    <span>RGB ${color.red}, ${color.green}, ${color.blue}</span>
    <em>${t('topFormation')}</em>
  `;
  card.addEventListener('click', () => selectColor(color));
  return card;
}

function renderFormula() {
  const totalMl = Math.max(10, Number(mlInput.value) || 250);
  const colorName = selectedColor ? getColorName(selectedColor, '') : '';
  formulaColorTitle.textContent = selectedColor
    ? `${colorName ? `${colorName} ` : ''}${selectedColor.hex}`
    : '-';
  formulaSwatch.style.backgroundColor = selectedColor?.hex || '#2a2f35';
  selectedHex.textContent = selectedColor?.hex || '-';
  recipeList.innerHTML = '';

  if (!selectedColor) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = t('selectColorFirst');
    recipeList.append(empty);
    return;
  }

  colorToRecipe(selectedColor, totalMl).forEach((item) => {
    const row = document.createElement('div');
    row.className = 'recipe-row';
    row.innerHTML = `
      <div>
        <strong>${item.label}</strong>
        <span>${item.percent.toFixed(1)}%</span>
        <div class="bar-track"><div class="bar-fill" style="--pct: ${item.percent}%"></div></div>
      </div>
      <strong>${item.ml.toFixed(1)} ml</strong>
    `;
    recipeList.append(row);
  });
}

function renderThemePalette() {
  themePalette.innerHTML = '';
  themeOptions.forEach((color) => {
    const button = document.createElement('button');
    button.className = `theme-swatch${settings.accent === color ? ' is-active' : ''}`;
    button.type = 'button';
    button.style.setProperty('--theme', color);
    button.addEventListener('click', () => {
      settings = { ...settings, accent: color };
      writeJson(storageKeys.settings, settings);
      applyTheme();
      renderThemePalette();
    });
    themePalette.append(button);
  });
}

function renderProfile() {
  userNameInput.value = profile.name || '';
  workspaceInput.value = profile.workspace || '';
  welcomeTitle.textContent = profile.name ? `Find Color, ${profile.name}` : 'Find Color';
}

function renderAll() {
  savedCount.textContent = String(colors.length);
  renderColorStrip(recentColors, 8);
  renderColorStrip(homeRecentColors, 8);
  renderGallery();
  renderFormula();
  renderThemePalette();
  renderProfile();
}

document.querySelectorAll('[data-go]').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.go));
});

document.querySelectorAll('.nav-button').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});

startButton.addEventListener('click', startCamera);
retryButton.addEventListener('click', startCamera);
measureButton.addEventListener('click', saveLiveColor);
startAICameraButton.addEventListener('click', startAICamera);
captureAIPhotoButton.addEventListener('click', captureAndGenerateAIPhoto);
useSelectedColorButton.addEventListener('click', applySelectedColorToPrompt);
generateImageButton.addEventListener('click', generateAIImage);
aiPromptInput.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    generateAIImage();
  }
});
mlInput.addEventListener('input', renderFormula);
deviceMlInput.addEventListener('input', () => {});

clearGalleryButton.addEventListener('click', () => {
  if (!window.confirm(t('clearConfirm'))) {
    return;
  }

  colors = [];
  selectedColor = null;
  writeJson(storageKeys.colors, colors);
  writeJson(storageKeys.selectedColor, selectedColor);
  renderAll();
});

connectDeviceButton.addEventListener('click', () => {
  deviceConnected = !deviceConnected;
  deviceState.textContent = deviceConnected ? t('online') : t('offline');
  deviceState.classList.toggle('is-online', deviceConnected);
  deviceLog.textContent = deviceConnected ? t('demoConnected') : '';
});

sendRecipeButton.addEventListener('click', () => {
  if (!selectedColor) {
    deviceLog.textContent = t('selectColorFirst');
    return;
  }

  const totalMl = Math.max(10, Number(deviceMlInput.value) || 250);
  const recipe = colorToRecipe(selectedColor, totalMl).map((item) => ({
    material: item.label,
    percent: Number(item.percent.toFixed(1)),
    ml: Number(item.ml.toFixed(1)),
  }));

  deviceLog.textContent = `${t('recipeSent')}\n\n${JSON.stringify(
    {
      color: selectedColor.hex,
      totalMl,
      recipe,
    },
    null,
    2,
  )}`;
});

languageButton.addEventListener('click', () => {
  settings = {
    ...settings,
    language: settings.language === 'tr' ? 'en' : 'tr',
  };
  writeJson(storageKeys.settings, settings);
  applyLanguage();
});

saveProfileButton.addEventListener('click', () => {
  profile = {
    name: userNameInput.value.trim(),
    workspace: workspaceInput.value.trim(),
  };
  writeJson(storageKeys.profile, profile);
  renderProfile();
  deviceLog.textContent = t('profileSaved');
});

window.addEventListener('pagehide', () => {
  stopCamera();
  stopAICamera();
});

applyTheme();
applyLanguage();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
