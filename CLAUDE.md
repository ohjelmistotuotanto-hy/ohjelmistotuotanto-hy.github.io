# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Course material for the University of Helsinki course Ohjelmistotuotanto (Software Engineering), written in Finnish. It is a Jekyll 3.5 site (minima theme, kramdown). Production URL: https://studies.cs.helsinki.fi/ohtu.

## Commands

Local preview at http://localhost:4000:

```bash
./serve.sh            # Docker image mluukkai/kastomjekyl, jekyll serve --watch --drafts
bundle exec jekyll serve   # j.sh, if Ruby/bundler is installed locally
```

There are no tests or linters. Production is built from `containerization/Dockerfile` (jekyll build + `containerization/rebase.rb` rewrites links under the `/ohtu` base path, served by nginx); the GitHub Action pushes the image on every push to `master`.

## Structure

- `osa0.md`–`osa5.md`: the main course material (parts 0–5). `genai.md`: separate AI material that progresses week by week; sections marked `<span style="color:blue">[viikko N]</span>` belong to week N.
- `tehtavat1.md`–`tehtavat7.md`: weekly exercises; `tehtavat.md` lists them with deadlines. Exercise headings are numbered (`### 9. Otsikko [tekoäly]`), and other pages link to their auto-generated anchors, e.g. `/tehtavat2/#9-ensikosketus-copilotiin-tekoäly`. Renaming a heading breaks those links, so grep for the anchor before changing one.
- `[tekoäly]`-tagged exercises are written for GitHub Copilot in VS Code. `opencode.md` contains the OpenCode alternative with per-exercise instructions (`/opencode/#viikko-N-tehtävä-M`), and each such exercise links there. Keep the two in sync when an AI exercise changes.
- `miniprojekti.md`, `miniprojektin_arvosteluperusteet.md`: group project instructions and grading.
- `_includes/*.md` are shared snippets pulled in with `{% include ... %}` (e.g. `submission_instructions.md` at the end of each exercise page).
- `_config.yml` holds course-wide variables used via Liquid: `site.stats_url` (submission app), `site.curre*` (CurreChat links), `site.python_exercise_repo_url`, and the per-week arrays `moniv-dl`, `lask-dl`, `luennot` (index 0 is a `'FAIL'` placeholder so that weeks are 1-indexed).
- Navigation menus are built in `_includes/header.html`.

## Rules

- **Keep `sisallys.md` up to date.** It is a hand-maintained table of contents for all material pages. Whenever you add, rename or remove a heading in `osa*.md`, `genai.md` or other pages listed there, update `sisallys.md` in the same change, keeping the material's order and nesting. Anchors are kramdown auto-IDs (lowercase, spaces → `-`, punctuation dropped, Finnish letters kept).
- Files starting with `_` (e.g. `_miniprojekti.md`, `_mp_arvosteluperusteet.md`) are not built. They are full versions of public pages that are revealed gradually during the course. When changing a public page that has an `_` counterpart, make the same change there, but never overwrite one with the other.
- Internal links are root-relative (`/osa1/#scrum`); images are referenced as `![]({{ "/images/x.png" | relative_url }})`.
- The lecture slides live in a sibling repo, `../slides` (pandoc + beamer, built with `./m`). When the material changes in ways that affect lecture content, check the corresponding slides `N.md` as well.
- The `tarkista-materiaali` skill (`.claude/skills/`) reviews a part of the material for links, language and claims.
