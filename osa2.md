---
layout: page
title: osa 2
inheader: yes
permalink: /osa2/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

# Viikko 2: Ohjelmistojen vaatimusmäärittely, tuotteen ja sprintin hallinta

Viikon aiheina ohjelmistojen vaatimusmäärittely erityisesti ketterien menetelmien menetelmät siihen. Käsittelemme myös hieman tuotteen hallintaa sekä koko projektin tasolla että sprintin aikana.

## Vaatimusmäärittely

Ehkä keskeisin ongelma ohjelmistotuotantoprosessissa on määritellä _asiakkaan vaatimukset_ (engl. requirements) rakennettavalle ohjelmistolle.

Ohjelmistojen vaatimusten ajatellaan jakaantuvat kahteen luokkaan. _Toiminnallisilla vaatimuksilla_ (engl. functional requirements), tarkoitetaan kaikkia niitä asioita mitä ohjelmistolla voi tehdä, eli ohjelmiston tarjoamia toimintoja. Toinen luokka ovat 
_ei-toiminnalliset vaatimukset_ (nonfunctional requirements), näitä ovat koko ohjelmistoa koskevat "laatuvaatimukset" (kuten käytettävyys ja tietoturva) ja ohjelmiston toimintaympäristön sille asettamat rajoitteet. 

Vaatimusten selvittämistä, dokumentoimista ja hallinnointia kutsutaan
_vaatimusmäärittelyksi_ (engl. requirements engineering). Käytettävästä prosessimallista riippumatta vaatimusmäärittelyn tulee ainakin alkaa ennen ohjelmiston suunnittelua ja toteuttamista. 

Lineaarisissa prosessimalleissa, eli vesiputousmallissa vaatimusmäärittely tehdään kokonaisuudessaan ennen ohjelmiston suunnittelua ja toteutusta. Iteratiivisessa ohjelmistokehityksessä vaatimusmäärittelya taas tapahtuu vähän kerrassaan ohjelmiston toiminnallisuuden kasvamisen myötä.
 
## Vaatimusmäärittelyn vaiheet

Vaatimusmäärittelyn luonne vaihtelee paljon riippuen kehitettävästä ohjelmistosta, kehittäjäorganisaatiosta ja ohjelmistokehitykseen käytettävästä prosessimallista. Joka tapauksessa loppukäyttäjän, asiakkaan tai asiakkaan edustajan on oltava prosessissa aktiivisesti mukana.

Vaatimusmäärittely jaotellaan yleensä muutamaan työvaiheeseen
- vaatimusten kartoitus (engl. elicitation) 
- vaatimusten analyysi
- vaatimusten validointi
- vaatimusten dokumentointi 
- vaatimusten hallinnointi
 
Useimmiten työvaiheet limittyvät ja vaatimusmäärittely etenee spiraalimaisesti tarkentuen, eli ensin kartoitetaan, analysoidaan ja dokumentoidaan osa vaatimuksista. Prosessia jatketaan kunnes haluttu määrä vaatimuksia on saatu dokumentoitua tarvittavalla tarkkuudella.
         
### Vaatimusten kartoituksen menetelmiä
  
Vaatimusmäärittelyn aluksi on syytä selittää järjestelmän _sidosryhmät_ (engl. stakeholders) eli tahot, jotka ovat suoraan tai epäsuorasti tekemisissä järjestelmän kanssa. Tälläisia ovat luonnolliseti ohjemiston aiotut loppukäyttäjät sekä ylläpitäjät,
tilaavan yrityksen päätösvaltaiset edustajat sekä esim. tarpeen tullen niiden tahojen edustajat, jotka ovat vastuussa tietojärjestelmistä, joiden kanssa määritteltävä ohjelmisto integroituu.

Kun eri sidosryhmät on karotitettu, käytetään "kaikki mahdolliset keinot" vaatimusten esiin kaivamiseen, esim.:
- haastatellaan sidosryhmien edustajia
- pidetään brainstormaussessioita asiakkaan ja sovelluskehitystiimin kesken
 
Alustavien keskustelujen jälkeen kehittäjätiimi voi yhdessä sidosryhmien edustajien kesken strukturoida vaatimusten kartoitusta. Usein mietitään mitä erilaisa _käyttäjärooleja_  sovelluksella on, ja keksitään eri käyttäjärooleille tyypillisä sovelluksen käyttöskenaarioita. 

Sovelluksesta kannattaa myös tehdä käyttöliittymäluonnoksia ja paperiprototyyppejä. Skenaarioita ja prototyyppejä tarkastelemalla ja läpikäymällä asiakas voi edelleen tarkentaa näkemystään vaatimuksista.

Jos kehitettävän sovelluksen on tarkoitus korvata olemassa oleva järjestelmä, voidaan vaatimuksia selvittää myös havainnoimalla loppukäyttäjän työskentelyä, tästä menetelmästä käytetään nimitystä _etnografia_.

Jos uuden sovelluksen on tarkoitus korvata olemassaoleva työskentelyprosessi, esimerkiksi tilanvarausjärjestelmä, on usein hyödyllistä tarkastella myös itse työskentelyprosessia ja koittaa miettiä sen suoraviivaistamista. Ei nimittäin ole useinkaan mielekästä toisintaa vanhaa, ehkä kankeaaki työskentelyprosessia sellaisenaan uuteen sovellukseen.
 
### Vaatimusten analysointi, dokumentointi ja validointi

Vaatimusten keräämisen lisäksi vaatimuksia täytyy analysoida. Onko vaatimuksissa keskinäisiä ristiriitoja ja ovatko ne riittävän kattavat, eli tottavatko ne huomioon kaikki mahdolliset käyttöskenaariot. On myös oleellista varmistaa, että vaatimusten toteutuminen on ylipäätään mahdollista ja taloudellisesti järkevää. 

Usein on myös järkevä varmistaa, että vaatimus on _todennettavissa_, eli että valmiista järjestelmästä pystytään ylipäätään toteamaan noudattaako järjestelmä vaatimusta. Esim. vaatimus _järjestelmä on helppokäyttöinen_ ei ole sikäli hyvä, että helppokäyttöisyyden testaaminen on vaikeaa. Käytettävyyteenkin liittyviä vaatimuksia on mahdollista määritellä [todennettavalla tavalla](http://www.pcuf.fi/sytyke/lehti/kirj/st20093/ST093-18A.pdf).
 
Kartoiteut vaatimukset on myös pakko _dokumentoida_ muodossa tai toisessa. Ennen koodaamaan ryhtymistä sovelluskehittäjä tarvitsee "speksin", eli kuvauksen siitä miten sovelluksen tulee toimia. Myös testaamista varten tarvitaan kuvaus sille miten testattavan ohjelman oletetaan toimivan.

Erityisesti vesiputousmallia sovellettaessa vaatimusdokumentti toimii oleellisena osana asiakkaan ja ohjelmistotuottajatiimin välisessä sopimuksessa. Sovelluksen hinta perustuu vaatimusmäärittelyssä kuvauttuun toiminnallisuuteen, ja jos asiakas muuttaakin mieltään, tulee siitä lisää kustannuksia. 
 
Vaatimukset on myös oleellista _validoida_, eli tulee varmistaa, että kerätyt ja dokumentoidut vaatimukset todellakin vastaavat asiakkaan mielipidettä, että ne 
kuvaavat sellaisen järjestelmät mitä asiakas kokee tarvitsevansa tarvitsee.
 
Vaatimuksia on myös tavalla tai toisella _hallinnoitava_, erityisesti jos vaatimukset muuttuvat kesken sovelluskehitysprosessin. 
   
Vaatimusmäärittelyprosessin luonne, eli miten vaatimukset kerätään, analysoidaan, dokumentoidaan, validoidaan ja miten niitä hallinnoidaan, siis vaihtelee paljon ohjelmistoprojektin luonteesta riippuen. Palaamme jatkossa vielä hieman tarkemmin eräisiin vaatimusmäärittelyn osa-alueisiin.

## Vaatimusten luokittelu – toiminnalliset vaatimukset
 
Kuten mainittiin vaatimukset jakaantuvat kahteen kategoriaan, _toiminnallisiin_ ja _ei-toiminnallisiin_ vaatimuksiin.

Toiminnalliset vaatimukset (engl. functional requirements) kuvaavat mitä järjestelmällä voi tehdä, eli mitä toimintoja siinä on.

Esimerkiksi verkkokaupan toiminnallisia vaatimuksia voisivat olla seuraavat
- rekisteröitynyt asiakas voi lisätä tuotteen ostoskoriin
- onnistuneen luottokorttimaksun yhteydessä asiakkaalle vahvistetaan ostotapahtuman onnistuminen sähköpostitse
- järjestelmään kirjautunut asiakas näkee oman ostoshistoriansa
- ylläpitäjä voi lisätä valikoimaan uusia tuotteita kaupan
- tavarantoimittaja voi päivittää järjestelmässä olevien tuotteiden hintatietoja

Toiminnallisten vaatimusten dokumentointi voi tapahtua esim. "feature-listoina" kuten kurssilla Ohjelmistotekniikka on tehty jo parin vuoden ajan tai UML-käyttötapauksina, joita kurssi Ohjelmistotekniikka käytti noin vuoteen 2017 asti. Ketterissä menetelmissä vaatimukset dokumentoidaan yleensä _user storyinä_, joihin tutustumme kohta tarkemmin.

Riippumatta toiminnallisten vaatimusten dokumentointitavasta on melko yleistä, että vaatimuskset ilmaistaan muodossa, jossa kerrotaan jonkin käyttäjäroolin yksittäinen järjestelmän käyttöskenaario.

Esim. _tavarantoimittaja voi päivittää järjestelmässä olevien tuotteiden hintatietoja_ kertoo erään järjestelmän toiminnallisuuden roolin _tavarantoimittaja_ omaaville käyttäjille. 

## Vaatimusten luokittelu – ei-toiminnalliset vaatimukset
 
Vaatimusten toinen luokka, ei-toiminnalliset vaatimukset (engl. nonfunctional requirements) 
jakautuvat kahteen osa-alueeseen: laatuvaatimuksiin ja toimintoympäristön rajoitteisiin. 

_Laatuvaatimukset_ (engl. quality attributes), ovat koko järjestelmän toiminnallisuutta ohjaavia ja rajoittavia tekijöitä, esim. 
- käytettävyys: minkälainen sovelluksen käyttökokemus on
- tietoturva: kenellä on pääsy järjestelmään ja siinä käsiteltävään dataan
- suorituskyky: miten nopeasti sovellus reagoi erilaisiin käyttäjän syötteisiin
- skaalautuvuus: pysyykö sovellus responsiivisena, eli riittävän nopeasti toimivana käyttäjäkuorman tai käsiteltävän datamäärän kasvaessa 
- stabiilisuus: toipuuko järjestelmä erilaisista virhetilanteista

Kaikki laatuvaatimukset eivät ole suoraan järjestelmän käyttäjän havaittavissa, tälläisiä ovat esimerkiksi
- laajennettavuus: onko sovelluksen toiminnallisuutta helppo kasvataa jatkossa
- testattavuus: onko sovelluksen virheettömyys varmistettavissa helposti jatkokehityksen yhteydessä

On olemassa suuri määrä erilaisia kategorioita laatuvaatimuksille, esim. [Wikipedian lista](http://en.wikipedia.org/wiki/List_of_system_quality_attributes) luettelee niitä suuret määrät.

Toimintaympäristön rajoitteita (constraints) ovat esim.
- toteutusteknologia: millä ohjelmointikielillä ja kirjastoilla sovellus toteutetaan, mitä tietokantoja käytetään
- käyttöympäristö: käytetäänkö sovellusta selaimella vai onko se desktop- tai mobiilisovellus
- integroituminen muihin järjestelmiin: käytetäänkö vaikkapa jonkin ulkoisen palvelun kertakirjautumista tai jotain avoimia rajapintojen tarjoamaa dataa
- mukautuminen lakeihin ja standardeihin: eräs esimerkki tälläisistä on GDPR:n asettamat vaatimukset
 
Toisin kuin toiminnalliset vaatimukset jotka kuvaavat usein järjestelmän "yksittäisiä featureita" (esim. tuotteen voi lisätä ostoskoriin), ei-toiminnalliset vaatimukset koskevat useimmiten "koko järjestelmää", ja vaikuttavat siihen miten koko järjestelmän perusrakenne eli arkkitehtuuri tulee suunnitella. Esim. jos halutaan rakentaa verkkokauppa, joka skaalautuu miljoonille käyttäjille, tulee se perusteistaan asti rakentaa aivan erilaisella tavalla kuin verkkokauppa, jolla voi olla yhtä aikaa maksimissaan parikymmentä käyttäjää. Jos laatuvaatimukset muuttuvat ohjelmiston kehitystyön edetessä radikaalilla tavalla, muutosten tekeminen saattaa joskus olla vaikeaa ja vaatia isompaa remonttia koko sovelluksen rakennusperiaatteissa. 
 
 ## Vaatimusmäärittely 1900-luvulla eli vesiputousmallin valtakaudella
  
Vesiputousmallin hengen mukaista oli, että vaatimusmäärittelyä pidettiin erillisenä ohjelmistoprosessin vaiheena, joka on tehtävä kokonaisuudessaan ennen suunnittelun aloittamista. Ideana oli että suunnittelun ei pidä vaikuttaa vaatimuksiin ja vastaavasti vaatimukset eivät saa rajoittaa tarpeettomasti suunnittelua.
 
Asiantuntijat korostivat, että vaatimusten dokumentaation on oltava kattava ja ristiriidaton.
Pidettiin siis ehdottoman tärkeänä että heti alussa kerätään ja dokumentoitiin kaikki asiakkaan vaatimukset. Oli jopa suuntauksia, joissa vaatimukset haluttiin luonnollisen kielen sijaan ilmaista formaalilla kielellä eli matemaattisesti jotta esim. ristiriidattomuuden osoittaminen olisi mahdollista.
 
Tiedetään nimittäin että jos määrittelyvaiheessa tehdään virhe, joka huomataan vasta myöhemmin sovelluskehityksen aikana, esimerkiksi vasta sovellusta testatessa, on muutoksen tekeminen erittäin kallista. Tästä loogisena johtopäätöksenä oli tehdä vaatimusmäärittelystä erittäin järeä ja huolella tehty työvaihe. Ja koska vaatimusmäärittelyä ja sovelluskehitystä hoistivat eri ihmiset, tuli kaikki dokumentoida hyvin tarkalla tasolla.
 
## Vaatimusmäärittely 1900-luvulla – ei toimi 
 
Kuten [viikolla 1](/viikko1) jo todettiin, ideaali jonka mukaan vaatimusmäärittely voidaan irrottaa kokonaan erilliseksi, huolellisesti tehtäväksi vaiheeksi on osoittautunut utopiaksi. 

On useita sitä, jotka johtavat siihen että vaatimusten muuttumien on lähes väistämätöntä. Ohjelmistoja käyttävien organisaatioiden toimintaympäristö muuttuu nopeasti, mikä on relevanttia tänään, ei ole välttämättä sitä enää 3 kuukauden päästä. Asiakkaiden on mahdotonta ilmaista tyhjentävästi tarpeitaan etukäteen, ja vaikka asiakas osaisikin määritellä kaiken etukäteen, tulee mielipide muuttumaan suurella todennäköisyydellä muuttumaan kun asiakas näkee lopputuloksen. 

Suunnattoman ongelman aiheuttaa myös se, että huolimatta huolellisesta vaatimusmäärittelystä, ohjelmistokehittäjät eivät osaa tulkita kirjattuja vaatimuksia samoin kuin vaatimukset kertonut asiakas tai loppukäyttäjä. Jos kehittäjien ja käyttäjien välillä ei ole suoraa kommunikaatiota, väärinymmärrysten syntyminen on erittäin todennäköistä.
 
Vaatimusmäärittelyä ei myöskääm ole mahdollista tai järkevää irrottaa kokonaan suunnittelusta. Suunnittelu auttaa ymmärtämään ongelma-aluetta syvällisemmin ja se taas generoi usein muutoksia vaatimuksiin. Ohjelmia tehdään enenemissä määrin valmiiden komponenttien, esim. open source -koodin tai verkossa olevien SaaS-palveluiden varaan, ja tämä on oleellista ottaa huomioon vaatimusmäärittelyssä.

Jos suunnittelu ja toteutustason asiat otetaan huomioon vaatimusmäärittelyssä, on vaatimusten muotoilu ja priorisointikin helpompaa: näin on mahdollista edes jollain tavalla arvioida vaatimusten toteuttamisen hintaa.
 
Ilman suunnittelun ja toteutuksen huomioimista riskinä siis on että asiakas haluaa vaatimuksen sellaisessa muodossa, joka moninkertaistaa toteutuksen hinnan verrattuna periaatteessa asiakkaan kannalta yhtä hyvään, mutta hieman eri tavalla muotoiltuun vaatimukseen.
 
## Vaatimusmäärittely 2000-luvulla
  
2000-luvun iteratiivisen ja ketterän ohjelmistokehityksen tapa on integroida kaikki ohjelmistotuotannon vaiheet yhteen. Ohjelmistoprojektit toki aloitetaan elelleenkin vaatimusmäärittelyllä, mutta alustava vaatimusmääittely on vasta suuntaa-antava ja tehty tarkemmin ainoastaan yhden tai muutaman ensimmäisen iteraation tarpeieen verran.

Ketterän vaatimusmäärittelyn hengen mukaista on, että asiakas (Scrumia käytettäessä product owner) priorisoi vaatimukset siten, että kuhunkin iteraatioon valitaan toteutettavaksi ne vaatimukset, jotka tuovat asiakkaalle mahdollisimman paljon liiketoiminnallista arvoa.
Ohjelmistokehittäjät arvioivat vaatimusten toteuttamiseen tarvittavaa työmäärää, ja päättävät sen kuinka paljon he voivat ottaa kuhunkin iteraatioon toteutettavia vaatimuksia. 

Jokaisen iteraation aikana tehdään määrittelyä, suunnittelua, ohjelmointia ja testausta siinä määrin kuin tarve vaatii. Vaatimusmäärittelykin siis tarkentuu projektin kuluessa.
Jokaisen iteraation on tarkoitus saada aikaan valmiita lisätoiminnallisuuksia kehitettävään sovellukseen. Jokaisen iteraation tuotos toimiikin syötteenä seuraavan iteraation vaatimusten määrittelyyn..
 
Ohjelmiston kasvaessa iteratiivisesti ja inkrementaalisesti pala palalta mahdollistaakin sen, että sovellus voidaan viedä tuotantokäyttöön eli todellisten käyttäjien käytettäväksi jo ennen sovelluksen valmistumista. 

Tällä on monia etuja. Sovellus voi ruveta tuottamaan rahallista arvoakin jo ennen sovelluskehitysprojektin päättymistä, ja todellisilta käyttäjiltä saatavan palautteen avulla vaatimusmäärittelyn ja sovelluksen jatkokehityksen suuntaa on vielä mahdollista tarkentaa. 
 
Kattavana teemana ketterässä ohjelmistotuotannossa ja  siihen liittyvässä vaatimusmäärittelyssä onkin kaikin mahdollisin tavoin tuottaa asiakkaalle maksimaalisesti arvoa. 

## Vaatimusmäärittely 2010-luvulla: Lean startup

Eric Riesin vuonna 2011 julkaisema kirja [The Lean startup](http://theleanstartup.com/) kuvaa/formalisoi systemaattisen tavan kartoittaa vaatimuksia erityisen epävarmoissa konteksteissa, kuten startup-yrityksissä. Malli perustuu kolmiosaisen build-measure-learn-syklin toistamiseen

![]({{ "/images/2-3.png" | absolute_url }})

Esim. internetpalveluja tai mobiilisovelluksia rakennettaessa asiakkaan tarpeista, eli järjestelmän vaatimuksista ei ole minkäänlaista varmuutta, voidaan vain tehdä oletuksia siitä mitä ihmiset haluaisivat käyttää. Alkuvaiheessahan järjestelmällä ei edes ole vielä asiakkaita tai käyttäjiä, joiden mielipidettä voitaisiin kysyä.
 
Periaatteena on ottaa lähtökohdaksi jokin idea siitä, mitä asiakkaat haluavat ja tehdään _hypoteesi miten asiakkaat käyttäytyisivät_, jos kyseinen järjestelmä/toiminnallisuus/ominaisuusjoukko olisi toteutettu.

Tämän jälkeen rakennetaan nopeasti niin sanottu _minimum viable product (MVP)_, joka toteuttaa ominaisuuden. Minimum viable productillä ei ole mitään yhtenäistä kaikkien hyväksymää määritelmaa, mutta esim. [Wikipedia](https://en.wikipedia.org/wiki/Minimum_viable_product) sanoo seuraavasti 

> A minimum viable product (MVP) is a product with just enough features to satisfy early customers and provide feedback for future product development.

MVP laitetaan tuotantokäyttöön ja sen jälkeen _mitataan_ miten ihmiset asiakkaat käyttäytyvät uuden ominaisuusjoukon suhteen, esim. jos kyseessä on internetpalvelu, voidaan mitata kuinka moni ihminen löytää palvelun etusivulle, rekisteröityy käyttäjäksi, kirjaantuu järjestelmään, kirjaantuu vielä viikon jälkeen rekisteröitymisestä ym.

Jos MVP koskee jotain järjestelmään toteutettua uutta ominaisuutta, käytetään usein A/B-testausta: uusi ominaisuus julkaistaan vain osalle käyttäjistä, loput jatkavat vanhan ominaisuuden käyttöä. MVP:n avulla testattava uusi ominaisuus voisi olla esim. verkkokaupan uudenlainen suosittelualgoritmi ja koejärjestelyllä voidaan helposti mitata tuottaako testattava ominaisuus suuremman määrän ostoksia kuin järjestelmän aiempi versio.

Käyttäjien oikeasta järjestelmästä mitattua käyttäytymistä verrataan siis alussa asetettuun hypoteesiin ja näin pystytään oppimaan olivatko toteutetut vaatimukset sellaisia jotka ovat järjestelmän käytön suhteen toivottavia, eli käytetäänkö ominiaisuuksia, saako niiden avulla hankittua lisää maksavia asiakkaita, sitouttavatko ne asiakasta enemmän sovelluksen käyttöön, saavatko ne asiakkaan tuhlaamaan enemmän rahaa ym... 

Jos toteutettu idea ei osoittautunut hyväksi, voidaan palata järjestelmän edelliseen versioon ja jatkaa build-measure-learn-sykliä tekemällä hypoteesi jostain muusta ideasta
Lean startup -"menetelmällä" on siis tarkoitus oppia systemaattisesti ja mahdollisimman nopeasti mitä asiakkaat haluavat.

# Vaatimusmäärittely ja projektisuunnittelu ketterässä prosessimallissa
  
Käydään seuraavaksi läpi yleinen tapa vaatimustenhallintaan ja projektisuunnitteluun ketterässä ohjelmistotuotantoprojektissa. 

Tapa pohjautuu Scrumin ja eXtreme Programingin eli XP:n eräiden käytänteiden soveltamiseen
Lähteenä on monia kirjoja ja blogikirjoituksia, mm. verkosta löytyvät [Henrik Kniberg: Scrum and XP from the trenches](https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/)ja [James Shore: Art of Agile development](https://www.jamesshore.com/Agile-Book/) sekä Mike Cohnin loistavat kirjat Agile Estimation and Planning ja User stories applied.
  
## User story

Ketterän vaatimusmäärittelyn tärkein työväline on _user story_. Samasta asiasta käytetään joskus suomenkielistä termiä _käyttäjätarina_, käännös ei kuitenkaan ole täysin vakiintunut, joten käytämme jatkossa englanninkielistä termiä.
 
Alan suurimman auktoriteetin [Mike Cohnin mukaan](https://www.mountaingoatsoftware.com/articles/advantages-of-user-stories-for-requirements):

A user story describes functionality that will be valuable to either user or purchaser of software. User stories are composed of three aspects:

1) A written description of the story, used for planning and reminder 
2) Conversations about the story to serve to flesh the details of the
story
3) Tests that convey and document details and that will be used to determine that the story is complete
 
User storyt siis kuvaavat loppukäyttäjän kannalta arvoa tuottavia toiminnallisuuksia.

Määritelmän alakohtien 1 ja 2 mukaan user story on karkean tason tekstuaalinen kuvaus ja lupaus/muistutus siitä, että toiminnallisuuden tarkka kuvaus on selvitettävä asiakkaan kanssa.

Seuraavat voisivat olla verkkokauppasovelluksen user storyjen kuvausia (_written description_)

- asiakas voi lisätä tuotteen ostoskoriin
- asiakas voi poistaa ostoskorissa olevan tuotteen
- asiakas voi maksaa luottokortilla ostoskorissa olevat tuotteet
 
User story ei siis ole perinteinen vaatimusmääritelmä, joka ilmaisee tyhjentävästi toiminnallisuuksien vaatimuksia, user story on pikemminkin "placeholder" vaatimukselle, eli muistilappu ja lupaus, siitä että toiminnallisuuden vaatimukset tulee selventää riittävällä tasolla ennen kuin user story toteutetaan.

User storyn henkeen siis kuuluu, että story on lupaus kommunikoinnista asiakkaan kanssa vaatimuksen selvittämiseksi, pelkän tekstuaalisen kuvauksen esim. _asiakas voi lisätä tuotteen ostoskoriin_ perusteella storyä ei voi vielä ruveta toteuttamaan.

Määritelmän kolmas alikohta sanoo että Storyyn kuuluu "Tests that convey and document details and that will be used to determine that the story is complete". Storyyn siis pitäisi liittyä myös joukko testejä tai kriteereitä, minkä perusteella voidaan katsoa että story on suoriteetu.

Vaihtelee hyvin paljon miten user storyihin liittyvät hyväksymökriteerit ilmaistaan. Parhaassa tapauksessa ne ovat automaattisesti suoritettavissa olevia testejä. Kyseessä voi myös olla lista toimintaskenaarioita, jotka on jollain tavalla kirjattu storyn yhteyteen. Melko tavallista on kuitenkin että niitä ei kirjata mitenkään, vaan product owner, asiakkaan edustaja tai joku laadunallinnasta vastaava taho hyväksyy storyn valmiiksi kokeilemalla vastaavaa toiminnallisuutta järjestelmästä.

Mike Cohenin kolmiosaisen määritelmän kanssa täsmälleen samansisältöisen mutta hieman eri sanoin muotoillun määritelmän user storyille on tehnyt [Ron Jeffries](https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/), jonka sanoin user story on _card, conversation, confirmation_ (CCC), eli

- card, eli story muistilappumainen usein jopa fyysinen pahvikortti, eli ei missään tapauksessa vesiputousmainen mappiin talletettava laaja vaatimusmäärittelydokumentti
- conversation: jotta storyn voi toteuttaa tarvitaan paljon keskustelua sovelluskehittäjien ja product ownerin, asiakkaiden, loppukäyttäjien ym. välillä, jotta saadaan selville mistä storystä todella on kysymys
- confirmation: kriteerit minkä perusteella voidaan todeta storyn olevan toteutettu valmiiksi

### Esimerkki user storystä

Usein on tapana kirjoittaa user storyn kuvaus pienelle noin 10-15 cm pahvikortille tai postit-lapulle. [Scott Amblerilta](http://www.agilemodeling.com/artifacts/userStory.htm) lainattu esimerkki

![]({{ "/images/2-4.jpg" | absolute_url }})

Kortin etupuolelle on kirjoitettu lyhyt kuvaus storyn sisällöstä, prioriteetti ja estimaatti. 
_Estimaatilla_ tarkoitetaan kortin toiminnallisuuden toteuttamisen työmääräarviota. Palaamme estimointiin pian tarkemmin

Kortin takapuolella suhteellisen informaalilla kielellä kirjoitettu joukko storyn hyväksymiskriteerejä.

Usein hyväksymiskriteerit kuvaavat joukon erilaisia ehtoja sille miten storyn kuvaaman 
toiminnallisuuden tulee käyttäytyä eri tilanteissa. Esim. nyt storyn sisältö on _As a student I want to purhase a parking pass_, eli _opiskelija voi ostaa parkkiluvan_, hyväksymäkriteerit tarkentavat erilaisia ostamiseen liittyviä ehtoja

- parkkiluvan ostajan on oltava ilmoittautunut läsnäolleeksi
- parkkilupa myönnetään kuukaudeksi kerrallaan
- on mahdollista ostaa vain yksi parkkilupa kuukaudessa 
 
Hyväksymäkriteerit ovat tuloksena niistä keskusteluista mitä storyn toiminnallisuuden rajaamisesta käytään product ownerin tai asiakkaan kanssa. Usein ne nimenomaan rajaavat toiminnallisuutta. Esimerkkinä olevan storyn kriteerit jättävät vielä paljon yksityiskohtia auki vaikkapa maksamisen suhteen, miten se tapahtuu? Kriteerejä voisi täydentää seuraavasti

- parkkilupa maksetaan käteisellä tai verkkopankissa
- verkkomaksun tapauksessa on käytettävä opiskelijalle henkilökohtaisesti generoitua viitenumeroa

### Hyvän user storyn kriteerit 

Edellinen erimerkki 

> As a student I want to purchase a parking pass so that I can drive to school

on formuloitu monin paikoin [suositussa muodossa](https://www.agilealliance.org/glossary/user-story-template/) 

> As a <type of user>, I want <functionality> so that <business value> 

Näin muotoilemalla on ajateltu että user story kiinnittää huomion siihen kenelle kuvattava järjestelmän toiminto tuottaa arvoa. Muoto ei oikein taivu suomenkielisiin kuvauksiin, joten sitä ei tällä kurssilla käytetä. Viime aikoina tätä tapaa muotoilla user storyt on myöskin ruvettu kritisoimaan muun muassa siksi että kiinnittää liikaa huomioita siihen miten story kirjataan itse asian, eli mistä storyssä on kysymys sijaan ja formaatti on menettämässä suosiotaan.

![]({{ "/images/2-5.png" | absolute_url }})

Bill Wake luettelee artikkelissa [INVEST in good User Stories](https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/) kuusi user storyille toivottavaa ominaisuutta:

- Independent
- Negotiable
- Valuable
- Estimable
- Small
- Testable 
 
_Valuable_ tarkoittaa, että storyn tulee kuvata käyttäjälle arvoa tuottavia ominaisuuksia, jotka on muotoiltu käyttäen asiakkaan kieltä, ei teknistä jargonia.
 
Hyvänä käytäntönä pidetään että user story kuvaa järjestelmän kaikkia osia koskevaa (esim. käyttöliittymä, bisneslogiikka, tietokanta) eli "end to end"-toiminnallisuutta, eikä pelkästään yksittästä järjestelmän teknistä kerrosta koskevaa, käyttäjän kannalta näkymätöntä teknistä ratkaisua.

Esimerkiksi _lisää jokaisesta asiakkaasta rivi tietokantatauluun customers_ ei olisi suositeltava muotoilu user storylle, sillä se ei ole kirjattu käyttäjän kannalta ymmärrettävällä tavalla ja ottaa kantaa ainoastaan tietokantakerrokseen.
 
Hyvä user story on _negotiable_, eli se ei ole tyhjentävästi kirjoitettu vaatimusmäärittely vaan lupaus siitä että asiakas ja toteutustiimi sopivat tarvittavalla tarkkuudella storyn toiminnallisuuden sisällön ennen kun story otetaan toteutettavaksi.

_Estimatable_ taas sanoo, että user storyn toteuttamisen vaatima työmäärä pitää olla arvioitavissa kohtuullisella tasolla.

Työmäärän arviointi onnistuu paremmin jos user storyt ovat riittävän pieniä, _small_. 
User story on ehdottomasti toiminnallisuudeltaan liian iso, jos se ei ole toteutettavissa yhdessä sprintissä. Juuri ja juuri yhdessä sprintissä toteutettavissa oleva story on myöskin huomattavan riskialtis, parempi koko storylle onkin lähempänä yhden päivän kuin vaikkapa viikon vaadittavaa työmäärää.

Liian suuret user storyt tulee jakaa osiin. Esimerkiksi verkkokaupassa voisi olla käyttötapaus _kaupan ylläpitäjä voi kirjautua sivulle, lisätä ja päivittää tuotteiden tietoja sekä tarkastella asiakkaille tehtyjen toimitusten listaa_ tulisi ehdottomasti jakaa useaan osaan:
- ylläpitäjä voi kirjautua sovellukseen
- ylläpitäjä voi lisätä tuotteita valikoimaan
- ylläpitäjä voi päivittää tuotteiden tietoja
- ylläpitäjä voi tarkastella asiakkaille tehtyjen toimitusten listaa
  
Kuudes toivottu ominaisuus on testattavuus, _testability_, eli user storyjen tulisi olla sellaisia, että niille on mahdollista tehdä testit tai laatia kriteerit, joiden avulla on mahdollista yksikäsitteisesti todeta onko story toteutettu hyväksyttävästi. Ei-toiminnalliset vaatimukset (esim. suorituskyky, käytettävyys) aiheuttavat usein haasteita testattavuudelle.

Esimerkiksi verkkokaupan user story _kaupan tulee toimia tarpeeksi nopeasti kovassakin kuormituksessa_ on mahdollista muotoilla testattavaksi esimerkiksi seuraavasti:
_käyttäjän vasteaika saa olla korkeinaan 0.5 sekuntia 99% tapauksissa jos yhtäaikaisia käyttäjiä sivulla on maksimissaan 1000_.
 
Kriteerin _Independent_ mukaan user storyjen pitäisi olla toisistaan mahdollisimman riippumattomia eli storyjen kuvaamia toiminnallisuuksia pitäisi pystyä toteuttamaan mahdollisimman riippumatta toisten storyjen tilanteesta. Tämä taas antaa product ownerille enemmän vapausasteita storyjen priorisointiin, eli sen määrittelyyn missä järjestyksessä sovelluksen toiminnallisuudet valmistuvat. 

On toki tilanteita, joissa storyjen keskinäistä riippuvuutta ei voi välttää, esimerkiksi verkkokaupan storyjen _lisää tuote ostoskoriin_ ja _poista tuoteolut ostoskorista_ tapauksessa.

##

Edellisellä luennolla Scrumin yhteydessä puhuttiin product backlogista, joka siis on priorisoitu lista asiakkaan tuotteelle asettamista vaatimuksista eli toivotuista ominaisuuksista ja toiminnoista
Nykyään käytäntönä on, että product backlog koostuu nimenomaan User storyistä
 
  
Projektin aluksi kannattaa heti ruveta etsimään ja määrittelemään User storyja ja muodostaa näistä alustava Product Backlog
Käytettävissä ovat kaikki yleiset vaatimusten kartoitustekniikat
Haastattelut
Brainstormaus, story gathering workshopit
 
Alustavan User storyjen keräämisvaiheen ei ole tarkoituksenmukaista kestää kovin kauaa, maksimissaan muutaman päivän
User storyjen luonne (muistilappu ja lupaus, että vaatimus tarkennetaan ennen toteutusta) tekee niistä hyvän työkalun projektin aloitukseen
Turhiin detaljeihin ei puututa
Ei tavoitellakaan täydellistä ja kattavaa listaa vaatimuksista, asioita tarkennetaan myöhemmin
 
Kun alustava lista User storyistä on kerätty, ne priorisoidaan ja niiden vaatima työmäärä arvioidaan karkealla tasolla
Näin muodostuu alustava Product Backlog, eli priorisoitu lista vaatimuksista
 
Alustava product backlog
  
Ennenkuin menemme tarkemmin User storyjen priorisointiin, esitellään nopeasti Johan Rasmussonin kirjassa Agile Samurai esittämä tapa Storyjen keräämiseen
Step 1: get a big room
Huoneeseen kerääntyvät kaikki asianosaiset, asiakkaat ja ohjelmistotuotantotiimi
 
Story gathering workshop
 
Step 2: draw a lot of pictures
  
Step 3: Write lots of stories
  
Step 4: Brainstorm everything else
Kuvien piirtämisen ja siihen liittyvän brainstormauksen innoittamana saadaan yleensä kirjoitettua suuri joukko User storyjä
Kuvin ilmaistavien asioiden lisäksi mietitään muuta projektiin liittyvää ja kirjataan niitä vastaavat User storyt
 
Step 5: Scrub the list and make it shine
Lopuksi siivotaan lista:
Poistetaan duplikaatit
Yhdistetään liian pienet toisiinsa liittyvät Storyt isommiksi Kirjoitetaan User storyt koherentimpaan muotoon
 
Story gathering workshop
  
Backlogin priorisointi Product Backlog siis on priorisoitu lista User storyjä
Kuten muistamme priorisoinnin hoitaa Product Owner
Prioriteetti määrää järjestyksen, missä ohjelmistokehittäjät toteuttavat
ohjelmiston ominaisuuksia
Priorisoinnin motivaationa on pyrkiä maksimoimaan asiakkaan kehitettävästä ohjelmistosta saama hyöty/arvo
Tärkeimmät asiat halutaan toteuttaa mahdollisimman nopeasti ja näin saada tuotteesta alustava versio markkinoille niin pian kuin mahdollista
 
User storyjen priorisointiin vaikuttaa Storyn kuvaaman toiminnallisuuden asiakkaalle tuovan arvon lisäksi pari muutakin seikkaa
Storyn toteuttamiseen kuluva työmäärä
Storyn kuvaamaan ominaisuuteen sisältyvä tekninen riski
 
Ei ole siis kokonaistaloudellisesti edullista tehdä priorisointia välttämättä pelkästään perustuen asiakkaan User storyistä saamaan arvoon
 
User storyjen viemän työmäärän arvioimiseen on oikeastaan kaksi motivaatiota
Auttaa asiakasta priorisoinnissa
Mahdollistaa koko projektin viemän ajan summittainen arviointi
 
Työmäärän arvioimiseen on kehitetty vuosien varrella useita erilaisia menetelmiä
Kaikille yhteistä on se, että ne eivät toimi kunnolla, eli tarkkoja työmääräarvioita on mahdoton antaa
Joskus työmäärän arvioinnista käytetäänkin leikillisesti termiä
guestimation
 
Mitä kauempana tuotteen/ominaisuuden valmistuminen on, sitä epätarkempia työmääräarviot ovat
Cone of uncertainity, ks. seuraava sivu
   
Estimointi eli User storyn toteuttamiseen kuluvan työmäärän arviointi
  
Ketterät ohjelmistotuotantomenetelmät ottavat itsestäänselvyytenä sen, että estimointi on epävarmaa ja tarkentuu vasta projektin kuluessa
Koska näin on, pyritään vahvoja estimointiin perustuvia lupauksia aikatauluista olemaan tekemättä
 
estiomointi
  
On huomattu, että vaikka ominaisuuksien toteuttamiseen menevän tarkan ajan arvioiminen on vaikeaa, osaavat ohjelmistokehittäjät jossain määrin arvioida eri tehtävien vaatimaa työmäärää suhteessa toisiinsa
Esim.
User storyn Tuotteen lisääminen ostoskoriin toteuttaminen vie yhtä kauan kuin User storyn Tuotteen poistaminen ostoskorista toteuttaminen
User Storyn Ostoskorissa olevien tuotteiden maksaminen luottokortilla toteuttaminen taas vie noin kolme kertaa kauemmin kun edelliset
 
Ketterissä menetelmissä käytetäänkin yleisesti suhteelliseen kokoon perustuvaa estimointia
”yksikkönä” arvioinnissa on yleensä Story point
Ei yleensä vastaa mitään todellista tuntimäärää
Biershop-projektissa voitaisiin esim. kiinnittää että User storyn Tuotteen lisääminen olutkoriin estimaatti on 1 Story point, muita voidaan sitten verrata tähän, eli Ostoskorissa olevien tuotteiden maksaminen luottokortilla estimaatiksi tulisi 3 Story pointia
Suhteelliseen kokoon perustuva estimointi
   
Suhteelliseen kokoon perustuva estimointi Kun estimoitavana on suuri määrä User storyjä
Esimerkki Rasmussenin kirjasta Agile samurai
 
 Suhteelliseen kokoon perustuva estimointi
saattaa olla kannattavaa arvioida ensin muutama hieman erikokoinen Story ja valita nämä referensseiksi
1 pt 3 pt 5p
 
Suhteelliseen kokoon perustuva estimointi Ja arvioida muut User storyt näiden suhteen
 
Kuka suorittaa estimoinnin? Estimointi tapahtuu aina ohjelmistokehitystiimin toimesta
Product ownerin on oltava läsnä tarkentamassa estimoitaviin User storeihin liittyviä vaatimuksia
Usein estimointia auttaa User storyn pilkkominen teknisiin työvaiheisiin
Esim. User story Tuotteen lisääminen ostoskoriin, voisi sisältää toteutuksen kannalta seuraavat tekniset tehtävät (task):
tarvitaan sessio, joka muistaa asiakkaan domain-olio ostoskorin ja ostoksen esittämiseen html-näkymää päivitettävä tarvittavilla painikkeilla Kontrolleri painikkeiden käsittelyyn
yksikkötestit kontrollerille ja domain-olioille hyväksymätestien automatisointi
 
Jos kyseessä on samantapainen toiminnallisuus kuin joku aiemmin toteutettu, voi estimointi tapahtua ilman User storyn vaatimien erillisten työvaiheiden miettimistä
 

Työvaiheisiin pilkkominen saattaa vaatia myös hieman suunnittelua, esim. täytyy miettiä, miten ohjelman rakennetta on muokattava, jotta uusi toiminnallisuus saadaan järkevästi toteutettua
  
Estimointi on joka tapauksessa suhteellisen epätarkkaa, joten estimoinnin on tarkoitus tapahtua nopeasti
yhden User storyn estimointiin kannattaa käyttää aikaa korkeintaan 15 minuuttia, jos se ei riitä, on todennäköistä että Storya ei tunneta vielä niin hyvin että se kannattaisi estimoida
 

Kuten edellisellä luennolla mainittiin, määritellään ketterissä projekteissa yleensä ns. ”definition of done”
Estimoinnissa tulee arvioida User storyn viemä aika definition of donen tarkkuudella, tämä sisältää yleensä kaiken Storyn toteuttamiseen liittyvän:
määrittely, suunnittelu, toteutus, automatisoitujen tekstien tekeminen, testaus, integrointi ja dokumentointi
 
Äsken mainitsimme että Story point ei vastaa yleensä mitään aikayksikköä
Jotkut kuitenkin mitoittavat Story Pointin ainakin projektin alussa ”ideal working day:n” suuruiseksi, eli työpäiväksi johon ei sisälly mitään häiriötekijöitä
Useimmat auktoriteetit suosittelevat olemaan sotkematta Story pointeja päiviin ks. esim. http://blog.crisp.se/2008/12/05/tomasbjorkholm/1228470417545
 
Estimoinnista
  
Hyvänä periaatteena pidetään että kaikki tiimin jäsenet osallistuvat estimointiin
Tiimille syntyy yhtenäinen ymmärrys User storyn sisällöstä Planning poker on eräs suosittu tapa estimoinnin tekemiseen

Planning poker
Käydään läpi Backlogissa olevia User storyja yksi kerrallaan
Asiakas lukee User storyn sisällön ja selittää tarkemmin Storyn luonnetta ja vaatimuksia
Tiimi keskustelee Storystä, miettii kenties Storyn jakautumista teknisiin työvaiheisiin
Kun kaikki kokevat olevansa valmiina arvioimaan, jokainen kertoo arvionsa (yksikkönä siis Story point)
Usein tämä vaihe toteutetaan siten, että käytössä on pelikortteja, joilla on estimaattien arvoja, esim 1, 2, 5, 10, ... ja kukin estimointiin osallistunut näyttää estimaattinsa yhtä aikaa
Jos estimaatit ovat suunnilleen samaa tasoa, merkataan estimaatti User storylle
Jos seuraa eroavaisuutta, keskustelee tiimi eroavaisuuksien syistä
Voi esim. olla, että osa tiimin jäsenistä ymmärtää User storyn vaatimukset eri tavalla ja tämä aiheuttaa eroavaisuutta estimaatteihin
 
Kun tiimi on keskustellut aikansa, tapahtuu uusi estimointikierros ja konsensus todennäköisesti saavutetaan pian
 
Koska estimointi on joka tapauksessa melko epätarkkaa, ei estimoinnissa ole tapana käyttää kovin tarkkaa skaalaa
Yleistä on esim. käyttää ainoastaan arvoja 1, 2, 3, 5, 10, 20, 40, 100 tai vastaavaa yläpäästä harvenevaa skaalaa
Motivaationa se, että mitä suuremmasta kokonaisuudesta kyse, sitä vaikeampaa estimointi on, ja skaala yläpäässä on tarkoituksella harva, jotta estimaatit eivät antaisi valheellista kuvaa tarkkuudesta
Joskus käytetään myös estimaattia epic jolla tarkoitetaan niin isoa tai huonosti ymmärrettyä User storyä että sitä ei voida vielä estimoida
Alan suurin auktoriteetti Mike Cohn suosittelee käyttämään skaalaa 1, 2, 3, 5, 8 tai 1, 2, 4, 8 ja antamaan sitä suuremmille estimaatti epic