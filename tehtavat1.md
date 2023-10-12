---
layout: page
title: Viikko 1
inheader: no
permalink: /tehtavat1
---

{% include paivitys_kesken.md %}

{% include miniproj_ilmo.md %}

{% include laskari_info.md part=1 %}

Tämän viikon tehtävissä harjoitellaan ensin muutaman tärkeän ohjelmistokehityksen työkalun (_komentorivi, versionhallinta, riippuvuuksien hallinta, automatisoitu testaus, jatkuva integraatio_) käyttöä.

Laskarien lopuksi harjoitellaan _riippuvuuksien injektointia_, joka on melko simppeli mutta erittäin käyttökelpoinen tekniikka, jonka avulla sovellusten testattavuutta on mahdollista parantaa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission". Viikon tehtävät palautetaan yhdellä kertaa, eli tee merkintä palautussovellukseen vasta kun olet valmis viikon tehtävien osalta.

Käytännössä tällä viikolla tehdään palautusta varten **kaksi erillistä** GitHub-repositoria:

- ensimmäinen (nimeltään ohtuvarasto) tehtäviä 2-13 varten ja
- toinen tehtäviä 14-17 varten (käytetään tästä nimitystä **palautusrepositorio**)

Repositorioista jälkimmäistä (johon tehtävät 14-17 palautetaan) käytetään myös muiden viikkojen tehtävien palautusrepositoriona.

Jos et vielä tiedä mikä on GitHub ja repositorio, niin pian opit.

Tehtäviä 0 ja 1 ei varsinaisesti palauteta minnekään. Tehtävää 0 ei myöskään lasketa varsinaiseksi tehtäväksi, sen tekeminen ei vaikuta laskaripisteisiin.

### 0. Orientaatio

Lue nyt vielä kerran mitä tehtävien palauttamisesta sanotaan. Tällä viikolla siis tehtävät palautetaan kahteen repositorioon...

### 1. Komentorivi

**Tätä tehtävää ei palauteta mihinkään**

Graafisten käyttöliittymien olemassaolosta huolimatta ohjelmistoalalla on edelleen erittäin tärkeää hallita komentorivin eli terminaalin käyttö. Itse asiassa komentorivin merkitys on jopa nousussa.

Varmista, että osaat käyttää "riittävästi" komentoriviä (ks. alla oleva lista).

Jos osaamisessasi on puutteita (ks. alla oleva lista) kertaa haluamastasi resurssista:

- <https://www.codecademy.com/learn/learn-the-command-line> online-kurssin kaksi ensimmäistä osaa _Navigating the File System_ ja _Viewing and Changing the File System_
- <https://ryanstutorials.net/linuxtutorial/> oppaasta 4 osaa: _1. The Command Line_, _2. Basic Navigation_, _3.More About Files_ ja _5. File Manipulation_

Myös kurssin Tietokone työvälineenä [komentorivimateriaali](https://tkt-lapio.github.io/komentorivi/) käsittelee myös suurta osaa tehtävän komennoista.

_HUOM. Codecademy vaatii kirjautumisen Facebook, Google tai GitHub -tunnuksella. Kurssilla käytetään muutenkin GitHubia, eli se tunnus pitäisi kaikilla olla olemassa, jotta pääsee kirjautumaan._

Tämän tehtävän jälkeen sinun tulisi hallita seuraavat asiat:

- Käsitteet
  - Root directory
  - Home directory
  - Parent directory
  - Child directory
  - Working directory
  - `..` ja `\*`
- Ja osata käyttää komentoja
  - `pwd`
  - `cd`
  - `ls`, `ls -a`, `ls -l`, `ls -t`
  - `mkdir`
  - `touch`
  - `cp`
  - `rm`, `rm -r`
  - `mv`

Tulet tarvitsemaan komentorivin käyttötaitoja tällä kurssilla ja muutenkin opinnoissasi.

Tehtävää ei palauteta mitenkään. Voit merkitä tehtävän tehdyksi kun osaat yllä luetellut asiat.

### 2. GitHubiin [versionhallinta]

Jos sinulla ei jostain syystä ole vielä tunnusta [GitHubiin](https://github.com), luo se nyt.

Luo GitHubiin repositorio nimellä _ohtuvarasto_

**Tämän tehtävän lisäksi tehtävät 3-13 tehdään nyt luotuun ohtuvarasto-repositorioon.**

- Klikkaa yläpalkin oikeassa reunassa olevaa "Create a new repo"-ikonia
- **Laita rasti** kohtaan "Add a README file"

![]({{ "/images/lh1-1-22.png" | absolute_url }})

**Jos et ole vielä luonut** koneellesi _ssh-avainta_, tee se nyt

- Ohje avaimen luomiseen esim. [täällä](https://www.howtoforge.com/linux-basics-how-to-install-ssh-keys-on-the-shell). Riittää että teet stepit 1 ja 2 tai noudatat kurssin [Ohjelmistotekniikka](https://ohjelmistotekniikka-hy.github.io/python/viikko1#teht%C3%A4v%C3%A4-13-julkinen-avain)-materiaalin ohjeta

Lisää julkinen avain GitHubiin:

- <https://github.com/settings/ssh>

Näin pystyt käyttämään GitHubia ilman salasanan syöttämistä koneelta, josta juuri luodun avaimen salainen pari löytyy

Jos et ole jo aiemmin niin tehnyt, konfiguroi nimesi ja email-osoitteesi paikallisen koneesi git:iin antamalla komennot:

```bash
git config --global user.name "Your Name"
git config --global user.email my.address@gmail.com
```

Oletuseditoriksi kannattaa Linuxilla ja macOS:lla konfiguroida _nano_:

```bash
git config --global core.editor nano
```

ja Windowsilla _notepad_:

```bash
git config --global core.editor notepad
```

Tosin jos olet vimin käyttäjä, voit jättää edellisen tekemättä.

Kloonaa nyt GitHubiin tehty repositorio **paikalliselle koneelle**. Tämä tapahtuu antamalla komentoriviltä komento:

```bash
git clone git@github.com:omatunnustahan/ohtuvarasto.git
```

missä komennon `git clone` parametrina on repositoriosi sivulla näkyvä merkkijono (huomaa, että formaatin on oltava SSH):

![]({{ "/images/lh1-2-22.png" | absolute_url }})

Nyt paikalliselle koneellesi syntynyt hakemisto _ohtuvarasto_ (hakemiston nimi on sama kuin repositoriosi), joka on on GitHubissa olevan repositorion klooni.

### 3. Gitin alkeet [versionhallinta]

Olet jo todennäköisesti käyttänyt Gitiä aiemmilla kursseilla. Tässä tehtävässä harjoitellaan seuraavia komentoja:

- `git add`
- `git commit`
- `git status`
- `git checkout -- file`
- `git reset HEAD`

- Jos et vielä hallitse komentoja, käy läpi kurssin Ohjelmistotekniikka
  [Git-tutoriaali](https://ohjelmistotekniikka-hy.github.io/python/viikko1#versionhallinta). Pelkän lukemisen sijaan kannattanee myös tehdä itse tutoriaalin git-operaatiot.

Lisää git-ohjeita löytyy runsaasti internetistä, esim:

- [Pro Git -opas](http://git-scm.com/book), kannattaa lukea näin alkuun luku 2
- [Githubin helpit](https://help.github.com/articles/)
- <https://www.atlassian.com/git/tutorials>
- <https://we.riseup.net/debian/git-development-howto>
- <http://www.ralfebert.de/tutorials/git/>

**Tee nyt seuraavat:**

- Mene edellisessä tehtävässä luotuun repositorion klooniin (eli komennon `git clone` luomaan hakemistoon)
- Lisää ja committaa repositorioon kaksi tiedostoa ja kaksi hakemistoa, joiden sisällä on tiedostoja
  - Muista hyödyllinen komento `git status`
- Muuta ainakin kahden tiedoston sisältöä ja committaa muutokset repositorioon
- Tee _.gitignore_-tiedosto, jossa määrittelet, että repositorion juurihakemistossa olevat tiedostot, joiden pääte on _tmp_, ja hakemistot joiden nimi on <i>\_\_pycache\_\_</i> ja <i>.pytest_cache</i> ignoroidaan
  - Toinen ignorattava hakemisto on siis <i>.pytest_cache</i>, jonka nimi alkaa pisteellä
  - Pistealkuiset hakemistot ja tiedostot eivät näy oletusarvoisesti komennon `ls` listauksissa, saat ne näkyville komennolla `ls -a`
- Lisää tmp-päätteisiä tiedostoja hakemistoon ja varmista että git jättää ne huomioimatta
  - Saat asian tarkastettua komennolla `git status`
- Lisää myös hakemisto nimeltä <i>\_\_pycache\_\_</i> ja hakemiston sisälle joku tiedosto. Varmista, että hakemisto sisältöineen ei mene versionhallinnan alaisuuteen
- Lisää ja commitoi _.gitignore_-tiedosto repositorioosi
- Seuraavat kohdat puhuvat gitin staging-alueesta. Jos et tiedä mistä on kysymys, selvitä mistä kyse. Asia kyllä selviää ylle linkitetyistä ohjeista
- Tee muutos johonkin tiedostoon. Älä lisää tiedostoa "staging"-alueelle
  - Peru muutos (`git status`-komento antaa vihjeen miten tämä tapahtuu)
- Tee muutos ja lisää tiedosto "staging"-alueelle, varmista että muutosta ei enää näy tiedostossa
  - Peru muutos (`git status`-komento antaa vihjeen miten tämä tapahtuu), varmista että muutosta ei enää näy tiedostossa

**git add -p**

- Tutoriaaleissa ei valitettavasti käytetä `git add`-komennon hyödyllistä muotoa `git add -p`
- Tee muutoksia muutamiin tiedostoihin ja lisää muutokset staging-alueelle komennon git add -p avulla
- Jos lisäät projektiin uusia tiedostoja, ei `git add -p` huomaa niitä, eli ne on lisättävä staging-alueelle erikseen
- _Käytä jatkossa komentoa `git add -p` aina kun se on suinkin mahdollista!_

Komennolla `man git add` saat lisätietoa optiosta ja mm. vastausvaihtoehtojen selitykset.

### 4. Tiedostojen lisääminen GitHubiin [versionhallinta]

Tehtävässä 2 tehtiin GitHubiin repositorio "ohtuvarasto", joka liitettiin paikalliselle koneelle luotuun repositorioon "remote repositoryksi". Synkronoidaan paikallisen repositorion ja GitHubin tilanne:

- "Pushaa" nämä GitHubissa olevaan etärepositorioon antamalla komento `git push`
- Varmista selaimella, että lisätyt tiedostot menevät GitHubiin

GitHubissa pitäisi näyttää suunnilleen seuraavalta

![]({{ "/images/lh1-3-22.png" | absolute_url }})

### 5. Monta kloonia samasta repositoriosta [versionhallinta]

Yleensä on tapana pitää GitHubissa olevaa repositorioa tiedostojen "keskitettynä" sijoituspaikkana ja liittää paikallisella koneella oleva repositorio GitHubissa olevan repositorion etärepositorioksi, kuten teimme tehtävässä 1.

Jos työskennellään useammalta koneelta, on GitHubissa olevasta repositoriosta monta kloonia ja kloonien tila on pidettävä ajantasalla.

Luodaan nyt harjoituksen vuoksi paikalliselle koneelle repositoriosta toinen klooni:

- Mene komentoriville ja esim. kotihakemistoosi (tai johonkin paikkaan, joka ei ole git-repositorio)
- Anna komento `git clone git@github.com:githubtunnus/repositorionNimi.git nimiKloonille`
  - _githubtunnus_ ja _repositorionNimi_ selviävät GitHubista repositoriosi tehtävän 2 toisen kuvan osoittamasta paikasta
  - _nimiKloonille_ tulee olemaan kloonatun repositorion nimi, varmista että annat nimen, jonka nimistä tiedostoa tai hakemistoa ei jo ole kansiossa
- Mene kloonattuun repositorioon ja lisää sinne jotain tiedostoja. Committaa lopuksi
- "Pushaa" muutokset GitHubiin
- Varmista selaimella, että lisätyt tiedostot menevät GitHubiin

**Mene nyt tehtävässä 2 tehtyyn GitHub-repositorion klooniin.**

- Alkuperäinen paikallinen klooni ei ole enää ajantasalla, "pullaa" sinne muutokset komennolla `git pull`
- Varmista että molempien paikallisten repositorioiden sisältö on nyt sama
- Lisää alkuperäiseen klooniin joitain tiedostoja ja pushaa ne GitHubiin
- Mene jälleen tässä tehtävässä tehtyyn klooniin ja pullaa

### 6. Repositorion siivous [versionhallinta]

Valmistaudutaan seuraavaan tehtävään siivoamalla repositoriostamme ylimääräiset tiedostot

- Mene repositoriosi alkuperäiseen, tehtävässä 2 tekemääsi klooniin
  - Voit poistaa tehtävää 5 varten tekemäsi harjoituskloonin
- Poista repositorioistasi kaikki hakemistot sekä muut tiedostot paitsi _.gitignore_ ja _README.md_
- Committaa muutokset
  - Varmista komennolla _git status_ että kaikki muutokset ovat versionhallinnassa, eli että git ei ilmoita joidenkin tiedostojen olevan _Changes not staged for commit_
  - Joudut ehkä kertaamaan tehtävän 3 linkittämistä tutoriaaleista sitä miten tiedostojen poistaminen gitistä tapahtuu
- Pushaa muutokset GitHubiin. Katso selaimella, että GitHubissa kaikki on ajan tasalla, eli että repositoriossa ei ole mitään muuta kuin tiedostot _.gitignore_ ja _README.md_

Haetaan sitten seuraavissa tehtävissä käytettävä koodi:

- Hae osoitteesta <https://github.com/ohjelmistotuotanto-hy/tehtavat/raw/main/viikko1/varasto.zip> löytyvä zipattu paketti
- Pura paketti sopivaan paikkaan
- Siirrä paketin sisällä olevat tiedostot kloonattuun repositorioon siten, että **paketissa olevat tiedostot ja hakemistot tulevat repositorion juureen**
- Repositoriosi sisältävän hakemiston tulee nyt näyttää seuraavalta

![]({{ "/images/py-lh1-4-22.png" | absolute_url }})

- Lisää ja committoi zipistä puretut tavarat repositorioosi ja pushaa ne GitHubiin
- Katso vielä kerran selaimella, että GitHubissa kaikki on ajan tasalla

**Huomaa, että repositoriosi tulee näyttää tehtävän jälkeen suunnilleen seuraavalta:**

![]({{ "/images/py-lh1-5.png" | absolute_url }})

**Jos hakemisto _src_ ja tiedostot _pyproject.toml_ ym. eivät ole repositorion juuressa, siirrä ne sinne ennen kuin siirryt eteenpäin.**

### 7. Poetry

Tämän kurssin ohjelmointitehtävissä käytetään Pythonia. Python asennuksen löytymisen koneeltasi voit tarkistaa komennolla:

```bash
python3 --version
```

Jos Python on asennettu, komennon suorittaminen tulostaa asennetun Pythonin version. Varmista, että käytössä oleva versio on _vähintään 3.10.0_. Jos `python3`-komentoa ei löydy, kokeile komentoa `python`. Varmista kuitenkin, että `python`-komento suorittaa tarpeeksi uutta versiota. Jos asennusta ei löydy, tai käytössä on vanhempi versio, seuraa [ohjelmointikurssien](https://www.mooc.fi/fi/installation/vscode) ohjeita Pythonin asentamiselle.

Asennusohjeista löytyy myös ohjeet Visual Studio Code -editorin asentamiselle. Kurssin tehtäviä ei kuitenkaan palauteta TMC-liitännäisen avulla, joten VS Code -liitännäinen ei ole välttämätön kurssin suorittamiselle. Voit siis halutessasi käyttää kurssilla myös mitä tahansa muuta editoria.

Ohjelmoinnin peruskursseilla olet saattanut suorittaa koodia painamalla VS Coden nuoli-painiketta, ja testejä painamalla silmä-painiketta. Ammattimaisessa ohjelmistokehityksessä koodin suorittaminen ja testaamisen on tapahduttava toistettavalla tavalla, ja siten että operaatiot pystytään suorittamaan millä tahansa koneella, _skriptatusti_ komentoriviltä, eli riippumatta VS Coden kaltaisista kehitysympäristöistä.

Koodin suorittaminen komentoriviltä `python3`-komennolla ei itsessään ole kovin hankalaa. Ongelmia alkaa syntyä vasta, kun projekti tarvitsee ulkoisia _riippuvuuksia_ erilaisten asennettavien kirjastojen muodossa. Kirjastojen asennukseen ja hallintaan tarvitaan erilisiä työkaluja. Pythonin kohdalla suosituin komentorivityökaluja tähän tarkoitukseen on [pip](https://pypi.org/project/pip/).

Jotta samalla tietokoneella olevien projektien riippuvuuksissa ei syntyisi ristiriitoja, on käytössä usein niin kutsuttuja projektikohtaisia _virtuaaliympäristöjä_. Näitä virtuaaliympäristöjä luodaan ja käytetään [venv](https://docs.python.org/3/library/venv.html)-moduulin kautta. Jotta saisimme helposti käyttöömme pipin ja virtuaaliympäristön tuomat edut, voimme käyttää [Poetry](https://python-poetry.org/)-komentorivityökalua. Poetryn dokumentaation antama kuvaus on seuraava:

> Poetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

- Edellisessä tehtävässä lisättiin repositorioon Poetry-muodossa oleva varasto-projekti. Projekti sisältää erittäin yksinkertaisen varaston hallintaan soveltuvaa koodia. Varaston hallinnasta vastaa _src/varasto.py_-tiedossa määritelty luokka `Varasto`. Luokkaa käyttää _src/index.py_-tiedossa määritelty funktio `main`
- Tutki Poetry-muotoisen projektin hakemistorakennetta esim. antamalla komento `tree` projektin sisältävän hakemiston juuressa (`tree` ei ole Poetryyn liittyvä käsky vaan normaali shell-komento)
  - Windowsissa komennosta käyttökelpoisin muoto on `tree /F` Jos käytössäsi on Windowsissa _git bash_ komento on muotoa `cmd //c tree`
  - **HUOM:** macOS:ssä ei ole oletusarvoisesti `tree`-komentoa
  - Mikäli koneellasi on [Homebrew](https://brew.sh/) asennettuna, saat `tree`-komennon asennettua komennolla `brew install tree`
  - Myöskään kaikissa Linuxeissa ei komento `tree` ole oletusarvoisesti asennettu. Debian-pohjaisissa Linuxeissa (esim Ubuntussa) saat asennettua `tree`-komennon komennolla `sudo apt-get install tree`
- Tarkastele projektin määrittelevän tiedoston _pyproject.toml_ sisältöä
  - Tiedosto määrittelee mm. projektin käyttämät riippuvuudet
- Tarkastele juurihakemistossa olevan _poetry.lock_-tiedoston sisältöä
  - Tiedoston sisällön ei ole tarkoitus olla ihmisluettava, _eikä sitä pitäisikään missään nimessä muokata_. Tiedosto on täysin Poetryn ylläpitämä. Poetry tallentaa tiedostoon projektiin asennettujen riippuvuuksien versiot, jotta jokaisen asennuksen yhteydessä riippuvuuksista voidaan asentaa juuri oikeat versiot

Ohjelmakoodin editointi kannattaa tehdä järkevällä editorilla, esim. Visual Studio Codella, mutta Poetry-komentojen suorittaminen onnistuu helpoiten komentoriviltä. 

Ennen siirtymistä tehtävien pariin, ja et ole aiemmin Poetryä käyttänyt, tutustu Poetryn asennus- ja käyttöohjeisiin lukemalla [tämä dokumentti](https://ohjelmistotekniikka-hy.github.io/python/viikko2#poetry-ja-riippuvuuksien-hallinta). Kurssilla käytetään Poetryn versiota 1.6.1. Jos koneellasi on vanhempi versio, se on syytä päivittää.

**Tee nyt seuraavat toimenpiteet**.

- Asenna varasto-projektin riippuvuudet suorittamalla sen juurihakemistossa komento `poetry install`
- Käynnistä sovellus komennolla `poetry run python3 src/index.py`
  - [Run](https://python-poetry.org/docs/cli/#run)-komento suorittaa annetun komennon (tässä tapauksessa `python3 src/index.py`) virtuaaliympäristössä
- Siirry virtuaaliympäristöön komennolla `poetry shell`
- Suorita komento `python3 src/index.py`
  - Virtuaaliympäristössä komentoja voi suorittaa "normaalisti", eli ilman `run`-komentoa
  - Kun uutta koodia kehitetään ja suoritetaan tiheissä sykleissä, on komentojen suorittaminen kätevintä tehdä virtuaaliympäristön sisällä
- Poistu virtuaaliympäristöstä komennolla `exit`
- Suorita testit komennolla `poetry run pytest`
  - Testien suorittamista varten on käytössä [pytest](https://docs.pytest.org/en/stable/)-sovelluskehys

**HUOM** jos törmäät seuraavaan virheilmoitukseen

```
Python 2.7 will no longer be supported in the next feature release of Poetry (1.2).
You should consider updating your Python version to a supported one.

Note that you will still be able to manage Python 2.7 projects by using the env command.
See https://python-poetry.org/docs/managing-environments/ for more information.

The currently activated Python version 2.7.16 is not supported by the project (^3.10).
Trying to find and use a compatible version.
```

eräs tapa korjata tilanne Macilla ja ehkä myös Linuxilla on editoida tiedoston `~/.poetry.bin/poetry` ensimmäisellä rivillä mainittu pythonin polku. Oletusarvoinen polku on todennäköisesti seuraava

```
#!/usr/bin/python
```

Polku tulee Macilla muuttaa (todennäköisesti) muotoon

```
#!/usr/local/bin/python3
```

Oikea polku kannattaa varmistaa komennolla `which python3`.

### 8. Unittest

Ohjelmistokehityksen ehkä tärkein vaihe on laadunvarmistus, laadunvarmistuksen tärkein keino taas on testaus, joka on syytä automatisoida mahdollisimman pitkälle, sillä ohjelmistoja joudutaan testaamaan paljon. Erityisesti iteratiivisessa/ketterässä ohjelmistokehityksessä samat testit on suoritettava uudelleen aina ohjelman muuttuessa.

Python-maailmassa automatisoidun testaamisen johtava työkalu on [unittest](https://docs.python.org/3/library/unittest.html), johon olet todennäköisesti jo tutustunut kurssilla Ohjelmistotekniikka. Jos unittest on vieras, tai päässyt unohtumaan, kertaa sen perusteet [tästä unittest-ohjeesta](/unittest).

Edellisen tehtävän esimerkkisovelluksessa on jo jonkun verran unittest-testejä, **laajennetaan nyt testejä**.

Muista, että testit voi suorittaa projektin juurihakemistossa komennolla `poetry run pytest` tai siirtymällä virtuaaliympäristöön komennolla `poetry shell` ja suorittamalla sen jälkeen komennon `pytest`.

- Täydennä varasto-projektin testejä siten, että luokan `Varasto` testien haarautumakattavuudeksi (branch coverage) tulee 100%
  - Joudut huomioimaan ainakin tapaukset, joissa varastoon yritetään laittaa liikaa tavaraa ja varastosta yritetään ottaa enemmän kuin siellä on
  - Edellinenkään ei vielä riitä
- Testauksen rivikattavuuden saat selville [coverage](https://coverage.readthedocs.io/en/coverage-5.3/)-työkalun avulla. Tutustu työkaluun lukemalla [Coverage-ohje](http://localhost:4000/unittest#onko-jo-testattu-tarpeeksi-testauskattavuus)
- Ota työkalu projektissasi käyttöön asentamalla se projektin _kehityksen aikaiseksi riippuvuudeksi_ komennolla:

```bash
poetry add coverage --group dev
```

Komennon muoto riippuu siitä kuinka uusi Poetryn versio käytössäsi on.

- Lisää projektin juurihakemistoon konfiguraatiotiedosto _.coveragerc_, jossa kerrotaan, mistä projektin tiedostoista testikattavuutta kerätään. Tiedoston sisällön tulee olla seuraava:

```text
[run]
source = src
```

- Siirry virtuaaliympäristöön komennolla `poetry shell`
  - Suorita komento `coverage run --branch -m pytest`. Komento suorittaa testit ja kerää testien haarautumakattavuuden
  - Tämän jälkeen suorita komento `coverage html`. Komento muodostaa raportin kerättyjen tietojen perusteella
- Projektin juurihakemistoon pitäisi ilmestyä hakemisto _htmlcov_. Voit tarkastella HTML-muotoista testikattavuusraporttia avamaalla selaimessa hakemiston _htmlcov_ tiedoston _index.html_
  - Klikkaamalla raportista yksittäisen tiedoston nimeä näet, mitkä koodin suorituksen haarat on vielä testaamatta
- Lisää projektin _.gitignore_-tiedostoon tiedosto _.coverage_ ja hakemisto _htmlcov_
- Kun luokan `Varasto` (tiedoston _src/varasto.py_) testien haarautumakattavuus (branch coverage) on 100%, pushaa tekemäsi muutokset GitHubiin
  - Raportissa on luultavasti mukana myös muita tiedostoja, mutta ainoastaan _src/varasto.py_-tiedoston haarautumakattavuus tarvitsee olla 100%. Opimme myöhemmin, kuinka ylimääräiset tiedostot pystyy jättämään raportin ulkopuolelle
  - Kun muokkaat testejä, muista suorittaa komennot `coverage run --branch -m pytest` ja `coverage html` uudelleen, jotta raportti päivittyy
  - Saat suoritettua molemmat komnnot "yhdellä napin painalluksella" sijoittamalla ne samalle riville puolipisteellä eroteltuna `coverage run --branch -m pytest; coverage html`

### 9. GitHub Actions, osa 1

Poetryn avulla testien suorittaminen on mahdollista tehdä skriptattavaksi, eli helposti komentoriviltä yhdellä komennolla suoritettavaksi. Seuraava askel on suorittaa buildausprosessi, eli ohjelman suorittamiseen vaadittavat toimenpiteet ja siihen liittyvien testien suoritus, erillisellä _build-palvelimella_ (engl. build server).

Ideana on, että ohjelmistokehittäjä noudattaa seuraavaa sykliä:

- Uusin versio koodista haetaan versionhallinnan keskitetystä repositoriosta ohjelmistokehittäjän koneelle
- Lisäykset ja niitä testaavat testit tehdään paikalliseen kopioon
- Testit suoritetaan paikalliseen kopioon ohjelmistokehittäjän koneella
- Jos kaikki on kunnossa, paikalliset muutokset lähetetään keskitettyyn repositorioon
- Build-palvelin seuraa keskitettyä repositoriota ja kun siellä huomataan muutoksia, hakee ja kääntää build-palvelin muuttuneen koodin ja suorittaa sille testit
- Build-palvelin raportoi havaituista virheistä

Erillisen build-palvelimen avulla varmistetaan, että ohjelmisto toimii muuallakin kuin muutokset tehneen ohjelmistokehittäjän koneella. Tätä käytännettä kutsutaan _jatkuvaksi integraatioksi_ (engl. continuous integration). Palaamme asiaan tarkemmin kurssin [kolmannessa osassa](/osa3#jatkuva-integraatio).

Nykyään alkaa olla yleistä, että erillisen build-palvelimen sijaan käytetään jotain verkossa olevaa "build-ohjelmistoa", jolloin softakehittäjien ei tarvitse huolehtia ollenkaan buildaukseen käytettävän palvelimen ja sen ohjelmistojen asentamisesta.

Kurssilla käytetään GitHubiin 15.11.2019 julkaistua ja sen jälkeen nopeasti suuren suosion saavuttanutta [Actions](https://github.com/features/actions)-ominaisuutta hoitamaan automatisoitu buildaus.

Konfiguroidaan seuraavaksi GitHub Actions huolehtimaan projektistamme.

Valitse GitHub-repositoriostasi välilehti _Actions_ ja klikkaa _set up a workflow yourself_-linkkiä:

![]({{ "/images/py-lh1-20.png" | absolute_url }})

Valinta avaa actionien konfiguraatiotiedoston. Muuta se seuraavaan muotoon:

```yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Set up Python 3.10
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      - name: Install Poetry
        run: pip install poetry
      - name: Install dependencies
        run: poetry install
      - name: Run tests
        run: poetry run coverage run --branch -m pytest
```

Paina vihreää _Start commit_ -nappia, ja anna sopiva commit-viesti.

Konfiguraatiotiedosto (jonka nimi on oletusarvoisesti _main.yml_) tallettuu repositorioosi hakemiston _.github/workflows_ alle:

![]({{ "/images/py-lh1-21-22.png" | absolute_url }})

GitHub siis committoi uuden tiedoston automaattisesti repositorioosi.

Kun nyt pullaat repositorion koodin omalle koneellesi, näkyy konfiguraatiotiedosto myös siellä, esim. Visual Studio Code -editorilla se näyttää seuraavalta:

![]({{ "/images/py-lh1-22-23-acual.png" | absolute_url }})

Kun avaan nyt repositorion välilehden _Actions_, huomaat että sinne on ilmestynyt hieman tavaraa:

![]({{ "/images/py-lh1-23-23.png" | absolute_url }})

### 10. GitHub Actions, osa 2

Katsotaan hieman tarkemmin mitä GitHub actionien konepellin alla tapahtuu.

GitHub actionit ovat sarjoja erilaisia "toimenpiteitä", joita GitHub voi suorittaa repositoriossa olevalle koodille. Actionin toiminta määritellään hakemiston _.github/workflows_ sijoitettavissa _.yml_-päätteisissä tiedostoissa.

Tarkastellaan äsken määrittelemäämme tiedostoa:

```yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Set up Python 3.10
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      - name: Install Poetry
        run: pip install poetry
      - name: Install dependencies
        run: poetry install
      - name: Run tests
        run: poetry run coverage run --branch -m pytest
```

Kohta [on](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) määrittelee missä tilanteissa actionit suoritetaan. Konfiguraatiomme määrää, että actionit suoritetaan aina kun repositorion päähaaraan pushataan koodia (sekä silloin jos päähaaraan tehdään ns. pull request).

Osiossa [jobs](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobs) voidaan määritellä yksi tai useampi "työ", eli useasta askeleesta koostuva tehtäväsarja. Määrittelimme tällä kertaa vain yhden työn, jolle annoimme nimen _build_. Jos töitä olisi useita, suorittaisi GitHub actions ne rinnakkain.

Yksittäinen työ koostuu useista askelista, jotka on määritelty työn alla kohdassa [steps](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps).

GitHub varaa työn askelien suorittamista varten virtuaalikoneen. Kohta [runs-on](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) määrittelee minkälaisella käyttöjärjestelmällä työn askeleet suoritetaan. Esimerkkimme tapauksessa suoritusympäristö on Ubuntu Linux.

Esimerkkimme tapauksessa työ koostuu viidestä askeleesta. Ensimmäinen askel

```yml
- uses: actions/checkout@v4
```

suorittaa valmiiksi määritellyn actionin [checkout](https://github.com/marketplace/actions/checkout), joka dokumentaationsa mukaan tekee seuraavaa

> This action checks-out your repository under \$GITHUB_WORKSPACE, so your workflow can access it.

Eli _checkout_ action siis hakee repositorion koodin askeleet suorittavalle virtuaalikoneelle.

Toinen askel on action [setup-python](https://github.com/marketplace/actions/setup-python), joka asentaan työn suorittavalle virtuaalikoneelle haluamme Python-version. Jostain syystä versionumero on annettava hipsuissa, eli muodossa '3.10', jos hipsuja ei ole, yrtää GitHub Actions asettaa Pythonista version 3.1

Molemmat näistä actioneista olivat GitHubin [marketplacesta](https://github.com/marketplace?type=actions) löytyviä valmiita actioneja. Esim. Pythonin asentaminen työn suorittavalle virtuaalikoneelle on itsessään aika monimutkainen toimenpide, mutta valmiiksi määritelty action tekee sen helpoksi.

Kolmas askel on hieman erilainen:

```yml
- name: Install Poetry
  run: pip install poetry
```

Se suorittaa komentorivillä komennon, joka asentaa Poetryn.

Neljäs askel asentaa projektin riippuvuudet `poetry install`-komennolla.

Viides askel on kaikkein tärkein, se suorittaa poetryn avulla projektin testit ja kerää testikattavuuden:

```yml
- name: Run tests
  run: poetry run coverage run --branch -m pytest
```

Tee nyt koodiin muutos, joka hajottaa testit ja committaa muutos GitHubiin.

Hetken kuluttua actions-välilehdellä pitäisi näkyä että commiteja on kaksi, ja että viimeisin on tilaltaan "punainen":

![]({{ "/images/py-lh1-24-22.png" | absolute_url }})

Klikkaamalla rikki mennyttä committia, päästään tarkastelemaan hieman tarkemmin actionin suorituksen etenemistä:

![]({{ "/images/py-lh1-25-22.png" | absolute_url }})

Kuten odotettua, testi ei mennyt läpi. Riippuen GitHubin asetuksista, olet myös saattanut saada email-muistutuksen rikki menneestä buildista.

Korjaa testi ja pushaa muutokset uudelleen GitHubiin. Tarkkaile jälleen Actions-näkymää ja varmista, että kaikki toimii oikein.

### 11. GitHub Actions, osa 3

Laita repositiossa olevaan tiedostoon _README.md_ koodin tilasta kertova _Status Badge_.

[Tämän](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge) ohjeen mukaan badgen osoite on muotoa

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

_WORKFLOW_NAME_ on määritelty konfiguraatiotiedostossa:

```yml
name: CI

on:
  push:
    branches: [main]
# ...
```

Olemme käyttäneet nimeä _CI_, nimi voi kuitenkin olla mikä vaan.

Esimerkiksi omassa tapauksessani badgelinkki on

```
https://github.com/mluukkai/ohtuvarasto/workflows/CI/badge.svg
```

Lisää badge editoimalla tiedostoa _README.md_ suoraan GitHubissa:

![]({{ "/images/py-lh1-27-22.png" | absolute_url }})

Oikein toimiva badge näyttää seuraavalta:

![]({{ "/images/py-lh1-28-22.png" | absolute_url }})

Badge toimii siis sen indikaattorina onko repositoriossasi oleva koodi testien puolesta kunnossa!

Tee nyt jokin muutos koneellasi repositorioon johonkin muuhun tiedostoon kuin README.md ja yritä pushata koodi GitHubiin. Toimenpiteestä seuraa virhe:

```
To github.com:mluukkai/ohtuvarasto.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'git@github.com:mluukkai/ohtuvarasto.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Tulet todennäköisesti törmäämään vastaavaan virheeseen usein. Syynä virheelle on se, että yrität pushata muutoksia GitHubiin vaikka GitHub on "edellä" paikallista repositorioasi (ts. sinne lisättiin tiedosto _README.md_).

Ongelma ratkeaa seuraavasti. Tee ensin komento `git pull`. Saat gitiltä pitkän valitusviestin:

remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 645 bytes | 215.00 KiB/s, done.
From github.com:mluukkai/ohtuvarasto2
   6f1cd65..aa6c099  main       -> origin/main
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

Käytännössä git haluaa tietää minkälaisella strategialla paikallisen ja etärepositoriosi koodi tulisi yhdistää. Vaihtoehdoista kannattanee valita keskimäinen, eli anna komentorivillä komento

```
git config pull.rebase true 
```

Käytännössä valittu vaihtoehto tarkoittaa sitä, että git suorittaa uudet lokaalit commitit etärepositoriossa olevien committien perään.

Voit nyt pullata koodin uudelleen komennolla `git pull`. Komento  `git push` onnistuu nyt. Jatkossa vastaavista tilanteista selviää komennoilla `git pull` ja `git push`.

Jos muutit paikallisesti tiedostoa README.md, saatoit aiheuttaa ns. merge-konfliktin jonka selvittämiseen vaaditaan jo hieman vaivaa. Palaamme asiaan tulevilla viikoilla...

### 12. Codecov

Tehtävässä 8 määrittelimme projektin testauskattavuuden coveragen avulla. <https://codecov.io> -palvelu mahdollistaa projektien koodikattavuuden julkaisemisen verkossa.

- Kirjaudu [Codecoviin](https://codecov.io) (GitHub login)
- Lisää repositorio Codecoviin alaisuuteen:

![]({{ "/images/lh1-12-22.png" | absolute_url }})

Saatat joutua odottamaan hetken, ennen kuin Codecov löytää repositoriosi. Jos pieni odottelukaan ei auta (kuten omassa tapauksessani), voit mennä suoraan repositoriosi Codecov-osoitteeseen, joka on muotoa https://codecov.io/gh/githubtunnus/repositorio, omassa tapauksessani siis <https://codecov.io/gh/mluukkai/ohtuvarasto>. Saat lisättyä repositorion Codecoviin alaisuuteen settingsien kautta:

![]({{ "/images/py-lh1-30-22.png" | absolute_url }})

Samme muodostettua Codecovin ymmärtämän testikattavuusraportin käyttämällä `coverage html`-komennon sijaan komentoa `coverage xml`. Kyseinen komento muodostaa XML-muotoisen testikattavuusraportin. Lisätään GitHub Action -konfiguraatiomme loppuun kaksi uutta askelta:

```yml
- name: Coverage report
  run: poetry run coverage xml
- name: Coverage report to Codecov
  run: bash <(curl -s https://codecov.io/bash)
```

**HUOM1** rivit on sisennettävä samalle tasolle kuin muut stepit.

**HUOM2** käyttäessäsi julkista repositorioa, et tarvitse Reposity upload tokenia mihinkään

![]({{ "/images/lh1-codecov-token.png" | absolute_url }})

Kun seuraavan kerran koodi pushataan GitHubiin, ilmestyy Codecoviin koodin testikattavuusraportti:

![]({{ "/images/py-lh1-14-22.png" | absolute_url }})

Klikkaailemalla tiedostojen nimiä, pääset katsomaan yksittäisten luokkien testauksen kattamat rivit:

![]({{ "/images/py-lh1-15-22.png" | absolute_url }})

Käytännössä pyydämme nyt GitHub actioneja suorittamaan ensin testit ja keräämään testikattavuuden (komennolla `poetry run coverage run --branch -m pytest`), jonka jälkeen muodostetaan XML-muotoinen testikattavuusraportti (komennolla `poetry run coverage xml`). Tämä testikattavuusraportti lähetetään Codeviin.

GitHub actionien loki näyttää miten askelten suoritus etenee:

![]({{ "/images/py-lh1-29-22.png" | absolute_url }})

Lisää repositoriosi README.md-tiedostoon myös Codecov-badge. Löydät badgen repositorion Codecov-sivun Settings-valikosta

Projektisi GitHub-sivun tulisi lopulta näyttää suunnilleen seuraavalta:

![]({{ "/images/py-lh1-30-22.png" | absolute_url }})

Huomaa, että GitHub Actionin ja Codecovin badget eivät päivity täysin reaaliajassa. Eli vaikka projektin testikattavuus nousisi, kestää hetken, ennen kuin badge näyttää tuoreen tilanteen.

### 13. Parempi testikattavuus

Projektin testauskattavuutta häiritsee nyt se, että myös _src/tests_-hakemiston testit ja _src/index.py_-tiedosto lasketaan testikattavuuteen. Voimme määritellä, että joitain tiedostoja tai kokonaisia hakemistoja jätetään huomioimatta kattavuusraportin generoinnissa.

Lisää juurihakemiston _.coveragerc_-tiedostoon, `omit`-konfiguraatio ja määrittele siinä huomioimatta jätettävät tiedostot:

```
[run]
source = src
omit = src/tests/**,src/index.py
```

Konfiguraatiossa määritellä pilkulla eroteltuna niin kutsuttaja [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>)-polkuja. Voimme jättää huomioimatta esimerkiksi yksittäisen tiedoston polun (_src/index.py_), tai kaikki tietyn hakemiston alla olevat polut (_src/tests/\*\*_).

Pushaa koodi GitHubiin ja varmista, että Codecov generoi raportin siten, että _src/index.py_-tiedosto ja _src/tests_-hakemiston tiedostot jätetään huomioimatta.

### Tehtävien palautusrepositoriot

Kuten jo aiemmin todettiin, tällä viikolla tehdään palautusta varten **kaksi erillistä** GitHub-repositoria:

- ensimmäinen (nimeltään ohtuvarasto) tehtäviä 2-13 varten ja
- toinen tehtäviä 14-17 varten (käytetään tästä nimitystä **palautusrepositorio**)

Repositorioista jäkimmäistä (johon tehtävät 14-17 palautetaan) käytetään myös muiden viikkojen tehtävien palautusrepositoriona.

Luo siis nyt **uusi repositorio**.

Nyt luotavan palautusrepositorion rakenne voi olla esimerkiksi seuraava:

```
viikko1
  riippuvuuksien-injektointi-1
  nhl-statistics-1
viikko2
  poetry-web
  project-reader
  verkkokauppa-1
viikko3
  nhl-reader
  login-robot
  web-login-robot
...
```

### 14. Riippuvuuksien injektointi osa 1

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositorioa mihin teit tehtävät 2-13**

- tehtävässä ei tosin tehdä itse mitään koodia...

Tutustumme kurssin aikana muutamiin _suunnittelumalleihin_ (engl. design pattern), eli hyviksi tunnettuihin useisiin erilaisiin tilanteisiin sopiviin ratkaisutapoihin, joiden soveltaminen usein parantaa koodin laatua.

Kurssin ensimmäinen suunnittelumalli _riippuvuuksien injektointi_ (engl. dependency injection), on yksinkertainen periaate, jota noudattamalla koodin automatisoitua testaamista on monissa tilanteissa mahdollista helpottaa ratkaisevalla tavalla.

- Tutustu riippuvuuksien injektointiin lukemalla [tämä dokumentti](/riippuvuuksien_injektointi_python/)
- Hae esimerkkiprojekti kurssin [tehtävärepositorion]({{site.python_exercise_repo_url}}) hakemistosta _viikko1/riippuvuuksien-injektointi-1_ ja kokeile että se toimii
  - Järkevintä lienee että kloonaat repositorion paikalliselle koneellesi
  - **Tämän jälkeen kannattaa kopioida projekti tehtävien 14-17 palautukseen käyttämäsi palautusrepositorion sisälle**
  - **HUOM** lue 15 cm ylempää miten koodi kannattaa organisoida palautusrepositorion sisälle

Tutustu riippuvuuksien injektointiin esimerkin avulla. Asenna projektin riippuvuudet sen juurihakemistossa komennolla `poetry install`. Tämän jälkeen saat suoritettua koodin virtuaaliympäristön sisällä komennolla `python3 src/index.py`. Voit myös halutessasi suorittaa testit virtuaaliympäristön sisällä komennolla `pytest`. Jos unohtui miten virtuaaliympäristön sisälle päästään, kertaa asia tehtävästä 7...

### 15. Riippuvuuksien injektointi osa 2: NHL-tilastot

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositorioa mihin teit tehtävät 2-13**

- Kurssin [tehtävärepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko1/nhl-statistics-1_ on ohjelma, jonka avulla on mahdollista tutkia <https://nhl.com>-sivulla olevia tilastotietoja (vaihtamalla sovelluksen käyttämää URL:ia, voit katsoa eri kausien tilastoja)
  - Kopioi projekti **palautusrepositorion** alle omaksi hakemistoksi
    - HUOM: nyt EI KÄYTETÄ tehtävien 2-13 ohtuvarasto-repositorioa!
  - Asenna projektin riippuvuudet suorittamalla sen juurihakemistossa komento `poetry install`
- Ohjelma koostuu kolmesta luokasta.
  - `Statistics` on palvelun tarjoava luokka, se tarjoaa metodit yhden pelaajan tietojen näyttämiseen, pistepörssin näyttämiseen ja yhden joukkueen pelaajien tietojen näyttämiseen
  - `Player` on luokka, jonka olioina `Statistics`-luokka käsittelee yksittäisen pelaajan tietoja
  - `PlayerReader` on luokka, jonka avulla ohjelma käy hakemassa pelaajien tiedot internetistä
- Ohjelma on nyt ikävästi struktoroitu ja esim. yksikkötestaus on kovin hankalaa

**Itse tehtävä:**

- Muokkaa ohjelman rakennetta siten, että `Statistics`-luokka saa konstruktoriparametrina `PlayerReader`-luokan olion.
- Muokkaa pääohjelma siten, että se injektoi `Statistics`-oliolle `PlayerReader`-luokan olion ja kokeile että ohjelma toimii edelleen:

```python
stats = Statistics(
  PlayerReader()
)
```

**HUOM:** jos törmäät virheeseen `URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed`, mahdollinen ratkaisu ongelmaan löytyy [täältä](https://stackoverflow.com/a/42334357).

### 16. NHL-tilastot-ohjelman yksikkötestaus

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositorioa mihin teit tehtävät 2-13**

- Tee yksikkötestit luokalle `Statistics`
  - Muista nimetä testitiedosto, testiluokka ja testimetodit [unittest-ohjeiden](https://ohjelmistotekniikka-hy.github.io/python/viikko2#unittest-ja-testaaminen) mukaisesti. Muuten pytest ei löydä suoritettavia testejä
  - Testien haarautumakattavuuden tulee `Statistics`-luokan osalta olla 100% (mittaa kattavuus coveragen avulla, katso [tehtävä 8](https://ohjelmistotuotanto-hy.github.io/tehtavat1#8-unittest))
    - Huomaa, että kattavuusraportti ei generoidu ennen kun sovellukseen on lisätty testejä
  - Testit eivät saa käyttää verkkoyhteyttä
  - Verkkoyhteyden tarpeen saat eliminoitua luomalla testiä varten `PlayerReader`-luokkaa muistuttavan "stubin", jonka sisälle kovakoodaat palautettavan pelaajalistan

```python
import unittest
from statistics import Statistics
from player import Player

class PlayerReaderStub:
    def get_players(self):
        return [
            Player("Semenko", "EDM", 4, 12),
            Player("Lemieux", "PIT", 45, 54),
            Player("Kurri",   "EDM", 37, 53),
            Player("Yzerman", "DET", 42, 56),
            Player("Gretzky", "EDM", 35, 89)
        ]

class TestStatistics(unittest.TestCase):
    def setUp(self):
        # annetaan Statistics-luokan oliolle "stub"-luokan olio
        self.statistics = Statistics(
            PlayerReaderStub()
        )

    # ...
```

Kun injektoit `PlayerReaderStub`-olion testissä `Statistics`-oliolle, palauttaa se aina saman pelaajalistan.

### 17. NHL-tilastot-ohjelman laajennus

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositorioa mihin teit tehtävät 2-13**

Muuta luokan `Statistics` metodia `top` siten, että sille voidaan antaa toinen parametri, joka määrittelee millä "parhausperustella" metodi palauttaa pelaajat.

Metodin toiminnallisuus selviää seuraavasta:

```python
def main():
    stats = Statistics(
      PlayerReader("https://studies.cs.helsinki.fi/nhlstats/2021-22/players.txt")
    )

    # järjestetään kaikkien tehopisteiden eli maalit+syötöt perusteella
    print("Top point getters:")
    for player in stats.top(10, SortBy.POINTS):
        print(player)

    # metodi toimii samalla tavalla kuin yo. kutsu myös ilman toista parametria
    for player in stats.top(10):
        print(player)

    # järjestetään maalien perusteella
    print("Top point goal scorers:")
    for player in stats.top(10, SortBy.GOALS):
        print(player)

    # järjestetään syöttöjen perusteella
    print("Top by assists:")
    for player in stats.top(10, SortBy.ASSISTS):
        print(player)
```

Järjestämiskriteeri määritellään [Enum](https://docs.python.org/3/library/enum.html)-arvona:

```python
from enum import Enum

class SortBy(Enum):
    POINTS = 1
    GOALS = 2
    ASSISTS = 3
```

Tee myös testit, jotka varmentavat metodin uuden version toiminnallisuuden. Jos Statistics-luokan käyttämä järjestämistapa näyttää vieraalta, Ohjelmointikurssin [materiaalissa](https://ohjelmointi-22.mooc.fi/osa-12/1-funktio-parametrina) avataan asiaa hieman tarkemmin.

### Tehtävien palautus

Lisää tehtävät 14-17 sisältävään repositorioosi (eli ns. palautusrepositorioosi) tiedosto _README.md_, mihin laitat linkin tehtävät 2-13 sisältävään ohtuvarasto-repositoroosi.

Palautusrepositorion pitäisi näyttää nyt suunnilleen seuraavalta

![]({{ "/images/lh1-31-22.png" | absolute_url }})

Pushaa kaikki tekemäsi tehtävät (paitsi ne, joissa mainitaan, että tehtävää ei palauteta mihinkään) GitHubiin palautusrepositorioosi ja merkkaa tekemäsi tehtävät palautussovellukseen <{{site.stats_url}}>.

- Kerro palautussovelluksessa tehtävät 14-17 sisältävä repositoriosi.
- Jos et tehnyt tehtäviä 14-17, voit laittaa linkin tehtävät 2-13 sisältävään ohtuvarasto-repositorioon.
