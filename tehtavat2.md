---
layout: page
title: Viikko 2
inheader: no
permalink: /tehtavat2/
---

{% include laskari_info.md part=2 %}

Viikon ensimmäisessä ja toisessa tehtävässä tutustutaan koodin _staattiseen analyysin_ pylint-työkalun avulla. Gitiin tutustuminen jatkuu tehtävissä 3-7. Laskarien lopuksi jatketaan _riippuvuuksien injektoinnin_ parissa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

### Tehtävien palauttaminen

Osa git-tehtävistä (tehtävät 5-7) tehdään ainoastaan paikalliseen repositorioon, eli ne eivät näy palautuksessa mitenkään.

Muut tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}>.

Tehtävät 3 ja 4 laajentavat viime viikon ensimmäistä tehtäväsarjaa, eli ne palautetaan samaan repositorioon kuin varasto-projekti. Muut tehtävät voit palauttaa samaan repositorioon mihin palautit ensimmäisen viikon tehtävät 14-16.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/python/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Poetryn harjoittelua

Tässä tehtävässä harjoittelemme lisää Poetryn käyttöä ja tutustumme semanttiseen versiointiin. Apua tehtävän tekoon saa mm. Ohjelmistotekniikka-kurssin [Poetry-ohjeesta](https://ohjelmistotekniikka-hy.github.io/python/poetry) ja [Poetryn dokumentaatiosta](https://python-poetry.org/docs/).

Kuvitellaan tilanne, jossa työskentelet ohjelmistokehittäjänä kehitystiimissä, joka on alkamassa kehittämään web-sovellusta. Olette päätyneet kehittämään sovelluksen Pythonilla ja käyttämään Poetrya riippuvuuksien hallinnassa.

Tee seuraavat toimenpiteet:

- Aluksi Poetry-pohjainen projekti täytyy alustaa. **Alusta projekti Poetryn avulla _poetry-web_ nimiseen hakemistoon tehtävien palautukseen käyttämäsi repositorion sisälle**. Projektin tiedoilla ei ole tämän tehtävän kannalta väliä
- Etsit Googlettamalla sopivia kirjastoja web-sovellusta varten ja törmäät [Flask](https://pypi.org/project/Flask/)-viitekehykseen. **Asenne Flask projektin riippuvuudeksi Poetryn avulla**
- Sovelluksessa ilmenee ensimmäinen bugi. Syynä oli luultavasti se, ettei sovellukselle ole toteutettu vielä yhtään testiä. Päädyt käyttämään testauksessa [pytest](https://pypi.org/project/pytest/)-viitekehystä. **Asenne pytest projektin _kehityksen aikaiseksi riippuvuudeksi_**
  - Pohdi itseksesi, miksi on hyödyllistä määritellä riippuvuus erikseen kehityksen aikaiseksi riippuvuudeksi
- Sovelluksessa käsitellään paljon JSON-muotoista dataa, joten päädyt etsimään sen serialisointiin ja deserialisointiin sopivia kirjastoja. Törmäät tarkoitukseen sopivaan kirjastoon nimeltä [jsonpickle](https://pypi.org/project/jsonpickle/). **Asenna jsonpickle projektin riippuvuudeksi**
- Huomaat bugin jsonpickle-kirjastossa, joten alat tutkimaan sen GitHub repositorion [issueita](https://github.com/jsonpickle/jsonpickle/issues). Eräässä issuessa kerrotaan, että löytämäsi bugi ei ilmene kirjaston versiossa `1.3.0`. **Asenna jsonpickle-kirjastosta versio `1.3.0`**.
  - Tutustu _semanttiseen versiointiin_ [täällä](https://semver.org/)
  - Pohdi itseksesi, mitä hyötyjä semanttisesta versioinnista on. Jos kirjasto noudattaa semanttista versiointia, miksi kirjaston version `1.1.2` päivittäminen versioon `2.0.0` saattaa sisältää riskejä? Miksei samoja riskejä luultavasti ole version `1.1.3` kanssa?
  - Versiovaatimuksissa on mukana usein `^`-, tai `~`-etuliite. Pohdi itseksesi, mitä näillä ilmaistaan. Asiaa käsitellään mm. [Poetryn dokumentaatiossa](https://python-poetry.org/docs/dependency-specification/)
- Päätät, että jsonpickle-kirjastosta on ollut vain harmia ja voit helposti toteuttaa sen tarjoaman toiminallisuuden itse. **Poista jsonpickle projektin riippuvuuksien joukosta**

Palautettavasta _poetry-web_-hakemistosta ei tarvitse löytyä muita tiedostoja kuin _pyproject.toml_ ja _poetry.lock_.

### 2. Riippuvuuksien hyödyntäminen

Ohjelmistokehittäjälle tulee usein vastaan tilanne, jossa pitäisi löytää tiettyyn käyttötarkoitukseen sopiva kirjasto. Harjoittelemme kyseistä tilannetta tässä tehtävässä.

[TOML](https://toml.io/en/) on eräs helppolukuinen datan esitysformaatti, jota käytetään usein konfiguraatiotiedostoissa, kuten Poetryn _pyproject.toml_-tiedostossa. [Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _koodi/viikko2/project-reader_ on pohja ohjelmalle, jonka tarkoituksena on lukea projektin tietoja annetusta osoitteesta löytyvästä _pyproject.toml_-tiedostosta. **Kopioi aluksi projekti tehtävien palautukseen käyttämäsi repositorion sisälle.**

Tehtävänäsi on ensin löytää sopiva kirjasto, jonka avulla TOML-muotoisista merkkijonoista voi muodostaa Pythonin tietorakenteita. Voit hyödyntää tässä esimerkiksi [PyPI](https://pypi.org/)-sivuston hakua tai Googlea. PyPI:ssä eräs hyvä hakusana voisi olla esimerkiksi "toml". Tutustu kirjastojen kuvauksiin ja päättele sen perusteella, sopiiko kirjasto käyttötarkoitukseen. Kun löydät sopivan kirjaston, asenna se projektiin Poetryn avulla.

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
Name: web-login-robot
Description: -
Dependencies: python, Flask
Development dependencies: robotframework, robotframework-seleniumlibrary, requests
```

### 3. Pylint ja koodin staattinen analyysi

Kurssin [kolmannessa osassa](/osa3) teemana on ohjelmien laadun varmistaminen. Eräs ohjelman laatua useimmiten edistävä tekijä on järkevän _koodityylin_ noudattaminen. Koodin tyyliä voidaan tarkkailla automatisoidusti niin sanottujen staattisen analyysin työkaluilla.

Tutustutaan nyt staattisen analyysin työkaluun nimeltään [pylint](https://www.pylint.org/). Pylint on jo ehkä tullut tutuksi kurssilta Ohjelmistotekniikka. Ennen kuin syvennymme aiheeseen, tutustu pylintin käyttöön lukemalla Ohjelmistotekniikka-kurssin [Pylint-ohje](https://ohjelmistotekniikka-hy.github.io/python/pylint).

Mene nyt viikon 1 varasto-projektiin liittyvien tehtävien palautusrepositorioosi. Ota varasto-projektissa käyttöön pylint noudattamalla lukemiasi ohjeita. Konfiguraationa käytettävän _.pylintrc_-tiedoston sisältö tulee toistaiseksi olla [tämän]({{site.python_exercise_repo_url}}/blob/master/koodi/viikko2/varasto/.pylintrc) tiedoston sisällön mukainen.

Pylintin tarkistamat säännöt konfiguroidaan _.pylintrc_-tiedostoon oikeiden osioiden alle. `[MASTER]`-osio sisältää yleistä konfiguraatio, kuten mitkä hakemistot tai tiedostot pitäisi jättää tarkistuksien ulkopuolelle. `[MESSAGE CONTROL]`-osiossa taas voidaan määritellä esimerkiksi tarkistuksia, joista ei tarvitse huomauttaa. Loput osiot ovat eri sääntöjen konfigurointia varten, jotka on dokumentoitu pylintin [dokumentaatiossa](http://pylint.pycqa.org/en/2.6/technical_reference/features.html). Jos haluamme esimerkiksi asettaa funktioiden ja metodien argumenttien maksimilukumäärään kahdeksaan, voimme lisätä sen `[DESIGN]`-osioon seuraavasti:

```
[DESIGN]

max-args=8
```

Helpoin tapa löytää sääntöjä on hakemalla sopivalla hakusanalla niitä dokumentaatiosta tai Googlettamalla. Oikean osion löytää dokumentaatiosta (esimerkiksi `max-args`-sääntö löytyy dokumentaatiosta _Design checker_ -osion alta).

**Toimi nyt seuraavasti:**

- Siirry virtuaaliympäristöön komennolla `poetry shell` ja suorita sen sisällä komento `pylint src`. Jos tarkistuksissa löytyy virheitä, korjaa ne
- Määrittele nyt tiedostoon _.pylintrc_ seuraavat säännöt (katso lista säännöistä pylintin [dokumentaatiosta](http://pylint.pycqa.org/en/2.6/technical_reference/features.html)):
  - Rivin pituus on maksimissaan 110 merkkiä
    - Vinkki: sääntö löytyy [Format checker](http://pylint.pycqa.org/en/2.6/technical_reference/features.html#format-checker) -osiosta ja tulee määrittää `[FORMAT]`-osion alle
  - Ei yli kahta sisäkkäistä lohkoa (esimerkiksi if- tai for-lohkoa) funktion tai metodin sisällä
    - Vinkki: sääntö löytyy [Refactoring checker](http://pylint.pycqa.org/en/2.6/technical_reference/features.html#refactoring-checker) ja tulee määrittää `[REFACTORING]`-osion alle)
  - Funktiossa tai metodissa on enintään 20 lausetta
    - Vinkki: sääntö löytyy [Design checker](http://pylint.pycqa.org/en/2.6/technical_reference/features.html#design-checker) -osiosta
  - [Syklomaattinen koodikompleksisuus](https://en.wikipedia.org/wiki/Cyclomatic_complexity) korkeintaan 3
    - Selvitä mitä syklomaattisella kompleksisuudella tarkoitetaan
    - Vinkki: sääntö löytyy _Design checker_ -osiosta [tämän](http://pylint.pycqa.org/en/latest/technical_reference/extensions.html#design-checker-documentation) lisäosan avulla. Saat sen käyttöön lisäämällä `[MASTER]`-osioon `load-plugins=pylint.extensions.mccabe`-rivin
- Muuta koodiasi siten, että saat jokaisen määritellyistä pylint-säännöistä rikkoutumaan
- Korjaa koodisi ja varmista, että se noudattaa kaikkia sääntöjä
  - `Varasto`-luokan konstruktori luultavasti rikkoo `too-complex`-sääntöä. Voit esimerkiksi miettiä, miten voisit esittää `tilavuus`-attribuutin arvon if-lauseen sijaan jotenkin muuten.

Usein _.pylintrc_-konfiguraatiota ei ole järkevää kirjoittaa tyhjästä käsin, vaan käytetään lähtökohtana pylintin suosittelemaa konfiguraatiota. Suoitellun konfiguraation voi tulostaa komentoriville komennolla `pylint --generate-rcfile`.

### 4. Koodin staattinen analyysi ja GitHub Actionit

Laajenna projektisi GitHub Actionien määritelmää siten, että myös pylint-tarkastukset suoritetaan aina kun koodi pushataan GitHubiin.

Varmista, että GitHub huomaa tilanteen, missä koodi rikkoo projektin pylint-sääntöjä:

![]({{ "/images/py-lh2-11.png" | absolute_url }})

Varmista myös, että kun korjaat koodin, kaikki toimii taas moitteettomasti:

![]({{ "/images/py-lh2-12.png" | absolute_url }})

### 5. Git: branchit [versionhallinta]

Lue brancheja käsittelevät osuudet seuraavasta <hhttps://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging>

* jos haluat lukea hieman perusteellisemman selityksen asiasta, lue <https://git-scm.com/book/en/v2:n luku kolme kokonaisuudessaan

Kannattaa huomioida myös erittäin hyvä brancheja käsittelevä visuaalinen materiaali osoitteessa <https://learngitbranching.js.org/>

Varsin selkeältä vaikuttaa myös <https://www.atlassian.com/git/tutorials/using-branches>

**Huom:** kun liikut branchien välillä kannattaa pitää working tree ja staging -alue tyhjinä!

Tee seuraavat paikalliseen git-repositorioosi (kyseessä ei siis tarvitse olla tehtävien palautusrepositorio)
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

- Muuta myös tiedostoa  **index.py** seuraavasti:

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
- Mergeä branchin **laskut** sisältö **masteriin**  (tämä tapahtuu komennolla`git merge laskut`)
  - Mergeäminen aiheuttaa ns merge-commitin, ja avaa tekstieditorin mihin joudut kirjoittamaan commit-viestin
    - Jos et ole määritellyt gitille editoria viime viikon [tehtävän 2](/tehtavat1/) ohjeiden mukaan, avautuu ehkä gitin oletusarvoinen editori [vim](http://www.vim.org)
    - Vimistä poistuminen saattaa osoittautua ensikertalaiselle hankalaksi, google auttaa tarvittaessa
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
- Tämän tehtävän ideana oli siis havainnollistaa, että working tree (muutokset joista git ei ole tietoinen) ja staging (gitiin lisättyihin tiedostoihin tehdyt committoimattomat muutokset)
  **eivät liity** mihinkään branchiin, muutokset siirtyvät staging-alueelta branchiin ainoastaan komennon `git commit` suorituksen seurauksena

### 7. Git: konflikti! [versionhallinta]

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

- alkuun in siis lisätty kommentti ja tyhjä rivi
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
print("goodbye!")
```

- Mene takaisin **master**-branchiin, editoi tiedoston **index.py** alkupuolta esim.seuraavasti (muutos on funktion logger parametrissa) ja committaa muutokset:

```py
# tehdään alussa importit

from logger import logger
from summa import summa
from erotus import erotus

logger("aloitetaan ohjelma")

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
print(f"{x} + {y} = {summa(x, y)}")
print(f"{x} - {y} = {erotus(x, y)}")

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
print(f"Lukujen {x} ja {y} summa on {summa(x, y)}")
print(f"Lukujen {x} ja {y} erotus on {erotus(x, y)}")

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

Aloita lukemalla ProGit kirjasta luku [Remote Branches](http://git-scm.com/book/en/Git-Branching-Remote-Branches).

Lisätään seuraavaksi branch GitHubiin:

- Lisää tehtävien palauttamiseen käyttämäsi GitHub-repositorion paikalliseen kopioon branchit **haara1** ja **haara2**
- Mene branchiin **haara1**, lisää sinne tiedosto **haara1.txt** ja committaa
- Mene branchiin **haara2**, lisää sinne tiedosto **haara2.txt** ja committaa
- Pushaa uudet branchit GitHubiin
- Tarkastele GitHub-repositoriota selaimella, varmista että branchit syntyvät ja niillä on haluttu sisältö

Kloonaa GitHub-repositoriosta koneellesi toinen kopio:

- Kuten huomaat, eivät branchit tule kloonattuun kopioon
- Tee paikalliseen kopioon branch joka "träkkää" GitHub:issa olevan projektisi branchia **haara1** (ks. <http://git-scm.com/book/en/Git-Branching-Remote-Branches> kohta Tracking Branches)
- Lisää "träkkäävään" branchiin joku tiedosto, committaa ja pushaa branchi GitHubiin
- Tarkastele GitHub-repositoriota selaimella, varmista että branchi päivittyy

Mene GitHub-repon alkuperäiseen paikalliseen kopioon:

- Mene branchiin **haara1** ja pullaa muutokset GitHub:in vastaavasta branchista
  - huom: koska kyseessä ei ole "träkkäävä" branchi, joudut pullaamaan komennolla `git pull origin haara1`
  - git antaa myös vihjeen miten branchista saa träkäävän
- Mene branchiin **haara2**, lisää sitten tiedosto, committaa ja pushaa branchi GitHubiin
  - Koska kyseessä ei ole "träkkäävä" branchi, ei komento `git push` riitä vaan joudut määrittelemään branchin jonne push kohdistuu eli antamaan komennon `git push origin haara2`
  - git antaa jälleen vihjeen miten branchista saa träkäävän

Mene jälleen toiseen kopioon:

- Suorita komento `git remote show origin`
  - komento kertoo "origin":issa eli githubissa olevien branchien ja paikallisten branchien suhteen
- Tee sinne GitHub:issa olevan projektisi branchia **haara2** träkkäävä branch
- Suorita jälleen `git remote show origin`, mitä muutoksia huomaat?
- Tee branchiin muutoksia ja pushaa ne githubiin
  - Huom: koska kyseessä on träkkäävä branch, riittää git push
- tarkastele GitHub-repositoriota selaimella, varmista että branchi päivittyy

Palaa vielä alkuperäiseen lokaaliin repositorioon:

- Suorita komento `git remote show origin`
- Tulostus kertoo, että lokaaleista haaroista ainoastaan _master_ on konfiguroitu komennon `git pull` osalta, eli on träkkäävä branchi:

```
* remote origin
  Fetch URL: git@github.com:mluukkai/ohtu-2020-viikko1.git
  Push  URL: git@github.com:mluukkai/ohtu-2020-viikko1.git
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
- Komennon tuloste antaa ohjeen, miten saat konfiguroitua _haara1_:n träkkäämään githubissa olevaa haaraa:

```
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> haara1

```

- Kun annat komennon, sen jälkeen haara träkkää githubissa olevaa haaraa ja komento `git pull` voidaan antaa ilman parametreja

Branchien kanssa työskentely voi aluksi tuntua sekavalta varsinkin jos GitHub:issa on myös useita brancheja.

### Mihin brancheja käytetään?

Ohjelmistotiimi voi soveltaa Gitin branchaystä hyvin monella eri tyylillä. Artikkeli
<https://www.atlassian.com/git/tutorials/comparing-workflows> esittele tähän muutamia vaihtoehtoja. Eräs yleinen tapa branchien käyttöön ovat ns. _featurebranchit_:

> The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the master branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the master branch will never contain broken code, which is a huge advantage for continuous integration environments.

Jos kiinnostaa, lue lisää yllä olevasta dokumentista.

### 9. Git: epäajantasaisen kopion pushaaminen [versionhallinta]

Demonstroidaan usein esiintyvää tilannetta, jossa epäajantasaisen repositorion pushaaminen githubissa olevaan etärepositorioon epäonnistuu.

- Mene alkuperäisen repositorion paikallisen kopion **master** -haaraan, tee joku muutos, commitoi ja pushaa se githubiin
- Mene toisen kopion **master**-haaraan ja tee sinne joku muutos
- commitoi ja pushaa muutos githubiin
- Kaikki ei kuitenkaan mene hyvin, seurauksena on seuraavantyylinen virheilmoitus:

```
$ git push
To git@github.com:mluukkai/ohtu-viikko1-20120git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:mluukkai/ohtu-viikko1-2020.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first merge the remote changes (e.g.,
hint: 'git pull') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
$
```

Virheen syynä on se, että githubissa oleva **master**-haara oli edellä paikallisen repositorion **master**-haaraa. Ongelma korjaantuu tekemällä ensin `git pull`, ratkaisemalla mahdolliset konfliktit ja pushaamalla sitten uudelleen.

- Komennon `git pull` yhteydessä syntyy merge-commit, ja avautuu tekstieditori mihin joudut kirjoittamaan commit-viestin
- Eli toimi näin ja varmista, että tekemäsi muutokset menevät GitHubiin

### 10. Riippuvuuksien injektointi osa 3: Verkkokauppa

Tutustuimme viime viikon [tehtävissä 14-16](/tehtavat1#14-riippuvuuksien-injektointi-osa-1) riippuvuuksien injektointiin ja sovelsimme sitä yksikkötestauksen helpottamiseen.

Jos asia on päässyt unohtumaan, voit kerrata asian lukemalla [tämän](/riippuvuuksien_injektointi_python/).

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _koodi/viikko2/verkkokauppa-1_ on yksinkertaisen verkkokaupan ohjelmakoodi

- Hae projekti kurssirepositoriosta
  - Järkevintä lienee että kloonaat kurssirepositorion paikalliselle koneellesi jos et ole sitä jo tehnyt, jos olet, niin pullaa repositorio ajantasalle
  - **Tämän jälkeen kannattaa kopioida projekti tehtävien palautukseen käyttämäsi repositorion sisälle**
- Tutustu koodiin, piirrä luokkakaavio ohjelman rakenteesta
  - Luokkakaavioita ei tarvitse palauttaa
- Ohjelman luokista `Pankki`, `Varasto`, `Viitegeneraattori` ja `Kirjanpito` ovat sellaisia, että niistä on tarkoitus olla olemassa ainoastaan yksi olio. Tälläisiä ainutkertaisia olioita sanotaan **singletoneiksi**. Koodissa singletonit ovat toteutettu "klassisella tavalla", eli piilottamalla konstruktori ja käyttämällä staattista muuttujaa ja metodia säilömään ja palauttamaan luokan ainoa olio
  - Singleton on ns. [GoF-kirjan](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) yksi alkuperäisistä suunnittelumalleista, lue lisää singletoneista esim. [täältä](https://sourcemaking.com/design_patterns/singleton)
  - Singleton ei ole erinäisistä syistä enää oikein muodissa, ja korvaamme sen seuraavassa tehtävässä
- Kuten huomaamme, on koodissa toivottoman paljon konkreettisia riippuvuuksia:
  - Varasto --> Kirjanpito
  - Pankki --> Kirjanpito
  - Kauppa --> Pankki
  - Kauppa --> Viitegeneraatori
  - Kauppa --> Varasto
- **Poista luokan `Kauppa` konkreettiset riippuvuudet** yllä mainittuihin luokkiin
  - Määrittele luokalle `Kauppa` sopiva konstruktori, jotta voit injektoida riippuvuudet
  - Riippuvuus luokkaan `Ostoskori` voi jäädä, sillä se on ainoastaan luokan Kauppa sisäisesti käyttämä luokka ja täten varsin harmiton
  - Muut riippuvuudet jätetään vielä
- Älä käytä luokan `Kauppa` sisällä enää konkreettisia luokkia `Varasto`, `Viitegeneraattori` ja `Pankki` vaan ainoastaan niitä vastaavia konstruktorin kautta saatuja olioita!
- **Muokkaa _index.py_-tiedoston `main`-funktiota**, siten että se luo kaupan seuraavasti:

```python
kauppa = Kauppa(
  Varasto.get_instance(),
  Pankki.get_instance(),
  Viitegeneraattori.get_instance()
)
```

- Asenna projektin riippuvuudet komennolla `poetry install`
- Varmista ohjelman toimivuus suorittamalla se virtuaaliympäristössä komennolla `python3 src/index.py`

### 11. Riippuvuuksien injektointi osa 4: ei enää singletoneja verkkokaupassa

- Singleton-suunnittelumallia pidetään [osittain ongelmallisena](http://rcardin.github.io/design/programming/2015/07/03/the-good-the-bad-and-the-singleton.html), poistammekin edellisestä tehtävästä singletonit
- **Poista** kaikista luokista `get_instance`-metodit ja staattinen `__instanssi`-muuttuja
- **Poista** rajapintojen ja riippuvuuksien injektoinnin avulla edellisen tehtävän jäljiltä jääneet riippuvuudet, eli
  - Varasto --> Kirjanpito
  - Pankki --> Kirjanpito
- **Muokkaa _index.py_-tiedoston `main`-funktiota** vastaamaan uutta tilannetta, eli suunnilleen muotoon:

```python
viitegeneraattori = Viitegeneraattori()
kirjanpito = Kirjanpito()
varasto = Varasto(kirjanpito)
pankki = Pankki(kirjanpito)
kauppa = Kauppa(varasto, pankki, viitegeneraattori)
```

Varmista ohjelman toimivuus suorittamalla se virtuaaliympäristössä komennolla `python3 src/index.py`.

### Yksinkertaistettu singeleton

Pythonin tapauksessa periteisen singleton-suunnittelumallin mukaiset luokat tuottavat turhan monimutkaista koodia, joka on yksi syy niiden vähäiseen käyttöön. Esimerkiksi `Viitegeneraattori`-luokasta voisi yksinkertaisesti luoda olion, jota muut moduulit voivat käyttää:

```python
class Viitegeneraattori:
    def __init__(self):
        self._seuraava = 1

    def uusi(self):
        self._seuraava = self._seuraava + 1

        return self._seuraava


viitegeneraattori = Viitegeneraattori()
```

Nyt muut moduulit voivat käyttää `viitegeneraattori`-muuttujan tallennettua oliota. Tässä tilanteessa luokan tarpeen voisi ylipäätään kyseenalaistaa, koska yksinkertainen funktio ajaisi saman asian:

```python
seuraava = 1

def generoi_viite():
    seuraava = seuraava + 1

    return seuraava
```

### 12. Riippuvuuksien injektointi osa 5: Verkkokauppa siistiksi

Edellisen tehtävän päätteeksi huomasimme, että `Kauppa`-luokan olion alustaminen vaatii melko paljon toimenpiteitä:

```python
viitegeneraattori = Viitegeneraattori()
kirjanpito = Kirjanpito()
varasto = Varasto(kirjanpito)
pankki = Pankki(kirjanpito)
kauppa = Kauppa(varasto, pankki, viitegeneraattori)
```

Korjataan tilanne antamalla riippuvuuksille oletusarvot.

**Tee seuraavat toimenpiteet:**

- Tallenna _viitegeneraattori.py_-tiedostossa muuttujaan `viitegeneraattori` luokan `Viitegeneraattori` olio edellisen esimerkin tavoin
- Tallenna _kirjanpito.py_-tiedostossa muuttujaan `kirjanpito` luokan `Kirjanpito` olio
- Muokkaa `Varasto`-luokkaa siten, että sen konstruktorin `kirjanpito`-parametrin arvo on oletusarvoisesti _kirjanpito.py_-tiedostossa määritelty `kirjanpito`-muuttujan arvo. Parametrien oletuarvojen antaminen onnistuu seuraavasti:

```python
from kirjanpito import kirjanpito as default_kirjanpito

class Varasto:
    def __init__(self, kirjanpito=default_kirjanpito):
            self._kirjanpito = kirjanpito
            # ...

    # ...
```

- Tallenna _varasto.py_-tiedostossa muuttujaan `varasto` luokan `Varasto` olio. Huomaa, että olion voi alustaa ilman argumentteja (muodossa `Varasto()`), koska `kirjanpito`-parametrille on annettu oletusarvo.
- Tee sama `Pankki`-luokan konstruktorille ja tallenna `Pankki`-luokan olio muuttujaan `pankki`
- Käytä `Kauppa`-luokan konstruktorissa `varasto`-, `pankki`- ja `viitegeneraattori`-parametrien oletusarvoina edellisissä askelissa määrittelemiäsi muuttujia
- **Muokkaa _index.py_-tiedoston `main`-funktiota** siten, että `Kauppa`-olion alustaminen ei käytä argumentteja:

```python
kauppa = Kauppa()
```

Huomaa, että luokalle voi silti halutessaan määritellä riippuvuudet argumentteina. Tämä on kätevää esimerkiksi testeissä:

```python
class PankkiStub:
    # ...

kauppa = Kauppa(pankki=PankkiStub())
```

{% include submission_instructions.md %}