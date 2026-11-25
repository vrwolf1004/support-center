# herdr Plugins

Plugins for the [herdr](https://herdr.dev) terminal workspace. For each plugin's settings, commands, and troubleshooting, see the repository README and docs linked below.

Most plugins install the same way. Follow the repository's instructions where they differ:

```sh
herdr plugin install vrwolf1004/<repository name>
```

## Project Development

### herdr-devrun

Runs a project's development services (backend, frontend, and so on) as set in `.herdr-devrun.json`. Services run in the project's tab of the shared `devrun` space, and you can start, stop, edit, and delete them from the dashboard. A stopped service keeps its pane, so you can start it again.

- Repository: [herdr-devrun](https://github.com/vrwolf1004/herdr-devrun)

## Documents and Notes

### herdr-obsidian

Browse, read, edit, and search an Obsidian vault from one herdr pane. Notes are plain Markdown files, so a folder synced by Google Drive for desktop also works. It runs as a full-screen terminal app in a pane, not as a sidebar block.

- Repository: [herdr-obsidian](https://github.com/vrwolf1004/herdr-obsidian)
- Install: clone the repository, build with `cargo build --release`, then run `herdr plugin link .`. Building requires Rust (stable).
- Requirements: herdr 0.9.0 or later, Windows / Linux / macOS

## Git

### herdr-simple-git

Runs `git pull`, `git commit`, and `git push` for a configured repository from inside herdr, without AI. An optional dock pane lists each repository's local changes.

- Repository: [herdr-simple-git](https://github.com/vrwolf1004/herdr-simple-git)

## Sidebar and Dashboard

### herdr-stockpulse

Shows live stock prices and daily trends in the herdr dashboard and the Agents sidebar. Yahoo Finance is the default provider; iTick is an optional fallback.

- Repository: [herdr-stockpulse](https://github.com/vrwolf1004/herdr-stockpulse)

### herdr-timekit

Shows the current time, world clocks, a timer, and a counter in one block at the bottom of the herdr sidebar. Public holidays are fetched and cached locally in five-year windows.

- Repository: [herdr-timekit](https://github.com/vrwolf1004/herdr-timekit)

### herdr-ai-feedbag

Shows usage for Claude Code and GitHub Copilot once, in a shared block at the bottom of the herdr Agents sidebar.

- Repository: [herdr-ai-feedbag](https://github.com/vrwolf1004/herdr-ai-feedbag)

### herdr-radio

Searches Radio Browser or plays your saved stations without a separate player window. Playback status appears in the sidebar. Playback needs mpv or ffplay.

- Repository: [herdr-radio](https://github.com/vrwolf1004/herdr-radio)

## Games

### herdr-tetris

Terminal games for the shared `herdr-dock` workspace: Tetris (`1`), Ladder (`2`), Snake (`3`), and Minesweeper (`4`). It starts on a fake system monitor screen; `Ctrl+T` opens the games.

- Repository: [herdr-tetris](https://github.com/vrwolf1004/herdr-tetris)

## Shared Library

### herdr-dock-grid

Manages the pane layout and occupancy of the `herdr-dock` workspace in one place, for the dock plugins above. It is a module those plugins share, not a plugin you use on its own.

- Repository: [herdr-dock-grid](https://github.com/vrwolf1004/herdr-dock-grid)

---

Questions about this page: please submit them via [Issues](https://github.com/vrwolf1004/support-center/issues). For a problem with a specific plugin, use that plugin's Issues.
