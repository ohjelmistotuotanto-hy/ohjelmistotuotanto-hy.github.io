---
layout: page
title: Miniprojektin arvosteluperusteet
inheader: no
permalink: /miniprojektin_arvosteluperusteet/
---

## Miniprojektin arvosteluperusteet

Miniprojektista saa maksimissaan 9 kurssipistettä 

* [ensimmäisen sprintin arvosteluperusteet](/miniprojektin_arvosteluperusteet#ensimmäisen-sprintin-arvosteluperusteet)

Miniprojektista saatavat kurssipisteet määräytyvät seuraavasti

* Jokaisesta sprintistä on jaossa **ryhmälle** 2.5 kurssipistettä
  * ensisijainen arvostelukriteeri on prosessin seuraaminen, tasainen eteneminen ja ohjelmaan toteutettujen ominaisuuksien laatu
  * toteutettujen ominaisuuksien määrän merkitys arvostelussa on pienempi
  * tarkemmat sprinttikohtaiset arvosteluperusteet alla
* Henkilökohtainen suoriutuminen -1.5p ... 1.5p (poikkeustapauksissa -2 tai 2p mahdollinen)
  - henkilökohtaisen suoriutumisen pisteet perustuvat lopussa tehtävään vertaisarvioon sekä ryhmän repositoriosta ja backlogeilta näkyvään digitaaliseen jalanjälkeen
  - henkilökohtaista suoriutumista arvioidessa arvostetaan seuraavia asioita:
    - fyysistä ja henkistä läsnäoloa
    - aktiivista otetta
    - ryhmätyön sujuvuutta
    - luotettavuutta
    - työskentelyn tasaisuutta
    - kontribuutiota ryhmän tuotoksiin (koodi, testit, deployment pipeline, backlogit)
      - [varmista, että committisi näkyvät githubissa oikein](/miniprojekti#varmista-että-commitisi-näkyvät-githubissa-oikein)
  - sankarikoodauksella ei voi kompensoida muuten puutteellista ryhmätyöskentelyä
- Perusteeton osallistumattomuus sprinttiin johtaa miniprojektisuorituksen hylkäämiseen

## Ensimmäisen sprintin arvosteluperusteet:

Projekti tulee olla rekisteröity osoitteeseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
* **yksi ryhmäläinen** kirjautuu järjestelmään, menee välilehdelle miniprojects
  * luo projektin _create project_ -napista avautuvasta lomakkeesta
  * ja jakaa muille ryhmäläisille luodin projektin id:n
* **muut ryhmäläiset** kirjautuvat järjestelmään ja liittyvät id:n avulla ryhmään _join project_ -napista avautuvasta lomakkeesta

**Jokaisen ryhmäläisen on oltava rekisteröitynyt projektiin viimeistään ensimmäisen sprintin asiakaspalaverissa.** 

Linkit projektin backlogeihin ja muihin dokumentteihin (ja niihin tulee olla koko maailmalla lukuoikeus), ja CircleCI:hin tulee laittaa projektin githubin README:hen!

### pisteitä kertyy seuraavista asioista

* (0.5p) product backlog 
  * backlog on DEEP (storyjä ei tarvitse estimoida)
* (0.5p) sprintin 1 backlog
  * sprintiin valitut user storyt jaettu teknisen tason taskeiksi
  * päivittäinen jäjellä oleva työmäärä arvioitu taskeittain
  * burndown-käyrä olemassa
  * jokaiseen taskiin on merkitty sen tekijä(t)
* (0.5p) sprintiin 1 valittujen storyjen hyväksymisehdot kirjattu
* (0.5p) testaus
  * toteutettua koodia on yksikkötestattu kohtuullisella tasolla
  * ainakin jossain storyssä hyväksymäehtojen testausta (cucumber)	
* (0.5p) jatkuva integraatio
  * koodi githubissa
  * travis suorttaa ainakin yksikkötestit
* (0.5p) toteutus
  * ainakin _yksi_ sprintin tavoitteeseen sovituista storyistä toteutettu Definition of donen mukaisella tasolla
* (0.25p) työtä tehty tasaisesti
  * kaikki ei saa olla yhtenä päivänä tehty
* (0.25p) github readme:
  * readmesta löytyy linkki backlogeihin
  * definition of done kirjattu eksplisiittisesti 
  * linkki travisiin ja sovellukseen jos kyse web-sovelluksesta
  * jos kyse työpöytäsovelluksesta, ohjelman asennus- ja käyttöohje

Sprintin maksimi on 2.5 pistettä.



## Lopputoimenpiteet





### Vertaispalaute

* Arvosteluperusteiden alussa mainittu henkilökohtainen pisteytys perustuu mm. vertaispalautteeseen
* Jokaisen ryhmäläisen tulee antaa vertaispalaute viimeistään ma 17.12. klo 23:59
  * Vertaispalautteen antamattomuus johtaa automaattisesti jokaisesta sprintistä -1 henkilökohtaiseen pistemenetykseen
* vertaispalautteen antaminen tapahtuu [tehtävänpalautussovelluksen](https://studies.cs.helsinki.fi/courses/#/ohtu2018/miniproject) miniproject-tabissa

### Vertaispalautteen lisäksi ryhmä laatii projektin kulusta pienen raportin (noin 2 sivua)

*  kerrataan jokaisen sprintin aikana kohdatut ongelmat (prosessiin-, projektityöskentelyyn- ja teknisiin asioihin liittyvät)
* mikä sujui projektissa hyvin, mitä pitäisi parantaa seuraavaa kertaa varten
* mitä asioita opitte, mitä asioita olisitte halunneet oppia, mikä tuntui turhalta
* jos raportti puuttuu: -2p
* raportti palautetaan lisäämällä raporttiin linkki projektin Githubin Readme:hen
* raportista tulee ilmetä jokaisen projektiin osallistuneen nimi
* **raportin deadline 22.12. klo 23.59**

## varmista, että commitisi näkyvät githubissa oikein

Koska Githubiin tehtävien commitien määrä (ja laatu) vaikuttaa henkilökohtaisiin pisteisiin, varmista, että olet konfiguroinit email-osoitteesi gitiin ks. [lh1 tehtävä 2](https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/laskarit/1.md#2-githubiin), ja että commitatessasi ryhmäsi repositorioon tunnuksesi näkyy oikein repositorion commit-listalla, ja että tunnuksesi tulee repositorion [contributors](https://github.com/mluukkai/ohjelmistotuotanto2017/graphs/contributors)-listalle.

On suositeltavaa, että jokainen tekee (omalta koneeltaan) heti alussa yhden testicommitin ja tarkastaa, että Git on konfiguroitu oikein.

## commitit kadoksissa

Jos committisi yhteydessä näkyy (gitin email-osoitteen konfiguroinnista huolimatta) harmaa symbooli kuten seuraavista alempi

![](https://github.com/mluukkai/ohtu2017/raw/master/images/commit1.png)

Klikkaa harmaan commitin nimeä katso mikä on email-osoite, joka commitiin liittyy mutta mitä github ei tunnista osoitteeksesi.

![](https://github.com/mluukkai/ohtu2017/raw/master/images/commit2.png)

Lisää osoite _settings_-valikosta:

![](https://github.com/mluukkai/ohtu2017/raw/master/images/commit3.png)