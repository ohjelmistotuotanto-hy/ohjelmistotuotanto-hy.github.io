---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6/
---

{% include laskari_info.md part=6 %}

Tehtävässä 1 jatketaan Gitin harjoittelua, tehtävä ei näy palautuksissa mitenkään.

Tehtävät 2-5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

Tehtävässä 6 tutustutaan GitHubin pull request -mekanismiin ja tehdään sen avulla pull request johonkin miniprojektiin. Tehtävä tehdään suoraan GitHubiin.

Tämän viikon [monivalintatehtävät]({{site.stats_url}}/quiz/6).

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 2-5 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, sinne tehtävän hakemiston viikko6 sisälle.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: rebase [versionhallinta]

_Tätä tehtävää ei palauteta mihinkään!_

Olemme jo törmänneet parissa aiemmassa tehtävässä ([viikko 1, tehtävä 11](http://localhost:4000/tehtavat1#11-github-actions-osa-3) ja [ja viikko 2 tehtävä 9](http://localhost:4000/tehtavat2/#9-git-ep%C3%A4ajantasaisen-kloonin-pushaaminen-versionhallinta)) Gitin käsitteeseen *rebase*. Otetaan nyt selvää tarkemmin mistä on kysymys.

Lue <https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase> tai/ja <http://git-scm.com/book/en/Git-Branching-Rebasing>.

Aikaansaa seuraavankaltainen tilanne:

```
------- main
\
 \--- haara
```

"Rebeissaa" haara mainiin, eli aikaansaa seuraava tilanne:

```
------- main
       \
        \--- haara
```

Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

"Mergeä" main vielä haaraan:

```
       \     main
        \--- haara
```

Lopputuloksena pitäisi siis olla lineaarinen historia ja main sekä haara samassa. Varmista jälleen komennolla <code>gitk --all</code> että kaikki on kunnossa.

Poista branch haara. Etsi googlaamalla komento, jolla saat tuhottua branchin.

Mikä on rebase-komennon käyttötarkoitus? Atlassianin [git-ohje](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) perustelee asiaa näin

> The primary reason for rebasing is to maintain a linear project history. For example, consider a situation where the main branch has progressed since you started working on a feature branch. You want to get the latest updates to the main branch in your feature branch, but you want to keep your branch's history clean so it appears as if you've been working off the latest main branch. This gives the later benefit of a clean merge of your feature branch back into the main branch. Why do we want to maintain a "clean history"? The benefits of having a clean history become tangible when performing Git operations to investigate the introduction of a regression.

### 2. Kyselykieli NHL-tilastoihin, osa 1

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _viikko6/query-language_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta ohjelmasta.
- Kopioi projekti palatusrepositorioosi, hakemiston viikko6 sisälle.
- Tätä tehtävää tehdessä luentomateriaalin [Gutenberg-lukija](https://ohjelmistotuotanto-hy.github.io/osa4/#ep%C3%A4triviaalin-copypasten-poistaminen-strategy-patternin-avulla-viikko-5) voi olla eräs inspiraation lähde.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat, joilla on vähintään 5 maalia ja vähintään 20 syöttöä_.

Koodin onkin luotu hieman valmista kalustoa, josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

```python
def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2022-23/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    matcher = And(
        HasAtLeast(5, "goals"),
        HasAtLeast(20, "assists"),
        PlaysIn("PHI")
    )

    for player in stats.matches(matcher):
        print(player)
```

Luokalle `Statistics` on tehty metodi `matches`, joka palauttaa listan niistä pelaajista, joille parametrina annettun olion metodi `test` palauttaa `True`.

Tutustu ohjelman rakenteeseen.

- Huomioi miten `HasAtLeast`-luokan metodi `test` käyttää funktiota [getattr](https://docs.python.org/3/library/functions.html#getattr) saadakseen parametrina annetun attribuutin arvon
- Toinen huomioinarvoinen piirre on `And`-luokan konstruktorissa käytetty vaihtuvamittainen parametrilista, jonka tunnista `*`-etuliitteestä. Syntaksin avulla `*matchers` sisältää listan konstruktorille annetuista argumenteista

**Toteuta `test`-metodin toteuttavat luokat, joiden avulla voit tehdä seuraavat operaatiot:**

- All (tosi kaikille pelaajille)
- Not (parametrina olevan ehdon negaatio)
- HasFewerThan (HasAtLeast-komennon negaatio eli esim. on vähemmän kuin 10 maalia)

Kaikille pelaajille tosi ehto _All_ ei ole vielä tämän tehtävän kannalta kovin mielenkiintoinen, sitä pystyy kuitenkin hyödyntämään neljännessä tehtävässä.

Voit tarkistaa toteutuksesi toimivuuden tekemällä kyselyn:

```python
matcher = And(
    Not(HasAtLeast(2, "goals")),
    PlaysIn("NYR")
)
```

Vastauksena pitäisi olla joukkueen _NYR_ pelaajista ne, joilla ei ole vähintään kahta maalia, eli _0 tai 1 maalia tehneet_:

<pre>
Jonny Brodzinski     NYR          1  + 1  = 2
Ben Harpur           NYR          1  + 5  = 6
Ryan Carpenter       NYR          1  + 2  = 3
Ryan Lindgren        NYR          1  + 17 = 18
Libor Hajek          NYR          1  + 0  = 1
Zac Jones            NYR          1  + 1  = 2
Will Cuylle          NYR          0  + 0  = 0
Jaroslav Halak       NYR          0  + 0  = 0
Igor Shesterkin      NYR          0  + 0  = 0
</pre>

- Kaikissa esimerkitulostuksissa on käytetty vuoden 2022-23 tilastoja. Tilastoissa käytettävän vuoden voi valita tilastojen URL:ista, joka on koodipohjassa <https://studies.cs.helsinki.fi/nhlstats/2023-23/players.txt>

Kyselyn

```python
matcher = And(
    HasFewerThan(2, "goals"),
    PlaysIn("NYR")
)
```

tulisi palauttaa täsmälleen sama lista.

Ehdon All pitäisi palauttaa kaikki pelaajat. Seuraavan koodin

```python
filtered_with_all = stats.matches(All())
print(len(filtered_with_all))
```

pitäisi tulostaa 1058

### 3. Kyselykieli NHL-tilastoihin, osa 2

**Toteuta** `test`-metodin toteuttava luokka `Or`, joka on tosi silloin jos ainakin yksi sen parametrina saamista ehdoista on tosi.

Kyselyn

```python
matcher = Or(
    HasAtLeast(45, "goals"),
    HasAtLeast(70, "assists")
)
```

tulee palauttaa ne, joilla on vähintään 45 maalia tai 70 syöttöä, eli seuraava lista

```
David Pastrnak       BOS          61 + 52 = 113
Tage Thompson        BUF          47 + 47 = 94
Nikita Kucherov      TBL          30 + 83 = 113
Brayden Point        TBL          51 + 44 = 95
Mikko Rantanen       COL          55 + 50 = 105
Leon Draisaitl       EDM          52 + 76 = 128
Connor McDavid       EDM          64 + 89 = 153
Jason Robertson      DAL          46 + 63 = 109
Erik Karlsson        SJS          25 + 76 = 101
```

Kyselyn

```java
matcher = And(
    HasAtLeast(70, "points"),
    Or(
        PlaysIn("NYR"),
        PlaysIn("FLA"),
        PlaysIn("BOS")
    )
)
```

tulee palauttaa kaikki vähintään 70 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _NYR_, _FLA_ tai _BOS_. Lista näyttää seuraavalta:

```
Mika Zibanejad       NYR          39 + 52 = 91
Artemi Panarin       NYR          29 + 63 = 92
Adam Fox             NYR          12 + 60 = 72
David Pastrnak       BOS          61 + 52 = 113
Carter Verhaeghe     FLA          42 + 31 = 73
Aleksander Barkov    FLA          23 + 55 = 78
Brandon Montour      FLA          16 + 57 = 73
Matthew Tkachuk      FLA          40 + 69 = 109
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyselyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 4. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava uusi olio. Toinen ikävä puoli on se, että kyselyjä käyttävällä koodilla on suora riippuvuus sen käyttämiin Matcher-olioihin.

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/osa4#pinorakentaja-viikko-6) hengessä _kyselyrakentaja_, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

```python
def main():
    url = "https://studies.cs.helsinki.fi//nhlstats/2022-23/players.txt"
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
    url = "https://studies.cs.helsinki.fi//nhlstats/2022-23/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.playsIn("NYR").build()

    for player in stats.matches(matcher):
        print(player)
```

Seuraavaksi kysely, missä tulostetaan pelaajat joiden joukkue on _NYR_, joilla on vähintään 10 mutta kuitenkin vähemmän kuin 20 maalia:

```python
def main():
    url = "https://studies.cs.helsinki.fi//nhlstats/2022-23/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.playsIn("NYR").hasAtLeast(10, "goals").hasFewerThan(20, "goals").build()

    for player in stats.matches(matcher):
        print(player)
```

Pelaajien lista on seuraava:

```
Barclay Goodrow      NYR          11 + 20 = 31
Jimmy Vesey          NYR          11 + 14 = 25
Adam Fox             NYR          12 + 60 = 72
Kaapo Kakko          NYR          18 + 22 = 40
Alexis Lafrenière    NYR          16 + 23 = 39
```

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella.

Tässä tehtävässä riittää, että kyselyrakentaja osaa muodostaa _and_-periaatteella yhdistettyjä ehtoja.

Pitkät metodikutsuketjut, esim.

```python
matcher = query.playsIn("NYR").hasAtLeast(10, "goals").hasFewerThan(20, "goals") .build()
```

ovat luettavuudeltaan hieman ikäviä, jos ne kirjoitetaan monelle riville. Usein ne onkin tapana jakaa "kutsu per rivi"-periaatteella:

```python
   matcher = (
      query
      .playsIn("NYR")
      .hasAtLeast(10, "goals")
      .hasFewerThan(20, "goals")
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
    .hasAtLeast(50, "points")
    .build()
)

matcher = query.oneOf(m1, m2).build()
```

Pelaajalistan tulisi olla:

```
Nick Seeler          PHI          4  + 10 = 14
Rasmus Ristolainen   PHI          3  + 17 = 20
Cam York             PHI          2  + 18 = 20
Tyson Barrie         EDM          13 + 42 = 55
Zach Hyman           EDM          36 + 47 = 83
Ryan Nugent-Hopkins  EDM          37 + 67 = 104
Leon Draisaitl       EDM          52 + 76 = 128
Connor McDavid       EDM          64 + 89 = 153
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
          .hasAtLeast(50, "points")
          .build()
    )
    .build()
)
```

On mahdollista ja jopa todennäköistä, että ensimmäinen ratkaisusi ei toimi jos apumuuttujia ei käytetä. Mieti tarkkaan missä vika ja yritä korjata tilanne. Vaadittava muutos ei ole iso.

### 6. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä jolloin niihin on vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...".

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia.

- Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2023/projects/repositories) joukosta
  - Mielellään sellaisen ryhmän repositorio, jolla ei ole jo viittä pull requestia.
  - Ja luonnollisesti sellainen, jonka koodiin haluat tehdä jotain muutoksia
- [Forkkaa](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) repositorio
- Tee forkattuun repositorioon uusi branch nimellä "muutoksia"
- Tee luomaasi branchiin "tyhjä" [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request): lisää esimerkiksi yksi tyhjä rivi README.md-tiedostoon, pushaa uusi branch GitHubiin ja tee branchista pull request.
  - Tyhjän pull requestin tarkoituksena on varata sinulle paikka kyseisen repositorion muutoksentekijöiden joukosta. Haluamme, että kaikki ryhmät saavat suunnilleen tasaisesti pull requesteja, eli jos repositoriossa on niitä jo runsaasti, etsi mielellään jokin muu repositorio.
- Etsi ryhmän lähdekoodista jotain refaktoroitavaa
  - Kyseessä ei tarvitse olla iso muutos, esimerkiksi muuttujan/metodin uudelleennimeäminenkin riittää
- Refaktoroi ja committaa
- Käy katsomassa tekemääsi tyhjää pull requestia. Mitä tapahtui?
- Rebeissaa (ks. tämän viikon ensimmäinen tehtävä) luomasi branch paikalliseen main-branchin päälle. Pushaa. Tapahtuiko pull requestissa muutoksia?
- Otsikoi tekemäsi pull request niin, että se kuvaa tekemiäsi muutoksia. Tarkenna otsikon alle mitä teit ja miksi.
- Jos ryhmä pyytää sinua tekemään muutoksia pull requestiisi, tee halutessasi tarvittavat muutokset ja committaa. Päivittyikö pull request?
- Kun ryhmä on hyväksynyt muutoksesi, voit poistaa luomasi branchin

Laita palautusrepositorioosi tiedosto _PULL.md_ ja sen sisällöksi linkki pull requestiin.

{% include submission_instructions.md %}
