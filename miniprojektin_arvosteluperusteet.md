---
layout: page
title: Miniprojektin arvosteluperusteet
inheader: no
permalink: /miniprojektin_arvosteluperusteet/
---

## Miniprojektin arvosteluperusteet

* [Ensimmäisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#ensimmäisen-sprintin-arvosteluperusteet)
* [Toisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#toisen-sprintin-arvosteluperusteet)
* [Kolmannen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#kolmannen-sprintin-arvosteluperusteet)
* [Lopputoimenpiteet](/miniprojektin_arvosteluperusteet#lopputoimenpiteet)

Miniprojektista saa maksimissaan 9 kurssipistettä seuraavien kriteereiden ja periaatteiden mukaan

* Jokaisesta sprintistä on jaossa **ryhmälle** 2.5 kurssipistettä, eli maksimissaan kolmesta sprintistä ryhmä voi saada 7.5 pistettä
  * ensisijainen arvostelukriteeri on prosessin seuraaminen, tasainen eteneminen ja ohjelmaan toteutettujen ominaisuuksien laatu
  * toteutettujen ominaisuuksien määrän merkitys arvostelussa on aika pienempi
  * tarkemmat sprinttikohtaiset arvosteluperusteet alla
* Henkilökohtainen suoriutumisesta on jaossa -1.5p ... 1.5p, poikkeustapauksissa -2 tai 2p on mahdollinen
  - henkilökohtaisen suoriutumisen pisteet perustuvat lopussa tehtävään vertaisarvioon sekä ryhmän repositoriosta ja backlogeilta näkyvään "digitaaliseen jalanjälkeen"
  - henkilökohtaista suoriutumista arvioidessa arvostetaan seuraavia asioita:
    - fyysistä ja henkistä läsnäoloa
    - aktiivista otetta
    - luotettavuutta
    - ryhmätyön sujuvuutta
    - työskentelyn tasaisuutta
    - kontribuutiota ryhmän tuotoksiin (koodi, testit, deployment pipeline, backlogit)
      - [varmista, että committisi näkyvät githubissa oikein](/miniprojektin_arvosteluperusteet#varmista-että-commitisi-näkyvät-githubissa-oikein)
  - sankarikoodauksella ei voi kompensoida muuten puutteellista ryhmätyöskentelyä
- Perusteeton osallistumattomuus johonkin sprinttiin johtaa miniprojektisuorituksen hylkäämiseen

### Ensimmäisen sprintin arvosteluperusteet:

Projekti tulee olla rekisteröity osoitteeseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
* **yksi ryhmäläinen** kirjautuu järjestelmään, menee välilehdelle _miniprojects_
  * luo projektin _create project_ -napista avautuvasta lomakkeesta
  * ja jakaa muille ryhmäläisille luodin projektin id:n
* **muut ryhmäläiset** kirjautuvat järjestelmään ja liittyvät id:n avulla ryhmään _join project_ -napista avautuvasta lomakkeesta

**Jokaisen ryhmäläisen on oltava rekisteröitynyt projektiin viimeistään ensimmäisen sprintin lopuksi pidettävässä asiakastapaamisessa.** 

Linkit projektin backlogeihin ja muihin dokumentteihin (ja niihin tulee olla koko maailmalla lukuoikeus), ja CircleCI:hin (tai muuhun käytössä olevaan CI-palveluun) tulee laittaa projektin githubin README:hen!

### Pisteitä kertyy seuraavista asioista

* (0.5p) product backlog 
  * backlog on DEEP (storyjä ei tarvitse estimoida)
* (0.5p) sprintin 1 backlog
  * sprintiin valitut user storyt jaettu teknisen tason taskeiksi
  * päivittäinen jäljellä oleva työmäärä arvioitu taskeittain
  * burndown-käyrä olemassa
  * jokaiseen taskiin on merkitty sen tekijä(t)
  * taskin status on näkyvissä (esim. todo, doing, done)
* (0.5p) sprintiin 1 valittujen storyjen hyväksymiskriteerit kirjattu
* (0.5p) testaus
  * toteutettua koodia on yksikkötestattu kohtuullisella tasolla
  * ainakin jossain storyssa hyväksymiskriteerien testausta (cucumber)	
* (0.5p) jatkuva integraatio
  * koodi githubissa
  * CircleCI (tai jokin muu CI-palvelu) suorttaa ainakin yksikkötestit ja ne menevät läpi
* (0.5p) toteutus
  * ainakin _yksi_ sprintin tavoitteeseen sovituista storyista toteutettu _definition of donen_ mukaisella tasolla
* (0.25p) työtä tehty tasaisesti
  * kaikki työ ei saa olla yhtenä päivänä tehty
* (0.25p) GitHub readme:
  * readmesta löytyy linkki backlogeihin
  * definition of done kirjattu eksplisiittisesti 
  * linkki CircleCI:hin ja sovellukseen jos kyse web-sovelluksesta
  * jos kyse työpöytäsovelluksesta: ohjelman asennus- ja käyttöohje

Sprintin maksimi on 2.5 pistettä.

### Toisen sprintin arvosteluperusteet:

#### pisteet jakautuvat seuraavasti

* (0.25p) product backlog 
  * backlog on DEEP (storyjä ei tarvitse estimoida)
* (0.25p) sprintin 2 backlog
  * sprintiin valitut user storyt jaettu teknisen tason taskeiksi
  * päivittäinen jäjellä oleva työmäärä arvioitu taskeittain
  * burndown-käyrä olemassa
  * jokaiseen taskiin on merkitty sen tekijä(t)
* (0.25p) sprintiin 2 valittujen storyjen hyväksymisehdot kirjattu
* (0.5p) kattavahko testaus yksikkö- ja storytasolla
* (0.25p) jatkuva integraatio
  * CI-palvelu suorittaa testit
* (0.25p) GitHubin README:stä linkki testikattavuusraporttiin
* (0.5p) suurin osa sprintin user storyistä toteutettu definition of donen mukaisella tasolla
* (0.25p) toimivasta, demossa näytettävästä versiosta  on luotu GitHubiin [release](https://help.github.com/articles/creating-releases/). 
  * Jos kyseessä on konsolisovellus, releaseen liitetään projektin ajettava jar-tiedosto

Sprintin maksimi on 2.5 pistettä.

### Kolmannen sprintin arvosteluperusteet

_Huom: miniprojektit tarkastetaan jossain vaiheessa torstain 12.12. klo 23.59 jälkeen. Sen jälkeen tehtyjä muutoksia ei työssä enää huomioida._ 

#### Pisteytys jakautuu seuraavasti:

* (0.25p) product backlog 
  * backlog on DEEP (storyjä ei tarvitse estimoida)
  * backlogiin ei jää sinne kuulumatonta roskaa, storyjen statukset on kirjattu oikein, jne...
* (0.25p) sprintiin 3 valittujen storyjen hyväksymisehdot kirjattu cucumber-featureina
  * hyväksymisehtoja ei kirjoteta erikseen backlogin, backlogista linkki cucumber-featureen
* (0.25p) sprintin 3 backlog
  * vaatimukset kuten edellisissä sprinteissä
* (0.5p) kattavahko testaus yksikkö- ja storytasolla
* (0.25p) jatkuva integraatio
  * CI-palvelu suorittaa testit
  * master-branch ei ole hajonnut
* (0.25p) GitHubin README:stä linkki testikattavuusraporttiin
* (0.25p) suurin osa sprintin user storyistä toteutettu definition of donen mukaisella tasolla
* (0.25p) toimivasta, demossa näytettävästä versiosta  on luotu GitHubiin [release](https://help.github.com/articles/creating-releases/).
  * jos kyseessä on konsolisovellus, releaseen liitetään projektin ajettava jar-tiedosto
* (0.25p) loppudemoon on valmistauduttu asiallisesti (valmistautuminen arvioidaan sen perusteella miten demo menee)
  * sovittu etukäteen kuka tekee mitäkin
  * mietitty mitä esitetään
    * kannattaa esitellä tärkein toiminnallisuus, aikaa demossa on vähän joten ei kannata rönsyillä
  * testidata on järkevää
    * tietokanta ei saa olla etukäteen tyhjä
    * tietokannassa oleva data ja testeissä käytettävät syötteet järkeviä, eli *ei* esimerkiksi _12345_, _asdf_, _nimi1_, _nimi2_  

Sprintin maksimi on 2.5 pistettä.

### Lopputoimenpiteet

#### Vertaispalaute

* Arvosteluperusteiden alussa mainittu henkilökohtainen pisteytys perustuu mm. vertaispalautteeseen
* Jokaisen ryhmäläisen tulee antaa **vertaispalaute viimeistään lauantaina 21.12. klo 23:59**
  * vertaispalautteen antaminen on _pakollista_, ilman vertaispalautteen antamista kurssin arvosanaa ei kirjata
* Vertaispalautteen antaminen tapahtuu [tehtävänpalautussovelluksen](https://study.cs.helsinki.fi/stats/courses/ohtu2019) miniproject-tabissa
  * ryhmäläiset eivät näe toistensa vertaispalautteita

#### Raportti

Vertaispalautteen lisäksi ryhmä laatii projektin kulusta pienen raportin (noin 2 sivua)

*  kerrataan jokaisen sprintin aikana kohdatut ongelmat (prosessiin-, projektityöskentelyyn- ja teknisiin asioihin liittyvät)
* mikä sujui projektissa hyvin, mitä pitäisi parantaa seuraavaa kertaa varten
* mitä asioita opitte, mitä asioita olisitte halunneet oppia, mikä tuntui turhalta
* jos raportti puuttuu, vähennetään ryhmältä 2 pistettä
* raportti palautetaan lisäämällä raporttiin linkki projektin GitHubin Readme:hen
* raportista tulee ilmetä jokaisen projektiin osallistuneen nimi
* **raportin deadline lauantaina 21.12. klo 23:59**

### Varmista, että commitisi näkyvät githubissa oikein

Koska Githubiin tehtävien commitien määrä (ja laatu) vaikuttaa henkilökohtaisiin pisteisiin, varmista, että olet konfiguroinit email-osoitteesi gitiin (ks. [viikon 1 laskareiden tehtävä 2](/tehtavat1/#2-githubiin-versionhallinta)), ja että commitatessasi ryhmäsi repositorioon tunnuksesi näkyy oikein repositorion commit-listalla, ja että tunnuksesi tulee repositorion [contributors](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/graphs/contributors)-listalle.

On suositeltavaa, että jokainen tekee (omalta koneeltaan) heti alussa yhden testicommitin ja tarkastaa, että Git on konfiguroitu oikein.

### Commitit kadoksissa

Jos committisi yhteydessä näkyy (gitin email-osoitteen konfiguroinnista huolimatta) harmaa symbooli kuten seuraavista alempi

![](https://github.com/mluukkai/ohtu2017/raw/master/images/commit1.png)

Klikkaa harmaan commitin nimeä katso mikä on email-osoite, joka commitiin liittyy mutta mitä github ei tunnista osoitteeksesi.

![](https://github.com/mluukkai/ohtu2017/raw/master/images/commit2.png)

Lisää osoite _settings_-valikosta:

![](https://github.com/mluukkai/ohtu2017/raw/master/images/commit3.png)