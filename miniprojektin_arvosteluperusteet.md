---
layout: page
title: Miniprojektin arvosteluperusteet
inheader: no
permalink: /miniprojektin_arvosteluperusteet/
---

- [Ensimmäisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#ensimmäisen-sprintin-arvosteluperusteet)
- [Toisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#toisen-sprintin-arvosteluperusteet)
- [Kolmannen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#kolmannen-sprintin-arvosteluperusteet)
- [Neljännen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet/#neljännen-sprintin-arvosteluperusteet)
- [Lopputoimenpiteet](/miniprojektin_arvosteluperusteet#lopputoimenpiteet)

Miniprojektista saa maksimissaan 11 kurssipistettä seuraavien kriteereiden ja periaatteiden mukaan:

- Jokaisesta sprintistä on jaossa **ryhmälle** 2.5 kurssipistettä, eli maksimissaan neljästä sprintistä ryhmä voi saada 10 pistettä
  - Ensisijainen arvostelukriteeri on prosessin seuraaminen, tasainen eteneminen ja ohjelmaan toteutettujen ominaisuuksien laatu
  - Toteutettujen ominaisuuksien määrän merkitys arvostelussa on aika pieni mutta ei toki nolla, eli jotain koodiakin tulee tehdä
  - Tarkemmat sprinttikohtaiset arvosteluperusteet alla
- Henkilökohtainen suoriutumisesta on jaossa -1p ... 1, poikkeustapauksissa -2p tai 2p on mahdollinen
  - Henkilökohtaisen suoriutumisen pisteet perustuvat lopussa tehtävään vertaisarvioon sekä ryhmän repositoriosta ja backlogeilta näkyvään "digitaaliseen jalanjälkeen"
  - Henkilökohtaista suoriutumista arvioidessa arvostetaan seuraavia asioita:
    - Fyysistä ja henkistä läsnäoloa
    - Aktiivista otetta
    - Luotettavuutta
    - Ryhmätyön sujuvuutta
    - Työskentelyn tasaisuutta
    - Kontribuutiota ryhmän tuotoksiin (koodi, testit, deployment pipeline, backlogit)
      - [varmista, että committisi näkyvät GitHubissa oikein](/miniprojektin_arvosteluperusteet#varmista-että-commitisi-näkyvät-githubissa-oikein)
  - **Sankarikoodauksella ei voi kompensoida muuten puutteellista ryhmätyöskentelyä**
  - Kannattaa myös ottaa tosissaan noin 6 tunnin sprinteittäinen työaika. Työajan reilu ylitys ei tuo "lisäpisteitä" vaan pikemminkin päinvastoin.

Perusteeton osallistumattomuus johonkin sprinttiin johtaa miniprojektisuorituksen hylkäämiseen.

### Ensimmäisen sprintin arvosteluperusteet

Projekti tulee olla rekisteröity palautussovellukseen <{{site.stats_url}}>.

- **Yksi ryhmäläinen** kirjautuu järjestelmään, menee välilehdelle _miniprojects_
  - Luo projektin _create project_ -napista avautuvasta lomakkeesta
  - Ja jakaa muille ryhmäläisille luodun projektin id:n
- **Muut ryhmäläiset** kirjautuvat järjestelmään ja liittyvät id:n avulla ryhmään _join project_ -napista avautuvasta lomakkeesta

**Jokaisen ryhmäläisen on oltava rekisteröitynyt projektiin viimeistään ensimmäisen sprintin lopuksi pidettävässä asiakastapaamisessa.**
- Ne ryhmäläiset joita ei ole rekisteröity ensimmäisen sprintin asiakastapaamiseen mennessä, eivät saa ryhmälle sprintistä tulevia pisteitä

Linkit projektin backlogeihin ja muihin dokumentteihin (ja niihin tulee olla koko maailmalla lukuoikeus), ja GitHub Actionsiin (tai muuhun käytössä olevaan CI-palveluun) tulee laittaa projektin GitHub-repositorion README:hen!

Pisteitä kertyy seuraavista asioista:

- (0.25p) product backlog
  - Backlog on DEEP (storyjä ei tarvitse estimoida)
- (0.5p) sprintin 1 backlog
  - Sprintiin valitut user storyt jaettu teknisen tason taskeiksi
  - Päivittäinen jäljellä oleva työmäärä arvioitu taskeittain
  - Sprintin burndown-käyrä olemassa
  - Jokaiseen taskiin on merkitty sen tekijä(t)
  - Taskin status on näkyvissä (esim. todo, doing, done)
- (0.25p) sprintiin 1 valittujen user storyjen hyväksymiskriteerit kirjattu
- (0.25p) testaus
  - Projektissa on ainakin yksi Robot-testi
- (0.25p) jatkuva integraatio
  - Koodi GitHubissa
  - GitHub Actions (tai jokin muu CI-palvelu) suorittaa yksikkötestit ja ne menevät läpi
- (0.25p) toteutus
  - Ainakin _yksi_ sprintin tavoitteeseen sovituista storyista toteutettu _definition of donen_ mukaisella tasolla
- (0.25p) työtä tehty tasaisesti
  - Kaikki työ ei saa olla yhtenä päivänä tehty
- (0.25p) GitHub README:
  - README:sta löytyy linkki backlogeihin (ja niihin on _koko maailmalla_ lukuoikeudet)
  - Definition of done kirjattu eksplisiittisesti
  - Ohjelman asennus- ja käyttöohje **TAI** linkki internetissä olevaan toimivaan sovellukseen
- (0.25p) sprintin katselmointiin on valmistauduttu asiallisesti
  - Katselmoinnin pitäjä on sovittu ja tarvittavat esivalmistelut on tehty etukäteen
  - Katselmoinnin aikana asiakkaalle demonstroidaan ne sprinttiin valitut user storyt jotka on toteutettu hyväksymiskriteerien mukaisesti

Sprintin maksimi on 2.5 pistettä.

### Toisen sprintin arvosteluperusteet

Pisteitä kertyy seuraavista asioista:

- (0.25p) product backlog
  - Backlog on DEEP (storyjä ei tarvitse estimoida)
- (0.25p) sprintin 2 backlog
  - Sprintiin valitut user storyt jaettu teknisen tason taskeiksi
  - Päivittäinen jäjellä oleva työmäärä arvioitu taskeittain
  - Burndown-käyrä olemassa
  - Jokaiseen taskiin on merkitty sen tekijä(t)
- (0.25p) sprintiin 2 valittujen storyjen hyväksymisehdot kirjattu
- (0.25p) ainakin osa storeista testattu storytasolla (Robot-frameworkilla)
- (0.25p) sovellukseen on tehty ainakin yksi yksikkötesti (unittest-kirjastolla)
  - kannattaa lukea [tämä](/flask/#testeistä) testaukseen liittyvä huomio
- (0.25p) jatkuva integraatio
  - CI-palvelu suorittaa testit
  - main-branch ei ole hajonnut sprintin lopussa
- (0.25p) projektille määritelty järkevät Pylint-säännöt jotka tarkistetaan CI:n toimesta
- (0.25p) suurin osa sprintin user storyistä toteutettu definition of donen mukaisella tasolla
- (0.25p) toimivasta, demossa näytettävästä versiosta on luotu GitHubiin [release](https://help.github.com/articles/creating-releases/).
  - releasella tulee olla järkevä nimi ja kuvaus, ks. mallia esim. [täältä](/release)
- (0.25p) sprintin katselmointiin on valmistauduttu asiallisesti
  - Katselmoinnin pitää eri henkilö, kuin edellisessä katselmoinnissa
  - Katselmoinnin pitäjä on sovittu ja tarvittavat esivalmistelut on tehty etukäteen
  - Katselmoinnin aikana asiakkaalle näytetään, että jokainen sprinttiin valittu user story on toteutettu hyväksymiskriteerien mukaisesti
- **Pitäkää sprintin päätteeksi retrospektiivi**, pisteet retrospektiivista annetaan sprintin 3 arvostelussa, ks ohje alta

Sprintin maksimi on 2.5 pistettä.

#### Retrospektiivi

- Sprintin 2 päätteeksi tulee pitää retrospektiivi
- Muutama ohje retrospektiivin pitämiseen [täällä](/tehtavat4/#5-retrospektiivitekniikat)
- Retrospektiivista tulee kirjoittaa lyhyet muistiinpanot projektin repositorion juureen laitettavaan tiedostoon `retro.md`
- Retrospektiivissa havaituista asioista tulee identifioida vähintään kaksi _kehitystoimenpidettä_, eli asiaa joissa tiimi yrittää parantaa toimintaa seuraavassa sprintissä
  - kehitystoimenpiteet pitää kirjata retrospektiivin muistiinpanoihin


### Kolmannen sprintin arvosteluperusteet

### Neljännen sprintin arvosteluperusteet

### Lopputoimenpiteet

#### Loppudemo ja sprintin 4 päättyminen

#### Vertaispalaute

- Arvosteluperusteiden alussa mainittu henkilökohtainen pisteytys perustuu mm. vertaispalautteeseen
- Jokaisen ryhmäläisen tulee antaa **vertaispalaute viimeistään xx klo 23:59**
  - Vertaispalautteen antaminen on _pakollista_. Jos vertaispalaute puuttuu, ovat miniprojektin henkilökohtaiset pisteet -1.5p
- Vertaispalautteen antaminen tapahtuu [tehtävänpalautussovelluksen]({{site.stats_url}}) miniproject-tabissa
  - Ryhmäläiset eivät näe toistensa vertaispalautteita

#### Raportti

Vertaispalautteen lisäksi ryhmä laatii projektin kulusta pienen raportin (noin 2 sivua)

- Kerrataan jokaisen sprintin aikana kohdatut ongelmat (prosessiin-, projektityöskentelyyn- ja teknisiin asioihin liittyvät)
- Mikä sujui projektissa hyvin, mitä pitäisi parantaa seuraavaa kertaa varten
- Mitä asioita opitte, mitä asioita olisitte halunneet oppia, mikä tuntui turhalta
- Jos raportti puuttuu, vähennetään ryhmältä 2 pistettä
- Raportti palautetaan lisäämällä raporttiin linkki projektin GitHubin README:hen
- Raportista tulee ilmetä jokaisen projektiin osallistuneen nimi
- **Raportin deadline xx klo 23:59**

### Varmista, että commitisi näkyvät GitHubissa oikein

Koska GitHubiin tehtävien commitien määrä (ja laatu) vaikuttaa henkilökohtaisiin pisteisiin, varmista, että olet konfiguroinit email-osoitteesi Gitiin (ks. [viikon 1 laskareiden tehtävä 2](/tehtavat1#2-githubiin-versionhallinta)), ja että commitatessasi ryhmäsi repositorioon tunnuksesi näkyy oikein repositorion commit-listalla, ja että tunnuksesi tulee repositorion [contributors](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/graphs/contributors)-listalle.

On suositeltavaa, että jokainen tekee (omalta koneeltaan) heti alussa yhden testicommitin ja tarkastaa, että Git on konfiguroitu oikein.

### Pariohjelmointi ja commitit

Jos pariohjelmoit (se kannattaa!) saat commitit näkyviin molemmille
[tämän ohjeen](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) mukaan.

### Commitit kadoksissa

Jos committisi yhteydessä näkyy (Gitin email-osoitteen konfiguroinnista huolimatta) harmaa symboli kuten seuraavista alempi

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit1.png)

Klikkaa harmaan commitin nimeä katso mikä on email-osoite, joka commitiin liittyy mutta mitä GitHub ei tunnista osoitteeksesi.

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit2.png)

Lisää osoite _settings_-valikosta:

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit3.png)
