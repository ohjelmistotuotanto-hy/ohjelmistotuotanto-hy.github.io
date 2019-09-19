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

## Alustava product backlog

Edellisellä viikolla Scrumin yhteydessä puhuttiin _product backlogista_, joka siis on priorisoitu lista asiakkaan tuotteelle asettamista vaatimuksista eli toivotuista ominaisuuksista ja toiminnoista. Nykyään käytäntönä on, että product backlog koostuu nimenomaan user storyistä.
 
Projektin aluksi kannattaa heti ruveta etsimään ja määrittelemään user storyja ja muodostaa näistä alustava product backlog. Scrumia sovellettaessa tämä tehdään useimmiten ennen ensimmäisen sprintin alkua. Joskus tästä vaiheesta käytetään nimitystä [nollasprintti](https://www.mountaingoatsoftware.com/blog/sprint-zero-a-good-idea-or-not).

Alustavan product backlogin muodostamisessa ovat käytettävissä ovat kaikki yleiset vaatimusten kartoitustekniikat
- haastattelut
- brainstormaus
- workshopit 
 
Alustavan user storyjen keräämisvaiheen ei ole tarkoituksenmukaista kestää kovin kauaa, maksimissaan muutaman päivän. User storyjen luonne (muistilappu ja lupaus, että vaatimus tarkennetaan ennen toteutusta) tekee niistä hyvän työkalun projektin aloitukseen.
Turhiin detaljeihin ei ole tarkoitus puuttua ja ei edes tavoitella täydellistä ja kattavaa listaa vaatimuksista, sillä asioita tarkennetaan myöhemmin, user storyn määritelmän kolmas kohtahan on että story sisältää _conversations about the story to serve to flesh the details of the story_.
 
Kun alustava lista user storyistä on kerätty, ne _priorisoidaan_ ja niiden vaatima _työmäärä arvioidaan_ tarvittavalla tasolla. Näin muodostuu alustava product backlog, eli priorisoitu lista vaatimuksista.
  
## Backlogin priorisointi

Product backlog siis on _priorisoitu lista user storyjä_. 

Kuten todettiin [Scrumin esittelyn yhteydessä](viikko1/) priorisoinnista vastaa _product owner_.Prioriteetti määrää järjestyksen, missä ohjelmistokehittäjät toteuttavat
ohjelmiston ominaisuuksia. Priorisoinnin motivaationa on pyrkiä maksimoimaan asiakkaan kehitettävästä ohjelmistosta saama hyöty/arvo. Tärkeimmät asiat halutaan toteuttaa mahdollisimman nopeasti ja näin saada tuotteesta alustava versio markkinoille niin pian kuin mahdollista.
 
User storyjen priorisointiin vaikuttaa storyn kuvaaman toiminnallisuuden asiakkaalle tuovan arvon lisäksi ainakin storyn toteuttamiseen kuluva _työmäärä_ sekä storyn kuvaamaan ominaisuuteen sisältyvä _tekninen riski_.
 
Ei ole siis kokonaistaloudellisesti edullista tehdä priorisointia välttämättä pelkästään perustuen asiakkaan user storyistä saamaan arvoon, joku story voi tuottaa paljon arvoa, mutta voi olla toteutukseltaan erittäin työläs. Parempi [sijoitetun pääoman tuotto eli ROI](https://fi.wikipedia.org/wiki/Sijoitetun_p%C3%A4%C3%A4oman_tuottoaste) voidaan saada jollain vaihtoehtoisella storyllä joka on toteutukseltaan vähemmän työläs.

Myös projektiin liittyvät tekniset riskit kannattaa ottaa priorisoinnissa huomioon. Tekninen riski voi olla esim. se onko jokin ohjelmiston kannalta kriittinen ominaisuus ylipäätään mahdollista toteuttaa tehokkaasti ja taloudellisesti järkevin resurssein. Tälläinnen riskitekijä kannattaa selvittää mielummin heti kuin vasta siinä vaiheessa kun projektiin on jo sijoitettu suuri määrä resursseja. 

## Estimointi eli työmäärän arviointi
 
User storyjen viemän työmäärän arvioimiseen on oikeastaan kaksi motivaatiota
- auttaa asiakasta priorisoinnissa
- mahdollistaa koko projektin tai tiettyjä toiminnallisuuskokonaisuuksia sisältävien versioden viemän ajan summittainen arviointi

Työmäärän arvioimiseen on kehitetty vuosien varrella useita erilaisia menetelmiä. Kaikille yhteistä on se, että ne eivät toimi kunnolla, eli tarkkoja työmääräarvioita on mahdoton antaa. Joskus työmäärän arvioinnista käytetäänkin leikillisesti termiä
_guestimation_ joska työmääräarviointi on lopulta useimmiten lähinnä arvailua.
 
Estimointiin liittyvää epävarmuutta kuvaa käsite _cone of uncertainity_

![]({{ "/images/2-5.png" | absolute_url }})

Eli kauempana tuotteen/ominaisuuden valmistuminen on, sitä epätarkempia työmääräarviot ovat. Tämä taas johtuu siitä, että tuntemattomien epävarmuustekijöiden määrä alussa on suuri, mutta kun tuotteen rakentamisessa ollaan pidemmällä, ymmärrys kasvaa ja myös työmäärienkin arviointi alkaa olla realistisempaa. Jos esim. mietitään user storyä _tuotteen voi poistaa ostoskorista_ on järjestelmän alustavassa määrittelyvaiheessa todella vaikea antaa minkäänlaista työmääräarviota storylle. Kun sovelluskehitys etenee ja tiedetään miten ostoskori teknisesti toteutetaan, minkälainen sovelluksen käyttöliittymä on jne. muuttuu tuotteen ostoskorista poistamista koskevan storyn työmääräarvio jo huomattavasti helpommaksi.

## Suhteelliseen kokoon perustuva estimointi
  
Ketterät ohjelmistotuotantomenetelmät ottavat itsestäänselvyytenä sen, että estimointi on epävarmaa ja tarkentuu vasta projektin kuluessa. Koska näin on, pyritään vahvoja estimointiin perustuvia lupauksia ohjelmiston valmistumisaikatauluista välttämään.
  
On olemassa jonkin verran evidenssiä (ks [Cohn: Agile estimation and planning](https://www.mountaingoatsoftware.com/books/agile-estimating-and-planning), luku 8), siitä että vaikka ominaisuuksien toteuttamiseen menevän tarkan ajan arvioiminen on vaikeaa, osaavat ohjelmistokehittäjät jossain määrin arvioida eri tehtävien vaatimaa työmäärää suhteessa toisiinsa.

Esimerkkejä tälläisestä suhteellisesta estimoinnista ovat
- user storyn _tuotteen lisääminen ostoskoriin toteuttaminen_ vie yhtä kauan kuin user storyn _tuotteen poistaminen ostoskorista toteuttaminen_
- user storyn _ostoskorissa olevien tuotteiden maksaminen luottokortilla_ toteuttaminen taas vie noin kolme kertaa kauemmin kun edelliset
  
Ketterissä menetelmissä käytetäänkin yleisesti suhteelliseen kokoon perustuvaa estimointia, joissa usein arvioinnin yksikkönä käytetään abstraktia ajanmäärettä _story point_, joka ei välttämättä vastaa mitään todellista aikamäärettä.

Verkkokaupan tapauksessa voitaisiinkin kiinnittää että user storyn _tuotteen lisääminen ostoskoriin toteuttaminen_ työmääräarvio on yksi story point. Tällöin _tuotteen poistaminen ostoskorista toteuttaminen_ olisi myös suhteelliselta estimaatiltaan yksi story point ja _ostoskorissa olevien tuotteiden maksaminen luottokortilla_ kolme storypointia.

## Estimoinnin suorittaminen

Estimointi tehdään yhteistyössä kehitystiimin ja product ownerin kanssa. Product ownerin roolina on tarkentaa estimoitaviin user storeihin liittyviä vaatimuksia siinä määrin että kehitystiimi ymmärtää tarkasti mistä on kyse. Varsinaisen estimoinnin eli työmääränarvion tekee kuitenkin aina ohjelmistokehitystiimi, tämä on tärkeää silla ainoastaan sovelluskehittäjillä on edes jossain määrin realistisia edellytyksiä arvion tekemiseen. 

Kuten edellisellä viikolla mainittiin, määritellään ketterissä projekteissa yleensä _definition of done_, eli se yleinen taso mitä valmiilla tarkoitetaan. 
Useimmiten valmiin määritellään sisältävän user storyn määrittelyn, suunnittelun, toteutuksen, automatisoitujen testien tekemisen, integroinnin muuhun sovellukseen, dokumentoinnin ja joskus jopa tuotantoon viennin.

Estimoinnissa tuleekin arvioida user storyn viemä aika definition of donen tarkkuudella, eikä missään nimessä esim. ottaen huomioon pelkkä ohjelmointiin kuluva aika.

Usein estimointia auttaa user storyn pilkkominen teknisiin työvaiheisiin. Esimerkiksi story _tuotteen lisääminen ostoskoriin_, voisi sisältää toteutuksen kannalta seuraavat tekniset tehtävät (task):
- tarvitaan sessio, joka muistaa asiakkaan 
- domain-olio ostoskorin ja ostoksen esittämiseen 
- laajennus tietokantaskeemaan 
- html-näkymää päivitettävä tarvittavilla painikkeilla
- kontrolleri painikkeiden käsittelyyn
- yksikkötestit kontrollerille ja domain-olioille 
- hyväksymätestien automatisointi

Työvaiheisiin pilkkominen saattaa vaatia myös hieman suunnittelua, esim. täytyy miettiä, miten ohjelman rakennetta on muokattava, jotta uusi toiminnallisuus saadaan järkevästi toteutettua.

Jos kyseessä on samantapainen toiminnallisuus kuin joku aiemmin toteutettu, voi estimointi tapahtua ilman user storyn vaatimien erillisten työvaiheiden miettimistä, suhteuttamalla estimoitava toiminnallisuus aiemmin toteutettuihin storyihin.

Koska estimointi on joka tapauksessa suhteellisen epätarkkaa, estimointiin ei kannata käyttää turhan paljoa aikaa, esim. korkeintaan 15 minuuttia yhden user storyä kohtu. Jos tämä ei riitä, on todennäköistä että storyn sisältöä, siihen sisältyviä oletuksia ja sen riippuvuutta muusta järjestelmästä ei tunneta vielä sillä tarkkuudella että estimointi olisi mielekästä.

Voi myös olla että vaikeasti estimoitava story muuttuu helpommaksi arvioida jos se jaetaan useammaksi pienemmäksi ja rajatumman toiminnallisuuden kuvaamaksi storyksi.

User storyn estimointi ei ole kertaluontoinen toimenpide, estimaattia tarkennetaan projektin kuluessa sitä mukaa kun kehittäjien näkemys eri asioiden toteuttamisperiaatteista alkaa selkiytymään.

Kuten äsken mainittiin suhteellisessa estimoinnissa käytetty yksikkö _story point_ ei useimmiten vastaa mitään aikamäärettä. Jotkut kuitenkin mitoittavat Story Pointin ainakin projektin alussa _ideal working dayn_ eli työpäivän johon ei sisälly mitään häiriötekijöitä suuruiseksi. Eri tiimien käyttämät story point -yksiköt eivät kuitenkaan ole ollenkaan vertailukelpoisa keskenään. 

[Monet](https://www.atlassian.com/agile/project-management/estimation) [tahot](https://medium.com/serious-scrum/12-common-mistakes-made-when-using-story-points-f0bb9212d2f7) suosittelevat olemaan sotkematta story pointeja tunteihin tai päiviin. Eräs argumenteista story pointin ja tarkkojen aikamääreiden sitomattomuuden puolesta on se, että jos tiimi määrittelisi story pointin olevan esimerkiksi 8 tuntia työtä, niin tiimin estimaatit saatettaisiin esim. yrityksen johdossa ajatella sitoumukseksi kunkin työvaiheen tarvitsemasta ajasta. Tämän taas ketterät menetelmät haluavat ehdottomasti välttää estimaattien perimmäisen epävarmuuden takia.
 
## Estimoinnin menetelmiä
  
Suhteelliseen kokoon perustuva estimointi Kun estimoitavana on suuri määrä User storyjä
Esimerkki Rasmussenin kirjasta Agile samurai
 
 Suhteelliseen kokoon perustuva estimointi
saattaa olla kannattavaa arvioida ensin muutama hieman erikokoinen Story ja valita nämä referensseiksi
1 pt 3 pt 5p
 
Suhteelliseen kokoon perustuva estimointi Ja arvioida muut User storyt näiden suhteen
 

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

## NoEstimates - kannattaako estimointi?

##

Hyvä product backlog on DEEP
http://www.romanpichler.com/blog/product-backlog/making-the-product-backlog-deep/
Mike Cohn lanseerasi lyhenteen DEEP kuvaamaan hyvän backlogin ominaisuuksia
Detailed appropriatly Estimated
Emergent
Prioritized

Detailed appropriately eli sopivan detaljoitu:
Backlogin prioriteeteiltaan korkeimpien eli pian toteutettavaksi otettavien User Storyjen kannattaa olla suhteellisen pieniä ja näin tarkemmin estimoituja
Alemman prioriteetin User Storyt voivat vielä olla isompia ja karkeammin estimoituja
   


 Hyvä product backlog on DEEP
 

Hyvä product backlog on DEEP DEEP ominaisuuksista estimated ja prioritized ovat meille tuttuja
Emergent kuvaa backlogin muuttuvaa luonnetta:
The product backlog has an organic quality. It evolves, and its contents change frequently. New items emerge based on customer and user feedback, and they are added to the product backlog. Existing items are modified, reprioritized, refined, or removed on an ongoing basis.

Muuttuvan luonteensa takia backlogia tulee hoitaa (backlog grooming) projektin edetessä
Backlogiin lisätään uusia User storyja ja vanhoja tarpeettomaksi käyneitä poistetaan
Isoja User storyja pilkotaan tarpeentullen pienemmiksi (erityisesti prioriteetin kasvaessa täytyy isot Storyt jakaa useaksi pienemmäksi)
Backlogiin lisättäviä uusia User storyjä estimoidaan ja vanhojen Storyjen estimaatteja tarkastetaan ymmärryksen kasvaessa
Backlogin hoitamiseen osallistuu koko ohjelmistotuotantotiimi, pääasiallinen vastuu on Product Ownerilla

http://www.romanpichler.com/blog/product-backlog/grooming-the-product-backlog/





 




Estimoinnin toinen tarkoitus on, että se mahdollistaa koko projektin viemän aikamäärän summittaisen arvioinnin eli julkaisun suunnittelun (engl. release planning)
Jos estimoinnin yksikkönä kuitenkin on abstrakti käsite Story point, miten estimaattien avulla on mahdollista arvioida projektin viemää aikamäärää?
Kehitystiimin velositeetti (engl velocity) tarjoaa osittaisen ratkaisun tähän Velositeetilla tarkoitetaan Story pointtien määrää, minkä verran tiimi pystyy
keskimäärin toteuttamaan yhden sprintin aikana
Jos tiimin velositeetti on selvillä ja projektissa toteutettavaksi tarkoitetut User storyt on estimoitu, on helppo tehdä alustava arvio projektin viemästä aikamäärästä
(User storyjen estimaattien summa) / velositeetti * sprintin pituus


Projektin alkaessa velositeetti ei yleensä ole selvillä, ellei kyseessä ole jo yhdessä työskennellyt tiimi
On kehitetty tapoja joiden avulla velositeetti voidaan yrittää etukäteen ennustaa

Hyvin epäluotettavia, emme käsittele niitä nyt
Julkaisun suunnittelu – release planning
 
Velositeetti vaihtelee tyypillisesti alussa melko paljon ja alkaa stabiloitumaan vasta muutaman sprintin päästä
Estimointi on aluksi vaikeampaa varsinkin jos sovellusalue ja käytetyt teknologiat eivät ole täysin tuttuja

Tiimin velositeetti ja siihen perustuva projektin keston arvio alkaakin tarkentumaan pikkuhiljaa

Velositeetti
 
 

Ketterissä menetelmissä on oleellista kuvata mahdollisimman realistisesti projektin etenemistä
Tämän takia velositeettiin lasketaan mukaan ainoastaan täysin valmiiksi (eli Definition of Donen mukaisesti) toteutettujen User storyjen Story pointit
”lähes valmiiksi” tehtyä työtä ei siis katsota ollenkaan tehdyksi työksi
http://jamesshore.com/Agile-Book/done_done.html
 
 
 
Ketterän projektin etenemistä kuvataan yleensä Release Burndown -kaavion avulla
Aika etenee x-akselissa sprintti kerrallaan
y-akselilla on jäljellä olevan työn määrä story pointteina mitattuna
 
Julkaisun suunnittelu – release planning
 
Ketterässä projektissa vaatimukset saattavat muuttua kehitystyön aikana, siksi jäljellä olevan työn määrä ei aina vähene
 
Julkaisun suunnittelu – release planning
Joskus käytetäänkin Burn Up -kaavioita joka tuo selkeämmin esiin kesken projektin etenemisen tapahtuvan työmäärän kasvun
 
## Roadmap

teema -> epic -> stroy

storymapping


# Sprintin suunnittelu
 

Sprintin/iteraation suunnittelu
Kertauksena viime viikolta: Scrum määrittelee pidettäväksi ennen jokaista
sprinttiä suunnittelupalaverin
Palaverin ensimmäinen tavoite on selvittää mitä sprintin aikana tehdään
Product Owner esittelee Product backlogin kärjessä olevat vaatimukset
Tiimin on tarkoitus olla riittävällä tasolla selvillä mitä vaatimuksilla tarkoitetaan
Tiimi valitsee tehtäväksi niin monta Backlogin storyistä kuin se arvioi kykenevänsä sprintin aikana toteuttamaan Definition of Donen määrittelemällä laatutasolla


Sprintin aikana toteutettavien vaatimusten lisäksi asetetaan sprintin tavoite Suunnittelukokouksen toisena tavoitteena miten sprintin tavoitteet
saavutetaan
Tiimi suunnittelee toteutettavaksi valitut vaatimukset tarvittavalla tasolla Tarkennetaan nyt Sprintin suunnitteluun ja läpivientiin liittyviä asioita
Lähteenä Kniberg Scrum and XP From the Trenches, luvut 3-6






 

Sprintin suunnittelu Suunnitteluun osallistuu Product Owner ja kehittäjätiimi
Lähtökohtana on sopivassa tilassa oleva eli DEEP Product backlog
Priorisoitu ja estimoitu
Korkeimman prioriteetin omaavat User storyt tarpeeksi pieniä ja Product Ownerin hyvin ymmärtämiä

Suunnittelun yhteydessä määritellään sprintin tavoite (sprint goal)
Tavoite on jotain geneerisempää kuin yksittäisten backlogissa olevien User storyjen toteuttaminen

Scrumin kehittäjä Ken Schwaber mainitsee 2002 kirjoitetussa kirjassaan asettavansa usein ensimmäisen sprintin tavoitteeksi: ”demonstrate a key piece of user functionality on the selected technology”
Seuraavalla sivulla Mike Cohnin määritelmä sprintin tavoitteesta

 

 


A sprint goal is a short, one- or two-sentence, description of what the team plans to achieve during the sprint
It is written collaboratively by the team and the product owner
The following are typical sprint goals on an eCommerce application:
Implement basic shopping cart functionality including add, remove, and update quantities
The checkout process—pay for an order, pick shipping, order gift wrapping, etc.

The sprint goal can be used for quick reporting to those outside the sprint
There are always stakeholders who want to know what the team is working on, but who do not need to hear about each product backlog item (User story) in detail


The success of the sprint will later be assessed during the Sprint Review Meeting against the sprint goal, rather than against each specific item selected from the product backlog
http://www.mountaingoatsoftware.com/scrum/sprint-planning-meeting



Sprintin tavoite [Mike Cohn]
 

Sprintin tavoitteen asettamisen lisäksi tulee valita backlogista sprintin aikana toteutettavat User storyt
Pääperiaate on valita ”sopiva määrä” backlogin korkeimmalle priorisoituja Storyjä
Valituksi tulevat Storyt siirretään sprintin backlogiin
Toteutettavien user storyjen valinta
 
 

Kehitystiimi siis päättää kuinka monta user storyä sprinttiin otetaan toteutettavaksi
Tapoja päättää sprinttiin otettavien user storyjen määrä on muutamia:
”perstuntuma”: otetaan niin monta korkeimman priotiteetin Storyä kuin mihin kaikki tiimiläiset tuntevat voivansa sitoutua
Jos storyt on estimoitu ja tiimin velositeetti tunnetaan, otetaan sprinttiin velositeetin verran storyjä
Edellisten yhdistelmä

Jos user storyjä ei ole estimoitu tai velositeetti ei ole tiedossa, ”perstuntumamenetelmä” lienee ainoa jota voidaan käyttää
Tässäkin menetelmässä tiimi saa valita vain sellaiseen määrän storyjä, jotka se kokee voivansa toteuttaa kunnolla eli ”definition of donen” määrittelemän (eli suunnittelu, toteutus, automaattiset testit, testaus, integrointi, dokumentointi) mukaan valmiiksi
Velositeetin käsite ja estimaatithan huomioivat ”definition of donen”





Sprinttiin otettavien User storyjen määrä
 

Jos tiimin velositeetti on tiedossa ja user storyt on estimoitu, otetaan Storyjä mukaan maksimissaan velositeetin verran
Product ownerilla on mahdollisuuksia vaikuttaa sprinttiin mukaan otettaviin User storyihin tekemällä uudelleenpriorisointia
Entä jos Product Owner haluaa storyn D mukaan sprinttiin?
Toteutettavien user stroyjen valinta
 
 
Product Owner nostaa D:n prioriteettia, C tippuu pois sprinttiin valittavien User Storyjen joukosta
Entä jos Product Owner haluaa Sprintiin mukaan kaikki user storyt A-D?
Uudelleenpriorisointi
 
 
Jostain on luovuttava: Product Owner pienentää user storyn A määrittelemää toiminnallisuutta, kehitystiimi estimoi pienennetyn A:n ja nyt A-D mahtuvat sprinttiin:
Entä jos A:n toiminnallisuutta ei saa karsia ja silti Product Owner haluaa A-D:n mukaan sprinttiin?
User Storyn scopen pienentäminen
 
 
User Storyn jakaminen
Ratkaisu on jakaa User story A kahteen pienempään osaan A1:n ja A2:n
A1 sisältää A:n tärkeimmät piirteet ja otetaan mukaan sprinttiin A2 saa alemman prioriteetin ja jää sprintin ulkopuolelle


 
 





Storyjen jakaminen pienemmiksi ei ole aloittelijalle, eikä aina ammattilaisellekaan helppoa
Seuraavassa Richard Lawrencen ohjeita
http://www.richardlawrence.info/2009/10/28/patterns-for-splitting-user- stories/

User storyjen jakaminen
Good user stories follow Bill Wake’s INVEST model. They’re Independent, Negotiable, Valuable, Estimable, Small, and Testable
Many new agile teams attempt to split stories by architectural layer: one story for the UI, another for the database, etc.
This may satisfy small, but it fails at independent and valuable. How small should stories be?
I recommend 6-10 stories per iteration, so how small is small enough depends on your team’s velocity.


Over my years with agile, I’ve discovered nine patterns for splitting user stories into good, smaller stories.
 
User storyjen jakaminen Pattern #1: Workflow Steps
As a content manager, I can publish a news story to the corporate website. ==>
... I can write and save a news story.
... I can edit a saved news story.
... I can publish a news story directly to the corporate website.
... I can publish a news story with editor review.
... I can view a news story on a editor review site.
... I can publish a news story from the editor review site to production

Pattern #2: Business Rule Variations
As a user, I can search for flights with flexible dates. ==>
... as “between dates x and y.”
... as “a weekend in December.”
... as “± n days of dates x and y.”











 
User storyjen jakaminen Pattern #3: Major Effort
As a user, I can pay for my flight with VISA, MasterCard, Diners Club, or American Express.
==>
... I can pay with VISA
... I can pay with all four credit card types (VISA, MC, DC, AMEX) (given one card type already implemented).

Pattern #4: Simple/Complex
As a user, I can search for flights between two destinations. ==>
... when only direct flights used.
... specifying a max number of stops.
... including nearby airports. ... using flexible dates.








 
User storyjen jakaminen Pattern #6: Data Entry Methods
As a user, I can search for flights between two destinations. ==>
... using simple date input.
... with a fancy calendar UI.

Pattern #7: Operations
As a user, I can manage my account. ==>
... I can sign up for an account.
... I can edit my account settings.
... I can cancel my account

 

  
 
User storyjen jakaminen Pattern #8: Defer Performance
As a user, I can search for flights between two destinations. ==>
... (slow—just get it done, show a “searching” animation). ... (in under 5 seconds).

Pattern #9: Break Out a Spike
A story may be large not because it’s necessarily complex, but because the implementation is poorly understood. In this case, no amount of talking about the business part of the story will allow you to break it up. Do a time-boxed spike first to resolve uncertainty around the implementation. Then, you can do the implementation or have a better idea of how to break it up.
As a user, I can pay by credit card. ==>
Investigate credit card processing. Implement credit card processing.







 
Sprintin suunnittelun yhteydessä sprinttiin valituille User storyille tehdään karkean tason suunnittelu
Mietitään mitä teknisen tason tehtäviä (task) on toteutettava, jotta user story saadaan valmiiksi
Suunnitellaan komponentteja ja rajapintoja karkealla tasolla
Huomioidaan user storyn aiheuttamat muutokset olemassa olevaan osaan sovelluksesta
Kaikkia storyyn liittyviä taskeja ei sprintin suunnittelun aikana välttämättä löydetä
Uusia taskeja generoidaan tarvittaessa sprintin edetessä
Sprintin suunnittelun toinen vaihe
 




 

Sprintin tehtävälista eli Sprint backlog koostuu sprintiin valituista user storeista ja niihin liittyvistä tehtävistä eli taskeista
Backlog voi olla organisoitu ”taskboardiksi”:
Sprint backlog
 




Kuvassa sprinttiin on valittu 4 user storyä ja taskboard on jaettu neljään kaistaan (swimlane), jokaiselle Storylle oma kaista
Kuten arvata saattaa, jokaisen taskin on tarkoitus siirtyä sarakkeesta ”not checked out” sarakkeeseen ”done”
Sprintissä arvioidaan päivittäin jäljellä olevaksi arvioitua työmäärää
Taskien jäljellä oleva työmäärä arvioidaan yleensä tunteina
Jokaiseen taskiin kirjataan sen arvioitu vielä jäljellä oleva työmäärä
Jos käytössä on ”manuaalinen” taskboard, kirjoitetaan arvio suoraan taskia edustavaan postit-lappuun
Arviota päivitetään joka päivä
Arvio voi nousta jos taski huomataankin työläämmäksi mitä alun perin ajateltiin

On varsin tavallista, että uusia taskeja keksitään kesken sprintin
Uudet taskit saavat olla ainoastaan kehittäjätiimin itse identifioimia menossa olevaan sprinttiin liittyviä töitä

Eli sprintissä jäljellä oleva työaika-arvio voi kasvaa kesken sprintin!

 

Taskboard
 

Sprintissä jäljellä olevan työmäärän arviointi
Jokaisen taskin jäljellä olevan työn määrä arvioidaan esim. päivittäisessä scrum-palaverissa eli daily scrumeissa
Jäljellä olevaa työmäärää (tunteina mitattuna) visualisoidaan sprintin etenemistä kuvaavalla burndown-käyrällä
Tätä sprintin burndown:ia ei pidä sekottaa projektin burndown-käyrään!

 
 
 Tilanne sprintin alussa
 Ja puolen välin jälkeen
 

Taskboardin sijaan sprintin seuranta hoidetaan usein taulukkolaskennan avulla, erityisesti jos tiimillä ei ole käytössä omaa ”seinää”
Tällöin sprintin jokaiselle päivälle on oma sarake, johon merkitään kunkin päivän alussa estimaatti taskien jäljellä olevasta työmäärästä (tunteina)
Erään ohtuprojektin product- ja sprintbacklogit:
https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK 8AZNuHS571Wlxo/edit?usp=sharing
Sprintin seuranta taulukkomuodossa
 

 Taskboardissa voi olla merkattu useampiakin työvaiheita
 
Yhtä aikaa työn alla olevien taskien suuri määrä voi koitua Scrumissa ongelmaksi, sillä riski sille, että sprintin päätyttyä on paljon osittain valmiita user storyja kasvaa
 
Yhtäaikaa tehtävän työn rajoittaminen
Voikin olla mielekästä rajoittaa yhtä aikaa tekemisen alla olevien töiden
määrää asettamalla work in progress (eli WIP) -rajoituksia
WIP-rajoitukset on lainattu Kanban-menetelmästä
Scrumin ja Kanbanin yhdistelmää kutsutaan usein nimellä Scrumban
Scrumbanissa on tosin muitakin Kanbanista lainattuja elementtejä kuin WIP- rajoitukset


Esimerkki kirjasta http://www.infoq.com/minibooks/kanban-scrum-minibook
Kunkin vaiheen WIP-rajoitus on merkitty numerona, eli vaiheessa saa olla yhtä aikaa vain rajoituksen verran taskeja



 
 
 
  
 
 
 


Yhtäaikaa tehtävän työn määrää kontrolloivien WIP- eli Work in progress -rajoitusten idea on siis peräisin Kanban-menetelmästä
Kanban-menetelmä taas on eräs keskeisimmistä Lean-ajattelun työkaluista
Lean-ajattelun taustalla on idea turhuuden (engl. waste, jap. muda) eli arvoa tuottamattomien asioiden eliminoimisessa organisaatioiden toiminnassa
Lean-ajattelu on peräisin jo kymmeniä vuosia vanhasta Toyota Production Systemistä


Lean tunnistaa useita erilaisia turhuuksia (lean waste), näiden joukossa ovat esim. osittain tehty työ (partially done work), välivarastointi ja turha odottaminen
Ohjelmistotuotannon kontekstiin sovellettuna työvaiheet, jotka eivät ole vielä definition of donen mielessä valmiina edustavat leanin mukaista turhuutta
Esim. testaamista odottavien toiminnallisuuksien (user storyjen) katsotaan olevan ”välivarastoituna”, samoin jo testatut mutta tuotantoon viemistä vielä odottavat toiminnallisuudet ovat ”välivastastossa”
Asiakkaalle toiminnallisuudet alkavat tuottaa arvoa vasta kun ne saadaan käyttöön, siinä vaiheessa kun toiminnallisuudet ovat työn alla, ne aiheuttavat ainoastaan kustannuksia ja muodostavat riskin



Yhtäaikaa tehtävän työn rajoittamisien motivaatio
 
Kanban- ja Scrumban-menetelmissä WIP-rajoitteilla rajataan useimmiten yhtä aikaa työn alla olevien User storyjen määrää
Kanbanissa ja Scrumbanissa ei yleensä ole olemassa Scrumin sprintin kaltaista kehitystyötä rytmittävää käsitettä
Voidaan esim noudattaa periaatetta, missä tiimi tekee yhden user storyn kerrallaan valmiiksi, demoaa sen asiakkaalle ja valitsee product backlogista seuraavan storyn työn alle
Joissain tapauksissa asiakastapaamiset ja valmiiden storyjen esittely voi Kanbanissa ja Scrumbanissa tapahtua sovitun aikataulun, esim. 2 viikon välein vaikka itse kehitystyö ei noudattaisi sprinttejä vaan etenisi story kerrallaan

WIP-rajoitteita voidaan soveltaa Scrumin yhteydessä monella tapaa
Järkevintä on rajoittaa sprintin aikana yhtäaikaa työn alla olevien storyjen määrää mahdollisimman pieneksi
On myös tavallista rajoittaa eri työvaiheessa, esim. toteutuksen olevien taskien määrää
tai yksittäisellä sovelluskehittäjän kerrallaan työn alla olevien töiden määrää

WIP-rajoitteita säädetään usein retrospektiivien yhteydessä jos kehitystyössä havaitaan ongelmia






Yhtäaikaa tehtävän työn rajoittaminen
 


Taskboard ja burndown-käyrä tuovat selkeästi esille sprintin etenemisen asteen ja onkin suositeltavaa, että ne ovat kaikkien tiimiläisten ja projektin sidosryhmäläisten nähtävillä
Ketterät menetelmät korostavat läpinäkyvyyttä (transparency) ja tiedon maksimaalista kommunikoitumista, näin mahdolliset ongelmatkaan eivät tule yllätyksenä ja niihin on helpompi puuttua ajoissa
Lisää aiheesta:
http://xprogramming.com/articles/bigvisiblecharts/
http://blog.mountaingoatsoftware.com/the-ideal-agile-workspace

Usein toki käytetään myös elektronisia vastineita taskboardista, erityisesti jos kyseessä on hajautettu tiimi, esim:
Edellisen sivun tyyliin google docs tai excel
Asana, Trello, Github project, Pivotal Tracker, JIRA, trac, bugzilla, ...

Yleinen konsensus on kuitenkin, että ainakin Sprintin hallintaan manuaalinen postit-lappuja hyödyntävä taskboard on käytettävyydeltään ylivoimainen
 


Sprintin etenemisen seuranta


Kuten luennolla 2 mainittiin pidetään sprintin lopussa sprint review eli katselmointi ja sprintin retrospektiivi
Katselmoinnissa arvioidaan kehitystiimin tekemää työtä
Kesken jääneet tai epäkelvosti toteutetut User storyt siirretään takaisin backlogiin

Retrospektiivissä taas tiimi itse tarkastelee omaa toimintatapaansa ja identifioi mahdollisia kehityskohteita seuraavaan sprinttiin
Sprintin aikana on product backlogiin tullut ehkä uusia User storyja tai jo olemassa olevia storyjä on muutettu ja uudelleenpriorisoitu
On suositeltavaa että kehitystiimi käyttää pienen määrän aikaa sprintin aikana product backlogin vaatimiin toimiin eli (backlog groomingiin), esim. uusien User storyjen estimointiin
Jos product backlog on hyvässä kunnossa (DEEP) sprintin loppuessa, on jälleen helppo lähteä sprintin suunnitteluun ja uuteen sprinttiin