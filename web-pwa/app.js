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
    savedColors: 'Kayitli renkler',
    selectedColor: 'Secili',
    latestColors: 'Son renkler',
    seeAll: 'Tumunu gor',
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
    formulaTitle: 'Pigment hesaplayici',
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
    navDevice: 'Cihaz',
    navProfile: 'Profil',
    noColors: 'Henuz renk kaydedilmedi.',
    saved: 'Renk galeriye kaydedildi.',
    measuring: 'Merkezdeki alan olculuyor.',
    waitingPermission: 'Kamera izni bekleniyor...',
    cameraUnsupported: 'Bu tarayici kamera erisimini desteklemiyor.',
    cameraFailed: 'Kamera acilamadi',
    profileSaved: 'Profil kaydedildi.',
    selectColorFirst: 'Once galeriden bir renk sec.',
    demoConnected: 'Demo cihaz baglandi.',
    recipeSent: 'Demo paket hazirlandi. Gercek cihaza gonderim simule edildi.',
    clearConfirm: 'Tum kayitli renkler silinsin mi?',
  },
  en: {
    appMode: 'Mobile color studio',
    welcome: 'Welcome',
    homeCopy: 'Save measured colors, browse your gallery, and calculate demo pigment ratios by milliliter.',
    openCamera: 'Open Camera',
    openGallery: 'Gallery',
    savedColors: 'Saved colors',
    selectedColor: 'Selected',
    latestColors: 'Latest colors',
    seeAll: 'See all',
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
    formulaTitle: 'Pigment calculator',
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
    navDevice: 'Device',
    navProfile: 'Profile',
    noColors: 'No saved colors yet.',
    saved: 'Color saved to gallery.',
    measuring: 'Center area is being measured.',
    waitingPermission: 'Waiting for camera permission...',
    cameraUnsupported: 'This browser does not support camera access.',
    cameraFailed: 'Camera could not be opened',
    profileSaved: 'Profile saved.',
    selectColorFirst: 'Choose a color from the gallery first.',
    demoConnected: 'Demo device connected.',
    recipeSent: 'Demo packet prepared. Real device transfer was simulated.',
    clearConfirm: 'Delete all saved colors?',
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
const galleryGrid = document.querySelector('#galleryGrid');
const clearGalleryButton = document.querySelector('#clearGalleryButton');
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
const context = canvas.getContext('2d', { willReadFrequently: true });

const measurementSize = 50;
const sampleStep = 2;
const analysisIntervalMs = 400;

let stream = null;
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

  if (viewName !== 'camera') {
    stopCamera();
  }
}

function applyLanguage() {
  document.documentElement.lang = settings.language;
  languageButton.textContent = settings.language.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  setStatus(t('cameraPrompt'));
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
}

async function startCamera() {
  stopCamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus(t('cameraUnsupported'), true);
    return;
  }

  try {
    setStatus(t('waitingPermission'));
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
    setStatus(t('measuring'));
    analyzeCenterColor();
    analysisTimer = window.setInterval(analyzeCenterColor, analysisIntervalMs);
  } catch (error) {
    startButton.classList.remove('is-hidden');
    measureButton.disabled = true;
    setStatus(`${t('cameraFailed')}: ${error.message}`, true);
  }
}

function saveLiveColor() {
  if (!liveColor) {
    return;
  }

  const color = {
    ...liveColor,
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now()),
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
  const items = colors.slice(0, limit);

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
  galleryGrid.innerHTML = '';

  if (!colors.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = t('noColors');
    galleryGrid.append(empty);
    return;
  }

  colors.forEach((color, index) => {
    const card = document.createElement('button');
    card.className = 'gallery-card';
    card.type = 'button';
    card.innerHTML = `
      <div class="gallery-swatch" style="--swatch: ${color.hex}"></div>
      <strong>${color.hex}</strong>
      <span>RGB ${color.red}, ${color.green}, ${color.blue}</span>
      <span>#${index + 1}</span>
    `;
    card.addEventListener('click', () => selectColor(color));
    galleryGrid.append(card);
  });
}

function renderFormula() {
  const totalMl = Math.max(10, Number(mlInput.value) || 250);
  formulaColorTitle.textContent = selectedColor ? selectedColor.hex : '-';
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

window.addEventListener('pagehide', stopCamera);

applyTheme();
applyLanguage();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
