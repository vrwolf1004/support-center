# Help Me Hide Privacy Policy

Last Updated: 2026-04-23

## 1. Information We Collect

Help Me Hide processes the following information to provide the service.

| Category | Items | Purpose | Storage Location |
|----------|-------|---------|-----------------|
| User-provided | PIN number | Generate encryption key | User's device |
| User-provided | Encryption mode (AES-GCM, Simple) | Encryption method selection | User's device |
| User-provided | Marker format (HTML comment, bracket) | Marker display format | User's device |

- **We do not collect personally identifiable information (name, email, account information, etc.).**
- **Encrypted text is managed by the user and not stored by the extension.**
- **PIN number is stored only in local storage and not transmitted externally.**

## 2. Purposes of Information Use

- Provide PIN-based encryption/decryption functionality
- Save user encryption settings
- Manage marker format

## 3. Third-Party Data Sharing

Collected information is not provided to third parties in principle.

**Exceptions**:
- Legal requests as required by law
- Explicit user consent

## 4. Data Retention and Deletion

- **PIN Storage**: Encrypted and stored in Chrome Storage
- **Settings**: Stored in Chrome Storage, deleted when extension is removed
- **Encrypted Text**: User responsibility (clipboard, documents, etc.)
- **Automatic Deletion**: All PINs and settings are automatically deleted when the extension is removed

## 5. User Rights

- **Uninstall at Any Time**: Removing the extension automatically deletes all stored PINs
- **PIN Management**: Change PIN anytime
- **Encryption Method Selection**: Choose between AES-GCM and Simple modes
- **Data Control**: User manages encrypted text directly

## 6. Security Warnings

- **Weak Security**: 4-digit PIN is very weak security (only 10,000 possible combinations)
- **Educational Purpose**: This extension is designed for educational and proof-of-concept purposes
- **Sensitive Information Prohibited**: Do not store passwords, financial information, etc.
- **Use Professional Tools**: For real strong security, use professional encryption tools

## 7. Technical Information

**Encryption Methods**:
- **AES-GCM**: PBKDF2 key derivation, random IV, 128-bit authentication tag
- **Simple XOR**: Fast processing (weak security)

**Storage Mechanisms**:
- Chrome Storage: PIN, settings storage
- Marker format: `<!--ENC:V1:salt:nonce:ciphertext-->` or `[ENC:V1:...]`

**External Communication**:
- None (all processing performed locally)

## 8. Policy Changes

This Privacy Policy may be updated to improve the service.
Updates will be notified through the extension's update notices.

## 9. Contact

If you have questions about this Privacy Policy, please contact us:

- Email: dev.ohyt@gmail.com
- Issues: [GitHub Issues](https://github.com/vrwolf1004/support-center/issues)
