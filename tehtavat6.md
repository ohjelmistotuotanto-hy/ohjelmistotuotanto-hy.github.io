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

Lue <http://git-scm.com/book/en/Git-Branching-Rebasing> ja/tai <https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase>

Aikaansaa seuraavankaltainen tilanne:

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

Poista branch haara. Etsi googlaamalla komento, jolla saat tuhottua branchin.

Mikä on rebase-komennon käyttötarkoitus? Atlassianin [git-ohje](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) perustelee asiaa näin

> The primary reason for rebasing is to maintain a linear project history. For example, consider a situation where the main branch has progressed since you started working on a feature branch. You want to get the latest updates to the main branch in your feature branch, but you want to keep your branch's history clean so it appears as if you've been working off the latest main branch. This gives the later benefit of a clean merge of your feature branch back into the main branch. Why do we want to maintain a "clean history"? The benefits of having a clean history become tangible when performing Git operations to investigate the introduction of a regression.

### 2. Kyselykieli NHL-tilastoihin, osa 1

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _koodi/viikko6/query-language_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta ohjelmasta.
- Kopioi projekti palatusrepositorioosi, hakemiston viikko6 sisälle.
- Tätä tehtävää tehdessä luentomateriaalin [Gutenberg-lukija](https://ohjelmistotuotanto-hy.github.io/osa4/#ep%C3%A4triviaalin-copypasten-poistaminen-strategy-patternin-avulla-viikko-5) voi olla eräs inspiraation lähde.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat, joilla on vähintään 5 maalia ja vähintään 5 syöttöä_.

Koodin onkin luotu hieman valmista kalustoa, josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

```python
def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2021-22/players.txt"
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

HUOM: jossain tehtäväpohjassa saattaa olla vielä käytössä vanha osoite datan hakuun (heroku...) eli jos törmäät ongelmaan, varmista että käytät yo urlia.

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
    Not(HasAtLeast(1, "goals")),
    PlaysIn("NYR")
)
```

Vastauksena pitäisi olla joukkueen _NYR_ pelaajista ne, joilla ei ole vähintään yhtä maalia, eli _0 maalia tehneet_:

<pre>
Sammy Blais          NYR          0  + 4  = 4
Libor Hajek          NYR          0  + 1  = 1
Tim Gettinger        NYR          0  + 0  = 0
Anthony Greco        NYR          0  + 0  = 0
Zac Jones            NYR          0  + 2  = 2
Keith Kinkaid        NYR          0  + 0  = 0
Igor Shesterkin      NYR          0  + 0  = 0
Adam Huska           NYR          0  + 0  = 0
Alexandar Georgiev   NYR          0  + 0  = 0
</pre>

- Kaikissa esimerkitulostuksissa on käytetty vuoden 2021-22 tilastoja. Tilastoissa käytettävän vuoden voi valita tilastojen URL:ista, joka on koodipohjassa <https://studies.cs.helsinki.fi//nhlstats/2021-22/players.txt>

Kyselyn

```python
matcher = And(
    HasFewerThan(1, "goals"),
    PlaysIn("NYR")
)
```

tulisi palauttaa täsmälleen sama lista.

Ehdon All pitäisi palauttaa kaikki pelaajat. Seuraavan koodin

```python
filtered_with_all = stats.matches(All())
print(len(filtered_with_all))
```

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
Chris Kreider        NYR          52 + 25 = 77
Artemi Panarin       NYR          22 + 74 = 96
Auston Matthews      TOR          60 + 46 = 106
Jonathan Huberdeau   FLA          30 + 85 = 115
Alex Ovechkin        WSH          50 + 40 = 90
Roman Josi           NSH          23 + 73 = 96
Johnny Gaudreau      CGY          40 + 75 = 115
Leon Draisaitl       EDM          55 + 55 = 110
Connor McDavid       EDM          44 + 79 = 123
Kirill Kaprizov      MIN          47 + 61 = 108
Kyle Connor          WPG          47 + 46 = 93
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
Chris Kreider        NYR          52 + 25 = 77
Mika Zibanejad       NYR          29 + 52 = 81
Artemi Panarin       NYR          22 + 74 = 96
Adam Fox             NYR          11 + 63 = 74
Brad Marchand        BOS          32 + 48 = 80
David Pastrnak       BOS          40 + 37 = 77
Jonathan Huberdeau   FLA          30 + 85 = 115
Aleksander Barkov    FLA          39 + 49 = 88
Sam Reinhart         FLA          33 + 49 = 82
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyselyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 4. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava new-komennolla uusi olio.

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/osa4#pinorakentaja-viikko-6) hengessä _kyselyrakentaja_, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

```python
def main():
    url = "https://studies.cs.helsinki.fi//nhlstats/2021-22/players.txt"
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
    url = "https://studies.cs.helsinki.fi//nhlstats/2021-22/players.txt"
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
    url = "https://studies.cs.helsinki.fi//nhlstats/2021-22/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.playsIn("NYR").hasAtLeast(10, "goals").hasFewerThan(20, "goals").build()

    for player in stats.matches(matcher):
        print(player)
```

Pelaajien lista on seuraava:

```
Barclay Goodrow      NYR          13 + 20 = 33
Jacob Trouba         NYR          11 + 28 = 39
Adam Fox             NYR          11 + 63 = 74
Alexis Lafrenière    NYR          19 + 12 = 31
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
Keith Yandle         PHI          1  + 18 = 19
Rasmus Ristolainen   PHI          2  + 14 = 16
Zach Hyman           EDM          27 + 27 = 54
Ryan Nugent-Hopkins  EDM          11 + 39 = 50
Leon Draisaitl       EDM          55 + 55 = 110
Connor McDavid       EDM          44 + 79 = 123
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

**Tee tämä tehtävä mielellään aikaisintaan vasta perjantaina 2.12.** 

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä jolloin niihin on vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...".

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia.

- Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2022/projects/repositories) joukosta
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
- Rebeissaa (ks. tämän viikon ensimmäinen tehtävä) luomasi branch paikalliseen master branchin päälle. Pushaa. Tapahtuiko pull requestissa muutoksia?
- Otsikoi tekemäsi pull request niin, että se kuvaa tekemiäsi muutoksia. Tarkenna otsikon alle mitä teit ja miksi.
- Jos ryhmä pyytää sinua tekemään muutoksia pull requestiisi, tee halutessasi tarvittavat muutokset ja committaa. Päivittyikö pull request?
- Kun ryhmä on hyväksynyt muutoksesi, voit poistaa luomasi branchin

Laita palautusrepositorioosi tiedosto _PULL.md_ ja sen sisällöksi linkki pull requestiin.

{% include submission_instructions.md %}
