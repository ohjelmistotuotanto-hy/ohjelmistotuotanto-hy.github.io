---
layout: page
title: osa 4
title_long: 'Ohjelmistojen suunnittelu'
inheader: yes
permalink: /osa4/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

Olemme nyt käsitelleet ohjelmiston elinkaaren vaiheista vaatimusmäärittelyä ja laadunhallintaa. Seuraavana aiheena ohjelmiston suunnittelu ja toteutus.

Ohjelmiston suunnittelun ajatellaan jakautuvan kahteen vaiheeseen: arkkitehtuurisuunnitteluun ja olio/komponenttisuunnitteluun.

_Arkkitehtuurisuunnittelussa_ hahmotellaan ohjelman rakenne karkealla tasolla, eli mietitään mistä suuremmista rakennekomponenteista ohjelma koostuu? Miten komponentit kommunikoivat ja minkälaiset niiden väliset rajapinnat ovat.

_Olio/komponenttisuunnittelussa_ taas suunnitellaan yksityiskohtaisemmin miten yksittäiset komponentit, luokat ja metodit tulisi toteuttaa.

Ohjelmiston suunnittelun ajoittuminen riippuu käytettävästä tuotantoprosessista.
Vesiputousmallissa suunnittelu tapahtuu vaatimusmäärittelyn jälkeen ja ohjelmointi aloitetaan vasta kun suunnittelu valmiina ja dokumentoitu. Ketterissä menetelmissä taas suunnittelua tehdään tarvittava määrä jokaisessa iteraatiossa, tarkkaa suunnitteludokumenttia ei yleensä ole.

Vesiputousmallin mukainen suunnitteluprosessi tuskin on enää juuri missään käytössä, "jäykimmissäkin" prosesseissa ainakin vaatimusmäärittely ja arkkitehtuurisuunnittelu limittyvät.

Tarkkaa ja raskasta ennen ohjelmointia tapahtuvaa suunnittelua (josta käytetään joskus nimitystä [Big Design Up Front](https://en.wikipedia.org/wiki/Big_Design_Up_Front) eli BDUF) toki edelleen tapahtuu ja tietynlaisiin järjestelmiin (hyvin tunnettu sovellusalue, muuttumattomat vaatimukset) se osittain sopiikin.

## Ohjelmiston arkkitehtuuri
 
Käsitettä _ohjelmiston arkkitehtuuri_ (engl. software architecture) on käytetty jo vuosikymmeniä. Termi on vakiintunut yleiseen käyttöön 2000-luvun aikana ja on siirtynyt mm. normaalia koodaria seniorimpaa työntekijää tarkoittavaksi nimikkeeksi _ohjelmistoarkkitehti_ engl. software architech.

Useimmilla alan ihmisillä on jonkinlainen kuva siitä, mitä ohjelmiston arkkitehtuurilla tarkoitetaan. Termiä ei ole kuitenkaan yrityksistä huolimatta onnistuttu määrittelemään siten että asiantuntijat olisivat määritelmästä yksimielisiä.

IEEE:n standardi [Recommended practices for Architectural descriptions of Software intensive systems](https://ieeexplore.ieee.org/document/875998) määrittelee käsitteen seuraavasti:

>Ohjelmiston arkkitehtuuri on järjestelmän perusorganisaatio, joka sisältää järjestelmän osat, osien keskinäiset suhteet, osien suhteet ympäristöön sekä periaatteet, jotka ohjaavat järjestelmän suunnittelua ja evoluutiota.
 
Otetaan esimerkiksi pari muutakin määritelmää.

[Philippe Krutchten](https://www.semanticscholar.org/paper/The-Rational-Unified-Process-An-Introduction%2C-3rd-Kruchten/3239cd654d82aa775cf9382a4d2ad834a3ea1014)

> An architecture is the _set of significant decisions about the organization of a software system_, the selection of structural elements and their interfaces by which the system is composed, together with their behavior as specified in the collaborations among those elements, the composition of these elements into progressively larger subsystems, and the _architectural style_ that guides this organization - these elements and their interfaces, their collaborations, and their composition.

[McGovern](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.467.1174&rep=rep1&type=pdf):

> The software architecture of a system or a collection of systems consists of all the important design decisions about the software structures and the interactions between those structures that comprise the systems. _The design decisions support a desired set of qualities that the system should support to be successful_. The design decisions provide a conceptual basis for system development, support, and maintenance.

Vaikka arkkitehtuurin määritelmät hieman vaihtelevat, löytyy määritelmistä joukko samoja teemoja. Jokaisen määritelmän mukaan arkkitehtuuri määrittelee ohjelmiston rakenteen, eli jakautumisen erillisiin osiin ja osien väliset rajapinnat.

Arkkitehtuuri ottaa kantaa rakenteen lisäksi myös käyttäytymiseen, se määrittelee arkkitehtuuritason rakenneosien vastuut ja niiden keskinäisen kommunikoinnin muodot.

Arkkitehtuuri keskittyy järjestelmän tärkeisiin/keskeisiin rakenneperiaatteisiin se ei siis kuvaa järjestelmää tarkalla detaljitasolla, vaan on isoihin linjoihin keskittyvä abstraktio. Järjestelmän tärkeät rakenneperiaatteet voivat myös muuttua ajan myötä, eli arkkitehtuuri [ei ole muuttumaton](http://www.ibm.com/developerworks/rational/library/feb06/eeles/).

Artikkelissa [Who needs architect](https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf) Martin Fowler toteaa seuraavasti _you might end up defining architecture as things that people perceive as hard to change_, eli arkkitehtuurin voisi määritellä sellaisiksi asioiksi jotka ovat ohjelmistossa vaikeita muuttaa. 

Melkein sama hieman toisin ilmaistuna oli Krutchtenin määritelmässä
_set of significant decisions about the organization of a software system_, eli arkkitehtuuri muodostuu arkkitehtuuristen päätösten, eli joukon ohjelmiston rakenteen ja toiminnan kannalta tehtävien fundamentaalisten valintoja kautta.
 
## Arkkitehtuuriin vaikuttavia tekijöitä

[Osassa 2](/osa2) mainittiin järjestelmän vaatimusten jakautuvat kahteen luokkaan, toiminnallisiin ja ei-toiminnallisiin vaatimuksiin.

Järjestelmälle asetetuilla ei-toiminnallisilla [laatuvaatimuksilla]() (engl. -ilities) on suuri vaikutus arkkitehtuuriin. Laatvaatimuksia ovat esimerkiksi käytettävyys, suorituskyky, skaalautuvuus, vikasietoisuus, tiedon ajantasaisuus, tietoturva, ylläpidettävyys, laajennettavuus, testattavuus, hinta, time- to-market, ...

Laatuvaatimukset ovat usein ristiriitaisia, joten arkkitehdin tulee hakea kaikkia sidosryhmiä tyydyttävä kompromissi. Esimerkiksi time-to-market, eli kuinka nopeasti sovellus saadaan loppuasiakkaan käyttöön, lienee ristiriidassa useimpien laatuvaatimusten kanssa.

Tiedon ajantasaisuus, skaalautuvuus ja vikasietoisuus ovat myös piirteitä, joiden suhteen on pakko tehdä kompromisseja, kaikkia ei voida saavuttaa (ks. [CAP-teoreema](http://en.wikipedia.org/wiki/CAP_theorem))

Myös toteutusteknologiat esim. toteutuksessa käytettävät sovelluskehykset ja integraatio olemassaoleviin järjestelmiin sekä järjestelmän toimintaympäristö esim. lääketieteellisiltä ja ilmailualalta säädökset sekä edellytetyt toimintastandardit vaikuttavat arkkitehtuuriin.

Arkkitetuurin suurin merkitys on antaa sovelluksen kehitykselle ja ylläpidolle sellaiset raamit, että sovellus pystyy jatkossakin vastaamaan asiakkaan asettamien toiminnallisten vaatimuksen lisäksi järjestelmälle asetettuihin laatuvaatimuksiin.

## Arkkitehtuurimalli
 
Ohjelmiston arkkitehtuuri perustuu yleensä yhteen tai useampaan _arkkitehtuurimalliin_ (engl. architectural pattern), jolla tarkoitetaan hyväksi havaittua tapaa strukturoida tietyntyyppisiä sovelluksia. Samasta asiasta käytetään joskus myös nimitystä _arkkitehtuurityyli_ (engl. architectural style)

Arkkitehtuurimalleja on suuri määrä, esim:
- kerrosarkkitehtuuri 
- model-view-controller
- pipes-and-filters
- repository 
- client-server
- publish-subscribe 
- event driven 
- REST 
- microservice
- palveluorientoitu arkkitehtuuri

Useimmiten sovelluksen rakenteesta löytyy monien arkkitehtuuristen mallien piirteitä.
        
### Kerrosarkkitehtuuri
 
Arkkitehtuurimalleista varmasti tunnetuin ja eniten käytetty on _kerrosarkkitehtuuri_ (engl. layered architecture), jossa pyrkimyksenä on jakaa sovellus käsittelliisiin kerroksiin, joissa kukin kerros suorittaa oman "abstraktiotason" tehtäväänsä käyttäen ainoastaan alemman kerroksen palveluja. Kerrosarkkitehtuurissa ylimmät kerrokset ovat käyttäjäläheisiä, ylimpänä yleensä käyttöliittymä ja tämän alapuolella sovelluslogiikasta vastaava kerros. Alimmat kerrokset taas keskittyät koneläheisimpiin asioihin, kuten tiedon pysyväistallennuksesta huolehtiva tallenuskerros (engl. persistence layer). 

Käytännössä kukin kerros on kokoelma toisiinsa liittyviä olioita tai komponentteja, jotka muodostavat oman abstraktiotasonsa toiminnallisuuden suhteen loogisen kokonaisuuden.

![]({{ "/images/4-1.png" | absolute_url }}){:height="350px" }

Kerrosarkkitehtuurilla on monia etuja. Kerroksittaisuus helpottaa ylläpitoa, sillä jos tietyn kerroksen palvelurajapintaan (eli muille kerroksille näkyvään osaan) tehdään muutoksia, aiheuttavat muutokset ylläpitotoimenpiteitä ainoastaan ylemmän kerroksen riippuvuuksia omaavissa pakkauksessa. Esim. käyttöliittymän muutokset eivät vaikuta sovelluslogiikkaan tai tallennuskerrokseen.

Sovelluslogiikan riippumattomuus käyttöliittymästä helpottaa ohjelman siirtämistä uusille alustoille, esim. toimimaan mobiiliympäristössä. Alimpien kerroksien palveluja, kuten tallennuskerrosta voidaan mahdollisesti uusiokäyttää myös muissa sovelluksissa. 

Kerrosarkkitehtuuri on sovelluskehittäjän kannalta selkeä ja hyvin ymmärretty malli, mutta saattaa johtaa massiivisiin monoliittisiin sovelluksiin, joita on lopulta vaikea laajentaa ja joiden skaalaaminen suurille käyttäjämäärille voi muodostua ongelmaksi.
 
### Todo-sovelluksen arkkitehtuuri

Eräs konkreettinen joskin hyvin yksinkertainen esimerkki kerrosarkkitehtuuria noudattavasta sovelluksesta on kurssin [Ohjelmistotekniikka](https://github.com/mluukkai/ohjelmistotekniikka-kevat2019/blob/master/web/materiaali.md#kerrosarkkitehtuuri) referenssisovelluksena toimiva [Todo-sovellus](https://github.com/mluukkai/OtmTodoApp).

Koodin tasolla kerrosrakenne näkyy siinä, miten sovelluksen koodi jakautuu pakkauksiin 

![]({{ "/images/4-2.png" | absolute_url }}){:height="250px" }

Arkkitehtuuria heijasteleva pakkausrakenne voidaan kuvata UML:n [pakkauskaaviolla](https://github.com/mluukkai/ohjelmistotekniikka-kevat2019/blob/master/web/materiaali.md#pakkauskaavio) :

![]({{ "/images/4-4.png" | absolute_url }}){:height="200px" }

Pakkauksina kuvatujen kerroksien välille on merkitty riippuvuudet katkoviivalla. Käyttöliittymä _todoapp.ui_ riippuu sovelluskoliigasta _todoapp.domain_ ja vastaavasti 
sovelluslogiikka _todoapp.domain_ riippuu tallennuskerroksesta _todoapp.dao_. 

Käytännöss riippuvuus tarkoitta sitä, että ylemmän kerroksen koodista kutsutaan jotain alemman kerroksen koodin metodia. Kerrosarkkitehtuurin hengen mukaisesti riippuvuuksia on vain ylhäältä alas, eli esim. sovelluslogiikkakerroksen koodi ei kutsu käyttöliittymäkerroksen koodia.

Joissain tilanteissa arkkitehtuurin havainnollistama pakkauskaavio saattaa olla tarkoituksenmukaista kuvata vielä tarkemmalla tasolla, näyttäen esim. joidenkin kerrosten tärkeimpiä sisäisiä luokkia tai komponentteja:

![]({{ "/images/4-3.png" | absolute_url }}){:height="350px" }

### Arkkitehtuurin kuvaamisesta

Kovista yrityksistä huolimatta ohjelmistojen arkkitehtuurien kuvaamiselle ei ole onnistuttu kehittämään mitään yleisesti käytössä olevaa notaatiota. UML:ää käytetään jonkin verran. Edellisessä esimerkissä ollutta pakkauskaaviota paremmin isompien sovellusten arkkitehtuurien kuvaamiseen sopii [komponenttikaavio](https://en.wikipedia.org/wiki/Component_diagram).

Komponenttikaavio eroaa pakkauskaaviosta lähinnä merkintätavoiltaan ja tuo hieman eksplisiittisemmin esin eri komponenttien tarjoamat ja käyttämät rajapinnat. Esimerkiksi alla olevassa kuvassa komponentti _web store_, joka vastaa verkkokaupan sovelluslogiikkaa, tarjoaa rajapinnat tuotteiden haulle, ostosten tekemiselle ja käyttäjän hallinnoinnille. Komponentti itsessään jakautuu kolmeen alikomponenttiin, joista _authentication_ tarjoaa sisäisen rajapinnan _shopping chart_ -komponentin käyttöön.

![]({{ "/images/4-4.png" | absolute_url }}){:height="400px" }

Arkkitehtuurin kuvaamiseen sopii jossain määrin myös [sijoittelukaavio](https://en.wikipedia.org/wiki/Deployment_diagram), joka kuvailee miten sovelluksen eri palvelut sijoittuvat eri palvelimille:

![]({{ "/images/4-5.png" | absolute_url }}){:height="400px" }

UML:n sijaan arkkitehtuurin kuvaamiseen käytetään kuitenkin useimmiten epäformaaleja laatikko/nuoli-kaavioita.

Riippumatta arkkitehtuurin dokumenointitiotavasta, kannattaa arkkitehtuurikuvaus kannattaa tehdä useasta _eri näkökulmasta_, sillä eri näkökulmat palvelevat erilaisia tarpeita. Korkean tason kuvauksen avulla voidaan esim. strukturoida vaatimusmäärittelyn aikana käytäviä keskusteluja eri sidosryhmien kanssa.
Detaljoidummat kuvaukset taas toimivat ohjeena järjestelmän tarkemmassa suunnittelussa ja ylläpitovaiheen aikaisessa laajentamisessa.

Kannattaa huomata, että arkkitehtuurikuvaus ei suinkaan ole pelkkä kuva, mm. komponenttien vastuut tulee tarkentaa sekä niiden väliset rajapinnat määritellä.
Jos näin ei tehdä, kasvaa riski sille että arkkitehtuuria ei noudateta. 

Hyödyllinen arkkitehtuurikuvaus myös perustelee tehtyjä [arkkitehtuurisia valintoja](https://adr.github.io/). Ei nimittäin ole ollenkaan harvinaista, että jotain ohjelmistoon tehtyjä suunnitteluratkaisuja ihmetellään parin vuoden päästä ja kukaan ei enää muista aikoinaan tarkastikkin mietittyjä perusteita silloin tehdyille päätöksille.

## Mikropalveluarkkitehtuuri

Kerrosarkkitehtuurien erääksi epäkohdaksi todettiin, että sen soveltaminen saattaa johtaa massiivisiin monoliittisiin sovelluksiin, joita on lopulta vaikea laajentaa ja joiden skaalaaminen suurille käyttäjämäärille voi muodostua ongelmaksi.

Viime aikoina nopeasti yleistynyt _mikropalvelumalli_ (engl. microservices) pyrkii vastaamaan näihin haasteisiin koostamalla sovelluksen useista (jopa sadoista) pienistä verkossa toimivista autonomisista palveluista jotka keskenään verkon yli kommunikoiden toteuttavat järjestelmän toiminnallisuuden.

![]({{ "/images/4-6.png" | absolute_url }}){:height="400px" }

Mikropalveluihin perustuvassa sovelluksessa yksittäisistä palveluista pyritään tekemään mahdollisimman _riippumattomia_ ja löydästi toisiinsa kytkettyjä. Palvelut eivät esimerkiksi käytä yhteistä tietokantaa ja on toteutettu omissa koodiprojekteissaan eli ne eivät jaa koodia. Palvelut eivät kutsu suoraan toistensa metodeja vaan, keskustelevat keskenään verkon välityksellä. 

Mikropalveluiden on tarkoitus olla pieniä ja huolehtia vain "yhdestä asiasta".
Kun järjestelmään lisätään toiminnallisuutta, se yleensä tarkoittaa uusien palveluiden toteuttamista tai ainoastaan joidenkin palveluiden laajentamista.
Sovelluksen laajentaminen voi olla helpompaa kuin kerrosarkkitehtuurissa.

Mikropalveluja hyödyntävää sovellusta voi olla helpompi skaalata, sillä
suorituskyvyn pullonkaulan aiheuttavia mikropalveluja voidaan suorittaa useita rinnakkain.
 
Mikropalveluiden käyttö mahdollistaa sen, että sovellus voidaan helposti koodata monella kielellä tai useita eri sovelluskehyksiä hyödyntämälä, sillä toisin kuin monoliittisissa projekteissa, mikään ei edellytä, että kaikki mikropalvelut olisi toteutettu samalla tekniikalla.

### Mikropalveluiden kommunikointi

Mikropalveluiden kommunikointi Mikropalvelut kommunikoivat keskenään verkon välityksellä Kommunikointimekanismeja on useita
Yksinkertainen vaihtoehto on käyttää kommunikointiin HTTP- protokollaa, eli samaa mekanismia, jonka avulla web-selaimet keskustelevat palvelimien kanssa
Tällöin sanotaan että mikropalvelut tarjoavat kommunikointia varten REST-rajapinnan
Viikon 3 laskareissa haettiin suorituksiin liittyvää dataa palautusjärjestelmän tarjoamasta REST-rajapinnasta

Vaihtoehtoinen, huomattavasti joustavampi kommunikointikeino on ns. viestinvälityksen (message queue/bus) käyttö
Palvelut eivät lähetä viestejä suoraan toisilleen, vaan käytössä on verkossa toimiva viestinvälityspalvelu, joka hoitaa viestien välityksen eri palveluiden välillä

Palvelut voivat lähettää tai julkaista (publish) viestejä viestinvälityspalveluun
Viesteillä on tyypillisesti joku aihe (topic) ja sen lisäksi datasisältö
Esim: topic: new_user, data: { username: Arto Hellas, age: 31, education: PhD }

Mikropalveluiden kommunikointi
Palvelut voivat tilata (subscribe) viestipalvelulta viestit joista ne ovat kiinnostuneita
Esim. käyttäjähallinnasta vastaava palvelu tilaa viestit joiden aihe on
new_user
Viestinvälityspalvelu välittää vastaanottamansa viestit kaikille, jotka ovat aiheen tilanneet
Kaikki viestien (tai joskus puhutaan myös tapahtumista, event) välitys tapahtuu viestinvälityspalvelun (seuraavan kalvon kuvassa event mediator) kautta
Näin mikropalveluista tulee erittäin löyhästi kytkettyjä, ja muutokset yhdessä palvelussa eivät vaikuta mihinkään muualle, niin kauan kuin viestit säilyvät entisen muotoisina
Viestien lähetys lähettäjän kannalta asynkronista, eli palvelu lähettää viestin, jatkaa se heti koodissaan eteenpäin siitä huolimatta onko viesti välitetty sen tilanneille palveluille

Asynkronisten viestien (tai eventtien) välitykseen perustuvaa arkkitehtuureja kutsutaan myös event-driven-arkkitehtuureiksi
kaikki event-driven-arkkitehtuurit eivät välttämättä ole mikroarkkitehtuureja, esim. Java Swing/FX -sovelluksessa käyttöliittymä kommunikoi sovelluksen kanssa asynkronisten tapahtumien avulla

### Mikropalveluiden haasteita

Monista eduistaan huolimatta mikropalveluarkkitehtuurin soveltaminen tuo mukanaan koko joukon uusia haasteita. Ensinnäkin sovelluksen jakaminen järkeviin mikropalveluihin on melko haastavaa. Vääränlainen jako palveluihin voi tuottaa sovelluksen, jossa jokainen palvelu joutuu keskustelemaan verkon yli pahimmassa tapauksessa kymmenien palvelujen kesken ja näin sovelluksen suorituskyky kärsii. 

Palveluista koostetun sovellusten debuggaaminen ja testaaminen on huomattavasti hankalampaa kuin monoliittisen, erityisesti näin on jos mikropalvelut käyttävät viestinvälitystä.

Kymmenistä tai jopa sadoista mikropalveluista koostuvan ohjelmiston operoiminen eli "käynnistäminen" tuotantopalvelimilla on haastavaa ja vaatii pitkälle menevää automatisointia. Sama koskee sovelluskehitysympäristöä ja jatkuvaa integraatiota.
Mikropalveluiden menestyksekäs soveltaminen edellyttääkin vahvaa DevOps-kulttuuria.

Mikropalveluiden yhteydessä käytetäänkin paljon ns. kontainereja eli käytännössä[dockeria](https://www.docker.com/). Kontainerit ovat hieman yksinkertaistaen sanottuna kevyitä virtuaalikoneita, joita voi suorittaa yhdellä palvelimella suuren määrän rinnakkain. Jos mikropalvelu on omassa kontainerissaan, vastaa se käytännössä tilannetta, jossa mikropalvelua suoritettaisiin omalla koneellaan.

Aihe on tärkeä, mutta emme valitettavasti voi mennä siihen tämän kurssin 
puitteissa ollenkaan, onneksi Avoimessa Yliopistossa on tarjolla sopiva kurssi aiheesta: [DevOps with Docker 1-3 op](https://docker-hy.github.io/)

## Arkkitehtuuri ketterissä menetelmissä
 
Ketterien menetelmien kantava teema on toimivan, asiakkaalle arvoa tuottavan ohjelmiston nopea toimittaminen, tämä on mainittu selkeästi jo agile menifestin periaatteissa:

_Our highest priority is to satisfy the customer through early and continuous delivery of valuable software._

_Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale._

Ketterät menetelmät suosivat yksinkertaisuutta suunnitteluratkaisuissa:

_Simplicity, the art of maximizing the amount of work not done, is essential_

Arkkitehtuuriin suunnittelu ja dokumentointi taas on perinteisesti ollut melko pitkäkestoinen, ohjelmoinnin aloittamista edeltävä vaihe, eräänlainen _Big Design Up Front. Ketterät menetelmät ja "arkkitehtuurivetoinen" ohjelmistotuotanto ovat siis jossain määrin keskenään ristiriidassa.
 
Arkkitehtuuri ketterissä menetelmissä Ketterien menetelmien yhteydessä puhutaan [inkrementaalisesta tai evolutiivisesta suunnittelusta ja arkkitehtuurista](https://www.jamesshore.com/Agile-Book/incremental_design.html). 

Ideana on, että arkkitehtuuri mietitään riittävällä tasolla projektin alussa. Ohjelmiston "lopullinen" arkkitehtuuri muodostuu lopulta iteraatio iteraatiolta samalla kun ohjelmaan toteutetaan uutta toiminnallisuutta. Esimerkiksi kerrosarkkitehtuurin mukaista sovellusta ei rakenneta "kerros kerrallaan", vaan sen sijaan jokaisessa iteraatiossa tehdään pieni pala jokaista kerrosta, sen verran kuin iteraation toiminnallisuuksien toteuttaminen edellyttää.

Melko tyypillinen tapa on aloittaa projektit ns. [nollasprintillä](https://www.infoq.com/news/2008/09/sprint_zero/) jonka aikana luodaan mm. alustava arkkitehtuuri sekä backlog. 

Scrumin varhaisissa artikkeleissa puhuttiin "pre game"-vaiheesta jonka aikana tehtiin erilaisia kehitystyötä valmistelevia asioita, mm. hahmoteltiin alustava arkkitehtuuri. Sittemmin koko käsite on hävinnyt Scrumista ja Ken Schwaber (Scrumin kehittäjä) jopa eksplisiittisesti kieltää ja [tyrmää](http://www.scrum.org/assessmentdiscussion/post/1317787) koko "nollasprintin" olemassaolon.

### Kävelevä luuranko

Yleinen lähestymistapa inkrementaaliseen arkkitehtuuriin on kävelevän luurangon, eli _walking skeletonin_ käyttö. [Alistair Coburn](http://alistair.cockburn.us/Walking+skeleton) kuvailee käsitettä seuraavastsi:

> A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function. It need not use the final architecture, but it should link together the main architectural components.
>
> The architecture and the functionality can then evolve in parallel.
What constitutes a walking skeleton varies with the system being designed
For a layered architecture system, it is a working connection between all the layers.

> The walking skeleton is not complete or robust and it is missing the flesh of the application functionality. Incrementally, over time, the infrastructure will be completed and full functionality will be added.
>
> A walking skeleton, is permanent code, built with production coding habits, regression tests, and is intended to grow with the system.
>

Eli heti projektin alussa, mielellään ensimmäisessä sprintissä on tarkoitus toteuttaa arkkitehtuurin rungon sisältävä _walking skeleton_, joka sisältää jo kaikkia arkkitehtuurin peruskomponentteja ja kerroksia vastaavat tynkäkomponentit sekä niiden välisen kommunikaation. 

Tätä luurankoa sitten kasvatetaan pikkuhiljaa projektin edetessä kun sovelluksen toiminnallisuus rakentuu. 

Walking skeleton ei ole pelkästään poisheitettävää koodia, vaan sovelluksen koodi rakentuu sen ympärille, eli skeletoinia rakennettaessa on jo tarkoituksen mukaisin osin syytä ohjelmoida tuotantokoodin edellyttämällä laadulla. 
 
### Inkrementaalisen arkkitehtuurin etuja

Perinteisesti arkkitehtuurista on vastannut ohjelmistoarkkitehti ja ohjelmoijat ovat olleet velvoitettuja noudattamaan arkkitehtuuria. Ketterissä menetelmissä taas ei suosita erillistä arkkitehdin roolia, esim. Scrum käyttää kaikista ryhmän jäsenistä nimikettä developer. Ketterien menetelmien ideaalihan on, että kehitystiimi luo arkkitehtuurin yhdessä, tämä on myös yksi agile manifestin periaatteista:

> The best architectures, requirements, and designs emerge from self- organizing teams.

Arkkitehtuuri on siis koodin tapaan _tiimin yhteisomistama_ ja tästä on muutamia etuja. Kehittäjät todennäköisesti sitoutuvat paremmin itseomistamansa arkkitehtuurin noudattamiseen kuin "norsunluutornissa" olevan tiimin ulkopuolisen arkkitehdin määrittelemään arkkitehtuuriiin.

Tiimin kesken suunnitteleman arkkitehtuurin dokumentointi voi olla kevyt ja informaali, esim. valkotaululle piirretty, sillä tiimi tuntee joka tapauksessa arkkitehtuurin hengen ja pystyy sitä noudattamaan. Jos arkkitehtuurin suunnittelee joku ulkopuoleinen, sen kommunikointi tiimille edellyttänee raskaampaa dokumentaatiota.

Ketterissä menetelmissä oletuksena on, että parasta mahdollista arkkitehtuuria ei pystytä suunnittelemaan projektin alussa, kun vaatimuksia, toimintaympäristöä ja toteutusteknologioita ei vielä tunneta. Jo tehtyjä arkkitehtonisia ratkaisuja on järkevä muuttaa jos ajan myötä huomataan että aiemmin tehdyt valinnat eivät tule parhaalla tavalla ohjelmiston kehittämistä..

Eli kuten vaatimusmäärittelyn suhteen, myös arkkitehtuurin suunnittelussa ketterät menetelmät pyrkii välttämään liian aikaisin tehtävää ja myöhemmin todennäköisesti turhaksi osoittautuvaa työtä.

### Inkrementaalisen arkkitehtuurin riskit

Inkrementaalinen lähestymistapa arkkitehtuurin muodostamiseen edellyttää koodilta hyvää sisäistä laatua ja toteuttajilta kurinalaisuutta.

[Martin Fowler](http://martinfowler.com/articles/designDead.html) toteaa seuraavasti 

> Essentially evolutionary design means that the design of the system grows as the system is implemented. Design is part of the programming processes and as the program evolves the design changes.
>
> In its common usage, evolutionary design is a disaster. The design ends up being the aggregation of a bunch of ad-hoc tactical decisions, each of which makes the code harder to alter.

Fowlerin havaintojen mukaan inkrementaalisen arkkitehtuurin ja suunnittelun ihanne toteutuu vain harvoin, useimmiten sovelluskehittäjien huolimattomuus, aikataulupaineet ym. syyt ajavat siihen, että ohjelmiston sisäinen laatu alkaa ajan myötä heikentyä ja lopulta ohjelmisto enää muodoton kasa spagettikoodia, eli [big ball of mud](http://www.laputan.org/mud/) jonka ylläpitäminen ja jatkokehittäminen muuttuu erittäin haastavaksi.

## Olio/komponenttisuunnittelu
 
Sovelluksen arkkitehtuuri siis antaa raamit jotka ohjaavat sovelluksen tarkempaa sunnittelua ja toteuttamista. Tätä detaljoidumman tason suunnittelua nimitetään olio- tai komponenttisuunnitteluksi ja sen tarkoituksena on tarkentaa komponenttien väliset rajapinnat sekä hahmotella ohjelman tarkempi luokka- tai moduulirakenne.

Vesiputousmaisessa työskentelyssä komponenttisuunnittelu saattaa olla dokumentoitu esim. UML:n luokka- ja sekvenssikaavioina. Erityisesti ketterässä ohjelmistotuotannossa tarkka suunnittelu tapahtuu kuitenkin yleensä vasta ohjelmoitaessa. 

Ohjelmiston suunnittelussa pyritään ennenkaikkia maksimoimaan [koodin sisäinen laatu](/osa3), eli pitämään sovellus rakenteeltaan helposti ylläpidettävänä ja laajennettavana. 

Ylläpidettävyyden ja laajennettavuuden kannalta tärkeitä seikkoja ovat mm. seuraavat
- koodin tulee olla luettavuudeltaan selkeää, ja sen tulee kertoa esim. nimennällään mahdollisimman selkeästi mitä koodi tekee, ja tuoda esiin koodin alla oleva "design"
- yhtä paikkaa pitää pystyä muuttamaan siten, ettei muutoksesta aiheudu sivuvaikutuksia sellaisiin kohtiin koodia, jota muuttaja ei pysty ennakoimaan
- jos ohjelmaan tulee tehdä laajennus tai bugikorjaus, tulee olla helppo selvittää mihin kohtaan koodia muutos tulee tehdä
- jos ohjelmasta muutetaan "yhtä asiaa", tulee kaikkien muutosten tapahtua vain yhteen kohtaan koodia (metodiin tai luokkaan)
- muutosten ja laajennusten jälkeen tulee olla helposti tarkastettavissa ettei muutos aiheuta sivuvaikutuksia muualle järjestelmään

Ohjelmistoalle kertyneen [kansanviisauden](https://www.amazon.com/Software-Development-Principles-Practices-Paperback/dp/B011DBKELY) mukaan ylläpidettävyyden ja laajennettavuuden kannalta hyvällä koodilla on joukko yhteneviä ominaisuuksia, tai _laatuattribuutteja_, näitä ovat esim. seuraavat:

- kapselointi
- korkea koheesion aste
- riippuvuuksien vähäisyys 
- toisteettomuus
- testattavuus
- selkeys

Tutustutaan nyt näihin laatuattribuutteihin sekä periaatteisiin ja suunnitteluratkaisuihin, joita noudattaen on mahdollista kirjoittaa laatuatribuuteilla mitaten laadukasta koodia. Monet näistä periaatteista on tullut nimetyksi ja dokumentoiduksi _suunnittelumallien_ (engl. design patterns) muodossa. 

Olemme jo nähneet muutamia suunnittelumalleja, ainakin seuraavat: dependency injection singleton, data access object. Suuri osa tällä kurssilla kohtaamistamme suunnittelumalleista on syntynyt olio-ohjelmointikielten parissa. Osa suunnittelumalleista on relevantteja myös muita paragigmoja, kuten funktionaalista ohjelmointia käytettäessa. Muilla paradigmoilla on myös omia suunnittelumallejaan, mutta niitä emme kurssilla käsittele.

### Kapselointi

Ohjelmoinnin peruskurssilla _kapselointi_ (engl. encapsulation) määriteltiin muutama vuosi seuraavasti

> Tapaa ohjelmoida olion toteutuksen yksityiskohdat luokkamäärittelyn sisään – piiloon olion käyttäjältä – kutsutaan kapseloinniksi. Olion käyttäjän ei tarvitse tietää mitään olioiden sisäisestä toiminnasta. 

Määritelmä ei ole enää sanatarkkaan sama, mutta aloitteleva ohjelmoija assosioi kapseloinnin nykyäänkin seuraavaan periaatteeseen: _oliomuuttujat tulee määritellä privaateiksi ja niille tulee tehdä tarvittaessa setterit ja getterit_

Tämä on kuitenkin aika kapea näkökulma kapselointiin. Olion sisäisen tilan lisäksi kapseloinnin kohde voi olla mm. käytettävän olion tyyppi, algoritmi, olioiden luomistapa, käytettävän komponentin rakenne, jne...

Monissa suunnittelumalleissa on kyse juuri eritasoisten asioiden kapseloinnista, ja tulemme pian näkemään esimerkkejä asiasta.

Pyrkimys kapselointiin näkyy myös ohjelmiston arkkitehtuurin tasolla. Esimerkiksi kerrosarkkitehtuurissa ylempi kerros käyttää ainoastaan alapuolellaan olevan kerroksen ulospäin tarjoamaa rajapintaa, kaikki muu on kapseloitu näkymättömiin. 

### Koheesio ja Single responsibility -periaate

_Koheesiolla_ (engl. cohesion) tarkoitetaan sitä, kuinka pitkälle metodissa, luokassa tai komponentissa oleva ohjelmakoodi on keskittynyt tietyn yksittäisen toiminnallisuuden toteuttamiseen. Hyvänä asiana pidetään mahdollisimman korkeaa koheesion astetta.

Koheesioon tulee siis pyrkiä kaikilla ohjelman tasoilla, metodeissa, luokissa ja komponenteissa.

####

Koheesiolla tarkoitetaan sitä, kuinka pitkälle metodissa, luokassa tai komponentissa oleva ohjelmakoodi on keskittynyt tietyn toiminnallisuuden toteuttamiseen. Hyvänä asiana pidetään mahdollisimman korkeaa koheesion astetta. Koheesioon tulee siis pyrkiä kaikilla ohjelman tasoilla, metodeissa, luokissa, komponenteissa ja jopa muuttujissa (samaa muuttujaa ei saa uusiokäyttää eri asioiden tallentamiseen). 

#### Koheesio metoditasolla

Esimerkki artikkelista [http://www.ibm.com/developerworks/java/library/j-eaed4/index.html](http://www.ibm.com/developerworks/java/library/j-eaed4/index.html)

``` java
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

* luodaan yhteys tietokantaan
* tehdään tietokantakysely
* käydään kyselyn tulosrivit läpi ja luodaan jokaista tulosriviä kohti Part-olio
* suljetaan yhteys

Ikävänä seurauksena tästä on myös se, että metodi toimii monella abstraktiotasolla. Toisaalta käsitellään teknisiä tietokantatason asioita kuten tietokantayhteyden avaamista ja kyselyn tekemistä, toisaalta "bisnestason" olioita.

Metodi on helppo __refaktoroida__ pilkkomalla se pienempiin osiin joiden kutsumista alkuperäinen metodi koordinoi.

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

Yksittäiset metodit ovat nyt kaikki samalla abstraktiotasolla toimivia ja hyvin nimettyjä.

Nyt aikaansaatu lopputulos ei ole vielä välttämättä ideaali koko ohjelman kontekstissa. [Artikkelissa](http://www.ibm.com/developerworks/java/library/j-eaed4/index.html) esimerkkiä jatketaankin eristäen tietokantaoperaatiot (joita myös muut ohjelman osat tarvitsevat) omaan luokkaansa.

#### Koheesio luokkatasolla

Luokkatason koheesiossa pyrkimyksenä on, että luokan vastuulla on vain yksi asia, tämä tunnetaan myös nimellä [Single Responsibility](https://en.wikipedia.org/wiki/Single_responsibility_principle) (SRP). Robert Martin määrittelee, että luokalla on yksi vastuu _jos sillä on vain yksi syy muuttua_. 

Kurssin alussa tarkastelimme yksinkertaista laskinta:

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

Luokka rikkoo Single responsibility -periaatteen. Miksi? Periaate sanoo, että luokalla saa olla vain yksi vastuu eli syy muuttua. Nyt luokalla on kuitenkin useita syitä muuttua:

* luokalle halutaan toteuttaa uusia laskutoimituksia
* kommunikointi käyttäjän kanssa halutaan hoitaa jotenkin muuten kuin konsolin välityksellä

Eriyttämällä käyttäjän kanssa kommunikointi omaan luokkaan ja eristämällä se rajapinnan taakse (eli _kapseloimalla kommunikoinnin toteutustapa_) saadaan luokan Laskin vastuita vähennettyä:

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

Nyt kommunikointitavan muutos ei edellytä luokkaan mitään muutoksia edellyttäen että uusikin kommunikoinitapa toteuttaa rajapinnan, jonka kautta Laskin hoitaa kommunikoinnin.

Vaikka luokka Laskin siis toteuttaakin edelleen käyttäjänsä näkökulmasta samat asiat kuin aiemmin, ei se hoida kaikkea itse vaan _delegoi_ osan vastuistaan muualle.

Kommunikointirajapinta voidaan toteuttaa esim. seuraavasti:

```java
public class KonsoliIO implements IO {
    private Scanner lukija;

    public KonsoliIO() {
        lukija = new Scanner(System.in);
    }

    public int nextInt() {
        return lukija.nextInt();
    }

    public void print(String m) {
        System.out.println(m);
    }
}
```

Ja laskin konfiguroidaan injektoimalla _IO_-rajapinnan toteuttava luokka konstruktorin parametrina:

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

### Riippuvuuksien vähäisyys

Single responsibility -periaatteen hengessä tehty ohjelma koostuu suuresta määrästä oliota/komponentteja, joilla on suuri määrä pieniä metodeja.

Olioiden on siis oltava vuorovaikutuksessa toistensa kanssa saadakseen toteutettua ohjelman toiminnallisuuden. _Riippuvuuksien vähäisyyden_ (engl. low coupling) periaate pyrkii eliminoimaan luokkien ja olioiden välisiä riippuvuuksia.

Koska korkean koheesion periaatteen nojalla olioita on paljon, tulee riippuvuuksia pakostakin, miten riippuvuudet sitten saadaan eliminoitua? Ideana on eliminoida tarpeettomat riippuvuudet _ja_ välttää riippuvuuksia konkreettisiin asioihin.

Riippuvuuden kannattaa kohdistua asiaan joka ei muutu herkästi, eli joko rajapintaan tai abstraktiin luokkaan. Sama idea kulkee parillakin eri nimellä
- program to an interface, not to an implementation 
- depend on abstractions, not on concrete implementation
 
Konkreettisen riippuvuuden eliminointi voidaan tehdä rajapintojen (tai abstraktien luokkien) avulla. Olemme tehneet näin kurssilla usein, mm. Verkkokaupan riippuvuus Varastoon, Pankkiin ja Viitegeneraattoriin korvattiin rajapinnoilla
Dependency Injection -suunnittelumalli toimi usein apuvälineenä konkreettisen riippumisen eliminoinnissa.

Osa luokkien välisistä riippuvuuksista on tarpeettomia ja ne kannattaa eliminoida muuttamalla luokan vastuita.

#### Favour composition over inheritance eli milloin ei kannata periä

Perintä muodostaa riippuvuuden perivän ja perittävän luokan välille, tämä voi jossain tapauksissa olla ongelmallista. Yksi oliosuunnittelun kulmakivi onkin periaate [Favour composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance) eli suosi yhteistoiminnassa toimivia oliota perinnän sijaan.

Tarkastellaan esimerkkiä tilannetta valottavaa esimerkkiä.

Meillä on käytössämme luokka, joka mallintaa pankkitiliä:

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

Huomaamme, että tulee tarve toisentyyppiselle tilille joko 1, 3, 6 tai 12 kuukaiden Euribor-korkoon perustuvalle tilille. päätämme tehdä uuden luokan EuriborTili perimällä luokan Tili ja ylikirjoittamalla metodin maksaKorko siten että Euribor-koron senhetkinen arvo haetaan verkosta:

``` java
public class EuriborTili extends Tili {
    private int kuukauden;

    public EuriborTili(String tiliNumero, String omistaja, int kuukauden) {
        super(tiliNumero, omistaja, 0);
        this.kuukauden = kuukauden;
    }

    @Override
    public void maksaKorko() {
        saldo += saldo*korko()*100;
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

Huomaamme, että EuriborTili rikkoo Single Responsibility -periaatetta, sillä luokka sisältää normaalin tiliin liittyvän toiminnan lisäksi koodia, joka hakee tavaraa internetistä. Vastuut kannattaa selkeyttää ja korkoprosentin haku eriyttää omaan rajapinnan takana olevaan luokkaan:

``` java
public interface EuriborLukija {
    double korko();
}

public class EuriborTili extends Tili {
    private EuriborLukija euribor;

    public EuriborTili(String tiliNumero, String omistaja, int kuukauden) {
        super(tiliNumero, omistaja, 0);
        euribor = new EuriborlukijaImpl(kuukauden);
    }

    @Override
    public void maksaKorko() {
        saldo += saldo*euribor.korko()*100;
    }

}

public class EuriborlukijaImpl implements EuriborLukija {
    private int kuukauden;

    public EuriborlukijaImpl(int kuukauden) {
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

EuriborTili-luokka alkaa olla nyt melko siisti, EuriborLukijassa olisi paljon parantemisen varaa, mm. sen ainoan metodin _koheesio_ on huono, metodi tekee aivan liian montaa asiaa. Palaamme siihen kuitenkin myöhemmin.

Seuraavaksi huomaamme että on tarvetta _Määräaikaistilille_, joka on muuten samanlainen kuin Tili mutta määräaikaistililtä ei voi siirtää rahaa muualle ennen kuin se tehdään mahdolliseksi tietyn ajan kuluttua. Eli ei ongelmaa, perimme jälleen luokan Tili:

``` java
public class MääräaikaisTili extends Tili {
    private boolean nostokielto;

    public MääräaikaisTili(String tiliNumero, String omistaja, double korkoProsentti) {
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

Luokka syntyi tuskattomasti.

Ohjelman rakenne näyttää tässä vaiheessa seuraavalta:

![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-2.png)

Seuraavaksi tulee idea _Euribor-korkoa käyttävistä määräaikaistileistä_. 
Miten nyt kannattaisi tehdä? Osa toiminnallisuudesta on luokassa Määräaikaistili ja osa luokassa Euribor-tili...

Ehkä koronmaksun hoitaminen perinnän avulla ei ollutkaan paras ratkaisu, ja kannattaisi noudattaa "favor composition over inheritance"-periaatetta. Eli erotetaan koronmaksu omaksi luokakseen, tai rajapinnan toteuttaviksi luokiksi:

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

Nyt tarve erilliselle EuriborTili-luokalle katoaa, ja pelkkä Tili muutettuna riittää:

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
        saldo += saldo*korko.korko()*100;
    }
}
```

Erilaisia tilejä luodaan nyt seuraavasti:

``` java
Tili normaali = new Tili("1234-1234", "Kasper Hirvikoski", new Tasakorko(4));
Tili euribor12 = new Tili("4422-3355", "Tero Huomo", new EuriborKorko(12));
```

Ohjelman rakenne on nyt seuraava
![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-3.png)

Muutetaan luokkaa vielä siten, että tilejä saadaan luotua ilman konstruktoria:

``` java
public class Tili {

    private String tiliNumero;
    private String omistaja;
    private double saldo;
    private Korko korko;

    public static Tili luoEuriborTili(String tiliNumero, String omistaja, int kuukausia) {
        return new Tili(tiliNumero, omistaja, new EuriborKorko(kuukausia));
    }

    public static Tili luoMääräaikaisTili(String tiliNumero, String omistaja, double korko) {
        return new MääräaikaisTili(tiliNumero, omistaja, new Tasakorko(korko));
    }

    public static Tili luoKäyttöTili(String tiliNumero, String omistaja, double korko) {
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

Lisäsimme luokalle 3 staattista apumetodia helpottamaan tilien luomista. Tilejä voidaan nyt luoda seuraavasti:

``` java
Tili määräaikais = Tili.luoMääräaikaisTili("1234-1234", "Kasper Hirvikoski", 2.5);
Tili euribor12 = Tili.luoEuriborTili("4422-3355", "Tero Huomo", 12 );
Tili fyrkka = Tili.luoEuriborTili("7895-4571", "Esko Ukkonen", 10.75 );
```

#### suunnittelumalli factory

Käyttämämme periaate olioiden luomiseen staattisten metodien avulla on hyvin tunnettu suunnittelumalli _staattinen tehdasmetodi_ (engl. static factory method).

Tili-esimerkissä käytetty static factory method on yksinkertaisin erilaisista tehdas-suunnittelumallin varianteista. Periaatteena suunnittelumallissa on se, että luokalle tehdään staattinen tehdasmetodi tai metodeja, jotka käyttävät konstruktoria ja luovat luokan ilmentymät. Konstruktorin suora käyttö usein estetään määrittelemällä konstruktori privateksi.

Tehdasmetodin avulla voidaan piilottaa olion luomiseen liittyviä yksityiskohtia, esimerkissä Korko-rajapinnan toteuttavien olioiden luominen ja jopa olemassaolo oli tehdasmetodin avulla piilotettu tilin käyttäjältä. 

Tehdasmetodin avulla voidaan myös piilottaa käyttäjältä luodun olion todellinen luokka, esimerkissä näin tehtiin määräaikaistilin suhteen.

Tehdasmetodi siis auttaa _kapseloinnissa_, olion luomiseen liittyvät detaljit ja jopa olion todellinen luonne piiloutuu olion käyttäjältä. Tämä taas mahdollistaa erittäin joustavan laajennettavuuden. 

Staattinen tehdasmetodi ei ole testauksen kannalta erityisen hyvä ratkaisu, esimerkissämme olisi vaikea luoda tili, jolle annetaan Korko-rajapinnan toteuttama mock-olio. Nyt se tosin onnistuu koska konstruktoria ei ole täysin piilotettu.

Lisätietoa factory-suunnittelumallista esim. seuraavissa https://sourcemaking.com/design_patterns/factory_method ja http://www.oodesign.com/factory-method-pattern.html

Tehdasmetodien avulla voimme siis kapseloida luokan todellisen tyypin. Kasperin tilihän on määräaikaistili, se kuitenkin pyydetään Tili-luokassa sijaitsevalta factoryltä, olion oikea tyyppi on piilotettu tarkoituksella käyttäjältä. Määräaikaistilin käyttäjällä ei siis ole enää konkreettista riippuvuutta luokkaan Määräaikaistili.

Teimme myös metodin jonka avulla tilin korkoa voi muuttaa. Kasperin tasakorkoinen määräaikaistili on helppo muuttaa lennossa kolmen kuukauden Euribor-tiliksi:

```java
määräaikais.vaihdaKorkoa(new EuriborKorko(3));
```

Eli luopumalla perinnästä selkeytyy oliorakenne huomattavasti ja saavutetaan ajonaikaista joustavuuttaa (koronlaskutapa) joka perintää käyttämällä ei onnistu.

#### suunnittelumalli: strategy

Tekniikka jolla koronmaksu hoidetaan on myöskin suunnittelumalli nimeltään _strategia_ (engl. strategy).

Strategyn avulla voidaan hoitaa tilanne, jossa eri olioiden käyttäytyminen on muuten sama, mutta tietyissä kohdissa on käytössä eri "algoritmi". Esimerkissämme tämä algoritmi oli korkoprosentin määritys. Sama tilanne voidaan hoitaa usein myös perinnän avulla käyttämättä erillisiä olioita, strategy kuitenkin mahdollistaa huomattavasti dynaamisemman ratkaisun, sillä strategia-olioa voi vaihtaa ajoaikana. Strategyn käyttö ilmentää hienosti "favour composition over inheritance"-periaatetta

Lisätietoa strategia-suunnittelumallista seuraavissa http://www.oodesign.com/strategy-pattern.html ja https://sourcemaking.com/design_patterns/strategy

#### Tilin luominen

Loimme äsken luokalle _Tili_ staattiset apumetodit tilien luomista varten. Voisi kuitenkin olla järkevämpää siirtää vastuu tilien luomisesta erillisen luokan, _pankin_ vastuulle. Pankki voi helposti hallinnoida myös tilinumeroiden generointia:

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
    
    public Tili euribortili(String tiliNumero, String omistaja, int kk){
        return new Tili(generoiTilinro(), omistaja, new EuriborKorko(kk));
    }        

    public Tili maaraaikaisEuribor(String tiliNumero, String omistaja, int kk){
        return new MaaraAikaisTili(tiliNumero, omistaja, new EuriborKorko(kk));
    } 
}
```

Tilejä luodaan pankin avulla seuraavasti:

``` java
Pankki spankki = new Pankki();

Tili euriborTili = spankki.euribortili("Kasper Hirvikoski", 6);
Tili maaraaikaistili = spankki.maaraikaistili("Arto Hellas", 0.15);
``` 

eli tililin luojan ei enää tarvitse huolehtia tilinumeroiden generoinnista.

Nyt tehdasmetodista on siis tehty luokan oman staattisen metdoin sijaan toiseen luokkaan sijoitettu oliometodi.

#### Toiminnallisuuden kapselointi: Laskin ilman iffejä

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

            io.print("summa: " + vastaus + "\n");
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

    protected int luku1;
    protected int luku2;

    public Operaatio(int luku1, int luku2) {
        this.luku1 = luku1;
        this.luku2 = luku2;
    }

    public static Operaatio luo(String operaatio, int luku1, int luku2) {
        if (operaatio.equals("summa")) {
            return new Summa(luku1, luku2);
        } else if (operaatio.equals("tulo")) {
            return new Tulo(luku1, luku2);
        }
        return new Erotus(luku1, luku2);
    }

    public abstract int laske();
}

public class Summa extends Operaatio {

    public Summa(int luku1, int luku2) {
        super(luku1, luku2);
    }

    @Override
    public int laske() {
        return luku1 + luku2;
    }
}

public class Tulo extends Operaatio {

    public Tulo(int luku1, int luku2) {
        super(luku1, luku2);
    }

    @Override
    public int laske() {
        return luku1 * luku2;
    }
}

public class Erotus extends Operaatio {

    public Erotus(int luku1, int luku2) {
        super(luku1, luku2);
    }

    @Override
    public int laske() {
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

            Operaatio operaatio = Operaatio.luo(komento, luku1, luku2);

            io.print(komento + ": " + operaatio.laske() + "\n");
        }
    }
}
```

Hienona puolena laskimessa on nyt se, että voimme lisätä operaatioita ja Laskinta ei tarvitse muuttaa millään tavalla!

Rakenne näyttää seuraavalta
![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-4.png)


Entä jos haluamme laskimelle muunkinlaisia kuin 2 parametria ottavia operaatioita, esim. neliöjuuren?

Jatkamme muokkaamista seuraavassa luvussa

## laskin ja komento-olio

Muutamme Operaatio-luokan olemusta, päädymme jo oikeastaan Strategy-suunnittelumallin lähisukulaisen _Command_-suunnittelumallin puolelle ja annammekin sille nimen Komento, ja teemme siitä rajapinnan sillä siirrämme erillisten komento-olioiden luomisen Komentotehdas-luokalle:

``` java
public interface Komento {
    void suorita();
}
```

Komento-rajapinta on siis äärimmäisen yksinkertainen. Komennon voi ainoastaan suorittaa eikä se edes palauta mitään!

Komento-olioita luova komentotehdas on seuraavassa:

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
Komentotehdas siis palauttaa hae-metodin merkkijonoparametria vastaavan komennon. Koska vastuu käyttäjän kanssa kommunikoinnista on siirretty Komento-olioille, annetaan niille IO-olio konstruktorissa.

if-hässäkkä näyttää hieman ikävältä. Mutta hetkinen! Voisimme tallentaa erilliset komennon HashMap:iin:

``` java
public class Komentotehdas {
    private HashMap<String, Komento> komennot;

    public Komentotehdas(IO io) {
        komennot = new HashMap<String, Komento>();
        komennot.put("summa", new Summa(io));
        komennot.put("tulo", new Tulo(io));
        komennot.put("nelio", new Nelio(io));
        komennot.put("tuntematon", new Tuntematon(io));
    }

    public Komento hae(String operaatio) {
        Komento komento = komennot.get(operaatio);
        if (komento == null) {
            komento = komennot.get("tuntematon");
        }
        return komento;
    }
}
```

Pääsimme kokonaan eroon if-ketjusta, loistavaa!

Yksittäiset komennot ovat hyvin yksinkertaisia:

``` java
public class Nelio implements Komento {
    private IO io;

    public Nelio(IO io) {
        this.io = io;
    }

    @Override
    public void suorita() {
        io.print("luku 1: ");
        int luku = io.nextInt();

        io.print("vastaus: "+luku*luku);
    }
}

public class Tuntematon implements Komento {
    private IO io;

    public Tuntematon(IO io) {
        this.io = io;
    }

    @Override
    public void suorita() {
        io.print("sallitut komennot: summa, tulo, nelio, lopeta");
    }
}

public class Lopeta implements Komento {
    private IO io;

    public Lopeta(IO io) {
        this.io = io;
    }

    @Override
    public void suorita() {
        io.print("kiitos ja näkemiin");
        System.exit(0);
    }

}
```

Ohjelman rakenne tässä vaiheessa

![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-5.png)


### Command

Eristämme siis jokaiseen erilliseen laskuoperaatioon liittyvä toiminnallisuuden omaksi oliokseen command-suunnittelumallin ideaa nodattaen, eli siten, että kaikki operaatiot toteuttavat yksinkertaisen rajapinnan, jolla on ainoastaan metodi public <code>void suorita()</code>

Ohjelman edellisessä versiossa sovelsimme strategia-suunnittelumallia, missä erilliset laskuoperaatiot oli toteutettu omina olioinaan. Command-suunnittelumalli eroaa siinä, että olemme nyt kapseloineet koko komennon suorituksen, myös käyttäjän kanssa käytävän kommunikoinnin omiin olioihin. Komento-olioiden rajapinta on yksinkertainen, niillä on ainoastaan yksi metodi _suorita_. Strategia-suunnittelumallissa taas strategia-olioiden rajapinta vaihtelee tilanteen mukaan. 

Esimerkissä komennot luotiin tehdasmetodin tarjoavan olion avulla, if:it piilotettiin tehtaan sisälle. Komento-olioiden suorita-metodi suoritettiin esimerkissä välittömästi, näin ei välttämättä ole, komentoja voitaisiin laittaa esim. jonoon ja suorittaa myöhemmin. Joskus komento-olioilla metodin _suorita_ lisäksi myös metodi _peru_, mikä kumoaa komennon suorituksen aiheuttaman toimenpiteen. Esim. editorien undo- ja redo-toiminnallisuus toteutetaan säilyttämällä komento-olioita jonossa. Toteutamme viikon 6 laskareissa _peru_-toiminnallisuuden laskimen komennoille.

Lisää command-suunnittelimallista esim. seuraavissa ttp://www.oodesign.com/command-pattern.html
http://sourcemaking.com/design_patterns/command

### lisää komentoja

Jatketaan laskimen komentojen toteuttamista.

Koska kaksi parametria käyttäjältä kysyvillä komennoilla, kuten summa, tulo ja erotus on paljon yhteistä, luodaan niitä varten yliluokka:

``` java
public abstract class KaksiparametrinenLaskuoperaatio implements Komento {

    protected IO io;
    protected int luku1;
    protected int luku2;

    public KaksiparametrinenLaskuoperaatio(IO io) {
        this.io = io;
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

public class Summa extends KaksiparametrinenLaskuoperaatio {

    public Summa(IO io) {
        super(io);
    }

    @Override
    protected int laske() {
        return luku1+luku2;
    }
}

public class Tulo extends KaksiparametrinenLaskuoperaatio {

    public Tulo(IO io) {
        super(io);
    }

    @Override
    public int laske() {
        return luku1*luku2;
    }
}
```

Ja lopulta luokka Laskin, jossa ei ole enää juuri mitään jäljellä:

``` java
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

Ohjelmasta on näinollen saatu laajennettavuudeltaan varsin joustava. Uusia operaatioita on helppo lisätä ja lisäys ei aiheuta muutoksia moneen kohtaan koodia. Laskin-luokallahan ei ole riippuvuuksia muualle kuin rajapintoihin IO ja Komento ja luokkaan Komentotehdas.

![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-6.png)

Hintana joustavuudelle on luokkien määrän kasvu. Nopealla vilkaisulla saattaakin olla vaikea havaita miten ohjelma toimii, varsinkaan jos ei ole vastaavaan tyyliin tottunut, mukaan on nimittäin piilotettu factory- ja command-suunnittelumallien lisäksi suunnittelumalli __template method__ (kaksiparametrisen komennon toteutukseen). 

### template method

Template method -suunnittelumallia sopii tilanteisiin, missä kahden tai useamman operation suoritus on hyvin samankaltainen ja poikkeaa ainoastaan yhden tai muutaman operaatioon liittyvän askeleen kohdalla.

Summa- ja Tulo-komentojen suoritus on oleellisesti samanlainen:

<pre>
Lue luku1 käyttäjältä
Lue luku2 käyttäjältä
Laske operaation tulos
Tulosta operaation tulos
</pre>

Ainoastaan kolmas vaihe eli operaation tuloksen laskeminen eroaa summaa ja tuloa selvitettäessä.

Template methodin hengessä asia hoidetaan tekemällä abstrakti yliluokka, joka sisältää metodin _suorita()_ joka toteuttaa koko komennon suorituslogiikan:

```java
public abstract class KaksiparametrinenLaskuoperaatio implements Komento {

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


Suorituslogiikan vaihtuva osa eli operaation laskun tulos on määritelty abstraktina metodina _laske()_ jota metodi _suorita()_ kutsuu.

Konkreettiset toteutukset Summa ja Tulo ylikirjoittavat abstraktin metodin _laske()_, määrittelemällä miten laskenta tietyssä konkreettisessa, esim. laskettaessa summaa tapahtuu:

```java
public class Summa extends KaksiparametrinenLaskuoperaatio {

    @Override
    protected int laske() {
        return luku1+luku2;
    }
}
```

Abstraktin luokan määrittelemä _suorita()_ on _template-metodi_, joka määrittelee suorituksen siten, että suorituksen eroava osa määritellään yliluokan abstraktina metodina, jonka aliluokat ylikirjoittavat. Template-metodin avulla siis saadaan määriteltyä "geneerinen algoritmirunko", jota voidaan aliluokissa erikoistaa sopivalla tavalla.

Template-metodeita voi olla useampiakin kuin yksi eroava osa, tällöin abstrakteja metodeja määritellään tarpeellinen määrä. 

Strategy-suunnittelumalli on osittain samaa sukua Template-metodin kanssa, siinä kokonainen algoritmi tai algoritmin osa korvataan erillisessä luokassa toteutetulla toteutuksella.
Strategioita voidaan vaihtaa ajonaikana, template-metodissa olio toimii samalla tavalla koko elinaikansa  

Lisää template method -suunnittelumallista seuraavissa
http://www.oodesign.com/template-method-pattern.html
http://www.netobjectives.com/PatternRepository/index.php?title=TheTemplateMethodPattern


#### 

## Dekoroitu pino

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

* KryptattuPino jossa alkiot talletetaan pinoon kryptattuina, alkiot tulevat pinosta ulos normaalisti
* LokiPino jossa tieto pinoamisoperaatioista ja niiden parametreista ja paluuarvoista talletetaan lokiin
* PrepaidPino joka lakkaa toimimasta kun sillä on suoritettu konstruktoriparametrina määritelty määrä operaatioita

On lisäksi toteutettava kaikki mahdolliset kombinaatiot:

* KryptattuLokiPino
* LokiKryptattuPino (erona edelliseen että lokiin ei kirjata parametreja kryptattuna)
* KryptattuPrepaidPino
* KryptattuLokiPrepaidPino
* LokiPrepaidPino

Alkaa kuulostaa pahalta varsinkin kun Product Owner vihjaa, että seuraavassa sprintissä tullaan todennäköisesti vaatimaan lisää versioita pinosta, mm. ÄänimerkillinenPino, RajallisenkapasiteetinPino ja tietysti kaikki kombinaatiot tarvitaan myös...

Onneksi dekoraattori sopii tilanteeseen kuin nyrkki silmään! Luodaan pinon kolme uutta versiota dekoroituina pinoina. Tarkastellaan ensin PrepaidPinoa:

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

PrepaidPino siis perii pinon, mutta kun tarkkaa katsotaan, niin yliluokan operaatiot ylikirjoitetaan ja yliluokkaa ei hyödynnetä millään tavalla!

PrepaidPino siis perii luokan Pino, mutta se ei käytä "perittyä" pinouttaan, vaan sensijaan PrepaidPino __sisältää__ pinon, jonka se saa konstruktoriparametrina. Tätä sisältämäänsä pinoa PrepaidPino käyttää tallettamaan kaikki alkionsa. Eli jokainen PrepaidPinon operaatio delegoi operaation toiminnallisuuden toteuttamisen sisältämälleen pinolle.

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

Eli periaate on sama, pinodekoraattorit LokiPino ja KryptattuPino delegoivat kaikki operaationsa sisältämilleen Pino-olioille.

Koska kaikki dekoraattorit perivät luokan Pino, voidaan dekoraattorille antaa parametriksi toinen dekoraattori. Esim. KryptattuLokiPino luodaan seuraavasti:

``` java
PrintWriter loki = new PrintWriter( new File("loki.txt") );
Pino pino = new KryptattuPino( new LokiPino( new Pino(), loki ) );
```

Dekoroinnin avulla saamme siis suhteellisen vähällä ohjelmoinnilla pinolle paljon erilaisia ominaisuuskombinaatioita. Jos olisimme yrittäneet hoitaa kaiken normaalilla perinnällä, olisi luokkien määrä kasvanut eksponentiaalisesti eri ominaisuuksien määrän suhteen ja uusiokäytöstäkään ei olisi tullut mitään.

Dekorointi siis ei oleellisesti ole perintää vaan delegointia, jälleen kerran oliosuunnitteun periaate "favour composition over inheritance" on näyttänyt voimansa.

Lisää dekoraattori-suunnittelumallista esim. osoitteessa https://sourcemaking.com/design_patterns/decorator 

## Pinotehdas

Huomaamme, että eri ominaisuuksilla varustettujen pinojen luominen on käyttäjän kannalta hieman ikävää. Teemmekin luomista helpottamaan pinotehtaan:

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

Factoryluokka on ikävä ja sisältää hirveän määrän metodeja. Jos pinoon lisätään vielä ominaisuuksia, tulee factory karkaamaan käsistä.

Pinon luominen on kuitenkin factoryn ansiosta helppoa:

``` java
Pinotehdas tehdas = new Pinotehdas();

Pino omapino = tehdas.kryptattuPrepaidPino(100);
```
Factoryperiaate ei kyllä ole tilanteeseen ideaali. Kokeillaan rakentaja (engl. builder) -suunnittelumallia:

## Pinorakentaja

Rakentaja-suunnittelumalli sopii tilanteeseemme erittäin hyvin. Pyrkimyksenämme on mahdollistaa pinon luominen seuraavaan tyyliin:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino = rakenna.prepaid(10).kryptattu().pino();
```

Rakentajan metodinimet ja rakentajan muuttujan nimi on valittu mielenkiinoisella tavalla. On pyritty mahdollisimman luonnollista kieltä muistuttavaan ilmaisuun pinon luonnissa. Kyseessä onkin oikeastaan [DSL](https://martinfowler.com/bliki/DomainSpecificLanguage.html) (domain specific language) pinojen luomiseen!

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

eli kun <code>Rakentaja</code>-olio luodaan, rakentajan luo pinon. Rakentajan "rakennusvaiheen alla" olevan pinon voi pyytää rakentajalta kutsumalla metodia <code>pino()</code>.

Laajennetaan nyt rakentajaa siten, että voimme luoda prepaidpinoja seuraavasti:

``` java
Pinorakentaja rakenna = new Pinorakentaja();

Pino pino = rakenna.prepaid(10).pino();
```

Jotta edellinen menisi kääntäjästä läpi, tulee rakentajalle lisätä metodi jonka tyyppi on <code>Pinorakentaja prepaid(int kreditit)</code>, eli jotta metodin tuloksena olevalle oliolle voitaisiin kutsua metodia <code>pino</code>, on metodin <code>prepaid</code> palautettava rakentaja. Rakentajamme runko laajenee siis seuravasti:

``` java
public class Pinorakentaja {
    Pino pino;

    public Pinorakentaja() {
        pino = new Pino();
    }

    Pinorakentaja prepaid(int kreditit) {
        // ????
    }

    public Pino pino() {
        return pino;
    }
}
```

Rakentaja siis pitää oliomuuttujassa rakentumassa olevaa pinoa. Kun kutsumme rakentajalle metodia <code>prepaid</code> ideana on, että rakentaja dekoroi rakennuksen alla olevan pinon prepaid-pinoksi. Metodi palauttaa viitteen <code>this</code> eli rakentajan itsensä. Tämä mahdollistaa sen, että metodikutsun jälkeen päästään edelleen käsiksi työn alla olevaan pinoon. Koodi siis seuraavassa:

``` java
public class Pinorakentaja {
    Pino pino;

    public Pinorakentaja() {
        pino = new Pino();
    }

    public Pino pino() {
        return pino;
    }

    Pinorakentaja prepaid(int kreditit) {
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

    Pinorakentaja prepaid(int kreditit) {
        this.pino = new PrepaidPino(pino, kreditit);
        return this;
    }

    Pinorakentaja kryptattu() {
        this.pino = new KryptattuPino(pino);
        return this;
    }

    Pinorakentaja loggaava(PrintWriter loki) {
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

Rakentajan toteutus perustuu tekniikkaan nimeltään [method chaining](http://en.wikipedia.org/wiki/Method_chaining) eli metodien ketjutukseen. Metodit jotka ovat muuten luonteeltaan void:eja onkin laitettu palauttamaan rakentajaolio. Tämä taas mahdollistaa metodin kutsumisen toisen metodin palauttamalle rakentajalle, ja näin metodikutsuja voidaan ketjuttaa peräkkäin mielivaltainen määrä. Metodiketjutuksen motivaationa on yleensä saada olion rajapinta käytettävyydeltään mahdollisimman luonnollisen kielen kaltaiseksi DSL:ksi. 

Tällä tekniikalla toteutetuista rajapinnoista käytetään myös nimitystä
[fluent interface](https://martinfowler.com/bliki/FluentInterface.html).

## Adapteri

Äsken käsiteltyjen suunnittelmallien, dekoraattorin, komposiitin ja proxyn yhteinen puoli on, että saman ulkokuoren eli rajapinnan takana voi olla yhä monimutkaisempaa toiminnallisuutta joka on kuitenkin täysin kapseloitu käyttäjältä.

Nyt tarkastelemme tilannetta, jossa meillä on käytettävissä luokka joka oleellisesti ottaen tarjoaa haluamamme toiminnallisuuden, mutta sen rajapinta on hieman vääränlainen. Emme kuitenkaan voi muuttaa alkuperäistä luokkaa sillä muutos rikkoisi luokan muut käyttäjät.

[Adapteri](http://sourcemaking.com/design_patterns/adapter)-suunnittelumalli sopii tälläisiin tilanteisiin. 

Tehdään aiemmasta esimerkistä tutulle Pinolle adapteri HyväPino joka muuttaa metodien nimiä ja tarjoaa muutaman lisätoiminnallisuuden:

``` java
public class HyväPino {
    private Pino pino;

    public HyväPino() {
        pino = new Pino();
    }

    public boolean onTyhja(){
        return pino.empty();
    }

    public boolean eiOleTyhja(){
        return !onTyhja();
    }

    public void pinoon(String pinottava){
        pino.push(pinottava);
    }

    public void pinoon(String... pinottavat){
        for (String pinottava : pinottavat) {
            pinoon(pinottava);
        }
    }

    public String pinosta(){
        return pino.pop();
    }

    public List<String> kaikkiPinosta(){
        ArrayList<String> alkiot = new ArrayList<>();

        while(eiOleTyhja()){
            alkiot.add(pinosta());
        }

        return alkiot;
    }
}
```

Eli adapteri __HyväPino__ kapseloi adaptoitavan Pino-olion jolle se delegoi kaikkien metodiensa toiminnallisuuden suorittamisen. Käyttäjä tuntee vaan HyväPino-luokan:


``` java
public static void main(String[] args) {
    HyväPino pino = new HyväPino();
    pino.pinoon("eka", "toka", "kolmas", "neljäs");

    System.out.println("pinossa oli: ");
    for (String alkio : pino.kaikkiPinosta()) {
        System.out.println( alkio );
    }
}
```

### Toisteettomuus

Käsittelimme koodin laatuattribuuteista kapselointia, koheesiota ja riippuvuuksien vähäisyyttä, seuraavana vuorossa redundanssi eli toisteisuus
Aloittelevaa ohjelmoijaa pelotellaan toisteisuuden vaaroista uran ensiaskelista alkaen: älä copypastaa koodia!
Alan piireissä toisteisuudesta varoittava periaate kulkee nimellä DRY, don't repeat yourself
"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."
http://c2.com/cgi/wiki?DontRepeatYourself
DRY-periaate menee oikeastaan vielä paljon pelkkää koodissa olevaa toistoa eliminointia pidemmälle

Ilmeisin toiston muoto koodissa on juuri copypaste ja se onkin helppo eliminoida esim. metodien avulla
Kaikki toisteisuus ei ole yhtä ilmeistä ja monissa suunnittelumalleissa on kyse juuri hienovaraisempien toisteisuuden muotojen eliminoinnista

Lisää koodin laatuattribuutteja: DRY
 
#### 

## Koodissa olevan epätriviaalin copypasten poistaminen Strategy-patternin avulla, Java 8:a hyödyntävä versio

Tarkastellaan [Project Gutenbergistä](http://www.gutenberg.org/) löytyvien kirjojen sisällön analysointiin tarkoitettua luokkaa <code>GutenbergLukija</code>:

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

Luokalla on kolme metodia, kaikki kirjan rivit palauttava <code>rivit</code> sekä <code>rivitJotkaPaattyvatHuutomerkkiin</code> ja <code>rivitJoillaSana(String sana)</code> jotka toimivat kuten metodin nimi antaa ymmärtää.

Luokkaa käytetään seuraavasti:

```java
public static void main(String[] args) {
    String osoite = "https://www.gutenberg.org/files/2554/2554-0.txt";
    GutenbergLukija kirja = new GutenbergLukija(osoite);

    for( String rivi : kirja.rivitJoillaSana("beer") ) {
        System.out.println(rivi)
    }
}
```

Tutustutaan tehtävässä hieman [Java 8:n](http://docs.oracle.com/javase/8/docs/api/) tarjoamiin uusiin ominaisuuksiin. Monelle Java 8 on jo tuttu Ohjelmoinnin perusteiden ja jatkokurssin uudemmista versiosta.

Voimme korvata listalla olevien merkkijonojen tulostamisen kutsumalla listoilla (tarkemmin sanottuna rajapinnan [Interable](http://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)-toteuttavilla) olevaa metodia <code>forEach</code> joka mahdollistaa listan alkioiden läpikäynnin "funktionaaliseen" tyyliin. Metodi saa parametrikseen "functional interfacen" (eli rajapinnan, joka määrittelee ainoastaan yhden toteutettavan metodin) toteuttavan olion. Tälläisiä ovat Java 8:ssa myös ns. lambda-lausekkeet (lambda expression), joka tarkoittaa käytännössä anonyymia mihinkään luokkaan liittymätöntä metodia.  Seuraavassa metodin palauttavien kirjan rivien tulostus forEachia ja lambdaa käyttäen:

``` java
public static void main(String[] args) {
    String osoite = "https://www.gutenberg.org/files/2554/2554-0.txt";
    GutenbergLukija kirja = new GutenbergLukija(osoite);

    kirja.rivitJoillaSana("beer").forEach(s->System.out.println(s));
}
```

Esimerkissä lambdan syntaksi oli seuraava:

``` java
s -> System.out.println(s)
```

parametri <code>s</code> saa arvokseen yksi kerrallaan kunkin läpikäytävän tekstirivin. Riveille suoritetaan "nuolen" oikealla puolella oleva tulostuskomento. Lisää lambdan syntaksista [täältä](http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html). Huomionarvoista on se, että lambdan parametrin eli muuttujan <code>s</code> tyyppiä ei tarvitse määritellä, kääntäjä osaa päätellä sen iteroitavana olevan kokoelman perusteella.

Luokan <code>GutenbergLukija</code> tarjoamat 3 kirjan sisällön hakemiseen tarkoitettua metodia ovat selvästi rakenteeltaan hyvin samantapaisia. Kaikki käyvät jokaisen kirjan rivin läpi ja palauttavat niistä osan (tai kaikki) metodin kutsujalle. Metodit eroavat sen suhteen mitä kirjan riveistä ne palauttavat. Voidaankin ajatella, että jokaisessa metodissa on oma _strategiansa_ rivien palauttamiseen. Eriyttämällä rivien valintastrategia omaksi luokakseen, voitaisiin selvitä ainoastaan yhdellä rivien läpikäynnin hoitavalla metodilla.

Määritellään rivien valintaa varten rajapinta:

``` java
public interface Ehto {
    boolean test(String rivi);
}
```

Huom: metodin nimen valinta ei ollut täysin sattumanvarainen. Tulemme myöhemmin määrittelemään, että rajapinta <code>Ehto</code> laajentaa rajapinnan, joka vaatii että rajapinnalla on nimenomaan <code>test</code>-niminen metodi.

Ideana on luoda jokaista kirjojen erilaista _hakuehtoa_ kohti oma rajapinnan <code>Ehto</code> toteuttava luokka.

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
ehto.test("Java 8 ilmestyi 18.3.2014");
```

Ensimmäinen metodikutsuista palauttaisi _true_ ja jälkimäinen _false_.

Kirjasta voidaan nyt palauttaa oikean ehdon täyttävät sanat lisäämällä luokalle <code>GutenbergLukija</code> metodi:

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
    kirja.rivitJotkaTayttavatEhdon(new SisaltaaSanan("beer")).forEach(s->System.out.println(s));
```

Pääsemmekin sopivien ehto-luokkien määrittelyllä eroon alkuperäisistä rivien hakumetodeista. Sovellus tulee sikälikin huomattavasti joustavammaksi, että uusia hakuehtoja voidaan helposti lisätä määrittelemällä uusia rajapinnan <code>Ehto</code> määritteleviä luokkia.

Ehto-rajapinta on ns. _functional interface_ eli se määrittelee ainoastaan yhden toteutettavan metodin (huom: Java 8:ssa rajapinnat voivat määritellä myös [oletusarvoisen toteutuksen](http://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html) sisältämiä metodeja!). Java 8:n aikana voimme määritellä ehtoja myös lambda-lausekkeiden avulla. Eli ei ole välttämätöntä tarvetta määritellä eksplisiittisesti rajapinnan <code>Ehto</code> toteuttavia luokkia. Seuraavassa edellinen esimerkki käyttäen lambda-lauseketta ehdon määrittelemiseen:

``` java
kirja.rivitJotkaTayttavatEhdon(s->s.contains("beer")).forEach(s->System.out.println(s));
```

Käytännössä siis määrittelemme "lennossa" rajapinnan <code>Ehto</code> toteuttavan luokan, jonka ainoan metodin toiminnallisuuden määritelmä annetaan lambda-lausekkeen avulla.

Lambdojen avulla on helppoa määritellä mielivaltaisia ehtoja. Seuraavassa tulostetaan kaikki rivit, joilla esiintyy jompi kumpi sanoista _beer_ tai _vodka_. Ehdon ilmaiseva lambda-lauseke on nyt määritelty selvyyden vuoksi omalla rivillään:

``` java
Ehto ehto = s -> s.contains("beer") || s.contains("vodka");

kirja.rivitJotkaTayttavatEhdon(ehto).forEach(s->System.out.println(s));
```

Voimme hyödyntää Java 8:n uusia piirteitä myös luokan <code>GutenbergLukija</code> metodissa <code>rivitJotkaTayttavatEhdon</code>.

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

Java 8:ssa kaikki rajapinnan <code>Collection</code> toteuttavat luokat mahdollistavat alkioidensa käsittelyn <code>Stream</code>:ina eli "alkiovirtoina", ks. [API-kuvaus](http://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html). Kokoelmaluokasta saadaan sitä vastaava alkiovirta kutsumalla kokoelmalle metodia <code>stream</code>.

Alkiovirtoja on taas mahdollista käsitellä monin tavoin, ja meitä nyt kiinnostava metodi on <code>filter</code>, jonka avulla streamistä voidaan tehdä uusi streami, josta on poistettu ne alkiot, jotka eivät täytä filtterille annettua boolean-arvoista, funktionaalisen rajapinnan <code>Predicate<String></code> toteuttavaa ehtoa.

Määrittelemämme rajapinta <code>Ehto</code> on oikeastaan juuri tarkoitukseen sopiva, jotta voisimme käyttää rajapintaa, tulee meidän kuitenkin tyyppitarkastusten takia määritellä että rajapintamme laajentaa rajapintaa  <code>Predicate<String></code>:

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

Metodin tulee palauttaa filtteröidyn streamin alkioista koostuva lista. Stream saadaan muutettua listaksi "keräämällä" sen sisältämät alkiot kutsumalla streamille metodia <code>collect</code> ja määrittelemällä, että palautetaan streamin sisältämät alkiot niemenomaan listana. Näin luotu filtteröity lista voidaan sitten palauttaa metodin kutsujalle.

Metodi on siis seuraavassa:

``` java
public List<String> rivitJotkaTayttavatEhdon(Ehto ehto) {
    return rivit.stream().filter(ehto).collect(Collectors.toList());
}
```

Kuten huomaamme, Javan version 8 tarjoamat funktionaaliset piirteet muuttavat lähes vallankumouksellisella tavalla kielen ilmaisuvoimaa!



### Testattavuus

Koodin selkeys ja luettavuus
Suuri osa "ohjelmointiin" kuluvasta ajasta kuluu olemassaolevan koodin (joko kehittäjän itsensä tai jonkun muun kirjoittaman) lukemiseen
 
Hyvä koodi on helppo testata kattavasti iyksikkö- ja integraatiotestein
Helppo testattavuus seuraa yleensä siitä, että koodi koostuu löyhästi kytketyistä, selkeän vastuun omaavista komponenteista ja ei sisällä toisteisuutta
Kääntäen, jos koodin kattava testaaminen on vaikeaa, on se usein seurausta siitä, että olioiden vastuut eivät ole selkeät, olioilla on liikaa riippuvuuksia ja toisteisuutta on paljon
Olemme pyrkineet jo ensimmäiseltä viikolta asti koodin hyvään testattavuuteen esim. purkamalla riippuvuuksia rajapintojen ja dependency injectionin avulla

### Selkeys
 
Perinteisesti ohjelmakoodin on ajateltu olevan väkisinkin kryptistä ja vaikeasti luettavaa
Esim. c-kielessä on tapana ollut kirjoittaa todella tiivistä koodia, jossa yhdellä rivillä on ollut tarkoitus tehdä mahdollisimman monta asiaa
Metodikutsuja on vältetty tehokkuussyistä
Muistinkäyttöä on optimoitu uusiokäyttämällä muuttujia ja "koodaamalla" dataa bittitasolla
...
Ajat ovat muuttuneet ja nykytrendin mukaista on pyrkiä kirjoittamaan koodia, joka nimennällään ja muodollaan ilmaisee mahdollisimman hyvin sen mitä koodi tekee
Selkeän nimennän lisäksi muita luettavan eli "puhtaan" koodin (clean code) tunnusmerkkejä ovat jo monet meille entuudestaan tutut asiat
www.planetgeek.ch/wp-content/uploads/2011/02/Clean-Code-Cheat-Sh eet-V1.3.pdf

### Suunnittelumalleja

Suunnittelumallit siis tarjoavat hyviä kooditason ratkaisuja siitä, miten koodi kannattaa muotoilla, jotta siitä saadaan sisäiseltä laadultaan hyvää, eli kapseloitua, hyvän koheesion omaavaa ja eksplisiittiset turhat riippuvuudet välttävää
Kurssin itseopiskelumateriaalissa tutustutaan seuraaviin suunnittelumalleihin
Factory
Strategy Command Template method Komposiitti Proxy
Model view controller
Observer
Sunnittelumallien soveltamista harjoitellaan viikon 5-7 laskareissa
Itseopiskelumateriaali löytyy osoitteesta
https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/web/oliosuun nittelu.md

Arkkitehtuurin yhteydessä mainitsimme kerrosarkkitehtuurin, josta esimerkkinä oli Kumpula biershopin arkkitehtuuri
Kerroksittaisuudessa periaate on sama kuin useiden suunnittelumallien ja hyvän oliosuunnittelussa yleensäkin kapseloidaan monimutkaisuutta ja detaljeja rajapintojen taakse
Tarkoituksena ylläpidettävyyden parantaminen ja kompleksisuuden hallinnan helpottaminen
Kerroksen N käyttäjää on turha vaivata kerroksen sisäisellä rakenteella
Eikä sitä edes kannata paljastaa, koska näin muodostuisi eksplisiittinen riippuvuus käyttäjän ja N:n välille

Pyrkimys siihen että kerrokset ovat mahdollisimman korkean koheesion omaavia, eli "yhteen asiaan" keskittyvä
Käyttöliittymä Tietokantayhteydet Liiketoimintalogiikka

Kerrokset taas ovat keskenään mahdollisimman löyhästi kytkettyjä
 
Kapselointi ja koheesio ja riippuvuuksien minimointi arkkitehtuuritasolla

### Domain Driven Design

Viimeaikaisena voimakkaasti nousevana trendinä on käyttää sovelluksen koodin tasolla nimentää, joka vastaa liiketoiminta-alueen eli "bisnesdomainin" terminologiaa
Yleisnimike tälle tyylille on Domain Driven Design, DDD
ks esim. http://www.infoq.com/articles/ddd-evolving-architecture

Ohjelmiston arkkitehtuurissa on DDD:tä sovellettaessa (ja muutenkin kerrosarkkitehtuuria sovellettaessa) on kerros joka kuvaa domainin, eli sisältää liiketoimintaoliot
Esim. Kumpula Biershopin domain-oliot:
Tuote
Varasto
Ostos
Ostoskori Asiakas Ostostapahtuma
  
Domain Driven Design Domain-oliot tai osa niistä yleensä mäpätään tietokantaan
Mäppäyksessä käytetään usein DAO-suunnittelumallia, johon tutustuimme ohimennen laskareissa 3
DAO-suunnittelumallia käsitellään nykyään jossain määrin myös kurssilla Tietokantojen perusteet


Domain-oliot tietokantaan mäppäävät komponentit muodostavat oman kerroksen kerrosarkkitehtuurissa
Joissain suunnittelutyyleissä Domain-olioiden ja sovelluksen käyttöliittymän välissä on vielä erillinen palveluiden kerros
http://martinfowler.com/eaaCatalog/serviceLayer.html
Wepaa käyville Service Layer on tuttu Java Spring:illä tehdyistä web- sovelluksista

Palvelut koordinoivat domain-olioille suoritettavaa toiminnallisuutta, esim. ostoksen laitto ostoskoriin tai ostosten maksaminen

Ideana on eristää palveluiden avulla sovelluslogiikka käyttöliittymältä

DAO:n lisäksi on muitakin mäppäystapoja, kuten Ruby on Railsin käyttämä Active Record
 
### Tekninen velka

Edellisten kalvojen aikana tutustuimme moniin ohjelman sisäistä laatua kuvaaviin attribuutteihin:
kapselointi, koheesio, riippuvuuksien vähäisyys, testattavuus, luettavuus

Tutustuimme myös yleisiin periaatteisiin, joiden noudattaminen auttaa päätymään laadukkaaseen koodiin
single responsibility principle, program to interfaces, favor composition over inheritance, don't repeat yourself

Itseopiskelumateriaalissa esitellään suunnittelumalleja (design patterns), jotka tarjoavat tiettyihin sovellustilanteisiin sopivia yleisiä ratkaisumalleja
Koodi ja oliosuunnittelu ei ole aina hyvää, ja joskus on jopa asiakkaan kannalta tarkoituksenmukaista tehdä "huonoa" koodia
Huonoa oliosuunnittelua ja huonon koodin kirjoittamista on verrattu velan (engl. design debt tai technical debt) ottamiseen
http://www.infoq.com/articles/technical-debt-levison
 
Piittaamattomalla ja laiskalla ohjelmoinnilla/suunnittelulla saadaan ehkä nopeasti aikaan jotain, mutta hätäinen ratkaisu tullaan maksamaan korkoineen takaisin myöhemmin jos ohjelmaa on tarkoitus laajentaa
Käytännössä käy niin, että tiimin velositeetti laskee, koska teknistä velkaa on maksettava takaisin, jotta järjestelmään saadaan toteutettua uusia ominaisuuksia

Jos korkojen maksun aikaa ei koskaan tule, ohjelma on esim. pelkkä prototyyppi tai sitä ei oteta koskaan käyttöön, voi "huono koodi" olla asiakkaan kannalta kannattava ratkaisu
Esim. uuden ominaisuuden käyttökelpoisuuden validointiin toteutettava minimal viable product (MVP) on luonteeltaan sellainen, että sitä tehdessä otetaan tietoisesti teknistä velkaa

Vastaavasti joskus voi lyhytaikaisen teknisen velan ottaminen olla järkevää tai jopa välttämätöntä
Esim. voidaan saada tuote nopeammin markkinoille tekemällä tietoisesti huonoa designia, joka korjataan myöhemmin
 
Tekninen velka Tekniselle velalle on yritetty jopa arvioida hintaa:
http://www.infoq.com/news/2012/02/tech-debt-361

Teknisen velan takana voi siis olla monenlaisia syitä, esim. holtittomuus, osaamattomuus, tietämättömyys tai tarkoituksella tehty päätös

Kaikki tekninen velka ei ole samanlaista, Martin Fowler jaottelee teknisen velan neljään eri luokkaan:
Reckless and deliberate: "we do not have time for design" Reckless and inadverent: "what is layering"?
Prudent and inadverent: "now we know how we should have done it"
Prudent and deliberate: "we must ship now and will deal with consequences"
http://martinfowler.com/bliki/TechnicalDebtQuadrant.html

### code smell

Koodi haisee: merkki huonosta suunnittelusta Seuraavassa alan ehdoton asiantuntija Martin Fowler selittää mistä on
kysymys koodin hajuista:
A code smell is a surface indication that usually corresponds to a deeper problem in the system. The term was first coined by Kent Beck while helping me with my Refactoring book.
The quick definition above contains a couple of subtle points. Firstly a smell is by definition something that's quick to spot - or sniffable as I've recently put it. A long method is a good example of this - just looking at the code and my nose twitches if I see more than a dozen lines of java.
The second is that smells don't always indicate a problem. Some long methods are just fine. You have to look deeper to see if there is an underlying problem there - smells aren't inherently bad on their own - they are often an indicator of a problem rather than the problem themselves.
One of the nice things about smells is that it's easy for inexperienced people to spot them, even if they don't know enough to evaluate if there's a real problem or to correct them. I've heard of lead developers who will pick a "smell of the week" and ask people to look for the smell and bring it up with the senior members of the team. Doing it one smell at a time is a good way of gradually teaching people on the team to be better programmers.

Koodihajuja Koodihajuja on hyvin monenlaisia ja monentasoisia
On hyvä oppia tunnistamaan ja välttämään tavanomaisimpia
Internetistä löytyy paljon hajulistoja, esim:
http://sourcemaking.com/refactoring/bad-smells-in-code http://c2.com/xp/CodeSmell.html http://www.codinghorror.com/blog/2006/05/code-smells.html

Muutamia esimerkkejä helposti tunnistettavista hajuista:
Duplicated code (eli koodissa copy pastea...) Methods too big
Classes with too many instance variables Classes with too much code
Long parameter list
Uncommunicative name
Comments (eikö kommentointi muka ole hyvä asia?)

Seuraavassa pari ei ehkä niin ilmeistä tai helposti tunnistettavaa koodihajua
Primitive obsession
Don't use a gaggle of primitive data type variables as a poor man's substitute for a class. If your data type is sufficiently complex, write a class to represent it.
http://sourcemaking.com/refactoring/primitive-obsession

Shotgun surgery
If a change in one class requires cascading changes in several related classes, consider refactoring so that the changes are limited to a single class.
http://sourcemaking.com/refactoring/shotgun-surgery

### refaktorointi

Lääke koodihajuun on refaktorointi eli muutos koodin rakenteeseen joka kuitenkin pitää koodin toiminnan ennallaan
Erilaisia koodin rakennetta parantavia refaktorointeja on lukuisia
ks esim. http://sourcemaking.com/refactoring
Muutama käyttökelpoinen nykyaikaisessa kehitysympäristössä (esim
NetBeans, Eclipse, IntelliJ) automatisoitu refaktorointi:
Rename method (rename variable, rename class)
Eli uudelleennimetään huonosti nimetty asia

Extract superclass
–
Koodin refaktorointi
Extract method
Jaetaan liian pitkä metodi erottamalla siitä omia apumetodejaan
Extract interface
Luodaan luokan julkisia metodeja vastaava rajapinta, jonka avulla voidaan purkaa olion käyttäjän ja olion väliltä konkreettinen riippuvuus
–
Luodaan yliluokka, johon siirretään osa luokan toiminnallisuudesta

Refaktoroinnin melkein ehdoton edellytys on kattavien testien olemassaolo
Refaktoroinninhan on tarkoitus ainoastaan parantaa luokan tai komponentin sisäistä rakennetta, ulospäin näkyvän toiminnallisuuden pitäisi pysyä muuttumattomana

Kannattaa ehdottomasti edetä pienin askelin
Yksi hallittu muutos kerrallaan
Testit on ajettava mahdollisimman usein ja varmistettava että mikään ei mennyt rikki

Refaktorointia kannattaa suorittaa lähes jatkuvasti
Koodin ei kannata antaa "rapistua" pitkiä aikoja, refaktorointi muuttuu vaikeammaksi
Lähes jatkuva refaktorointi on helppoa, pitää koodin rakenteen selkeänä ja helpottaa sekä nopeuttaa koodin laajentamista

Osa refaktoroinneista, esim. metodien tai luokkien uudelleennimentä tai pitkien metodien jakaminen osametodeiksi on helppoa, aina ei näin ole
Joskus on tarve tehdä isoja refaktorointeja joissa ohjelman rakenne eli arkkitehtuuri muuttuu