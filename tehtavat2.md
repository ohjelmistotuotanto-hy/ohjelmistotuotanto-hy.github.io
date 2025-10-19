---
layout: page
title: Viikko 2
inheader: no
permalink: /tehtavat2/
---

{% include paivitys_kesken.md %}

{% include laskari_info.md part=2 %}

Viikon ensimmäisessä ja toisessa tehtävässä tutustutaan koodin _staattiseen analyysin_ Pylint-työkalun avulla. Gitiin tutustuminen jatkuu tehtävissä 5-9. Laskarien lopuksi jatketaan _riippuvuuksien injektoinnin_ parissa. Tehtävissä 10-12 koodataan ja refaktoroidaan koodia siistimmäksi.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

<div style="color:black; border-style: solid; padding: 10px; margin-bottom: 15px; background-color: #AFFAFA;">

<h2>
TODO: UPDATE allaoleva
</h2>

</div>

Tehtävät 6 ja 7 laajentavat viime viikon ensimmäistä tehtäväsarjaa, eli ne palautetaan **ohtuvarasto**-repositorioon, siis samaan mitä käytettiin viikon 1 tehtävissä 2-13. Muut tehtävät palautetaan **palautusrepositorioon**, eli samaan mihin palautit ensimmäisen viikon tehtävät 14-17.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Poetryn harjoittelua

**Tämä tehtävä tehdään palautusrepositorioon**, siis samaan mihin tehtiin viikon 1 tehtävät 14-17

- Tee palautusrepositorioon hakemisto _viikko2_ ja sen sisälle hakemisto _poetry-web_ tätä tehtävää varten
- Lue [täältä](/tehtavat2/#tehtävien-palauttaminen) lisää tehtävien palautusrepositorioista

{% include no_pip2.md %}

Tässä tehtävässä harjoittelemme lisää Poetryn käyttöä ja tutustumme semanttiseen versiointiin. Apua tehtävän tekoon saa mm. Ohjelmistotekniikka-kurssilta lainatusta [Poetry-ohjeesta](/poetry) ja [Poetryn dokumentaatiosta](https://python-poetry.org/docs/).

Kuvitellaan tilanne, jossa työskentelet ohjelmistokehittäjänä kehitystiimissä, joka on alkamassa kehittämään web-sovellusta. Olette päätyneet kehittämään sovelluksen Pythonilla ja käyttämään Poetrya riippuvuuksien hallinnassa.

Tee seuraavat toimenpiteet:

- Aluksi Poetry-pohjainen projekti täytyy alustaa. **Alusta projekti Poetryn avulla _poetry-web_ nimiseen hakemistoon tehtävien palautukseen käyttämäsi repositorion hakemiston viikko2 sisälle**. Muista käyttää alustuksessa komentoa `poetry init --python "^3.12"`, jotta projektin Python-version vaatimus asetetaan oikein.
- Etsit Googlettamalla sopivia kirjastoja web-sovellusta varten ja törmäät [Flask](https://pypi.org/project/Flask/)-viitekehykseen. **Asenna Flask projektin riippuvuudeksi Poetryn avulla**
- Sovelluksessa ilmenee ensimmäinen bugi. Syynä oli luultavasti se, ettei sovellukselle ole toteutettu vielä yhtään testiä. Päädyt käyttämään testauksessa [pytest](https://pypi.org/project/pytest/)-kirjastoa. **Asenna pytest projektin _kehityksen aikaiseksi riippuvuudeksi_**
  - Pohdi itseksesi, miksi on hyödyllistä määritellä riippuvuus erikseen kehityksen aikaiseksi riippuvuudeksi
- Sovellus käyttää relaatiotietokantaa joten päädyt etsimään tarkoitukseen sopivia kirjastoja. Törmäät tarkoitukseen sopivaan kirjastoon nimeltä [SQLAlchemy](https://pypi.org/project/SQLAlchemy/). **Asenna SQLAlchemy projektin riippuvuudeksi**
- Huomaat bugin SQLAlchemy-kirjastossa, joten alat tutkimaan sen GitHub repositorion [issueita](https://github.com/sqlalchemy/sqlalchemy/issues). Eräässä issuessa kerrotaan, että löytämäsi bugi ei ilmene kirjaston versiossa `1.4.54`. **Asenna jsonpickle-kirjastosta versio `1.4.54`**.
  - Tutustu _semanttiseen versiointiin_ [täällä](https://semver.org/)
  - Pohdi, mitä hyötyjä semanttisesta versioinnista on. Jos kirjasto noudattaa semanttista versiointia, miksi kirjaston version `1.4.54` päivittäminen versioon `2.0.44` saattaa sisältää riskejä? Miksei samoja riskejä luultavasti ole versiosta `2.0.5` versioon `2.0.44`?
  - Versiovaatimuksissa on mukana usein `^`-, tai `~`-etuliite. Selvitä, mitä näillä ilmaistaan. Asiaa käsitellään mm. [Poetryn dokumentaatiossa](https://python-poetry.org/docs/dependency-specification/)
- Kuulet kaveriltasi, että Flaskin sijaan kannattaisi käyttää [FastAPI](https://pypi.org/project/fastapi/)-kirjastoa. 
**Poista Flask projektin riippuvuuksien joukosta ja asenna FastAPI**

Palautettavasta _poetry-web_-hakemistosta ei tarvitse löytyä muita tiedostoja kuin _pyproject.toml_ ja _poetry.lock_.


### 2. Riippuvuuksien hyödyntäminen: Pelaajalista

Hae [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko2/nhl-reader_ lähes tyhjä Poetry-projektin runko. Mukana on kohta tarvitsemasi luokka `Player`.

- Kopioi projekti palatusrepositorioosi, hakemiston _viikko2_ sisälle.

Tehdään ohjelma, jonka avulla voi hakea jääkiekon [NHL-liigan](https://nhl.com) eri kausien tilastotietoja.

Näet tilastojen [JSON](https://en.wikipedia.org/wiki/JSON)-muotoisen raakadatan web-selaimella osoitteesta <https://studies.cs.helsinki.fi/nhlstats/2024-25/players>

Tee ohjelma, joka listaa _suomalaisten pelaajien_ tilastot. Tarvitset ohjelmassa yhtä kirjastoa, eli riippuvuutta. Kyseinen kirjasto on [requests](https://pypi.org/project/requests/)-kirjasto, jonka avulla voi tehdä HTTP-pyyntöjä. Huomaa, että Pythonilla on myös valmiita moduuleja tähän tarkoitukseen, mutta requests-kirjaston käyttö on huomattavasti näitä moduuleja helpompaa.

Asenna siis _requests_-kirjasto projektin riippuvuuksiksi. Käytä kirjastosta uusinta versiota (jonka Poetry asentaa automaattisesti).

Voit ottaa projektisi pohjaksi seuraavan tiedoston:

```python
import requests
from player import Player

def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2024-25/players"
    response = requests.get(url).json()

    print("JSON-muotoinen vastaus:")
    print(response)

    players = []

    for player_dict in response:
        player = Player(player_dict)
        players.append(player)

    print("Oliot:")

    for player in players:
        print(player)
```

Tehtäväpohjassa on valmiina luokan `Player` koodin runko. Edellä esitetyssä koodissa `requests.get(url)` tekee HTTP-pyynnön, jonka jälkeen `json`-metodin kutsu muuttaa JSON-muotoisen vastauksen Python-tietorakenteiksi. Tässä tilanteessa `response` sisältää listan dictionaryja. Tästä listasta muodostetaan lista `Player`-olioita for-silmukan avulla.

**Tässä tehtävässä on tarkoituksena toteuttaa toiminnallisuus, jonka avulla on mahdollista tulostaa tietyn kansalaisuuden, esim. suomen omaavat pelaajat**.
- Tee `Player`-luokkaan attribuutit kaikille JSON-datassa oleville kentille, joita ohjelmasi tarvitsee.
- Ohjelmasi voi toimia esimerkiksi niin, että se tulostaisi pelaajat seuraavalla tavalla:

```
Players from FIN:

Juuso Välimäki team UTA  goals 2 assists 3
Anton Lundell team FLA  goals 17 assists 28
Ville Ottavainen team SEA  goals 0 assists 1
Roope Hintz team DAL  goals 28 assists 39
Rasmus Ristolainen team PHI  goals 4 assists 15
Ville Koivunen team PIT  goals 0 assists 7
Mikael Pyyhtia team CBJ  goals 4 assists 3
Mikko Rantanen team COL, CAR, DAL  goals 32 assists 56
...
```

Tulostusasu ei tässä tehtävässä ole oleellista, eikä edes se mitä pelaajien tiedoista tulostetaan.

### 3. Siistimpi pelaajalista

Tulosta suomalaiset pelaajat pisteiden (goals + assists) mukaan järjestettynä. Tarkka tulostusasu ei ole taaskaan oleellinen, mutta se voi esimerkiksi näyttää seuraavalta:

```
Players from FIN

Mikko Rantanen        COL, CAR, DAL   32 + 56 = 88
Sebastian Aho         CAR             29 + 45 = 74
Aleksander Barkov     FLA             20 + 51 = 71
Roope Hintz           DAL             28 + 39 = 67
Mikael Granlund       SJS, DAL        22 + 44 = 66
Teuvo Teravainen      CHI             15 + 43 = 58
Anton Lundell         FLA             17 + 28 = 45
Artturi Lehkonen      COL             27 + 18 = 45
Kaapo Kakko           NYR, SEA        14 + 30 = 44
Eeli Tolvanen         SEA             23 + 12 = 35
...
```

- Vihje 1: [Täällä](https://docs.python.org/3/howto/sorting.html) on kerrottu miten järjestäminen Pythonilla tapahtuu
- Vihje 2: voit halutessasi hyödyntää [filter](https://docs.python.org/3/library/functions.html#filter)-funktiota.
- Vihje 3: kokeile, mitä `f"{self.name:20}"` tekee merkkijonoesitykselle `Player`-luokan `__str__`-metodissa.
- Erityisesti vihje 2 on heikko, katso miten saat [apua tekoälyltä](/genai/#viikko-2---tehtävä-3)
- Myös Ohjelmoinnin MOOC:in [osa11](https://ohjelmointi-25.mooc.fi/osa-11) ja [osa12](https://ohjelmointi-25.mooc.fi/osa-12) käsittelevät tehtävän kannalta hyödyllisiä asioita

### 4. Pelaajalistan refaktorointi

Tällä hetkellä suurin osa pelaajatietoihin liittyvästä koodista on luultavasti `main`-funktiossa. Funktion _koheesion_ aste on melko matala, koska se keskittyy usean toiminnallisuuden toteuttamiseen. Koodi kaipaisi siis pientä refaktorointia.

Jaa toiminnallisuuden vastuut kahdelle luokkalle: `PlayerReader` ja `PlayerStats`.
- `PlayerReader`-luokan vastuulla on hakea JSON-muotoiset pelaajat konstruktorin parametrin kautta annetusta osoitteesta ja muodostaa niistä `Player`-olioita. Tämä voi tapahtua esimerkiksi luokan `get_players`-metodissa. 
- `PlayerStats`-luokan vastuulla on muodostaa `PlayerReader`-luokan tarjoamien pelaajien perusteella erilaisia tilastoja. Tässä tehtävässä riittää, että luokalla on metodi `top_scorers_by_nationality`, joka palauttaa parametrina annetun kansalaisuuden pelaajat pisteiden mukaan laskevassa järjestyksessä (suurin pistemäärä ensin).

Refaktoroinnin jälkeen `main`-funktion tulee näyttää suurin piirtein seuraavalta:

```python
def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2024-25/players"
    reader = PlayerReader(url)
    stats = PlayerStats(reader)
    players = stats.top_scorers_by_nationality("FIN")

    for player in players:
        print(player)
```

Funktion pitäisi tulostaa samat pelaajat samassa järjestyksessä kuin edellisessä tehtävässä.

### 5. Graafinen pelaajalista 

Laajenna sovellustasi lisäämällä siihen toiminnallisuutta ja muotoilemalla tulostus kirjaston [Rich](https://github.com/Textualize/rich) avulla. Ohjeita kirjaston käyttöön löytyy sen [dokumentaatiosta](https://rich.readthedocs.io/en/stable/introduction.html) ja googlaamalla tai tekoälyltä.

Sovelluksella tulee pystyä näyttämään käyttäjän haluaman maan pelaajien tilastot käyttäjän määrittelemältä kaudelta.  

Sovelluksen toiminta voi näyttää esimerkiksi seuraavalta:

![]({{ "/images/lh2-1-2025.png" | absolute_url }})


**Tämä tehtävä tehdään palautusrepositorioon**, siis samaan mihin teit edellisen tehtävän

### 6. Pylint ja koodin staattinen analyysi

**Tämä ja seuraava tehtävä tehdään viime viikon tehtävissä 2-13 käytettyyn ohtuvarasto-repositorioon**

Kurssin [kolmannessa osassa](/osa3) teemana on ohjelmien laadun varmistaminen. Eräs ohjelman laatua useimmiten edistävä tekijä on järkevän _koodityylin_ noudattaminen. Koodin tyyliä voidaan tarkkailla automatisoidusti niin sanottujen staattisen analyysin työkaluilla.

Tutustutaan nyt staattisen analyysin työkaluun nimeltään [Pylint](https://pylint.pycqa.org/en/latest/index.html). Pylint on jo ehkä tullut tutuksi kurssilta Ohjelmistotekniikka. Ennen kuin syvennymme aiheeseen, tutustu pylintin käyttöön lukemalla kurssilta Ohjelmistotekniikka lainattu [Pylint-ohje](/pylint).

**Mene nyt viikon 1 varasto-projektiin liittyvien tehtävien palautusrepositorioosi.**

Ota varasto-projektissa käyttöön Pylint noudattamalla lukemiasi ohjeita. Konfiguraationa käytettävän _.pylintrc_-tiedoston sisältö tulee toistaiseksi olla [tämän]({{site.python_exercise_repo_url}}/blob/main/viikko2/varasto/.pylintrc) tiedoston sisällön mukainen.

Pylintin tarkistamat säännöt konfiguroidaan _.pylintrc_-tiedostoon oikeiden osioiden alle. `[main]`-osio sisältää yleistä konfiguraatio, kuten mitkä hakemistot tai tiedostot pitäisi jättää tarkistuksien ulkopuolelle. `[MESSAGE CONTROL]`-osiossa taas voidaan määritellä esimerkiksi tarkistuksia, joista ei tarvitse huomauttaa. Loput osiot ovat eri sääntöjen konfigurointia varten, jotka on dokumentoitu Pylintin [dokumentaatiossa](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html).

Jos haluamme esimerkiksi asettaa funktioiden ja metodien argumenttien [maksimilukumäärään neljään](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#max-args), voimme lisätä sen `[DESIGN]`-osioon seuraavasti:

```
[DESIGN]

max-args=4
```

Sääntö _max-args_ on määritelty dokumentaatiossa [seuraavasti](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#max-args):

![]({{ "/images/pylint-1.png" | absolute_url }})

Säännön nimen alussa olevaa kahta viivaa ei siis tule kirjoittaa tiedostoon _.pylintrc_

Helpoin tapa löytää sääntöjä on hakemalla sopivalla hakusanalla niitä dokumentaatiosta tai Googlettamalla. Oikean osion löytää dokumentaatiosta (esimerkiksi `max-args`-sääntö löytyy dokumentaatiosta [Design checker](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#design-checker) -osion alta).

**Toimi nyt seuraavasti:**

- Siirry virtuaaliympäristöön komennolla `poetry shell` ja suorita sen sisällä komento `pylint src`. Jos tarkistuksissa löytyy virheitä, korjaa ne
- Määrittele nyt tiedostoon _.pylintrc_ seuraavat säännöt (katso lista säännöistä Pylintin [dokumentaatiosta](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#standard-checkers)):

  - Rivin pituus on maksimissaan 80 merkkiä
    - Vinkki: sääntö löytyy [Format checker](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#format-options) -osiosta ja tulee määrittää `[FORMAT]`-osion alle
  - Ei yli kahta sisäkkäistä lohkoa (esimerkiksi if- tai for-lohkoa) funktion tai metodin sisällä
    - Vinkki: sääntö löytyy [Refactoring checker](https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#refactoring-checker) -osiosta ja tulee määrittää `[REFACTORING]`-osion alle)
  - Funktiossa tai metodissa on enintään 15 lausetta (statements), etsi sääntö dokumentaatiosta
  - Määrittele myös jokin itse valitsemasi, mielenkiintoiselta/hyödylliseltä kuulostava sääntö

- Muuta koodiasi siten, että saat jokaisen määritellyistä Pylint-säännöistä rikkoutumaan
- Korjaa koodisi ja varmista, että se noudattaa kaikkia sääntöjä

Usein _.pylintrc_-konfiguraatiota ei ole järkevää kirjoittaa tyhjästä käsin, vaan käytetään lähtökohtana Pylintin suosittelemaa konfiguraatiota. Suositellun konfiguraation voi tulostaa komentoriville komennolla `pylint --generate-rcfile`.

### 7. Koodin staattinen analyysi ja GitHub Actionit

**Tämä tehtävä tehdään viime viikon tehtävissä 2-13 käytettyyn ohtuvarasto-repositorioon**

Laajenna ohtuvarastosi GitHub Actionien määritelmää siten, että myös Pylint-tarkastukset suoritetaan aina kun koodi pushataan GitHubiin.

Varmista, että GitHub huomaa tilanteen, missä koodi rikkoo projektin Pylint-sääntöjä:

![]({{ "/images/py-lh2-11.png" | absolute_url }})

Varmista myös, että kun korjaat koodin, kaikki toimii taas moitteettomasti:

![]({{ "/images/py-lh2-12.png" | absolute_url }})


### 8. Precommit hook

### 9. Git: branchit [versionhallinta]

**Tämä tehtävä tehdään palautusrepositorioon**, siis samaan mihin tehtiin tehtävät 1 ja 2

Lue brancheja käsittelevät osuudet seuraavasta <https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging>

- jos haluat lukea hieman perusteellisemman selityksen asiasta, lue <https://git-scm.com/book/en/v2:n> luku kolme kokonaisuudessaan

Kannattaa huomioida myös erittäin hyvä brancheja käsittelevä visuaalinen materiaali osoitteessa <https://learngitbranching.js.org/>

Varsin selkeältä vaikuttaa myös <https://www.atlassian.com/git/tutorials/using-branches>

**Huom:** kun liikut branchien välillä kannattaa pitää working tree ja staging -alue tyhjinä!

Tee palautusrepositorion viikon 2 tehtävien hakemistoon alihakemisto _git-branch-harjoitus_ tämän ja muutaman seuraavan tehtävän koodia varten.

- Mene luomaasi hakemistoon

- Varmista että olet haarassa _main_, ja että kaikki muutokset on committoitu:

```bash
$ git status
On branch main
nothing to commit, working tree clean
```

- Luo ja committaa hakemistoon tiedosto **index.py** jonka sisältö on seuraava

```python
x = int(input("luku 1: "))
y = int(input("luku 2: "))
```

- Luo branch **laskut**, siirry branchiin (tämä tapahtuu esim. komennolla `git checkout -b laskut`), luo sinne tiedosto **summa.py** jolla on seuraava sisältö

```python
def summa(x, y):
    return x+y
```

- lisää ja committaa tiedosto versionhallintaan

- Siirry takaisin **main**-branchiin (komennolla`git checkout main`), tiedoston **summa.py** ei pitäisi nyt näkyä
  - **huom:** muistutus vielä siitä, että kun siirryt branchista toiseen varmista **aina** komennolla `git status` että kaikki muutokset on committoitu
- Luo tiedosto **logger.py**, jolla on seuraava sisältä

```python
from datetime import datetime

def logger(viesti):
  print(f"{datetime.now()}: {viesti}")
```

- Muuta myös tiedostoa **index.py** seuraavasti:

```python
from logger import logger

logger("aloitetaan")

x = int(input("luku 1: "))
y = int(input("luku 2: "))

logger("lopetetaan")
```

- Committaa nämä muutokset **main**-haaraan

- Mene branchiin **laskut** ja tarkasta, että **mainiin** lisätty tiedosto ei ole branchissa ja että tiedostoon **index.py** tehty muutos ei näy
- Lisää ja committaa branchiin tiedosto **erotus.py** jolla on seuraava sisältö

```python
def erotus(x, y):
    return x-y
```

- Siirry takaisin **main**-branchiin
- Tarkasta että **laskut**-branchiin lisätyt muutokset eivät ole mainissa
- Tarkastele komennolla `gitk --all` miltä repositorio ja branchit näyttävät (`gitk`-komento toimii Windowsilla ainakin GitHub for Windowsin Git Shellissä.)
  - Saat asennettua Maciin `gitk`:n [tämän ohjeen](https://www.geekbitzone.com/posts/git/gitk-for-macos/) avulla
    - jos asennus ei onnistu, on hyvä korvaaja gitk:lle [sourcetree](https://www.sourcetreeapp.com)
- Mergeä branchin **laskut** sisältö **mainiin** (tämä tapahtuu komennolla`git merge laskut`)
  - Mergeäminen aiheuttaa ns. merge-commitin, ja avaa tekstieditorin mihin joudut kirjoittamaan commit-viestin
    - Jos et ole määritellyt gitille editoria viime viikon [tehtävän 2](/tehtavat1/) ohjeiden mukaan, avautuu ehkä gitin oletusarvoinen editori [vim](http://www.vim.org)
    - Vimistä poistuminen saattaa osoittautua ensikertalaiselle hankalaksi, Google auttaa tarvittaessa
- Muuta tiedostoa **index.py** seuraavasti ja commitoi muutos:

```python
from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{summa(x, y)}")
print(f"{erotus(x, y)}")

logger("lopetetaan")
```

- Katso jälleen miltä näyttää `gitk --all`-komennolla

### 10. Git: branchit ja staging-alue [versionhallinta]

- Olet nyt repositoriosi **main**-haarassa
- Luo uusi tiedosto _README.md_, **älä** kuitenkaan lisää ja commitoi tiedostoa versionhallintaan
- Tiedoston sisällöllä ei ole merkitystä, se voi olla esim. seuraava

```
## git-harjoituksia

Harjoitellaan branchien käyttöä
```

- Komennon `git status` tulostuksen pitäisi olla seuraava

```
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md

nothing added to commit but untracked files present (use "git add" to track)
```

- Siirry nyt branchiin **laskut**
- Suorita uudelleen komento `git status`
- Huomaat, että tulostus on edelleen sama, tiedosto ei edelleenkään ole versionhallinnan alla
- Eli vaikka olit main-haarassa kun loit tiedoston, ei main-haara eikä koko git tiedä tiedostosta vielä mitään ennen kuin lisäät sen versionhallinnan alaisuuteen komennolla `git add`
- Lisää tiedosto nyt versionhallinnan alaisuuteen ja commitoi se
- Tiedosto menee nykyiseen branchiisi, eli branchiin _laskut_, main ei edelleenkään tiedä tiedostosta mitään
- Luo uusi tiedosto _LICENSE_ ja lisää se versionhallintaan (komennolla add), älä kuitenkaan commitoi
- Tiedoston sisällöllä ei ole merkitystä, se voi olla esim. seuraava

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

For more information, please refer to <https://unlicense.org>
```

- Tarkasta että komennon `git status` tulos on seuraava:

```
On branch laskut
Changes to be committed:
   (use "git restore --staged <file>..." to unstage)

	new file:   LICENCE
```

- Olet siis branchissa _laskut_ ja _LICENSE_ on lisätty staging-alueelle, sitä ei kuitenkaan ole vielä committoitu
- Siirry nyt branchiin **main**
- Komennon `git status`tulos on edelleen sama, _LICENSE_ on edelleen staging-alueella mutta committoimattomana
- Staging-alue **ei kuulu** mihinkään branchiin, eli jos staging-alueella on committoimattomia muutoksia ja vaihdat branchia, säilyvät samat asiat stagingissa
- Muutokset siirtyvät stagingista branchiin ainoastaan komennolla `git commit`
- Committoi nyt staging-alueen muutokset eli _LICENSE_ mainiin
- Komennon `git status` tulos kertoo nyt että staging-alue on tyhjä:

```
On branch main
nothing to commit, working tree clean
```

- Siirry jälleen branchiin **laskut** ja huomaat, että _LICENSE_ ei ole olemassa
- Mergeä **main**-branch branchiin **laskut**
- Siirry nyt takaisin branchiin **main** ja tuhoa branchi **laskut**
  - Tuhoaminen ei onnistu suoraan komennolla `git branch -d`, jos branchin sisältö ei ole kokonaisuudessaan mergetty mainiin. Jos näin on, tee ensin merge mainiin, tai jos tarkoituksena on poistaa branch silti vaikka siinä on vielä eriäviä muutoksia, käytä `git branch -D` poistaaksesi branch eriävine muutoksineen
- Tämän tehtävän ideana oli siis havainnollistaa, että working tree (muutokset joista Git ei ole tietoinen) ja staging (gitiin lisättyihin tiedostoihin tehdyt committoimattomat muutokset)
  **eivät liity** mihinkään branchiin, muutokset siirtyvät staging-alueelta branchiin ainoastaan komennon `git commit` suorituksen seurauksena

### 11. Git: konflikti! [versionhallinta]

Tee paikalliseen Git-repositorioon seuraavat

- Muuta **main**-branchin tiedostoa **index.py** seuraavasti:

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{summa(x, y)}")
print(f"{erotus(x, y)}")

logger("lopetetaan")
```

- alkuun on siis lisätty kommentti ja tyhjä rivi
- committaa muutos

- Tee uusi branchi **bugikorjaus**, mene branchiin ja editoi tiedoston **index.py** loppua (esim. seuraavasti ) ja committaa

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{summa(x, y)}")
print(f"{erotus(x, y)}")

logger("lopetetaan ohjelma")
print("goodbye!") # lisäys bugikorjaus-branchissa
```

- Mene takaisin **main**-branchiin, editoi tiedoston **index.py** alkupuolta esim.seuraavasti (muutos on funktion logger parametrissa) ja committaa muutokset:

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan ohjelma") # muutos mainissa

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{summa(x, y)}")
print(f"{erotus(x, y)}")

logger("lopetetaan ohjelma")
```

- Mergeä branchin **bugikorjaus** sisältö **mainiin**

  - Katso tiedoston **index.py**-sisältöä, sen pitäisi sisältää nyt molemmissa brancheissa tehdyt muutokset
  - **Huom:** jo tässä vaiheessa saattaa syntyä konflikti jos olet vahingossa muuttanut merkkejä väärästä kohtaa tiedostoa! Toimi tällöin ao. ohjeen mukaan.

- Olet edelleen branchissa **main**. Muuta tiedostoa print-komentojen osalta seuraavasti

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan ohjelma")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{x} + {y} = {summa(x, y)}") # muutos mainissa
print(f"{x} - {y} = {erotus(x, y)}") # muutos mainissa

logger("lopetetaan ohjelma")
print("goodbye!")
```

- Committoi muutokset

- Siirry branchiin **bugikorjaus**
- Muuta nyt tiedostoa (jälleen print-komentojen osalta) seuraavasti ja committaa

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan ohjelma")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"Lukujen {x} ja {y} summa on {summa(x, y)}")  # muutos bugikorjaus-branchissa
print(f"Lukujen {x} ja {y} erotus on {erotus(x, y)}")  # muutos bugikorjaus-branchissa

logger("lopetetaan ohjelma")
print("goodbye!")
```

- Mergeä branchin **main** sisältö branchiin **bugikorjaus**
  - Nyt pitäisi aiheutua konflikti, komento aiheuttaa tulostuksen

```
Auto-merging index.py
CONFLICT (content): Merge conflict in index.py
Automatic merge failed; fix conflicts and then commit the result.
```

- Git ei siis osannut yhdistää tiedostoon tehtyjä muutoksia, koska ne kohdistuvat samoille riveille, seurauksena on konflikti.

- Ratkaise konflikti:
  - Editoi tiedoston **index.py** sisältö haluamaksesi
  - Ja toimi edellä mainitun artikkelien ohjeen mukaan, eli lisää konfliktoinut tiedosto staging-alueelle ja committoi

Jotkut editorit, esim [Visual Studio Code](https://code.visualstudio.com) sisältävät sisäänrakennetusti niin sanotun _merge toolin_, joka osaa jossain määrin helpottaa konfliktien ratkaisua:

![]({{ "/images/lh2-merge.png" | absolute_url }}){:height="350px" }

### 12. Git: branchit ja GitHub [versionhallinta]

Aloita lukemalla ProGit-kirjasta luku [Remote Branches](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches).

- Palaa branchiin *main* ja pushaa se GitHubiin. Jos päädyt seuraavaan virheilmoitukseen, toimi se ohjeen mukaan ja pushaa uudelleen:

´´´
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
´´´

- Mene branchiin **bugikorjaus** ja pushaa se GitHubiin.

- Varmista, että näet GitHubissa molemmat brachit

![]({{ "/images/github1.png" | absolute_url }})

Kloonaa GitHub-repositoriosta koneellesi **toinen klooni**:

- Kuten huomaat (komennolla `git branch`) ainoastaan haara *main* tulee  mukana oletusarvoisesti kloonatessa 
- Tee klooniin branch joka "träkkää" GitHubissa olevan projektisi branchia **bugikorjaus** (ks. <https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches> kohta Tracking Branches)
- Lisää "träkkäävään" branchiin tiedosto _changelog.txt_, committaa ja pushaa branchi GitHubiin
- Tarkastele GitHub-repositoriota selaimella, varmista että branchi päivittyy
- Tee klooniin uusi branchi **tulo** ja sinne kahden luvun tulon laskeva funktio tiedostoon `tulo.py`
- Muuta ohjelmaa seuraavasti

```py
from logger import logger
from summa import summa
from erotus import erotus
from tulo import tulo

logger("aloitetaan ohjelma")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{x} + {y} = {summa(x, y)}") 
print(f"{x} - {y} = {erotus(x, y)}") 
print(f"{x} * {y} = {tulo(x, y)}") 

logger("lopetetaan")
print("goodbye!")
```
- Committaa ja pushaa kloonin branchin **tulo** muutokset GitHubiin ja varmista, että ne näkyvät siellä

Mene GitHub-repositorion **alkuperäiseen** paikalliseen kopioon:

- Äsken luotu branchi ei ole vielä alkuperäisessä kopiossa
- Tee alkuperäiseen kopioon branchia **tulo** träkkäävä branchi
- Mergeä branchi **tulo** mainiin ja tuhoa branchi **tulo** sekä paikallisesti että GitHubista
- Tee nyt uusi branchi, nimeltaan **osamaara**, lisää branchiin tiedosto `osamaara.py` ja pushaa se GitHubiin

Mene jälleen hetki sitten luotuun repositorion klooniin
- Anna komento `git remote show origin`. Komennon tulostuksen pitäisi näyttää seuraavalta:

```bash
* remote origin
  Fetch URL: git@github.com:mluukkai/ohtu-palautukset.git
  Push  URL: git@github.com:mluukkai/ohtu-palautukset.git
  HEAD branch: main
  Remote branches:
    bugikorjaus              tracked
    main                     tracked
    osamaara                 new (next fetch will store in remotes/origin)
    refs/remotes/origin/tulo stale (use 'git remote prune' to remove)
  Local branches configured for 'git pull':
    bugikorjaus merges with remote bugikorjaus
    main        merges with remote main
    tulo        merges with remote tulo
  Local refs configured for 'git push':
    bugikorjaus pushes to bugikorjaus (up to date)
    main        pushes to main        (up to date)
```

- Komento kertoo, että Remote (eli GitHub) ja Local (eli paikallinen klooni) eivät ole branchien suhteen samassa tilassa. Jo tuhottu branchi **tulo** löytyy vielä paikallisesti, kun taas uutta branchia **osamaara** ei paikallisesti vielä ole.
- Korjaa tilanne siten, että `git remote show origin` tulostaa

```bash
* remote origin
  Fetch URL: git@github.com:mluukkai/ohtu-palautukset.git
  Push  URL: git@github.com:mluukkai/ohtu-palautukset.git
  HEAD branch: main
  Remote branches:
    bugikorjaus tracked
    main        tracked
    osamaara    tracked
  Local branches configured for 'git pull':
    bugikorjaus merges with remote bugikorjaus
    main        merges with remote main
    osamaara    merges with remote osamaara
  Local refs configured for 'git push':
    bugikorjaus pushes to bugikorjaus (up to date)
    main        pushes to main        (up to date)
    osamaara    pushes to osamaara    (up to date)
```

Branchien kanssa työskentely voi aluksi tuntua sekavalta varsinkin jos GitHubissa on myös useita brancheja.

### Mihin brancheja käytetään?

Ohjelmistokehitystiimi voi soveltaa Gitin branchaystä hyvin monella eri tyylillä. Artikkeli
<https://www.atlassian.com/git/tutorials/comparing-workflows> esittelee tähän muutamia vaihtoehtoja. Eräs yleinen tapa branchien käyttöön ovat ns. _featurebranchit_:

> The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the main branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the main branch will never contain broken code, which is a huge advantage for continuous integration environments.

Jos kiinnostaa, lue lisää yllä olevasta dokumentista.

### 13. Git: epäajantasaisen kloonin pushaaminen [versionhallinta]

Demonstroidaan vielä (viime viikon [tehtävässä 11](/tehtavat1#11-github-actions-osa-3) mainittu) usein esiintyvä tilanne, missä epäajantasaisen repositorion pushaaminen GitHubissa olevaan etärepositorioon epäonnistuu.

- Mene alkuperäisen repositorion paikallisen kloonin **main**-haaraan, tee jokin muutos, commitoi ja pushaa se GitHubiin
- Mene toisen kloonin **main**-haaraan ja tee sinne jokin muutos
- commitoi ja pushaa muutos GitHubiin
- Kaikki ei kuitenkaan mene hyvin, seurauksena on seuraavantyylinen virheilmoitus:

```
$ git push
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'git@github.com:mluukkai/ohtu-palautukset.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Virheen syynä on se, että GitHubissa oleva **main**-haara oli edellä paikallisen repositorion **main**-haaraa.

Ongelma ratkeaa seuraavasti. Tee ensin komento `git pull`. Saat gitiltä pitkän valitusviestin:

```
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
```

Käytännössä Git haluaa tietää minkälaisella strategialla paikallisen ja etärepositoriosi koodi tulisi yhdistää. Vaihtoehdoista kannattanee valita keskimmäinen, eli anna komentorivillä komento

```
git config pull.rebase true 
```

Käytännössä valittu vaihtoehto tarkoittaa sitä, että Git suorittaa uudet lokaalit commitit etärepositoriossa olevien committien perään.

Voit nyt pullata koodin uudelleen komennolla `git pull`. Komento `git push` onnistuu nyt. Jatkossa vastaavista tilanteista selviää komennoilla `git pull` ja `git push`.

- Eli toimi näin ja varmista, että tekemäsi muutokset menevät GitHubiin


{% include submission_instructions.md %}
