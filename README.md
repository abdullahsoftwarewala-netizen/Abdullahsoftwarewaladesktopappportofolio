# Abdullah SoftwareWala — Desktop App

100% offline desktop portfolio. No internet required after install.

## Run (development)
```
npm install
npm start
```

## Build installers
```
npm run build-win    → dist/Abdullah SoftwareWala Setup.exe
npm run build-mac    → dist/Abdullah SoftwareWala.dmg
npm run build-linux  → dist/Abdullah SoftwareWala.AppImage
```

## Publish to stores

### Microsoft Store
1. Run `npm run build-win` → produces `.exe` installer
2. Go to https://partner.microsoft.com/dashboard/microsoftstore/
3. Create a Developer account ($19 one-time)
4. Submit the `.exe` (or convert to MSIX with MSIX Packaging Tool)

### Mac App Store
1. Run `npm run build-mac` → produces `.dmg`
2. Join Apple Developer Program ($99/year)
3. Submit via Xcode Organizer or App Store Connect

### Linux
- **Flathub**: submit via flathub/flathub GitHub repo
- **Snap Store**: `snapcraft` + publish to snapcraft.io
- **AppImage**: just share the `.AppImage` file directly
