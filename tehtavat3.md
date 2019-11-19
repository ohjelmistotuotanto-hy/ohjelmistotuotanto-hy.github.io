---
layout: page
title: Viikko 3
inheader: no
permalink: /tehtavat3/
---

## Viikko 3

**HUOM**: [kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. Ilmoittautuminen kokeeseen alkaa 16.11.

*Alla olevien tehtävien deadline on maanantaina 18.11. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ma 14-16 B221 
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/3), joiden deadline on sunnuntaina 17.11. klo 23:59:00.  

Tehtävissä 1-3 tutustutaan siihen miten gradle-sovelluksiin lisätään ulkoisia kirjastoja riippuvuudeksi, sekä miten riippuvuuksia sisältävästä koodista saadaan generoitua jar-paketti. Loput tehtävät liittyvät storyjen hyväksymistestauksen automatisointiin tarkoitetun Cucumberin, sekä selainsovellusten testaamiseen käytettävän Selenium-kirjaston soveltamiseen. 

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat3.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### Huomio gradleen liittyen

Käytämme tälläkin viikolla gradle-muotoisia projekteja. Jos gradle-koodi lukee syötteitä komentoriviltä, tulee määrittelytiedostojen loppuun liittää seuraava

```groovy
run {
    standardInput = System.in
}
```

Ilman tätä määrittelyä ohjelmaa gradlella suorittaessa, eli komennolla `gradle run`, ohjelma ei pääse käsiksi syötevirtaan ja scannerin luominen epäonnistuu.

Tämän viikon tehtäviin liittyviin projekteihin määrittely on jo lisätty.

Jos ohjelma lukee syötteitä käyttäjältä, kannattaa se suorittaa komennolla `gradle -q --console plain run`, jolloin gradlen tekemät tulostukset eivät tule konsoliin.

*HUOM!* näyttää siltä, että NetBeans 11.1:llä Scanner ei toimi ollenkaan gradle-projekteissa, eli jos törmäät samaan ongelmaan, suorita ohjelmat komentoriviltä.

### 1. lisää gradlea: riippuvuuksien lisääminen

Hae kurssirepositorion <https://github.com/ohjelmistotuotanto-hy/syksy2019> hakemistossa viikko3/nhlreader lähes tyhjä gradle-projektin runko.

* mukana on kohta tarvitsemasi luokka _Player_ 

Tehdään ohjelma, jonka avulla voi hakea <https://nhl.com>-sivulta kuluvan kauden NHL-liigan tilastotietoja. Jos tarkkoja ollaan, niin tilastot haetaan tämän kurssin tarpeisiin rakennetulta palvelimelta, joka hakee todelliset tilastot NHL:n sivulta kerran vuorokaudessa.

Näet tilastojen [json](https://en.wikipedia.org/wiki/JSON)-muotoisen raakadatan web-selaimella osoitteesta <https://nhlstatisticsforohtu.herokuapp.com/players>

Tee ohjelma, joka listaa _suomalaisten pelaajien_ tilastot.

Ohjelmassa tarvitaan kahta kirjastoa eli _riippuvuutta_:

* HTTP-pyynnön tekemiseen [Apache HttpClient Fluent API](https://hc.apache.org/httpcomponents-client-ga/tutorial/html/fluent.html)
* json-muotoisen merkkijonon muuttaminen olioksi [http://code.google.com/p/google-gson/](http://code.google.com/p/google-gson/)

Kertaa nopeasti [viime viikolta](/gradle#riippuvuudet), miten gradle-projektin riippuvuudet määritellään. Tarvittaessa lisää tietoa löytyy [Gradlen manuaalista](https://docs.gradle.org/current/userguide/artifact_dependencies_tutorial.html)

Liitä projektisi _käännösaikaisiksi_ (compile) riippuvuuksiksi

* _Apache HttpClient Fluent API_ ja _gson_
* löydät riippuvuuksien tiedot osoitteesta [http://mvnrepository.com/](http://mvnrepository.com/)
* Ota molemmista uusin versio

Voit ottaa projektisi pohjaksi seuraavan tiedoston:

```java
package ohtu;

import com.google.gson.Gson;
import java.io.IOException;
import org.apache.http.client.fluent.Request;

public class Main {
    public static void main(String[] args) throws IOException {
        String url = "https://nhlstatisticsforohtu.herokuapp.com/players";
        
        String bodyText = Request.Get(url).execute().returnContent().asString();
                
        System.out.println("json-muotoinen data:");
        System.out.println( bodyText );

        Gson mapper = new Gson();
        Player[] players = mapper.fromJson(bodyText, Player[].class);
        
        System.out.println("Oliot:");
        for (Player player : players) {
            System.out.println(player);
        }   
    }
  
}
```

Tehtäväpohjassa on valmiina luokan <code>Player</code> koodin runko. Gson-kirjaston avulla json-muotoisesta datasta saadaan taulukollinen <code>Player</code>-olioita, joissa jokainen olio vastaa yhden pelaajan tietoja. Tee luokkaan oliomuuttujat (sekä tarvittaessa getterit ja setterit) kaikille json-datassa oleville kentille, joita ohjelmasi tarvitsee. 

Ohjelmasi voi toimia esimerkiksi seuraavalla tavalla:

<pre>
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
</pre>

Tulostusasu ei tässä tehtävässä ole oleellista, eikä edes se mitä pelaajien tiedoista tulostetaan.

### 2. siistimpi pelaajalista

Tulosta suomalaiset pelaajat pisteiden (goals + assists) mukaan järjestettynä. Tarkka tulostusasu ei ole taaskaan oleellinen, mutta se voi esimerkiksi näyttää seuraavalta:

<pre>
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
</pre>

### 3. lisää gradlea: jar joka sisältää kaikki riippuvuudet

* tehdään äskeisen tehtävän projektista jar-tiedosto komennolla <code>gradle jar</code>
* suoritetaan ohjelma komennolla <code>java -jar build/libs/nhlreader.jar</code>
* mutta ohjelma ei toimikaan, tulostuu:

```bash
$  java -jar build/libs/nhlreader.jar
Exception in thread "main" java.lang.NoClassDefFoundError: org/apache/http/client/fluent/Request
	at ohtu.Main.main(Main.java:16)
Caused by: java.lang.ClassNotFoundException: org.apache.http.client.fluent.Request
	at java.net.URLClassLoader.findClass(URLClassLoader.java:381)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
	... 1 more
```

Mistä on kyse? Ohjelman riippuvuuksia eli projekteja Apache HttpClientin ja gson vastaavat jar-tiedostot eivät ole käytettävissä, joten ohjelma ei toimi.

Saamme generoitua ohjelmasta jar-tiedoston, joka sisältää myös kaikki riippuvuudet gradlen [shadow](https://plugins.gradle.org/plugin/com.github.johnrengelman.shadow)-pluginin avulla. 

Ota plugin käyttöön lisäämällä seuraava tiedoston _build.gradle_ alkuun:

```java
plugins {
  id 'com.github.johnrengelman.shadow' version '5.1.0'
}
```

**HUOM:** pluginin määrittely on lisättävä tiedoston _build.gradle_ alkuun, muuten koko konfiguraatio hajoaa.

Tutki komennon _gradle tasks_ avulla, miten saat muodostettua riippuvuudet sisältävän jarrin.

Generoi jar ja varmista, että ohjelma toimii komennolla <code>java -jar shadowilla_tehty_jar.jar</code>

### 4. Tutustuminen cucumberiin

Lue [täällä](/cucumber/) oleva Cucumber-johdanto ja tee siihen liittyvät tehtävät.

### 5. Kirjautumisen testit

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _viikko3/LoginCucumber_ oleva projekti. 

Tutustu ohjelman rakenteeseen. Piirrä ohjelman rakenteesta UML-kaavio.

Huomaa, että ohjelman _AuthenticationService_-olio ei talleta suoraan User-oliota vaan epäsuorasti _UserDAO_-rajapinnan kautta. Mistä on kysymys?

> DAO eli Data Access Object on yleisesti käytetty suunnittelumalli jonka avulla abstrahoidaan sovellukselta se, miten oliot on talletettu, ks. esim. <https://www.oracle.com/technetwork/java/dataaccessobject-138824.html>
>
> Ideana on, että sovellus "hakee" ja "tallettaa" User-oliot aina UserDAO-rajapinnan metodeja käyttäen. Sovellukselle on injektoitu konkreettinen toteutus, joka tallettaa oliot esim. tietokantaan tai tiedostoon. Se minne ja miten talletus tapahtuu on kuitenkin läpinäkyvää sovelluksen muiden osien kannalta.
>
> Ohjelmaamme on määritelty testauskäyttöön sopiva InMemoryUserDao, joka tallettaa User-oliot ainoastaan muistiin. Muu ohjelma säilyisi täysin muuttumattomana jos määriteltäisiin esim. SqliteUserDao, joka hoitaa talletuksen tietokantaan ja injektoitaisiin tämä sovellukselle.

Kokeile ohjelman suorittamista (ohjelman tuntemat komennot ovat _login_ ja _new_) ja suorita siihen liittyvät testit.

*Muistutus*: saat suoritettua ohjelman ilman gradlen välitulostuksia komennolla _gradle run --console=plain_

Tutki miten testien stepit on määritelty suoritettavaksi tiedostossa _src/test/java/ohtu/StepDefs.java_ 
Huomioi erityisesti, miten testit käyttävät testaamisen mahdollistavaa stub-olioa käyttäjän syötteen ja ohjelman tulosteen käsittelyyn. Periaate on täsmälleen sama kuin viikon 1 tehtävien [riippuvuuksien injektointiin](/riippuvuuksien_injektointi/) liittyvässä esimerkissä.

Lisää user storylle *User can log in with valid username/password-combination* seuraavat skenaariot ja määrittele niihin sopivat _When_ ja _Then_ -stepit:

<pre>
Scenario: user can not login with incorrect password
    Given command login is selected
    When  ...
    Then  ...

Scenario: nonexistent user can not login to 
    Given command login is selected
    When  ...
    Then  ...
</pre>

Tee stepeistä suoritettavat ja varmista että testit menevät läpi.

### 6. Uuden käyttäjän rekisteröitymisen testit

Tee user storylle *A new user account can be created if a proper unused username and a proper password are given* seuraavat skenaariot ja niille sopivat stepit:

<pre>
Feature: A new user account can be created if a proper unused username and password are given

    Scenario: creation is successful with valid username and password
        Given command new is selected
        When  ...
        Then  ...
    
    Scenario: creation fails with already taken username and valid password
        Given command new is selected
        When  ...
        Then  ...

    Scenario: creation fails with too short username and valid password
        Given command new is selected
        When  ...
        Then  ...

    Scenario: creation fails with valid username and too short password
        Given command new is selected
        When  ...
        Then  ...

    Scenario: creation fails with valid username and password long enough but consisting of only letters
        Given command new is selected
        When  ...
        Then  ...

    Scenario: can login with successfully generated account
        Given user "eero" with password "salainen1" is created
        And   command login is selected
        When  ...
        Then  ...  
</pre>

* käyttäjätunnuksen on oltava merkeistä a-z koostuva vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä
* salasanan on oltava pituudeltaan vähintään 8 merkkiä ja se ei saa koostua pelkästään kirjaimista ([vihje](https://docs.oracle.com/javase/8/docs/api/java/lang/Character.html))

Tee stepeistä suoritettavia ja **täydennä ohjelmaa siten että testit menevät läpi**. Oikea paikka koodiin tuleville muutoksille on luokan _AuthenticationService_ metodi _invalid_

**HUOM** skenaarioita kannattaa toteuttaa yksi kerrallaan, laittaen samalla vastaava ominaisuus ohjelmasta kuntoon. Eli **ÄLÄ** copypastea ylläolevaa kerrallaan _feature_-tiedostoon, vaan etene pienin askelin. Jos yksi skenaario ei mene läpi, älä aloita uuden tekemistä ennen kuin kaikki ongelmat on selvitetty. Seuraava luku antaa muutaman vihjeen testien debuggaamiseen.

### Cucumber-testien debuggaaminen

On todennäköistä että testien tekemisen aikana tulee ongelmia, joiden selvittäminen ei ole triviaalia. 

#### Suoritettavien testien lukumäärän rajoittaminen

Jos näin käy, kannattaa ongelmaa selvitellessä suorittaa ainoastaan yhtä testiä kerrallaan. Tämä onnistuu merkkaamalla ongelmallinen testi _tagilla_, eli _@_-merkillä alkavalla merkkijonolla. Seuraavassa on merkattu eräs testiskenaario tagilla _@problem_:  

<pre>
Feature: User can log in with valid username/password-combination

    // ...

    @problem
    Scenario: user can not login with incorrect password
        Given command login is selected
        When  username "pekka" and password "wrong" are entered
        Then  system will respond with "wrong username or password"

    // ...
</pre>

Määrittelemällä luokkaan _RunCucumberTest_ annotaatiolle _@CucumberOptions_ parametri _tags_, on mahdollista säädellä mitä testejä Cucumber suorittaa:

```java
@RunWith(Cucumber.class)
@CucumberOptions(
    plugin = "pretty", 
    features = "src/test/resources/ohtu", 
    snippets = SnippetType.CAMELCASE,
    tags = { "@problem" }
)

public class RunCucumberTest {}
```

Näin määriteltynä tulee suoritetuksi ainoastaan tagilla _@problem_ merkitty testi.

Sama tagi on mahdollista liittää myös useampaan skenaarioon, tai suoraan featureen, jolloin jokainen featureen liittyvä story tulee tagatyksi.

#### println-debuggaus

Myös vanha kunnon println-debuggaus toimii Cucumberin yhteydessä. Voit lisäillä println-komentoja testattavassa tai testikoodissa koodissa: 

```java
@Then("system will respond with {string}")
public void systemWillRespondWith(String expectedOutput) {
    System.out.println("ohjelma tulosti seuraavat rivit "+io.getPrints());
    assertTrue(io.getPrints().contains(expectedOutput));
}    
```

### 7. WebLogin

Tarkastellaan edellisestä tehtävästä tutun toiminnallisuuden tarjoamaa esimerkkiprojektia, joka löytyy [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _viikko3/WebLogin_ oleva projekti. 

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

### 8. Selenium, eli web-selaimen simulointi ohjelmakoodista

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

* epäonnistunut kirjautuminen: oikea käyttäjätunnus, väärä salasana
* uuden käyttäjätunnuksen luominen
* uuden käyttäjätunnuksen luomisen jälkeen tapahtuva ulkoskirjautuminen sovelluksesta

**HUOM1:** voit tehdä skenaariot yksi kerrallaan, kaiken main-metodiin, siten että laitat esim. kommentteihin muiden skenaarioiden koodin kun suoritat yhtä skernaariota

**HUOM2:** salasanan varmistuskentän (confirm password) nimi on _passwordConfirmation_

**HUOM3:**

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

### 9. Web-sovelluksen testaaminen: Cucumber+Selenium

Tehdään nyt sovellukselle hyväksymätestejä [Cucumberilla](/cucumber/).

Projektissa on valmiina User storystä _As a registered user can log in with valid username/password-combination_ kaksi eri _feature_-määrittelyä: 
* _logging_in.feature_ ja 
* _logging_in_antipattern.feature_

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

Huomaa, että testit käynnistävät sovelluksen samaan porttiin kuin sovellus käynnistyy komennolla <code>gradle run</code>. Jos saat  virheilmoituksen:

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

**Lisää** User storylle *User can log in with valid username/password-combination* seuraava skenaario ja määrittele sille sopivat _When_ ja _Then_ -stepit:

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

*HUOM*: konsoliin tulostuu seuraava *STANDARD_ERROR* jota ei tarvitse välittää:

<pre>
ohtu.RunCucumberTest STANDARD_ERROR
    SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
    SLF4J: Defaulting to no-operation (NOP) logger implementation
    SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
</pre>

### 10. Web-sovelluksen testaaminen osa 2

**HUOM:** saat testien suorituksen huomattavasti nopeammaksi käyttämällä ChromeDriverin sijaan [HtmlUnitDriver](https://github.com/SeleniumHQ/selenium/wiki/HtmlUnitDriver):iä joka ns. headless- eli käyttöliittymätön selain. 

HtmlUnitDriver vaikeuttaa testien debuggaamista, joten jos jotain ongelmia ilmenee, kannattanee debuggaamiseen käyttää ChromeDriveriä.

Tee User storylle *A new user account can be created if a proper unused username and a proper password are given* seuraavat skenaariot ja niille sopivat stepit:

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
* käyttäjätunnuksen on oltava merkeistä a-z koostuva vähintään 3 merkin pituinen merkkijono, joka ei ole vielä käytössä
* salasanan on oltava pituudeltaan vähintään 8 merkkiä ja se ei saa koostua pelkästään kirjaimista

**Laajenna koodiasi siten, että testit menevät läpi.** 

### 11. Web-sovelluksen testaaminen osa 3

Tee User storylle *A new user account can be created if a proper unused username and a proper password are given* vielä seuraavat skenaariot ja niille sopivat stepit:

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

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Huom! Varmista, että salasanat.txt on lisätty .gitignoreen. Jos ei ole, lisää se sinne. Et halua salasanojesi, edes testeissä käytettävien, päätyvän githubiin.
