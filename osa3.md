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

Tässä osassa tutustumme ohjelmistojen laadunhallintaan ja erityisesti ketterien menetelmien suosimiin testauksen ja laadunhallinnan menetelmiin.

## Typoja materiaalissa

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/osa3.md) tiedostoa GitHubissa.

## Laadunhallinnan peruskysymykset: verifiointi ja validointi

Ohjelmiston laadunhallintaan liittyy oleellisena asiana _verifiointi_ ja _validointi_.

_Verifioinnissa_ pyritään varmistamaan, että ohjelmisto toteuttaa vaatimusmäärittelyn aikana sille asetetut vaatimukset. Yleensä tämä tapahtuu testaamalla, että ohjelma toteuttaa vaatimusmäärittelyyn kirjatut toiminnalliset ja ei-toiminnalliset vaatimukset. Verifiointi siis pyrkii vastaamaan kysymykseen _are we building the product right_.

Validointi taas pyrkii varmistamaan, että ohjelmisto täyttää käyttäjän odotukset ja tarpeet. Vaatimusmäärittelyn aikana kirjatut ohjelmiston vaatimukset eivät ole aina se mitä käyttäjä todella tarvitsee. Validointiin liittyvä oleellinen kysymys onkin _are we building the right product_, eli ollaanko ylipäätään tekemässä oikeaa järjestelmää kulloiseenkin käyttötarkoitukseen.

Verifioinnin ja validoinnin tavoitteena on varmistaa, että ohjelma on "riittävän hyvä" siihen käyttötarkoitukseen, mihin ohjelma on tarkoitettu. Hyvyys on suhteellista ja riippuu ohjelman käyttötarkoituksesta. Ohjelman ei tarvitse yleensä olla täysin virheetön ollakseen kuitenkin riittävän hyvä käyttötarkoitukseensa.

Verifioinnin ja validoinnin suorittamista käytetään yleisesti nimitystä _laadunhallinta_ (engl. quality assurance, QA). Jos laadunhallinta on erillisen tiimin vastuulla, käytetään tästä usein nimitystä QA-tiimi.
 
## Laadunhallinnan tekniikat
 
Perinteisesti laadunhallinnassa on käytetty kahta eri henkistä tekniikkaa, katselmointeja/tarkastuksia sekä testausta.

_Katselmoinnissa_ (engl. review) käydään läpi ohjelmiston tuotantoprosessin aikana syntyneitä dokumentteja sekä ohjelmakoodia, ja etsitään näistä erilaisia ongelmia.

Tarkastukset taas (engl. inspection) ovat katselmoinnin muodollisempi versio. 
Tarkastus suoritetaan järjestämällä formaali kokous, jolla on tarkkaan määritelty agenda ja kokouksen osallistujilla ennalta määritellyt roolit. Tarkastukset kuuluvat vesiputousmallin maailmaan ja eivät ole nykyään suosiossa lukuunottamatta turvallisuuskriittisten järjestelmien kehitystä.

Katselmointi on _staattinen tekniikka_, suorituskelpoista ohjelmakoodia ei välttämättä tarvita, ja jos katselmoinnin kohteena on ohjelmakoodi, ei ohjelmaa katselmoitaessa yleensä suoriteta.

Testaus taas on _dynaaminen tekniikka_, joka edellyttää aina ohjelma koodin suorittamista. Testauksessa tarkkaillaan miten ohjelma reagoi annettuihin testisyötteisiin.

## Vaatimusten validointi

Validointi siis vastaa kysymykseen kysymykseen ollaanko tekemässä asiakkaan tarpeiden kannalta oikeanlaista järjestelmää.

Ohjelmistolle määritellyt vaatimukset onkin validoitava, eli on varmistettava, että määrittelydokumentti kuvaa sellaisen ohjelmiston, joka vastaa asiakkaan tarpeita.

Vesiputousmallissa määrittelydokumenttiin kirjattujen vaatimusten validointi suoritetaan nimenomaan katselmoimalla. Vaatimusmäärittely päättyy siihen, että asiakas katselmoi määrittelydokumentin ja varmistaa näin, että kirjatut vaatimukset vastaavat asiakkaan mielikuvaa tilattavasta järjestelmästä. Vesiputousmallia sovellettaessa määrittelydokumentti jäädytetään katselmoinnin jälkeen ja sen muuttaminen vaatii yleensä monimutkaista prosessia, ja saattaa edellyttää uutta sopimusta asiakkaan ja sovelluksen toimittajan kesken.

Ketterässä ohjelmistotuotannossa vaatimusten validointi tapahtuu iteraation päättävien demonstraatioiden (Scrumissa sprint reviewin) yhteydessä.

Asiakkaalle näytetään toimivaa versiota ohjelmistosta ja asiakas voi itse verrata vastaako lopputulos sitä mitä asiakas lopulta haluaa. Asiakkaan tarvitsema toiminnallisuushan voi poiketa ennen iteraatiota määritellystä toiminnallisuudesta ja/tai ohjelmistokehittäjät saattavat tulkita väärin user storyjen kuvaamia vaatimuksia.

Jos asiakas havaitsee, että sovellus ei ole etenemässä haluttuun suuntaan, eli kirjatut vaatimukset eivät vastannet todellista tarvetta, tarve on muuttunut tai vaatimuksia on tulkittu väärin, on seuraavassa iteraatiossa mahdollista ottaa korjausliike.

On ilmeistä, että ketterän mallin käyttämä vaatimusten validointitapa toimii paremmin tuotekehitystä muistuttavissa tilanteissa, joissa ollaan tekemässä tuotetta, joka on vaikea määritellä tarkkaan etukäteen.

## Koodin katselmointi

Koodin katselmointi eli koodin lukeminen jonkun muun, kuin ohjelmoijan toimesta on havaittu erittäin tehokkaaksi keinoksi koodin laadun parantamisessa. Katselmoinnin avulla voidaan havaita koodista ongelmia, joita on vaikea havaita testaamalla, esim. noudattaako koodi sovittua tyyliä ja onko koodi ylläpidettävää.

Koodin katselmoinnissa on perinteisesti käyty koodia läpi varmistaen, että koodista ei löydy erilaisissa "checklisteissä" lueteltuja riskialttiita piirteitä. Esimerkiksi eräs c-kielisten ohjelmien katselmoinnin checklist löytyy [täältä](http://www.oualline.com/talks/ins/inspection/c_check.html). Joissakin kielissä, esim. Javassa kääntäjän tekemät tarkastukset tekevät osan linkin takana olevan listan tarkistuksista turhaksi.

Nykyään on useita paljon katselmointia automatisoivia _staattista analyysiä_ tekeviä työkaluja esimerkiksi Javan [Checkstyle](http://checkstyle.sourceforge.net/), johon tutustuttiin jo viikon 2 laskareissa.

### Staattinen analyysi pilvessä

Pilvipalvelut ovat helpottaneet sovelluskehittäjien työtä monissa asioissa, esim. GitHubin ansiosta omaa versionhallintapalvelinta ei ole enää tarvinnut ylläpitää vuosiin.

Pilveen on viime aikoina ilmestynyt myös koodille staattista analyysiä tekeviä palveluita, esimerkiksi viime viikon laskareissa käytetty [Codeclimate](https://codeclimate.com/), joka analysoi koodista mm. seuraavia asioita:
- liian kompleksiset metodit ja luokat 
- copy paste -koodi
- testaamaton koodi

Codeclimate antaa parannusehdotuksia huomaamistaan epäkohdista ja antaa jopa aika-arvion sille kuinka kauan kunkin ongelmakohdan korjaamiseen menisi.

Codeclimate myös huomauttaa koodin laadun muutoksista, esim. jos koodin kompleksisuus kasvaa muutosten yhteydessä sekä. 

Minkä tahansa GitHubissa olevan projektin saa konfiguroitua Codeclimaten tarkastettavaksi nappia painamalla. Codeclimate suorittaa tarkastukset koodille aina kun uutta koodia pushataan GitHubiin. 

Laitoksen harjoitustyökursseilla käytettävän Labtoolin vanhan version [Codeclimate-raportti](https://codeclimate.com/github/mluukkai/labtool) kertoo, että koodista löytyy yhteensä 22 epäilyttävää kohtaa. Koodin laadun saama arvosana on _C_ ja arvio sen siistimiseen kuluvasta ajasta on viikko:

![]({{ "/images/3-21.png" | absolute_url }}){:height="350px" }

Codeclimate erittelee jokaisen ongelman, ja antaa aika-arvion sille kuinka kauan virheen korjaamiseen menisi aikaa: 

![]({{ "/images/3-22.png" | absolute_url }}){:height="350px" }

Vastaavia palveluita on nykyään useita, mm. [Codebeat](https://codebeat.co/) ja [Codacy](https://www.codacy.com/).

### Koodin katselmointi: GitHub ja pull requestit

Yhä enenevä määrä ohjelmistokehitysprojekteista tallettaa sovelluksen lähdekoodin GitHubiin. GitHubin _pull requestit_ tarjoavatkin hyvän ja paljon käytetyn työkalun koodikatselmointien tekoon.

Pull requesteja käytettäessä työn kulku on seuraava:
- Sovelluskehittäjä forkkaa repositorion itselleen, tekee muutokset omaan repositorioon ja tekee pull requestin projektia hallinnoivalle taholle.
- Hallinnoija, esimerkiksi tiimin "senior developer" tai open source -projektin vastaava tekee katselmoinnin pull requestille.
- Jos koodi ei ole vielä siinä kunnossa, että tehdyt muutokset voidaan liittää repositorioon, kirjoittaa hallinnoija pull requestin tekijälle joukon parannusehdotuksia.
- Muutosten ollessa hyväksyttävästi tehtyjä, pull request mergetään eli yhdistetään päärepositorioon.

Seuraavassa esimerkki [TMC-projektiin](https://tmc.mooc.fi/) tehdystä pull requestista ja siihen liittyvistä kommenteista:

![]({{ "/images/3-1.png" | absolute_url }}){:height="350px" }

Pull requestin kommentissa [sovelluskehittäjä](https://github.com/kennyhei/) toteaa, että pull requestin sisältämät commitit toteuttavat [tämän](https://github.com/testmycode/tmc-server/issues/185) GitHub-issuen kuvaaman toiminnallisuuden.

![]({{ "/images/3-2.png" | absolute_url }}){:height="500px" }

TMC:n silloinen [pääkehittäjä](https://github.com/mpartel/) ei kuitenkaan hyväksy muutoksia vielä mergettäväksi, vaan antaa muutaman parannusehdotuksen sovelluskehittäjälle.
 
Nykyään moni ohjelmistokehitystiimi käyttää säännöllisesti pull requesteja ja on jopa kirjannut definition of doneen, että eräs valmiin kriteeri koodille on se, että joku muu kuin ohjelmoija on katselmoinut sen. Katselmoija voi olla joko toinen sovelluskehittäjä, tai aloittelevien koodareiden tapauksessa joku hieman seniorimpi tiimin jäsen. 

## Koodin katselmointi ketterissä menetelmissä

Toisin kuin Scrum, erityisesti 2000-luvun alkuvuosina erittäin suosittu ketterä menetelmä [eXtreme Programming ](http://www.extremeprogramming.org/) eli XP määrittelee useita ohjelmiston kehittäjän työskentelyyn kantaa ottavia käytänteitä.

Suurin osa XP:n käytänteistä on jo vuosikymmeniä hyvin tunnettuja _parhaita käytänteitä_ (engl. best practices), mutta kuitenkin usein vietynä äärimmäiseen (extreme) muotoon. Osa XP:n käytänteistä tähtää ohjelmiston laadun maksimoimiseen, ja muutama palvelee samaa funktiota kuin koodin katselmointi.

_Pariohjelmoinnissa_ (engl. pair programming) kaksi ohjelmoijaa työskentelee yhdessä käyttäen ainoastaan yhtä konetta. Koodia kirjoittava osapuoli toimii _ohjaajana_ (engl. driver) ja toinen _navigoijana_ (engl. navigator), roolia vaihdetaan sopivin väliajoin. Navigoija tekee koodiin _jatkuvaa katselmointia_.

Pariohjelmointi parantaa ohjelmoijien kuria ja työhön keskittymistä sekä on erinomainen oppimisen väline: parit oppivat toisiltaan, erityisesti noviisit kokeneemmilta. Jos pariohjelmointia sovelletaan systemaattisesti, ei koodiin jää osa-alueita, jotka ainoastaan yksi ohjelmoija tuntee.

Tutkimuksissa pariohjelmoinnin on todettu vähentävän bugien määrää 15-50%, kokonaisuudessa resurssien kulutus kuitenkin nousee hieman. 

Vaikka pariohjelmointi tai jopa useamman ihmisen versio siitä, [mob-programming](https://en.wikipedia.org/wiki/Mob_programming) on melko suosittua, ei kovin monissa paikoissa kuitenkaan harrasteta systemaattisesti määritelmän mukaista pariohjelmointia ainakaan joka päivä. Hyvin yleistä on, että kehittäjät työskentelevät suurimman osan aikaa yksin, mutta tekevät sopivin paikoin spontaaneja pari- tai mob-ohjelmointisessioita, erityisesti kohdatessaan teknisiä haasteita. 

Pariohjelmoinnin ohella katselmoinnin kaltaisia tavoitteita koodin laadun nostajana voidaan ajatella olevan XP:n yhteisomistajuuden ja ohjelmointistandardien periaatteilla.

Koodin _yhteisomistajuus_ (engl. collective code ownership) tarkoittaa periaatetta, jossa kukaan yksittäinen ohjelmoija ei hallitse yksin mitään kohtaa koodista, eli kaikilla on lupa tehdä muutoksia ja laajennuksia mihin tahansa kohtaan koodia. Pariohjelmointi tukee yhteisomistajuutta. 

Yhteisomistajuudessa on omat riskinsä: joku koodia kunnolla tuntematon voi saada huolimattomilla muutoksilla pahaa jälkeä aikaan. XP pyrkii eliminoimaan tästä aiheutuvia riskejä testaukseen liittyvillä käytänteillä, eli käytännössä automatisoiduilla regressiotesteillä.

_Ohjelmointistandardi_ (engl. coding standards) tarkoittaa, että tiimi määrittelee koodityylin, johon kaikki ohjelmoijat sitoutuvat. Tyylillä tarkoitetaan nimeämiskäytäntöä, koodin muotoilua ja myös tiettyjä ohjelman rakenteeseen liittyviä seikkoja. Ohjelmointistandardin noudattamista voidaan kontrolloida osittain automaattisesti staattisen analyysin työkaluilla, esimerkiksi Javan Checkstyle sekä Javascript-maailman [eslint](https://eslint.org/) ja [prettier](https://prettier.io/) ovat työkaluja, joiden avulla voidaan seurata, että koodi seuraa määriteltyä ohjelmointistandardia. Eräs esimerkki suosituksi nousseesta ohjelmointistandardista on [AirBnB](https://eslint.org/):n tyyliopas.  

## Testaus

Ohjelmistojen osoittaminen virheettömäksi on käytännössä mahdotonta, sillä ohjelmiston mahdollisten käyttöskenaarioiden ja syötteiden kombinaatio on yksinkertaisesti liian suuri. Testauksen tarkoituksena onkin vakuuttaa asiakas ja järjestelmän kehitystiimi siitä, että ohjelmisto on riittävän hyvä käytettäväksi.

Testauksella on kaksi hieman eriävää tavoitetta. Ensinnäkin tulee _osoittaa, että ohjelmisto täyttää sille asetetut vaatimukset_. Käytännössä tämä tarkoittaa vaatimusmäärittelyssä kirjattujen asioiden toteutumisen demonstroimista toteutusta ohjelmista. Toinen tavoite on _löytää ohjelmistosta virheitä_ eli testatessa yritetään ohjelma rikkoa tai saattaa se, jollain tavalla epäkonsistenttiin tilaan. Näin havaitut viat pyritään korjaamaan ennen kuin todelliset käyttäjät törmäävät samoihin ongelmiin.

Molemmat näistä tavoitteista tähtäävät ensisijaisesti ohjelman _ulkoisen laadun_ (engl. external quality) eli käyttäjän kokeman laadun varmistamiseen. [Ulkoisella laadulla](http://c2.com/cgi/wiki?InternalAndExternalQuality) tarkoitetaan sitä, onko ohjelmisto sopiva käyttötarkoitukseensa, eli pystyykö käyttäjä tekemään ohjelmistolla haluamansa asiat.

## Testauksen tasot

Testausta jakaantuu eri _tasoihin_ sen mukaan mukaan, mikä testauksen ensisijaisena kohteena on. Ohjelmiston elinkaarta vesiputousmaisesti kuvaava _testauksen V-malli_ havainnollistaa testauksen eri tasoja.

![]({{ "/images/3-3.png" | absolute_url }}){:height="300px" }

Alimmalla tasolla on _yksikkötestaus_ (engl. unit testing), jossa tarkastellaan yksittäisten luokkien, metodien ja moduulien toimintaa, yleensä erillään muusta kokonaisuudesta. Yksikkötestauksen hoitavat sovelluskehittäjät.

_Integraatiotestaus_ (engl. integration testing) taas sisältää yksittäisistä komponenteista koostettujen kokonaisuuksien toiminnallisuuden testaamisen. Myös integraatiotestauksesta huolehtivat sovelluskehittäjät. 

_Järjestelmätestauksessa_ (engl. system testing) varmistetaan, että ohjelmisto kokonaisuudessaan toimii vaatimuksiin kirjatulla tavalla. Ohjelmistoa testataan saman rajapinnan kautta, jonka kautta käyttäjät sitä käyttävät. Järjestelmätestauksesta on useimmiten vastuussa ohjelmiston kehittäjäorganisaation laadunhallinnasta vastaavat ihmiset. 

Ohjelmiston tilaaja- tai käyttäjäorganisaation tekemää testausta kutsutaan _käyttäjän hyväksymistestaukseksi_ (engl. user acceptance testing), ja sen on tarkoitus varmistaa, että kehitetty ohjelmisto on varmasti odotuksien mukainen ja toimii oikeassa käytössä. Hyväksymistestaus tapahtuu monesti normaalissa tuotantokäytössä ohjelmiston tilanneen organisaation tai loppukäyttäjien toimesta, esim. betatestaamalla sovellusta pienen käyttäjäjoukon avulla. 

## Järjestelmätestaus

Järjestelmätestauksen tarkoitus on siis varmistaa, että ohjelmisto toimii vaatimusmäärittelyssä kirjatulla tavalla. Sovellusta testataan useimmiten saman rajapinnan kautta, jonka kautta sitä käytetään, eli testaus voi tapahtua esimerkiksi graafisen käyttöliittymän kautta.

Järjestelmätestaus tapahtuu ilman tietoa järjestelmän sisäisestä rakenteesta, tälläistä testauksen tapaa nimitetään _black box_ -testaukseksi.

Yleensä järjestelmätestaus perustuu sovelluksen potentiaalisiin käyttöskenaarioihin. Jos vaatimukset on ilmaistu user storyina, on storyjen hyväksymiskriteereistä melko helppo muotoilla testejä, joiden avulla voidaan varmistaa, että ohjelmistolla on storyjen kuvaamat vaatimukset sekä tyypilliset virheskenaariot.

Sovelluksen toiminnallisuutta kartoittavan järjestelmätestauksen (jota joskus kutsutaan [funktionaaliseksi testaamiseksi](https://en.wikipedia.org/wiki/Functional_testing)) lisäksi on olemassa paljon [muitakin](https://en.wikipedia.org/wiki/System_testing) järjestelmätestauksen muotoja, mm.

- käytettävyystestaus
- suorituskykytestaus
- tietoturvan testaus

Järjestelmätestaus tapahtuu pääosin kehittäjäorganisaation toimesta. Joissain tapauksissa esim.  tietoturvan tai suorituskyvyn testaaminen saatetaan antaa niihin erikoistuneiden tahojen vastuulle. 

## Testitapausten valinta

Täysin kattava testaaminen on mahdotonta ja testaus on joka tapauksessa työlästä, eli onkin tärkeää löytää kohtuullisen kokoinen testitapausten joukko, jonka avulla on kuitenkin mahdollista löytää mahdollisimman suuri määrä virheitä.

Yksittäinen _testitapaus_ (engl. test case) testaa järjestelmän toiminnallisuutta jollain syötearvolla, tai arvojen kombinaatiolla jos toiminnallisuus edellyttää usean syötteen antamista. Monet syötteistä ovat järjestelmän toiminnan kannalta samanlaisia. Esimerkiksi, jos henkilötietoja käsittelevä järjestelmä tallettaa henkilön iän on todennäköistä, että järjestelmän toiminta ei poikkea ollenkaan sen suhteen, onko ikä 20 tai 30, mutta jos ikä taas on 17, saattaa järjestelmän toiminnallisuus olla erilainen kuin iän ollessa vähintään 18. 

Testeissä kannattaakin pyrkiä jakamaan syötteet _ekvivalenssiluokkiin_, eli ryhmiin joihin kuuluvien syötteiden suhteen ohjelma toimii oleellisesti samalla tavalla. Testitapauksia kannattaa tehdä useimmiten ainoastaan yksi tai kaksi kutakin ekvivalenssiluokkaa tai syötteiden ekvivalenssiluokkien kombinaatiota kohti. Ekvivalenssiluokkien edustajiksi kannattaa erityisesti valita ekvivalenssiluokkien _raja-arvoja_, koodissa olevat bugit nimittäin liittyvät erittäin usein toisto- ja ehtolauseiden ehtojen äärimmäisiin arvoihin.

Esimerkiksi henkilötietoja käsittelevässä järjestelmässä iän suhteen ekvivalenssiluokkia olisivat ehkä _alaikäinen_ 0-17 vuotta, _työikäinen_ 18-65 vuotta ja _eläkeläinen_ 66- vuotta. Ekvivalenssiluokkien raja-arvojen järkevä määrittely tosin edellyttää tietoa järjestelmän toiminnallisuudesta. Todennäköisesti työikäisten ja eläkeläisien suhteen ei olisi mahdollista tehdä selkeää jakoa iän perusteella. Jos oletetaan, että edelliset ekvivalenssiluokat olisivat järkeviä, sopivat iän _raja-arvot_ testitapauksia varten olisivat 17, 18, 65 ja 66 vuotta, eli näitä kaikkia kohti voitaisiin tehdä oma testitapauksensa.

Tarkastellaan toisena esimerkkinä tekstitv:n selainversiota.

![]({{ "/images/3-4.png" | absolute_url }}){:height="450px" }

Mitä testitapauksia kannattaisi valita tekstitv:n sivun valintaikkunan toimivuuden testaamisessa?

Tekstitv:n sivu vastaa lukua väliltä 100-899. Osaa välin luvuista vastaavaa sivua ei kuitenkaan ole olemassa. 

Syötteen ekvivalenssiluokkia olisivat ainakin seuraavat
- olemassa olevaa sivua vastaavat luvut 
- validit luvut, jotka eivät vastaa mitään sivua 
- liian pienet ja liian suuret luvut
- syötteet jotka sisältävät kiellettyjä merkkejä esimerkiksi aakkosia
- tyhjä syöte

Jos testeistä halutaan kattavat, olisi jokaisesta ekvivalenssiluokasta hyvä valita ainakin yksi testattava syötearvo.

Olemassa olevaa sivua vastaavan ekvivalenssin rajatapaukset, eli luvut 100 ja 899 kannattaisi ehkä valita testisyötteiksi, samoin luvut 99 ja 900, jotka ovat oman ekvivalenssiluokkansa rajatapauksia.

## Yksikkötestaus 

Yksikkötestauksen kohteena siis ovat yksittäiset metodit ja luokat. Yksikkötestauksen hoitavat ohjelmoijat, usein oletetaan että uuteen koodiin tehdään yksikkötestit jo samalla kuin koodi kirjoitetaan. Ohjelmoijien vastuulla olevasta testauksesta, eli yksikkö- ja integraatiotestauksesta käytetään usein nimitystä [developer testing](https://developertesting.rocks/). 

Yksikkötestejä laadittaessa otetaan huomioon testattavan koodin rakenne, esimerkiksi minkälaisia ehtolauseita koodissa on käytetty. Tälläisistä testeistä käytetään usein nimitystä _lasilaatikkotestaus_ (engl. white box testing).

Yksikkötestauksella ei testata suoranaisesti sitä, täyttääkö ohjelmisto käyttäjän sille asettamat vaatimukset, pikemminkin tavoitteena on ohjelman _sisäisen laadun_ (engl. internal quality) kontrollointi. [Sisäinen laatu](http://c2.com/cgi/wiki?InternalAndExternalQuality) viittaa koodin sisäisen rakenteen hyvyyteen: onko koodia helppo jatkokehittää, onko virheiden jäljitys ja korjaaminen helppoa ja pystytäänkö koodin toiminnallisuuden oikeellisuus varmistamaan muutoksia tehtäessä.

Sisäinen laatu kiinnostaa ensisijaisesti ohjelmistokehittäjiä, jos koodi on sisäiseltä laadultaan heikkoa, on sen parissa työskenteleminen ikävää ja hidasta. Jos koodin sisäinen laatu alkaa rapistua, sovelluksen kehitystahti hidastuu, ja ohjelmistoon alkaa todennäköisesti kertymään enenevissä määrin bugeja jotka näkyvät myös loppukäyttäjälle asti. 

Pelkkä sisäisen laadun kontrollimekanismi yksikkötestaus ei siis ole. Kattavilla yksikkötesteillä saadaan parannettua myös ohjelman ulkoista, eli asiakkaan kokemaa laatua. Yksikkötestit voivat eliminoida joitain asiakkaalle näkyviä virheitä, joita järjestelmätestauksen testitapaukset eivät löydä.

Tiedetään että bugit on taloudellisesti edullista paikallistaa mahdollisimman aikaisessa vaiheessa, eli yksikkötestauksessa löydetty virhe on halvempi ja nopeampi korjata kuin integraatio- tai järjestelmätestauksessa löytyvä, tai vasta todellisessa käytössä ilmennyt virhe.

Koska yksikkötestejä joudutaan suorittamaan moneen kertaan, tulee niiden suorittaminen ja testien tulosten raportointi automatisoida, ja nykyinen hyvä työkalutuki tekeekin automatisoinnin helpoksi. Java-maailmasta tuttu jUnit on edelleen yksi suosituimpia testikirjastoja, uudempia tulokkaita ovat mm. rspec, jest, jasmine. 

Kurssilla [Ohjelmistotekiikka](https://courses.helsinki.fi/fi/tkt20002) tehdyt testit ovat useimmiten juurikin yksikkötestejä.
 
### Mitä ja miten paljon tulee testata?

Mitä kaikkea ohjelmistosta tulisi testata yksikkötesteillä? Vastaus ei ole helppo. JUnitin alkuperäinen kehittäjä [Kent Beck](https://junit.org/junit4/faq.html#best_2) vastaa kysymykseen seuraavasti:

> "Do I have to write a test for everything?"
> "No, just test everything that could reasonably break" 

Jos pyritään kattavaan yksikkötestaukseen, tulisi ainakin olla testata kaikkien metodien (ja loogisten metodikombinaatioden) toiminta parametrien hyväksyttävillä arvoilla ja virheellisillä parametrien arvoilla.

Parametrien mahdolliset arvot kannattaa jakaa ekvivalenssiluokkiin ja jokaisesta luokasta kannattaa  valita ainakin yksi arvo testisyötteeksi, erityisesti ekvivalenssiluokkien raja-arvot kannattaa kannattaa valita mukaan testattaviin arvoihin.

Koska yksikkötestejä tehtäessä ohjelmakoodi on nähtävillä, on testattavien arvojen parametrien ekvivalenssiluokat ja raja-arvot ovat useimmiten pääteltävissä koodista.

Tarkastellaan esimerkkinä ensimmäisen viikon laskareista tutun _Ohtuvaraston_ metodia _otaVarastosta_, mitä testitapauksia tulisi generoida testit olisivat kattavat?

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

Metodia _otaVarastosta_ testatessa testitapauksessa on huomioitava parametrin _maara_ lisäksi varaston tilanne. Varaston tilanteella on kolme "ekvivalenssiluokkaa":
- _tyhjä_ (esim. saldo 0, tilavuus 10) 
- _ei tyhjä eikä täysi_ (esim. saldo 5, tilavuus 10)
- _täysi_ (saldo 10, tilavuus 10).

Näitä kutakin kohti on metodin parametrilla _maara_ omat ekvivalenssiluokkansa. Jos varasto on "puolitäysi", eli saldo on 5, muuttujan _maara_ arvoiksi voitaisiin valita _-1, 0, 5, 6_. Jos varasto on täysi, muuttujan _maara_ arvoiksi sopisivat _-1, 0, 10, 11_. Jos varasto on tyhjä, muuttujan _maara_ arvoiksi voidaan valita _-1, 0, 1_.

Nollan ja negatiivisen määrän ottamista tuskin kannattaa erikseen testata kaikkien varastotilanteiden suhteen, tosin tämäkin voisi olla riski, jos varaston sisäinen toteutus muutettaisiin täysin.

Huomaamme siis, että jo naurettavan pienen luokan yhden metodin kattava testaaminen vaatii suuren määrän testitapauksia. Useimmissa tapauksissa ei ole kuitenkaan ole realisitista olettaa, että testejä tehdään vastaavalla kattavuudella, aika/hyötysuhde on yksinkertaisesti liian huono. Useimmat softassa olevat ikävät bugit jäävät joka tapauksessa yksikkötestauksen ulottumattomiin.

### Testauskattavuus

Yksikkötestien (ja toki myös muunlaisten testien) hyvyyttä voidaan mitata _testauskattavuuden_ (engl. test coverage) käsitteellä. Testauskattavuutta on muutamaa eri tyyppiä.

_Rivikattavuudella_ (engl. line coverage) tarkoitetaan kuinka montaa prosenttia ohjelman koodiriveistä testitapausten suorittaminen käy läpi. Vaikka rivikattavuus olisi 100% ei tämä tietenkään tarkoita, että kaikki oleellinen toiminnallisuus olisi tutkittu.

_Haarautumakattavuudella_ (engl. branch coverage) tarkoitetaan kuinka montaa prosenttia testattavan metodin/luokan sisältävistä ehtolauseiden haaroista testit ovat käyneet läpi.

Monet työkalut, esim. laskareissa käyttämämme JaCoCo mittaavat testien suorituksen yhteydessä testauskattavuuden. Muitakin kattavuuden tyyppejä on olemassa, mm. ehtokattavuus ja polkukattavuus, useat työkalut eivät niitä kuitenkaan tue.

![]({{ "/images/3-5.png" | absolute_url }}){:height="350px" }

JaCoCo ilmoittaa sekä rivi- (instruction) että haarautumakattavuuden (branches)
Testauskattavuus JaCoCossa. Puutteellisesti testattu haarautumiskohta esim. if ilmaistaan keltaisella.

Testauskattavuus toimii siis hyvänä apuvälineenä sen arvioimisessa testataanko sovellusta riittävästi.

### Mutaatiotestaus

Pelkkä testikattavuus ei kuitenkaan vielä kerro oikeastaan mitään testien hyvyydestä. Hyvät testit ovat  ellaisia, että jos ohjelmaan tulee bugi, huomaavat testit virheen. Testien hyvyys taas riippuu oleellisesti testien syötteiden lisäksi siitä, minkälaisia assert-lauseilla suoritettavia tarkistuksia testeissä on. 

_Mutaatiotestauksen_ (engl. mutation testing) idea on nimenomaan testata testitapausten hyvyyttä generoimalla koodiin systemaattisesti mutantteja eli pieniä "bugeja", ja katsoa havaitsevatko testit koodiin tulleet bugit.

Erilaisia mutanttityyppejä, joita mutaatiotestauksessa generoidaan koodiin on paljon mm.

- manipuloidaan ehtolausetta: <tt>if ( x<0 )</tt> muutetaan muotoon <tt>if (x <= 0)</tt> tai <tt>if ( true ) </tt>
- vaihdetaan operaattoria: <tt>x += 1</tt> muutetaan muotoon <tt>x -= 1</tt>
- kovakoodataan paluuarvo: <tt>return x;</tt>  muutetaan muotoon <tt>return true;</tt>
- korvataan konstruktorikutsu: <tt>olio = new Olio()</tt>  muutetaan muotoon <tt>olio = null;</tt>

Mutaatiotestauksen ongelmana on mutaatioiden suuri määrä ja ns. _ekvivalentit mutantit_, joiden takia mutaatiotestauksen tulos vaatii aina ihmisen tulkintaa.

Ekvivalentti mutantti tarkoittaa sellaista koodiin tehtyä muutosta, joka ei kuitenkaan muuta ohjelman toiminnallisuutta. Eli tälläisen mutantin lisäämistä koodiin ei voi mikään testi havaita. Mutantin toteaminen ekvivalentiksi algoritmisesti on mahdotonta.

Lisätietoa mutaatiotestauksesta esim. [wikipediassa](http://en.wikipedia.org/wiki/) ja [pit](http://pitest.org/)-työkalun sivulla.
 
## Integraatiotestaus

Järjestelmän yksittäiset, erillään yksikkötestatut luokat tulee integroida toimivaksi kokonaisuudeksi. Integroinnin yhteydessä tai sen jälkeen suoritetaan integraatiotestaus, missä painopisteenä on ohjelman komponenttien välisten rajapintojen toimivuuden tutkimisessa sekä komponenttien yhdessä tuottaman toiminnallisuuden oikeellisuuden varmistamisessa.

Järjestelmän integrointi voi edetä joko järjestelmän rakenteeseen perustuen tai järjestelmän toteuttamien ominaisuuksien mukaan.

_Rakenteeseen perustuvassa integraatiossa_ keskitytään kerrallaan sovelluksen yksittäisten rakenteellisten komponenttien integrointiin, esimerkiksi verkkokaupan toteutuksessa integroitaisiin ensin arkkitehtuurilliset komponentit tai kerrokset, eli sovelluslogiikan luokat, käyttöliittymän toteutus ja tietokantarajapinta omina kokonaisuuksinaan. Tämän jälkeen kerrokset integroitaisiin kokonaiseksi sovellukseksi.

_Ominaisuuksiin perustuvassa integroinnissa_, taas liitetään yhteen alikomponentit, jotka toteuttavat järjestelmän loogisen toiminnallisuuden. Verkkokaupassa voitaisiin esimerkiksi integroida kerrallaan kaikki toiminnallisuuteen _lisää tuote ostoskoriin_ liittyvä koodi ja edetä toiminnallisuus kerralla kunnes koko sovellus on valmis.
 
Vanhan liiton ohjelmistotuotannossa toimintatapa oli se, että kaikki ohjelman yksittäiset komponentit ohjelmoitiin ja yksikkötestattiin erikseen ja tämän jälkeen ne integroitiin (yleensä rakenteeseen perustuen) kerralla yhteen.

Tällainen vesiputousmallin maailmassa yleinen, nimikkeellä _big bang_ -integraatio kulkeva tekniikka on osoittautunut todella riskialttiiksi (siitä on seurauksena usein ns. integraatiohelvetti) ja sitä ei enää kukaan täysijärkinen suosittele käytettäväksi.

Moderni ohjelmistotuotanto suosii ns. _jatkuvaa integraatiota_ (engl. continuous integration), joka on hyvin tiheässä tahdissa tapahtuvaa ominaisuuksiin perustuvaa integrointia. Palaamme aiheeseen tarkemmin pian.

Itseasiassa koko termi _integraatiotestaus_ on käsitteenä melko häilyvä, ja joskus on vaikea tehdä selkeää rajanvetoa yksikkö- ja integraatiotestauksen välillä. Useimmiten ajatellaan että yksikkötestien kohteena on yksittäinen metodi, luokka tai ohjelmamoduuli. Entä jos testauksen alla oleva luokka/moduuli pitää sisällään rajapinnan takana useita muitakin luokkia, onko kyseessä enää yksikkötesti vai onko kyseessä jo suurempaa kokonaisuutta kartoittava integraatiotesti? 

Integraatiotestaukseksi luokiteltavia testejä ovat ainakin seuraavanlaiset, selkeästi isompia osakokonaisuuksia testaavat testit
- sovelluslogiikan ja tietokannan yhteistoiminnallisuuden varmistaminen 
- sovelluksen palvelimen eli backendin tarjoaman HTTP-rajapinnan oikean toiminnallisuuden varmistaminen

Yksikkötestauksen tapaan, koodin integroinnin ja usein myös integraatiotestauksen katsotaan nykyään olevan sovelluskehittäjien vastuulla, eli integraatiotestaus kuuluu käsitteen [developer testing](https://developertesting.rocks/) alle.

## Regressiotestaus

Iteratiivisessa ja ketterässä ohjelmistotuotannossa, jossa jokainen iteraatio tuottaa ohjelmistoon uusia ominaisuuksia, on oltava koko ajan valppaana sen suhteen , että lisäykset eivät hajota ohjelman jo toimivia osia.

Testit on siis suoritettava uudelleen aina kun ohjelmistoon tehdään muutoksia.
Tätä käytäntöä sanotaan _regressiotestaukseksi_. Jotta varmuus ohjelmiston hajoamattomuudesta olisi mahdollisimman suuri, tulee regressiotestijoukkon koostua sekä yksikkö-, integraatio- että järjestelmätesteistä.

Usein regressiotesteinä käytetään kaikkia sovelluskehityksen aikana tehtyjä testejä. On myös tilanteita, joissa tämä ei ole mielekästä ja sopiva osajoukko kaikista testeistä voi taata riittävän luottamuksen.

Testaaminen on erittäin työlästä ja regressiotestauksen tarve tekee siitä entistä työläämpää. Tämän takia on erittäin tärkeää pyrkiä automatisoimaan testit mahdollisimman suurissa määrin. 

Automatisoitu yksikkötestaus on jo aiemmilta kursseilta tuttu aihe. Käsittelemme muutamia järjestelmätason testauksen automatisoinnin menetelmiä seuraavissa luvuissa.

