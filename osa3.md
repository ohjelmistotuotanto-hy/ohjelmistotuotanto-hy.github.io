---
layout: page
title: Osa 3
title_long: 'Ohjelmistojen laadunhallinta'
inheader: yes
permalink: /osa3/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

<div class="important">
DRAFT: Lukeminen omalla vastuulla!
</div>

## Laadunhallinnan peruskysymykset: verifiointi ja validointi

Ohjelmiston kehittämiseen liittyy oleellisena asiana _verifiointi_ ja _validointi_.

_Verifioinnissa_ pyritään varmistamaan, että ohjelmisto toteuttaa vaatimusmäärittelyn aikana sille asetetut vaatimukset. Yleensä tämä tapahtuu testaamalla, että ohjelma toteuttaa vaatimusmäärittelyyn kirjatut toiminnalliset ja ei- toiminnalliset vaatimukset. Verifionti siis pyrkii vastaamaan kysymykseen _are we building the product right_.

Validointi taas pyrkii varmistamaan, että ohjelmisto täyttää käyttäjän odotukset ja tarpeet. Vaatimusmäärittelyn aikana kirjatut ohjelmiston vaatimukset eivät ole aina se mitä käyttäjä ohjelmalta todella haluaa! Validointiin liittyvä oleellinen kysymys onkin _are we building the right product_, eli ollaanko ylipäätään tekemässä oikeaa järjestelmää kulloiseenkin käyttötarkoitukseen.

Verifioinnin ja validoinnin tavoitteena on varmistaa että ohjelma on "riittävän hyvä" siihen käyttötarkoitukseen, mihin ohjelma on tarkoitettu. Hyvyys on suhteellista ja riippuu ohjelman käyttötarkoituksesta. Ohjelman ei tarvitse yleensä olla täysin virheetön ollakseen kuitenkin riittävän hyvä käytettäväksi.

Verifioinnin ja validoinnin suorittamista käytetään yleisesti nimitystä _laadunhallinta_ (engl. quality assurance, QA). Jos laadunhallinta on erillisen tiimin vastuulla, käytetään tästä usein nimitystä QA-tiimi.
 
## Laadunhallinnan tekniikat
 
Perinteisesti laadunhallinnassa on käytetty kahta erihenkistä tekniikkaa, katselmointeja/tarkastuksia sekä testausta.

_Katselmoinneissa_ (engl. review) käydään läpi erilaisia ohjelmiston tuotantoprosessin aikana tuotettuja dokumentteja ja ohjelmakoodia, ja etsitään näistä erilaisia ongelmia.

Tarkastukset taas (engl. inspection) ovat katselmointien muodollisempi versio. 
Tarkastus suoritetaan järjestämällä formaali kokous, jolla on tarkkaan määritelty agenda ja kokouksen osallistujilla ennalta määritellyt roolit. Tarkastukset kuuluvat vesiputosmallin maailmaan ja eivät ole nykyään suosiossa poislukien turvallisuuskriittisten järjestelmien kehitys.

Katselmointi on _staattinen tekniikka_, suorituskelpoista ohjelmakoodia ei välttämättä tarvita, ja jos katselmoinnin kohteena on ohjelmakoodi, ei ohjelmaa katselmuksissa välttämättä suoriteta.

Testaus taas on _dynaaminen tekniikka_, joka edellyttää aina ohjelmakoodin suorittamista. Testauksessa tarkkaillaan miten ohjelma reagoi annettuihin testisyötteisiin

## Vaatimusten validointi

Validointi siis vastaa kysymykseen kysymykseen ollaanko tekemässä asiakkaan tarpeiden kannalta oikeanlaista järjestelmää.

Ohjelmistolle määritellyt vaatimukset onkin validoitava, eli tulee varmistettava, että määrittelydokumentti kuvaa sellaisen ohjelmiston, joka vastaa asiakkaan tarpeita.

Vesiputousmallissa määrittelydokumentin kirjattujen vaatimusten validointi suoritetaan nimenomaan katselmoimalla. Vaatimusmäärittely päättyy siihen, että asiakas katselmoi määrittelydokumentin ja varmistaa näin että kirjatut vaatimukset vastaavat asiakkaan kuvaa tilattavasta järjestelmästä. Vesiputousmallia sovellettaessa määrittelydokumentti jäädytetään katselmoinnin jälkeen ja sen muuttaminen vaatii yleensä monimutkaista prosessia, ja saattaa edellyttää uutta sopimusta asiakkaan ja sovelluksen toimittajan kesken.

Ketterässä ohjelmistotuotannossa vaatimusten validointi tapahtuu iteraation päättävien demonstraatioiden (scrumissa sprint reviewin) yhteydessä.

Asiakkaalle näytetään toimivaa versiota ohjelmistosta ja asiakas voi itse verrata vastaako lopputulos sitä mitä asiakas lopulta tarvitsee. Asiakkaan tarvitsema toiminnallisuushan voi poiketa ennen iteraatiota määritellystä toiminnallisuudesta ja/tai ohjelmistokehittäjät saattavat tulkita user storyiksi kirjattuja vaatimuksia.

Jos asiakas havaitsee, että sovellus ei ole etenemässä haluttuun suuntaan, eli kirjatut vaatimukset eivät vastannet tarvetta, tarve on muuttunut tai vaatimuksia on tulkittu väärin, on seuraavassa iteraatiossa mahdollista ottaa korjausliike.

On ilmeistä, että ketterän mallin käyttämä vaatimusten validointitapa toimii paremmin tuotekehitystyyppisissä tilanteissa, joissa ollaan tekemässä tuotetta, joka on vaikea määritellä tarkkaan etukäteen.

## Koodin katselmointi

Koodin katselmointi eli koodin lukeminen jonkun muun kuin ohjelmoijan toimesta on havaittu erittäin tehokkaaksi keinoksi koodin laadun parantamisessa. Katselmoinnin avulla voidaan havaita koodista ongelmia, joita testaamalla on vaikea havaita, esim.
noudattaako koodi sovittua tyyliä ja onko koodi ylläpidettävää.

Koodin katselmoinnissa on perinteisesti käyty läpi onko koodissa tiettyjä "checklisteissä" listattuja riskialttiita piirteitä, katso esim.
[c-kielisen ohjelman katselmoinnin checklist](http://www.oualline.com/talks/ins/inspection/c_check.html). Joissakin kielissä, esim. Javassa kääntäjän tuki tekee osan näistä tarkistuksista turhaksi.

Nykyään on tarjolla paljon katselmointia automatisoivia staattista analyysiä tekeviä työkaluja esimerkiksi Javall [PMD](http://pmd.sourceforge.net/) ja [Checkstyle](http://checkstyle.sourceforge.net/). Viikon 2 laskareissa 
tutuistuimme jo checkstyleen.

### staattinen analyysi pilvessä

Pilvipalvelut ovat helpottaneet sovelluskehittäjien työtä monissa asioissa, esim. GitHubin ansiosta omaa versionhallintapalvelinta ei ole enää tarvetta ylläpitää.
Pilveen on viime aikoina ilmestynyt myös koodille staattista analyysiä tekeviä palveluita, esimerkiksi [CodeClimate](https://codeclimate.com/) joka analysoi koodista mm. seuraavia asioita:
- liian kompleksiset metodit ja luokat 
- copy paste -koodi
- testaamaton koodi

CodeClimate antaa parannusehdotuksia huomaamistaan epäkohdista ja antaa jopa aika-arvion sille kuinka kauan kunkin ongelmakohdan korjaamiseen menisi.

CodeClimate myös huomauttaa koodin laadun muutoksista, esim. jos koodin kompleksisuus kasvaa muutosten yhteydessä sekä. 

Minkä tahansa GitHubissa olevan Ruby, Javascript, Java tai PHP-projektin saa konfiguroitua Codeclimaten tarkastettavaksi nappia painamalla. Codeclimate suorittaa tarkastukset koodille aina kun uutta koodia pushataan GitHubiin. 

TMC-palvelimen CodeClimate-raportti löytyy [täältä](https://codeclimate.com/github/mluukkai/tmc-server). Ongelmakohtia on huomattava määrä, mutta suurin osa niistä itseasiassa johtuu TMC:n käyttämästä JQuery-kirjastosta. Raporttia kannattaisikin konfiguroida siten että se jättää kirjaston huomioimatta.
 
### Koodin katselmointi: GitHub ja pull requestit

Yhä enenevä määrä ohjelmistokehityksprojekteista tallettaa sovelluksen lähdekoodin GitHubiin. GitHubin _pull requestit_ tarjoavatkin hyvän ja paljon käytetyn työkalun koodikatselmointien tekoon.

Pull requesteja käytettäessä työn kulku on seuraava:
- Sovelluskehittäjä forkkaa repositorin itselleen, tekee muutokset omaan repositorioon ja tekee pull requestin projektia hallinnoivalle taholle.
- Hallinnoija, esimerkiksi tiimin "senior developer" tai opensource-projektin vastaava tekee katselmoinnin pull requestille.
- Jos koodi ei ole vielä siinä kunnossa että tehdyt muutokset voidaan liittää repositorioon, kirjoittaa hallinnoija pull requestin tekijälle joukon parannusehdotuksia.
- Muutosten ollessa hyväksyttävässä kunnossa, pull request mergetään eli yhdistetääm päärepositorioon.

Seuraavassa esimerkki TMC-projektiin tehdystä pull requestistä ja siihen liittyvistä kommenteista:

![]({{ "/images/3-1.png" | absolute_url }}){:height="350px" }

Pull requestin kommentissa [sovelluskehittäjä](https://github.com/kennyhei/) toteaa, etto pull requestin sisältämät commitit toteuttavat (tämän)[https://github.com/testmycode/tmc-server/issues/185] GitHub-issuen kuvaaman toiminnallisuuden.

![]({{ "/images/3-2.png" | absolute_url }}){:height="500px" }

TMC:n silloinen [pääkehittäjä](https://github.com/mpartel/) ei kuitenkaan hyväksy muutoksia vielä mergettäväksi, vaan antaa muutaman lisäkehitysehdotuksen sovelluskehittäjälle.
 
Nykyään moni ohjelmistokehitystiimi käyttää säännöllisesti pull requesteja ja on jopa kirjannut definition of doneen, että eräs valmiin kriteeri koodille on se, että joku muu kuin ohjelmoija on katselmoinut sen. Katselmoija voi olla joko toinen sovelluskehittäjä, tai aloittelevien koodareiden tapauksessa usein joku hieman seniorimpi tiimin jäsen. 

## Koodin katselmointi ketterissä menetelmissä

Toisin kuin Scrum, erityisesti 2000-luvun alkuvuosina erittäin suosittu ketterä menetelmä [eXtreme Programming ](http://www.extremeprogramming.org/)
eli XP määrittelee useita ohjelmiston kehittäjän työskentelyyn kantaa ottavia käytänteitä.

Suurin osa XP:n käytänteistä on jo vuosikymmeniä hyvin tunntettuja tunnettuja _parhaita käytänteitä_ (engl. best practices), mutta kuitenkin usein vietynä äärimmäiseen (extreme) muotoon. Osa XP:n käytänteistä tähtää ohjelmiston laadun maksimoimiseen, ja muutamassa palvelee samaa funktiota kuin koodikatselmointi.

_Pariohjelmoinnissa_ (engl. pair programming) kaksi ohjelmoijaa työskentelee yhdessä käyttäen ainoastaan yhtä konetta. Koodia kirjoittava osapuoli toimii _ohjaajana_ (engl. driver) ja toinen _navigoijana_ (engl. navigator), roolia vaihdetaan sopivin väliajoin. Navigoija tekee koodiin _jatkuvaa katselmointia_.

Pariohjelmointi parantaa ohjelmoijien kuria ja työhön keskittymistä sekä on erinomainen oppimisen väline: pari oppii toisiltaan, erityisesti noviisit kokeneimmilta. Jos pariohjelmointia sovelletaan sytemaattisesti. ei jää osa-alueita, jotka ainoastaan yksi ohjelmoija tuntee.

Tutkimuksissa todettu vähentävän bugien määrää 15-50%, kokonaisresurssin kulutus kuitenkin nousee hieman. 

Vaikka pariohjelmointi tai jopa useamman ihmisen versio siitä, [mob programming](https://en.wikipedia.org/wiki/Mob_programming) on melko suosittua nykyään, ei  kovin monissa paikoissa kuitenkaan harrasteta systemaattisesti määritelmän mukaista pariohjelmointia joka päivä. Hyvin yleistä on, että kehittäjät työskentelevät suurimman osan aikaa yksin, mutta tekevät sopivin paikoin spontaaneja pari- tai mobohjelmointisessioita, erityisesti kohdatessaan teknisiä haasteita. 

Pariohjelmoinnin ohella "katselmointimaisia" tavoitteita koodin laadun nostajana voidaan ajatella olevan XP:n yhteisomistajuuden ja ohjelmointistandardien periaatteilla.

Koodin _yhteisomistajuus_ (engl. collective code ownership) tarkoittaa periaatetta, jossa kukaan yksittäinen ohjelmoija ei hallitse yksin mitään kohtaa koodista, eli kaikilla on lupa tehdä muutoksia ja laajennuksia mihin tahansa kohtaan koodia. Pariohjelmointi tukee yhteisomistajuutta. 

Yhteisomistajuudessa on omat riskinsä: joku koodia kunnolla tuntematon voi saada pahaa jälkeä aikaan. XP pyrkii eliminoimaan tästä aiheutuvia riskejä testauksiin liittyvillä käytänteillä, eli käytännössä automatisoiduilla regressiotesteillä.

_Ohjelmointistandardi_ (engl. coding standards) tarkoittaa, että tiimi määrittelee koodityylin, johon kaikki ohjelmoijat sitoutuvat. Tyylillä tarkoitetaan nimeämiskäytäntöä, koodin muotoilua ja myös tiettyjä ohjelman rakenteeseen liittyviä seikkoja. Ohjelmointistandardin noudattamista voidaan kontrolloida osittain automaattisesti staattisen analyysin työkaluilla, esimerkiksi Javascript-maailmassa [eslint](https://eslint.org/) ja [prettier](https://prettier.io/) ovat työkaluja, joiden avulla voidaan seurata, että koodi seuraa määriteltyä koodistandardia. Eräs esimerkki suosituksi nousseesta ohjelmointistandardista on [AirBnB](https://eslint.org/):n tyyliopas.  

## Testaus

Ohjelmistojen osoittaminen virheettömäksi on käytännössä mahdotonta, sillä ohjelmiston mahdollisten käyttöskenaarioiden ja syötteiden kombinaatio on yksinkertaissti liian suuri. Testauksen tarkoituksena onkin vakuuttaa asiakas ja järjestelmän kehitystiimi siitä, että ohjelmisto on riittävän hyvä käytettäväksi.

Testauksella on kaksi hieman eriävää tavoitetta. Ensinnäkin tulee _osoittaa, että ohjelmisto täyttää sille asetetut vaatimukset_. Käytännössä tämä tarkoittaa vaatimusdokumenttiin/vaatimuksiin kirjattujen asioiden toteutumisen demonstroimista toimivasta ohjelmista. Toinen tavoite on _löytää ohjelmistosta virheitä_ eli testatessa yritetään rikkoa tai saattaa ohjelma, jollain tavalla epäkonsistenttiin tilaan. Näin havaitut viat pyritään sitten korjaamaan ennen kuin todellinen käyttäjä törmää samoihin ongelmiin.

Molemmat näistä tavoitteista tähtäävät oikeastaan ohjelman _ulkoisen laadun_ (engl. external quality) eli käyttäjän kokeman laadun parantamiseen. [Ulkoisella laadulla](http://c2.com/cgi/wiki?InternalAndExternalQuality) tarkoitetaan sitä onko ohjelma sopiva käyttötarkoitukseensa, eli tekeekö se ne asiat mitä käyttäjä odottaa ohjelman tekevän.

## Testauksen tasot

Testausta jakaantuu eri _tasoihin_ sen mukaan mukaan, mikä testauksen ensisijaisena kohteena on. Ohjelmiston elinkaaria vesiputousmaisesti kuvaava _testauksen V-malli_ havainnollistaa testauksen eri tasoja.

![]({{ "/images/3-3.png" | absolute_url }}){:height="300px" }

Alimmalla tasolla on _yksikkötestaus (engl. unit testing)_ jossa tarkastellaan yksittäisten luokkien, metodien ja moduulien toimintaa yleensä erillään muusta kokonaisuudesta. Yksikkötestauksen hoitavat ohjelmoijat.

_Integraatiotestaus _(engl. integration testing) taas sisältää yksittäisistä komponenteista koostetun kokonaisuuden toiminnallisuuden testaamisen. Myös integrointitestauksesta huolehtivat ohjelmoijat. 

_Järjestelmätestauksessa_ (engl. system testing) varmistetaan että ohjelmisto kokonaisuudessaan toimii vaatimuksiin kirjatulla tavalla. Ohjelmistoa testataan saman rajapinnan kautta, jonka kautta käyttäjät sitä käyttävät. Järjestelmätestauksensta on useimmiten vastuussa kehittäjäorganisaation laadunhallinnasta vastaavat ihmiset. 

Ohjelmiston käyttäjäorganisaation tekemää testausta kutsutaan _käyttäjän hyväksymistestaukseksi_ (engl. user acceptance testing), ja sen on tarkoitus varmistaa, että kehitetty ohjelmisto on varmasti odotuksien mukainen ja toimii oikeassa käytössä. Hyväksymätestaus tapahtuu monesti normaalissa tuotantokäytössä, esim. betatestaamalla sovellusta pienen käyttäjäjoukon avulla. 

## Järjestelmätestaus

Järjestelmätestauksen tarkoitus on siis varmistaa, että järjestelmä toimii vaatimusmäärittelyn aikana määritellyllä tavalla. Sovellusta testataan useimmiten saman rajapinnan kautta, jonka kautta sitä käytetään, eli testaus voi tapahtua esimerkiksi grafisen käyttöliittymän kautta.

Järjestelmätestaus tapahtuu ilman tietoa järjestelmän sisäisestä rakenteesta, tälläistä testauksen tapaa nimitetään _black box_ -testaukseksi.

Yleensä järjestelmätestaus perustuu sovelluksen potentiaalisiin käyttöskenaarioihin. Jos vaatimukset on ilmaistu user storyina, on storyjen hyväksymäkriteereistä melko helppo muotoilla testejä, joiden avulla voidaan varmistaa että järjestelmällä on storyjen kuvaamat vaatimukset sekä tyypilliset virheskenaariot.

Sovelluksen toiminnallisuutta kartoittavan järjestelmätestauksen (jota joskus kutsutaan [funktionaaliseksi testaamiseksi](https://en.wikipedia.org/wiki/Functional_testing)) lisäksi on olemassa paljon [muitakin](http://en.wikipedia.org/wiki/System_testing) järjestelmätestauksen muotoja, mm.
- käytettävyystestaus
- suorituskykytestaus tai stressitestaus 
- tietoturvan testaus

## Testitapausten valinta

Täysin kattava testaaminen on mahdotonta ja testaus on joka tapauksessa työlästä, eli onkin tärkeää löytää kohtuullisen kokoinen testitapausten joukko, jonka avulla on kuitenkin mahdollista löytää mahdollisimman suuri määrä virheitä.

Yksittäinen _testitapaus_ (engl. test case) testaa järjestelmän toiminnallisuutta joillakin syötteillä. Monet syötteet ovat järjestelmän toiminnan kannalta samanlaisia. Esimerkiksi jos henkilötietoja käsittelevä järjestelmä tallettaa henkilön iän on todennäköisstä että järjetelmän toiminta ei poikkea ollenkaan sen suhteen onko ikä 20 tai 30, mutta jos ikä taas on 17, saattaa järjestelmän toiminnallisuus olla erilainen kuin iän ollessa vähintään 18. 

Testeissä kannattaakin pyrkiä jakamaan syötteet _ekvivalenssiluokkiin_ ja tehdä yksi testitapaus kutakin ekvivalenssiluokkaa tai syötteiden ekvivalenssiluokkien kombinaatiota kohti. Testin kannalta samalla tavalla käyttäytyvät syötteet siis muodostavat oman ekvivalenssiluokkansa. Ekvivalenssiluokkien edustajien lisäksi kannattaa tehdä myös testitapaukset ekvivalenssiluokkien raja-arvoille. 

Henkilötietojärjestelmässä iän suhteen ekivalensseja olisivat ehkä _alaikäinen_ 0-17 vuotta, _työikäinen_ 18-65 vuotta ja _eläkelläinen_ 66- vuotta. Ekvivalenssirajojen järkevä määrittely tosin edellyttää tietoa siitä, järjestelmän toiminnallisuudesta. Todennäköisesti työikäisten ja eläkelläisten suhteen ei olisi mahdollista tehdä selkeää jakoa iän perusteella. Jos oletetaan, että edelliset ekvivalenssiluokat olisivat järkeviä, sopivat iän _raja-arvot_ tiestitapauksia varten olisivat 17, 18, 65 ja 66 vuotta, eli näitä kaikkia kohti voitaisiin tehdä oma testitapauksensa.

Tarkastellaan toisena tapauksena tekstitv:n selainversiota.

![]({{ "/images/3-4.png" | absolute_url }}){:height="450px" }

Mitä testitapauksia kannattaisi valita tekstitv:n sivun valintaikkunan toimivuuden tesaamisessa?

Tekstitv:n sivu vastaa lukua väliltä 100-899. Osaa välin luvuista vastaavaa sivua ei kuitenkaan ole olemassa. 

Testisyötteen ekvivalenssiluokkia olisivat ainakin seuraavat
- olemassaolevaa sivua vastaavat luvut 
- validit luvut jotka eivät vastaa mitään sivua 
- liian pienet ja liian suuret luvut
- syötteet jotka sisältävät kiellettyjä merkkejä esim aakkosia
- tyhjä syöte

Jos testeistä halutaan kattavat, olisi jokaisesta ekvivalenssiluokasta hyvä valita ainakin yksi testattava syötearvo.

Olemassaolevaa sivua vastaavan ekvivalenssin rajatapaukset, eli luvut 100 ja 899 kannattaisi ehkä valita testisyötteiksi, samoin luvut 99 ja 900 jotka ovat oman ekvivalenssiluokkansa rajatapauksia.

## Yksikkötestaus 

Yksikkötestauksessa kohteena siis yksittäiset metodit ja luokat. Yksikkötestauksen hoitavat nykyään ohjelmoijat, usein odotetaan että uuteen koodiin tehdään jo yksikkötestit jo samalla kuin koodi kirjoitetaan. Ohjelmoihien vastuulla olevasta testauksesta, eli yksikkö- ja integraatiotessteistä käytetään usein nimitystä [developer testing](https://developertesting.rocks/). 

Yksikkötestejä laadittaessa testattavan koodin rakenne (esim. minkälaisia ehtolauseita koodissa on käytetty) otetaan huomioon testejä laatiessa. Tälläisistä testeistä käytetään usein nimitystä _lasilaatikkotestaus_ (engl. white box testing).

Yksikkötestauksella ei testata suoranaisesti sitä täyttääkö ohjelmisto vaatimuksensa, pikemminkin tavoitteena on ohjelman _sisäisen laadun_ (engl. internal quality) kontrollointi. [Sisäinen laatu](http://c2.com/cgi/wiki?InternalAndExternalQuality) viittaa siihen kuina hyvä ohjelma on sisäiseltä rakenteeltaan, ja erityisesti tekeekö koodi virheenjäljityksen, korjaamisen sekä toiminnallisuuden laajentamisen helpoksi.

Sisäinen laatu kiinnostaa ensisijaisesti ohjelmistokehittäjiä, jos koodi on sisäiseltä laadultaan heikkoa, on sen parissa työskeneleminen ikävää ja hidasta. Jos koodin sisäinen laatu alkaa rapistua, sovelluksen kehitystahti hidastuu ja ohjelmistoon alkaa todennäköisesti kertymään enenevissä määrin bugeja jotka näkyvät loppukäyttäjällekin asti. 

Pelkkä sisäisen laadun kontrollimekanismi yksikkötestaus ei siis ole. Kattavilla yksikkötesteillä saadaan parannettua myös ohjelman ulkoista, eli asiakkaan kokemaa laatua. Yksikkötestit voivat eliminoida joitain asiakkaalle näkyviä virheitä, joita järjestelmätestauksen testitapaukset eivät löydä.

Tiedetään että bugit on taloudellisesti edullista paikallistaa mahdollisimman aikaisessa vaiheessa, eli yksikkötestauksessa löydetty virhe on halvempi ja nopeampi korjata kuin integraatio- tai järjestelmätestauksessa löytyvä, tai vasta todellisessa käytössä ilmennyt virhe.

Koska yksikkötestejä joudutaan ajamaan moneen kertaan, tulee niiden suorittaminen ja testien tulosten raportointi automatisoida, ja nykyinen hyvä työkalutuki tekeekin automatisoinnin helpoksi. Java-maailmasta tuttu xUnit on edelleen yksi suosituimpia testikirjastoja, uudempia tulokkaita ovat mm. rspec, jest, jasmine. 

Kurssilla [Ohjelmistotekiikka](https://courses.helsinki.fi/fi/tkt20002) tehdyt testit ovat useimmiten juurikin yksikkötestejä.
 
### Mitä ja miten paljon tulee testata?

Mitä tulisi testata yksikkötestein? Vastaus ei ole helppo. JUnitin alkuperäinen kehittäjä [Kent Beck](https://junit.org/junit4/faq.html#best_2) vastaa kysymykseen seuraavasti:

> "Do I have to write a test for everything?"
> "No, just test everything that could reasonably break" 

Jos pyritään kattavaan yksikkötestaukseen tulisi ainakin olla testata
kaikkien metodien (ja loogisten metodikombinaatioden) toiminta parametrien hyväksyttävillä arvoilla ja virheellisillä parametrien arvoilla.

Parametrien mahdolliset arvot kannattaa jakaa ekvivalenssiluokkiin ja jokaisesta luokasta valita yksi arvo testiä varten, myös ekvivalenssiluokkien raja-arvot kannattaa valita mukaan.

Koska yksikkötestejä tehtäessä ohjelmakoodi on nähtävillä, on testattavien arvojen parametrien ekvivalenssiluokat ja raja-arvot pääteltävissä koodista

Tarkastellaan esimerkkinä 1 viikon laskareista tutun _Ohtuvaraston_ metodia _otaVarastosta_, mitä testitapauksia tulisi generoida testit olisivat kattavat?

```java
public class Varasto { 
  private double tilavuus; 
  private double saldo;

  public double otaVarastosta(double maara) { 
    if (maara < 0) return 0.0;

    if(maara > saldo) {
      double kaikkiMitaVoidaan = saldo; 
      saldo = 0.0;
      return kaikkiMitaVoidaan;
    }

    saldo = saldo - maara;
    return maara; 
  }  
}
```

Metodia _otaVarastosta_ testatessa testitapauksessa on huomioitava parametrin _maara_ lisäksi varaston tilanne. Varastotilanteita on kolmea "ekvivalenssiluokkaa"
_tyhjä_ (esim. saldo 0, tilavuus 10), _ei tyhjä eikä täysi_ (esim. saldo 5, tilavuus 10) ja _täysi_ (saldo 10, tilavuus 10).

Näitä kutakin kohti on metodin parametrilla maara omat ekvivalenssiluokkansa
Jos varasto on "puolitäysi", eli saldo on 5, muuttujan _maara_ arvoiksi voitaisiin _-1, 0, 5, 6. Jos varasto on täysi, muuttujan _maara_ arvoiksi voitaisiin _-1, 0, 10, 11_. 

Jos varasto on tyhjä, muuttujan _maara_ arvoiksi valitaan _-1, 0, 1_, ja varmistetaan että 

Nollan ja negatiivisen määrän ottamista tuskin kannattaa erikseen testata kaikkien varastotilanteiden suhteen, tosin tämäkin voisi olla riski, jos varaston sisäinen toteutus muutettaisiin täysin.

Huomaamme siis, että jo naurettavan pienen luokan yhden metodin kattava testaus vaatisi suuren määrän testitapauksia. Useimmissa tapauksissa ei ole kuitenkaan realisitista olettaa, että testejä tehdään vastaavalla kattavuudella, aika/hyötysuhde on yksinkertaisesti liian huono, useimmat softassa olevat ikävät bugit jäävät jokatapauksessa yksikkötestauksen ulottumattomiin.

### Testauskattavuus

Yksikkötestien (ja toki myös muunkinlaisten testien) hyvyyttä voidaan
mitata _testauskattavuuden_ (engl. test coverage) käsitteellä. Testauskattavuutta on muutamaa eri tyyppiä.

_Rivikattavuudella_ (engl. line coverage) tarkoitetaan kuinka montaa prosenttia testattavan metodin/luokan koodirivejistä testitapausten suorittaminen käy läpi.
Vaikka rivikattavuus olisi 100% ei tämä tietenkään tarkoita, että kaikki oleellinen toiminnallisuus olisi tutkittu.

_Haarautumakattavuudella_ (engl. branch coverage) tarkoitetaan kuinka montaa prosenttia testattavan metodin/luokan sisältävistä ehtolauseiden haaroista testit ovat suorittaneet

Monet työkalut, esim. laskareissa käyttämämme JaCoCo mittaavat testien suorituksen yhteydessä testauskattavuuden. Muitakin kattavuuden tyyppejä on olemassa, mm. ehtokattavuus ja polkukattavuus, useat työkalut eivät niitä kuitenkaan tue.

![]({{ "/images/3-5.png" | absolute_url }}){:height="350px" }

JaCoCo ilmoittaa sekä rivi- (instruction) että haaraumakattavuuden (branches)
Testauskattavuus JaCoCossa. Epäkattavasti testattu haarautumiskohta esim. if ilmaistaan keltaisella.

Testauskattavuus toimii siis hyvänä apuvälineenä sen arvioimisessa testataanko sovellusta riittävästi.

### Mutaatiotestaus

Pelkkä testikattavuus ei kuitenkaan vielä kerro oikeastaan mitään testien hyvyydestä. Hyvät testit ovat  sellaisia, että jos ohjelmaan tulee bugi, huomaavat testit virheen. Testien hyvyys taas riippuu oleellisesti testien syötteidden lisäksi siitä minkälaisia assert-lauseilla tehtäviä tarkistuksia testeissä on. 

_Mutaatiotestauksen_ (engl. mutation testing) idea on nimenomaan testata testitapausten hyvyyttä generoimalla koodiin systemaattisesti mutantteja eli pieniä "bugeja" ja katsoa havaitsevatko testit koodiin tulleet bugit.

Erilaisia mutanttityyppejä, joita mutaatiotestauksessa koodiin generoidaan on paljon  mm.

- manipuloidaan ehtolausetta: <tt>if ( x<0 )</tt> muutetaan muotoon <tt>if (x <= 0)</tt> tai <tt>if ( true ) </tt>
- vaihdetaan operaattoria: <tt>x += 1</tt> muutetaan muotoon <tt>x -= 1</tt>
- kovakoodataan paluuarvo: <tt>return x;</tt>  muutetaan muotoon <tt>return true;</tt>
- korvataan konstruktorikutsu: <tt>olio = new Olio()</tt>  muutetaan muotoon <tt>olio = null;</tt>

Mutaatiotestauksen ongelmana on mutaatioiden suuri määrä ja ns. _ekvivalentit mutantit_, joiden takia mutaatiotestauksen tulos vaatii aina ihmisen tulkintaa.
Ekvivalentti mutantti tarkoittaa muutosta koodissa, joka ei kuitenkaan muuta ohjelman toiminnallisuutta. Eli mutantin lisäämistä koodiin ei voi mikään testi havaita. Mutantin toteaminen ekvivalentiksi algoritmisesti on mahdotonta.

Lisätietoa mutaatiotestauksesta esim. [wikipediassa](http://en.wikipedia.org/wiki/) ja [pit](http://pitest.org/)-työkalun sivulla.
 
## Integraatiotestaus

Järjestelmän yksittäiset, erillään yksikkötestatut luokat tulee integroida toimivaksi kokonaisuudeksi. Integroinnin yhteydessä tai sen jälkeen suoritetaan integrointitestaus, missä painopisteenä on ohjelman komponenttien välisten rajapintojen toimivuuden tutkimisessa sekä komponenttien yhdessä tuottaman toiminnallisuuden oikeellisuuden varmistamisessa.

Järjestelmän integrointi voi edetä joko järjestelmän rakenteeseen perustuen tai järjestelmän toteuttamien ominaisuuksien mukaan.

_Rakenteeseen perustuvassa integraatiossa_ keskitytään kerrallaan sovelluksen yksittäisten rakenteellisten komponenttien integrointiin, esimerkiksi verkkokaupan toteutuksessa integroitaisiin ensin arkkitehtuurilliset kerrokset, eli sovelluslogiikan luokat, käyttöliittymän toteutus ja tietokantarajapinta omina kokonaisuuksinaan. Tämän jälkeen kerrokset integroitaisiin kokonaiseksi soveukseksi.

_Ominaisuuksiin perustuvassa integroinnissa_, taas liitetään yhteen alikomponentit, jotka toteuttavat järjestelmän loogisen toiminnallisuuden. Verkkokaupassa voitaisiin esimerkiksi integroida kerrallaan kaikki toiminnallisuuteen _lisää tuote ostoskoriin_ liittyvät luokat ja edetä toiminnallisuus kerralla kunnes koko sovellus on valmis.
 
Sekä rakenteeseen, että ominaisuuksiin perustuva integrointi voi tapahtua joko ylhäältä alas tai alhaalta ylös.

_Alhaalta ylös_ (engl. bottom up): integroidessa lähdetään liikkeelle yksittäisistä komponenteista, liitetään niitä yhteen ja suoritetaan testejä kunnes kaikki integroitavat komponentit on yhdistetty.

Ylhäältä alas (engl. top-down) edetessä kehitetään ensin järjestelmän korkean tason rakenteet siten, että yksittäisten komponenttien paikalla on tynkäkomponentteja (engl. stub). Tyngät korvataan sitten yksi kerrallaan todellisilla komponenteilla koko ajan kokonaisuutta testaten

Vanhan liiton ohjelmistotuotannossa toimintatapa oli se, että kaikki ohjelman yksittäiset komponentit ohjelmoitiin ja yksikkötestattiin erikseen ja tämän jälkeen ne integroitiin (yleensä rakenteeseen perustuen) kerralla yhteen.
Tämän tyylinen, vesiputousmallin maailmassa yleinen nimikkeellä _big bang_ -integraatio kulkeva tekniikka on osoittautunut todella riskialttiiksi (seurauksena usein ns. integraatiohelvetti) ja sitä ei enää kukaan täysijärkinen suosittele käytettäväksi.

Moderni ohjelmistotuotanto suosii ns. _jatkuvaa integraatiota_, joka on hyvin tiheässä tahdissa tapahtuvaa ominaisuuksiin perustuvaa integrointia. Palaamme aiheeseen tarkemmin pian.

Itseasiassa koko termi _integraatiotestaus_ on käsitteenä melko häilyvä, ja joskus on vaikea tehdä selkeää rajanvetoa yksikkö- ja integraatiotestauksen välillä. Useimmiten ajatellaan että yksikkötestien kohteena on yksittäinen metodi, luokka tai ohjelmamoduuli. Entä jos testauksen alla oleva luokka/moduuli pitää sisällään rajapinnan takana useita muitakin luokkia, onko kyseessä enää yksikkötesti? 

## Regressiotestaus

Iteratiivisessa ja ketterässä ohjelmistotuotannossa, jossa jokainen iteraatio tuottaa ohjelmistoon uusia ominaisuuksia, on oltava koko ajan valppaana sen suhteen , että lisäykset eivät hajota ohjelman jo toimivia osia.

Testit on siis suoritettava uudelleen aina kun ohjelmistoon tehdään muutoksia.
Tätä käytäntöä sanotaan _regressiotestaukseksi_. Jotta varmuus ohjelmiston hajoamattomuudesta olisi mahdollisimman suuri, tulee regressiotestijoukkon koostua sekä yksikkö-, integraatio- että järjestelmätesteistä.

Usein regressiotesteinä käytetään kaikkia sovelluskehityksen aikana tehtyjä testejä. On myös tilanteita, joissa tämä ei ole mielekästä ja sopiva osajoukko kaikista testeistä voi taata riittävän luottamuksen.

Testaaminen on erittäin työlästä ja regressiotestauksen tarve tekee siitä entistä työläämpää. Tämän takia on erittäin tärkeää pyrkiä automatisoimaan testit mahdollisimman suurissa määrin. 

Automatisoitu yksikkötestaus on jo aiemmilta kursseilta tuttu aihe. Käsittelemme muutamia järjestelmätason testauksen automatisoinnin menetelmiä seuraavissa luvuissa.

## Ketterien menetelmien testauskäytänteet

Testauksen rooli ketterissä menetelmissä poikkeaa huomattavasti vesiputousmallisesta ohjelmistotuotannosta. Iteraation/sprintin aikana toteutettavat ominaisuudet integroidaan muuhun koodiin ja testataan yksikkö-, integraatio- sekä järjestelmätasolla. Sykli ominaisuuden määrittelystä siihen että se on valmis ja testattu on erittäin lyhyt, viikosta kuukauteen.

Testausta tehdäänkin sprintin "ensimmäisestä päivästä" lähtien ja testaus integroitu suunnitteluun ja toteutukseen, eikä ole ketterän näkemyksen mukaan enää oma erillinen vaiheensa.

Ketterän kehityksen luonne vaatii että testejä voidaan suorittaa usein ja mahdollisimman vähällä vaivalla, siispä automatisoitu regressiotestaus on avainasemassa.

Kuten mainitsimme [viikolla 2](viikko2) ketterien sovelluskehitystiimien tulisi olla _cross functional_, eli sisältää kaikki tietotaito mitä järjestelmän kehittäminen ja valmiiksisaattaminen edellyttää, tämän takia testaajat ovat ideaalitilanteessa 
sijoitettu kehittäjätiimiin (eikä erilliseen laadusta hallitsevaan QA-organisaatioon),  ja myös ohjelmoijat kirjoittavat testejä.

Testaajan rooli muuttuu virheiden etsijästä virheiden estäjään: testaaja auttaa tiimiä kirjoittamaan automatisoituja testejä, jotka pyrkivät estämään bugien pääsyn koodiin. Eräänä kantavana teemana ketterässä laadunllinnassa onkin "sisäänrakentaa laatu tuotteisiin", eli Lean-maailmasta tuttu periaate [built quality in](https://www.101ways.com/2010/09/06/lean-principles-2-build-quality-in/), toisinsanoen laadunhallintaan ei suhtauduta erillisen organisaation (esim. QA-tiimi) vastuulla olevana asiana, vaan jo sovelluskehityksen lähtökohtana on se, että bugeja ei pääse syntymään, ja jos pääsee, ne tulee havaita mieluiten jo tekovaiheessa. 

Käymme tässä luvussa läpi joukon ketterien menetelmien suosimia testauskäytenteitä.
 
_Test driven development_ (TDD) eli kehitysmenetelmä, missä testit tedään jo ennen koodin kirjoittamista. Nimestään huolimatta kyseessä tosin on enemmän suunnittelu- ja toteutustason tekniikka, sen "sivutuotteena" syntyy kuitenkin kattava joukko automaattisesti suoritettavia testejä.

TDD:n idea laajennus järjestelmätason testien tasolla toimivaksi kulkee nimillä _Acceptance Test Driven Development_ ja _Behavior Driven Development_.

_Continuous Integration_ eli jatkuva integraatio ja _(Continuous delivery)_ eli jatkuva tuotantovalmius ovat perinteisen integraatio- ja integraatiotestausvaiheen korvaava työskentelytapa, jossa pyrkimyksenä on integroida ja jopa viedä jokainen sovellukseen tehty muutos. 

Kaikista edellisistä käytänteistä seurauksena on suuri joukko eritasoisia (eli yksikkö-, integraatio-, järjestelmä-) automatisoituja testejä, joiden avulla tehty regressiotestaus mahdollistaa sen, että järjestelmän jatkokehityksen aikana voidaan olla turvallisin mielin siitä, että jo toimivia asioita ei sovelluksesta hajoa. 

Nousevana terendinä on suorittaa uusien ominaisuuksien laadunhallintaa myös siinä vaiheessa kun osa oikeista käyttäjistä on jo ottanut ne käyttöönsä. Testauksen kattavuudesta riippumatta nimittäin on hyvin tyypillistä, että tiettyjä ongelmia ilmenee vasta todellisessa käytössä. Systematisoimalla tuotantokäytössä olevan ohjelmiston monitorointia on mahdollista joissain tilanteissa jopa parempaa laadunhallintaa verrattuna kuin ennen tuotantoon tapahtuvassa testauksessa.

Voimakkaasta automatisointitrendistä huolimatta myös manuaalisesti tehtävällä testauksella on paikkansa. Tutkiva testaus (engl. exploratory testing) on pääosin manuaalinen järjestelmätestauksen tekniikka, jossa testaaminen tapahtuu ilman formaalia testisuunnitelmaa, testaaja luo lennossa uusia testejä edellisten testien antaman palautteen perusteella. Tutkivaa testausta käytetään usein kokonaan uusien ohjelmiston ominaisuuksien testaamiseen.

 ## Test driven development 

[Test driven development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) eli TDD on yksi [eXtreme Programmingin](http://www.extremeprogramming.org/) käytänteistä, missä siis testit on tarkoitus tehdä ennen varsinaisen sovelluksen koodin kirjoittamista.

Alan auktoriteettien kuten Kent Beckin ja Uncle Bob Martinin [määritelmän mukainen](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd) TDD etenee seuraavasti

1. Kirjoitetaan testiä sen verran että testi ei mene läpi. Ei siis luoda heti kaikkia luokan tai metodin testejä vaan edetään yksi testi kerrallaan.
2. Kirjoitetaan koodia sen verran, että testi saadaan menemään läpi. Ei yritetäkään heti kirjoittaa "lopullista" koodia.
3. Jos huomataan koodin rakenteen menneen huonoksi (eli havaitaan esim. copypastea koodissa, liian pitkiä metodeja, ...) _refaktoroidaan_ koodin rakenne paremmaksi. Refaktoroinnilla tarkoitetaan koodin sisäisen rakenteen muuttamista sen rajapinnan ja toiminnallisuuden säilyessä muuttumattomana.
4. Jatketaan askeleesta 1
 
TDD:n etenemisestä käytetään usein nimitystä _red-green-refactor_, eli tehdään teksti joka on punaisella, kirjotetaan koodia siten että testit menevät taas vihreäksi ja jos tarvetta, niin refaktoroidaan. Seuraava kuva havainnollistaa syklin etenemistä:

![]({{ "/images/3-6.png" | absolute_url }}){:height="350px" } 

TDD:llä ohjelmoitaessa toteutettavaa komponenttia ei yleensä ole tapana suunnitella tyhjentävästi etukäteen. Testit kirjoitetaan ensisijaisesti ajatellen komponentin käyttäjää, eli huomio on komponentin rajapinnassa ja rajapinnan helppokäyttöisyydessä, ei niinkään komponentin sisäisessä toteutuksessa. Komponentin sisäinen rakenne muotoutuu refaktorointien kautta. 

TDD:ssä perinteisen suunnittelu-toteutus-testaus -syklin voi ajatella kääntyneen täysin päinvastaiseen järjestykseen, tarkka oliosuunnittelu tapahtuu vasta refaktorointivaiheiden kautta.

### TDD:n hyviä puolia

TDD:tä tehtäessä korostetaan yleensä lopputuloksen yksinkertaisuutta, tarkoituksena on toteuttaa toiminnallisuutta vain sen verran, mitä testien läpimeno edellyttää.
Ei siis toteuteta "varalta" ekstratoiminnallisuutta, sillä sitä ei todennäköisesti tarvita tai ["You ain't gonna need it", YAGNI](https://martinfowler.com/bliki/Yagni.html) kuten monet koodarit asian ilmaisevat.

Koodista on vaikea tehdä testattavaa jos se ei ole modulaarista ja löyhästi kytketyistä selkeärajapintaisista komponenteista koostuvaa. Määritelmän mukaisella TDD:llä ohjelmoitaessa taas koodista tulee useimmiten jo lähtökohtaisesti modulaarista, selkeärajapintaista ja vähäistä turhilta riippuvuuksiltaan. Tälläisen koodin taas on huomattu olevan laadukasta ylläpidettävyyden ja laajennettavuuden kannalta. Eli eräs argumentti TDD:n puolesta on juuri ollut sen tuottama, laajennettavuuden ja jatkokehitettävyyden kannalta hyvä koodin laatu.

Muina TDD:n hyvinä puolina manitaan että se rohkaisee ottamaan pieniä askelia kerrallaan ja näin toimimaan fokusoidusti, ja että hyvin kirjoitetut testit toimivat toteutetun komponentin rajapinnan dokumentaationa.
 
TDD:tä on tutkittu akateemisesti kohtuullisen paljon. Kovin suurta evidenssiä sen hyödyistä [ei ole](https://researchportal.helsinki.fi/fi/publications/effects-of-test-driven-development-a-comparative-analysis-of-empi) havaittu, tosin tutkimusasetelmatkaan eivät ole olleet kovin vakuuttavia ja realistisia käyttötilanteita vastaavia.

### TDD:llä on myös ikävät puolensa

Käytettäessä TDD:tä testikoodia tulee paljon, usein suunnilleen saman verran kuin varsinaista koodia. Jos ja kun sovellus muuttuu, tulee testejä ylläpitää myös ylläpitää sillä moni suuremmat rakenteelliset muutokset hajoittavat usein osan testeistä.

TDD:n käyttö on haastavaa (mutta ei mahdotonta) mm. käyttöliittymä-, tietokanta- ja verkkoyhteyksistä huolehtivan koodin yhteydessä. Testauksen kannalta hankalat komponentit kannattaakin eristää mahdollisimman hyvin muusta koodista, näin on järkevää tehdä, käytettiin TDD:tä tai ei.

Jo olemassaolevan eli koodin laajentaminen TDD:llä voi olla erittäin haastavaa.

## Riippuvuuksien hallinta testeissä

TDD:tä ja muutenkin yksikkötestejä tehdessä on ratkaistava kysymys, miten testeissä suhtaudutaan testattavien luokkien riippuvuuksiin, eli luokkiin, joiden oliota testattava luokka käyttää.

Laskareista tuttu [riippuvuuksien injektio](linkki) -suunnittelumalli parantaa luokkien testattavuutta, sillä se mahdollistaa riippuvuuksien asettamisen luokille testistä käsin.

Yksi mahdollisuus on tehdä testejä varten riippuvuudet korvaavia tynkäkomponentteja, näin tehtiin mm. [viikon 1 tehtävässä 16](linkki). Stubeihin voidaan esim. kovakoodata metodikutsujen tulokset valmiiksi. Testit voivat myös kysellä stubilta millä arvoilla testattava metodi sitä kutsui ja näin varmistaa, että testattava koodi on kommunikoinut riippuvuuksiensa kanssa oletetulla tavalla.

Tynkäkomponentteja kutsutaan niiden ominaisuuksista riippuen joko stubeiksi tai mock-olioiksi, Martin Fowlerin [artikkeli](http://martinfowler.com/articles/mocksArentStubs.html) selventää asiaa ja terminologiaa.

On olemassa useita kirjastoja mock-olioiden luomisen helpottamiseksi, tutustumme laskareissa Javalle tarkoitettuun [Mockito](https://site.mockito.org/)-kirjastoon.
 
Esimerkki viikon 2 laskareiden verkkokauppatehtävästä.

Ostotapahtuman yhteydessä kaupan tulisi veloittaa asiakkaan tililtä ostosten hinta _kutsumalla luokan pankki metodia tilisiirto_:

![]({{ "/images/3-7.png" | absolute_url }}){:height="220px" } 

Miten varmistamme, että tilisiirron suorittavaa metodia on kutsuttu? 

Mockito-kirjastoa käyttäen tämä onnistuu seuraavasti. Luodaan testissä kaupan riippuvuuksista mock-oliot:

![]({{ "/images/3-8.png" | absolute_url }}){:height="350px" } 

Pankkia edustavalle mock-oliolle on asetettu _ekspektaatio_, eli vaatimus joka varmistaa, että metodia tilisiirto on kutsuttu testin aikana sopivilla parametreilla. Jos tämä vaatimus ei täyty, testi ei mene läpi.

## User storyjen testaaminen 

User storyn [määritelmän](viikko2) yhteydessä mainittiin, että user storyn käsite pitää sisällään _hyväksymäkriteerit_, Mike Cohnin sanoin:

_tests that convey and document details and that will be used to determine that the story is complete_

Esimerkiksi userstoryn _asiakas voi lisätä tuotteen ostoskoriin_ hyväksymäkriteerejä voisivat olla
- ollessaan tuotelistauksessa ja valitessaan tuotteen jota on varastossa, menee tuote ostoskoriin ja ostoskorin hinta sekä korissa olevien tuotteiden määrä päivittyy oikein
- ollessaan tuotelistauksessa ja valitessaan tuotteen jota ei ole varastossa, pysyy ostoskorin tilanne muuttumattomana

Optimaalisessa tilanteesa user storyjen hyväksymäkriteereistä saadaan muodostettua suurin osa ohjelmiston järjestelmätason, eli käyttäjän näkökulmasta sovelluksen toiminnallisuuden varmistavia, testejä.

Storyn hyväksymäkriteerit on tarkoituksenmukaista kirjoittaa heti storyn toteuttavan sprintin alussa, mielellään yhteistyössä tiimin kesken sekä product ownerin tai jonkun muun asiakkaan edustajan kesken. Usein käytäntönä on ilmaista hyväksymäkriteerit user storyjen tapaan asiakkaan kielellä, käyttämättä teknistä jargonia. Hyväksymäkriteerien kirjoittamisprosessi lisääkin parhaassa tapauksessa asiakkaan ja tiimin välistä kommunikaatiota.
 
### Järjestelmätestien automatisointi, ATDD ja BDD

Ideaalitilanteessa storyjen hyväksymäkriteereistä tehdään automaattisesti suoritettavia. 

Automaattisen hyväksymätestauksen on olemassa monia työkaluja, eräs suosituimmista on Suomalainen python-pohjainen [Robot framework](https://robotframework.org/). Käytämme kurssilla kuitenkin useita eri kieliä tukevaa [Cucumberia](https://cucumber.io/). 

Automatisoidusta hyväksymistestauksesta käytetän joskus nimitystä [Acceptance test driven development])(https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_developmen) (ATDD) tai _[Behavior driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)_ (BDD), erityisesti jos testit toteuteaan jo iteraation alkupuolella, ennen kun itse toteutus on valmis.

ATDD:ssä ja BDD:ssä on kyse lähes samasta asiasta pienin painotuseroin. BDD kiinnittää tarkemmin huomioita testeissä käytettävän terminologian, BDD ei muunmuassa puhu ollenkaan testeistä vaan käyttää sensijaan kuvailee hyväksymiskriteeriot esimerkkikäyttäytymisten (example behavior) avulla. Kurssilla käytämme pääosin BDD:n nimentäkäytäntöjä, sillä käyttämämme [Cucumber](https://cucumber.io/) on nimenomaan BDD-piirien kehittämä työkalu. 

Käsite ATDD pitää sisällään aina ainoastaan hyväksymätason testausta. BDD:llä voidaan tehdä myös muita kuin hyväksymätason testejä. Rubylle alun perin kehitetty [rspec](https://rspec.info/) sanoo olevansa BDD-kirjasto, rspec sopii hyväksymätestien lisäksi hyvin myös yksikkötestaamiseen. Muille kielille on tehty paljon rspecin-tapaan toimivia BDD_henkisiä kirjastoja, kuten Javascriptmaailman [mocha](https://mochajs.org/) ja [jest](https://jestjs.io/).

### Cucumber

Kuten useimmissa hyväksymistason testauksen työkalussa myös Cucumberissa testit kirjoitetaan asiakkaan kielellä.

Tarkastellaan esimerkkinä käyttäjätunnuksen luomisen ja sisäänkirjautumisen tarjoamaa palvelua.

Palvelun vaatimuksen määrittelevät user storyt
- _a new user account can be created if a proper unused username and a proper password are given_
- _user can log in with a valid username/password-combination_

Cucumberissa jokaisesta User Storystä kirjoitetaan oma _.feature_-päätteinen tiedosto, joka sisältää storyn nimen ja joukon storyyn liittyvä hyväksymätestejä joita Cucumber kutsuu _skenaarioiksi_. Storyn hyväksymätestit eli skenaariot kirjoitetaan [Gherkin](https://cucumber.io/docs/gherkin/reference/)-kielellä,
muodossa

_Given [initial context], when [event occurs], then [ensure some outcomes]_

Esimerkkimme ensimmäinen user story hyväksymiskriteereineen kirjoitettasiin seuraavasti:

![]({{ "/images/3-9.png" | absolute_url }}){:height="450px" }

Skenaariot muutetaan automaattisesti suoritettaviksi testeiksi kirjoittamalla niistä mäppäys ohjelmakoodiin. Ohjelmoijat tekevät mäppäyksen siinä vaiheessa, kun tuotantokoodia on tarpeellinen määrä valmiina.

Käytännössä jokaista testin _given_, _when_ ja _then_-askelta vastaa oma metodinsa.
Metodit kutsuvat ohjelman luokkia simuloiden käyttäjän syötettä varmistaen että ohjelma reagoi käyttäjän toimiin halutulla tavalla. 

![]({{ "/images/3-10.png" | absolute_url }}){:height="500px" }

## Websovellusten testien automatisointi

Olemme jo nähneet, miten riippuvuuksien injektoinnin avulla on helppo tehdä komentoriviltä toimivista ohjelmista testattavia. Myös Java Swing, JavaFX ja muilla käyttöliittymäkirjastoilla sekä web-selaimella käytettävien sovellusten automatisoitu testaaminen on mahdollista. Tutustumme laskareissa web-sovellusten testauksen automatisointiin käytettävään [Selenium 2.0 WebDriver](http://seleniumhq.org/docs/03_webdriver.html) -kirjastoon.

Selenium tarjoaa rajapinnan, jonka avulla on mahdollisuus simuloida ohjelmakoodista tai testikoodista käsin selaimen toimintaa, esim. linkkien klikkauksia ja tiedon syöttämistä lomakkeeseen. Selenium Webdriver -rajapinta on käytettävissä lähes kaikilla ohjelmointikielillä.

Seleniumia käyttävät testit voi tehdä normaalin testikoodin tapaan joko JUnit- tai Cucumber-testeinä.

Seuraavassa esimerkki käyttäjätunnuksista ja sisäänkirjautumisesta huolehtivan järjestelmän web-version testien mäppäyksestä:

![]({{ "/images/3-11.png" | absolute_url }}){:height="500px" }

Cucumberiin ja web-sovellusten testaamiseen tutustutaan tarkemmin viikon 3 laskareissa.

## Ohjelmiston integraatio

Vesiputousmallissa eli lineaarisesti etenevässä ohjelmistotuotannossa ohjelmiston toteutusvaiheen päättää integrointivaihe, jonka aikana yksittäin testatut komponentit integroidaan yhdessä toimivaksi kokonaisuudeksi sekä suoritetaan integraatiotestaus, joka varmistaa yhteistoiminnallisuuden. 

Perinteisesti juuri integrointivaihe on tuonut esiin suuren joukon ongelmia,
tarkasta suunnittelusta huolimatta erillisten tiimien toteuttamat komponentit rajapinnoiltaan tai toiminnallisuudeltaan epäsopivia.

Suurten projektien integrointivaihe on kestänyt ennakoimattoman kauan, ja 
integrointivaiheen aikana havaitut ongelmat ovat saattaneet aiheuttaa suuriakin suunnittelu- tai jopa vaatimusmäärittelytason muutoksia.

Integraatio on ollut perinteisesti niin ikävä ja hankala vaihe, että sitä kuvaamaan on lanseerattu termi [integratiohelvetti](http://wiki.c2.com/?IntegrationHell).

### Daily build ja smoke test

90-luvulla alettiin huomaamaan, että riskien minimoimiseksi integraatio kannattaa tehdä useammin kuin vain projektin lopussa. Parhaaksi käytänteeksi alkoi muodostua päivittäin tehtävä koko projektin kääntäminen eli _daily build_ ja samassa yhteydessä suoritettava _smoke test_. Nämä käytänteet olivat 90-luvun puolessa välissä erityisesti [Microsoftin](https://stevemcconnell.com/articles/daily-build-and-smoke-test/) Excel ja Windows 95 -tiimien kehittelemiä.

Smoke testillä tarkoitetaan testattavan toiminnalisuuden suhteen kohtuullisen yksinkertaista järjestelmätason testiä, joka kuitenkin testaa järjestelmän kaikkia arkkitehtuurillisia tasoja (käyttöliittymää, sovelluslogiikkaa, tietokanaa), ja havaitsee jos jotain on pahasti pielessä. 

Daily buildia ja smoke testiä käytettäessä järjestelmän integraatio tehdään ainakin jollain tarkkuustasolla joka päivä. Komponenttien yhteensopivuusongelmat huomataan nopeasti ja niiden korjaaminen helpottuu. Tiimin moraali myös paranee, kun ohjelmistosta on olemassa päivittäin kasvava toimiva versio.

### Jatkuva integraatio
 
Mahdollisimman usein tapahtuva integraatiovaihe todettiin hyväksi käytännöksi. Extreme programming -yhteisö kehitti ideaa vielä päivittäistäkin sykliä pidemmälle ja näin syntyi _jatkuva integraatio_ eli [continuous integration](https://martinfowler.com/articles/continuousIntegration.html) (CI).

Jatkuvaa integraatiota käytettäessä ohjelmakoodi, automatisoidut testit ja sekä ohjelmiston konfiguraatio pidetään keskitetyssä versionhallintarepositoriossa. 

Yksittäinen palvelin, jonka konfiguraatio vastaa mahdollisimman läheisesti tuotantopalvelimen konfiguraatiota, varataan CI-palvelimeksi. 
Kun keskitettyyn repositoriossa olevaan koodiin tulevien muutosten yhteydessä,  CI-palvelin hakee ohjelmiston koodin, kääntää sen sekä suorittaa testit.
Jos koodi ei käänny tai testit eivät mene läpi, CI-palvelin kertoo ongelmista kehittäjätiimille, ja ongelmiin on tarkoitus puuttua välittömästi välittömästi. 

Sovelluskehittäjän workflow jatkuvaa integraatiota käytettäessä on seuraava. Aloittaessaan uuden ominaisuuden toteuttamisen, kehittäjä hakee versionhallinnasta koodin ajantasaisen version.

Kehittäjä toteuttaa työn alla olevan ominaisuuden, tekee sille automatisoidut testit ja integroi sen muuhun koodiin. Kun kaikki on valmiina, ja testit menevät läpi paikallisesti, pushaa kehittäjä koodin versionhallintaan.

CI-palvelin huomaa tehdyt muutokset, hakee koodit ja suorittaa testit
Näin minimoituu mahdollisuus sille, että lisätty koodi toimii esimerkiksi konfiguraatioerojen takia ainoastaan kehittäjän omalla työasemalla

Jatkuvan integraation tarkoituksena on siis se, että jokainen kehittäjä integroi tekemänsä työn muuhun koodiin mahdollisimman usein, vähintään kerran päivässä. CI siis rohkaisee jakamaan työn pieniin osiin, sellaisiin jotka saadaan testeineen "valmiiksi" yhden työpäivän aikana. CI-työprosessin noudattaminen vaatiikin suurta kurinalaisuutta.

Täydellisenä kontrastina vesiputousmaailman integraatiohelvettiin, jatkuvan integraation pyrkimyksenä tehdä ohjelmiston integoinnista täysin vaivaton operaatio joka takaa sen että ohjelmistosta on koko ajan saatavilla ajantasainen integroitu ja testattu versio.

Jotta CI-prosessi toimisi riittävän jouhevasti, tulee testien suorittamisen tapahtua suhteellisen nopeasti, maagisena rajana pidetään usein kymmentä minuuttia. 
Erityisesti käyttöliittymän läpi suoritettavat hyväksymätestit voivat kuitenkim olla melko aikaavieviä. Jos testien suoritusaika alkaa kasvaa liian hitaasti, voidaan testit konfiguroida ajettavaksi _kahdessa vaiheessa_. Testien ensimmäisen vaiheen _commit buildin_ läpimeno antaa kehittäjälle riittävän varmuuden pushata uusi versionhallintaan. CI-palvelimella suoritetaan sitten myös hitaammat testit sisältävä _secondary build_. 

Ensimmäisellä viikolla käyttämämme [CircleCI](https://circleci.com) on yksi monista SaaS-palveluna toimivista CI-ratkaisuista, toinen suosittu vaihtoehto on [Travis](https://travis-ci.org/). Eräs SaaS-palveluina toimivien CI-ratkaisujen suurista eduista on se että tarvetta oman CI-palvelimen asentamiselle ei ole.

Circleä ja Travisia paljon vanhempi [Jenkins](https://jenkins.io/) lienee edelleen maailmalla eniten käytetty CI-palvelinohjelmisto. Tällä hetkellä ei kuitenkaan ole yhtään ilmaista verkossa olevaa Jenkins-palvelua. Jenkinsin käyttö siis edellyttää sen asentamista omalle palvelimelle.

GitHub kertoi loppukesästä julkaisevansa 15.11.2019 ns. [actions](https://www.youtube.com/watch?v=E1OunoCyuhY)-toiminnallisuuden, jonka avulla myös jatkuva integraatio voidaan suorittaa suoraan Githubissa, käyttämättä erillistä palvelua. Tämä on erittäin kiinnostava uutinen, harmi että julkistus tapahtuu tämän kurssin kannalta hieman liian myöhään.

## Jatkuva tuotantoonvienti ja toimitusvalmius

Viime aikoina nousseen trendin mukaan jatkuvaa integraatiota viedään vielä askel pidemmälle ja integraatioprosessiin lisätään myös automaattinen "deployaus", eli
käännetty ja testattu koodi siirretään suoritettavaksi ns. _staging_- eli testipalvelimelle.

Staging-palvelin, on ympäristö, joka on konfiguraatioidensa ja myös sovelluksen käsittelemän datan osalta mahdollisimman lähellä varsinaista tuotantoympäristöä. Kun ohjelmiston uusi versio on viety eli deployattu staging-palvelimelle, suoritetaan sille hyväksymätestaus. Nämä testit ovat lähinnä järjestelmätason testejä, jotka varmistavat, että sovellus toimii mahdollisimman tuotannon kaltaisessa ympäristössä käyttäjän kannalta halutulla tavalla.

Hyväksymätestauksen jälkeen uusi versio voidaan siirtää tuotantopalvelimelle.
Parhaassa tapauksessa myös staging-ympäristössä tehtävien hyväksymätestien suoritus on automatisoitu, ja ohjelmisto kulkee koko _deployment pipeline_ läpi, eli sovelluskehittäjän koneelta CI-palvelimelle, sieltä stagingiin ja lopulta tuotantoon, automaattisesti.

Termillä _deployment pipeline_ siis tarkoitetaan niitä ohjelman käännöksen ja testauksen vaiheita, joiden suorittamista edellytetään, että ohjelma saadaan siirrettyä tuotantoympäristöön asiakkaan käyttöön.

Jokainen sovelluskehittäjän commit kulkee deployment pipelinen eli käsitteellisen "liukuhihnan" läpi
- CI-palvelin suorittaa commitille joukon testejä
- seuraavassa vaiheessa commitin aikaansaama sovelluksen uusi versio siirtyy staging-ympäristöön
- staging-ympäristössä sovelluksen uudelle versiolle suoritetaan
lisää testejä
- lopulta commit siirtyy tuotantoympäristöön

![]({{ "/images/3-12.png" | absolute_url }}){:height="280px" }

Käytännöstä, jossa jokainen CI:n läpäisevä ohjelmiston commit, eli versionhallintaan pushattu versio viedään automatisoidusti staging-palvelimelle ja siellä tapahtuvan automatisoidun hyväksymätestauksen jälkeen tuotantoon, nimitetään 
_jatkuvaksi käyttöönotoksi_ (engl. continuous deployment).

On olemassa ympäristöjä, joissa jokaista committia ei haluta viedä automaattisesti tuotantoon. Jos viimeinen vaihe, eli tuotantoon vieminen tapahtuukin ainoastaan käyttäjän toimiesta "nappia painamalla", puhutaan _jatkuvasta toimitusvalmiudesta_, (engl. continuous delivery). 

Viime aikoina on erityisesti suuren kokoluokan web-palveluissa (esim. Google, Amazon, Netflix, Faebook) ruvettu suosimaan tyyliä, jossa ohjelmisto julkaistaan tuotantoon jopa jopa [kymmeniä kertoja tai satoja](https://dzone.com/articles/release-frequency-a-need-for-speed) kertoja päivästä.

## Tutkiva testaaminen
 
Jotta järjestelmä saadaan niin virheettömäksi, että se voidaan laittaa tuotantoon, on testauksen oltava erittäin perusteellinen. Perinteinen tapa järjestelmätestauksen suorittamiseen on ollut laatia ennen testausta hyvin perinpohjainen testaussuunnitelma.
Jokaisesta testistä on kirjattu testisyötteet ja odotettu tulos ja testauksen tuloksen tarkastaminen on suoritettu vertaamalla järjestelmän toimintaa testitapaukseen kirjattuun odotettuun tulokseen.

Automatisoitujen hyväksymätestien luonne on täsmälleen samanlainen, syöte on tarkkaan kiinnitetty samoin kuin odotettu tuloskin. Jos testaus tapahtuu pelkästään etukäteen mietittyjen testien avulla, ovat ne kuinka tarkkaan tahansa harkittuja, ei kaikkia yllättäviä tilanteita osata ennakoida. Hyvät testaajat ovat kautta aikojen tehneet "virallisen" dokumentoidun testauksen lisäksi epävirallista "ad hoc"-testausta. Viime vuosina "ad hoc"-testaus on saanut virallisen aseman ja sen strukturoitua muotoa on ruvettu nimittämään _tutkivaksi testaamiseksi_ (engl. exploratory testing).
 
Käsitteen tutkiva testaaminen kehittäjä [Cam Kaner](http://www.satisfice.com/articles/what_is_et.shtml) määrittelee termin seuraavasti

_exploratory testing is simultaneous learning, test design and test execution_

Ideana on, että testaaja ohjaa toimintaansa suorittamiensa testauksen tuloksen perusteella. Testitapauksia ei suunnitella kattavasti etukäteen, vaan testaaja pyrkii kokemuksensa ja suoritettujen testien perusteella löytämään järjestelmästä virheitä.

Tutkiva testaus ei kuitenkaan etene täysin sattumanvaraisesti, testaussessiolle asetetaan jonkinlainen tavoite, eli mitä tutkitaan ja minkälaisia virheitä etsitään.

Ketterässä ohjelmistotuotannossa tavoite voi hyvin jäsentyä yhden tai useamman user storyn määrittelemän toiminnallisuuden ympärille. Esimerkiksi verkkokaupassa voitaisiin testata ostosten lisäystä ja poistoa ostoskorista.

Tutkivassa testauksessa keskeistä on kaiken järjestelmän tekemien asioiden havainnointi. Normaaleissa etukäteen määritellyissä testeissähän havainnoidaan ainoastaan reagoiko järjestelmä odotetulla tavalla. Tutkivassa testaamisessa kiinnitetään huomio myös varsinaisen testattavan asian ulkopuoleisiin asioihin.

Esimerkiksi jos huomattaisiin selaimen osoiterivillä URL
http://www.verkkokauppa.com/ostoskori?id=10
voitaisiin yrittää muuttaa käsin ostoskorin id:tä ja yrittää saada järjestelmä epästabiiliin tilaan.

Tutkivan testaamisen avulla löydettyjen virheiden toistuminen jatkossa kannattaa eliminoida lisäämällä ohjelmalle sopivat automaattiset regressiotestit. Tutkivaa testaamista ei siis kannata käyttää regressiotestaamisen menetelmänä vaan sen avulla kannattaa ensisijaisesti testata sprintin yhteydessä toteutettuja uusia ominaisuuksia.

Tutkiva testaaminen siis ei ole vaihtoehto normaaleille tarkkaan etukäteen määritellyille testeille vaan niitä täydentävä testauksen muoto.
 
## Tuotannossa tapahtuva testaaminen ja laadunhallinta

Perinteisesti on ajateltu, että kaiken ohjelmiston laadunhallintaan liittyvän testauksen tulee tapahtua ennen kuin ohjelmisto tai sen uudet toiminnallisuudet on otettu käyttöön eli viety tuotantoympäristöön. Viime aikoina erityisesti web-sovellusten kehityksessä on noussut esiin suuntaus, missä osa laadunhallinnasta tapahtuu monitoroimalla tuotannossa olevaa ohjelmistoa.

![]({{ "/images/3-13.png" | absolute_url }}){:height="330px" }

### Blue-green-deployment

Eräs tuotannossa tapahtuvan testaamisen tekniikka on [blue-green-deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html), missä periaatteena on ylläpitää rinnakkain kahta tuotantoympäristöä (tai palvelinta), joista käytetään nimiä blue ja green.

Tuotantoympäristöistä vain toinen on ohjelmiston käyttäjien aktiivisessa käytössä. Käyttäjien ja tuotantopalvelinten välissä oleva komponentti esim, ns. reverse proxynä toimiva web-palvelin (kuvassa router) ohjaa käyttäjien liikenteen aktiivisena olevaan ympäristöön. 

Kun järjestelmään toteutetaan uusi ominaisuus, deployataan se ensin passiivisena olevaan ympäristöön.
 
![]({{ "/images/3-14.png" | absolute_url }}){:height="250px" }

Passiiviselle, uuden ominaisuuden sisältämälle ympäristölle voidaan sitten tehdä erilaisia testejä, esim. osa käyttäjien liikenteestä voidaan ohjata aktiivisen lisäksi passiiviseen ympäristöön ja varmistaa, että se toimii odotetulla tavalla.

Kun uuden ominaisuuden sisältävän passiivinen ympäristön todetaan toimivan ongelmattomasti myös tuotantoympäristössä, voidaan palvelinten rooli vaihtaa, uuden ominaisuuden sisältämästä palvelimesta tulee uusi aktiivinen tuotantoympäristö.
Aktiivisen tuotantoympäristön vaihto tapahtuu määrittelemällä web- palvelin ohjaamaan liikenne uudelle palvelimelle.

Jos uuden ominaisuuden sisältämässä ympäristössä havaitaan aktivoinnin jälkeen jotain ongelmia, on mahdollista suorittaa erittäin nopeasti _rollback-operaatio_, eli vaihtaa vanha versio jälleen aktiiviseksi.

On tarkoituksenmukaista, että kaikki blue-green-deploymentiin liittyvät testit, niiden tulosten varmistaminen, tuotantoympäristön vaihto ja mahdollinen rollback tapahtuvat automatisoidusti.

### Canary release

Blue-green-deploymentin hieman pidemmälle viedyssä versiossa [canary-releasessa](https://martinfowler.com/bliki/CanaryRelease.html) uuden ominaisuuden sisältävään ympäristöön ohjataan osa, esim. 5% järjestelmän käyttäjistä:

![]({{ "/images/3-15.png" | absolute_url }}){:height="250px" }

Uuden ominaisuuden sisältämää versiota monitoroidaan aktiivisesti ja jos ongelmia ei ilmene, vähitellen kaikki liikenne ohjataan uuteen versioon.
Kuten blue-green-deploymentin tapauksessa, ongelmatilanteissa palautetaan käyttäjät aiempaan, toimivaksi todettuun versioon.

Uuden version toimivaksi varmistaminen siis perustuu _järjestelmän monitorointiin_.
Jos kyseessä olisi esim. sosiaalisen median palvelu, monitoroinnissa voitaisiin tarkastella esim:
- palvelun muistin ja prosessoriajan kulutusta sekä verkkoliikenteen määrää - sovelluksen eri sivujen vasteaikoja eli latautumiseen menevää aikaa 
- kirjautuneiden käyttäjien määrää
- luettujen ja lähetettyjen viestien määriä per käyttäjä
- kirjautuneen käyttäjän sovelluksessa viettämää aikaa

Monitoroinnissa tulee siis palvelimen yleisen toimivuuden lisäksi seurata
_käyttäjätason metriikoita_ (engl. bussiness level metrics). Jos niissä huomataan eroja aiempaan, esim. kirjautuneet käyttäjät eivät lähetä viestejä samaa määrää kuin keskimäärin normaalisti, voidaan olettaa, että sovelluksen uudessa versiossa saattaa olla joku ongelma ja voi olla tarpeen tehdä rollback vanhaan järjestelmäversioon ja analysoida vikaa tarkemmin.

Myös canary releasejen yhteydessä testauksen ja kaikkien tuotantoon vientiin liittyvän on syytä tapahtua automatisoidusti. 
 
Nimi canary release periytyy kaivostyöläisten tavasta käyttää kanarialintuja tutkimaan sitä onko kaivoksessa myrkyllisiä kaasuja, jos kaivokseen viety lintu ei kuole, ilma on turvallista

## Tuotannossa testaaminen ja tietokanta

Edellisillä kuvissa oli merkitty järjestelmän vanhalle ja uudelle versiolle erillinen tietokantapalvelin (database server).

Tilanne ei välttämättä ole tämä ja erityisesti canary releasejen yhteydessä järjestelmän molemmat versiot käyttävät yleensä samaa tietokantaa:
 
![]({{ "/images/3-16.png" | absolute_url }}){:height="250px" }

Tämä taas asettaa haasteita, jos järjestelmään toteutetut uudet ominaisuudet edellyttävät muutoksia tietokannan skeemaan sillä canary releasejen yhteydessä tarvitaan usein yhtä aikaa sekä tietokannan uutta että vanhaa versiota

Jos järjestelmän uusi ja vanha versio joutuvat jostain syystä käyttämään eri tietokantaa, täytyy kantojen tila synkronoida, jotta järjestelmien vaihtaminen onnistuu saumattomasti yhteen kantaa sovelluksen tekemät päivitykset on siis tavalla tai toisella tehtävä myös toiseen, kenties skeemaltaan jo muuttuneeseen kantaan.
 
## Feature toggle

Canary releasea havainnollistavassa kuvassa järjestelmän uusi ja vanha versio näytettiin erillisenä palvelimena. Sama voidaan toteuttaa myös käyttäen yksittäistä palvelinta ns. [feature toggleja](https://martinfowler.com/articles/feature-toggles.html) hyödyntämällä. Sama asia kulkee myös nimillä feature flag, conditional feature, config flag, nimi feature toggle alkaa kuitenkin vakiintua.

Feature togglejen periaate on erittäin yksinkertainen. Koodiin laitetaan ehtolauseita, joiden avulla osa liikenteestä ohjataan vanhan toteutuksen sijaan uuteen laadun hallinnan alla olevaan toteutukseen.

Esimerkiksi sosiaalisen median palvelussa voitaisiin käyttäjälle näytettävien uutisten listaan asettaa feature toggle, jonka avulla tietyin perustein valituille käyttäjille näytettäisiinkin uuden algoritmin perusteella generoitu lista uutisia:

![]({{ "/images/3-17.png" | absolute_url }}){:height="200px" }

Canary releaset eivät ole feature togglejen ainoa sovellus, niitä käytetään
yleisesti myös eliminoimaan tarve pitkäikäisille feature brancheille, eli sen sijaan, että uusia ominaisuuksia toteutetaan erilliseen haaraan versionhallinnassa joka ominaisuuksien valmistumisen yhteydessä mergetään pääkehityshaaraan, uudet ominaisuudet tehdään suoraan pääkehityshaaraan, mutta ne piilotetaan käyttäjiltä feature toggleilla.

Käytännössä feature toggle siis palauttaa aina vanhan version normaaleille käyttäjille, sovelluskehittäjien ja testaajien taas on mahdollista valita kumman version feature toggle palauttaa. Kun ominaisuus on valmis testattavaksi laajemmalla joukolla, voi feature togglen avulla sitten esim. julkaista ominaisuuden ensin kehittäjäyrityksen omaan käyttöön ja lopulta osalle käyttäjistä canary releasena. Lopulta feature toggle ja vanha toteutus voidaan poistaa.

Suuret internetpalvelut kuten Facebook, Netflix, Google ja Flickr soveltavat laajalti canary releaseihin ja feature toggleihin perustuvaa kehitysmallia. 

## Feature branchit ja merge hell

Edellisessä luvussa mainittiin [feature branchit](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), kyseessä on siis käytäntö, missä uudet ominaisuudet, esimerkikri user storyn vaatima toiminnallisuus toteutetaan ensin omaan versionhallinnan haaraansa (branch) ja ominaisuuden valmistuttua haara mergetään pääkehityshaaraan (esim. masteriin).

Monet pitävät feature brancheja versionhallinnan käytön best practicena. Viime aikoina on kuitenkin ruvettu monissa piireissä pitämään feature branchaystä ikävänä käytänteenä, sillä se johtaa helposti pahoihin merge-konflikteihin, erityisesti jos branchit ovat pitkäikäisiä.

Seurauksena pienimuotoinen integraatiohelvetti, _merge hell_ ja normipäivä ohjelmistotiimissä alkaa muistuttaa seuraavaa

![]({{ "/images/3-18.png" | absolute_url }}){:height="80px" }
 
Viime aikaisena suuntauksena on noussut esiin [trunk based development](https://trunkbaseddevelopment.com/) missä pitkäikäisiä feature brancheja ei käytetä ollenkaan.

Kaikki muutokset tehdään suoraan pääkehityshaaraan, josta käytetään nimitystä trunk. Pääkehityshaara voi olla master tai joku erillinen branch käytännöistä riippuen. Ohjelmiston kustakin julkaistusta versiosta saatetaan tarvittaessa tehdä oma _release branch_.

Trunk-pohjainen kehitys pakottaa sovelluskehittäjät tekemään pieniä, nopeasti päähaaraan mergettäviä muutoksia. Trunk-pohjainen kehitys yhdistetään usein feature toggleihin, näin puolivalmiitakin ominaisuuksia voidaan helposti ohjelmoida suoraan päähaaraan ilman sovelluksen olemassa olevan toiminnallisuuden sotkemista.

Trunk-pohjainen kehitysmalli edellyttää sovelluskehittäjiltä kuria ja systemaattisuutta. Feature togglejen holtiton käyttö voi johtaa feature toggle helvettiin... 

Trunk-pohjaista kehitysmallia noudattavat esim. Google, Facebook ja Netflix.

## DevOps

Jatkuvan toimitusvalmiuden (Continuous delivery), käyttöönoton (Continuous deployment) ja tuotannossa testaamisen soveltaminen ei useimmiten ole ollenkaan suoraviivaista.

Perinteisesti yrityksissä on ollut tarkka erottelu sovelluskehittäjien (developers, dev) ja tuotantopalvelimista vastaavan järjestelmäylläpitäjien (operations, ops) välillä. On erittäin tavallista, että sovelluskehittäjät eivät pääse edes kirjautumaan tuotantopalvelimille ja sovellusten tuotantoon vieminen sekä esim. tuotantotietokantaan tehtävät skeeman päivitykset tapahtuvat ylläpitäjien toimesta.

Tälläisessä ympäristössä esim. continuous deploymentin harjoittaminen on erittäin haastavaa, tilanne ajautuukin helposti siihen, että tuotantopalvelimelle pystytään viemään uusia versioita vain harvoin, esimerkiksi vain 4 kertaa vuodessa.
Joustavammat toimintamallit uusien ominaisuuksien tuotantoon viemisessä vaativatkin täysin erilaista kulttuuria, sellaista, missä kehittäjät (dev) ja ylläpito (ops) työskentelevät tiiviissä yhteistyössä. Esim. sovelluskehittäjille tulee antaa tarvittava pääsy tuotantopalvelimelle tai Scrum-tiimiin sijoitetaan ylläpitovastuilla olevia ihmisiä.

Toimintamallia missä dev ja ops työskentelevät tiiviisti yhdessä on alettu
kutsua termillä [DevOps](https://en.wikipedia.org/wiki/DevOps). DevOps on termi, joka on nykyään monin paikoin esillä esim. työpaikkailmoituksissa voidaan arvostaa DevOps-taitoja tai jopa etsiä ihmistä DevOps-tiimiin.

On myös myynnissä mitä erilaisempia DevOps-työkaluja. On kuitenkin erittäin epäselvää mitä kukin tarkoittaa DevOps:illa

Suurin osa (järkevistä) määritelmistä tarkoittaa DevOpsilla nimenomaan kehittäjien ja järjestelmäylläpidon yhteistä työnteon tapaa jonka pyrkimyksenä on tehdä sovelluskehityksen aikaansannosten käyttöönotto mahdollisimman sujuvaksi. Tämän takia onkin hyvä puhua DevOps-kulttuurista.

On olemassa joukko käsitteellisiä ja teknisiäkin työkaluja, jotka usein liitetään DevOps-tyyliseen työskentelyyn, esim.

- automatisoitu testaus
- continuous deployment
- laitteistokapasiteetin virtualisointi ja kontainerisointi (docker)
- infrastructure as code
- pilvipalveluna toimivat palvelimet ja sovellusympäristöt (PaaS, IaaS, SaaS)

Monet edellisistä ovat kehittyneet vasta viimeisen 5-10 vuoden aikana ja täten mahdollistaneet DevOps:in helpomman soveltamisen.

Eräs tärkeimmistä DevOps:ia mahdollistavista asioista on ollut siirtyminen yhä enemmän käyttämään fyysisten palvelinten sijaan virtuaalisia ja pilvessä toimivia palvelimia, tällöin raudastakin on tullut "koodia", englanniksi tästä käytetään nimitystä [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).

Tämä on tehnyt palvelinten ohjelmoinnillisen hallinnoinnin mahdolliseksi. Palvelinten konfiguraatioita voidaan tallettaa versionhallintaan ja jopa testata. Sovelluskehitys ja ylläpito ovat alkaneet muistuttaa enemmän toisiaan kuin vanhoina (huonoina) aikoina.

Työkalujen käyttöönotto ei kuitenkaan riitä, DevOps:in "tekeminen" lähtee pohjimmiltaan kulttuurisista tekijöistä, tiimirakenteista, sekä asioiden sallimisesta..
 
Scrumin ja agilen eräs tärkeimmistä periaatteista on tehdä kehitystiimeistä itseorganisoituvia ja "cross functional", eli sellaisia että ne sisältävät kaiken tietotaidon uusien ominaisuuksien Definition of Donen tasolla valmiiksi saattamista varten. DevOps onkin eräs keino viedä ketteryyttä askeleen pitemmälle, mahdollistaa se, että ketterät tiimit ovat todella cross functional ja että ne pystyvät viemään vaivattomasti toteuttamansa uudet toiminnallisuudet tuotantoympäristöön asti ja jopa testaamaan ja operoimaan niitä tuotannossa.

Eräs parhaista DevOpsin määritelmistä [Daniel Storin](http://turnoff.us/geek/devops-explained/) käsialaa:

![]({{ "/images/3-19.png" | absolute_url }}){:height="750px" }
 
## Yhteenveto - ketterän testauksen nelikettä

Ketterän testauksen kenttää voidaan jäsentää alunperin Brian Maric käsialaa olevan [Agile Testing Quadrants](http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/) -kaavion avulla.

![]({{ "/images/3-20.png" | absolute_url }}){:height="350px" }

Ketterän testauksen menetelmät voidaan siis jakaa neljään luokkaan (Q1...Q4) seuraavien dimensioiden suhteen:
- business facing vs. technology facing, kohdistuuko testaus käyttäjän kokemaan toiminnallisuuteen vai enemmän ohjelmist sisäisen toiminnallisuuden yksityiskohtiin 
- supporting team vs. critique to the product, onko testien rooli toimia sovelluskehittäjien tukena vai varmistaa sovelluksen ulkoinen laatu

Testit ovat suurelta osin automatisoitavissa, mutta esim. tutkiva testaaminen (exploratory testing) ja käyttäjän hyväksymätestaus (user acceptance testing) ovat luonteeltaan manuaalista työtä edellyttäviä.

Kaikilla "neljänneksillä" on oma roolinsa ja paikkansa ketterässä ohjelmistokehityksessä, ja on pitkälti kontekstisidonnaista missä suhteessa testaukseen ja laadunhallintaan käytettävissä olevat resurssit kannattaa kuhunkin neljännekseen kohdentaa.

Kaavio on jo hieman vanha, alunperin vuodelta 2003 joten se ei tunne vielä käsitett tuotannossa testaaminen.

## Loppupäätelmiä testauksesta ja laadunhallinnasta

Seuraavassa esitettävät asiat ovat osin omia, kokemuksen ja kirjallisuuden perusteella syntyneitä testaukseen liittyviä mielipiteitä.

Ketterissä menetelmissä kantavana teemana on arvon tuottaminen asiakkaalle ja
tätä kannattaa käyttää ohjenuorana myös arvioitaessa mitä ja miten paljon projektissa tulisi testata. Testauksella ei ole itseisarvoista merkitystä, mutta testaamattomuus alkaa pian heikentää tuotteen laatua liikaa. Joka tapauksessa testausta ja laadunhallintaa on tehtävä paljon ja toistuvasti, tämän takia testauksen automatisointi on yleensä pidemmällä tähtäimellä kannattavaa.

Testauksen automatisointi ei ole halpaa eikä helppoa ja väärin, väärään aikaan tai väärälle "tasolle" tehdyt automatisoidut testit voivat tuottaa enemmän harmia ja kustannuksia kuin hyötyä, erityisen suuri riski on käyttöliittymän kautta tehtävillä testeillä.
 
Jos ohjelmistossa on komponentteja, jotka tullaan ehkä poistamaan tai korvaamaan pian, saattaa olla järkevää olla automatisoimatta niiden testejä. Esimerkiksi viikolla esitelty [MVP eli Minimal Viable Product](viikko2) on karsittu toteutus, jonka avulla halutaan nopeasti selvittää, onko jokin ominaisuus ylipäätään käyttäjien kannalta arvokas. Jos MVP:n toteuttama ominaisuus osoittautuu tarpeettomaksi, se poistetaan järjestelmästä. MVP-periaattella tehty ominaisuus on siis useimmiten viisasta tehdä ilman testien automatisointia.

Ongelmallista kuitenkin usein on, että kertakäyttöiseksi tarkoitettu komponentti voikin jäädä järjestelmään pitkäksikin aikaa, joskus jopa pysyvästi koska sitä "ei ole aikaa" koodata kunnolla.

Kokonaan uutta ohjelmistoa tai komponenttia tehtäessä voi olla järkevää antaa ohjelman rakenteen ensin stabiloitua ja tehdä kattavammat testit vasta myöhemmin.
Komponenttien testattavuus kannattaa kuitenkin pitää koko ajan mielessä vaikka niille ei heti testejä tehtäisikään.

Kattavien yksikkötestien tekeminen ei välttämättä ole mielekästä ohjelman kaikille luokille, parempi vaihtoehto voi olla tehdä integraatiotason testejä ohjelman isompien komponenttien rajapintoja vasten. Testit pysyvät todennäköisemmin valideina komponenttien sisäisen rakenteen muuttuessa. Yksikkötestaus lienee hyödyllisimmillään kompleksia logiikkaa sisältäviä luokkia testattaessa. 

Oppikirjamääritelmän mukaista TDD:tä sovelletaan melko harvoin. Välillä kuitenkin TDD on hyödyllinen väline, esim. kehitettäessä rajapintoja, joita käyttäviä komponentteja ei ole vielä olemassa. Testit tekee samalla vaivalla kuin koodia käyttävän "pääohjelman".
 
Testitapauksista kannattaa aina tehdä mahdollisimman paljon testattavan komponentin oikeita käyttöskenaarioita vastaavia. Pelkkiä testauskattavuutta kasvattavia testejä on turha tehdä.

Testitapauksissa kannattaa käyttää mahdollisimman oikeanlaista dataa, erityisesti järjestelmätason testeissä. Koodissa nimittäin lähes aina hajoaa jokin kun käytetään oikeaa dataa riippumatta siitä miten hyvin testaus on suoritettu.
Parasta onkin jos staging-ympäristössä on käytössä sama data kuin tuotantoympäristössä. 

Automaattisia testejä kannattaa kirjoittaa mahdollisimman paljon etenkin niiden järjestelmän komponenttien rajapintoihin, joita muokataan usein. Liian aikaisessa vaiheessa projektia tehtävät käyttöliittymän läpi suoritettavat testit saattavat aiheuttaa kohtuuttoman paljon ylläpitovaivaa, sillä testit hajoavat helposti pienistäkin käyttöliittymään tehtävistä muutoksista.

Vaikka käyttöliittymän läpi tehtävät järjestelmätason testit ovatkin riskialttiita käyttöliittymän mahdollisten muutosten takia, ovat ne usein hyödyllisin testien muoto, sillä toisin kuin esim. yksikkötestit, ne testaavat sovellusta kokonaisuudessaan (eli end to end).

Kaikkein tärkeimpänä asiana sovelluksen laadun kannalta pidän mahdollisimman tiheää tuotantoonvientiä, ja se taas edellyttää hyvin rakennettua deployment pipelineä, kohtuullista testauksen automatisointia ja helpottu oleellisesti jos feature branchien sijaan käytetään trunk based development -periaatetta. Suosittelen lämpimästi että tuotantoonvienti tapahtuu niin usein kuin mahdollista, jopa useita kertoja päivässä. Tämä takaa yleensä sen, että pahoja integrointiongelmia ei synny, ja sovellukseen syntyvät regressiot havaitaan ja pystytään korjaamaan mahdollisimman nopeasti.