# KeepSpotlight

A Chrome extension that browses and saves Windows Spotlight lock screen images.

## Requirements

- Windows 10 / 11
- Google Chrome

## Installation

1. Search for **KeepSpotlight** on the Chrome Web Store and install it.
2. Installation is complete when the KeepSpotlight icon appears in the toolbar.

## Usage

### Step 1 — Select Folder

1. Click the KeepSpotlight icon in the toolbar.
2. Click the **Select Folder** button.
3. Enter the path below in the File Explorer address bar and select the folder.

```
%LOCALAPPDATA%\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets
```

4. Allow folder access and Spotlight images will appear automatically.

### Step 2 — Save Images

- Hover over an image card to reveal the **Save** button.
- Saved images are stored in Chrome's default download folder.
- Click an image to open a fullscreen preview where you can save or delete it.

### Saved Tab

View and delete your saved images from the Saved tab.

### Copy Path

Click the **Copy Path** button at the top of the popup to copy the Spotlight cache path to your clipboard.

## Features

| Feature | Description |
|---------|-------------|
| Image Browsing | Automatically detects high-resolution images from the Spotlight cache folder |
| Gallery View | Image grid with a detailed modal |
| Save | Save images locally via Chrome Downloads API |
| Themes | 6 themes available (dark, basic, midcentury, newtro, rococo, default) |
| Multilingual | Korean / English support |

## Spotlight Images Not Showing?

- Go to Settings → Personalization → Lock screen → Background and set it to **Windows Spotlight**.
- If Spotlight hasn't downloaded images yet, displaying the lock screen once will populate them.

## Updates

- Chrome extensions update automatically.
- Manual: `chrome://extensions` → Click **Update**

## Privacy Protection

KeepSpotlight does not transmit any personal data to external servers.  
For details, see the [Privacy Policy](docs/keepspotlight/privacy.html).

---

Questions: Please submit via [Issues](https://github.com/vrwolf1004/support-center/issues).
