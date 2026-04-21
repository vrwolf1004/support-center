# Help Me Hide

A Chrome extension that encrypts selected text with a PIN to hide it securely.

## Installation

1. Install the extension.
2. Installation is complete when the Help Me Hide icon appears in the toolbar.

## Usage

### Set PIN

1. Click the Help Me Hide icon in the toolbar.
2. Select the **Settings** tab.
3. Enter a 4-digit PIN number (e.g., `1234`).
4. Click the **Save** button.

### Encrypt Text

1. Select text on a webpage.
2. Right-click → Select **"Hide Selected Text"**.
3. The encrypted text will be automatically copied to your clipboard.

### Decrypt Text

1. Select the encrypted text (including marker: `<!--ENC:V1:...-->`).
2. Right-click → Select **"Restore"**.
3. Enter your PIN in the prompt that appears.
4. The original text will be restored and copied to your clipboard.

## Features

| Feature | Description |
|---------|-------------|
| 🔐 AES-GCM Encryption | Strong encryption to protect text |
| 🔑 PIN-based Security | Simple 4-digit PIN management |
| 📋 Auto Copy | Encrypted text automatically copied to clipboard |
| ⚡ Fast Mode | Quick encryption/decryption option |
| 🌐 Universal Support | Works on any website |

## Settings Options

### Encryption Mode

1. Select encryption mode in the **Settings** tab:
   - **AES-GCM** (Recommended): Strong security
   - **Simple**: Fast processing

### Marker Format

1. Choose marker format:
   - **HTML Comment**: `<!--ENC:V1:...-->`
   - **Bracket**: `[ENC:V1:...]`

## Security Warnings

- **4-digit PIN is weak security** (only 10,000 possible combinations)
- **Do not store sensitive information** (passwords, financial data, etc.)
- Do not share your PIN with others
- This extension is designed for **educational and proof-of-concept purposes**
- For real strong security, use professional encryption tools

## Updates

- Chrome extensions update automatically.
- Manual: `chrome://extensions` → Click **Update**

---

Questions: Please submit via [Issues](https://github.com/vrwolf1004/support-center/issues).
