---
layout: page
title: Viikko 2
inheader: no
permalink: /tehtavat2/
---

{% include paivitys_kesken.md %}

{% include miniproj_ilmo.md %}

{% include laskari_info.md part=2 %}

Viikon ensimmäisessä ja toisessa tehtävässä tutustutaan koodin _staattiseen analyysin_ pylint-työkalun avulla. Gitiin tutustuminen jatkuu tehtävissä 3-7. Laskarien lopuksi jatketaan _riippuvuuksien injektoinnin_ parissa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Osa git-tehtävistä (tehtävät 5-7) tehdään ainoastaan paikalliseen repositorioon, eli ne eivät näy palautuksessa mitenkään.

Muut Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

Tehtävät 3 ja 4 laajentavat viime viikon ensimmäistä tehtäväsarjaa, eli ne palautetaan **ohtuvarasto**-repositorioon, siis samaan mitä käytettiin viikon 1 tehtävissä 2-13. Muut tehtävät palautetaan **palautusrepositorioon**, eli samaan mihin palautit ensimmäisen viikon tehtävät 14-17.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Poetryn harjoittelua

**Tämä tehtävä tehdään palautusrepositorioon**, siis samaan mihin tehtiin viikon 1 tehtävät 14-17

- Tee palautusrepositorioon hakemisto _viikko2_ ja sen sisälle hakemisto _poetry-web_ tätä tehtävää varten
- Lue [täältä](/tehtavat2/#tehtävien-palauttaminen) lisää tehtävien palautusrepositorioista

{% include no_pip2.md %}

Tässä tehtävässä harjoittelemme lisää Poetryn käyttöä ja tutustumme semanttiseen versiointiin. Apua tehtävän tekoon saa mm. Ohjelmistotekniikka-kurssilta lainatusta [Poetry-ohjeesta](/poetry) ja [Poetryn dokumentaatiosta](https://python-poetry.org/docs/).

Kuvitellaan tilanne, jossa työskentelet ohjelmistokehittäjänä kehitystiimissä, joka on alkamassa kehittämään web-sovellusta. Olette päätyneet kehittämään sovelluksen Pythonilla ja käyttämään Poetrya riippuvuuksien hallinnassa.

Tee seuraavat toimenpiteet:

- Aluksi Poetry-pohjainen projekti täytyy alustaa. **Alusta projekti Poetryn avulla _poetry-web_ nimiseen hakemistoon tehtävien palautukseen käyttämäsi repositorion hakemiston viikko2 sisälle**. Muista käyttää alustuksessa komentoa `poetry init --python "^3.10"`, jotta projektin Python-version vaatimus asetetaan oikein.
- Etsit Googlettamalla sopivia kirjastoja web-sovellusta varten ja törmäät [Flask](https://pypi.org/project/Flask/)-viitekehykseen. **Asenna Flask projektin riippuvuudeksi Poetryn avulla**
- Sovelluksessa ilmenee ensimmäinen bugi. Syynä oli luultavasti se, ettei sovellukselle ole toteutettu vielä yhtään testiä. Päädyt käyttämään testauksessa [pytest](https://pypi.org/project/pytest/)-viitekehystä. **Asenna pytest projektin _kehityksen aikaiseksi riippuvuudeksi_**
  - Pohdi itseksesi, miksi on hyödyllistä määritellä riippuvuus erikseen kehityksen aikaiseksi riippuvuudeksi
- Sovelluksessa käsitellään paljon JSON-muotoista dataa, joten päädyt etsimään sen serialisointiin ja deserialisointiin sopivia kirjastoja. Törmäät tarkoitukseen sopivaan kirjastoon nimeltä [jsonpickle](https://pypi.org/project/jsonpickle/). **Asenna jsonpickle projektin riippuvuudeksi**
- Huomaat bugin jsonpickle-kirjastossa, joten alat tutkimaan sen GitHub repositorion [issueita](https://github.com/jsonpickle/jsonpickle/issues). Eräässä issuessa kerrotaan, että löytämäsi bugi ei ilmene kirjaston versiossa `1.3.0`. **Asenna jsonpickle-kirjastosta versio `1.3.0`**.
  - Tutustu _semanttiseen versiointiin_ [täällä](https://semver.org/)
  - Pohdi itseksesi, mitä hyötyjä semanttisesta versioinnista on. Jos kirjasto noudattaa semanttista versiointia, miksi kirjaston version `1.1.2` päivittäminen versioon `2.0.0` saattaa sisältää riskejä? Miksei samoja riskejä luultavasti ole version `1.1.3` kanssa?
  - Versiovaatimuksissa on mukana usein `^`-, tai `~`-etuliite. Pohdi itseksesi, mitä näillä ilmaistaan. Asiaa käsitellään mm. [Poetryn dokumentaatiossa](https://python-poetry.org/docs/dependency-specification/)
- Päätät, että jsonpickle-kirjastosta on ollut vain harmia ja voit helposti toteuttaa sen tarjoaman toiminallisuuden itse. **Poista jsonpickle projektin riippuvuuksien joukosta**

Palautettavasta _poetry-web_-hakemistosta ei tarvitse löytyä muita tiedostoja kuin _pyproject.toml_ ja _poetry.lock_.

### 2. Riippuvuuksien hyödyntäminen

**Tämä tehtävä tehdään palautusrepositorioon**, siis samaan mihin teit edellisen tehtävän

Ohjelmistokehittäjälle tulee usein vastaan tilanne, jossa pitäisi löytää tiettyyn käyttötarkoitukseen sopiva kirjasto. Harjoittelemme kyseistä tilannetta tässä tehtävässä.

[TOML](https://toml.io/en/) on eräs helppolukuinen datan esitysformaatti, jota käytetään usein konfiguraatiotiedostoissa, kuten Poetryn _pyproject.toml_-tiedostossa. [Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _koodi/viikko2/project-reader_ on pohja ohjelmalle, jonka tarkoituksena on lukea projektin tietoja annetusta osoitteesta löytyvästä _pyproject.toml_-tiedostosta.

- **Kopioi aluksi projekti palautusrepositorioon hakemiston viikko2 sisälle.**

Tehtävänäsi on ensin löytää sopiva kirjasto, jonka avulla TOML-muotoisista merkkijonoista voi muodostaa Pythonin tietorakenteita. Voit hyödyntää tässä esimerkiksi [PyPI](https://pypi.org/)-sivuston hakua tai Googlea. PyPI:ssä eräs hyvä hakusana voisi olla esimerkiksi "toml". Tutustu kirjastojen kuvauksiin ja päättele sen perusteella, sopiiko kirjasto käyttötarkoitukseen. Kun löydät sopivan kirjaston, asenna se projektiin Poetryn avulla.

**HUOM:** PyPI:n asennusohjeista löytyy usein pip-asennuksen ohje `pip install <kirjasto>`. Kaikki kirjastot pystyy kuitenkin asentamaan yhtä lailla Poetryn avulla komennolla `poetry add <kirjasto>`.

Ota sen jälkeen kirjasto käyttöön projektin <i>src/project_reader.py</i>-tiedoston `ProjectReader`-luokan metodissa `get_project`. Metodin `content`-muuttujaan on tallennettu tiedoston sisältö:

```python
def get_project(self):
    # tiedoston merkkijonomuotoinen sisältö
    content = request.urlopen(self._url).read().decode("utf-8")
    print(content)

    # deserialisoi TOML-formaatissa oleva merkkijono ja muodosta Project-olio sen tietojen perusteella
    return Project("Test name", "Test description", [], [])
```

Tulosta jokainen välivaihe (tiedoston sisältö ja kirjaston avulla deserialisoitu sisältö) `print`-funktion avulla, jotta tiedät, minkä muotoista data on. Muodosta tämän jälkeen tiedoista `Project`-olio antamalla sille konstruktorin kautta projektin nimi, kuvaus, lista riippuvuuksista ja lista kehityksen aikaisista riippuvuuksista. Kun ohjelma toimii halutulla tavalla, voit poistaa debuggauksessa käytetyt tulostukset.

Ohjelman voi käynnistää virtuaaliympäristössä komennolla `python3 src/index.py`. Esimerkkinä käytetyn _pyproject.toml_-tiedoston tapauksessa ohjelman tulostuksen tulisi olla seuraava:

```
Name: Ohtutesting app
Description: Sovellus joka toimii testisyötteenä ohtun viikon 2 laskareihin
Dependencies: python, Flask, editdistance
Development dependencies: coverage, robotframework, robotframework-seleniumlibrary, requests
```

*HUOM* ohjelma ei saa sisältää kuin ainoastaan tiedostossa index.py olevan print-komennon, joka tuostaa `Project`-olion merkkijonoesityksen!

Laajenna ja hio vielä ratkaisua siten, että esimerkkiprojektin osalta lopputulos näyttää suunilleen seuraavalta

```
Name: Ohtutesting app
Description: Sovellus joka toimii testisyötteenä ohtun viikon 2 laskareihin
License: MIT

Authors:
- Matti Luukkainen
- Kalle Ilves

Dependencies:
- python
- Flask
- editdistance

Development dependencies:
- coverage
- robotframework
- robotframework-seleniumlibrary
- requests
```

### 3. Pylint ja koodin staattinen analyysi

**Tämä ja seuraava tehtävä tehdään viime viikon tehtävissä 2-13 käytettyyn ohtuvarasto-repositorioon**

Kurssin [kolmannessa osassa](/osa3) teemana on ohjelmien laadun varmistaminen. Eräs ohjelman laatua useimmiten edistävä tekijä on järkevän _koodityylin_ noudattaminen. Koodin tyyliä voidaan tarkkailla automatisoidusti niin sanottujen staattisen analyysin työkaluilla.

Tutustutaan nyt staattisen analyysin työkaluun nimeltään [Pylint](https://www.pylint.org/). Pylint on jo ehkä tullut tutuksi kurssilta Ohjelmistotekniikka. Ennen kuin syvennymme aiheeseen, tutustu pylintin käyttöön lukemalla kurssilta Ohjelmistotekniikka lainattu [Pylint-ohje](/pylint).

**Mene nyt viikon 1 varasto-projektiin liittyvien tehtävien palautusrepositorioosi.**

Ota varasto-projektissa käyttöön Pylint noudattamalla lukemiasi ohjeita. Konfiguraationa käytettävän _.pylintrc_-tiedoston sisältö tulee toistaiseksi olla [tämän]({{site.python_exercise_repo_url}}/blob/main/viikko2/varasto/.pylintrc) tiedoston sisällön mukainen.

Pylintin tarkistamat säännöt konfiguroidaan _.pylintrc_-tiedostoon oikeiden osioiden alle. `[MASTER]`-osio sisältää yleistä konfiguraatio, kuten mitkä hakemistot tai tiedostot pitäisi jättää tarkistuksien ulkopuolelle. `[MESSAGE CONTROL]`-osiossa taas voidaan määritellä esimerkiksi tarkistuksia, joista ei tarvitse huomauttaa. Loput osiot ovat eri sääntöjen konfigurointia varten, jotka on dokumentoitu pylintin [dokumentaatiossa](http://pylint.pycqa.org/en/2.6/technical_reference/features.html). Jos haluamme esimerkiksi asettaa funktioiden ja metodien argumenttien maksimilukumäärään neljään, voimme lisätä sen `[DESIGN]`-osioon seuraavasti:

```
[DESIGN]

max-args=4
```

Helpoin tapa löytää sääntöjä on hakemalla sopivalla hakusanalla niitä dokumentaatiosta tai Googlettamalla. Oikean osion löytää dokumentaatiosta (esimerkiksi `max-args`-sääntö löytyy dokumentaatiosta _Design checker_ -osion alta).

**Toimi nyt seuraavasti:**

- Siirry virtuaaliympäristöön komennolla `poetry shell` ja suorita sen sisällä komento `pylint src`. Jos tarkistuksissa löytyy virheitä, korjaa ne
- Määrittele nyt tiedostoon _.pylintrc_ seuraavat säännöt (katso lista säännöistä pylintin [dokumentaatiosta](http://pylint.pycqa.org/en/2.6/technical_reference/features.html)):

  - Rivin pituus on maksimissaan 80 merkkiä
    - Vinkki: sääntö löytyy [Format checker](http://pylint.pycqa.org/en/2.6/technical_reference/features.html#format-checker) -osiosta ja tulee määrittää `[FORMAT]`-osion alle
  - Ei yli kahta sisäkkäistä lohkoa (esimerkiksi if- tai for-lohkoa) funktion tai metodin sisällä
    - Vinkki: sääntö löytyy [Refactoring checker](http://pylint.pycqa.org/en/2.6/technical_reference/features.html#refactoring-checker) -osiosta ja tulee määrittää `[REFACTORING]`-osion alle)
  - Funktiossa tai metodissa on enintään 15 lausetta (statements), etsi sääntö dokumentaatiosta
  - [Syklomaattinen koodikompleksisuus](https://en.wikipedia.org/wiki/Cyclomatic_complexity) korkeintaan 3
    - Selvitä mitä syklomaattisella kompleksisuudella tarkoitetaan
    - Vinkki: sääntö löytyy _Design checker_ -osiosta [tämän](https://pylint.pycqa.org/en/latest/user_guide/checkers/extensions.html#design-checker) lisäosan avulla. Saat sen käyttöön lisäämällä `[MASTER]`-osioon `load-plugins=pylint.extensions.mccabe`-rivin

- Muuta koodiasi siten, että saat jokaisen määritellyistä pylint-säännöistä rikkoutumaan
- Korjaa koodisi ja varmista, että se noudattaa kaikkia sääntöjä
  - `Varasto`-luokan konstruktori luultavasti rikkoo `max-complexity`-sääntöä. Voit esimerkiksi miettiä, miten voisit esittää `tilavuus`-attribuutin arvon if-lauseen sijaan jotenkin muuten.

Usein _.pylintrc_-konfiguraatiota ei ole järkevää kirjoittaa tyhjästä käsin, vaan käytetään lähtökohtana pylintin suosittelemaa konfiguraatiota. Suoitellun konfiguraation voi tulostaa komentoriville komennolla `pylint --generate-rcfile`.

### 4. Koodin staattinen analyysi ja GitHub Actionit

**Tämä tehtävä tehdään viime viikon tehtävissä 2-13 käytettyyn ohtuvarasto-repositorioon**

Laajenna ohtuvarastosi GitHub Actionien määritelmää siten, että myös pylint-tarkastukset suoritetaan aina kun koodi pushataan GitHubiin.

Varmista, että GitHub huomaa tilanteen, missä koodi rikkoo projektin pylint-sääntöjä:

![]({{ "/images/py-lh2-11.png" | absolute_url }})

Varmista myös, että kun korjaat koodin, kaikki toimii taas moitteettomasti:

![]({{ "/images/py-lh2-12.png" | absolute_url }})

### 5. Git: branchit [versionhallinta]

**Tätä tehtävää ei palauteta mihinkään**

Lue brancheja käsittelevät osuudet seuraavasta <https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging>

- jos haluat lukea hieman perusteellisemman selityksen asiasta, lue <https://git-scm.com/book/en/v2:n luku kolme kokonaisuudessaan

Kannattaa huomioida myös erittäin hyvä brancheja käsittelevä visuaalinen materiaali osoitteessa <https://learngitbranching.js.org/>

Varsin selkeältä vaikuttaa myös <https://www.atlassian.com/git/tutorials/using-branches>

**Huom:** kun liikut branchien välillä kannattaa pitää working tree ja staging -alue tyhjinä!

Tee seuraavat paikalliseen git-repositorioosi (tehtävää ei palauteta, eli kyseessä **ei** siis tarvitse olla tehtävien palautusrepositorio)

- Huom: seuraavassa käytetään versionhallinnan päähaarasta gitin oletusarvoista nimeä _master_. GitHubissa päähaarasta käytetään nykyään nimeä _main_, ja jos teet tehtävän palautusrepositorioosi, on päähaarasi nimi todennäköisesti _main_

- Luo repositorio ja committaa masteriin tiedosto **index.py** jonka sisältö on seuraava

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

- Siirry takaisin **master**-branchiin (komennolla`git checkout master`), tiedoston **summa.py** ei pitäisi nyt näkyä
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

- Committaa nämä muutokset **master**-haaraan

- Mene branchiin **laskut** ja tarkasta, että **masteriin** lisätty tiedosto ei ole branchissa ja että tiedostoon **index.py** tehty muutos ei näy
- Lisää ja committaa branchiin tiedosto **erotus.py** jolla on seuraava sisältö

```python
def erotus(x, y):
    return x-y
```

- Siirry takaisin **master**-branchiin
- Tarkasta että **laskut**-branchiin lisätyt muutokset eivät ole masterissa
- Tarkastele komennolla `gitk --all` miltä repositorio ja branchit näyttävät (`gitk`-komento toimii Windowsilla ainakin GitHub for Windowsin Git Shellissä.)
  - Saat asennettua Maciin `gitk`:n [tämän ohjeen](https://www.geekbitzone.com/posts/git/gitk-for-macos/) avulla
    - jos asennus ei onnistu, on hyvä korvaaja gitk:lle [sourcetree](https://www.sourcetreeapp.com)
- Mergeä branchin **laskut** sisältö **masteriin** (tämä tapahtuu komennolla`git merge laskut`)
  - Mergeäminen aiheuttaa ns merge-commitin, ja avaa tekstieditorin mihin joudut kirjoittamaan commit-viestin
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

### 6. Git: branchit ja staging-alue [versionhallinta]

**Tätä tehtävää ei palauteta mihinkään**

- Olet nyt repositoriosi master-haarassa
- Luo uusi tiedosto _README.md_, **älä** kuitenkaan lisää ja commitoi tiedostoa versionhallintaan
- Tiedoston sisällöllä ei ole merkitystä, se voi olla esim. seuraava

```
## git-harjoituksia

Harjoitellaan branchien käyttöä
```

- Komennon `git status` tulostuksen pitäisi olla seuraava

```
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md

nothing added to commit but untracked files present (use "git add" to track)
```

- Siirry nyt branchiin **laskut**
- Suorita uudelleen komento `git status`
- Huomaat, että tulostus on edelleen sama, tiedosto ei edelleenkään ole versionhallinnan alla
- Eli vaikka olit master-haarassa kun loit tiedoston, ei master-haara eikä koko git tiedä tiedostosta vielä mitään ennen kuin lisäät sen versionhallinnan alaisuuteen komennolla `git add`
- Lisää tiedosto nyt versionhallinnan alaisuuteen ja commitoi se
- Tiedosto menee nykyiseen branchiisi, eli branchiin _laskut_, master ei edelleenkään tiedä tiedostosta mitään
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
  (use "git reset HEAD <file>..." to unstage)

	new file:   LICENCE
```

- Olet siis branchissa _laskut_ ja _LICENSE_ on lisätty staging-alueelle, sitä ei kuitenkaan ole vielä committoitu
- Siirry nyt branchiin **master**
- Komennon `git status`tulos on edelleen sama, _LICENSE_ on edelleen staging-alueella mutta committoimattomana
- Staging-alue **ei kuulu** mihinkään branchiin, eli jos staging-alueella on committoimattomia muutoksia ja vaihdat branchia, säilyvät samat asiat stagingissa
- Muutokset siirtyvät stagingista branchiin ainoastaan komennolla `git commit`
- Committoi nyt staging-alueen muutokset eli _LICENSE_ masteriin
- Komennon `git status` tulos kertoo nyt että staging-alue on tyhjä:

```
On branch master
nothing to commit, working tree clean
```

- Siirry jälleen branchiin **laskut** ja huomaat, että _LICENSE_ ei ole olemassa
- Mergeä **master** branchiin **laskut**
- Siirry nyt masteriin ja tuhoa branchi **laskut**
  - Tuhoaminen ei onnistu suoraan komennon `git branch` branchin poistavalla flagilla `-d`, jos branchin sisältö ei ole kokonaisuudessan mergetty masteriin. Jos näin on, tee ensin merge masteriin, tai jos tarkoituksena on poistaa branch silti vaikka siinä on vielä eriäviä muutoksia, käytä `git branch -D` poistaaksesi branch eriävine muutoksineen
- Tämän tehtävän ideana oli siis havainnollistaa, että working tree (muutokset joista git ei ole tietoinen) ja staging (gitiin lisättyihin tiedostoihin tehdyt committoimattomat muutokset)
  **eivät liity** mihinkään branchiin, muutokset siirtyvät staging-alueelta branchiin ainoastaan komennon `git commit` suorituksen seurauksena

### 7. Git: konflikti! [versionhallinta]

**Tätä tehtävää ei palauteta mihinkään**

Tee paikalliseen git-repoon seuraavat

- Muuta **master**-branchin tiedostoa **index.py** seuraavasti:

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

- Mene takaisin **master**-branchiin, editoi tiedoston **index.py** alkupuolta esim.seuraavasti (muutos on funktion logger parametrissa) ja committaa muutokset:

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan ohjelma") # muutos masterissa

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{summa(x, y)}")
print(f"{erotus(x, y)}")

logger("lopetetaan ohjelma")
```

- Mergeä branchin **bugikorjaus** sisältö **masteriin**

  - Katso tiedoston **index.py**-sisältöä, sen pitäisi sisältää nyt molemmissa brancheissa tehdyt muutokset
  - **Huom:** jo tässä vaiheessa saattaa syntyä konflikti jos olet vahingossa muuttanut merkkejä väärästä kohtaa tiedostoa! Toimi tällöin ao. ohjeen mukaan.

- Muuta tiedostoa print-komentojen osalta seuraavasti

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan ohjelma")

x = int(input("luku 1: "))
y = int(input("luku 2: "))
print(f"{x} + {y} = {summa(x, y)}") # muutos masterissa
print(f"{x} - {y} = {erotus(x, y)}") # muutos masterissa

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

- Mergeä branchin **master** sisältö branchiin **bugikorjaus**
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

### 8. Git: branchit ja GitHub [versionhallinta]

**Tämä tehtävä tehdään palautusrepositorioon**

**HUOM** tässä tehtävässä on tunnetusti välillä haastava seurata jokaista askelta siten, että päätyy aina samaan tilaan mitä tehtävä odottaa. Ei kannata stressata tästä liikaa. Pääasia tehtävässä on oppia miten branchit saadaan toimimaan lokaalisti ja GitHubissa siten, että _git push_ ja _git pull_ toimivat kaikille brancheille.

Aloita lukemalla ProGit-kirjasta luku [Remote Branches](http://git-scm.com/book/en/Git-Branching-Remote-Branches).

Lisätään seuraavaksi branch GitHubiin:

- Luo palautusrepositorion paikalliseen kopioon branchit **haara1** ja **haara2**
- Mene branchiin **haara1**, lisää sinne (hakemiston viikko2 juureen) tiedosto **haara1.txt** ja committaa
- Mene branchiin **haara2**, lisää sinnekin jokin (hakemiston viikko2 juureen) tiedosto **haara2.txt** ja committaa
- Pushaa uudet branchit GitHubiin
- Tarkastele GitHub-repositoriota selaimella, varmista että branchit syntyvät ja niillä on haluttu sisältö:

![]({{ "/images/lh2-branch1.png" | absolute_url }}){:height="350px" }

Kloonaa GitHub-repositoriosta koneellesi toinen kopio:

- Kuten huomaat, eivät branchit tule kloonattuun kopioon
- Tee paikalliseen kopioon branch joka "träkkää" GitHubissa olevan projektisi branchia **haara1** (ks. <http://git-scm.com/book/en/Git-Branching-Remote-Branches> kohta Tracking Branches)
- Lisää "träkkäävään" branchiin jokin tiedosto (hakemistoon viikko2), committaa ja pushaa branchi GitHubiin
- Tarkastele GitHub-repositoriota selaimella, varmista että branchi päivittyy

Mene GitHub-repon alkuperäiseen paikalliseen kopioon:

- Mene branchiin **haara1** ja pullaa muutokset GitHubiin vastaavasta branchista
  - huom: koska kyseessä ei ole "träkkäävä" branchi, joudut pullaamaan komennolla `git pull origin haara1`
- Mene branchiin **haara2**, lisää sitten tiedosto, committaa ja pushaa branchi GitHubiin
  - Koska kyseessä ei ole "träkkäävä" branchi, ei komento `git push` riitä vaan joudut määrittelemään branchin jonne push kohdistuu eli antamaan komennon `git push origin haara2`
- Komennon `git push` tuloste antaa ohjeen, miten saat komennon toimimaan haaran sisältä ilman lisäparametreja:

```
$ git push
fatal: The current branch haara2 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin haara2
```

Mene jälleen toiseen kopioon:

- Suorita komento `git remote show origin`
- Komento kertoo "originissa" eli GitHubissa olevien branchien ja paikallisten branchien suhteen

```
* remote origin
  Fetch URL: git@github.com:mluukkai/ohtu-s22-palautukset.git
  Push  URL: git@github.com:mluukkai/ohtu-s22-palautukset.git
  HEAD branch: main
  Remote branches:
    haara1 tracked
    haara2 tracked
    main   tracked
  Local branches configured for 'git pull':
    haara1 merges with remote haara1
    main   merges with remote main
  Local refs configured for 'git push':
    haara1 pushes to haara1 (up to date)
    main   pushes to main   (up to date)
```

- Komennon tulosteesta selviää, että main ja haara1 ovat konfiguroitu toimimaan suoraan `git pull` ja `git push` -komennoilla
- Tee toiseen lokaaliin kopioon GitHubissa olevan projektisi branchia **haara2** träkkäävä branch
- Suorita jälleen `git remote show origin`, mitä muutoksia huomaat?
- Tee branchiin **haara2** muutoksia ja pushaa ne githubiin
  - Huom: koska kyseessä on träkkäävä branch, riittää git push
- tarkastele GitHub-repositoriota selaimella, varmista että branchi päivittyy

Palaa vielä alkuperäiseen lokaaliin repositorioon:

- Suorita komento `git remote show origin`
- Tulostus kertoo, että lokaaleista haaroista ainoastaan _master_ on konfiguroitu komennon `git pull` osalta:

```
* remote origin
  Fetch URL: git@github.com:mluukkai/ohtu-s22-palautukset.git
  Push  URL: git@github.com:mluukkai/ohtu-s22-palautukset.git
  HEAD branch: master
  Remote branches:
    haara1 tracked
    haara2 tracked
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local refs configured for 'git push':
    haara1 pushes to haara1 (up to date)
    haara2 pushes to haara2 (up to date)
    master pushes to master (up to date)
```

- Suorita `git pull` branchissä _haara1_
- Komennon tuloste antaa ohjeen, miten saat konfiguroitua `git pull` komennon toimimaan _haara1_:n sisällä ilman lisäparametreja:

```
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> haara1

```

- Kun annat komennon, sen jälkeen haara träkkää GitHubissa olevaa haaraa ja komento `git pull` voidaan antaa ilman parametreja

Branchien kanssa työskentely voi aluksi tuntua sekavalta varsinkin jos GitHubissa on myös useita brancheja.

### Mihin brancheja käytetään?

Ohjelmistotiimi voi soveltaa Gitin branchaystä hyvin monella eri tyylillä. Artikkeli
<https://www.atlassian.com/git/tutorials/comparing-workflows> esittelee tähän muutamia vaihtoehtoja. Eräs yleinen tapa branchien käyttöön ovat ns. _featurebranchit_:

> The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the master branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the master branch will never contain broken code, which is a huge advantage for continuous integration environments.

Jos kiinnostaa, lue lisää yllä olevasta dokumentista.

### 9. Git: epäajantasaisen kopion pushaaminen [versionhallinta]

Demonstroidaan usein esiintyvää tilannetta, jossa epäajantasaisen repositorion pushaaminen GitHubissa olevaan etärepositorioon epäonnistuu.

- Mene alkuperäisen repositorion paikallisen kopion **main**-haaraan, tee jokin muutos, commitoi ja pushaa se GitHubiin
- Mene toisen kopion **main**-haaraan ja tee sinne jokin muutos
- commitoi ja pushaa muutos GitHubiin
- Kaikki ei kuitenkaan mene hyvin, seurauksena on seuraavantyylinen virheilmoitus:

```
$ git push
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'git@github.com:mluukkai/ohtu-s22-palautukset.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Virheen syynä on se, että GitHubissa oleva **main**-haara oli edellä paikallisen repositorion **main\***-haaraa. Ongelma korjaantuu tekemällä ensin `git pull`, ratkaisemalla mahdolliset konfliktit ja pushaamalla sitten uudelleen.

- Komennon `git pull` yhteydessä syntyy merge-commit, ja avautuu tekstieditori mihin joudut kirjoittamaan commit-viestin
- Eli toimi näin ja varmista, että tekemäsi muutokset menevät GitHubiin

{% include submission_instructions.md %}


### 10. Pelaajalista

Hae [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _koodi/viikko3/nhl-reader_ lähes tyhjä Poetry-projektin runko. Mukana on kohta tarvitsemasi luokka `Player`.

- Kopioi projekti palatusrepositorioosi, hakemiston _viikko3_ sisälle.

Tehdään ohjelma, jonka avulla voi hakea jääkiekon [NHL-liigan](https://nhl.com) eri kausien tilastotietoja.

Näet tilastojen [JSON](https://en.wikipedia.org/wiki/JSON)-muotoisen raakadatan web-selaimella osoitteesta <https://studies.cs.helsinki.fi/nhlstats/2021-22/players>

Tee ohjelma, joka listaa _suomalaisten pelaajien_ tilastot. Tarvitset ohjelmassa yhtä kirjastoa, eli riippuvuutta. Kyseinen kirjasto on [requests](https://requests.readthedocs.io/en/master/)-kirjasto, jonka avulla voi tehdä HTTP-pyyntöjä. Huomaa, että Pythonilla on myös valmiita moduleeja tähän tarkoitukseen, mutta requests-kirjaston käyttö on huomattavasti näitä moduuleja helpompaa.

Kertaa nopeasti Ohjelmistotekniikka-kurssin [Poetry-ohjeesta](https://ohjelmistotekniikka-hy.github.io/python/viikko2#poetry-ja-riippuvuuksien-hallinta), miten Poetrylla asennetaan riippuvuuksia. Asenna sen jälkeen _requests_-kirjasto projektin riippuvuuksiksi. Käytä kirjastosta uusinta versiota (jonka Poetry asentaa automaattisesti).

Voit ottaa projektisi pohjaksi seuraavan tiedoston:

```python
import requests
from player import Player

def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2021-22/players"
    response = requests.get(url).json()

    print("JSON-muotoinen vastaus:")
    print(response)

    players = []

    for player_dict in response:
        player = Player(
            player_dict['name']
        )

        players.append(player)

    print("Oliot:")

    for player in players:
        print(player)
```

Tehtäväpohjassa on valmiina luokan `Player` koodin runko. Edellä esitetyssä koodissa `requests.get(url)` tekee HTTP-pyynnön, jonka jälkeen `json`-metodin kutsu muuttaa JSON-muotoisen vastauksen Python-tietorakenteiksi. Tässä tilanteessa `response` sisältää listan dictionaryja. Tästä listasta muodostetaan lista `Player`-olioita for-silmukan avulla.

Tee `Player`-luokkaan attribuutit kaikille JSON-datassa oleville kentille, joita ohjelmasi tarvitsee. Ohjelmasi voi toimia esimerkiksi niin, että se tulostaisi pelaajat seuraavalla tavalla:

```
Players from FIN 2021-01-04 19:15:32.858661

Sami Vatanen team CAR  goals 5 assists 18
Janne Kuokkanen team NJD  goals 0 assists 0
Leo Komarov team NYI  goals 4 assists 10
Otto Koivula team NYI  goals 0 assists 0
Kaapo Kakko team NYR  goals 10 assists 13
Juuso Riikola team PIT  goals 1 assists 6
Urho Vaakanainen team BOS  goals 0 assists 0
Tuukka Rask team BOS  goals 0 assists 0
Rasmus Ristolainen team BUF  goals 6 assists 27
...
```

Tulostusasu ei tässä tehtävässä ole oleellista, eikä edes se mitä pelaajien tiedoista tulostetaan.

### 11. Siistimpi pelaajalista

Tulosta suomalaiset pelaajat pisteiden (goals + assists) mukaan järjestettynä. Tarkka tulostusasu ei ole taaskaan oleellinen, mutta se voi esimerkiksi näyttää seuraavalta:

```
Players from FIN 2021-01-04 19:19:40.026464

Sebastian Aho        CAR 38 + 28 = 66
Patrik Laine         WPG 28 + 35 = 63
Teuvo Teravainen     CAR 15 + 48 = 63
Aleksander Barkov    FLA 20 + 42 = 62
Mikko Rantanen       COL 19 + 22 = 41
Kasperi Kapanen      TOR 13 + 23 = 36
Miro Heiskanen       DAL  8 + 27 = 35
Roope Hintz          DAL 19 + 14 = 33
Joonas Donskoi       COL 16 + 17 = 33
Rasmus Ristolainen   BUF  6 + 27 = 33
Mikael Granlund      NSH 17 + 13 = 30
Joel Armia           MTL 16 + 14 = 30
...
```

- Vinkki 1: voit halutessasi hyödyntää [filter](https://docs.python.org/3/library/functions.html#filter)-funktiota.
- Vinkki 2: kokeile, mitä `f"{self.name:20}"` tekee merkkijonoesitykselle `Player`-luokan `__str__`-metodissa. Mitä `:20` koodissa tekee?

### 12. Pelaajalistan refaktorointi

Tällä hetkellä suurin osa pelaajatietoihin liittyvästä koodista on luultavasti `main`-funktiossa. Funktion _koheesion_ aste on melko matala, koska se keskittyy usean toiminallisuuden toteuttamiseen. Koodi kaipaisi siis pientä refaktorointia.

Jaa toiminallisuuden vastuut kahdelle luokkalle: `PlayerReader` ja `PlayerStats`. `PlayerReader`-luokan vastuulla on hakea JSON-muotoiset pelaajat konstruktorin parametrin kautta annetusta osoitteesta ja muodostaa niistä `Player`-olioita. Tämä voi tapahtua esimerkiksi luokan `get_players`-metodissa. `PlayerStats`-luokan vastuulla on muodostaa `PlayerReader`-luokan tarjoamien pelaajien perusteella erilaisia tilastoja. Tässä tehtävässä riittää, että luokalla on metodi `top_scorers_by_nationality`, joka palauttaa parametrina annettetun kansalaisuuden pelaajat pisteiden mukaan laskevassa järjestyksessä (suurin pistemäärä ensin).

Refaktoroinnin jälkeen `main`-funktion tulee näyttää suurin piirtein seuraavalta:

```python
def main():
    url = "https://studies.cs.helsinki.fi/nhlstats/2022-23/players"
    reader = PlayerReader(url)
    stats = PlayerStats(reader)
    players = stats.top_scorers_by_nationality("FIN")

    for player in players:
        print(player)
```

Funktion pitäisi tulostaa samat pelaajat samassa järjestyksessä kuin edellisessä tehtävässä.