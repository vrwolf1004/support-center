# Support Center 반응형 디자인 & GitHub Pages 설정

**날짜**: 2026-03-25
**작업 범위**: Support Center 프로젝트 (웹사이트)

## 📋 작업 내용

### 1. 반응형 디자인 구현
**파일**: `theme/style.css`

#### 기본 (Desktop)
- 사이드바 좌측 고정 (240px)
- 헤더 고정

#### 태블릿 (≤768px)
- 사이드바 → 상단 가로 레이아웃으로 변경
- 네비게이션 아이템 수평 표시
- 폰트 크기 조정 (h1: 28→24px, h2: 22→20px 등)
- 여백 감소 (padding: 32→24px)

#### 모바일 (≤480px)
- 추가 축소 (h1: 20px, h2: 18px)
- 최소 패딩 (16px)
- 네비게이션 수평 스크롤 가능

**테마 유지**: 모든 색상 토큰(primary, accent, bg) 동일 유지

**커밋**: `a5312fa` - "Add responsive design to support center"

### 2. GitHub Pages 배포 설정

#### 시도 경과
1. **첫 번째**: GitHub Actions 워크플로우 생성 (`deploy.yml`)
2. **결정**: 로컬 Settings 설정이 더 간단하다고 판단
3. **최종**: Settings에서 `main` 브랜치 직접 배포

#### 이유
- Support Center는 정적 사이트 (빌드 불필요)
- 빌드 프로세스가 없음 (index.html이 루트에 있음)
- Settings 설정만으로 충분함

**커밋 히스토리**:
- `6ae2928` - ci: Add GitHub Pages deployment workflow
- `6d59d3f` - Remove unnecessary GitHub Pages workflow (최종)

### 3. 개발 문서 관리
**폴더**: `_notes/`

#### 목적
- 개발 기록, 회의 노트 저장
- GitHub 저장소에는 올라감
- 웹사이트에는 표시 안 됨

#### 기술
- Jekyll의 `_` 폴더 자동 무시 규칙 활용
- 빌드 프로세스 불필요

## 🔧 기술 결정사항

| 항목 | 결정 | 근거 |
|------|------|------|
| 배포 방식 | GitHub Pages (Settings) | 빌드 불필요, 간단함 |
| 반응형 전략 | CSS Media Queries | 간단하고 효율적 |
| 문서 관리 | `_notes/` 폴더 | 저장소O, 웹사이트X |

## 📈 웹사이트 상태
- **URL**: https://github.com/vrwolf1004/support-center (배포 완료)
- **배포 시간**: 평균 1-2분
- **자동 배포**: main 브랜치 푸시 시 자동 반영

## 📝 추가 노트

### React Warehouse (미적용)
상단 고정 메뉴(TopNav) 작업 후 원복함
- 이유: Warehouse는 별도 프로젝트로 추후 검토
- 현재: 원래 상태 유지

### Support Center 추후 계획
- [ ] 배포 URL 공개
- [ ] 모바일 기기에서 접근성 테스트
- [ ] 추가 페이지 작성 시 반응형 자동 적용

---

**최종 커밋**: `9cbfc41` - docs: Add session notes for GitHub Pages setup
