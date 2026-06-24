# AI Usage

Claude.ai와 GitHub Copilot의 사용량을 팝업 하나로 한 번에 확인하는 Chrome 확장입니다.

## 설치

1. [Chrome 웹 스토어 페이지](https://chromewebstore.google.com/detail/ldnokaoohjkaofnejjejlnmoonepbaob?utm_source=item-share-cb)에서 설치합니다.
2. 툴바에 AI Usage 아이콘이 나타나면 설치 완료입니다.

## 사용법

### 사용량 확인

1. 툴바의 아이콘을 클릭하거나 **Ctrl+Shift+Y** (Mac: Command+Shift+Y)를 누릅니다.
2. Claude와 Copilot의 현재 사용량이 표시됩니다.

### 데이터 갱신

사용량 데이터는 아래 두 방법으로 갱신됩니다.

| 방법 | 설명 |
|------|------|
| 자동 갱신 | Claude.ai 또는 GitHub Copilot 사용량 페이지를 방문하면 자동으로 최신 데이터가 저장됩니다 |
| 수동 갱신 | 팝업에서 새로고침 버튼을 클릭하면 해당 페이지를 열어 즉시 갱신합니다 |

### 확인 방법

- **Claude**: `claude.ai/settings/usage` 페이지 방문 시 자동 수집
- **GitHub Copilot**: `github.com/settings/billing/ai_usage` 페이지 방문 시 자동 수집

## 기능

| 기능 | 설명 |
|------|------|
| Claude 사용량 | 5시간 세션 / 7일 전체 사용률(%) 및 리셋 시간 표시 |
| Copilot 사용량 | 월간 코드 완성 횟수 및 채팅 횟수 표시 |
| 90% 알림 | 사용량이 90%를 초과하면 자동으로 알림을 보냅니다 |
| 단축키 | Ctrl+Shift+Y로 빠르게 팝업 열기 |

## 업데이트

- Chrome 확장 프로그램은 자동으로 업데이트됩니다.
- 수동: `chrome://extensions` → **업데이트** 클릭

## 개인정보 보호

AI Usage는 외부 서버로 개인 데이터를 전송하지 않습니다.  
모든 사용량 데이터는 사용자 기기에만 저장됩니다.  
자세한 내용은 [개인정보 처리방침](docs/aiusage/privacy.html)을 참고하세요.

---

문의: [Issues](https://github.com/vrwolf1004/support-center/issues)로 접수하세요.
