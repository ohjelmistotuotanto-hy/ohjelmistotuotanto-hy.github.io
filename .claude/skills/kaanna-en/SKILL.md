---
name: kaanna-en
description: Kääntää suomenkielisen kurssimateriaalin englanniksi en/-hakemistoon tai synkkaa englanninkielisen version suomenkielisiin muutoksiin git-diffin perusteella
---

The course site is written in Finnish, which is the **source language**. Pages under `en/` (and `_includes/en/`) are their English translations. This skill either translates a whole page (`$ARGUMENTS` names a Finnish file that has no translation yet) or, by default, syncs existing translations with changes made to the Finnish sources.

Use the glossary in `.claude/skills/kaanna-en/sanasto.md`. Add new recurring terms there.

## Mapping between files

- `X.md` ↔ `en/X.md` (also `_miniprojekti.md` ↔ `en/_miniprojekti.md`)
- `_includes/X.md` ↔ `_includes/en/X.md`
- Front matter of a translation: same keys as the source, with `title` and `title_long` translated, `permalink` prefixed with `/en`, plus
  - `source: X.md`
  - `source_commit: <sha>`, the commit of the Finnish source the translation is up to date with.
- Includes have no front matter, so their first line is a Liquid comment that renders nothing:
  `{% comment %}source: _includes/X.md source_commit: <sha>{% endcomment %}`
- Pages that are not translated (old exams `koe20xx.md`, `pisteet.md`, `ryhmajako.md`, …) are linked with their Finnish URL.

## Translation rules

1. Keep the structure identical: the **same headings in the same order and at the same levels**. Never add, remove, merge or split headings. `scripts/fix_en_anchors.rb` maps anchors between the versions by heading position.
2. Keep unchanged: code blocks and inline code (identifiers, commands, file names, output), except that Finnish comments inside code may be translated. The exercise repositories are in Finnish, so code must still match them.
3. Keep unchanged: Liquid tags, HTML structure and attributes, classes such as `vain-copilot` / `vain-opencode`, `markdown="1"`, image references, URLs of external sites.
4. Includes: `{% include X.md %}` → `{% include en/X.md %}`. `.html` includes stay as they are (they localise themselves with `page.lang`).
5. Config variables: `site.moniv-dl`, `site.lask-dl`, `site.luennot` → `site.moniv-dl-en`, `site.lask-dl-en`, `site.luennot-en`.
6. Internal links: `/X...` → `/en/X...` when `en/X.md` exists or is being created; otherwise keep the Finnish link. **Keep the `#anchor` part in Finnish**; run `scripts/fix_en_anchors.rb` afterwards to translate anchors.
7. Heading tags: `[tekoäly]` → `[AI]`. Exercise numbers stay the same.
8. Write natural, clear English for students (not word-for-word). Address the reader as "you". Keep the tone of the original. Keep Finnish university system names (Sisu, Unitube, …) and mention when a linked service or bot is only in Finnish if the source makes it obvious.

## Sync workflow (default)

1. Run `ruby scripts/translation_status.rb`. It lists translations whose source has commits after `source_commit`, and Finnish pages/includes that have no translation.
2. For each outdated translation, read `git diff <source_commit>..HEAD -- <source>` (plus `git diff -- <source>` for uncommitted changes if the user wants those included).
3. Apply **only the changed parts** to the English file, following the rules above. Do not retranslate unchanged text: the English version may contain manual fixes.
4. Set `source_commit` to the current `git rev-parse --short HEAD`.
5. Build the site (`docker run --rm --volume="$PWD:/srv/jekyll" mluukkai/kastomjekyl jekyll build`), run `ruby scripts/fix_en_anchors.rb` (rewrites anchors in `en/`), rebuild, and run `ruby scripts/check_links.rb _site`.
6. If headings changed, update `en/sisallys.md` as well (like `sisallys.md` for the Finnish side).
7. Report what was changed in each file so that the user can review the translation.
