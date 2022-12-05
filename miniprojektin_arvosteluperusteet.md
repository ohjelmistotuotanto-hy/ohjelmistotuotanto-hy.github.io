---
layout: page
title: Miniprojektin arvosteluperusteet
inheader: no
permalink: /miniprojektin_arvosteluperusteet/
---

- [Ensimmäisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#ensimmäisen-sprintin-arvosteluperusteet)
- [Toisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#toisen-sprintin-arvosteluperusteet)
- [Kolmannen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#kolmannen-sprintin-arvosteluperusteet)
- [Lopputoimenpiteet](/miniprojektin_arvosteluperusteet#lopputoimenpiteet)

Miniprojektista saa maksimissaan 9 kurssipistettä seuraavien kriteereiden ja periaatteiden mukaan:

- Jokaisesta sprintistä on jaossa **ryhmälle** 2.5 kurssipistettä, eli maksimissaan kolmesta sprintistä ryhmä voi saada 7.5 pistettä
  - Ensisijainen arvostelukriteeri on prosessin seuraaminen, tasainen eteneminen ja ohjelmaan toteutettujen ominaisuuksien laatu
  - Toteutettujen ominaisuuksien määrän merkitys arvostelussa on aika pienempi
  - Tarkemmat sprinttikohtaiset arvosteluperusteet alla
- Henkilökohtainen suoriutumisesta on jaossa -1.5p ... 1.5p, poikkeustapauksissa -2p tai 2p on mahdollinen
  - Henkilökohtaisen suoriutumisen pisteet perustuvat lopussa tehtävään vertaisarvioon sekä ryhmän repositoriosta ja backlogeilta näkyvään "digitaaliseen jalanjälkeen"
  - Henkilökohtaista suoriutumista arvioidessa arvostetaan seuraavia asioita:
    - Fyysistä ja henkistä läsnäoloa
    - Aktiivista otetta
    - Luotettavuutta
    - Ryhmätyön sujuvuutta
    - Työskentelyn tasaisuutta
    - Kontribuutiota ryhmän tuotoksiin (koodi, testit, deployment pipeline, backlogit)
      - [varmista, että committisi näkyvät githubissa oikein](/miniprojektin_arvosteluperusteet#varmista-että-commitisi-näkyvät-githubissa-oikein)
  - Sankarikoodauksella ei voi kompensoida muuten puutteellista ryhmätyöskentelyä

Perusteeton osallistumattomuus johonkin sprinttiin johtaa miniprojektisuorituksen hylkäämiseen.

### Ensimmäisen sprintin arvosteluperusteet

Projekti tulee olla rekisteröity osoitteeseen <{{site.stats_url}}>.

- **Yksi ryhmäläinen** kirjautuu järjestelmään, menee välilehdelle _miniprojects_
  - Luo projektin _create project_ -napista avautuvasta lomakkeesta
  - Ja jakaa muille ryhmäläisille luodun projektin id:n
- **Muut ryhmäläiset** kirjautuvat järjestelmään ja liittyvät id:n avulla ryhmään _join project_ -napista avautuvasta lomakkeesta

**Jokaisen ryhmäläisen on oltava rekisteröitynyt projektiin viimeistään ensimmäisen sprintin lopuksi pidettävässä asiakastapaamisessa.**

Linkit projektin backlogeihin ja muihin dokumentteihin (ja niihin tulee olla koko maailmalla lukuoikeus), ja GitHub Actionsiin (tai muuhun käytössä olevaan CI-palveluun) tulee laittaa projektin GitHub-repositorion README:hen!

Pisteitä kertyy seuraavista asioista:

- (0.25p) product backlog
  - Backlog on DEEP (storyjä ei tarvitse estimoida)
- (0.5p) sprintin 1 backlog
  - Sprintiin valitut user storyt jaettu teknisen tason taskeiksi
  - Päivittäinen jäljellä oleva työmäärä arvioitu taskeittain
  - Burndown-käyrä olemassa
  - Jokaiseen taskiin on merkitty sen tekijä(t)
  - Taskin status on näkyvissä (esim. todo, doing, done)
- (0.25p) sprintiin 1 valittujen storyjen hyväksymiskriteerit kirjattu
- (0.25p) testaus
  - Toteutettua koodia on yksikkötestattu kohtuullisella tasolla
  - Ainakin jossain storyssa hyväksymiskriteerien testausta (Cucumber tai Robot Framework)
- (0.25p) jatkuva integraatio
  - Koodi GitHubissa
  - GitHub Actions (tai jokin muu CI-palvelu) suorittaa ainakin yksikkötestit ja ne menevät läpi
- (0.25p) toteutus
  - Ainakin _yksi_ sprintin tavoitteeseen sovituista storyista toteutettu _definition of donen_ mukaisella tasolla
- (0.25p) työtä tehty tasaisesti
  - Kaikki työ ei saa olla yhtenä päivänä tehty
- (0.25p) GitHub README:
  - README:sta löytyy linkki backlogeihin
  - Definition of done kirjattu eksplisiittisesti
  - Linkki sovellukseen jos kyse web-sovelluksesta
  - Jos kyse työpöytäsovelluksesta: ohjelman asennus- ja käyttöohje
- (0.25p) sprintin katselmointiin on valmistauduttu asiallisesti
  - Katselmoinnin pitäjä on sovittu ja tarvittavat esivalmistelut on tehty etukäteen
  - Katselmoinnin aikana asiakkaalle näytetään, että jokainen sprinttiin valittu user story on toteutettu hyväksymiskriteerien mukaisesti

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
- (0.25p) kattavahko testaus yksikkö- ja storytasolla
- (0.25p) jatkuva integraatio
  - CI-palvelu suorittaa testit
- (0.125p) GitHubin README:stä linkki testikattavuusraporttiin
- (0.25p) projektille määritelty järkevät Pylint- tai checkstylesäännöt jotka tarkistetaan CI:n toimesta
- (0.5p) suurin osa sprintin user storyistä toteutettu definition of donen mukaisella tasolla
- (0.125p) toimivasta, demossa näytettävästä versiosta on luotu GitHubiin [release](https://help.github.com/articles/creating-releases/).
  - Jos kyseessä on konsolisovellus, releaseen liitetään projektin ajettava jar-tiedosto
- (0.25p) sprintin katselmointiin on valmistauduttu asiallisesti
  - Katselmoinnin pitää eri henkilö, kuin edellisessä katselmoinnissa
  - Katselmoinnin pitäjä on sovittu ja tarvittavat esivalmistelut on tehty etukäteen
  - Katselmoinnin aikana asiakkaalle näytetään, että jokainen sprinttiin valittu user story on toteutettu hyväksymiskriteerien mukaisesti

Sprintin maksimi on 2.5 pistettä.

### Kolmannen sprintin arvosteluperusteet


Pisteitä kertyy seuraavista asioista:

- (0.25p) product backlog
  - Backlog on DEEP (storyjä ei tarvitse estimoida)
  - Backlogiin ei jää sinne kuulumatonta roskaa, storyjen statukset on kirjattu oikein, jne...
- (0.25p) sprintiin 3 valittujen storyjen hyväksymisehdot kirjattu Cucumber- tai Robot Framework -tiedostoihin
  - Hyväksymisehtoja ei kirjoteta erikseen backlogiin, vaan backlogista on linkki hyväksymistestin tiedostoon
- (0.25p) sprintin 3 backlog
  - Vaatimukset kuten edellisissä sprinteissä
- (0.5p) kattavahko testaus yksikkö- ja storytasolla
- (0.25p) jatkuva integraatio
  - CI-palvelu suorittaa testit
  - Master-branch ei ole hajonnut
- (0.25p) GitHubin README:stä linkki testikattavuusraporttiin
- (0.25p) suurin osa sprintin user storyistä toteutettu definition of donen mukaisella tasolla
- (0.25p) toimivasta, demossa näytettävästä versiosta on luotu GitHubiin [release](https://help.github.com/articles/creating-releases/).
  - Jos kyseessä on konsolisovellus, releaseen liitetään projektin ajettava jar-tiedosto
- (0.25p) loppudemoon on valmistauduttu asiallisesti (valmistautuminen arvioidaan sen perusteella miten demo menee)
  - Sovittu etukäteen kuka tekee mitäkin
  - Mietitty mitä esitetään
    - Kannattaa esitellä tärkein toiminnallisuus, aikaa demossa on vähän joten ei kannata rönsyillä
  - Testidata on järkevää
    - tietokanta ei saa olla etukäteen tyhjä
    - tietokannassa oleva data ja testeissä käytettävät syötteet järkeviä, eli _ei_ esimerkiksi _12345_, _asdf_, _nimi1_, _nimi2_

Sprintin maksimi on 2.5 pistettä.


### Lopputoimenpiteet

Tulossa...

### Varmista, että commitisi näkyvät GitHubissa oikein

Koska Githubiin tehtävien commitien määrä (ja laatu) vaikuttaa henkilökohtaisiin pisteisiin, varmista, että olet konfiguroinit email-osoitteesi gitiin (ks. [viikon 1 laskareiden tehtävä 2](/tehtavat1/#2-githubiin-versionhallinta)), ja että commitatessasi ryhmäsi repositorioon tunnuksesi näkyy oikein repositorion commit-listalla, ja että tunnuksesi tulee repositorion [contributors](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/graphs/contributors)-listalle.

On suositeltavaa, että jokainen tekee (omalta koneeltaan) heti alussa yhden testicommitin ja tarkastaa, että Git on konfiguroitu oikein.

### Pariohjelmointi ja commitit

Jos pariohjelmoit (se kannattaa!) saat commitit näkyviin molemmille
[tämän ohjeen](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) mukaan.

### Commitit kadoksissa

Jos committisi yhteydessä näkyy (Gitin email-osoitteen konfiguroinnista huolimatta) harmaa symbooli kuten seuraavista alempi

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit1.png)

Klikkaa harmaan commitin nimeä katso mikä on email-osoite, joka commitiin liittyy mutta mitä github ei tunnista osoitteeksesi.

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit2.png)

Lisää osoite _settings_-valikosta:

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit3.png)
