---
layout: page
title: Osa 2
title_long: 'Ohjelmistojen vaatimusmäärittely, tuotteen ja sprintin hallinta'
inheader: yes
permalink: /osa2/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

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

![]({{ "/images/2-3.png" | absolute_url }}){:height="300px" }

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
Lähteenä on monia kirjoja ja blogikirjoituksia, mm. verkosta löytyvät [Henrik Kniberg: Scrum and XP from the trenches](https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/), [James Shore: Art of Agile development](https://www.jamesshore.com/Agile-Book/) ja [Jeff Sutherland ym.:A Scrum book](http://scrumbook.org/) sekä [Mike Cohnin](https://www.mountaingoatsoftware.com/blog) loistavat kirjat Agile Estimation and Planning ja User stories applied.
  
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

![]({{ "/images/2-5.png" | absolute_url }}){:height="200px" }

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

![]({{ "/images/2-6.png" | absolute_url }}){:height="400px" }

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
  
Eräs melko suosittu tapa estimoinnille on estimoida kiinnittää muutama erikoikoinen story referenssiksi ja verrata sitten muiden storyjen vaativuutta näihin:

![]({{ "/images/2-7.png" | absolute_url }}){:height="300px" }

Koska estimointi on joka tapauksessa melko epätarkkaa, ei estimoinnissa ole tarkoituksenmukaista käyttää kovin tarkkaa skaalaa. Useimmiten käytetään yläpäästä harvenevaa skaalaa esim. 1, 2, 3, 5, 10, 20, 40, 100.  Myös fibonaccin lukujono 1, 2, 3, 5, 8, 13, 21, 34, 55 on suosiossa estimoinnin skaalana.

Motivaationa harvalle skaalalle on se, että koska isojen storyjen estimointiin liittyy erityisen suuri epävarmuus, ei kannata edes teeskennellä että skaala olisi isojen storyjen suhteen kovin tarkka.

Joskus estimoinnissa käytetään arvoa _epic_, jolla tarkoitetaan niin isoa tai huonosti ymmärrettyä user storyä että sitä ei ole toistaiseksi mieltä estimoida, itseasiassa alan suurin auktoriteetti Mike Cohn suosittelee käyttämään skaalaa 1, 2, 3, 5, 8 tai 1, 2, 4, 8 ja antamaan sitä suuremmille estimaatti epic. 

Jotta estimaatin _epic_ saaneet storyt tulisivat estimoitua, ne tulee pilkkoa pienempiin, paremminhallittaviin storyihin. Käsittellä epic on eräs toinenkin merkitys user storyjen parissa mihin palaamme hieman myöhemmin.

Hyvänä periaatteena pidetään että kaikki kehitystiimin jäsenet osallistuvat estimointiin. Näin tiimille syntyy yhtenäinen ymmärrys user storyn sisällöstä. Eräs suosittu tapa osallistaa koko tiimi estimointiin on [_planning poker_](https://www.crisp.se/bocker-och-produkter/planning-poker).

### Planning poker

Planning pokerissa käydään läpi backlogilla olevia user storyja yksi kerrallaan. Product owner esittelee user storyn sisällön ja selittää tarkemmin storyn luonnetta ja vaatimuksia.

Tiimi keskustelee storystä, miettii kenties storyn jakautumista teknisiin työvaiheisiin
Kun kaikki kokevat olevansa valmiina arvioimaan, jokainen kertoo arvionsa (yksikkönä siis story point). Usein tämä vaihe toteutetaan siten, että käytössä on pelikortteja, joilla on estimaattien arvoja, esim 1, 2, 5, 10, ... ja kukin estimointiin osallistunut näyttää estimaattinsa yhtä aikaa.

Jos estimaatit ovat suunnilleen samaa tasoa, merkataan estimaatti User storylle ja siirrytään seuraavaan.

Jos ehdotetuissa estimaateissa on paljon eroavaisuutta, keskustelee tiimi eroavaisuuksien syistä. Voi esimerkiksi olla, että osa tiimin jäsenistä ymmärtää user storyn vaatimukset aivan eri tavalla ja tämä aiheuttaa eroavaisuutta estimaatteihin
 
Kun tiimi on keskustellut aikansa, tapahtuu uusi estimointikierros ja konsensus todennäköisesti saavutetaan pian.

![]({{ "/images/2-8.png" | absolute_url }}){:height="350px" }
 
## Hyvä product backlog on DEEP

Mike Cohn ja Roman Pichler lanseerasivat lyhenteen
[DEEP](https://www.romanpichler.com/blog/make-the-product-backlog-deep/) kuvaimaan hyvän backlogin ominaisuuksia. Lyhenne tulee sanoista _detailed appropriatly, estimated, emergent_ ja _prioritized_.

Hyvä ominaisuuksista _estimated_ ja _prioritized_ ovat meille tuttuja: storyillä on työmääräarviot ja storyt on priorisoitu eli asetettu tärkeysjärjestykseen.

Hyvä backlog on myös _detailed appropriately_ eli sopivan detaljoitu. Backlogin prioriteeteiltaan korkeimpien eli pian toteutettavaksi tulevien user storyjen tulee olla suhteellisen pieniä, niiden hyväksymäkriteerit tulisi olla suunilleen selvillä ja vaadittusta työmäärä tulisi olla kohtuullisen hyvä kuva. Alemman prioriteetin user storyt voivat vielä olla isompia ja karkeammin estimoituja. Itseasiassa alemman prioriteetin storyjä ei edes kannata määritellä kovin tarkasti, sillä kestää vielä pitkään ennen kuin ne otetaan toteutettavaksi johonkin sprinttiin. Itseasiassa usein käy niin, että alemman prioriteetin storyjä ei lopulta toteuteta koskaan, eli niihin ei todellakaan kannata spekulatiivisesti investoida liikaa aikaa.
   
_Emergent_ kuvaa backlogin [muuttuvaa luonnetta](https://www.romanpichler.com/blog/make-the-product-backlog-deep/) :

> The product backlog has an organic quality. It evolves, and its contents change frequently. New items emerge based on customer and user feedback, and they are added to the product backlog. Existing items are modified, reprioritized, refined, or removed on an ongoing basis.

Backlog ei siis pysy muuttumattomana vaan elää koko ajan, uusia storyjä tulee, olemassaolevia storyjä tarkennetaan ja pilkotaan, tarpeettomia storyjä poistetaan. Työmääräarvioia ja prioriteetteja uudelleenmääritellään.

Tämä kaikki ei tietenkään tapahdu itsestään, vaan takia backlogia tulee aktiivisesti hoitaa (engl. backlog grooming tai backlog refinement) projektin edetessä. [Scrum guide](https://scrumguides.org/scrum-guide.html#artifacts-productbacklog) mainitsee että backlogin groomausta tulee tapahtua läpi sprintin yhteistyössä product ownerin ja kehitystiimin kesken. 

Ideana on siis pitää backlog koko ajan DEEP-tilassa, joka taas helpottaa oleellisesti ennen jokaista uutta sprinttiä tehtävää sprintin suunnittelua. Jos backlog on huonossa kunnossa (eli prioriteetit miten sattuu, tärkeät storyt epämääräisessä tilanteessa, uusia tunnistettuja tarpeita vastaavia storyjä ei ole lisätty) sprintin suunnittelua tehtäessä, menee kaikkien aikaa hukkaan.  

![]({{ "/images/2-9.png" | absolute_url }}){:height="250px" }

## User story ja epiikki

Aiemmin mainitsimme, että hyvän user storyn kriteerinä voidaan pitää että se noudataa INVEST-kriteeristöä, eli story on _independent, negotiable, valuable, small, testable_. Eräänä kriteerinä on siis storyn pienuus, user storyn tulee olla toteutettavissa yhdessä sprintissä. Backlokin DEEP-kriteeristö taas sanoo, että backlogin pitää olla _sopivan detaljoitu_, erityisesti alhaisen prioriteetin storyja ei kannata tehdä liian tarkasti. INVEST-kriteeristö päteekin nimenomaan korkean prioriteetin storyihin, ennen kun story voidaan otaa toteutettavaksi, tulee sen olla tarpeeksi pieni, hyvin estimoitu ja testattavissa, eli storyn hyväksymiskriteerin tulee olla selkeä. 

Backlogin alaosoissa olevat storyt taas voivat olla isoja, jopa sellaisia että niitä ei missään nimessä lopulta pystytä edes toteuttamaan yhdessä sprintissä, vaan ne tulee jakaa pienempiin, rajatumpiin storyihin. Tälläisiä isoja storyjä nimitetään usein _epiikeiksi_ (engl. epic). 

## Velositeetti

User storyjen estimoinnin toinen tarkoitus on, että se mahdollistaa koko projektin tai jonkin sen suuremman kokonaisuuden viemän aikamäärän summittaisen arvioinnin. 

Jos estimoinnin yksikkönä kuitenkin on abstrakti käsite _story point_, miten estimaattien avulla on mahdollista arvioida projektin viemää aikamäärää?

Kehitystiimin _velositeetti_ (engll velocity) tarjoaa tähän osittaisen ratkaisun. Velositeetilla tarkoitetaan story pointtien määrää, minkä verran tiimi pystyy keskimäärin toteuttamaan yhden sprintin aikana.

Jos tiimin velositeetti on selvillä ja projektissa tai sen jossain kokonaisuudessa toteutettavaksi tarkoitetut user storyt on estimoitu, on helppo tehdä alustava arvio vaadittavasta aikamäärästä

> (user storyjen estimaattien summa) / velositeetti * sprintin pituus

Projektin alkaessa velositeetti ei yleensä ole selvillä, ellei kyseessä ole jo aiemmin yhdessä työskennellyt tiimi. On kehitetty useita erilaisia tapoja, joiden avulla velositeetti voidaan yrittää ennustaa jo ennen projektin aloittamista. Nämä ovat kuitenin hyvin epäluotettavia, ja emme käsittele niitä nyt.

Velositeetti vaihtelee tyypillisesti alussa melko paljon, erityisesti jos sovellusalue ja/tai käytetyt teknologiat eivät ole tiimille täysin tuttuja. Velositeetti kuitenkin alkaa yleensä stabiloitumaan stabiloitumaan vasta muutaman sprintin jälkeen.

![]({{ "/images/2-11.png" | absolute_url }}){:height="350px" }

Tiimin velositeetti ja siihen perustuva projektin tai sen osakokonaisuuden keston arvio alkaakin tarkentumaan pikkuhiljaa.

Ketterissä menetelmissä on oleellista kuvata mahdollisimman realistisesti projektin etenemistä. Tämän takia velositeettiin lasketaan mukaan ainoastaan täysin valmiiksi (eli Definition of donen mukaisesti) toteutettujen user storyjen story pointit "lähes valmiiksi" tehtyä työtä ei siis katsota ollenkaan tehdyksi työksi

![]({{ "/images/2-12.png" | absolute_url }}){:height="250px" }

Ketterän projektin etenemistä kuvataan joskus _release burndown_ -kaavion avulla
Aika etenee x-akselissa sprintti kerrallaan, y-akselilla on jäljellä olevan työn määrä story pointteina mitattuna.
  
![]({{ "/images/2-13.png" | absolute_url }}){:height="350px" }

Ketterässä projektissa vaatimukset saattavat muuttua kehitystyön aikana, siksi jäljellä olevan työn määrä ei aina vähene. Joskus käytetäänkin Burn Up -kaavioita joka tuo selkeämmin esiin kesken projektin etenemisen tapahtuvan työmäärän kasvun.

![]({{ "/images/2-14.png" | absolute_url }}){:height="350px" }

## Julkaisun suunnittelu ja tuotteen roadmap

Product backlog siis järjestelmän vaatimukset määrittelevät user storyt prioriteettijärjestyksessä, usein siten että asiakkaalle eniten arvoa tuottavat user storyt on sijoitettu korkeimmalle. Jokaiseen sprinttiin otetaan toteutettavaksi aina muutama suurimman prioriteetin omaava user story, eli kehitystiimi toteuttaa user storyjä pikkuhiljaa alkaen eniten arvoa tuottavista, edeten alemman prioriteetin omaaviin. 

Ohjelmistoja kehitettäessä tarvitaan usein myös backlogia ja yksittäisiä sprinttejä korkeammalla tasolla olevaa näkymää aikataulutukseen ja kehitystyön etenemiseen. Syitä tälle on monia, sovelluksilla saattaa esimerkiksi olla erilaisia deadlineja, joihin mennessä tiettyjen ominaisuuksin on pakko olla valmiina. Joissain tilanteissa sovelluksen versioita halutaan julkaista tasaisin väliajoin, esimerkiksi 4 kuukauden välein, jne.

Tälläistä yksittäisiä sprinttejä pidemmän katsauksen tekemistä nimitetään usein _julkaisun sunnitteluksi_ (engl. release planning). Julkaisun suunnittelussa mietitään yleensä user storyjä karkeammalla tasolla mitä isompia kokonaisuuksia kuhunkin isompaan osakokonaisuuteen (engl. milestone) halutaan mukaan, milestone taas koostuu tyypillisesti useammasta sprintistä. 

Jossain määrin voidaan ajatella, että julkaisun suunnittelussa jaetaan backlogin sisältö karkeasti isompiin lohkoihin, joihin kuhunkin kuuluu joukko user storyjä, joiden ajatellaan suunnitteluhetkellä tulevan tiettyyn milestoneen: 

![]({{ "/images/2-10.png" | absolute_url }})

Eri milestonet ovat tyypillisesti ajallisesti saman pituisia, eli koostuvat vakiomäärästä sprinttejä. Kullakin milestonella voi olla oma tavoitteensa, esim: 

- milestone 1: verkkokaupan perustoiminnallisuus
- milestone 2: tuotteiden arvostelu ja siihen perustuva suosittelu
- milestone 3: käyttäjien ostoshistoriaan liittyvä tuotteiden suosittelu 

Ketterän hengen mukaan milestonejen sisältö voi kuitenkin elää, ja mitä kauempana olevasta tulevaisuudesta kyse, sitä spekulatiivisempi julkaisusuunnitelman sisältö on. Julkaisusuunnitelmaa nimitetään usein myös tuotteen [roadmapiksi](https://www.romanpichler.com/blog/product-roadmap-vs-release-plan/).

## User story mapping

Product backlogin hienoisena hankaluutena on, että sovelluksen kehityksen suuret linjat eivät tule siitä kunnolla esille.  [User story mapping](https://www.jpattonassociates.com/user-story-mapping/) on viime aikoina huomiota saanut tekniikka, joka tarjoaa product backlogin "yksiulotteista" näkymää paremman työkalun sovelluksen julkaisun suunnitteluun. 

Tekniikka jakaa user storyt sovelluksen eri toiminnallisten teemojen alle omaksi sarakkeekseen tärkeysjärjestykseen:

![]({{ "/images/2-15.png" | absolute_url }}){:height="400px" }

Story mapin rivit ovat taas loogisia kokonaisuuksia, joista kustakin muodostuu sovellukseen oma milestone tai vaikkapa yhdessä sprintissä kehitettävä mielekäs kokonaisuus.

## Kannattaako estimointi?

User storyjen viemän työmäärän arvioimiseen on siis kaksi motivaatiota
- auttaa asiakasta priorisoinnissa
- mahdollistaa koko projektin tai tiettyjä milestonejen viemän ajan ja täten myös kustannuksen arvioinnin

Story point -pohjainen suhteellinen estimointi on saavuttanut vankan aseman ketterän ohjelmistokehityksen kirjallisuudessa. Scrum guide mainitsee että backlogilla olevat vaatimukset ovat estimoituja, samoin kuten monet parhaat käytänteet kuten DEEP.

Viime vuosina syntynyt [#NoEstimates](https://twitter.com/search?q=%23noestimates)-liike on kuitenkin ruvennut kyseenalaistamaan ketterässä ohjelmistokehityksessä käytettyä story point -muotoista estimointitapaa ja pitää siitä saavutettuja hyötyjä liian vähäisinä verrattuna estimointiin käytettyyn aikaan ja vaivaan. 
#NoEstimates-liike [ei missään tapauksessa kiistä](https://plan.io/blog/noestimates-6-software-experts-give-their-view/) etteiköä työmääräarvioista olisi hyötyä, tarkoituksena onkin saada saada ihmiset ajattelemaan, missä tilanteissa ja estimointi on järkevää ja nostaa esiin vaihtoehtoisista tapoja estimoinnin tekoon.

Eräs jo [vuosia käytössä](https://ronjeffries.com/xprog/articles/jatrtsmetric/) ollut menetelmä on story point -perustaisen estimoinnin sijaan on arvioida kehitystiimin velositeetti laskemalla kussakin sprintissä valmistuneiden user storyjen lukumäärä. Monien [kokemuksen](http://blog.karhatsu.com/2013/08/from-hour-estimates-gradually-to.html) mukaan menetelmä toimii varsin hyvin, erityisesti jos storyt ovat riittävän tasakokoisia. 

## Sprintin suunnittelu
 
Kertauksena [viime viikolta](vikko1), Scrum määrittelee pidettäväksi ennen jokaista sprinttiä suunnittelupalaverin. Palaverin primäärisenä tavoiteena on selvittää _mitä user storyjä sprintiin_ valitaan toteutettavaksi.

Sprintin suunnittelun lähtökohtana on sopivassa tilassa oleva eli DEEP product backlog, eli backlog on priorisoitu ja estimoitu ja korkeimman prioriteetin omaavat user storyt tarpeeksi pieniä ja product ownerin hyvin ymmärtämiä.

Sprintin suunnittelussa product owner varmistaa, että kehitystiimi ymmärtää hyvin product backlogin kärkipäässä olevat user storyt. Tiimi valitsee tehtäväksi niin monta backlogin storyistä kuin se arvioi kykenevänsä sprintin aikana toteuttamaan Definition of Donen määrittelemällä laatutasolla.

## Sprintin tavoite

Scrum guide kehottaa että suunnittelun yhteydessä määritellään _sprintin tavoite_ (engl. sprint goal), jolla tarkoitetaan lyhyttä, yhden tai kahden lauseen kuvausta mitä siitä mitä tiimi on aikeissa sprintin aikana tehdä.

Esimeriksi verkkokaupaa kehitettäessä sprinttien tavoitteita voisivat olla:
- Ostorskorin perustoiminnallisuus: tuotteiden lisäys ja poisto
- Ostosten maksaminen ja toimitustavan valinta

Scrumin kehittäjä Ken Schwaber mainitsee 2002 kirjoitetussa kirjassaan asettavansa usein ensimmäisen sprintin tavoitteeksi: "demonstrate a key piece of user functionality on the selected technology".

Sprintin tavoite toimii tiimin ulkopuoliselle nopeana kuvauksena siitä mitä tiimi on menossa olevan sprintin aikana tekemässä. Vaikka sama asia periaatteessa selviää myös katsomalla mitkä user storyt ovat tiimillä työn alla, on geneerisemmässä muodossa oleva lyhyempi kuvaus parempi monille ohjelmiston sidosryhmille, kuten firman johdolle, joita ei kiinnosta seurata tapahtumia yksittäisten storyjen tarkkuudella.

Sprintin onnistumista tarkastellaan yleensä suhteessa sprintin tavoitteeseen, eli vaikka sprintissä jäisikin yksittäisiä user storyjä toteuttamatta, voidaan sprintti todeta onnistuneeksi jos toteutettu toiminnallisuus kattaa sprintin tavoitteiden oleelliset osat.

## Sprintissä toteutettavien user storyjen määrä

Kehitystiimi siis päättää kuinka monta user storyä sprinttiin otetaan toteutettavaksi. Pääperiaate on valita "sopiva määrä" backlogin korkeimmalle priorisoituja user storyjä ja siirtää ne _sprint backlogiin_.

![]({{ "/images/2-16.png" | absolute_url }}){:height="350px" }

Tapoja päättää sprinttiin otettavien storyjen määrä on [useita](https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/):
- jos storyt on estimoitu ja tiimin velositeetti tunnetaan, otetaan sprinttiin velositeetin verran storyjä
- jos estimaatteja ei ole ja/tai velositeettiä ei tunneta, otetaan niin monta korkeimman priotiteetin storyä kuin mihin kaikki tiimiläiset tuntevat voivansa sitoutua
- edellisten yhdistelmä, eli vaikka velositeetti ja estimaatit olisi tiedossa, niin käytetään myös harkintaa sen suhteen onko velositeetin avulla valittu määrä tiimiläisistä sopivan tuntuinen

Käytetään mitä valintaperiaatetta periaatetta tahansa, on jokatapauksessa oleellista että toteutettavaksi valitaan vain sellainen määrä storyjä, jotka tiimi kokee voivansa toteuttaa kunnolla, "definition of donen" määrittelemällä laatutasolla (eli suunniteltu, toteutettu, integroitu, testattu ja mohdollisesti myös dokumentoitu ja käyttöönotettu). 

## Sprintissä toteutettavien user storyjen valinta

Oletusarvoisesti sprinttiin siis otetaan joukko backlogin kärjessä olevia user storyjä: 

![]({{ "/images/2-17.png" | absolute_url }}){:height="220px" }

Product ownerilla on kuitenkin mahdollisuuksia vaikuttaa sprinttiin mukaan otettaviin storyihin tekemällä _uudelleenpriorisointia_. 

Entä jos Product Owner haluaa storyn D mukaan sprinttiin? Product Owner nostaa D:n prioriteettia, C tippuu pois sprinttiin valittavien user storyjen joukosta:

![]({{ "/images/2-18.png" | absolute_url }}){:height="250px" }


Entä jos Product Owner haluaa Sprintiin mukaan kaikki user storyt A-D? Jostain on luovuttava: Product owner pienentää user storyn A määrittelemää toiminnallisuutta, kehitystiimi estimoi pienennetyn A:n ja nyt A-D mahtuvat sprinttiin:
 
![]({{ "/images/2-19.png" | absolute_url }}){:height="215px" }

Entä jos A:n toiminnallisuutta ei saa karsia ja silti Product Owner haluaa A-D:n mukaan sprinttiin?
Ratkaisu on jakaa user story A kahteen pienempään osaan A1:n ja A2:n. A1 sisältää A:n tärkeimmät piirteet ja otetaan mukaan sprinttiin, A2 saa alemman prioriteetin ja jää sprintin ulkopuolelle:
 
![]({{ "/images/2-20.png" | absolute_url }}){:height="250px" }

## User storyjen jakaminen

User storyjen jakaminen pienemmiksi ei ole aloittelijalle, eikä aina ammattilaisellekaan helppoa.

Jo aiemmin mainitti [INVEST]()-periaate antaa kuusi kriteeriä hyvälle, toteutettavaksi sopivalle user storylle, ja nämä kriteerit kannattaa pitää myös jakaessa storyjä pienemmiksi. Eräs melko ilmeinen tapa olisi jakaa storyjä ohjelmiston arkkitehtuurikerrosten mukaan, eli esim. _lisää tuote ostoskoriin_ jaettaisiin seuraaviin storyihin:

- selaimessa toimivaan käyttöliittymään nappi ostoksen lisäämiseksi
- palvelimella olevaan sovelluslogiikkaan mekanismi ostoskorin päivittämiselle
- tietokantaan taulu ostoskorin esittämineen

Tälläinen jako ei kuitenkaan ole hyvä, storyt eivät ole asiakkaalle arvoa tuottavia (valuable), eivätkä toisistaan riippumattomia (independent), eli jos storyistä toteutettaisiin vaikkapa ensimmäinen ja toinen, oltaisiin vielä riippuvaisia kolmannesta storystä ennen kuin toiminnallisuus olisi mielekäs.

Seuraavassa muutamia erilaisia tapoja [Richard Lawrencen](http://www.richardlawrence.info/2009/10/28/patterns-for-splitting-user- stories/) inspiroimana.

* Pattern 1: workflow steps*

Tarkastellaan Flamman kaltaista sovellusta jonka avulla voi mm. julkaista artikkeleja yrityksen web-sivulle. Eräs sovelluksen user storyistä on seuraava:

_As a content manager, I can publish a news story to the corporate website._ 

Artikkelien julkaisu sovellusta käyttävässä yrityksessä on monivaiheinen prosessi, kukin artikkeli kulkee usean työvaiheen (workflow) läpi, artikkelit mm. tarkastetaan kielellisesti (editor review) ja lainopillisesti (legal review), ja näitä varten artikkelit julkaistaan ensin ns. _staging_-ympäristöön. 

Eräs tapa pilkkoa alkuperäin story onkin jakaa se useampaan osaan eri työvaiheiden mukaan:

- _... I can publish a news story directly to the corporate website._
- _... I can publish a news story with editor review on a staging site._
- _... I can publish a news story with legal review on a staging site._
- _... I can view a news story on a staging site._
- _... I can publish a news story from the staging site to production._

Vaikka ensimmäinen story ei vielä yksistään tarjoa tukea kaikille työvaiheille, riittää sen toteuttaminen jo ehkä ominaisuuden käyttöönottoon, muut työvaiheet (editointi ja lainopillisuuden tarkastus) voidaan aluksi hoitaa järjestelmän ulkopuolella esim. emailitse. Myöhemmissä sprinteissä voidaan sitten toiminnallisuutta tarpeen mukaan laajentaa toteuttamalla muut storyt.

* Pattern #2: business rule variations*

Story joka sisältää monen kaltaisia kompleksisia ehtoja (bussines rule), esim.  

_As a user, I can search for flights with flexible dates._

kannattaa jakaa siten että jokainen näistä ehdoista eritellään omaksi storykseen

- _... as "between dates x and y."_
- _... as "a weekend in December."_
- _... as "± n days of dates x and y."_

*Pattern #3: Simple/Complex*

Hieman samantapainen kuin edellinen tapa, on jakaa moniutkainen user story siten, että siitä erotetaan yksinkertainen versio mahdollinen hyödyllinen versio, eräänlainen "minimal viable production", ja muodostetaan sitten joukko storeja jotka lisäävät sen toiminnallisuutta toiminnallisuutta.

Esimerkiksi joustavaa lentojen hakua kuvaava story

_As a user, I can search for flights between two destinations._ 

voidaan jakaa seuraavasti

- _... when only direct flights used._
- _... specifying a max number of stops._
- _... including nearby airports._ 
- _... using flexible dates._

*Pattern #4: Major Effort*

Joskus hyvä jakoperuste on toteuttaa story toimimaan ensin yhden esimerkkitapauksen kanssa ja yleistää se omana storynään. Esimerkiksi luottokorttimaksamista koskeva story

_As a user, I can pay for my flight with VISA, MasterCard, Diners Club, or American Express._

voitaisiin jakaa kahtia, missä ensimmäisessä storyssa vasta hoidettaisiin yksi luottokorttityyppi, ja seuraava story yleistäisi toiminnaan kaikkiin kortteihin:

- _... I can pay with VISA_
- _... I can pay with all four credit card types (VISA, MC, DC, AMEX) (given one card type already implemented)._

*Pattern #5: Data Entry Methods*

Hyvä tapa storyen jakoon on myöskin muodostaa ensin versio, jossa on yksinkertainen käyttöliittymä ja laajentaa sitä omana storynään. User story 

_As a user, I can search for flights between two destinations._

jakaantuukin helposti kahteen esim. seuraavasti

- _... using simple date input._
- _... with a fancy calendar UI._

*Pattern #6: Defer Performance*

Joissain tapauksissa vastaava jako voidaan tehdä suorituskyvyn suhteen, eli aluksi tehdään perusversio ja laajentava story optimoi suorituskykyä. User story

_As a user, I can search for flights between two destinations._

siis jakaantuu kahtia seuraavasti:

- _... (slow—just get it done, show a "searching" animation)._
- _... (in under 5 seconds)._

*Pattern #7: Operations*

Eräs yleisimpiä tapoja jakamiseen on eritellä storyyn sisältyvät toiminnot omiksi storyikseen. 

Käyttäjän hallinnointia kuvaava stoory

_As a user, I can manage my account._

jakaantuu  mukavasti moneen osaan

- _... I can sign up for an account._
- _... I can edit my account settings._
- _... I can cancel my account_

*Pattern #8: Break Out a Spike*

On monia tilanteita, joissa storyn kokoa on todella vaikeaa arvioida etukäteen. Story voi joko olla vaatimuksiltaan epäselvä, eli ei oikein tiedetä vielä mitä halutaan tai story saattaa sisältää jonkin toteutusteknisesti riskialttiin osan. Joskus storyn sisältämä epävarmuus ei poistu mitenkään muuten kuin tekemällä kokeellinen toteutus, jonka avulla tutkitaan teknisiä riskejä tai selvitellään käyttäjän tahtotilaa. 

Tälläisestä eksperimentaalisesta toteutuksesta käytetään nimitystä [spike solution](https://www.jamesshore.com/Agile-Book/spike_solutions.html), ja useimmiten sellaisen toteuttamiseen annetaan jokin rajattu määrä aikaa, esim. 2 päivää.

Jos tiimi ei ole toteuttanut koskaan luottokorttimaksuun liittyvää toiminnallisuutta, user storystä

_As a user, I can pay by credit card._ 

kannattaa eriyttää aikarajattu eksperimentti joka suoritetaan aiemmassa sprintissä. Tämän jälkeen toivon mukaan varsinaisen toiminnallisuuden toteuttava story osataan estimoida paremmin:

- _Investigate credit card processing.* 
- _Implement credit card processing.*

Edellisellä viikolla puhuimme [Lean-startup](/viikko2)-menetelmästä, jossa uusien ideoiden toimivuutta kokeillaan A/B-testauksella, eli ideasta toteutetaan MVP eli minimalistinen versio joka annetaan käyttöön osalle järjestelmän käyttäjistä. Jos uusi idea vaikuttaa toimivalta, toteuteaan se kunnolla ja korvataan sillä alkuperäinen toiminnallisuus. A/B-testaus onkin idealtaan hyvin samanlainen kuin _spike_-solution, eli A/B-testissä rakennettavan MVP-version avulla selvitetään jonkin idean toimivuus ja vasta sen jälkeen toteutetaan toiminnallisuus kokonaisessa laajuudessaan.

User storyjen jakamisesta on monia etuja. Storyjä jaettaessa huomataan usein, että alkuperäinen iso story eli epiikki, kuvvaa itseasiassa paljon laajemman toiminnallisuuden mille on tarvetta, eli sovelluksesta saadaan mahdollisesti karsittua pois paljon turhaa. Mitä pienempiä storyt ovat, sitä helpompi ne on estimoida ja sitä varmemmin ne saadaan toteutettua yhden sprintin aikana, eli pienet storyt tekevät todennäköiseti tiimin velositeetista paremmin ennustettavan.

## Sprintin suunnittelun toinen tavoite

Sprintin sunnittelun yhteydessä sprinttiin valituille user storyille tehdään yleensä myös riittävä määrä teknistä suunnittelua, eli hahmotellaan _miten_ storyt saadaan toteutettua.

Suunnitellaan komponentteja ja rajapintoja karkealla tasolla sekä huomioidaan user storyjen aiheuttamat muutokset olemassa olevaan osaan sovelluksesta.

Suunnittelun yhteydessä on usein tapana pilkkoa kukin user story teknisen tason tehtäviksi (engl. task) jotka on toteutettava, jotta user story saadaan valmiiksi.

Esimerkiksi story _tuotteen lisääminen ostoskoriin_, voitaisiin pilkkoa seuraaviin teknisen tason taskeihin:
- tarvitaan sessio, joka muistaa asiakkaan 
- domain-olio ostoskorin ja ostoksen esittämiseen 
- laajennus tietokantaskeemaan 
- html-näkymää päivitettävä tarvittavilla painikkeilla
- kontrolleri painikkeiden käsittelyyn
- yksikkötestit kontrollerille ja domain-olioille 
- hyväksymätestien automatisointi

Sprintin tehtävälista eli _sprint backlog_ koostuu sprintiin valituista user storeista ja niihin liittyvistä tehtävistä eli taskeista. Usein backlog organisoidaan taulukkomaiseksi _taskboardiksi_, jossa on yksi rivi kutakin sprinttiin valittua user storyä kohti. Storyyn liittyvät taskit kulkevat vasemmalta oikealle niiden statusta kuvaavien sarakkeiden _not started, in progress, done_ kautta:

![]({{ "/images/2-21.png" | absolute_url }}){:height="400px" }

Kaikkia storyyn liittyviä taskeja ei sprintin suunnittelun aikana yleensä löydetä ja uusia taskeja lisätään tarvittaessa sprintin edetessä.

Nykyinen paras käytäntö on käyttää fyysisiä taskboardeja, user storyt ovat esim. pahvikortteja ja taskit kirjoitetaan post it -lapuille.

![]({{ "/images/2-23.jpg" | absolute_url }})

Esimerkin taskboardissa on edellisestä poiketen myös sarake _blocked_, joka kuvaa niitä taskeja, joiden toteuttaminen on syystä tai toisesta keskeytyny jonkin esteen takia. Task board voikin sisältää mitä tahansa sarakkeita mitkä kukin tiimi kokee oman työskentelynsä kannalta hyödyllisiksi. 

## Sprintin työmääräarviot ja burndown

[Scrum guiden](https://scrumguides.org/scrum-guide.html#artifacts-sprintbacklog) mukaan sprintin tulee koko ajan seurata kuinka paljon sprintissä on vielä töitä jäljellä. Eräs tapa toteuttaa sprintinaikainen työajan seuranta on estimoida sprintissä olevien taskien työmäärää. Useiden [asiantuntijoiden](https://www.mountaingoatsoftware.com/blog/why-agile-teams-should-estimate-at-two-different-levels) mukaan sprinttiin kuuluvat taskit tulisi estimoida niiden vaatiman työtuntimäärän mukaan, toisin kuin user storyt jotka estimoidaan abstraktin aikamääreen eli story pointin tarkkuudella.

Taskien esimaatit tulee pitää ajantasalla, eli jokaisen taskin jäljellä olevan työn määrä arvioidaan esim. päivittäisessä scrum-palaverissa eli daily scrumeissa. 

Jäljellä olevaa työmäärää (tunteina mitattuna) voidaan visualisoidaan sprintin etenemistä kuvaavalla burndown-käyrällä:

![]({{ "/images/2-22.png" | absolute_url }})

Työmääräarvio voi myös nousta kesken sprintin jos jokin kesken sprintin identifioidaan uusia taskeja tai jokin task huomataan monimutkaisemmaksi kuin alunperin ajateltiin. Oleellista on, että taskien työmääräarviot ovat arvioita niihin vielä tarvittavasta työmäärästä. Scrumissa ei seurata millään tavalla taskeihin _käytettyä_ työmäärää, eli vaikka johonkin taskiin olisi käytetty 5 tuntia aikaa, sitä ei merkata mihinkään eikä sitä suoraan vähennetä työmääräarviosta vaan tehdään _uusi työmäärä arvio_ paljonko vielä ajatellaan tarvittavan aikaa, jotta story saadaan valmiiksi.

Fyysisen taskboardin sijaan sprintin seuranta hoidetaan joskus erillisellä ohjelmistolla tai taulukkolaskennan avulla, erityisesti jos tiimillä ei ole käytössä omaa "seinää". Taulukkolaskentaa käyttäessä sprintin jokaiselle päivälle on oma sarake, johon merkitään kunkin päivän alussa estimaatti taskien jäljellä olevasta työmäärästä (tunteina).

![]({{ "/images/2-24.png" | absolute_url }}){:height="400px" }

Erään ohjelmistotuotantoprojektin product- ja sprintbacklogit [täällä](https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit?usp=sharing).

On hieman kiistanalaista kannattaako storyihin liittyvien taskien työmäärää estimoida. Syksyllä 2019 julkaistu kirja [A Scrum book](http://scrumbook.org/value-stream/information-radiator/sprint-burndown-chart.html), ei suosittele taskien tasolla pidettävää työmääräarviota, vaan kehoittaa seuraamaan sprinttienkin aikana ainoastaan sitä _kuinka monen story pointin verran user storyä on saatu valmiiksi_. Neuvo onkin varsin viisas, on nimittän mahdollista, että tiimi saa sprintissä valmiiksi lähes kaikki taskit, saamatta kuitenkaan yhtäkään storyä täysin valmiiksi, eli burn down voi näyttää melko hyvältä mutta asiakkaan saama arvo on lopulta nolla.
 
## Yhtäaikaa tehtävän työn rajoittaminen

Yhtä aikaa työn alla olevien taskien suuri määrä voikin koitua scrumissa ongelmaksi, sillä riski sille, että sprintin päätyttyä on paljon osittain valmiita user storyja kasvaa. Voikin olla mielekästä rajoittaa yhtä aikaa tekemisen alla olevien töiden määrää asettamalla _work in progress (eli WIP)_ -rajoituksia. WIP-rajoitukset on lainattu Kanban-menetelmästä, jota käsittelemme tarkemmin [viikolla 5](viikko5). Scrumin ja Kanbanin yhdistelmää kutsutaan usein nimellä Scrumban. Scrumbanissa on tosin muitakin Kanbanista lainattuja elementtejä kuin WIP- rajoitukset.

WIP-rajoituksia voidaan soveltaa monella tavalla, esim. rajaamalla tietyssä task boardin vaiheessa olevien töiden määrää:

![]({{ "/images/2-25.png" | absolute_url }}){:height="350px" }

Kuvan esimerkissä rajoitteet on ilmaistu työvaiheita kuvaavien sarakkeiden otsikoihin merkittynä numerona. 

## Lean waste ja Scrumban

Yhtäaikaa tehtävän työn määrää kontrolloivien WIP- eli Work in progress -rajoitusten idea on siis peräisin Kanban-menetelmästä. Kanban-menetelmä taas on eräs keskeisimmistä Lean-ajattelun työkaluista.

Lean-ajattelun taustalla on idea turhuuden (engl. waste, jap. muda) eli arvoa tuottamattomien asioiden eliminoimisessa organisaatioiden toiminnassa. Lean-ajattelu on peräisin jo kymmeniä vuosia vanhasta [Toyota Production Systemistä](https://global.toyota/en/company/vision-and-philosophy/production-system/).

Lean tunnistaa useita erilaisia turhuuksia (lean waste), näiden joukossa ovat esim. osittain tehty työ (partially done work), välivarastointi ja turha odottaminen. Ohjelmistotuotannon kontekstiin sovellettuna työvaiheet, jotka eivät ole vielä definition of donen mielessä valmiina edustavat leanin mukaista turhuutta. Esim. testaamista odottavien toiminnallisuuksien (user storyjen) katsotaan olevan "välivarastoituna", samoin jo testatut mutta tuotantoon viemistä vielä odottavat toiminnallisuudet ovat "välivastastossa".

Asiakkaalle toiminnallisuudet alkavat tuottaa arvoa vasta kun ne saadaan käyttöön, siinä vaiheessa kun toiminnallisuudet ovat työn alla, ne aiheuttavat ainoastaan kustannuksia ja muodostavat riskin.

Kanban- ja Scrumban-menetelmissä WIP-rajoitteilla rajataan useimmiten yhtä aikaa työn alla olevien User storyjen määrää. Kanbanissa ja Scrumbanissa ei yleensä ole olemassa Scrumin sprintin kaltaista kehitystyötä rytmittävää käsitettä vaan saatetaan noudattaa periaatetta, missä tiimi tekee yhden user storyn kerrallaan valmiiksi, demoaa sen asiakkaalle ja valitsee product backlogista seuraavan storyn työn alle.

Joissain tapauksissa asiakastapaamiset ja valmiiden storyjen esittely voi Kanbanissa ja Scrumbanissa tapahtua sovitun aikataulun, esimerkiksi 2 viikon välein vaikka itse kehitystyö ei noudattaisi sprinttejä vaan etenisi story kerrallaan.

WIP-rajoitteita voidaan soveltaa Scrumin yhteydessä monella tapaa. Edellä olleessa esimerkissä rajoitettiin kerrallaan yhdessä työvaiheessa sallittujen taskien määrää. Voi olla mielekästä myös määritellä kuinka monta taskia yhdellä henkilöllä saa olla yhdellä kertaa työn alla. 
Ehkä paras tapa soveltaa WIP-rajoitteita on rajoittaa kerrallaan työn alla olevien user storyjen määrää. Esimerkiksi [Scrum book](http://scrumbook.org/) suosittelee että työn alla on kerrallaan ainoastaan yksi user story. Näin taataan että arvoa tuottavia kokonaisuuksia "virtaa" sovelluksen käyttäjälle mahdollisimman tasaisesti.

WIP-rajoitteita säädetään usein retrospektiivien yhteydessä jos kehitystyössä havaitaan ongelmia.
 
Taskboard ja mahdollisesti käytössä oleva burndown-käyrä tuovat selkeästi esille sprintin etenemisen asteen ja onkin suositeltavaa, että ne ovat kaikkien tiimiläisten ja projektin sidosryhmäläisten nähtävillä.

Ketterät menetelmät korostavat läpinäkyvyyttä (transparency) ja tiedon maksimaalista kommunikoitumista, näin mahdolliset ongelmatkaan eivät tule yllätyksenä ja niihin on helpompi puuttua ajoissa.

Yleinen konsensus on että ainakin Sprintin hallintaan manuaalinen postit-lappuja hyödyntävä taskboard on käytettävyydeltään ja näkyvyydeltään ylivertainen.

Usein toki käytetään myös elektronisia vastineita taskboardista, joskus siihen pakottavat yrityksen omat käytänteet, joskus taas tiimiläisten työskentelytapa ja paikka, esim. etätiimin kannalta elektroninen tarskboard voi olla ainoa toimiva ratkaisu.

Erilaisia tapoja elektronisen backlogin ja taskboardin muodostamiseen on olemassa lukemattomia vaihtoehtoja. VOidaan käyttää jotain yleishyödyllistä sovellusta esim. exceliä tai google driveä. Github projects tarjoaa nykyään varsin käyttökelpoisen taskboard-näkymän Githubin issueihin.  

On myös olemassa suuri joukko enemmän tai vähemmän käyttökelpoisia sovelluksia jotka on tehty vartavasten ketterien projektien hallintaan, mm. JIRA, Asana, Trello, Pivotal Tracker , trac, bugzilla, ...


## Ennen seuraavaa sprintin 

Kuten luennolla 2 mainittiin pidetään sprintin lopussa sprint review eli katselmointi ja sprintin retrospektiivi. Katselmoinnissa arvioidaan kehitystiimin tekemää työtä. Kesken jääneet tai epäkelvosti toteutetut user storyt siirretään takaisin backlogiin. 

Sprintin aikana on product backlogiin tullut ehkä uusia User storyja tai jo olemassa olevia storyjä on muutettu ja uudelleenpriorisoitu. On suositeltavaa että kehitystiimi käyttää pienen määrän aikaa sprintin aikana product backlogin vaatimiin toimiin eli (backlog groomingiin), esim. uusien user storyjen estimointiin. Jos product backlog on hyvässä kunnossa (DEEP) sprintin loppuessa, on jälleen helppo lähteä sprintin suunnitteluun ja uuteen sprinttiin.

Retrospektiivissä taas tiimi itse tarkastelee omaa toimintatapaansa ja identifioi mahdollisia kehityskohteita seuraavaan sprinttiin. Eräs tärkeä tarkastelun kohde retrospektiivissa on sprintin taskboard, toiko se riittävästi läpinäkyvyyttä sprintin seurantaan, tulisko boardille lisätä näkyviin useampia työvaiheita (esim. testing, releasing, ...), jumiutuiko taskeja odottamattomalla tavalla joihinkin työvaiheisiin, tulisiko boardille lisätä WIP-rajoitteita?
