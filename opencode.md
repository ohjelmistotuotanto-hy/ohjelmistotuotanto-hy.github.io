---
layout: page
title: OpenCode
inheader: no
permalink: /opencode/
---

Kurssin [tekoäly]-tehtävissä käytetään oletusarvoisesti GitHub Copilotia VS Coden kautta. Jos et halua käyttää Copilotia, tällä sivulla esitellään vaihtoehto: avoimen lähdekoodin koodausagentti [OpenCode](https://opencode.ai).

OpenCode on pelkkä agentti, eikä siinä ole omaa kielimallia. Sen käyttö edellyttää siis, että sinulla on jonkin kielimallipalvelun, esim. Anthropicin, OpenAI:n, Googlen tai OpenRouterin, API-avain. Yliopiston opiskelijat voivat kuitenkin käyttää maksutta [CurreChatin](<{{site.curre}}>) kielimalleja, ja tämä on kurssilla suositeltu tapa, ks. [CurreChatin käyttö](#currechatin-käyttö). Agentin käsitteet, kuten konteksti, ohjetiedosto, suunnittelutila ja MCP, ovat samat kuin materiaalissa [Tekoäly ohjelmistotuotannossa](/genai/), joten kurssin tehtävät onnistuvat yhtä hyvin OpenCodella.

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

Yliopiston opiskelijana voit käyttää OpenCodessa [CurreChatin](<{{site.curre}}>) kielimalleja, jolloin omaa maksullista API-avainta ei tarvita. Valmis konfiguraatio löytyy [täältä](https://github.com/ohjelmistotuotanto-hy/misc/blob/main/opencode.json). Kopioi se tiedostoon `~/.config/opencode/opencode.json` (tai projektin juuressa olevaan tiedostoon `opencode.json`). Jos hakemistossa _~/.config/opencode_ on jo tiedosto `opencode.jsonc`, kopioi konfiguraatio sen sisällöksi, äläkä luo rinnalle toista tiedostoa. Korvaa lopuksi kentän `apiKey` arvo omalla API-avaimellasi. API-avaimen voit luoda CurreChatin oikean yläkulman hampurilaisvalikosta löytyvästä API-avainten hallinnasta:

![]({{ "/images/avain.png" | relative_url }}){:width="600px" }

Älä tallenna avainta julkiseen repositorioon. Jos laitat konfiguraation projektin juureen, lisää `opencode.json` tiedostoon `.gitignore`.

**Huom:** CurreChatin tokenit eivät ole rajattomia. Käytä siis ensisijaisesti heikointa mallia `gpt-5-mini`, joka on konfiguraatiossa oletuksena, ja vaihda järeämpään malliin vain, jos se ei selviä tehtävästä.

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

## Tehtäväkohtaiset ohjeet

[Tekoäly]-tehtävät on kirjoitettu VS Coden Copilotille, mutta ne voi tehdä myös OpenCodella. Tee tehtävä tehtävänannon mukaan ja korvaa Copilot-spesifiset askeleet alla kuvatulla tavalla. Raporttitiedostojen nimet pysyvät samoina.

Yleiset korvaukset kaikissa tehtävissä:

- "avaa hakemisto VS Codessa omana workspacenaan" tarkoittaa, että käynnistät OpenCoden projektin hakemistossa
- Copilotin _Agent_-tilan sijaan käytetään Build-agenttia ja _Ask_- ja _Plan_-tilojen sijaan Plan-agenttia
- jos tehtävässä pyydetään lukemaan jokainen komento ennen sen hyväksymistä, ota käyttöön [komentojen hyväksyminen](#komentojen-hyväksyminen)

### Viikko 2, tehtävä 9

[Tehtävänanto](/tehtavat2/#9-ensikosketus-copilotiin-tekoäly)

- Kohta **Koodin täydennys**: OpenCodessa ei ole editorin koodin täydennystä. Jos haluat kokeilla täydennystä, voit tehdä tämän kohdan ilmaisella Copilot Free -versiolla. Muussa tapauksessa kirjoita metodin määrittely ja docstring itse ja pyydä OpenCodea toteuttamaan metodi. Arvioi tulosta samoin kuin tehtävänannossa
- Kohta **Chat**: käytä Plan-agenttia, ja viittaa tiedostoon `@`-merkillä, esim. `Selitä miten @src/player_reader.py toimii`
- Kohta **Agentti**: käytä Build-agenttia

### Viikko 3, tehtävä 8

[Tehtävänanto](/tehtavat3/#8-agentti-ja-hyväksymistestit-tekoäly)

- Komento `/init` toimii OpenCodessa samoin ja luo tiedoston `AGENTS.md`

### Viikko 4, tehtävä 4

[Tehtävänanto](/tehtavat4/#4-testikoodin-siistiminen-agentin-avulla-tekoäly)

- Tehtävä tehdään Build-agentilla, muuten ei eroja

### Viikko 4, tehtävä 6

[Tehtävänanto](/tehtavat4/#6-tdd-agentin-kanssa-tekoäly)

- Luo ohjetiedosto komennolla `/init` kuten viikon 3 tehtävässä 8
- Muista, että OpenCode suorittaa oletusarvoisesti komentoja kysymättä. Askeleissa 1-7, joissa kirjoitat testit itse, agentti ei saa muuttaa testejä. Lue siis jokaisen askeleen jälkeen `git diff`

### Viikko 5, tehtävä 5

[Tehtävänanto](/tehtavat5/#5-pull-request-ja-koodin-katselmointi-tekoäly)

Copilotin katselmointi tehdään GitHubissa. Jos sinulla on GitHub Education -jäsenyys, voit tehdä tehtävän tehtävänannon mukaan. Muussa tapauksessa tee katselmointi OpenCodella omalla koneellasi:

- tee pull request tehtävänannon mukaan, mutta jätä Copilotin katselmoinnin pyytäminen väliin
- siirry haaraan _tennis_refactoring_, valitse Plan-agentti ja pyydä sitä katselmoimaan haaran muutokset, esim. _"Katselmoi tämän haaran muutokset suhteessa main-haaraan (`git diff main...tennis_refactoring`). Kerro jokaisesta löydöksestä tiedosto, rivi ja korjausehdotus."_
- käy löydökset läpi ja tee tarpeellisiksi katsomasi korjaukset itse tai Build-agentin avulla. Pushaa korjaukset samaan haaraan, jolloin ne päivittyvät pull requestiin
- mergeä pull request ja kirjoita raportti tehtävänannon mukaan

### Viikko 5, tehtävä 6

[Tehtävänanto](/tehtavat5/#6-good-vibe-with-warehouses-tekoäly)

Tehtävä tehdään tehtävänannossa kuvatulla tavalla, jota on ohjeistettu AI credit -kiintiön loppumisen varalle. Siis issuen kuvaus annetaan agentille promptina OpenCodessa, ja pilviagentin seuraamiseen liittyvät askeleet ohitetaan. Katselmoinnin muutokset pyydetään Build-agentilta ja pushataan samaan haaraan.

Koodiin tutustumisen yhteydessä Copilotin _Ask_-tilan sijaan kysymykset esitetään Plan-agentille.

### Viikko 6, tehtävä 7

[Tehtävänanto](/tehtavat6/#7-suunnittele-ensin-toteuta-sitten-tekoäly)

- Vaihda Tab-näppäimellä Plan-agenttiin ja anna sille tehtävänanto. Plan-agentti ei muuta koodia, joten voit muokata suunnitelmaa rauhassa
- Kun olet tyytyväinen suunnitelmaan, vaihda Build-agenttiin ja pyydä sitä toteuttamaan suunnitelma, esim. _"Toteuta suunnitelma"_

### Viikko 7, tehtävä 5

[Tehtävänanto](/tehtavat7/#5-web-käyttöliittymä-agentin-avulla-tekoäly)

- Ohjetiedosto on `AGENTS.md`, jonka voit luoda komennolla `/init` ja täydentää tehtävänannon mukaisesti
- Prompt-tiedoston vastine OpenCodessa on [komento](https://opencode.ai/docs/commands/). Luo tiedoston _.github/prompts/katselmointi.prompt.md_ sijaan tiedosto _.opencode/commands/katselmointi.md_. Sisältö on muuten sama, mutta lisää alkuun otsake, joka määrittelee komennon kuvauksen ja suorittaa komennon Plan-agentilla. Näin agentti ei voi muuttaa tiedostoja katselmoinnin aikana:

```markdown
---
description: Katselmoi koko projektin koodin
agent: plan
---

Katselmoi projektin koodi ...
```

- Suorita katselmointi komennolla `/katselmointi`. Harnessin valintaa ei OpenCodessa tarvita

### Viikko 7, tehtävä 6

[Tehtävänanto](/tehtavat7/#6-mcp-ja-skillsit-tekoäly)

- Tiedoston _.vscode/mcp.json_ sijaan Playwright MCP määritellään projektin juuren tiedostoon _opencode.json_, ks. [esimerkki](#copilotin-ominaisuudet-opencodessa) yllä. Jos tiedosto on jo olemassa, lisää `mcp`-kohta sen sisään
- OpenCode käynnistää palvelimen itse käynnistyessään. Käynnistä siis OpenCode uudelleen, kun olet lisännyt määrittelyn. Palvelinten tilan näet terminaalissa komennolla `opencode mcp list`
- Jos OpenCode ei löydä komentoa `npx`, toimi tehtävänannon ohjeen mukaan, eli kirjoita `command`-kohtaan `npx`:n koko polku. Ympäristömuuttujat määritellään OpenCodessa kohdassa `environment` (VS Coden `env`):

```json
"playwright": {
  "type": "local",
  "command": ["/Users/kayttaja/.nvm/versions/node/v24.21.0/bin/npx", "-y", "@playwright/mcp@latest", "--browser", "chromium"],
  "environment": {
    "PATH": "/Users/kayttaja/.nvm/versions/node/v24.21.0/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
  },
  "enabled": true
}
```

- Skillsin paikka on _.github/skills/ui-testaus/SKILL.md_ sijaan _.opencode/skills/ui-testaus/SKILL.md_. Otsakkeen muoto on sama
- OpenCodessa ei ole komentoa `/skills`. Voit tarkistaa skillsin löytymisen kysymällä agentilta, mitä skillsejä sillä on käytössä. Kun agentti lataa skillsin, se näkyy keskustelussa `skill`-työkalun kutsuna
- Jotta skillsin voi käynnistää itse komennolla `/ui-testaus`, lisää otsakkeeseen seuraava:

```yaml
metadata:
  opencode/slash: "true"
```

### Viikko 7, tehtävä 7

[Tehtävänanto](/tehtavat7/#7-oma-mcp-palvelin-tekoäly)

- Tiedoston _.vscode/mcp.json_ sijaan palvelin rekisteröidään projektin tiedostoon _opencode.json_:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "nhl": {
      "type": "local",
      "command": ["uv", "run", "python", "src/mcp_server.py"],
      "enabled": true
    }
  }
}
```

- Palvelin käynnistyy, kun OpenCode käynnistetään projektin hakemistossa. Palvelin käynnistetään uudelleen esim. docstringien muuttamisen jälkeen käynnistämällä OpenCode uudelleen
- Agentin tekemät työkalukutsut parametreineen näkyvät keskustelussa, mutta tee silti tehtävänannon mukainen lokitus
