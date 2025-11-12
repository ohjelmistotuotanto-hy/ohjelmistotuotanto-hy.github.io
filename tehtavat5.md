---
layout: page
title: Viikko 5
inheader: no
permalink: /tehtavat5/
---

{% include paivitys_kesken.md %}

{% include laskari_info.md part=5 %}

Tehtävissä 1-2 jatketaan Gitin harjoittelua. Tehtävät 1 ja 2 eivät näy palautuksissa mitenkään.

Tehtävät 3-4 ja 6-7 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span>. Tehtävissä 5 ja 6 pääsemme hyödyntämään tekoälyä koodin katselmoinnissa sekä koodin tuottamisessa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 3-6 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, sinne tehtävän hakemiston _viikko5_ sisälle.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: vahingossa tuhotun tiedoston palautus [versionhallinta]

Viikon 4 [tehtävässä 5](/tehtavat4/#5-git-tägit-versionhallinta) palasimme jo menneisyyteen checkouttaamalla tagillä merkittyyn kohtaan. Katsotaan nyt miten voimme palauttaa jonkun menneisyydessä olevan tilanteen uudelleen voimaan.

Voit tehdä tämän ja seuraavan tehtävän mihin tahansa repositorioon, tehtävät eivät näy palautuksissa.

<input type="checkbox"> Tee tiedosto nimeltään _important.txt_, lisää ja committaa se Gitiin

<input type="checkbox"> Poista tiedosto ja committaa

<input type="checkbox"> Tee jotain muutoksia _johonkin_ tiedostoon ja committaa

Historiasi näyttää seuraavalta

```
(1) - (2) - (3)
```

Nykyhetki eli HEAD on (3). Commitissa (1) tiedosto _important.txt_ on olemassa ja (2):ssa important.txt:ää ei ole.
- Huom: komennolla <code>gitk</code> voit tutkia historiaa

Haluamme palauttaa tiedoston _important.txt_.

<input type="checkbox"> Selvitä sen commitin id, jossa tiedosto vielä on olemassa, tämä onnistuu gitk:lla tai komennolla <code>git log</code> 

<input type="checkbox"> Anna komento <code>git checkout 3290b03cea08af987ee7ea57bb98a4886b97efe0 -- important.txt</code> missä pitkä merkkijono on siis kyseisen commitin id

<input type="checkbox"> Varmista että tiedosto  _important.txt_ on ilmestynyt staging-alueelle komennolla <code>git status</code>

<input type="checkbox"> Tee commit

Kadonnut tiedosto _important.txt_ on palannut, ja versionhallinnassa!

 Huom: koko id:tä ei komennossa tarvitse antaa, riittää antaa alusta niin monta merkkiä, että niiden perusteella id voidaan päätellä yksikäsitteisesti repositoriosi historiassa:
  - _"Generally, eight to ten characters are more than enough to be unique within a project. For example, as of October 2017, the Linux kernel (which is a fairly sizable project) has over 700,000 commits and almost six million objects, with no two objects whose SHA-1s are identical in the first 11 characters."_ Ks. lisää [täältä](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1)
- Täsmälleen samalla tavalla onnistuu olemassa olevan tiedoston vanhan version palauttaminen.

### 2. Git: commitin muutosten kumoaminen [versionhallinta]

Jatketaan siitä mihin edellisessä tehtäväss jäimme. Huomaamme, että juuri tehty commit oli virhe.

<input type="checkbox"> Kumotaan se komennolla <code>git revert HEAD --no-edit</code>
  
Komennossa HEAD viittaa siihen committiin, jonka kohdalla nyt ollaan.

<input type="checkbox"> Varmista, että edellisen commitin tekemä muutos (eli tiedoston _important.txt_ lisääminen) kumoutuu

Komennon `git revert` seurauksena syntyy uusi commit, jossa edellisessä tehdyt muutokset on kumottu
- Ilman optiota **no-edit** pääset editoimaan kumoamiseen liittyvään commitiin tulevaa viestiä
- Huom: sanomalla <code>git checkout HEAD^</code> pääsemme takaisin kumottuun tilanteeseen, eli mitään ei ole lopullisesti kadotettu

Vastaavalla tavalla voidaan kumota, eli revertata mikä tahansa commit, eli: <code>git revert kumottavancommitinid</code>

### 3. Tenniksen pisteenlaskun refaktorointi

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko5/tennis_, löytyy ohjelma, joka on tarkoitettu tenniksen [pisteenlaskentaan](https://github.com/emilybache/Tennis-Refactoring-Kata#tennis-kata).

<input type="checkbox"> Kopioi projekti palautusrepositorioosi, hakemiston viikko5 sisälle

<input type="checkbox"> Tee commit ja pushaa koodi GitHubiin

<input type="checkbox"> Tee tehtävää varten oma haara nimeltään *tennis_refactoring*

<input type="checkbox"> Varmista vielä, että olet seuraavassa tilanteessa ennen kuin jatkat seuraaviin askeleisiin

```
$ git status
On branch tennis_refactoring
nothing to commit, working tree clean
```

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

Tenniksen pisteenlaskennasta voit lukea enemmän esim. [Wikipediasta](https://en.wikipedia.org/wiki/Tennis_scoring_system#Description), mutta se ei ole välttämätöntä tämän tehtävän tekemisen kannalta.

Pisteenlaskentaohjelman koodi toimii ja sillä on erittäin kattavat testit. Koodi on kuitenkin sisäiseltä laadultaan kelvotonta.

<input type="checkbox"> Tehtävänä on refaktoroida koodi luettavuudeltaan mahdollisimman ymmärrettäväksif

- Koodissa tulee välttää ["taikanumeroita"](<https://en.wikipedia.org/wiki/Magic_number_(programming)>) ja huonosti nimettyjä muuttujia
- Koodi kannattaa jakaa moniin pieniin metodeihin, jotka nimennällään paljastavat oman toimintalogiikkansa
- Etene refaktoroinnissa _todella pienin askelin_
- Suorita testejä mahdollisimman usein
- Yritä pitää ohjelma koko ajan toimintakunnossa, eli älä hajota testejä
- **Testeihin ohjelmassa ei tarvitse eikä edes saa koskea**

Jos haluat käyttää jotain muuta kieltä kuin Pythonia, löytyy koodista ja testeistä versioita useilla eri kielillä osoitteesta [https://github.com/emilybache/Tennis-Refactoring-Kata](https://github.com/emilybache/Tennis-Refactoring-Kata).

<input type="checkbox"> Kun olet valmis, commitoi koodi ja pushaa haara *tennis_refactoring* GitHubiin

Lisää samantapaisia refaktorointitehtäviä löytyy Emily Bachen [GitHubista](https://github.com/emilybache).

### 4. Pull request ja koodin katselmointi

Tämän tehtävän tekeminen edellyttää, että sinulla on [GitHub Education](/tehtavat2/#github-education) -jäsenyys.

<input type="checkbox"> Tee nyt GitHubissa Pull request haastasta *tennis_refactoring* haaraan *main*

GitHub ehkä jo ehdottaa Pull requestin tekemistä

![]({{ "/images/pr1.png" | absolute_url }})

<input type="checkbox"> Varmista, että PR kohdistuu haastasta *tennis_refactoring* haaraan *main*. 

<input type="checkbox"> Kirjoita PR:lle kuvaus. Voit ottaa esim. [täältä](https://medium.com/@jmanuellugo96/how-to-write-an-awesome-pull-request-pr-description-bdd2c6e48418) tai [täältä](https://www.hackerone.com/blog/writing-great-pull-request-description) mallia kuvaukselle.

![]({{ "/images/pr2.png" | absolute_url }})

<input type="checkbox"> Pyydä GitHub Copilotia tekemään PR:llesi koodin katselmointi:

![]({{ "/images/pr3.png" | absolute_url }}){:height="130px" }

<input type="checkbox"> Odota katselmoinnin valmistumista... omassa tapauksessani taisi mennä noin 10 minuuttia

<input type="checkbox"> Käy katselmoinnin tulos läpi. Hyväksy ehdotetut muutokset halutessasi ja merkitse kommentit selvitetyiksi (_resolve conversation_)

<input type="checkbox"> Mergeä Pull request main-haaraan

<input type="checkbox"> Kirjoita raportti katselmoinnista palautusrepositorioon hakemistoon _viikko5_ talletettavaan tiedoston _review.md_

Kerro raportissa
- Mitä huomioita Copilot teki koodistasi
- Olivatko ehdotetut muutokset hyviä
- Kuinka hyödylliseksi koit Copilotin tekemän katselmoinnin

### 5. Good vibe with warehouses

Palataan jälleen viikolta 1 tutun Ohtuvaraston pariin. Tehtävässä on tarjkoitus saada tekoäly koodaamaan Ohtuvarastoon Web-käyttöliittymä, esim. Flask-sovelluskehystä käyttäen

<input type="checkbox"> Tee repositorioosi issue, missä kuvaat mahdollisimman tarkasti minkälaisen sovelluksen haluat. Sovelluksen pitäisi ainakin mahdollistaa usean varaston luominen ja käsittelu

<input type="checkbox"> Assignaa issue Copilotille

![]({{ "/images/issue1.png" | absolute_url }}){:height="130px" }

Copilot avaa Pull requestin työskentelyään varten

![]({{ "/images/issue2.png" | absolute_url }})

<input type="checkbox"> Mene Pull requestin näkymään, ja sieltä edelleen nappia "View session" painamalla katsomaan Copilotin työskentelyä

Copilot aloittaa tutustumalla projektiin ja luo suunnitelman

![]({{ "/images/issue3.png" | absolute_url }})

<input type="checkbox"> Seuraa Copilotin edistymistä

Copilotilla voi mennä aika kauan koodaillessa. Nyt on hyvä hetki esim. keittää kahvit tai hakea jääkaapista energiajuomatölkki.

Kun Copilot on valmis (itselläni meni noin 15 min) näet sen luoman koodin pull requestin sivulta. Ainakin omassa tapauksessani Copilot on lisännyt PR:n sivulle myös kuvakaappauksia sovelluksesta.

<input type="checkbox"> Pull request on tällä hetkellä draft-tilassa, muuta sen tilaa painamalla nappia "Ready for review"

<input type="checkbox"> Hae pull requestin koodia omalla koneellasi

Tämä tapahtuu komennoilla `git fetch` ja `git checkout`:

```
$ git fetch
remote: Enumerating objects: 38, done.
remote: Counting objects: 100% (36/36), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 25 (delta 9), reused 18 (delta 5), pack-reused 0 (from 0)
Unpacking objects: 100% (25/25), 13.12 KiB | 206.00 KiB/s, done.
From github.com:mluukkai/ohtuvarasto25
 * [new branch]      copilot/add-warehouse-management-ui -> origin/copilot/add-warehouse-management-ui
   a359cc1..7211227  user_interface -> origin/user_interface
$ git checkout copilot/add-warehouse-management-ui
branch 'copilot/add-warehouse-management-ui' set up to track 'origin/copilot/add-warehouse-management-ui'.
Switched to a new branch 'copilot/add-warehouse-management-ui'
```

<input type="checkbox"> Varmista, että koodi toimii

Oma sovellukseni oli konfiguroitu siten, että osoitteen http://localhost:5000/ sijaan sovellukseen pääsee käsiksi osoitteesta http://127.0.0.1:5000/

<input type="checkbox"> Tee sovellukselle katselmointi GitHubissa

Pääset tekemään katselmoinnin Pull requestin sivun ylävasemmalla olevasta napista "Add your review". Saatat joutua uudelleenlataamaan sivun, jotta nappi ilmestyy näkyviin

<input type="checkbox"> Vaadi katselmoinnissa jotain muutosta koodiin

![]({{ "/images/issue5.png" | absolute_url }})

Tekstissä tulee mainita _@copilot_, jotta Copilot suostuu tekemään muutokset

<input type="checkbox"> Seuraa jääleen Copilotin edistymistä napilla "View session"

<input type="checkbox"> Varmista vielä omalla koneellasi, että koodi toimii muutosten jälkeen

<input type="checkbox"> Kun olet tyytyväinen mergeä Pull request main-haaraan

<input type="checkbox"> Kirjoita raportti katselmoinnista palautusrepositorioon hakemistoon _viikko5_ talletettavaan tiedoston _vibe.md_

Kerro raportissa
- Päätyikö Copilot toimivaan ja hyvään ratkaisuun
- Oliko koodi selkeää
- Opitko jotain uutta Coplotin tekemää koodia lukiessasi

### 6. Laskin ja komento-oliot

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

### 7. Komentojen kumoaminen

Toteuta laskimeen myös kumoa-toiminnallisuus. Periaatteena on siis toteuttaa jokaiseen komento-olioon metodi `kumoa`. Olion tulee myös muistaa mikä oli tuloksen arvo ennen komennon suoritusta, jotta se osaa palauttaa laskimen suoritusta edeltävään tilaan.

Jos kumoa-nappia painetaan, suoritetaan sitten edelliseksi suoritetun komento-olion metodi `kumoa`.

Riittää, että ohjelma muistaa edellisen tuloksen, eli kumoa-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin tämänkään toiminallisuuden toteutus ei olisi kovin hankalaa, jos edelliset tulokset tallennettaisiin esimerkiksi listaan.

### Vapaaehtoinen bonus-tehtävä

Laajenna ohjelmaasi siten, että se mahdollistaa mielivaltaisen määrän peräkkäisiä kumoamisia. Eli jos olet esim. laskenut summan 1+2+3+4+5 (jonka tulos 15), napin _kumoa_ peräkkäinen painelu vie laskimen tilaan missä tulos on ensin 10 sitten 6, 3, 2, 1 ja lopulta 0.

Myös esim. seuraavanlaisen monimutkaisemman operaatiosarjan pitää toimia oikein: Summa 10, Erotus 6, Erotus 2, Kumoa (kumoaa komennon Erotus 2), Summa 4, Kumoa (Kumoaa komennon Summa 4), Kumoa (kumoaa komennon Erotus 6), Kumoa (kumoaa komennon Summa 10)

{% include submission_instructions.md %}

### Vapaaehtoinen bonus-tehtävä

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko5/int-joukko_ on alun perin Javalla tehty, mutta nyt Pythoniksi alkuperäiselle tyylille uskollisena käännetty aloittelevan ohjelmoijan ratkaisu syksyn 2011 Ohjelmoinnin jatkokurssin [viikon 2 tehtävään 3](http://www.cs.helsinki.fi/u/wikla/ohjelmointi/jatko/s2011/harjoitukset/2/). 
- Kopioi projekti palautusrepositorioosi, hakemiston viikko5 sisälle.

Kyseinen opiskelija on edennyt urallaan pitkälle, hän on työskennellyt mm. Googlella ja useassa korkean profiilin Piilaakson start upissa.

Koodi simuloi vanhanaikaista ohjelmointikieltä kuten C:tä missä ei ole Pythonin listan tapaista valmista tietorakennetta, vaan ainoastaan listoja, joiden koko on kiinteä, ja joka määritellään listan luomishetkellä. Koodissa listan luominen tapahtuu metodilla `_luo_lista`:

```python
class IntJoukko:
    # tämä metodi on ainoa tapa luoda listoja
    def _luo_lista(self, koko):
        return [0] * koko

    def __init__(self, kapasiteetti=None, kasvatuskoko=None):
        # ...
        
        # luodaan lista, jolla haluttu kapasiteetti
        self.ljono = self._luo_lista(self.kapasiteetti)
        self.alkioiden_lkm = 0
```

Kun joukkoon lisätään riittävä määrä uusia lukuja, tulee eteen tilanne, että joukon sisäistä listaa on kasvatettava. Tämä tapahtuu luomalla uusi lista metodilla `_luo_lista`:

```python
    def lisaa(self, n):
        # ...
                
        # ei enää tilaa, luodaan uusi lista lukujen säilyttämiseen
        self.ljono = self._luo_lista(self.alkioiden_lkm + self.kasvatuskoko)

```

Koodi jättää hieman toivomisen varaa sisäisen laatunsa suhteen. Refaktoroi luokan `IntJoukko` koodi mahdollisimman siistiksi:

- Poista copypaste
- Vähennä monimutkaisuutta
- Anna muuttujille selkeät nimet
- Tee metodeista pienempiä ja hyvän koheesion omaavia

Ratkaisusi tulee toimia siten, että edelleen joukon sisäisen listan koko on kiinteä, ja lista luodaan metodilla `_luo_lista`, eli jos lista täyttyy, luodaan uusi lista metodin avulla.

Koodissa on joukko yksikkötestejä, jotka helpottavat refaktorointia.

**HUOM:** Suorita refaktorointi mahdollisimman pienin askelin, pidä koodi koko ajan toimivana. Suorita testit jokaisen refaktorointiaskeleen jälkeen!
