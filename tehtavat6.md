---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6a/
---

{% include laskari_info.md part=6 %}

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät]({{site.stats_url}}/quiz/6), deadline on poikkeuksellisesti vasta perjantaina 13.12. klo 23:59:00.  

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/python/osa4) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tämän viikon [monivalintatehtävät]({{site.stats_url}}/quiz/6).

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}>.

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

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _koodi/viikko6/query-language_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta ohjelmasta.

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

Kaikille pelaajille tosi ehto _all_ ei ole vielä tämän tehtävän kannalta kovin mielenkiintoinen, sitä pystyy kuitenkin hyödyntämään neljännessä tehtävässä.

Voit tarkistaa toteutuksesi toimivuuden tekemällä kyselyn:

```python
matcher = And(
    Not(HasAtLeast(1, "goals")),
    PlaysIn("NYR")
)
```

Vastauksena pitäisi olla joukkueen _NYR_ pelaajista ne, joilla ei ole vähintään yhtä maalia, eli _0 maalia tehneet_:

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
    HasAtLeast(40, "goals"),
    HasAtLeast(60, "assists")
)
```

Tulee palauttaa ne, joilla on vähintään 40 maalia tai 60 syöttöä, eli seuraava lista:

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

Kyselyn:

```java
matcher = And(
    HasAtLeast(50, "points"),
    Or(
        PlaysIn("NYR"),
        PlaysIn("NYI"),
        PlaysIn("BOS")
    )
)
```

Tulee palauttaa kaikki yli 50 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _NYI_, _NYR_ tai _BOS_. Lista näyttää seuraavalta:

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

    matcher = query.playsIn("NYR").hasAtLeast(5, "goals").hasFewerThan(10, "goals") .build()

    for player in stats.matches(matcher):
        print(player)
```

Pelaajien lista on seuraava:

```
Greg McKegg          NYR           5 +  4 = 9
Jacob Trouba         NYR           7 + 20 = 27
Brendan Lemieux      NYR           6 + 12 = 18
Adam Fox             NYR           8 + 34 = 42
Brett Howden         NYR           9 + 10 = 19
```

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella.

Tässä tehtävässä riittää, että kyselyrakentaja osaa muodostaa _and_-periaatteella yhdistettyjä ehtoja.

Pitkät metodikutsuketjut, esim. 

```python
matcher = query.playsIn("NYR").hasAtLeast(5, "goals").hasFewerThan(10, "goals") .build()
```

ovat luettavuudeltaan hieman ikäviä, jos ne kirjoitetaan monelle riville. Usein ne onkin tapana jakaa "kutsu per rivi"-periaatteella:

```python
    matcher = (
      query  
        .playsIn("NYR")  
        .hasAtLeast(5, "goals")  
        .hasFewerThan(10, "goals")  
        .build()
    )
```

Python ikävä kyllä edellyttää tässä "ylimääräisten" sulkujen käyttöä.

### 5. Parannettu kyselykieli, osa 2

Laajennetaan kyselyrakentajaa siten, että sen avulla voi muodostaa myös _or_-ehdolla muodostettuja kyselyjä. Or-ehdon sisältävä kysely voi olla muodostettu esim. seuraavasti:

```python
m1 = (
  query
    .playsIn("PHI")
    .hasAtLeast(10, "assists")
    .hasFewerThan(5, "goals")
    .build()
)

m2 = (
  query
    .playsIn("EDM")
    .hasAtLeast(40, "points")
    .build()
)

matcher = query
    .oneOf(m1, m2)
    .build()
```

Pelaajalistan tulisi olla:

```
Justin Braun         PHI           3 + 16 = 19
Robert Hagg          PHI           3 + 10 = 13
Philippe Myers       PHI           4 + 12 = 16
Ryan Nugent-Hopkins  EDM          22 + 39 = 61
Leon Draisaitl       EDM          43 + 67 = 110
Connor McDavid       EDM          34 + 63 = 97
```

Tai sama ilman apumuuttujia:

```python
matcher = (
  query
    .oneOf(
      query.playsIn("PHI")
          .hasAtLeast(10, "assists")
          .hasFewerThan(5, "goals")
          .build(),
      query.playsIn("EDM")
          .hasAtLeast(40, "points")
          .build()
    )
    .build()
)
```

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä ja niihin on siksi vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...".

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia.

- Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2019/projects/repositories) joukosta
  - Mielellään sellaisen ryhmän repositorio, jolla ei ole jo viittä pull requestia.
  - Ja luonnollisesti sellinen, jonka koodiin haluat tehdä jotain muutoksia
- [Forkkaa](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) repositorio
- Tee forkattuun repositorioon uusi branch nimellä "muutoksia"
- Tee luomaasi branchiin "tyhjä" [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request): lisää esimerkiksi yksi tyhjä rivi README.md:hen, pushaa uusi branch GitHubiin ja tee branchista pull request.
  - Tyhjän pull requestin tarkoituksena on varata sinulle paikka kyseisen repositorion muutoksentekijöiden joukosta. Haluamme, että kaikki ryhmät saavat suunilleen tasaisesti pull requesteja, eli jos repositoriossa on niitä jo runsaasti, etsi mielellään jokin muu repositorio.
- Etsi ryhmän lähdekoodista jotain refaktoroitavaa
  - Kyseessä ei tarvitse olla iso muutos, esimerkiksi muuttujan/metodin uudelleennimeäminenkin riittää
- Refaktoroi ja committaa
- Käy katsomassa tekemääsi tyhjää pull requestia. Mitä tapahtui?
- Rebeissaa (ks. tämän viikon ensimmäinen tehtävä) luomasi branch paikalliseen master branchin päälle. Pushaa. Tapahtuiko pull requestissa muutoksia?
- Otsikoi tekemäsi pull request niin, että se kuvaa tekemiäsi muutoksia. Tarkenna otsikon alle mitä teit ja miksi.
- Jos ryhmä pyytää sinua tekemään muutoksia pull requestiisi, tee halutessasi tarvittavat muutokset ja committaa. Päivittyikö pull request?
- Kun ryhmä on hyväksynyt muutoksesi, voit poistaa luomasi branchin

Laita palautusrepositorioosi tiedosto _PULL.md_ ja sen sisällöksi linkki pull requestiin.

{% include submission_instructions.md %}