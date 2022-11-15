---
layout: page
title: ChromeDriver-asennusohjeet
inheader: no
permalink: /chromedriver_asennusohjeet/
---

## Typoja materiaalissa

{% include typo_instructions.md path="/python/chromedriver_asennusohjeet.md" %}

## ChromeDriver-asennusohjeet

Jos tietokoneellesi ei ole asennettu Chrome- tai Chromium-selainta, aloita asentamalla sen viimeisin versio [täältä](https://www.google.com/chrome/). ChromeDriverin käyttöön soveltuu myös [Chromium](https://www.chromium.org/chromium-projects/), joka on avoimen lähdekoodin selain, johon Google Chrome pohjautuu. Lataa sen jälkeen käyttöjärjestelmällesi ja Chrome-versiollesi sopiva _chromedriver_-binääri [täältä](https://chromedriver.chromium.org/downloads). Pura ladattu paketti ja noudata sen jälkeen käyttöjärjestelmäkohtaisia ohjeita.

_Huom:_ valitse Chrome driverista versio joka on yhteensopiva käyttämäsi Chromen version mukaan!

### macOS ja Linux

Jotta `chromedriver`-komento toimisi tulee _chromedriver_-binääri siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Helpoin tapa on siirtää binääri _/usr/local/bin_-hakemistoon. Tämä onnistuu siirtymällä komentorivillä hakemistoon, johon _chromedriver_-binääri on ladattu ja suorittamalla komento `mv chromedriver /usr/local/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x /usr/local/bin/chromedriver`.

**HUOM:** Jos binäärin siirtämiselle _/usr/local/bin_-hakemistoon ei ole oikeuksia, siirry kotihakemistoosi komennolla `cd` ja luo sinne hakemisto _bin_ (jos sitä ei ole vielä olemassa) komennolla `mkdir bin`. Siirry nyt hakemistoon, johon _chromedriver_-binääri on ladattu ja siirrä se luotuun hakemistoon komennolla `mv chromedriver $HOME/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x $HOME/bin/chromedriver`. Lisää lopuksi _\$HOME/bin_-hakemisto `PATH`-ympäristömuuttujaan komennolla `touch $HOME/.bashrc && echo "export PATH=\"\$HOME/bin:\$PATH\"" >> $HOME/.bashrc`.

Käynnistä terminaali uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
chromedriver --version
```

**HUOM:** Mac-käyttäjänä saatat törmätä tilanteeseen, jossa chromedriverin käynnistys epäonnistuu koska kone ei tiedä että chromedriver on luotettavan tahon tekemä ohjelma. Ongelma korjautuu [tämän ohjeen](https://timonweb.com/misc/fixing-error-chromedriver-cannot-be-opened-because-the-developer-cannot-be-verified-unable-to-launch-the-chrome-browser-on-mac-os/) avulla.

#### ArchLinux

**ArchLinux**-distributiossa [`chromium`](https://archlinux.org/packages/extra/x86_64/chromium/)-paketin mukana tulee ChromeDriver suoraan. Jos sen sijaan on asennettuna [`google-chrome`](https://aur.archlinux.org/packages/google-chrome) Arch User Repositorioista, ChromeDriverin saa [`chromedriver`](https://aur.archlinux.org/packages/chromedriver)-paketista.

### Windows

Jotta `chromedriver`-komento toimisi tulee _chromedriver_-binääri siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Siirrä ensin ladattu _chromedriver_-binääri haluamaasi hakemistoon (esimerkiks _C:\Program Files_ on yksi potentiaalinen vaihtoehto). Lisää tämän jälkeen hakemiston polku (lisää siis _pelkkä_ hakemistom polku, eli ei tiedoston nimeä polun perään) `PATH`-ympäristömuuttujaan seuraamalla [tätä](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/) ohjetta.

Käynnistä terminaali (PowerShell) uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
chromedriver --version
```
