---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6/
---

## Viikko 6

<div class="important">
  DRAFT: hieman kesken...
</div>

**HUOM**: [kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. 

*Alla olevien tehtävien deadline on maanantaina 9.12. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ma 14-16 B221 
- ke 14-16 B221

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/6), ilmestyvät vasta keskiviikkona 4.12. ja niiden deadline on keskiviikkona 11.12. klo 23:59:00.  

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat6.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: stash [versionhallinta]

_Tätä tehtävää ei palauteta mihinkään!_

Lue [http://git-scm.com/book/en/Git-Tools-Stashing](http://git-scm.com/book/en/Git-Tools-Stashing) kohtaan Un-applying a Stash asti.

Oletetaan että olet repositoriossa, jossa on ainakin kaksi branchia: master ja joku toinen (kutsutaan sitä tässä nimellä __toinen__).

* ollessasi master-branchissa tee branchissa oleviin tiedostoihin muutoksia, joita lisäät staging-alueelle ja joitain muutoksia joita et vielä "äddää", komennon _git status_ tuloksen tulee näyttää siis suunilleen seuraavalta

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   README.md
    modified:   src/main/java/Main.java

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   src/main/java/Olutvarasto.java              
```
 
* pomosi käskee sinua välittömästi tekemään pari muutosta branchiin __toinen__. Et kuitenkaan halua vielä comittoida masterissa olevia muutoksia
* jos siirryt branchiin __toinen__ tekemättä comittia, tulee hirveä sotku, sillä muutokset pysyvät muutoksina toisessakin branchissa
* **git stash** pelastaa tästä tilanteesta, eli stashaa masterissa olevat muutoset
  * kokeile ennen ja jälkeen stash-komennon komentoa <code>git status</code>
* siirry branchiin toinen, tee sinne joku muutos jonka committaat
* palaa jälleen masteriin
* palauta stashatyt muutokset komennolla <code>git stash apply</code>
  * varmista että muutokset palasivat
  * kuten huomaat, staging-alueelle jo lisätty muutos ei palaa staging-alueelle, vaan joudut lisäämään sen uudelleen
  * jos edellisessä komento olisi annettu muodossa <code>git stash apply --index</code>, olisi tilanne palautunut täysin ennalleen


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

Kaikille pelaajille tosi ehto _all_ ei ole vielä tämän tehtävän kannalta kovin mielenkiintoinen, sitä pystyy kuitenkin hyödyntämään seuraavassa tehtävässä.

Voit tarkistaa toteutuksesi toimivuuden tekemällä kyselyn

```java
Matcher m = new And( 
    new Not( new HasAtLeast(1, "goals") ), 
    new PlaysIn("NYR")
);
```

vastauksena pitäisi olla joukkueen _NYR_ pelaajista ne joilla ei ole vähintään yht maalia, eli *0 maalia tehneet*:

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

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella. 

Tässä tehtävässä riittää, että kyselyrakentajasi osaa muodostaa _and_-periaatteella yhdistettyjä ehtoja.

### 5. Parannettu kyselykieli, osa 2

Laajennetaan kyselyrakentajaa siten, että sen avulla voi muodostaa myös _or_-ehdolla muodostettuja kyselyjä. Or-ehdon sisältävä kysely voi olla muodostettu esim. seuraavasti:

``` java
Matcher m1 = query.playsIn("PHI")
                  .hasAtLeast(5, "goals")
                  .hasFewerThan(10, "assists").build();
 
Matcher m2 = query.playsIn("EDM")
                  .hasAtLeast(20, "points").build();
 
Matcher m = query.oneOf(m1, m2).build();
```

Pelaajalistan tulisi olla:

<pre>
Taylor Hall          EDM          27 + 53 = 80
Jordan Eberle        EDM          28 + 37 = 65
Matt Read            PHI          22 + 18 = 40
Vincent Lecavalier   PHI          20 + 17 = 37
</pre>

Tai kaikki sama ilman apumuuttujia:

``` java

Matcher m = query.oneOf(
                        query.playsIn("PHI")
                             .hasAtLeast(5, "goals")
                             .hasFewerThan(10, "assists").build(),
 
                        query.playsIn("EDM")
                             .hasAtLeast(20, "points").build()
                       ).build();
```

Rakentajasi ei ole pakko toimia metodikutsujen syntaksin osalta samalla tavalla. Riittää, että sillä voi jollain tavalla muodostaa _and_- ja _or_-muotoisia kyselyjä.

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun osa-alueitakin rupeaa jo kertymään useita. On vaikeaa olla joka paikan höylä ja jotkin osa-alueet eivät välttämättä edes miellytä ja niihin on siksi vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...". Ehkäpä et edes ajatellut asiaa, mutta joku silti osoittaa, että puurakenne olisi tässä tehokkaampi ratkaisu. Mokoma tekee vielä korjauksetkin puolestasi lähdekoodiin ja pistää pullrequestin. Onneksi julkaisit projektisi Open Sourcena!

Kontribuutiotasi kaivataan! GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikki repositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi tehoton algoritmi mielestäsi paremmalla ratkaisulla. Useilla repositorioilla on valmiit ohjeet contribuuttamiseen Contributing.md:ssä repositorion juuressa. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella contribuuttamista ja vieraan koodin refaktorointia. 

* Valitse yksi ryhmä [miniprojektien](https://studies.cs.helsinki.fi/courses/ohtu2018/projects/repositories) joukosta
* Forkkaa sellaisen ryhmän repositorio, jolla ei ole jo viittä pull requestia. Jos ryhmällä on jo viisi pullrequestia, valitse jokin toinen ryhmä
* Tee uusi branch nimellä "muutoksia"
* Tee luomaasi branchiin "tyhjä" pull request: Eli lisää vaikka yksi tyhjä rivi README.md:hen, pushaa uusi branch GitHubiin ja tee branchista pull request. Tyhjän pullrequestin tarkoituksena on varata sinulle paikka kyseisen repositorion contribuuttajien joukosta. Haluamme, että kaikki ryhmät saavat tasaisesti pullrequesteja ja siksi olemme rajanneet maksimimäärän viiteen. Jos kaikki ryhmät ovat saaneet jo viisi pullrequestia niin valitse joukosta mieleisesi
* Etsi ryhmän lähdekoodista jotain refaktoroitavaa
  * kyseessä ei tarvitse olla iso muutos 
* Refaktoroi ja committaa
* Käy katsomassa tekemääsi tyhjää pullrequestia. Mitä tapahtui?
* [Rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) luomasi branch paikalliseen master branchin päälle. Pushaa. Tapahtuiko pull requestissa muutoksia?
* Otsikoi tekemäsi pullrequest niin, että se kuvaa tekemiäsi muutoksia. Tarkenna otsikon alle mitä teit ja miksi.
* Jos ryhmä pyytää sinua tekemään muutoksia pullrequestiisi, tee tarvittavat muutokset ja committaa. Päivittyikö pullrequest?
* Kun ryhmä on hyväksynyt muutoksesi, voit poistaa luomasi branchin

Laita palautusrepositorioosi tiedosto PULL.md ja sen sisällöksi linkki pullrequestiin.


### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
