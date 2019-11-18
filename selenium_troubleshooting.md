---
layout: page
title: Selenium troubleshooting
inheader: no
permalink: /selenium_troubleshooting/
---

## Selenium troubleshooting

Osalla on ollut ongelmia Seleniumin toiminnan kanssa. Alla muutamia tapoja, miten ongelmat on saatu ratkaisuta. Jos törmäät ongelmaan ja saat sen ratkaistua jollain alla mainitsemattomalla tavalla, lisää ohje dokumenttiin editoimalla [tätä]()

### Tapa 1: HtmlUnit-driver

[HtmlUnitDriver](https://github.com/SeleniumHQ/selenium/wiki/HtmlUnitDriver) on ns. [headless](https://en.wikipedia.org/wiki/Headless_browser)-selain, eli sillä ei ole graafista käyttöliittymää. Jos haluat tietää millä sivulla selain on menossa, joudut esim. tulostamaan sivun lähdekoodin konsoliin komennolla <code>System.out.println(driver.getPageSource());</code>.

Ota HtmlUnitDriver käyttöön seuraavasti:

```java
...
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

public class Tester {

    public static void main(String[] args) {
        WebDriver driver = new HtmlUnitDriver();
        driver.get("http://localhost:4567");
        
        // tulostetaan sivu konsoliin
        System.out.println(driver.getPageSource());
        
        WebElement element = driver.findElement(By.linkText("login"));
        element.click();

        // tulostetaan sivu konsoliin
        System.out.println(driver.getPageSource());
        
        // ...

        driver.quit();
    }
    
}
```

HtmlUnitDriver:in hyvä puoli on nopeus. Voit käyttää sitä myös testeissä. Testien debuggaaminen muuttuu hankalammaksi, mutta testit toimivat nopeasti. Testejä debugatessa best practice lienee sivun html-koodin tulostaminen konsoliin.

### Tapa 2: geckodriver downloadaus (testattu syksyllä 2019)

Lataa ja asenna geckodriver [täällä olevan ensimmäisen vastauksen mukaan](https://askubuntu.com/questions/870530/how-to-install-geckodriver-in-ubuntu)

Korvaa ohjeen kohta 4. tällä: 

_sudo mv geckodriver /usr/local/bin/_

Ota koodissa käyttöön _FirefoxDriver_:

```java
import org.openqa.selenium.firefox.FirefoxDriver;

/// ...

    WebDriver driver = new FirefoxDriver();
    final String URL = "http://localhost:4567";
    driver.get(URL);
```

### Tapa 3: chromedriverin downloadaus

**Tätä ja seuraavia tapoja ei ole testattu tämän kurssin aikana**, joten on epäselvää toimivatko nämä, tai jos toimivat niin todennäköisesti vasta jos kirjastojen versiot muutetaan uudempiin. Tee sivulle pull request, jos saat jonkin tavan toimimaan.

Lataa [täältä](https://sites.google.com/a/chromium.org/chromedriver/downloads) ja asenna ChromeDriver.

Lataaminen ja asentaminen macillä tapahtuu komennolla `brew cask install chromedriver`. Tämän jälkeen pitäisi toimia ilman muuta määrittelyä. (brew pitää olla asennettuna etukäteen)

Tee seuraava määrittely seleniumia käyttävässä tiedostossa:

```java
// windowsissa
System.setProperty("webdriver.chrome.driver", "oma_polku/chromedriver.exe"); 

// macissa ja linuxeissa
System.setProperty("webdriver.chrome.driver", "oma_polku/chromedriver"); 
```

Testejä varten kannattaa määrittely sijoittaa luokan <code>ServerRule</code> metodiin <code>before</code>.

### Tapa 4: WebDriverManager

Lisää projektille riippuvuus _webdrivermanager_:

```groovy
dependencies {
    // ...
    compile ("io.github.bonigarcia:webdrivermanager:1.6.2") {
        exclude group: 'org.seleniumhq.selenium'
    }
}
```

[WebDriverManager](https://github.com/bonigarcia/webdrivermanager) pyrkii automaattisesti konfiguroimaan käytetyn selainajurin. Sitä kutsutaan ennen valitun ajurin luomista, esimerkiksi ChromeDriver:n yhteydessä:

```java
...
import io.github.bonigarcia.wdm.ChromeDriverManager;
...

ChromeDriverManager.getInstance().setup();
driver = new ChromeDriver();
```

Saadakseen sen cucumber testien yhteydessä käyttöön, ajurin alustuksen voi lisätä @Before annotaatiolla varustettuun funktioon samaan tapaan kuin jUnit testeissä:

```java
...
import io.github.bonigarcia.wdm.ChromeDriverManager;
...

@Before
public void setUp() {
    ChromeDriverManager.getInstance().setup();
    driver = new ChromeDriver();
}
```

### tapa 5: firefox-driver

Kokeile käyttää FirefoxDriveria Chromen sijaan. 

#### vaihtoehto 1 (Testattu Linuxilla)

Projektiin oletusarvoisesti määritelty Selenium 2.41.0 tukee ainoastaan Firefoxin versiota 28. Se löytyy [täältä](https://ftp.mozilla.org/pub/firefox/releases/28.0/) kun klikkaat omaa arkkitehtuuriasi. Pura paketti ja ota polku talteen.

#### vaihtoehto 2 (Testattu OSX:llä)

Päivitä tiedostossa _build.gradle_ määritelty selenium uudempaan versioon:

```groovy
project.ext {
    cucumberVersion = '1.2.5'
    seleniumVersion = '2.52.0'
}
```

ja päivitä _spark-core_ uudempaan versioon:

```groovy
dependencies {
    // vaihda tästä versionumeroa
    compile group: 'com.sparkjava', name: 'spark-core', version: '2.5.5'
    // lisää seuraava rivi
    compile group: 'org.slf4j', name: 'slf4j-simple', version: '1.7.25'
    // ...
}
```

Selenium 2.52.0 tukee hieman uudempia Firefoxeja, esim versiota 45.8.0. Se löytyy [täältä](https://ftp.mozilla.org/pub/firefox/releases/45.8.0esr/) kun klikkaat omaa arkkitehtuuriasi. Pura paketti ja ota polku talteen.

### molemmat vaihtoehdot jatkavat täältä

Määrittele seuraavasti:
```java
// ...
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;

public class Tester {
    public static void main(String[] args) {
        File pathBinary = new File("polku/jonne/purit/firefoxin/firefox.exe");
        FirefoxBinary firefoxBinary = new FirefoxBinary(pathBinary);
        FirefoxProfile firefoxProfile = new FirefoxProfile();
        WebDriver driver = new FirefoxDriver(firefoxBinary, firefoxProfile);
    } 
}   
```

Määrittele <code>FirefoxDriver</code> vastaavalla tavalla testeissä.
 
