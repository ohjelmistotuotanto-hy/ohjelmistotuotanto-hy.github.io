---
layout: page
title: ChromeDriverin ja Geckodriverin-asennusohjeet
inheader: no
permalink: /chromedriver_asennusohjeet/
---

## Typoja materiaalissa

{% include typo_instructions.md path="/python/chromedriver_asennusohjeet.md" %}

**Huom:** myöhemmin tällä sivulla oleva [Geckodriver](/chromedriver_asennusohjeet/#geckodriver-asennusohjeet) saattaa olla helpompi asentaa kuin ensin esiteltävä ChromeDriver. Esittelyjärjestys on kuitenkin vielä nykyisenlainen, sillä Geckodriver-ohje lisättiin vasta pe 10.11. ja sen toimivuudesta Windowsilla ei ole vielä havaintoa.

## ChromeDriver-asennusohjeet

Jos tietokoneellesi ei ole asennettu Chrome- tai Chromium-selainta, aloita asentamalla sen viimeisin versio [täältä](https://www.google.com/chrome/). ChromeDriverin käyttöön soveltuu myös [Chromium](https://www.chromium.org/chromium-projects/), joka on avoimen lähdekoodin selain, johon Google Chrome pohjautuu. Lataa sen jälkeen käyttöjärjestelmällesi ja Chrome-versiollesi sopiva _chromedriver_-binääri [täältä](https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json). Pura ladattu paketti ja noudata sen jälkeen käyttöjärjestelmäkohtaisia ohjeita.

_Huom:_ valitse ChromeDriverista versio joka on yhteensopiva käyttämäsi Chromen version mukaan!

Linkin takana oleva lista on hieman kryptinen. Esim. omassa tapauksessani Chromen versio on _Version 118.0.5993.117 (Official Build) (arm64)_, joten oikea latauslinkki on

![]({{ "/images/lh3-chromedriver2.png" | absolute_url }}){:height="400px" }

### macOS ja Linux

Jotta `chromedriver`-komento toimisi tulee _ChromeDriver_-binääri siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Helpoin tapa on siirtää binääri _/usr/local/bin_-hakemistoon. Tämä onnistuu siirtymällä komentorivillä hakemistoon, johon _chromedriver_-binääri on ladattu ja suorittamalla komento `mv chromedriver /usr/local/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x /usr/local/bin/chromedriver`.

**HUOM:** Jos binäärin siirtämiselle _/usr/local/bin_-hakemistoon ei ole oikeuksia, siirry kotihakemistoosi komennolla `cd` ja luo sinne hakemisto _bin_ (jos sitä ei ole vielä olemassa) komennolla `mkdir bin`. Siirry nyt hakemistoon, johon _chromedriver_-binääri on ladattu ja siirrä se luotuun hakemistoon komennolla `mv chromedriver $HOME/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x $HOME/bin/chromedriver`. Lisää lopuksi _\$HOME/bin_-hakemisto `PATH`-ympäristömuuttujaan komennolla `touch $HOME/.bashrc && echo "export PATH=\"\$HOME/bin:\$PATH\"" >> $HOME/.bashrc`. 

**HUOM:** Macilla voi olla oletuksena käytössä Zsh-komentotulkki, jolloin yllä olevat muutokset tulee tehdä .zshrc-tiedostoon .bashrc-tiedoston sijaan.

Käynnistä terminaali uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
chromedriver --version
```

**HUOM:** Mac-käyttäjänä saatat törmätä tilanteeseen, jossa ChromeDriverin käynnistys epäonnistuu koska kone ei tiedä että ChromeDriver on luotettavan tahon tekemä ohjelma. Ongelma korjautuu [tämän ohjeen](https://timonweb.com/misc/fixing-error-chromedriver-cannot-be-opened-because-the-developer-cannot-be-verified-unable-to-launch-the-chrome-browser-on-mac-os/) avulla.

#### ArchLinux

**ArchLinux**-distributiossa [`chromium`](https://archlinux.org/packages/extra/x86_64/chromium/)-paketin mukana tulee ChromeDriver suoraan. Jos sen sijaan on asennettuna [`google-chrome`](https://aur.archlinux.org/packages/google-chrome) Arch User Repositorioista, ChromeDriverin saa [`chromedriver`](https://aur.archlinux.org/packages/chromedriver)-paketista.

### Windows

Jotta `chromedriver`-komento toimisi tulee _chromedriver_-binääri siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Siirrä ensin ladattu _chromedriver_-binääri haluamaasi hakemistoon (esimerkiks _C:\Program Files_ on yksi potentiaalinen vaihtoehto). Lisää tämän jälkeen hakemiston polku (lisää siis _pelkkä_ hakemiston polku, eli ei tiedoston nimeä polun perään) `PATH`-ympäristömuuttujaan seuraamalla [tätä](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/) ohjetta.

Järjestelmä tulee todennäköisesti käynnistää uudelleen, jotta `PATH`-ympäristömuuttuja päivittyy. Voit tarkistaa `PATH`-ympäristömuuttujan tilan Powershell-terminaalista suorittamalla komennon `$env:PATH`, tai Command Prompt-terminaalista komennolla `echo %PATH%`, ja tarkistamalla löytyykö juuri lisäämäsi polku puolipiste erotellusta luettelosta. Jos polkuasi ei löydy, on uudellenkäynnistys tarpeellinen.

Käynnistä siis tarvittaessa koko järjestelmä tai pelkkä terminaali (PowerShell) uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
chromedriver --version
```

### Mahdollisia ongelmia

Seuraava virheilmoitus kertoo siitä, että suoritat testejä ilman että sovellus on päällä:

```
WebDriverException: Message: unknown error: net::ERR_CONNECTION_REFUSED
  (Session info: chrome-headless-shell=126.0.6478.127)
Stacktrace:
0   chromedriver                        0x00000001048c6a0c chromedriver + 4385292
1   chromedriver                        0x00000001048bf318 chromedriver + 4354840
2   chromedriver                        0x00000001044dcb0c chromedriver + 281356
3   chromedriver                        0x00000001044d5e9c chromedriver + 253596
4   chromedriver                        0x00000001044c7a5c chromedriver + 195164
5   chromedriver                        0x00000001044c8e18 chromedriver + 200216
6   chromedriver                        0x00000001044c7d78 chromedriver + 195960
7   chromedriver                        0x00000001044c740c chromedriver + 193548
```

Testit siis olettavat, että sovellus on käynnissä. Käynnistä siis sovellus yhteen terminaaliin, avaa uusi ja suorita testit siellä.

**Windows 10 / WSL2 -käyttäjänä** saatat törmätä seuraavaan virheilmoitukseen:

```
Suite setup failed:
WebDriverException: Message: unknown error: Chrome failed to start: crashed.
  (unknown error: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
```

[Tämä](https://www.gregbrisebois.com/posts/chromedriver-in-wsl2/) ohje saattaa tuoda ratkaisun.

Yksi lisävaihtoehto WSL käyttäjille on ajaa Web-sovelluksemme serveriä poetryssa WSL:n puolella, ja ajaa selenium/robot-testit poetryssa Windowsin PowerShellin puolella: 

  - Asenna Python Windowsille jos se ei ole jo asennettu
  - Asenna Poetry Windowsille suorittamalla PowerShellissä
  
  ```
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
  ```
  
  - Lisää asennuksen päätteksi kerrottu polku esim.`C:\Users\<user>\AppData\Roaming\Python\Scripts` järjestelmän PATH-muuttujaan äskeisessä [ChromeDriver-ohjeessa](../chromedriver_asennusohjeet) kerrotulla tavalla
  - Kloonaa projekti Windowsin tiedostojärjestelmän puolelle (löytyy WSL-järjestelmästä /mnt hakemiston alta aivan tiedostojärjestelmän juuresta) esim. työpöydälle `/mnt/c/Users/<user>/Desktop`
  - Asenna riippuvuudet tavallisesti Poetryssa suorittamalla `poetry install` juuri kloonatun web-login-hakemiston juuressa
  - Asenna ChromeDriver windowsille äskeisen [ohjeen](../chromedriver_asennusohjeet) mukaan
  - Aja Selenium/Robot testit web-login-hakemiston juuresta komennolla `poetry run robot .\src\tests\`

## Geckodriver-asennusohjeet

Geckodriverin käyttö edellyttää että koneellesi on asennettuna [Firefox](https://www.mozilla.org/firefox/).

Lataa käyttöjärjestelmällesi  sopiva _geckodriver_-binääri [täältä](https://github.com/mozilla/geckodriver/releases/) kohdasta _assets_. Pura ladattu paketti ja noudata sen jälkeen käyttöjärjestelmäkohtaisia ohjeita.

### Linux

Jotta `geckodriver`-komento toimisi tulee binääritiedosto siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Helpoin tapa on siirtää binääri _/usr/local/bin_-hakemistoon. Tämä onnistuu siirtymällä komentorivillä hakemistoon, johon _geckodriver_-binääri on ladattu ja suorittamalla komento `mv geckodriver /usr/local/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x /usr/local/bin/geckodriver`.

**HUOM:** Jos binäärin siirtämiselle _/usr/local/bin_-hakemistoon ei ole oikeuksia, siirry kotihakemistoosi komennolla `cd` ja luo sinne hakemisto _bin_ (jos sitä ei ole vielä olemassa) komennolla `mkdir bin`. Siirry nyt hakemistoon, johon _cgeckodriver_-binääri on ladattu ja siirrä se luotuun hakemistoon komennolla `mv geckodriver $HOME/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x $HOME/bin/geckodriver`. Lisää lopuksi _\$HOME/bin_-hakemisto `PATH`-ympäristömuuttujaan komennolla `touch $HOME/.bashrc && echo "export PATH=\"\$HOME/bin:\$PATH\"" >> $HOME/.bashrc`. 

**HUOM:** Macilla voi olla oletuksena käytössä Zsh-komentotulkki, jolloin yllä olevat muutokset tulee tehdä .zshrc-tiedostoon .bashrc-tiedoston sijaan.

Käynnistä terminaali uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
geckodriver --version
```

### Windows

Noudata ChromeDriverin ohjetta soveltuvin osin.

### HUOM

Geckodriveriä käytettäessä testit suoritetaan komennolla

```
robot --variable BROWSER:firefox src/tests 
```

### HUOM2:

Seuraava virheilmoitus kertoo siitä, että suoritat testejä ilman että sovellus on päällä:

```
WebDriverException: Message: Reached error page: about:neterror?e=connectionFailure&u=http%3A//localhost%3A5001/&c=UTF-8&d=Firefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20localhost%3A5001.
Stacktrace:
RemoteError@chrome://remote/content/shared/RemoteError.sys.mjs:8:8
WebDriverError@chrome://remote/content/shared/webdriver/Errors.sys.mjs:193:5
UnknownError@chrome://remote/content/shared/webdriver/Errors.sys.mjs:832:5
checkReadyState@chrome://remote/content/marionette/navigate.sys.mjs:58:24
onNavigation@chrome://remote/content/marionette/navigate.sys.mjs:330:39
emit@resource://gre/modules/EventEmitter.sys.mjs:148:20
```

Testit siis olettavat, että sovellus on käynnissä. Käynnistä siis sovellus yhteen terminaaliin, avaa uusi ja suorita testit siellä.