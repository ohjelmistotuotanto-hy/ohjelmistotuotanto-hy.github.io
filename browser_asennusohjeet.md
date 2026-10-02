---
layout: page
title: Browser-kirjaston asennus ja ongelmat
inheader: no
permalink: /browser_asennusohjeet/
---

## Typoja materiaalissa

{% include typo_instructions.md path="/python/browser_asennusohjeet.md" %}

Kurssin selainta käyttävät Robot-testit tehdään Robot Frameworkin [Browser](https://robotframework-browser.org/)-kirjastolla, joka perustuu [Playwright](https://playwright.dev/)-työkaluun. Erillisiä selainajureita **ei tarvita**.

## Asennus

Tehtäväpohjien riippuvuuksina ovat paketit _robotframework-browser_ ja _robotframework-browser-batteries_. Jälkimmäinen sisältää kirjaston tarvitseman Node.js-ajoympäristön, joten Node.js:ää ei tarvitse asentaa erikseen. Riippuvuudet asentuvat normaaliin tapaan komennolla `uv sync`.

Testien käyttämä selain asennetaan projektin hakemistossa komennolla

```bash
uv run rfbrowser install chromium
```

Selain asentuu projektin virtuaaliympäristön sisälle. Asennus on siis tehtävä jokaiselle projektille erikseen, ja uudelleen, jos hakemisto _.venv_ poistetaan tai Browser-kirjasto päivitetään.

Testit käyttävät Playwrightin omaa Chromium-selainta, eivät koneelle mahdollisesti asennettua Chromea. Halutessasi voit käyttää myös Firefoxia tai WebKitiä (Safarin selainmoottori):

```bash
uv run rfbrowser install firefox
robot --variable BROWSER:firefox src/tests
```

**Huom:** komentoa `rfbrowser init` ei tule käyttää, sillä se on tarkoitettu tilanteeseen, jossa Node.js on asennettu erikseen ilman _robotframework-browser-batteries_-pakettia.

### Linux ja WSL

Linuxilla (ja Windowsin WSL:ssä) selain saattaa tarvita käyttöjärjestelmän kirjastoja, joita koneelta ei löydy. Ne saa asennettua samalla komennolla lisäämällä valitsimen `--with-deps`:

```bash
uv run rfbrowser install --with-deps chromium
```

Komento asentaa kirjastot käyttöjärjestelmän pakettienhallinnalla, joten se kysyy pääkäyttäjän salasanaa.

Windows 11:n WSL2 osaa näyttää myös graafisia sovelluksia, joten testejä suorittavan selaimen ikkunan pitäisi näkyä. Jos ikkuna ei aukea, suorita testit headless-tilassa, ks. viikon 3 [tehtävä 4](/tehtavat3/#4-web-sovelluksen-testien-suorittaminen-github-actioneissa).

## Mahdollisia ongelmia

### Selainta ei ole asennettu

Seuraava virheilmoitus kertoo, että testien käyttämää selainta ei ole asennettu:

```
Suite setup failed:
Error: browserType.launch: Executable doesn't exist at .../chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
```

Virheilmoituksen ehdottamaa `npx`-komentoa ei tarvita, vaan selain asennetaan komennolla `uv run rfbrowser install chromium`.

### Sovellus ei ole päällä

Seuraava virheilmoitus kertoo siitä, että suoritat testejä ilman että sovellus on päällä:

```
At start the counter is zero                                          | FAIL |
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5001/
Call log:
  - navigating to "http://localhost:5001/", waiting until "load"
```

Testit siis olettavat, että sovellus on käynnissä. Käynnistä siis sovellus yhteen terminaaliin, avaa uusi ja suorita testit siellä.

### Testi epäonnistuu, vaikka sovellus toimii

Jos testi epäonnistuu, vaikka sovellus toimii selaimella testattaessa oikein, tarkista testien suorituksen jälkeen syntyvä raportti _log.html_. Browser-kirjasto ottaa epäonnistumisen hetkellä kuvakaappauksen, joka näkyy raportissa ja tallentuu hakemistoon _browser/screenshot_. Usein ongelma on selektorissa, joka ei löydä haluttua elementtiä. Selektoreista lisää [täällä](/tehtavat3/#miten-browser-kirjasto-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit).
