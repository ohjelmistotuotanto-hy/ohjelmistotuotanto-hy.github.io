---
layout: page
title: Selenium troubleshooting
inheader: no
permalink: /selenium_troubleshooting/
---

## Selenium troubleshooting

Osalla on ollut ongelmia Seleniumin toiminnan kanssa. Alla muutamia tapoja, miten ongelmat on saatu ratkaisuta. Jos törmäät ongelmaan ja saat sen ratkaistua jollain alla mainitsemattomalla tavalla, lisää ohje dokumenttiin editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/selenium_troubleshooting.md)

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

#### Tapa 2: chromedriverin downloadaus

Kun itse kokeilin tehtävää vuoden tauon jälkeen marraskuussa 2020 uudella koneellani törmäsin seuraavaan virheilmoitukseen

```
Exception in thread "main" java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html
        at com.google.common.base.Preconditions.checkState(Preconditions.java:847)
        at org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)
        at org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)
        at org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)
        at org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)
        at org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)
        at org.openqa.selenium.chrome.ChromeDriver.<init>(ChromeDriver.java:123)
        at ohtu.Tester.main(Tester.java:11)
```

Ongelma ratkasi [täällä](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver#quick-installation) olevalla ohjeella (oma koneeni Mac). Ohjeista toisen pitäisi toimia TKT:n fuksikannettaville, mutta ne edellyttävät pääkäyttäjän oikeuksia

### Tapa 3: geckodriver downloadaus (testattu syksyllä 2019)

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

#### vaihtoehto 2 (Testattu macOS:llä)

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
 
### Tapa 6

Linuxin alla ChromeDriverin kutsuma chrome-binääri saattaa oletusarvoisesti haluta käyttää käyttöliittymänsä piirtämiseen väärän alustan taustamoottoria, eikä anna erityisen auttavaista virhetulostetta konsoliin.

```
$ ./gradlew browse

> Task :browse
Starting ChromeDriver 86.0.4240.75 (c69c33933bfc72a159aceb4aeca939eb0087416c-refs/branch-heads/4240@{#1149}) on port XYZ
...
Exception in thread "main" org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.
  (unknown error: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /usr/lib64/chromium-browser/chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
...
```

Vianselvityksessä voi selvitä esim. seuraavaa:

```
$ /usr/lib64/chromium-browser/chrome
[1661360:1661360:1116/191311.250169:ERROR:wayland_connection.cc(72)] Failed to connect to Wayland display
[1661360:1661360:1116/191311.250227:FATAL:ozone_platform_wayland.cc(191)] Failed to initialize Wayland platform
(core dumped)  /usr/lib64/chromium-browser/chrome
```

Selain on yrittänyt piirtää itsensä Wayland-protokollaa käyttäen, vaikka olemme X11-istunnossa!

Ongelmaa voi kiertää muokkaamalla ohjelmakoodia esimerkiksi seuraavasti

```java
...
import org.openqa.selenium.chrome.ChromeOptions;
...
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--ozone-platform=x11");
        //WebDriver driver = new ChromeDriver();
        WebDriver driver = new ChromeDriver(options);
```
