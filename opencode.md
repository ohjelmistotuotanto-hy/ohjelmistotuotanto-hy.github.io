---
layout: page
title: OpenCode
inheader: no
permalink: /opencode/
---

Kurssin [tekoäly]-tehtävissä käytetään oletusarvoisesti GitHub Copilotia VS Coden kautta. Jos et halua käyttää Copilotia, tällä sivulla esitellään vaihtoehto: avoimen lähdekoodin koodausagentti [OpenCode](https://opencode.ai).

OpenCode on pelkkä agentti, eikä siinä ole omaa kielimallia. Sen käyttö edellyttää siis, että sinulla on jonkin kielimallipalvelun, esim. Anthropicin, OpenAI:n, Googlen tai OpenRouterin, API-avain. Agentin käsitteet, kuten konteksti, ohjetiedosto, suunnittelutila ja MCP, ovat samat kuin materiaalissa [Tekoäly ohjelmistotuotannossa](/genai/), joten kurssin tehtävät onnistuvat yhtä hyvin OpenCodella.

## Miksi OpenCode?

- OpenCode on avointa lähdekoodia, ja se toimii terminaalissa editorista riippumatta. Käyttötapa muistuttaa Claude Codea.
- Se tukee kymmeniä kielimallipalveluja, joten mallia voi vaihtaa vapaasti. Käytettävissä ovat myös paikallisesti ajettavat mallit.
- Monet ominaisuudet ovat yhteensopivia muiden työkalujen kanssa, esimerkiksi ohjetiedosto `AGENTS.md` ja [Agent Skills](https://agentskills.io) -muotoiset skillsit.

OpenCode kehittyy nopeasti. Jos jokin alla oleva ohje ei enää pidä paikkaansa, tarkista ajantasainen tieto [dokumentaatiosta](https://opencode.ai/docs).

## Asennus

Helpoin asennustapa on npm, jos sinulla on Node.js asennettuna:

```bash
npm install -g opencode-ai
```

macOS:llä ja Linuxilla asennus onnistuu myös Homebrew'lla:

```bash
brew install anomalyco/tap/opencode
```

Windowsilla OpenCode toimii parhaiten [WSL:n](https://learn.microsoft.com/windows/wsl/) sisällä. Vaihtoehtoisesti asennus onnistuu npm:llä, Scoopilla (`scoop install opencode`) tai Chocolateylla (`choco install opencode`).

Tarkista asennus komennolla `opencode --version`.

## Kielimallipalvelun yhdistäminen

Käynnistä OpenCode terminaalissa komennolla `opencode` ja anna sen käyttöliittymässä komento

```
/connect
```

Valitse listasta palvelu, jonka API-avain sinulla on, ja liitä avain sitä pyydettäessä. Valitse sen jälkeen käytettävä malli komennolla

```
/models
```

Yhdistämisen voi tehdä myös suoraan komentoriviltä komennolla `opencode auth login`, ja käytettävissä olevat mallit näkee komennolla `opencode models`. Tuettujen palvelujen lista ja palvelukohtaiset ohjeet löytyvät [dokumentaatiosta](https://opencode.ai/docs/providers/).

API-avaimella tehty käyttö laskutetaan yleensä käytettyjen tokenien mukaan, ja agenttinen koodaus kuluttaa niitä paljon. Aseta palvelun hallintapaneelissa käytölle kuukausiraja, jotta laskusta ei tule yllätystä. Mallin valinta vaikuttaa hintaan merkittävästi, ja kurssin tehtäviin riittää yleensä hyvin keskitason malli.

## Käyttö

Siirry projektin hakemistoon ja käynnistä OpenCode:

```bash
cd tehtavat/viikko4/varasto
opencode
```

Kuten Copilotin kanssa, avaa OpenCode vain sen projektin hakemistossa, jonka parissa työskentelet. Kurssin palautusrepositoriossa on monta projektia, ja agentti sekoittuu helposti, jos se näkee ne kaikki.

### Ohjetiedosto

Komento `/init` analysoi projektin ja luo sen juureen ohjetiedoston `AGENTS.md`. OpenCode lukee ohjetiedoston automaattisesti jokaisen keskustelun alussa. Samaa tiedostoa käyttävät myös esim. Copilot ja Codex. Lue generoitu tiedosto ja korjaa se tarvittaessa, ks. [Kontekstin hallinta](/genai/#kontekstin-hallinta).

### Build- ja Plan-agentit

OpenCodessa on kaksi sisäänrakennettua agenttia, joiden välillä vaihdetaan **Tab**-näppäimellä. Valittu agentti näkyy näytön oikeassa alakulmassa.

- **Build** tekee muutoksia koodiin ja suorittaa komentoja. Se vastaa Copilotin _Agent_-tilaa.
- **Plan** ei muuta koodia, vaan tutkii sitä ja laatii suunnitelman. Se vastaa Copilotin _Plan_-tilaa, ja sitä voi käyttää myös Copilotin _Ask_-tilan tapaan kysymyksiin. Suunnittelun merkityksestä enemmän luvussa [Suunnittele ensin](/genai/#plan-tila).

### Tiedostoihin viittaaminen

Kirjoittamalla `@` ja tiedoston nimen alun saat tiedoston liitettyä pyyntöön, esim. `Selitä miten @src/player_reader.py toimii`. Tämä vastaa Copilotin `#file`-viittausta.

### Muutosten peruminen

Komento `/undo` peruu agentin viimeisimmät muutokset, ja komento `/redo` palauttaa ne. Varsinainen turvaverkko on kuitenkin edelleen versionhallinta: commitoi jokaisen hyväksytyn askeleen jälkeen ja lue `git diff` ennen committia, ks. [Git turvaverkkona](/genai/#git-turvaverkkona).

### Komentojen hyväksyminen

**Huom:** Toisin kuin VS Coden Copilot, OpenCode suorittaa oletusarvoisesti komentoja ja muokkaa tiedostoja kysymättä lupaa. Jos haluat hyväksyä komennot ja muokkaukset itse, lisää projektin juureen tiedosto `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": "ask",
    "edit": "ask"
  }
}
```

Saman asetuksen voi laittaa kaikkia projekteja koskevaan tiedostoon `~/.config/opencode/opencode.json`.

## Copilotin ominaisuudet OpenCodessa

| Copilot (VS Code) | OpenCode |
|---|---|
| Ask-, Agent- ja Plan-tilat | Plan- ja Build-agentit (Tab vaihtaa) |
| `.github/copilot-instructions.md` tai `AGENTS.md` | `AGENTS.md` (luodaan komennolla `/init`) |
| `#file`-viittaus | `@`-viittaus |
| prompt-tiedostot `.github/prompts/*.prompt.md` | komennot `.opencode/commands/*.md`, ks. [dokumentaatio](https://opencode.ai/docs/commands/) |
| skillsit `.github/skills/` | skillsit `.opencode/skills/`, `.claude/skills/` tai `.agents/skills/` |
| MCP-palvelimet `.vscode/mcp.json` | MCP-palvelimet `opencode.json`-tiedoston `mcp`-avaimen alla |

Esimerkiksi viikon 7 Playwright MCP -palvelin määritellään OpenCodessa seuraavasti:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp@latest", "--browser", "chromium"],
      "enabled": true
    }
  }
}
```

## OpenCode VS Codessa

Kun ajat komennon `opencode` VS Coden omassa terminaalissa, OpenCoden [virallinen laajennus](https://opencode.ai/docs/ide/) asentuu automaattisesti. Laajennus avaa OpenCoden terminaaliin editorin viereen ja välittää sille tiedon avoimesta tiedostosta ja valitusta koodista. Hyödyllisiä pikanäppäimiä:

- `Cmd+Esc` (Mac) / `Ctrl+Esc` (Windows ja Linux) avaa OpenCoden tai siirtyy siihen
- `Cmd+Shift+Esc` / `Ctrl+Shift+Esc` aloittaa uuden session
- `Cmd+Option+K` / `Alt+Ctrl+K` lisää viittauksen editorissa valittuun koodiin, esim. `@File#L37-42`
