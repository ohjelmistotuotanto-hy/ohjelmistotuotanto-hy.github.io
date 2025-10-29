---
layout: page
title: Viikko 3
inheader: no
permalink: /tehtavat3/
---

{% include laskari_info.md part=3 %}

Tehtävät liittyvät storyjen hyväksymistestauksen automatisointiin tarkoitetun Robot Frameworkin.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

Tehtävät 1 ja 5-8 palautetaan  jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**,  tehtävän hakemiston _viikko3_ sisälle. Tehtävät 2-4 palautetaan omaan, uuteen repositorioon.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Tutustuminen Robot Frameworkkiin

Lue [täällä](/robot_framework) oleva Robot Framework -johdanto ja tee siihen liittyvät tehtävät.

### 2. Web-laskuri

**HUOM:** jos käytät Dockeria, lue [tämä](/docker#docker-ja-robot-testit)!

Siirrytään seuraavaksi Web-sovellusten maailmaan. Oletuksena on, että hallitset ainakin jossain määrin kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) (vanhalta nimeltään _Aineopintojen harjoitustyö: Tietokantasovellus_) tutun [Flask](https://flask.palletsprojects.com/en/3.0.x/)-kirjaston käytön.

Tarkastellaan edellisestä tehtävästä tutun toiminnallisuuden tarjoamaa esimerkkiprojektia, joka löytyy kurssirepositorion alihakemistosta viikko3/webcounter.

**Tee tätä ja kahta seuraavaa tehtävää varten kokonaan uusi repositorio**, nimeltään esimerkiksi _webcounter_, ja laita muiden tehtävien palautukseen käyttämäsi *palautusrepositorion* tiedostoon README.md linkki tätä tehtävää varten tehtyyn repositorioon.

Asenna projektin riippuvuudet komennolla `poetry install` ja käynnistä se virtuaaliympäristössä komennolla `python3 src/index.py`. Sovelluksen käynnistymisen jälkeen pääset käyttämään sitä avaamalla selaimella osoitteen <http://localhost:5001>:

![]({{ "/images/laskuri1.png" | absolute_url }}){:height="350px" }

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

Sovelluksen HTML-sivupohjat on määritelty hakemistossa _templates_. Sovelluksen ainoa näkymä näyttää muuttujaan _cnt_ talletetun laskuriolion arvon. Näkymä sisältää myös kaksi nappia, joista "Paina" aiheuttaa POST-pyynnön reitille _increment_. Reitin käsittelijä kasvattaa laskurin arvoa, ja _uudelleenohjaa_ sovelluksen takaisin juuriosoitteeseen. Nappi "Nollaa" ei tee tällä hetkellä mitään.

Sovellukselle on tehty pari testiä Robot Frameworkilla. Testit suoritetaan normaaliin tapaan komennolla _robot src/tests_ mutta ennen testien suorittamista joudumme tekemään muutaman ekstratempun.

Testeissä on käytössä [Selenium WebDriver](http://docs.seleniumhq.org/projects/webdriver/) -kirjasto, jonka avulla on mahdollista simuloida selaimen käyttöä koodista käsin. Seleniumin käyttö Robot Framework -testeissä tapahtuu [SeleniumLibrary](https://robotframework.org/SeleniumLibrary/)-kirjaston avulla.

Jotta selainta käyttävien testien suorittamien on mahdollista, täytyy lisäksi asentaa halutun selaimen ajuri. Projektin testit käyttävät Chrome- tai Chromium-selainta, jolla testejä voi suorittaa käyttämällä [ChromeDriver](https://chromedriver.chromium.org/)-ajuria, tai Firefoxia jolloin testit voi suorittaa [GeckoDriverillä](https://github.com/mozilla/geckodriver).

**Ennen kuin siirryt testien pariin, asenna ChromeDriver** tai **GeckoDriver** seuraamalla [tätä](../chromedriver_asennusohjeet) ohjetta. Fuksiläppärillä ChromeDriver saattaa olla jo asennettuna. Voit tarkistaa tämän komennolla ```chromedriver --version```

Kun ChromeDriver tai GeckoDriver on asennettu onnistuneesti **käynnistä web-sovellus edellisen tehtävän tapaan komentoriviltä.** Varmista selaimella, että sovellus on päällä. Varmista, että sovelluksen laskurin arvo on 0. Jos se on jotain muuta, uudelleenkäynnistä sovellus.

**Avaa uusi terminaali-ikkuna** ja suorita projektin testit virtuaaliympäristössä komennolla `robot src/tests` jos asensit ChromeDriverin tai `robot --variable BROWSER:firefox src/tests` jos asensit GeckoDriverin.

Komennon pitäisi suorittaa onnistuneesti kaksi testitapausta, `At start the counter is zero` ja `When button pressed twice the counter is two`. Testitapausten suoritusta voi seurata aukeavasta selaimen ikkunasta.

#### Ongelmia?

[Tämä ohje](/chromedriver_asennusohjeet/#mahdollisia-ongelmia) saattaa auttaa.

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
    Title Should Be  Laskuri
    Page Should Contain  nappia painettu 0 kertaa

When button pressed twice the counter is two
    Go To  ${HOME_URL}
    Click Button  Paina
    Click Button  Paina
    Page Should Contain  nappia painettu 2 kertaa
```

Jos unohdetaan alun osio _Settings_, on testien toiminnallisuus aika ilmeinen. Käytössä olevat avainsanat [Go To](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Go%20To), [Click Button](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Click%20Button) ja [Page Should Contain](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain) ovat SeleniumLibraryn tarjoamia valmiita avainsanoja.

#### Miten Selenium löytää sivun elementit?

Testitapauksissa ollaan interaktiossa erilaisten HTML-elementtien, kuten tekstikenttien ja painikkeiden kanssa. Selenium yrittää löytää elementin annettujen argumenttien perusteella käyttäen [tiettyä strategiaa](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Locating%20elements). Esimerkiksi <code>Click Button &nbsp;foo</code> löytää seuraavat [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)-elementit:

```html
<button id="foo">Nappi</button>
<button name="foo">Nappi</button>
<button>foo</button>
```

Selenium siis etsii `button`-elementin, jonka `id`-attribuutin arvo, `name`-attribuutin arvo, tai sisältö vastaa annettua argumenttia. Kutsu <code>Click Button &nbsp;Paina</code> löytää siis seuraavan _src/templates/index.html_-tiedostossa määritellyn painikkeen:

```html
<button type="submit">
  Paina
</button>
```

#### Tutustuminen testeihin jatkuu

Osassa `*** Settings ***` on useita huomionarvoisia seikkoja, rivi

```robot
Resource  resource.robot
```

kertoo, että testin tulee ottaa käyttöön tiedostossa `resource.robot` tehdyt määritelmät (eli resurssit).

Tiedoston  `resource.robot` sisältö on seuraava:

```robot
*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${DELAY}     0.5 seconds
${HOME_URL}  http://localhost:5001
${BROWSER}   chrome

*** Keywords ***
Open And Configure Browser
    Set Selenium Speed  ${DELAY}
    Open Browser  browser=${BROWSER}  options=${options}
```

`*** Settings ***` osiossa otetaan käyttöön edellä mainittu SeleniumLibrary-kirjasto, joka siis tuo mukaan lukuisia uusia avainsanoja, joista kaikki on dokumentoitu [täällä](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html).

Tiedostossa on myös osio `*** Variables ***` missä on mahdollista määritellä muuttujia, jotka ovat kaikkien osion avainsanojen käytössä. Huomaa, että määritellyt muuttujat kirjoitetaan isoilla kirjaimilla, toisin kuin argumentit. Muuttujia kannattaa suosia aina kovakoodattujen arvojen sijaan.

`*** Keywords ***`-osiossa on määritellään avainsana `Open And Configure Browser` joka alustaa selaimen testejä varten:

- Avainsana käynnistää selaimen käyttämällä SeleniumLibrary-kirjaston [Open Browser](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Open%20Browser) -avainsanaa antaen `browser`-argumentin arvoksi käytetyn selaimen, joka on oletusarvoisesti  _chrome_.
- Tämän lisäksi avainsana asettaa viiveeksi Selenium-komentojen välille `DELAY`-muuttujan arvon käyttämällä [Set Selenium Speed](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Set%20Selenium%20Speed) -avainsanaa. Pidempi viive helpottaa testien suorituksen seuraamista. 
- Selaimen ikkunan koon voi tarvittaessa asettaa haluamakseen avainsanalla [Set Window Size](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Set%20Window%20Size), nyt käytössä on oletusarvoinen selaimen koko.

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
- `Suite Teardown` -asetuksen avulla voimme suorittaa avainsanan tiedoston viimeisen testitapauksen jälkeen, tapauksessamme suljemme selaimen avainsanalla [Close Browser](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Close%20Browser)

Huomaa, että toimiakseen testit edellyttävät, että sovellus on alussa tilassa missä laskurin arvo on 0. Uudelleenkäynnistä siis sovellus aina ennen testien suorittamista!

Kun olet suorittanut testit onnistuneesti ja tutustunut sovellukseen sekä testeihin on tämä tehtävä tehty.

### 3. Weblaskurin nollaus

Laajenna sovellusta siten, että nappi "Nollaa" nollaa laskurin arvon.

Tee Robot-testi, joka varmistaa, että nollaaminen toimii. Tee testi tiedostoon `reset.robot`, testin näyttää suunnilleen seuraavalta

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

Selenium WebDriveria käyttävät Robot-testit on melko helppo suorittaa myös GitHub Actioneissa. 

Konfiguraatioihin on tehtävä muutama muutos. Laajennetaan tiedostoa `resource.robot` seuraavasti:

```robot
*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${SERVER}    localhost:5001
${DELAY}     0.5 seconds
${HOME_URL}  http://${SERVER}
${BROWSER}   chrome
${HEADLESS}  false

*** Keywords ***
Open And Configure Browser
    IF  $BROWSER == 'chrome'
        ${options}  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys
        Call Method  ${options}  add_argument  --incognito
    ELSE IF  $BROWSER == 'firefox'
        ${options}  Evaluate  sys.modules['selenium.webdriver'].FirefoxOptions()  sys
        Call Method  ${options}  add_argument  --private-window
    END
    IF  $HEADLESS == 'true'
        Set Selenium Speed  0.05 seconds
        Call Method  ${options}  add_argument  --headless
    ELSE
        Set Selenium Speed  ${DELAY}
    END
    Open Browser  browser=${BROWSER}  options=${options}
```

Olemme nyt lisääneet muuttujan _HEADLESS_ jolle arvon _true_ asettamalla voimme suorittaa testit [headless](https://en.wikipedia.org/wiki/Headless_browser)-selaimella, eli selaimella missä ei ole käyttöliittymää. Olemme myös määritelleet, että headlessina suoritettaessa Seleniumin viiveeksi asetetaan 0.05 jotta testit eivät hidastu tarpeettomasti. Joissain tilanteissa selaimelle asennetut liitännäiset haittaavat testien suorituksessa. Määrittelimmekin, että testatessa selaimet käyttävät incognito-tilaa, jolloin liitännäiset eivät ole käytössä. 

Headless-suoritus tapahtuu seuraavasti:

```bash
robot --variable HEADLESS:true src/tests
```

GitHub Actionien konfiguraatio näyttää seuraavalta:

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
      - name: Set up Python 3.12
        uses: actions/setup-python@v6
        with:
          python-version: '3.12'
      - name: Install Poetry
        run: pip install poetry
      - name: Setup chromedriver
        uses: nanasess/setup-chromedriver@master
      - run: |
          export DISPLAY=:99
          chromedriver --url-base=/wd/hub &
          sudo Xvfb -ac :99 -screen 0 1280x1024x24 > /dev/null 2>&1 &
      - name: Install dependencies
        run: poetry install
      - name: Run robot tests
        run: bash run_robot_tests.sh
```

Ennen viimeisessä askeleessa tapahtuvaa testien suorittamista suoritetaan valmiiksi määritelty Action [setup-chromedriver](https://github.com/nanasess/setup-chromedriver), joka asentaa ChromeDriverin GitHub Actionin käyttöön.

Jotta sovelluksen testit voidaan suorittaa GitHub Actionissa, tulee nämä askeleet suorittaa komentorivikomennoilla. Tähän tarkoitukseen, voimme käyttää seuraavaa bash-skriptiä `run_robot_tests.sh`, joka löytyy tehtäväpohjassa:

```bash
#!/bin/bash

echo "Running tests"

# käynnistetään Flask-palvelin taustalle
poetry run python3 src/index.py &

echo "started Flask server"

# odotetaan, että palvelin on valmiina ottamaan vastaan pyyntöjä
while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:5001)" != "200" ]];
  do sleep 1;
done

echo "Flask server is ready"

# suoritetaan testit
poetry run robot --variable HEADLESS:true src/tests

status=$?

# pysäytetään Flask-palvelin portissa 5001
kill $(lsof -t -i:5001)

exit $status
```

Pushaa tehtävän repositorio GitHubiin ja varmista, että GitHub Actions suorittaa testit onnistuneesti.

**Laajenna vielä sovellusta siten, että siihen tulee mahdollisuus asettaa laskuri haluttuun arvoon.** Sovellus voi näyttää laajennuksen jälkeen seuraavalta:

![]({{ "/images/webcounter2.png" | absolute_url }}){:height="240px" }

Tee ominaisuudelle Robot-testit.

Kertaa tarvittaessa [täältä](/tehtavat3/#miten-selenium-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit) se miten Selenium löytää sivun elementit.

Ohjeita lomakkeen käsittelyyn kurssin [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/osa3/) materiaalissa. **HUOM:** lomakkeen datan vastaanottamisen jälkeen tulee tehdä `redirect`, samoin kuin nappien painallusten käsittelyssä, ks. [Post/Redirect/Get](https://en.wikipedia.org/wiki/Post/Redirect/Get).

Tee ominaisuudelle Robot-testit.

Jos lomakkeessa on käytössä syötekenttä, jonka attribuutti _name_ on arvoltaan _value_:

```html
<input type="text" name="value" />
```

Robot-testi voi kirjoittaa kenttään arvon 10 avainsanan [Input Text](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Text) avulla seuraavasti:

```
Input Text  value  10
```

Korjaa vielä testejä siten, että jokainen testitiedosto aloitetaan tilanteesta, missä laskurin arvo on nolla.

### Robot Framework -testien debuggaaminen

Ennen kuin edetään seuraavaan tehtäväsarjaan, nostetaan esiin tärkeä teema.

On todennäköistä, että testien tekemisen aikana tulee ongelmia, joiden selvittäminen ei ole triviaalia. Epäonnistuneen testitapauksen kohdalla kannattaa miettiä mahdollisia syitä:

- Onko vika testissä, eli toimiiko sovellus kuten pitääkin? Voit esimerkiksi testata sovelluksen toimivuuden manuaalisesti. Jos näin on, keskity testin korjaamiseen
- Onko vika sovelluksessa, eli eikö manuaalisesti testattu sovellus toimi kuten pitäisi? Jos näin on, keskity tarkastelemaan ohjelman suoritusta epäonnistuneessa testitapauksessa

Jos testit eivät mene läpi, generoi Selenium hakemistoon kuvakaappauksen tilanteesta, siitä tilanteesta, joissa testi havaitsee ongelman. Tämän viikon tehtävää 7 tehdessäni törmäsin seuraavaan:

![]({{ "/images/seleniumerror.png" | absolute_url }}){:height="350px" }

Tässä tapauksessa ongelma oli erittäin helppo korjata.

Tutustutaan seuraavaksi muihin tekniikoihin, jotka helpottavat ja nopeuttavat virheiden metsästystä.

#### Suoritettavien testien lukumäärän rajoittaminen

Kun kohtaat epäonnistuvan testitapauksen, kannattaa testien suorittamista nopeuttaa suorittamalla vain epäonnistunut testitapaus. Jos testitapaus `Login With Correct Credentials` epäonnistuu, voimme suorittaa ainoastaan sen seuraavalla komennolla:

```
robot -t "Login With Correct Credentials" src/tests/login.robot
```

Komennolle `robot` annetaan siis `-t`-valitsimen avulla suoritettavan testitapauksen nimi ja tiedosto, jossa testitapaus sijaitsee.

#### Ohjelman suorituksen seuraaminen

Jos virheen löytäminen pelkän manuaalisen testauksen avulla ei tuota tulosta, kannattaa tutkia miten ohjelman suoritus etenee. Ensin on jollain tavalla rajattava, missä ongelma saattaisi olla. Vanha hyvä kikka eli komennolla _print_ tehtävät aputulostukset vievät jo pitkälle. 

Joissain tapauksissa saatetaan tarvita järeämpiä keinoja. Oletetaan, että  `Login With Correct Credentials`-testitapaus epäonnistuu. Ongelma on luultavasti `UserService`-luokan metodissa `check_credentials`. Voimme pysäyttää ohjelman suorituksen halutulle riville hyödyntämällä [pdb](https://docs.python.org/3/library/pdb.html)-moduulia:

```python
# ...
# debugattavaan tiedostoon tulee tuoda tarvittavat moduulit
import sys, pdb

class UserService:
    def __init__(self, user_repository):
        self._user_repository = user_repository

    def check_credentials(self, username, password):
        # pysäytetään ohjelman suoritus tälle riville
        pdb.Pdb(stdout=sys.__stdout__).set_trace()

        if not username or not password:
            raise UserInputError("Username and password are required")

        user = self._user_repository.find_by_username(username)

        if not user or user.password != password:
            raise AuthenticationError("Invalid username or password")

        return user

    # ...
```

Ohjelman suorituksen pysäyttäminen onnistuu siis kutsumalla `Pdb`-luokan metodia `set_trace`. Jotta tulosteet tulisivat näkyviin testien suorituksen aikana, tulee luokan konstruktorin `stdout` argumentin arvoksi asettaa `sys.__stdout__`. Tätä varten debugattavaan tiedostoon tulee tuoda `pdb`-moduulin lisäksi `sys`-moduuli, joka tapahtuu esimerkissä `import sys, pdb`-rivillä.

Käynnistä nyt ohjelma uudelleen, jotta muutokset koodiin astuvat voimaan. Suorita sen jälkeen pelkästään `Login With Correct Credentials`-testitapaus edellä mainitun ohjeen mukaisesti. Kun testitapauksen suoritus saavuttaa `check_credentials`-metodin kutsun, koodin suoritus pysähtyy ja palvelinta suorittavalle komentoriville ilmestyy seuraavanlainen komentorivi:

```
-> if not username or not password:
(Pdb)
```

Kyseessä on interaktiivinen komentorivi, jossa voimme suorittaa koodia. Nuoli (`->`) viittaa seuraavaksi suoritettavaan koodiriivin. Katsotaan komentorivin avulla, mitkä ovat muuttujien `username` ja `password` arvot:

```
(Pdb) username
'kalle'
(Pdb) password
'kalle123'
(Pdb)
```

Annamme siis komentoriville syötteen ja painamme Enter-painiketta. Jatketaan koodin suorittamista antamalla syöte `next()`. Koodi on ohittanut `if`-lauseen (koska muuttujilla oli arvot) ja on seuraavaksi suorittamassa riviä `user = self._user_repository.find_by_username(username)`:

```
-> user = self._user_repository.find_by_username(username)
(Pdb)
```

Suoritetaan rivi syöttämällä uudestaan `next()` ja tulostetaan `user`-muuttujan arvo:

```
-> if not user or user.password != password:
(Pdb) user
<entities.user.User object at 0x10f7a55e0>
```

Kun olet lopettanut debuggaamiseen, syötä `exit()` ja poista koodista `set_trace`-metodin kutsu.


### 5. WebLogin, osa 1

Tarkastellaan nyt rakenteeltaan hieman monimutkaisempaa Web-sovellusta, joka löytyy [kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko3/login_. 

Hae projekti ja kopioi se **palautusrepositorioosi**, hakemiston _viikko3_ sisälle.

Asenna projektin riippuvuudet komennolla `poetry install` ja käynnistä se virtuaaliympäristössä komennolla `python3 src/index.py`. Sovelluksen käynnistymisen jälkeen pääset käyttämään sitä avaamalla selaimella osoitteen <http://localhost:5001>. Sovellus siis toimii _localhostilla_ eli paikallisella koneellasi _portissa_ 5001.

Sovellus on hyvin yksinkertainen, se tarjoaa vain kaksi toimintoa:
- käyttäjä voi rekisteröityä, eli luoda järjestelmään käyttäjätunnuksen
- rekisteröitynyt käyttäjä voi kirjautua järjestelmään

![]({{ "/images/weblogin1.png" | absolute_url }}){:height="300px" }

Tutustutaan seuraavaksi sovelluksen rakenteeseen. Sovellus noudattaa ns. kerrosarkkitehtuuria eli se on rakenteeltaan samanlainen kuin kurssin Ohjelmistotekniikka [referenssisovellus](https://github.com/ohjelmistotekniikka-hy/python-todo-app/blob/master/dokumentaatio/arkkitehtuuri.md).

Sovelluksen käyttöliittymä on toteutettu edellisten tehtävien sovelluksen tapaan tiedostoon `app.py` sekä hakemistoon `templates`. Ohjelman käyttäjien hallintaan liittyvä _sovelluslogiikka_ on sijoitettu omaan luokkaansa `UserService`.

Sovelluksen käytössä oleva versio ei tallenna käyttäjien tietoja varsinaisesti mihinkän pysyvämpään paikkaan, kuten tietokantaan tai tiedostoon, käyttäjien tiedot pidetään ainoastaan keskusmuistissa.

Eräs huomionarvoinen seikka on se, että `UserService`-olio ei tallenna muistiin suoraan `User`-oliota vaan epäsuorasti `UserRepository`-luokan olion kautta. Mistä on kysymys?
`UserRepository`-luokka abstrahoi eli piilottaa käyttäjien hallinnointiin liittyvän logiikan sovelluksen muilta olista.

#### Suunnittelumalli Repository

Tietoon kohdistuvien operaatioiden eriyttämiseen sovelluslogiikasta on olemassa useita _suunnittelumalleja_, kuten [Data Access Object](https://en.wikipedia.org/wiki/Data_access_object), [Active Record](https://en.wikipedia.org/wiki/Active_record_pattern) ja [Repository](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design). Kaikkien näiden suunnittelumallien perimmäinen idea on siinä, että sovelluslogiikalta tulee piilottaa tietoon kohdistuvien operaatioiden yksityiskohdat.

Esimerkiksi repositorio-suunnittelumallissa tämä tarkoittaa sitä, että tietokohteeseen kohdistetaan operaatioita erilaisten funktioiden tai metodien, kuten `find_all`, `create` ja `delete` kautta. Tämän abstraktion avulla sovelluslogiikka ei ole tietoinen operaatioiden yksityiskohdista, jolloin esimerkiksi tallennustapaa voidaan helposti muuttaa.

Sovellukseen on määritelty repositorio-suunnittelumallin mukainen luokka `UserRepository`. Luokka tallentaa sovelluksen käyttäjiä muistiin. Jos päättäisimme tallentaa käyttäjät esimerkiksi PostgreSQL-tietokantaan, ei tämä vaatisi muutoksia luokan ulkopuolelle.

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

**Tutustu nyt sovelluksen rakenteeseen ja toiminnallisuuteen.**

#### Tutustuminen testeihin

Tutustutaan aluksi testitapauksien yhteisiin asetuksiin ja avainsanoihin, jotka löytyvät `src/tests/resource.robot`-tiedostosta. Tiedoston sisältö on seuraava:

```robot
*** Settings ***
Library  SeleniumLibrary
Library  ../AppLibrary.py

*** Variables ***
${SERVER}        localhost:5001
${DELAY}         0.5 seconds
${HOME_URL}      http://${SERVER}
${LOGIN_URL}     http://${SERVER}/login
${REGISTER_URL}  http://${SERVER}/register
${BROWSER}       chrome
${HEADLESS}      false

*** Keywords ***
Open And Configure Browser
    IF  $BROWSER == 'chrome'
        ${options}  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys
    ELSE IF  $BROWSER == 'firefox'
        ${options}  Evaluate  sys.modules['selenium.webdriver'].FirefoxOptions()  sys
    END
    IF  $HEADLESS == 'true'
        Set Selenium Speed  0.05 seconds
        Call Method  ${options}  add_argument  --headless
    ELSE
        Set Selenium Speed  ${DELAY}
    END
    Open Browser  browser=${BROWSER}  options=${options}

Login Page Should Be Open
    Title Should Be  Login

Main Page Should Be Open
    Title Should Be  Ohtu Application main page

Go To Login Page
    Go To  ${LOGIN_URL}

```

Tiedoston sisältö on samankaltainen kuin edellisissä tehtävissä. Tällä kertaa
`*** Settings ***` osiossa on otettu SeleniumLibrary-kirjaston lisäksi käyttöön myös projektin oma `AppLibrary.py`-kirjasto, joka määrittelee kaksi projektissa tarvittavaa avainsanaa, `Reset Application` ja `Create User`.

`*** Keywords ***`-osiossa on määritelty myös muutama yleiskäyttöinen avainsana:
- `Login Page Should Be Open` ja `Main Page Should Be Open`, joiden tarkoitus on tarkistaa, että käyttäjä on oikealla sivulla. Ne käyttävät [Title Should Be](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Title%20Should%20Be) -avainsanaa, joka tarkistaa HTML-sivun [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)-elementin arvon. Title-elementin arvon sijaan voisimme esimerkiksi tarkistaa, että sivulta löytyy tietty teksti käyttämällä [Page Should Contain](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain) -avainsanaa
- `Go To Login Page` -avainsana käyttää [Go To](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Go%20To) -avainsanaa avatakseen selaimessa kirjautumis-sivun, jonka URL on tallennettu `LOGIN_URL`-muuttujaan

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
- `Login Should Fail With Message` -avainsana tarkastaa, että käyttäjä on kirjautumissivulla ja että sivulta löytyy tietty virheviesti. Tarkastuksessa käytetään [Page Should Contain](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain) -avainsanaa, joka tarkistaa, että sivulta löytyy haluttu teksti
- `Set Username`- ja `Set Password` -avainsanat syöttävät annetut arvot tiettyihin kenttiin käyttämällä [Input Text](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Text) - ja [Input Password](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Password) -avainsanoja (huomaa, että salasanan kenttä ei ole tavallinen tekstikenttä, vaan salasanakenttä)
- ` Reset Application Create User And Go To Login Page` -avainsana tyhjentää sovelluksen "tietokannan" eli sinne luodut käyttäjät, luo sovellukseen uuden käyttäjän ja avaa kirjautumissivun

Kertaa tarvittaessa [täältä](/tehtavat3/#miten-selenium-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit) se miten Selenium löytää sivun elementit.

**Tee nyt uusi tiedosto `home.robot` ja lisää sinne seuraavat testitapaukset:**

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application And Go To Starting Page

*** Test Cases ***
Click Login Link
    Click Link  Login
    Login Page Should Be Open

Click Register Link
    Click Link  Register new user
    Register Page Should Be Open

*** Keywords ***

Reset Application And Go To Starting Page
  Reset Application
  Go To Starting Page
```

Testitapausten tulee siis testata, että "Login"- ja "Register new user"-linkkien painaminen avaa oikean sivun. Linkkien klikkaus tapahtuu käyttämällä valmiiksi määriteltyä [Click Link](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Click%20Link) -avainsanaa. 

Kun suoritat testit, virheilmoitus kertoo mitä avainsanoja on määrittelemättä:

```
Click Register Link                                                   | FAIL |
Setup failed:
No keyword with name 'Go To Starting Page' found.
```

**Toteuta testin käyttämät määrittelemättömät avainsanat**.

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


**Lisää** User storylle _User can log in with valid username/password-combination_ seuraava testitapaus `login.robot`-tiedostoon:

```robot
Login With Nonexistent Username
# ...
```

### 7. WebLogin, osa 3

Tee User storylle _A new user account can be created if a proper unused username and a proper password are given_ seuraavat testitapaukset uuteen tiedostoon `register.robot`:

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

Register With Valid Username And Invalid Password
# salasana ei sisällä halutunlaisia merkkejä
# ...

Register With Nonmatching Password And Password Confirmation
# ...

Register With Username That Is Already In Use
#

*** Keywords ***
#...
```

Käyttäjätunnus ja salasana noudattavat seuraavia sääntöjä:

- Käyttäjätunnuksen on oltava vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä
- Salasanan on oltava pituudeltaan vähintään 8 merkkiä ja se ei saa koostua pelkästään kirjaimista

**Laajenna koodiasi siten, että testit menevät läpi.** Oikea paikka koodiin tuleville muutoksille on <i>src/services/user_service.py</i>-tiedoston `UserService`-luokan metodi `validate`.

**Pro tips**:
- Etene yksi testitapaus ja sen toteuttama koodi kerrallaan
- Kertaa tarvittaessa [täältä](/tehtavat3/#miten-selenium-l%C3%B6yt%C3%A4%C3%A4-sivun-elementit) se miten Selenium löytää sivun elementit
- Ota mallia kirjautumisen testeistä!
- Muista [tämä](/tehtavat3/#robot-framework--testien-debuggaaminen), ja sieltä erityisesti [tämä](/tehtavat3/#ohjelman-suorituksen-seuraaminen
)

### Tehtävien palautus

Laita palautusrepositoriosi tiedostoon README.md linkki tehtäviä 2-4 varten tehtyyn webcounter-repositoroosi.

{% include submission_instructions.md %}
