const storageKeys = {
  colors: 'findColor.colors',
  profile: 'findColor.profile',
  settings: 'findColor.settings',
  selectedColor: 'findColor.selectedColor',
  measurements: 'findColor.measurements',
};

const translations = {
  tr: {
    appMode: 'Mobil fotospektrometre',
    welcome: 'Hos geldin',
    homeCopy: 'Telefon kamerasiyla numuneyi oku, saf suyla kalibre et ve RGB absorbansini takip et.',
    openCamera: 'Kamerayi Ac',
    openGallery: 'Galeri',
    openReport: 'Spektrumu Ac',
    savedColors: 'Kayitli renkler',
    selectedColor: 'Secili',
    latestColors: 'Son renkler',
    seeAll: 'Tumunu gor',
    topMeasure: 'Olc',
    topReport: 'Spektrum',
    topGallery: 'Galeri',
    topFormation: 'Olusum',
    liveCamera: 'CANLI KAMERA',
    centerSampling: 'Merkez olcum',
    roiSelection: 'ROI secimi',
    startCamera: 'Kamerayi Baslat',
    detectedColor: 'ALGILANAN RENK',
    cameraPrompt: 'Baslamak icin kamera izni ver.',
    saveColor: 'Rengi Kaydet',
    blankRgb: 'Blank RGB',
    sampleRgb: 'Numune RGB',
    absorbance: 'Absorbans A',
    blankRead: 'Blank Al [Saf Su]',
    sampleRead: 'Numune Oku',
    blankRequired: 'Once saf su ile blank okuyun.',
    blankReady: 'Blank kaydedildi. Simdi numuneyi ROI icine alin.',
    blankSaved: 'Saf su blank degeri kaydedildi.',
    sampleSaved: 'Numune okundu.',
    absorbanceReady: 'Absorbans hesaplandi.',
    ready: 'Hazir',
    liveSignal: 'CANLI SINYAL',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan cik',
    fullscreenUnsupported: 'Bu tarayici tam ekran modunu desteklemiyor.',
    fullscreenFailed: 'Tam ekran acilamadi.',
    spectrometer: 'MOBIL FOTOSPEKTROMETRE',
    reportTitle: 'Olcum raporu',
    reportCopy: 'RGB kanallarini karsilastir ve oturumu Excel icin disa aktar.',
    rgbChannels: 'RGB 3 kanal',
    measurementCount: 'Olcumler',
    latestAbsorbance: 'Son A ortalamasi',
    blankReference: 'Blank referansi',
    trend: 'TREND',
    chartTitle: 'Absorbans kanallari',
    session: 'OTURUM',
    latestMeasurements: 'Son olcumler',
    exportExcel: "Excel'e aktar (CSV)",
    clearMeasurements: 'Olcumleri temizle',
    clearMeasurementsConfirm: 'Tum olcumler silinsin mi?',
    date: 'Tarih',
    sampleRgbShort: 'Numune RGB',
    absorbanceShort: 'A ort.',
    interpretation: 'Yorum',
    sameAsBlank: 'Blank ile ayni tona cok yakin.',
    darkerThanBlank: "Blank'e gore daha koyu.",
    lighterThanBlank: "Blank'e gore daha acik.",
    differentFromBlank: "Blank'ten farkli bir ton.",
    sameAsPrevious: 'Onceki numune ile ayni tona cok yakin.',
    darkerThanPrevious: 'Onceki numuneden daha koyu.',
    lighterThanPrevious: 'Onceki numuneden daha acik.',
    differentFromPrevious: 'Onceki numuneden farkli bir ton.',
    noMeasurements: 'Henuz olcum yok.',
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
    clearConfirm: 'Tum kayitli renkler silinsin mi?',
    deleteColor: 'Sil',
    deleteColorConfirm: 'Bu renk silinsin mi?',
  },
  en: {
    appMode: 'Mobile photospectrometer',
    welcome: 'Welcome',
    homeCopy: 'Read a sample with the phone camera, calibrate with pure water, and track RGB absorbance.',
    openCamera: 'Open Camera',
    openGallery: 'Gallery',
    openReport: 'Open Spectrum',
    savedColors: 'Saved colors',
    selectedColor: 'Selected',
    latestColors: 'Latest colors',
    seeAll: 'See all',
    topMeasure: 'Measure',
    topReport: 'Spectrum',
    topGallery: 'Gallery',
    topFormation: 'Formation',
    liveCamera: 'LIVE CAMERA',
    centerSampling: 'Center sampling',
    roiSelection: 'ROI selection',
    startCamera: 'Start Camera',
    detectedColor: 'DETECTED COLOR',
    cameraPrompt: 'Allow camera access to start.',
    saveColor: 'Save Color',
    blankRgb: 'Blank RGB',
    sampleRgb: 'Sample RGB',
    absorbance: 'Absorbance A',
    blankRead: 'Blank Al [Pure Water]',
    sampleRead: 'Read Sample',
    blankRequired: 'Read the blank with pure water first.',
    blankReady: 'Blank saved. Place the sample inside the ROI.',
    blankSaved: 'Pure water blank saved.',
    sampleSaved: 'Sample read.',
    absorbanceReady: 'Absorbance calculated.',
    ready: 'Ready',
    liveSignal: 'LIVE SIGNAL',
    fullscreen: 'Full screen',
    exitFullscreen: 'Exit full screen',
    fullscreenUnsupported: 'This browser does not support full screen mode.',
    fullscreenFailed: 'Full screen could not be opened.',
    spectrometer: 'MOBILE PHOTOSPECTROMETER',
    reportTitle: 'Measurement report',
    reportCopy: 'Compare the RGB channels and export the session for Excel.',
    rgbChannels: 'RGB 3-channel',
    measurementCount: 'Measurements',
    latestAbsorbance: 'Latest A mean',
    blankReference: 'Blank reference',
    trend: 'TREND',
    chartTitle: 'Absorbance channels',
    session: 'SESSION',
    latestMeasurements: 'Recent measurements',
    exportExcel: 'Export CSV for Excel',
    clearMeasurements: 'Clear measurements',
    clearMeasurementsConfirm: 'Delete all measurements?',
    date: 'Date',
    sampleRgbShort: 'Sample RGB',
    absorbanceShort: 'A mean',
    interpretation: 'Interpretation',
    sameAsBlank: 'Very close to the blank tone.',
    darkerThanBlank: 'Darker than the blank.',
    lighterThanBlank: 'Lighter than the blank.',
    differentFromBlank: 'A different tone from the blank.',
    sameAsPrevious: 'Very close to the previous sample.',
    darkerThanPrevious: 'Darker than the previous sample.',
    lighterThanPrevious: 'Lighter than the previous sample.',
    differentFromPrevious: 'A different tone from the previous sample.',
    noMeasurements: 'No measurements yet.',
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
    clearConfirm: 'Delete all saved colors?',
    deleteColor: 'Delete',
    deleteColorConfirm: 'Delete this color?',
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
const cameraStage = document.querySelector('.camera-stage');
const roiBox = document.querySelector('#roiBox');
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
const blankButton = document.querySelector('#blankButton');
const sampleButton = document.querySelector('#sampleButton');
const blankRgbValue = document.querySelector('#blankRgbValue');
const sampleRgbValue = document.querySelector('#sampleRgbValue');
const absorbanceValue = document.querySelector('#absorbanceValue');
const absorbanceStatus = document.querySelector('#absorbanceStatus');
const interpretationValue = document.querySelector('#interpretationValue');
const measurementCount = document.querySelector('#measurementCount');
const reportMeasurementCount = document.querySelector('#reportMeasurementCount');
const latestAbsorbance = document.querySelector('#latestAbsorbance');
const latestInterpretation = document.querySelector('#latestInterpretation');
const reportBlankValue = document.querySelector('#reportBlankValue');
const measurementCountBadge = document.querySelector('#measurementCountBadge');
const absorbanceChart = document.querySelector('#absorbanceChart');
const chartEmpty = document.querySelector('#chartEmpty');
const measurementTable = document.querySelector('#measurementTable');
const measurementTableBody = document.querySelector('#measurementTableBody');
const measurementEmpty = document.querySelector('#measurementEmpty');
const exportMeasurementsButton = document.querySelector('#exportMeasurementsButton');
const clearMeasurementsButton = document.querySelector('#clearMeasurementsButton');
const languageButton = document.querySelector('#languageButton');
const languageCode = document.querySelector('#languageCode');
const fullscreenButton = document.querySelector('#fullscreenButton');
const fullscreenEnterIcon = document.querySelector('#fullscreenEnterIcon');
const fullscreenExitIcon = document.querySelector('#fullscreenExitIcon');
const userNameInput = document.querySelector('#userNameInput');
const workspaceInput = document.querySelector('#workspaceInput');
const saveProfileButton = document.querySelector('#saveProfileButton');
const welcomeTitle = document.querySelector('#welcomeTitle');
const themePalette = document.querySelector('#themePalette');
const context = canvas.getContext('2d', { willReadFrequently: true });

const sampleStep = 2;
const analysisIntervalMs = 400;
let stream = null;
let analysisTimer = null;
let liveColor = null;
let blankRgb = null;
let sampleRgb = null;
let roi = { x: 0.36, y: 0.2, size: 0.3 };
let roiDrag = null;

let colors = readJson(storageKeys.colors, []);
let measurements = readJson(storageKeys.measurements, []);
if (!Array.isArray(measurements)) {
  measurements = [];
}
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

function refreshIcons() {
  globalThis.lucide?.createIcons?.();
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement || document.webkitFullscreenElement);
}

function updateFullscreenButton() {
  const active = isFullscreenActive();
  const enterIcon = document.querySelector('#fullscreenEnterIcon') || fullscreenEnterIcon;
  const exitIcon = document.querySelector('#fullscreenExitIcon') || fullscreenExitIcon;
  enterIcon.hidden = active;
  exitIcon.hidden = !active;
  const label = active ? t('exitFullscreen') : t('fullscreen');
  fullscreenButton.setAttribute('aria-label', label);
  fullscreenButton.title = label;
}

async function toggleFullscreen() {
  try {
    if (isFullscreenActive()) {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      return;
    }

    const root = document.documentElement;
    if (root.requestFullscreen) {
      await root.requestFullscreen();
    } else if (root.webkitRequestFullscreen) {
      root.webkitRequestFullscreen();
    } else {
      fullscreenButton.title = t('fullscreenUnsupported');
    }
  } catch {
    fullscreenButton.title = t('fullscreenFailed');
  }
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

  if (viewName === 'report') {
    window.requestAnimationFrame(drawAbsorbanceChart);
  }
}

function applyLanguage() {
  document.documentElement.lang = settings.language;
  languageCode.textContent = settings.language.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  updateFullscreenButton();
  setStatus(t('cameraPrompt'));
  absorbanceStatus.textContent = blankRgb ? t('blankReady') : t('blankRequired');
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
  blankButton.disabled = false;
}

function getVideoContentRect() {
  const stageRect = cameraStage.getBoundingClientRect();
  const videoRatio = video.videoWidth / video.videoHeight;
  const stageRatio = stageRect.width / stageRect.height;
  let width = stageRect.width;
  let height = stageRect.height;

  if (videoRatio > stageRatio) {
    width = stageRect.height * videoRatio;
  } else {
    height = stageRect.width / videoRatio;
  }

  return {
    left: stageRect.left + (stageRect.width - width) / 2,
    top: stageRect.top + (stageRect.height - height) / 2,
    width,
    height,
  };
}

function syncROIBox() {
  if (!roiBox || !cameraStage) {
    return;
  }

  const stageRect = cameraStage.getBoundingClientRect();
  const side = roi.size * Math.min(stageRect.width, stageRect.height);
  roi.x = Math.max(0, Math.min(1 - side / stageRect.width, roi.x));
  roi.y = Math.max(0, Math.min(1 - side / stageRect.height, roi.y));
  roiBox.style.width = `${side}px`;
  roiBox.style.height = `${side}px`;
  roiBox.style.left = `${roi.x * stageRect.width}px`;
  roiBox.style.top = `${roi.y * stageRect.height}px`;
  roiBox.setAttribute('aria-valuenow', String(Math.round(roi.size * 100)));
}

function handleROIStart(event) {
  if (event.button !== undefined && event.button !== 0) {
    return;
  }

  const stageRect = cameraStage.getBoundingClientRect();
  roiDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    roiX: roi.x,
    roiY: roi.y,
    stageWidth: stageRect.width,
    stageHeight: stageRect.height,
  };
  roiBox.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function handleROIMove(event) {
  if (!roiDrag || event.pointerId !== roiDrag.pointerId) {
    return;
  }

  const stageRect = cameraStage.getBoundingClientRect();
  const side = roi.size * Math.min(stageRect.width, stageRect.height);
  roi.x = Math.max(
    0,
    Math.min(1 - side / stageRect.width, roiDrag.roiX + (event.clientX - roiDrag.startX) / roiDrag.stageWidth),
  );
  roi.y = Math.max(
    0,
    Math.min(1 - side / stageRect.height, roiDrag.roiY + (event.clientY - roiDrag.startY) / roiDrag.stageHeight),
  );
  syncROIBox();
}

function handleROIEnd(event) {
  if (roiDrag?.pointerId === event.pointerId) {
    roiDrag = null;
  }
}

function getROISourceRect() {
  const content = getVideoContentRect();
  const box = roiBox.getBoundingClientRect();
  const left = Math.max(content.left, box.left);
  const top = Math.max(content.top, box.top);
  const right = Math.min(content.left + content.width, box.right);
  const bottom = Math.min(content.top + content.height, box.bottom);

  return {
    x: Math.max(0, ((left - content.left) / content.width) * video.videoWidth),
    y: Math.max(0, ((top - content.top) / content.height) * video.videoHeight),
    width: Math.max(1, ((right - left) / content.width) * video.videoWidth),
    height: Math.max(1, ((bottom - top) / content.height) * video.videoHeight),
  };
}

function readROIColor() {
  if (!video.videoWidth || !video.videoHeight) {
    return null;
  }

  const source = getROISourceRect();
  const area = 80;
  canvas.width = area;
  canvas.height = area;
  context.drawImage(video, source.x, source.y, source.width, source.height, 0, 0, area, area);
  const imageData = context.getImageData(0, 0, area, area).data;

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
    return null;
  }

  const red = Math.round(totalR / pixelCount);
  const green = Math.round(totalG / pixelCount);
  const blue = Math.round(totalB / pixelCount);
  return { red, green, blue, hex: rgbToHex(red, green, blue) };
}

function analyzeROIColor() {
  const color = readROIColor();
  if (color) {
    updateColor(color);
  }
}

function formatRgb(color) {
  return color ? `${color.red}, ${color.green}, ${color.blue}` : '-';
}

function calculateAbsorbance(blank, sample) {
  const channels = ['red', 'green', 'blue'];
  const values = channels.map((channel) => {
    const blankIntensity = Math.max(1, blank[channel]);
    const sampleIntensity = Math.max(1, sample[channel]);
    return Math.max(0, -Math.log10(sampleIntensity / blankIntensity));
  });

  return {
    red: values[0],
    green: values[1],
    blue: values[2],
    mean: values.reduce((sum, value) => sum + value, 0) / values.length,
  };
}

function captureBlank() {
  const color = readROIColor();
  if (!color) {
    setStatus(t('cameraPrompt'), true);
    return;
  }

  blankRgb = color;
  sampleRgb = null;
  blankRgbValue.textContent = formatRgb(blankRgb);
  sampleRgbValue.textContent = '-';
  absorbanceValue.textContent = '-';
  sampleButton.disabled = false;
  absorbanceStatus.textContent = t('blankReady');
  setStatus(t('blankSaved'));
}

function captureSample() {
  const color = readROIColor();
  if (!blankRgb || !color) {
    absorbanceStatus.textContent = t('blankRequired');
    return;
  }

  sampleRgb = color;
  const result = calculateAbsorbance(blankRgb, sampleRgb);
  sampleRgbValue.textContent = formatRgb(sampleRgb);
  absorbanceValue.textContent = `${result.mean.toFixed(3)} (R ${result.red.toFixed(3)} / G ${result.green.toFixed(3)} / B ${result.blue.toFixed(3)})`;
  const measurement = saveMeasurementRecord(result, sampleRgb);
  interpretationValue.textContent = getMeasurementInterpretation(measurement, measurements[1]);
  absorbanceStatus.textContent = t('sampleSaved');
  setStatus(t('absorbanceReady'));
}

function getRgbValues(color) {
  return {
    red: Number(color?.red) || 0,
    green: Number(color?.green) || 0,
    blue: Number(color?.blue) || 0,
  };
}

function getBrightness(color) {
  const rgb = getRgbValues(color);
  return rgb.red * 0.299 + rgb.green * 0.587 + rgb.blue * 0.114;
}

function compareColors(reference, sample, referenceName) {
  if (!reference || !sample) {
    return null;
  }

  const referenceRgb = getRgbValues(reference);
  const sampleRgbValues = getRgbValues(sample);
  const channelDifference = ['red', 'green', 'blue'].reduce(
    (total, channel) => total + Math.abs(sampleRgbValues[channel] - referenceRgb[channel]),
    0,
  ) / 3;
  const brightnessDifference = getBrightness(sampleRgbValues) - getBrightness(referenceRgb);
  const suffix = referenceName === 'blank' ? 'Blank' : 'Previous';

  if (channelDifference <= 10) {
    return `sameAs${suffix}`;
  }

  if (Math.abs(brightnessDifference) <= 10) {
    return `differentFrom${suffix}`;
  }

  return brightnessDifference < 0 ? `darkerThan${suffix}` : `lighterThan${suffix}`;
}

function getMeasurementInterpretation(measurement, previousMeasurement = null) {
  if (!measurement) {
    return '-';
  }

  const keys = [
    compareColors(measurement.blank, measurement.sample, 'blank'),
    compareColors(previousMeasurement?.sample, measurement.sample, 'previous'),
  ].filter(Boolean);

  return keys.map((key) => t(key)).join(' ');
}

function saveMeasurementRecord(absorbance, sample) {
  const measurement = {
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    blank: getRgbValues(blankRgb),
    sample: getRgbValues(sample),
    absorbance: {
      red: Number(absorbance.red) || 0,
      green: Number(absorbance.green) || 0,
      blue: Number(absorbance.blue) || 0,
      mean: Number(absorbance.mean) || 0,
    },
    roi: { ...roi },
  };

  measurements = [measurement, ...measurements].slice(0, 100);
  writeJson(storageKeys.measurements, measurements);
  renderAll();
  return measurement;
}

function formatAbsorbance(value) {
  return Number.isFinite(Number(value)) ? Number(value).toFixed(3) : '-';
}

function formatMeasurementDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '-';
  }

  return new Intl.DateTimeFormat(settings.language === 'tr' ? 'tr-TR' : 'en-GB', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function drawAbsorbanceChart() {
  if (!absorbanceChart) {
    return;
  }

  const width = Math.max(280, absorbanceChart.clientWidth || 720);
  const height = 280;
  const pixelRatio = window.devicePixelRatio || 1;
  absorbanceChart.width = Math.floor(width * pixelRatio);
  absorbanceChart.height = Math.floor(height * pixelRatio);
  absorbanceChart.style.height = `${height}px`;

  const chartContext = absorbanceChart.getContext('2d');
  chartContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  chartContext.clearRect(0, 0, width, height);
  chartContext.fillStyle = '#0b0d10';
  chartContext.fillRect(0, 0, width, height);

  const series = measurements.slice(0, 24).reverse();
  chartEmpty.hidden = series.length > 0;
  if (!series.length) {
    return;
  }

  const values = series.flatMap((item) => [
    Number(item.absorbance?.red) || 0,
    Number(item.absorbance?.green) || 0,
    Number(item.absorbance?.blue) || 0,
    Number(item.absorbance?.mean) || 0,
  ]);
  const maxValue = Math.max(0.1, Math.ceil(Math.max(...values, 0) * 10) / 10);
  const plot = { left: 38, right: 12, top: 18, bottom: 30 };
  const plotWidth = width - plot.left - plot.right;
  const plotHeight = height - plot.top - plot.bottom;
  const colorsByChannel = {
    red: '#ff7a90',
    green: '#6ee7b7',
    blue: '#69a7ff',
    mean: '#f8c146',
  };

  chartContext.font = '11px system-ui, sans-serif';
  chartContext.textBaseline = 'middle';
  for (let step = 0; step <= 4; step += 1) {
    const value = (maxValue / 4) * step;
    const y = plot.top + plotHeight - (plotHeight * step) / 4;
    chartContext.strokeStyle = 'rgb(255 255 255 / 10%)';
    chartContext.lineWidth = 1;
    chartContext.beginPath();
    chartContext.moveTo(plot.left, y);
    chartContext.lineTo(width - plot.right, y);
    chartContext.stroke();
    chartContext.fillStyle = '#aeb7c2';
    chartContext.textAlign = 'right';
    chartContext.fillText(value.toFixed(1), plot.left - 8, y);
  }

  chartContext.strokeStyle = 'rgb(255 255 255 / 22%)';
  chartContext.beginPath();
  chartContext.moveTo(plot.left, plot.top);
  chartContext.lineTo(plot.left, height - plot.bottom);
  chartContext.lineTo(width - plot.right, height - plot.bottom);
  chartContext.stroke();

  const drawSeries = (channel) => {
    chartContext.strokeStyle = colorsByChannel[channel];
    chartContext.lineWidth = channel === 'mean' ? 2.5 : 2;
    chartContext.lineJoin = 'round';
    chartContext.lineCap = 'round';
    chartContext.beginPath();
    series.forEach((item, index) => {
      const x = series.length === 1
        ? plot.left + plotWidth / 2
        : plot.left + (plotWidth * index) / (series.length - 1);
      const value = Number(item.absorbance?.[channel]) || 0;
      const y = plot.top + plotHeight - (value / maxValue) * plotHeight;
      if (index === 0) {
        chartContext.moveTo(x, y);
      } else {
        chartContext.lineTo(x, y);
      }
    });
    chartContext.stroke();
  };

  ['red', 'green', 'blue', 'mean'].forEach(drawSeries);
  chartContext.fillStyle = '#aeb7c2';
  chartContext.textAlign = 'center';
  chartContext.fillText(`1-${series.length}`, plot.left + plotWidth / 2, height - 12);
}

function renderMeasurements() {
  const count = measurements.length;
  measurementCount.textContent = String(count);
  reportMeasurementCount.textContent = String(count);
  measurementCountBadge.textContent = String(count);

  const latest = measurements[0];
  latestAbsorbance.textContent = latest ? formatAbsorbance(latest.absorbance?.mean) : '-';
  latestInterpretation.textContent = latest ? getMeasurementInterpretation(latest, measurements[1]) : '-';
  interpretationValue.textContent = latest ? getMeasurementInterpretation(latest, measurements[1]) : '-';
  reportBlankValue.textContent = latest ? formatRgb(latest.blank) : '-';
  measurementTableBody.innerHTML = '';
  measurementTable.hidden = count === 0;
  measurementEmpty.hidden = count > 0;

  measurements.slice(0, 30).forEach((measurement, index) => {
    const row = document.createElement('tr');
    const sample = measurement.sample || {};
    const absorbance = measurement.absorbance || {};
    row.innerHTML = `
      <td>${formatMeasurementDate(measurement.createdAt)}</td>
      <td>${formatRgb(sample)}<small>R ${sample.red ?? '-'} / G ${sample.green ?? '-'} / B ${sample.blue ?? '-'}</small></td>
      <td><strong>${formatAbsorbance(absorbance.mean)}</strong><small>R ${formatAbsorbance(absorbance.red)} / G ${formatAbsorbance(absorbance.green)} / B ${formatAbsorbance(absorbance.blue)}</small></td>
      <td class="interpretation-cell">${getMeasurementInterpretation(measurement, measurements[index + 1])}</td>
    `;
    measurementTableBody.append(row);
  });

  drawAbsorbanceChart();
}

function csvCell(value) {
  const text = String(value ?? '');
  return /[;"\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvNumber(value) {
  return formatAbsorbance(value).replace('.', ',');
}

function exportMeasurementsCsv() {
  if (!measurements.length) {
    setView('report');
    return;
  }

  const rows = [
    ['Tarih', 'Blank R', 'Blank G', 'Blank B', 'Numune R', 'Numune G', 'Numune B', 'A R', 'A G', 'A B', 'A Ortalama', t('interpretation')],
    ...measurements.map((measurement, index) => [
      measurement.createdAt,
      measurement.blank?.red,
      measurement.blank?.green,
      measurement.blank?.blue,
      measurement.sample?.red,
      measurement.sample?.green,
      measurement.sample?.blue,
      csvNumber(measurement.absorbance?.red),
      csvNumber(measurement.absorbance?.green),
      csvNumber(measurement.absorbance?.blue),
      csvNumber(measurement.absorbance?.mean),
      getMeasurementInterpretation(measurement, measurements[index + 1]),
    ]),
  ];
  const csv = rows.map((row) => row.map(csvCell).join(';')).join('\r\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `find-color-olcumler-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
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
    syncROIBox();
    analyzeROIColor();
    analysisTimer = window.setInterval(analyzeROIColor, analysisIntervalMs);
  } catch (error) {
    stopCamera();
    startButton.classList.remove('is-hidden');
    measureButton.disabled = true;
    setStatus(buildCameraErrorMessage(error), true);
  } finally {
    startButton.disabled = false;
  }
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
    savedGalleryGrid.append(createGalleryCard(color, getColorName(color, t('savedColor')), true));
  });

  catalogColors.forEach((color) => {
    catalogGalleryGrid.append(createGalleryCard(color, getColorName(color, t('catalogColor'))));
  });
}

function createGalleryCard(color, title, canDelete = false) {
  const card = document.createElement('article');
  card.className = 'gallery-card';
  card.role = 'button';
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="gallery-swatch" style="--swatch: ${color.hex}"></div>
    <div class="gallery-card-title">
      <strong>${title}</strong>
      ${
        canDelete
          ? `<button class="delete-color-button" type="button" aria-label="${t('deleteColor')} ${color.hex}"><i data-lucide="trash-2" class="button-icon" aria-hidden="true"></i><span>${t('deleteColor')}</span></button>`
          : ''
      }
    </div>
    <span>${color.hex}</span>
    <span>RGB ${color.red}, ${color.green}, ${color.blue}</span>
    <em>${t('topFormation')}</em>
  `;
  card.addEventListener('click', () => selectColor(color));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectColor(color);
    }
  });

  card.querySelector('.delete-color-button')?.addEventListener('click', (event) => {
    event.stopPropagation();
    deleteSavedColor(color);
  });

  return card;
}

function deleteSavedColor(colorToDelete) {
  if (!window.confirm(t('deleteColorConfirm'))) {
    return;
  }

  colors = colors.filter((color) =>
    colorToDelete.id ? color.id !== colorToDelete.id : color !== colorToDelete,
  );

  if (
    (colorToDelete.id && selectedColor?.id === colorToDelete.id) ||
    selectedColor === colorToDelete
  ) {
    selectedColor = colors[0] || null;
  }

  writeJson(storageKeys.colors, colors);
  writeJson(storageKeys.selectedColor, selectedColor);
  renderAll();
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
  renderMeasurements();
  renderThemePalette();
  renderProfile();
  refreshIcons();
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
blankButton.addEventListener('click', captureBlank);
sampleButton.addEventListener('click', captureSample);
roiBox.addEventListener('pointerdown', handleROIStart);
roiBox.addEventListener('pointermove', handleROIMove);
roiBox.addEventListener('pointerup', handleROIEnd);
roiBox.addEventListener('pointercancel', handleROIEnd);
window.addEventListener('resize', syncROIBox);
window.addEventListener('resize', drawAbsorbanceChart);
mlInput.addEventListener('input', renderFormula);
exportMeasurementsButton.addEventListener('click', exportMeasurementsCsv);

clearMeasurementsButton.addEventListener('click', () => {
  if (!measurements.length || !window.confirm(t('clearMeasurementsConfirm'))) {
    return;
  }

  measurements = [];
  writeJson(storageKeys.measurements, measurements);
  renderAll();
});

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

languageButton.addEventListener('click', () => {
  settings = {
    ...settings,
    language: settings.language === 'tr' ? 'en' : 'tr',
  };
  writeJson(storageKeys.settings, settings);
  applyLanguage();
});

fullscreenButton.addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);

saveProfileButton.addEventListener('click', () => {
  profile = {
    name: userNameInput.value.trim(),
    workspace: workspaceInput.value.trim(),
  };
  writeJson(storageKeys.profile, profile);
  renderProfile();
  setStatus(t('profileSaved'));
});

window.addEventListener('pagehide', () => {
  stopCamera();
});

applyTheme();
applyLanguage();
window.addEventListener('load', refreshIcons);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
