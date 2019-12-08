---
layout: page
title: Osa 4
title_long: 'Ohjelmistojen suunnittelu'
inheader: yes
permalink: /osa4/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

Olemme nyt käsitelleet ohjelmiston elinkaaren vaiheista vaatimusmäärittelyä ja laadunhallintaa. Tässä osassa aiheena on ohjelmiston suunnittelu ja toteutus.

Tämän osan luvuista ne, joihin on merkitty <span style="color:blue">[viikko 5]</span> tai  <span style="color:blue">[viikko 6]</span> liittyvät myöhempien viikkojen laskareihin, eli voit skipata ne viikolla 4.

## Typoja materiaalissa

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/osa4.md) tiedostoa GitHubissa.

## Ohjelmiston suunnittelu

Ohjelmiston suunnittelun ajatellaan jakautuvan kahteen vaiheeseen: arkkitehtuurisuunnitteluun ja olio- tai komponenttisuunnitteluun.

_Arkkitehtuurisuunnittelussa_ hahmotellaan ohjelman rakenne karkealla tasolla, eli mietitään mistä suuremmista rakennekomponenteista ohjelma koostuu? Miten komponentit kommunikoivat ja minkälaiset niiden väliset rajapinnat ovat.

_Olio- tai komponenttisuunnittelussa_ taas suunnitellaan yksityiskohtaisemmin miten yksittäiset komponentit, luokat ja metodit tulisi toteuttaa.

Näiden teknisten näkökulmien lisäksi ohjelmiston määrittelyn ja suunnittelun välimaastossa on [käyttöliittymä- ja käyttökokemussuunnittelu](https://www.itewiki.fi/opas/kayttoliittymasuunnittelu-ux-user-experience-design-eli-kayttajakokemus/), joihin kurssin materiaalissa ei valitettavasti pystytä syventymään. Laitoksella on muutamia syventäviä kursseja aihepiiristä, mm. [Human computer interaction](https://courses.helsinki.fi/fi/csm13401).

Ohjelmiston suunnittelun ajoittuminen riippuu käytettävästä tuotantoprosessista.
Vesiputousmallissa suunnittelu tapahtuu vaatimusmäärittelyn jälkeen ja ohjelmointi aloitetaan vasta kun suunnittelu on valmiina ja dokumentoitu. Ketterissä menetelmissä taas suunnittelua tehdään tarvittava määrä jokaisessa sprintissä ja tarkkaa suunnitteludokumenttia ei yleensä ole.

Vesiputousmallin mukainen suunnitteluprosessi tuskin on enää juuri missään käytössä, ja ainakin vaatimusmäärittely ja arkkitehtuurisuunnittelu limittyvät.

Tarkkaa ja raskasta ennen ohjelmointia tapahtuvaa suunnittelua, josta käytetään joskus nimitystä [Big Design Up Front](https://en.wikipedia.org/wiki/Big_Design_Up_Front) eli BDUF, toki edelleen tapahtuu ja tietynlaisiin järjestelmiin (hyvin tunnettu sovellusalue, muuttumattomat vaatimukset) se osittain sopiikin.

## Ohjelmiston arkkitehtuuri
 
Käsite _ohjelmiston arkkitehtuuri_ (engl. software architecture) on ollut olemassa jo vuosikymmeniä. Termi on vakiintunut yleiseen käyttöön 2000-luvun aikana ja on siirtynyt mm. riviohjelmoijaa kokeneempaa työntekijää tarkoittavaksi nimikkeeksi _ohjelmistoarkkitehti_ engl. software architech.

Useimmilla alan ihmisillä on jonkinlainen kuva siitä, mitä ohjelmiston arkkitehtuurilla tarkoitetaan. Termiä ei ole kuitenkaan yrityksistä huolimatta onnistuttu määrittelemään siten, että kaikki olisivat määritelmästä yksimielisiä.

IEEE:n standardi [Recommended practices for Architectural descriptions of Software intensive systems](https://ieeexplore.ieee.org/document/875998) määrittelee käsitteen seuraavasti:

> Ohjelmiston arkkitehtuuri on järjestelmän perusorganisaatio, joka sisältää järjestelmän osat, osien keskinäiset suhteet, osien suhteet ympäristöön sekä periaatteet, jotka ohjaavat järjestelmän suunnittelua ja evoluutiota.
 
Otetaan esimerkiksi pari muutakin määritelmää.

[Philippe Krutchten](https://www.semanticscholar.org/paper/The-Rational-Unified-Process-An-Introduction%2C-3rd-Kruchten/3239cd654d82aa775cf9382a4d2ad834a3ea1014) määrittelee arkkitehtuurin seuraavasti

> An architecture is the _set of significant decisions about the organization of a software system_, the selection of structural elements and their interfaces by which the system is composed, together with their behavior as specified in the collaborations among those elements, the composition of these elements into progressively larger subsystems, and the _architectural style_ that guides this organization - these elements and their interfaces, their collaborations, and their composition.

[McGovern ym.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.467.1174&rep=rep1&type=pdf) taas sanovat

> The software architecture of a system or a collection of systems consists of all the important design decisions about the software structures and the interactions between those structures that comprise the systems. _The design decisions support a desired set of qualities that the system should support to be successful_. The design decisions provide a conceptual basis for system development, support, and maintenance.

Vaikka arkkitehtuurin määritelmät hieman vaihtelevat, löytyy määritelmistä joukko samoja teemoja. Jokaisen määritelmän mukaan arkkitehtuuri määrittelee ohjelmiston rakenteen, eli jakautumisen erillisiin osiin sekä osien väliset rajapinnat. Arkkitehtuuri ottaa kantaa rakenteen lisäksi myös käyttäytymiseen, se määrittelee arkkitehtuuritason rakenneosien vastuut ja niiden keskinäisen kommunikoinnin muodot.

Arkkitehtuuri keskittyy järjestelmän rakenteen tärkeisiin tai keskeisiin periaatteisiin. Se ei siis kuvaa järjestelmää tarkalla detaljitasolla, vaan on isoihin linjoihin keskittyvä _abstraktio_. 

Artikkelissa [Who needs architect](https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf) Martin Fowler toteaa seuraavasti _you might end up defining architecture as things that people perceive as hard to change_, eli arkkitehtuurin voisi määritellä niiksi asioiksi, jotka ovat ohjelmistossa vaikeita muuttaa. Järjestelmän tärkeät rakenneperiaatteet voivat myös muuttua ajan myötä, eli arkkitehtuuri [ei ole muuttumaton](http://www.ibm.com/developerworks/rational/library/feb06/eeles/) mutta sen radikaali muuttaminen voi olla haastavaa. 

Melkein sama hieman toisin ilmaistuna oli Krutchtenin määritelmässä mainittu
_set of significant decisions about the organization of a software system_, eli arkkitehtuuri muodostuu arkkitehtuuristen päätösten, eli joukon ohjelmiston rakenteen ja toiminnan kannalta tehtävien fundamentaalisten valintoja kautta.

### Arkkitehtuuriin vaikuttavia tekijöitä

[Osassa 2](/osa2) mainittiin järjestelmän vaatimusten jakautuvat kahteen luokkaan, toiminnallisiin ja ei-toiminnallisiin vaatimuksiin.

Järjestelmälle asetetuilla ei-toiminnallisilla [laatuvaatimuksilla](/osa2#ei-toiminnalliset-vaatimukset) (engl. -ilities) on suuri vaikutus arkkitehtuuriin. Laatuvaatimuksia ovat esimerkiksi käytettävyys, suorituskyky, skaalautuvuus, vikasietoisuus, tiedon ajantasaisuus, tietoturva, ylläpidettävyys, laajennettavuus, testattavuus, hinta, time-to-market, ...

Jotkut laatuvaatimuksista ovat keskenään ristiriidassa, joten arkkitehdin tulee hakea niiden suhteen kaikkia sidosryhmiä tyydyttävä kompromissi. Esimerkiksi time-to-market, eli kuinka nopeasti sovellus saadaan loppukäyttäjille ja alhainen hinta, lienevät ristiriidassa lähes kaikkien laatuvaatimusten kanssa.

Tiedon ajantasaisuus, skaalautuvuus ja vikasietoisuus ovat myös piirteitä, joiden suhteen on pakko tehdä kompromisseja, on jopa todistettu matemaattisesti olevan tilanteita, missä kaikkia ei voida saavuttaa (ks. [CAP-teoreema](http://en.wikipedia.org/wiki/CAP_theorem)).

Myös toteutusteknologiat, esimerkiksi toteutuksessa käytettävät sovelluskehykset ja integraatio olemassaoleviin järjestelmiin sekä järjestelmän toimintaympäristö esim. lääketieteen ja ilmailualan säädökset sekä edellytetyt toimintastandardit, vaikuttavat arkkitehtuuriin.

Arkkitehtuurin suurin merkitys on antaa sovelluksen kehitykselle ja ylläpidolle sellaiset raamit, että sovellus pystyy jatkossakin vastaamaan asiakkaan asettamien toiminnallisten vaatimuksien lisäksi järjestelmälle asetettuihin laatuvaatimuksiin.

Joskus käy niin, että sovellukselle alunperin valittu arkkitehtuuri ei enää palvele tavoitettaan. Näin voi esimerkiksi käydä, jos sovelluksen laatuvaatimukset muuttuvat radikaalisti, esim. jos tulee tarve saada sovellus skaalautumaan huomattavasti suuremmalle käyttäjäjoukolle, mitä alkuperäinen arkkitehtuuri kykenee. Arkkitehtuurin muuttaminen on hankalaa ja kallista, mutta joskus muuta vaihtoehtoa ei ole.

### Arkkitehtuurityyli
 
Ohjelmiston arkkitehtuuri perustuu yleensä yhteen tai useampaan _arkkitehtuurityyliin_ (engl. architectural style), jolla tarkoitetaan hyväksi havaittua tapaa strukturoida tietyntyyppisiä sovelluksia. 

Arkkitehtuurityylejä on [suuri määrä](https://en.wikipedia.org/wiki/Architectural_pattern), esim:
- kerrosarkkitehtuuri 
- model-view-controller
- pipes-and-filters
- repository 
- client-server
- publish-subscribe 
- event driven 
- REST 
- mikropalveluarkkitehtuuri
- palveluperustainen arkkitehtuuri

Useimmiten sovelluksen rakenteesta löytyy monien arkkitehtuuristen tyylien piirteitä.

### Kerrosarkkitehtuuri

Arkkitehtuurityyleistä varmasti tunnetuin ja eniten käytetty on _kerrosarkkitehtuuri_ (engl. layered architecture), jossa pyrkimyksenä on jakaa sovellus käsitteellisiin kerroksiin, joissa kukin kerros suorittaa oman "abstraktiotason" tehtäväänsä käyttäen ainoastaan sen alapuolella olevan kerroksen palveluja. 

Kerrosarkkitehtuurissa ylimmät kerrokset ovat lähempänä käyttäjää, ylimpänä kerroksena on yleensä käyttöliittymä ja tämän alapuolella sovelluslogiikasta vastaava kerros. Alimmat kerrokset taas keskittyvät koneläheisiin asioihin, kuten tiedon tallennukseen tai verkon yli tapahtuvaan kommunikaatioon.

![]({{ "/images/4-1.png" | absolute_url }}){:height="350px" }

Käytännössä kukin kerros on kokoelma toisiinsa liittyviä olioita tai komponentteja, jotka muodostavat oman abstraktiotasonsa toiminnallisuuden suhteen loogisen kokonaisuuden.

Kerrosarkkitehtuurilla on monia etuja. Kerroksittaisuus helpottaa ylläpitoa, sillä jos tietyn kerroksen palvelurajapintaan eli muille kerroksille näkyvään osaan tehdään muutoksia, aiheuttavat muutokset ylläpitotoimenpiteitä ainoastaan suoraan yläpuolella olevaan kerroksen. Esim. käyttöliittymän muutokset eivät vaikuta muihin kerroksiin ja tiedon tallennuksesta huolehtivaan kerrokseen tehtävät muutokset eivät vaikuta käyttöliittymään. 

Sovelluslogiikan riippumattomuus käyttöliittymästä helpottaa ohjelman siirtämistä uusille alustoille, esimerkiksi toimimaan webin lisäksi mobiiliympäristössä. Alimpien kerroksien palveluja, kuten tallennuskerrosta tai ainakin sen osia voidaan mahdollisesti uusiokäyttää myös muissa sovelluksissa. 

Kerrosarkkitehtuuri on sovelluskehittäjän kannalta selkeä ja hyvin ymmärretty malli, mutta sen soveltaminen saattaa johtaa massiivisiin monoliittisiin sovelluksiin, joita on lopulta vaikea laajentaa ja joiden skaalaaminen tukemaan suuria yhtäaikaisia käyttäjämääriä voi muodostua ongelmaksi.
         
### Todo-sovelluksen arkkitehtuuri

Eräs konkreettinen, joskin hyvin yksinkertainen esimerkki kerrosarkkitehtuuria noudattavasta sovelluksesta on kurssin [Ohjelmistotekniikka](https://courses.helsinki.fi/fi/tkt20002) referenssisovelluksena toimiva [Todo-sovellus](https://github.com/mluukkai/OtmTodoApp).

Koodin tasolla kerrosrakenne näkyy siinä, miten sovelluksen koodi jakautuu pakkauksiin 

![]({{ "/images/4-2.png" | absolute_url }}){:height="250px" }

Arkkitehtuuria heijasteleva pakkausrakenne voidaan kuvata UML:n [pakkauskaaviolla](https://github.com/mluukkai/ohjelmistotekniikka-kevat2019/blob/master/web/materiaali.md#pakkauskaavio):

![]({{ "/images/4-1b.png" | absolute_url }}){:height="200px" }

Pakkauksina kuvattujen kerroksien välille on merkitty riippuvuudet katkoviivalla. Käyttöliittymä _todoapp.ui_ riippuu sovelluslogiikasta _todoapp.domain_, joka taas riippuu tallennuskerroksesta _todoapp.dao_. 

Käytännössä riippuvuus tarkoittaa sitä, että ylemmän kerroksen koodista kutsutaan jotain alemman kerroksen koodin metodia. Kerrosarkkitehtuurin hengen mukaisesti riippuvuuksia on vain ylhäältä alas, eli esim. sovelluslogiikkakerroksen koodi ei kutsu käyttöliittymäkerroksen koodia.

### Arkkitehtuurin kuvaamisesta

Kovista yrityksistä huolimatta ohjelmistojen arkkitehtuurien kuvaamiselle ei ole onnistuttu kehittämään mitään yleisesti käytössä olevaa notaatiota. UML:ää käytetään jonkin verran, mutta kovin suosittu ja käyttökelpoinen ei sekään ole. Edellisessä esimerkissä käytettyä  pakkauskaaviota paremmin isompien sovellusten arkkitehtuurien kuvaamiseen sopii [komponenttikaavio](https://en.wikipedia.org/wiki/Component_diagram).

Komponenttikaavio eroaa pakkauskaaviosta lähinnä merkintätavoiltaan ja tuo hieman paremmin esiin eri komponenttien tarjoamat sekä käyttämät rajapinnat. Esimerkiksi alla olevassa kuvassa oleva verkkokaupan sovelluslogiikasta vastaava komponentti _web store_  tarjoaa rajapinnat tuotteiden haulle, ostosten tekemiselle ja käyttäjän hallinnoinnille. Komponentti itsessään jakautuu kolmeen alikomponenttiin, joista _authentication_ tarjoaa sisäisen rajapinnan _shopping chart_ -komponentin käyttöön.

![]({{ "/images/4-4.png" | absolute_url }}){:height="450px" }

UML:n sijaan arkkitehtuurin kuvaamiseen käytetään kuitenkin useimmiten epäformaaleja laatikko/nuoli-kaavioita.

Riippumatta arkkitehtuurin dokumentointitavasta, arkkitehtuurikuvaus kannattaa tehdä useasta _eri näkökulmasta_, sillä eri näkökulmat palvelevat erilaisia tarpeita. Korkean tason kuvauksen avulla voidaan esim. strukturoida vaatimusmäärittelyn aikana käytäviä keskusteluja eri sidosryhmien kanssa. Detaljoidummat kuvaukset taas toimivat ohjeena järjestelmän tarkemmassa suunnittelussa ja ylläpitovaiheen aikaisessa laajentamisessa.

Kannattaa huomata, että arkkitehtuurikuvaus ei suinkaan ole pelkkä kuva, mm. komponenttien vastuut tulee tarkentaa sekä niiden väliset rajapinnat ja kommunikaation muodot määritellä. Jos näin ei tehdä, kasvaa riski sille että arkkitehtuuria ei noudateta. 

Hyödyllinen arkkitehtuurikuvaus myös perustelee tehtyjä [arkkitehtuurisia valintoja](https://adr.github.io/). Ei nimittäin ole ollenkaan harvinaista, että jotain ohjelmistoon tehtyjä arkkitehtuuritason suunnitteluratkaisuja ihmetellään parin vuoden päästä ja kukaan ei enää muista aikoinaan tarkasti mietittyjä perusteita tehdyille päätöksille.

### Mikropalveluarkkitehtuuri

Kerrosarkkitehtuurin eräänä epäkohtana mainittiin, että sen soveltaminen saattaa johtaa massiivisiin monoliittisiin sovelluksiin, joita on lopulta vaikea laajentaa ja joiden skaalaaminen suurille käyttäjämäärille voi muodostua ongelmaksi.

Viime aikoina nopeasti yleistynyt _mikropalveluarkkitehtuuri_ (engl. microservices) pyrkii vastaamaan näihin haasteisiin koostamalla sovelluksen useista (jopa sadoista) pienistä verkossa toimivista autonomisista palveluista, jotka keskenään verkon yli kommunikoiden toteuttavat järjestelmän toiminnallisuuden.

![]({{ "/images/4-6.png" | absolute_url }}){:height="300px" }

Mikropalveluihin perustuvassa sovelluksessa yksittäisistä palveluista pyritään tekemään mahdollisimman _riippumattomia_ ja löyhästi toisiinsa kytkettyjä. Palvelut eivät esimerkiksi käytä yhteistä tietokantaa eivätkä käytä yhteistä koodia. Palvelut eivät kutsu suoraan toistensa metodeja, sen sijaan ne kommunikoivat verkon välityksellä. 

Mikropalveluiden on tarkoitus olla suhteellisen pieniä ja huolehtia vain "yhdestä asiasta". Esimerkiksi verkkokaupassa erillisiä mikropalveluja voisivat olla

- käyttäjien hallinta
- tuotteiden suosittelu
- tuotteiden hakutoiminnot
- ostoskorin toiminnallisuus
- ostosten maksusta huolehtiva toiminnallisuus

Kun järjestelmään lisätään toiminnallisuutta, se yleensä tarkoittaa uusien palveluiden toteuttamista tai ainoastaan joidenkin palveluiden laajentamista. Sovelluksen laajentaminen voi näin olla helpompaa kuin kerrosarkkitehtuurissa, missä laajennus yleensä edellyttää jokaisessa kerroksessa olevan koodin muokkaamista.

Mikropalveluja hyödyntävää sovellusta voi olla helpompi skaalata, sillä suorituskyvyn pullonkaulan aiheuttavia mikropalveluja voidaan suorittaa useita rinnakkain.
 
Mikropalveluiden käyttö mahdollistaa sen, että sovellus voidaan helposti koodata monella kielellä tai useita eri sovelluskehyksiä hyödyntämällä, sillä toisin kuin monoliittisissa projekteissa, mikään ei edellytä, että kaikki mikropalvelut olisi toteutettu samalla tekniikalla.


#### Mikropalveluiden kommunikointi

Mikropalvelut siis kommunikoivat keskenään verkon välityksellä. Erilaisia tapoja kommunikointiin on useita. 

Yksinkertainen vaihtoehto on käyttää kommunikointiin HTTP- protokollaa, eli samaa mekanismia, jonka avulla web-selaimet keskustelevat palvelimien kanssa. Tällöin sanotaan, että mikropalvelut tarjoavat kommunikointia varten REST-rajapinnan. Viikon 3 laskareissa haettiin NHL-tilastotietoja JSON-muotoista dataa tarjoavasta REST-rajapinnasta.

Vaihtoehtoinen, huomattavasti joustavampi kommunikointikeino on ns. _viestinvälityksen_ (message queue/bus) käyttö.

Palvelut eivät lähetä viestejä suoraan toisilleen, vaan käytössä on verkossa toimiva viestinvälityspalvelu, joka hoitaa viestien välityksen eri palveluiden välillä.

![]({{ "/images/4-6b.png" | absolute_url }}){:height="400px" }

Periaatteena viestinvälityksessä on se, että palvelut _julkaisevat_ (publish) viestejä viestinvälityspalveluun. Viesteillä on tyypillisesti joku _aihe_ (topic) ja sen lisäksi _datasisältö_, esimerkiksi: 

``` 
{
  topic: new_user, 
  data: { 
    username: "Arto Hellas", 
    age: 31, 
    education: "PhD",
    occupation: "Aalto University" 
  }
}

```

Palvelut voivat _tilata_ (subscribe) viestipalvelusta niihin aiheisiin liittyvät viestit joista ne ovat kiinnostuneita. Esimerkiksi käyttäjähallinnasta vastaava palvelu todennäköisesti tilaa viestit, joiden aihe on *new_user*. Viestinvälityspalvelu välittää vastaanottamansa viestit edelleen kaikille palveluille, jotka ovat kyseisen aiheen tilanneet.

Kaikki viestien välitys tapahtuu siis viestinvälityspalvelun kautta, eli palvelut eivät kommunikoi suoraan toistensa kanssa. Näin mikropalveluista tulee erittäin löyhästi kytkettyjä, ja muutokset yhdessä palvelussa eivät vaikuta mihinkään muualle, niin kauan kuin viestit säilyvät entisen muotoisina. 

Viestien lähetys on lähettäjän kannalta _asynkronista_ eli palvelu lähettää viestin, jatkaa se heti koodissaan eteenpäin siitä huolimatta onko viesti välitetty sen tilanneille palveluille.

Asynkronisten viestien (joita kutsutaan usein myös _eventeiksi_) välitykseen perustuvaa arkkitehtuureja kutsutaan myös _event-driven_-arkkitehtuureiksi. Kaikki event-driven-arkkitehtuurit eivät suinkaan ole mikropalveluarkkitehtuureja, esim. Java Swing/FX -sovelluksessa käyttöliittymä kommunikoi sovelluksen kanssa asynkronisten eventtien avulla.

#### Mikropalveluiden haasteita

Monista eduistaan huolimatta mikropalveluarkkitehtuurin soveltaminen tuo mukanaan koko joukon uusia haasteita. Ensinnäkin sovelluksen jakaminen järkeviin mikropalveluihin on haastavaa. Vääränlainen jako palveluihin voi tuottaa sovelluksen, jossa jokainen palvelu joutuu keskustelemaan verkon yli pahimmassa tapauksessa kymmenien palvelujen kesken ja näin sovelluksen suorituskyky kärsii. 

Useista palveluista koostetun sovelluksen debuggaaminen ja testaaminen on huomattavasti hankalampaa kuin monoliittisen, erityisesti näin on jos mikropalvelut käyttävät viestinvälitystä.

Kymmenistä tai jopa sadoista mikropalveluista koostuvan ohjelmiston operoiminen eli käynnistäminen ja suorittaminen tuotantopalvelimilla on haastavaa ja vaatii pitkälle menevää automatisointia. Sama koskee sovelluskehitysympäristöä ja jatkuvaa integraatiota.
Mikropalveluiden menestyksekäs soveltaminen edellyttääkin vahvaa DevOps-kulttuuria.

Mikropalveluiden yhteydessä käytetäänkin paljon konttiteknologiaa (engl. container), eli käytännössä [Docker](https://www.docker.com/)-ohjelmistoa. Kontit ovat hieman yksinkertaistaen sanottuna kevyitä virtuaalikoneita, joita on mahdollista suorittaa suuret määrät yksittäisellä palvelimella. Jos mikropalvelu on omassa kontissa, vastaa se käytännössä tilannetta, missä mikropalvelua suoritettaisiin omalla koneellaan.

Aihe on tärkeä, mutta emme valitettavasti voi mennä siihen tämän kurssin 
puitteissa ollenkaan, onneksi Avoimessa yliopistossa on tarjolla sopiva kurssi aiheesta: [DevOps with Docker](https://docker-hy.github.io/)

## Arkkitehtuuri ketterissä menetelmissä
 
Ketterien menetelmien kantava teema on toimivan, asiakkaalle arvoa tuottavan ohjelmiston nopea toimittaminen, tämä on mainittu selkeästi jo ketterän manifestin periaatteissa:

_Our highest priority is to satisfy the customer through early and continuous delivery of valuable software._

_Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale._

Ketterät menetelmät suosivat suunnitteluratkaisujen yksinkertaisuutta:

_Simplicity, the art of maximizing the amount of work not done, is essential_

Arkkitehtuuriin suunnittelu ja dokumentointi taas on perinteisesti ollut melko pitkäkestoinen, ohjelmoinnin aloittamista edeltävä vaihe, eräänlainen _big Design Up Front_. Ketterät menetelmät ja "arkkitehtuurivetoinen" ohjelmistotuotanto ovat siis jossain määrin keskenään ristiriidassa.
 
Ketterien menetelmien yhteydessä puhutaan usein [inkrementaalisesta suunnittelusta ja arkkitehtuurista](https://www.jamesshore.com/Agile-Book/incremental_design.html). 

Ideana on, että arkkitehtuuri mietitään ja dokumentoidaan riittävällä tasolla projektin alussa. Ohjelmiston "lopullinen" arkkitehtuuri muodostuu iteraatio iteraatiolta samalla kun ohjelmistoon toteutetaan uutta toiminnallisuutta. Esimerkiksi kerrosarkkitehtuurin mukaista sovellusta ei rakenneta "kerros kerrallaan", vaan sen sijaan jokaisessa iteraatiossa tehdään pieni pala jokaista kerrosta, sen verran kuin iteraation toiminnallisuuksien toteuttaminen edellyttää.

Melko tyypillinen tapa on aloittaa projektit ns. [nollasprintillä](https://www.infoq.com/news/2008/09/sprint_zero/) jonka aikana luodaan mm. alustava arkkitehtuuri sekä backlog. 

Scrumin varhaisissa artikkeleissa puhuttiin "pre game"-vaiheesta, jonka aikana tehtiin erilaisia kehitystyötä valmistelevia asioita, mm. hahmoteltiin alustava arkkitehtuuri. Sittemmin koko käsite on hävinnyt Scrumista ja toinen Scrumin alkuperäisistä kehittäjistä Ken Schwaber jopa eksplisiittisesti kieltää ja [tyrmää](http://www.scrum.org/assessmentdiscussion/post/1317787) koko "nollasprintin" olemassaolon.

### Kävelevä luuranko

Yleinen lähestymistapa inkrementaaliseen arkkitehtuuriin on _kävelevän luurangon, eli walking skeletonin_ käyttö. [Alistair Coburn](http://alistair.cockburn.us/Walking+skeleton) kuvailee käsitettä seuraavasti:

> A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function. It need not use the final architecture, but it should link together the main architectural components.
>
> The architecture and the functionality can then evolve in parallel. 
>
> What constitutes a walking skeleton varies with the system being designed.
>
> For a layered architecture system, it is a working connection between all the layers.
>
> The walking skeleton is not complete or robust and it is missing the flesh of the application functionality. Incrementally, over time, the infrastructure will be completed and full functionality will be added.
>
> A walking skeleton, is permanent code, built with production coding habits, regression tests, and is intended to grow with the system.


Eli heti projektin alussa, mielellään jo ensimmäisessä sprintissä on tarkoitus toteuttaa suunnitellun arkkitehtuurin rungon sisältävä _walking skeleton_, joka sisältää jo kaikkia arkkitehtuurin peruskomponentteja ja kerroksia vastaavat tynkäkomponentit sekä niiden välisen kommunikaation. 

Tätä luurankoa sitten kasvatetaan pikkuhiljaa projektin edetessä, kun sovelluksen toiminnallisuus kasvaa. 

Walking skeleton ei ole pelkästään poisheitettävää koodia, vaan sovelluksen koodi rakentuu sen ympärille, eli skeletoinia rakennettaessa on jo tarkoituksenmukaisin osin syytä ohjelmoida tuotantokoodin edellyttämällä laadulla, eli projektin definition of donea noudattaen.
 
### Inkrementaalisen arkkitehtuurin etuja

Perinteisesti, esimerkiksi vesiputousmallia käytettäessä arkkitehtuurista on vastannut ohjelmistoarkkitehti ja ohjelmoijat ovat olleet velvoitettuja noudattamaan sovellukselle määriteltyä arkkitehtuuria. 

Ketterissä menetelmissä ei suosita erillistä arkkitehdin roolia, esimerkiksi Scrum käyttää kaikista ryhmän jäsenistä nimikettä developer. Ketterien menetelmien ideaalina on, että kehitystiimi luo arkkitehtuurin yhdessä, tämä on myös yksi ketterän manifestin periaatteista:

> The best architectures, requirements, and designs emerge from self-organizing teams.

Ketterän ideaalin mukaan ohjelmiston arkkitehtuuri on koodin tapaan _tiimin yhteisomistama_. Tästä on muutamiakin etuja. 

Kehittäjät todennäköisesti sitoutuvat paremmin tiimin luoman ja omistaman arkkitehtuurin noudattamiseen kuin "norsunluutornissa" olevan tiimin ulkopuolisen arkkitehdin määrittelemään arkkitehtuuriin.

Tiimin kesken suunnitteleman arkkitehtuurin dokumentointi voi olla kevyt ja informaali, esim. valkotaululle piirretty, sillä tiimi tuntee joka tapauksessa arkkitehtuurin hengen ja pystyy sitä noudattamaan. Jos arkkitehtuurin suunnittelee joku ulkopuoleinen, sen kommunikointi tiimille edellyttää raskaampaa dokumentaatiota.

Ketterissä menetelmissä oletuksena on, että parasta mahdollista arkkitehtuuria ei pystytä suunnittelemaan projektin alussa, kun vaatimuksia, toimintaympäristöä ja toteutusteknologioita ei vielä tunneta. Jo tehtyjä arkkitehtonisia ratkaisuja on järkevä muuttaa, jos ajan myötä huomataan että aiemmin tehdyt valinnat eivät tue parhaalla tavalla ohjelmiston kehittämistä.

Eli kuten vaatimusmäärittelyn suhteen, myös arkkitehtuurin suunnittelussa ketterät menetelmät pyrkii välttämään liian aikaisin tehtävää ja myöhemmin todennäköisesti turhaksi osoittautuvaa työtä.

### Inkrementaalisen arkkitehtuurin riskit

Inkrementaalinen lähestymistapa arkkitehtuurin muodostamiseen edellyttää koodilta hyvää sisäistä laatua ja kehitystiimiltä suurta kurinalaisuutta.

[Martin Fowler](http://martinfowler.com/articles/designDead.html) toteaa seuraavasti 

> Essentially, incremental design means that the design of the system grows as the system is implemented. Design is part of the programming processes and as the program evolves the design changes.
>
> In its common usage, incremental design is a disaster. The design ends up being the aggregation of a bunch of ad-hoc tactical decisions, each of which makes the code harder to alter.

Fowlerin havaintojen mukaan inkrementaalisen arkkitehtuurin ja suunnittelun ihanne toteutuu vain harvoin, useimmiten sovelluskehittäjien huolimattomuus, aikataulupaineet ym. syyt johtavat siihen, että ohjelmiston sisäinen laatu alkaa ajan myötä heikentyä ja lopulta ohjelmisto on muodoton kasa spagettikoodia, eli [big ball of mud](http://www.laputan.org/mud/) jonka ylläpitäminen ja jatkokehittäminen muuttuu erittäin haastavaksi.

## Olio- ja komponenttisuunnittelu
 
Sovelluksen arkkitehtuuri siis antaa raamit, jotka ohjaavat sovelluksen tarkempaa suunnittelua ja toteuttamista. Tätä tarkemman tason suunnittelua kutsutaan olio- tai komponenttisuunnitteluksi ja sen tarkoituksena on tarkentaa arkkitehtuuristen komponenttien väliset rajapinnat sekä hahmotella ohjelman tarkempi luokka- tai moduulirakenne.

Vesiputousmaisessa työskentelyssä komponenttisuunnittelu saattaa olla dokumentoitu hyvinkin tarkkaan esim. UML:n luokka- ja sekvenssikaavioita hyväksikäyttäen. Erityisesti ketterässä ohjelmistotuotannossa tarkka suunnittelu tapahtuu kuitenkin yleensä vasta ohjelmoitaessa. 

Ohjelmiston suunnittelussa pyritään ennen kaikkia maksimoimaan [koodin sisäinen laatu](/osa3#yksikkötestaus), eli pitämään sovellus rakenteeltaan helposti ylläpidettävänä ja laajennettavana. 

Ylläpidettävyyden ja laajennettavuuden kannalta tärkeitä seikkoja ovat mm. seuraavat

- koodin tulee olla luettavuudeltaan selkeää, ja sen tulee kertoa esim. nimeämisellä mahdollisimman selkeästi mitä koodi tekee, ja tuoda esiin koodin alla oleva "design"
- yhtä paikkaa pitää pystyä muuttamaan siten, ettei muutoksesta aiheudu sivuvaikutuksia sellaisiin kohtiin koodia, jota muutoksen tekijä ei pysty ennakoimaan
- jos ohjelmaan tulee tehdä laajennus tai bugikorjaus, tulee olla helposti selvitettävissä mihin kohtaan koodia muutos tulee tehdä
- jos ohjelmasta muutetaan "yhtä asiaa", tulee kaikkien muutosten tapahtua vain yhteen kohtaan koodia (metodiin, luokkaan tai komponenttiin)
- muutosten ja laajennusten jälkeen tulee olla helposti tarkastettavissa ettei muutos aiheuta sivuvaikutuksia muualle järjestelmään

Ohjelmistoalalle vuosien varrella kerääntyneen [kansanviisauden](https://www.amazon.com/Software-Development-Principles-Practices-Paperback/dp/B011DBKELY) mukaan ylläpidettävyyden ja laajennettavuuden kannalta hyvällä koodilla on joukko yhteneviä ominaisuuksia, tai _laatuattribuutteja_, joita ovat esim. seuraavat:

- kapselointi
- korkea koheesion aste
- riippuvuuksien vähäisyys 
- toisteettomuus
- testattavuus
- selkeys

Tutustutaan nyt näihin laatuattribuutteihin sekä periaatteisiin ja suunnitteluratkaisuihin, joita noudattamalla on mahdollista kirjoittaa ylläpidettävyydeltään laadukasta koodia. Monet näistä hyvän suunnittelun periaatteista on nimetty ja dokumentoitu _suunnittelumalleina_ (engl. design patterns). 

Olemme jo nähneet kurssin aikana muutamia suunnittelumalleja, ainakin seuraavat: _dependency injection_ eli riippuvuuksien injektointi, _singleton_ sekä _data access object_. Suurin osa tällä kurssilla käsiteltävistä suunnittelumalleista on syntynyt olio-ohjelmoinnin parissa. Osa suunnittelumalleista on relevantteja myös muita paradigmoja, kuten funktionaalista ohjelmointia käytettäessä. Muilla paradigmoilla on myös omia suunnittelumalleja, mutta niitä emme kurssilla käsittele.

### Koodin laatuattribuutti: kapselointi

Ohjelmoinnin peruskurssilla _kapselointi_ (engl. encapsulation) määriteltiin muutama vuosi seuraavasti

> Tapaa ohjelmoida olion toteutuksen yksityiskohdat luokkamäärittelyn sisään – piiloon olion käyttäjältä – kutsutaan kapseloinniksi. Olion käyttäjän ei tarvitse tietää mitään olioiden sisäisestä toiminnasta. 

Määritelmä ei ole nykyisellä kurssilla sanatarkkaan sama, mutta aloitteleva ohjelmoija assosioi kapseloinnin nykyäänkin seuraavaan periaatteeseen: _oliomuuttujat tulee määritellä privaateiksi ja niille tulee tehdä tarvittaessa setterit ja getterit_

Tämä on kuitenkin melko kapea näkökulma kapselointiin. Olion sisäisen tilan lisäksi kapseloinnin kohde voi olla mm. käytettävän olion tyyppi, käytetty algoritmi, olioiden luomisen tapa, käytettävän komponentin rakenne, jne...

Monissa suunnittelumalleissa on kyse juuri eritasoisten asioiden kapseloinnista, ja tulemme pian näkemään esimerkkejä asiasta.

Pyrkimys kapselointiin näkyy myös ohjelmiston arkkitehtuurin tasolla. Esimerkiksi kerrosarkkitehtuurissa ylempi kerros käyttää ainoastaan alapuolellaan olevan kerroksen ulospäin tarjoamaa rajapintaa, kaikki muu on kapseloitu näkymättömiin. Vastaavasti mikropalveluarkkitehtuureissa yksittäinen palvelu kapseloi toiminnallisuutensa sisäisen logiikan ja tarjoaa ulospäin ainoastaan verkon välityksellä käytettävän rajapinnan.

### Koodin laatuattribuutti: koheesio

_Koheesiolla_ (engl. cohesion) tarkoitetaan sitä, kuinka pitkälle metodissa, luokassa tai komponentissa oleva ohjelmakoodi keskittyy tietyn yksittäisen toiminnallisuuden toteuttamiseen. Hyvänä asiana pidetään mahdollisimman korkeaa koheesion astetta.

Koheesioon tulee siis pyrkiä kaikilla ohjelman tasoilla, metodeissa, luokissa ja komponenteissa.

#### Koheesio metoditasolla

Tarkastellaan esimerkkinä [Neal Fordin artikkelista](http://www.ibm.com/developerworks/java/library/j-eaed4/index.html) olevaa tietokannasta tietoa hakevaa metodia. Metodin koodi näyttää seuraavalta:

``` java
// SQL_SELECT_PARTS on vakio, joka sisältää SQL-kyselyn

public void populate() throws Exception {
    try (Connection c = DriverManager.getConnection(DB_URL, USER, PASSWORD)) {
        Statement stmt = c.createStatement();
        ResultSet rs = stmt.executeQuery(SQL_SELECT_PARTS);
        while (rs.next()) {
            Part p = new Part();
            p.setName(rs.getString("name"));
            p.setBrand(rs.getString("brand"));
            p.setRetailPrice(rs.getDouble("retail_price"));
            partList.add(p);
        }
    }
}
```

Metodissa tehdään montaa asiaa:

- luodaan yhteys tietokantaan
- tehdään tietokantakysely
- käydään kyselyn tulosrivit läpi ja luodaan jokaista tulosriviä kohti _Part_-olio
- suljetaan yhteys

Metodi toimii myös monella erilaisella _abstraktiotasolla_. Toisaalta käsitellään teknisiä tietokantatason asioita kuten tietokantayhteyden avaamista ja kyselyn tekemistä, toisaalta sovelluslogiikan tasolla mielekkäitä _Part_-olioita.

Metodin koheesion taso on siis erittäin huono.

Metodi on helppo _refaktoroida_ pilkkomalla se pienempiin osiin, joiden kutsumista alkuperäinen metodi koordinoi.

``` java
public void populate() throws Exception {
    try (Connection c = getDatabaseConnection()) {
        ResultSet rs = createResultSet(c);
        while (rs.next()){
            addPartToListFromResultSet(rs);
        }
    }
}

private ResultSet createResultSet(Connection c)throws SQLException {
    return c.createStatement().
            executeQuery(SQL_SELECT_PARTS);
}

private Connection getDatabaseConnection() throws ClassNotFoundException, SQLException {
    return DriverManager.getConnection(DB_URL,"webuser", "webpass");
}

private void addPartToListFromResultSet(ResultSet rs) throws SQLException {
    Part p = new Part();
    p.setName(rs.getString("name"));
    p.setBrand(rs.getString("brand"));
    p.setRetailPrice(rs.getDouble("retail_price"));
    partList.add(p);
}
```

Yksittäiset metodit ovat nyt kaikki samalla abstraktiotasolla toimivia ja kuvaavasti nimettyjä.

 Aikaansaatu lopputulos ei ole vielä ideaali koko ohjelman kontekstissa. [Artikkelissa](http://www.ibm.com/developerworks/java/library/j-eaed4/index.html) esimerkkiä jatketaan eristäen tietokantaoperaatiot, joita myös muut ohjelman osat tarvitsevat omaan luokkaansa.

#### Koheesio luokkatasolla

Luokkatason koheesiossa pyrkimyksenä on, että luokan _vastuulla_ on vain yksi asia, tämä tunnetaan myös nimellä [single responsibility](https://en.wikipedia.org/wiki/Single_responsibility_principle)-periaate (SRP). Robert Martin määrittelee, että luokalla on yksi vastuu _jos sillä on vain yksi syy muuttua_. 

Kurssin ensimmäisissä laskareissa tarkasteltiin yksinkertaista laskinta:

``` java
public class Laskin {

    private Scanner lukija;

    public Laskin() {
        lukija = new Scanner(System.in);
    }

    public void suorita(){
        while( true ) {
            System.out.print("luku 1: ");
            int luku1 = lukija.nextInt();
            if ( luku1==-9999  ) return;

            System.out.print("luku 2: ");
            int luku2 = lukija.nextInt();
            if ( luku2==-9999  ) return;

            int vastaus = laskeSumma(luku1, luku2);
            System.out.println("summa: "+ vastaus);
        }
    }

    private int laskeSumma(int luku1, int luku2) {
        return luku1+luku2;
    }

}
```

Luokka rikkoo single responsibility -periaatetta. Miksi? Periaate sanoo, että luokalla saa olla vain yksi vastuu eli syy muuttua. Nyt luokalla on kuitenkin useita syitä muuttua:

- luokalle halutaan toteuttaa uusia laskutoimituksia
- kommunikointi käyttäjän kanssa halutaan hoitaa jotenkin muuten kuin konsolin välityksellä

Eriyttämällä käyttäjän kanssa kommunikointi omaan luokkaan ja eristämällä se rajapinnan taakse eli _kapseloimalla kommunikoinnin toteutustapa_, saadaan luokan Laskin vastuita vähennettyä:

``` java
public interface IO {
    int nextInt();
    void print(String m);
}

public class Laskin {
    private IO io;

    public Laskin(IO io) {
        this.io = io;
    }

    public void suorita(){
        while( true ) {
            io.print("luku 1: ");
            int luku1 = io.nextInt();
            if ( luku1==-9999  ) return;

            io.print("luku 2: ");
            int luku2 = io.nextInt();
            if ( luku2==-9999 ) return;

            int vastaus = laskeSumma(luku1, luku2);
            io.print("summa: "+vastaus+"\n");
        }
    }

    private int laskeSumma(int luku1, int luku2) {
        return luku1+luku2;
    }
}
```

Nyt kommunikointitavan muutos ei edellytä luokkaan mitään muutoksia edellyttäen että uusikin kommunikointitapa toteuttaa rajapinnan, jonka kautta _Laskin_ hoitaa kommunikoinnin.

Vaikka luokka _Laskin_ siis toteuttaakin edelleen käyttäjänsä näkökulmasta samat asiat kuin aiemmin, ei se hoida kaikkea itse vaan _delegoi_ osan vastuistaan muualle.

Kommunikointirajapinta voidaan toteuttaa esim. seuraavasti:

```java
public class KonsoliIO implements IO {
    private Scanner lukija;

    public KonsoliIO() {
        lukija = new Scanner(System.in);
    }

    public int nextInt() {
        return Integer.parseInt(lukija.nextLine());
    }

    public void print(String m) {
        System.out.println(m);
    }
}
```

Laskin konfiguroidaan injektoimalla _IO_-rajapinnan toteuttava luokka konstruktorin parametrina:

```java
public class Main {
    public static void main(String[] args) {
        Laskin laskin = new Laskin( new KonsoliIO() );
        laskin.suorita();
    }
}
```

Testausta varten voidaan toteuttaa _stub_ eli valekomponentti, jonka avulla testi voi hallita "käyttäjän" syötteitä ja lukea ohjelman tulostukset:

```java
public class IOStub implements IO {

    int[] inputs;
    int mones;
    ArrayList<String> outputs;

    public IOStub(int... inputs) {
        this.inputs = inputs;
        this.outputs = new ArrayList<String>();
    }

    public int nextInt() {
        return inputs[mones++];
    }

    public void print(String m) {
        outputs.add(m);
    }
}
```

Parannellun laskimen rakenne luokkakaaviona

![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-1.png)

Luokka ei ole vielä kaikin osin laajennettavuuden kannalta optimaalinen. Palaamme asiaan hetken kuluttua.

#### Koheesio komponenttitasolla

Koheesio ja _single responsibility_ -periaate eivät ole pelkästään olio-ohjelmointiin liittyviä käsitteitä vaan universaaleja hyvän koodin periaatteita. Jos ajatellaan kurssilla [Full stack -websovelluskehitys](https://fullstackopen.com/) käytettävää React-kirjastoa, on siinäkin periaatteena koostaa käyttöliittymä pienistä komponenteista, joista kukin keskittyy yhteen asiaan, esim. yksittäisen napin HTML-koodin renderöintiin. Web-sovelluksen tilan käsittely taas pyritään kapseloimaan Redux-storeen, jonka ainoa vastuu on tilasta ja sen muutoksista huolehtiminen. 

Koheesion periaate näkyy myös sovelluksen arkkitehtuurien tasolla. Kerrosarkkitehtuurissa kukin sovelluksen kerros keskittyy oman abstraktiotason asioihin, esim. sovelluslogiikka ei ota kantaa käyttöliittymään tai tiedon tallentamisen tapaan. Mikropalveluarkkitehtuureissa koheesio taas näkyy hieman eri tavalla, yksittäinen mikropalvelu keskittyy toteuttamaan yksittäisen liiketoiminnan tason toiminnallisuuden, esim. verkkokaupan suosittelualgoritmin tai laskutuksen.

### Riippuvuuksien vähäisyys

Single responsibility -periaatteen hengessä tehty ohjelma koostuu suuresta määrästä oliota/komponentteja, joilla on suuri määrä pieniä metodeja.

Olioiden on oltava vuorovaikutuksessa toistensa kanssa saadakseen toteutettua ohjelman toiminnallisuuden. _Riippuvuuksien vähäisyyden_ (engl. low coupling) periaate pyrkii eliminoimaan luokkien ja olioiden välisiä riippuvuuksia.

Koska korkean koheesion periaatteen nojalla olioita on paljon, tulee riippuvuuksia pakostakin, miten riippuvuudet sitten saadaan eliminoitua? Ideana on eliminoida tarpeettomat riippuvuudet _ja_ välttää riippuvuuksia konkreettisiin asioihin.

Riippuvuuden kannattaa kohdistua asiaan, joka ei muutu herkästi, eli joko rajapintaan tai abstraktiin luokkaan. Sama idea kulkee parilla eri nimellä
- program to an interface, not to an implementation 
- depend on abstractions, not on concrete implementation
 
Konkreettisen riippuvuuden eliminointi voidaan tehdä rajapintojen (tai abstraktien luokkien) avulla. Olemme tehneet näin kurssilla usein, mm. Verkkokaupan riippuvuus Varastoon, Pankkiin ja Viitegeneraattoriin korvattiin rajapinnoilla. Riippuvuuksien injektointi -suunnittelumalli toimi usein apuvälineenä konkreettisen riippuvuuksien eliminoinnissa.

Osa luokkien välisistä riippuvuuksista on tarpeettomia ja ne kannattaa eliminoida muuttamalla luokan vastuita.


#### Favour composition over inheritance eli milloin ei kannata periä <span style="color:blue">[viikko 5]</span>

Perintä muodostaa riippuvuuden perivän ja perittävän luokan välille, ja tämä voi jossain tapauksissa olla ongelmallista. Eräs oliosuunnittelun kulmakivi onkin periaate [Favour composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance) eli suosi yhteistoiminnassa toimivia oliota perinnän sijaan.

Tarkastellaan tilannetta havainnollistavaa esimerkkiä.

Käytössämme luokka, joka mallintaa pankkitiliä:

``` java
public class Tili {
    private String tiliNumero;
    private String omistaja;
    private double saldo;
    private double korkoProsentti;

    public Tili(String tiliNumero, String omistaja, double korkoProsentti) {
        this.tiliNumero = tiliNumero;
        this.omistaja = omistaja;
        this.korkoProsentti = korkoProsentti;
    }

    public boolean siirraRahaaTililta(Tili tilille, double summa){
        if ( this.saldo<summa ) return false;

        this.saldo -= summa;
        tilille.saldo += summa;

        return true;
    }

    public void maksaKorko(){
        saldo += saldo*korkoProsentti*100;
    }
}
```

Asiakkaan vaatimukset muuttuvat ja tulee tarve tilille, jonka korko perustuu joko 1, 3, 6 tai 12 kuukauden Euribor-korkoon. Päätämme tehdä uuden luokan _EuriborTili_ perimällä luokan _Tili_ ja ylikirjoittamalla metodin _maksaKorko_ siten, että Euribor-koron senhetkinen arvo haetaan verkosta:

``` java
public class EuriborTili extends Tili {
    private int kuukauden;

    public EuriborTili(String tiliNumero, String omistaja, int kuukauden) {
        super(tiliNumero, omistaja, 0);
        this.kuukauden = kuukauden;
    }

    @Override
    public void maksaKorko() {
        saldo += saldo * korko() * 100;
    }

    private double korko() {
        try {
            Scanner lukija = new Scanner(new URL("http://www.euribor-rates.eu/current-euribor-rates.asp").openStream());
            int count = 0;
            while (lukija.hasNextLine()) {
                String sisalto = lukija.nextLine();
                if (sisalto.contains("Euribor - "+kuukauden+" month") && count==0){
                    count = 1;
                } else if (sisalto.contains("Euribor - "+kuukauden+" month") && count==1){
                    lukija.nextLine();
                    lukija.nextLine();
                    sisalto = lukija.nextLine();
                    return Double.parseDouble(sisalto.substring(0, sisalto.length()-1))/100;
                }
            }      
            
        } catch (Exception e) {}
        return 0;
    }
}
```

Huomaamme, että _EuriborTili_ rikkoo _single responsibility_ -periaatetta, sillä luokka sisältää normaalin tiliin liittyvän toiminnan lisäksi koodia, joka hakee tavaraa internetistä. Vastuut kannattaa selkeyttää ja korkoprosentin haku eriyttää omaan rajapinnan takana olevaan luokkaan:

``` java
public interface EuriborLukija {
    double korko();
}

public class EuriborTili extends Tili {
    private EuriborLukija euribor;

    public EuriborTili(String tiliNumero, String omistaja, int kuukauden) {
        super(tiliNumero, omistaja, 0);
        euribor = new EuriborLukijaImpl(kuukauden);
    }

    @Override
    public void maksaKorko() {
        saldo += saldo * euribor.korko() * 100;
    }
}

public class EuriborLukijaImpl implements EuriborLukija {
    private int kuukauden;

    public EuriborLukijaImpl(int kuukauden) {
        this.kuukauden = kuukauden;
    }

    @Override
    public double korko() {
        try {
            Scanner lukija = new Scanner(new URL("http://www.euribor-rates.eu/current-euribor-rates.asp").openStream());
            int count = 0;
            while (lukija.hasNextLine()) {
                String sisalto = lukija.nextLine();
                if (sisalto.contains("Euribor - "+kuukauden+" month") && count==0){
                    count = 1;
                } else if (sisalto.contains("Euribor - "+kuukauden+" month") && count==1){
                    lukija.nextLine();
                    lukija.nextLine();
                    sisalto = lukija.nextLine();
                    return Double.parseDouble(sisalto.substring(0, sisalto.length()-1))/100;
                }
            }      
            
        } catch (Exception e) {}
        return 0;
    }
}
```

EuriborTili-luokka alkaa olla nyt melko siisti, EuriborLukijassa olisi paljon parantemisen varaa, mm. sen ainoan metodin _koheesio_ on huono: metodi tekee aivan liian montaa asiaa.

Seuraavaksi huomaamme, että on tarvetta _määräaikaistilille_, joka on muuten samanlainen kuin _Tili_, mutta määräaikaistililtä ei voi siirtää rahaa muualle ennen kuin se on tehty tietyn ajan kuluttua mahdolliseksi. Perimme jälleen luokan _Tili_:

``` java
public class MaaraaikaisTili extends Tili {
    private boolean nostokielto;

    public MaaraaikaisTili(String tiliNumero, String omistaja, double korkoProsentti) {
        super(tiliNumero, omistaja, korkoProsentti);
        nostokielto = true;
    }

    public void salliNosto(){
        nostokielto = false;
    }

    @Override
    public boolean siirraRahaaTililta(Tili tilille, double summa) {
        if ( nostokielto )
            return false;

        return super.siirraRahaaTililta(tilille, summa);
    }

}
```

Ohjelman rakenne näyttää tässä vaiheessa seuraavalta:

![]({{ "/images/4-8.png" | absolute_url }}){:height="120px" }

Seuraavaksi tulee idea _Euribor-korkoa käyttävistä määräaikaistileistä_. Miten nyt kannattaisi tehdä? Osa toiminnallisuudesta on luokassa _MaaraaikaisTili_ ja osa luokassa _EuriborTili_...

Koronmaksun hoitaminen perinnän avulla ei ollutkaan paras ratkaisu, parempi on noudattaa _favor composition over inheritance_ -periaatetta. Eli erotetaan _koronmaksu_ omaksi luokakseen, tai rajapinnan toteuttaviksi luokiksi:

``` java
public interface Korko {
    double korko();
}

public class Tasakorko implements Korko {
    private double korko;

    public Tasakorko(double korko) {
        this.korko = korko;
    }

    public double korko() {
        return korko;
    }
}

public class EuriborKorko implements Korko {
    EuriborLukija lukija;

    public EuriborKorko(int kuukausi) {
        lukija = new EuriborlukijaImpl(kuukausi);
    }

    public double korko() {
        return korko();
    }
}
```

Tarve erilliselle _EuriborTili_-luokalle katoaa, ja pelkkä _Tili_ hieman muutetussa muodossa riittää:

``` java
public class Tili {
    private String tiliNumero;
    private String omistaja;
    private double saldo;
    private Korko korko;

    public Tili(String tiliNumero, String omistaja, Korko korko) {
        this.tiliNumero = tiliNumero;
        this.omistaja = omistaja;
        this.korko = korko;
    }

    public boolean siirraRahaaTililta(Tili tilille, double summa){
        if ( this.saldo<summa ) return false;

        this.saldo -= summa;
        tilille.saldo += summa;

        return true;
    }

    public void maksaKorko(){
        saldo += saldo * korko.korko() * 100;
    }
}
```

Erilaisia tilejä luodaan seuraavasti:

``` java
Tili normaali = new Tili("1234-1234", "Jami Kousa", new Tasakorko(4));
Tili euribor12 = new Tili("4422-3355", "Lea Kutvonen", new EuriborKorko(12));
```

Ohjelman rakenne on nyt seuraava

![]({{ "/images/4-9.png" | absolute_url }}){:height="120px" }

Muutetaan luokkaa _Tili_ vielä siten, että tilejä voidaan luoda ilman konstruktoria:

``` java
public class Tili {

    private String tiliNumero;
    private String omistaja;
    private double saldo;
    private Korko korko;

    public static Tili luoEuriborTili(String tiliNumero, String omistaja, int kuukausia) {
        return new Tili(tiliNumero, omistaja, new EuriborKorko(kuukausia));
    }

    public static Tili luoMaaraaikaisTili(String tiliNumero, String omistaja, double korko) {
        return new MaaraaikaisTili(tiliNumero, omistaja, new Tasakorko(korko));
    }

    public static Tili luoKayttoTili(String tiliNumero, String omistaja, double korko) {
        return new Tili(tiliNumero, omistaja, new Tasakorko(korko));
    }

    protected Tili(String tiliNumero, String omistaja, Korko korko) {
        this.tiliNumero = tiliNumero;
        this.omistaja = omistaja;
        this.korko = korko;
    }

    // ...

    public void vaihdaKorkoa(Korko korko) {
        this.korko = korko;
    }
}
```

Lisäsimme luokalle kolme _staattista apumetodia_ helpottamaan tilien luomista. Tilejä voidaan nyt luoda seuraavasti:

``` java
Tili maaraaikais = Tili.luoMaaraaikaisTili("1234-1234", "Jami Kousa", 2.5);
Tili euribor12 = Tili.luoEuriborTili("4422-3355", "Lea Kutvonen", 12 );
Tili fyrkka = Tili.luoEuriborTili("7895-4571", "Indre Zliobaite", 1 );
```

#### Suunnittelumalli: static factory method <span style="color:blue">[viikko 5]</span>

Käyttämämme periaate olioiden luomiseen staattisten metodien avulla on hyvin tunnettu suunnittelumalli _staattinen tehdasmetodi_ (engl. static factory method).

Tili-esimerkissä käytetty static factory method on yksinkertaisin monista tehdas-suunnittelumallin varianteista. Periaatteena suunnittelumallissa on se, että luokalle tehdään staattinen tehdasmetodi tai metodeja, jotka käyttävät konstruktoria ja luovat luokan ilmentymät. Konstruktorin suora käyttö usein estetään määrittelemällä konstruktori privateksi.

Tehdasmetodin avulla voidaan piilottaa olion luomiseen liittyviä yksityiskohtia, esimerkissä _Korko_-rajapinnan toteuttavien olioiden luominen ja jopa olemassaolo oli tehdasmetodin avulla piilotettu tilin käyttäjältä. 

Tehdasmetodin avulla voidaan myös piilottaa käyttäjältä luodun olion todellinen luokka, esimerkissä näin tehtiin määräaikaistilin suhteen.

Tehdasmetodi siis auttaa _kapseloinnissa_, olion luomiseen liittyvät detaljit ja jopa olion todellinen luonne piiloutuu olion käyttäjältä. Tämä taas mahdollistaa erittäin joustavan laajennettavuuden. 

Staattinen tehdasmetodi ei ole testauksen kannalta erityisen hyvä ratkaisu, esimerkissämme olisi vaikea luoda tili, jolle annetaan _Korko_-rajapinnan toteuttama mock-olio. Nyt se tosin onnistuu koska konstruktoria ei ole täysin piilotettu.

Lisätietoa factory-suunnittelumallista esim. [täältä](https://sourcemaking.com/design_patterns/factory_method) ja [täältä](http://www.oodesign.com/factory-method-pattern.html).

Tehdasmetodien avulla voimme siis kapseloida luokan todellisen tyypin. Jamin tilihän on määräaikaistili, se kuitenkin pyydetään Tili-luokassa sijaitsevalta factoryltä, olion oikea tyyppi on piilotettu tarkoituksella käyttäjältä. Määräaikaistilin käyttäjällä ei siis ole enää konkreettista riippuvuutta luokkaan MaaraaikaisTili.

Teimme myös metodin jonka avulla tilin korkoa voi muuttaa. Jamin tasakorkoinen määräaikaistili on helppo muuttaa lennossa kolmen kuukauden Euribor-tiliksi:

```java
maaraaikais.vaihdaKorkoa(new EuriborKorko(3));
```

Eli luopumalla perinnästä oliorakenne selkeytyy huomattavasti ja saavutetaan suoritusaikaista joustavuutta (koronlaskutapa), joka perintää käyttämällä ei onnistu.

#### Suunnittelumalli: strategy <span style="color:blue">[viikko 5]</span>

Tekniikka jolla koronmaksu hoidetaan on myöskin suunnittelumalli, nimeltään _strategia_ (engl. strategy).

Strategyn avulla voidaan hoitaa tilanne, jossa eri olioiden käyttäytyminen on muuten sama, mutta tietyissä kohdissa on käytössä eri "algoritmi". Esimerkissämme tämä algoritmi oli korkoprosentin määrittely. Sama tilanne voidaan hoitaa usein myös perinnän avulla käyttämättä erillisiä olioita, strategy kuitenkin mahdollistaa huomattavasti dynaamisemman ratkaisun, sillä strategia-olioa on mahdollista vaihtaa ajoaikana. Strategyn käyttö ilmentää hienosti "favour composition over inheritance"-periaatetta

Lisätietoa strategia-suunnittelumallista [täällä](http://www.oodesign.com/strategy-pattern.html) ja [täällä](https://sourcemaking.com/design_patterns/strategy).

#### Vastuiden eriyttäminen: tilin luominen pankissa <span style="color:blue">[viikko 5]</span>

Loimme äsken luokalle _Tili_ staattiset apumetodit tilien luomista varten. Voisi kuitenkin olla järkevämpää siirtää vastuu tilien luomisesta erillisen luokan, _Pankki_ vastuulle. Pankki voi helposti hallinnoida myös tilinumeroiden generointia:

``` java
public class Pankki {
    private int numero;
        
    private String generoiTilinro() {
        numero++;
        return "12345-"+numero;
    }
    
    public Tili kayttotili(String omistaja, double k){
        return new Tili(generoiTilinro(), omistaja, new Tasakorko(k));
    }
    
    public Tili maaraikaistili(String omistaja, double k){
        return new MaaraAikaisTili(generoiTilinro(), omistaja, new Tasakorko(k));
    }    
    
    public Tili euribortili(String omistaja, int kk){
        return new Tili(generoiTilinro(), omistaja, new EuriborKorko(kk));
    }        

    public Tili maaraaikaisEuribor(String omistaja, int kk){
        return new MaaraAikaisTili(generoiTilinro(), omistaja, new EuriborKorko(kk));
    } 
}
```

Tilejä luodaan pankin avulla seuraavasti:

``` java
Pankki spankki = new Pankki();

Tili euriborTili = spankki.euribortili("Lea Kutvonen", 6);
Tili maaraaikaistili = spankki.maaraikaistili("Arto Hellas", 0.15);
``` 

eli tilin luojan ei enää tarvitse huolehtia tilinumeroiden generoinnista.

Jokaisesta tehdasmetodista on siis tehty luokan oman staattisen metodin sijaan toiseen luokkaan sijoitettu oliometodi. 

Luokkien vastuut ovat selkeytyneet, _Tili_ vastaa yhteen tiliin liittyvistä asioista, kuten saldosta. Tili myös tuntee olion, jonka hallinnassa on tieto tiliin liittyvästä korosta. _Pankki_ taas hallinnoi kaikkia tilejään, sen avulla myös generoidaan tilinumerot tilien luomisen yhteydessä.

### Toiminnallisuuden kapselointi: laskin ja strategia <span style="color:blue">[viikko 5]</span>

Olemme laajentaneet Laskin-luokkaa osaamaan myös muita laskuoperaatioita:

``` java
public class Laskin {

    private IO io;

    public Laskin(IO io) {
        this.io = io;
    }

    public void suorita() {
        while (true) {
            io.print("komento: ");
            String komento = io.nextLine();
            if (komento.equals("lopetus")) {
                return;
            }

            io.print("luku 1: ");
            int luku1 = io.nextInt();

            io.print("luku 2: ");
            int luku2 = io.nextInt();

            int vastaus = 0;

            if ( komento.equals("summa") ){
                vastaus = laskeSumma(luku1, luku2);
            } else if ( komento.equals("tulo") ){
                vastaus = laskeTulo(luku1, luku2);
            } else if ( komento.equals("erotus") ){
                vastaus = laskeErotus(luku1, luku2);
            }

            io.print("tulos: " + vastaus + "\n");
        }
    }

    private int laskeSumma(int luku1, int luku2) {
        return luku1 + luku2;
    }

    private int laskeTulo(int luku1, int luku2) {
        return luku1 * luku2;
    }

    private int laskeErotus(int luku1, int luku2) {
        return luku1-luku2;
    }
}
```

Ratkaisu ei ole kaikin puolin tyydyttävä. Entä jos haluamme muitakin operaatioita kuin summan, tulon ja erotuksen? if-hässäkkä tulee kasvamaan.

Päätämme siirtyä _strategia-suunnittelumallin_ käyttöön, eli hoidetaan laskuoperaatio omassa luokassaan. Rajapinnan sijasta käytämme tällä kertaa abstraktia luokkaa:

``` java
public abstract class Operaatio {
    
    public static Operaatio luo(String operaatio) {
        if (operaatio.equals("summa")) {
            return new Summa();
        } else if (operaatio.equals("tulo")) {
            return new Tulo();
        }
        return new Erotus();
    }

    public abstract int laske(int luku1, int luku2);
}
``` 

Abstrakti _Operaatio_ luokka määrittelee, että sen toteuttavilla luokilla eli yksittäisillä operaatioilla on metodi _laske_, joka saa kaksi parametria. Tämän lisäksi luokka sisältää staattisen tehdasmetodin _luo_, jonka avulla voidaan luoda laskuoperaatioita vastaavia olioita.

Laskuoperaatioita vastaavat luokat on määritelty seuraavasti:

```java
public class Summa extends Operaatio {
    @Override
    public int laske(int luku1, int luku2) {
        return luku1 + luku2;
    }
}


public class Tulo extends Operaatio {
    @Override
    public int laske(int luku1, int luku2) {
        return luku1 * luku2;
    }
}

public class Erotus extends Operaatio {
    @Override
    public int laske(int luku1, int luku2) {
        return luku1 - luku2;
    }
}
```

Laskin-luokka yksinkertaistuu huomattavasti:

``` java
public class Laskin {

    private IO io;

    public Laskin(IO io) {
        this.io = io;
    }

    public void suorita() {
        while (true) {
            io.print("komento: ");
            String komento = io.nextLine();
            if (komento.equals("lopetus")) {
                return;
            }

            io.print("luku 1: ");
            int luku1 = io.nextInt();

            io.print("luku 2: ");
            int luku2 = io.nextInt();

            Operaatio operaatio = Operaatio.luo(komento);

            io.print(komento + ": " + operaatio.laske(luku1, luku2) + "\n");
        }
    }
}
```

Hienona puolena laskimessa on nyt se, että voimme lisätä operaatioita ja luokkaa _Laskin_ ei tarvitse muuttaa millään tavalla, ainoa muutosta edellyttävä kohta olemassaolevassa koodissa on luokan _Operaatio_ metodi _luo_.

Sovelluksen rakenne näyttää seuraavalta

![]({{ "/images/4-10.png" | absolute_url }}){:height="250px" }

#### Laskin ja komento-olio <span style="color:blue">[viikko 5]</span>

Entä jos haluamme laskimelle muunkinlaisia, kuin 2 parametria ottavia operaatioita, esim. neliöjuuren? Muutetaan luokan _Operaatio_ olemusta siten, että siirretään sen huolehdittavaksi myös käyttäjän kanssa tapahtuva kommunikointi.

Tämän muutoksen myötä siirrymme käyttämään Strategy-suunnittelumallin lähisukulaista _command_-suunnittelumallia, annetaankin operaatiolle uusi nimi _Komento_.

``` java
public abstract class Komento {
    protected IO io;
    public Komento(IO io) {
        this.io = io;
    }

    public abstract void suorita();
}
```

Komennon toteuttavat luokat ovat siis äärimmäisen yksinkertaisia. Komennon voi ainoastaan suorittaa eikä se edes palauta mitään!

Erillisten komento-olioiden luominen siirretään uudelle luokalle _Komentotehdas_:

``` java
public class Komentotehdas {

    private IO io;

    public Komentotehdas(IO io) {
        this.io = io;
    }

    public Komento hae(String operaatio) {
        if (operaatio.equals("summa")) {
            return new Summa(io);
        } else if (operaatio.equals("tulo")) {
            return new Tulo(io);
        } else if (operaatio.equals("nelio")) {
            return new Nelio(io);
        } else if (operaatio.equals("lopeta")) {
            return new Lopeta();
        }
        return new Tuntematon(io);
    }
}
```

Komentotehdas siis palauttaa _hae_-metodin merkkijonoparametria vastaavan komennon. Koska vastuu käyttäjän kanssa kommunikoinnista on siirretty _Komento_-olioille, annetaan niille _IO_-olio konstruktorin pararametrina.

if-hässäkkä näyttää hieman ikävältä. Siitä pääsee kuitenkin helposti eroon tallentamalla erilliset komennon HashMap:iin:

``` java
public class Komentotehdas {
    private HashMap<String, Komento> komennot;
    private Komento tuntemaaton;

    public Komentotehdas(IO io) {
        komennot = new HashMap<String, Komento>();
        komennot.put("summa", new Summa(io));
        komennot.put("tulo", new Tulo(io));
        komennot.put("nelio", new Nelio(io));
        tuntematon = new Tuntematon(io);
    }

    public Komento hae(String operaatio) {
        return komennot.getOrDefault(operaatio, tuntemaaton);
    }
}
```

Yksittäiset komennot ovat erittäin yksinkertaisia:

``` java
public class Summa extends Komento {
    public Summa(IO io) {
        super(io);
    }

    @Override
    public void suorita() {
        io.print("luku 1: ");
        int luku1 = io.nextInt();

         io.print("luku 2: ");
        int luku2 = io.nextInt();
        
        io.print("vastaus: "+luku1 + luku2);
    }  
}

public class Nelio extends Komento {
    public Nelio(IO io) {
        super(io);
    }

    @Override
    public void suorita() {
        io.print("luku 1: ");
        int luku = io.nextInt();

        io.print("vastaus: "+luku * luku);
    }
}

public class Tuntematon extends Komento {
    public Tuntematon(IO io) {
        super(io);
    }

    @Override
    public void suorita() {
        io.print("sallitut komennot: summa, tulo, nelio, lopeta");
    }
}

public class Lopeta extends Komento {
    public Lopeta(IO io) {
        super(io);
    }

    @Override
    public void suorita() {
        io.print("kiitos ja näkemiin");
        System.exit(0);
    }
}
```

Luokka _Laskin_ yksinkertaistuu entisestään, se ei tee enää juuri mitään muuta kuin luo komentotehtaan sekä sisältää ikuisen loopin, minkä sisällä käyttäjän syötettä vastaavia komentoja suoritetaan: 

```java
public class Laskin {
    private IO io;
    private Komentotehdas komennot;

    public Laskin(IO io) {
        this.io = io;
        komennot = new Komentotehdas(io);
    }

    public void suorita() {
        while (true) {
            io.print("komento: ");
            String komento = io.nextLine();
            komennot.hae(komento).suorita();
        }
    }    
}
```

Ohjelman rakenne tässä vaiheessa

![]({{ "/images/4-11.png" | absolute_url }}){:height="250px" }

#### Suunnittelumalli: command <span style="color:blue">[viikko 5]</span>

Eristimme siis jokaiseen erilliseen laskuoperaatioon liittyvän toiminnallisuuden omaksi oliokseen command-suunnittelumallin ideaa noudattaen, eli siten, että kaikki operaatiot toteuttavat yksinkertaisen rajapinnan, jolla on ainoastaan metodi public _void suorita()_

Ohjelman edellisessä versiossa sovelsimme strategia-suunnittelumallia, missä erilliset laskuoperaatiot oli toteutettu omina olioinaan. Command-suunnittelumalli eroaa siinä, että olemme nyt kapseloineet koko komennon suorituksen, myös käyttäjän kanssa käytävän kommunikoinnin omiin olioihin. Komento-olioiden rajapinta on yksinkertainen, niillä on ainoastaan yksi metodi _suorita_. Strategia-suunnittelumallissa taas strategia-olioiden rajapinta vaihtelee tilanteen mukaan. 

Esimerkissä komennot luotiin tehdasmetodin tarjoavan olion avulla, if:it piilotettiin tehtaan sisälle. Komento-olioiden suorita-metodi suoritettiin esimerkissä välittömästi, näin ei välttämättä ole, komentoja voitaisiin laittaa esim. jonoon ja suorittaa myöhemmin. Joskus komento-olioilla metodin _suorita_ lisäksi myös metodi _peru_, mikä kumoaa komennon suorituksen aiheuttaman toimenpiteen. Esim. editorien undo- ja redo-toiminnallisuus toteutetaan säilyttämällä komento-olioita jonossa. Toteutamme viikon 6 laskareissa _peru_-toiminnallisuuden laskimen komennoille.

Lisää command-suunnittelimallista esim. [täällä](http://www.oodesign.com/command-pattern.html) ja [täällä](http://sourcemaking.com/design_patterns/command).

#### Yhteisen koodin eriyttäminen yliluokkaan <span style="color:blue">[viikko 5]</span>

Koska kaksi parametria käyttäjältä kysyvillä komennoilla, kuten summa, tulo ja erotus on paljon yhteistä, luodaan niitä varten yliluokka:

``` java
public abstract class BinaariOperaatio extends Komento {
    protected int luku1;
    protected int luku2;

    public BinaariOperaatio(IO io) {
        super(io);
    }

    @Override
    public void suorita() {
        io.print("luku 1: ");
        int luku1 = io.nextInt();

        io.print("luku 2: ");
        int luku2 = io.nextInt();

        io.print("vastaus: "+laske());
    }

    protected abstract int laske();
}
```

Summaa ja tuloa vastaavat komennot yksinkertaistuvat:

``` java
public class Summa extends BinaariOperaatio {
    public Summa(IO io) {
        super(io);
    }

    @Override
    protected int laske() {
        return luku1 + luku2;
    }
}

public class Tulo extends BinaariOperaatio {
    public Tulo(IO io) {
        super(io);
    }

    @Override
    public int laske() {
        return luku1*luku2;
    }
}
```

Jos sovellukseen haluttaisiin toteuttaa lisää kaksiparametrisia operaatioita, esimerkiksi erotus, riittäisi erittäin yksinkertainen lisäys:

```java
public class Erotus extends BinaariOperaatio {
    public Erotus(IO io) {
        super(io);
    }

    @Override
    protected int laske() {
        return luku1 - luku2;
    }
}
```

Ja mikä parasta, ainoa muu luokka, jota on koskettava on komentoja luova _Komentotehdas_.

Ohjelmasta on näin ollen saatu laajennettavuuden kannalta varsin joustava. Uusia operaatioita on helppo lisätä ja lisäys ei aiheuta muutoksia moneen kohtaan koodia. Laskin-luokallahan ei ole riippuvuuksia muualle kuin rajapintaan IO, abstraktiin luokkaan Komento sekä luokkaan Komentotehdas.

![]({{ "/images/4-12.png" | absolute_url }}){:height="300px" }

Hintana joustavuudelle on luokkien määrän kasvu. Nopealla vilkaisulla saattaakin olla vaikea havaita miten ohjelma toimii, varsinkaan jos ei ole vastaavaan tyyliin tottunut, mukaan on nimittäin piilotettu factory- ja command-suunnittelumallien lisäksi suunnittelumalli _template method_ (kaksiparametrisen komennon toteutukseen). 

#### Suunnittelumalli: template method <span style="color:blue">[viikko 5]</span>

Template method -suunnittelumalli sopii tilanteisiin, missä kahden tai useamman operaation suoritus on hyvin samankaltainen ja poikkeaa ainoastaan yhden tai muutaman operaatioon liittyvän askeleen kohdalla.

Summa- ja Tulo-komentojen suoritus on oleellisesti samanlainen:

1. lue luku1 käyttäjältä
2. lue luku2 käyttäjältä
3. _laske operaation tulos_
4. tulosta operaation tulos

Ainoastaan kolmas vaihe eli _operaation tuloksen laskeminen_ eroaa summaa ja tuloa selvitettäessä.

Template methodin hengessä asia hoidetaan tekemällä abstrakti yliluokka, jonka metodi _suorita()_ toteuttaa koko komennon suorituslogiikan:

```java
public abstract class BinaariOperaatio implements Komento {
    // ...

    @Override
    public void suorita() {
        io.print("luku 1: ");
        int luku1 = io.nextInt();

        io.print("luku 2: ");
        int luku2 = io.nextInt();

        io.print("vastaus: "+laske());
    }

    protected abstract int laske();
}
```

Suorituslogiikan vaihtuva osa eli operaation laskun tulos on määritelty abstraktina metodina _laske()_, jota metodi _suorita()_ kutsuu.

Konkreettiset toteutukset _Summa_ ja _Tulo_ ylikirjoittavat abstraktin metodin _laske()_, määrittelemällä miten laskenta tietyssä konkreettisessa tilanteessa tapahtuu:

```java
public class Summa extends BinaariOperaatio {
    // ...

    @Override
    protected int laske() {
        return luku1 + luku2;
    }
}
```

Abstraktin luokan metodi _suorita()_ on _template-metodi_, joka määrittelee suorituksen siten, että suorituksen eroava osa määritellään yliluokan abstraktina metodina, jonka aliluokat ylikirjoittavat. Template-metodin avulla siis saadaan määriteltyä "geneerinen algoritmirunko", jota voidaan aliluokissa erikoistaa sopivalla tavalla.

Template-metodeita voi olla useampiakin kuin yksi eroava osa, tällöin abstrakteja metodeja määritellään tarpeellinen määrä. 

Strategy-suunnittelumalli on osittain samaa sukua template-metodin kanssa, siinä kokonainen algoritmi tai algoritmin osa korvataan erillisessä luokassa toteutetulla toteutuksella. Strategioita voidaan vaihtaa suorituksen aikana, template-metodissa tietty olio toimii samalla tavalla koko elinaikansa.  

Lisää template method -suunnittelumallista [täällä](http://www.oodesign.com/template-method-pattern.html) ja [täällä](http://www.netobjectives.com/PatternRepository/index.php?title=TheTemplateMethodPattern).

### Koodin laatuattribuutti: toisteettomuus 

Olemme käsitelleet koodin laatuattribuuteista _kapselointia, koheesiota_ ja _riippuvuuksien vähäisyyttä_, seuraavana vuorossa redundanssi eli toisteisuus.

Aloittelevaa ohjelmoijaa pelotellaan toisteisuuden vaaroista uran ensiaskelista alkaen, varmaan jokainen on kuullut varoituksen: _älä copypastaa koodia_!

Alan piireissä toisteisuudesta varoittava periaate kuuluu [don't repeat yourself](http://c2.com/cgi/wiki?DontRepeatYourself) ja siihen viitataan usein lyhenteellä _DRY_.

Ilmeisin toiston muoto koodissa on juuri copypaste ja se on usein helppo eliminoida esimerkiksi metodien avulla. Kaikki toisteisuus ei ole yhtä ilmeistä ja monissa suunnittelumalleissa on kyse juuri hienovaraisempien toisteisuuden muotojen eliminoinnista, edellisessä esimerkissä template method -suunnittelumallia käyttävän luokan _BinaariOperaatio_ motivaationa oli oikeastaan se, että sama käyttäjän interaktion hoitava koodi toistui luokissa _Summa_ ja _Tulo_.

DRY-periaate menee oikeastaan vielä paljon pelkkää koodissa olevaa toistoa eliminointia pidemmälle. Kirjan [Pragmatic programmer](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) määritelmä _every piece of knowledge must have a single, unambiguous, authoritative representation within a system_ viittaa siihen, että koodin lisäksi periaate tulisi ulottaa koskemaan järjestelmän muitakin osia, kuten tietokantaskeemaa, testejä, build-skriptejä ym.

Pragmatic programmerin määritelmän henkeä ei ei välttämättä pysty tavoittamaan täysin ilman konkreettista esimerkkiä. Oletetaan, että kehittämämme verkkokauppa otettaisiin käyttöön myös sellaisissa maissa, joissa ei käytetä rahayksikkönä euroa. Jos sovellus ei noudata DRY-periaatetta valuutan käsittelyn suhteen, on oletettavaa, että muutos vaatisi muutoksia useisiin eri kohtiin sovellusta. Jos taas valuutan käsittelyllä olisi _single authoritive representation_, esim. se olisi kapseloitu riittävän hyvin luokan _Money_ vastuulle, niin muiden valuuttojen tuen lisääminen ei ehkä edellyttäisi muuta kuin yksittäisen luokan koodin modifiointia.

#### Epätriviaalin copypasten poistaminen Strategy-patternin avulla <span style="color:blue">[viikko 5]</span>

Tarkastellaan [Project Gutenbergistä](http://www.gutenberg.org/) löytyvien kirjojen sisällön analysointiin tarkoitettua luokkaa _GutenbergLukija_:

``` java
public class GutenbergLukija {

    private List<String> rivit;

    public GutenbergLukija(String osoite) throws IllegalArgumentException {
        rivit = new ArrayList<String>();
        try {
            URL url = new URL(osoite);
            Scanner lukija = new Scanner(url.openStream());
            while (lukija.hasNextLine()) {
                rivit.add(lukija.nextLine());
            }
        } catch (Exception e) {
            throw new IllegalArgumentException(e);
        }
    }

    public List<String> rivit() {
        List<String> palautettavat = new ArrayList<>();

        for (String rivi : rivit) {
            palautettavat.add(rivi);
        }

        return palautettavat;
    }

    public List<String> rivitJotkaPaattyvatHuutomerkkiin() {
        List<String> ehdonTayttavat = new ArrayList<>();

        for (String rivi : rivit) {
            if (rivi.endsWith("!")) {
                ehdonTayttavat.add(rivi);
            }
        }

        return ehdonTayttavat;
    }

    public List<String> rivitJoillaSana(String sana) {
        List<String> ehdonTayttavat = new ArrayList<String>();

        for (String rivi : rivit) {
            if (rivi.contains(sana)) {
                ehdonTayttavat.add(rivi);
            }
        }

        return ehdonTayttavat;
    }
}
```

Luokalla on kolme metodia, kaikki kirjan rivit palauttava _rivit_ sekä _rivitJotkaPaattyvatHuutomerkkiin_ ja _rivitJoillaSana(String sana)_ jotka toimivat kuten metodin nimi antaa ymmärtää.

Luokkaa käytetään seuraavasti:

```java
public static void main(String[] args) {
    String osoite = "https://www.gutenberg.org/files/2554/2554-0.txt";
    GutenbergLukija kirja = new GutenbergLukija(osoite);

    for( String rivi : kirja.rivitJoillaSana("beer") ) {
        System.out.println(rivi);
    }
}
```

Luokka on ohjelmoitu "perinteisellä" imperatiivisella tyylillä, kirjan rivejä käydään läpi for-lauseella ja kunkin rivin kohdalla tarkastetaan ehtolauseella onko rivi kyseisen metodin kriteerit täyttävä, esim. huutomerkkiin loppuva.

Tutustutaan seuraavassa hieman [Java 8:n](http://docs.oracle.com/javase/8/docs/api/) mukanaan tuomiin funktionaalista ohjelmointitapaa helpottaviin piirteisiin, lambda-lausekkeisiin sekä kokoelmien käsittelyyn streameina. Nämä asiat ovat toki monelle tuttuja jo kursseilta Ohjelmoinnin perusteet ja Ohjelmoinnin jatkokurssi.

Voimme korvata listalla olevien merkkijonojen tulostamisen kutsumalla listoilla (tarkemmin sanottuna rajapinnan [Interable](http://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)-toteuttavilla luokilla) olevaa metodia _forEach_, joka mahdollistaa listan alkioiden läpikäynnin "funktionaaliseen" tyyliin. Metodi saa parametrikseen "functional interfacen", eli rajapinnan, joka määrittelee ainoastaan yhden toteutettavan metodin, toteuttavan olion. Tälläisiä ovat uudemmassa Javassa myös ns. _lambda-lausekkeet_ (engl. lambda expression), joka tarkoittaa käytännössä anonyymia mihinkään luokkaan liittymätöntä metodia.  Seuraavassa metodikutsun _rivitJoillaSana("beer")_ palauttavien kirjan rivien tulostus forEachia ja lambdaa käyttäen:

``` java
public static void main(String[] args) {
    String osoite = "https://www.gutenberg.org/files/2554/2554-0.txt";
    GutenbergLukija kirja = new GutenbergLukija(osoite);

    kirja.rivitJoillaSana("beer").forEach(s -> System.out.println(s));
}
```

Esimerkissä lambdan syntaksi oli seuraava:

``` java
s -> System.out.println(s)
```

parametri _s_ saa arvokseen yksi kerrallaan kunkin tiedoston tekstirivin. Riveille suoritetaan "nuolen" oikealla puolella oleva tulostuskomento. Lisää lambdan syntaksista [täältä](http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html). Huomionarvoista on se, että lambdan parametrin eli muuttujan _s_ tyyppiä ei tarvitse määritellä, kääntäjä osaa päätellä sen iteroitavana olevan kokoelman perusteella.

Luokan _GutenbergLukija_ tarjoamat kolme kirjan sisällön hakemiseen tarkoitettua metodia ovat selvästi rakenteeltaan hyvin samantapaisia. Kaikki käyvät jokaisen kirjan rivin läpi ja palauttavat niistä osan (tai kaikki) metodin kutsujalle. Metodit eroavat sen suhteen _mitä kirjan riveistä ne palauttavat_. Metodit ovat siis lähes copypastea, ne kuitenkin eroavat sen verran toisistaan, että copypasten eliminoiminen ei ole täysin suoraviivaista.

Jos mietitään metodien toimintaa, niin voidaan ajatella, että jokaisessa metodissa on oma _strategiansa_ rivien palauttamiseen, ja strategiaa lukuunottamatta kaikki muu on samaa. Tämä onkin erinomainen paikka strategy-suunnittelumallin soveltamiseen. Jos eriytämme rivien valintastrategia omaksi luokakseen, voidaan selvitä ainoastaan yhdellä rivien läpikäynnin hoitavalla metodilla.

Määritellään rivien valintaa varten rajapinta:

``` java
public interface Ehto {
    boolean test(String rivi);
}
```

Huom: metodin nimen valinta ei ollut täysin sattumanvarainen. Tulemme myöhemmin määrittelemään, että rajapinta _Ehto_ laajentaa rajapinnan, joka vaatii että rajapinnalla on nimenomaan _test_-niminen metodi.

Ideana on luoda jokaista kirjojen erilaista _hakuehtoa_ kohti oma rajapinnan _Ehto_ toteuttava luokka.

Seuraavassa ehto-luokka, joka tarkastaa sisältyykö tietty sana riville:

``` java
public class SisaltaaSanan implements Ehto {
    private String sana;

    public SisaltaaSanan(String sana) {
        this.sana = sana;
    }

    @Override
    public boolean test(String rivi) {
        return rivi.contains(sana);
    }
}
```

Jos luokasta luodaan ilmentymä

``` java
Ehto ehto = new SisaltaaSanan("olut");
```

voidaan luokan avulla tarkastella sisältävätkö merkkijonot sanan _olut_:


``` java
Ehto ehto = new SisaltaaSanan("olut");
ehto.test("internetin paras suomenkielinen olutsivusto on olutopas.info");
ehto.test("Java 13 ilmestyi 17.9.2019");
```

Ensimmäinen metodikutsuista palauttaisi _true_ ja jälkimmäinen _false_.

Kirjasta voidaan palauttaa oikean ehdon täyttävät sanat lisäämällä luokalle _GutenbergLukija_ metodi:

``` java
public List<String> rivitJotkaTayttavatEhdon(Ehto ehto) {
    List<String> palautettavatRivit = new ArrayList<>();

    for (String rivi : rivit) {
        if (ehto.test(rivi)) {
            palautettavatRivit.add(rivi);
        }
    }

    return palautettavatRivit;
}
```

ja sanan _beer_ sisältävät rivit saadaan tulostettua seuraavasti:

``` java
kirja.rivitJotkaTayttavatEhdon(new SisaltaaSanan("beer")).forEach(s -> System.out.println(s));
```

Pääsemmekin sopivien ehto-luokkien määrittelyllä eroon alkuperäisistä rivien hakumetodeista. Sovellus tulee sikälikin huomattavasti joustavammaksi, että uusia hakuehtoja voidaan helposti lisätä määrittelemällä uusia rajapinnan _Ehto_ määritteleviä luokkia.

Ehto-rajapinta on ns. _funktionaalinen rajapinta_ (engl. functional interface) eli se määrittelee ainoastaan yhden toteutettavan metodin. Javan uusimmilla versioilla voimme määritellä ehtoja myös lambda-lausekkeiden avulla. Eli ei ole välttämätöntä tarvetta määritellä eksplisiittisesti rajapinnan _Ehto_ toteuttavia luokkia. Seuraavassa edellinen esimerkki käyttäen lambda-lauseketta ehdon määrittelemiseen:

```java
kirja.rivitJotkaTayttavatEhdon(s -> s.contains("beer")).forEach(s -> System.out.println(s));
```

Käytännössä siis määrittelemme "lennossa" rajapinnan _Ehto_ toteuttavan luokan, jonka ainoan metodin toiminnallisuuden määritelmä annetaan lambda-lausekkeen avulla:

```java
s -> s.contains("beer")
```

Lambdojen avulla on helppoa määritellä mielivaltaisia ehtoja. Seuraavassa tulostetaan kaikki rivit, joilla esiintyy jompi kumpi sanoista _beer_ tai _vodka_. Ehdon ilmaiseva lambda-lauseke on nyt määritelty selvyyden vuoksi omalla rivillään:

``` java
Ehto ehto = s -> s.contains("beer") || s.contains("vodka");

kirja.rivitJotkaTayttavatEhdon(ehto).forEach(s -> System.out.println(s));
```

Voimme hyödyntää Javan funktionaalisia piirteitä myös luokan _GutenbergLukija_ metodissa _rivitJotkaTayttavatEhdon_.

Metodi on tällä hetkellä seuraava:

``` java
public List<String> rivitJotkaTayttavatEhdon(Ehto ehto) {
    List<String> palautettavatRivit = new ArrayList<>();

    for (String rivi : rivit) {
        if (ehto.test(rivi)) {
            palautettavatRivit.add(rivi);
        }
    }

    return palautettavatRivit;
}
```

Uusissa Javan versioissa kaikki rajapinnan _Collection_ toteuttavat luokat mahdollistavat alkioidensa käsittelyn _Stream_:ina eli "alkiovirtoina", ks. [API-kuvaus](http://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html). Kokoelmaluokasta saadaan sitä vastaava alkiovirta kutsumalla kokoelmalle metodia _stream_.

Alkiovirtoja on taas mahdollista käsitellä monin tavoin, nyt meitä kiinnostava metodi on _filter_, jonka avulla streamista voidaan tehdä uusi streami, josta on poistettu ne alkiot, jotka eivät täytä filtterille annettua boolean-arvoista, funktionaalisen rajapinnan _Predicate<String>_ toteuttavaa ehtoa.

Määrittelemämme rajapinta _Ehto_ on oikeastaan juuri tarkoitukseen sopiva. Jotta voisimme käyttää rajapintaa, tulee meidän kuitenkin tyyppitarkastusten takia määritellä että rajapintamme laajentaa rajapintaa _Predicate<String>_:

``` java
import java.util.function.Predicate;

public interface Ehto extends Predicate<String>{
    boolean test(String rivi);
}
```

Nyt saamme muutettua kirjan rivien streamin _ehdon_ täyttävien rivien streamiksi seuraavasti:

``` java
public List<String> rivitJotkaTayttavatEhdon(Ehto ehto) {
    // ei toimi vielä
    rivit.stream().filter(ehto)
}
```

Metodin tulee palauttaa filtteröidyn streamin alkioista koostuva lista. Stream saadaan muutettua listaksi "keräämällä" sen sisältämät alkiot kutsumalla streamille metodia _collect_ ja kertomalla sille parametrina, että halutaan streamin sisältämät alkiot niemen omana listana. Näin luotu filtteröity lista voidaan sitten palauttaa metodin kutsujalle.

Metodi on seuraavassa:

```java
public List<String> rivitJotkaTayttavatEhdon(Ehto ehto) {
    return rivit.stream().filter(ehto).collect(Collectors.toList());
}
```

Voimme oikeastaan luopua itse määrittelemästämme rajapinnasta _Ehto_, sillä valmis funktionaalinen rajapinta _Predicate<String>_ ajaa saman asian. Yksittäisiä ehtoja määrittelevät luokat voidaan muuttaa seuraavasti:

```java
public class SisaltaaSanan implements Predicate<String> {
    // ...
}
```

ja lukija muuttuu muotoon:

```java
public class GutenbergLukija {
    private List<String> rivit;

    public GutenbergLukija(String osoite) throws IllegalArgumentException {
        // ...
    }
    
    public List<String> rivitJotkaTayttavatEhdon(Predicate<String> ehto) {
        return rivit.stream().filter(ehto).collect(Collectors.toList());
    }    
}
```

Funktionaalinen rajapinta _Predicate_ sisältää itse asiassa muutamia valmiiksi toteutettuja metodeja, joiden avulla on mahdollista _koostaa_ yksittäisistä ehdoista _monimutkaisempia ehtoja_. Seuraavassa etsitään ne rivit jotka

- sisältävät sanan _beer_ ja ovat yli 50 riviä pitkiä _tai_
- alkavat kirjaimella _Z_

```java
Predicate<String> ehto1 = new SisaltaaSanan("beer");
Predicate<String> ehto2 = s -> s.length()>50;
Predicate<String> ehto3 = s -> s.length()>0 && s.charAt(0) == 'Z';

kirja
    .rivitJotkaTayttavatEhdon((ehto1.and(ehto2)).or(ehto3))
    .forEach(s->System.out.println(s));
```

#### Hyvä vs. paha copypaste <span style="color:blue">[viikko 5]</span>

Vaikka koodin, konfiguraatioiden, tietokantaskeeman yms. toisteettomuus on yleisesti ottaen hyvä asia, voi ajoittain olla järkevää ainakin ensin tehdä nopea copypasteen perustuva ratkaisu ja [refaktoroida](/osa4/refaktorointi) koodi tarvittaessa myöhemmin siistimmäksi. 

Monissa tilanteissa nimittäin copypasten poistamisella on pieni hintansa, se saattaa muuttaa sovellusta monimutkaisemmaksi. Gutenberg-lukijan kohdalla alkuperäinen versio saattaisi olla täysin riittävä käyttöön, ja refaktorointi ei välttämättä olisi vaivan arvoinen. Mutta jos sovellukseen tulisi tarve useimpiin ehtoihin, ei sovelluksen alkuperäinen design siihen kunnolla taipuisi ja copypastea tulisi yhä suuremmat määrät.

Melko hyvä periaate onkin _[three strikes and you refactor](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming))_, eli samankaltainen koodilogiikka kahdessa kohtaa on kutakuinkin ok, mutta jos se tulee kopioida vielä kolmanteen kohtaan, on parempi refaktoroida koodia siten, että copypaste saadaan eliminoitua.

### Koodin laatuattribuutti: testattavuus

Tärkeä piirre hyvällä koodilla on sen testattavuus, eli koodi on helppo testata kattavasti yksikkö- ja integraatiotestein. Helppo testattavuus seuraa yleensä siitä, että koodi koostuu löyhästi kytketyistä, selkeän vastuun omaavista komponenteista.

Kääntäen, jos koodin kattava testaaminen on vaikeaa, on se usein seurausta siitä, että komponenttien vastuut eivät ole selkeät, ja niillä on liikaa riippuvuuksia.

Olemme pyrkineet jo kurssin ensimmäiseltä viikolta asti koodin hyvään testattavuuteen esim. purkamalla turhia riippuvuuksia rajapintojen ja riippuvuuksien injektoinnin avulla.

### Koodin laatuattribuutti: selkeys

Perinteisesti ohjelmakoodin on ajateltu olevan väkisinkin kryptistä ja vaikeasti luettavaa.
Esim. c-kielessä on tapana ollut kirjoittaa todella tiivistä koodia, jossa yhdellä rivillä on ollut tarkoitus tehdä mahdollisimman monta asiaa, metodikutsuja on vältetty tehokkuussyistä, muistinkäyttöä on optimoitu uusiokäyttämällä muuttujia ja "koodaamalla" dataa bittitasolla.

Ajat ovat muuttuneet ja nykyisen trendin mukaista on pyrkiä kirjoittamaan koodia, joka jo nimeämiskäytänteiden sekä rakenteen kautta ilmaisee mahdollisimman hyvin sen, mitä koodi tekee.

Selkeän nimennän lisäksi muita luettavan eli "puhtaan" koodin (engl. clean code) tunnusmerkkejä ovat jo monet meille entuudestaan tutut asiat joita on listattu 
[täällä](www.planetgeek.ch/wp-content/uploads/2011/02/Clean-Code-Cheat-Sheet-V1.3.pdf).

Miksi selkeän koodin kirjoittaminen on niin tärkeää, eikö riitä että koodari ymmärtää itse mistä koodissa on kyse? Tämä ei todellakaan riitä, sillä suurin osa, [joidenkin arvioiden mukaan jopa 90%](https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is)  "ohjelmointiin" kuluvasta ajasta menee olemassa olevan koodin lukemiseen. Koodia, joko itsensä tai jonkun muun kirjoittamaa, on luettava debuggauksen yhteydessä sekä sovellusta laajennettaessa. On kovin tyypillistä että se oma aikoinaan niin selkeä koodi, ei sitten olekaan yhtä selkeää parin kuukauden kuluttua:

![]({{ "/images/4-13.jpg" | absolute_url }}){:height="350px"}

### Code smell

Koodissa olevista epäilyttävistä piirteistä on ruvettu käyttämään nimitystä _code smell_ eli koodihaju.

Martin Fowlerin [määritelmää mukaillen](https://martinfowler.com/books/refactoring.html) koodihaju on helpohkosti huomattava merkki siitä että koodissa on jotain pielessä. Vaikka jopa aloitteleva ohjelmoija saattaa pystyä havaitsemaan koodihajun, sen takana oleva todellinen syy voi olla jossain syvemmällä, jopa ohjelman designissa. Koodihaju siis kertoo sen, että syystä tai toisesta koodin sisäinen laatu ei ole parhaalla mahdollisella tasolla.

Koodihajuja on hyvin monenlaisia ja monentasoisia. Muutamia esimerkkejä helposti tunnistettavista hajuista:

- toisteinen koodi
- liian pitkät metodit
- luokat joissa on liikaa oliomuuttujia
- luokat joissa on liikaa koodia
- metodien liian pitkät parametrilistat
- epäselkeät muuttujien, metodien tai luokkien nimet
- kommentit

Oikeastaan kaikki näistä ovat merkkejä edellä listaamiemme hyvän koodin laatuattribuutteja heikentävistä ilmiöistä, esim. erittäin pitkä metodi todennäköisesti tarkoittaa, että metodin koheesio on huono, samoin luokka jossa on paljon koodia tai oliomuuttujia tarkoittaa suurella todennäköisyydellä että single responsibility -periaatetta ei noudateta. Jos luokan metodeilla on paljon parametreja, voi se kieliä siitä, että osa tiedoista on väärän luokan vastuulla, tai että metodin kuuluisi mielummin olla jossain toisessa luokassa.

Nykyään koodin [kommentointia](https://medium.com/@fagnerbrack/code-comment-is-a-smell-4e8d78b0415b) on hieman yllättäen alettu pitämään koodihajuna. Kyse on oikeastaan siitä, että koodi pitäisi lähtökohtaisesti kirjoittaa niin selkeäksi ja nimeämiskäytäntöjen osalta kommunikoivaksi, että kommentteja ei tarvita. Eli kommentit tulee säästää vain sellaisiin kohtiin, jossa samaa asiaa ole mahdollista ilmaista koodin muotoilulla ja paremmalla nimeämisellä.

Otetaan pari esimerkkiä hieman vähemmän ilmeisistä koodihajuista.

[Primitive obsession](https://sourcemaking.com/refactoring/primitive-obsession) tarkoittaa tilannetta, missä jossa jokin konkreettinen käsite esim. _osoite_ tai _rahamäärä_ esitetään primitiivityyppisten muuttujien (esim. merkkijono tai kokonaisluku) avulla, sen sijaan että määriteltäisiin luokka asian esittämiseen. 

Nimellä [shotgun surgery](https://sourcemaking.com/refactoring/shotgun-surgery) kuvataan tilannetta, missä yhden loogisen asian muuttaminen, laajentaminen tai siihen tehtävä bugikorjaus aiheuttaakin sarjan muutoksia myös todella moneen muuhun paikkaan koodia. Tämä on oire siitä, että toiminnallisuutta ei ole kapseloitu riittävän hyvin yhteen koodimoduuliin, eli kyseessä on DRY-periaatetta rikkova design.

Internetistä löytyy suuret määrät listoja koodihajuista, esim. seuraavat

- <https://sourcemaking.com/refactoring/bad-smells-in-code> 
- <https://www.codinghorror.com/blog/2006/05/code-smells.html>

### Refaktorointi

Lääke sovelluksen koodin sisäisen laadun ongelmiin on _refaktorointi_ eli muutos koodin, esimerkiksi luokan rakenteeseen, joka kuitenkin pitää sen toiminnallisuuden ennallaan. 

Refaktoroinnin systemaattisena koodin sisäisen laadun parannuskeinona toi suurten massojen tietoisuuteen Martin Fowlerin vuonna 2000 julkaisema kirja [Refactoring](https://martinfowler.com/books/refactoring.html). Kirjan toinen, kokonaan uudelleenkirjoitettu painos ilmestyi 2018. 

Fowlerin kirja listaa lukuisia koodin rakennetta parantavia, tiettyihin tilanteisiin sopivia refaktorointioperaatioita. Kirjan listaamat refaktoroinnit löytyvät myös [internetistä](https://refactoring.com/catalog/index.html). Seuraavassa muutamia esimerkkejä 

- _rename variable/method/class_ uudelleennimetään huonosti nimetty asia
- _extract method_ jaetaan liian pitkä metodi erottamalla siitä pienempiä metodeja
- _move field/method_ siirretään oliomuuttuja tai metodi toiseen luokkaan
- _extract interface_ luodaan luokan julkisia metodeja vastaava rajapinta, jonka avulla voidaan purkaa olion käyttäjän ja olion väliltä konkreettinen riippuvuus
- _extract superclass_ luodaan yliluokka, johon siirretään osa luokan toiminnallisuudesta

Suuri osa tässä luetelluista refaktorointioperaatioista on sellaisia, että useimmat ohjelmointiympäristöt (esim. NetBeans, Eclipse ja IntelliJ) pystyvät tekemään ne suurelta osin automaattisesti. Automatisoitu refaktorointi onnistuu huomattavasti helpommin staattisesti tyypitetyille kielille kuten Java, dynaamisesti tyypitettyjen kielten kuten Javascript ja Python kohdalla se on huomattavasti hankalampaa.

Melko monissa ei niin suoraviivaisissa refaktorointioperaatioissa, epäoptimaalinen koodi refaktoroidaan paremmaksi soveltamalla jotain suunnittelumallia. Joshua Kerievsky on kirjoittanut aiheesta mainion kirjan [Refactoring to patterns](https://martinfowler.com/books/r2p.html). 

Aiemmissa esimerkeissä näimme tämän kaltaisia  refaktorointeja, esim. 

- tilien koronmaksustrategia [replace conditional with polymorfism](https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html)
- tilien luominen [replace constructor with factory method](https://refactoring.com/catalog/replaceConstructorWithFactoryFunction.html)
- laskimen komennot [replace method with method object](https://refactoring.com/catalog/replaceFunctionWithCommand.html)
- laskimen binäärioperaatiot [form template method](https://sourcemaking.com/refactoring/form-template-method).

Refaktoroinnin melkein ehdoton edellytys (poislukien yksinkertaiset automaattisesti suoritettavat refaktoroinnit, kuten _rename variable_) on kattavien testien olemassaolo. Refaktoroinnissa on tarkoitus ainoastaan parantaa luokan tai komponentin sisäistä rakennetta, ulospäin näkyvän toiminnallisuuden pitäisi pysyä muuttumattomana, ja tästä varmistuminen ilman testejä on erittäin haastavaa.

Refaktoroinnissa kannattaa ehdottomasti edetä pienin askelin eli yksi hallittu muutos kerrallaan. Testit on syytä suorittaa jokaisen refaktorointioperaation jälkeen, jotta mahdollinen regressio, eli aiemmin toimineen koodin hajoaminen huomataan mahdollisimman nopeasti.

Refaktorointia kannattaa tehdä lähes koko ajan. Kun koodin sisäinen laatu säilyy siistinä, on koodin laajentaminen miellyttävää ja pienien refaktorointioperaatioiden tekeminen suhteellisen vaivatonta. Jos koodin sisäinen laatu pääsee rapistumaan, muuttuu sen laajentaminen hitaaksi ja myös refaktoroinnin suorittaminen muuttuu koko ajan työläämmäksi. Monilla ohjelmistokehitystiimeillä onkin _definition of doneen_ kirjattu, että valmiin määritelmä sisältää sen, että koodi on refaktoroitu riittävän siistiksi. Siisteyttä saatetaan valvoa esim. [pull requesteina tehtävänä katselmointina](osa3#koodin-katselmointi-github-ja-pull-requestit).

Osa refaktoroinneista, esim. metodien tai luokkien uudelleennimeäminen tai pitkien metodien jakaminen pienemmiksi on helppoa. Aina ei näin kuitenkaan ole. Joskus on tarve tehdä suurempien mittaluokkien refaktorointeja, joissa ohjelman rakenne eli arkkitehtuuri muuttuu. Tällaiset refaktoroinnit saattavat kestää päiviä tai jopa viikkoja ja niiden suorittaminen siten, että koodi säilyy koko ajan toimivana on jo kohtuullisen haastavaa.

### Tekninen velka

Koodi ei ole aina sisäiseltä laadultaan optimaalista, ja joskus on jopa asiakkaan kannalta tarkoituksenmukaista tehdä vähemmän laadukasta koodia. Huonoa suunnittelua tai/ja ohjelmointia on ruvettu kuvaamaan käsitteellä _tekninen velka_ (engl. technical debt).

Oikoteitä ottamalla tehdyllä ohjelmoinnilla saadaan ehkä nopeasti aikaan jotain toiminnallisuutta, mutta hätäinen ratkaisu tullaan maksamaan korkoineen takaisin myöhemmin _jos_ ohjelmaa on tarkoitus laajentaa. Käytännössä käy siis niin, että koodiin kertyneet sisäisen laadun ongelmat, eli _tekninen velka_ alkaa hidastamaan kehitystyön etenemistä, ja uusien ominaisuuksien toteuttamisesta tulee koko ajan hankalammaksi ja kalliimmaksi. 

Toisaalta jos korkojen maksun aikaa ei koskaan tule, eli ohjelma on esimerkiksi pelkkä prototyyppi tai sitä ei koskaan oteta käyttöön, on teknisen velan ottaminen asiakkaan kannalta kannattava ratkaisu.

[Osassa 2](/osa2/#vaatimusmäärittely-2010-luvulla) käsiteltiin _lean startup_ -ideologian mukaista tapaa ohjelmiston uusien ominaisuuden hyödyllisyyden validointiin rakentamalla ominaisuuden toteuttama _minimal viable product (MVP)_, eli juuri ja juuri riittävä ratkaisu, jonka avulla ominaisuuden käyttökelpoisuutta voidaan testata. Kuten nimikin jo antaa ymmärtää, MVP on luonteeltaan sellainen rakennelma, että sitä tehdessä otetaan tietoisesti teknistä velkaa. _Jos_ ominaisuus osoittautuu halutuksi, maksetaan tekninen velka pois tekemällä toiminnallisuudelle robustimpi toteutus.

Lyhytaikaisen teknisen velan ottaminen voi joskus olla jopa välttämätöntä. Esimerkiksi markkinatilanteen takia saattaa olla oleellista saada tuote kuluttajille mahdollisimman nopeasti tai muuten tilaisuus saattaa mennä kokonaan ohi. Startup-yrityksillä tilanne voi olla se, että firma joutuu valitsemaan teknisen velan ja varman rahojen loppumisen välillä, eli tekemällä jotain nopeasti huonolla sisäisellä laadulla, firma saattaa pystyä keräämään riittävästi rahoitusta jatkaakseen toimintaansa. Tämänkaltaisissa tilanteissa otetaan tietoisesti teknistä velkaa ja sovelluksen koodin huonosta laadusta ja testauksen puuttumisesta huolehditaan myöhemmin. 

Tekninen velka ei siis ole pelkästään paha asia, vaan strategisesti käytettynä hyväkin väline, aivan kuten esim. asuntolaina, ilman lainaa kaikilla ei ole varaa omistusasuntoon. On kuitenkin oleellista mitoittaa lainan määrä oikein, muuten seurauksena saattaa olla luottokelpoisuuden menetys.

Teknisen velan takana voi siis olla monenlaisia syitä, esim. holtittomuus, osaamattomuus, tietämättömyys tai tarkoituksella tehty päätös. Martin Fowler [jakaa](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) teknisen velan neljään eri luokkaan:

1. reckless and deliberate: "we do not have time for design"
2. reckless and inadverent: "what is layering"?
3. prudent and inadverent: "now we know how we should have done it"
4. prudent and deliberate: "we must ship now and will deal with consequences"

Luokkien 1 ja 2, joista Fowler käyttää termiä _reckless_ eli holtiton tai uhkarohkea, voi ajatella olevan huonoa teknistä velkaa. Toinen syntyy tarkoituksella, eli ajatellen että ei ole aikaa laadulle, toinen taas syntyy osaamattomuuden takia.

Luokat 3 ja 4 ovat harkinnan alla (engl. _prudent_) syntynyttä teknistä velkaa. Luokka 4 on juurikin tilanne, jossa ollaan esim. tekemässä MVP:tä, tai jonkun pakon takia koodi on saatava julkaistua heti ja seuraukset päätetään hoitaa myöhemmin. Luokka 3 on kovin yleinen tilanne, ohjelmistoa suunniteltiin ja rakennettiin parhaiden aikomusten mukaan, mutta vasta paljon myöhemmin, kun arkkitehtuuri ja design on jo lyöty lukkoon vasta opitaan sovelluksen luonteesta sen verran, että tiedetään _kuinka sovellus olisi tullut suunnitella_. Tälläinen tilanne saatetaan päätyä ratkaisemaan refaktoroimalla sovelluksen arkkitehtuuri paremmin tarpeita vastaavaksi. 

### Lisää suunnittelumalleja <span style="color:blue">[viikko 6]</span>

Tutustutaan osan lopuksi vielä muutama uuteen suunnittelumalliin.

#### Esimerkki Dekoroitu pino <span style="color:blue">[viikko 6]</span>

Olemme toteuttaneet asiakkaalle pinon:

``` java
public class Pino {

    private LinkedList<String> alkiot;

    public Pino() {
        alkiot = new LinkedList<String>();
    }

    public void push(String alkio){
        alkiot.addFirst(alkio);
    }

    public String pop(){
        return alkiot.remove();
    }

    public boolean empty(){
        return alkiot.isEmpty();
    }
}

public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);
    Pino pino = new Pino();

    System.out.println("pinotaan, tyhjä lopettaa:");
    while (true) {
        String pinoon = lukija.nextLine();
        if (pinoon.isEmpty()) {
            break;
        }
        pino.push(pinoon);
    }
    System.out.println("pinossa oli: ");
    while (!pino.empty()) {
        System.out.println( pino.pop() );
    }
}
```

Asiakkaamme haluaa pinosta muutaman uuden version:

* _KryptattuPino_ jossa alkiot talletetaan pinoon kryptattuina, alkiot tulevat pinosta ulos normaalisti
* _LokiPino_ jossa tieto pinoamisoperaatioista ja niiden parametreista ja paluuarvoista talletetaan lokiin
* _PrepaidPino_ joka lakkaa toimimasta kun sillä on suoritettu konstruktoriparametrina määritelty määrä operaatioita

On lisäksi toteutettava kaikki mahdolliset kombinaatiot:

* _KryptattuLokiPino_
* _LokiKryptattuPino_ (erona edelliseen se että lokiin ei kirjata parametreja kryptattuna)
* _KryptattuPrepaidPino_
* _KryptattuLokiPrepaidPino_
* _LokiPrepaidPino_

Alkaa kuulostaa pahalta varsinkin kun Product Owner vihjaa, että seuraavassa sprintissä tullaan todennäköisesti vaatimaan lisää versioita pinosta, mm. ÄänimerkillinenPino, RajallisenkapasiteetinPino ja tietysti kaikki kombinaatiot tarvitaan myös...

Onneksi suunnittelumalli _dekoraattori_ (engl. decorator) sopii juuri tilanteeseen! Luodaan pinon kolme uutta versiota dekoroituina pinoina. Tarkastellaan ensin PrepaidPinoa:

``` java
public class PrepaidPino extends Pino {

    private Pino pino;
    private int krediitteja;

    public PrepaidPino(Pino pino, int krediitteja) {
        this.pino = pino;
        this.krediitteja = krediitteja;
    }

    @Override
    public String pop() {
        if (krediitteja == 0) {
            throw new IllegalStateException("pinossa ei enää käyttöoikeutta");
        }
        krediitteja--;

        return pino.pop();
    }

    @Override
    public void push(String alkio) {
        if (krediitteja == 0) {
            throw new IllegalStateException("pinossa ei enää käyttöoikeutta");
        }
        krediitteja--;
        pino.push(alkio);
    }

    @Override
    public boolean empty() {
        if (krediitteja == 0) {
            throw new IllegalStateException("pinossa ei enää käyttöoikeutta");
        }
        krediitteja--;
        return pino.empty();
    }
}
```

_PrepaidPino_ siis perii luokan _Pino_, mutta se ei käytä "perittyä" pinouttaan, vaan sen sijaan PrepaidPino __sisältää__ pinon, jonka se saa konstruktoriparametrina. Tätä sisältämäänsä pinoa PrepaidPino käyttää tallettamaan kaikki alkionsa. Eli jokainen PrepaidPinon operaatio _delegoi_ operaation toiminnallisuuden toteuttamisen sisältämälleen pinolle.

PrepaidPino luodaan seuraavalla tavalla:

``` java
Pino pino = new PrepaidPino(new Pino(), 5);
```

Eli luodaan normaali Pino ja annetaan se PrepaidPinolle konstruktoriparametrina yhdessä pinon krediittien kanssa.

Muut kaksi:

``` java
public class KryptattuPino extends Pino{
    private Pino pino;

    public KryptattuPino(Pino pino) {
        this.pino = pino;
    }

    @Override
    public String pop() {
        String alkio = pino.pop();
        return dekryptaa(alkio);
    }

    @Override
    public void push(String alkio) {
        pino.push(kryptaa(alkio));
    }

    @Override
    public boolean empty() {
        return pino.empty();
    }

    private String dekryptaa(String alkio) {
        String dekryptattu = "";
        for (int i = 0; i < alkio.length(); i++) {
            dekryptattu += (char)(alkio.charAt(i)-1);
        }

        return dekryptattu;
    }

    private String kryptaa(String alkio) {
        String kryptattu = "";
        for (int i = 0; i < alkio.length(); i++) {
            kryptattu += (char)(alkio.charAt(i)+1);
        }

        return kryptattu;
    }
}

public class LokiPino extends Pino {

    private Pino pino;
    private PrintWriter loki;

    public LokiPino(Pino pino, PrintWriter loki) {
        this.pino = pino;
        this.loki = loki;
    }

    @Override
    public String pop() {
        String popattu = pino.pop();
        loki.println("pop: "+popattu);

        return popattu;
    }

    @Override
    public void push(String alkio) {
        loki.println("push: "+alkio);

        pino.push(alkio);
    }

    @Override
    public boolean empty() {
        loki.println("empty: "+pino.empty());

        return pino.empty();
    }
}
```

Periaate on sama, pinodekoraattorit _LokiPino_ ja _KryptattuPino_ delegoivat kaikki operaationsa sisältämilleen Pino-olioille. _LokiPino_ kirjoittaa lokitiedostoon merkinnän jokaisesta pinoon kohdistuvasta operaatiosta. _KryptattuPino_ taas kryptaa alkeellista algoritmia käyttäen jokaisen pinnon laitettavan merkkijonon ja dekryptaa pinosta otettavat merkkijonot takaisin selkokielisiksi.

Koska kaikki dekoraattorit perivät luokan _Pino_, voidaan dekoraattorille antaa parametriksi toinen dekoraattori. Esim. KryptattuLokiPino luodaan seuraavasti:

``` java
PrintWriter loki = new PrintWriter( new File("loki.txt") );
Pino pino = new KryptattuPino( new LokiPino( new Pino(), loki ) );
```

Dekoroinnin avulla saamme siis suhteellisen vähällä ohjelmoinnilla pinolle paljon erilaisia ominaisuuskombinaatioita. Jos olisimme yrittäneet hoitaa kaiken normaalilla perinnällä, olisi luokkien määrä kasvanut eksponentiaalisesti eri ominaisuuksien määrän suhteen ja uusiokäytöstäkään ei olisi tullut mitään.

Dekorointi siis ei oleellisesti ole perintää vaan _delegointia_, jälleen kerran oliosuunnitteun periaate "favour composition over inheritance" on näyttänyt voimansa.

Lisää dekoraattori-suunnittelumallista esim. osoitteessa https://sourcemaking.com/ jadesign_patterns/decorator 

#### Pinotehdas <span style="color:blue">[viikko 6]</span>

Eri ominaisuuksilla varustettujen pinojen luominen on käyttäjän kannalta hieman ikävää. Tehdään luomista helpottamaan pinotehtaan:

``` java
public class Pinotehdas {
    public Pino prepaidPino(int krediitit){
        return new PrepaidPino(new Pino(), krediitit);
    }

    public Pino lokiPino(PrintWriter loki){
        return new LokiPino(new Pino(), loki);
    }

    public Pino kryptattuPino(){
        return new KryptattuPino(new Pino());
    }

    public Pino kryptattuPrepaidPino(int krediitit){
        return new KryptattuPino(prepaidPino(krediitit));
    }

    public Pino kryptattuLokiPino(PrintWriter loki){
        return new KryptattuPino(lokiPino(loki));
    }

    public Pino prepaidKryptattuLokiPino(int krediitit, PrintWriter loki){
        return new PrepaidPino(kryptattuLokiPino(loki), krediitit);
    }

    // monta monta muuta rakentajaa...
}
```

Tehdasluokka on ikävä ja sisältää hirveän määrän metodeja. Jos pinoon lisätään vielä ominaisuuksia, tulee factory karkaamaan käsistä.

Pinon luominen on kuitenkin tehtaan ansiosta helppoa:

``` java
Pinotehdas tehdas = new Pinotehdas();

Pino omapino = tehdas.kryptattuPrepaidPino(100);
```

Kuten huomaamme, ei factory-suunnittelumalli ole tilanteeseen ideaali. Kokeillaan sen sijaan _rakentaja_ (engl. builder) -suunnittelumallia:

#### Pinorakentaja <span style="color:blue">[viikko 6]</span>

Rakentaja-suunnittelumalli sopii tilanteeseemme erittäin hyvin. Pyrkimyksenämme on mahdollistaa pinon luominen seuraavaan tyyliin:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino = rakenna.prepaid(10).kryptattu().pino();
```

Rakentajan metodinimet ja rakentajan muuttujan nimi on valittu mielenkiinoisella tavalla. On pyritty mahdollisimman luonnollista kieltä muistuttavaan ilmaisuun pinon luonnissa. Kyseessä onkin oikeastaan [DSL](https://martinfowler.com/bliki/DomainSpecificLanguage.html) (enhl. domain specific language) pinojen luomiseen!

Luodaan ensin rakentajasta perusversio, joka soveltuu vasta normaalien pinojen luomiseen:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino = rakenna.pino();
```

Saamme rakentajan ensimmäisen version toimimaan seuraavasti:

``` java
public class Pinorakentaja {
    Pino pino;

    public Pinorakentaja() {
        pino = new Pino();
    }

    public Pino pino() {
        return pino;
    }
}
```

eli kun _Rakentaja_-olio luodaan, rakentaja luo pinon. Rakentajan "rakennusvaiheen alla" olevan pinon voi pyytää rakentajalta kutsumalla metodia _pino()_.

Laajennetaan nyt rakentajaa siten, että voimme luoda prepaidpinoja seuraavasti:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino = rakenna.prepaid(10).pino();
```

Jotta edellinen menisi kääntäjästä läpi, tulee rakentajalle lisätä metodi jonka signatuuri on _public Pinorakentaja prepaid(int kreditit)_, eli jotta metodin tuloksena olevalle oliolle voitaisiin kutsua metodia _pino_, on metodin _prepaid_ palautettava rakentaja. Rakentajamme runko laajenee siis seuravasti:

``` java
public class Pinorakentaja {
    Pino pino;

    public Pinorakentaja() {
        pino = new Pino();
    }

    public Pinorakentaja prepaid(int kreditit) {
        // ????
    }

    public Pino pino() {
        return pino;
    }
}
```

Rakentaja siis pitää oliomuuttujassa rakentumassa olevaa pinoa. Kun kutsumme rakentajalle metodia _prepaid_ ideana on, että rakentaja dekoroi rakennuksen alla olevan pinon prepaid-pinoksi. Metodi palauttaa viitteen _this_ eli rakentajan itsensä. Tämä mahdollistaa sen, että metodikutsun jälkeen päästään edelleen käsiksi työn alla olevaan pinoon. Koodi siis seuraavassa:

``` java
public class Pinorakentaja {
    Pino pino;

    public Pinorakentaja() {
        pino = new Pino();
    }

    public Pino pino() {
        return pino;
    }

    public Pinorakentaja prepaid(int kreditit) {
        this.pino = new PrepaidPino(pino, kreditit);
        return this;
    }
}
```

Samalla periaatteella lisätään rakentajalle metodit, joiden avulla työn alla oleva pino saadaan dekoroitua lokipinoksi tai kryptaavaksi pinoksi:

``` java
public class Pinorakentaja {
    Pino pino;

    public Pinorakentaja() {
        pino = new Pino();
    }

    public Pino pino() {
        return pino;
    }

    public Pinorakentaja prepaid(int kreditit) {
        this.pino = new PrepaidPino(pino, kreditit);
        return this;
    }

    public Pinorakentaja kryptattu() {
        this.pino = new KryptattuPino(pino);
        return this;
    }

    public Pinorakentaja loggaava(PrintWriter loki) {
        this.pino = new LokiPino(pino, loki);
        return this;
    }
}
```

Rakentajan koodi voi vaikuttaa aluksi hieman hämmentävältä.

Rakentajaa siis käytetään seuraavasti:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino = rakenna.kryptattu().prepaid(10).pino();
```
Tässä pyydettiin rakentajalta kryptattu prepaid-pino, jossa krediittejä on 10.

Vastaavalla tavalla voidaan luoda pinoja muillakin ominaisuuksilla:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino1 = rakenna.pino();  // luo normaalin pinon
Pino pino2 = rakenna.kryptattu().loggaava(loki).prepaid.pino();  // luo sen mitä odottaa saattaa!
```

Rakentajan toteutus perustuu tekniikkaan nimeltään [method chaining](http://en.wikipedia.org/wiki/Method_chaining) eli metodikutsujen ketjutukseen. Metodit jotka ovat muuten luonteeltaan void:eja onkin laitettu palauttamaan rakentajaolio. Tämä taas mahdollistaa metodin kutsumisen toisen metodin palauttamalle rakentajalle, ja näin metodikutsuja voidaan ketjuttaa peräkkäin mielivaltainen määrä. Metodiketjutuksen motivaationa on yleensä saada olion rajapinta käytettävyydeltään mahdollisimman luonnollisen kielen kaltaiseksi DSL:ksi. 

Tällä tekniikalla toteutetuista rajapinnoista käytetään myös nimitystä
[fluent interface](https://martinfowler.com/bliki/FluentInterface.html).
