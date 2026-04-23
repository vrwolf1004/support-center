# Support Center 개인정보 처리방침

최종 수정일: 2026-04-23

## 1. 개요

Support Center에서 제공하는 Chrome 확장들은 사용자의 개인정보를 최소한으로 수집하고, 사용자 기기에만 저장합니다.
각 확장별로 수집하는 정보가 다르므로, 구체적인 내용은 아래의 **확장별 개인정보 처리방침**을 참고하세요.

## 2. 공통 원칙

모든 Support Center 확장은 다음의 원칙을 따릅니다:

### 2.1 개인 식별 정보 미수집
- 이름, 이메일, 계정 정보 등을 수집하지 않습니다
- 사용자를 추적하거나 식별하지 않습니다

### 2.2 로컬 저장소 우선
- 수집된 모든 데이터는 **사용자 기기에만 저장**됩니다
- 외부 서버로 개인 데이터를 전송하지 않습니다

### 2.3 사용자 제어
- 확장을 삭제하면 저장된 모든 데이터가 자동으로 삭제됩니다
- 사용자는 언제든지 저장된 데이터를 제어할 수 있습니다

### 2.4 외부 API 최소화
- 기능상 필요한 경우에만 외부 API를 사용합니다
- API 호출 시 개인정보는 포함하지 않습니다

### 2.5 투명성
- 각 확장의 개인정보 처리방침을 명확히 공개합니다
- 정책 변경 시 사용자에게 안내합니다

## 3. 확장별 개인정보 처리방침

각 확장의 구체적인 정보 수집 및 처리 방법은 다음을 참고하세요:

| 확장 | 한국어 | English |
|------|--------|---------|
| **1Hour1Word** | [개인정보 처리방침](./1hour1word/PRIVACY.md) | [Privacy Policy](./1hour1word/PRIVACY.en.md) |
| **SubDash** | [개인정보 처리방침](./subdash/PRIVACY.md) | [Privacy Policy](./subdash/PRIVACY.en.md) |
| **StockPulse** | [개인정보 처리방침](./stockpulse/PRIVACY.md) | [Privacy Policy](./stockpulse/PRIVACY.en.md) |
| **PicHunter** | [개인정보 처리방침](./pichunter/PRIVACY.md) | [Privacy Policy](./pichunter/PRIVACY.en.md) |
| **Help Me Hide** | [개인정보 처리방침](./helpmehide/PRIVACY.md) | [Privacy Policy](./helpmehide/PRIVACY.en.md) |

## 4. 정보 보관 및 파기

- **보관**: 사용자가 확장을 사용하는 동안 기기에 보관
- **파기**: 확장 삭제 시 자동으로 모든 데이터 삭제
- **확장 업데이트**: 데이터 손실 없음

## 5. 사용자의 권리

### 5.1 확장 언제든지 삭제 가능
- 설정 → 확장 프로그램 → 제거

### 5.2 데이터 열람 및 삭제
- 확장이 로컬에만 저장하므로 사용자가 직접 관리 가능
- Chrome Storage 초기화로 모든 데이터 제거 가능

### 5.3 설정 제어
- 각 확장의 설정을 통해 데이터 수집 범위 조절 가능

## 6. 보안

- Chrome 확장의 sandbox 환경으로 보호
- HTTPS를 통한 외부 통신 암호화
- 서드파티 서버로 개인 데이터 전송 금지

## 7. 정책 변경

개인정보 처리방침 변경 시:
- 확장의 업데이트 공지를 통해 안내
- 새 버전 설치 시 변경 내용 확인 가능

## 8. Chrome 저장소에 대한 참고사항

Support Center 확장들이 사용하는 저장 메커니즘:
- **Chrome Storage API**: 설정, 로컬 데이터
- **IndexedDB**: 대용량 로컬 데이터 (학습 통계, 이력 등)
- **Clipboard API**: 텍스트 복사 기능

모든 데이터는 Chrome 프로필 폴더에 암호화되어 저장됩니다.

## 9. 문의

개인정보 처리방침에 관한 문의:

- 📧 **이메일**: dev.ohyt@gmail.com
- 🐛 **이슈**: [GitHub Issues](https://github.com/vrwolf1004/support-center/issues)

---

**참고**: 각 확장별 구체적인 개인정보 처리방침은 위의 확장별 링크를 참고하세요.
