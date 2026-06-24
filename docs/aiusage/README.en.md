# AI Usage

A Chrome extension that lets you check Claude.ai and GitHub Copilot usage at a glance in a single popup.

## Installation

1. Install from the [Chrome Web Store page](https://chromewebstore.google.com/detail/ldnokaoohjkaofnejjejlnmoonepbaob?utm_source=item-share-cb).
2. Installation is complete when the AI Usage icon appears in the toolbar.

## Usage

### Checking Usage

1. Click the toolbar icon or press **Ctrl+Shift+Y** (Mac: Command+Shift+Y).
2. Your current Claude and Copilot usage is displayed.

### Refreshing Data

Usage data is updated in two ways:

| Method | Description |
|--------|-------------|
| Auto | Data is automatically saved when you visit the Claude.ai or GitHub Copilot usage page |
| Manual | Click the refresh button in the popup to open the usage page and update immediately |

### Where Data Comes From

- **Claude**: Collected automatically when visiting `claude.ai/settings/usage`
- **GitHub Copilot**: Collected automatically when visiting `github.com/settings/billing/ai_usage`

## Features

| Feature | Description |
|---------|-------------|
| Claude Usage | Shows 5-hour session and 7-day overall usage (%) with reset time |
| Copilot Usage | Shows monthly code completion and chat counts |
| 90% Alert | Sends a notification when usage exceeds 90% |
| Keyboard Shortcut | Open the popup quickly with Ctrl+Shift+Y |

## Updates

- Chrome extensions update automatically.
- Manual: `chrome://extensions` → Click **Update**

## Privacy Protection

AI Usage does not transmit any personal data to external servers.  
All usage data is stored only on your device.  
For details, see the [Privacy Policy](docs/aiusage/privacy.html).

---

Questions: Please submit via [Issues](https://github.com/vrwolf1004/support-center/issues).
