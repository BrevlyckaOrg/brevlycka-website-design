# Bildoptimering för Brevlycka

## ✅ Originalbilder sparade!

Alla originalbilder är nu säkerhetskopierade med `.org`-tillägg:
- `src/assets/*.org.jpg` 
- `src/assets/*.org.png`
- `public/*.org.jpg`
- `public/*.org.png`

## 📋 Nästa steg: Optimera bilderna

### Metod 1: TinyPNG (Rekommenderat - Enklast)
1. Gå till https://tinypng.com
2. Dra och släpp alla bilder från `src/assets/`
3. Ladda ner de optimerade bilderna
4. Ersätt originalbilderna (backup finns som .org-filer)

### Metod 2: Squoosh (Mer kontroll)
1. Gå till https://squoosh.app
2. Ladda upp en bild
3. Välj inställningar:
   - **För foton (JPG)**: MozJPEG, Quality: 80-85%
   - **För logotyper (PNG)**: OptiPNG eller OxiPNG
4. Ladda ner och ersätt

### Metod 3: Batch-optimering med online-verktyg
- **Compressor.io**: https://compressor.io
- **ImageOptim Online**: https://imageoptim.com/online

## 🎯 Målsättningar per bildtyp

### Hero-bilder (hero-envelope.jpg, hero-letters.jpg)
- **Nuvarande storlek**: Kontrollera med högerklick → Egenskaper
- **Mål**: Under 300KB
- **Rekommenderad bredd**: 1920px
- **Format**: JPG, kvalitet 80-85%

### Story-bilder (skane.jpg, story-love-1950s.jpg)
- **Mål**: Under 200KB
- **Rekommenderad bredd**: 1200px
- **Format**: JPG, kvalitet 80-85%

### Övriga foton (collectibles.jpg, mailbox.jpg)
- **Mål**: Under 150KB
- **Rekommenderad bredd**: 1200px
- **Format**: JPG, kvalitet 80%

### Logotyper (brevlycka-logo.png, brevlycka-logo2.png)
- **Mål**: Under 50KB
- **Format**: PNG (behåll transparens)
- **Använd**: OptiPNG eller TinyPNG

### Favicons & Icons (public/*.png)
- **Mål**: Under 20KB vardera
- **Format**: PNG
- **Använd**: TinyPNG

### OG-image (public/og-image.jpg)
- **Mål**: Under 200KB
- **Storlek**: Behåll 1200x630px
- **Format**: JPG, kvalitet 80-85%

## 📊 Kontrollera bildstorlekar

Kör detta kommando för att se nuvarande bildstorlekar:

```powershell
Get-ChildItem -Path ".\src\assets",".\public" -Include *.jpg,*.png -Recurse | Where-Object { $_.Name -notmatch '\.org\.' } | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}} | Sort-Object "Size(KB)" -Descending | Format-Table -AutoSize
```

## 🚀 Efter optimering

När bilderna är optimerade:
1. Kör `npm run build` för att bygga projektet
2. Testa sidan med Google PageSpeed Insights: https://pagespeed.web.dev/
3. Kontrollera att bilderna fortfarande ser bra ut

## ↩️ Återställa original

Om något går fel, kopiera tillbaka från .org-filerna:

```powershell
# Återställ en specifik bild
Copy-Item ".\src\assets\hero-envelope.org.jpg" ".\src\assets\hero-envelope.jpg"

# Återställ alla bilder
Get-ChildItem -Path ".\src\assets",".\public" -Include *.org.* -Recurse | ForEach-Object {
    $originalPath = $_.FullName -replace '\.org\.', '.'
    Copy-Item $_.FullName $originalPath -Force
    Write-Host "Återställd: $($_.Name)"
}
```

## 💡 Tips

- **WebP format**: För ännu bättre komprimering, överväg att konvertera till WebP (kräver uppdatering av import-statements)
- **Lazy loading**: Redan implementerat via React/Vite
- **Responsive images**: Använd `srcset` för att servera olika storlekar på olika enheter (framtida förbättring)

## 📈 SEO-fördelar

Optimerade bilder ger:
- ⚡ Snabbare laddningstider
- 📱 Bättre mobil-upplevelse
- 🎯 Högre Google PageSpeed-poäng
- 💰 Lägre bandbreddskostnader
