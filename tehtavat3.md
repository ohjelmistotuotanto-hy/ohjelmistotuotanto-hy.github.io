---
layout: page
title: Viikko 3
inheader: no
permalink: /tehtavat3/
---

{% include laskari_info.md part=3 %}

Tehtävät liittyvät storyjen hyväksymistestauksen automatisointiin tarkoitetun Robot Frameworkin. Tehtävässä 8 jatketaan kurssin [tekoäly]-tehtävien sarjaa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include uv_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

Tehtävät 1 ja 5-9 palautetaan  jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**,  tehtävän hakemiston _viikko3_ sisälle. Tehtävät 2-4 palautetaan omaan, uuteen repositorioon.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### GitHub Education

{% include copilot_info.md %}

{% include checkboxit.md %}

### 1. Tutustuminen Robot Frameworkkiin

<input type="checkbox"> Lue [täällä](/robot_framework) oleva Robot Framework -johdanto ja tee siihen liittyvät tehtävät.

### 2. Web-laskuri

**HUOM:** jos käytät Dockeria, lue [tämä](/docker#docker-ja-robot-testit)!

Siirrytään seuraavaksi Web-sovellusten maailmaan. Oletuksena on, että hallitset ainakin jossain määrin kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) (vanhalta nimeltään _Aineopintojen harjoitustyö: Tietokantasovellus_) tutun [Flask](https://flask.palletsprojects.com/en/stable/)-kirjaston käytön.

Tarkastellaan edellisestä tehtävästä tutun toiminnallisuuden tarjoamaa esimerkkiprojektia, joka löytyy kurssirepositorion alihakemistosta viikko3/webcounter.

<input type="checkbox"> Tee tätä ja kahta seuraavaa tehtävää varten kokonaan uusi repositorio, nimeltään esimerkiksi _webcounter_, ja laita muiden tehtävien palautukseen käyttämäsi *palautusrepositorion* tiedostoon README.md linkki tätä tehtävää varten tehtyyn repositorioon.

<input type="checkbox"> Asenna projektin riippuvuudet komennolla `uv sync` ja käynnistä se virtuaaliympäristössä komennolla `python3 src/index.py`.

Sovelluksen käynnistymisen jälkeen pääset käyttämään sitä avaamalla selaimella osoitteen <http://localhost:5001>:

![]({{ "/images/laskuri1.png" | relative_url }}){:height="350px" }

Sovellus siis toimii _localhostilla_ eli paikallisella koneellasi _portissa_ 5001.
Saat sammutettua sovelluksen painamalla komentoriviltä `ctrl+c` tai `ctrl+d`.

Sovelluksen rakenne on pääosin sama mitä kurssin [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) esimerkkisovelluksissa.

Tiedostossa _app.py_ määritellään sivupyyntöjen käsittelijäfunktiot:

```python
from flask import Flask, redirect, render_template
from counter import Counter

app = Flask(__name__)
cnt = Counter()

@app.route("/")
def index():
    return render_template("index.html", value=cnt.value)

@app.route("/increment", methods=["POST"])
def increment():
    cnt.increase()
    return redirect("/")
```

Sovelluksen HTML-sivupohjat on määritelty hakemistossa _templates_. Sovelluksen ainoa näkymä näyttää muuttujaan _cnt_ talletetun laskuriolion arvon. Näkymä sisältää myös kaksi nappia, joista "Paina" aiheuttaa POST-pyynnön reitille _increment_. Reitin käsittelijä kasvattaa laskurin arvoa, ja _uudelleenohjaa_ sovelluksen takaisin juuriosoitteeseen. Nappi "Nollaa" ei toimi tällä hetkellä.

Sovellukselle on tehty pari testiä Robot Frameworkilla. Testit suoritetaan normaaliin tapaan komennolla _robot src/tests_ mutta ennen testien suorittamista joudumme tekemään muutaman ekstratempun.

Testeissä on käytössä Robot Frameworkin [Browser](https://robotframework-browser.org/)-kirjasto, jonka avulla on mahdollista simuloida selaimen käyttöä koodista käsin. Browser-kirjasto perustuu Microsoftin [Playwright](https://playwright.dev/)-työkaluun, joka ohjaa selainta suoraan.

> Projektin riippuvuuksina on kirjaston lisäksi paketti _robotframework-browser-batteries_, joka sisältää kirjaston tarvitseman [Node.js](https://nodejs.org/en)-ajoympäristön valmiina, eli Node.js:ää ei tarvitse asentaa erikseen.

<input type="checkbox"> Ennen kuin siirryt testien pariin, asenna testien käyttämä Chromium-selain komennolla `uv run rfbrowser install chromium`.

Selain asentuu projektin virtuaaliympäristön sisälle. Asennus on siis tehtävä jokaiselle projektille erikseen, ja uudelleen, jos poistat hakemiston _.venv_.

<input type="checkbox"> Käynnistä web-sovellus edellisen tehtävän tapaan komentoriviltä.
 
Varmista selaimella, että sovellus on päällä. Varmista, että sovelluksen laskurin arvo on 0. Jos se on jotain muuta, uudelleenkäynnistä sovellus.

<input type="checkbox">  Avaa uusi terminaali-ikkuna ja suorita projektin testit virtuaaliympäristössä komennolla `robot src/tests`.

Komennon pitäisi suorittaa onnistuneesti kaksi testitapausta, `At start the counter is zero` ja `When button pressed twice the counter is two`. Testitapausten suoritusta voi seurata aukeavasta selaimen ikkunasta.

#### Ongelmia?

[Tämä ohje](/browser_asennusohjeet/) saattaa auttaa.

#### Tutustuminen testeihin

Tiedostossa `increment.robot` olevat testit näyttävät seuraavalta:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
At start the counter is zero
    Go To  ${HOME_URL}
    Get Title  ==  Laskuri
    Get Text  body  *=  nappia painettu 0 kertaa

When button pressed twice the counter is two
    Go To  ${HOME_URL}
    Click  button >> text=Paina
    Click  button >> text=Paina
    Get Text  body  *=  nappia painettu 2 kertaa
```

Jos unohdetaan alun osio _Settings_, on testien toiminnallisuus aika ilmeinen. Käytössä olevat avainsanat [Go To](https://marketsquare.github.io/robotframework-browser/Browser.html#Go%20To), [Click](https://marketsquare.github.io/robotframework-browser/Browser.html#Click), [Get Title](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Title) ja [Get Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Text) ovat Browser-kirjaston tarjoamia valmiita avainsanoja.

Avainsanat `Get Title` ja `Get Text` hakevat sivulta arvon, ja niille voi antaa lisäksi [vertailuoperaattorin](https://marketsquare.github.io/robotframework-browser/Browser.html#Assertions) ja odotetun arvon. Esimerkiksi <code>Get Title &nbsp;== &nbsp;Laskuri</code> tarkistaa, että sivun otsikko on täsmälleen _Laskuri_, ja <code>Get Text &nbsp;body &nbsp;*= &nbsp;nappia painettu 0 kertaa</code> tarkistaa, että sivun `body`-elementin teksti _sisältää_ annetun merkkijonon. Jos ehto ei toteudu, testi epäonnistuu. Browser-kirjasto odottaa tarvittaessa hetken (oletusarvoisesti korkeintaan 10 sekuntia), että ehto toteutuu, ennen kuin se toteaa testin epäonnistuneen.

#### Miten Browser-kirjasto löytää sivun elementit?

Testitapauksissa ollaan interaktiossa erilaisten HTML-elementtien, kuten tekstikenttien ja painikkeiden kanssa. Avainsanoille kerrotaan _selektorin_ avulla, mihin elementtiin ne kohdistuvat. Browser-kirjasto tukee [useita selektorityyppejä](https://marketsquare.github.io/robotframework-browser/Browser.html#Finding%20elements), joista tärkeimmät ovat:

| selektori | löytää |
| --------- | ------ |
| `id=foo` | elementin, jonka `id`-attribuutin arvo on _foo_ |
| `text=foo` | elementin, jonka tekstisisältö on tai sisältää _foo_ |
| `button` | CSS-selektori, tässä tapauksessa [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)-elementti |
| `input[name="foo"]` | CSS-selektori: `input`-elementti, jonka `name`-attribuutin arvo on _foo_ |

Selektoreita voi myös ketjuttaa merkinnällä `>>`, jolloin jälkimmäistä selektoria etsitään edellisen löytämien elementtien joukosta. Kutsu <code>Click &nbsp;button >> text=Paina</code> etsii siis `button`-elementin, jonka tekstinä on _Paina_, eli seuraavan _src/templates/index.html_-tiedostossa määritellyn painikkeen:

```html
<button type="submit">
  Paina
</button>
```

Pelkkä <code>Click &nbsp;text=Paina</code> toimisi tässä tapauksessa myös, sillä sivulla ei ole muita elementtejä, joiden tekstinä on _Paina_.

#### Tutustuminen testeihin jatkuu

Osassa `*** Settings ***` on useita huomionarvoisia seikkoja, rivi

```robot
Resource  resource.robot
```

kertoo, että testin tulee ottaa käyttöön tiedostossa `resource.robot` tehdyt määritelmät (eli resurssit).

Tiedoston  `resource.robot` sisältö on seuraava:

```robot
*** Settings ***
Library  Browser

*** Variables ***
${DELAY}     500ms
${HOME_URL}  http://localhost:5001
${BROWSER}   chromium

*** Keywords ***
Open And Configure Browser
    New Browser  browser=${BROWSER}  headless=False  slowMo=${DELAY}
    New Context
    New Page  about:blank
```

`*** Settings ***` osiossa otetaan käyttöön edellä mainittu Browser-kirjasto, joka siis tuo mukaan lukuisia uusia avainsanoja, joista kaikki on dokumentoitu [täällä](https://marketsquare.github.io/robotframework-browser/Browser.html).

Tiedostossa on myös osio `*** Variables ***` missä on mahdollista määritellä muuttujia, jotka ovat kaikkien osion avainsanojen käytössä. Huomaa, että määritellyt muuttujat kirjoitetaan isoilla kirjaimilla, toisin kuin argumentit. Muuttujia kannattaa suosia aina kovakoodattujen arvojen sijaan.

`*** Keywords ***`-osiossa on määritellään avainsana `Open And Configure Browser` joka alustaa selaimen testejä varten:

- Avainsana käynnistää selaimen käyttämällä Browser-kirjaston [New Browser](https://marketsquare.github.io/robotframework-browser/Browser.html#New%20Browser) -avainsanaa antaen `browser`-argumentin arvoksi käytetyn selaimen, joka on oletusarvoisesti  _chromium_. Muita vaihtoehtoja ovat _firefox_ ja _webkit_, jotka tosin on asennettava erikseen komennolla `uv run rfbrowser install firefox` tai `uv run rfbrowser install webkit`.
- Argumentti `headless=False` määrittelee, että selaimen ikkuna on näkyvissä testien suorituksen ajan.
- Argumentti `slowMo` asettaa jokaisen selainoperaation väliin `DELAY`-muuttujan arvon mittaisen viiveen. Pidempi viive helpottaa testien suorituksen seuraamista.
- [New Context](https://marketsquare.github.io/robotframework-browser/Browser.html#New%20Context) luo selaimeen uuden, muista erillisen _kontekstin_, joka vastaa käytännössä selaimen incognito-ikkunaa: kontekstilla on omat evästeensä ja muu tilansa. Selaimen ikkunan koon voi tarvittaessa asettaa kontekstin luomisen yhteydessä argumentilla `viewport`, nyt käytössä on oletusarvoinen koko.
- [New Page](https://marketsquare.github.io/robotframework-browser/Browser.html#New%20Page) avaa kontekstiin uuden välilehden, tässä tapauksessa tyhjän sivun.

Palataan vielä tiedostoon `increment.robot`, jonka alun osio `*** Settings ***` on seuraava

```robot
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
  ...
```

Osiossa on käytössä ennestään tuntemattomat `Suite Setup`-, `Suite Teardown`-asetukset. Niiden merkitykset ovat seuraavat:

- `Suite Setup` -asetuksen avulla voimme suorittaa avainsanan ennen tiedoston ensimmäistä testitapausta, eli aluksi siis suoritetaan  _Open And Configure Browser_ joka määriteltiin tiedostossa `resource.robot`
- `Suite Teardown` -asetuksen avulla voimme suorittaa avainsanan tiedoston viimeisen testitapauksen jälkeen, tapauksessamme suljemme selaimen avainsanalla [Close Browser](https://marketsquare.github.io/robotframework-browser/Browser.html#Close%20Browser)

**Huomaa, että toimiakseen testit edellyttävät, että sovellus on alussa tilassa missä laskurin arvo on 0. Uudelleenkäynnistä siis sovellus aina ennen testien suorittamista!**

<input type="checkbox"> Kun olet suorittanut testit onnistuneesti ja tutustunut sovellukseen sekä testeihin on tämä tehtävä tehty.

### 3. Weblaskurin nollaus

<input type="checkbox">  Laajenna sovellusta siten, että nappi "Nollaa" nollaa laskurin arvon.

<input type="checkbox">  Tee Robot-testi, joka varmistaa, että nollaaminen toimii.

Tee testi tiedostoon `reset.robot`, testin näyttää suunnilleen seuraavalta

```robot
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
When counter has a nonzero value and it is reset the value becomes zero
   ...
```

**Muista**, että toimiakseen valmiina olevat testit edellyttävät että sovellus on alussa tilassa missä laskurin arvo on 0. Uudelleenkäynnistä siis sovellus aina ennen testien suorittamista!

### 4. Web-sovelluksen testien suorittaminen GitHub Actioneissa

Browser-kirjastoa käyttävät Robot-testit on melko helppo suorittaa myös GitHub Actioneissa. 

Konfiguraatioihin on tehtävä muutama muutos.

<input type="checkbox"> Laajennetaan tiedostoa `resource.robot` seuraavasti:

```robot
*** Settings ***
Library  Browser

*** Variables ***
${SERVER}    localhost:5001
${DELAY}     500ms
${HOME_URL}  http://${SERVER}
${BROWSER}   chromium
${HEADLESS}  false

*** Keywords ***
Open And Configure Browser
    IF  $HEADLESS == 'true'
        New Browser  browser=${BROWSER}  headless=True
    ELSE
        New Browser  browser=${BROWSER}  headless=False  slowMo=${DELAY}
    END
    New Context
    New Page  about:blank
```

Olemme nyt lisänneet muuttujan _HEADLESS_ jolle arvon _true_ asettamalla voimme suorittaa testit [headless](https://en.wikipedia.org/wiki/Headless_browser)-selaimella, eli selaimella missä ei ole käyttöliittymää. Olemme myös määritelleet, että headlessina suoritettaessa operaatioiden väliin ei lisätä viivettä, jotta testit eivät hidastu tarpeettomasti.

> Huomaa, että ehto on kirjoitettu muodossa `$HEADLESS == 'true'` eikä `${HEADLESS} == 'true'`. Robot Framework tulkitsee `IF`-ehdon Python-lausekkeena, ja muoto `$HEADLESS` viittaa muuttujaan Python-muuttujan tapaan. Jos käyttäisimme muotoa `${HEADLESS}`, sijoittaisi Robot Framework muuttujan arvon lausekkeeseen sellaisenaan, ja lauseke olisi muotoa `false == 'true'`, mikä aiheuttaisi virheen.

Headless-suoritus tapahtuu seuraavasti:

```bash
robot --variable HEADLESS:true src/tests
```

<input type="checkbox"> Tee projektille GitHub Actionit määrittelevä konfiguraatio, joka näyttää seuraavalta:

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
      - uses: actions/checkout@v5
      - name: Install uv
        uses: astral-sh/setup-uv@v10.1.0
        with:
          python-version: '3.14'
      - name: Install dependencies
        run: uv sync
      - name: Install Playwright browser
        run: uv run rfbrowser install --with-deps chromium
      - name: Run robot tests
        run: bash run_robot_tests.sh
```

Ennen viimeisessä askeleessa tapahtuvaa testien suorittamista asennetaan testien käyttämä Chromium-selain. Valitsin `--with-deps` asentaa myös selaimen tarvitsemat käyttöjärjestelmän kirjastot. Koska testit suoritetaan GitHub Actionissa headless-tilassa, mitään näyttöä tai ajuria ei tarvita.

Jotta sovelluksen testit voidaan suorittaa GitHub Actionissa, tulee nämä askeleet suorittaa komentorivikomennoilla. 

Tähän tarkoitukseen, voimme käyttää seuraavaa bash-skriptiä `run_robot_tests.sh`, joka löytyy tehtäväpohjassa:

```bash
#!/bin/bash

echo "Running tests"

# käynnistetään Flask-palvelin taustalle
uv run python3 src/index.py &

echo "started Flask server"

# odotetaan, että palvelin on valmiina ottamaan vastaan pyyntöjä
while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:5001)" != "200" ]];
  do sleep 1;
done

echo "Flask server is ready"

# suoritetaan testit
uv run robot --variable HEADLESS:true src/tests

status=$?

# pysäytetään Flask-palvelin portissa 5001
kill $(lsof -t -i:5001)

exit $status
```

<input type="checkbox"> Varmista, että  `run_robot_tests.sh` on mukana projektissasi.

<input type="checkbox"> Pushaa tehtävän repositorio GitHubiin ja varmista, että GitHub Actions suorittaa testit onnistuneesti.

<input type="checkbox"> Laajenna vielä sovellusta siten, että siihen tulee mahdollisuus asettaa laskuri haluttuun arvoon.

Sovellus voi näyttää laajennuksen jälkeen seuraavalta:

![]({{ "/images/webcounter2.png" | relative_url }}){:height="240px" }

Kertaa tarvittaessa [täältä](/tehtavat3/#miten-browser-kirjasto-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit) se miten Browser-kirjasto löytää sivun elementit.

Ohjeita lomakkeen käsittelyyn kurssin [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/osa3/) materiaalissa. **HUOM:** lomakkeen datan vastaanottamisen jälkeen tulee tehdä `redirect`, samoin kuin nappien painallusten käsittelyssä, ks. [Post/Redirect/Get](https://en.wikipedia.org/wiki/Post/Redirect/Get).

<input type="checkbox"> Tee ominaisuudelle Robot-testit.

Jos lomakkeessa on käytössä syötekenttä, jonka attribuutti _name_ on arvoltaan _value_:

```html
<input type="text" name="value" />
```

Robot-testi voi kirjoittaa kenttään arvon 10 avainsanan [Fill Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Fill%20Text) avulla seuraavasti:

```
Fill Text  input[name="value"]  10
```

<input type="checkbox"> Korjaa vielä testejä siten, että jokainen testitiedosto aloitetaan tilanteesta, missä laskurin arvo on nolla.

### Robot Framework -testien debuggaaminen

Ennen kuin edetään seuraavaan tehtäväsarjaan, nostetaan esiin tärkeä teema.

On todennäköistä, että testien tekemisen aikana tulee ongelmia, joiden selvittäminen ei ole triviaalia. Epäonnistuneen testitapauksen kohdalla kannattaa miettiä mahdollisia syitä:

- Onko vika testissä, eli toimiiko sovellus kuten pitääkin? Voit esimerkiksi testata sovelluksen toimivuuden manuaalisesti. Jos näin on, keskity testin korjaamiseen
- Onko vika sovelluksessa, eli eikö manuaalisesti testattu sovellus toimi kuten pitäisi? Jos näin on, keskity tarkastelemaan ohjelman suoritusta epäonnistuneessa testitapauksessa

Jos testit eivät mene läpi, ottaa Browser-kirjasto kuvakaappauksen siitä tilanteesta, jossa testi havaitsee ongelman. Kuvakaappaus löytyy testien suorituksen jälkeen syntyvästä testiraportista tarkentamalla epäonnistuneen testin raporttiin. Tämän viikon tehtävää 7 tehdessäni törmäsin seuraavaan:

![]({{ "/images/errormsg.png" | relative_url }}){:height="350px" }

Tässä tapauksessa ongelma oli erittäin helppo korjata.

Tutustutaan seuraavaksi muihin tekniikoihin, jotka helpottavat ja nopeuttavat virheiden metsästystä.

#### Suoritettavien testien lukumäärän rajoittaminen

Kun kohtaat epäonnistuvan testitapauksen, kannattaa testien suorittamista nopeuttaa suorittamalla vain epäonnistunut testitapaus. Oletetaan, että olet tehnyt tehtävässä 4 laskurin arvon asettamiselle tiedostoon _set.robot_ seuraavan testin:

```robot
When counter is set to 10 the value is ten
    Go To  ${HOME_URL}
    Click  button >> text=Paina
    Fill Text  input[name="value"]  10
    Click  button >> text=Aseta
    Get Text  body  *=  nappia painettu 10 kertaa
```

Jos testi epäonnistuu, voimme suorittaa ainoastaan sen seuraavalla komennolla:

```
robot -t "When counter is set to 10 the value is ten" src/tests/set.robot
```

Komennolle `robot` annetaan siis `-t`-valitsimen avulla suoritettavan testitapauksen nimi ja tiedosto, jossa testitapaus sijaitsee.

#### Ohjelman suorituksen seuraaminen

Jos virheen löytäminen pelkän manuaalisen testauksen avulla ei tuota tulosta, kannattaa tutkia miten ohjelman suoritus etenee. Ensin on jollain tavalla rajattava, missä ongelma saattaisi olla. Vanha hyvä kikka eli komennolla _print_ tehtävät aputulostukset vievät jo pitkälle. 

Joissain tapauksissa saatetaan tarvita järeämpiä keinoja. Oletetaan, että edellisen esimerkin testi epäonnistuu, ja sivulla lukee _nappia painettu 11 kertaa_. Ongelma on luultavasti arvon asettavassa reitinkäsittelijässä. Voimme pysäyttää ohjelman suorituksen halutulle riville Pythonin sisäänrakennetun funktion `breakpoint` avulla, joka käynnistää [pdb](https://docs.python.org/3/library/pdb.html)-debuggerin:

```python
from flask import Flask, redirect, render_template, request
from counter import Counter

app = Flask(__name__)
cnt = Counter()

# ...

@app.route("/set", methods=["POST"])
def set_value():
    value = int(request.form["value"])
    # pysäytetään ohjelman suoritus tälle riville
    breakpoint()
    cnt.increment(value)
    return redirect("/")
```

Käynnistä nyt sovellus uudelleen, jotta muutokset koodiin astuvat voimaan. Suorita sen jälkeen pelkästään epäonnistuva testitapaus edellä mainitun ohjeen mukaisesti. Kun testin painallus saa aikaan POST-pyynnön reitille _/set_, koodin suoritus pysähtyy ja **sovellusta suorittavaan** terminaaliin ilmestyy seuraavanlainen komentorivi:

```
> /polku/webcounter/src/app.py(20)set_value()
-> breakpoint()
(Pdb)
```

Kyseessä on interaktiivinen komentorivi, jossa voimme suorittaa koodia. Nuoli (`->`) osoittaa riviä, jolla suoritus on. Katsotaan, mitkä ovat muuttujan `value` ja laskurin arvot:

```
(Pdb) value
10
(Pdb) cnt.value
1
```

Annamme siis komentoriville syötteen ja painamme Enter-painiketta. Lomakkeelta tullut arvo on siis oikein, ja laskurin arvo on testin painalluksen jälkeen 1, kuten pitääkin. Edetään koodissa rivi kerrallaan komennolla `next`:

```
(Pdb) next
> /polku/webcounter/src/app.py(21)set_value()
-> cnt.increment(value)
(Pdb) next
> /polku/webcounter/src/app.py(22)set_value()
-> return redirect("/")
(Pdb) cnt.value
11
```

Vika löytyi: metodi `increment` kasvattaa laskurin arvoa annetulla määrällä, vaikka arvo pitäisi asettaa.

Tärkeimmät pdb:n komennot ovat:

| komento | toiminto |
| ------- | -------- |
| `next` (tai `n`) | suorittaa seuraavan rivin |
| `step` (tai `s`) | suorittaa seuraavan rivin ja menee funktiokutsun sisään |
| `list` (tai `l`) | näyttää koodia nykyisen rivin ympäriltä |
| `continue` (tai `c`) | jatkaa suoritusta seuraavaan pysähdyskohtaan asti |

Muuttujan tai lausekkeen arvon saa näkyviin kirjoittamalla sen komentoriville. Jos muuttujan nimi on sama kuin jokin pdb:n komennoista, esim. `n` tai `c`, käytä muotoa `p n`.

Kun olet lopettanut debuggaamisen, anna komento `continue` ja poista koodista `breakpoint`-kutsu.

> **Huom:** Browser-kirjasto odottaa esim. avainsanan `Get Text` ehdon toteutumista oletusarvoisesti korkeintaan 10 sekuntia. Jos debuggaat tätä kauemmin, testi epäonnistuu aikakatkaisuun. Tästä ei ole haittaa, sillä debuggauksen tarkoituksena on selvittää, mitä sovelluksessa tapahtuu. Suorita testi uudelleen, kun olet korjannut vian.

### 5. WebLogin, osa 1

Tarkastellaan nyt rakenteeltaan hieman monimutkaisempaa Web-sovellusta, joka löytyy [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko3/login_. 

<input type="checkbox"> Hae projekti ja kopioi se **palautusrepositorioosi**, hakemiston _viikko3_ sisälle.

<input type="checkbox"> Asenna projektin riippuvuudet komennolla `uv sync` ja käynnistä se virtuaaliympäristössä komennolla `python3 src/index.py`.

<input type="checkbox"> Asenna myös testien käyttämä Chromium-selain komennolla `uv run rfbrowser install chromium`.

- Kyseessä on uusi projekti, jolla on oma virtuaaliympäristönsä. Tehtävässä 2 asennettu selain ei siis ole tämän projektin käytettävissä.

Sovelluksen käynnistymisen jälkeen pääset käyttämään sitä avaamalla selaimella osoitteen <http://localhost:5001>. Sovellus siis toimii _localhostilla_ eli paikallisella koneellasi _portissa_ 5001.

Sovellus on hyvin yksinkertainen, se tarjoaa vain kaksi toimintoa:
- käyttäjä voi rekisteröityä, eli luoda järjestelmään käyttäjätunnuksen
- rekisteröitynyt käyttäjä voi kirjautua järjestelmään

![]({{ "/images/weblogin1.png" | relative_url }}){:height="300px" }

Tutustutaan seuraavaksi sovelluksen rakenteeseen. Sovellus noudattaa ns. kerrosarkkitehtuuria eli se on rakenteeltaan samanlainen kuin kurssin Ohjelmistotekniikka [referenssisovellus](https://github.com/ohjelmistotekniikka-hy/python-todo-app/blob/master/dokumentaatio/arkkitehtuuri.md).

Sovelluksen rakenne ja testien suhde siihen näyttää seuraavalta:

![]({{ "/images/lh3-weblogin-rakenne.svg" | relative_url }})

Sovelluksen käyttöliittymä on toteutettu edellisten tehtävien sovelluksen tapaan tiedostoon `app.py` sekä hakemistoon `templates`. Ohjelman käyttäjien hallintaan liittyvä _sovelluslogiikka_ on sijoitettu omaan luokkaansa `UserService`.

Sovelluksen käytössä oleva versio ei tallenna käyttäjien tietoja varsinaisesti mihinkän pysyvämpään paikkaan, kuten tietokantaan tai tiedostoon, käyttäjien tiedot pidetään ainoastaan keskusmuistissa.

Eräs huomionarvoinen seikka on se, että `UserService`-olio ei tallenna muistiin suoraan `User`-oliota vaan epäsuorasti `UserRepository`-luokan olion kautta. Mistä on kysymys?
`UserRepository`-luokka abstrahoi eli piilottaa käyttäjien hallinnointiin liittyvän logiikan sovelluksen muilta olioilta.

#### Suunnittelumalli Repository

Tietoon kohdistuvien operaatioiden eriyttämiseen sovelluslogiikasta on olemassa useita _suunnittelumalleja_, kuten [Data Access Object](https://en.wikipedia.org/wiki/Data_access_object), [Active Record](https://en.wikipedia.org/wiki/Active_record_pattern) ja [Repository](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design). Kaikkien näiden suunnittelumallien perimmäinen idea on siinä, että sovelluslogiikalta tulee piilottaa tietoon kohdistuvien operaatioiden yksityiskohdat.

Esimerkiksi repositorio-suunnittelumallissa tämä tarkoittaa sitä, että tietokohteeseen kohdistetaan operaatioita erilaisten funktioiden tai metodien, kuten `find_all`, `create` ja `delete` kautta. Tämän abstraktion avulla sovelluslogiikka ei ole tietoinen operaatioiden yksityiskohdista, jolloin esimerkiksi tallennustapaa voidaan helposti muuttaa.

Sovellukseen on määritelty repositorio-suunnittelumallin mukainen luokka `UserRepository`. Luokka tallentaa sovelluksen käyttäjiä koneen muistiin. Jos päättäisimme tallentaa käyttäjät esimerkiksi PostgreSQL-tietokantaan, ei tämä vaatisi muutoksia luokan ulkopuolelle.

Seuraavassa vielä lyhyt katsaus sovelluksen käyttöliittymän, eli reitin käsittelijöiden sekä näkymien generoinnin toiminnasta.

Polulle "/" eli sovelluksen juureen, osoitteeseen <http://localhost:5001> tulevat pyynnöt käsittelee seuraava koodinpätkä:

```python
@app.route("/")
def render_home():
    return render_template("index.html")
```

Koodi muodostaa [Jinja](https://jinja.palletsprojects.com/)-kirjaston avulla _src/templates/index.html_-tiedostosta löytyvästä sivupohjasta HTML-muotoisen sivun ja palauttaa sen käyttäjän selaimelle.

Sivupohja näyttää seuraavalta:

```html
{% raw %}{% extends "layout.html" %} {% block title %} Ohtu Application {%
endblock %} {% block body %}
<h1>Ohtu Application</h1>

<ul>
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register new user</a></li>
</ul>
{% endblock %}{% endraw %}
```

Kaikki _GET_-alkuiset määrittelyt ovat samanlaisia, ne ainoastaan muodostavat HTML-sivun (joiden sisällön määrittelevät sivupohjat sijaitsevat hakemistossa _src/templates_) ja palauttavat sivun selaimelle.

_POST_-alkuiset määrittelyt ovat monimutkaisempia, ne käsittelevät lomakkeiden avulla lähetettyä tietoa. Esimerkiksi käyttäjän kirjautumisyrityksen käsittelee seuraava koodi:

```python
@app.route("/login", methods=["POST"])
def handle_login():
    username = request.form.get("username")
    password = request.form.get("password")

    try:
        user_service.check_credentials(username, password)
        return redirect_to_ohtu()
    except Exception as error:
        flash(str(error))
        return redirect_to_login()
```

Koodi pääsee käsiksi käyttäjän _lomakkeen_ avulla lähettämiin tietoihin _request_-olion kautta:

```python
username = request.form.get("username")
password = request.form.get("password")
```

Koodi tarkistaa käyttäjätunnuksen ja salasanan oikeellisuuden kutsumalla `UserService`-olion metodia `check_credentials`. Jos kirjautuminen onnistuu, ohjataan käyttäjä "/ohtu"-polun sivulle. Jos se epäonnistuu, `check_credentials`-metodi aiheuttaa poikkeuksen, jonka käsittelemme `except`-lohkossa ohjaamalla käyttäjän "/login"-polun sivulle ja näyttämällä siellä virheilmoituksena virheen sisältämän viestin.

<input type="checkbox"> Tutustu nyt sovelluksen rakenteeseen ja toiminnallisuuteen.

#### Tutustuminen testeihin

Tutustutaan aluksi testitapauksien yhteisiin asetuksiin ja avainsanoihin, jotka löytyvät `src/tests/resource.robot`-tiedostosta. Tiedoston sisältö on seuraava:

```robot
*** Settings ***
Library  Browser
Library  ../AppLibrary.py

*** Variables ***
${SERVER}        localhost:5001
${DELAY}         500ms
${HOME_URL}      http://${SERVER}
${LOGIN_URL}     http://${SERVER}/login
${REGISTER_URL}  http://${SERVER}/register
${BROWSER}       chromium
${HEADLESS}      false

*** Keywords ***
Open And Configure Browser
    IF  $HEADLESS == 'true'
        New Browser  browser=${BROWSER}  headless=True
    ELSE
        New Browser  browser=${BROWSER}  headless=False  slowMo=${DELAY}
    END
    New Context
    New Page  about:blank

Login Page Should Be Open
    Get Title  ==  Login

Main Page Should Be Open
    Get Title  ==  Ohtu Application main page

Go To Login Page
    Go To  ${LOGIN_URL}

```

Tiedoston sisältö on samankaltainen kuin edellisissä tehtävissä. Tällä kertaa
`*** Settings ***` osiossa on otettu Browser-kirjaston lisäksi käyttöön myös projektin oma `AppLibrary.py`-kirjasto, joka määrittelee kaksi projektissa tarvittavaa avainsanaa, `Reset Application` ja `Create User`.

`*** Keywords ***`-osiossa on määritelty myös muutama yleiskäyttöinen avainsana:
- `Login Page Should Be Open` ja `Main Page Should Be Open`, joiden tarkoitus on tarkistaa, että käyttäjä on oikealla sivulla. Ne käyttävät [Get Title](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Title) -avainsanaa, joka tarkistaa HTML-sivun [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title)-elementin arvon. Title-elementin arvon sijaan voisimme esimerkiksi tarkistaa, että sivulta löytyy tietty teksti käyttämällä [Get Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Text) -avainsanaa
- `Go To Login Page` -avainsana käyttää [Go To](https://marketsquare.github.io/robotframework-browser/Browser.html#Go%20To) -avainsanaa avatakseen selaimessa kirjautumis-sivun, jonka URL on tallennettu `LOGIN_URL`-muuttujaan

Tutustutaan seuraavaksi itse testitapauksiin avaamalla tiedosto `src/tests/login.robot`. Tiedoston `*** Settings ***`-osio on seuraava:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application Create User And Go To Login Page
```

Edellisten tehtävien testien lisäksi nyt on käytössä myös `Test Setup`, joka suorittaa avainsanan `Reset Application Create User And Go To Login Page` ennen *jokaista* testiä.

Tiedoston `*** Keywords ***` osiossa on testitapausten käyttämiä avainsanoja:

- `Login Should Succeed` -avainsana tarkastaa, että käyttäjä on siirtynyt oikealla sivulle onnistuneen kirjautumisen jälkeen
- `Login Should Fail With Message` -avainsana tarkastaa, että käyttäjä on kirjautumissivulla ja että sivulta löytyy tietty virheviesti. Tarkastuksessa käytetään [Get Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Text) -avainsanaa operaattorilla `*=`, joka tarkistaa, että sivulta löytyy haluttu teksti
- `Set Username`- ja `Set Password` -avainsanat syöttävät annetut arvot tiettyihin kenttiin käyttämällä [Fill Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Fill%20Text) - ja [Fill Secret](https://marketsquare.github.io/robotframework-browser/Browser.html#Fill%20Secret) -avainsanoja. Kentät löydetään niiden `id`-attribuutin perusteella selektoreilla `id=username` ja `id=password`. Fill Secret toimii kuten Fill Text, mutta se ei kirjoita syötettyä arvoa testien lokiin. Tämän takia arvo annetaan sille muodossa `$password` eikä `${password}`
- ` Reset Application Create User And Go To Login Page` -avainsana tyhjentää sovelluksen "tietokannan" eli sinne luodut käyttäjät, luo sovellukseen uuden käyttäjän ja avaa kirjautumissivun

Kertaa tarvittaessa [täältä](/tehtavat3/#miten-browser-kirjasto-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit) se miten Browser-kirjasto löytää sivun elementit.

<input type="checkbox"> Tee nyt uusi tiedosto `home.robot` ja lisää sinne seuraavat testitapaukset:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application And Go To Starting Page

*** Test Cases ***
Click Login Link
    Click  text=Login
    Login Page Should Be Open

Click Register Link
    Click  text=Register new user
    Register Page Should Be Open

*** Keywords ***

Reset Application And Go To Starting Page
  Reset Application
  Go To Starting Page
```

Testitapausten tulee siis testata, että "Login"- ja "Register new user"-linkkien painaminen avaa oikean sivun. Linkkien klikkaus tapahtuu käyttämällä valmiiksi määriteltyä [Click](https://marketsquare.github.io/robotframework-browser/Browser.html#Click) -avainsanaa, jolle linkki yksilöidään sen tekstin perusteella selektorilla `text=...`. 

<input type="checkbox"> Suorita testit

> Muista, että selaimen tulee olla asennettuna ja sovelluksen on oltava käynnissä kun suoritat testit, ks. [tämä ohje](/browser_asennusohjeet/#mahdollisia-ongelmia)

Seurauksena on todennäköisesti virheilmoitus kertoo mitä avainsanoja on määrittelemättä:

```
Click Register Link                                                   | FAIL |
Setup failed:
No keyword with name 'Go To Starting Page' found.
```

<input type="checkbox"> Toteuta testin käyttämät määrittelemättömät avainsanat.

**HUOM:** ideana on, että avainsana `Go To Starting Page` vie sovelluksen polkuun / eli aloitussivulle.

### 6. WebLogin, osa 2

Jatketaan kirjautumiseen liittyvien hyväksymistestien toteuttamista. Katsotaan sitä ennen pikaisesti, miltä AppLibrary-kirjaston toteutus näyttää. Kirjaston määrittelevä luokka `AppLibrary` löytyy tiedostosta _src/AppLibrary.py_, jonka sisältö on seuraava:

```python
import requests


class AppLibrary:
    def __init__(self):
        self._base_url = "http://localhost:5001"

    def reset_application(self):
        requests.post(f"{self._base_url}/tests/reset")

    def create_user(self, username, password):
        data = {
            "username": username,
            "password": password,
            "password_confirmation": password
        }

        requests.post(f"{self._base_url}/register", data=data)
```

On oleellista, että testit alkavat aina samasta tilasta, erityisesti että sovelluksen tietokannan tila on testien alussa hyvin tunnettu. 

Metodin `reset_application` määrittelemä avainsana `Reset Application` lähettää _POST_-tyyppisen pyynnön sovelluksen polkuun "/tests/reset". Pyynnön käsittelee seuraava funktio:

```python
@app.route("/tests/reset", methods=["POST"])
def reset_tests():
    user_repository.delete_all()
    return "Reset"
```

Funktio poistaa kaikki sovelluksen käyttäjät ja näin nollaa sovelluksen tilan. Kyseessä on siis ainoastaan testien käyttöön toteutettu tapa nollata tietokanta.

Metodi `create_user` lähettää samankaltaisesti _POST_-tyyppisen pyynnön sovelluksen polkuun "/register". Pyynnön käsittelevä funktio luo uuden käyttäjän, jos se on validi:

```python
@app.route("/register", methods=["POST"])
def handle_register():
    username = request.form.get("username")
    password = request.form.get("password")
    password_confirmation = request.form.get("password_confirmation")

    try:
        user_service.create_user(username, password, password_confirmation)
        return redirect_to_welcome()
    except Exception as error:
        flash(str(error))
        return redirect_to_register()
```


<input type="checkbox"> Lisää User storylle _User can log in with valid username/password-combination_ seuraava testitapaus `login.robot`-tiedostoon:

```robot
Login With Nonexistent Username
# ...
```

### 7. WebLogin, osa 3

<input type="checkbox"> Tee User storylle _A new user account can be created if a proper unused username and a proper password are given_ seuraavat testitapaukset uuteen tiedostoon `register.robot`:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application Create User And Go To Register Page

*** Test Cases ***

Register With Valid Username And Password
# ...

Register With Too Short Username And Valid Password
# ...

Register With Valid Username And Too Short Password
# ...

Register With Username That Is Already In Use
#

*** Keywords ***
#...
```

Käyttäjätunnus ja salasana noudattavat seuraavia sääntöjä:

- Käyttäjätunnuksen on oltava vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä
- Salasanan on oltava pituudeltaan vähintään 8 merkkiä

Salasanaan liittyy vielä muita vaatimuksia, mutta ne toteutetaan vasta tehtävässä 8.

<input type="checkbox"> Laajenna koodiasi siten, että testit menevät läpi. 

Oikea paikka koodiin tuleville muutoksille on <i>src/services/user_service.py</i>-tiedoston `UserService`-luokan metodi `validate`.

**Pro tips**:
- Etene yksi testitapaus ja sen toteuttama koodi kerrallaan
- Kertaa tarvittaessa [täältä](/tehtavat3/#miten-browser-kirjasto-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit) se miten Browser-kirjasto löytää sivun elementit
- Ota mallia kirjautumisen testeistä!
- Muista [tämä](/tehtavat3/#robot-framework--testien-debuggaaminen), ja sieltä erityisesti [tämä](/tehtavat3/#ohjelman-suorituksen-seuraaminen)

#### Mihin avainsanat kannattaa sijoittaa?

Rekisteröitymisen testejä tehdessä huomaat pian tarvitsevasi samoja avainsanoja kuin kirjautumisen testeissä, esim. avainsanoja `Set Username` ja `Set Password`, jotka on määritelty tiedostossa `login.robot`. Avainsanat voi sijoittaa joko testitiedoston `*** Keywords ***` -osioon tai yhteiseen tiedostoon `resource.robot`. Nyrkkisääntö on seuraava:

- **Testitiedostoon** kuuluvat avainsanat, joita käytetään vain sen tiedoston testeissä. Esim. `Login Should Succeed` ja `Login Should Fail With Message` liittyvät vain kirjautumiseen, joten ne sopivat tiedostoon `login.robot`. Samoin rekisteröitymisen tarkistukset, kuten `Register Should Succeed`, sopivat tiedostoon `register.robot`.
- **Tiedostoon `resource.robot`** kuuluvat avainsanat, joita käytetään useammassa testitiedostossa. Esimerkkejä ovat selaimen alustava `Open And Configure Browser`, sivulle siirtyvät avainsanat, kuten `Go To Login Page` ja `Go To Register Page`, sekä sivun tarkistavat avainsanat, kuten `Login Page Should Be Open` ja `Register Page Should Be Open`. Myös kaikkien testien yhteiset muuttujat, kuten sivujen osoitteet, kuuluvat tänne.

Kun huomaat tarvitsevasi testitiedostossa avainsanaa, joka on jo määritelty toisessa testitiedostossa, **älä kopioi sitä**, vaan siirrä se tiedostoon `resource.robot`. Esim. jos `register.robot` tarvitsee avainsanoja `Set Username` ja `Set Password`, siirrä ne tiedostosta `login.robot` tiedostoon `resource.robot`. Kopioidut avainsanat erkaantuvat ajan myötä toisistaan, ja muutokset joudutaan tekemään moneen paikkaan.

Jos samanniminen avainsana on määritelty sekä testitiedostossa että tiedostossa `resource.robot`, Robot Framework käyttää testitiedoston omaa määrittelyä. Tämä voi aiheuttaa hämmentäviä tilanteita, joten kun siirrät avainsanan tiedostoon `resource.robot`, muista poistaa se alkuperäisestä paikasta.

### 8. Agentti ja hyväksymistestit [tekoäly]

Jatketaan viikon 2 [tehtävässä 9](/tehtavat2/#9-ensikosketus-copilotiin-tekoäly) alkanutta [tekoäly]-tehtävien sarjaa.

Kertaa tarvittaessa viime viikolla lukemasi materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) luvut [Mikä kielimalli on](/genai/#mikä-kielimalli-on) ja [AI-avusteisen ohjelmoinnin muodot](/genai/#ai-avusteisen-ohjelmoinnin-muodot). Lue ennen tämän tehtävän tekemistä myös luvut [Agenttinen koodaus](/genai/#agenttinen-koodaus), [Kontekstin hallinta](/genai/#kontekstin-hallinta) ja [Vaatimukset promptina](/genai/#vaatimukset-promptina).

Tehtävässä käytetään VS Coden GitHub Copilotia. Voit toki tehdä tehtävän myös jollain muulla AI-avusteisella koodaustyökalulla.

Jatketaan WebLogin-sovelluksen parissa. Varmista, että tehtävien 5-7 muutokset on commitoitu ennen kuin annat agentin koskea koodiin.

<input type="checkbox"> Avaa VS Codessa hakemisto _viikko3/login_ omana workspacenaan (esim. komennolla `code .` hakemistossa _viikko3/login_), näin agentti keskittyy vain tähän projektiin

<input type="checkbox"> Avaa Copilotin Chat-näkymä ja valitse agentiksi _Agent_

<input type="checkbox"> Generoi projektille ohjetiedosto kirjoittamalla chattiin `/init`

Agentti tutkii projektin ja luo tiedoston _.github/copilot-instructions.md_ tai _AGENTS.md_.

<input type="checkbox"> Lue ohjetiedosto huolellisesti ja korjaa tai täydennä sitä tarpeen mukaan. Tiedostossa tulee kertoa ainakin seuraavat asiat:

- projekti on uv-projekti, ja komennot suoritetaan muodossa `uv run ...`
- miten sovellus käynnistetään ja missä portissa se toimii
- miten Robot Framework -testit suoritetaan (`uv run robot src/tests`) ja että sovelluksen on oltava käynnissä testien aikana
- missä käyttäjätunnuksen ja salasanan validointi tapahtuu

Pidä ohjetiedosto tiiviinä. Se liitetään jokaiseen agentille annettavaan pyyntöön.

<input type="checkbox"> Commitoi ohjetiedosto

Rekisteröitymiseen liittyy vielä kaksi vaatimusta, joita tehtävässä 7 ei toteutettu:

```
User story: Salasana ei saa koostua pelkästään kirjaimista

Hyväksymiskriteerit:
- salasana "kalle123" hyväksytään
- salasana "kalle#abc" hyväksytään
- salasana "kallekalle" hylätään ja käyttäjälle näytetään virheilmoitus
- salasana "KalleKalle" hylätään ja käyttäjälle näytetään virheilmoitus
```

```
User story: Salasanan ja salasanan vahvistuksen on oltava samat

Hyväksymiskriteerit:
- jos salasana ja sen vahvistus ovat samat, rekisteröityminen onnistuu
- jos salasana ja sen vahvistus eroavat, rekisteröityminen epäonnistuu ja käyttäjälle näytetään virheilmoitus
```

Tehtävän 7 vaatimus salasanan vähimmäispituudesta on edelleen voimassa.

<input type="checkbox"> Toteuta storyt agentin avulla yksi kerrallaan.

Pyydä agenttia kirjoittamaan **ensin** storyn hyväksymiskriteerit Robot Framework -testeiksi tiedostoon _register.robot_ ja varmistamaan, että testit eivät mene läpi. Vasta tämän jälkeen agentin tulee toteuttaa toiminnallisuus niin, että testit menevät läpi

Anna agentin suorittaa sovellus ja testit itse. Lue jokainen komento ennen kuin hyväksyt sen suoritettavaksi.

<input type="checkbox"> Kun agentti on valmis, suorita kaikki testit vielä itse ja varmista, että ne menevät läpi

<input type="checkbox"> Käy agentin tekemä muutos läpi esim. komennolla `git diff`. Teki agentti muutoksia sellaisiin kohtiin, joihin sitä ei pyydetty koskemaan? Poista tai pyydä agenttia poistamaan tarpeeton koodi

Miten voit olla varma, että agentin kirjoittamat testit oikeasti testaavat uutta toiminnallisuutta?

<input type="checkbox"> Rikko toteutus **itse** tarkoituksella ainakin kahdella eri tavalla, esim. hyväksy pelkistä kirjaimista koostuva salasana tai poista salasanan vahvistuksen tarkistus, ja varmista jokaisen rikkomisen jälkeen, että ainakin yksi testi hajoaa

<input type="checkbox"> Palauta toimiva toteutus ja commitoi muutokset

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko3_ talletettavaan tiedostoon _ai.md_

Kerro raportissa
- Minkälaisen ohjetiedoston agentti generoi, ja mitä jouduit korjaamaan?
- Noudattiko agentti pyyntöä kirjoittaa testit ennen toteutusta?
- Kuinka paljon jouduit ohjaamaan agenttia matkan varrella?
- Hajosivatko testit, kun rikoit toteutuksen tarkoituksella?
- Mitä uutta opit?

<input type="checkbox"> Lue tehtävän tekemisen jälkeen vielä AI-materiaalin luku [Vastuu ja osaaminen](/genai/#vastuu-ja-osaaminen)

### 9. Retrospektiivitekniikat

Wikipedian mukaan retrospektiivi on _"a meeting held by a project team at the end of a project or process (often after an iteration) to discuss what was successful about the project or time period covered by that retrospective, what could be improved, and how to incorporate the successes and improvements in future iterations or projects."_

<input type="checkbox"> Tutustu [täällä](https://retrospectivewiki.org/index.php?title=Retrospective_Plans) esiteltyihin retrospektiivitekniikoihin [Start, Stop, Continue, More of, Less of Wheel](https://retrospectivewiki.org/index.php?title=Start,_Stop,_Continue,_More_of,_Less_of_Wheel) ja [Glad, Sad, Mad](https://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad).

<input type="checkbox"> Tee aiheesta noin 0.25 sivun (eli noin 125 sanaa) tiivistelmä palautusreporitorion hakemistoon _viikko3_ sijoitettavaan tiedostoon _retro.md_.

Pidä huoli siitä, että miniprojektitiimisi pitää ensimmäisen sprintin lopussa jotain tekniikkaa noudattavan retrospektiivin!

### Tehtävien palautus

Laita palautusrepositoriosi tiedostoon README.md linkki tehtäviä 2-4 varten tehtyyn webcounter-repositoroosi.

{% include submission_instructions.md %}
