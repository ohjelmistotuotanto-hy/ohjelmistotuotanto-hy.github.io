---
layout: page
title: Osa 5
title_long: 'Lean, ketterän ohjelmistokehityksen skaalaaminen ja ketterä ohjelmistokehitys tutkimuksen valossa'
inheader: yes
permalink: /osa5/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

<div class="important">
DRAFT: Lukeminen omalla vastuulla!
</div>

Kurssin viimeisellä viikolla käsitellään kolmea aihetta viime vuosina ketterään ohjelmistokehitykseen paljon vaikutteita antanutta Lean-filosofiaa, ketterien menetelmien skaalaamista suurempiin projekteihin sekä erilaisia tilasto- ja tutkimustietoja ketterien menetelmien käytöstä ja hyödyistä.

## Typoja materiaalissa

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/osa5.md) tiedostoa GitHubissa.


## Lean

Kurssin aikana on jo muutamaan kertaan sivuttu käsitettä _Lean_, katsotaan nyt hieman tarkemmin mistä on kysymys

#### Taustaa

Lean on kotoisin Toyotan tuotannon ja tuotekehityksen menetelmistä, ja sen synty on jäljitettävissä 1900-luvun alkupuoliskolle. 

Toisen maailmansodan jälkeen Japanissa oli suuri jälleenrakennuksen buumi, mutta pääomaa ja raaka-aineita oli saatavissa niukalti. Havaittiin, että laadun parantaminen nostaa tuottavuutta: mitä vähemmän tuotteissa ja tuotantoprosesseissa on virheitä ja ongelmia, sitä enemmän tuottavuus kasvaa, ja se taas johtaa markkinaosuuden kasvuun ja sitä kautta uusiin työmahdollisuuksiin. Japanilaisiin yrityksiin muodostui vahva laatua korostava kulttuuri. 

Resurssien niukkuus johti siihen, että Toyota kehitti ns. _Just In Time (JIT)_ -tuotantomallin, missä ideaalina oli aloittaa tuotteen valmistus vasta kun ostaja oli jo tilannut tuotteen. Vastakohtana tälle on perinteinen massatuotanto, missä tuotteita valmistetaan etukäteen suuret määrät varastoon. Pyrkimys oli saada tuote tilauksen jälkeen mahdollisimman nopeasti kuluttajalle, eli haluttiin mahdollisimman lyhyt _sykliaika_ (engl. cycle time) tilauksesta toimitukseen.
 
JIT-tuotantomallista oli monia hyötyjä. Asiakkaiden muuttuviin tarpeisiin oli helppo valmistautua toisin kuin massatuotannossa, missä varastoon tehdyt tuotteet oli saatava myydyksi vaikka ne eivät olisi enää asiakkaan mieleen. Koska tuotteen sykliaika (tilauksesta asiakkaalle) oli lyhyt, laatuongelmat paljastuivat nopeasti,
toisin kuin mahdollisesti kuukausia varastossa olevilla tuotteilla.

Massatuotanto pyrki optimoimaan yksittäisten työntekijöiden ja koneiden työpanosta (ideaalina että koneiden käyttöaste on koko ajan 100%). Toyotan JIT-tuotantomallissa optimoinnin kohteeksi taas tuli tuotteen sykliaika. Pyrkimyksenä oli eliminoida kaikki mahdollinen _jäte_ tai _hukka_ (engl. waste), joka ei edesauttanut työn, eli tuotannon alla olevan tuotteen, nopeaa virtausta (engl. flow) tilauksesta asiakkaalle. Virtausta haittaaviin tekijöihin, esim. laatuongelmiin tai epäoptimaaleihin työtapoihin puututtiin heti. 

Perinteisestä massatuotannosta poiketen Toyota myös omaksui työntekijöitä kunnioittavan, kuuntelevan ja _vastuuttavan_ (engl. empowering) tuotannon optimoimisen kulttuurin. Tärkeäksi periaatteeksi tulikin koko henkilöstön tasolla tapahtuva toiminta- ja työskentelytapojen jatkuva parantaminen. Käytännössä jokainen työntekijä oli oikeutettu ja jopa velvollinen vaikka pysäyttämään koko tuotantolinja heti havaitessaan ongelmia. 

#### Toyota production system, TPS

Vuodesta 1965 alkaen Toyota alkoi kutsua toimintatapaansa _Toyota Production Systemiksi_ (TPS). Ensimmäiset englanninkieliset julkaisut aiheesta ovat vuodelta 1977. Toyotan menestys herätti kiinnostusta länsimaissa ja MIT:in tutkijat alkoivat 1980-luvun lopussa kartoittamaan ja dokumentoimaan tarkemmin Toyotan tuotantojärjestelmää.
Tutkijat lanseeraavat nimikkeen _lean_- (eli virtaviivainen) tuotanto.

Vuonna 1990 ilmestyi kirja [The Machine That Changed the World](https://en.wikipedia.org/wiki/The_Machine_That_Changed_the_World_(book)), joka toi leanin laajempaan länsimaalaiseen tietoisuuteen. Toyota alkoi 2000-luvulla käyttämään tuotantojärjestelmästään myös sisäisesti nimitystä lean.

Viimeisen 25 vuoden aikana on ilmestynyt suuri määrä kirjoja, jotka kuvaavat Toyotan tuotantojärjestelmää, eräs kuuluisimmista ja vaikutusvaltaisimmista näistä on [Jeffrey Likerin The Toyota Way](https://www.amazon.com/Toyota-Way-Management-Principles-Manufacturer/dp/0071392319) (2001)

Alun perin lean oli Toyotalla autojen _tuotantoa_ (engl. production) optimoiva toimintatapa, sittemmin leania on ruvettu hyödyntämään myös _tuotekehityksessä_ (engl. development). Tuotanto ja tuotekehitys ovat luonteeltaan hyvin erilaisia ja niihin sovellettavat lean-käytänteet eroavatkin monin paikoin.

Leania on sovellettu lukuisille eri aloille, ohjelmistotuotantoon sen lanseerasi 2003 ilmestynyt Mary ja Tom Poppendieckin kirja [Lean software development, an agile toolkit](https://www.amazon.com/Lean-Software-Development-Agile-Toolkit/dp/0321150783). Klassikon asemastaan huolimatta kirja on jo paikoin vanhentunut ja tulkitsee leania osin melko suppeasti. Myös Scrumin kehittäjät Ken Schwaber ja Jeff Sutherland tunsivat hyvin lean-ajattelun, ja monet Scrumin piirteet ovat saaneet vaikutteita leanista.

Leania on ruvettu soveltamaan yhä suurempaan määrään asioita, aina terveydenhoidosta, pankkitoimintaan. Myös Helsingin yliopiston hallinto on alkanut puhumaan yhä enenevissä määrin leanista ja kuluvan vuoden aikana aiheesta on järjestetty yliopiston sisällä useita tilaisuuksia.  Lean tai mitä erilaisemmat lean-nimikkeen alla olevat (ja myytävät) asiat ovatkin alkaneet elämään omaa, Toyota producton systemistä erillistä elämäänsä ja nykyään on välillä vaikea sanoa tarkemmin mistä on kyse kun joku puhuu leanista. 

Käsittelemme seuraavassa leania tarkemmin Craig Larmanin ja Bas Vodden mainioon kirjaan Scaling Lean & Agile Development perustuen. Kirjan leania esittelevä luku on kaikkien luettavissa [tällä](http://www.leanprimer.com/downloads/lean_primer.pdf). Luku esittelee nimenomaan Toyota production systemin modernia muotoa.

### Leanin tavoitteet, perusta ja peruspilarit

Leania havainnollistetaan useissa lähteissä _lean thinking houseksi_ nimitettävänä kaaviona:

![]({{ "/images/5-1.png" | absolute_url }}){:height="550px" }

Leanilla siis on _tavoite_ (engl. goal), _perusta_ (engl. foundation), kaksi _peruspilaria_ (engl. pilars) ja joukko näitä tukevia _periaatteita_ (14 principles ja product development -periaatteet). Näiden lisäksi on olemassa joukko leania tukevia työkaluja, joista kuuluisin lienee kurssinkin aikana mainittu Kanban.
 
Leanin tavoitteena on _saada aikaan pysyvä nopea tapa edetä "ideasta asiakkaalle myytyyn tuotteeseen" siten, että tämä tapahtuu työntekijöitä ja yhteistyökumppaneita riistämättä, ylläpitäen korkea laatutaso ja asiakastyytyväisyys._

Jotta tavoite on mahdollinen, tulee taustalla olla syvälle yrityksen kaikille tasoille juurtunut pitkälle tähtäävä lean-toimintatapa, mitä johtajat soveltavat ja opettavat alaisille, tätä nimitetään _leanin perustaksi_.

Leanin kaksi peruspilaria ovat _jatkuvan parantaminen_ (engl. continuous improvement) ja _ihmisten kunnioittaminen_ (engl. respect for people).

_Jatkuva parantaminen_ määrittelee pohjimmiltaan koko Toyotan toimintakulttuurin, jonka ytimessä on halukkuus oppia ja kannustava ilmapiiri muutosten tekemiselle:

_The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, "Why are we doing this?"._

Jatkuvaan oppimiseen ja toiminnan parantamiseen kannustava ilmapiiri taas on mahdollista ainoastaan jos kaikki toiminta perustuu _ihmisten kunnioittamiseen_, joka taas tarkoittaa monia konkreettisia asioita, esim. työntekijöiden kuuntelemista, vastuuttamista ja mentorointia, työympäristön mielekkyyttä ja turvallisuutta. Toyota laajentaa periaatteen kattamaan myös alihankkijat ja loppuasiakkaat, esim. alihankkijoiden kanssa Toyota rakentaa aitoja partneriuksia, joista molemmat hyötyvät sekä opettaa alihankkijoille lean-ajattelua.  

Kaikki tämä kuullostaa abstraktilta, ja asia toivon mukaan konkretisoituu hieman kun käsittelemme hetken päästä leanin tavoiteteesen ja peruspilareihin nojaavia _lean-periaatteita_ (engl. lean principles), jotka ohjaavan konkreettisemmin leania toimintaa.

### Jatkuva parantaminen – arvo ja jäte/hukka
 
Toyota production systemin kehittäjä [Taiichi Ohno](https://en.wikipedia.org/wiki/Taiichi_Ohno) kuvaa jatkuvan parantamisen periaatetta seuraavasti:

> All we are doing is looking at the time line, from the moment the customer gives us an order to the point where we collect the cash And we are reducing the time line by reducing the non-value-adding wastes.

Ohnon mukaan keino päästä nopeampaan tuotantosykliin on siis eliminoida _arvoa_ (engl. value) tuottamattomia asioita eli _hukkaa_ (engl. waste). 

Mitä lean tarkalleen ottaen tarkoittaa arvolla ja jätteellä? Arvolla tarkoitetaan niitä asioita ja työnteon vaiheita, mistä asiakas on valmis maksamaan, eli mitkä tuottavat asiakkaalle hyötyä. Jätteellä taas tarkoitetaan kaikkea tuotantoon liittyvää, mikä ei tuota asiakkaalle arvoa.

Leanin mukaan on olemassa kolmen eri tyypin jätettä: muri, mura ja muda.

Käsitellään ensin näistä selkeintä eli _muda_-tyyppistä hukkaa. Lean tunnistaa alunperin 7 lähdettä muda-hukalle:

- ylituotanto (engl. over production)
- välivarastointi (engl. in-process inventory)
- liikatyö (engl. over/extra processing)
- tarpeeton siirtely (engl. transportation)
- tarpeeton liikkuminen (engl. motion)
- odotus (engl. waiting)
- viat (engl. defects)

Alunperin nämä ovat olleet autojen valmistuksen tuotantolinjaan liittyvää hukkaa, avataan nyt käsitteitä tulkitsemalla ne samalla ohjelmistokehityksen kontekstiin.

#### Ylituotanto (engl. over production)

Tuotteita tulee valmistaa ainoastaan siinä määrin mitä asiakas on niitä tilannut, eli ei kannata tehdä varastoon. Varastoon tehdyt tuotteet ovat monella tapaa ongelmallisia, ne syövät pääomaa ja saattavat myös sisältää systemaattisia vikoja, jotka huomataan vasta kun tuotteet otetaan käyttöön. 

Ohjelmistojen ylimääräiset toiminnallisuudet voidaan ajatella olevan ylituotantoa, joidenkin tutkimuksien mukaan jopa [64% ohjelmistojen toiminnallisuuksista](https://www.mountaingoatsoftware.com/blog/are-64-of-features-really-rarely-or-never-used) on joko ei ollenkaan tai ainoastaan erittäin harvoin käytettyjä. Ylimääräisten timinnallisuuksien toteuttaminen maksaa ja myös kasvataa koodin määrää, ja tämä taas tekee jatkokehityksen riskialttiimmaksi.

#### Yälivarastointi (engl. in-process inventory)

Tähän kategoriaan kuuluu osittain tehty työ ja sen säilöminen, eli esim. komponentit joille ei vielä ole käyttöä. Ongelmat ovat samat kuin ylituotannossa.

Ohjelmistokehityksessä välivarastointia ovat esim. liian tarkkaan tehdyt vaatimusmäärittelyt sellaisille ominaisuuksille, joita ei vielä hetkeen toteuteta,  
valmis koodi mikä ei ole vielä testattu tai otettu käyttöön tai koodi joka toteuttaa asiakkaan ehkä tulevaisuudessa haluamia toiminnallisuuksia.

#### Liikatyö (engl. over/extra processing)

Kaikki liiat työvaiheet mitä vaaditaan riittävän laadukkaaseen lopputulokseen ovat myös hukkaa. Tälläisiä ovat esimerkiksi prosessin pakottamat työvaiheet, joilla ei kuitenkaan ole lopputuloksen kanssa merkitystä, esim. pakolliseksi määritelty suunnitteludokumentti jota kukaan ei lopulta tarvitse. 

#### Tarpeeton materiaalin siirtely (engl. transportation)

Tuotteen tekemiseen tarvittavia raaka-aineita tai osittain valmista tuotetta ei tulisi joutua siirtelemään tarpeettomasti paikasta toiseen.

Ohjelmistokehityksen kontekstissa tämä tarkoittaa että kehitettävä ohjelmisto tulisi  määritelläa, suunnitella, toteuteta, testata ja viedä tuotantoon yhden tiimin toisesta. Eli ns. "handoff", missä esimerkiksi toteutettu ohjelmisto annetaan kehittäjätiimistä erillisen tiimin (esim. QA-tiimi) testattavaksi ajatellaan hukkana.

#### Työntekijöiden tarpeeton liikkuminen (engl. motion) 

Tuotantovälineet ja materiaalit tulisi sijoittaa siten, että työntekijöiden ei tarvitse tarpeettomasti siirtyä paikasta toiseen tuotetta valmistaessaan.

Ohjelmistokehityksessä tarpeettomaksi liikkumiseksi on ajateltu _task switching_ eli liian nopea vaihtelu eri työtehtävien välillä, esim. työskentely yhtäaikaa monessa projektissa.

#### Turha odotus (engl. waiting)

Turhaa odotusta on esimerkiksi aika, joka joudutaan odottamaan, että tarpeelliset raaka-aineet saapuvat, tai että jokin tuotantoväline vapautuu muusta käytöstä.

Ohjelmistokehityksen kontekstissa turhaa odotusta on se kun joudutaan odottamaan että yrityksen johto hyväksyy vaatimusmäärittelyn, testaajat ehtivät testaamaan ohjelman uuden version, ylläpito vie sovelluksen uuden version tuotantoon, joku mergeää pullrequestin...

#### Viat (engl. defects)

Jos tuotantolinjan aiheuttamaa systemaattista vikaa ei huomata ajoissa, ehditään viallisia tuotteita/komponentteja ehkä valmistamaan suuret määrät. Vielä pahempaa on, jos viallisia tuotteita pääsee kuluttajille asti. Niiden korvaaminen tai korjaaminen kallista, ja imagohaitta potentiaalisesti suuri. Jos vikoja tulee, onkin oleellista havaita ja korjata ne mahdollisimman nopeasti.

Ohjelmistokehityksessä vikoja tuotteeseen tulee lähes väistämättä, mutta on kustannustehokasta suorittaa laadunhallinta niin aikaisessa vaiheessa kuin mahdollista.

#### Ihmisten potentiaalin alihyödyntäminen

Nämä alkuperäiset vuosikymmeniä sitten autonvalmistuksen kontekstiin sovitetut 7 muda-hukkaa on tulkittu uudelleen yhä uusiin konteksteihin, kuten ohjelmistokehitykseen. 

Vuosien varrella on ehdotettu myös uusia hukan muotoja, näistä eräs _ihmisten potentiaalin alihyödyntäminen_ on jossain määrin jo vakiintunut. Englanniksi tätä hukan muotoa kuvaillaan seuraavasti _Under-realizing people’s potential and varied skill, insight, ideas, suggestion._
 
#### Muri- ja mura-tyyppinen hukka

Äsken käsitelty _muda_-tyyppinen hukka eri muodoissaan on eniten esillä oleva leanin hukan muodoista, ja joissain lähteissä ei muita kahta hukkatyypiä eli _muraa_ ja _muria_ välttämättä edes puhuta.

_Mura_ tyyppinen hukka on epäsäännöllisyyttä tai epäyhdenmukaisuutta (engl. unevenness, non-uniformity, irregularity), työtavoissa tai työstettävässä tuotteessa. 

Ohjelmistokehityksessä esim. toteutettavien user storyjen suuresti vaihteleva koko on mura-tyyppistä jätettä, jonka seurauksena saattaa olla _muda_-tyyppinen jäte, eli esimerkiksi välivarastoinnin tarve. Tämä taas heikentää arvon läpivirtausta, eli aikaa, miten kauan user storyltä kestää backlogille asettamiseta valmiiksi tuotteen osaksi.  

Kolmas hukan tyyppi _muri_ tarkoittaa ylikuormitusta tai mahdottomia vaatimuksia (engl. unreasonableness, impossible, too difficult). Autojen tuotantolinjaa ajatellessa, esim. koneiden käyttäminen 100% kapasiteetilla ilman säännöllistä huoltoa on luokiteltavissa muriksi. Ohjelmistokehitykseen tulkittuna muria voisivat olla esim. henkilöstön ylityöllistäminen. Muri-tyyppisen jätteen, esim. henkilöstön ylikuormituksen seurauksena on todennäköisesti mudaa, eli esim. tuotteeseen saataa syntyä vikoja.

#### Kaizen 

Jatkuvassa parantamisessa on siis tarkoitus optimoida toimintaa eliminoimalla asiakkaalle arvoa tuottamatonta jätettä. Jatkuvasta parantamisesta käytetään usein sen japaninkielista nimitystä _kaizen_, joka on kaikkia työntekijöitä koskeva kattava toimintafilosofia:

> As a mindset, it suggests "My work is to do my work and to improve my work" and "continuously improve for its own sake."

Kaizen on myös konkreettinen tapa toimia:
- valitaan jokin tekniikka/työskentelytapa ja sitoudutaan sen suorittamiseen joksikin aikaa
- kun toiminta on stabiloitunut, tarkastellaan valitun työskentelytavan toimintaa ja optimoidaan sitä havaittujen epäkohtien suhteen ja luodaan näin uusi työnteon standarditapa
- toistetaan tätä sykliä ikuisesti...

Kaizeniin liittyvä syklinen parannusprosessiin liittyy usein tasaisin väliajoin pidettävät tilaisuudet, eli "kaizen event":it. Scrumin retrospektiivit ovat klassinen esimerkki kaizen eventeistä.
 
#### Lean työkalu: value stream mapping

Hukan etsimiseen ja kartoittamiseen käytetään usein nimellä [value stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping) tekniikkaa. Ideana on kuvata tuotteen kulku käytetyn prosessin työvaiheiden läpi ja visualisoida tuotteelle arvoa tuottavat työvaiheet suhteessa tuotteen koko valmistuksen elinkaareen.

![]({{ "/images/5-2.png" | absolute_url }}){:height="400px" }

Kuvassa on kuusi työvaihetta, joiden läpi tuote, esim. user story kulkee. Kussakin työvaiheessa kuluvan ajan voidaan kasvattavan työn arvoa, esim. vaihe _code and test_, vie 2 tuntia, joka on välttämätöntä sen kannalta, että story ylipäätään saataisiin julkaistua. Kunkin työvaiheen välillä story on _välivarastossa_, odottamassa seuraavaa työvaihetta, ja välivarastointi oli eräs hukan muoto. Value stream mappingingin onkin tarkoitus tuoda esille kaikki "välivarastot", jotta olisi mahdollista miettiä miten niitä saataisiin minimoitua.

#### Lean työkalu: perimmäisen syyn analyysi - five whys

Jos value steream mapping tai jokin muu menetelmä paljastaa tuotantoprosessista hukkaa, eli arvoa tuottamattomia asioita, piritään niistä hankkiutumaan eroon. Jatkuvan parantamisen eli kaizenin ei kuitenkaan ole tarkoitus lääkitä pelkkää oiretta, vaan tehdä havaitulle hukalle _perimmäisen syyn analyysi_ (engl. root cause analysis) ja pyrkiä näin kestävämpiin ja vaikuttavampiin parannuksiin.

Eräs root cause analysis -tekniikka on [five whys](https://en.wikipedia.org/wiki/Five_whys), minkä toimintaa on helpointa havainnollistaa esimerkillä. 

Edellisestä kuvassa olevasta value stream mapista havaitaan, että koodin valmistumisesta menee 1.5 viikkoa sen tuotantoon saamiseen. 

- **Miksi?** QA-osaston on vielä varmistettava, että koodi toimii staging-ympäristössä.
- **Miksi?** Ohjelmoijilla ei ole aikaa testata koodia itse staging-ympäristössä.
- **Miksi?** Ohjelmoijilla on kiire sprintin tavoitteena olevien user storyjen tekemisessä.
- **Miksi?** Edellisten sprinttien aikana tehtyjen storyjen bugikorjaukset vievät .yllättävän paljon aikaa.
- **Miksi?** Laadunhallintaa ei ehditä koskaan tekemään kunnolla siinä sprintissä missä storyt toteutetaan.
- **Miksi?** Sprintteihin otetaan aina liian monta user storyä.

Näin kysymällä toistuvasti _miksi_ on mahdollista päästä ongelman perimmäisen syyn lähteille, eli sinne mitä korjaamalla jäte saadaan toivon mukaan eliminoitua. Esimerkin kuusi miksi-kysymystä siis paljastaa ongelman perimmäiseksi syyksi sen, että _sprintteihin otetaan aina liian monta user storyä_, eli hukan eliminoimiseksi on todennäköistä lähteä liikkeelle sprinttien työmäärän vähentämisellä.

### Leanin periaatteita: pull-systeemi

Leanissa on siis tarkoituksena optimoida aikaa, mikä kuluu tuotteen tilaamisesta sen asiakkaalle toimittamiseen. Arvo pyritään saamaan _virtaamaan_ (engl. flow) asiakkaalle ilman turhia viiveitä ja työvaiheita, äsken esitelty value stream map siis visualisoi  nimenomaan arvon virtausta.

Leanin mekanismi virtauksen optimointiin on _pull-systeemien_ käyttö. Pull-systeemillä tarkoitetaan tuotannonohjaustapaa, missä tuotteita, tai tuotteiden tarvitsemia komponentteja tehdään ainoastaan asiakkaan tilauksen niitä edellyttäessä. Tämän vastakohta on _push-systeemi_, missä tuotteita ja komponentteja tehdään etukäteen varastoon ja toivotaan sitten että tuotteet ja komponentit menevät kaupaksi.

Esimerkiksi pizzeriat toimivat pull-periaatteen mukaan, pizza valmistetaan vasta kun asiakas tilaa sen. Unicafe taas on push-systeemi, lounaita tehdään varastoon ja toivotaan että ne menevät kaupaksi asiakkaille.

Leanin taustaa käsitelleessä [luvussa](linkki_tanne) puhutiin Just in time (JIT)-tuotantomallista. Käytännössä pull-systeemi on mekanismi JIT-tuotantomallin toteuttamiseen.

#### Kanban

Pull-systeemi toteutetaan usein _kanbanin_ avulla. Japaninkielinen sana kanban tarkoittaa signaalikorttia, englanniksi "card you can see". Kanban toteuttaa _visuaalisen ohjauksen_, jonka avulla työntekijöiden on helppo tietää miten seuraavaksi tulee toimittaa.

Kun asiakas tilaa tuotteen, viedään tilausta vastaava kanban-kortti tehtaalle.
Jos tuotteen valmistaminen edellyttää esim. viittä eri komponenttia, "tilataan" komponentit niitä valmistavilta työpisteiltä viemällä niihin kunkin komponentin tilausta vastaava kanban-kortti. Jos komponenttien valmistus edellyttää jotain muita komponentteja, tilataan nekin samalla periaatteella. Kun komponentti on valmis, viedään se tilaajalle, samalla kanban-kortti palautetaan tulevien tilauksien tekemistä varten.

Kanban-kortteja on käytössä vain rajallinen määrä, tällä kontrolloidaan sitä että liikaa työtä ei pääse kasautumaan mihinkään tuotannon vaiheeseen.
Näin kanbanin avulla "vedetään" (pull) tarvittavat komponentit, sensijaan että komponentteja olisi etukäteen valmistettu varalta suuret määrät varastoon.

Kuten on jo mainittu välivarastoon tehdyt komponentit on eräs leanin hukan muoto. Varastoidut komponentit sitovat pääomaa, ja jos tilauksia ei tulisi tarpeeksi, niitä
ei välttämättä tarvita koskaan. Välivarastointi saattaa myös viivästyttää vikojen ilmituloa, jos komponenteissa olisi valmistusvika, saattaisi kestää kauan kunnes vika paljastuisi ja viallisia komponentteja olisi ehkä ehditty valmistamaan varastoon suuret  määrät.

Käytännössä pull-periaatteella toimiva tuotanto saattaa ylläpitää pieniä välivarastoja saadakseen tuotteen valmistamiseen kuluvan sykliajan optimoitua.

#### Kanban ohjelmistotuotannossa

Kanban on otettu laajalti käyttöön myös ketterässä ohjelmistokehityksessä, [osassa 2]() sivuttiin jo asiaa. Ohjelmistopuolen kanban on periaatteiltaan hieman erilainen kuin perinteiseen tuotantoon liittynyt kanban.

Toteutettavaa toiminnallisuutta, esim. user storyä tai jotain sen teknistä taskia vastaa kanban-kortti, kortti kulkee eri työvaiheiden kautta.

Virtaus, eli yksittäisen storyn nopea valmistuminen saadaan aikaan rajoittamalla tietyissä työvaiheissa kesken olevan työn määrää asettamalla _work in progress_ (WIP) -rajoitteilla.

Allaolevassa kuvassa oleva kanban-taulu on jaettu kolmeen työvaiheeseen _analysis, develop, test_, joille kullekin on asetettu WIP-rajoite. Työvaiheiden väliin on myös sijoitettu välivarastoja, _dev ready_ ja _build ready_, joilla myös on WIP-rajoitteet. 

![]({{ "/images/5-3.png" | absolute_url }}){:height="400px" }

Kaikenkaikkiaan kuvan kanban-taulu salli että sille on sijoitettu kaksikymmentä user storyä. Kun story on kulkenut kaikkien työvaiheiden läpi, vapautuu kanban-taululle taas uutta kapasitettia, ja product owner voi sijoittaa seuraavaksi toteutettavan storyn vaiheeseen _input queue_. 

Kuvan kanban-taulun WIP-rajoitteet eivät ole kovin tiukat, eli kesken olevan työn määrä on aika suuri, maksimissaan 15 storyä. Koska lean pitää kesken olevaa työtä hukkana (in process inventory), ei _arvon virtaus_ olekaan kuvan kanbantaululla kovin optimaalinen. Pienentämällä WIP-rajoja, ja poistamalla välivarastoja saattaisikin olla mahdollisuus optimoida _sykliaikaa_, eli sitä aikaa, joka kuluu kun user story "tilauksesta", siihen kuin sen määrittelemä ominaisuus on valmis. 

### Leanin periaatteita
 
Jotta pull-järjestelmä toimii hyvin, eli asiakkaan arvo virtaa tasaisesti, on edullista jos eri työvaiheiden kestoon ei liity liikaa varianssia, tähän liittyy leanin periaate *level the work*. Yksi kolmesta leanin hukan muodoista oliki _mura_ eli epäsäännöllisyys/epäyhdenmukaisuus, työvaiheiden keston tai ohjelmistokehityksen kontekstissa toteutettavien user storyjen koon suuri varianssi on eräs tämän ilmentymistä. 

Eräs varianssin aiheuttaja ovat viat. Leanin periaatteita ovatkin _Stop and fix_ ja _build quality in_.

*Stop and fix* viittaa Toyotan vanhaan periaatteeseen, missä kuka tahansa on velvollinen pysäyttämään tuotantolinjan vian, esimimerkiksi vaurioituneen komponentin havaitessaan.
Tuotantolinjan pysäyttämisen yhteydessä _vian perimmäinen syy_ (engl. root cause) tulee selvittää mahdollisimman nopeasti ja pyrkiä eliminoimaan vian mahdollisuus tulevaisuudessa eli tuotantossa tulee olla laatu sisäänrakennettua *build quality in*.

Ohjelmistotuotannon käytänteistä automatisoitu testaus ja jatkuvan integraatio voidaan nähdä suoraan _stop and fix_ - ja _build quality in_ -periaatteiden ilmentymänä.
 
Perinteisessä massatuotannossa keskitytään pitämään tuotantolaitteistot käynnissä maksimikapasiteetilla ja työntekijät koko ajan työllistettyinä, yksittäisten työntekijöiden palkkauskin perustuu usein suorituskohtaisiin bonuksiin. Näin ajatellaan että tuotteiden yksikköhinta saadaan mahdollisimman alhaiseksi ja yrityksen tuottavuus maksimoituu.

Yksittäisten työntekijöiden ja koneiden tehokkuuden tarkastelun sijaan lean keskittyy arvon virtauksen optimoinnin avulla järjestelmien konaisvaltaiseen kehttämiseen ja olettaa, että se on pidemmällä tähtäimellä yritykselle kannattavampaa. Tämän kiteyttää periaate *long term philosophy.

Esimerkiksi yksittäisen koneen suuri käyttöaste tai henkilökohtaisen suorituksen palkitseminen voi olla lokaalia optimointia, joka voikin yrityksen kannalta olla jopa haitallista. Näin voidaan esimerkiksi valmistamaan paljon komponentteja, mitä ei lopulta koskaan tarvita. Yksittäisten tuotantolaitteiden, henkilöiden tai tiimien suorituskyvyn sijaan keskittymällä arvon virtaamiseen tilauksesta asiakkaalle pyritään toiminnan parannuksessa ottamaan huomioon koko tuotantosysteemiä koskevat pullonkaulat.

Surullisen kuuluisia esimerkkejä lokaalista optimoinnista on turhan paljon, mm. yliopistojen eri laitosten säästöt tilakustannuksista. Yliopiston rakennuksista maksama vuokra on edelleen sama vaikka jokin laitos "säästää" jättämällä tiloja käyttämättä.

Pull-systeemeissä ei ole tapana tehdä tuotantoon liittyviä päätöksiä (esim. miten paljon tuotetta ja sen tarvitsemia komponentteja tulee valmistaa) aikaisessa vaiheessa, vaan vasta tarpeen vaatiessa. Englanniksi tätä myöhäistä päätöksen tekemistä luonnehditaan  _commit at the last responsible moment_, eli päätöksiä viivytetään, mutta ei kuitenkaan niin kauaa että viivyttely aiheuttaa ongelmia. Tämä kiteytyy periaatteessa *decide as late as possible*.

Kun päätös tehdään myöhään on tästä se merkittävä etu, että päätöksen teon tueksi on käytettävissä maksimaalinen määrä tietoa, toisin kuin liian etukäteen tehtävissä päätöksissä mitkä ovat enemmän spekulatiivisia.

Kun päätökset on tehty, toimitaan pull-systeemin hengessä mahdollisimman nopeasti, eli 
i*mplement rapidly* tai *deliver as fast as possible*, näin arvo saadaan virtaamaan asiakkaalle ilman turhia viiveitä.

Mitä nopeammin arvo saadaan virtaamaan, sitä enemmän päätöksiä on mahdollista viivyttää ja päätökset voidaan tehdä entistä paremman tiedon valossa. 

### Arvon virtaaminen ketterässä ohjelmistotuotannossa

Edellä mainittujen periaatteiden soveltaminen näkyy selkeästi ketterässä ohjelmistotuotannossa. Vaatimuksia hallitaan product backlogilla, joka on parhaassa tapauksessa DEEP eli Detailed aproproately, emergent, estimated, prioritized. 

Alhaisen prioriteetin user storyjä ei ole kovin tarkkaan määritelty. Kun product owner valitsee storyn seuraavaan sprinttiin toteutettavaksi määritellään storyn hyväksymäkriteerit ja suunnitellaan se toteutuksen osalta. Tarkkoja vaatimuksia ei siis määritellä spekulatiivisesti vaan _at the last responsible moment_. Sprintiin valitut storyt toteutetaan valmiiksi sprintin aikana, eli _deliver as fast as possible_

Scrum voidaankin nähdä leanin mukaisena _pull-systeeminä_, missä jokaiseen sprinttiin otetaan kerrallaan asiakkaan edustajan viime hetkellä hetkellä (eli viimeistään sprint planningissa) määrittelemät tilaukset, jotka toteutetaan mahdollisimman nopeasti, eli sprintin aikana. Arvo, eli toimivaksi asti toteutetut uudet toiminnallisuudet, virtaa asiakkaalle sprinttien määrittelemässä rytmissä.
 
Ketterässä ohjelmistotuotannossa on viime aikoina ruvettu tehostamaan arvon virtausta usein eri menetelmin. Alunperin Scrumin pyrkimys viedä uusia ominaisuuksia tuotantoon sprinteittäin, eli muutaman viikon välein. Viime aikojen trendinä on ollut tihentää sykliä, jatkuva tuotantoonvienti eli _continuous deployment_ voi tarkoittaa sitä, että jopa jokainen commit johtaa tuotantoonvientiin, eli ohjelmistosta voi ilmestyä uutta arvoa tuottavia ominaisuuksia jopa kymmeniä kertoja päivässä.

Scrum rajoittaa kesken olevan työn määrää (joka on siis eräs leanin hukka) siten, että sprinttiin otetaan vaan tiimin velositeetin verran user storyjä. Kaikissa konteksteissa, esimerkiksi jatkuvaa tuotantoonvientiä sovellettaessa aikarajoitettu sprintti ei ole mielekäs. 

Paikoin onkin siirrytty "puhtaampaan" pull-systeemiin, missä user storyjä toteutetaan yksi (tai joku hieman suurempi määrä) kerrallaan niin nopeasti kuin mahdollista. Kun story valmistuu eli tuotantokapasiteettia vapautuu, valitsee product owner seuraavaksi tärkeimmän storyn, joka sitten määritellään, suunnitellaan ja toteutetaan välittömästi alusta loppuun. Virtaus varmistetaan sillä, että yhtä aikaa työn alla ei ole kuin yksi tai korkeintaan muutama user story. [Osassa 2](skrumban) mainittu Scrumban-menetelmä toimii pitkälti juuri näin.
 
### Kasvattaminen leanin ja johtajuuden periaatteet

Toyotalla useimmat uudet työntekijät koulutetaan huolellisesti perehtymään käytännön tasolla lean-ajattelun periaatteisiin. Useiden kuukauden koulutuksen aikana uudet työntekijät työskentelevät monissa eri työtehtävissä ja heidät opetetaan tunnistamaan lean-hukka sen eri muodoissa. Tarkoituksena on sisäistää jatkuvan parantamisen eli kaizen mentaliteetti.

Toyotan johtamiskulttuurissa keskiössä on lean-ajattelun opettajina, mentoreina ja työn valmenajana toimivat johtajat/managerit. Periaate *grow leaders* kuvaa Toyotan tapaa kasvattaa lean-toimintafilosofian sisäistäviä managereja. 

Periaate *my manager can do my job better than me* kuvaa sitä, että managerit ovat ovat firman sisällä eri työtehtävien kautta uusiin vastuisiin kasvaneita ihmisiä, jotka hallitsevat myös työntekijöiden vastuulla olevan _hands on_ -työn. Managerit ovat ensisijaisesti toiminnan etulinjassa toimivia lean-käytänteiden opettajia ja mentoreita.
 
Eräs tärkeä leanin johtamisen periaate on *go see* (japaniksi genchi genbutsu), työntekijöiden, erityisesti managerien tulee "nähdä asiat omin silmin" eikä pelkästään istua työpöydän ääressä lukemassa muiden raportoimia faktoja. Tämä liittyy siihen ideaaliin, että managerien oletetaan _johtavat etulinjassa_ (japaniksi gemba) eli siellä missä työ tosiasiallisesti tehdään.

Toyota production systemsin kehittäjän T. Ohnon sanoin:

> You can’t come up with useful kaizen sitting at your desk... We have too many people these days who don’t understand the workplace. They think a lot, but they don’t see. I urge you to make a special effort to see what’s happening in the workplace. That’s where the facts are.

Scrum masterin rooli on osin leanin johtajuuden ideaalien mukainen. Tosin useimpiin scrum mastereihin ei päde periaate _my manager can do my job better than me_. Monissa ohjelmisokehitystiimeissä teknistä puolta johtajuudesta edustaa edustavat esim, lead developer - tai senior developer -nimikkeellä olevat kokeneemmat mentorin roolissa toimivat työntekijät.

### Lean-tuotekehityen periaatteita

Sovellettaessa leania _tuotantoon_ (engl. production), pääasiallisena fokuksena on toiminnan parantaminen hukkaa eliminoimalla.

Sovellettaessa leania tuotannon optimoinnin sijaan _tuotekehitykseen_ (development) esim. kokonaan uusien automallien suunnitteluun, nousee esiin kokonaan uusia periaatteita.
Kantavana ideana Toyotan tuotekehityksessä on _out-learn the competitors, through generating more useful knowledge and using and remembering it effectively._ 

Leanissa tuotekehityksessä fokukseen nouseekin toiminnan tehostamisen lisäksi _oppimisen kiihdyttäminen_ (engl. *amplify learning*). Kannattaa pyrkiä mahdollisimman _arvokkaaseen tietoon_ (engl. *high-value information*), mm. kiinnittämällä huomio asioihin, mihin sisältyy paljon epävarmuutta (*focus on uncertain things*). Epävarmat ja suuren teknisen riskin sisältävät ideat kannattaa toteuttaa/testata nopeasti, niiden suhteen viivästyneellä tiedolla on korkea hinta (*cost of delay*).

Eräs leanin tuotekehityksen mekanismi oppimisen nopeuttamiseen on *set based concurrent
development*. Jos tarkoituksena on kehittää esim. uusi moottorin jäähdytysjärjestelmä, aletaan yhtä aika kehittämään useita vaihtoehtoisia ratkaisuja eri tiimien toimesta. Tasaisin väliajoin kehitettäviä ratkaisuja vertaillaan, ja osa niistä karsitaan. Lopulta parhaaksi osoittautuva ratkaisu valitaan käytettäväksi lopputuotteessa.

Set based development -menetelmä on radikaalisti erilainen kuin usein sovellettava _iteratiivinen_ kehitysmenetelmä, missä lähtökohtana on yksi askeleittain paranneltava ratkaisu.

Ohjelmistokehityskessä set based development -menetelmää sovelletaan melko harvoin, lähinnä käyttöliittymäsuunnittelussa esittelemällä asiakkaalle aluksi useita rinnakkaisia ehdotelmia mahdollisesta käyttöliittymäratkaisusta.

Toyotalla tuotekehitystä johtaa *chief technical engineer*, joka on vastuussa sekä tuotteiden teknisestä että liiketoiminnallisesta menestyksestä. Kyseessä tyypillinen leanin etulinjassa toimiva johtaja, joka tuntee tarkasti käytännön työn, mutta on myös erittäin lähellä asiakasta. Rooli poikkeaa Scrumin _product ownerista_ teknisen taustansa takia.

### Leanin soveltaminen eri aloille

90-luvulta alkaen lean on herättänyt maailmalla suurta kiinnostusta ja sitä on pyritty soveltamaan lähes kaikilla aloilla ohjelmistokehitys mukaan lukien. Lean-periaatteet ovat olleet hyvin esim. Scrumin kehittäjien tiedossa ja vaikka Scrumin alkuperäiset lähteet eivät käytäkään leanin terminologiaa, on Scrumissa monin paikoin piirteitä leanista. 

Viime aikainen ketterien menetelmien kehitys on vienyt tiettyjä ideoita, esimerkiksi arvoketjun optimoimista user storyjen läpimenoaikoja minimoimalla huomattavasti Scrumin ja ketterän alkuaikojen käytänteitä pidemmälle, nykyään puhutaankin paljon leanista ohjelmistokehityksestä.

Sekä ketterissä menetelmissä, että leanissa on sama fundamentaali periaate, _toimintojen jatkuva kehittäminen_. Rajanveto leanin ja ketterän välillä ei olekaan ollenkaan selvä ja osin täysin keinotekoista. Esimerkiksi Scrumin kehittäjät eivät ole missään nimessä tarkoittaneet Scrumia staattiseksi rakennelmaksi, jota noudatetaan kirjaimellisesti tästä ikuisuuteen, sellainen toiminta ei olisi ketteryyttä.
Ketteryyttä on _läpinäkyvyyden_ (engl. transparency) mahdollistava toimintojen jatkuvaan parantamiseen keskittyvä _inspect-and-adapt_-sykli. Käytännössä tämä on täsmälleen sama idea kuin leanin _kaizen_.

Leanin soveltamisessa on kohdattu myös paljon ongelmia. Lean on ajattelumalli, joka on kehitetty Toyotan tarpeisiin, malli on jalostunut ja muuttunut vuosikymmenten kuluessa.
Onkin osin epäselvää miten Toyotan käytänteet siirretään eri aloille.

Kuten agile, myös lean ei ole joukko työkaluja vaan jatkuva toimintatapa, Toyotan CEO:n [Akio Toyodan](https://en.wikipedia.org/wiki/Akio_Toyoda) sanoin

- _The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, "Why are we doing this?"_ 
- _In Toyota and in lean thinking, the idea is to repeat cycles of improvement experiments forever._

## Laajan skaalan ketterä ohjelmistokehitys
 
Ketterät ohjelmistotuotantomenetelmät ovat alunperin tarkoitettu pienten tiimien hallintaan. Esimerkiksi Scrum mainitsee kehitystiimin koostuvan 3-9:stä henkilöstä Entä jos on kyseessä tuote, joka edellyttää suurempaa kehittäjäjoukkoa?

Perusperiaatteena on edelleen pitää tiimit pieninä, mutta kasvattaa tuotantokapasiteettia käyttämällä useampia tiimejä. Tämä taas edellyttää, että tiimien välistä työtä on koordinoitava jollain tavalla.

### Scrum of Scrums

Jo kauan käytetty tapa Scrumin skaalaamiseen on niinsanottu _Scrum of Scrums_ missä ideana on muodostaa koordinoiva tiimi, johon kuuluu yksi tai
tarvittaessa useampikin jäsen jokaisesta Scrum-tiimistä. Perinteisin tapa lienee koostaa kordinointitiimi Scrum mastereista, jissain tilanteissa parempi henkilö koordinointiin voi kuitenkin olla ns lead developer, eli Scrum-tiimin kokeneempi sovelluskehittäjä.
Scrum of Scrums -tiimi voi tavata joka päivä tai jos se ei ole tarpeen niin esimerkiksi viikoittain.

Scrum of Scrums Scrum of Scrums -periaate on jo hyvin vanha. Artikkelissa [Agile Can Scale: Inventing and Reinventing SCRUM in Five Companies](https://www.researchgate.net/publication/290823579_Agile_Can_Scale_Inventing_and_Reinventing_SCRUM_in_Five_Companies) toinen Scrumin kehittäjistä Jeff Sutherland kertoo harjottaneensa Scrum of Scrumia jo vuonna 1996.

Sutherland sovelsi periaatetta firmassa, missä oli satoja sovelluskehittäjiä ja kymmeniä Scrum-tiimejä, joiden vastuulla oli useita eri tuotteita.

Jokaisen tuotteen tiimejä kordinoi oma, kerran viikossa kokoontuva Scrum of Scrums -tiimi.
Koko firman tuotejoukkoa hallinnoi "management Scrum" eli Scrum of Scrum of Scrums -tiimi joka kokoontui kuukausittain. Tämä ylimmän tason management Scrum-tiimi koostui yrityksen johdosta, tuotepäälliköistä ja johtavista ohjelmistoarkkitehdeistä.

Sutherlandin kuvaus ei ole kovin seikkaperäinen, ja se ei anna viitteitä miten esim backlogien suhteen tulisi toimia laajemman skaalan Scrumissa.

### Laajan skaalan ketterät menetelmät

Viimeisen kymmenen vuoden aikana ketterän skaalaamiseen on alettu kiinnittämään enemmän huomiota ja on esitelty useita laajan mittakaavan ketteriä menetelmiä.
Näistä eniten huomiota saaneet ovat Scaled Agile Framework eli
[SAFe](http://www.scaledagileframework.com), Large Scale Scrum eli [LeSS](https://less.works) ja jossain määrin myös Disiplined Agile eli [DA](http://www.disciplinedagiledelivery.com)

Yhteistä näille on se, että ne laajentavat ketteryyttä ottamalla mukaan lean-ajattelua.
Toisin kuin ketterät menetelmät, lean on lähtökohtaisesti tarkoitettu toimimaan todella suuressa skaalassa ja se sisältääkin enemmän koko organisaation toimintaa ohjaavia periaatteita kuin perinteinen ketterä. Käsitellään nyt hieman tarkemmin SAFea ja LeSS:iä. DA on listatuista menetelmistä vähimmälle huomiolle jäänyt, joten jätämme sen välistä.

### SAFe® eli Scaled Agile Framework

Scaled Agile Framework eli SAFe® on tämän hetken suosituin laajan mittakaavan ketterä menetelmä, [erään tutkimuksen](https://www.cprime.com/resource/white-papers/scaling-agile-survey-2017/) mukaan 45 % laajan mittakaavan ketterää kehitystä tekevistä organisaatiota hyödyntää SAFe:a, joka on tällä hetkellä käytössä myös Helsingin Yliopiston opetushallinnon tietojärjestelmien ja web-palveluiden kehityksessä.

SAFe:n pääasiallinen kehittäjä on David Leffingwell, joka toimi Nokia Mobile Phonesissa (NMP) konstulttina 2000-luvulla. SAFe® on syntynyt pitkälti Nokialla tehdyn työn pohjalta, missä käytettiin eräänlaista SAFe:n esiversiota. SAFe:n virallinen ensimmäinen version julkaistiin 2011, tällä hetkellä on menossa versio 4.5.

Kärjistetysti sanoen SAFe® yhdistää kaikki viimeisen 20 vuoden aikana kehitetyt ketterän ja leanin ohjelmistokehityksen parhaat käytänteet sekä joukon yrityksien tuotteiden hallinnointiin suunnattuja käytänteitä.

SAFe® tarjoaa suuren määrän periaatteita (engl. principles), henkilä- ja tiimirooleja sekä käsitteitä. SAFe® kutsuu itseään menetelmäkehykseksi (engl. framework) eli  tarkoitus on, että yritykset räätälöivät itselleen sopivanlaisen prosessin käyttäen SAFe:n tarjoamia työkaluja.

SAFe® tarojaa myös neljä erikokoista valmiiksi räätälöityä konfiguraatiota.
Näistä pienin Essential SAFe® on tarkoitettu pienemmille yrityksille ja SAFen soveltamisen alkuvaiheeseen. Konfiguraatiosta suurin Full SAFe® taas soveltuu massiivisten, useita eri tuotteita hallitsevan yrityksen käyttöön.Seuraava kuva havainnollistaa Full SAFen käsitteistöä:

![]({{ "/images/5-4.png" | absolute_url }}){:height="500px" }

Sovelluskehityksen ytimessä on SAFen hieman modifioima Scrum, johon on liitettu joukko XP:n periaatteita.

Tiimien kordinointia hallitaan ylhäältä päin (engl. top down) kokoamalla yhdestä tuotteesta vastaavien tiimien joukko käsitteen _toimitusjuna_ (engl. release train) alle. Release trainin Scrum-tiimit toimivat synkroonissa toistensa kanssa tuottaen yhdessä isompia kokonaisuudessa useammasta sprintistä koostuvan _product increment_ -ajanjakson aikana.

Product incrementtejä ja niitä toteuttavia release traineja taas ohjaillaan yhä korkeammalta organisaatiosta erilaisten henkilöroolien toimesta. SAFe® tarjoaa tähänkin paljon tukea käsitteistön ja märittelemiensä roolien kautta.

SAFe® on dokumentoitu todella laajasti ja se antaa erittäin yksityiskohtaista ohjeistusta helpottamaan SAFen käyttöönottoa ja noudattamista. Ohjeistusta antavat tietysti kallispalkkaiset konsultit ja räätälöidyt koulutuspaketit ja sertifiointi.

SAFe® vaikuttaa olevan erityisesti firmojen johdon suosiossa. Tämä on ymmärrettävää, sillä toisin kuin useimmat ketterät menetelmät, SAFe® tarjoaa firman managementille sopivasti tekemistä roolien ja käytänteiden muodossa. 
 
Kuten aiemmin mainittu, sisältää SAFe® käytännössä kaikki mahdolliset ketterän ja lean-ohjelmistokehityksen parhaat käytänteet vieläpä selkeästi ja yksityiskohtaisesti dokumenoituna. SAFe® onkin eräänlainen agile/lean-kehityksen supermarket, kaikki on helposti saatavissa valmiina pakatussa mudossa. Pick and mix, avaa paketti ja seuraa käyttöohjetta ohjetta...

SAFe® on saanut osakseen myös paljon kritiikkiä. Osa kritiikistä kohdistuu SAFen määrittelemän prosessin raskauteen, osa taas SAFe:n top down -management luonteeseen.

Esim. Scrumin kehittäjä Ken Schwaber on [kyseenalaistanut sen että onko SAFe® ylipäätään ketterä menetelmä](https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/) ketteryyden alkuperäisen idean mukaan.
Agile Manifestossahan on periaate _individuals and Interactions Over Processes and Tools_, 
SAFe® taas prosessina vaikuttaa kovin raskaalta. 

### LeSS eli Large Scale Scrum

LeSS:in taustalla on Craig Larman ja Bas Vodde jotka työskentelivät konsultteina 2000-luvun alussa mm. Nokia Siemens Networksilla. Toisin kuin SAFe®, LeSS on erittäin yksinkertainen, hyvin vahvasti Scrumiin pohjautuva. Uusia rooleja, artifakteja ja palavereja ei ole.

LeSSistä on kaksi eri versiota, _LeSS_ tilanteisiin, missä tuotetta tekee 2-8 Scrum-tiimiä ja _LeSS huge_ tilanteisiin, missä tiimejä tarvitaan suurempi määrä.
 
Sekä LeSS että LeSS huge perustuvat seuraaville oletuksille
- kehitetään yhtä tuotetta, jolla on yksi product owner ja yksi product backlog
- kaikilla tiimeillä on samaan aikaan etenevät sprintit
- tiimit ovat Scrumin tapaan cross-functional ja full-stack eli ne sisältävät kaiken tarvittavan kompetenssin kokonaisen tuotteen osan tekemiseen
- tiimit tekevät sprintin aikana yhdessä tuotteesta yhden uuden, julkaisuvalmiin, asiakkaalle arvoa tuotavan version (engl. one shippable product increment)

Yksi LeSS-toteutus on tarkoitettu siis yhden tuotteen kehittämiseen. Jos yrityksellä on useita ei tuotteita, niitä kutakin varten on oma LeSS-toteutuksensa, Toisin kuin SAFe, LeSS ei ota mitenkään kantaa siihen miten firma hallinnoi tuoteperheitään.

LeSS korostaa, kyseessä _ei_ ole erillinen Scrumin päälle lisätty hallinnollinen kerros vaan ainoastaan tapa miten Scrumin periaatteita ja artefakteja voidaan soveltaa mahdollisimman yksinkertaisella tavalla laajemmassa skaalassa.  

#### LeSSin taustalla olevat periaatteet

 LeSSin taustalla on joukko tuttuja ketterän ja lean-kehityksen periaatteita.

![]({{ "/images/5-5.png" | absolute_url }}){:height="400px" }

Periaatteet ovat lähes samat kuin SAFe:ssa, yksi periaatteista tekee kuitenkin selvää eroa menetelmien välille, esitetään se tässä suorana sitaattina [dokumentaatiosta](https://less.works/less/framework/introduction.html#LeSSPrinciples)

*More with less:*

- We don’t want more roles because more roles leads to less responsibility to Teams
- We don’t want more artifacts because more artifacts leads to a greater distance between Teams and customers
- We don’t want more process because that leads to less learning and team ownership of process, instead we want more responsible Teams by having less (fewer) roles
- We want more customer-focused Teams building useful products by having less artifacts
- We want more Team ownership of process and more meaningful work by having less defined processes.
- *We want more with less*

Eli minimoimalla prosessin, roolien ja artefaktien määrä pyritään siihen että tiimit ottavat itse omistajuuden tuotteen kehittämisestä ja asiakkaan kanssa käytävästä kommunikaatiosta.

Lisää periaatteista [LeSS:in](https://less.works/less/framework/introduction.html) dokumentaatiossa.
 
#### LeSS käytännössä

Katsotaan hieman tarkemmin LeSS:in pienempää konfiguraatiota, jonka on tarkoitettu noin 2-8 tiimin hallintaan. 

Henkilöroolit ovat samat kuin normaalissa Scrumissa. Product ownereita on yksi, Scrum mastereita voi olla muutamia riippuen tiimien määrästä, yksi scrum master pytyy hoitamaan järkevästi noin 1-3 tiimin asioita.

Tiimit ovat itseorganisoituvia _full-stack, feature-tiimejä_, eli jokainen tiimi keskittyy asiakkaalle arvoa tuottavien kokonaisuuksien toteuttamiseen. Tiimijako siis _ei noudata_ sovelluksen arkkitehtuurisia kerroksia, eli ei ole esimerkiksi erillisiä frontend-,backend- ja tietokantatiimejä, kukin tiimi operoi ohjelmiston kaikilla tasoilla toteuttaen alusta loppuun user storyjen kuvaaman toiminnallisuuden definition of donen tasalla.

Myös artifaktit ovat samat kuin normaalissa Scrumissa. Product backlogeja on yksi, Sprint backlog sensijaan on jokaisella tiimillä oma. Kaikki tiimit työstävät sprintin aikana samaa ohjelmistoa, _potentially shippable product icremet_ eli sprintin tuotoksena oleva ohjelmiston valmiiksi asti tehty laajennus on kaikille tiimeille sama.

![]({{ "/images/5-6.png" | absolute_url }}){:height="350px" }

Sprintin suunnittelu eli sprint planning on normaalista Scrumista poiketen kaksiosainen.

Ensimmäisessä osassa product owner ja kaikkien tiimien edustajat valitsevat product backlogilta eri tiimille seuraavan sprintin aikana toteutettavan user storyt.

Suunnittelun toinen osa on tiimikohtainen. Kukin tiimi muodostaa oman sprint backlogin, joiden avulla sprintin sisäinen toiminta hallitaan normaalin Scrumin tapaan. Tarpeen vaatiessa tosin useampikin tiimi voi toimia sprintin aikana synkroonissa, käyttäen yhteistä sprint backlogia.
 
![]({{ "/images/5-7.png" | absolute_url }}){:height="350px" }

Kaikkien tiimien yhteinen aikaansaannos (one shippable product increment) katselmoidaan yhdessä. Retrospektiivi taas on kaksitasoinen, ensin pidetään normaalin Scrumin tapaan tiimikohtainen retrospektiivi ja tämän jälkeen koko tuotteen valmistusprosessia tarkasteleva overall-retrospektiivi, missä on edustus kaikista tiimeistä ja mahdollisesti yrityksen johdosta.

![]({{ "/images/5-8.png" | absolute_url }}){:height="350px" }

#### Muu tiimien välinen koordinointi

Kaikille tiimeille yhteisen sprintin suunnittelun ensimmäisen osan, Sprint reviewin ja overall-retrospektiivin lisäksi LeSS ei edellytä muita tiimien väliseen koordinaatioon tarkoitettuja yhteisiä tapaamisia vaan toteaa että tiimit päättävät keskenään miten koordinaatio tapahtuu.

LeSS antaa joukon aiheeseen liittyviä ohjeita ja suosituksia:
- prefer decentralized and informal coordination over centralized coordination
- Emphasize _just talk_ and informal networks via communicate in code, cross-team meetings, component mentors, travelers, scouts, and open spaces

Periaate _just talk_ korostaa suoran kommunikoinnin tärkeyttä, _communicate in code_ tarkoittaa ryhmien välistä työskentelyä helpottava ohjelmointitapaa, esimerkiksi. yhteisiä koodikäytänteitä ja jatkuvaa integraatiota. _Scouteilla_ tarkoitetaan muiden tiimien daily scrumissa vierailemista.

LeSS mainitsee myös Scrum of Scrums -palaverit yhtenä mahdollisena tiimienvälisen koordinoinnin muotona, mutta suosittelee mielummin informaalimpia kommunikaation muotoja.

#### Backlogin ylläpito

Scrum olettaa, että noin 5-10% sprintin työskentelystä käytetään backlog groomingiin, jonka tarkoituksena siis pitää backlog [DEEP](/linkki_deep):inä. Toisin kuin Scrum, LeSS kiinnittää eksplisiittisesti huomioita backlogin ylläpitämiseen ja antaa aiheeseen liittyvää ohjeistusta.

Product owner on vastuussa backlogista, ja hoitaa kaiken priorisoinnin. Backlogin ylläpidossa (grooming/refinement) tulee olla mukana myös kaikkien tiimien sekä sovelluksen eri sidosryhmien. Oletusarvoisesti kukin tiimi hoitaa niiden storyjen tarkentamista mitkä tiimi tulee todennäköisesti toteuttamaan. Tarpeen mukaan tiimit kuitenkin järjestävät yhteisiä backlogin groomaustilaisuuksia tarkastellessaan toisiinsa läheisesti liittyvien storyjen tarkennusta tai miettiessään sovelluksen kehityksen suurempiin linjauksiin, esimerkiksi arkkitehtuuriin vaikuttavia asioita.

LeSS kannustaa kehittäjätiimejä kommunikoimaan mahdollisimman suoraan asiakkaiden tai loppukäyttäjien kanssa.
 
#### LeSS huge

Jos tiimien määrä on suurempi kuin kahdeksan, suositellaan käytettäväksi _LeSS huge_ -versiota. Edelleen oletataan että kehitettävänä on ainoastaan yksi tuote, jolla on yksi product backlog sekä yksi vastuunalainen product owner.

Backlog kuitenkin jaetaan nyt _vaatimusalueisiin_ (engl. requirement area), joista jokaiselle on siitä vastuun kantava _area product owner_. Area product ownerit muodostavat tuotteen kokonaisuutta hallinnoiva _product owner -tiimin_, joka toimii koko tuotteen product ownerin johdolla.

![]({{ "/images/5-9.png" | absolute_url }}){:height="380px" }

#### LeSS vs SAFe

On erittäin mielenkiintoista että molemmat SAFe® ja LeSS ovat pitkälti syntyneet Suomessa ja Nokialla. Nokian organisaatiorakenteen takia Nokia Mobile Phonesin (NMP) ja Nokia Siemens Networksin (NSN) ohjelmistokehitystapa oli kuitenkin täysin erilainen, ja 
SAFe® (NMP) ja LeSS (NSN) ovat samoista taustaperiaatteistaan ja yhteisestä syntykonsernista huolimatta hyvin erilaisia menetelmiä.

Molempien menetelmien kanssa työskennelleiden konsulttien Aki Tikka ja Ran Nyman kirjoittama [menetelmien vertailu](https://gosei.fi/blog/less-safe-comparison/) kannattaa lukea.

Kuten aiemmin todettiin SAFe® on suosittu yritysjohdon keskuudessa, mutta saanut paljon kritiikkiä arvovaltaistenkin ketterän kehityksen edustajien toimesta, en myöskään itse ole kuullut kenenkään sovelluskehittäjän kehuvan SAFe®:a.

En tiedä kuvastaako se mitään menetelmien pitkän tähtäimen toimivuudesta, mutta SAFe:n kotia Nokia Mobile Phonesia ei enää ole olemassakaan, Nokia (Siemens) Networks taas on nykyinen Nokia ja soveltaa edelleen LeSS-menetelmää.

## Ketterien menetelmien käyttö ja hyödyt tutkimuksen valossa

Tehdään vielä kurssin lopussa nopea katsaus ketterien menetelmien käytöön ja hyödyllisyytteen liittyvään tutkimukseen.

### Miten laajasti ketteriä mentelemiä käytetään

Internetistä löytyy melko paljon erilaisia kyselytytkimuksia, jotka kartoittavan ketterien menetelmien käytön yleisyyttä. 

Max Steinmetz [artikkeli vuodelta 2018](https://www.targetprocess.com/blog/agile-statistics/) referoi useampaa eri kyselytytkimusta, joista löytyy erilaisia lukemia, mm. [Project Management Instituten](https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf) kyselyn 46% ja [Stack owerflowin](https://insights.stackoverflow.com/survey/2018#development-practices) yli sadan tuhannen vastaajan kyselyn lukema 85.9%. 

Googlailemalla löytyy runsaasti lisää erilaisia kyselyjä, ja kaikissa ketteryyden käyttöaste sijoittuu suunilleen näiden kahden prosentin väliin, useimmiten reilusti viiden kymmenen yläpuolelle.

Valtaosa internetissä olevista kyselyistä ei täytä tieteellisen tutkimuksen kriteerejä, niiden tutkimusotokset eivät ole välttämättä kattavia ja tutkimusmetodologiakin voi olla kyseenlalainen. Osa tutkimusten tekijöistä on kaupallisia toimijoita joiden intressinä saattaa olla itselleen suosiollisten tulosten julkaisu.

Aiheesta on tehty myös jonkun verran tieteellistä tutkimusta. Oulun yliopiston tutkijoiden artikkelin [Survey on Agile and Lean usage in Finnish software industry](http://esem.cs.lth.se/industry_public/Rodriguezetal_ESEM2012_IndustryTrack_1_0.pdf) mukaan 58% tutkimukseen osallistuneista 200 yrityksestä ilmoitti käyttäänsä ketteriä tai lean-menetelmiä ohjelmistokehityksessä.

Loppuvuodesta 2016 julkaistussa Brasiliassa, Suomessa ja Uudessa Seelannissa tehdyssä tutkimuksessa [Adoption and Suitability of Software Development Methods and Practices](https://ieeexplore.ieee.org/document/7890614/) päädyttiin seuraaviin lukuihineri  menetelmien käytön osalta
- Scrum 71.2%
- Kanban 49.5% 
- Lean 39.7%
- Waterfall 35.3%

Helsingin yliopiston ja Nitorin loppuvuodesta 2018 tekemän [selvityksen mukaan](https://www.nitor.com/fi/uutiset-ja-blogi/nitor-ja-helsingin-yliopisto-selvittivat-suomalaisyritykset-ketteryyden-edellakavijoita2)
ainoastaan 5.9 % vastaajista ilmoitti että ketterät menetelmät eivät ole yrityksessä ollenkaan käytössä:

![]({{ "/images/5-9a.png" | absolute_url }}){:height="300px" }

Kuten lukemat osoittavat, ketterä kehitys valtaa alaa. Sama trendi on näkyvissä Yhdysvaltojen hallituksen alaisissa ohjelmistoprojekteissa, joissa hitaan liikkeellelähdön jälkeen [agile on noussut](https://www2.deloitte.com/insights/us/en/industry/public-sector/agile-in-government-by-the-numbers.html) dominoivaan asemaan

![]({{ "/images/5-10.png" | absolute_url }}){:height="300px" }

### State of Agile -raportti
 
Jo 13 vuoden ajan ilmestynyt [State of Agile](https://www.stateofagile.com) -raportti tarjoaa paljon mielenkiintoista tilastotietoa ketterien menetelmien käytöstä. Raportin mukaan Scrum dominoi ketterien menetelmien kenttää.

![]({{ "/images/5-11.png" | absolute_url }}){:height="300px" }

Scrumia ja sen johdannaisia käyttää siis 74 % vastaajista. Extreme programmingin (eli XP) osuus on enää mariginaalinen 1%. 

Ketterien projektinhallintakäytänteiden osuus näytti seuraavalta:

![]({{ "/images/5-12.png" | absolute_url }}){:height="400px" }

_Daily standup_ -palaverit on edellisten vuosien tapaan kärjessä. Ketterien teknisten käytänteiden osalta tilanne näyttää seuraavalta:

![]({{ "/images/5-13.png" | absolute_url }}){:height="300px" }

Lista on osin hieman yllättävä, voisi esimerkiksi olettaa että jatkuva integrointi olisi nykyään lähes kaikkialla käytössä, mutta ainoastaan 53% ilmoittaa käyttävänsä sitä.
 
### Toimiiko ketterä ohjelmistokehitys

Ohjelmistoprojektin hallinnointimenetelmistä tutkimusta tekevä [Standish Group](https://www.standishgroup.com/) on julkaisuut vuodesta 1995 alkaen ohjelmistoprojektien onnistumisen astetta kartoittaava _Chaos Raportia_.

Raportti jakaa projektit onnistumisen suhteen kolmeen ryhmään:
- _successful_, projekti on onnistunut jos se valmistuu aikataulussa, budjetoituun hintaan ja suunnitellussa laajuudessa
- _challenged_, projektin onnistuminen on vaarantunut jos jos jokin onnistumisen komponenteista _aikataulu, budjetti, laajuus_ ei ole toteutunut, esimerkiksi jos sovellus on valmistunut aikataulussa, pystyy budjetin puitteissa, mutta kaikkea suunniteltua toiminnallisuutta ei ole toteutettu 
- _failed_, projekti on epäonnistunut jos se ei valmitu, tai sitä ei oteta koskaan käyttöön

Vuoden 2018 raportissa projektien onnistumisenaste näyttää seuraavalta:

![]({{ "/images/5-14.png" | absolute_url }}){:height="150px" }

Projektin koolla on itseasiasa todella suuri merkitys onnistumisen kannalta. Jos tarkastelussa otetaan huomioon projektin koko, on onnistumisprosentti seuraavanlainen:

![]({{ "/images/5-15.png" | absolute_url }}){:height="220px" }

Ketterät menetelmät näyttävät siis toimivan vesiputousmallia paremmin projektin koosta riippumatta, mutta ero kasvaa mitä suuremmasta projektista on kyse.

[State of Agile](https://www.stateofagile.com) -raportti erittelee tarkemmin ketteryydellä saavutettuja hyötyjä:

![]({{ "/images/5-16.png" | absolute_url }}){:height="400px" }

### Johtopäätöksiä

Evidenssiä ketterien menetelmien toimimisesta siis on. Näyttö ei kuitenkaan ole täysin kiistatonta, sillä kaikki edereferoidut tutkimukset ovat kyselytutkimuksia, joissa käsitteistöä ei ole välttämättä kunnolla määritelty (esim. mitä ketteryydellä tai projektin onnistumisella tarkoitetaan) ja kyselyyn osallistuneet eivät välttämättä edusta tasaisesti koko populaatiota. Kaikkien kyselyjen tekijät eivät myöskääm puolueettomia menetelmien suhteen, esim. State of Agile -raporttia tuottava [CollabNet/VersionOne](https://www.collab.net/) ketteriä projektinhallintatyökaluja tuottava yritys. Tutkimusten validiteetti siis on hieman kyseenalainen.

Ketteristä menetelmistä on tehty myös runsaasti akateemista tutkimusta, kahteen näistä  viitattiinkin edellä tekstissä. Akateemisenkin tutkimuksen systemaattisuus, laatu ja tulosten yleistettävyys vaihtelee. Osa akateemisesta tutkimuksesta, esim. edellä viitatut ketterien menetelmien käytön yleisyyttä kartoittaneet tuktimukst on tehty kyselytytkimuksena. 

On myös tutkimuksia joissa rajaudutaan yksittäisten tekniikoiden, esim TDD:n, pariohjelmoinnin hyötyjen mittaamiseen tai jatkuvan integraation hyötyjen mittaamiseen ja kartoittamiseen. Ohjelmistotuotannossa on kuitenkin liian paljon muuttujia, jotta jonkin yksittäisen tekijän vaikutusta voitaisiin täysin vakuuttavasti mitata empiirisesti. Menetelmiä soveltavat kuitenkin aina ihmiset, ja mittaustulos yhdellä ohjelmistotiimillä ei välttämättä yleisty mihinkään muihin olosuhteisiin.