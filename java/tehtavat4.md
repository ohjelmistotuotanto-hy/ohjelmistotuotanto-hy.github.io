---
layout: page
title: Viikko 4
inheader: no
permalink: /java/tehtavat4/
---

{% include laskari_info.md part=4 %}

Tehtävissä 1-4 tutustutaan yksikkötestausta helpottavaan Mockito-kirjastoon. Tehtävissä 5 ja 6 refaktoroidaan sisäiseltä laadultaan heikossa kunnossa olevaa koodia.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md path="/tehtavat4.md" %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Yksikkötestaus ja riippuvuudet: Mockito, osa 1

Useimmilla luokilla on riippuvuuksia toisiin luokkiin. Esim. [viikon 2](https://ohjelmistotuotanto-hy.github.io/tehtavat2/#9-riippuvuuksien-injektointi-osa-3-verkkokauppa) laskarien verkkokaupan luokka Kauppa riippui Pankista, Varastosta ja Viitegeneraattorista. Riippuvuuksien injektion ja rajapintojen avulla saimme mukavasti purettua riippuvuudet luokkien väliltä.

Vaikka luokilla ei olisikaan riippuvuuksia toisiin luokkiin, on tilanne edelleen se, että luokan oliot käyttävät joidenkin toisten luokkien olioiden palveluita. Tämä tekee yksikkötestauksesta välillä hankalaa. Miten esim. luokkaa _Kauppa_ tulisi testata? Tuleeko kaupan testeissä olla mukana toimivat versiot kaikista sen riippuvuuksista?

Olemme jo muutamaan otteeseen (esim. Nhl-Statsreader-tehtävässä [viikolla 1](https://ohjelmistotuotanto-hy.github.io/tehtavat1#15-riippuvuuksien-injektointi-osa-2-nhl-tilastot) ratkaisseet asian ohjelmoimalla riippuvuuden korvaavan "tynkäkomponentin". Javalle kuten kaikille muillekin kielille on tarjolla myös valmiita kirjastoja tynkäkomponenttien, toiselta nimeltään _mock-olioiden_ luomiseen.

Kuten pian huomaamme, mock-oliot eivät ole pelkkiä "tynkäolioita", mockien avulla voi myös varmistaa, että testattava luokka kutsuu olioiden metodeja asiaankuuluvalla tavalla.

Tutustumme nyt [Mockito-nimiseen](https://site.mockito.org/) mock-kirjastoon. 

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _koodi/viikko4/MockitoDemo_ oleva projekti. Kyseessä on yksinkertaistettu versio Verkkokauppaesimerkistä.

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

Testi tarkastaa, että kaupalle tehdyt metodikutsut aiheuttavat sen, että pankin mock-olion metodia <code>maksa</code> on kutsuttu oikeilla parametreilla. Kolmanteen parametriin eli viitenumeroon ei kiinnitetä huomiota:

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

Hae [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _koodi/viikko4/MaksukorttiMockito_ oleva projekti.

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

- Jos et tehnyt tehtävää, sovellus löytyy [kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _koodi/viikko4/Verkkokauppa_.

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

### 5. Ostoskori TDD-tekniikalla


Jatketaan verkkokaupan parissa. Toteutuksen logiikka on periaatteiltaan hieman erilainen kuin aiemmissa tehtävissä käsittelemämme verkkokauppa. Tehtävän fokuksessa on kolme luokkaa `Ostoskori`, `Ostos` ja `Tuote` joiden suhde on seuraava:

![](http://www.cs.helsinki.fi/u/mluukkai/otm2012/2.bmp)

Luokka Tuote on hyvin suoraviivainen. Tuotteesta tiedetään nimi, hinta ja varastosaldo:

``` java
public class Tuote  {
 
    private String nimi;
    private int hinta;
    private int saldo;
 
    public Tuote(String nimi, int hinta) {
        this.nimi = nimi;
        this.hinta = hinta;
    }
 
    public void setHinta(int hinta) {
        this.hinta = hinta;
    }
 
    public int getHinta() {
        return hinta;
    }
 
    public String getNimi() {
        return nimi;
    }
 
    public int getSaldo() {
        return saldo;
    }
 
    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }
 
    @Override
    public String toString() {
        return nimi + " " + hinta + " euroa";
    }
}
```

Tuote siis kuvaa yhden tuotteen esim. _Valion plusmaito_ tiedot (nimi, hinta ja varastosaldo, tuotteella voisi olla myös esim. kuvaus ja muita sitä luonnehtivia kenttiä).

**Ostoskoriin ei laiteta tuotteita vaan Ostoksia, ostos viittaa tuotteeseen ja kertoo kuinka monesta tuotteesta on kysymys**. Eli jos ostetaan esim. 24 maitoa, tulee ostoskoriin Ostos-olio joka viittaa maito-tuoteolioon sekä kertoo, että tuotetta on korissa 24 kpl. `Ostos`-luokan koodi:

``` java
public class Ostos {
 
    private int lkm;
    private Tuote tuote;
 
    public Ostos(Tuote tuote) {
        this.lkm = 1;
        this.tuote = tuote;
    }
 
    public int hinta() {
        return lkm * tuote.getHinta();
    }
 
    public int lukumaara() {
        return lkm;
    }
 
    public String tuotteenNimi() {
        return tuote.getNimi();
    }
 
    public void muutaLukumaaraa(int muutos) {
        lkm += muutos;
        if ( lkm<0 ) {
            lkm = 0;
        }
    }

    @Override
    public int hashCode() {
        return this.tuote.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
    
        Ostos other = (Ostos) obj;

        return this.tuote.equals(other.tuote);
    }
}
```
Tehtävänäsi on siis ohjelmoida luokka ostoskori. Ostoskorin API:n eli metodien rajapinnan tulee näyttää seuraavalta (metodeille on lisätty returnit jotta kääntäjä ei valittaisi koodista):

``` java
public class Ostoskori {
 
    public int tavaroitaKorissa() {
        // kertoo korissa olevien tavaroiden lukumäärän
        // eli jos koriin lisätty 2 kpl tuotetta "maito", 
        //   tulee metodin palauttaa 2 
        // jos korissa on 1 kpl tuotetta "maito" ja 1 kpl tuotetta "juusto", 
        //   tulee metodin palauttaa 2   

        return -1;
    }
 
    public int hinta() {
        // kertoo korissa olevien tuotteiden yhteenlasketun hinnan
 
        return -1;
    }
 
    public void lisaaTuote(Tuote lisattava) {
        // lisää tuotteen
    }
 
    public void poista(Tuote poistettava) {
        // poistaa tuotteen
    }
 
    public List<Ostos> ostokset() {
        // palauttaa listan jossa on korissa olevat ostokset
 
        return null;
    }
 
    public void tyhjenna() {
        // tyhjentää korin
    }
}
```

**Kerrataan vielä** ostoskoriin lisätään Tuote-oliota metodilla `lisaa_tuote`. Ostoskori ei kuitenkaan talleta sisäisesti tuotteita vaan `Ostos`-luokan oliota (jotka viittaavat tuotteseen):

![](http://www.cs.helsinki.fi/u/mluukkai/otm2012/2.bmp)

Jos ostoskoriin laitetaan useampi kappale samaa tuotetta, päivitetään vastaavaa `Ostos`-oliota, joka muistaa kyseisen tuotteen lukumäärän.

Hae koodipohja [kurssirepositorion]({{site.java_exercise_repo_url}}) hakemistossa _koodi/viikko4/TddOstoskori_

**Ohjelmoi nyt ostoskori käyttäen [Test Driven Development](https://ohjelmistotuotanto-hy.github.io/osa3/#test-driven-development) -tekniikkaa.** Oikeaoppinen TDD etenee seuraavasti:

- Kirjoitetaan testiä sen verran että testi ei mene läpi. Ei siis luoda heti kaikkia luokan tai metodin testejä, vaan edetään yksi testi kerrallaan.
- Kirjoitetaan koodia sen verran, että testi saadaan menemään läpi. Ei yritetäkään heti kirjoittaa "lopullista" koodia.
- Jos huomataan koodin rakenteen menneen huonoksi (eli havaitaan koodissa esimerkiksi toisteisuutta tai liian pitkiä metodeja) refaktoroidaan koodin rakenne paremmaksi, ja huolehditaan koko ajan, että testit menevät edelleen läpi. Refaktoroinnilla tarkoitetaan koodin sisäisen rakenteen muuttamista siten, että sen rajapinta ja toiminnallisuus säilyy muuttumattomana.
- Jatketaan askeleesta 1

**Tee seuraavat testit ja aina jokaisen testin jälkeen testin läpäisevä koodi**. Jos haluat toimia oikean TDD:n hengessä, älä suunnittele koodiasi liikaa etukäteen, tee ainoastaan yksi askel kerrallaan ja paranna koodin rakennetta sitten kun koet sille tarvetta. Pidä *kaikki* testit koko ajan toimivina. Eli jos jokin muutos hajottaa testit, älä etene seuraavaan askeleeseen ennen kuin kaikki testit menevät taas läpi.

Luokkia `Tuote` ja `Ostos` ei tässä tehtävässä tarvitse muuttaa ollenkaan.

**Tee koodin sisältävästä hakemistosta git-repositorio**

Gitignoroi hakemisto target

**Tee seuraavat testit ja aina jokaisen testin jälkeen testin läpäisevä koodi** 

**Lisää ja commitoi muutokset jokaisen vaiheen jälkeen, anna kuvaava commit-viesti**

#### 1. Luodun ostoskorin hinta ja tavaroiden määrä on 0.

``` java
    // step 1
    @Test
    public void ostoskorinHintaJaTavaroidenMaaraAlussa() { 
        assertEquals(0, kori.hinta());
 
        // ...
    }
```

Laajenna testiä siten että se testaa myös tavaroiden määrän (metodin `tavaroitaKorissa` paluuarvo). Kun testi on valmis, ohjelmoi ostoskoria sen verran että testi menee läpi. Tee ainoastaan minimaalisin mahdollinen toteutus, jolla saat testin läpi.

Lisää ja commitoi muutokset ja anna kuvaava commit-viesti.

#### 2. Yhden tuotteen lisäämisen jälkeen ostoskorissa on 1 tavara.

**Huom:** joudut siis luomaan testissäsi tuotteen jonka lisäät koriin:

``` java
    // step 2
    @Test
    public void yhdenTuotteenLisaamisenJalkeenKorissaYksiTuote() {
        Tuote karjala = new Tuote("Karjala", 3);
 
        kori.lisaaTuote(karjala);
 
        // ...
    }
```

**Täsmennys:** Vaikka metodin lisaaTuote parametrina on Tuote-olio, **ostoskori ei tallenna tuotetta** vaan luomansa Ostos-olion joka "tietää" mistä tuotteesta on kysymys.

Lisää ja commitoi muutokset ja anna kuvaava commit-viesti.

#### 3. Yhden tuotteen lisäämisen jälkeen ostoskorin hinta on sama kuin tuotteen hinta.

Lisää ja commitoi muutokset.

#### 4. Kahden eri tuotteen lisäämisen jälkeen ostoskorissa on 2 tuotetta

Lisää ja commitoi muutokset.

#### 5. Kahden eri tuotteen lisäämisen jälkeen ostoskorin hinta on sama kun tuotteiden hintojen summa

Lisää ja commitoi muutokset.

#### 6. Kahden saman tuotteen lisäämisen jälkeen ostoskorissa on 2 tuotetta

Lisää ja commitoi muutokset.

#### 7. Kahden saman tuotteen lisäämisen jälkeen ostoskorin hinta on sama kun 2 kertaa tuotteen hinta

Lisää ja commitoi muutokset.

#### 8. Yhden tuotteen lisäämisen jälkeen ostoskori sisältää yhden ostoksen

tässä testataan ostoskorin metodia ostokset():

``` java
    // step 8
    @Test
    public void yhdenTuotteenLisaamisenJalkeenKorissaYksiOstosOlio() {
        kori.lisaaTuote(tuote1);
 
        ArrayList<Ostos> ostokset = kori.ostokset();
 
        // testaa että metodin palauttamin listan pituus 1
    }
```

Lisää ja commitoi muutokset.

#### 9. Yhden tuotteen lisäämisen jälkeen ostoskori sisältää ostoksen, jolla sama nimi kuin tuotteella ja lukumäärä 1

Testin on siis tutkittava jälleen korin metodin ostokset palauttamaa listaa:

``` java
    // step 9
    @Test
    public void yhdenTuotteenLisaamisenKorissaYksiOstosOlioJollaOikeaTuotteenNimiJaMaara() {
        kori.lisaaTuote(karhu);
 
        Ostos ostos = kori.ostokset().get(0);
 
        // testaa täällä, että palautetun listan ensimmäinen ostos on halutunkaltainen.
    } 
```

Lisää ja commitoi muutokset.

#### 10. Kahden eri tuotteen lisäämisen jälkeen ostoskori sisältää kaksi ostosta

Lisää ja commitoi muutokset.

#### 11. Kahden saman tuotteen lisäämisen jälkeen ostoskori sisältää yhden ostoksen

eli jos korissa on jo ostos "karhu" ja koriin lisätään sama tuote uudelleen, tulee tämän jälkeen korissa olla edelleen vain yksi ostos "karhu", lukumäärän tulee kuitenkin kasvaa kahteen.

Lisää ja commitoi muutokset.

#### 12. Kahden saman tuotteen lisäämisen jälkeen ostoskori sisältää ostoksen jolla sama nimi kuin tuotteella ja lukumäärä 2

Lisää ja commitoi muutokset.

#### 13. jos korissa on kaksi samaa tuotetta ja toinen näistä poistetaan, jää koriin ostos jossa on tuotetta 1 kpl

Lisää ja commitoi muutokset.
#### 14. Jos koriin on lisätty tuote ja sama tuote poistetaan, on kori tämän jälkeen tyhjä

tyhjä kori tarkoittanee että tuotteita ei ole, korin hinta on nolla ja ostoksien listan pituus nolla

Lisää ja commitoi muutokset.

#### 15. Metodi tyhjenna tyhjentää korin

Lisää ja commitoi muutokset.

Jos ostoskorissasi on mukana jotain ylimääräistä, refaktoroi koodiasi niin että kaikki turha poistuu. Erityisesti ylimääräisistä oliomuuttujista kannattaa hankkiutua eroon, tarvitset luokalle vain yhden oliomuuttujan, kaikki ylimääräiset tekevät koodista sekavamman ja vaikeammin ylläpidettävän. Jos luokassasi on ylimääräisiä oliomuuttujia, poista ne. Varmista koko ajan testien avulla ettet riko mitään. 

Lisää ja commitoi mahdolliset muutokset.

### 6. IntJoukon testaus ja siistiminen

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa _koodi/viikko4/IntJoukkoSovellus_ on aloittelevan ohjelmoijan ratkaisu syksyn 2011 Ohjelmoinnin jatkokurssin [viikon 2 tehtävään 3](http://www.cs.helsinki.fi/u/wikla/ohjelmointi/jatko/s2011/harjoitukset/2/).


Koodi jättää hieman toivomisen varaa sisäisen laatunsa suhteen. Refaktoroi luokan _IntJoukko_ koodi mahdollisimman siistiksi

- poista copypaste
- anna muuttujille selkeät nimet
- tee metodeista pienempiä ja hyvän koheesion omaavia

Koodissa on joukko yksikkötestejä, jotka helpottavat refaktorointia. 

*HUOM* suorita refaktorointi mahdollisimman pienin askelin, pidä koodi koko ajan toimivana. Suorita testit jokaisen refaktorointiaskeleen jälkeen! 

### 7. git: tägit [versionhallinta]

Tutustutaan tässä tehtävässä Gitin tageihin:

> Git has the ability to tag specific points in history as being important. Typically people use this functionality to mark release points (v1.0, and so on)

Lue ensin [http://git-scm.com/book/en/Git-Basics-Tagging](http://git-scm.com/book/en/Git-Basics-Tagging) (voit skipata kohdat 'signed tags' ja 'verifying tags')

Tee seuraavat samaan repositorioon, mihin palautat tehtäväsi:

* tee tägi nimellä tagi1 (lightweight tag riittää)
* tee kolme committia (eli 3 kertaa muutos + add + commit)
* tee tägi nimellä tagi2
* katso <code>gitk</code>-komennolla miltä historiasi näyttää
* palaa tagi1:n aikaan, eli anna komento <code>git checkout tagi1</code>
  * varmista, että tagin jälkeisiä muutoksia ei näy
* palaa nykyaikaan
  * tämä onnistuu komennolla <code>git checkout main</code>
* lisää tägi _edelliseen_ committiin
  * operaatio onnistuu komennolla <code>git tag tagi1b HEAD^</code> , eli HEAD^ viittaa nykyistä "headia" eli olinpaikkaa historiassa edelliseen committiin
  * joissain windowseissa muoto <code>HEAD^</code> ei toimi, sen sijasta voit käyttää muotoa <code>HEAD~</code>
  * tai katsomalla commitin tunniste (pitkä numerosarja) joko komennolla <code>git log</code> tai gitk:lla
* kokeile molempia tapoja, tee niiden avulla kahteen edelliseen committiin tagit (tagi1a ja tagi1b)
* katso komennolla <code>gitk</code> miltä historia näyttää

Tagit eivät mene automaattisesti etärepositorioihin. Pushaa koodisi githubiin siten, että myös tagit siirtyvät mukana. Katso ohje [täältä](http://git-scm.com/book/en/Git-Basics-Tagging#Sharing-Tags)

Varmista, että tagit siirtyvät GitHubiin:

![](https://github.com/mluukkai/ohjelmistotuotanto2018/raw/main/images/viikko4-1.png)

{% include submission_instructions.md %}
