---
layout: page
title: Ohjelmistolisenssit
inheader: no
permalink: /lisenssit/
---

Tässä osassa ollaan käsitelty ohjelmiston suunnittelua ja toteutusta. Seuraavaksi katsotaan, missä kohtaa ohjelmiston suunnittelua lisenssöinti on merkittävässä osassa.

Osan on kirjoittanut [Akira Taguchi](https://github.com/lambdakilo/).

Kuvitellaan, että teet ohtun miniprojektiksi graafisen laskimen. Julkaiset lähdekoodisi GitHubiin, ja joku ottaa sinuun yhteyttä. Yhteydenottaja kehuu teosta ja haluaisi ottaa tämän käyttöön oletuslaskimena kehittämässään käyttöjärjestelmäjakelussaan, Cubblissa. Yhteydenottaja kuitenkin kertoo, ettei tämä onnistu ennen kuin olet lisensöinyt ohjelmasi sopivalla lisenssillä. Mitä teet?

### Ohjelmistolisenssien perusteet
Ohjelmistolisenssi on lainopillinen väline, joka säätelee ohjelmiston käyttöä ja jakelua. Ohjelmistokehittäjillä tämä usein ilmenee LICENSE-tiedoston julkaisemista lähdekoodin mukana. Tämän LICENSE-tiedoston sisältö määrää valitun ohjelmistolisenssin. Esimerkki Poetryn ohjelmistolisenssistä: [https://github.com/python-poetry/poetry/blob/master/LICENSE](https://github.com/python-poetry/poetry/blob/master/LICENSE).

Ohjelmistolisenssi valitaan käyttötarkoituksen mukaan. Seuraava verkkosivu on hyvä lähtökohta löytää juuri oikea ohjelmistolisenssi tarkoitukseen: [https://choosealicense.com/](https://choosealicense.com/). Verkkosivuilta voidaan kopioida leikepöydälle haluttu lisenssi ja täyttää sillä repositorion LICENSE-tiedoston sisältö (ks. Poetry-esimerkki).

Vaikka Choose a License-verkkosivun Appendix-alasivu ([https://choosealicense.com/appendix/](https://choosealicense.com/appendix/)) antaakin hyvin vertailtavaksi lisenssejä, käydään silti nyt läpi muutama käytetympi lisenssi karkeasti läpi:

| Lisenssi | Ehdot | Tyyppi |
|-------|--------|---------|
| MIT-lisenssi | Lisenssin tekstin pitää säilyä lähdekoodissa ja mm. suljettuja versioita saa tehdä | Suvaitseva |
| GNU General Public License, eli GPL | Lähdekoodi pitää julkaista samalla lisenssillä eikä suljettuja versioita saa tehdä | Suojeleva
| GPL 2.0 | Sama kuin GPL, mutta painotus ettei suljettuja versioita saa tehdä, edes muiden lakivelvotteiden vuoksi | Suojeleva
| GPL 3.0 | Sama kuin GPLv2, mutta painotus ettei suorittava rautakaan saa rajoittaa GPL-lisenssin velvoitteita | Suojeleva
| Mozilla Public-lisenssi 2.0 | Sama kuin GPL, paitsi mikäli projekti kasvaa merkittävän suureksi, voidaan lisenssi vaihtaa, esim. Chromium -> Chrome | Suvaitseva |
| The Unlicense | Tee mitä haluat | Avoin |
| - (Ei lisenssiä) | Omistat kaikki oikeudet | Yksityisomisteinen |
| CC BY | Lisenssin tekstin pitää säilyä teoksessa. Voidaan antaa ei-ohjelmistoille, esim. Kurssimateriaalille | Suvaitseva |
| CC BY NC | Sama kuin CC BY, mutta kaupallinen käyttö on kielletty (NC, No-Commercial) | Suvaitseva

### Harjoitus

Katsotaan ensin, mitä lisenssejä muut ohjelmistot käyttävät.

Mitä lisenssiä Robot Framework käyttää: [https://github.com/robotframework/robotframework](https://github.com/robotframework/robotframework)?

<details>
	<summary>
		Vastaus
	</summary>
	Apache 2.0-lisenssi
</details>

<br>

Mitä lisenssiä Visual Studio Code käyttää: [https://github.com/microsoft/vscode/](https://github.com/microsoft/vscode/)?
<br>

<details>
	<summary>
		Vastaus
	</summary>
		MIT-lisenssi
</details>

<br>

Seuraavaksi harjoitellaan lisenssin valintaa ohtun miniprojektia varten.

Haluan, että miniprojektini lähdekoodia voidaan käyttää miten vain, kunhan mainitaan alkuperäinen luoja. Valitsen

<ol type="a">
  <li>MIT-lisenssi</li>
  <li>The Unlicense</li>
</ol>

<details>
	<summary>
		Vastaus
	</summary>
	a. MIT-lisenssi
</details>

<br>

Mikäli miniprojektiani käytetään suuremmassa ohjelmistossa, haluan että suurempi projekti saa halutessaan käyttää eri lisenssiä, kuin miniprojektin alkuperäinen lisenssi. Valitsen 

<ol type="a">
  <li>MIT-lisenssi</li>
  <li>Mozilla Public-lisenssi 2.0</li>
</ol>

<details>
	<summary>
		Vastaus
	</summary>
	b. Mozilla Public-lisenssi 2.0
</details>

<br>

### Vapaa vai avoin

Vapaa ohjelmisto ja avoin lähdekoodi menevät monilla usein sekaisin. [Wikipedia-artikkeli](https://fi.wikipedia.org/wiki/Vapaa_ohjelmisto/) vapaasta ohjelmistosta on hyvä aloituspaikka sekaannuksen selvittämiseen. Tiivistettynä: Joskus liian avoimet lisenssit rajoittavat toisten vapauksia. Esimerkiksi MIT-lisenssi on niin avoin, että sillä pystyy eväämään kolmannen osapuolen vapauden suorittaa, tutkia, parantaa tai jakaa, kerran MIT-lisenssöityä lähdekoodia. Ohjelmistovapaudella tarkoitetaan tässä vastakkainasettelussa usein strong copyleft -mekanismia. Semantiikka on siis tässä aiheessa isossa roolissa.

### Loppusanat lisensseistä

Nyt osaat toivottavasti lisenssöidä ohtun miniprojektisi sekä tulevat ohjelmistoprojektisi. Ohjelmistolisenssit ovat kuitenkin pitkälti lakijargonia, ja joskus löytää itsensä tilanteesta, jolloin tarvitaan juristia. Älä kuitenkaan pelästy. [Lähtökohtaisesti kaikki lisenssöintivirheet selviävät ensisijaisesti puhumalla](https://opensource.stackexchange.com/questions/5699/has-the-mit-license-been-battle-tested-in-court). Mikäli jotain jäi epäselväksi, lähetä kysymykset Akira Taguchin alumnisähköpostiin tai kysy apua assareilta.
