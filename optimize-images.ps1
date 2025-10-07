# Script för att optimera bilder för webben
# Sparar originalen med .org-tillägg

$assetsPath = ".\src\assets"
$publicPath = ".\public"

# Funktion för att optimera en bild
function Optimize-Image {
    param(
        [string]$imagePath,
        [int]$quality = 85,
        [int]$maxWidth = 1920
    )
    
    $directory = Split-Path $imagePath
    $filename = Split-Path $imagePath -Leaf
    $nameWithoutExt = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    $extension = [System.IO.Path]::GetExtension($filename)
    $orgPath = Join-Path $directory "$nameWithoutExt.org$extension"
    
    # Spara original om den inte redan finns
    if (-not (Test-Path $orgPath)) {
        Write-Host "Sparar original: $orgPath" -ForegroundColor Green
        Copy-Item $imagePath $orgPath
    }
    
    Write-Host "Bilden '$filename' behöver optimeras manuellt eller med ett verktyg som:" -ForegroundColor Yellow
    Write-Host "  - TinyPNG (https://tinypng.com)" -ForegroundColor Cyan
    Write-Host "  - Squoosh (https://squoosh.app)" -ForegroundColor Cyan
    Write-Host "  - ImageOptim (Mac)" -ForegroundColor Cyan
    Write-Host "  - GIMP (gratis)" -ForegroundColor Cyan
}

Write-Host "`n=== Optimering av bilder för Brevlycka ===" -ForegroundColor Magenta
Write-Host "Detta script sparar originalen med .org-tillägg`n" -ForegroundColor Magenta

# Hitta alla bilder i assets
$images = Get-ChildItem -Path $assetsPath -Include *.jpg,*.jpeg,*.png -Recurse

foreach ($image in $images) {
    Write-Host "`nBearbetar: $($image.Name)" -ForegroundColor White
    Optimize-Image -imagePath $image.FullName
}

# Kontrollera public-mappen också
Write-Host "`nKontrollerar public-mappen..." -ForegroundColor White
$publicImages = Get-ChildItem -Path $publicPath -Include *.jpg,*.jpeg,*.png -Recurse

foreach ($image in $publicImages) {
    Write-Host "`nBearbetar: $($image.Name)" -ForegroundColor White
    Optimize-Image -imagePath $image.FullName
}

Write-Host "`n=== Rekommendationer för bildoptimering ===" -ForegroundColor Magenta
Write-Host "1. Använd TinyPNG (https://tinypng.com) för enkel komprimering" -ForegroundColor Green
Write-Host "2. För bästa resultat, använd moderna format som WebP" -ForegroundColor Green
Write-Host "3. Rekommenderade storlekar:" -ForegroundColor Green
Write-Host "   - Hero-bilder: max 1920px bredd" -ForegroundColor Cyan
Write-Host "   - Thumbnails: max 800px bredd" -ForegroundColor Cyan
Write-Host "   - Logotyper: behåll PNG för transparens" -ForegroundColor Cyan
Write-Host "4. Målsättning: Under 200KB per bild" -ForegroundColor Green

Write-Host "`n=== Nästa steg ===" -ForegroundColor Magenta
Write-Host "1. Gå till https://tinypng.com" -ForegroundColor Yellow
Write-Host "2. Ladda upp varje bild från src/assets" -ForegroundColor Yellow
Write-Host "3. Ladda ner den optimerade versionen" -ForegroundColor Yellow
Write-Host "4. Ersätt originalbilden (originalen är sparade med .org-tillägg)" -ForegroundColor Yellow
Write-Host "`nOriginalbilderna finns kvar som backup med .org-tillägg!`n" -ForegroundColor Green
