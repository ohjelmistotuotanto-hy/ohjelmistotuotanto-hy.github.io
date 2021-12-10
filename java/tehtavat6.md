---
layout: page
title: Viikko 6
inheader: no
permalink: /java/tehtavat6/
---

{% include laskari_info.md part=6 %}

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/java/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät]({{site.stats_url}}/quiz/6), deadline on poikkeuksellisesti vasta perjantaina 13.12. klo 23:59:00.  

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md path="/tehtavat6.md" %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}>

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

[Kurssirepositorion]({{site.java_exercise_repo_url}}) hakemistosta _koodi/viikko6/QueryLanguage_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta  ohjelmasta.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat joilla on vähintään 5 maalia ja vähintään 5 syöttöä_.

Koodiin onkin luotu hieman valmista kalustoa josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

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
* Not (parametrina olevan ehdon negaatio)
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
Tony DeAngelo        NYR          0  + 1  = 1
Tim Gettinger        NYR          0  + 0  = 0
Tarmo Reunanen       NYR          0  + 1  = 1
Zac Jones            NYR          0  + 4  = 4
Justin Richards      NYR          0  + 1  = 1
Keith Kinkaid        NYR          0  + 0  = 0
Igor Shesterkin      NYR          0  + 0  = 0
Alexandar Georgiev   NYR          0  + 0  = 0
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

Komennon tulisi tulostaa kaikkien pelaajien lukumäärä, joka on __964__.

Ehto `All` ei ole yksistään kovin hyödyllinen, mutta tulemme tarvitseman sitä pian.

### 3. Kyselykieli NHLStatistics-ohjelmaan, osa 2

**Tee** rajapinnan _Matcher_ toteuttava _Or_, joka on tosi silloin jos ainakin yksi sen parametrina saamista ehdoista on tosi.

Kyselyn

```java       
Matcher m = new Or( new HasAtLeast(30, "goals"),
                    new HasAtLeast(50, "assists")
);  
```

tulee palauttaa ne, joilla on vähintään 30 maalia tai 50 syöttöä, eli seuraava lista

```
Auston Matthews      TOR          41 + 25 = 66
Patrick Kane         CHI          15 + 51 = 66
Alex DeBrincat       CHI          32 + 24 = 56
Mikko Rantanen       COL          30 + 36 = 66
Leon Draisaitl       EDM          31 + 53 = 84
Connor McDavid       EDM          33 + 72 = 105
```

Kyselyn 

```java
Matcher m = new And(
    new HasAtLeast(40, "points"),
    new Or( 
        new PlaysIn("NYR"),
        new PlaysIn("NYI"),
        new PlaysIn("BOS")
    )
); 
```

Tulee palauttaa kaikki vähintään 40 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _NYI_, _NYR_ tai _BOS_. Lista näyttää seuraavalta:

```
Mathew Barzal        NYI          17 + 28 = 45
Ryan Strome          NYR          14 + 35 = 49
Mika Zibanejad       NYR          24 + 26 = 50
Pavel Buchnevich     NYR          20 + 28 = 48
Artemi Panarin       NYR          17 + 41 = 58
Adam Fox             NYR          5  + 42 = 47
Patrice Bergeron     BOS          23 + 25 = 48
David Krejci         BOS          8  + 36 = 44
Brad Marchand        BOS          29 + 40 = 69
David Pastrnak       BOS          20 + 28 = 48
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/java/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyseltyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 4. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava new-komennolla uusi olio. 

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/java/osa4#pinorakentaja-viikko-6) hengessä *kyselyrakentaja*, jonka avulla voit luoda Matcher-olioita.

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
Brendan Smith        NYR          5  + 5  = 10
Kevin Rooney         NYR          8  + 6  = 14
Adam Fox             NYR          5  + 42 = 47
Filip Chytil         NYR          8  + 14 = 22
K'Andre Miller       NYR          5  + 7  = 12
Kaapo Kakko          NYR          9  + 8  = 17
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
Travis Sanheim       PHI          3  + 12 = 15
Philippe Myers       PHI          1  + 10 = 11
Tyson Barrie         EDM          8  + 40 = 48
Leon Draisaitl       EDM          31 + 53 = 84
Connor McDavid       EDM          33 + 72 = 105
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

On mahdollista ja jopa todennäköistä että ensimmäinen ratkaisusi ei toimi jos apumuuttujia ei käytetä. Mieti tarkkaan missä vika ja yritä korjata tilanne. Vaadittava muutos ei ole iso.

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä ja niihin on siksi vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...". 

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten  tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia. 

* Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2021/projects/repositories) joukosta
    - mielellään sellaisen ryhmän repositorio, jolla ei ole jo viittä pull requestia. 
    - ja luonnollisesti sellainen, jonka koodiin haluat tehdä jotain muutoksia
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

{% include submission_instructions.md %}
