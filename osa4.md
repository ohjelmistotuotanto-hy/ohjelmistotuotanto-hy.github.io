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
 
Ketterien menetelmien kantava teema on toimivan, asiakkaalle arvoa tuottavan ohjelmiston nopea toimittaminen (agile manifestin periaatteita):
Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.

Ketterät menetelmät suosivat yksinkertaisuutta suunnitteluratkaisuissa
Simplicity, the art of maximizing the amount of work not done, is essential
YAGNI eli ”you are not going to need it”-periaate

Arkkitehtuuriin suunnittelu ja dokumentointi on perinteisesti ollut melko pitkäkestoinen, ohjelmoinnin aloittamista edeltävä vaihe
BUFD eli Big Up Front Design

Ketterät menetelmät ja ”arkkitehtuurivetoinen” ohjelmistotuotanto ovat siis jossain määrin keskenään ristiriidassa

Arkkitehtuuri ketterissä menetelmissä
 
Arkkitehtuuri ketterissä menetelmissä Ketterien menetelmien yhteydessä puhutaan inkrementaalisesta tai
evolutiivisesta suunnittelusta ja arkkitehtuurista
Arkkitehtuuri mietitään riittävällä tasolla projektin alussa
Jotkut projektit alkavat ns. nollasprintillä ja alustava arkkitehtuuri määritellään tällöin
Scrumin varhaisissa artikkeleissa puhuttiin ”pre game”-vaiheesta jolloin mm. alustava arkkitehtuuri luodaan
Sittemmin koko käsite on hävinnyt Scrumista ja Ken Schwaber (Scrumin kehittäjä) jopa eksplisiittisesti kieltää ja tyrmää koko ”nollasprintin” olemassaolon: http://www.scrum.org/assessmentdiscussion/post/1317787

Ohjelmiston ”lopullinen” arkkitehtuuri muodostuu iteraatio iteraatiolta samalla kun ohjelmaan toteutetaan uutta toiminnallisuutta
Esim. kerrosarkkitehtuurin mukaista sovellusta ei rakenneta ”kerros kerrallaan”
Jokaisessa iteraatiossa tehdään pieni pala jokaista kerrosta, sen verran kuin iteraation toiminnallisuuksien toteuttaminen edellyttää

Walking skeleton
Yleinen lähestymistapa inkrementaaliseen arkkitehtuuriin on walking
skeletonin käyttö
A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function. It need not use the final architecture, but it should link together the main architectural components.
The architecture and the functionality can then evolve in parallel.
What constitutes a walking skeleton varies with the system being designed
For a layered architecture system, it is a working connection between all the layers

Katso lisää esim http://alistair.cockburn.us/Walking+skeleton

The walking skeleton is not complete or robust and it is missing the flesh of the application functionality. Incrementally, over time, the infrastructure will be completed and full functionality will be added
A walking skeleton, is permanent code, built with production coding habits, regression tests, and is intended to grow with the system
Eli tarkoitus on toteuttaa arkkitehtuurin rungon sisältävä Walking skeleton jo ensimmäisessä sprintissä ja kasvattaa se pikkuhiljaa projektin edetessä
 
Perinteisesti arkkitehtuurista on vastannut ohjelmistoarkkitehti ja ohjelmoijat ovat olleet velvoitettuja noudattamaan arkkitehtuuria
Ketterissä menetelmissä ei suosita erillistä arkkitehdin roolia, esim. Scrum käyttää kaikista ryhmän jäsenistä nimikettä developer
Ketterien menetelmien ideaali on, että kehitystiimi luo arkkitehtuurin yhdessä, tämä on myös yksi agile manifestin periaatteista:
The best architectures, requirements, and designs emerge from self- organizing teams.

Arkkitehtuuri on siis koodin tapaan tiimin yhteisomistama, tästä on muutamia etuja
Kehittäjät sitoutuvat paremmin arkkitehtuurin noudattamiseen kuin ”norsunluutornissa” olevan tiimin ulkopuolisen arkkitehdin määrittelemään arkkitehtuuriiin
Arkkitehtuurin dokumentointi voi olla kevyt ja informaali (esim. valkotaululle piirretty) sillä tiimi tuntee joka tapauksessa arkkitehtuurin hengen ja pystyy sitä noudattamaan

 
Ketterissä menetelmissä oletuksena on, että parasta mahdollista arkkitehtuuria ei pystytä suunnittelemaan projektin alussa, kun vaatimuksia, toimintaympäristöä ja toteutusteknologioita ei vielä tunneta
Jo tehtyjä arkkitehtonisia ratkaisuja muutetaan tarvittaessa

Eli kuten vaatimusmäärittelyn suhteen, myös arkkitehtuurin suunnittelussa ketterät menetelmät pyrkii välttämään liian aikaisin tehtävää ja myöhemmin todennäköisesti turhaksi osoittautuvaa työtä
Inkrementaalinen lähestymistapa arkkitehtuurin muodostamiseen edellyttää koodilta hyvää sisäistä laatua ja toteuttajilta kurinalaisuutta
Martin Fowler http://martinfowler.com/articles/designDead.html:
Essentially evolutionary design means that the design of the system grows as the system is implemented. Design is part of the program- ming processes and as the program evolves the design changes.
In its common usage, evolutionary design is a disaster. The design ends up being the aggregation of a bunch of ad-hoc tactical decisions, each of which makes the code harder to alter


## Olio/komponenttisuunnittelu
 
Käytettäessä ohjelmiston toteutukseen olio-ohjelmointikieltä, on suunnitteluvaiheen tarkoituksena löytää sellaiset oliot, jotka pystyvät yhteistoiminnallaan toteuttamaan järjestelmän vaatimuksen
Jos käytössä jotain muuta paradigmaa käyttävä kieli, tässä suunnittelun vaiheessa suunnitellaan kielen paradigman tukevat rakennekomponentit, esim. funktiot, aliohjelmat, moduulit...

Komponenttisuunnittelua ohjaa ohjelmistolle suunniteltu arkkitehtuuri
Ohjelman ylläpidettävyyden kannalta on suunnittelussa hyvä noudattaa ”ikiaikaisia” hyvän suunnittelun käytänteitä
Ketterissä menetelmissä tämä on erityisen tärkeää, sillä jos ohjelman rakenne pääsee rapistumaan, on ohjelmaa vaikea laajentaa jokaisen sprintin aikana

Ohjelmiston suunnitteluun on olemassa useita erilaisia menetelmiä, mikään niistä ei kuitenkaan ole vakiintunut
Ohjelmistosuunnittelu onkin ”enemmän taidetta kuin tiedettä”, kokemus ja hyvien käytänteiden opiskelu toki auttaa
Erityisesti ketterissä menetelmissä tarkka suunnittelu tapahtuu yleensä vasta ohjelmoitaessa

Olio/komponenttisuunnittelu
 
Emme keskity kurssilla mihinkään yksittäiseen suunnittelumenetelmään, vaan tutustumme eräisiin tärkeisiin menetelmäriippumattomiin teemoihin:
Laajennettavuuden ja ylläpidettävyyden suhteen laadukkaan koodin/oliosuunnittelun tunnusmerkkeihin ja laatuattribuutteihin ja niitä tukeviin ”ikiaikaisiin” hyvän suunnittelun periaatteisiin
Koodinhajuihin eli merkkeihin siitä että suunnittelussa ei kaikki ole kunnossa
Refaktorointiin eli koodin rajapinnan ennalleen jättävään rakenteen parantamiseen
Erilaisissa tilanteissa toimiviksi todettuihin geneerisiä suunnitteluratkaisuja dokumentoiviin suunnittelumalleihin
Olemme jo nähneet muutamia suunnittelumalleja, ainakin seuraavat: dependency injection, singleton, data access object
Suuri osa tällä kurssilla kohtaamistamme suunnittelumalleista on syntynyt olio- ohjelmointikielten parissa. Osa suunnittelumalleista on relevantteja myös muita paragigmoja, kuten funktionaalista ohjelmointia käytettäessa
Muilla paradigmoilla on myös omia suunnittelumallejaan, mutta niitä emme kurssilla käsittele

Olio/komponenttisuunnittelu
 
Helposti ylläpidettävän koodin tunnusmerkit Ylläpidettävyyden ja laajennettavuuden kannalta tärkeitä seikkoja
Koodin tulee olla luettavuudeltaan selkeää, eli koodin tulee kertoa esim. nimennällään mahdollisimman selkeästi mitä koodi tekee, eli tuoda esiin koodin alla oleva ”design”
Yhtä paikkaa pitää pystyä muuttamaan siten, ettei muutoksesta aiheudu sivuvaikutuksia sellaisiin kohtiin koodia, jota muuttaja ei pysty ennakoimaan
Jos ohjelmaan tulee tehdä laajennus tai bugikorjaus, tulee olla helppo selvittää mihin kohtaan koodia muutos tulee tehdä
Jos ohjelmasta muutetaan ”yhtä asiaa”, tulee kaikkien muutosten tapahtua vain yhteen kohtaan koodia (metodiin tai luokkaan)
Muutosten ja laajennusten jälkeen tulee olla helposti tarkastettavissa ettei muutos aiheuta sivuvaikutuksia muualle järjestelmään


Näin määritelty koodin sisäinen laatu on erityisen tärkeää ketterissä menetelmissä, joissa koodia laajennetaan iteraatio iteraatiolta
Jos koodin sisäiseen laatuun ei kiinnitetä huomiota, on väistämätöntä että pidemmässä projektissa kehitystiimin velositeetti alkaa tippua ja eteneminen alkaa vaikeutua

Koodin sisäinen laatu on siis usein myös asiakkaan etu
 
Koodin laatuattribuutteja Edellä lueteltuihin hyvän koodin tunnusmerkkeihin päästään
kiinnittämällä huomio seuraaviin laatuattribuutteihin
Kapselointi
Koheesio
Riippuvuuksien vähäisyys Toisteettomuus Testattavuus
Selkeys

Tutkitaan nyt näitä laatuattribuutteja sekä periaatteita, joita noudattaen on mahdollista kirjoittaa koodia, joka on näiden mittarien mukaan laadukasta
HUOM seuraaviin kalvojen asioihin liittyy joukko koodiesimerkkejä, jotka löytyvät osoitteesta
https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/web/oli osuunnittelu.md
Koodiesimerkkejä ei käsitellä luennoilla, mutta on tarkoituksena, että luet ne viikojen 5 ja 6 laskareihin valmistautuessasi

Kapselointi Ohjelmointikursseilla on määritelty kapselointi seuraavasti
”Tapaa ohjelmoida olion toteutuksen yksityiskohdat luokkamäärittelyn sisään – piiloon olion käyttäjältä – kutsutaan kapseloinniksi. Olion käyttäjän ei tarvitse tietää mitään olioiden sisäisestä toiminnasta. Eikä hän itse asiassa edes saa siitä mitään tietää vaikka kuinka haluaisi!” (vanha ohpen materiaali)

Aloitteleva ohjelmoija assosioi kapseloinnin yleensä seuraavaan periaatteeseen:
Oliomuuttujat tulee määritellä privaateiksi ja niille tulee tehdä tarvittaessa setterit ja getterit

Tämä on kuitenkin aika kapea näkökulma kapselointiin
Itseopiskelumateriaalissa on paljon esimerkkejä monista kapseloinnin muista muodoista. Kapseloinnin kohde voi olla mm.
Käytettävän olion tyyppi, algoritmi, olioiden luomistapa, käytettävän komponentin rakenne

Monissa suunnittelumalleissa on kyse juuri eritasoisten asioiden kapseloinnista

Koheesiolla tarkoitetaan sitä, kuinka pitkälle metodissa, luokassa tai komponentissa oleva ohjelmakoodi on keskittynyt tietyn toiminnallisuuden toteuttamiseen
Hyvänä asiana pidetään mahdollisimman korkeaa koheesion astetta
Koheesioon tulee siis pyrkiä kaikilla ohjelman tasoilla, metodeissa, luokissa, komponenteissa ja jopa muuttujissa
Metoditason koheesiossa pyrkimyksenä että metodi tekee itse vain yhden asian
Luokkatason koheesiossa pyrkimyksenä on, että luokan vastuulla on vain yksi asia
Ohjelmistotekniikan menetelmistä tuttu Single Responsibility (SRP) -periaate tarkoittaa oikeastaan täysin samaa
Uncle Bob tarkentaa yhden vastuun määritelmää siten, että luokalla on yksi vastuu jos sillä on vain yksi syy muuttua

Vastakohta SRP:tä noudattavalle luokalle on jumalaluokka/olio
Koheesio ja Single responsibility -periaate

Single responsibility -periaatteen hengessä tehty ohjelma koostuu suuresta määrästä oliota/komponentteja, joilla on suuri määrä pieniä metodeja
Olioiden on siis oltava vuorovaikutuksessa toistensa kanssa saadakseen toteutettua ohjelman toiminnallisuuden
Riippuvuuksien vähäisyyden (engl. low coupling) periaate pyrkii eliminoimaan luokkien ja olioiden välisiä riippuvuuksia
Koska olioita on paljon, tulee riippuvuuksia pakostakin, miten riippuvuudet sitten saadaan eliminoitua?
Ideana on eliminoida tarpeettomat riippuvuudet ja välttää riippuvuuksia konkreettisiin asioihin
Riippuvuuden kannattaa kohdistua asiaan joka ei muutu herkästi, eli joko rajapintaan tai abstraktiin luokkaan

Sama idea kulkee parillakin eri nimellä
Program to an interface, not to an Implementation Depend on Abstractions, not on concrete implementation

Riippuvuuksien vähäisyys
 
Konkreettisen riippuvuuden eliminointi voidaan tehdä rajapintojen (tai abstraktien luokkien) avulla
Olemme tehneet näin kurssilla usein, mm. Verkkokaupan riippuvuus Varastoon, Pankkiin ja Viitegeneraattoriin korvattiin rajapinnoilla
Dependency Injection -suunnittelumalli toimi usein apuvälineenä konkreettisen riippumisen eliminoinnissa

Osa luokkien välisistä riippuvuuksista on tarpeettomia ja ne kannattaa eliminoida muuttamalla luokan vastuita
Perintä muodostaa riippuvuuden perivän ja perittävän luokan välille, tämä voi jossain tapauksissa olla ongelmallista
Yksi oliosuunnittelun kulmakivi on periaate Favour composition over inheritance eli suosi yhteistoiminnassa toimivia oliota perinnän sijaan
http://www.artima.com/lejava/articles/designprinciples4.html
Perinnällä on paikkansa, mutta sitä tulee käyttää harkiten Itseopiskelumateriaalissa on esimerkki ongelmallisesta perinnästä
 
Riippuvuuksien vähäisyys
 
Käsittelimme koodin laatuattribuuteista kapselointia, koheesiota ja riippuvuuksien vähäisyyttä, seuraavana vuorossa redundanssi eli toisteisuus
Aloittelevaa ohjelmoijaa pelotellaan toisteisuuden vaaroista uran ensiaskelista alkaen: älä copypastaa koodia!
Alan piireissä toisteisuudesta varoittava periaate kulkee nimellä DRY, don't repeat yourself
”Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.”
http://c2.com/cgi/wiki?DontRepeatYourself
DRY-periaate menee oikeastaan vielä paljon pelkkää koodissa olevaa toistoa eliminointia pidemmälle

Ilmeisin toiston muoto koodissa on juuri copypaste ja se onkin helppo eliminoida esim. metodien avulla
Kaikki toisteisuus ei ole yhtä ilmeistä ja monissa suunnittelumalleissa on kyse juuri hienovaraisempien toisteisuuden muotojen eliminoinnista

Lisää koodin laatuattribuutteja: DRY
 
Testattavuus

Koodin selkeys ja luettavuus
Suuri osa ”ohjelmointiin” kuluvasta ajasta kuluu olemassaolevan koodin (joko kehittäjän itsensä tai jonkun muun kirjoittaman) lukemiseen
 
Hyvä koodi on helppo testata kattavasti iyksikkö- ja integraatiotestein
Helppo testattavuus seuraa yleensä siitä, että koodi koostuu löyhästi kytketyistä, selkeän vastuun omaavista komponenteista ja ei sisällä toisteisuutta
Kääntäen, jos koodin kattava testaaminen on vaikeaa, on se usein seurausta siitä, että olioiden vastuut eivät ole selkeät, olioilla on liikaa riippuvuuksia ja toisteisuutta on paljon
Olemme pyrkineet jo ensimmäiseltä viikolta asti koodin hyvään testattavuuteen esim. purkamalla riippuvuuksia rajapintojen ja dependency injectionin avulla

Lisää laatuattribuutteja
 
Perinteisesti ohjelmakoodin on ajateltu olevan väkisinkin kryptistä ja vaikeasti luettavaa
Esim. c-kielessä on tapana ollut kirjoittaa todella tiivistä koodia, jossa yhdellä rivillä on ollut tarkoitus tehdä mahdollisimman monta asiaa
Metodikutsuja on vältetty tehokkuussyistä
Muistinkäyttöä on optimoitu uusiokäyttämällä muuttujia ja ”koodaamalla” dataa bittitasolla
...
Ajat ovat muuttuneet ja nykytrendin mukaista on pyrkiä kirjoittamaan koodia, joka nimennällään ja muodollaan ilmaisee mahdollisimman hyvin sen mitä koodi tekee
Selkeän nimennän lisäksi muita luettavan eli ”puhtaan” koodin (clean code) tunnusmerkkejä ovat jo monet meille entuudestaan tutut asiat
www.planetgeek.ch/wp-content/uploads/2011/02/Clean-Code-Cheat-Sh eet-V1.3.pdf

Koodin luettavuus
 
Suunnittelumallit siis tarjoavat hyviä kooditason ratkaisuja siitä, miten koodi kannattaa muotoilla, jotta siitä saadaan sisäiseltä laadultaan hyvää, eli kapseloitua, hyvän koheesion omaavaa ja eksplisiittiset turhat riippuvuudet välttävää
Kurssin itseopiskelumateriaalissa tutustutaan seuraaviin suunnittelumalleihin
Factory
Strategy Command Template method Komposiitti Proxy
Model view controller
Observer
Sunnittelumallien soveltamista harjoitellaan viikon 5-7 laskareissa
Itseopiskelumateriaali löytyy osoitteesta
https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/web/oliosuun nittelu.md

Suunnittelumalleja
 
Arkkitehtuurin yhteydessä mainitsimme kerrosarkkitehtuurin, josta esimerkkinä oli Kumpula biershopin arkkitehtuuri
Kerroksittaisuudessa periaate on sama kuin useiden suunnittelumallien ja hyvän oliosuunnittelussa yleensäkin kapseloidaan monimutkaisuutta ja detaljeja rajapintojen taakse
Tarkoituksena ylläpidettävyyden parantaminen ja kompleksisuuden hallinnan helpottaminen
Kerroksen N käyttäjää on turha vaivata kerroksen sisäisellä rakenteella
Eikä sitä edes kannata paljastaa, koska näin muodostuisi eksplisiittinen riippuvuus käyttäjän ja N:n välille

Pyrkimys siihen että kerrokset ovat mahdollisimman korkean koheesion omaavia, eli ”yhteen asiaan” keskittyvä
Käyttöliittymä Tietokantayhteydet Liiketoimintalogiikka

Kerrokset taas ovat keskenään mahdollisimman löyhästi kytkettyjä
 
Kapselointi ja koheesio ja riippuvuuksien minimointi arkkitehtuuritasolla
  
Viimeaikaisena voimakkaasti nousevana trendinä on käyttää sovelluksen koodin tasolla nimentää, joka vastaa liiketoiminta-alueen eli ”bisnesdomainin” terminologiaa
Yleisnimike tälle tyylille on Domain Driven Design, DDD
ks esim. http://www.infoq.com/articles/ddd-evolving-architecture

Ohjelmiston arkkitehtuurissa on DDD:tä sovellettaessa (ja muutenkin kerrosarkkitehtuuria sovellettaessa) on kerros joka kuvaa domainin, eli sisältää liiketoimintaoliot
Esim. Kumpula Biershopin domain-oliot:
Tuote
Varasto
Ostos
Ostoskori Asiakas Ostostapahtuma
  
Domain Driven Design
 
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
 
Edellisten kalvojen aikana tutustuimme moniin ohjelman sisäistä laatua kuvaaviin attribuutteihin:
kapselointi, koheesio, riippuvuuksien vähäisyys, testattavuus, luettavuus

Tutustuimme myös yleisiin periaatteisiin, joiden noudattaminen auttaa päätymään laadukkaaseen koodiin
single responsibility principle, program to interfaces, favor composition over inheritance, don't repeat yourself

Itseopiskelumateriaalissa esitellään suunnittelumalleja (design patterns), jotka tarjoavat tiettyihin sovellustilanteisiin sopivia yleisiä ratkaisumalleja
Koodi ja oliosuunnittelu ei ole aina hyvää, ja joskus on jopa asiakkaan kannalta tarkoituksenmukaista tehdä ”huonoa” koodia
Huonoa oliosuunnittelua ja huonon koodin kirjoittamista on verrattu velan (engl. design debt tai technical debt) ottamiseen
http://www.infoq.com/articles/technical-debt-levison

Tekninen velka
 
Piittaamattomalla ja laiskalla ohjelmoinnilla/suunnittelulla saadaan ehkä nopeasti aikaan jotain, mutta hätäinen ratkaisu tullaan maksamaan korkoineen takaisin myöhemmin jos ohjelmaa on tarkoitus laajentaa
Käytännössä käy niin, että tiimin velositeetti laskee, koska teknistä velkaa on maksettava takaisin, jotta järjestelmään saadaan toteutettua uusia ominaisuuksia

Jos korkojen maksun aikaa ei koskaan tule, ohjelma on esim. pelkkä prototyyppi tai sitä ei oteta koskaan käyttöön, voi ”huono koodi” olla asiakkaan kannalta kannattava ratkaisu
Esim. uuden ominaisuuden käyttökelpoisuuden validointiin toteutettava minimal viable product (MVP) on luonteeltaan sellainen, että sitä tehdessä otetaan tietoisesti teknistä velkaa

Vastaavasti joskus voi lyhytaikaisen teknisen velan ottaminen olla järkevää tai jopa välttämätöntä
Esim. voidaan saada tuote nopeammin markkinoille tekemällä tietoisesti huonoa designia, joka korjataan myöhemmin

Tekninen velka
 
Tekninen velka Tekniselle velalle on yritetty jopa arvioida hintaa:
http://www.infoq.com/news/2012/02/tech-debt-361

Teknisen velan takana voi siis olla monenlaisia syitä, esim. holtittomuus, osaamattomuus, tietämättömyys tai tarkoituksella tehty päätös

Kaikki tekninen velka ei ole samanlaista, Martin Fowler jaottelee teknisen velan neljään eri luokkaan:
Reckless and deliberate: ”we do not have time for design” Reckless and inadverent: ”what is layering”?
Prudent and inadverent: ”now we know how we should have done it”
Prudent and deliberate: ”we must ship now and will deal with consequences”
http://martinfowler.com/bliki/TechnicalDebtQuadrant.html

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

Koodihajuja

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
Koodin ei kannata antaa ”rapistua” pitkiä aikoja, refaktorointi muuttuu vaikeammaksi
Lähes jatkuva refaktorointi on helppoa, pitää koodin rakenteen selkeänä ja helpottaa sekä nopeuttaa koodin laajentamista

Osa refaktoroinneista, esim. metodien tai luokkien uudelleennimentä tai pitkien metodien jakaminen osametodeiksi on helppoa, aina ei näin ole
Joskus on tarve tehdä isoja refaktorointeja joissa ohjelman rakenne eli arkkitehtuuri muuttuu