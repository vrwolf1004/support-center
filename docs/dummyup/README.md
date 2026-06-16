# DummyUp

필드명과 타입을 지정해 더미 JSON 데이터를 빠르게 생성하는 Chrome 확장입니다.

## 설치

1. [Chrome 웹 스토어 페이지](https://chromewebstore.google.com/detail/eoeaelhpdlmfeajodifcfpgdcomglmjo?utm_source=item-share-cb)
2. 툴바에 DummyUp 아이콘이 나타나면 설치 완료입니다.

## 사용법

### 빠른 시작 (프리셋)

툴바 아이콘을 클릭하면 바로 사용 가능한 6가지 프리셋이 표시됩니다.

| 프리셋 | 포함 필드 |
|--------|-----------|
| 👤 사람정보 | id, username, email, phone, birth_date |
| 📍 지역정보 | location_id, city, address, zipcode |
| ⛅ 날씨정보 | date, city, temperature, humidity, condition |
| 🏷️ 가격정보 | item_id, item_name, base_price, discount_rate |
| 📦 판매정보 | order_id, customer_name, product, total_amount, order_date, is_paid |
| 🚪 입출입 | log_id, user_name, timestamp, gate_id, is_entry |

### 데이터 생성

1. 원하는 프리셋을 선택하거나 스키마를 직접 편집합니다.
2. **생성 개수**를 입력합니다 (1 ~ 20,000).
3. **출력 형식**을 선택합니다: 보기 좋게(Pretty) 또는 압축(Minify).
4. **시드(Seed)**: 동일한 결과를 재현하려면 숫자를 입력합니다 (선택 사항).
5. **데이터 생성** 버튼을 클릭하거나 `Ctrl+Enter`를 누릅니다.

### 결과 활용

- **복사**: 생성된 JSON을 클립보드에 복사
- **다운로드**: `.json` 파일로 저장
- 생성 결과 하단에 **행 수 / 소요 시간 / 문자 수** 통계가 표시됩니다.

## 필드 타입

| 타입 | 설명 | 예시 |
|------|------|------|
| `string` | 임의 문자열 | `"abc123"` |
| `int` | 정수 | `42` |
| `float` | 소수 | `3.14` |
| `bool` | 불리언 | `true` |
| `uuid` | UUID v4 | `"550e8400-..."` |
| `email` | 이메일 주소 | `"alice@gmail.com"` |
| `name` | 사람 이름 | `"김지민"` |
| `product` | 상품 이름 | `"노트북"` |
| `location` | 지역명 | `"서울"` |
| `date` | 날짜 | `"2024-03-15"` |
| `url` | URL | `"https://example.com"` |
| `phone` | 전화번호 | `"010-1234-5678"` |

## 설정 (Settings)

툴바 아이콘 클릭 → 우측 상단 설정 아이콘으로 이동합니다.

### UI 언어

한국어, 영어, 일본어, 스페인어, 프랑스어, 러시아어, 중국어(간체), 포르투갈어(BR) 중 선택하거나 자동 감지를 사용합니다.

### 데이터 사전

`name`, `product`, `location`, `email` 타입 생성에 사용되는 단어 목록을 언어별로 커스터마이징할 수 있습니다.
- 이름, 성, 지역명, 상품명, 도메인을 쉼표로 구분해 입력합니다.
- **기본값 초기화** 버튼으로 언제든지 원상복구 가능합니다.

### 스키마 관리

각 프리셋의 필드 구성을 자유롭게 수정하고 저장할 수 있습니다.
- **+ 필드 추가**: 새 필드명과 타입 추가
- **내보내기 / 가져오기**: 스키마를 JSON 파일로 백업하거나 불러옵니다.

## 업데이트

- Chrome 확장 프로그램은 자동으로 업데이트됩니다.
- 수동: `chrome://extensions` → **업데이트** 클릭

## 개인정보 보호

DummyUp은 외부 서버와 통신하지 않으며 모든 데이터를 로컬에서 처리합니다.  
자세한 내용은 [개인정보 처리방침](docs/dummyup/privacy.html)을 참고하세요.

---

문의: [Issues](https://github.com/vrwolf1004/support-center/issues)로 접수하세요.
