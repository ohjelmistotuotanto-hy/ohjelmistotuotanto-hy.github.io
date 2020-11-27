---
layout: page
title: Viikko 3
inheader: no
permalink: /python/tehtavat3/
---

## Viikko 3

_Alla olevien tehtävien deadline on maanantaina 18.11. klo 23:59_

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa

- ma 14-16 B221
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/3), joiden deadline on sunnuntaina 17.11. klo 23:59:00.

Tehtävissä 1-2 tutustutaan siihen, miten Poetry-sovelluksiin lisätään ulkoisia kirjastoja riippuvuudeksi. Loput tehtävät liittyvät storyjen hyväksymistestauksen automatisointiin tarkoitetun Robot Frameworkin, sekä selainsovellusten testaamiseen käytettävän Selenium-kirjaston soveltamiseen.

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/main/tehtavat3.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Poetry ja riippuvuuksien lisääminen

Hae kurssirepositorion <https://github.com/ohjelmistotuotanto-hy/syksy2020> hakemistossa _viikko3/nhl-reader_ lähes tyhjä Poetry-projektin runko. Mukana on kohta tarvitsemasi luokka `Player`.

Tehdään ohjelma, jonka avulla voi hakea <https://nhl.com>-sivulta kuluvan kauden NHL-liigan tilastotietoja. Jos tarkkoja ollaan, niin tilastot haetaan tämän kurssin tarpeisiin rakennetulta palvelimelta, joka hakee todelliset tilastot NHL:n sivulta kerran vuorokaudessa.

Näet tilastojen [JSON](https://en.wikipedia.org/wiki/JSON)-muotoisen raakadatan web-selaimella osoitteesta <https://nhlstatisticsforohtu.herokuapp.com/players>

Tee ohjelma, joka listaa _suomalaisten pelaajien_ tilastot. Tarvitset ohjelmassa yhtä kirjastoa, eli _riippuvuutta_. Kyseinen kirjasto on [requests](https://requests.readthedocs.io/en/master/)-kirjasto, jonka avulla voi tehdä HTTP-pyyntöjä. Huomaa, että Pythonilla on myös valmiita moduleeja tähän tarkoitukseen, mutta requests-kirjaston käyttö on huomattavasti näitä moduuleja helpompaa.

<!-- TODO: linkki -->

Kertaa nopeasti Ohjelmistotekniikka-kurssin [Poetry-ohjeista](/gradle#riippuvuudet), miten Poetrylla asennetaan riippuvuuksia. Asenna sen jälkeen _requests_-kirjasto projektin riippuvuuksiksi. Käytä kirjastosta uusinta versiota (jonka Poetry asentaa automaattisesti).

Voit ottaa projektisi pohjaksi seuraavan tiedoston:

```python
import requests
from player import Player

def main():
    url = "https://nhlstatisticsforohtu.herokuapp.com/players"
    response = requests.get(url).json()

    print("JSON-muotoinen vastaus:")
    print(response)

    players = map(lambda p: Player(p['name']), response)

    print("Oliot:")
    for player in players:
        print(player)
```

Tehtäväpohjassa on valmiina luokan `Player` koodin runko. Edellä esitetyssä koodissa `requests.get(url)` tekee HTTP-pyynnön, jonka jälkeen `json`-metodin kutsu muuttaa JSON-muotoisen vastauksen Python-tietorakenteiksi. Tässä tilanteessa `response` sisältää listan dictionaryja. Tästä listasta muodostetaan lista `Player`-oliota [map](https://docs.python.org/3/library/functions.html#map)-funktiota hyödyntämällä.

Tee `Player`-luokkaan attribuutit kaikille JSON-datassa oleville kentille, joita ohjelmasi tarvitsee. Ohjelmasi voi toimia esimerkiksi niin, että se tulostaisi pelaajat seuraavalla tavalla:

```
Players from FIN Wed Nov 06 23:31:32 EET 2019

Henrik Borgstrom team FLA goals 0 assists 0
Sami Niku team WPG goals 0 assists 0
Mikael Granlund team NSH goals 2 assists 2
Miikka Salomaki team NSH goals 1 assists 0
Roope Hintz team DAL goals 9 assists 2
Sebastian Aho team CAR goals 5 assists 5
Erik Haula team CAR goals 8 assists 3
Miro Heiskanen team DAL goals 4 assists 5
Markus Granlund team EDM goals 0 assists 1
Henri Jokiharju team BUF goals 1 assists 4
Joel Armia team MTL goals 6 assists 4
Artturi Lehkonen team MTL goals 2 assists 4
...
```

Tulostusasu ei tässä tehtävässä ole oleellista, eikä edes se mitä pelaajien tiedoista tulostetaan.

### 2. Siistimpi pelaajalista

Tulosta suomalaiset pelaajat pisteiden (goals + assists) mukaan järjestettynä. Tarkka tulostusasu ei ole taaskaan oleellinen, mutta se voi esimerkiksi näyttää seuraavalta:

```
Players from FIN Wed Nov 06 23:47:11 EET 2019

Aleksander Barkov   FLA   2 + 15 = 17
Patrik Laine        WPG   3 + 11 = 14
Mikko Rantanen      COL   5 +  7 = 12
Teuvo Teravainen    CAR   4 +  8 = 12
Roope Hintz         DAL   9 +  2 = 11
Erik Haula          CAR   8 +  3 = 11
Joel Armia          MTL   6 +  4 = 10
Sebastian Aho       CAR   5 +  5 = 10
Kasperi Kapanen     TOR   4 +  6 = 10
Miro Heiskanen      DAL   4 +  5 =  9
Joonas Donskoi      COL   5 +  3 =  8
Sami Vatanen        NJD   4 +  4 =  8
Artturi Lehkonen    MTL   2 +  4 =  6
Valtteri Filppula   DET   1 +  5 =  6
Mikko Koivu         MIN   1 +  5 =  6
Kaapo Kakko         NYR   3 +  2 =  5
Henri Jokiharju     BUF   1 +  4 =  5
Ville Heinola       WPG   1 +  4 =  5
Rasmus Ristolainen  BUF   0 +  5 =  5
...
```

- Vinkki 1: voit halutessasi hyödyntää [filter](https://docs.python.org/3/library/functions.html#filter)-funktiota.
- Vinkki 2: kokeile, mitä `f"{self.name:20}"` tekee merkkijonoesitykselle `Player`-luokan `__str__`-metodissa. Mitä `:20` koodissa tekee? Numeroarvot tulee muuttaa merkkijonomuotoisiksi, jotta lopputulos on oikea. Esimerkiksi `f"{str(self.goals):2}"`.

### 3. Tutustuminen Robot Frameworkkiin

Lue [täällä](/robot_framework) oleva Robot Framework -johdanto ja tee siihen liittyvät tehtävät.

### 4. Kirjautumisen testit

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _viikko3/login-robot_ oleva projekti.

Tutustu ohjelman rakenteeseen. Huomaa, että ohjelman `UserService`-olio ei tallenna suoraan `User`-oliota vaan epäsuorasti `UserRepository`-luokan olion kautta. Mistä on kysymys?

Sovelluksen käyttämään tietoon kohdistuvien operaatioiden abstrahointiin sovelluslogiikasta löytyy useita suunnittelumalleja, kuten [Data Access Object](https://en.wikipedia.org/wiki/Data_access_object), [Active Record](https://en.wikipedia.org/wiki/Active_record_pattern) ja [Repository](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design). Kaikkien näiden suunnittelumallien perimmäinen idea on siinä, että sovelluslogiikalta tulee piilottaa tietoon kohdistuvien operaatioiden yksityiskohdat.

Esimerkiksi repositorio-suunnittelumallissa tämä tarkoittaa sitä, että tietokohteeseen kohdistetaan operaatioita erilaisten funktioiden tai metodien kautta, kuten `find_all`, `create` ja `delete`. Tämän abstraktion avulla sovelluslogiikka ei ole tietoiden operaatioiden yksityiskohdista, jolloin esimerkiksi tallennustapaa voidaan helposti muuttaa.

Sovellukseen on määritelty repositorio-suunnittelumallin mukainen luokka `UserRepository`. Luokka tallentaa sovelluksen käyttäjiä muistiin. Jos päättäisimme tallentaa käyttäjät esimerkiksi SQLite-tietokantaan, ei tämä vaatisi muutoksia luokan ulkopuolelle.

Asenna projektin riippuvuudet ja kokeile suorittaa `index.py`-tiedosto. Ohjelman tuntemat komennot ovat _login_ ja _new_. Suorita myös projektiin siihen liittyvät Robot Framework -testit virtuaaliympäristössä komennolla `robot src/tests`.

Tutki miten Robot Framework -testit on toteutettu hakemistossa _src/tests_. Tutki myös, miten avainsanat on määritelty _src_-hakemiston _AppLibrary.py_-tiedoston `AppLibrary`-luokassa. Huomioi erityisesti, miten testit käyttävät testaamisen mahdollistavaa `StubIO`-oliota käyttäjän syötteen ja ohjelman tulosteen käsittelyyn. Periaate on täsmälleen sama kuin viikon 1 tehtävien [riippuvuuksien injektointiin](/riippuvuuksien_injektointi/) liittyvässä esimerkissä.

Saatat löytää _.robot_-tiedostoista ennestään tuntemattomia ominaisuuksi. _resource.robot_-tiedossa on määritelty avainsana `Input Credentials`, jolla on argumentit `username` ja `password`:

```
Input Credentials
    [Arguments]  ${username}  ${password}
    Input  ${username}
    Input  ${password}
    Run Application
```

Kyseinen avainsana on käytössä _login.robot_-tiedostossa seuraavasti:

```
Input Credentials  kalle  kalle123
```

Lisäksi _login.robot_-tiedoston `*** Settings ***`-osiossa on uusi asetus, `Test Setup`. Kyseisen asetuksen avulla voimme määritellä avainsanan, joka suoritetaan ennen jokaista testitapausta. Tässä tapauksessa ennen jokaista testiä halutaan suorittaa avainsana `Create User And Input Login Command`, joka luo uuden käyttäjän ja antaa sovellukselle _login_-komennon.

Toteuta user storylle _User can log in with valid username/password-combination_ seuraavat testitapaukset _login.robot_-tiedostoon:

```
*** Test Cases ***
Login With Incorrect Password
# ...

Login With Nonexistent Username
# ...
```

Suorita testitapauksissa sopivat avainsanat, jotta haluttu tapaus tulee testattua.

### 5. Uuden käyttäjän rekisteröitymisen testit

Lisää testihakemistoon uusi testitiedosto _register.robot_. Toteuta tiedostoon user storylle _A new user account can be created if a proper unused username and a proper password are given_ seuraavat testitapaukset:

```
*** Test Cases ***
Register With Valid Username And Password
# ...

Register With Already Taken Username And Valid Password
# ...

Register With Too Short Username And Valid Password
# ...

Register With Valid Username And Too Short Password
# ...

Register With Valid Username And Long Enough Password Containing Only Letters
# ...
```

- Käyttäjätunnuksen on oltava merkeistä a-z koostuva vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä. Vinkki: [säännölliset lausekkeet](https://docs.python.org/3/library/re.html#module-re) ja [^[a-z]+\$](https://regexr.com/5fslc)
- Salasanan on oltava pituudeltaan vähintään 8 merkkiä ja se ei saa koostua pelkästään kirjaimista. Vinkki: [säännölliset lausekkeet](https://docs.python.org/3/library/re.html#module-re) ja [[^a-z]](https://regexr.com/5fsll)

Tee testitapauksista suoritettavia ja **täydennä ohjelmaa siten että testit menevät läpi**. Oikea paikka koodiin tuleville muutoksille on <i>src/services/user_service.py</i>-tiedoston `UserService`-luokan metodi `validate`.

**HUOM 1:** Testitapaukset kannattaa toteuttaa yksi kerrallaan, laittaen samalla vastaava ominaisuus ohjelmasta kuntoon. Eli **ÄLÄ** copypastea ylläolevaa kerrallaan tiedostoon, vaan etene pienin askelin. Jos yksi testitapaus ei mene läpi, älä aloita uuden tekemistä ennen kuin kaikki ongelmat on selvitetty. Seuraava luku antaa muutaman vihjeen testien debuggaamiseen.

**HUOM 2:** Saattaa olla hyödyllistä toteuttaa _resource.robot_-tiedostoon avainsana `Input New Command` ja _register.robot_-tiedostoon avainsana `Input New Command And Create User`, joka antaa sovellukselle _new_-komennon ja luo käyttäjän testejä varten. Avainsana kannattaa suorittaa ennen jokaista testitapausta hyödyntämällä `Test Setup`-asetusta.

### Robot Framework -testien debuggaaminen

On todennäköistä että testien tekemisen aikana tulee ongelmia, joiden selvittäminen ei ole triviaalia. Epäonnistuneen testitapauksen kohdalla kannattaa miettiä mahdollisia syitä:

- Onko vika testissä, eli toimiiko sovellus kuten pitääkin? Voit esimerkiksi testata sovelluksen toimivuuden manuaalisesti. Jos näin on, keskity testin korjaamiseen
- Onko vika sovelluksessa, eli eikö manuaalisesti testattu sovellus toimi kuten pitäisi? Jos näin on, keskity tarkastelemaan ohjelman suoritusta epäonnistuneessa testitapauksessa

Tutustutaan seuraavaksi tekniikoihin, jotka helpottavat ja nopeuttavat virheiden metsästystä.

#### Suoritettavien testien lukumäärän rajoittaminen

Kun kohtaat epäonnistuvan testitapauksen, kannattaa testien suorittamista nopeuttaa suorittamalla vain epäonnistunut testitapaus. Jos testitapaus `Login With Correct Credentials`, voimme suorittaa ainoastaan sen seuraavalla komennolla:

```
robot -t "Login With Correct Credentials" src/tests/login.robot
```

Komennolle `robot` annetaan siis `-t`-optionin kautta suoritettavan testitapauksen nimi ja tiedosto, jossa testitapaus sijaitsee.

#### Ohjelman suorituksen seuraaminen

Jos virheen löytäminen pelkän manuaalisen testauksen avulla ei tuota tulosta, kannattaa alkaa tutkimaan miten ohjelman suoritus etenee. Ensin on jollain tavalla rajattava, missä ongelma saattaisi olla. Jos esimerkiksi `Login With Correct Credentials`-testitapaus epäonnistuu, on ongelma luultavasti `UserSerivce`-luokan metodissa `check_credentials`. Voimme pysäyttää ohjelman suorituksen halutulle riville käyttämällä globaalia [breakpoint](https://docs.python.org/3/library/pdb.html)-funktiota:

```python
class UserService:
    def __init__(self, user_repository):
        self.user_repository = user_repository

    def check_credentials(self, username, password):
        # pysäytetään ohjelman suoritus tälle riville
        breakpoint()

        if not username or not password:
            raise UserInputError("Username and password are required")

        user = self.user_repository.find_by_username(username)

        if not user or user.password != password:
            raise AuthenticationError("Invalid username or password")

        return user

    # ...
```

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

Annamme siis komentoriville syötteen ja painamme Enter-painiketta. Jatketaan koodin suorittamista antamalla syöte `next()`. Koodi on ohittanut `if`-lauseen (koska muuttujilla oli arvot) ja on seuraavaksi suorittamassa riviä `user = self.user_repository.find_by_username(username)`:

```
-> user = self.user_repository.find_by_username(username)
(Pdb)
```

Suoritetaan rivi syöttämällä uudestaan `next()` ja tulostetaan `user`-muuttujan arvo:

```
-> if not user or user.password != password:
(Pdb) user
<entities.user.User object at 0x10f7a55e0>
```

Kun olet lopettanut debuggaamiseen, syötä `exit()` ja ota `breakpoint()`-rivi pois koodista.

### 6. WebLogin

Tarkastellaan edellisestä tehtävästä tutun toiminnallisuuden tarjoamaa esimerkkiprojektia, joka löytyy [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _viikko3/web-login-robot_ oleva projekti. Sovellus on toteutettu [Flask](https://flask.palletsprojects.com/)-nimisellä minimalistisella web-sovelluskehyksellä.

Hae projekti, asenna sen riippuvuudet komennollla `poetry install` ja käynnistä se virtuaaliympäristössä komennolla `python3 src/index.py`. Sovelluksen käynnistymisen jälkeet pääset käyttämään sitä avaamalla selaimella osoitteen <http://localhost:5000>

![]({{ "/images/lh3-2.png" | absolute_url }}){:height="200px" }

Sovellus siis toimii _localhostilla_ eli paikallisella koneellasi _portissa_ 5000.

Sovelluksen rakenne on suunnilleen sama kuin tehtävien 4-5 ohjelmassa. Poikkeuksen muodostaa pääohjelma, joka sisältää selaimen tekemät HTTP-pyynnöt. Tässä vaiheessa ei ole tarpeen tuntea HTTP-pyyntöjä käsittelevää koodia kovin tarkasti. Katsotaan kuitenkin pintapuolisesti mistä on kysymys.

Polulle "/" eli sovelluksen juureen, osoitteeseen <http://localhost:5000> tulevat pyynnöt käsittelee mainista seuraava koodinpätkä:

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

Koodi tarkistaa käyttäjätunnuksen ja salasan oikeellisuuden kutsumalla `UserService`-luokan metodia `check_credentials`. Jos kirjautuminen onnistuu, ohjataan käyttäjä "/ohtu"-polun sivulle. Jos se epäonnistuu, `check_credentials`-metodi nostaa virheen, jonka käsittelemme `except`-lohkossa ohjaamalla käyttäjän "/login"-polun sivulle ja näyttämällä siellä virheilmoituksena virheen sisältämän viestin.

Tutustu nyt sovelluksen rakenteeseen ja toiminnallisuuteen. Saat sammutettua sovelluksen painamalla komentoriviltä `ctrl+c` tai `ctrl+d`.

### 7. Web-sovelluksen testaaminen osa 1

Jatketaan saman sovelluksen parissa.

**Käynnistä web-sovellus edellisen tehtävän tapaan komentoriviltä.** Varmista selaimella, että sovellus on päällä.

[Selenium WebDriver](http://docs.seleniumhq.org/projects/webdriver/) -kirjaston avulla on mahdollista simuloida selaimen käyttöä koodista käsin. Seleniumin käyttö Robot Framework -testeissä onnistuu valmiin, [SeleniumLibrary](https://robotframework.org/SeleniumLibrary/)-kirjaston avulla.

Jotta selainta käyttävien testien suorittamien on mahdollista, täytyy lisäksi asentaa halutun selaimen ajuri. Projektin testit käyttävät Chrome-selainta, jolla testejä voi suorittaa käyttämällä [CromeDriver](https://chromedriver.chromium.org/)-ajuria. Ennen kuin siirrymme testien pariin, asenna ChromeDriver seuraamalla [tätä](./chromedriver_asennusohjeet) ohjetta.

Kun Chrome-ajuri on asennettu onnistuneesti, suorita projektin testit virtuaaliympäristössä komennolla `robot src/tests`. Komennon pitäisi suorittaa onnistuneesti kaksi testitapausta, `Login With Correct Credentials` ja `Login With Incorrect Password`. Testitapausten suoritusta voi seurata aukeavasta Chrome-selaimen ikkunasta.

Tutustutaan aluksi testitapauksien yhteisiin asetuksiin ja avainsanoihin, jotka löytyvät _src/tests/resource.robot_-tiedostosta. Tiedoston sisältö on seuraava:

```
*** Settings ***
Library  SeleniumLibrary
Library  ../AppLibrary.py

*** Variables ***
${SERVER}  localhost:5000
${BROWSER}  chrome
${DELAY}  0.5 seconds
${HOME URL}  http://${SERVER}
${LOGIN URL}  http://${SERVER}/login
${REGISTER URL}  http://${SERVER}/register

*** Keywords ***
Open And Configure Browser
    Open Browser  browser=${BROWSER}
    Maximize Browser Window
    Set Selenium Speed  ${DELAY}

Login Page Should Be Open
    Title Should Be  Login

Main Page Should Be Open
    Title Should Be  Ohtu Application main page

Go To Login Page
    Go To  ${LOGIN URL}
```

`*** Settings ***` osiossa on käytössä projektin oma `AppLibrary.py`-kirjasto sekä edellä mainittu SeleniumLibrary-kirjasto. SeleniumLibrary-kirjasto tuo mukaan lukuisia uusia avainsanoja, joista kaikki on dokumentoitu [täällä](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html).

Tiedostossa on myös ennestään tuntematon `*** Variables ***`-osio. Kuten osion nimi kertoo, voimme määritellä osion sisällä muuttujia, jotka ovat kaikkien avainsanojen käytössä. Huomaa, että osion alla määritellyt muuttujat kirjoitetaan isoilla kirjaimilla, toisin kuin argumentit. Muuttujia kannattaa suosia aina kovakoodattujen arvojen sijaan.

`*** Keywords ***`-osiossa on määritelty yleiskäyttöisiä avainsanoja:

- `Open And Configure Browser`-avainsana käynnistää selaimen käyttämällä SeleniumLibrary-kirjaston [Open Browser](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Open%20Browser)-avainsanaa antaen `browser`-argumentin arvoksi `BROWSER`-muuttujan arvon, joka on `headlesschrome`. Lisäksi avainsana asettaa viiveeksi Selenium-komentojen välille `DELAY`-muuttujan arvon käyttämällä [Set Selenium Speed](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Set%20Selenium%20Speed)-avainsanaa. Pidempi viive helpottaa testien suorituksen seuraamista
- `Login Page Should Be Open`- ja `Main Page Should Be Open`-avainsanojen tarkoitus on tarkistaa, että käyttäjä on oikealla sivulla. Ne käyttävät [Title Should Be](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Title%20Should%20Be) avainsanaa, joka tarkistaa HTML-sivun [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)-elementin arvon. Title-elementin arvon sijaan voisimme esimerkiksi tarkistaa, että sivulta löytyy tietty teksti käyttämällä [Page Should Contain](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain)-avainsanaa
- `Go To Login Page`-avainsana käyttää [Go To](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Go%20To)-avainsanaa avatakseen selaimessa kirjautumis-sivun, jonka URL on tallennettu `LOGIN URL`-muuttujaan

Tutustutaan seuraavaksi itse testitapauksiin avaamalla tiedosto _src/tests/login.robot_. Tiedoston `*** Settings ***`-osio on seuraava:

```
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser
Test Setup  Create User And Go To Login Page
```

Osiossa on käytössä ennestään tuntemattomat `Suite Setup`-, `Suite Teardown`- ja `Test Setup`-asetukset. Niiden merkitykset ovat seuraavat:

- `Suite Setup`-asetuksen avulla voimme suorittaa avainsanan ennen tiedoston esimmäistä testitapausta (`Test Setup` sen sijaan suoritetaan ennen _jokaista_ testitapausta)
- `Suite Teardown`-asetuksen avulla voimme suorittaa avainsanan tiedoston viimeisen testitapauksen jälkeen (`Test Teardown` sen sijaan suoritetaan _jokaisen_ testitapauksen jälkeen)

Tiedoston `*** Keywords ***` osiossa on testitapausten käyttämiä avainsanoja:

- `Login Should Succeed`-avainsana tarkastaa, että käyttäjä on siirtynyt oikealla sivulle onnistuneen kirjautumisen jälkeen
- `Login Should Fail With Message`-avainsana tarkastaa, että käyttäjä on kirjautumissivulla ja että sivulta löytyy tietty virheviesti. Tarkastuksessa käytetään [Page Should Contain](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain)-avainsanaa, joka tarkistaa, että sivulta löytyy haluttu teksti
- `Submit Credentials`-avainsana painaa "Login"-painiketta käyttämällä [Click Button](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Click%20Button)-avainsanaa
- `Set Username`- ja `Set Password`-avainsanat syöttävät annetut arvot tiettyihin kenttiin käyttämällä [Input Text](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Text)- ja [Input Password](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Password)-avainsanoja (huomaa, että salasanan kenttä ei ole tavallinen tekstikenttä, vaan salasanakenttä)
- `Create User And Go To Login Page`-avainsana luo sovellukseen käyttäjän ja avaa kirjautumis-sivun

Testitapauksissa ollaan interaktiossa erilaisten HTML-elementtien, kuten tekstikenttien ja painikkeiden kanssa. Selenium yrittää löytää elementin annettujen argumenttien perusteella käyttäen [tiettyä strategiaa](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Locating%20elements). Esimerkiksi `Click Button foo` löytää seuraavat [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)-elementit:

```html
<button id="foo">Click</button>
<button name="foo">Click</button>
<button>foo</button>
```

Selenium siis etsii `button`-elementin, jonka `id`-attribuutin arvo, `name`-attribuutin arvo, tai sisältö vastaa annettua argumenttia. Kutsu `Click Button Login` löytää siis seuraavan _src/templates/login.html_-tiedostossa määritellyn painikkeen:

```html
<button>Login</button>
```

Samalla tavoin kutsu `Input Text username kalle` löytää `id`-attribuutin avulla seuraavan `input`-elementin:

```html
<input type="text" name="username" id="username" />
```

**Toteuta seuraavaksi _login.robot_-tiedostoon seuraava testitapaus:**

```
Click Register Link
# ...
```

Testitapauksen tulee testata, että "Register"-linkin painaminen avaa rekisteröitymis-sivun. Vinkki: voit käyttää [Click Link](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Click%20Link)-avainsanaa.

### 8. Web-sovelluksen testaaminen osa 2

Jatketaan kirjautumiseen liittyvien hyväksymistestien toteuttamista. Katsotaan sitä ennen pikaisesti, miltä AppLibrary-kirjaston toteutus näyttää. Kirjaston mmärittelevä luokka `AppLibrary` löytyy tiedostosta _src/AppLibrary.py_, jonka sisältö on seuraava:

```python
import requests


class AppLibrary:
    def __init__(self):
        self._base_url = "http://localhost:5000"

        self.reset_application()

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

Kirjaston toteutus eroaa jonkin verran edellisestä, komentoriviä hyödyntävän projektin kirjaston toteutuksesta. Erona on, että tässä projektissa testit ja itse sovellus suoritetaan eri prosesseissa, joten testit eivät voi suoraan muuttaa sovelluksen tilaa. Voimme kuitenkin muutta sovelluksen tilaa HTTP-kutsujen avulla jo tutuksi tulleen requests-kirjaston avulla.

Metodi `reset_application` lähettää _POST_-tyyppisen pyynnön sovelluksen polkuun "/tests/reset". Pyynnön käsittelee seuraava funktio:

```python
@app.route("/tests/reset", methods=["POST"])
def reset_tests():
    user_repository.delete_all()
    return "Reset"
```

Funktio poistaa kaikki sovelluksen käyttäjät ja näin nollaa sovelluksen tilan.

Metodi `create_user` lähettää samankaltaisesti _POST_-tyyppisen pyynnön sovelluksen polkuun "/register". Pynnön käsittelevä funktio luo uuden käyttäjän, jos se on validi:

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

**Lisää** User storylle _User can log in with valid username/password-combination_ seuraava testitapaus _login.robot_-tiedostoon:

```
Login With Nonexistent Username
# ...
```

### 9. Web-sovelluksen testaaminen osa 3

Tehdään seuraavaksi pari muutosta testien suorituksen nopeuttamiseksi. Ensiksi, aseta _resource.robot_-tiedostossa olevan `DELAY`-muuttujan arvoksi `0`. Sen jälkeen, otetaan käyttöön Chrome-selaimen [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)-variaatio. "Headless"-selainten käyttö on kätevää esimerkiksi automatisoiduissa testeissä, joissa selaimen käyttöliittymä ei ole tarpeellinen. Suorita testit Headless Chromen avulla asettamalla `BROWSER`-muuttujan arvoksi `headlesschrome`.

**HUOM:** Headless Chrome vaikeuttaa testien debuggaamista, koska selaimen käyttöliittymä ei ole näkyvissä. Jos testitapauksen suorittaminen epäonnistuu, projektin juurihakemistoon ilmestyy tiedosto _selenium-screenshot-\*.png_, josta on nähtävissä selainikkunan sisältö virhetilanteen hetkellä. Jos tämä tieto ei riitä, voit muutta debuggaamista varten `DELAY`- ja `BROWSER`-muuttujien arvoja.

Tee User storylle _A new user account can be created if a proper unused username and a proper password are given_ seuraavat testitapaukset _register.robot_-tiedostoon:

```
Register With Valid Username And Password
# ...

Register With Too Short Username And Valid Password
# ...

Register With Valid Username And Too Short Password
# ...

Register With Nonmatching Password And Password Confirmation
# ...
```

Käyttäjätunnus ja salasana noudattavat samoja sääntöjä kuin _tehtävässä 5_, eli:

- Käyttäjätunnuksen on oltava merkeistä a-z koostuva vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä
- Salasanan on oltava pituudeltaan vähintään 8 merkkiä ja se ei saa koostua pelkästään kirjaimista

**Laajenna koodiasi siten, että testit menevät läpi.** Oikea paikka koodiin tuleville muutoksille on <i>src/services/user_service.py</i>-tiedoston `UserService`-luokan metodi `validate`.

### 10. Web-sovelluksen testaaminen osa 4

Tee User storylle _A new user account can be created if a proper unused username and a proper password are given_ vielä seuraavat testitapaukset _register.robot_-tiedostoon:

```
Login After Successful Registration
# ...

Login After Failed Registration
# ...
```

Ensimmäisessä testitapauksessa tulee testata, että käyttäjä _voi kirjautua sisään_ onnistuneen rekisteröitymisen jälkeen. Toisessa testitapauksessa taas tulee testata, että käyttäjä _ei voi kirjautua sisään_ epäonnistumiseen rekisteröitymisen jälkeen.

Vinkki: voit halutessasi toteuttaa <i>login_resource.robot</i>-tiedoston, joka määrittelee kirjautumiseen käytettäviä avainsanoja. Voit hyödyntää tämän tiedoston avainsanoja sekä <i>login.robot</i>-, että <i>register.robot</i>-tiedostossa lisäämällä `*** Settings ***`-osioon uuden resurssin:

```
*** Settings ***
Resource  resource.robot
Resource  login_resource.robot
```

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>
