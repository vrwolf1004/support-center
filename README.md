# Support Center

이 저장소는 제품군(Chrome 확장, 데스크톱 앱 등)의 공개 지원·문서 허브용입니다.  
코드는 별도의 private 저장소에 보관하고, 이 리포지토리는 사용자용 가이드·프라이버시·지원 절차·릴리스 정보를 제공합니다.

- **리포지토:** https://github.com/vrwolf1004/support-center
- **Support (Issues):** https://github.com/vrwolf1004/support-center/issues

목표:
- 사용자 문의 접수와 해결 흐름 정리
- 제품별 설치/업데이트 가이드 제공
- 프라이버시·보안 정책 공개

빠른 안내:
- 버그 신고 시 포함 항목: 제품명/버전, 운영체제·브라우저 버전, 재현 단계, 콘솔 에러 및 스크린샷
- 기능 요청: 사용 시나리오와 기대 동작 설명

GitHub Pages 설정 (권장):
1. `docs/` 폴더에 공개 문서(html/md) 넣기
2. Repository → Settings → Pages에서 브랜치/폴더 선택
3. 발급된 Pages URL을 Web Store 또는 제품 안내 페이지에 입력

제품 문서 위치(예):
- `products/stockpulse/` — StockPulse 관련 문서

문서 구성 규칙:
- 이 저장소의 문서는 제품 유형(Chrome 확장, 다른 확장, 데스크톱 앱 등)에 상관없이 **프로젝트명** 기준으로 구성합니다. 예: `products/StockPulse/`, `products/AnotherProject/`.
- 각 프로젝트 디렉터리는 다음 항목을 포함해야 합니다: `README.md`(제품 개요), `SUPPORT.md`(지원 안내), `PRIVACY.md`(프라이버시), 그리고 필요 시 `docs/`(GitHub Pages용 공개 문서).
- 문서 내부에서 설치·지원 절차는 제품별로 통일된 템플릿을 사용해 유지보수성을 높이세요.

문의처: vrwolf.remote@gmail.com

---
_이 리포지토리는 지원 전용 문서만을 공개하며, 소스 코드는 private 저장소로 관리됩니다._
