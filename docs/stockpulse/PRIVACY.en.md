# StockPulse Privacy Policy

Last Updated: 2026-04-23

## 1. Information We Collect

StockPulse processes the following information to provide the service.

| Category | Items | Purpose | Storage Location |
|----------|-------|---------|-----------------|
| User-provided | Stock ticker symbols | Track prices | User's device |
| Auto-collected | Alert settings (thresholds, intervals) | Price change notifications | User's device |
| Auto-collected | Error logs | Improve stability | User's device |

- **We do not collect personally identifiable information (name, email, account information, etc.).**
- **Portfolio data (stock tickers, prices) is stored only on the user's device and not transmitted externally.**

## 2. External API Usage

### Yahoo Finance API (Primary)
- **Purpose**: Query current stock prices and change percentages
- **Data Transmission**: Only the queried stock ticker symbols are sent
- **Personal Information**: None (only ticker codes transmitted)

### Alpha Vantage / Finnhub (Backup)
- **Purpose**: Alternative data source if Yahoo Finance is unavailable
- **Data Transmission**: Only the queried stock ticker symbols are sent
- **Personal Information**: None

## 3. Purposes of Information Use

- Real-time stock price queries
- Notify user when prices change
- Service error diagnosis and stability improvement

## 4. Data Retention and Deletion

- **Local Storage**: Retained on device until user uninstalls the extension
- **API Logs**: Automatically deleted 90 days after collection
- **Automatic Deletion**: All data is automatically deleted when the extension is removed

## 5. User Rights

- **Uninstall at Any Time**: Removing the extension automatically deletes all data
- **Manage Holdings**: Add or remove stock tickers to track
- **Control Alerts**: Customize alert thresholds and notification intervals

## 6. Security

- Protected by Chrome extension's sandbox environment
- API communication via HTTPS (encrypted)
- Personal portfolio data stored locally only

## 7. Technical Information

**Storage Mechanisms**:
- Chrome Storage: Stock tickers, alert settings
- IndexedDB: Price history data

**Transmitted Data**:
- API requests: Ticker symbols, current timestamp
- Analytics: None

## 8. Policy Changes

This Privacy Policy may be updated to improve the service.
Updates will be notified through the extension's update notices.

## 9. Contact

If you have questions about this Privacy Policy, please contact us:

- Email: dev.ohyt@gmail.com
- Issues: [GitHub Issues](https://github.com/vrwolf1004/support-center/issues)
