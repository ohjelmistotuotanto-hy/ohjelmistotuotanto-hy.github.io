---
layout: page
permalink: /uv
title: uv ja riippuvuuksien hallinta
---

Laajoissa ja monimutkaisissa ohjelmistoprojekteissa kaiken koodin tuottaminen itse ei ole enää käytännöllistä. Ei ole esimerkiksi järkevää, että jokaisessa ohjelmistoprojektissa toteutetaan oma ohjelmointirajapinta tietokantaoperaatioille, tai sovelluskehys koodin testaamiseen. Jotta pyörää ei tarvitsisi aina keksiä uudelleen, ovat ohjelmistokehittäjät kehittäneet valtavan määrän avoimen lähdekoodin _kirjastoja_, joita jokainen voi hyödyntää projekteissaan.

Kirjastojen lähdekoodi on usein luettavissa versionhallinta-alustoilla, kuten GitHubissa. Usein kirjastoja päivitetään jatkuvasti ja nämä päivitykset synnyttävät kirjastoista uusia _versioita_. Kirjastojen versioita julkaistaan erilaisiin rekistereihin, joista ne ovat helposti asennettavissa. [The Python Package Index](https://pypi.org/) (PyPI) on eräs tämän kaltainen, Python-kirjastoille tarkoitettu rekisteri.

Projektissa käytettävät kirjastojen versiot ovat projektin _riippuvuuksia_. Riippuvuuksia asennetaan Python-projekteissa tyypillisesti projektikohtaisiin _virtuaaliympäristöihin_, jottei samalla tietokoneella olevien projektien riippuvuuksissa syntyisi ristiriitoja. Jotta riippuvuuksien ja virtuaaliympäristöjen hallinta sujuisi helposti, käytämme kurssilla [uv](https://docs.astral.sh/uv/)-komentorivityökalua. uv on nopea, Rustilla toteutettu työkalu, joka hoitaa samalla kertaa niin Python-versioiden, virtuaaliympäristöjen kuin riippuvuuksienkin hallinnan.

### Miksi uv?

Python-ekosysteemissä on tarjolla useita kilpailevia työkaluja riippuvuuksien ja virtuaaliympäristöjen hallintaan. Tunnetuimpia ovat mm. suoraan Pythonin mukana tulevat [pip](https://pypi.org/project/pip/) ja [venv](https://docs.python.org/3/library/venv.html), sekä kolmannen osapuolen työkalut [Poetry](https://python-poetry.org/), [Pipenv](https://pipenv.pypa.io/) ja [conda](https://docs.conda.io/).

- **pip + venv** ovat Pythonin standardikirjaston työkaluja, eli mitään ylimääräistä ei tarvitse asentaa. Työkalujen käyttö on kuitenkin melko käsityötä: virtuaaliympäristö pitää itse luoda ja aktivoida, riippuvuudet listataan usein pelkkään _requirements.txt_-tiedostoon ilman kunnollista versiolukkoa, eikä työkalu osaa hallita käytettävää Python-versiota.
- **Poetry** toi Python-maailmaan kunnollisen riippuvuuslukituksen (_poetry.lock_) ja siistin _pyproject.toml_-pohjaisen projektinhallinnan, mutta on huomattavasti uv:tä hitaampi, eikä osaa asentaa tai hallita Python-versioita itse.
- **conda** on suunniteltu erityisesti data-analytiikan ja tieteellisen laskennan tarpeisiin, ja osaa asentaa myös ei-Python-riippuvuuksia (esim. C-kirjastoja), mutta on raskas ja hidas yleiskäyttöiseen sovelluskehitykseen.

uv:n suurimmat edut kilpailijoihinsa nähden ovat:

- **Nopeus.** uv on toteutettu Rustilla ja on riippuvuuksien asennuksessa tyypillisesti kymmeniä kertoja nopeampi kuin pip tai Poetry.
- **Kaikki yhdessä työkalussa.** uv hoitaa sekä Python-versioiden, virtuaaliympäristöjen että riippuvuuksien hallinnan, eikä erillisiä työkaluja (esim. pyenv) tarvita.
- **Yksinkertainen, standardeja noudattava projektirakenne.** uv käyttää Pythonin virallisen [PEP 621](https://peps.python.org/pep-0621/) -standardin mukaista _pyproject.toml_-muotoa, mikä tekee projekteista yhteensopivia myös muiden työkalujen kanssa.
- **Aktiivinen kehitys.** uv on tällä hetkellä Python-yhteisössä nopeimmin yleistyvä riippuvuudenhallintatyökalu, ja sen taustalla oleva [Astral](https://astral.sh/) kehittää myös muita suosittuja Python-työkaluja, kuten [Ruff](https://docs.astral.sh/ruff/)-linteriä.

### Huomioita komennoista

Monilla tietokoneilla Python-version kolme komennot suoritetaan `python3`-komennolla komennon `python` sijaan. Tarkista käytössä oleva versio komennolla:

```bash
python3 --version
```

Jos komentoa `python3` ei jostain syystä löydy, tarkista `python`-komennon käyttämä versio komennolla:

```bash
python --version
```

Jos molemmissa tapauksissa versio on alle 3.14, ei hätää: uv osaa itse asentaa ja hallita Python-versioita, joten erillistä Python-asennusta ei välttämättä tarvita, katso alempaa.

_Kurssilla käytetään uv:n versiota 0.12 (tai uudempaa). Jos koneellasi on vanhempi versio, se on syytä päivittää komennolla `uv self update`!_

### Asennus

Ennen kuin pääsemme tutustumaan uv:n käyttöön tarkemmin, tulee se ensin asentaa. Seuraa alla olevista ohjeista tietokoneesi käyttöjärjestelmälle sopivaa asennusohjetta, kannattaa toki vilkaista myös uv:n [virallinen](https://docs.astral.sh/uv/getting-started/installation/) asennusohje.

**HUOM:** kaikki asennustavat saattavat vaatia terminaali-ikkunan sulkemisen ja uudelleen avaamisen, jotta uv:n komennot alkavat toimia.

#### Linux- ja macOS-asennus

Asenna uv suorittamalla terminaalissa seuraava komento:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Asennusskripti lisää uv-binäärin polun automaattisesti `PATH`-muuttujaan (tyypillisesti hakemisto _$HOME/.local/bin_). Käynnistä terminaali uudestaan ja varmista, että asennus onnistui suorittamalla komento `uv --version`. Komennon pitäisi tulostaa asennettu versio.

#### Windows-asennus

Asenna uv suorittamalla PowerShellissä seuraava komento:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Käynnistä terminaali uudestaan ja varmista, että asennus onnistui suorittamalla komento `uv --version`. Komennon pitäisi tulostaa asennettu versio.

### Python-version hallinta

uv osaa myös asentaa Python-versioita itse, erillistä Python-asennusta ei siis välttämättä tarvita. Voit asentaa esimerkiksi Python-version 3.14 komennolla:

```bash
uv python install 3.14
```

Asennetut versiot näkee komennolla:

```bash
uv python list
```

Kun projekti alustetaan alla kuvatulla tavalla vaatimalla tietty Python-versio, uv asentaa version automaattisesti tarvittaessa, eikä erillistä `uv python install`-komennon suorittamista välttämättä tarvita.

### Projektin alustaminen

Harjoitellaan uv:n käyttöä tekemällä pieni esimerkkiprojekti. Luo hakemisto _uv-testi_ haluamaasi hakemistoon. Avaa hakemisto terminaalissa ja suorita siellä komento:

```bash
uv init --python 3.14 --no-package
```

Komennon yhteydessä annettu `--python 3.14`-asetus asettaa projektin Python-version vaatimukseksi vähintään version 3.14. uv ei kysy komennon suorittamisen yhteydessä kysymyksiä, vaan luo tarvittavat tiedostot suoraan valmiiksi täytettynä.

`--no-package`-asetus on tärkeä: ilman sitä `uv init` alustaa projektin oletusarvoisesti asennettavaksi _paketiksi_, jolloin se luo mm. _src_-hakemistoon oman alihakemiston projektin nimellä, sekä _pyproject.toml_-tiedostoon `[build-system]`-osion. Tällä kurssilla teemme projekteista yksinkertaisempia sovelluksia, emme julkaistavia paketteja, joten `--no-package` pitää projektin rakenteen siistinä.

Komennon suorittamisen jälkeen hakemistoon ilmestyy muutama tiedosto: _pyproject.toml_, _.python-version_, _README.md_ sekä _main.py_. Tiedosto _.python-version_ kertoo, mitä Python-versiota projektissa oletusarvoisesti käytetään. Tiedoston _pyproject.toml_ sisältö on kutakuinkin seuraava:

```
[project]
name = "uv-testi"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.14"
dependencies = []
```

Osiossa `[project]` näemme mm. `uv init`-komennon suorituksen yhteydessä asettamamme Python-version vaatimuksen, joka on muotoa `requires-python = ">=3.14"`. Merkintä tarkoittaa, että projektin käyttö vaatii vähintään Python-version 3.14. Kohta `dependencies` puolestaan tulee sisältämään projektin riippuvuudet, kun niitä lisätään.

Poistetaan lopuksi vielä tiedostoon `uv init`-komennon luoma esimerkkitiedosto _main.py_ turhana, sillä kirjoitamme koodimme myöhemmin hakemistoon _src_.

### Riippuvuuksien asentaminen

{% include no_pip.md %}

Asennetaan seuraavaksi projektiimme ensimmäisen riippuvuus. Riippuvuuksien löytäminen onnistuu helpoiten Googlettamalla ja etsimällä hakutuloksista sopivia GitHub-repositorioita, tai PyPI-sivuja. Asennetaan esimerkkinä projektiimme [cowsay](https://pypi.org/project/cowsay/)-kirjasto. Tämä onnistu projektin juurihakemistossa (samassa hakemistossa, missä _pyproject.toml_-tiedosto sijaitsee) komennolla:

```bash
uv add cowsay
```

Asennuksen komento on siis muotoa `uv add <kirjasto>`. Komennon suorittamisen jälkeen huomaamme, että _pyproject.toml_-tiedoston `dependencies`-kohtaan on ilmestynyt uutta sisältöä:

```
dependencies = [
    "cowsay>=6.1",
]
```

`uv add`-komento asentaa oletusarvoisesti kirjaston uusimman version, joka oli komennon suoritushetkellä `6.1`. Usein tämä on juuri se, mitä haluamme tehdä. Voimme kuitenkin asentaa halutessamme esimerkiksi cowsay-kirjaston version `5.0` komennolla:

```bash
uv add cowsay==5.0
```

Jos haluaisimme poistaa kirjaston projektimme riippuvuuksien joukosta, se onnistuisi komennolla:

```bash
uv remove cowsay
```

Pidetään kuitenkin cowsay-kirjasto toistaiseksi asennettuna.

Riippuvuuksien lisäämisen ja poistamisen yhteydessä uv päivittää projektin virtuaaliympäristön automaattisesti (hakemistoon _.venv_, joka luodaan projektin juureen) sekä tiedoston _uv.lock_. Tiedosto sisältää kaikkien asennettujen riippuvuuksien tarkat versiotiedot, joiden avulla uv pystyy aina asentamaan täsmälleen samat versiot. Tästä syystä tiedosto tulee lisätä versionhallintaan.

Hakemistoa _.venv_ ei sen sijaan _tule tallentaa_ versionhallintaan, eli se on syytä lisätä heti tiedostoon _.gitignore_.

Jos haluat pelkästään varmistaa, että kaikki _pyproject.toml_-tiedostossa määritellyt riippuvuudet on asennettu (esim. kloonattuasi jonkun toisen tekemän projektin), onnistuu se komennolla:

```bash
uv sync
```

Komento tekee tarvittaessa myös virtuaaliympäristön alustamisen. Käytännössä komentoa ei useinkaan tarvitse suorittaa erikseen, sillä esimerkiksi seuraavassa kappaleessa esiteltävä `uv run`-komento synkronoi riippuvuudet automaattisesti ennen suoritusta.

### Komentojen suorittaminen virtuaaliympäristössä

Lisätään seuraavaksi _uv-testi_-hakemistoon hakemisto _src_ ja sinne tiedosto _index.py_. Lisätään tiedostoon seuraavat koodirivit:

```python
import cowsay

cowsay.tux("uv is awesome!")
```

Koodissa käytämme `import`-lausetta saadaksemme cowsay-kirjaston käyttöömme. Jos suoritamme tiedoston terminaalissa komennolla:

```bash
python3 src/index.py
```

On lopputuloksena seuraava virheilmoitus:

```
ModuleNotFoundError: No module named 'cowsay'
```

Tämä johtuu siitä, että emme ole projektin virtuaaliympäristön sisällä, jonka vuoksi Python ei löydä projektimme riippuvuuksia. Asia korjaantuu käyttämällä [run](https://docs.astral.sh/uv/reference/cli/#uv-run)-komentoa:

```bash
uv run python3 src/index.py
```

`uv run`-komento siis suorittaa annetun komennon virtuaaliympäristössä, jonka sisällä Python löytää riippuvuutemme. Komento myös varmistaa ennen suoritusta, että riippuvuudet ovat ajan tasalla (eli tekee tarvittaessa `uv sync`-komennon suorittaman toimenpiteen).

Kun projektia kehitetään aktiivisesti ja komentoja suoritetaan terminaalissa jatkuvasti, voi olla kätevää olla koko ajan virtuaaliympäristön sisällä, sen sijaan että jokaisen komennon eteen kirjoittaa `uv run`. Tämä onnistuu aktivoimalla virtuaaliympäristö suoraan komennolla:

```bash
source .venv/bin/activate
```

(Windowsilla vastaava komento on `.venv\Scripts\activate`.)

Kun olemme virtuaaliympäristössä, komentorivin syöterivin edessä on suluissa virtuaaliympäristön nimi:

```bash
$ (uv-testi)
```

Virtuaaliympäristön sisällä voimme suorittaa komennon "normaalisti", eli ilman `uv run`-komentoa:

```bash
python3 src/index.py
```

Voimme lähteä virtuaaliympäristöstä komennolla `deactivate`.

### Kehityksaikaiset riippuvuudet

uv:n avulla riippuvuuksia on mahdollista ryhmitellä niiden käyttötarkoituksen mukaan. Melko yleinen tapa ryhmitellä riippuvuuksia on ryhmitellä ne _kehityksen_ ja _suorituksen_ aikaisiksi riippuvuuksiksi. Kehitysaikaisia riippuvuuksia tarvitaan ohjelmiston kehityksen aikana, mutta ne eivät ole välttämättömiä ohjelman suorituksessa.

Komennon `uv add` suorittaminen asentaa oletusarvoisesti riippuvuudet tiedoston `dependencies`-kohtaan. Näiden riippuvuuksien lisäksi voimme asentaa projektiimme riippuvuuksia, joita tarvitsemme vain kehityksen aikana. Näitä riippuvuuksia ovat kaikki ne, joita itse sovelluksen käynnistäminen (esimerkiksi `python3 src/index.py`-komennon suorittaminen) ei tarvitse.

Kehityksenaikaisten riippuvuuksien asentaminen onnistuu antamalla `uv add`-komennolle `--dev`-flagi. Esimerkiksi pian tutuksi tulevan [pytest](https://pytest.org/)-kirjaston voi asentaa kehityksaikaiseksi riippuvuudeksi seuraavalla komennolla:

```bash
uv add pytest --dev
```

Komennon suorittaminen lisää pytest-kirjaston riippuvuudeksi _pyproject.toml_-tiedoston `[dependency-groups]`-osion `dev`-ryhmään:

```
[dependency-groups]
dev = [
    "pytest>=9.1.1",
]
```

Kehityksenaikaisten riippuvuuksien määritteleminen on kätevää, koska se vähentää asennettavien riippuvuuksien määrää tapauksessa, jossa haluamme vain suorittaa sovelluksen. Tässä tilanteessa riippuvuuksien asentamisen voi tehdä komennolla `uv sync --no-dev`.

**HUOM:** `uv run` synkronoi riippuvuudet automaattisesti ennen suoritusta, ja tekee tämän oletusarvoisesti _kehitysaikaiset riippuvuudet mukaan lukien_. Jos siis olet asentanut riippuvuudet komennolla `uv sync --no-dev`, palauttaa pelkkä `uv run`-komento kehitysaikaiset riippuvuudet takaisin asennetuksi. Jos haluat suorittaa komennon ilman kehitysaikaisia riippuvuuksia, käytä komentoa `uv run --no-dev`.

{% include no_pip.md %}

### Ratkaisuja yleisiin ongelmiin

#### Virtuaaliympäristö on sekaisin

Jos kohtaat oudon virheen, jonka epäilet johtuvan rikkoutuneesta virtuaaliympäristöstä tai riippuvuuksista, poista virtuaaliympäristö ja lukkotiedosto ja asenna riippuvuudet uudelleen, eli anna komennot:

```
rm -rf .venv
rm uv.lock
uv sync
```

Yritä tämän jälkeen uudelleen!

#### uv ei löydä oikeaa Python-versiota

Jos uv valittaa, ettei se löydä _pyproject.toml_-tiedostossa vaadittua Python-versiota, asenna vaadittu versio uv:n itsensä avulla:

```bash
uv python install 3.14
```

ja suorita tämän jälkeen `uv sync` uudelleen.

#### uv:n itsensä päivittäminen

Jos epäilet käytössäsi olevan vanhentuneen uv:n version aiheuttavan ongelmia, päivitä se komennolla:

```bash
uv self update
```

ja yritä tämän jälkeen epäonnistunutta komentoa uudelleen.
