---
layout: page
title: OpenCode
inheader: no
permalink: /opencode/
---

Kurssin [tekoäly]-tehtävät voi tehdä joko VS Coden GitHub Copilotilla tai avoimen lähdekoodin koodausagentti [OpenCodella](https://opencode.ai). Valinnan perusteista kerrotaan viikon 2 [tehtävässä 9](/tehtavat2/#9-ensikosketus-koodausagenttiin-tekoäly). Tällä sivulla kerrotaan, miten OpenCode asennetaan ja miten sitä käytetään. Tehtävänannoissa on ohjeet molemmille työkaluille: kun valitset tehtävän alussa olevasta valitsimesta OpenCoden, tehtävänanto näytetään OpenCodelle.

OpenCode on pelkkä agentti, eikä siinä ole omaa kielimallia. Sen käyttö edellyttää siis, että sinulla on jonkin kielimallipalvelun, esim. Anthropicin, OpenAI:n, Googlen tai OpenRouterin, API-avain. Yliopiston opiskelijat voivat kuitenkin käyttää maksutta [CurreChatin](<{{site.curre}}>) kielimalleja, ja tämä on kurssilla suositeltu tapa, ks. [CurreChatin käyttö](#currechatin-käyttö). Agentin käsitteet, kuten konteksti, ohjetiedosto, suunnittelutila ja MCP, ovat samat kuin materiaalissa [Tekoäly ohjelmistotuotannossa](/genai/), joten kurssin tehtävät onnistuvat yhtä hyvin OpenCodella.

**Huom:** tehtävät on alun perin tehty Copilotille, ja viikkojen 5–7 tehtävien OpenCode-versioita ei ole vielä testattu yhtä perusteellisesti. Jos ohjeissa on virheitä tai epäselvyyksiä, ilmoita niistä.

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

Suositeltu tapa on käyttää CurreChatia. Jos sinulla on jo jonkin muun palvelun API-avain, voit käyttää myös sitä, ks. [Muut kielimallipalvelut](#muut-kielimallipalvelut).

### CurreChatin käyttö

Yliopiston opiskelijana voit käyttää OpenCodessa [CurreChatin](<{{site.curre}}>) kielimalleja, jolloin omaa maksullista API-avainta ei tarvita. API-avain ja valmis OpenCode-konfiguraatio saadaan CurreChatista:

1. Avaa CurreChatin oikean yläkulman hampurilaisvalikosta _API-avaimet_
2. Anna avaimelle nimi, esim. _ohtu26_, ja paina _Luo uusi avain_
3. Näkyviin tulee laatikko _Uusi avain luotu_. Paina siinä _Lataa opencode.json_, jolloin saat konfiguraation, johon avaimesi on valmiiksi täytetty. Avain näytetään vain kerran, joten jos tarvitset sitä myöhemmin, kopioi se talteen turvalliseen paikkaan napilla _Kopioi_. Konfiguraation saa myöhemminkin kohdasta _Käytä Opencoden kanssa_, mutta silloin tiedostossa oleva `YOUR_API_KEY` täytyy korvata itse avaimella
4. Siirrä ladattu tiedosto nimelle `~/.config/opencode/opencode.json` (tai projektin juureen nimelle `opencode.json`). Jos hakemistossa _~/.config/opencode_ on jo tiedosto `opencode.jsonc`, kopioi ladatun tiedoston sisältö sen sisällöksi, äläkä luo rinnalle toista tiedostoa

![]({{ "/images/avain2.png" | relative_url }}){:width="600px" }

Älä tallenna avainta julkiseen repositorioon. Jos laitat konfiguraation projektin juureen, lisää `opencode.json` tiedostoon `.gitignore`.

Konfiguraatiossa ovat käytettävissä seuraavat mallit:

| Malli | Tokenraja |
|---|---|
| `gpt-6-luna` | 1 200 000 tokenia viikossa |
| `gpt-5-mini` | 1 200 000 tokenia viikossa |
| `gpt-5.5` | 200 000 tokenia viikossa |
| `gpt-6.1-sol` | 200 000 tokenia viikossa |
| `Mistral-Large-3-1` | 200 000 tokenia viikossa |
| `gemma-4-26B-A4B` | ei rajaa |

**Huom:** CurreChatin tokenit eivät ole rajattomia. Käytä siis ensisijaisesti mallia `gpt-6-luna`, jolla on `gpt-5-mini`:n ohella suurin viikkoraja, ja vaihda järeämpään malliin vain, jos se ei selviä tehtävästä. Mallia vaihdetaan OpenCodessa komennolla `/models`, joka avaa listan käytettävissä olevista malleista. Jos tokenit loppuvat kesken, niitä saa lisää lähettämällä viestin osoitteeseen matti.luukkainen@helsinki.fi tai Discordissa käyttäjälle _mluukkai_.

[Gemma 4](https://huggingface.co/google/gemma-4-26B-A4B) on ilmainen. Se on avoin malli, jota suoritetaan yliopiston omalla laitteistolla Tietotekniikkakeskuksen OpenShift-klusterissa, joten sen suorituskyky on rajallinen.

### Muut kielimallipalvelut

Jos haluat käyttää jotain muuta kielimallipalvelua, käynnistä OpenCode terminaalissa komennolla `opencode` ja anna sen käyttöliittymässä komento

```
/connect
```

Valitse listasta palvelu, jonka API-avain sinulla on, ja liitä avain sitä pyydettäessä. Valitse sen jälkeen käytettävä malli komennolla

```
/models
```

Yhdistämisen voi tehdä myös suoraan komentoriviltä komennolla `opencode auth login`, ja käytettävissä olevat mallit näkee komennolla `opencode models`. Tuettujen palvelujen lista ja palvelukohtaiset ohjeet löytyvät [dokumentaatiosta](https://opencode.ai/docs/providers/).

Kätevä vaihtoehto on [OpenRouter](https://openrouter.ai), jonka kautta saa yhdellä API-avaimella käyttöön käytännössä minkä tahansa kielimallin, niin Anthropicin, OpenAI:n ja Googlen mallit kuin avoimetkin mallit. Näin eri malleja on helppo kokeilla ja vertailla ilman, että jokaiseen palveluun tarvitsee luoda oma tili.

API-avaimella tehty käyttö laskutetaan yleensä käytettyjen tokenien mukaan, ja agenttinen koodaus kuluttaa niitä paljon. Aseta palvelun hallintapaneelissa käytölle kuukausiraja, jotta laskusta ei tule yllätystä. Mallin valinta vaikuttaa hintaan merkittävästi, ja kurssin tehtäviin riittää yleensä hyvin keskitason malli.

## Käyttö

Toisin kuin VS Code -editoriin integroitu Copilot, OpenCode on terminaalissa toimiva sovellus. Keskustelu agentin kanssa käydään terminaalissa, ja agentin tekemät muutokset näkyvät tiedostoissa samoin kuin Copilotia käytettäessä. Koodia voi siis lukea ja muokata missä tahansa editorissa, myös VS Codessa, ja OpenCodea voi käyttää esim. VS Coden omassa terminaalissa tai erillisessä terminaali-ikkunassa.

Siirry palautusrepositoriossasi projektin hakemistoon, esim. viikon 2 [tekoäly]-tehtävän projektiin, ja käynnistä OpenCode:

```bash
cd viikko2/nhl-reader
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

Tiedostoa ei tarvitse luoda jokaiselle projektille erikseen. OpenCode etsii konfiguraatiota käynnistyshakemiston lisäksi kaikista sen ylähakemistoista ja yhdistää löytämiensä tiedostojen asetukset. Kurssilla helpointa onkin laittaa tiedosto **palautusrepositorion juureen**, jolloin asetus on voimassa kaikkien viikkojen projekteissa:

```
palautusrepositorio
├── opencode.json
├── viikko1
├── viikko2
│   └── nhl-reader
└── ...
```

Jos jollain projektilla on lisäksi oma `opencode.json`, kuten viikon 7 MCP-palvelinten määrittelyt, sen asetukset yhdistetään juuressa olevan tiedoston asetuksiin. Samaa asetusta koskevissa ristiriidoissa lähempänä käynnistyshakemistoa oleva tiedosto voittaa.

Asetuksen voi laittaa myös kaikkia koneesi projekteja koskevaan tiedostoon `~/.config/opencode/opencode.json`.

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
