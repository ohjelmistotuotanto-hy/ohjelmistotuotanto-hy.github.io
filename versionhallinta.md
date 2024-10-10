---
layout: page
permalink: /versionhallinta
inheader: no
title: Versionhallinta
---

_Tämä ohje on kopio kurssin ohjelmistotekniikka [Git-tutoriaalista](https://ohjelmistotekniikka-hy.github.io/python/viikko1#versionhallinta-tee-n%C3%A4m%C3%A4-harjoitukset-jos-ei-tunnu-tutulta) muutamin lisäyksin_

Tutustumme seuraavaksi versionhallintaan.

Mitä tarkoitetaan versionhallinnalla? Lainaus sivulta [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials)

> Version control systems are a category of software tools that help a software team manage changes to source code over time. Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.

Vaikka ylläoleva puhuu versionhallinnasta ohjelmistotiimien yhteydessä, kannattaa versionhallintaa käyttää oikeastaan yhdenkin hengen projekteissa ja muunkinlaisen materiaalin, kuin koodin hallinnoimiseen. Esim. tämän kurssin kaikki materiaali on talletettu versionhallintaan.

Nykyään suosituin versionhallintaohjelmisto on [git](https://git-scm.com). Tutustumme tänään gitin alkeisiin.

**HUOM:** Git-tehtävät tulee tehdä tietokoneella, jolle on asennettu Git. Monilla macOS- ja Linux-käyttöjärjestelmien tietokoneilla Git on valmiiksi asennettuna. Asian voi tarkistaa suorittamalla oman tietokoneen terminaalissa komennon:

```bash
git --version
```

Jos komento ei tulosta Git-version numeroa, tutustu [Git-asennusohjeisiin](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Windows-tietokoneilla asennuksessa ja komentojen suorituksessa voi käyttää esimerkiksi [Windows Subsystem for Linux](https://tkt-lapio.github.io/#windows-subsystem-for-linux) -työkalua.

Jos komennon tulostama gitin versio taas on pienempi kuin 2.23.0, seuraavissa tehtävissä käytetty `git restore` -komento ei toimi. Voit kuitenkin käyttää `git reset HEAD`- ja `git checkout` -komentoja, joista saat lisätietoa [Tietokone työvälineen -kurssin materiaaleista](https://tkt-lapio.github.io/git/).

### Git-konfiguraatioita

Avaa terminaali omalla koneellasi. **Seuraavat tehtävät tehdään siis paikallisesti, ei melkillä!**

Määrittele gitille **oma nimesi** sekä **käyttämäsi email-osoite** antamalla komennot:

```
 git config --global user.name "Your Name"
 git config --global user.email you@example.com
```

Varmista komennolla `git config -l`, että määrittelyt menivät oikein.

Määritellään vielä git käyttämään sopivia värejä komennolla `git config --global color.ui` ja **vaihdetaan gitin käyttämäksi oletuseditoriksi nano** komennolla `git config --global core.editor nano`

Jos käytät vimiä, voit jättää oletuseditorin muuttamatta.

Tee vielä seuraava konfiguraatio:

```
git config --global push.default matching
```

Tämä liittyy `git push`-komennon oletusarvoiseen toiminnallisuuteen. Komennosta lisää myöhemmin.

### Repositorio

Tee nyt sopiva hakemisto gitin harjoittelua varten ja mene hakemistoon, eli anna esim. komennot:

- `mkdir ohtu-git-warmup`
- `cd ohtu-git-warmup`

**HUOM:** varmista nyt että olet luomassasi hakemistossa, eli jos suoritat komennon _ls_, ei hakemistossa pitäisi olla mitään.

Luodaan hakemistosta paikallinen _git-repositorio_ antamalla komento `git init`

Git ilmoittaa alustaneensa repositorion:

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git init
Initialised empty Git repository in /home/ad/fshome4/u4/m/mluukkai/Linux/ohtu-git-warmup/.git/
```

Jos katsot hakemiston sisältöä komennolla `ls -la` huomaat, että hakemiston sisälle on ilmestynyt hakemisto `.git`. Git käyttää luotua hakemistoa pitääkseen kirjaa repositorioon talletetuista tiedostoista.

**HUOM:** koska hakemiston nimi (_.git_) alkaa pisteellä, ei komento `ls` näytä sitä oletusarvoisesti. Parametri _a_ näyttää myös pisteellä alkavat tiedostot ja hakemistot. Kokeile, miten `ls -a` ja `ls -la` eroavat toisistaan!

Pysy edelleen repositorion sisältävässä hakemistossasi _ohtu-git-warmup_.

Luo hakemistoon tiedosto nimeltään _tiedosto.txt_, esim. komennolla `touch`. Luotuasi tiedoston, suorita komento `git status`:

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ touch tiedosto.txt
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	tiedosto.txt

nothing added to commit but untracked files present (use "git add" to track)
mluukkai@melkinpaasi:~/ohtu-git-warmup$
```

Git ilmoittaa, että on olemassa tiedosto, joka on tilassa _untracked_, eli tiedostoa ei ole lisätty versionhallinnan pariin.

Kuten komennon tuloste kertoo, tiedoston lisääminen gitin alaisuuteen (...to include in what will be committed) tapahtuu komennolla `git add tiedosto.txt`

Suorita lisäys ja sen jälkeen komento `git status`:

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git add tiedosto.txt
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   tiedosto.txt
```

Git kertoo nyt, että _tiedosto.txt_ on niiden muutosten joukossa, jotka voidaan _commitoida_.

### Commitit

Commitoimisella tarkoitetaan tiedostojen ja hakemistojen sekä niihin liittyvien muutosten tallentamista _git-repositorioon_.

Suoritetaan commitointi antamalla komento `git commit -m "tiedosto.txt luotu"`

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git commit -m "tiedosto.txt luotu"
[master (root-commit) 0e12cfa] tiedosto.txt luotu
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 tiedosto.txt
```

Suorita jälleen komento `git status`

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
nothing to commit, working tree clean
```

Git ilmoittaa, että _working tree clean_, eli hakemistosi on samassa tilassa kuin git-repositorio.

### Working directory, index ja staging

**Muista käyttää tab-completea tehtäviä tehdessäsi!**

Kun teet muutoksia hakemistosi alla oleviin tiedostoihin (tai hakemistoihin), kohdistuvat muutokset _working directoryyn_ eli työhakemistoon.

- Tee jokin muutos tiedostoon tiedosto.txt
  - Käytä tiedostojen editointiin _nano_-editoria. Editori käynnistyy komentoriviltä komennolla _nano tiedosto.txt_
  - Saat tallennettua nanossa tiedoston painamalla yhtä aikaa _ctrl_ ja _o_
  - Editori sulkeutuu painamalla _ctrl_ ja _x_
- Luo hakemistoon uusi tiedosto, nimeltään _toinen.txt_

Suorita jälleen `git status`

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   tiedosto.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	toinen.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Git ilmoittaa nyt, että uusi tiedosto on _untracked_ ja että aiemmassa tiedostossa on muutoksia, jotka eivät ole _staged for commit_.

Toimitaan ohjeen mukaan eli lisätään muutokset ja uusi tiedosto commitoitavien joukkoon. Molempien tiedostojen yhtäaikainen "addaaminen" onnistuu komennolla `git add .`

Tarkistetaan taas tilanne komennolla `git status`

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   tiedosto.txt
	new file:   toinen.txt
```

Sekä muutos että uusi tiedosto ovat nyt valmiina committoitavaksi.

Committointi onnistuu komennolla `git commit`. Kuten edelliselläkin kerralla, annetaan komennolle parametrina _commit-viesti_, eli merkkijono, joka kuvaa mitä muutoksia uusi commit tuo edelliseen nähden:

`git commit -m "muutos ja lisäys"`

Tarkasta committoinnin jälkeen jälleen tilanne komennolla `git status`.

**HUOM** jos suoritat commitoinnin vahingossa ilman commit-viestiä, eli parametria `-m`, avaa git tekstieditorin ja olettaa että haluat kirjoittaa commit-viestin editoriin. Jos et määritellyt alun ohjeen mukaan gitille editoriksi nanoa, avautuu oletusarvoinen editori _vim_ ja joudut kenties googlaamaan, miten pääset pois editorista.

Tiedostot ja niihin tehdyt muutokset voivat siis olla gitin suhteen _kolmessa eri tilassa_.

- Aluksi tiedostot (tai niihin tehdyt muutokset) ovat vain _working directoryssä_ ja git ei noteeraa niitä ennen kuin ne lisätään komennolla `git add`
- Tämän jälkeen tiedostot ovat valmiina commitoitavaksi. Gitin terminologian mukaan valmiina committoitavaksi olevat tiedostot ovat _staging_-alueella
- Komento `git commit` siirtää stagingissa olevat muutokset repositorioon eli luo uuden _commitin_

Seuraava kuva havainnollistaa sitä, miten tiedoston _tila_ vaihtuu git-komentoja tekemällä.

![](https://github.com/mluukkai/otm2016/raw/master/img/lh3-2.png)

Kun tiedosto luodaan, menee se gitin _working directoryyn_. Komennolla _git add_ tiedosto siirtyy _staging_-alueelle, eli valmiiksi committointia varten. Stagingissa oleva tiedosto viedään (eli "commitoidaan") repositorioon komennolla _git commit_. Kun committoitua tiedostoa taas editoidaan, menevät muutokset jälleen _working directoryyn_.

### Git log

Jokainen komennon _git commit_ suorittaminen siis synnyttää repositorioon uuden commitin, eli uuden "tilan". Komennolla `git log` on mahdollista nähdä, mitä committeja repositorio sisältää:

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git log
commit 6aff75ab51d14d7cb9a72867ba13d9782d06c7ff (HEAD -> master)
Author: Matti Luukkainen <mluukkai@iki.fi>
Date:   Sun Oct 7 19:33:32 2024 +0300

    muutos ja lisäys

commit 9e6a83d058c9564e8a390f8766845d45b365f360
Author: Matti Luukkainen <mluukkai@iki.fi>
Date:   Sun Oct 7 19:32:12 2024 +0300

    tiedosto.txt luotu
mluukkai@melkinpaasi:~/ohtu-git-warmup$
```

Gitin logi kertoo jokaisen commitin ajan, tekijän, viestin ja _tunnisteen_. Tunnisteita käytetään, jos on esim. tarvetta palata johonkin vanhan commitin tilaan.

Voit selata logia nuolinäppäimillä. Pääset ulos `git log`:ista painamalla _q_.

### Harjoittelua

Muista käyttää komentoa `git status` mahdollisimman usein. Älä myöskään unohda tab-completea!

- Luo tiedosto _kolmas.txt_
- Lisää se commitoitavaksi ja commitoi
- Muuta tiedostojen _toinen.txt_ ja _kolmas.txt_ sisältöä ja commitoi muutokset
- Luo hakemisto _stuff_ ja sen sisälle jokin tiedosto
- Lisää muutokset committoitavaksi ja committoi
  - Huomaa, että hakemiston lisääminen riittää, sen sisältämät tiedostot tulevat automaattisesti lisätyksi
- Katso miltä git-logi näyttää

### gitk

Gitin committeja voi tarkastella myös graafisella _gitk_-komennolla.

- `gitk`-komento toimii Windowsilla ainakin GitHub for Windowsin Git Shellissä.
- Saat asennettua Maciin `gitk`:n [tämän ohjeen](https://www.geekbitzone.com/posts/git/gitk-for-macos/) avulla
- Jos `gitk` ei jostain syystä toimi, voit asentaa [Sourcetree](https://www.sourcetreeapp.com)-työkalun

Suorita komento repositoriossa:

![]({{ "/assets/images/lh3-1.png" | absolute_url }})

Vasemmalla yläkulmassa näet kaikki commitit. Uusin tilanne ylimpänä. Uusimman commitin nimi on _master_. Klikkaamalla commitia, näet muissa ikkunoissa commitiin liittyviä tietoja. Oikealla alakulmassa näet ne tiedostot, jotka ovat muuttuneet commitissa (jos valinta on _patch_) tai ne tiedostot, joita repositoriossa oli olemassa commitin aikana (jos valinta on _tree_). Vasemmassa alakulmassa pystyt tarkastelemaan commitin tiedostoihin tekemiä muutoksia tai tiedostojen tilaa commitin aikana. Valinnat ovat hieman hämäävät, sillä ne toimivat eri tavoin riippuen oikean puolen moodista.

Vastaava näkymä OSX:n [Sourcetree](https://www.sourcetreeapp.com)-ohjelmalla tarkasteltaessa:

![]({{ "/assets/images/lh1-1a.png" | absolute_url }})

Seuraavaa tehtävää tehdessäsi kannattaa terminaaliin avata uusi välilehti, jotta voit pitää gitk:ta käynnissä.

- Kopioi tiedostoon _tiedosto.txt_ jostain paljon tekstiä ja commitoi tiedosto
- Poista nyt osa tiedoston tekstistä ja lisää tiedostoon hieman lisää tekstiä
- commitoi muutosten jälkeen
- Päivitä gitk:n näkymä (file/update) ja katso miten muutokset näkyvät (tarkastele kahta ylintä committia)
  - Valitse oikeasta alakulmasta _patch_ ja vasemmasta _diff_
  - Näin näet commitin aiheuttamat muutokset [diff](https://fi.wikipedia.org/wiki/Diff)-muodossa
  - Jos oikealta on valittuna _tree_, näkyy vasemmalla puolella (valinnasta riippumatta) tiedostojen commitin aikainen tilanne
- Jos käytät sourcetreetä, sen pitäisi päivittyä automaattisesti ja näyttää muutos _diff_-muodossa

### Tiedoston poistaminen ja uudelleennimentä

- Poista tiedosto _toinen.txt_
- Suorita `git status`
- Commitoi muutos
  - Poista ensin tiedosto gitin alaisuudesta komennolla `git rm`
- varmista komennolla `git status`, että kaikki on niinkuin kuuluukin
- muuta tiedoston _tiedosto.txt_ nimeksi _eka.txt_
  - uudelleennimentä tapahtuu komennolla `mv`
- Suorita `git status`
  - Miten git käsittelee uudelleennimennän?
- Commitoi muutos

### git add -p

- Tee jotain muutoksia tiedostoihin _eka.txt_ ja _kolmas.txt_
  - Tee sekä lisäyksiä että poistoja
- lisää ne commitoitavaksi komennolla `git add -p`
  - Git näyttää nyt jokaisen tekemäsi muutoksen _patch_-muodossa ja pyytää varmistamaan lisätäänkö muutos commitoivaksi
  - Hyväksy painamalla _y_ ja enter
- Commitoi muutokset
- Tee tiedostoihin tehtyjen muutosten commitoitavaksi lisääminen _aina_ komennolla `git add -p`, näin pääset tarkastamaan, että muutokset ovat juuri ne mitä oletat olevasi lisäämässä
- Huomaa, että kokonaan uudet tiedostot eivät siirry committoitavaksi komennolla `git add -p`

### Muutosten peruminen

Joskus tiedostoihin tulee tehtyä muutoksia, jotka on tarpeen perua

- Tee nyt joku muutos tiedostoon _eka.txt_, **älä** lisää tiedostoa committoitavaksi
- Suorita komento `git status`

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   eka.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Kuten oletettua, git kertoo että olemme tehneet muutoksia, jotka eivät ole "staged for commit", eli lisättyjä commitoitavaksi.

- Päätetäänkin perua muutokset. Se onnistuu komennolla `git restore eka.txt`
- Kun suoritat uudelleen komennon `git status` huomaat, että working directory ei enää sisällä muutoksia:

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git restore eka.txt
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
nothing to commit, working trean clean
```

- Varmista vielä, että tiedoston sisältö on sama kuin ennen muutoksia

Myös stagingiin viety eli valmiina committoitavaksi oleva muutos voidaan perua.

- Tee muutoksia tiedostoon _kolmas.txt_ ja lisää se committoitavaksi. **Älä** kuitenkaan committoi.
- Git statuksen pitäisi näyttää seuraavalta

```
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

	modified:   kolmas.txt

mluukkai@melkinpaasi:~/ohtu-git-warmup$
```

Ohje muutoksen perumiseen löytyy git statuksen tulosteesta.

- Suorita muutokset peruva komento `git restore --staged kolmas.txt`
- Katsotaan jälleen `git status`

```pre
mluukkai@melkinpaasi:~/ohtu-git-warmup$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)

	modified:   kolmas.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Tiedosto ei siis enää ole _staged_-tilassa, muutokset ovat kuitenkin _working directoryssä_, eli jos katsot tiedoston sisällön, muutokset ovat vielä olemassa

- Pääset perumaan muutokset kokonaan antamalla komennon `git restore kolmas.txt`
- Varmista, että tiedosto on palannut muutoksia edeltävään tilaan

Seuraavassa tiedoston tilaa kuvaava kaavio täydennettynä, eli jos tiedosto on lisätty committoitavaksi, eli se on _staged_, voidaan muutos perua komennolla `git restore --staged`. Tällöin muutokset kuitenkin vielä jäävät tiedostoon, eli ovat _working directoryssä_. Tiedosto saadaan palautettua repositoriossa olevaan edellisen commitin tilaan komennolla `git restore`.

![]({{ "/assets/images/v1-RestoreGit.png" | absolute_url }})

### Harjoittelua

- luo repositoriosi sisälle hakemisto _tiedostoja_ ja hakemiston sisälle tiedostot _file1_, _file2_ ja _file3_
- commitoi muutokset
  - muista miten pystyt lisäämään kokonaisen hakemiston sisällön commitoitavaksi yhdellä komennolla
- muuta tiedoston _file1_ sisältöä ja poista tiedosto _file2_
- peru muutokset!
- muuta tiedoston _file3_ sisältöä, lisää commitoitavaksi
- peru muutokset!
- poista tiedosto _file1_ ja uudelleennimeä tiedosto _file2_ tiedostoksi _file22_
- committoi
