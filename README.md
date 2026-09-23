# Find Color

Find Color, iPhone kamerasiyla yuzey rengini gercek zamanli olcen offline bir Flutter uygulamasidir. Ilk surum sadece kamera onizleme, merkez olcum alani, BGRA piksel analizi, ortalama RGB, HEX ve renk onizleme akisini icerir.

## Teknolojiler

- Flutter ve Dart
- iOS
- `camera` Flutter paketi
- Codemagic macOS build makineleri

Backend, Firebase, veritabani, hesap sistemi, RAL, LAB, Delta E, ESP32 veya yapay zeka yoktur.

## Windows Kurulumu

Windows uzerinde Dart/Flutter kodunu gelistirebilir, analiz ve unit testleri calistirabilirsiniz. iOS build ve TestFlight dagitimi Codemagic uzerindeki macOS makinelerinde yapilir.

```powershell
flutter doctor
flutter pub get
flutter analyze
flutter test
```

Mac veya Xcode komutlarini Windows uzerinde calistirmaya gerek yoktur.

## Uygulama Akisi

1. Uygulama acilinca kamera izni ister.
2. Izin verilirse arka kamera acilir.
3. Canli kamera goruntusu ekrani doldurur.
4. Merkezdeki olcum kutusu yaklasik 50x50 piksel mantigiyla analiz edilir.
5. Tek piksel degil, sampling ile coklu piksel ortalamasi kullanilir.
6. iOS image stream icin BGRA8888 sirasi kullanilir: Blue, Green, Red, Alpha.
7. `bytesPerRow` ve `bytesPerPixel` dikkate alinir.
8. Ortalama RGB ve `#RRGGBB` HEX sonucu ekranda gosterilir.
9. `Rengi Olc` butonu o anki sonucu sabitler; kamera calismaya devam eder.

## Kamera Izni

iOS kamera izni [ios/Runner/Info.plist](ios/Runner/Info.plist) icinde tanimlidir:

```xml
<key>NSCameraUsageDescription</key>
<string>Yuzey rengini algilamak icin kamera erisimi gereklidir.</string>
```

## Bundle Identifier

Bundle identifier: `com.renkyama.colordetector`

Bu deger su dosyalarda kullanilir:

- [ios/Runner.xcodeproj/project.pbxproj](ios/Runner.xcodeproj/project.pbxproj)
- [codemagic.yaml](codemagic.yaml)

Apple Developer Portal ve App Store Connect uzerinde acacaginiz app kaydi ayni bundle identifier ile olmalidir.

## Testler

Unit testler:

- `RGB -> HEX` donusumu
- BGRA8888 ortalama renk hesabi
- `bytesPerRow` padding kontrolu

```powershell
flutter test
```

## GitHub'a Gonderme

Bu klasor henuz Git repository degilse:

```powershell
git init
git add .
git commit -m "Initial Flutter iOS color detector"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

Mevcut repository varsa `git init` ve `git remote add` adimlarini tekrarlamayin:

```powershell
git status
git add .
git commit -m "Add iOS camera color detector"
git push
```

## Codemagic Kurulumu

1. Codemagic hesabi olusturun.
2. GitHub hesabinizi baglayin.
3. Bu repository'yi Codemagic'e ekleyin.
4. Build configuration olarak repository rootundaki [codemagic.yaml](codemagic.yaml) dosyasini kullanin.
5. Ilk asamada `ios-unsigned-check` workflow'unu calistirin.

## Workflow 1: ios-unsigned-check

Amac: Apple Developer hesabi olmadan projenin iOS icin compile olup olmadigini kontrol etmek.

Bu workflow:

- `flutter pub get`
- `flutter analyze`
- `flutter test`
- Swift Package Manager dependency hazırlığı
- `flutter build ios --release --no-codesign`

calistirir.

Unsigned build fiziksel iPhone'a yuklenemez ve TestFlight'a gonderilemez. Basarili olursa artifact bolumunde `build/ios/iphoneos/*.app` ve Xcode loglarini gorursunuz.

## Workflow 2: ios-testflight

Amac: Apple Developer Program hesabi mevcut oldugunda signed `.ipa` uretmek ve TestFlight'a gondermek.

On kosullar:

- Apple Developer Program uyeligi
- App Store Connect'te `com.renkyama.colordetector` bundle ID ile app kaydi
- Codemagic Team integrations > Developer Portal altinda App Store Connect API key
- Codemagic ortam degiskenleri veya integration ayarlari
- `codemagic_app_store_connect` entegrasyon adinin kendi Codemagic API key adinizla eslesmesi
- `APP_STORE_ID` degerinin App Store Connect Apple ID ile degistirilmesi

Gerekli secret degerleri repository'ye yazilmaz. Codemagic UI icinde secret olarak saklanir:

- `APP_STORE_CONNECT_ISSUER_ID`
- `APP_STORE_CONNECT_KEY_IDENTIFIER`
- `APP_STORE_CONNECT_PRIVATE_KEY`
- `CERTIFICATE_PRIVATE_KEY`

Workflow signed IPA icin:

- signing dosyalarini fetch eder,
- keychain'e sertifikalari ekler,
- Xcode profile ayarlarini uygular,
- `flutter build ipa --release` calistirir,
- `build/ios/ipa/*.ipa` artifact uretir,
- `submit_to_testflight: true` ile TestFlight yuklemesini baslatir.

## Apple Developer Yoksa

Apple Developer hesabi olmadan:

- signed IPA uretilemez,
- TestFlight kullanilamaz,
- gercek iPhone'a dagitim yapilamaz.

Yine de Windows -> GitHub -> Codemagic akisiyle unsigned compile kontrolu, `flutter analyze` ve `flutter test` yapabilirsiniz.

## Render Web/PWA Surumu

Apple Developer hesabi olmadan iPhone'da uygulama benzeri deneyim icin repo icine mobil web/PWA surumu eklendi:

- [web-pwa/index.html](web-pwa/index.html)
- [web-pwa/app.js](web-pwa/app.js)
- [web-pwa/styles.css](web-pwa/styles.css)
- [web-pwa/manifest.webmanifest](web-pwa/manifest.webmanifest)
- [render.yaml](render.yaml)

Bu surum Safari uzerinden kamera izni ister, merkez 50x50 piksel alanini analiz eder, RGB/HEX sonucunu gosterir ve ana ekrana eklenebilir.

PWA surumunde AI Kamera sekmesi de vardir. Bu sekme prompt istemeden AI kameradan alinan fotografin tamamini Pollinations vision endpoint'ine gonderir. Model grafitinin konumunu ve kapatma icin uygun duvar renklerini JSON olarak belirler; ardindan Apache-2.0 lisansli LaMa ONNX inpainting modeli tarayici icinde calisarak grafiti ayni duvar fotografi uzerinde gercekten yeniden doldurur. Model ve fotograf cihazda islenir, API anahtari veya gorsel uretim token'i gerekmez. Renkler sonucun altinda palet olarak gosterilir. Ilk kullanimda yaklasik 62 MB model indirilir ve cihaz tarayicisi onbellege alir. Vision istegi internet baglantisina ve public rate limitlerine baglidir.

Render ayarlari:

- Service type: `Static Site`
- Repository: `BatuKaanKuscu/FindColor`
- Branch: `main`
- Build Command: `echo "No build required"`
- Publish Directory: `web-pwa`

Render `render.yaml` blueprint dosyasini kullanirsa bu alanlari otomatik okuyabilir.

## Apple Developer Varsa

1. Apple Developer Program uyeliginizi aktif edin.
2. App Store Connect'te app kaydi olusturun.
3. Bundle identifier olarak `com.renkyama.colordetector` kullanin.
4. App Store Connect API key olusturun.
5. API key'i Codemagic Developer Portal integration olarak ekleyin.
6. Codemagic code signing ayarlarinda Apple Distribution certificate ve provisioning profile hazirlayin veya automatic code signing kullanin.
7. `ios-testflight` workflow'unu calistirin.

## TestFlight Akisi

Windows -> GitHub -> Codemagic -> macOS iOS build -> Code signing -> App Store Connect -> TestFlight -> iPhone

1. Kodunuzu GitHub'a push edin.
2. Codemagic'te `ios-testflight` workflow'unu baslatin.
3. Build basarili olunca artifact olarak `.ipa` gorunur.
4. Codemagic post-processing adiminda IPA'yi App Store Connect'e yukler.
5. App Store Connect build processing bittikten sonra TestFlight bolumunde build gorunur.
6. iPhone'da TestFlight uygulamasini acin.
7. Internal tester olarak davet edildiyseniz uygulamayi yukleyip test edin.

## Sik Hatalar

- Kamera izni reddedildi: iPhone Ayarlar > Find Color > Kamera iznini acin.
- Pixel format desteklenmiyor: iOS tarafinda beklenen format BGRA8888'dir; hata mesaji format adini gosterir.
- Codemagic signing hatasi: bundle identifier, certificate ve provisioning profile ayni app icin olmali.
- TestFlight build gorunmuyor: App Store Connect processing zaman alabilir.
- Unsigned artifact iPhone'a yuklenemiyor: bu beklenen bir sinirlamadir.
