---
layout: page
title: Cucumber
inheader: no
permalink: /cucumber/
---

## Cucumber

[Cucumber](https://cucumber.io) on user storyjen hyväksymistestauksen automatisointiin tarkoitettu kirjasto/työkalu. 

Ideana on kirjoittaa storyjen testit asiakkaan ymmärtävässä muodossa, luonnollisella kielellä, mutta tehdä niistä kuitenkin automaattisesti suoritettavia. 

Cucumber on [behavior-driven development eli BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) -koulukunnan kehittämä kirjasto. BDD:ssä pyritään välttämään termin _testi_ käyttöä ja sen sijaan puhutaan esimerkkitoiminnallisuuksista tai _skenaarioista_.

Vaikka Cucumber on varsinaisesti tarkoitettu koko ohjelmiston "end-to-end"-testaukseen, tarkastellaan ensin Cucumberin toimintaperiaatteita testaamalla yksittäistä luokkaa.

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _viikko3/HelloCucumber_ oleva projekti. 

Testattavana on yksinkertainen laskuri:

```java
public class Counter {
   int val = 0;

   public void increase() {
        val++;
   } 
   
   public void reset() {
        val = 0;
   }    
   
   public void increment(int a) {
        val += a;
   } 
   
   public int value() {
       return val;
   }
}
```

### Vaatimuksien ilmaiseminen

Laskurin haluttua toiminnallisuutta kuvaavat seuraavat user storyt
* As a user I want to be able to increase the counter value
* As a user I want to be able to set the counter to value zero  

Cucumberissa (ja muutamassa muussakin BDD-työkaluissa) vaatimukset ilmaistaan [Gherkin](https://docs.cucumber.io/gherkin/)-formaatissa. User storyista, eli käyttäjän haluamista toiminnallisuuksista käytetään nimitystä _feature_. Laskimen storyt voidaan ilmaista seuraavasti:

<pre>
Feature: As a user I want to be able to increase the counter value
</pre>


<pre>
Feature: As a user I want to be able to set the counter to value zero
</pre>  

Jokainen feature talletetaan omaan _.feature-päätteiseen_ tiedostoon. Featuret sijoitetaan gradle-projekteissa hakemiston _src/test/resources/_ alle. Esimerkkiprojektissa featuret ovat tiedostoissa _src/test/resources/ohtu/increasingCounter.feature_ ja _src/test/resources/ohtu/resetingCounter.feature_

Featureen liittyy joukko _skenaarioita_, jotka vastaavat käytännössä storyn hyväksymistestejä:

<pre>
Feature: As a user I want to be able to increase the counter value

  Scenario: Increment once
    Given Counter is initialized
    When it is incremented
    Then the value should be 1

  Scenario: Increment by many
    Given Counter is initialized
    When it is incremented by 5
    Then the value should be 5

  Scenario: Increment many times
    Given Counter is initialized
    When it is incremented
    And it is incremented
    And it is incremented
    Then the value should be 3
</pre>

Skenaariot taas kirjoitetaan _Given_, _When_, _Then_ -formaatissa. Jokaista skenaarion riviä kutsutaan askeleeksi eli _stepiksi_. 
- _Given_ kertoo skenaarion (eli testin) lähtötilanteen
- _When_ kuvaa operaation mitä skenaariossa testataan
- _Then_ ilmaisee mitä skenaariossa pitäisi tapahtua

Avainsanan _And_ avulla jokaiseen skenaarion askeleista voidaan liittää useita steppejä. Näin tehdään esimerkin kolmannessa skenaariossa. 

### Testien suorituskelpoiseksi tekeminen

Jotta testeistä saadaan suorituskelpoisia, tulee projektiin kirjoittaa skenaarion steppejä vastaava koodi. Jokainen steppi määritellään omana metodina luokassa _Stepdefs_. Esimerkin steppien määrittely tapahtuu seuraavasti: 

```java
public class Stepdefs {
  Counter counter;

  @Given("Counter is initialized")
  public void counterIsInitialized() {
    counter = new Counter();
  }

  @When("it is incremented")
  public void itIsIncremented() {
    counter.increase();
  }

  @Then("the value should be {int}")
  public void theValueShouldBe(Integer val) {
    assertEquals(val.intValue(), counter.value());
  }

  @When("it is incremented by {int}")
  public void itIsIncrementedBy(Integer val) {
    counter.increment(val);
  }
}
```

Jokaista metodia edeltää annotaatio, joka määrittelee mitä steppiä vastaavasta metodista on kyse. Kaikkien skenaarioiden _Given_-step on sama, se määrittelee että skenaariot alkavat laskurin luomisella

```java
@Given("Counter is initialized")
public void counterIsInitialized() {
  counter = new Counter();
}
```

Stepeissä voi olla "parametreja", eli skenaariossa 

<pre>
Scenario: Increment by many
  Given Counter is initialized
  When it is incremented by 5
  Then the value should be 5
</pre>

määritellyt luvut välitetään niitä vastaaville metodeille parametrina:

```java
@When("it is incremented by {int}")
public void itIsIncrementedBy(Integer val) {
  counter.increment(val);
}  

@Then("the value should be {int}")
public void theValueShouldBe(Integer val) {
  assertEquals(val.intValue(), counter.value());
} 
```

Onnistumisen varmistava _Then_-step suorittaa tarkastuksen JUnitin _assertEquals_-metodia käyttäen.

Cucumber edellyttää vielä pienen määrän konfiguraatiota, joka on tehty tiedostossa _src/.../RunCucumberTest.java_. Konfiguraatio on yksinkertainen, se määrittelee mistä hakemistosta _feature_-tiedostot löytyvät, sekä sen että testien tulos raportoidaan komentorivillä [`pretty`-formatterin](https://cucumber.io/docs/cucumber/reporting/) avulla:

```java
@RunWith(Cucumber.class)
@CucumberOptions(
  plugin = "pretty", 
  features = "src/test/resources/ohtu", 
  snippets = SnippetType.CAMELCASE 
)
public class RunCucumberTest {}
```

Määrittely on sikäli hämmentävä, että määriteltävä luokka _RunCucumberTest_ ei sisällä mitään koodia, ja kaikki oleellinen määrittely tapahtuu luokkaan liitetyn annotaation _@CucumberOptions_ parametreina.

Testit suoritetaan komennolla _gradle test_. Huomaa, että testien suorittaminen ei todennäköisesti toimi NetBeansin testinapilla.

### Nollaamisen skenaariot

Laskimen nollaamiseen liittyvä story on tiedostossa _src/test/resources/ohtu/resetingCounter.feature_

**Lisää storyyn seuraavat skenaariot**:

<pre>
Feature: As a user I want to be able to set the counter to value zero

  Scenario: Resetting after one increment
    Given Counter is initialized
    When it is incremented
    And it is reset 
    Then the value should be 0

  Scenario: Resetting after incrementing with several values
    Given Counter is initialized
    When it is incremented by 5
    And it is reset 
    Then the value should be 0
</pre>

Kun nyt suoritat testit, näyttää tulos seuraavalta:

![]({{ "/images/lh3-1.png" | absolute_url }}){:height="350px" }

Cucumber siis ilmoittaa osan stepeistä olevan _undefined_. Cucumber tulostaa myös valmiin metodirungon, jonka avulla stepin voi toteuttaa.

Kopioi stepin koodirunko luokkaan _Stepdefs_ ja täydennä se järkevällä tavalla. 

Varmista että testit toimivat.
