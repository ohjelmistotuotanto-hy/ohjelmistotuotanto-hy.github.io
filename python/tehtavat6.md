---
layout: page
title: Viikko 6
inheader: no
permalink: /python/tehtavat6/
---

## Viikko 6

_Alla olevien tehtävien deadline on maanantaina 9.12. klo 23:59_

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa

- ma 14-16 B221
- ke 14-16 B221

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/6), deadline on poikkeuksellisesti vasta perjantaina 13.12. klo 23:59:00.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md path="python/tehtavat6.md" %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: rebase [versionhallinta]

_Tätä tehtävää ei palauteta mihinkään!_

Lue <http://git-scm.com/book/en/Git-Branching-Rebasing> ja <https://www.atlassian.com/git/tutorials/rewriting-history#git-rebase>

Aikaansaa seuraavankaltainen tilanne

```
------- master
\
 \--- haara
```

"Rebeissaa" haara masteriin, eli aikaansaa seuraava tilanne:

```
------- master
       \
        \--- haara
```

Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

"Mergeä" master vielä haaraan:

```
       \     master
        \--- haara
```

Lopputuloksena pitäisi siis olla lineaarinen historia ja master sekä haara samassa. Varmista jälleen komennolla <code>gitk --all</code> että kaikki on kunnossa.

Poista branch haara. Etsi googlaamalla komento jolla saat tuhottua branchin.

### 2. Kyselykieli NHL-tilastoihin, osa 1

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy-avoin/python-kevat-2021) hakemistosta _koodi/viikko6/query-language_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta ohjelmasta.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat joilla on vähintään 5 maalia ja vähintään 5 syöttöä_.

Koodin onkin luotu hieman valmista kalustoa josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

```python
def main():
    url = "https://nhlstatisticsforohtu.herokuapp.com/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    matcher = And(
        HasAtLeast(5, "goals"),
        HasAtLeast(5, "assists"),
        PlaysIn("PHI")
    )

    for player in stats.matches(matcher):
        print(player)
```

Luokalle `Statistics` on tehty metodi `matches`, joka palauttaa listan niistä pelaajista, joille parametrina annettun olion metodi `matches` palauttaa `True`.

Tutustu ohjelman rakenteeseen.

- Huomioi miten `HasAtLeast`-luokan metodi `matches` käyttää funktiota [getattr](https://docs.python.org/3/library/functions.html#getattr) saadakseen parametrina annetun attribuutin arvon
- Toinen huomioinarvoinen piirre on `And`-luokan konstruktorissa käytetty vaihtuvamittainen parametrilista, jonka tunnista `*`-etuliitteestä. Syntaksin avulla `*matchers` sisältää listan konstruktorille annetuista argumenteista

**Toteuta `matches`-metodin toteuttavat luokat, joiden avulla voit tehdä seuraavat operaatiot:**

- All (tosi kaikille pelaajille)
- Not (parameetrina olevan ehdon negaatio)
- HasFewerThan (HasAtLeast-komennon negaatio eli, esim. on vähemmän kuin 10 maalia)

**HUOM:** `not` on Pythonissa niin kutsuttu avainsana, jonkä käyttö esimerkiksi importissa `from matchers.not import Not` ei onnistu. Tiedostosta kannattaakin käyttää esimeerkiksi nimeä <i>not_matcher.py</i> (kuten <i>and_matcher.py</i>-tiedoston nimen kanssa on tehty).

Kaikille pelaajille tosi ehto _all_ ei ole vielä tämän tehtävän kannalta kovin mielenkiintoinen, sitä pystyy kuitenkin hyödyntämään neljännessä tehtävässä.

Voit tarkistaa toteutuksesi toimivuuden tekemällä kyselyn:

```python
matcher = new And(
    Not(HasAtLeast(1, "goals")),
    PlaysIn("NYR")
)
```

Vastauksena pitäisi olla joukkueen _NYR_ pelaajista ne, joilla ei ole vähintään yht maalia, eli _0 maalia tehneet_:

<pre>
Lias Andersson       NYR           0 +  1 = 1
Boo Nieves           NYR           0 +  0 = 0
Tim Gettinger        NYR           0 +  1 = 1
Libor Hajek          NYR           0 +  4 = 4
</pre>

Kyselyn:

```python
matcher = And(
    HasFewerThan(1, "goals"),
    PlaysIn("NYR")
)
```

Tulisi palauttaa täsmälleen sama lista.

### 3. Kyselykieli NHL-tilastoihin, osa 2

**Toteuta** `matches`-metodin toteuttava luokka `Or`, joka on tosi silloin jos ainakin yksi sen parametrina saamista ehdoista on tosi.

Kyselyn:

```python
matcher = Or(
    HasAtLeast(20, "goals"),
    HasAtLeast(20, "assists")
)
```

Tulee palauttaa ne, joilla on vähintään 20 maalia tai syöttöä, eli seuraava lista:

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

Kyselyn:

```java
matcher = And(
    HasAtLeast(20, "points"),
    Or(
        PlaysIn("NYR"),
        PlaysIn("NYI"),
        PlaysIn("NJD")
    )
)
```

Tulee palauttaa kaikki yli 20 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _NYI_, _NYR_ tai _NJD_. Lista näyttää seuraavalta:

```
Mathew Barzal        NYI           9 + 11 = 20
Artemi Panarin       NYR          12 + 18 = 30
Ryan Strome          NYR           6 + 16 = 22
Taylor Hall          NJD           4 + 17 = 21
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/python/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyseltyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 4. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava new-komennolla uusi olio.

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/python/osa4#pinorakentaja-viikko-6) hengessä _kyselyrakentaja_, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

```python
def main():
    url = "https://nhlstatisticsforohtu.herokuapp.com/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()
    matcher = query.build()

    for player in stats.matches(matcher):
        print(player)
```


Tässä kyselyssä voi ja kannattaa hyödyntää edellisen tehtävän `All`-matcheria.

Seuraavaksi kysely, missä tulostetaan pelaajat, joiden joukkue on _NYR_:

```python
def main():
    url = "https://nhlstatisticsforohtu.herokuapp.com/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.playsIn("NYR").build()

    for player in stats.matches(matcher):
        print(player)
```

Seuraavaksi kysely, missä tulostetaan pelaajat joiden joukkue on _NYR_, joilla on vähintään 5 ja vähemmän kuin 10 maalia:

```python
def main():
    url = "https://nhlstatisticsforohtu.herokuapp.com/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query
        .playsIn("NYR")
        .hasAtLeast(5, "goals")
        .hasFewerThan(10, "goals")
        .build()

    for player in stats.matches(matcher):
        print(player)
```

Pelaajien lista on seuraava:

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

```python
m1 = query
    .playsIn("PHI")
    .hasAtLeast(10, "assists")
    .hasFewerThan(8, "goals")
    .build()

m2 = query
    .playsIn("EDM")
    .hasAtLeast(20, "points")
    .build()

m = query
    .oneOf(m1, m2)
    .build()
```

Pelaajalistan tulisi olla:

```
Jakub Voracek        PHI           6 + 10 = 16
Leon Draisaitl       EDM          16 + 32 = 48
Claude Giroux        PHI           7 + 10 = 17
Sean Couturier       PHI           7 + 11 = 18
Connor McDavid       EDM          18 + 29 = 47
```

Tai sama ilman apumuuttujia:

```python
m = query
    .oneOf(
      query.playsIn("PHI")
          .hasAtLeast(10, "assists")
          .hasFewerThan(8, "goals")
          .build(),
      query.playsIn("EDM")
          .hasAtLeast(20, "points")
          .build()
    )
    .build()
```

Rakentajasi ei ole pakko toimia metodikutsujen syntaksin osalta samalla tavalla kuin esimerkkikoodin. Riittää, että sillä voi jollain tavalla muodostaa _and_- ja _or_-muotoisia kyselyjä.

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä ja niihin on siksi vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...".

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/main/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia.

- Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2019/projects/repositories) joukosta
  - Mielellään sellaisen ryhmän repositorio, jolla ei ole jo viittä pull requestia.
  - Ja luonnollisesti sellinen, jonka koodiin haluat tehdä jotain muutoksia
- [Forkkaa](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) repositorio
- Tee forkattuun repositorioon uusi branch nimellä "muutoksia"
- Tee luomaasi branchiin "tyhjä" [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request): lisää esimerkiksi yksi tyhjä rivi README.md:hen, pushaa uusi branch GitHubiin ja tee branchista pull request.
  - Tyhjän pullrequestin tarkoituksena on varata sinulle paikka kyseisen repositorion muutoksentekijöiden joukosta. Haluamme, että kaikki ryhmät saavat suunilleen tasaisesti pull requesteja, eli jos repositoriossa on niitä jo runsaasti, etsi mielellään jokin muu repositorio.
- Etsi ryhmän lähdekoodista jotain refaktoroitavaa
  - Kyseessä ei tarvitse olla iso muutos, esimerkiksi muuttujan/metodin uudelleennimeäminenkin riittää
- Refaktoroi ja committaa
- Käy katsomassa tekemääsi tyhjää pullrequestia. Mitä tapahtui?
- Rebeissaa (ks. tämän viikon ensimmäinen tehtävä) luomasi branch paikalliseen master branchin päälle. Pushaa. Tapahtuiko pull requestissa muutoksia?
- Otsikoi tekemäsi pullrequest niin, että se kuvaa tekemiäsi muutoksia. Tarkenna otsikon alle mitä teit ja miksi.
- Jos ryhmä pyytää sinua tekemään muutoksia pull requestiisi, tee halutessasi tarvittavat muutokset ja committaa. Päivittyikö pullrequest?
- Kun ryhmä on hyväksynyt muutoksesi, voit poistaa luomasi branchin

Laita palautusrepositorioosi tiedosto _PULL.md_ ja sen sisällöksi linkki pull requestiin.

{% include submission_instructions.md %}
