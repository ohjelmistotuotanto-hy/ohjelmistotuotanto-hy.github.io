---
layout: page
title: Viikko 5
inheader: no
permalink: /tehtavat5/
---

{% include laskari_info.md part=5 %}

Tehtävissä 1-2 jatketaan Gitin harjoittelua. Tehtävät 1 ja 2 eivät näy palautuksissa mitenkään.

Tehtävät 3-6 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span>.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 3-6 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, sinne tehtävän hakemiston _viikko5_ sisälle.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: vahingossa tuhotun tiedoston palautus [versionhallinta]

Edellisessä tehtävässä palasimme jo menneisyyteen checkouttaamalla tagillä merkittyyn kohtaan. Katsotaan nyt miten voimme palauttaa jonkun menneisyydessä olevan tilanteen uudelleen voimaan.

Voit tehdä tämän ja seuraavan tehtävän mihin tahansa repositorioon, tehtävät eivät näy palautuksissa.

- Tee jokin tiedosto, esim. nimeltään _xxx_, lisää ja committaa se
- Poista tiedosto ja committaa
- Tee jotain muutoksia johonkin tiedostoon ja committaa
- Historiasi näyttää seuraavalta

```
(1) - (2) - (3)
```

- Nykyhetki eli HEAD on (3). Commitissa (1) tiedosto _xxx_ on olemassa ja (2):ssa xxx:ää ei ole.
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

### 2. Git: commitin muutosten kumoaminen [versionhallinta]

- Huomaamme, että juuri tehty commit oli virhe, kumotaan se sanomalla <code>git revert HEAD --no-edit</code>
  - HEAD siis viittaa siihen committiin minkä kohdalla nyt ollaan
- Syntyy uusi commit, jossa edellisessä tehdyt muutokset on kumottu
  - Ilman optiota **no-edit** pääset editoimaan kumoamiseen liittyvään commitiin tulevaa viestiä
  - Huom: sanomalla <code>git checkout HEAD^</code> pääsemme takaisin kumottuun tilanteeseen, eli mitään ei ole lopullisesti kadotettu
- Vastaavalla tavalla voidaan kumota, eli revertata mikä tahansa commit, eli: <code>git revert kumottavancommitinid</code>

### 3. Tenniksen pisteenlaskun refaktorointi

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _koodi/viikko5/tennis_, löytyy ohjelma, joka on tarkoitettu tenniksen [pisteenlaskentaan](https://github.com/emilybache/Tennis-Refactoring-Kata#tennis-kata).
- Kopioi projekti palatusrepositorioosi, hakemiston viikko5 sisälle.

Pisteenlaskennan rajapinta on yksinkertainen. Metodi `get_score` kertoo voimassa olevan tilanteen tenniksessä käytetyn pisteenlaskennan määrittelemän tavan mukaan. Sitä mukaa kun jompi kumpi pelaajista voittaa palloja, kutsutaan metodia `won_point`, jossa parametrina on pallon voittanut pelaaja.

Esim. käytettäessä pisteenlaskentaa seuraavasti:

```python
game = TennisGame("player1", "player2")

print(game.get_score())

game.won_point("player1")
print(game.get_score())

game.won_point("player1")
print(game.get_score())

game.won_point("player2")
print(game.get_score())

game.won_point("player1")
print(game.get_score())

game.won_point("player1")
print(game.get_score())
```

tulostuu

```
Love-All
Fifteen-Love
Thirty-Love
Thirty-Fifteen
Forty-Fifteen
Win for player1
```

Tulostuksessa siis kerrotaan mikä on pelitilanne kunkin pallon jälkeen kun _player1_ voittaa ensimmäiset 2 palloa, _player2_ kolmannen pallon ja _player1_ loput 2 palloa.

Pisteenlaskentaohjelman koodi toimii ja sillä on erittäin kattavat testit. Koodi on kuitenkin sisäiseltä laadultaan kelvotonta.

Tehtävänä on refaktoroida koodi luettavuudeltaan mahdollisimman ymmärrettäväksi. Koodissa tulee välttää ["taikanumeroita"](<https://en.wikipedia.org/wiki/Magic_number_(programming)>) ja huonosti nimettyjä muuttujia. Koodi kannattaa jakaa moniin pieniin metodeihin, jotka nimennällään paljastavat oman toimintalogiikkansa.

Etene refaktoroinnissa _todella pienin askelin_. Suorita testejä mahdollisimman usein. Yritä pitää ohjelma koko ajan toimintakunnossa.

Jos haluat käyttää jotain muuta kieltä kuin Pythonia, löytyy koodista ja testeistä versioita useilla eri kielillä osoitteesta [https://github.com/emilybache/Tennis-Refactoring-Kata](https://github.com/emilybache/Tennis-Refactoring-Kata)

Tehtävä on kenties hauskinta tehdä pariohjelmoiden. Itse tutustuin tehtävään kesällä 2013 Extreme Programming -konferenssissa järjestetyssä Coding Dojossa, jossa tehtävä tehtiin satunnaisesti valitun parin kanssa pariohjelmoiden.

Lisää samantapaisia refaktorointitehtäviä löytyy Emily Bachen [GitHubista](https://github.com/emilybache).

### 4. Laskin ja komento-oliot

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistoissa _koodi/viikko5/laskin_ löytyy yksinkertaisen laskimen toteutus. Laskimelle on toteutettu graafinen käyttöliittymä [Tkinter](https://docs.python.org/3/library/tkinter.html)-kirjaston avulla. 
- Kopioi projekti palatusrepositorioosi, hakemiston viikko5 sisälle.

Jos tarvitte, lue ensin kurssin Ohjelmistotekniikka [materiaalissa](https://ohjelmistotekniikka-hy.github.io/python/tkinter) oleva tkinter-tutoriaali.

Asenna projektin riippuvuudet komenolla `poetry install` ja käynnistä laskin virtuaaliympäristössä komennolla `python3 src/index.py`. Komennon suorittamisen tulisi avata ikkuna, jossa on laskimen käyttöliittymä.

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

    if self._sovelluslogiikka.tulos == 0:
        self._nollaus_painike["state"] = constants.DISABLED
    else:
        self._nollaus_painike["state"] = constants.NORMAL

    self._syote_kentta.delete(0, constants.END)
    self._tulos_var.set(self._sovelluslogiikka.tulos)
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
            Komento.KUMOA: Kumoa(sovelluslogiikka, self._lue_syote)
        }

    # ...

    def _lue_syote(self):
        return self._syote_kentta.get()

    def _suorita_komento(self, komento):
        komento_olio = self._komennot[komento]
        komento_olio.suorita()
        self._kumoa_painike["state"] = constants.NORMAL

        if self._sovelluslogiikka.tulos == 0:
            self._nollaus_painike["state"] = constants.DISABLED
        else:
            self._nollaus_painike["state"] = constants.NORMAL

        self._syote_kentta.delete(0, constants.END)
        self._tulos_var.set(self._sovelluslogiikka.tulos)
```

Komennoilla on nyt siis metodi `suorita` ja ne saavat konstruktorin kautta `Sovelluslogiikka`-olion ja funktion, jota kutsumalla syötteen voi lukea.

### 5. Komentojen kumoaminen

Toteuta laskimeen myös kumoa-toiminnallisuus. Periaatteena on siis toteuttaa jokaiseen komento-olioon metodi `kumoa`. Olion tulee myös muistaa mikä oli tuloksen arvo ennen komennon suoritusta, jotta se osaa palauttaa laskimen suoritusta edeltävään tilaan.

Jos kumoa-nappia painetaan, suoritetaan sitten edelliseksi suoritetun komento-olion metodi `kumoa`.

Riittää, että ohjelma muistaa edellisen tuloksen, eli kumoa-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin tämänkään toiminallisuuden toteutus ei olisi kovin hankalaa, jos edelliset tulokset tallennettaisiin esimerkiksi listaan.

### 6. IntJoukon testaus ja siistiminen

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _koodi/viikko4/int-joukko_ on alun perin Javalla tehty, mutta nyt Pythoniksi alkuperäiselle tyylille uskollisena käännetty aloittelevan ohjelmoijan ratkaisu syksyn 2011 Ohjelmoinnin jatkokurssin [viikon 2 tehtävään 3](http://www.cs.helsinki.fi/u/wikla/ohjelmointi/jatko/s2011/harjoitukset/2/). 
- Kopioi projekti palatusrepositorioosi, hakemiston viikko5 sisälle.

Kyseinen opiskelija on edennyt urallaan pitkälle, hän on työskennellyt mm. Googlella ja useassa korkean profiilin Piilaakson start upissa.

Koodi jättää hieman toivomisen varaa sisäisen laatunsa suhteen. Refaktoroi luokan `IntJoukko` koodi mahdollisimman siistiksi:

- Poista copypaste
- Vähennä monitkaisuutta
- Anna muuttujille selkeät nimet
- Tee metodeista pienempiä ja hyvän koheesion omaavia

Koodissa on joukko yksikkötestejä, jotka helpottavat refaktorointia.

**HUOM:** Suorita refaktorointi mahdollisimman pienin askelin, pidä koodi koko ajan toimivana. Suorita testit jokaisen refaktorointiaskeleen jälkeen!

{% include submission_instructions.md %}
