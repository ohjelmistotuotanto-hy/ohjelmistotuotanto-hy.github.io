---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6/
---

## Viikko 6

**HUOM**: [kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. 

*Alla olevien tehtävien deadline on maanantaina 9.12. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ma 14-16 B221 
- ke 14-16 B221

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/6), deadline on poikkeuksellisesti vasta perjantaina 13.12. klo 23:59:00.  

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat6.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: rebase [versionhallinta]

_Tätä tehtävää ei palauteta mihinkään!_

Lue <http://git-scm.com/book/en/Git-Branching-Rebasing> ja <https://www.atlassian.com/git/tutorials/rewriting-history#git-rebase>

Aikaansaa seuraavankaltainen tilanne

<pre>
------- master
\
 \--- haara
</pre>

"rebeissaa" haara masteriin, eli aikaansaa seuraava tilanne:

<pre>
------- master
       \
        \--- haara
</pre>

Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

"mergeä" master vielä haaraan:

<pre>
-------
       \     master
        \--- haara
</pre>

Lopputuloksena pitäisi siis olla lineaarinen historia ja master sekä haara samassa. Varmista jälleen komennolla <code>gitk --all</code> että kaikki on kunnossa.

Poista branch haara. Etsi googlaamalla komento jolla saat tuhottua branchin.

### 2. Kyselykieli NHLStatistics-ohjelmaan, osa 1

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistosta _koodi/viikko6/QueryLanguage_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta  ohjelmasta.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat joilla on vähintään 5 maalia ja vähintään 5 syöttöä_.

Koodin onkin luotu hieman valmista kalustoa josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhl27112019.herokuapp.com/players.txt"));
 
    Matcher m = new And( new HasAtLeast(5, "goals"),
                         new HasAtLeast(5, "assists"),
                         new PlaysIn("PHI")
    );
 
    for (Player player : stats.matches(m)) {
        System.out.println( player );
    }
}
```

Luokalle _Statistics_ on tehty metodi _matches_, joka palauttaa listan niistä pelaajista, joille parametrina annettu _Matcher_-rajapinnan toteuttava olio palauttaa _true_

HUOM: Tilastotiedot haetaan palvelimelta, josta on olemassa kaksi erillistä versiota.
- Osoitteesta _https://nhlstatisticsforohtu.herokuapp.com/players.txt_ löytyvät ajantasaiset tilastotiedot
- Osoitteesta _https://nhl27112019.herokuapp.com/players.txt_ löytyvät 27.11.2019 tiedot 
- Seuraavassa olevat esimerkkitulostukset ovat marraskuun lopun tilastoista

Tutustu ohjelman rakenteeseen

* huomioi miten _HasAtLeast_ käyttää Javan ns. reflektio-ominaisuutta kutsuessaan merkkijonoparametria vastaavaa metodia
* toinen huomioinarvoinen piirre on _And_-luokan konstruktorissa käytetty vaihtuvamittainen parametrilista, eli "vararg", ks. lisää esim: <https://www.javatpoint.com/varargs>

**Tee rajapinnan _Matcher_ toteuttavat luokat, joiden avulla voit tehdä operaatiot**

* All (tosi kaikille pelaajille)
* Not (parameetrina olevan ehdon negaatio)
* HasFewerThan (HasAtLeast-komennon negaatio eli, esim. on vähemmän kuin 10 maalia)

Kaikille pelaajille tosi ehto _all_ ei ole vielä tämän tehtävän kannalta kovin mielenkiintoinen, sitä pystyy kuitenkin hyödyntämään neljännessä tehtävässä.

Voit tarkistaa toteutuksesi toimivuuden tekemällä kyselyn

```java
Matcher m = new And( 
    new Not( new HasAtLeast(1, "goals") ), 
    new PlaysIn("NYR")
);
```

vastauksena pitäisi olla joukkueen _NYR_ pelaajista ne, joilla ei ole vähintään yht maalia, eli *0 maalia tehneet*:

<pre>
Lias Andersson       NYR           0 +  1 = 1
Boo Nieves           NYR           0 +  0 = 0
Tim Gettinger        NYR           0 +  1 = 1
Libor Hajek          NYR           0 +  4 = 4
</pre>

Kyselyn

```java
Matcher m = new And( 
    new HasFewerThan(1, "goals"), 
    new PlaysIn("NYR")
);
```

tulisi palauttaa täsmälleen sama lista.

### 3. Kyselykieli NHLStatistics-ohjelmaan, osa 2

**Tee** rajapinnan _Matcher_ toteuttava _Or_, joka on tosi silloin jos ainakin yksi sen parametrina saamista ehdoista on tosi.

Kyselyn

```java
Matcher m = new Or( new HasAtLeast(20, "goals"),
                    new HasAtLeast(20, "assists")
);   
```

tulee palauttaa ne, joilla on vähintään 20 maalia tai syöttöä, eli seuraava lista

```
Leon Draisaitl       EDM          16 + 32 = 48
John Carlson         WSH           8 + 28 = 36
Jonathan Huberdeau   FLA          10 + 20 = 30
Connor McDavid       EDM          18 + 29 = 47
David Pastrnak       BOS          23 + 16 = 39
Aleksander Barkov    FLA           7 + 22 = 29
Logan Couture        SJS           5 + 20 = 25
Brad Marchand        BOS          17 + 25 = 42
```

Kyselyn 

```java
Matcher m = new And(
    new HasAtLeast(20, "points"),
    new Or( 
        new PlaysIn("NYR"),
        new PlaysIn("NYI"),
        new PlaysIn("NJD")
    )
); 
```

tulee palauttaa kaikki yli 20 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _NYI_, _NYR_ tai _NJD_. Lista näyttää seuraavalta: 

```
Mathew Barzal        NYI           9 + 11 = 20
Artemi Panarin       NYR          12 + 18 = 30
Ryan Strome          NYR           6 + 16 = 22
Taylor Hall          NJD           4 + 17 = 21
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyseltyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 4. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava new-komennolla uusi olio. 

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/osa4#pinorakentaja-viikko-6) hengessä *kyselyrakentaja*, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhl27112019.herokuapp.com/players.txt"));
    
    QueryBuilder query = new QueryBuilder();
    Matcher m = query.build();

    for (Player player : stats.matches(m)) {
        System.out.println( player );
    }
}
```     

Tässä kyselyssä voi ja kannattaa hyödyntää edellisen tehtävän _All_-matcheria.

Seuraavaksi kysely, missä tulostetaan pelaajat, joiden joukkue on NYR

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhl27112019.herokuapp.com/players.txt"));
 
    QueryBuilder query = new QueryBuilder();
 
    Matcher m = query.playsIn("NYR").build();
 
    for (Player player : stats.matches(m)) {
        System.out.println( player );
    }
}
```

Seuraavaksi kysely, missä tulostetaan pelaajat joiden joukkue on NYR, joilla on vähintään 5 ja vähemmän kuin 10 maalia:

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhl27112019.herokuapp.com/players.txt"));
 
    QueryBuilder query = new QueryBuilder();
 
    Matcher m = query.playsIn("NYR")
                     .hasAtLeast(5, "goals")
                     .hasFewerThan(10, "goals").build();
 
    for (Player player : stats.matches(m)) {
        System.out.println( player );
    }
}
```

Pelaajien lista on seuraava

```
Chris Kreider        NYR           6 +  7 = 13
Tony DeAngelo        NYR           7 + 10 = 17
Vladislav Namestnikov NYR, OTT      6 +  6 = 12
Ryan Strome          NYR           6 + 16 = 22
Kaapo Kakko          NYR           6 +  4 = 10
Filip Chytil         NYR           7 +  2 = 9
```

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella. 

Tässä tehtävässä riittää, että kyselyrakentaja osaa muodostaa _and_-periaatteella yhdistettyjä ehtoja.

### 5. Parannettu kyselykieli, osa 2

Laajennetaan kyselyrakentajaa siten, että sen avulla voi muodostaa myös _or_-ehdolla muodostettuja kyselyjä. Or-ehdon sisältävä kysely voi olla muodostettu esim. seuraavasti:

``` java
Matcher m1 = query.playsIn("PHI")
          .hasAtLeast(10, "assists")
          .hasFewerThan(8, "goals").build();

Matcher m2 = query.playsIn("EDM")
          .hasAtLeast(20, "points").build();

Matcher m = query.oneOf(m1, m2).build();
```

Pelaajalistan tulisi olla:

<pre>
Jakub Voracek        PHI           6 + 10 = 16
Leon Draisaitl       EDM          16 + 32 = 48
Claude Giroux        PHI           7 + 10 = 17
Sean Couturier       PHI           7 + 11 = 18
Connor McDavid       EDM          18 + 29 = 47
</pre>

Tai sama ilman apumuuttujia:

``` java
Matcher m = query.oneOf(
    query.playsIn("PHI")
        .hasAtLeast(10, "assists")
        .hasFewerThan(8, "goals").build(),

    query.playsIn("EDM")
        .hasAtLeast(20, "points").build()
).build();
```

Rakentajasi ei ole pakko toimia metodikutsujen syntaksin osalta samalla tavalla kuin esimerkkikoodin. Riittää, että sillä voi jollain tavalla muodostaa _and_- ja _or_-muotoisia kyselyjä.

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä ja niihin on siksi vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...". 

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten  tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia. 

* Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2019/projects/repositories) joukosta
    - mielellään sellaisen ryhmän repositorio, jolla ei ole jo viittä pull requestia. 
    - ja luonnollisesti sellinen, jonka koodiin haluat tehdä jotain muutoksia
* [Forkkaa](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) repositorio
* Tee forkattuun repositorioon uusi branch nimellä "muutoksia" 
* Tee luomaasi branchiin "tyhjä" [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request): lisää esimerkiksi yksi tyhjä rivi README.md:hen, pushaa uusi branch GitHubiin ja tee branchista pull request. 
    - Tyhjän pullrequestin tarkoituksena on varata sinulle paikka kyseisen repositorion muutoksentekijöiden joukosta. Haluamme, että kaikki ryhmät saavat suunilleen tasaisesti pull requesteja, eli jos repositoriossa on niitä jo runsaasti, etsi mielellään jokin muu repositorio.
* Etsi ryhmän lähdekoodista jotain refaktoroitavaa
  * kyseessä ei tarvitse olla iso muutos, esimerkiksi muuttujan/metodin uudelleennimeäminenkin riittää
* Refaktoroi ja committaa
* Käy katsomassa tekemääsi tyhjää pullrequestia. Mitä tapahtui?
* Rebeissaa (ks. tämän viikon ensimmäinen tehtävä) luomasi branch paikalliseen master branchin päälle. Pushaa. Tapahtuiko pull requestissa muutoksia?
* Otsikoi tekemäsi pullrequest niin, että se kuvaa tekemiäsi muutoksia. Tarkenna otsikon alle mitä teit ja miksi.
* Jos ryhmä pyytää sinua tekemään muutoksia pull requestiisi, tee halutessasi tarvittavat muutokset ja committaa. Päivittyikö pullrequest?
* Kun ryhmä on hyväksynyt muutoksesi, voit poistaa luomasi branchin

Laita palautusrepositorioosi tiedosto PULL.md ja sen sisällöksi linkki pull requestiin.

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
