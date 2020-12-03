---
layout: page
title: Viikko 5
inheader: no
permalink: /python/tehtavat5/
---

## Viikko 5

_Alla olevien tehtävien deadline on maanantaina 2.12. klo 23:59_

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa

- ma 14-16 B221
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/5), joiden deadline on sunnuntaina 1.12. klo 23:59:00.

Tehtävissä 1-3 jatketaan gitin harjoittelua. Tehtävät 2 ja 3 eivät näy palautuksissa mitenkään.

Tehtävät 4 ja 5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span>.

Tehtävä 6 käsittelee retrospektiivitekniikoita.

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/main/tehtavat5.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: tägit [versionhallinta]

Tutustutaan tässä tehtävässä Gitin tageihin:

> Git has the ability to tag specific points in history as being important. Typically people use this functionality to mark release points (v1.0, and so on)

Lue ensin [http://git-scm.com/book/en/Git-Basics-Tagging](http://git-scm.com/book/en/Git-Basics-Tagging) (voit skipata kohdat 'signed tags' ja 'verifying tags')

Tee seuraavat samaan repositorioon, mihin palautat tehtäväsi:

- Tee tägi nimellä tagi1 (lightweight tag riittää)
- Tee kolme committia (eli 3 kertaa muutos + add + commit)
- Tee tägi nimellä tagi2
- Katso `gitk`-komennolla miltä historiasi näyttää
- Palaa tagi1:n aikaan, eli anna komento `git checkout tagi1`
  - Varmista, että tagin jälkeisiä muutoksia ei näy
- Palaa nykyaikaan
  - Tämä onnistuu komennolla `git checkout main`
- Lisää tägi _edelliseen_ committiin
  - Operaatio onnistuu komennolla <code>git tag tagi1b HEAD^</code> , eli HEAD^ viittaa nykyistä "headia" eli olinpaikkaa historiassa edelliseen committiin
  - Joissain windowseissa muoto <code>HEAD^</code> ei toimi, sen sijasta voit käyttää muotoa <code>HEAD~</code>
  - Tai katsomalla commitin tunniste (pitkä numerosarja) joko komennolla <code>git log</code> tai gitk:lla
- Kokeile molempia tapoja, tee niiden avulla kahteen edelliseen committiin tagit (tagi1a ja tagi1b)
- Katso komennolla <code>gitk</code> miltä historia näyttää

Tagit eivät mene automaattisesti etärepositorioihin. Pushaa koodisi githubiin siten, että myös tagit siirtyvät mukana. Katso ohje [täältä](http://git-scm.com/book/en/Git-Basics-Tagging#Sharing-Tags)

Varmista, että tagit siirtyvät GitHubiin.

### 2. git: vahingossa tuhotun tiedoston palautus [versionhallinta]

Edellisessä tehtävässä palasimme jo menneisyyteen checkouttaamalla tagillä merkittyyn kohtaan. Katsotaan nyt miten voimme palauttaa jonkun menneisyydessä olevan tilanteen uudelleen voimaan.

Voit tehdä tämän ja seuraavan tehtävän mihin tahansa repositorioon, tehtävät eivät näy palautuksissa.

- Tee jokin tiedosto, esim. nimeltään _xxx_, lisää ja committaa se
- Poista tiedosto ja committaa
- Tee jotain muutoksia johonkin tiedostoon ja committaa
- Historiasi näyttää seuraavalta

```
(1) - (2) - (3)
```

- Nykyhetki eli HEAD on (3). Commitissa (1) tiedosto _xxx_ on olemassa nykyhetkellä ja (2):ssa xxx:ää ei ole.
  - Huom: komennolla <code>gitk</code> voit tutkia historiaa
- Haluamme palauttaa tiedoston
- Selvitä sen commitin id, jossa tiedosto vielä on olemassa, tämä onnistuu gitk:lla tai <code>git log</code> -komennolla
- Anna komento <code>git checkout 3290b03cea08af987ee7ea57bb98a4886b97efe0 -- xxx</code> missä pitkä merkkijono on siis kyseisen commitin id
  - varmista että tiedosto on ilmestynyt staging-alueelle komennolla <code>git status</code>
- Tee commit
- _xxx_ on palannut!
- Huom: koko id:tä ei komennossa tarvitse antaa, riittää antaa alusta niin monta merkkiä, että niiden perusteella id voidaan päätellä yksikäsitteisesti repositoriosi historiassa

  - "Generally, eight to ten characters are more than enough to be unique within a project. For example, as of October 2017, the Linux kernel (which is a fairly sizable project) has over 700,000 commits and almost six million objects, with no two objects whose SHA-1s are identical in the first 11 characters." [7.1 Git Tools - Revision Selection
    ](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1)

- Täsmälleen samalla tavalla onnistuu olemassa olevan tiedoston vanhan version palauttaminen.

### 3. Git: commitin muutosten kumoaminen [versionhallinta]

- Huomaamme, että juuri tehty commit oli virhe, kumotaan se sanomalla <code>git revert HEAD --no-edit</code>
  - HEAD siis viittaa siihen committiin minkä kohdalla nyt ollaan
- Syntyy uusi commit, jossa edellisessä tehdyt muutokset on kumottu
  - Ilman optiota **no-edit** pääset editoimaan kumoamiseen liittyvään commitiin tulevaa viestiä
  - Huom: sanomalla <code>git checkout HEAD^</code> pääsemme takaisin kumottuun tilanteeseen, eli mitään ei ole lopullisesti kadotettu
- Vastaavalla tavalla voidaan revertata mikä tahansa commit, eli: <code>git revert kumottavancommitinid</code>

### 4. Laskin ja komento-oliot

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy-avoin/python-kevat-2021) hakemistoissa _koodi/viikko5/laskin_, löytyy yksinkertaisen laskimen toteutus. Laskimelle on toteutettu graafinen käyttöliittymä [Tkinter](https://docs.python.org/3/library/tkinter.html)-kirjaston avulla. 

Asenna projektin riippuvuudet komenolla `poetry install` ja käynnistä laskin virtuaaliympäristössä komennolla `python3 src/index.py`. Komennon suorittamisen tulisi avata ikkuna, jossa on laskimen käyttöliittymä.

Sovelluksen avulla pystyy tällä hetkellä tekemään yhteen- ja vähennyslaskuja, sekä nollaamaan laskimen arvon. Laskutoimituksen kumoamista varten on lisätty jo painike "Kumoa", joka ei vielä toistaiseksi tee mitään. Sovelluksen varsinainen toimintalogiikka on luokassa `Kayttoliittyma`. Koodissa on tällä hetkellä hieman ikävä `if`-hässäkkä:

```python
def suorita_komento(self, komento):
    arvo = 0

    try:
        arvo = int(self.syote_kentta.get())
    except Exception:
        pass

    if komento == Komento.SUMMA:
        self.sovellus.plus(arvo)
    elif komento == Komento.EROTUS:
        self.sovellus.miinus(arvo)
    elif komento == Komento.NOLLAUS:
        self.sovellus.nollaa()
    elif komento == Komento.KUMOA:
        pass

    self.kumoa_painike["state"] = constants.NORMAL

    if self.sovellus.tulos == 0:
        self.nollaus_painike["state"] = constants.DISABLED
    else:
        self.nollaus_painike["state"] = constants.NORMAL

    self.syote_kentta.delete(0, constants.END)
    self.tulos_var.set(self.sovellus.tulos)
```

Refaktoroi koodi niin, ettei `suorita_komento`-metodi sisällä pitkää `if`-hässäkkää. Hyödynnä kurssimateriaalin osassa 4 esiteltyä suunnittelumallia [command](/osa4#laskin-ja-komento-olio-viikko-5).

Tässä tehtävässä ei tarvitse vielä toteuttaa kumoa-komennon toiminnallisuutta!

Luokka `Kayttoliittyma` voi näyttää refaktoroituna esimerkiksi seuraavalta:

```python
class Komento(Enum):
    SUMMA = 1
    EROTUS = 2
    NOLLAUS = 3
    KUMOA = 4


class Kayttoliittyma:
    def __init__(self, sovellus, root):
        self.kommenot = {
            Komento.SUMMA: Summa(sovellus, self.lue_syote),
            Komento.EROTUS: Erotus(sovellus, self.lue_syote),
            Komento.NOLLAUS: Nollaus(sovellus, self.lue_syote),
            Komento.KUMOA: Kumoa(sovellus, self.lue_syote)
        }
    
    def lue_syote(self):
        return self.syote_kentta.get()

    def suorita_komento(self, komento):
        komento_olio = self.komennot[komento]
        komento_olio.suorita()
        self.kumoa_painike["state"] = constants.NORMAL

        if self.sovellus.tulos == 0:
            self.nollaus_painike["state"] = constants.DISABLED
        else:
            self.nollaus_painike["state"] = constants.NORMAL

        self.syote_kentta.delete(0, constants.END)
        self.tulos_var.set(self.sovellus.tulos)

    # ...
```

Komennoilla on nyt siis metodi `suorita` ja ne saavat konstruktorin kautta `Sovellus`-olion ja funktion, jota kutsumalla syötteen voi lukea.

### 5. Komentojen kumoaminen

Toteuta laskimeen myös kumoa-toiminnallisuus. Periaatteena on siis tallettaa `Sovellus`-luokkaan ennen jokaista operaatiota laskimen edellinen tulos. Edellisen tuloksen tulee voida palauttaa kutsumalla `Sovellus`-luokan metodia `kumoa`.

Riittää, että ohjelma muistaa edellisen tuloksen, eli kumoa-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin tämänkään toiminallisuuden toteutus ei olisi kovin hankalaa, jos edelliset tulokset tallennettaisiin esimerkiksi listaan.

### 6. Retrospektiivitekniikat

Wikipedian mukaan retrospektiivi on _"a meeting held by a project team at the end of a project or process (often after an iteration) to discuss what was successful about the project or time period covered by that retrospective, what could be improved, and how to incorporate the successes and improvements in future iterations or projects."_

Tutustu [täällä](http://retrospectivewiki.org/index.php?title=Retrospective_Plans) esiteltyihin retrospektiivitekniikoihin [Start, Stop, Continue, More of, Less of Wheel](http://retrospectivewiki.org/index.php?title=Start,_Stop,_Continue,_More_of,_Less_of_Wheel) ja [Glad, Sad, Mad](http://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad)

Tee aiheesta noin 0.25 sivun (eli noin 125 sanaa) tiivistelmä repositorion juureen sijoitettavaan tiedostoon _retro.md_

Pidä huoli siitä, että miniprojektitiimisi pitää ensimmäisen sprintin lopussa jompaa kumpaa tekniikkaa noudattavan retrospektiivin!

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkitse tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>
