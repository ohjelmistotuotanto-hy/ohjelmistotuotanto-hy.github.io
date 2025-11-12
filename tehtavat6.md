---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6/
---

{% include paivitys_kesken.md %}

{% include laskari_info.md part=6 %}

Tehtävät liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai <span style="color:blue">[viikko 6]</span>.

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

### 1. Laskin ja komento-oliot

> **HUOM** jos olet käyttänyt kontainerisoitua Poetry-ympäristöä, tämä tehtävä tulee tuottamaan haasteta, sillä sovelluksella on graafinen käyttöliittymä. Googlaa esim. hakusanoilla [linux docker gui apps](https://www.google.com/search?q=linux+docker+gui+apps) jos haluat saada tehtävän tehtyä kontainerissa. Toinen vaihtoehto on esim. pajaan meneminen...

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko5/laskin_ löytyy yksinkertaisen laskimen toteutus. Laskimelle on toteutettu graafinen käyttöliittymä [Tkinter](https://docs.python.org/3/library/tkinter.html)-kirjaston avulla. 
- Kopioi projekti palautusrepositorioosi, hakemiston viikko5 sisälle.

Jos tarvitsee, lue ensin kurssin Ohjelmistotekniikka [materiaalissa](https://ohjelmistotekniikka-hy.github.io/python/tkinter) oleva Tkinter-tutoriaali.

Asenna projektin riippuvuudet komennolla `poetry install` ja käynnistä laskin virtuaaliympäristössä komennolla `python3 src/index.py`. Komennon suorittamisen tulisi avata ikkuna, jossa on laskimen käyttöliittymä.

> Jos törmäät virheilmoitukseen `ModuleNotFoundError: No module named 'tkinter'` ja käytät Ubuntu/Linuxia, syynä saattaa olla se, että koneessasi ei ole Pythonin mukana tavallisesti asentuvaa Tkinteriä. 
>
> Ongelma saattaa ratketa suorittamalla asennus komennolla
 `sudo apt-get install python3-tk`

Sovelluksen avulla pystyy tällä hetkellä tekemään yhteen- ja vähennyslaskuja, sekä nollaamaan laskimen arvon. Laskutoimituksen kumoamista varten on lisätty jo painike "Kumoa", joka ei vielä toistaiseksi tee mitään. Sovelluksen varsinainen toimintalogiikka on luokassa `Kayttoliittyma`. Koodissa on tällä hetkellä hieman ikävä `if`-hässäkkä:

```python
def _suorita_komento(self, komento):
    arvo = 0

    try:
        arvo = int(self._syote_kentta.get())
    except Exception:
        pass

    if komento == Komento.SUMMA:
        self._sovelluslogiikka.plus(arvo)
    elif komento == Komento.EROTUS:
        self._sovelluslogiikka.miinus(arvo)
    elif komento == Komento.NOLLAUS:
        self._sovelluslogiikka.nollaa()
    elif komento == Komento.KUMOA:
        pass

    self._kumoa_painike["state"] = constants.NORMAL

    if self._sovelluslogiikka.arvo() == 0:
        self._nollaus_painike["state"] = constants.DISABLED
    else:
        self._nollaus_painike["state"] = constants.NORMAL

    self._syote_kentta.delete(0, constants.END)
    self._arvo_var.set(self._sovelluslogiikka.arvo())
```

Refaktoroi koodi niin, ettei `_suorita_komento`-metodi sisällä pitkää `if`-hässäkkää. Hyödynnä kurssimateriaalin osassa 4 esiteltyä suunnittelumallia [command](/osa4#laskin-ja-komento-olio-viikko-5).

Tässä tehtävässä ei tarvitse vielä toteuttaa kumoa-komennon toiminnallisuutta!

Luokka `Kayttoliittyma` voi näyttää refaktoroituna esimerkiksi seuraavalta:

```python
class Komento(Enum):
    SUMMA = 1
    EROTUS = 2
    NOLLAUS = 3
    KUMOA = 4


class Kayttoliittyma:
    def __init__(self, sovelluslogiikka, root):
        self._sovelluslogiikka = sovelluslogiikka
        self._root = root

        self._komennot = {
            Komento.SUMMA: Summa(sovelluslogiikka, self._lue_syote),
            Komento.EROTUS: Erotus(sovelluslogiikka, self._lue_syote),
            Komento.NOLLAUS: Nollaus(sovelluslogiikka, self._lue_syote),
            Komento.KUMOA: Kumoa(sovelluslogiikka, self._lue_syote) # ei ehkä tarvita täällä...
        }

    # ...

    def _lue_syote(self):
        return self._syote_kentta.get()

    def _suorita_komento(self, komento):
        komento_olio = self._komennot[komento]
        komento_olio.suorita()
        self._kumoa_painike["state"] = constants.NORMAL

        if self._sovelluslogiikka.arvo() == 0:
            self._nollaus_painike["state"] = constants.DISABLED
        else:
            self._nollaus_painike["state"] = constants.NORMAL

        self._syote_kentta.delete(0, constants.END)
        self._arvo_var.set(self._sovelluslogiikka.arvo())
```

Komennoilla on nyt siis metodi `suorita` ja ne saavat konstruktorin kautta `Sovelluslogiikka`-olion ja funktion, jota kutsumalla syötteen voi lukea.

### 2. Komentojen kumoaminen

Toteuta laskimeen myös kumoa-toiminnallisuus. Periaatteena on siis toteuttaa jokaiseen komento-olioon metodi `kumoa`. Olion tulee myös muistaa mikä oli tuloksen arvo ennen komennon suoritusta, jotta se osaa palauttaa laskimen suoritusta edeltävään tilaan.

Jos kumoa-nappia painetaan, suoritetaan sitten edelliseksi suoritetun komento-olion metodi `kumoa`.

Riittää, että ohjelma muistaa edellisen tuloksen, eli kumoa-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin tämänkään toiminallisuuden toteutus ei olisi kovin hankalaa, jos edelliset tulokset tallennettaisiin esimerkiksi listaan.

### Vapaaehtoinen bonus-tehtävä

Laajenna ohjelmaasi siten, että se mahdollistaa mielivaltaisen määrän peräkkäisiä kumoamisia. Eli jos olet esim. laskenut summan 1+2+3+4+5 (jonka tulos 15), napin _kumoa_ peräkkäinen painelu vie laskimen tilaan missä tulos on ensin 10 sitten 6, 3, 2, 1 ja lopulta 0.

Myös esim. seuraavanlaisen monimutkaisemman operaatiosarjan pitää toimia oikein: Summa 10, Erotus 6, Erotus 2, Kumoa (kumoaa komennon Erotus 2), Summa 4, Kumoa (Kumoaa komennon Summa 4), Kumoa (kumoaa komennon Erotus 6), Kumoa (kumoaa komennon Summa 10)

{% include submission_instructions.md %}

### 3. Kyselykieli NHL-tilastoihin, osa 1

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _viikko6/query-language_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta ohjelmasta.
- Kopioi projekti palautusrepositorioosi, hakemiston viikko6 sisälle.
- Tätä tehtävää tehdessä luentomateriaalin [Gutenberg-lukija](https://ohjelmistotuotanto-hy.github.io/osa4/#ep%C3%A4triviaalin-copypasten-poistaminen-strategy-patternin-avulla-viikko-5) voi olla eräs inspiraation lähde.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat, joilla on vähintään 5 maalia ja vähintään 20 syöttöä_.

Koodiin onkin luotu hieman valmista kalustoa, josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

```python
def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2023-24/players.txt"
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
Brandon Scanlin      NYR          0  + 0  = 0
Nick Bonino          NYR          1  + 4  = 5
Riley Nash           NYR          0  + 0  = 0
Jake Leschyshyn      NYR          0  + 0  = 0
Brennan Othmann      NYR          0  + 0  = 0
Jake Leschyshyn      NYR          0  + 0  = 0
Matt Rempe           NYR          1  + 1  = 2
Connor Mackey        NYR          0  + 0  = 0
Tyler Pitlick        NYR          1  + 3  = 4
Filip Chytil         NYR          0  + 6  = 6
Anton Blidh          NYR          0  + 0  = 0
</pre>

- Kaikissa esimerkitulostuksissa on käytetty vuoden 2023-24 tilastoja. Tilastoissa käytettävän vuoden voi valita tilastojen URL:ista, joka on koodipohjassa <https://studies.cs.helsinki.fi/nhlstats/2023-24/players.txt>

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

pitäisi tulostaa 958

### 4. Kyselykieli NHL-tilastoihin, osa 2

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
Filip Forsberg       NSH          48 + 46 = 94
Sam Reinhart         FLA          57 + 37 = 94
Quinn Hughes         VAN          17 + 75 = 92
Connor McDavid       EDM          32 + 100 = 132
Auston Matthews      TOR          69 + 38 = 107
David Pastrnak       BOS          47 + 63 = 110
Nathan MacKinnon     COL          51 + 89 = 140
Zach Hyman           EDM          54 + 23 = 77
Artemi Panarin       NYR          49 + 71 = 120
Brayden Point        TBL          46 + 44 = 90
Nikita Kucherov      TBL          44 + 100 = 144
Kirill Kaprizov      MIN          46 + 50 = 96
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
Sam Reinhart         FLA          57 + 37 = 94
Vincent Trocheck     NYR          25 + 52 = 77
Matthew Tkachuk      FLA          26 + 62 = 88
David Pastrnak       BOS          47 + 63 = 110
Carter Verhaeghe     FLA          34 + 38 = 72
Chris Kreider        NYR          39 + 36 = 75
Adam Fox             NYR          17 + 56 = 73
Artemi Panarin       NYR          49 + 71 = 120
Aleksander Barkov    FLA          23 + 57 = 80
Mika Zibanejad       NYR          26 + 46 = 72
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _OR_-muotoiset kyselyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 5. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava uusi olio. Toinen ikävä puoli on se, että kyselyjä käyttävällä koodilla on suora riippuvuus sen käyttämiin Matcher-olioihin.

Tee materiaalin osassa 4 esitellyn [pinorakentajan](/osa4#pinorakentaja-viikko-6) hengessä _kyselyrakentaja_, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

```python
def main():
    url = "https://studies.cs.helsinki.fi//nhlstats/2023-24/players.txt"
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
    url = "https://studies.cs.helsinki.fi//nhlstats/2023-24/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.plays_in("NYR").build()

    for player in stats.matches(matcher):
        print(player)
```

Seuraavaksi kysely, missä tulostetaan pelaajat joiden joukkue on _NYR_, joilla on vähintään 10 mutta kuitenkin vähemmän kuin 20 maalia:

```python
def main():
    url = "https://studies.cs.helsinki.fi//nhlstats/2023-24/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.plays_in("NYR").has_at_least(10, "goals").has_fewer_than(20, "goals").build()

    for player in stats.matches(matcher):
        print(player)
```

Pelaajien lista on seuraava:

```
Will Cuylle          NYR          13 + 8  = 21
Jimmy Vesey          NYR          13 + 13 = 26
Kaapo Kakko          NYR          13 + 6  = 19
Adam Fox             NYR          17 + 56 = 73
```

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella.

Tässä tehtävässä riittää, että kyselyrakentaja osaa muodostaa _and_-periaatteella yhdistettyjä ehtoja.

Pitkät metodikutsuketjut, esim.

```python
matcher = query.plays_in("NYR").has_at_least(10, "goals").has_fewer_than(20, "goals").build()
```

ovat luettavuudeltaan hieman ikäviä, jos ne kirjoitetaan monelle riville. Usein ne onkin tapana jakaa "kutsu per rivi"-periaatteella:

```python
   matcher = (
      query
      .plays_in("NYR")
      .has_at_least(10, "goals")
      .has_fewer_than(20, "goals")
      .build()
    )
```

Python ikävä kyllä edellyttää tässä "ylimääräisten" sulkujen käyttöä.

### 6. Parannettu kyselykieli, osa 2

Laajennetaan kyselyrakentajaa siten, että sen avulla voi muodostaa myös _or_-ehdolla muodostettuja kyselyjä. Or-ehdon sisältävä kysely voi olla muodostettu esim. seuraavasti:

```python
m1 = (
  query
    .plays_in("PHI")
    .has_at_least(10, "assists")
    .has_fewer_than(10, "goals")
    .build()
)

m2 = (
  query
    .plays_in("EDM")
    .has_at_least(50, "points")
    .build()
)

matcher = query.one_of(m1, m2).build()
```

Pelaajalistan tulisi olla:

```
Leon Draisaitl       EDM          41 + 65 = 106
Connor McDavid       EDM          32 + 100 = 132
Garnet Hathaway      PHI          7  + 10 = 17
Zach Hyman           EDM          54 + 23 = 77
Garnet Hathaway      PHI          7  + 10 = 17
Noah Cates           PHI          6  + 12 = 18
Nick Seeler          PHI          1  + 12 = 13
Egor Zamula          PHI          5  + 16 = 21
Evan Bouchard        EDM          18 + 64 = 82
Ryan Nugent-Hopkins  EDM          18 + 49 = 67
```

Tai sama ilman apumuuttujia:

```python
matcher = (
  query
    .one_of(
      query.plays_in("PHI")
          .has_at_least(10, "assists")
          .has_fewer_than(10, "goals")
          .build(),
      query.plays_in("EDM")
          .has_at_least(50, "points")
          .build()
    )
    .build()
)
```

### 7. Pull request ja refaktorointia (tätä tehtävää ei lasketa versionhallintatehtäväksi)

**HUOM tee tämä tehtävä aikaisintaan perjantaina 29.11.**

Isoa projektia on vaikea ylläpitää yksin ja vielä vaikeampaa on löytää oikeat ratkaisut jokaiseen ongelmaan, kun ohjelmisto kasvaa. On vaikeaa hallita itse kaikkea ja jotkin osa-alueet eivät välttämättä edes miellytä jolloin niihin on vaikea paneutua. Saatat löytää itsesi ajattelemasta vaikkapa: "Lukisipa joku tietorakenteiden asiantuntija tämän osuuden läpi ja tsekkaisi, että HashSet on nyt varmasti se tehokkain ratkaisu...".

Ehkäpä et edes ajatellut asiaa, mutta joku silti näyttää, että binäärihakupuu onkin tilanteessa tehokkaampi ratkaisu, koodaa korjaukset puolestasi lähdekoodiin sekä tekee muutoksista _pull requestin_. Onneksi julkaisit projektisi Open Sourcena!

GitHub on täynnä Open Source -projekteja, jotka kaipaavat panostasi. Mikäs sen kivempaa, kuin käyttää muutama tunti suosikkirepositioriosi lähdekoodin parissa ja korvata sieltä huomaamasi epäelegantti ratkaisu paremmalla. Useilla repositorioilla on valmiit ohjeet muutosehdotusten tekemiseen repositorion juuresta löytyvässä tiedostossa Contributing.md. Tässä esimerkiksi bluebird.js:än [CONTRIBUTING.md](https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md).

Tehtävänäsi on harjoitella muutosehdotuksen tekemistä "open source -projektiin" sekä vieraan koodin lukemista ja refaktorointia.

- Valitse yksi repositorio [miniprojektien](https://study.cs.helsinki.fi/stats/api/courses/ohtu2024/projects/repositories) joukosta
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
