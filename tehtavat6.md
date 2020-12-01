---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6/
---

## Viikko 6

*Alla olevien tehtävien deadline on maanantaina 7.12. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä zoom-pajassa:

- Maanantai 14-16 [zoom](https://helsinki.zoom.us/j/63962392550?pwd=RzluTjZWYmNLb0g4bjRxb0ZlckRkUT09)
- Perjantai 10-12 [zoom](https://helsinki.zoom.us/j/64396759243)


Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/6), deadline on poikkeuksellisesti vasta perjantaina 13.12. klo 23:59:00.  

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/main/tehtavat6.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>

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

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistosta _koodi/viikko6/QueryLanguage_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta  ohjelmasta.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat joilla on vähintään 5 maalia ja vähintään 5 syöttöä_.

Koodin onkin luotu hieman valmista kalustoa josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhlstatisticsforohtu.herokuapp.com/players.txt"));
 
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
Steven Fogarty       NYR           0 +  0 = 0
Boo Nieves           NYR           0 +  0 = 0
Libor Hajek          NYR           0 +  5 = 5
Tim Gettinger        NYR           0 +  1 = 1
Lias Andersson       NYR           0 +  1 = 1
Henrik Lundqvist     NYR           0 +  0 = 0
Igor Shesterkin      NYR           0 +  0 = 0
Alexandar Georgiev   NYR           0 +  0 = 0
</pre>

Kyselyn

```java
Matcher m = new And( 
    new HasFewerThan(1, "goals"), 
    new PlaysIn("NYR")
);
```

tulisi palauttaa täsmälleen sama lista.

Ehdon `All` tulisi siis olla tosi kaikille pelaajille., Voit varmistaa sen toimivuudet kokeilemalla seuraavaa:

```java
System.out.println(stats.matches(new All()).size());
```

Komennon tulisi tulostaa kaikkien pelaajien lukumäärä, joka on_964_.

Ehto `All` ei ole yksistään kovin hyödyllinen, mutta tulemme tarvitseman sitä pian.

### 3. Kyselykieli NHLStatistics-ohjelmaan, osa 2

**Tee** rajapinnan _Matcher_ toteuttava _Or_, joka on tosi silloin jos ainakin yksi sen parametrina saamista ehdoista on tosi.

Kyselyn

```java       
Matcher m = new Or( new HasAtLeast(40, "goals"),
                    new HasAtLeast(60, "assists")
);  
```

tulee palauttaa ne, joilla on vähintään 20 maalia tai syöttöä, eli seuraava lista

```
Mika Zibanejad       NYR          41 + 34 = 75
Artemi Panarin       NYR          32 + 63 = 95
David Pastrnak       BOS          48 + 47 = 95
Auston Matthews      TOR          47 + 33 = 80
Alex Ovechkin        WSH          48 + 19 = 67
John Carlson         WSH          15 + 60 = 75
Leon Draisaitl       EDM          43 + 67 = 110
Connor McDavid       EDM          34 + 63 = 97
```

Kyselyn 

```java
Matcher m = new And(
    new HasAtLeast(50, "points"),
    new Or( 
        new PlaysIn("NYR"),
        new PlaysIn("NYI"),
        new PlaysIn("BOS")
    )
); 
```

tulee palauttaa kaikki yli 20 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _NYI_, _NYR_ tai _NJD_. Lista näyttää seuraavalta: 

```
Brock Nelson         NYI          26 + 28 = 54
Mathew Barzal        NYI          19 + 41 = 60
Ryan Strome          NYR          18 + 41 = 59
Mika Zibanejad       NYR          41 + 34 = 75
Tony DeAngelo        NYR          15 + 38 = 53
Artemi Panarin       NYR          32 + 63 = 95
Patrice Bergeron     BOS          31 + 25 = 56
Brad Marchand        BOS          28 + 59 = 87
David Pastrnak       BOS          48 + 47 = 95
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyseltyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 4. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava new-komennolla uusi olio. 

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/osa4#pinorakentaja-viikko-6) hengessä *kyselyrakentaja*, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhlstatisticsforohtu.herokuapp.com/players.txt"));
    
    QueryBuilder query = new QueryBuilder();
    Matcher m = query.build();

    for (Player player : stats.matches(m)) {
        System.out.println( player );
    }
}
```     

Tässä kyselyssä voi ja kannattaa hyödyntää aiemmin tehtyä _All_-matcheria.

Seuraavaksi kysely, missä tulostetaan pelaajat, joiden joukkue on NYR

``` java
public static void main(String[] args) {
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhlstatisticsforohtu.herokuapp.com/players.txt"));
 
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
    Statistics stats = new Statistics(new PlayerReaderImpl("https://nhlstatisticsforohtu.herokuapp.com/players.txt"));
 
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
Greg McKegg          NYR           5 +  4 = 9
Jacob Trouba         NYR           7 + 20 = 27
Brendan Lemieux      NYR           6 + 12 = 18
Adam Fox             NYR           8 + 34 = 42
Brett Howden         NYR           9 + 10 = 19
```

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella. 

Tässä tehtävässä riittää, että kyselyrakentaja osaa muodostaa _and_-periaatteella yhdistettyjä ehtoja.

### 5. Parannettu kyselykieli, osa 2

Laajennetaan kyselyrakentajaa siten, että sen avulla voi muodostaa myös _or_-ehdolla muodostettuja kyselyjä. Or-ehdon sisältävä kysely voi olla muodostettu esim. seuraavasti:

``` java
QueryBuilder query = new QueryBuilder();
Matcher m1 = query.playsIn("PHI")
          .hasAtLeast(10, "assists")
          .hasFewerThan(5, "goals").build();

Matcher m2 = query.playsIn("EDM")
          .hasAtLeast(40, "points").build();

Matcher m = query.oneOf(m1, m2).build();
```

Pelaajalistan tulisi olla:

<pre>
Justin Braun         PHI           3 + 16 = 19
Robert Hagg          PHI           3 + 10 = 13
Philippe Myers       PHI           4 + 12 = 16
Ryan Nugent-Hopkins  EDM          22 + 39 = 61
Leon Draisaitl       EDM          43 + 67 = 110
Connor McDavid       EDM          34 + 63 = 97
</pre>

Tai sama ilman apumuuttujia:

``` java
Matcher m = query.oneOf(
    query.playsIn("PHI")
        .hasAtLeast(10, "assists")
        .hasFewerThan(5, "goals").build(),

    query.playsIn("EDM")
        .hasAtLeast(40, "points").build()
).build();
```

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä ja niihin on siksi vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...". 

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten  tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/main/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia. 

* Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2020/projects/repositories) joukosta
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

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>
