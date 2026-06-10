# No Banner (Illegal Banner Reporting Assistant)

A web tool that helps you quickly prepare a report for illegal banners from a single photo.  
Go from photo upload to report submission in one streamlined flow.

## Usage

### Step 1 — Upload Photo

1. Visit the site.
2. Click the **Report** button.
3. Upload a photo of the illegal banner.

### Step 2 — Extract Information

The following information is automatically extracted from the uploaded photo:

| Item | Description |
|------|-------------|
| Location | Address extracted from GPS EXIF data in the photo |
| Date & Time | Automatically extracted from photo metadata (EXIF) |
| Text (OCR) | Characters on the banner are automatically recognized |
| Face Blur | Faces in the photo are automatically blurred |

> If GPS data is unavailable, you can select the location on a map or enter an address manually.

### Step 3 — Write and Submit Report

Edit the report based on the extracted information, then submit to an official reporting channel.

**Nationwide Reporting Channels (Korea)**

| Agency | Notes |
|--------|-------|
| Safety Report (안전신문고) | Dedicated to illegal signage; photo attachment supported |
| People's Portal (국민신문고) | Accepts complaints for all government agencies |
| National Election Commission | For election-related banners; anonymous reports accepted |
| Police 112 | No account required |

## Features

| Feature | Description |
|---------|-------------|
| EXIF Location Extraction | Converts GPS data from photos into a readable address |
| Automatic Face Blur | Blurs faces to protect personal information |
| OCR Text Recognition | Automatically extracts text from banners |
| Reporting Channel Guide | Lists nationwide and regional reporting websites |

## Privacy Protection

No Banner does not transmit uploaded photos or personal data to any external server.  
All processing (EXIF extraction, face detection, OCR) is performed entirely within your browser.  
For details, see the [Privacy Policy](docs/nobanner/privacy.html).

---

Questions: Please submit via [Issues](https://github.com/vrwolf1004/support-center/issues).
