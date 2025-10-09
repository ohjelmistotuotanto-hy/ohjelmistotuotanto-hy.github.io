---
layout: page
permalink: /unittest
title: Unittest ja testaaminen
---

_Tämä ohje on kopio kurssin ohjelmistotekniikka [Unittest-ohjeesta](https://ohjelmistotekniikka-hy.github.io/python/viikko2#unittest-ja-testaaminen) muutamin lisäyksin_

Tutustutaan yksikkötestien tekemiseen [unittest](https://docs.python.org/3/library/unittest.html)-sovelluskehyksen avulla. Yksikkötesteissä testauksen kohteena ovat ohjelman pienimmät rakenneosaset eli yksittäiset funktiot sekä luokkien oliot ja niiden metodit.

Käytetään esimerkkinä luokkaa `Maksukortti`, joka sisältää metodeja arvon lataamiseen ja eri arvoisten aterioiden ostamiseen:

```python
# aterioiden hinnat ovat senteissä
EDULLINEN = 250
MAUKAS = 400

class Maksukortti:
    def __init__(self, saldo):
        # saldo on senteissä
        self.saldo = saldo

    def syo_edullisesti(self):
        if self.saldo >= EDULLINEN:
            self.saldo -= EDULLINEN

    def syo_maukkaasti(self):
        if self.saldo >= MAUKAS:
            self.saldo -= MAUKAS

    def lataa_rahaa(self, maara):
        if maara < 0:
            return

        self.saldo += maara

        if self.saldo > 15000:
            self.saldo = 15000

    def __str__(self):
        saldo_euroissa = round(self.saldo / 100, 2)

        return "Kortilla on rahaa {:0.2f} euroa".format(saldo_euroissa)
```

**HUOM:** Kaikki raha-arvot, kuten maksukortin saldo ja aterioiden hinnat ovat senteissä.

### Tehtävä 1: Alkutoimet

Luo Labtooliin rekisteröimäsi repositorion hakemistoon _laskarit/viikko2_ hakemisto _maksukortti_. Suorita terminaalissa hakemiston sisällä tuttu, projektin alustamiseen vaadittava komento:

```bash
poetry init --python "^3.12"
```

Poetryn kysymillä projektin tiedoilla ei ole väliä, joten voit hyvin käyttää Poetryn ehdottamia tietoja.

Asennetaan projektiin kehityksen aikaiseksi riippuvuudeksi [pytest](https://docs.pytest.org/en/stable/)-sovelluskehys, joka helpottaa testien suorittamista. Riippuvuuden asentaminen onnistuu samassa hakemistossa komennolla:

```bash
poetry add pytest --group dev
```

Seuraavaksi muodosta _maksukortti_-hakemistoon seuraava rakenne:

```
maksukortti/
  src/
    maksukortti.py
    tests/
      __init__.py
      maksukortti_test.py
  ...
```

Lisää tiedostoon _src/maksukortti.py_ edellä esitelty `Maksukortti`-luokan koodi.


Yritetään seuraavaksi suorittaa testejä. Siirrytään virtuaaliympäristöön komennolla `poetry shell`, jonka jälkeen suoritetaan komento `pytest src`. Komennon suorittaminen antaa ymmärtää, ettei yhtään testiä ole suoritettu. Syy on yksinkertaisesti siinä, ettemme ole vielä toteuttaneet yhtään testiä.

Toteutetaan <i>src/tests/maksukortti_test.py</i>-tiedostoon projektimme ensimmäinen testi. Tiedoston sisältö tulee olla seuraava:

```python
import unittest
from maksukortti import Maksukortti

class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        print("Set up goes here")

    def test_hello_world(self):
        self.assertEqual("Hello world", "Hello world")
```

Suoritetaan virtuaaliympäristössä komento `pytest src` uudestaan ja huomaamme, että yksi testi on suoritettu onnistuneesti. Huomaa, että `pytest`-komennon jälkeinen _src_ rajaa suoritettavien testien etsinnän projektin juurihakemistossa sijaitsevaan _src_-hakemistoon. Jos arvoa ei annettaisi, pytest lähtisi etsimään suoritettavia testejä suoraan projektin juurihakemistosta.

Komento `pytest src` etsii suoritettavia testejä projektin juurihakemiston _src_-hakemistosta, sekä rekursiivisesti kaikista sen alahakemistoista. Jotta pytest tietää, mitä testejä tulisi suorittaa, **tulee nimeämisessä noudattaa oikeita käytänteitä.** Nämä käytänteet ovat:

- Testien tiedostojen nimen tulee päättyä <i>\_test</i>-päätteeseen, esim. <i>maksukortti_test.py</i>
- Testattavan luokan nimen tulee alkaa _Test_-etuliitteellä, esim. `TestMaksukortti`
- Testattavan luokan metodin nimen tulee alkaa <i>test\_</i>-etuliitteellä, esim. `test_hello_world`

Huomaa, että testien hakemistossa tulee olla tyhjä <i>\_\_init\_\_.py</i>-tiedosto, jotta Python löytää moduulit oikein. Ilman kyseistä tiedostoa testi kaatuisi virheeseen:

```
ModuleNotFoundError: No module named 'maksukortti'
```

Jos testien hakemistossa on alihakemistoja, myös näissä tulee olla tyhjä <i>\_\_init\_\_.py</i>-tiedosto.

Tehdään seuraavaksi ensimmäinen järkevä testi, joka testaa, että `Maksukortti`-luokan konstruktori asettaa saldon oikein:

```python
import unittest
from maksukortti import Maksukortti

class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        print("Set up goes here")

    def test_konstruktori_asettaa_saldon_oikein(self):
        # alustetaan maksukortti, jossa on 10 euroa (1000 senttiä)
        kortti = Maksukortti(1000)
        vastaus = str(kortti)

        self.assertEqual(vastaus, "Kortilla on rahaa 10.00 euroa")
```

Ensimmäinen rivi luo kortin, jonka saldoksi tulee 10 euroa. Testin on tarkoitus varmistaa, että konstruktorin parametrina oleva luku menee kortin alkusaldoksi. Tämä varmistetaan selvittämällä kortin saldo. Kortin saldo selviää kortin `__str__`-metodin muodostamasta merkkijonoesityksestä. Testin toinen rivi muodostaa `kortti`-muuttujan merkkijonoesityksen ja ottaa sen talteen muuttujaan `vastaus`. Viimeinen rivi tarkastaa onko vastaus sama kuin odotettu tulos, eli "Kortilla on rahaa 10.00 euroa".

Tarkastus tapahtuu unittestissä paljon käytettyä `assert`- eli väittämäkomentoa käyttäen. Komento testaa onko sille ensimmäisenä parametrina annettu odotettu tulos sama kuin toisena parametrina oleva testissä saatu tulos. Erilaisia [assert](https://docs.python.org/3/library/unittest.html#assert-methods)-metodeja on monia.

Suoritetaan seuraavaksi testi komennolla `pytest src` ja toivotaan, että testi menee läpi.

Vaihtoehtoinen tapa määritellä sama testi olisi seuraava:

```python
def test_konstruktori_asettaa_saldon_oikein(self):
    kortti = Maksukortti(1000)

    self.assertEqual(str(kortti), "Kortilla on rahaa 10.00 euroa")
```

Eli metodikutsun palauttamaa arvoa ei oteta erikseen talteen muuttujaan vaan sitä kutsutaan suoraan assertEqual-vertailun sisällä. Käy niin, että ennen kuin varsinainen vertailu suoritetaan, tehdään funktiokutsu ja vertailtavaksi tulee sen palauttama arvo.

Kannattaa varmistaa, että testi todellakin löytää virheet, eli muutetaan edellistä testiä siten että se ei mene läpi (assertEqual-metodissa väitetään että saldo olisi 9 euroa):

```python
def test_konstruktori_asettaa_saldon_oikein(self):
    kortti = Maksukortti(1000)

    self.assertEqual(str(kortti), "Kortilla on rahaa 9.00 euroa")
```

Testien suorittaminen antaa ymmärtää, ettei testiä suoritettu onnistuneesti. Jokaisesta virheellisestä testistä löytyy yksityiskohtainen selitys ongelman syystä. Lisäksi lopussa listataan kompaktimmassa muodossa virheelliset tiedostot ja metodit:

```
FAILED src/tests/maksukortti_test.py::TestMaksukortti::test_konstruktori_asettaa_saldon_oikein -
AssertionError: 'Kortilla on rahaa 9.00 euroa' != 'Kortilla on rahaa 10.00 euroa'
```

Tehdään seuraavaksi testi, joka varmistaa, että kortin saldo pienee kutsuttaessa metodia `syo_edullisesti`:

```python
def test_syo_edullisesti_vahentaa_saldoa_oikein(self):
    kortti = Maksukortti(1000)
    kortti.syo_edullisesti()

    self.assertEqual(str(kortti), "Kortilla on rahaa 7.50 euroa")
```

Jälleen testi alkaa kortin luomisella. Seuraavaksi kutsutaan kortin testattavaa metodia ja viimeisenä on rivi joka varmistaa, että tulos on haluttu, eli että kortin saldo on pienentynyt edullisen lounaan hinnan verran.

### Muutama huomio

Molemmat testit ovat yksinkertaisia ja testaavat vain yhtä asiaa, tämä on suositeltava käytäntö vaikka on mahdollista laittaa yhteen testiin useitakin `assertEqual`-metodin kutsuja. Testit on nimetty siten, että nimi kertoo selvästi sen mitä testi testaa. Lisäksi tulee aina muistaa käyttää metodin nimessä <i>test\_</i>-etuliitettä. Kaikki testit ovat toisistaan riippumattomia, esim. kortilla maksaminen ei vaikuta kortin saldoon kuin siinä testissä missä korttimaksu tapahtuu. Testien järjestyksellä testikoodissa ei ole merkitystä. Testit kannattaa ajaa mahdollisimman usein, eli aina kun teet testin (tai muutat normaalia koodia) aja testit!

Testimme ovat siinä mielessä hieman ikäviä, että ne testaavat maksukortin tilan muutosta maksukortin merkkijonoesityksen kautta. Voisimme myös muotoilla testin siten, että se varmistaa suoraan maksukortin oliomuuttujasta `saldo` että sen arvo on oikea maksetun ruokailun jälkeen:

```python
def test_syo_edullisesti_vahentaa_saldoa_oikein_2(self):
    kortti = Maksukortti(1000)
    kortti.syo_edullisesti()

    # varmistetaan että saldoa jäljellä 7.5 euroa eli 750 senttiä
    self.assertEqual(kortti.saldo, 750)
```

Tämä on hieman ikävää sillä voidaan ajatella, että kortin tapa toteuttaa saldon säilytys sentteinä on kortin sisäinen asia, jota kortin toteuttanut koodari saattaa jopa myöhemmin muuttaa.

Tehdäänkin kortille uusi metodi `saldo_euroina`, jonka avulla on mahdollista kysyä kortin saldoa euroina:

```python
class Maksukortti:
    # ...

    def saldo_euroina(self):
        return self.saldo / 100
```     

Muutetaan testi käyttämään uutta metodia:

```python
def test_syo_edullisesti_vahentaa_saldoa_oikein_2(self):
    kortti = Maksukortti(1000)
    kortti.syo_edullisesti()

    self.assertEqual(kortti.saldo_euroina(), 7.5)
```

### Lisää testejä

Tehdään kaksi testiä lisää:

```python
def test_syo_maukkaasti_vahentaa_saldoa_oikein(self):
    kortti = Maksukortti(1000)
    kortti.syo_maukkaasti()

    self.assertEqual(kortti.saldo_euroina(), 6.0)

def test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi(self):
    kortti = Maksukortti(200)
    kortti.syo_edullisesti()

    self.assertEqual(kortti.saldo_euroina(), 2.0)
```

Ensimmäinen testeistä tarkastaa, että maukkaasti syöminen vähentää saldoa oikein. Toinen testi varmistaa, että edullista lounasta ei voi ostaa jos kortin saldo on liian pieni.

### Testin alustustoimet

Huomaamme, että testikoodissamme on toistoa: kolme ensimmäistä testiä luovat kaikki samanlaisen 10 euron saldon omaavan kortin.

Siirrämmekin metodin luonnin testiluokassa määriteltyyn alustusmetodiin, `setUp`:

```python
class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        self.kortti = Maksukortti(1000)

    def test_konstruktori_asettaa_saldon_oikein(self):
        self.assertEqual(str(self.kortti), "Kortilla on rahaa 10.00 euroa")


    def test_syo_edullisesti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_edullisesti()

        self.assertEqual(self.kortti.saldo_euroina(), 7.5)

    def test_syo_maukkaasti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_maukkaasti()

        self.assertEqual(self.kortti.saldo_euroina(), 6.0)

    def test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi(self):
        self.kortti.syo_edullisesti()

        self.assertEqual(self.kortti.saldo_euroina(), 2.0)
```

`setUp`-metodi suoritetaan **ennen jokaista testitapausta** (eli testimetodia). Jokainen testitapaus saa siis käyttöönsä `Maksukortti`-olion, jonka saldo on 10 euroa. Huomaa, että testien kohteena oleva maksukortti talletetaan testiluokan oliomuuttujaan `self.kortti = Maksukortti(1000)`-rivillä. Näin testimetodit pystyvät näkemään metodin `setUp` luoman maksukortin.

Testimetodit voivat myös alustaa eri käyttötarkoitukseen sopivia olioita, kuten on tehty testimetodissa `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`. Huomaa, että tässä tapauksessa `self.kortti` viittaa `setUp`-metodissa alustettuun oliomuuttujaan, kun taas `kortti` metodin sisäiseen muuttujaaan.

### Lisää testejä

Tehdään vielä testi metodille `lataa_rahaa`. Ensimmäinen testi varmistaa, että lataus onnistuu ja toinen testaa, ettei kortin saldo kasva suuremmaksi kuin 150 euroa.

```python
def test_kortille_voi_ladata_rahaa(self):
    self.kortti.lataa_rahaa(2500)

    self.assertEqual(str(self.kortti), "Kortilla on rahaa 35.00 euroa")

def test_kortin_saldo_ei_ylita_maksimiarvoa(self):
    self.kortti.lataa_rahaa(20000)

    self.assertEqual(str(self.kortti), "Kortilla on rahaa 150.00 euroa")
```

### Vapaaehtoinen tehtävä: lisää testejä

Lisää lopuksi maksukortille seuraavat testit:

- Maukkaan lounaan syöminen ei vie saldoa negatiiviseksi, ota tähän mallia testistä `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`
- Negatiivisen summan lataaminen ei muuta kortin saldoa
- Kortilla pystyy ostamaan edullisen lounaan, kun kortilla rahaa vain edullisen lounaan verran (eli 2.5 euroa)
- Kortilla pystyy ostamaan maukkaan lounaan, kun kortilla rahaa vain maukkaan lounaan verran (eli 4 euroa)

**HUOM:** On suositeltavaa, että yksi testi testaa vain "yhtä asiaa" kerrallaan. Tee siis jokaisesta ylläolevasta oma testinsä.

**HUOM2:** Kirjoita `assertEqual`-komennot aina siten, että ensimmäisenä parametrina saatu tulos
ja toisena parametrina on odotettu tulos. Esimerkiksi:

```python
self.assertEqual(self.kortti.saldo_euroina(), 150.0)
```

### Testit ovat toisistaan riippumattomia

Yllä jo mainittiin että testit ovat toisistaan riippumattomia eli molemmat testit toimivat siis kuin itsenäiset pienet funktiot. Mitä tämä oikein tarkoittaa?

Maksukorttia testataan usealla pienellä testimetodilla joista jokaisen nimi alkaa <i>test\_</i>-etuliitteellä. Jokainen erillinen testi testaa yhtä pientä asiaa, esim. että kortin saldo vähenee lounaan hinnan verran. On tarkoituksena, että jokainen testi aloittaa "puhtaalta pöydältä", eli ennen jokaista testiä luodaan alustuksen tekevässä `setUp`-metodissa uusi kortti.

Jokainen testi siis alkaa tilanteesta jossa kortti on juuri luotu. Tämän jälkeen testi joko kutsuu suoraan testattavaa metodia tai ensin saa aikaan sopivan alkutilanteen ja tämän jälkeen kutsuu testattavaa metodia. Näin tehtiin testimetodissa `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`, jossa alustettiin erillinen maksukortti, jonka saldo ei riitä edullisen lounaan ostamiseen. Tämän avulla testattiin, ettei edullisen lounaan syöminen vie saldoa negatiiviseksi.

### Testiluokka vielä kokonaisuudessaan

```python
import unittest
from maksukortti import Maksukortti

class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        self.kortti = Maksukortti(1000)

    def test_konstruktori_asettaa_saldon_oikein(self):
        self.assertEqual(str(self.kortti), "Kortilla on rahaa 10.00 euroa")


    def test_syo_edullisesti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_edullisesti()

        self.assertEqual(self.kortti.saldo_euroina(), 7.5)

    def test_syo_maukkaasti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_maukkaasti()

        self.assertEqual(self.kortti.saldo_euroina(), 6.0)

    def test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi(self):
        kortti = Maksukortti(200)
        kortti.syo_edullisesti()

        self.assertEqual(kortti.saldo_euroina(), 2.0)

    def test_kortille_voi_ladata_rahaa(self):
        self.kortti.lataa_rahaa(2500)

        self.assertEqual(self.kortti.saldo_euroina(), 35.0)

    def test_kortin_saldo_ei_ylita_maksimiarvoa(self):
        self.kortti.lataa_rahaa(20000)

        self.assertEqual(self.kortti.saldo_euroina(), 150.0)
```

### Onko jo testattu tarpeeksi: testauskattavuus

Olemme tyytyväisiä, uskomme että testitapauksia on nyt tarpeeksi. Onko tosiaan näin? Onneksi on olemassa työkaluja, joilla voidaan tarkastaa testien rivi- ja haarautumakattavuus. _Rivikattavuus_ mittaa mitä koodirivejä testien suorittaminen on tutkinut. Täydellinen rivikattavuuskaan ei tietenkään takaa että ohjelma toimii oikein, mutta on parempi kuin ei mitään. _Haarautumakattavuus_ taas mittaa mitä eri suoritushaaroja koodista on käyty läpi. Suoritushaaroilla tarkoitetaan esimerkiksi if-komentojen valintatilanteita.

Koska haarautumakattavuus antaa tyypillisesti realistisemman kuvan testien kattavuudesta, käytämme kurssilla sitä testikattavuuden mittarina.

### Testikattavuusraportti

Testikattavuuden kerääminen testien suorituksesta onnistuu [coverage](https://coverage.readthedocs.io/en/latest/)-työkalun avulla. Sen asentamisen projektin kehityksen aikaiseksi riippuvuudeksi onnistuu tuttuun tapaan komennolla:

```bash
poetry add coverage --group dev
```

Testikattavuuden kerääminen `pytest src`-komennolla suoritetuista testeistä onnistuu virtuaaliympäristössä komennolla:

```bash
coverage run --branch -m pytest src
```

Komennon `--branch` flagillä pystymme keräämään testien [haarautumakattavuuden](https://coverage.readthedocs.io/en/latest/branch.html). Huomaa, että `pytest src`-komento rajaa testien etsinnän projektin juurihakemistossa sijaitsevaan _src_-hakemistoon. Komennon suorittamisen jälkeen voimme tulostaa komentoriville raportin kerätystä testikattavuudesta komennolla:

```bash
coverage report -m
```

Tulos näyttää seuraavalta:

```
Name                            Stmts   Miss Branch BrPart  Cover   Missing
---------------------------------------------------------------------------
src/maksukortti.py                 22      1      8      2    90%   15->exit, 20
src/tests/__init__.py               0      0      0      0   100%
src/tests/maksukortti_test.py      23      0      0      0   100%
---------------------------------------------------------------------------
TOTAL                              45      1      8      2    94%
```

### Tiedostojen jättäminen raportin ulkopuolelle

Tulostuksesta huomaamme, että raportissa on suuri määrä projektin kannalta turhia tiedostoja. Voimme konfiguroida, mistä tiedostoista testikattavuutta kerätään projektin juurihakemiston _.coveragerc_-tiedostossa. Jos haluamme sisällyttää testikattavuuteen vain projektin _src_-hakemiston, on konfiguraatio seuraava:

```
[run]
source = src
```

Voimme jättää testikattavuuden ulkopuolelle tiedostoja ja hakemistoja. Järkevää voisi olla esimerkiksi jättää testihakemisto, käyttöliittymän koodin hakemisto ja _src/index.py_-tiedosto testikattavuuden ulkopuolelle. Tämä onnistuu seuraavalla muutoksella _.coveragerc_-tiedostoon:

```
[run]
source = src
omit = src/**/__init__.py,src/tests/**,src/ui/**,src/index.py
```

Nyt komentojen `coverage run --branch -m pytest src` ja `coverage report -m` suorittaminen sisällyttää vain haluamamme _src_-hakemiston tiedostot:

```
Name                 Stmts   Miss Branch BrPart  Cover   Missing
----------------------------------------------------------------
src/maksukortti.py      22      1      8      2    90%   15->exit, 20
----------------------------------------------------------------
TOTAL                   22      1      8      2    90%
```

### Visuaalisempi testikattavuusraportti

Komentoriviltä luettavaa raporttia selkeämmän esitysmuodon voi generoida komennolla:

```bash
coverage html
```

Komennon suorittaminen luo projektin juurihakemistoon hakemiston _htmlcov_. Raporttia voi katsoa selaimessa avaamalla hakemiston tiedoston _index.html_ selaimen kautta. Selaimessa aukeava raportti näyttää kutakuinkin seuraavalta:

![]({{ "/images/unittest0.png" | absolute_url }})

Raportista näemme, että koko koodin haaraumakattavuus on 90%. Yksittäisen tiedoston haaraumakattavuuden näemme taulukon "coverage"-sarakkeesta. Jos klikkaamme taulukosta yksittäisen tiedoston nimeä aukeaa tiedoston koodi ja testien siinä kattamat haarat. Katetut haarat näkyvät vihreinä palkkeina rivinumeron vieressä. Haarat, joita ei ole katettu ollenkaan, on korostettu punaisella värillä. Sen sijaan, jos haara on osittain katettu, se on korostettu keltaisella värillä. Viemällä hiiri rivin päälle, nähdään tarkempi selitys, miksi haaraa ei ole täysin katettu:

![]({{ "/images/unittest.png" | absolute_url }})

![](/assets/images/python/coverage-tiedosto.png)

Kuvan tilanteessa kaksi if-ehtoa eivät koskaan saaneet arvoa `True`, joten kyseisiä haaroja ei testeissä käsitelty.

Koodin muutosten jälkeen tulee uuden testauskattavuuden selvityksessä suorittaa kaksi komentoa. Saat suoritettua molemmat komennot "yhdellä napin painalluksella" sijoittamalla ne samalle riville puolipisteellä eroteltuna

```bash
coverage run --branch -m pytest src; coverage html
```

### Huomio isompien projektien testaamisesta

Kannattaa huomata, että _src_-hakemiston **alihakemistoissa** (ei siis itse _src_-hakemistossa) tulee olla tyhjät <i>\_\_init\_\_.py</i>-tiedostot, jotta testikattavuuteen sisällytetään kaikki halutut tiedostot. Esim. kurssin Ohjelmistotekniikka [referenssisovelluksessa]({{site.python_reference_app_url}}) tapauksessa <i>\_\_init\_\_.py</i>-tiedostot on lisätty seuraavasti:

```
src/
  entities/
    __init__.py
    todo.py
    ...
  repositories/
    __init__.py
    todo_repository.py
    ...
  services/
    __init__.py
    todo_service.py
  ...
```
