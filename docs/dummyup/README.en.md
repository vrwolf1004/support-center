# DummyUp

A Chrome extension that quickly generates dummy JSON data by specifying field names and types.

## Installation

1. Visit the [Chrome Web Store page](https://chromewebstore.google.com/detail/dummyup/eoeaelhpdlmfeajodifcfpgdcomglmjo?hl=ko&utm_source=ext_sidebar) to install.
2. Installation is complete when the DummyUp icon appears in the toolbar.

## Usage

### Quick Start (Presets)

Click the toolbar icon to see 6 ready-to-use presets.

| Preset | Included Fields |
|--------|-----------------|
| 👤 Person | id, username, email, phone, birth_date |
| 📍 Location | location_id, city, address, zipcode |
| ⛅ Weather | date, city, temperature, humidity, condition |
| 🏷️ Price | item_id, item_name, base_price, discount_rate |
| 📦 Sales | order_id, customer_name, product, total_amount, order_date, is_paid |
| 🚪 Entry/Exit | log_id, user_name, timestamp, gate_id, is_entry |

### Generating Data

1. Select a preset or edit the schema manually.
2. Enter the **count** (1 – 20,000).
3. Choose the **output format**: Pretty or Minify.
4. **Seed**: Enter a number to reproduce the same result (optional).
5. Click **Generate** or press `Ctrl+Enter`.

### Using the Output

- **Copy**: Copy the generated JSON to clipboard
- **Download**: Save as a `.json` file
- Stats are shown below the output: **lines / elapsed time / character count**

## Field Types

| Type | Description | Example |
|------|-------------|---------|
| `string` | Random string | `"abc123"` |
| `int` | Integer | `42` |
| `float` | Decimal number | `3.14` |
| `bool` | Boolean | `true` |
| `uuid` | UUID v4 | `"550e8400-..."` |
| `email` | Email address | `"alice@gmail.com"` |
| `name` | Person name | `"Alice Smith"` |
| `product` | Product name | `"Laptop"` |
| `location` | City / region name | `"New York"` |
| `date` | Date | `"2024-03-15"` |
| `url` | URL | `"https://example.com"` |
| `phone` | Phone number | `"010-1234-5678"` |

## Settings

Click the toolbar icon → settings icon in the top-right corner.

### UI Language

Choose from Korean, English, Japanese, Spanish, French, Russian, Chinese (Simplified), or Portuguese (BR), or use auto-detect.

### Data Dictionary

Customize the word lists used for `name`, `product`, `location`, and `email` field types per language.
- Enter values comma-separated for first names, last names, locations, products, and domains.
- Click **Reset to Defaults** to restore the original values at any time.

### Schema Management

Freely modify and save field configurations for each preset.
- **+ Add Field**: Add a new field name and type
- **Export / Import**: Back up or load schemas as JSON files

## Updates

- Chrome extensions update automatically.
- Manual: `chrome://extensions` → Click **Update**

## Privacy Protection

DummyUp does not communicate with any external servers and processes all data locally.  
For details, see the [Privacy Policy](docs/dummyup/privacy.html).

---

Questions: Please submit via [Issues](https://github.com/vrwolf1004/support-center/issues).
