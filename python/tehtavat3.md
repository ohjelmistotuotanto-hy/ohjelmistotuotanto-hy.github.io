---
layout: page
title: Viikko 3
inheader: no
permalink: /tehtavat3/
---

## Viikko 3

_Alla olevien tehtävien deadline on maanantaina 18.11. klo 23:59_

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa

- ma 14-16 B221
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/3), joiden deadline on sunnuntaina 17.11. klo 23:59:00.

Tehtävissä 1-3 tutustutaan siihen miten gradle-sovelluksiin lisätään ulkoisia kirjastoja riippuvuudeksi, sekä miten riippuvuuksia sisältävästä koodista saadaan generoitua jar-paketti. Loput tehtävät liittyvät storyjen hyväksymistestauksen automatisointiin tarkoitetun Cucumberin, sekä selainsovellusten testaamiseen käytettävän Selenium-kirjaston soveltamiseen.

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

Vinkki: voit halutessasi hyödyntää [filter](https://docs.python.org/3/library/functions.html#filter)-funktiota.

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

Tee testitapauksista suoritettavia ja **täydennä ohjelmaa siten että testit menevät läpi**. Oikea paikka koodiin tuleville muutoksille on luokan <i>src/services/user_service.py</i>-tiedoston `UserService`-luokan metodi `validate`.

**HUOM 1:** Testitapaukset kannattaa toteuttaa yksi kerrallaan, laittaen samalla vastaava ominaisuus ohjelmasta kuntoon. Eli **ÄLÄ** copypastea ylläolevaa kerrallaan tiedostoon, vaan etene pienin askelin. Jos yksi testitapaus ei mene läpi, älä aloita uuden tekemistä ennen kuin kaikki ongelmat on selvitetty. Seuraava luku antaa muutaman vihjeen testien debuggaamiseen.

**\*HUOM 2:** Saattaa olla hyödyllistä toteuttaa _resource.robot_-tiedostoon avainsana `Input New Command` ja _register.robot_-tiedostoon avainsana `Input New Command And Create User`, joka antaa sovellukselle _new_-komennon ja luo käyttäjän testejä varten. Avainsana kannattaa suorittaa ennen jokaista testitapausta hyödyntämällä `Test Setup`-asetusta.

### Robot Framework -testien debuggaaminen

<!-- TODO -->

On todennäköistä että testien tekemisen aikana tulee ongelmia, joiden selvittäminen ei ole triviaalia.

#### Suoritettavien testien lukumäärän rajoittaminen

### 6. WebLogin

Tarkastellaan edellisestä tehtävästä tutun toiminnallisuuden tarjoamaa esimerkkiprojektia, joka löytyy [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _viikko3/WebLogin_ oleva projekti.

Sovellus on toteutettu [Spark](http://sparkjava.com)-nimisellä minimalistisella Web-sovelluskehyksellä. Spark on osalle kenties tuttu kurssilta [Tietokantojen perusteet](https://tietokantojen-perusteet.github.io).

**Hae projekti ja käynnistä se komennolla** <code>gradle run</code>

Pääset käyttämään sovellusta avaamalla selaimella osoitteen <http://localhost:4567>

![]({{ "/images/lh3-2.png" | absolute_url }}){:height="200px" }

Sovellus siis toimii _localhostilla_ eli paikallisella koneellasi _portissa_ 4567.

Sovelluksen rakenne on suunnilleen sama kuin tehtävien 4-6 ohjelmassa. Poikkeuksen muodostaa pääohjelma, joka sisältää selaimen tekemät HTTP-pyynnöt. Tässä vaiheessa ei ole tarpeen tuntea HTTP-pyyntöjä käsittelevää koodia kovin tarkasti. Katsotaan kuitenkin pintapuolisesti mistä on kysymys.

Polulle "/" eli sovelluksen juureen, osoitteeseen <http://localhost:4567> tulevat pyynnöt käsittelee mainista seuraava koodinpätkä:

```java
get("/", (request, response) -> {
  HashMap<String, String> model = new HashMap<>();
  model.put("template", "templates/index.html");
  return new ModelAndView(model, LAYOUT);
}, new VelocityTemplateEngine());
```

Koodi muodostaa luokan _VelocityTemplateEngine_ avulla hakemistossa _templates/index.html_ olevan "templateen" perustuvan HTML-sivun, ja palauttaa sen käyttäjän selaimelle.

Sivun HTML-koodi on seuraava:

```java
<h1>Ohtu App</h1>

<ul>
    <li><a href="login">login</a></li>
    <li><a href="user">register new user</a></li>
</ul>
```

Kaikki _get_-alkuiset määrittelyt ovat samanlaisia, ne ainoastaan muodostavat HTML-sivun (joiden sisällön määrittelevät templatet sijaitsevat hakemistossa _templates_) ja palauttavat sivun selaimelle.

_post_-alkuiset määrittelyt ovat monimutkaisempia, ne käsittelevät lomakkeiden avulla lähetettyä tietoa. Esimerkiksi käyttäjän kirjautumisyrityksen käsittelee seuraava koodi:

```java
post("/login", (request, response) -> {
  HashMap<String, String> model = new HashMap<>();
  String username = request.queryParams("username");
  String password = request.queryParams("password");

  if ( !authenticationService().logIn(username, password) ) {
    model.put("error", "invalid username or password");
    model.put("template", "templates/login.html");
    return new ModelAndView(model, LAYOUT);
  }

  response.redirect("/ohtu");
  return new ModelAndView(model, LAYOUT);
}, new VelocityTemplateEngine());
```

Koodi pääsee käsiksi käyttäjän _lomakkeen_ avulla lähettämiin tietoihin _request_-olion kautta:

```java
String username = request.queryParams("username");
String password = request.queryParams("password");
```

Koodi käyttää metodikutsulla <code>authenticationService()</code> saamaansa <code>AuthenticationService</code>-oliota kirjautumisen onnistumisen varmistamiseen. Jos kirjautuminen ei onnistu, eli mennään _if_-haaraan, palataan kirjautumislomakkeelle. Lomakkeelle näytettäväksi liitetään virheilmoitus _invalid username or password_.

Tutustu nyt sovelluksen rakenteeseen ja toiminnallisuuteen. Saat sammutettua sovelluksen painamalla konsolissa ctrl+c tai ctrl+d.

### 7. Selenium, eli web-selaimen simulointi ohjelmakoodista

Jatketaan saman sovelluksen parissa.

**Käynnistä websovellus edellisen tehtävän tapaan komentoriviltä.** Varmista selaimella, että sovellus on päällä.

[Selenium WebDriver](http://docs.seleniumhq.org/projects/webdriver/) -kirjaston avulla on mahdollista simuloida selaimen käyttöä koodista käsin. Sovelluksen luokassa _ohtu.Tester.java_ on "toinen pääohjelma", jonka koodi on seuraava:

```java
public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();

    driver.get("http://localhost:4567");

    WebElement element = driver.findElement(By.linkText("login"));
    element.click();

    element = driver.findElement(By.name("username"));
    element.sendKeys("pekka");
    element = driver.findElement(By.name("password"));
    element.sendKeys("akkep");
    element = driver.findElement(By.name("login"));
    element.submit();

    driver.quit();
}
```

Avaa toinen terminaali ja suorita siellä komento _gradle browse_, joka on konfiguroitu suorittamaan luokan _Tester_ metodin _main_ koodi.

**HUOM:** osalla on ollut ongelmia Seleniumin kanssa. [Tänne](/selenium_troubleshooting/) on koottu joitain tapoja, miten ongelmia on saatu ratkaistua. Jos törmäät ongelmaan ja saat sen ratkaistua jollain em. dokumentissa mainitsemattomalla tavalla, lisää ohje dokumenttiin.

Seuraa avautuvasta selaimesta mitä tapahtuu.

Tester-ohjelmassa luodaan alussa selainta koodista käsin käyttävä olio _WebDriver driver_. Tämän jälkeen mennään selaimella osoitteeseen _localhost:4567_.

Kahden sekunnin odottelun jälkeen haetaan sivulta elementti, jossa on linkkiteksti _login_ ja linkkiä klikataan:

```java
WebElement element = driver.findElement(By.linkText("login"));
element.click();
```

Seuraavaksi etsitään sivulta elementti, jonka nimi on _username_, kyseessä on lomakkeen input-kenttä, ja ohjelma "kirjoittaa" kenttään metodia <code>sendKeys()</code> käyttäen nimen _"pekka"_

```java
element = driver.findElement(By.name("username"));
element.sendKeys("pekka");
```

Mistä tiedetään, miten lomakkeen elementti tulee etsiä, eli miksi sen nimi oli nyt _username_?
Elementin nimi on määritelty tiedostossa _src/main/resources/templates/login.html_:

![]({{ "/images/lh3-3.png" | absolute_url }}){:height="250px" }

Tämän jälkeen täytetään vielä salasanakenttä ja painetaan lomakkeessa olevaa nappia.

Ohjelma siis simuloi selaimen käyttöskenaarion, jossa kirjaudutaan sovellukseen.

Koodin seassa on kutsuttu sopivissa paikoin metodia _sleep_, joka hidastaa selainsimulaation etenemistä siten, että ihminenkin pystyy seuraamaan tapahtumia.

**Muuta nyt koodia siten, että läpikäyt seuraavat skenaariot**

- epäonnistunut kirjautuminen: oikea käyttäjätunnus, väärä salasana
- uuden käyttäjätunnuksen luominen
- uuden käyttäjätunnuksen luomisen jälkeen tapahtuva ulkoskirjautuminen sovelluksesta

**HUOM 1:** voit tehdä skenaariot yksi kerrallaan, kaiken main-metodiin, siten että laitat esim. kommentteihin muiden skenaarioiden koodin kun suoritat yhtä skernaariota

**HUOM 2:** salasanan varmistuskentän (confirm password) nimi on _passwordConfirmation_

**HUOM 3:**

Uuden käyttäjän luomisen kokeilua hankaloittaa se, että käyttäjänimen on oltava uniikki. Kannattanee generoida koodissa satunnaisia käyttäjänimiä esim. seuraavasti:

```java
Random r = new Random();

element = driver.findElement(By.name("username"));
element.sendKeys("arto"+r.nextInt(100000));
```

**HUOM3:**

Joskus linkin klikkaaminen Seleniumissa aiheuttaa poikkeuksen _StaleElementReferenceException_

Käytännössä syynä on se, että Selenium yrittää klikata linkkiä "liian aikaisin". Ongelma on mahdollista kiertää klikkaamalla poikkeuksen tapahtuessa linkkiä uudelleen. Jos törmäät ongelmaan, voit ottaa koodiisi seuraavassa olevan apumetodin _clickLinkWithText_, joka suorittaa sopivan määrän uudelleenklikkauksia:

```java
public class Tester {

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:4567");

        clickLinkWithText("register new user", driver);

        // ...
    }


    private static void clickLinkWithText(String text, WebDriver driver) {
        int trials = 0;
        while( trials++<5 ) {
            try{
                WebElement element = driver.findElement(By.linkText(text));
                element.click();
                break;
            } catch(Exception e) {
                System.out.println(e.getStackTrace());
            }
        }
    }
```

Lisää asiasta esimerkiksi [täällä](https://stackoverflow.com/questions/12967541/how-to-avoid-staleelementreferenceexception-in-selenium).

### 8. Web-sovelluksen testaaminen: Cucumber+Selenium

Tehdään nyt sovellukselle hyväksymätestejä [Cucumberilla](/cucumber/).

Projektissa on valmiina User storystä _As a registered user can log in with valid username/password-combination_ kaksi eri _feature_-määrittelyä:

- _logging_in.feature_ ja
- _logging_in_antipattern.feature_

Näistä ensimmäinen, eli _logging_in.feature_ on tehty "hyvien käytäntöjen" mukaan ja jälkimmäinen eli _logging_in_antipattern.feature_ on taas huonompi.

Huonommassa versiossa skenaarioiden stepeistä on tehty monikäyttöisemmät. Sekä onnistuneet että epäonnistuneen skenaariot käyttävät samoja steppejä ja eroavat ainoastaan parametreiltaan:

```gherkin
Feature: As a registered user can log in with valid username/password-combination

    Scenario: user can login with correct password
        Given login is selected
        When username "jukka" and password "akkuj" are given
        Then system will respond "Ohtu Application main page"

    Scenario: user can not login with incorrect password
        Given login is selected
        When username "jukka" and password "wrong" are given
        Then system will respond "invalid username or password"
```

Paremmassa versiossa taas stepit ovat erilaiset, paremmin tilannetta kuvaavat:

```gherkin
Feature: As a registered user can log in with valid username/password-combination

    Scenario: user can login with correct password
        Given login is selected
        When correct username "jukka" and password "akkuj" are given
        Then user is logged in

    Scenario: user can not login with incorrect password
        Given login is selected
        When correct username "jukka" and incorrect password "wrong" are given
        Then user is not logged in and error message is given
```

Tästä seurauksena on se, että stepit mappaavia metodeja tulee suurempi määrä. Metodit kannattaakin määritellä siten, että ne kutsuvat testejä varten määriteltyjä apumetodeita, jotta koodiin ei tule turhaa toistoa:

```java
  @When("correct username {string} and password {string} are given")
  public void correctUsernameAndPasswordAreGiven(String username, String password) {
      logInWith(username, password);
  }

  @When("correct username {string} and incorrect password {string} are given")
  public void correctUsernameAndIncorrectPasswordAreGiven(String username, String password) {
      logInWith(username, password);
  }

private void logInWith(String username, String password) {
    assertTrue(driver.getPageSource().contains("Give your credentials to login"));
    WebElement element = driver.findElement(By.name("username"));
    element.sendKeys(username);
    element = driver.findElement(By.name("password"));
    element.sendKeys(password);
    element = driver.findElement(By.name("login"));
    element.submit();
}
```

Vaikka siis kuvaavammin kirjoitetut stepit johtavatkin hieman suurempaan määrään mappayksestä huolehtivaa koodia, on stepit syytä kirjata mahdollisimman kuvaavasti ja huolehtia detaljeista mappaavan koodin puolella. Stepit mappaavien eri metodien samankaltainen koodi kannattaa ehdottomasti eriyttää omiin apumetodeihin, kuten esimerkissäkin tapahtuu (metodit _logInWith_ ja _pageHasContent_).

Testien konfiguraatioon liittyy vielä muutama detalji. Testit alustava luokka <code>RunCucumberTest</code> on nyt seuraava:

```java
@RunWith(Cucumber.class)
@CucumberOptions(
    plugin = "pretty",
    features = "src/test/resources/ohtu",
    snippets = SnippetType.CAMELCASE
)

public class RunCucumberTest {
    @ClassRule
    public static ServerRule server = new ServerRule(4567);
}
```

Luokka määrittelee testeille [ClassRule](https://github.com/junit-team/junit4/wiki/rules#classrule):n, eli joukon toimenpiteitä, jotka suoritetaan ennen kuin testien suoritus aloitetaan ja kun testien suoritus on ohi. Toimenpiteet määrittelevä luokka <code>ServerRule</code> näyttää seuraavalta:

```java

public class ServerRule extends ExternalResource {

    private final int port;

    public ServerRule(int port) {
        this.port = port;
    }

    @Override
    protected void before() throws Throwable {
        Spark.port(port);
        UserDao dao = new UserDaoForTests();
        dao.add(new User("jukka", "akkuj"));
        Main.setDao(dao);
        Main.main(null);
    }

    @Override
    protected void after() {
        Spark.stop();
    }

}
```

Metodi <code>before</code> käynnistää web-sovelluksen _ennen testien suorittamista_ (komento _Main.main(null)_). Web-sovellukselle myös injektoidaan testejä varten tehty _UserDao_-olio, jolle on lisätty yksi käyttäjä- ja salasana.

Metodi <code>after</code> sulkee web-sovelluksen testien päätteeksi.

Suorita nyt testit komennolla <code>gradle test</code>

Huomaa, että testit käynnistävät sovelluksen samaan porttiin kuin sovellus käynnistyy komennolla <code>gradle run</code>. Jos saat virheilmoituksen:

<pre>
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':test'.
> Process 'Gradle Test Executor 6' finished with non-zero exit value 100
  This problem might be caused by incorrect test process configuration.
  Please refer to the test execution section in the User Manual at https://docs.gradle.org/5.6.3/userguide/java_testing.html#sec:test_execution

* Try:
Run with --stacktrace option to get the stack trace. Run with --debug option to get more log output. Run with --scan to get full insights.
</pre>

syynä on todennäköisesti se, että sovellus on päällä. Joudutkin sulkemaan sovelluksen testien suorittamisen ajaksi.

Jos Seleniumin kanssa oli ongelmia ja käytit HtmlUnitDriveria niin määrittele luokassa Stepdefs driver kentäksi new HtmlUnitDriver();

Jos haluat pitää sovelluksen päällä testatessasi, käynnistä se johonkin muuhun portiin, esim. komento
<code>PORT=4569 gradle run</code> käynnistää sovelluksen porttiin 4569.

Voit nyt halutessasi poistaa testien huonon version eli tiedoston _logging_in_antipattern.feature_ ja siihen liittyvät Java-stepit.

**Lisää** User storylle _User can log in with valid username/password-combination_ seuraava skenaario ja määrittele sille sopivat _When_ ja _Then_ -stepit:

<pre>
Scenario: nonexistent user can not login to 
    Given login is selected
    When  ...
    Then  ...
</pre>

Tee steppien nimistä kuvaavasti nimettyjä.

**Protip** jos et saa jotain testiä menemään läpi, kannattaa "pysäyttää" testin suoritus ongelmalliseen paikkaan lisäämällä stepin koodiin esim. rivi

```java
try{ Thread.sleep(120000); } catch(Exception e){}  // suoritus pysähtyy 120 sekunniksi
```

ja tarkastella sitten ohjelman tilaa testin käyttämästä selaimesta.

_HUOM_: konsoliin tulostuu seuraava _STANDARD_ERROR_ jota ei tarvitse välittää:

<pre>
ohtu.RunCucumberTest STANDARD_ERROR
    SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
    SLF4J: Defaulting to no-operation (NOP) logger implementation
    SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
</pre>

### 9. Web-sovelluksen testaaminen osa 2

**HUOM:** saat testien suorituksen huomattavasti nopeammaksi käyttämällä ChromeDriverin sijaan [HtmlUnitDriver](https://github.com/SeleniumHQ/selenium/wiki/HtmlUnitDriver):iä joka ns. headless- eli käyttöliittymätön selain.

HtmlUnitDriver vaikeuttaa testien debuggaamista, joten jos jotain ongelmia ilmenee, kannattanee debuggaamiseen käyttää ChromeDriveriä.

Tee User storylle _A new user account can be created if a proper unused username and a proper password are given_ seuraavat skenaariot ja niille sopivat stepit:

<pre>
Feature: A new user account can be created if a proper unused username and password are given

    Scenario: creation is successful with valid username and password
        Given command new user is selected
        When  a valid username "liisa" and password "salainen1" and matching password confirmation are entered
        Then  a new user is created

    Scenario: creation fails with too short username and valid password
        Given command new user is selected
        When  ...
        Then user is not created and error "username should have at least 3 characters" is reported   

    Scenario: creation fails with correct username and too short password
        Given command new user is selected
        When  ...
        Then user is not created and error "password should have at least 8 characters" is reported   

    Scenario: creation fails when password and password confirmation do not match
        Given command new user is selected
        When  ...
        Then user is not created and error "password and password confirmation do not match" is reported   
</pre>

Käyttäjätunnus ja salasana noudattavat samoja sääntöjä kuin _tehtävässä 7_ eli

- käyttäjätunnuksen on oltava merkeistä a-z koostuva vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä
- salasanan on oltava pituudeltaan vähintään 8 merkkiä ja se ei saa koostua pelkästään kirjaimista

**Laajenna koodiasi siten, että testit menevät läpi.**

### 10. Web-sovelluksen testaaminen osa 3

Tee User storylle _A new user account can be created if a proper unused username and a proper password are given_ vielä seuraavat skenaariot ja niille sopivat stepit:

<pre>
Scenario: user can login with successfully generated account
    Given user with username "lea" with password "salainen1" is successfully created
    And   login is selected
    When  ...
    Then  ...  

Scenario: user can not login with account that is not successfully created
    Given user with username "aa" and password "bad" is tried to be created
    And   login is selected
    When  ...
    Then  ...  
</pre>

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>

Huom! Varmista, että salasanat.txt on lisätty .gitignoreen. Jos ei ole, lisää se sinne. Et halua salasanojesi, edes testeissä käytettävien, päätyvän githubiin.
