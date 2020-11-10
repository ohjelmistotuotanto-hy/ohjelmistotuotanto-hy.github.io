---
layout: page
title: ChromeDriver-asennusohjeet
inheader: no
permalink: /chromedriver_asennusohjeet/
---

## ChromeDriver-asennusohjeet

Jos tietokoneellesi ei ole asennettu Chrome-selainta, aloita asentamalla sen viimeisin versio [täältä](https://www.google.com/chrome/). Lataa sen jälkeen käyttöjärjestelmällesi ja Chrome-versiollesi sopiva _chromedriver_-binääri [täältä](https://chromedriver.chromium.org/downloads). Pura ladattu paketti ja noudata sen jälkeen käyttöjärjestelmäkohtaisia ohjeita.

### macOS ja Linux

Jotta `chromedriver`-komento toimisi tulee _chromedriver_-binääri siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Helpoin tapa on siirtää binääri _/usr/local/bin_-hakemistoon. Tämä onnistuu siirtymällä komentorivillä hakemistoon, johon _chromedriver_-binääri on ladattu ja suorittamalla komento `mv chromedriver /usr/local/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x /usr/local/bin/chromedriver`.

Käynnistä terminaali uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
chromedriver --version
```

**HUOM:** Jos binäärin siirtämiselle _/usr/local/bin_-hakemistoon ei ole oikeuksia, siirry kotihakemistoosi komennolla `cd` ja luo sinne hakemisto _bin_ (jos sitä ei ole vielä olemassa) komennolla `mkdir bin`. Siirry nyt hakemistoon, johon _chromedriver_-binääri on ladattu ja siirrä se luotuun hakemistoon komennolla `mv chromedriver $HOME/bin/`. Anna tämän jälkeen binäärille suoritusoikeudet komennolla `chmod +x $HOME/bin/chromedriver`. Lisää lopuksi _\$HOME/bin_-hakemisto `PATH`-ympäristömuuttujaan komennolla `touch $HOME/.bashrc && echo "export PATH=\"\$HOME/bin:\$PATH\"" >> $HOME/.bashrc`.

### Windows

Jotta `chromedriver`-komento toimisi tulee _chromedriver_-binääri siirtää hakemistoon, jonka polku on käyttöjärjestelmän `PATH`-ympäristömuuttujassa. Siirrä ensin ladattu _chromedriver_-binääri haluamaasi hakemistoon (esimerkiks _C:\Program Files_ on yksi potentiaalinen vaihtoehto). Lisää tämän jälkeen hakemiston polku (lisää siis _pelkkä_ hakemistom polku, eli ei tiedoston nimeä polun perään) `PATH`-ympäristömuuttujaan seuraamalla [tätä](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/) ohjetta.

Käynnistä terminaali (PowerShell) uudestaan ja varmista asennuksen onnistuminen suorittamalla komento:

```bash
chromedriver --version
```
