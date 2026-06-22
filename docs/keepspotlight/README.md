# KeepSpotlight

Windows Spotlight 잠금화면 이미지를 탐색하고 저장하는 Chrome 확장입니다.

## 요구사항

- Windows 10 / 11
- Google Chrome

## 설치

1. [Chrome 웹 스토어 페이지](https://chromewebstore.google.com/detail/cpanlpojjedhilihgogdldbmjbmoolng?utm_source=item-share-cb)에서 설치합니다.
2. 툴바에 KeepSpotlight 아이콘이 나타나면 설치 완료입니다.

## 사용법

### 1단계 — 폴더 선택

1. 툴바의 KeepSpotlight 아이콘을 클릭합니다.
2. **폴더 선택** 버튼을 클릭합니다.
3. 탐색기 주소창에 아래 경로를 입력하고 선택합니다.

```
%LOCALAPPDATA%\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets
```

4. 폴더 접근 권한을 허용하면 Spotlight 이미지가 자동으로 표시됩니다.

### 2단계 — 이미지 저장

- 이미지 카드에 마우스를 올리면 **저장** 버튼이 나타납니다.
- 저장된 이미지는 Chrome 기본 다운로드 폴더에 저장됩니다.
- 이미지를 클릭하면 전체화면 미리보기에서 저장·삭제할 수 있습니다.

### 저장됨 탭

저장한 이미지 목록을 확인하고 삭제할 수 있습니다.

### 경로 복사

팝업 상단의 **경로 복사** 버튼으로 Spotlight 캐시 경로를 클립보드에 복사할 수 있습니다.

## 기능

| 기능 | 설명 |
|------|------|
| 이미지 탐색 | Spotlight 캐시 폴더에서 고화질 이미지 자동 감지 |
| 갤러리 보기 | 이미지 그리드 + 상세 모달 |
| 저장 | Chrome 다운로드 API로 로컬 저장 |
| 테마 | 6가지 테마 (dark, basic, midcentury, newtro, rococo, default) |
| 다국어 | 한국어 / 영어 지원 |

## Spotlight 이미지가 보이지 않을 때

- 설정 → 개인 설정 → 잠금 화면 → 배경이 **Windows 추천**으로 설정되어 있어야 합니다.
- Spotlight가 이미지를 아직 다운로드하지 않은 경우, 잠금 화면을 한 번 표시하면 채워집니다.

## 업데이트

- Chrome 확장 프로그램은 자동으로 업데이트됩니다.
- 수동: `chrome://extensions` → **업데이트** 클릭

## 개인정보 보호

KeepSpotlight는 개인 데이터를 외부 서버로 전송하지 않습니다.  
자세한 내용은 [개인정보 처리방침](docs/keepspotlight/privacy.html)을 참고하세요.

---

문의: [Issues](https://github.com/vrwolf1004/support-center/issues)로 접수하세요.
