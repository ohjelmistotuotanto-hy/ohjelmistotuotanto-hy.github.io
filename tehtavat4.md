---
layout: page
title: Viikko 4
inheader: no
permalink: /tehtavat4/
---

{% include laskari_info.md part=4 %}

Tehtävissä 1-4 tutustutaan riippuvuuksien "mockaamiseen" yksikkötesteissä. Tehtävässä 5 tutustutaan retrospektiivitekniikoihin ja tehtävä 6 johdattaa Gitin tägien maailmaan.

Viikon loppuun on lisätty vapaaehtoinen tehtävä, missä päästään tutustumaan testivetoiseen ohjelmistokehitykseen eli TDD:hen.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Kaikki tämän viikon tehtävät palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, sinne tehtävän hakemiston _viikko4_ sisälle. Teknisesti ottaen tehtävän 7 palautus ei tosin luo repositorioon uutta sisältöä tiedostojen muodossa.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Yksikkötestaus ja riippuvuudet: mock-kirjasto, osa 1

Useimmilla luokilla on riippuvuuksia toisiin luokkiin. Esim. [viikon 1](/tehtavat1#15-riippuvuuksien-injektointi-osa-2-nhl-tilastot) laskarien NHL-tilastot-tehtävässä luokka `StatisticsService` riippuu luokasta `PlayerReader`. Riippuvuuksien injektion avulla saimme mukavasti purettua riippuvuudet luokkien väliltä.

Vaikka luokilla ei olisikaan riippuvuuksia toisiin luokkiin, on tilanne edelleen se, että luokan oliot käyttävät joidenkin toisten luokkien olioiden palveluita. Tämä tekee yksikkötestauksesta välillä hankalaa. Miten esim. luokkaa `StatisticsService` tulisi testata? Tuleeko testeissä olla mukana toimivat versiot kaikista sen riippuvuuksista?

NHL-tilastot-tehtävässä ongelma ratkaistiin ohjelmoimalla riippuvuuden korvaava "tynkäkomponentti" `PlayerReaderStub`:

```python
import unittest
from statistics_service import StatisticsService
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

class TestStatisticsService(unittest.TestCase):
    def setUp(self):
        # annetaan StatisticsService-luokan oliolle "stub"-luokan olio
        self.stats = StatisticsService(
            PlayerReaderStub()
        )

    # ...
```

Pythonille kuten kaikille muillekin kielille on tarjolla myös valmiita kirjastoja tynkäkomponenttien, toiselta nimeltään _mock-olioiden_ luomiseen.

Kuten pian huomaamme, mock-oliot eivät ole pelkkiä "tynkäolioita", mockien avulla voi myös varmistaa, että testattava metodi tai funktio kutsuu olioiden metodeja asiaankuuluvalla tavalla.

Tutustumme nyt unittest-moduulin [mock](https://docs.python.org/3/library/unittest.mock.html)-kirjastoon. Kirjastosta voidaan tuoda luokka [Mock](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock). Katsotaan mitä luokalla voi tehdä käynnistämällä interaktiivinen Python-terminaali komennolla `python3` (virtuaaliympäristölle ei ole tarvetta, koska emme käytä ulkoisia riippuvuuksia):

```python
>>> from unittest.mock import Mock
>>> mock = Mock()
>>> mock
<Mock id='4568521696'>
```

Anna syötteet terminaaliin yksi kerrallaan. Enter-painikkeen painallus suorittaa annetun syötteen. Muuttuja `mock` sisältää siis `Mock`-luokan olion. `Mock`-luokan olioilla on se mielenkiintoinen piirre, että niiden kaikki mahdolliset attribuutit ja metodit on toteutettu. Mitä tällä tarkoitetaan? Kokeillaan:

```python
>>> mock.foo
<Mock name='mock.foo' id='4568521648'>
>>> mock.foo.bar()
<Mock name='mock.foo.bar()' id='4570560112'>
```

Kaikki annetut operaatiot palauttavat siis uuden `Mock`-olion. Voimme antaa olion metodeille haluttuja paluuarvoja [return_value](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.return_value)-attribuutin avulla:

```python
>>> mock.foo.bar.return_value = "Foobar"
>>> mock.foo.bar()
'Foobar'
```

Voimme myös antaa metodeille haluttuja toteutuksia [side_effect](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.side_effect)-attribuutin avulla:

```python
>>> mock.foo.bar.side_effect = lambda name: f"{name}: Foobar"
>>> mock.foo.bar("Kalle")
'Kalle: Foobar'
```

Attribuutin `side_effect` arvo pitää olla kutsuttavissa, kuten funktio, metodi, tai lambda. Huomaa, että `Mock`-oliota voi käyttää myös funktion kaltaisesti:

```python
>>> get_name_mock = Mock(return_value = "Matti")
>>> get_name_mock()
'Matti'
```

Mockeille voidaan määritellä toteutuksien lisäksi oletuksia. Voimme esimerkiksi olettaa, että `Mock`-oliota on kutsuttu:

```python
>>> mock.foo.bar.assert_called()
>>> mock.foo.doo.assert_called()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/opt/homebrew/Cellar/python@3.11/3.11.6_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py", line 908, in assert_called
AssertionError: Expected 'doo' to have been called.
```

Voimme siis kutsua tarkasteltavalle metodille [assert_called](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called)-metodia. Huomaa, että `mock.foo.bar`-metodia on kutsuttu, mutta `mock.foo.doo`-metodia sen sijaan ei ole. Voimme myös tarkistaa, että metodia on kutsuttu oikeilla argumenteilla käyttämällä [assert_called_with](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called_with)-metodia.

Kun `Mock`-oliot ovat tulleet tutuksi, voit sulkea terminaalin komennolla `exit()`.

**Hae seuraavaksi [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko4/mock-demo_ oleva projekti.**
- Tässä tehtävässä ei tehdä mitään koodia, joten projektia ei ole tarvetta välttämättä palauttaa 
- Voit halutessasi kopioida projektin palatusrepositorioosi, hakemiston viikko4 sisälle.

Projekti on yksinkertainen verkkokauppa, jonka sovelluslogiikan totutettaa luokka `Kauppa`. Luokalla on riippuvuus `Pankki`- ja `Viitegeneraattori`-olioihin.

Kaupan toimintaperiaate on yksinkertainen:

```python
my_net_bank = Pankki()
viitteet = Viitegeneraattori()
kauppa = Kauppa(my_net_bank, viitteet)

kauppa.aloita_ostokset()
kauppa.lisaa_ostos(5)
kauppa.lisaa_ostos(7)
kauppa.maksa("1111")
```

Ostokset aloitetaan tekemällä metodikutsu `aloita_ostokset`. Tämän jälkeen "ostoskoriin" lisätään tuotteita, joiden hinta kerrotaan metodin `lisaa_ostos` parametrina. Ostokset lopetetaan kutsumalla metodia `maksa` joka saa parametriksi tilinumeron jolta summa veloitetaan.

Kauppa tekee veloituksen käyttäen tuntemaansa luokan `Pankki` olioa. Viitenumerona käytetään luokan `Viitegeneraattori` generoimaa numeroa. Sovelluksen rakenne siis näyttää seuraavalta:

![]({{ "/images/kauppa.png" | absolute_url }}){:height="200px" }

Projektiin on kirjoitettu kuusi `Mock`-luokkaa hyödyntävää testiä. Testit testaavat, että kauppa tekee ostoksiin liittyvän veloituksen oikein, eli että se kutsuu `Pankki`-luokan metodia `maksa` oikeilla parametreilla, ja että jokaiselle laskutukselle on kysytty viitenumero `Viitegeneraattori`-luokan metodilta `uusi`. Testit siis eivät kohdistu kauppa-olion tilaan vaan sen muiden olioiden kanssa käymän interaktion oikeellisuuteen. Testeissä kaupan riippuvuudet (`Pankki` ja `Viitegeneraattori`) on määritelty `Mock`-olioina.

Seuraavassa testi, joka testaa, että kauppa kutsuu pankin metodia oikealla tilinumerolla ja summalla:

```python
def test_kutsutaan_pankkia_oikealla_tilinumerolla_ja_summalla(self):
    pankki_mock = Mock()
    viitegeneraattori_mock = Mock(wraps=Viitegeneraattori())

    kauppa = Kauppa(pankki_mock, viitegeneraattori_mock)

    kauppa.aloita_ostokset()
    kauppa.lisaa_ostos(5)
    kauppa.lisaa_ostos(5)
    kauppa.maksa("1111")

    # katsotaan, että ensimmäisen ja toisen parametrin arvo on oikea
    pankki_mock.maksa.assert_called_with("1111", 10, ANY)
```

Testi siis aloittaa luomalla kaupan riippuvuuksista mock-oliot:

```python
pankki_mock = Mock()
viitegeneraattori_mock = Mock(wraps=Viitegeneraattori())

kauppa = Kauppa(pankki_mock, viitegeneraattori_mock)
```

`Mock`-luokan [konstruktorin](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock) `wraps`-parametrin avulla voimme määritellä, minkä olion `Mock`-olio toteuttaa. Tämä mahdollistaa sen, ettei esimerkiksi `uusi`-metodille tarvitse määritellä toteutusta, vaan voimme käyttää sen oikeaa toteutusta.

Eli nyt viitegeneraattori on olio, jonka metodi `uusi` palauttaa arvot 1, 2, 3...

Testi tarkastaa, että kaupalle tehdyt metodikutsut aiheuttavat sen, että pankin `Mock`-olion metodia `maksa` on kutsuttu oikeilla parametreilla. Kolmanteen parametriin, eli viitenumeroon ei kiinnitetä huomiota:

```python
pankki_mock.maksa.assert_called_with("1111", 10, ANY)
```

Kuten edellisissä esimerkeissä tuli ilmi, `Mock`-olioille tehtyjen metodikutsujen paluuarvot on mahdollista määrittää. Seuraavassa määritellään, että viitegeneraattori palauttaa arvon `55` kun sen metodia `uusi` kutsutaan:

```python
def test_kaytetaan_maksussa_palautettua_viitetta(self):
    pankki_mock = Mock()
    viitegeneraattori_mock = Mock()

    # palautetaan aina arvo 55
    viitegeneraattori_mock.uusi.return_value = 55

    kauppa = Kauppa(pankki_mock, viitegeneraattori_mock)

    kauppa.aloita_ostokset()
    kauppa.lisaa_ostos(5)
    kauppa.lisaa_ostos(5)
    kauppa.maksa("1111")

    # katsotaan, että kolmannen parametrin arvo on oikea
    pankki_mock.maksa.assert_called_with(ANY, ANY, 55)
```

Testin lopussa varmistetaan, että pankin `Mock`-oliota on kutsuttu oikeilla parametrinarvoilla, eli kolmantena parametrina tulee olla viitegeneraattorin palauttama arvo.

Tutustu projektiin ja sen kaikkiin testeihin. Asenna projektin riippuvuudet komennolla `poetry install` ja suorita sen jälkeen testit virtuaaliympäristössä komennolla `pytest`. Riko jokin testi, esimerkiksi jokin edellä mainituista, muuttamalla sen ekspektaatiota esim. seuraavasti:

```python
pankki_mock.maksa.assert_called_with(ANY, ANY, 1000)
```

Ja varmista, että testit eivät mene läpi. Katso miltä virheilmoitus näyttää.

Voit tutustua aiheeseen tarkemmin lukemalla mock-kirjaston [dokumentaatiota](https://docs.python.org/3/library/unittest.mock.html).

### 2. Yksikkötestaus ja riippuvuudet: mock-kirjasto, osa 2

Hae [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko4/maksukortti-mock_ oleva projekti.
- Kopioi projekti palatusrepositorioosi, hakemiston viikko4 sisälle.

Tässä tehtävässä on tarkoitus testata ja täydentää luokkaa `Kassapaate`, jonka hieman kehittyneempi versio lienee ainakin osalle [Ohjelmoinnin jatkokurssilta](https://ohjelmointi-23.mooc.fi/osa-9/1-oliot-ja-viittaukset#programming-exercise-maksukortti-ja-kassapaate) tuttu.

**Maksukortin koodiin ei tehtävässä saa koskea ollenkaan! Testeissä ei myöskään ole tarkoitus luoda konkreettisia instansseja maksukortista, testien tarvitsemat kortit tulee luoda mock-kirjaston avulla.**

Projektissa on valmiina kaksi testiä:

```python
import unittest
from unittest.mock import Mock, ANY
from kassapaate import Kassapaate, HINTA
from maksukortti import Maksukortti

class TestKassapaate(unittest.TestCase):
    def setUp(self):
        self.kassa = Kassapaate()

    def test_kortilta_velotetaan_hinta_jos_rahaa_on(self):
        maksukortti_mock = Mock()
        maksukortti_mock.saldo.return_value = 10
        
        self.kassa.osta_lounas(maksukortti_mock)

        maksukortti_mock.osta.assert_called_with(HINTA)

    def test_kortilta_ei_veloteta_jos_raha_ei_riita(self):
        maksukortti_mock = Mock()
        maksukortti_mock.saldo.return_value = 4
        
        self.kassa.osta_lounas(maksukortti_mock)

        maksukortti_mock.osta.assert_not_called()
```

Ensimmäisessä testissä varmistetaan, että jos kortilla on riittävästi rahaa, kassapäätteen metodin `osta_lounas` kutsuminen veloittaa summan kortilta eli kutsuu kortin metodia `osta`.

Testi ottaa siis kantaa ainoastaan siihen miten kassapääte kutsuu maksukortin metodeja. **Maksukortin saldoa ei erikseen tarkasteta**, sillä oletuksena on, että maksukortin omat testit varmistavat kortin toiminnan.

Toinen testi varmistaa, että jos kortilla ei ole riittävästi rahaa, kassapäätteen metodin `osta_lounas` kutsuminen _ei_ veloita kortilta rahaa, eli että kortin metodia `osta` ei ole kutsuttu.

**Testit eivät mene läpi. Korjaa kassapäätteen metodi `osta_lounas`.**

**Muistutus** Maksukortin koodiin ei tehtävässä saa koskea ollenkaan! Maksukortin tilaa ei myöskään ole tarkoitus tutkia suoraan, koska Maksukortti on mock ei attribuuttien arvojen katsominen edes ole mahdollista/mielekästä.

**Tee tämän jälkeen samaa periaatetta noudattaen seuraavat testit:**

- Kassapäätteen metodin `lataa` kutsu lisää maksukortille ladattavan rahamäärän käyttäen kortin metodia `lataa` jos ladattava summa on positiivinen
- Kassapäätteen metodin `lataa` kutsu ei tee maksukortille mitään jos ladattava summa on negatiivinen

**Huomio:** 
- Testeissä ei ole tarkoitus luoda konkreettisia instansseja maksukortista, testien tarvitsemat kortit tulee luoda mock-kirjaston avulla. 
- Testit eivät myöskään testaa suoraan maksukortin tilaa, ainoastaan sitä onko maksukortin metodeja kutsuttu oikein.

Korjaa kassapäätettä siten, että testit menevät läpi.

### 3. Yksikkötestaus ja riippuvuudet: mock-kirjasto, osa 3

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko4/verkkokauppa_ löytyy hieman laajennettu versio tehtävän 1 verkkokaupasta.
- Kopioi projekti palatusrepositorioosi, hakemiston viikko4 sisälle.

Ohjelma sisältää nyt hieman enemmän luokkia ja toiminnallisuus on monimutkaisempi. `Kauppa` hallinnoi kutakin ostostapahtumaa 
luokan `Ostoskori` olioina. Ostoskoriin laitetaan `Tuote`-olioita, jotka kuvaavat myynnissä olevia tuotteita. `Varasto` hallinnoi kaupan tuotevalikomaa. Yksinkertaisemman esimerkin tapaan kauppaan liittyy myös maksuliikenteen hoitava `Pankki` sekä `Viitegeneraattori`. Ohjelman rakenne luokkakaaviona:

![]({{ "/images/kauppa2.png" | absolute_url }}){:height="330px" }

Tutustu koodiin. Piirrä sekvenssikaavio joka kuvaa tiedostossa `src/index.py` olevan pääohjelman toimintaa (ensimmäisen ostostapahtuman verran).
- Kaaviota ei tarvitse palauttaa


Luokalle `Kauppa` injektoidaan konstruktorissa `Pankki`-, `Viitelaskuri`- ja `Varasto`-oliot. Tehdään näistä testeissä mock-kirjaston avulla mockatut versiot.

Seuraavassa esimerkkinä testi, joka testaa, että ostostapahtuman jälkeen pankin metodia `tilisiirto` on kutsuttu:

```python
import unittest
from unittest.mock import Mock, ANY
from kauppa import Kauppa
from viitegeneraattori import Viitegeneraattori
from varasto import Varasto
from tuote import Tuote

class TestKauppa(unittest.TestCase):
    def test_ostoksen_paaytyttya_pankin_metodia_tilisiirto_kutsutaan(self):
        pankki_mock = Mock()
        viitegeneraattori_mock = Mock()

        # palautetaan aina arvo 42
        viitegeneraattori_mock.uusi.return_value = 42

        varasto_mock = Mock()

        # tehdään toteutus saldo-metodille
        def varasto_saldo(tuote_id):
            if tuote_id == 1:
                return 10

        # tehdään toteutus hae_tuote-metodille
        def varasto_hae_tuote(tuote_id):
            if tuote_id == 1:
                return Tuote(1, "maito", 5)

        # otetaan toteutukset käyttöön
        varasto_mock.saldo.side_effect = varasto_saldo
        varasto_mock.hae_tuote.side_effect = varasto_hae_tuote

        # alustetaan kauppa
        kauppa = Kauppa(varasto_mock, pankki_mock, viitegeneraattori_mock)

        # tehdään ostokset
        kauppa.aloita_asiointi()
        # lisätään ostoskoriin tuote, jonka id on 1
        kauppa.lisaa_koriin(1)
        kauppa.tilimaksu("pekka", "12345")

        # varmistetaan, että metodia tilisiirto on kutsuttu
        pankki_mock.tilisiirto.assert_called()
        # toistaiseksi ei välitetä kutsuun liittyvistä argumenteista
```

Aloita siten, että saat esimerkkitestin suoritettua. Tee sen jälkeen seuraavat testit:

- Aloitetaan asiointi, koriin lisätään tuote, jota varastossa on ja suoritetaan ostos, eli kutsutaan metodia kaupan `tilimaksu`, varmista että kutsutaan pankin metodia `tilisiirto` oikealla asiakkaalla, tilinumeroilla ja summalla
  - Tämä siis on muuten copypaste esimerkistä, mutta `assert_called_with`-metodia käytettävä, jotta voidaan tarkastaa, että parametreilla on oikeat arvot
- Aloitetaan asiointi, koriin lisätään _kaksi eri tuotetta_, joita varastossa on ja suoritetaan ostos, varmista että kutsutaan pankin metodia `tilisiirto` oikealla asiakkaalla, tilinumerolla ja summalla
- Aloitetaan asiointi, koriin lisätään _kaksi samaa tuotetta_, jota on varastossa tarpeeksi ja suoritetaan ostos, varmista että kutsutaan pankin metodia `tilisiirto` oikealla asiakkaalla, tilinumerolla ja summalla
- Aloitetaan asiointi, koriin lisätään _tuote, jota on varastossa tarpeeksi ja tuote joka on loppu_ ja suoritetaan ostos, varmista että kutsutaan pankin metodia `tilisiirto` oikealla asiakkaalla, tilinumerolla ja summalla

Muista, että kaikille testeille yhteiset alustukset on mahdollista tehdä `setUp`-metodissa, joka toistetaan ennen jokaista testiä:

```python
class TestKauppa(unittest.TestCase):
    def setUp(self):
        self.pankki_mock = Mock()
        # ...
```

### 4. Yksikkötestaus ja riippuvuudet: mock-kirjasto, osa 4

Jatketaan edellisen tehtävän koodin testaamista

- Varmista, että metodin `aloita_asiointi` kutsuminen nollaa edellisen ostoksen tiedot (eli edellisen ostoksen hinta ei näy uuden ostoksen hinnassa), katso tarvittaessa apua projektin mock-demo testeistä!
- Varmista, että kauppa pyytää uuden viitenumeron jokaiselle maksutapahtumalle, katso tarvittaessa apua [tehtävän 1](tehtavat4/#1-yksikkötestaus-ja-riippuvuudet-mock-kirjasto-osa-1) projektin mock-demo testeistä!

Tarkasta viikoilla 1 ja 2 käytetyn coveragen avulla mikä on luokan `Kauppa` testauskattavuus.
- katso esim. viikon 1 tehtävä [8](/tehtavat1#8-unittest)

Jotain taitaa puuttua. Lisää testi, joka nostaa kattavuuden noin sataan prosenttiin! Jos bugeja ilmenee, korjaa ne.

### Mock-olioiden käytöstä

Mock-oliot saattoivat tuntua hieman monimutkaisilta edellisissä tehtävissä. Mockeilla on kuitenkin paikkansa. Jos testattavana olevan olion riippuvuutena oleva olio on monimutkainen, kuten esimerkiksi verkkokauppaesimerkissä luokka `Pankki`, kannattaa testattavana oleva olio testata ehdottomasti ilman todellisen riippuvuuden käyttöä testissä. Valeolion voi toki tehdä myös "käsin", mutta tietyissä tilanteissa mock-kirjastoilla tehdyt mockit ovat käsin tehtyjä valeolioita kätevämpiä, erityisesti jos on syytä tarkastella testattavan olion riippuvuuksille tekemiä metodikutsuja.

### 5. Retrospektiivitekniikat

Wikipedian mukaan retrospektiivi on _"a meeting held by a project team at the end of a project or process (often after an iteration) to discuss what was successful about the project or time period covered by that retrospective, what could be improved, and how to incorporate the successes and improvements in future iterations or projects."_

Tutustu [täällä](http://retrospectivewiki.org/index.php?title=Retrospective_Plans) esiteltyihin retrospektiivitekniikoihin [Start, Stop, Continue, More of, Less of Wheel](http://retrospectivewiki.org/index.php?title=Start,_Stop,_Continue,_More_of,_Less_of_Wheel) ja [Glad, Sad, Mad](http://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad).

Tee aiheesta noin 0.25 sivun (eli noin 125 sanaa) tiivistelmä palautusreporitorion hakemistoon _viikko4_ sijoitettavaan tiedostoon _retro.md_.

Pidä huoli siitä, että miniprojektitiimisi pitää ensimmäisen tai toisen sprintin lopussa jompaa kumpaa tekniikkaa noudattavan retrospektiivin!

### 6. git: tägit [versionhallinta]

Tutustutaan tässä tehtävässä Gitin tageihin:

> Git has the ability to tag specific points in history as being important. Typically people use this functionality to mark release points (v1.0, and so on)

Lue ensin [http://git-scm.com/book/en/v2/Git-Basics-Tagging](http://git-scm.com/book/en/v2/Git-Basics-Tagging) (voit ohittaa kohdat 'signed tags' ja 'verifying tags').

Tee seuraavat samaan repositorioon, johon palautat tehtäväsi:

- Tee tägi nimellä v1.0.0 (lightweight tag riittää)
- Tee kolme committia (eli 3 kertaa muutos + add + commit)
- Tee tägi nimellä v1.1.0
- Katso `gitk`-komennolla miltä historiasi näyttää
- Palaa tagin v.1.0.0 aikaan, eli anna komento `git checkout v1.0.0`
  - Varmista, että tagin jälkeisiä muutoksia ei näy
- Palaa nykyaikaan
  - Tämä onnistuu komennolla `git checkout main`
- Lisää tägi _edelliseen_ committiin
  - Operaatio onnistuu komennolla <code>git tag v1.0.1 HEAD^</code> , eli HEAD^ viittaa nykyistä "headia" eli olinpaikkaa historiassa edelliseen committiin
  - Joissain Windowseissa muoto <code>HEAD^</code> ei toimi, sen sijasta voit käyttää muotoa <code>HEAD~</code>
  - Tai katsomalla commitin tunniste (pitkä numerosarja) joko komennolla <code>git log</code> tai gitk:lla
- Katso komennolla <code>gitk</code> miltä historia näyttää

Tagit eivät mene automaattisesti etärepositorioihin. Pushaa koodisi GitHubiin siten, että myös tagit siirtyvät mukana. Katso ohje [täältä](http://git-scm.com/book/en/v2/Git-Basics-Tagging#Sharing-Tags).

Varmista, että tagit siirtyvät GitHubiin:

![]({{ "/images/lh4-tagit.png" | absolute_url }}){:height="350px" }

**Mitä hyötyä tageista on?** Kun katsotaan commitien listaa komennolla `git log`, huomaamme, että Git yksilöi commitit ihmiselle hankalien tunnisteiden avulla:


```bash
commit 26c50e603aca79f02d478ca36a3d307f7ea10e14
Author: Matti Luukkainen <mluukkai@iki.fi>
Date:   Mon Oct 30 16:35:04 2023 +0200

    do not destroy answers if dl extended

commit 8026bd3ac416a7b1e6957d54d9296156e97571e6
Author: iPegii <51372604+iPegii@users.noreply.github.com>
Date:   Sun Oct 29 14:25:31 2023 +0200

    Show "Evaluation TDK" -special group in admin view

commit 0834035d0c113c7c46161c6fe8d655a9a90b2548
Merge: e5c09ae6 4dfcbf54
Author: iPegii <51372604+iPegii@users.noreply.github.com>
Date:   Sun Oct 29 14:03:13 2023 +0200

    Merge branch 'master' of github.com:UniversityOfHelsinkiCS/lomake

commit e5c09ae692ebf46cd0acfa15552ca3e85d7348fa
Author: iPegii <51372604+iPegii@users.noreply.github.com>
Date:   Sun Oct 29 14:02:52 2023 +0200

    update eslintignore to stop eslint hanging
```

Tagien avulla commitit on mahdollista merkitä ihmiselle selkeämmässä muodossa. Tyypillistä on merkitä tagien avulla ohjelmiston julkaistuja versioita. Jos julkaistussa ohjelmassa esiintyy bugi, on näin mahdollista päästä helposti koodissa ajassa taaksepäin debuggaamaan juuri kyseisen julkaisun versiota.

{% include submission_instructions.md %}



### Vapaaehtoinen lisätehtävä: Ostoskori TDD-tekniikalla

Jatketaan verkkokaupan parissa. 

**Hae [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa viikko4/tdd-ostoskori oleva projekti.**

Tässä tehtävässä muutamien luokkien toteutuksen logiikka on periaatteiltaan hieman erilainen kuin aiemmissa tehtävissä käsittelemässämme verkkokaupassa. Tehtävän fokuksessa on kolme luokkaa `Ostoskori`, `Ostos` ja `Tuote` joiden suhde on seuraava:

![](http://www.cs.helsinki.fi/u/mluukkai/otm2012/2.bmp)

Ostoskori siis sisältää _ostoksia_, joista jokainen vastaa yhtä tiettyä tuotetta.

Luokka `Tuote` on hyvin suoraviivainen. Tuotteesta tiedetään nimi, hinta ja varastosaldo (jota ei tosin käytetä mihinkään):

```python
class Tuote:
  def __init__(self, nimi: str, hinta: int):
      self._nimi = nimi
      self._hinta = hinta
      self._saldo = 0

  def hinta(self):
    return self._hinta

  def nimi(self):
    return self._nimi

  def __repr__(self):
      return f"{self._nimi} hinta {self._hinta} euroa"
```

Tuote siis kuvaa yhden tuotteen esim. _Valion Plusmaito_ tiedot (nimi, hinta ja varastosaldo, tuotteella voisi olla myös esim. kuvaus ja muita sitä luonnehtivia kenttiä).

**Ostoskoriin ei laiteta tuotteita vaan Ostoksia. Ostos viittaa tuotteeseen ja kertoo kuinka monesta tuotteesta on kysymys**. Eli jos ostetaan esim. 24 maitoa, tulee ostoskoriin Ostos-olio, joka viittaa Maito-tuoteolioon sekä kertoo, että tuotetta on korissa 24 kpl. `Ostos`-luokan koodi:

```python
from tuote import Tuote

class Ostos:
    def __init__(self, tuote: Tuote):
        self.tuote = tuote
        self._lukumaara = 1

    def tuotteen_nimi(self):
        return self.tuote.nimi()

    def muuta_lukumaaraa(self, muutos: int):
        self._lukumaara += muutos
        if self._lukumaara<0:
            self._lukumaara = 0

    def lukumaara(self):
        return self._lukumaara

    def hinta(self):
        return self._lukumaara * self.tuote.hinta()
```

Tehtävänäsi on ohjelmoida luokka `Ostoskori`.

Ostoskorin API:n eli metodirajapinta on seuraava (metodien rungoissa on `pass`-komennot, jotta Python-tulkki ei valittaisi syntaksivirheistä):

```python
from tuote import Tuote
from ostos import Ostos

class Ostoskori:
    def __init__(self):
        pass
        # ostoskori tallettaa Ostos-oliota, yhden per korissa oleva Tuote

    def tavaroita_korissa(self):
        pass
        # kertoo korissa olevien tavaroiden lukumäärän
        # jos koriin lisätty 2 kpl tuotetta "maito",
        #   tulee metodin palauttaa 2
        # jos korissa on 1 kpl tuotetta "maito" ja 1 kpl tuotetta "juusto",
        #   tulee metodin palauttaa 2

    def hinta(self):
        return 0
        # kertoo korissa olevien ostosten yhteenlasketun hinnan

    def lisaa_tuote(self, lisattava: Tuote):
        # lisää tuotteen
        pass

    def poista_tuote(self, poistettava: Tuote):
        # poistaa tuotteen
        pass

    def tyhjenna(self):
        pass
        # tyhjentää ostoskorin

    def ostokset(self):
        pass
        # palauttaa listan jossa on korissa olevat ostos-oliot
        # kukin ostos-olio siis kertoo mistä tuotteesta on kyse
        #   JA kuinka monta kappaletta kyseistä tuotetta korissa on
```

**Kerrataan vielä:** ostoskoriin lisätään Tuote-oliota metodilla `lisaa_tuote`. Ostoskori ei kuitenkaan talleta sisäisesti tuotteita vaan `Ostos`-luokan oliota (jotka viittaavat tuotteseen):

![](http://www.cs.helsinki.fi/u/mluukkai/otm2012/2.bmp)

Jos ostoskoriin laitetaan useampi kappale samaa tuotetta, päivitetään vastaavaa `Ostos`-oliota, joka muistaa kyseisen tuotteen lukumäärän.

**Ohjelmoi nyt ostoskori käyttäen [Test Driven Development](https://ohjelmistotuotanto-hy.github.io/osa3/#test-driven-development) -tekniikkaa.** Oikeaoppinen TDD etenee seuraavasti:

- Kirjoitetaan testiä sen verran että testi ei mene läpi. Ei siis luoda heti kaikkia luokan tai metodin testejä, vaan edetään yksi testi kerrallaan.
- Kirjoitetaan koodia sen verran, että testi saadaan menemään läpi. Ei yritetäkään heti kirjoittaa "lopullista" koodia.
- Jos huomataan koodin rakenteen menneen huonoksi (eli havaitaan koodissa esimerkiksi toisteisuutta tai liian pitkiä metodeja) refaktoroidaan koodin rakenne paremmaksi, ja huolehditaan koko ajan, että testit menevät edelleen läpi. Refaktoroinnilla tarkoitetaan koodin sisäisen rakenteen muuttamista siten, että sen rajapinta ja toiminnallisuus säilyy muuttumattomana.
- Jatketaan askeleesta 1

**Tee seuraavat testit ja aina jokaisen testin jälkeen testin läpäisevä koodi**. Jos haluat toimia oikean TDD:n hengessä, älä suunnittele koodiasi liikaa etukäteen, tee ainoastaan yksi askel kerrallaan ja paranna koodin rakennetta sitten kun koet sille tarvetta. Pidä _kaikki_ testit koko ajan toimivina. Eli jos jokin muutos hajottaa testit, älä etene seuraavaan askeleeseen ennen kuin kaikki testit menevät taas läpi.

Luokkia `Tuote` ja `Ostos` ei tässä tehtävässä tarvitse muuttaa ollenkaan.

_Lisää ja commitoi muutokset repositorioon jokaisen vaiheen jälkeen, anna kuvaava commit-viesti._

#### 1. Luodun ostoskorin hinta ja tavaroiden määrä määrä on 0.

Tehtäväpohjassa on yksi valmis testi

```python
class TestOstoskori(unittest.TestCase):
    def setUp(self):
        self.kori = Ostoskori()

    # step 1
    def test_ostoskorin_hinta_ja_tavaroiden_maara_alussa(self):
        self.assertEqual(self.kori.hinta(), 0)
```

Laajenna testiä siten, että se testaa myös tavaroiden määrän (metodin `tavaroita_korissa` paluuarvo). Kun testi on valmis, ohjelmoi ostoskoria sen verran että testi menee läpi. Tee ainoastaan minimaalisin mahdollinen toteutus, jolla saat testin läpi.

Lisää ja commitoi muutokset ja anna kuvaava commit-viesti.

#### 2. Yhden tuotteen lisäämisen jälkeen ostoskorissa on 1 tavara.

**Huom:** joudut siis luomaan testissäsi tuotteen jonka lisäät koriin:

```python
class TestOstoskori(unittest.TestCase):
    def setUp(self):
        self.kori = Ostoskori()

    # step 1
    def test_ostoskorin_hinta_ja_tuotteiden_maara_alussa(self):
        self.assertEqual(self.kori.hinta(), 0)
        # ...

    # step 2
    def test_yhden_tuotteen_lisaamisen_jalkeen_korissa_yksi_tavara(self):
        maito = Tuote("Maito", 3)
        self.kori.lisaa_tuote(maito)

        # ...
```

**Muistutus:** vaikka metodin `lisaa_tuote` parametrina on Tuote-olio, **ostoskori ei tallenna tuotetta** vaan luomansa Ostos-olion, joka "tietää" mistä tuotteesta on kysymys.

Lisää ja commitoi muutokset ja anna kuvaava commit-viesti.

#### 3. Yhden tuotteen lisäämisen jälkeen ostoskorin hinta on sama kuin tuotteen hinta.

Lisää ja commitoi muutokset.

#### 4. Kahden eri tuotteen lisäämisen jälkeen ostoskorissa on 2 tavaraa

Lisää ja commitoi muutokset.

#### 5. Kahden eri tuotteen lisäämisen jälkeen ostoskorin hinta on sama kuin tuotteiden hintojen summa

Lisää ja commitoi muutokset.

#### 6. Kahden saman tuotteen lisäämisen jälkeen ostoskorissa on 2 tavaraa

Lisää ja commitoi muutokset.

#### 7. Kahden saman tuotteen lisäämisen jälkeen ostoskorin hinta on sama kuin 2 kertaa tuotteen hinta

Lisää ja commitoi muutokset.

#### 8. Yhden tuotteen lisäämisen jälkeen ostoskori sisältää yhden ostoksen

tässä testataan ostoskorin metodia `ostokset`:

```python
    # step 8
    def test_yhden_tuotteen_lisaamisen_jalkeen_korissa_yksi_ostosolio(self):
        maito = Tuote("Maito", 3)
        self.kori.lisaa_tuote(maito)

        ostokset = self.kori.ostokset()

        # testaa että metodin palauttaman listan pituus 1
```

Lisää ja commitoi muutokset.

#### 9. Yhden tuotteen lisäämisen jälkeen ostoskori sisältää ostoksen, jolla sama nimi kuin tuotteella ja lukumäärä 1

Testin on siis tutkittava jälleen korin metodin ostokset palauttamaa listaa:

```python
    # step 9
    def test_yhden_tuotteen_lisaamisen_jalkeen_korissa_yksi_ostosolio_jolla_oikea_tuotteen_nimi_ja_maara(self):
        maito = Tuote("Maito", 3)
        self.kori.lisaa_tuote(maito)

        ostos = self.kori.ostokset()[0]

        # testaa täällä, että palautetun listan ensimmäinen ostos on halutunkaltainen.
```

Lisää ja commitoi muutokset.

#### 10. Kahden eri tuotteen lisäämisen jälkeen ostoskori sisältää kaksi ostosta

Lisää ja commitoi muutokset.

#### 11. Kahden saman tuotteen lisäämisen jälkeen ostoskori sisältää yhden ostoksen

Eli jos korissa on jo ostos "maito" ja koriin lisätään uusi "maito", tulee tämän jälkeen korissa olla edelleen vain yksi ostos "maito", lukumäärän tulee kuitenkin kasvaa kahteen.

Lisää ja commitoi muutokset.

#### 12. Kahden saman tuotteen lisäämisen jälkeen ostoskori sisältää ostoksen jolla sama nimi kuin tuotteella ja lukumäärä 2

Lisää ja commitoi muutokset.

#### 13. Jos korissa on kaksi samaa tuotetta ja toinen näistä poistetaan, jää koriin ostos jossa on tuotetta 1 kpl

Lisää ja commitoi muutokset.

#### 14. Jos koriin on lisätty tuote ja sama tuote poistetaan, on kori tämän jälkeen tyhjä

Tyhjä kori tarkoittanee että tuotteita ei ole, korin hinta on nolla ja ostoksien listan pituus nolla

Lisää ja commitoi muutokset.

#### 15. Metodi tyhjenna tyhjentää korin

Lisää ja commitoi muutokset.

Jos ostoskorissasi on mukana jotain ylimääräistä, refaktoroi koodiasi niin että kaikki turha poistuu. Erityisesti ylimääräisistä oliomuuttujista kannattaa hankkiutua eroon, tarvitset luokalle vain yhden oliomuuttujan, kaikki ylimääräiset tekevät koodista sekavamman ja vaikeammin ylläpidettävän.

Lisää ja commitoi mahdolliset muutokset.

Tehtävää ei palauteta, eikä siitä saa kurssipisteitä. Palkkio tehtävästä on lisääntynyt osaaminen ja toivottavasti hyvä mieli!
