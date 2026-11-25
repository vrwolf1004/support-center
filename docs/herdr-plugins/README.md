# herdr 플러그인

[herdr](https://herdr.dev) 터미널 작업 공간에서 쓰는 플러그인 모음입니다. 각 플러그인의 설정, 명령, 문제 해결은 저장소의 README와 docs에 있으니 아래 링크를 봅니다.

설치는 대부분 같은 형식입니다. 예외는 저장소 안내를 따릅니다.

```sh
herdr plugin install vrwolf1004/<저장소 이름>
```

## 프로젝트 개발

### herdr-devrun

프로젝트의 개발 서비스(백엔드, 프론트엔드 등)를 `.herdr-devrun.json` 설정대로 실행합니다. 서비스는 공유 `devrun` 공간의 프로젝트 탭에서 돌고, 대시보드에서 시작·중지·수정·삭제를 할 수 있습니다. 중지해도 pane은 남아 다시 시작할 수 있습니다.

- 저장소: [herdr-devrun](https://github.com/vrwolf1004/herdr-devrun)

## 문서와 노트

### herdr-obsidian

옵시디언(Obsidian) 보관함을 herdr pane 하나에서 탐색하고 읽고 편집하고 검색합니다. 노트는 일반 Markdown 파일이라 Google Drive 데스크톱 앱으로 동기화된 폴더도 쓸 수 있습니다. 전체 화면 터미널 앱으로 뜨며, 사이드바 블록은 아닙니다.

- 저장소: [herdr-obsidian](https://github.com/vrwolf1004/herdr-obsidian)
- 설치: 저장소를 받아 `cargo build --release`로 빌드한 뒤 `herdr plugin link .`로 연결합니다. 빌드에는 Rust(stable)가 필요합니다.
- 요구사항: herdr 0.9.0 이상, Windows / Linux / macOS

## Git

### herdr-simple-git

설정한 저장소에서 `git pull`, `git commit`, `git push`를 AI 없이 herdr 안에서 실행합니다. 선택형 도크 패널에서 저장소별 변경 상태를 볼 수 있습니다.

- 저장소: [herdr-simple-git](https://github.com/vrwolf1004/herdr-simple-git)

## 사이드바와 대시보드

### herdr-stockpulse

주식 현재가와 전일 대비 추세를 herdr 대시보드와 Agents 사이드바에 보여 줍니다. 기본 제공자는 Yahoo Finance이고, iTick을 선택해 쓸 수 있습니다.

- 저장소: [herdr-stockpulse](https://github.com/vrwolf1004/herdr-stockpulse)

### herdr-timekit

herdr 사이드바 맨 아래에 현재 시각, 세계 시간, 타이머, 카운터를 모아 보여 줍니다. 공휴일은 받아서 5년 단위로 로컬에 캐시합니다.

- 저장소: [herdr-timekit](https://github.com/vrwolf1004/herdr-timekit)

### herdr-ai-feedbag

Claude Code, GitHub Copilot의 사용량을 herdr Agents 사이드바 아래의 공용 블록에 한 번에 보여 줍니다.

- 저장소: [herdr-ai-feedbag](https://github.com/vrwolf1004/herdr-ai-feedbag)

### herdr-radio

Radio Browser를 검색하거나 저장한 방송국을 별도 플레이어 창 없이 재생합니다. 재생 상태는 사이드바에 보입니다. 재생에는 mpv 또는 ffplay가 필요합니다.

- 저장소: [herdr-radio](https://github.com/vrwolf1004/herdr-radio)

## 게임

### herdr-tetris

herdr 공용 `herdr-dock` 작업 공간에서 도는 터미널 게임입니다. 테트리스(`1`), 래더(`2`), 스네이크(`3`), 지뢰찾기(`4`)를 할 수 있습니다. 처음에는 가짜 시스템 모니터 화면이 보이고, `Ctrl+T`로 게임 화면을 엽니다.

- 저장소: [herdr-tetris](https://github.com/vrwolf1004/herdr-tetris)

## 공용 라이브러리

### herdr-dock-grid

`herdr-dock` 작업 공간에서 여러 플러그인이 쓰는 pane 배치와 점유 상태를 한 곳에서 관리합니다. 사용자가 직접 설치해 쓰는 플러그인이 아니라, 위의 도크 플러그인들이 함께 쓰는 모듈입니다.

- 저장소: [herdr-dock-grid](https://github.com/vrwolf1004/herdr-dock-grid)

---

이 페이지의 내용에 대한 문의는 [Issues](https://github.com/vrwolf1004/support-center/issues)로 접수하세요. 각 플러그인의 오류는 해당 저장소의 Issues에 남겨 주세요.
