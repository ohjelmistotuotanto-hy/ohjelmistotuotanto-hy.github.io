---
layout: page
title: Viikko 4
inheader: no
permalink: /tehtavat4/
---

## Viikko 4

**HUOM**: [Kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. 

*Alla olevien tehtävien deadline on maanantaina 25.11. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ma 14-16 B221 
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/4), joiden deadline on sunnuntaina 24.11. klo 23:59:00.  

Tehtävissä 1-4 tutustutaan yksikkötestausta helpottavaan Mockito-kirjastoon. Tehtävissä 5 ja 6 refaktoroidaan sisäiseltä laadultaan heikossa kunnossa olevaa koodia.

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat4.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Yksikkötestaus ja riippuvuudet: Mockito, osa 1

Useimmilla luokilla on riippuvuuksia toisiin luokkiin. Esim. [viikon 2](http://localhost:4000/tehtavat2#9-riippuvuuksien-injektointi-osa-3-verkkokauppa) laskarien verkkokaupan luokka Kauppa riippui Pankista, Varastosta ja Viitegeneraattorista. Riippuvuuksien injektion ja rajapintojen avulla saimme mukavasti purettua riippuvuudet luokkien väliltä.

Vaikka luokilla ei olisikaan riippuvuuksia toisiin luokkiin, on tilanne edelleen se, että luokan oliot käyttävät joidenkin toisten luokkien olioiden palveluita. Tämä tekee yksikkötestauksesta välillä hankalaa. Miten esim. luokkaa _Kauppa_ tulisi testata? Tuleeko kaupan testeissä olla mukana toimivat versiot kaikista sen riippuvuuksista?

Olemme jo muutamaan otteeseen (esim. Nhl-Statsreader-tehtävässä [viikolla 1](http://localhost:4000/tehtavat1#15-riippuvuuksien-injektointi-osa-2-nhl-tilastot) ratkaisseet asian ohjelmoimalla riippuvuuden korvaavan "tynkäkomponentin". Javalle kuten kaikille muillekin kielille on tarjolla myös valmiita kirjastoja tynkäkomponenttien, toiselta nimeltään _mock-olioiden_ luomiseen.

Kuten pian huomaamme, mock-oliot eivät ole pelkkiä "tynkäolioita", mockien avulla voi myös varmistaa, että testattava luokka kutsuu olioiden metodeja asiaankuuluvalla tavalla.

Tutustumme nyt [Mockito-nimiseen](https://site.mockito.org/) mock-kirjastoon. 

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _koodi/viikko4/MockitoDemo_ oleva projekti. Kyseessä on yksinkertaistettu versio Verkkokauppaesimerkistä.

Kaupan toimintaperiaate on yksinkertainen:

``` java
Pankki myNetBank = new Pankki();
Viitegeneraattori viitteet = new Viitegeneraattori();
Kauppa kauppa = new Kauppa(myNetBank, viitteet);

kauppa.aloitaOstokset();
kauppa.lisaaOstos(5);
kauppa.lisaaOstos(7);
kauppa.maksa("1111");
``` 

Ostokset aloitetaan tekemällä metodikutsu <code>aloitaOstokset</code>. Tämän jälkeen "ostoskoriin" lisätään tuotteita, joiden hinta kerrotaan metodin <code>lisaaOstos</code> parametrina. Ostokset lopetetaan kutsumalla metodia <code>maksa</code> joka saa parametriksi tilinumeron miltä summa veloitetaan.

Kauppa tekee veloituksen käyttäen tuntemaansa luokan <code>Pankki</code> olioa. Viitenumerona käytetään luokan <code>Viitegeneraattori</code> generoimaa numeroa.

Projektiin on kirjoitettu kuusi Mockitoa hyödyntävää testiä. Testit testaavat, että kauppa tekee ostoksiin liittyvän veloituksen oikein, eli että se kutsuu _pankin_ metodia <code>maksa</code> oikeilla parametreilla, ja että jokaiselle laskutukselle on kysytty viitenumero _viitegeneraattorilta_. Testit siis eivät kohdistu olion pankki tilaan vaan sen muiden olioiden kanssa käymän interaktion oikeellisuuteen. Testeissä kaupan riippuvuudet (Pankki ja Viitegeneraattori) on määritelty mock-olioina.

Seuraavassa testi, joka testaa, että kauppa kutsuu pankin metodia oikealla tilinumerolla ja summalla:

``` java
@Test
public void kutsutaanPankkiaOikeallaTilinumerollaJaSummalla() {
    Pankki mockPankki = mock(Pankki.class);
    Viitegeneraattori mockViite = mock(Viitegeneraattori.class);

    kauppa = new Kauppa(mockPankki, mockViite);

    kauppa.aloitaOstokset();
    kauppa.lisaaOstos(5);
    kauppa.lisaaOstos(5);
    kauppa.maksa("1111");

    verify(mockPankki).maksa(eq("1111"), eq(10), anyInt());
}
``` 

Testi siis aloittaa luomalla kaupan riippuvuuksista mock-oliot:

``` java
Pankki mockPankki = mock(Pankki.class);
Viitegeneraattori mockViite = mock(Viitegeneraattori.class);

kauppa = new Kauppa(mockPankki, mockViite);
``` 

kyseessä eivät ole normaalit oliot vaan normaaleja olioita "matkivat" valeoliot, jotka myös pystyvät tarkastamaan, että niiden metodeja on kutsuttu oikeilla parametreilla. 

Testi tarkastaa, että kaupalle tehdyt metodikutsut aiheuttavat sen, että pankin mock-olion metodia <code>maksa</code> on kutsuttu oikeilla parametreilla. Kolmanteen parametriin eli tilinumeroon ei kiinnitetä huomiota:

``` java
verify(mockPankki).maksa(eq("1111"), eq(10), anyInt());
``` 

Mock-olioille tehtyjen metodikutsujen paluuarvot on myös mahdollista määritellä. Seuraavassa määritellään, että viitegeneraattori palauttaa arvon 55 kun sen metodia <code>seuraava</code> kutsutaan:

```java
@Test
public void kaytetaanMaksussaPalautettuaViiteta() {
    Pankki mockPankki = mock(Pankki.class);
    Viitegeneraattori mockViite = mock(Viitegeneraattori.class);

    // määritellään viitegeneraattorin metodikutsun vastaus
    when(mockViite.seuraava()).thenReturn(55);

    kauppa = new Kauppa(mockPankki, mockViite);

    kauppa.aloitaOstokset();
    kauppa.lisaaOstos(5);
    kauppa.lisaaOstos(5);
    kauppa.maksa("1111");

    verify(mockPankki).maksa(eq("1111"), eq(10), eq(55));
}
``` 

Testin lopussa varmistetaan, että pankin mockolioa on kutsuttu oikeilla parametrinarvoilla, eli kolmantena parametrina tulee olla viitegeneraattorin palauttama arvo.

Tutustu projektiin ja sen kaikkiin testeihin.

Testit suoritetaan normaaliin tapaan komennolla <code>gradle test</code>

Riko joku testi, esim. edellä listattu muuttamalla sen ekspektaatiota:
``` 
verify(mockPankki).maksa(eq("1111"), eq(10), eq(54));
``` 

ja varmista että testi ei mene läpi. Katso miltä virheilmoitus näyttää.

Mockiton dokumentaatio löytyy osoitteesta <http://site.mockito.org>

### 2. Yksikkötestaus ja riippuvuudet: Mockito, osa 2

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _koodi/viikko4/MaksukorttiMockito_ oleva projekti.

Tässä tehtävässä on tarkoitus testata ja täydentää luokkaa <code>Kassapaate</code>. **Maksukortin koodiin ei tehtävässä saa koskea ollenkaan! Testeissä ei myöskään ole tarkoitus luoda konkreettisia instansseja maksukortista, testien tarvitsemat kortit tulee luoda mockitolla.**

Projektissa on valmiina kaksi testiä:

```java
package ohtu.maksukortti;

public class KassapaateTest {
    
    Kassapaate kassa;
    Maksukortti kortti;
    
    @Before
    public void setUp() {
        kassa = new Kassapaate();
        kortti = mock(Maksukortti.class);
    }
    
    @Test
    public void kortiltaVelotetaanHintaJosRahaaOn() {
        when(kortti.getSaldo()).thenReturn(10);
        kassa.ostaLounas(kortti);
        
        verify(kortti, times(1)).getSaldo();
        verify(kortti).osta(eq(Kassapaate.HINTA));
    }

    @Test
    public void kortiltaEiVelotetaJosRahaEiRiita() {
        when(kortti.getSaldo()).thenReturn(4);
        kassa.ostaLounas(kortti);
        
        verify(kortti, times(1)).getSaldo();
        verify(kortti, times(0)).osta(anyInt());
    }
}
``` 

Ensimmäisessä testissä varmistetaan, että jos kortilla on riittävästi rahaa, kassapäätteen metodin <code>ostaLounas</code> kutsuminen kysyy kortin saldon _ja_ velottaa summan kortilta. 

Testi ottaa siis kantaa ainoastaan siihen miten kassapääte kutsuu maksukortin metodeja. Maksukortin saldoa ei erikseen tarkasteta, sillä oletuksena on, että maksukortin omat testit varmistavat kortin toiminnan.

Toinen testi varmistaa, että jos kortilla ei ole riittävästi rahaa, kassapäätteen metodin <code>ostaLounas</code> kutsuminen kysyy kortin saldon mutta _ei_ veloita kortilta rahaa.

**Testit eivät mene läpi. Korjaa kassapäätteen metodi <code>ostaLounas</code>.**

**Tee tämän jälkeen samaa periaatetta noudattaen seuraavat testit:**
* kassapäätteen metodin <code>lataa</code> kutsu lisää maksukortille ladattavan rahamäärän käyttäen kortin metodia <code>lataa</code> jos ladattava summa on positiivinen
* kassapäätteen metodin <code>lataa</code> kutsu ei tee maksukortille mitään jos ladattava summa on negatiivinen

Korjaa kassapäätettä siten, että testit menevät läpi. 

### 3. Yksikkötestaus ja riippuvuudet: Mockito, osa 3

Testataan [viikolta 2](/tehtavat2#9-riippuvuuksien-injektointi-osa-3-verkkokauppa) tutun Verkkokaupan luokkaa <code>Kauppa</code>.

- Jos et tehnyt tehtävää, sovellus löytyy [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _koodi/viikko4/Verkkokauppa_.

Kaupalle injektoidaan konstruktorissa Pankki, Viitelaskuri ja Varasto. Tehdään näistä testeissä Mockitolla mockatut versiot.

Seuraavassa esimerkkinä testi, joka testaa, että ostostapahtuman jälkeen pankin metodia __tilisiirto__ on kutsuttu:

``` java
package ohtu.verkkokauppa;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class KauppaTest {

    @Test
    public void ostoksenPaaytyttyaPankinMetodiaTilisiirtoKutsutaan() {
        // luodaan ensin mock-oliot
        Pankki pankki = mock(Pankki.class);

        Viitegeneraattori viite = mock(Viitegeneraattori.class);
        // määritellään että viitegeneraattori palauttaa viitten 42
        when(viite.uusi()).thenReturn(42);

        Varasto varasto = mock(Varasto.class);
        // määritellään että tuote numero 1 on maito jonka hinta on 5 ja saldo 10
        when(varasto.saldo(1)).thenReturn(10); 
        when(varasto.haeTuote(1)).thenReturn(new Tuote(1, "maito", 5));

        // sitten testattava kauppa 
        Kauppa k = new Kauppa(varasto, pankki, viite);              

        // tehdään ostokset
        k.aloitaAsiointi();
        k.lisaaKoriin(1);     // ostetaan tuotetta numero 1 eli maitoa
        k.tilimaksu("pekka", "12345");

        // sitten suoritetaan varmistus, että pankin metodia tilisiirto on kutsuttu
        verify(pankki).tilisiirto(anyString(), anyInt(), anyString(), anyString(),anyInt());   
        // toistaiseksi ei välitetty kutsussa käytetyistä parametreista
    }
}

```

Aloita siten, että saat esimerkkitestin toimimaan.

Muista lisätä _build.gradle_ tiedostoon riippuvuudeksi Mockito. Katso mallia edellisten tehtävien projekteista. 

Riippuen käyttämästäsi NetBeansin versiosta, saatat joutua luomaan testejä varten sopivan hakemistorakenteen (ks. edellisen tehtävän hakemistorakenne), muuten NetBeans ei suostu luomaan projektiin testejä.

Tee seuraavat testit:

* aloitetaan asiointi, koriin lisätään tuote, jota varastossa on ja suoritetaan ostos, eli kutsutaan metodia kaupan _tilimaksu()_, varmista että kutsutaan pankin metodia _tilisiirto_ oikealla asiakkaalla, tilinumeroilla ja summalla
  * tämä siis on muuten copypaste esimerkistä, mutta verify:ssä on tarkastettava että parametreilla on oikeat arvot
* aloitetaan asiointi, koriin lisätään kaksi eri tuotetta, joita varastossa on ja suoritetaan ostos, varmista että kutsutaan pankin metodia _tilisiirto_ oikealla asiakkaalla, tilinumerolla ja summalla
* aloitetaan asiointi, koriin lisätään kaksi samaa tuotetta, jota on varastossa tarpeeksi ja suoritetaan ostos, varmista että kutsutaan pankin metodia _tilisiirto_ oikealla asiakkaalla, tilinumerolla ja summalla
* aloitetaan asiointi, koriin lisätään tuote, jota on varastossa tarpeeksi ja tuote joka on loppu ja suoritetaan ostos, varmista että kutsutaan pankin metodia _tilisiirto_ oikealla asiakkaalla, tilinumerolla ja summalla

Kaikkien testien tarkastukset onnistuvat mockiton _verify_-komennolla.

Muista, että kaikille testeille yhteiset alustukset on mahdollista tehdä metodissa, joka toistetaan ennen jokaista testiä:

```java
Pankki pankki;
// ...

@Before
public void setUp() {
    pankki = mock(Pankki.class);
    // ...
}
```

### 4. Yksikkötestaus ja riippuvuudet: Mockito, osa 4

Jatketaan edellisen tehtävän koodin testaamista

* varmista, että metodin <code>aloitaAsiointi</code> kutsuminen nollaa edellisen ostoksen tiedot (eli edellisen ostoksen hinta ei näy uuden ostoksen hinnassa), katso tarvittaessa apua projektin MockitoDemo testeistä!
* varmista, että kauppa pyytää uuden viitenumeron jokaiselle maksutapahtumalle, katso tarvittaessa apua projektin MockitoDemo testeistä!

Kaikkien testien tarkastukset onnistuvat mockiton _verify_-komennolla.

Tarkasta viikoilla 1 ja 2 käytetyn JaCoCon avulla mikä on luokan Kauppa testauskattavuus. 

Jotain taitaa puuttua. Lisää testi, joka nostaa kattavuuden noin sataan prosenttiin!

### Mock-olioiden käytöstä

Mock-oliot saattoivat tuntua hieman monimutkaisilta edellisissä tehtävissä. Mockeilla on kuitenkin paikkansa. Jos testattavana olevan olion riippuvuutena oleva olio on monimutkainen, kuten esim. verkkokauppaesimerkissä luokka <code>Pankki</code>, kannattaa testattavana oleva olio testata ehdottomasti ilman todellisen riippuvuuden käyttöä testissä. Valeolion voi toki tehdä myös "käsin", mutta tietyissä tilanteissa mock-kirjastoilla tehdyt mockit ovat käsin tehtyjä valeolioita kätevämpiä, erityisesti jos on syytä tarkastella testattavan olion riippuvuuksille tekemiä metodikutsuja.

### 5. IntJoukon testaus ja siistiminen

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _koodi/viikko4/IntJoukkoSovellus_ on aloittelevan ohjelmoijan ratkaisu syksyn 2011 Ohjelmoinnin jatkokurssin [viikon 2 tehtävään 3](http://www.cs.helsinki.fi/u/wikla/ohjelmointi/jatko/s2011/harjoitukset/2/).


Koodi jättää hieman toivomisen varaa sisäisen laatunsa suhteen. Refaktoroi luokan _IntJoukko_ koodi mahdollisimman siistiksi

- poista copypaste
- anna muuttujille selkeät nimet
- tee metodeista pienempiä ja hyvän koheesion omaavia

Koodissa on joukko yksikkötestejä, jotka helpottavat refaktorointia. 

*HUOM* suorita refaktorointi mahdollisimman pienin askelin, pidä koodi koko ajan toimivana. Suorita testit jokaisen refaktorointiaskeleen jälkeen! 

### 6. Tenniksen pisteenlaskun refaktorointi

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistossa _koodi/viikko4/Tennis_, löytyy ohjelma, joka on tarkoitettu tenniksen [pisteenlaskentaan](https://github.com/emilybache/Tennis-Refactoring-Kata#tennis-kata).

Pisteenlaskennan rajapinta on yksinkertainen. Metodi <code>void getScore()</code> kertoo voimassa olevan tilanteen tenniksessä käytetyn pisteenlaskennan määrittelemän tavan mukaan. Sitä mukaa kun jompi kumpi pelaajista voittaa palloja, kutsutaan metodia  <code>void wonPoint(String player)</code>, jossa parametrina on pallon voittanut pelaaja.

Esim. käytettäessä pisteenlaskentaa seuraavasti: 

``` java
public static void main(String[] args) {
    TennisGame game = new TennisGame("player1", "player2");

    System.out.println(game.getScore());

    game.wonPoint("player1");
    System.out.println(game.getScore());

    game.wonPoint("player1");
    System.out.println(game.getScore());

    game.wonPoint("player2");
    System.out.println(game.getScore());

    game.wonPoint("player1");
    System.out.println(game.getScore());

    game.wonPoint("player1");
    System.out.println(game.getScore());
}
```

tulostuu

``` java
Love-All
Fifteen-Love
Thirty-Love
Thirty-Fifteen
Forty-Fifteen
Win for player1
```

Tulostuksessa siis kerrotaan mikä on pelitilanne kunkin pallon jälkeen kun _player1_ voittaa ensimmäiset 2 palloa, _player2_ kolmannen pallon ja _player1_ loput 2 palloa. 

Pisteenlaskentaohjelman koodi toimii ja sillä on erittäin kattavat testit. Koodi on kuitenkin sisäiseltä laadultaan kelvotonta. 

Tehtävänä on refaktoroida koodi luettavuudeltaan mahdollisimman ymmärrettäväksi. Koodissa tulee välttää "taikanumeroita" ja huonosti nimettyjä muuttujia. Koodi kannattaa jakaa moniin pieniin metodeihin, jotka nimennällään paljastavat oman toimintalogiikkansa.

Etene refaktoroinnissa _todella pienin askelin_. Suorita testejä mahdollisimman usein. Yritä pitää ohjelma koko ajan toimintakunnossa.

Jos haluat käyttää jotain muuta kieltä kuin Javaa, löytyy koodista ja testeistä versioita useilla eri kielillä osoitteesta [https://github.com/emilybache/Tennis-Refactoring-Kata](https://github.com/emilybache/Tennis-Refactoring-Kata)

Tehtävä on kenties hauskinta tehdä pariohjelmoiden. Itse tutustuin tehtävään kesällä 2013 Extreme Programming -konferenssissa järjestetyssä Coding Dojossa, jossa tehtävä tehtiin satunnaisesti valitun parin kanssa pariohjelmoiden.

Lisää samantapaisia refaktorointitehtäviä löytyy Emily Bachen [GitHubista](https://github.com/emilybache).

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
