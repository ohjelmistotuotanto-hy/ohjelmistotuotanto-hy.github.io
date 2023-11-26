---
layout: page
title: Ohjelmistolisenssit
inheader: no
permalink: /lisenssit/
---

Tässä osassa ollaan käsitelty ohjelmiston suunnittelua ja toteutusta. Seuraavaksi katsotaan, missä kohtaa ohjelmiston suunnittelua lisenssöinti on merkittävässä osassa.

Osan on kirjoittanut [Akira Taguchi](https://github.com/akirataguchi115).

Kuvitellaan, että teet ohtun miniprojektiksi graafisen laskimen. Julkaiset koodisi GitHubiin, ja joku ottaa sinuun yhteyttä. Yhteydenottaja kehuu teosta ja haluaisi ottaa tämän käyttöön oletuslaskimena kehittämässään käyttöjärjestelmäjakelussaan, Cubblissa. Yhteydenottaja kuitenkin kertoo, ettei tämä onnistu ennen kuin olet lisensöinyt ohjelmasi sopivalla lisenssillä. Mitä teet?

### Ohjelmistolisenssien perusteet
Ohjelmistolisenssi on lainopillinen väline, joka säätelee ohjelmiston käyttöä ja edelleenjakelua. Ohjelmistokehittäjillä tämä usein ilmenee LICENSE-tiedoston julkaisemista lähdekoodin mukana. Tämän LICENSE-tiedoston sisältö määrää valitun ohjelmistolisenssin. Esimerkki Poetryn ohjelmistolisenssistä: [https://github.com/python-poetry/poetry/blob/master/LICENSE](https://github.com/python-poetry/poetry/blob/master/LICENSE).

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

Mitä lisenssiä Code Climate käyttää: [https://github.com/codeclimate/codeclimate/](https://github.com/codeclimate/codeclimate/)?

<details>
	<summary>
		Vastaus
	</summary>
	GNU Affero General Public License v3.0
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

Haluan, että miniprojektiani voidaan käyttää ja jakaa millä tahansa ehdoilla. Valitsen 

<ol type="a">
  <li>MIT-lisenssi</li>
  <li>The Unlicense</li>
</ol>

<details>
	<summary>
		Vastaus
	</summary>
	b. The Unlicense
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

Nyt osaat toivottavasti lisensoida ohtun miniprojektisi sekä tulevat ohjelmistoprojektisi. Mikäli jotain jäi epäselväksi, pingaa @mynamabitchiro (Akira Taguchi) OhTun Discord-palvelimella tai mistä vain internetin kulmasta löydätkään Akiran.

### Vapaa vai avoin - Yliopiston Copyleft-kerho

Vapaalla ohjelmistolla ja avoimella lähdekoodilla on suuri ero. Seuraava video kertoo ohjelmistovapaudesta sekä tämän puolesta taistelevan Software Freedom Conservancysta:

<video width="640" height="480" controls onloadstart="this.volume=0.5">
	<source src="https://de4df61deef78e687eb1-7fe654f62734b2c8c91ba6b5edb21b0b.ssl.cf5.rackcdn.com/sfc-introduction_1080p.mp4" type="video/mp4">
</video>

Jos kiinnostuit ohjelmistovapaudesta, tule juttelemaan kanssapohtijoiden kanssa yliopiston Copyleft-kerhon Discord-palvelimelle: [https://discord.gg/FhhynjaZtc](https://discord.gg/FhhynjaZtc)!
