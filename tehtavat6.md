---
layout: page
title: Viikko 6
inheader: no
permalink: /tehtavat6/
---

{% include paivitys_kesken.md %}

{% include laskari_info.md part=6 %}

Tehtävät liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 6]</span>. Tehtävässä 7 jatketaan kurssin [tekoäly]-tehtävien sarjaa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include uv_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, hakemiston _viikko6_ sisälle.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

{% include checkbox_reset.md %}

### 1. Laskin ja komento-oliot

> **HUOM** jos olet käyttänyt kontainerisoitua Poetry-ympäristöä, tämä tehtävä tulee tuottamaan haasteta, sillä sovelluksella on graafinen käyttöliittymä. Googlaa esim. hakusanoilla [linux docker gui apps](https://www.google.com/search?q=linux+docker+gui+apps) jos haluat saada tehtävän tehtyä kontainerissa. 
>
> **HUOM2** tässä tehtävässä saattaa riittää että koneellasi on Python. uv:tä ei välttämättä tarvita ollenkaan. Katso hieman alempaa _Korjaustapa 1_

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko6/laskin_ löytyy yksinkertaisen laskimen toteutus. Laskimelle on toteutettu graafinen käyttöliittymä [Tkinter](https://docs.python.org/3/library/tkinter.html)-kirjaston avulla. 

<input type="checkbox"> Kopioi projekti palautusrepositorioosi, hakemiston viikko6 sisälle.

<input type="checkbox">  Jos tarvetta, lue ensin kurssin Ohjelmistotekniikka [materiaalissa](https://ohjelmistotekniikka-hy.github.io/python/tkinter) oleva Tkinter-tutoriaali. Toinen vaihtoehto on koodin tutkiminen
tekoälyn avustuksella, ks. alla oleva vihje.

<details markdown="1" class="vihje">
<summary markdown="span">Vihje: tekoälyn hyödyntäminen tehtävässä</summary>

Tekoäly on oivallinen apuväline tutustuttaessa itselle etukäteen tuntemattomaan koodiin (ks. [viikon 6 materiaali](/genai/#tuntemattoman-koodin-ymmärtäminen)). Erityisen hyödyllinen se on, jos koodissa käytetään itselle ennalta tuntemattomia kirjastoja.

Koodia ei tarvitse kopioida chattiin, vaan Copilotin _Ask_-tilassa riittää viitata tiedostoon, esim. _selitä miten #file:kayttoliittyma.py toimii_. Omassa kokeilussani kopioin chattiin osan sovelluksen käyttöliittymän koodista:

![]({{ "/images/agentti5.png" | relative_url }})

Selitys jatkuu melko hyvänä, suomen kieli ei kyllä kaikin osin ole ihan optimaalista:

![]({{ "/images/agentti6.png" | relative_url }})

Koodissa on luokka `StringVar`, jonka toiminta on hieman hämärän peitossa. Kysytään tarkennusta:

![]({{ "/images/agentti7.png" | relative_url }})

Koodissa esiintyvä `lambda` on hämmentävä. Onko se ylipäätään tarpeen? Kysytään täsmennystä sen suhteen:

![]({{ "/images/agentti8.png" | relative_url }})

Koodi tuntuu nyt selkeämmältä, ja opimme taas uutta tekoälyn ansiosta!

</details>

<input type="checkbox"> Asenna projektin riippuvuudet komennolla `uv sync` ja käynnistä laskin virtuaaliympäristössä komennolla `python src/index.py`.

Komennon suorittamisen tulisi avata ikkuna, jossa on laskimen käyttöliittymä.

> Jos törmäät virheilmoitukseen `ModuleNotFoundError: No module named 'tkinter'`, syynä saattaa olla se, että koneessasi ei ole Pythonin mukana tavallisesti asentuvaa Tkinteriä. 
>
> Korjaustapa 1:
>
> - Kokeile toimisiko sovellus koneesi Pythonilla "suoraan", eli ilman virtuaaliympäristöä, eli komennolla `python src/index.py` tai `python3 src/index.py` ilman, että olet virtuaaliympäristössä. Jos toimii, niin se riittää.
>
> Korjaustapa 2:
> - Jos käytät Ubuntu/Linuxia, ongelma saattaa ratketa suorittamalla asennus komennolla
 `sudo apt-get install python3-tk`
>
> - Mac-käyttäjillä eräs tapa ratkaista ongelma on komento `brew install python-tk@3.13`, olettaen [brew](https://brew.sh/) on käytössä. Asennuksessa kannattaa käyttää samaa versionumeroa kuin mikä on käytössäsi olevalla Pythonilla.
>
> Paketin `python-tk` asennuksen jälkeen kannattaa poistaa virtuaaliympäristö, eli tiedosto _.venv_, ja suorittaa `uv sync` uudelleen.  

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

<input type="checkbox">  Refaktoroi koodi niin, ettei `_suorita_komento`-metodi sisällä pitkää `if`-hässäkkää. Hyödynnä kurssimateriaalin osassa 4 esiteltyä suunnittelumallia [command](/osa4#laskin-ja-komento-olio-viikko-6).

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

        # talletetaan komennot sanakirjaan eli dict-rakenteeseen
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
        # haetaan dict:istä oikea komento
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

<input type="checkbox"> Toteuta laskimeen myös kumoa-toiminto.

<input type="checkbox"> Periaatteena on siis toteuttaa jokaiseen komento-olioon metodi `kumoa`.

Komento-olion tulee siis muistaa, mikä oli tuloksen arvo ennen komennon suoritusta, jotta se osaa palauttaa laskimen suoritusta edeltävään tilaan.

Jos kumoa-nappia painetaan, suoritetaan sitten edelliseksi suoritetun komento-olion metodi `kumoa`.

Riittää, että ohjelma muistaa edellisen tuloksen, eli kumoa-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin tämänkään toiminnallisuuden toteutus ei olisi kovin hankalaa, jos edelliset tulokset tallennettaisiin esimerkiksi listaan.

### Vapaaehtoinen bonus-tehtävä

<input type="checkbox"> Laajenna ohjelmaasi siten, että se mahdollistaa mielivaltaisen määrän peräkkäisiä kumoamisia.

Eli jos olet esim. laskenut summan 1 + 2 + 3 + 4 + 5 (jonka tulos 15), napin _kumoa_ peräkkäinen painelu vie laskimen tilaan missä tulos on ensin 10 sitten 6, 3, 2, 1 ja lopulta 0.

Myös esim. seuraavanlaisen monimutkaisemman operaatiosarjan pitää toimia oikein: Summa 10, Erotus 6, Erotus 2, Kumoa (kumoaa komennon Erotus 2), Summa 4, Kumoa (Kumoaa komennon Summa 4), Kumoa (kumoaa komennon Erotus 6), Kumoa (kumoaa komennon Summa 10)

### 3. Kyselykieli NHL-tilastoihin, osa 1

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _viikko6/query-language_ löytyy jälleen yksi versio tutusta NHL-tilastojen tarkasteluun tarkoitetusta ohjelmasta.

<input type="checkbox">  Kopioi projekti palautusrepositorioosi, hakemiston viikko6 sisälle.

Tätä tehtävää tehdessä luentomateriaalin [Gutenberg-lukija](/osa4/#ep%C3%A4triviaalin-copypasten-poistaminen-strategy-patternin-avulla-viikko-6) voi olla eräs inspiraation lähde.

Tällä kertaa olemme kiinnostuneita tekemään hieman monimutkaisempia "kyselyjä" pelaajatietoihin, esim. _listaa kaikki joukkueen PHI pelaajat, joilla on vähintään 5 maalia ja vähintään 20 syöttöä_.

Koodiin onkin luotu hieman valmista kalustoa, josta pääset liikkeelle. Yllä olevan kyselyn voi suorittaa seuraavasti:

```python
def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2024-25/players.txt"
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

<input type="checkbox">  Tutustu ohjelman rakenteeseen.

- Huomioi miten `HasAtLeast`-luokan metodi `test` käyttää funktiota [getattr](https://docs.python.org/3/library/functions.html#getattr) saadakseen parametrina annetun attribuutin arvon
- Toinen huomioinarvoinen piirre on `And`-luokan konstruktorissa käytetty vaihtuvamittainen parametrilista, jonka tunnistaa `*`-etuliitteestä. Syntaksin avulla `*matchers` sisältää listan konstruktorille annetuista argumenteista

<input type="checkbox"> Toteuta `test`-metodin toteuttavat luokat, joiden avulla voit tehdä seuraavat operaatiot:

<input type="checkbox" style="margin-left: 20px"> All (tosi kaikille pelaajille)

<input type="checkbox" style="margin-left: 20px"> Not (parametrina olevan ehdon negaatio)

<input type="checkbox" style="margin-left: 20px"> HasFewerThan (HasAtLeast-komennon negaatio eli esim. on vähemmän kuin 10 maalia)

Kaikille pelaajille tosi ehto _All_ ei ole vielä tämän tehtävän kannalta kovin mielenkiintoinen, mutta sitä hyödynnetään neljännessä tehtävässä.

Voit tarkistaa toteutuksesi toimivuuden tekemällä kyselyn:

```python
matcher = And(
    Not(HasAtLeast(2, "goals")),
    PlaysIn("NYR")
)
```

<input type="checkbox"> Varmista, että vastauksena on joukkueen _NYR_ pelaajista ne, joilla ei ole vähintään kahta maalia, eli _0 tai 1 maalia tehneet_:

<pre>
Gabe Perreault       NYR          0  + 0  = 0
Zac Jones            NYR          1  + 10 = 11
Connor Mackey        NYR          0  + 0  = 0
Brennan Othmann      NYR          0  + 2  = 2
Chad Ruhwedel        NYR          0  + 1  = 1
Matthew Robertson    NYR          0  + 0  = 0
</pre>

Kaikissa esimerkitulostuksissa on käytetty vuoden 2024-25 tilastoja. Tilastoissa käytettävän vuoden voi valita tilastojen URL:sta, joka on koodipohjassa <https://studies.cs.helsinki.fi/nhlstats/2024-25/players.txt>

<input type="checkbox"> Varmista, että kyselyn

```python
matcher = And(
    HasFewerThan(2, "goals"),
    PlaysIn("NYR")
)
```

palauttaa täsmälleen saman listan.

Ehdon All pitäisi palauttaa kaikki pelaajat.

<input type="checkbox"> Varmista, että koodi

```python
filtered_with_all = stats.matches(All())
print(len(filtered_with_all))
```

tulostaa 899

### 4. Kyselykieli NHL-tilastoihin, osa 2

<input type="checkbox"> Toteuta `test`-metodin toteuttava luokka `Or`, joka on tosi silloin jos ainakin yksi sen parametrina saamista ehdoista on tosi.

<input type="checkbox"> Varmista, että kysely

```python
matcher = Or(
    HasAtLeast(45, "goals"),
    HasAtLeast(70, "assists")
)
```

palauttaa ne, joilla on vähintään 45 maalia tai 70 syöttöä, eli seuraavan listan

```
Mitch Marner         TOR          27 + 75 = 102
Connor McDavid       EDM          26 + 74 = 100
William Nylander     TOR          45 + 39 = 84
Nathan MacKinnon     COL          32 + 84 = 116
Leon Draisaitl       EDM          52 + 54 = 106
Nikita Kucherov      TBL          37 + 84 = 121
```

<input type="checkbox"> Varmista, että kysely

```python
matcher = And(
    HasAtLeast(70, "points"),
    Or(
        PlaysIn("COL"),
        PlaysIn("FLA"),
        PlaysIn("BOS")
    )
)
```

palauttaa kaikki vähintään 70 pistettä tehneet jotka pelaavat jossain seuraavista joukkueista _COL_, _FLA_ tai _BOS_, eli listan:

```
David Pastrnak       BOS          43 + 63 = 106
Sam Reinhart         FLA          39 + 42 = 81
Nathan MacKinnon     COL          32 + 84 = 116
Cale Makar           COL          30 + 62 = 92
Aleksander Barkov    FLA          20 + 51 = 71
```

Kyselyt perustuvat rakenteeltaan _decorator_-suunnittelumalliin, vastaavasti kuten materiaalin osan 4 esimerkissä [dekoroitu pino](/osa4/#esimerkki-dekoroitu-pino-viikko-6). _And_- ja _Or_-muotoiset kyselyt on muodostettu myös erään suunnittelumallin, [compositen](https://sourcemaking.com/design_patterns/composite) hengessä, ne ovat _Matcher_-rajapinnan toteuttavia olioita, jotka sisältävät itse monta _Matcher_-olioa. Niiden käyttäjä ei kuitenkaan tiedä sisäisestä rakenteesta mitään.

### 5. Parannettu kyselykieli, osa 1

Matcher-olioiden avulla tehtyä kyselykieltä vaivaa se, että kyselyjen rakentaminen on ikävää, sillä jokaista kyselyn osaa kohti on luotava uusi olio. Toinen ikävä puoli on se, että kyselyjä käyttävällä koodilla on suora riippuvuus sen käyttämiin Matcher-olioihin.

<input type="checkbox"> Tee materiaalin osassa 4 esitellyn [pinorakentajan](/osa4#pinorakentaja-viikko-6) hengessä _kyselyrakentaja_, jonka avulla voit luoda Matcher-olioita.

Rakentaja voi toimia esim. seuraavaan tapaan.

Ensin kysely, joka palauttaa jokaisen pelaajan:

```python
def main():
    url = "https://studies.cs.helsinki.fi//nhlstats/2024-25/players.txt"
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
    url = "https://studies.cs.helsinki.fi//nhlstats/2024-25/players.txt"
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
    url = "https://studies.cs.helsinki.fi//nhlstats/2024-25/players.txt"
    reader = PlayerReader(url)
    stats = Statistics(reader)

    query = QueryBuilder()

    matcher = query.plays_in("NYR").has_at_least(10, "goals").has_fewer_than(20, "goals").build()

    for player in stats.matches(matcher):
        print(player)
```

Pelaajien lista on seuraava:

```
Alexis Lafrenière    NYR          17 + 28 = 45
Jonny Brodzinski     NYR          12 + 7  = 19
Adam Fox             NYR          10 + 51 = 61
```

Peräkkäin ketjutetut ehdot siis toimivat "and"-periaatteella.

<input type="checkbox"> Varmista, että ratkaisusi toimii edellisen esimerkin kyselyllä.

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

Python edellyttää ikävä kyllä tässä tapauksessa "ylimääräisten" sulkujen käyttöä.

### 6. Parannettu kyselykieli, osa 2

<input type="checkbox"> Laajennetaan kyselyrakentajaa siten, että sen avulla voi muodostaa myös _or_-ehdolla muodostettuja kyselyjä.

Or-ehdon sisältävä kysely voi olla muodostettu esim. seuraavasti:

```python
matcher = (
  query
    .one_of(
      query.plays_in("PHI")
          .has_at_least(10, "assists")
          .has_fewer_than(10, "goals"),
      query.plays_in("EDM")
          .has_at_least(50, "points")
    )
    .build()
)
```

Pelaajalistan tulisi olla:

```
Egor Zamula          PHI          3  + 12 = 15
Connor McDavid       EDM          26 + 74 = 100
Evan Bouchard        EDM          14 + 53 = 67
Rasmus Ristolainen   PHI          4  + 15 = 19
Nick Seeler          PHI          3  + 17 = 20
Leon Draisaitl       EDM          52 + 54 = 106
Cam York             PHI          4  + 13 = 17
Jamie Drysdale       PHI          7  + 13 = 20
Travis Sanheim       PHI          8  + 22 = 30
```

<input type="checkbox"> Varmista, että ratkaisusi toimii edellisen esimerkin kyselyllä.

### 7. Suunnittele ensin, toteuta sitten [tekoäly]

Lue ennen tehtävän tekemistä materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) viikon 6 osuus [Suunnittele ensin](/genai/#suunnittele-ensin-viikko-6).

Kyselyrakentajan ansiosta kyselyjen muodostaminen on nyt aiempaa mukavampaa. Kyselyt ovat kuitenkin edelleen Python-koodia. Laajennetaan ohjelmaa siten, että kyselyn voi antaa myös merkkijonona:

```python
matcher = parse("team = NYR and goals >= 10 and goals < 20")

for player in stats.matches(matcher):
    print(player)
```

Tuloksen tulee olla sama kuin tehtävän 5 esimerkissä:

```
Alexis Lafrenière    NYR          17 + 28 = 45
Jonny Brodzinski     NYR          12 + 7  = 19
Adam Fox             NYR          10 + 51 = 61
```

Kyselykielessä on seuraavat ehdot:

- `team = XXX` eli pelaaja pelaa joukkueessa XXX
- `<attribuutti> >= <luku>` eli pelaajalla on vähintään annettu määrä esim. maaleja
- `<attribuutti> < <luku>` eli pelaajalla on vähemmän kuin annettu määrä

Ehtoja voi yhdistää sanoilla `and` ja `or`, ja `and` sitoo vahvemmin kuin `or`. Eli tehtävän 6 esimerkkikysely olisi muotoa:

```python
matcher = parse("team = PHI and assists >= 10 and goals < 10 or team = EDM and points >= 50")
```

ja sen tulos on sama kuin tehtävän 6 esimerkissä.

Tehdään toteutus agentin avulla, mutta tällä kertaa **suunnitellaan ensin**.

<input type="checkbox"> Varmista, että tehtävien 1-6 koodi on commitoitu

<input type="checkbox"> Avaa hakemisto _viikko6/query-language_ VS Codessa omana workspacenaan ja luo projektille tarvittaessa ohjetiedosto

<input type="checkbox"> Valitse Copilotin Chat-näkymässä agentiksi _Plan_, ja anna sille tehtävänanto. Kerro pyynnössä ainakin seuraavat reunaehdot:

- toteutuksen tulee hyödyntää olemassa olevaa `QueryBuilder`-luokkaa, eikä matcher-luokkien logiikkaa saa toteuttaa uudelleen
- toteutukselle tulee tehdä yksikkötestit
- toteutus tulee jakaa pieniin askeliin, joiden jokaisen toimivuus voidaan varmistaa erikseen

<input type="checkbox"> Lue agentin laatima suunnitelma huolellisesti. Ymmärsikö agentti tehtävän? Noudattaako suunnitelma reunaehtoja? Onko suunnitelmassa jotain, mikä rikkoo [osan 4](/osa4/) periaatteita?

<input type="checkbox"> Pyydä agenttia muuttamaan suunnitelmaa ainakin kerran. Jos suunnitelma on mielestäsi valmiiksi hyvä, voit esim. pyytää agenttia lisäämään kyselykieleen `not`-operaation tai perustelemaan jonkin suunnitelmansa ratkaisun

<input type="checkbox"> Kun olet tyytyväinen suunnitelmaan, käynnistä toteutus

<input type="checkbox"> Etene suunnitelma askel kerrallaan. Lue jokaisen askeleen jälkeen agentin tekemä muutos, varmista että testit menevät läpi, ja commitoi

<input type="checkbox"> Varmista, että molemmat yllä olevat esimerkkikyselyt tuottavat oikean tuloksen

<input type="checkbox"> Käy lopuksi läpi valmis koodi. Riippuuko parseri `QueryBuilder`-luokasta, vai suoraan matcher-luokista? Onko koodissa toisteisuutta?

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko6_ talletettavaan tiedostoon _plan.md_

Kerro raportissa
- Miltä agentin ensimmäinen suunnitelma näytti, ja mitä siihen muutettiin?
- Noudattiko agentti suunnitelmaa toteutusvaiheessa?
- Noudattaako lopputulos osan 4 suunnitteluperiaatteita?
- Oliko suunnitteluvaiheesta hyötyä verrattuna siihen, että agentti olisi pistetty suoraan koodaamaan?

{% include submission_instructions.md %}
