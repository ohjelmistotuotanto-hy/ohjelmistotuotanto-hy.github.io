---
layout: page
title: Osa 5
title_long: 'Lean, ketterän ohjelmistokehityksen skaalaaminen ja ketterä ohjelmistokehitys tutkimuksen valossa'
inheader: yes
permalink: /osa5/
---

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
  />
</a>

{% include miniproj_ilmo.md %}

Kurssin viidennellä viikolla käsitellään kolmea aihetta, ketterään ohjelmistokehitykseen paljon vaikutteita antanutta Lean-filosofiaa, ketterien menetelmien skaalaamista suurempiin projekteihin sekä erilaisia tilasto- ja tutkimustietoa ketterien menetelmien käytöstä ja hyödyistä.

## Typoja materiaalissa

{% include typo_instructions.md path="/osa5.md" %}

{% include norppa.md %}

## Lean

Kurssin aikana on jo muutamaan kertaan sivuttu käsitettä _Lean_, katsotaan nyt hieman tarkemmin mistä on kysymys.

### Taustaa

Lean on kotoisin Toyotan tuotannon ja tuotekehityksen menetelmistä, ja sen synty on jäljitettävissä 1900-luvun alkupuoliskolle.

Toisen maailmansodan jälkeen Japanissa oli suuri jälleenrakennusbuumi, mutta pääomaa ja raaka-aineita oli saatavissa niukalti. Havaittiin, että laadun parantaminen nostaa tuottavuutta: mitä vähemmän tuotteissa ja tuotantoprosesseissa on virheitä ja ongelmia, sitä enemmän tuottavuus kasvaa, ja se taas johtaa markkinaosuuden kasvuun ja sitä kautta uusiin työmahdollisuuksiin. Japanilaisiin yrityksiin muodostui vahva laatua korostava kulttuuri.

Resurssien niukkuus johti siihen, että Toyota kehitti ns. [_Just In Time (JIT)_](https://fi.wikipedia.org/wiki/Just-in-time) -tuotantomallin, missä ideaalina on aloittaa tuotteen valmistaminen vasta kun ostaja on jo tilannut tuotteen. Vastakohtana tälle on perinteinen [massatuotanto](https://fi.wikipedia.org/wiki/Massatuotanto), missä tuotteita valmistetaan etukäteen suuret määrät varastoon. Pyrkimys oli saada tuote tilauksen jälkeen mahdollisimman nopeasti kuluttajalle, eli haluttiin mahdollisimman lyhyt _läpimenoaika_ (engl. lead time) tilauksesta toimitukseen.

JIT-tuotantomalli toi monia hyötyjä. Asiakkaiden muuttuviin tarpeisiin oli helppo valmistautua toisin kuin massatuotannossa, missä varastoon tehdyt tuotteet oli saatava myydyksi vaikka ne eivät olisi enää asiakkaan mieleen. Koska tuotteen läpimenoaika tilauksesta asiakkaalle oli lyhyt, laatuongelmat paljastuivat nopeasti,
toisin kuin mahdollisesti kuukausia varastossa olevilla tuotteilla.

Amerikassa ja Euroopassa oli tuohon aikaan vallalla JIT:lle päinvastaiseen periaatteeseen perustuva massatuotanto. Sen tunnetuin esimerkki on Henry Fordin vuonna 1913 käyttöön ottama liukuhihna, jolla valmistettiin Ford T -mallia: työ pilkottiin pieniin, toistuviin vaiheisiin, ja valtavilla sarjoilla yhden auton valmistuskustannukset saatiin painettua murto-osaan aiemmasta.

Massatuotanto pyrki optimoimaan yksittäisten työntekijöiden ja koneiden työpanosta, ideaalina että koneiden käyttöaste on koko ajan 100%. Toyotan JIT-tuotantomallissa optimoinnin kohteeksi taas tuli tuotteen läpimenoaika. Pyrkimyksenä oli eliminoida kaikki mahdollinen _hukka_ (engl. waste), joka ei edesauttanut työn, eli tuotannon alla olevan tuotteen, nopeaa _virtaamista_ (engl. flow) tilauksesta asiakkaalle. Virtausta haittaaviin tekijöihin, esim. laatuongelmiin tai epäoptimaalisiin työtapoihin puututtiin heti.

Perinteisestä massatuotannosta poiketen Toyota myös omaksui työntekijöitä kunnioittavan, kuuntelevan ja _vastuuttavan_ (engl. empowering) tuotannon optimoimisen kulttuurin. Tärkeäksi periaatteeksi tuli koko henkilöstön tasolla tapahtuva toiminta- ja työskentelytapojen jatkuva parantaminen. Käytännössä jokainen työntekijä oli oikeutettu ja jopa velvollinen vaikka pysäyttämään koko tuotantolinjan heti havaitessaan ongelmia.

#### Toyota production system, TPS

Vuodesta 1965 alkaen Toyota alkoi kutsua toimintatapaansa [Toyota Production Systemiksi](https://global.toyota/en/company/vision-and-philosophy/production-system/) (TPS). Ensimmäiset englanninkieliset julkaisut aiheesta ovat vuodelta 1977. Toyotan menestys herätti kiinnostusta länsimaissa ja [MIT](https://fi.wikipedia.org/wiki/Massachusetts_Institute_of_Technology):in tutkijat alkoivat 1980-luvun lopussa kartoittamaan ja dokumentoimaan tarkemmin Toyotan tuotantojärjestelmää. Yksi heistä, John Krafcik, lanseerasi vuonna 1988 artikkelissaan _Triumph of the Lean Production System_ nimikkeen _lean_- eli virtaviivainen tuotanto kuvaamaan TPS:n taustafilosofiaa.

Vuonna 1990 ilmestyi kirja [The Machine That Changed the World](<https://en.wikipedia.org/wiki/The_Machine_That_Changed_the_World_(book)>), joka toi leanin laajempaan länsimaalaiseen tietoisuuteen.

Viimeisen 30 vuoden aikana on ilmestynyt suuri määrä kirjoja, jotka kuvaavat Toyotan tuotantojärjestelmää, eräs kuuluisimmista ja vaikutusvaltaisimmista näistä on [Jeffrey Likerin The Toyota Way](https://www.amazon.com/Toyota-Way-Management-Principles-Manufacturer/dp/0071392319) (2004).

Alun perin lean oli Toyotalla autojen _tuotantoa_ (engl. production) optimoiva toimintatapa, sittemmin leania on ruvettu hyödyntämään myös _tuotekehityksessä_ (engl. development). Tuotanto ja tuotekehitys ovat luonteeltaan hyvin erilaisia ja niihin sovellettavat lean-käytänteet eroavat monin paikoin.

Leania on sovellettu lukuisille eri aloille, ohjelmistotuotantoon sen lanseerasi 2003 ilmestynyt Mary ja Tom Poppendieckin kirja [Lean software development, an agile toolkit](https://www.amazon.com/Lean-Software-Development-Agile-Toolkit/dp/0321150783). Klassikon asemastaan huolimatta kirja on paikoin vanhentunut ja tulkitsee leania osin melko suppeasti. Myös Scrumin kehittäjät Ken Schwaber ja Jeff Sutherland tunsivat hyvin lean-ajattelun, ja monet Scrumin piirteet ovat saaneet vaikutteita leanista.

Leania on ruvettu soveltamaan yhä useampiin asioihin, aina terveydenhoidosta leipomoihin ja pankkitoimintaan, myös julkishallinnossa ja yliopistoissa. Lean tai mitä erilaisimmat lean-nimikkeen alla myytävät asiat ovatkin alkaneet elää omaa, Toyota production systemistä erillistä elämäänsä, ja nykyään on välillä vaikea sanoa tarkemmin, mistä on kyse, kun joku puhuu leanista.

Käsittelemme seuraavassa leania tarkemmin Craig Larmanin ja Bas Vodden mainioon kirjaan [Scaling Lean and Agile Development](https://www.amazon.com/Scaling-Lean-Agile-Development-Organizational/dp/0321480961) perustuen. Kirjan leania esittelevä luku on kaikkien luettavissa [täällä](https://www.leanprimer.com/downloads/lean_primer.pdf). Luku esittelee nimenomaan Toyota production systemin modernia muotoa.

### Leanin tavoitteet, perusta ja peruspilarit

Leania havainnollistetaan useissa lähteissä _lean thinking houseksi_ nimitettävänä kaaviona:

![]({{ "/images/5-1.png" | relative_url }}){:height="550px" }

Leanilla on "talon ylimpänä kerroksena" sijaitseva _tavoite_ (engl. goal), _perusta_ (engl. foundation), kaksi _peruspilaria_ ja joukko näitä tukevia _periaatteita_ (14 principles ja product development -periaatteet). Näiden lisäksi on olemassa joukko leania tukevia työkaluja, joista kuuluisin lienee kurssinkin aikana mainittu Kanban.

Leanin tavoitteena on _saada aikaan pysyvä nopea tapa edetä "ideasta asiakkaalle myytyyn tuotteeseen" siten, että tämä tapahtuu työntekijöitä ja yhteistyökumppaneita riistämättä, ylläpitäen korkea laatutaso ja asiakastyytyväisyys._

Jotta tavoite olisi mahdollinen, tulee taustalla olla syvälle yrityksen kaikille tasoille juurtunut pitkän tähtäimen hyötyihin tähtäävä lean-toimintatapa, jota johtajat soveltavat ja opettavat alaisille. Tätä nimitetään _leanin perustaksi_.

Leanin kaksi peruspilaria ovat _jatkuva parantaminen_ (engl. continuous improvement) ja _ihmisten kunnioittaminen_ (engl. respect for people).

_Jatkuva parantaminen_ määrittelee pohjimmiltaan koko Toyotan toimintakulttuurin, jonka ytimessä on halukkuus oppia ja kannustava ilmapiiri muutosten tekemiselle. Toyotan pääjohtajana vuosina 2005–2009 toiminut Katsuaki Watanabe kiteyttää asian seuraavasti:

> _The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, "Why are we doing this?"._

Jatkuvaan oppimiseen ja toiminnan parantamiseen kannustava ilmapiiri taas on mahdollista ainoastaan, jos kaikki toiminta perustuu _ihmisten kunnioittamiseen_. Joka taas tarkoittaa monia konkreettisia asioita, esim. työntekijöiden kuuntelemista, vastuuttamista ja mentorointia, työympäristön mielekkyyttä ja turvallisuutta. Toyota laajentaa periaatteen kattamaan myös alihankkijat ja loppuasiakkaat, esimerkiksi alihankkijoiden kanssa Toyota rakentaa aitoja partneriuksia, joista molemmat hyötyvät sekä opettaa alihankkijoille lean-ajattelua.

Kaikki tämä kuulostaa abstraktilta, ja asia toivon mukaan konkretisoituu hieman kun käsittelemme hetken päästä leanin tavoitteeseen ja peruspilareihin nojaavia _lean-periaatteita_ (engl. lean principles), jotka ohjaavat konkreettisemmin leania toimintaa.

### Jatkuva parantaminen – arvo ja hukka

Toyota production systemin kehittäjä [Taiichi Ohno](https://en.wikipedia.org/wiki/Taiichi_Ohno) kuvaa jatkuvan parantamisen periaatetta seuraavasti:

> All we are doing is looking at the time line, from the moment the customer gives us an order to the point where we collect the cash. And we are reducing the time line by reducing the non-value-adding wastes.

Ohnon mukaan keino päästä nopeampaan tuotantosykliin on siis eliminoida _arvoa_ (engl. value) tuottamattomia asioita eli _hukkaa_ (engl. waste).

Mitä lean tarkalleen ottaen tarkoittaa arvolla ja hukalla? Arvolla tarkoitetaan niitä asioita ja työnteon vaiheita, mistä asiakas on valmis maksamaan, eli mitkä tuottavat asiakkaalle hyötyä. Hukalla taas tarkoitetaan kaikkea tuotantoon liittyvää, joka ei tuo suoraa tai välillistä arvoa asiakkaalle.

Leanin mukaan on olemassa kolmen eri tyypin hukkaa: muri, mura ja muda.

Käsitellään ensin näistä selkeintä eli _muda_-tyyppistä hukkaa. Lean tunnistaa alunperin 7 lähdettä muda-hukalle:

- ylituotanto (engl. over production)
- välivarastointi (engl. in-process inventory)
- liikatyö (engl. over/extra processing)
- tarpeeton siirtely (engl. transportation)
- tarpeeton liikkuminen (engl. motion)
- odotus (engl. waiting)
- viat (engl. defects)

Alunperin nämä ovat olleet autojen valmistuksen tuotantolinjaan liittyvää hukkaa, avataan nyt käsitteitä tulkitsemalla ne samalla ohjelmistokehityksen kontekstiin.

#### Ylituotanto (engl. over production)

Tuotteita tulee valmistaa ainoastaan siinä määrin, mitä asiakas on niitä tilannut, eli ei kannata tehdä varastoon. Varastoon tehdyt tuotteet ovat monella tapaa ongelmallisia. Ne syövät pääomaa ja saattavat myös sisältää systemaattisia vikoja, jotka huomataan vasta kun tuotteet otetaan käyttöön.

Ohjelmistojen ylimääräisten toiminnallisuuksien voidaan ajatella olevan ylituotantoa. Usein toistetun väitteen mukaan jopa [64 % ohjelmistojen toiminnallisuuksista](https://www.mountaingoatsoftware.com/agile/are-64-of-features-really-rarely-or-never-used) on joko ei ollenkaan tai ainoastaan erittäin harvoin käytettyjä. Luku on peräisin Standish Groupin Jim Johnsonin esitelmästä vuodelta 2002, ja se perustui vain neljään yritysten sisäiseen sovellukseen, joten sitä ei kannata yleistää. Ilmiö on kuitenkin tuttu: merkittävä osa toteutetuista ominaisuuksista jää vähälle käytölle. Ylimääräisten toiminnallisuuksien toteuttaminen maksaa sekä kasvattaa koodin määrää, ja tämä taas tekee jatkokehityksen hankalammaksi.

#### Välivarastointi (engl. in-process inventory)

Tähän kategoriaan kuuluu osittain tehty työ ja sen säilöminen, eli esim. komponentit joille ei vielä ole käyttöä. Ongelmat ovat samat kuin ylituotannossa.

Ohjelmistokehityksessä välivarastointia ovat esim. liian tarkkaan tehty vaatimusmäärittely sellaisille ominaisuuksille, joita ei vielä hetkeen toteuteta, valmis koodi jota ei ole vielä testattu tai otettu käyttöön tai koodi, joka toteuttaa asiakkaan _ehkä_ joskus tulevaisuudessa haluamia toiminnallisuuksia. Tekoälyavusteisessa ohjelmistokehityksessä uudenlaista välivarastoa ovat pull requestit, joita koodausagentit tuottavat nopeammin kuin tiimi ehtii niitä katselmoida, ks. [Tekoäly ja ohjelmistotuotantoprosessi](/genai/#tekoäly-ja-ohjelmistotuotantoprosessi).

#### Liikatyö (engl. over/extra processing)

Kaikki ylimääräiset työvaiheet, mitkä eivät ole välttämättömiä riittävän laadukkaaseen lopputulokseen ovat myös hukkaa.

Tällaisia ovat esimerkiksi prosessin pakottamat työvaiheet, joilla ei kuitenkaan ole lopputuloksen kanssa merkitystä, esim. pakolliseksi määritelty suunnitteludokumentti, jota kukaan ei lopulta tarvitse. Vastaavanlainen haitallinen asia voi olla vaatimus siitä että testien rivikattavuuden on pakko olla 100%, sillä tämä voi johtaa lähes hyödyttömien, pelkästään kattavuutta lisäävien testien tekemiseen.

Liian hyvällä laadulla tehty koodi voidaan myös tulkita joissain tapauksissa liikatyöksi. Jos esim. ollaan tekemässä jonkin ominaisuuden hyödyllisyyttä validoivaa MVP:tä ([ks. osa 2](/osa2/#kokeileva-vaatimusmäärittely-lean-startup)), kannattaa toteutus tehdä normaalia tuotantokoodia heikommalla laadulla, ja esim. automatisoitu testaus voidaan jättää tekemättä. MVP:tä toteutettaessa kannattaa siis useimmiten ottaa [teknistä velkaa](/osa4/#tekninen-velka), joka sitten saatetaan joutua maksamaan takaisin jos MVP:n toteuttama ominaisuus päätetään jättää järjestelmään.

#### Tarpeeton materiaalin siirtely (engl. transportation)

Tuotteen tekemiseen tarvittavia raaka-aineita tai osittain valmista tuotetta ei tulisi joutua siirtelemään tarpeettomasti paikasta toiseen.

Ohjelmistokehityksen kontekstissa tämä tarkoittaa että kehitettävä ohjelmisto tulisi määritellä, suunnitella, toteuttaa, testata ja viedä tuotantoon yhden tiimin toimesta. Eli ns. "handoff", missä esimerkiksi toteutettu ohjelmisto annetaan kehittäjätiimistä erillisen tiimin (esim. QA-tiimi) testattavaksi ajatellaan hukkana.

#### Työntekijöiden tarpeeton liikkuminen (engl. motion)

Tuotantovälineet ja materiaalit tulisi järjestää siten, että työntekijöiden ei tarvitse tehdä ylimääräisiä liikkeitä tai kulkea työpisteiden välillä tuotteen valmistamisen aikana.

Ohjelmistokehityksessä tarpeettomaksi liikkumiseksi on ajateltu _task switching_ eli liian nopea vaihtelu eri työtehtävien välillä, esim. työskentely yhtä aikaa monessa projektissa.

#### Turha odotus (engl. waiting)

Turhaa odotusta on esimerkiksi aika, joka joudutaan odottamaan, että tarpeelliset raaka-aineet saapuvat, tai että jokin tuotantoväline vapautuu muusta käytöstä.

Ohjelmistokehityksen kontekstissa turhaa odotusta on, kun joudutaan odottamaan, että yrityksen johto hyväksyy vaatimusmäärittelyn, testaajat ehtivät testaamaan ohjelman uuden version, ylläpito vie sovelluksen uuden version tuotantoon, joku mergeää pull requestin...

#### Viat (engl. defects)

Jos tuotantolinjan aiheuttamaa systemaattista vikaa ei huomata ajoissa, ehditään viallisia tuotteita/komponentteja ehkä valmistamaan suuret määrät. Vielä pahempaa on, jos viallisia tuotteita pääsee kuluttajille asti. Niiden korvaaminen tai korjaaminen on kallista, ja imagolle aiheutunut haitta potentiaalisesti suuri. Jos vikoja tulee, onkin oleellista havaita ja korjata ne mahdollisimman nopeasti.

Ohjelmistokehityksessä tuotteeseen tulee lähes väistämättä vikoja, ja on kustannustehokasta suorittaa laadunhallinta niin aikaisessa vaiheessa kuin mahdollista.

Nämä alkuperäiset vuosikymmeniä sitten autonvalmistuksen kontekstiin sovitetut 7 muda-hukkaa on tulkittu uudelleen yhä uusiin konteksteihin, kuten ohjelmistokehitykseen.

Vuosien varrella on ehdotettu myös uusia hukan muotoja, näistä eräs _ihmisten potentiaalin alihyödyntäminen_ on jossain määrin jo vakiintunut. Englanniksi tätä hukan muotoa kuvaillaan seuraavasti _Under-realizing people’s potential and varied skill, insight, ideas, suggestion._

#### Muri- ja mura-tyyppinen hukka

Edellä käsitelty _muda_-tyyppinen hukka eri muodoissaan on eniten esillä oleva leanin hukan muodoista, ja joissain lähteissä ei muita kahta hukkatyyppiä eli _muraa_ ja _muria_ välttämättä edes mainita.

_Mura_-tyyppinen hukka on epäsäännöllisyyttä tai epäyhdenmukaisuutta (engl. unevenness, non-uniformity, irregularity), työtavoissa tai työstettävässä tuotteessa.

Ohjelmistokehityksessä mura-tyyppistä hukkaa on esimerkiksi toteutettavien user storyjen suuresti vaihteleva koko. Oletetaan, että sprintin backlogissa on muutama päivän mittainen story sekä yksi niin iso story, että sen toteuttaminen vie kaksi viikkoa. Iso story valmistuu vasta sprintin viimeisinä päivinä, ja sen mukana tulee kerralla suuri pull request. Pienet storyt on katselmoitu ja testattu sitä mukaa kuin ne ovat valmistuneet, mutta iso pull request tuo katselmoitavaa ja testattavaa kerralla niin paljon, ettei tiimi ehdi käsitellä sitä ennen sprintin loppua.

Epätasaisuus synnyttää _muda_-tyyppistä hukkaa: valmis mutta katselmoimaton ja testaamaton koodi on välivarastoa, ja sen odottaessa vuoroaan syntyy turhaa odotusta. Lisäksi jonossa iso story pidättelee pieniä storyja, jotka olisi voitu viedä tuotantoon heti. Lopputuloksena aika, joka user storylta kuluu backlogiin lisäämisestä siihen, että ominaisuus on valmiina käyttäjien käytössä, pitenee ja muuttuu vaikeasti ennustettavaksi.

Kolmas hukan tyyppi _muri_ tarkoittaa ylikuormitusta tai mahdottomia vaatimuksia (engl. unreasonableness, impossible, too difficult). Autojen tuotantolinjaa ajatellessa, esim. koneiden käyttäminen 100% kapasiteetilla ilman säännöllistä huoltoa on luokiteltavissa muriksi. Ohjelmistokehitykseen tulkittuna muria voisivat olla esim. henkilöstön ylityöllistäminen. Muri-tyyppisen hukan, esim. henkilöstön ylikuormituksen seurauksena on todennäköisesti mudaa, eli tuotteeseen saattaa esimerkiksi syntyä vikoja.

Hukan tyypit kytkeytyvät usein toisiinsa. Edellisessä esimerkissä mura johti muriin: sprintin lopussa ylikuormittunut tiimi joutuu kiirehtimään, jolloin isoa pull requestia ei ehditä käydä huolellisesti läpi. Tämän seurauksena tuotantoon saattaa päätyä vikoja, eli syntyy taas _muda_-tyyppistä hukkaa. Juuri tämän takia lean painottaa työn tasaamista, mihin palataan [myöhemmin](#leanin-periaatteita) tässä osassa.

### Kaizen

Jatkuvassa parantamisessa on siis tarkoitus optimoida toimintaa eliminoimalla asiakkaalle arvoa tuottamatonta hukkaa. Jatkuvasta parantamisesta käytetään usein sen japaninkielistä nimitystä _kaizen_, joka on kaikkia työntekijöitä koskeva kattava toimintafilosofia:

> As a mindset, it suggests "My work is to do my work and to improve my work" and "continuously improve for its own sake."

Kaizen on myös konkreettinen tapa toimia:

- valitaan jokin tekniikka/työskentelytapa ja sitoudutaan sen suorittamiseen joksikin aikaa
- kun toiminta on stabiloitunut, tarkastellaan valitun työskentelytavan toimivuutta ja optimoidaan sitä havaittujen epäkohtien suhteen ja luodaan näin uusi työnteon standarditapa
- toistetaan tätä sykliä ikuisesti...

Kaizenin sykliseen parannusprosessiin liittyvät usein tasaisin väliajoin pidettävät tilaisuudet, eli "kaizen eventit". Scrumin retrospektiivit ovat klassinen esimerkki kaizen eventeistä.

#### Lean työkalu: value stream mapping

Hukan etsimiseen ja kartoittamiseen käytetään usein nimellä [value stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping) kulkevaa tekniikkaa. Ideana on kuvata tuotteen kulku käytetyn prosessin työvaiheiden läpi ja visualisoida tuotteelle arvoa tuottavat työvaiheet suhteessa tuotteen koko valmistuksen elinkaareen.

![]({{ "/images/5-2.png" | relative_url }})

Kuvassa on seitsemän työvaihetta, joiden läpi user story kulkee Scrumia noudattavassa tiimissä: product owner kirjoittaa storyn, se tarkennetaan backlog refinementissä ja otetaan sprinttiin sprint planningissa, minkä jälkeen se toteutetaan ja testataan, katselmoidaan pull requestina, QA-tiimi testaa sen staging-ympäristössä ja lopulta se viedään tuotantoon.

Kunkin työvaiheen alla oleva vihreä aika kertoo, kuinka paljon vaiheessa tehdään storyn kannalta arvoa tuottavaa työtä. Esimerkiksi vaihe _code & test_ vie 6 tuntia, mikä on välttämätöntä sen kannalta, että story ylipäätään saataisiin julkaistua. Punaisella merkityt ajat taas ovat hukkaa. Suurin osa siitä on odottamista: työvaiheiden välillä story on _välivarastossa_ odottamassa seuraavaa työvaihetta, ja kuvan yläreunan laatikot kertovat, mistä odotus johtuu. Pisimpään story odottaa product backlogissa, mutta myös sprinttirytmi, katselmoijan odottaminen, erillinen QA-tiimi ja julkaiseminen vain sprintin lopussa venyttävät odotusta. Myös osa työvaiheiden sisällä kuluvasta ajasta on hukkaa: merge-konfliktien selvittely on liikatyötä ja QA:n löytämien vikojen korjaaminen _viat_-tyyppistä hukkaa. Kumpaakaan ei juuri syntyisi, jos muutokset integroitaisiin pieninä paloina ja laatu varmistettaisiin jo toteutusvaiheessa.

Yhteensä storyyn tehdään arvoa tuottavaa työtä vajaat 8 tuntia, mutta siitä, kun story lisätään backlogiin, kuluu yli 5 viikkoa ennen kuin se on käyttäjien käytössä. Value stream mappingin avulla onkin tarkoitus tuoda esille kaikki "välivarastot", turhat odotukset ja tarpeettomat työvaiheet, jotta olisi mahdollista miettiä, miten niitä saataisiin minimoitua.

Value stream map on kertaluontoinen tilannekuva. Ajatusta on laajennettu ohjelmistokehityksen jatkuvaksi seurannaksi, josta käytetään nimitystä _value stream management_. Tunnetuin esimerkki on Mik Kerstenin kirjassa [Project to Product](https://itrevolution.com/product/project-to-product/) (2018) esitetty [Flow Framework](https://flowframework.org/). Jatkuva seuranta perustuu [osassa 2](/osa2/#yhtä-aikaa-tehtävän-työn-rajoittaminen) esiteltyihin flow-mittareihin, joiden arvot saadaan suoraan taskboardilta tai issue trackerista, kun jokaisesta storysta tiedetään, milloin se on siirtynyt vaiheesta toiseen. Kuvan esimerkissä mittarit olisivat seuraavat:

- _läpimenoaika_ (engl. cycle time) eli aika työn aloittamisesta sen valmistumiseen on noin 8,5 työpäivää, kun lasketaan code & test -vaiheen alusta tuotantoon
- _lead time_ eli aika siitä, kun story lisätään backlogiin, siihen, kun se on tuotannossa, on yli 5 viikkoa, ja asiakkaan kannalta merkitsevä on juuri tämä
- _virtauksen tehokkuus_ (engl. flow efficiency) eli arvoa tuottavan työn osuus kuluneesta ajasta on koko ketjussa noin 4 % ja pelkästään työn aloittamisesta laskien noin 10 %

Virtauksen tehokkuus kertoo, mihin parannukset kannattaa kohdistaa. Jos koodaaminen esimerkiksi tekoälyn avulla nopeutuisi puoleen, eli code & test -vaihe veisi 3 tuntia 6 tunnin sijaan, läpimenoaika lyhenisi vain noin 4 %. Jos taas pull request katselmoitaisiin samana päivänä ja tiimi testaisi ja julkaisisi storyn itse heti sen valmistuttua, läpimenoaika putoaisi 8,5 päivästä noin kahteen päivään. Value stream map ja flow-mittarit siis paljastavat, että hitaus johtuu harvoin itse työstä ja lähes aina odottamisesta.

#### Lean työkalu: perimmäisen syyn analyysi - five whys

Jos value stream mapping tai jokin muu menetelmä paljastaa tuotantoprosessista hukkaa, eli arvoa tuottamattomia asioita, pyritään niistä hankkiutumaan eroon. Jatkuvan parantamisen eli kaizenin ei kuitenkaan ole tarkoitus lääkitä pelkkää oiretta, vaan tehdä havaitulle hukalle _perimmäisen syyn analyysi_ (engl. root cause analysis) ja pyrkiä näin pysyvämpiin ja vaikuttavampiin parannuksiin.

Eräs root cause analysis -tekniikka on [five whys](https://en.wikipedia.org/wiki/Five_whys), minkä toimintaa on helpointa havainnollistaa esimerkillä.

Edellisessä kuvassa olevasta _value stream mapista_ havaitaan, että koodin valmistumisesta (code and test) menee 1.5 viikkoa sen tuotantoon saamiseen (deploy).

- **Miksi?** QA-osaston on vielä varmistettava, että koodi toimii staging-ympäristössä.
- **Miksi?** Ohjelmoijilla ei ole aikaa testata koodia itse staging-ympäristössä.
- **Miksi?** Ohjelmoijilla on kiire sprintin tavoitteena olevien user storyjen tekemisessä.
- **Miksi?** Edellisten sprinttien aikana tehtyjen storyjen bugikorjaukset vievät yllättävän paljon aikaa.
- **Miksi?** Laadunhallintaa ei ehditä koskaan tekemään kunnolla siinä sprintissä missä storyt toteutetaan.
- **Miksi?** Sprintteihin otetaan aina liian monta user storya.

Näin kysymällä toistuvasti (noin viisi kertaa) _miksi_ on mahdollista päästä ongelman perimmäisen syyn lähteille, eli sinne, mitä korjaamalla hukka saadaan toivon mukaan eliminoitua. Esimerkin kuusi miksi-kysymystä siis paljastaa ongelman perimmäiseksi syyksi sen, että _sprintteihin otetaan aina liian monta user storya_, eli hukan eliminoimiseksi on todennäköisesti parasta lähteä liikkeelle sprinttien työmäärän vähentämisellä.

Itseasiassa olisi ollut hyvä kysyä ainakin yksi _miksi_ lisää. Perimmäisen syyn kannalta oleellista on se, että minkä takia sprintteihin otetaan liikaa storyja. Johtuuko se kehitystiimistä itsestään vai tiimin ulkopuolisista voimista?

Perimmäistä syytä etsitään prosessista eikä yksittäisistä ihmisistä. Jos kysely päättyy vastaukseen "koska joku teki virheen" tai "koska joku sairastui", kannattaa kysyä vielä kerran, miksi prosessi salli tilanteen. Oletetaan esimerkiksi, että tiimin jäsen sairastuu ja hänen vastuullaan ollut työ jää kokonaan tekemättä. Sairastumista ei voi estää, mutta prosessin olisi pitänyt ohjata kertomaan poissaolosta heti. Silloin tiimi olisi voinut priorisoida työt uudelleen, ja vaikka jotain olisi silti jäänyt tekemättä, se olisi ollut vähiten tärkeä asia. Samaa periaatetta noudatetaan ohjelmistoalalla ns. syyllistämättömissä [jälkianalyyseissä](/osa3/#canary-release) (engl. [blameless postmortem](https://sre.google/sre-book/postmortem-culture/)), joissa tuotannon häiriöt käydään läpi syyllisiä etsimättä.

### Leanin periaatteita: pull-systeemi

Leanissa on siis tarkoituksena optimoida aikaa, joka kuluu tuotteen tilaamisesta sen asiakkaalle toimittamiseen. Arvo pyritään saamaan _virtaamaan_ (engl. flow) asiakkaalle ilman turhia viiveitä ja työvaiheita. Äsken esitelty value stream map siis visualisoi nimenomaan arvon virtausta.

Leanin mekanismi virtauksen optimointiin on _pull-systeemien_ (suomeksi imuohjaus) käyttö. Pull-systeemillä tarkoitetaan tuotannonohjaustapaa, jossa tuotteita, tai tuotteiden tarvitsemia komponentteja tehdään ainoastaan asiakkaan tilauksen niitä edellyttäessä. Tämän vastakohta on _push-systeemi_, missä tuotteita ja komponentteja tehdään etukäteen varastoon ja toivotaan sitten että tuotteet ja komponentit menevät kaupaksi.

Esimerkiksi pizzeriat toimivat pull-periaatteen mukaan, pizza valmistetaan vasta kun asiakas tilaa sen. Unicafe taas on push-systeemi, lounaita tehdään varastoon ja toivotaan että ne menevät kaupaksi asiakkaille.

Leanin taustaa käsitelleessä [luvussa](/osa5#taustaa) puhuttiin Just in time (JIT) -tuotantomallista. Käytännössä pull-systeemi on mekanismi JIT-tuotantomallin toteuttamiseen.

#### Kanban

Pull-systeemi toteutetaan usein [kanbanin](https://fi.wikipedia.org/wiki/Kanban) avulla. Japaninkielinen sana kanban tarkoittaa signaalikorttia, englanniksi "card you can see". Kanban toteuttaa _visuaalisen ohjauksen_, jonka avulla työntekijöiden on helppo tietää miten seuraavaksi tulee toimia.

Kun asiakas tilaa tuotteen, viedään tilausta vastaava kanban-kortti tehtaalle.
Jos tuotteen valmistaminen edellyttää esim. viittä eri komponenttia, "tilataan" komponentit niitä valmistavilta työpisteiltä viemällä niihin kunkin komponentin tilausta vastaava kanban-kortti. Jos komponenttien valmistus edellyttää jotain muita komponentteja, tilataan nekin samalla periaatteella. Kun komponentti on valmis, viedään se tilaajalle. Samalla kanban-kortti palautetaan tulevien tilauksien tekemistä varten.

Kanban-kortteja on käytössä vain rajallinen määrä. Tällä kontrolloidaan sitä, että liikaa työtä ei pääse kasautumaan mihinkään tuotannon vaiheeseen. Näin kanbanin avulla "vedetään" (pull) tarvittavat komponentit, sen sijaan että komponentteja olisi etukäteen valmistettu varalta suuret määrät varastoon.

![]({{ "/images/5-kanban-tehdas.png" | relative_url }})

Kuvassa kanban-kortit (oranssi katkoviiva) kulkevat asiakkaalta loppukokoonpanoon ja sieltä edelleen komponentteja, kuten moottoreita, valmistaville työpisteille, jotka puolestaan tilaavat tarvitsemansa osat, kuten männät, omilta työpisteiltään. Valmiit osat, komponentit ja lopulta valmis auto kulkevat korttien mukana takaisin kohti asiakasta. Jos esimerkiksi moottorikortteja on kiertämässä vain kolme, moottoreita voi olla kerrallaan valmistumassa korkeintaan kolme. Jos yhtään vapaata korttia ei ole, työpiste ei valmista mitään.

Kuten on jo mainittu välivarastoon tehdyt komponentit on eräs leanin hukan muoto. Varastoidut komponentit sitovat pääomaa, ja jos tilauksia ei tulisi tarpeeksi, niitä ei välttämättä tarvita koskaan. Välivarastointi saattaa myös viivästyttää vikojen ilmituloa: jos komponenteissa olisi valmistusvika, saattaisi kestää kauan kunnes vika paljastuisi ja viallisia komponentteja olisi ehkä ehditty valmistamaan varastoon suuret määrät.

Käytännössä pull-periaatteella toimiva tuotanto saattaa ylläpitää pieniä välivarastoja saadakseen tuotteen valmistamiseen kuluvan läpimenoaikaa optimoitua.

#### Kanban ohjelmistotuotannossa

Kanban on otettu laajalti käyttöön myös ketterässä ohjelmistokehityksessä, [osassa 2](/osa2/#yhtä-aikaa-tehtävän-työn-rajoittaminen) sivuttiin jo asiaa. Ohjelmistotuotannon kanban on periaatteiltaan hieman erilainen kuin perinteisessä tuotannossa käytetty kanban.

Toteutettavaa toiminnallisuutta, esim. user storyä tai jotain sen teknistä taskia vastaa kanban-kortti, joka kulkee eri työvaiheiden kautta.

Virtaus, eli yksittäisen storyn nopea valmistuminen saadaan aikaan rajoittamalla tietyissä työvaiheissa kesken olevan työn määrää asettamalla _work in progress_ (WIP) -rajoitteita.

Alla olevassa yksinkertaisessa kanban-taulussa on kolme työvaihetta, _analysis, development_ ja _test_, joille kullekin on asetettu WIP-rajoite:

![]({{ "/images/5-kanban-taulu.png" | relative_url }}){:width="550px" }

Toisin kuin tehtaan kanbanissa, kortit eivät kierrä takaisin. WIP-rajoite hoitaa saman tehtävän kuin korttien rajallinen määrä: työvaiheeseen saa vetää uuden storyn vain, jos siinä on tilaa. Kuvan tilanteessa sekä development (3/3) että test (2/2) ovat täynnä. Kun testaaja saa esimerkiksi _Tuotekuvat_-storyn testattua ja siirtää sen done-sarakkeeseen, testiin vapautuu paikka, ja sinne voidaan vetää yksi developmentissa valmistunut story. Vasta tämän jälkeen developmentiin vapautuu paikka, ja kehittäjä voi vetää _Tilaushistorian_ työn alle. Työ siis etenee taululla imuohjauksen periaatteella: uutta työtä aloitetaan vasta kun seuraava vaihe on vetänyt edellisen eteenpäin.

Taulun työvaiheita voidaan myös jakaa _doing_- ja _done_-osiin, ja vaiheiden väliin voidaan sijoittaa välivarastoja (engl. buffer). Seuraavassa kuvassa työvaiheiden _analysis, development, test_ väliin on sijoitettu välivarastot _dev ready_ ja _build ready_, joilla myös on WIP-rajoitteet.

![]({{ "/images/5-3.png" | relative_url }})

Kuvan tilanteessa testausvaihe ja sitä edeltävä build ready -välivarasto ovat täynnä. Valmiiksi koodattu _Haku_ ei siis pääse etenemään, eikä kehittäjien kannata aloittaa dev ready -välivarastossa odottavia storyja, vaan heidän kannattaa auttaa testauksessa. WIP-rajoitteet tekevät näin pullonkaulan näkyväksi samaan tapaan kuin [osan 2](/osa2/#scrumban) Scrumban-esimerkissä.

Kun WIP-rajat lasketaan yhteen (5 + 4 + 3 + 4 + 2 + 2), kuvan taululla voi olla release ready -sarakkeen lisäksi yhtä aikaa korkeintaan 20 user storya. Kun story etenee release ready -sarakkeeseen, vapautuu taululle taas kapasiteettia, ja product owner voi sijoittaa seuraavaksi toteutettavan storyn vaiheeseen _input queue_.

Kuvan kanban-taulun WIP-rajoitteet eivät ole kovin tiukat, eli kesken olevan työn määrä on aika suuri. Kun input queue jätetään laskuista pois, aloitettuja mutta keskeneräisiä storyja voi olla yhtä aikaa jopa 15 (4 + 3 + 4 + 2 + 2). Koska lean pitää kesken olevaa työtä hukkana (in process inventory), ei _arvon virtaus_ olekaan kuvan kanban-taululla kovin optimaalista. Pienentämällä WIP-rajoja ja poistamalla välivarastoja saattaisikin olla mahdollisuus optimoida _läpimenoaikaa_, eli sitä aikaa, joka kuluu kun user story "tilataan", siihen kun sen määrittelemä ominaisuus on valmis.

Leanin ideaalin mukaista olisi toteuttaa ns. _one piece flow_, eli toimia siten että user storyt tehtäisiin kokonaisuudessaan valmiiksi ennen seuraavan user storyn aloittamista. Monissa paikoissa sovelletaankin tätä periaatetta, mutta jos työ on organisoitu huonosti, periaate saattaa johtaa liian alhaiseen _utilisaatioon_. Käytännössä tämä tarkoittaa, että ohjelmistotiimin sisällä useat henkilöt joutuvat odottamaan toisten tekemisiä ennen kun he pystyvät jatkamaan omaa työtään. Tämän takia yhden storyn sijaan useimmissa tapauksissa tiimi työstää yhtä aikaa useampaa storyä. Eli sopivien WIP-rajoitteiden hakeminen vaatii aina tiimikohtaista harkintaa ja soveltamista.

### Leanin periaatteita

Jotta pull-järjestelmä toimisi hyvin, eli asiakkaan arvo virtaisi tasaisesti, eri työvaiheiden kestoon ei saisi liittyä liikaa vaihtelua. Tähän liittyy leanin periaate _level the work_ (jap. heijunka). Perustelu tulee jonoteoriasta: työvaiheen edessä olevan jonon pituus ja sitä kautta odotusaika kasvavat sitä suuremmiksi, mitä enemmän töiden koko ja saapumistahti vaihtelevat, vaikka keskimääräinen työmäärä pysyisi samana. Vaikutus voimistuu, mitä lähemmäs täyttä kapasiteettia työvaihe on kuormitettu. Kyse on siis _mura_-tyyppisestä hukasta, ja ohjelmistokehityksessä sen tyypillinen ilmentymä on user storyjen koon suuri vaihtelu, ks. [esimerkki](#muri--ja-mura-tyyppinen-hukka) aiemmin tässä osassa. Aihetta käsittelee tarkemmin Donald Reinertsenin kirja _The Principles of Product Development Flow_ (2009).

> Ilmiötä voi havainnollistaa esimerkillä. Oletetaan, että kehittäjiltä valmistuu testattavaksi yksi story joka aamu ja testaaja ehtii testata keskimäärin yhden storyn päivässä.
>
> Jos jokaisen storyn testaaminen vie tasan päivän, jokainen story pääsee testiin heti eikä jonoa synny.
>
> Oletetaan sitten, että storyjen koko vaihtelee: neljän storyn testaaminen vie puoli päivää ja joka viidennen kolme päivää. Testaamiseen kuluu edelleen keskimäärin päivä, mutta nyt jonoa syntyy. Ison storyn testaaminen pitää testaajan kiireisenä kolme päivää, ja sillä välin jonoon ehtii kertyä kaksi uutta storya. Pienet storyt testataan nopeasti, mutta jono purkautuu vasta muutaman päivän kuluttua, juuri ennen seuraavaa isoa storya. Keskimäärin story joutuu nyt odottamaan testiin pääsyä päivän, vaikka testaajan työmäärä on täsmälleen sama kuin ensimmäisessä tapauksessa.
>
> ![]({{ "/images/5-jono.png" | relative_url }}){:width="700px" }
>
> Kymmenessä päivässä valmistuu molemmissa tapauksissa kymmenen storya, eli tiimin läpimenonopeus on sama. Yksittäisen storyn kannalta tilanne on kuitenkin huonompi: storyn valmistumisesta sen testauksen päättymiseen kuluu keskimäärin kaksi päivää yhden sijaan, ja jonossa odottaa keskimäärin yksi testaamaton story, eli välivarastoa on syntynyt.
>
> Tämä on ongelma useasta syystä:
>
> - Asiakas saa jokaisen ominaisuuden keskimäärin päivää myöhemmin, vaikka kukaan ei tee työtään hitaammin. Leanissa optimoidaan juuri tätä aikaa, ei sitä, kuinka paljon työtä tiimi saa kaikkiaan tehtyä.
> - Palaute hidastuu. Jos testaaja löytää storysta vian, kehittäjä on ehtinyt siirtyä muihin töihin ja joutuu palauttamaan asian mieleensä, mikä on hitaampaa kuin heti tuoreeltaan korjaaminen.
> - Ennustettavuus heikkenee. Kun ensimmäisessä tapauksessa jokainen story on testattu päivän kuluttua valmistumisestaan, toisessa tapauksessa siihen kuluu storysta riippuen yhdestä kolmeen päivään, joten on vaikea luvata, milloin jokin ominaisuus on valmis.
> - Esimerkki on vielä armelias, sillä storyt valmistuvat siinä säännöllisesti ja koot vaihtelevat säännöllisessä rytmissä. Todellisuudessa molemmat ovat satunnaisia, ja kun testaaja on lähes täysin kuormitettu, jono voi kasvaa pahimmillaan rajatta.

Eräs varianssin aiheuttaja ovat viat. Leanin periaatteita ovatkin _Stop and fix_ ja _build quality in_.

_Stop and fix_ viittaa Toyotan vanhaan periaatteeseen, missä kuka tahansa on velvollinen pysäyttämään tuotantolinjan vian, esimerkiksi vaurioituneen komponentin havaitessaan. Periaate edellyttää, että linjan pysäyttäjää kiitetään eikä syyllistetä. Muuten ongelmista aletaan vaieta.

Tuotantolinjan pysäyttämisen yhteydessä _vian perimmäinen syy_ (engl. root cause) tulee selvittää mahdollisimman nopeasti (esimerkiksi aiemmin läpikäydyllä [five whys](#lean-työkalu-perimmäisen-syyn-analyysi---five-whys) -menetelmällä) ja pyrkiä eliminoimaan vian mahdollisuus tulevaisuudessa eli tuotannossa tulee olla laatu sisäänrakennettua _build quality in_.

Ohjelmistotuotannon käytänteistä automatisoitu testaus ja jatkuva integraatio voidaan nähdä suoraan _stop and fix_ - ja _build quality in_ -periaatteiden ilmentymänä.

Ohjelmistokehityksessä tuotantolinjan pysäyttämistä vastaa tilanne, jossa jatkuvan integraation palvelin ilmoittaa pääkehityshaaran testien menneen rikki. Hyvin toimivassa tiimissä tähän reagoidaan kuten tuotantolinjan pysähtymiseen: kukaan ei mergeä uusia muutoksia ennen kuin vika on korjattu, ja korjaaminen menee kaikkien muiden töiden edelle. Jos rikkinäisen koodin päälle jatketaan työskentelyä, uudet viat sekoittuvat vanhoihin, ja vian syyn selvittäminen vaikeutuu sitä enemmän, mitä kauemmin vika on saanut olla korjaamatta.

Myöhään löytyvät viat ovat myös vaihtelun lähde. Esimerkiksi [value stream map -kuvassa](#lean-työkalu-value-stream-mapping) QA:n staging-ympäristössä löytämien vikojen korjaamiseen kului neljä tuntia, eli kaksi kolmasosaa itse toteutukseen käytetystä ajasta. Tällainen ennakoimaton lisätyö venyttää storyn läpimenoaikaa ja kasvattaa jonoja samaan tapaan kuin edellä kuvattu storyjen koon vaihtelu. Kun laatu varmistetaan jo toteutusvaiheessa automaattisilla testeillä, viat löytyvät heti, ja niiden korjaaminen on pientä ja ennustettavaa.

Perinteisessä massatuotannossa keskitytään pitämään tuotantolaitteistot käynnissä maksimikapasiteetilla ja työntekijät koko ajan työllistettyinä. Yksittäisten työntekijöiden palkkauskin perustuu usein suoritusbonuksiin. Näin ajatellaan, että tuotteiden yksikköhinta saadaan mahdollisimman alhaiseksi ja yrityksen tuottavuus maksimoituu.

Yksittäisten työntekijöiden ja koneiden tehokkuuden tarkastelun sijaan lean keskittyy arvon virtauksen optimoinnin avulla järjestelmien kokonaisvaltaiseen kehittämiseen ja olettaa, että se on pidemmällä tähtäimellä yritykselle kannattavampaa. Tämän kiteyttää periaate _long term philosophy_.

Esimerkiksi yksittäisen koneen suuri käyttöaste tai henkilökohtaisen suorituksen palkitseminen voi olla _lokaalia optimointia_, joka voi koko yrityksen kannalta olla jopa haitallista. Näin saatetaan esimerkiksi valmistaa paljon komponentteja, joita ei lopulta koskaan tarvita. Yksittäisten tuotantolaitteiden, henkilöiden tai tiimien suorituskyvyn sijaan keskittymällä arvon virtaamiseen tilauksesta asiakkaalle pyritään toiminnan parannuksessa ottamaan huomioon koko tuotantosysteemiä koskevat pullonkaulat.

Ohjelmistokehityksessä vastaava tilanne syntyy esimerkiksi, jos kehittäjiä palkitaan valmiiksi koodattujen storyjen määrän perusteella. Kehittäjät optimoivat omaa mittariaan ja siirtävät testaukseen enemmän storyja kuin testaus ehtii käsitellä, jolloin testauksen eteen syntyy jono. Koodattujen storyjen määrä kasvaa, mutta asiakkaalle asti valmiita ominaisuuksia ei synny yhtään enempää, sillä niiden määrää rajoittaa testauksen kapasiteetti. Sama ilmiö näkyy tekoälyavusteisessa ohjelmistokehityksessä: jos koodausagentit tuottavat pull requesteja nopeammin kuin tiimi ehtii katselmoida niitä, nopeutunut koodaaminen kasvattaa vain välivarastoa, ks. [Tekoäly ja ohjelmistotuotantoprosessi](/genai/#tekoäly-ja-ohjelmistotuotantoprosessi).

<details markdown="1" class="lisatieto">
<summary markdown="span">Lisätietoa: miksi täysi käyttöaste hidastaa</summary>

Lokaalin optimoinnin haitallisuus selittyy osin samalla jonoteorialla kuin edellä esitelty _level the work_ -periaate. Jonossa odottamiseen kuluva aika on verrannollinen kertoimeen ρ / (1 − ρ), missä ρ on työvaiheen kuormitusaste. Kun kuormitus on 80 %, kerroin on 4, mutta kun kuormitus nostetaan 95 %:iin, kerroin on 19, eli odotusajat lähes viisinkertaistuvat. Täysi käyttöaste, joka näyttää yksittäisen työntekijän tai koneen kannalta tehokkaalta, tekee siis koko järjestelmästä hitaan.

Tarkemmin asiaa kuvaa jonoteorian [Kingmanin kaava](https://en.wikipedia.org/wiki/Kingman%27s_formula), jonka mukaan odotusaika riippuu kuormitusasteen lisäksi myös töiden saapumisvälien ja käsittelyaikojen vaihtelusta.

</details>

Pull-systeemeissä ei ole tapana tehdä tuotantoon liittyviä päätöksiä (esim. miten paljon tuotetta ja sen tarvitsemia komponentteja tulee valmistaa) liian aikaisessa vaiheessa, vaan vasta tarpeen vaatiessa. Englanniksi tätä myöhäistä päätöksen tekemistä luonnehditaan _commit at the last responsible moment_, eli päätöksiä viivytetään, mutta ei kuitenkaan niin kauaa että viivyttely aiheuttaa ongelmia. Tämä kiteytyy periaatteessa _decide as late as possible_.

Kun päätös tehdään myöhään, on tästä se merkittävä etu, että päätöksen teon tueksi on käytettävissä maksimaalinen määrä tietoa, toisin kuin liian aikaisin etukäteen tehtävissä päätöksissä, jotka ovat enemmän spekulatiivisia.

Viivyttämisellä on kuitenkin rajansa: viimeinen vastuullinen hetki on se, jonka jälkeen päättämättä jättäminen alkaa aiheuttaa ongelmia. Ohjelmistokehityksessä tämä näkyy esimerkiksi siinä, milloin user storyn tarkat vaatimukset eli hyväksymiskriteerit kannattaa sopia. Jos ne kirjoitetaan puoli vuotta ennen toteutusta, ne perustuvat arvauksiin: asiakkaan tarpeet ja muu sovellus ehtivät muuttua, ja osa määrittelystä joudutaan tekemään uudelleen tai heittämään pois. Jos taas kriteereistä sovitaan vasta toteutuksen aikana, kehittäjät joutuvat arvaamaan, mitä halutaan, ja osa toteutuksesta tehdään turhaan väärin. Viimeinen vastuullinen hetki on siis se, kun story otetaan työn alle.

Kun päätökset on tehty, toimitaan pull-systeemin hengessä mahdollisimman nopeasti, eli
_implement rapidly_ tai _deliver as fast as possible_, näin arvo saadaan virtaamaan asiakkaalle ilman turhia viiveitä.

Mitä nopeammin arvo saadaan virtaamaan, sitä enemmän päätöksiä on mahdollista viivyttää ja päätökset voidaan tehdä entistä paremman tiedon valossa.

Aiemmin esitellyssä [value stream mapissa](#lean-työkalu-value-stream-mapping) storyn valmistuminen kesti yli viisi viikkoa siitä, kun se oli lisätty backlogiin. Product ownerin on siis päätettävä viisi viikkoa etukäteen, mitä käyttäjät seuraavaksi saavat. Jos verkkokaupan analytiikka paljastaa, että moni asiakas keskeyttää ostoksensa toimitustavan valinnassa, korjaus ehtii käyttäjille aikaisintaan viiden viikon päästä. Jos storyn saa valmiiksi parissa päivässä, product ownerin tarvitsee päättää seuraavasta storysta vasta, kun edellinen on valmis, ja päätöksen tukena on aina tuorein tieto asiakkaiden toiminnasta.

### Arvon virtaaminen ketterässä ohjelmistotuotannossa

Edellä mainittujen periaatteiden soveltaminen näkyy selkeästi ketterässä ohjelmistotuotannossa. Vaatimuksia hallitaan product backlogilla, joka on parhaassa tapauksessa [DEEP](/osa2#hyv%C3%A4-product-backlog-on-deep) eli Detailed appropriately, emergent, estimated, prioritized.

Alhaisen prioriteetin user storyja ei ole määritelty kovin tarkkaan. Kuten edellä todettiin, storyn hyväksymiskriteerit määritellään ja se suunnitellaan toteutuksen osalta vasta, kun product owner valitsee sen seuraavaan sprinttiin toteutettavaksi, eli _at the last responsible moment_. Sprintiin valitut storyt toteutetaan valmiiksi sprintin aikana, eli _deliver as fast as possible_.

Scrum voidaankin nähdä leanin mukaisena _pull-systeeminä_, missä jokaiseen sprinttiin otetaan kerrallaan asiakkaan edustajan viime hetkellä (eli viimeistään sprint planningissa) määrittelemät tilaukset, jotka toteutetaan mahdollisimman nopeasti, eli sprintin aikana. Arvo, eli toimivaksi asti toteutetut uudet toiminnallisuudet, virtaa asiakkaalle sprinttien määrittelemässä rytmissä.

Ketterässä ohjelmistotuotannossa arvon virtausta on tehostettu monin eri menetelmin. Alun perin ja osin vieläkin Scrumin pyrkimys on viedä uusia ominaisuuksia tuotantoon sprinteittäin, eli muutaman viikon välein. 2010-luvulta alkaen sykliä on tihennetty: [jatkuva toimittaminen](/osa3#jatkuva-toimittaminen-ja-toimitusvalmius) eli _continuous deployment_ voi tarkoittaa, että jopa jokainen commit johtaa ohjelman uuden version julkaisuun, eli ohjelmistosta voi ilmestyä uutta arvoa tuottavia ominaisuuksia jopa kymmeniä kertoja päivässä.

Scrum rajoittaa kesken olevan työn määrää (joka on siis eräs leanin hukka) siten, että sprinttiin otetaan vain tiimin velositeetin verran user storyja. Kaikissa konteksteissa, esimerkiksi jatkuvaa toimittamista sovellettaessa aikarajoitettu sprintti ei ole mielekäs.

Paikoin onkin siirrytty "puhtaampaan" pull-systeemiin, missä user storyja toteutetaan yksi (tai joku hieman suurempi määrä) kerrallaan niin nopeasti kuin mahdollista. Kun story valmistuu eli tuotantokapasiteettia vapautuu, valitsee product owner seuraavaksi tärkeimmän storyn, joka sitten määritellään, suunnitellaan ja toteutetaan välittömästi alusta loppuun. Virtaus varmistetaan sillä, että yhtä aikaa työn alla ei ole kuin yksi tai korkeintaan muutama user story. [Osassa 2](/osa2/#yht%C3%A4-aikaa-teht%C3%A4v%C3%A4n-ty%C3%B6n-rajoittaminen) mainittu Scrumban-menetelmä toimii pitkälti juuri näin.

### Kasvattaminen leaniin ja johtajuuden periaatteet

Toyotalla useimmat uudet työntekijät koulutetaan huolellisesti perehtymään käytännön tasolla lean-ajattelun periaatteisiin. Useiden kuukausien koulutuksen aikana uudet työntekijät työskentelevät monissa eri työtehtävissä ja heidät opetetaan tunnistamaan lean-hukka sen eri muodoissa. Tarkoituksena on sisäistää jatkuvan parantamisen eli kaizenin mentaliteetti.

Toyotan johtamiskulttuurin keskiössä ovat lean-ajattelun opettajina, mentoreina ja työn valmentajina toimivat johtajat/managerit. Periaate _grow leaders_ kuvaa Toyotan tapaa kasvattaa lean-toimintafilosofian sisäistäviä managereja.

Periaate _my manager can do my job better than me_ kuvaa sitä, että managerit ovat firman sisällä eri työtehtävien kautta uusiin vastuisiin kasvaneita ihmisiä, jotka hallitsevat myös työntekijöiden vastuulla olevan _hands on_ -työn. Managerit ovat ensisijaisesti toiminnan etulinjassa toimivia lean-käytänteiden opettajia ja mentoreita.

Eräs tärkeä leanin johtamisen periaate on _go see_ (japaniksi genchi genbutsu): työntekijöiden, erityisesti managerien tulee "nähdä asiat omin silmin" eikä pelkästään istua työpöydän ääressä lukemassa muiden raportoimia faktoja. Tämä liittyy siihen ideaaliin, että managerien oletetaan _johtavan etulinjassa_ (japaniksi gemba) eli siellä missä työ tosiasiallisesti tehdään.

Toyota production systemin kehittäjän T. Ohnon sanoin:

> You can’t come up with useful kaizen sitting at your desk... We have too many people these days who don’t understand the workplace. They think a lot, but they don’t see. I urge you to make a special effort to see what’s happening in the workplace. That’s where the facts are.

Scrum masterin rooli on osin leanin johtajuuden ideaalien mukainen. Tosin useimpiin scrum mastereihin ei päde periaate _my manager can do my job better than me_. Monissa kehitystiimeissä teknistä puolta johtajuudesta edustavat esim. lead developer tai senior developer -nimikkeellä olevat kokeneemmat mentorin roolissa toimivat työntekijät.

### Lean-tuotekehityksen periaatteita

Sovellettaessa leania _tuotantoon_ (engl. production), pääasiallisena fokuksena on toiminnan parantaminen hukkaa eliminoimalla.

Sovellettaessa leania tuotannon optimoinnin sijaan _tuotekehitykseen_ (development) esim. kokonaan uusien automallien suunnitteluun, nousee esiin kokonaan uusia periaatteita. Kantavana ideana Toyotan tuotekehityksessä on _out-learn the competitors, through generating more useful knowledge and using and remembering it effectively._

Leanissa tuotekehityksessä fokukseen nouseekin toiminnan tehostamisen lisäksi _oppimisen kiihdyttäminen_ (engl. _amplify learning_). Kannattaa pyrkiä mahdollisimman _arvokkaaseen tietoon_ (engl. _high-value information_), mm. kiinnittämällä huomio asioihin, mihin sisältyy paljon epävarmuutta (_focus on uncertain things_). Epävarmat ja suuren teknisen riskin sisältävät ideat kannattaa toteuttaa/testata nopeasti, niiden suhteen viivästyneellä tiedolla on korkea hinta (_cost of delay_).

Eräs leanin tuotekehityksen mekanismi oppimisen nopeuttamiseen on _set based concurrent
development_. Jos tarkoituksena on kehittää esim. uusi moottorin jäähdytysjärjestelmä, aletaan yhtä aikaa kehittämään useita vaihtoehtoisia ratkaisuja eri tiimien toimesta. Tasaisin väliajoin kehitettäviä ratkaisuja vertaillaan, ja osa niistä karsitaan. Lopulta parhaaksi osoittautuva ratkaisu valitaan käytettäväksi lopputuotteessa.

Set based development -menetelmä on radikaalisti erilainen kuin usein sovellettava _iteratiivinen_ kehitysmenetelmä, missä lähtökohtana on yksi askeleittain paranneltava ratkaisu.

Ohjelmistokehityksessä set based -ajattelua on perinteisesti sovellettu melko harvoin, koska usean vaihtoehtoisen ratkaisun toteuttaminen rinnakkain on ollut kallista. Tyypillisiä esimerkkejä ovat käyttöliittymäsuunnittelu, jossa asiakkaalle esitellään aluksi useita rinnakkaisia luonnoksia, sekä [A/B-testaus](/osa2/#kokeileva-vaatimusmäärittely-lean-startup), jossa ominaisuuden kahdesta versiosta valitaan käyttäjädatan perusteella parempi. Teknisissä valinnoissa vastaava keino on tehdä lyhyt kokeilu (engl. spike) esimerkiksi kahdella vaihtoehtoisella kirjastolla ennen kuin toinen valitaan.

Tekoäly muuttaa asetelmaa, sillä vaihtoehtojen tuottaminen on halventunut murto-osaan entisestä. Koodausagentilta voi pyytää samasta ominaisuudesta useita eri lähestymistapoja noudattavia toteutuksia, jotka syntyvät rinnakkain esimerkiksi omiin git-haaroihinsa, ja tiimi valitsee niistä parhaan kokeilemalla. Samoin käyttöliittymästä voi tehdä tunneissa useita [klikattavia prototyyppejä](/osa2/#vaatimusten-kartoituksen-menetelmiä), joita asiakas pääsee vertailemaan. Pullonkaulaksi muodostuu tällöin vaihtoehtojen arviointi: jokainen vaihtoehto on tutkittava ja testattava, ja valitsematta jääneet on myös oikeasti heitettävä pois, jotta niistä ei tule välivarastoa.

Toyotalla tuotekehitystä johtaa _chief engineer_ (japaniksi _shusa_), joka on vastuussa sekä tuotteiden teknisestä että liiketoiminnallisesta menestyksestä. Kyseessä on tyypillinen leanin etulinjassa toimiva johtaja, joka tuntee tarkasti käytännön työn, mutta on myös erittäin lähellä asiakasta. Rooli poikkeaa Scrumin _product ownerista_ teknisen taustansa takia.

### Leanin soveltaminen eri aloille

90-luvulta alkaen lean on herättänyt maailmalla suurta kiinnostusta ja sitä on pyritty soveltamaan lähes kaikilla aloilla ohjelmistokehitys mukaan lukien. Lean-periaatteet ovat olleet hyvin esim. Scrumin kehittäjien tiedossa ja vaikka Scrumin alkuperäiset lähteet eivät käytäkään leanin terminologiaa, on Scrumissa monin paikoin piirteitä leanista.

Ketterien menetelmien myöhempi kehitys on vienyt tiettyjä ideoita, esimerkiksi user storyjen läpimenoaikojen minimointia, huomattavasti Scrumin ja ketterän alkuaikojen käytänteitä pidemmälle. Puhutaankin paljon leanista ohjelmistokehityksestä.

Sekä ketterissä menetelmissä, että leanissa on sama fundamentaali periaate: _toimintojen jatkuva kehittäminen_. Rajanveto leanin ja ketterän välillä ei olekaan ollenkaan selvä ja se on osin täysin keinotekoista. Esimerkiksi Scrumin kehittäjät eivät ole missään nimessä tarkoittaneet Scrumia staattiseksi rakennelmaksi, jota noudatetaan kirjaimellisesti tästä ikuisuuteen, sellainen toiminta ei olisi ketteryyttä.
Ketteryyttä on _läpinäkyvyyden_ (engl. transparency) mahdollistava toimintojen jatkuvaan parantamiseen keskittyvä _inspect-and-adapt_-sykli. Käytännössä tämä on täsmälleen sama idea kuin leanin _kaizen_.

Leanin soveltamisessa on kohdattu myös paljon ongelmia. Lean on ajattelumalli, joka on kehitetty Toyotan tarpeisiin, malli on jalostunut ja muuttunut vuosikymmenten kuluessa.
Onkin osin epäselvää miten Toyotan käytänteet siirretään eri aloille.

Leanin hyödyistä ohjelmistokehityksessä on myös tutkimusnäyttöä. Osan 3 luvussa [Tieteellinen evidenssi](/osa3/#tieteellinen-evidenssi) esitelty DORA-tutkimus havaitsi, että lean-johtamisen käytänteet (esim. keskeneräisen työn rajoittaminen ja työn virtauksen näkyväksi tekeminen) ja lean-tuotekehityksen käytänteet (esim. työskentely pienissä erissä ja asiakaspalautteen hyödyntäminen) ennustavat parempaa ohjelmistotoimituksen suorituskykyä, parempaa organisaatiokulttuuria ja vähäisempää loppuunpalamista.

Kuten ketterä, myös lean ei ole joukko työkaluja, vaan jatkuva toimintatapa. Larmanin ja Vodden sanoin:

> _In Toyota and in lean thinking, the idea is to repeat cycles of improvement experiments forever._

## Laajan skaalan ketterä ohjelmistokehitys

Ketterät ohjelmistotuotantomenetelmät on alun perin tarkoitettu pienten tiimien hallintaan. Esimerkiksi Scrum-tiimin koko on Scrum Guiden mukaan tyypillisesti korkeintaan kymmenen henkilöä. Entä jos on kyseessä tuote, joka edellyttää suurempaa määrää kehittäjiä?

Perusperiaatteena on edelleen pitää tiimit pieninä, mutta kasvattaa tuotantokapasiteettia käyttämällä useampia tiimejä. Tämä taas edellyttää, että tiimien välistä työtä on koordinoitava jollain tavalla.

### Scrum of Scrums

Jo kauan käytetty tapa Scrumin skaalaamiseen on niin sanottu _Scrum of Scrums_, jossa ideana on muodostaa koordinoiva tiimi, johon kuuluu yksi tai tarvittaessa useampikin jäsen jokaisesta Scrum-tiimistä, esimerkiksi scrum master tai tiimin kokenut sovelluskehittäjä. Scrum of Scrums -tiimi voi tavata päivittäin tai harvemmin, esimerkiksi viikoittain.

Periaate on jo hyvin vanha: toinen Scrumin kehittäjistä, Jeff Sutherland, [kertoo](https://www.researchgate.net/publication/290823579_Agile_Can_Scale_Inventing_and_Reinventing_SCRUM_in_Five_Companies) käyttäneensä sitä jo vuonna 1996 yrityksessä, jossa oli kymmeniä Scrum-tiimejä. Tuotekohtaisia Scrum of Scrums -tiimejä koordinoi vielä kuukausittain kokoontuva yrityksen johdon "management Scrum". Kuvaus ei kuitenkaan kerro esimerkiksi sitä, miten backlogien suhteen tulisi toimia laajemman skaalan Scrumissa. Tähän vastaavat seuraavaksi esiteltävät laajan skaalan menetelmät.

### Laajan skaalan ketterät menetelmät

2010-luvulta alkaen ketterän skaalaamiseen on alettu kiinnittää enemmän huomiota ja on esitelty useita laajan mittakaavan ketteriä menetelmiä. Näistä eniten huomiota saaneet ovat Scaled Agile Framework eli
[SAFe](https://framework.scaledagile.com/), Large Scale Scrum eli [LeSS](https://less.works) ja jossain määrin myös Disciplined Agile eli [DA](https://www.pmi.org/disciplined-agile) sekä [Scrum@scale](https://www.scrumatscale.com/).

Yhteistä näille on se, että ne laajentavat ketteryyttä ottamalla mukaan lean-ajattelua. Toisin kuin ketterät menetelmät, lean on lähtökohtaisesti tarkoitettu toimimaan todella suuressa skaalassa ja se sisältääkin enemmän koko organisaation toimintaa ohjaavia periaatteita kuin perinteinen ketterä. Käsitellään nyt hieman tarkemmin SAFe:a ja LeSS:iä.

### SAFe eli Scaled Agile Framework

Scaled Agile Framework eli SAFe on suosituin laajan mittakaavan ketterä menetelmä. Vuosittaisissa [State of Agile](https://stateofagile.com/) -kyselytutkimuksissa SAFe on ollut selvästi yleisimmin mainittu skaalauskehys, joskin sen osuus on viime vuosina laskenut ja yhä useampi organisaatio kertoo, ettei käytä mitään valmista skaalauskehystä.

SAFe:n pääasiallinen kehittäjä on Dean Leffingwell, joka toimi Nokia Mobile Phonesissa (NMP) konsulttina 2000-luvulla. SAFe on syntynyt pitkälti Nokialla tehdyn työn pohjalta. Nokialla oli käytössä eräänlainen SAFe:n esiversio. SAFe:n virallinen ensimmäinen versio julkaistiin 2011. Tällä hetkellä on menossa versio 6.0.

Kärjistetysti sanoen SAFe yhdistää kaikki viimeisen 20 vuoden aikana kehitetyt ketterän ja leanin ohjelmistokehityksen parhaat käytänteet, sekä joukon yrityksien tuotteiden hallinnointiin suunnattuja käytänteitä.

SAFe tarjoaa suuren määrän periaatteita (engl. principles), henkilö- ja tiimirooleja sekä käsitteitä. SAFe kutsuu itseään menetelmäkehykseksi (engl. framework) eli tarkoitus on, että yritykset räätälöivät itselleen sopivanlaisen prosessin käyttäen SAFe:n tarjoamia työkaluja.

SAFe tarjoaa myös neljä erikokoista valmiiksi räätälöityä konfiguraatiota. Näistä pienin _Essential SAFe_ on tarkoitettu pienemmille yrityksille ja SAFe:n soveltamisen alkuvaiheeseen. Konfiguraatioista suurin _Full SAFe_ taas soveltuu massiivisten, useita eri tuotteita hallitsevan yrityksen käyttöön. Seuraava kuva havainnollistaa Full SAFen käsitteistöä:

![]({{ "/images/safepic.png" | relative_url }})

Kuvan kolme vaakasuuntaista kerrosta vastaavat konfiguraatioita: alin kerros (_Essential_) kuvaa yksittäisen tuotteen kehitystä, keskimmäinen (_Large Solution_) useamman toimitusjunan yhteistyönä rakennettavia suuria järjestelmiä ja ylin (_Portfolio_) koko yrityksen tuotesalkun hallintaa.

Sovelluskehityksen ytimessä (löydätkö sen kuvasta?) on SAFe:n hieman modifioima Scrum, johon on liitetty joukko XP:n periaatteita. Scrumin sijaan tiimi voi käyttää myös Kanbania.

#### Miten SAFe laajentaa Scrumia

Tiimitasolla SAFe on hyvin lähellä Scrumia. Tiimissä on product owner, scrum master (SAFe 6:ssa _Scrum Master/Team Coach_) ja kehittäjät. Tiimi työskentelee tyypillisesti kahden viikon iteraatioissa (SAFe käyttää sanaa _iteration_ eikä sprint), joissa on tutut suunnittelu-, daily-, katselmointi- ja retrospektiivipalaverit. SAFe lisää tämän päälle tiimien välisen tason, jota koordinoidaan ylhäältä päin (engl. top down) ja jonka keskeinen käsite on _toimitusjuna_.

Toimitusjuna (engl. agile release train, ART) on tyypillisesti 5–12 tiimin eli noin 50–125 hengen joukko, joka kehittää yhtä tuotetta tai kokonaisuutta. Junan kaikilla tiimeillä on sama rytmi: iteraatiot alkavat ja päättyvät samaan aikaan. Iteraatiot ryhmitellään 8–12 viikon _planning interval_ -jaksoiksi (PI). Tavallisesti jakso koostuu neljästä kehitysiteraatiosta ja yhdestä _IP-iteraatiosta_ (innovation and planning). IP-iteraatio on varattu esimerkiksi teknisen velan maksamiseen, kokeiluille ja seuraavan jakson suunnitteluun.

Junalle tulee myös omia roolejaan. _Release train engineer_ (RTE) on eräänlainen koko junan scrum master, joka fasilitoi sen tapahtumia. _Product management_ vastaa junan yhteisestä backlogista, ja _system architect_ junan teknisestä suunnasta. Tiimien product ownerit ylläpitävät kukin oman tiiminsä backlogia. Toimitusjunien yläpuolella on vielä suurten ratkaisujen ja portfolion tasot omine rooleineen ja käsitteineen.

Backlogeja on siis useita ja ne muodostavat hierarkian. Portfolion backlogin _epicit_ jakautuvat junan backlogin (engl. ART backlog) _ominaisuuksiksi_ (engl. feature), jotka taas jakautuvat tiimien backlogien _storyiksi_. Toiminnallisuuden lisäksi backlogeissa on _enablereita_ eli esimerkiksi arkkitehtuuria ja infrastruktuuria koskevia tehtäviä, joilla rakennetaan niin sanottua _arkkitehtuurikiitorataa_ (engl. architectural runway). Ominaisuudet priorisoidaan _WSJF_-menetelmällä (weighted shortest job first). Siinä viivästyksen kustannus (engl. cost of delay) jaetaan työn koolla, joten pienet ja arvokkaat ominaisuudet nousevat jonon kärkeen. Menetelmä on peräisin [lean-tuotekehityksestä](/osa5/#lean-tuotekehityksen-periaatteita).

SAFe:n tunnetuin lisäys Scrumiin on jakson alussa pidettävä _PI planning_. Siinä junan kaikki tiimit suunnittelevat kahden päivän ajan yhdessä seuraavan jakson, mieluiten samassa tilassa. Product management esittelee junan backlogin tärkeimmät ominaisuudet, ja tiimit pilkkovat ottamansa ominaisuudet storyiksi omaan backlogiinsa, sijoittelevat storyt jakson iteraatioille ja tunnistavat toistensa välisiä riippuvuuksia. Riippuvuudet kirjataan yhteiselle suunnittelutaululle. Tuloksena kukin tiimi sitoutuu _PI objectives_ -tavoitteisiin, joiden toteutumista liiketoiminnan edustajat (_business owners_) arvioivat.

![SAFe:n backlogien hierarkia ja planning interval -jakson rytmi]({{ "/images/5-safe-backlogit.png" | relative_url }}){:width="750px" }

Jakson aikana tiimin product owner tarkentaa tiimin backlogia, ja ominaisuuksista voi syntyä uusia storyja. Tiimin backlogissa on lisäksi tiimin omia, junan backlogista riippumattomia tehtäviä, kuten teknisen velan maksua. Myös koordinointia jatketaan. Tiimien scrum masterit tapaavat viikoittain _coach syncissä_, joka on käytännössä [edellä](/osa5/#scrum-of-scrums) kuvattu Scrum of Scrums. Product ownerit tapaavat vastaavasti _PO syncissä_. Jokaisen iteraation jälkeen pidetään _system demo_, jossa näytetään koko junan yhteinen, integroitu toiminnallisuus eikä vain yksittäisten tiimien tuotoksia. Jakson päättää _inspect & adapt_ -tilaisuus. Se on koko junan yhteinen retrospektiivi, jossa käydään läpi tavoitteiden toteutuminen ja mittarit ja etsitään ongelmien perimmäisiä syitä.

Scrumiin verrattuna olennainen muutos on se, että tiimin autonomia kapenee. Scrumissa product owner päättää itse tuotteen suunnasta, mutta SAFe:ssa ominaisuuksien sisällön ja järjestyksen päättää product management, ja tiimin product owner toteuttaa sitä storytasolla. Myöskään iteraation pituutta tiimi ei voi valita, koska se on sidottu junan yhteiseen rytmiin. Tähän kohdistuu myös osa SAFe:n saamasta kritiikistä.

#### SAFe:n arviointia

SAFe on dokumentoitu todella tarkasti ja se antaa erittäin yksityiskohtaista ohjeistusta helpottamaan SAFe:n käyttöönottoa ja noudattamista. Ohjeistusta antavat tietysti kallispalkkaiset konsultit ja räätälöidyt koulutuspaketit ja sertifiointi.

SAFe vaikuttaa olevan erityisesti firmojen johdon suosiossa. Tämä on ymmärrettävää, sillä toisin kuin useimmat ketterät menetelmät, SAFe tarjoaa firman managementille sopivasti tekemistä roolien ja käytänteiden muodossa.

Kuten aiemmin mainittu, sisältää SAFe käytännössä kaikki mahdolliset ketterän ja lean-ohjelmistokehityksen parhaat käytänteet vieläpä selkeästi ja yksityiskohtaisesti dokumentoituna. SAFe onkin eräänlainen agile/lean-kehityksen supermarket, kaikki on helposti saatavissa valmiina pakatussa muodossa. Pick and mix, avaa paketti ja seuraa käyttöohjetta...

SAFe on saanut osakseen myös paljon kritiikkiä. Osa kritiikistä kohdistuu SAFe:n määrittelemän prosessin raskauteen, osa taas SAFe:n top down -management luonteeseen.

Esim. Scrumin kehittäjä Ken Schwaber on [kyseenalaistanut sen, onko SAFe ylipäätään ketterä menetelmä](https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/) ketteryyden alkuperäisen idean mukaan. Agile Manifestissahan on periaate _individuals and Interactions Over Processes and Tools_. SAFe taas prosessina vaikuttaa kovin raskaalta.

### LeSS eli Large Scale Scrum

LeSS:in taustalla on Craig Larman ja Bas Vodde, jotka työskentelivät konsultteina 2000-luvun alussa mm. Nokia Siemens Networksilla. Toisin kuin SAFe, LeSS on erittäin yksinkertainen, hyvin vahvasti Scrumiin pohjautuva. Uusia rooleja, artifakteja ja palavereja ei ole.

LeSSistä on kaksi eri versiota: _LeSS_ tilanteisiin, joissa tuotetta tekee 2-8 Scrum-tiimiä ja _LeSS Huge_ tilanteisiin, missä tiimejä tarvitaan suurempi määrä.

Sekä LeSS että LeSS Huge perustuvat seuraaville oletuksille

- kehitetään yhtä tuotetta, jolla on yksi product owner ja yksi product backlog
- kaikilla tiimeillä on samaan aikaan etenevät sprintit
- tiimit ovat Scrumin tapaan cross-functional eli ne sisältävät kaiken tarvittavan kompetenssin tuotteeseen kehitettävien toiminnallisuuksien toteuttamiseen
- tiimit tekevät sprintin aikana yhdessä tuotteesta yhden uuden ja julkaisuvalmiin asiakkaalle arvoa tuottavan version (engl. one shippable product increment)

Yksi LeSS-toteutus on tarkoitettu siis yhden tuotteen kehittämiseen. Jos yrityksellä on useita eri tuotteita, niitä kutakin varten on oma LeSS-toteutuksensa, Toisin kuin SAFe, LeSS ei ota mitenkään kantaa siihen miten firma hallinnoi tuoteperheitään.

LeSS korostaa, että kyseessä _ei_ ole erillinen Scrumin päälle lisätty hallinnollinen kerros vaan ainoastaan tapa miten Scrumin periaatteita ja artefakteja voidaan soveltaa mahdollisimman yksinkertaisella tavalla laajemmassa skaalassa.

#### LeSS:in taustalla olevat periaatteet

LeSS:in taustalla on joukko tuttuja ketterän ja lean-kehityksen periaatteita.

![]({{ "/images/5-5.png" | relative_url }}){:height="440px" }

Periaatteet ovat lähes samat kuin SAFe:ssa, yksi periaatteista tekee kuitenkin selvää eroa menetelmien välille. Esitetään se tässä suomennettuna LeSS:in [dokumentaatiosta](https://less.works/less/framework/introduction):

_Vähemmällä enemmän_ (engl. more with less):

- Emme halua lisää rooleja, koska roolien lisääminen vähentää tiimien vastuuta
- Emme halua lisää artefakteja, koska artefaktien lisääminen kasvattaa tiimien ja asiakkaiden välistä etäisyyttä
- Emme halua lisää prosessia, koska se vähentää oppimista ja tiimien omistajuutta prosessista. Haluamme sen sijaan vastuullisempia tiimejä vähentämällä rooleja
- Haluamme asiakaslähtöisempiä, hyödyllisiä tuotteita rakentavia tiimejä vähentämällä artefakteja
- Haluamme tiimeille enemmän omistajuutta prosessista ja mielekkäämpää työtä vähentämällä määriteltyjä prosesseja
- _Haluamme vähemmällä enemmän_

Eli minimoimalla prosessin, roolien ja artefaktien määrää pyritään siihen että tiimit ottavat itse omistajuuden tuotteen kehittämisestä ja asiakkaan kanssa käytävästä kommunikaatiosta.

<details markdown="1" class="lisatieto">
<summary markdown="span">Lisätietoa: LeSS:in kymmenen periaatetta</summary>

- _Large-scale Scrum is Scrum_: LeSS ei ole Scrumin päälle rakennettu uusi menetelmä, vaan tavallinen Scrum sovellettuna useaan tiimiin.
- _Transparency_ eli läpinäkyvyys: edistyminen mitataan valmiina, toimivina lisäyksinä tuotteeseen, ja tiimit työskentelevät lyhyissä sykleissä yhteisin käsittein, kuten Scrumissa (ks. [osa 1](/osa1/#scrumin-periaatteet-transparency---inspection---adaptation)).
- _More with less_: mahdollisimman vähän rooleja, artefakteja ja prosessia, ks. yllä.
- _Whole product focus_: tiimejä voi olla kolme tai kolmekymmentä, mutta tuotteella on silti yksi product owner, yksi product backlog, yhteinen sprintti ja yksi yhteinen valmis lisäys.
- _Customer centric_ eli asiakaskeskeisyys: arvo ja hukka määritellään asiakkaan näkökulmasta, ja tiimit toimivat suoraan oikeiden asiakkaiden kanssa.
- _Continuous improvement towards perfection_: tavoitteena on jatkuva parantaminen kohti saavuttamatonta ihannetta, jossa tuote toimitetaan välittömästi, virheettömästi ja ilman kustannuksia.
- _Lean thinking_: esihenkilöt toimivat opettajina ja jatkuvan parantamisen tukijoina, ja perustana ovat leanin peruspilarit [ihmisten kunnioittaminen ja jatkuva parantaminen](/osa5/#leanin-tavoitteet-perusta-ja-peruspilarit).
- _Systems thinking_ eli systeemiajattelu: optimoidaan kokonaisuutta eikä yksittäisiä osia, sillä [lokaali optimointi](/osa5/#leanin-periaatteita) voi heikentää koko järjestelmän toimintaa.
- _Empirical process control_: tuotetta, prosessia ja organisaatiota parannetaan tarkkailemalla ja mukauttamalla (engl. inspect and adapt) eikä noudattamalla valmiiksi määriteltyjä käytänteitä.
- _Queueing theory_ eli jonoteoria: ymmärretään, miten jonoja sisältävät järjestelmät käyttäytyvät, ja pienennetään jonoja ja keskeneräisen työn määrää sekä työn kokoa ja sen vaihtelua, vrt. edellä käsitelty [level the work](/osa5/#leanin-periaatteita).

Lisää periaatteista löytyy LeSS:in [dokumentaatiosta](https://less.works/less/framework/introduction).

</details>

#### LeSS käytännössä

Katsotaan hieman tarkemmin LeSS:in pienempää konfiguraatiota, joka on tarkoitettu noin 2-8 tiimin hallintaan.

Henkilöroolit ovat samat kuin normaalissa Scrumissa. Product ownereita on yksi, Scrum mastereita voi olla muutamia riippuen tiimien määrästä, yksi scrum master pystyy hoitamaan järkevästi noin 1-3 tiimin asioita.

Tiimit ovat itseorganisoituvia _feature-tiimejä_, eli jokainen tiimi keskittyy asiakkaalle arvoa tuottavien kokonaisuuksien toteuttamiseen. Tiimijako siis _ei noudata_ sovelluksen arkkitehtuurisia kerroksia, eli ei ole esimerkiksi erillisiä frontend-, backend- ja tietokantatiimejä. Kukin tiimi operoi ohjelmiston kaikilla tasoilla toteuttaen alusta loppuun user storyjen kuvaaman toiminnallisuuden definition of donen tasolla.

Myös artefaktit ovat samat kuin normaalissa Scrumissa. Product backlogeja on yksi, sprint backlog sen sijaan on jokaisella tiimillä oma. Kaikki tiimit työstävät sprintin aikana samaa ohjelmistoa, eli sprintin tuotoksena oleva valmis lisäys tuotteeseen (LeSS:n termein _potentially shippable product increment_, Scrumissa [increment](/osa1/#scrum-vastuut-artefaktit-ja-eventit)) on kaikille tiimeille yhteinen.

![]({{ "/images/5-6.png" | relative_url }}){:height="350px" }

Sprintin suunnittelu eli sprint planning on normaalista Scrumista poiketen kaksiosainen.

Ensimmäisessä osassa product owner ja kaikkien tiimien edustajat valitsevat product backlogilta eri tiimille seuraavan sprintin aikana toteutettavat user storyt.

Suunnittelun toinen osa on tiimikohtainen. Kukin tiimi muodostaa oman sprint backlogin, jonka avulla sprintin sisäinen toiminta hallitaan normaalin scrumin tapaan. Tarpeen vaatiessa tosin useampikin tiimi voi toimia sprintin aikana synkronissa, käyttäen yhteistä sprint backlogia.

![]({{ "/images/5-7.png" | relative_url }}){:height="350px" }

Kaikkien tiimien yhteinen aikaansaannos (one shippable product increment) katselmoidaan yhdessä. Retrospektiivi taas on kaksitasoinen, ensin pidetään normaalin scrumin tapaan tiimikohtainen retrospektiivi ja tämän jälkeen koko tuotteen valmistusprosessia tarkasteleva overall-retrospektiivi, missä on edustus kaikista tiimeistä ja mahdollisesti yrityksen johdosta.

![]({{ "/images/5-8.png" | relative_url }}){:height="350px" }

#### Muu tiimien välinen koordinointi

Kaikille tiimeille yhteisen sprintin suunnittelun ensimmäisen osan, sprint reviewin ja overall-retrospektiivin lisäksi LeSS ei edellytä muita tiimien väliseen koordinaatioon tarkoitettuja yhteisiä tapaamisia, vaan toteaa että tiimit päättävät keskenään miten koordinaatio tapahtuu.

LeSS antaa kuitenkin aiheeseen liittyviä ohjeita ja suosituksia. Keskeinen periaate on, että hajautettua ja epämuodollista koordinointia suositaan keskitetyn sijaan. Tiimien ei siis pitäisi koordinoida työtään koordinaattorin tai erillisen palaverin kautta, vaan suoraan keskenään. LeSS kutsuu tätä periaatteella _just talk_: kun tiimillä on asiaa toiselle tiimille, sen jäsen menee juttelemaan toisen tiimin kanssa tai lähettää viestin suoraan.

LeSS luettelee joukon tapoja, joilla suoraa ja epämuodollista koordinointia voi tukea:

- _Communicate in code_ eli koordinointi koodin kautta. Kun kaikki tiimit integroivat muutoksensa yhteiseen koodikantaan jatkuvasti ja noudattavat yhteisiä koodikäytänteitä, ne näkevät koodista ja integraatiosta suoraan, mitä muut tekevät, ja ristiriidat paljastuvat heti eivätkä vasta sprintin lopussa.
- _Tiimien yhteiset tapaamiset_ (engl. cross-team meetings). Tiimit, joiden työt liittyvät toisiinsa, voivat sopia yhteisistä palavereista tarpeen mukaan, esimerkiksi yhteisestä suunnittelu- tai design-tilaisuudesta.
- _Komponenttimentorit_ (engl. component mentors). Koska tiimit ovat feature-tiimejä, millään tiimillä ei ole omaa komponenttia. Komponenttia hyvin tunteva kehittäjä voi kuitenkin toimia sen mentorina, joka neuvoo komponenttia muuttavia muita tiimejä ja huolehtii, että sen rakenne pysyy hyvänä.
- _Kiertävät asiantuntijat_ (engl. travelers). Jonkin alueen, esimerkiksi testauksen tai tietyn teknologian, asiantuntija voi kiertää tiimistä toiseen työskentelemässä niiden mukana ja siirtämässä osaamistaan tiimeille.
- _Tiedustelijat_ (engl. scouts). Tiimin jäsen käy seuraamassa toisen tiimin daily scrumia ja kertoo omalle tiimilleen asioista, jotka vaikuttavat sen työhön.
- _Open space_ -tilaisuudet. Itseorganisoituvassa tilaisuudessa osallistujat ehdottavat itse käsiteltävät aiheet ja jakautuvat niiden ympärille keskustelemaan.

LeSS mainitsee myös scrum of scrums -palaverit yhtenä mahdollisena tiimienvälisen koordinoinnin muotona, mutta suosittelee mieluummin epämuodollisempia kommunikaation muotoja.

#### Backlogin ylläpito

Scrumissa backlogia ylläpidetään jatkuvasti (engl. backlog refinement, aiemmin myös backlog grooming), jotta se pysyy [DEEP](/osa2#hyv%C3%A4-product-backlog-on-deep):inä. Scrum Guiden aiemmat versiot arvioivat tähän kuluvan korkeintaan noin 10 % kehittäjien ajasta. Toisin kuin Scrum, LeSS kiinnittää eksplisiittisesti huomiota backlogin ylläpitämiseen ja antaa aiheeseen liittyvää ohjeistusta.

Product owner on vastuussa backlogista, ja hoitaa kaiken priorisoinnin. Backlogin ylläpidossa (refinement) tulee olla mukana myös kaikkien tiimien, sekä sovelluksen eri sidosryhmien edustajia. Oletusarvoisesti kukin tiimi hoitaa niiden storyjen tarkentamista, joita tiimi tulee todennäköisesti toteuttamaan. Tarpeen mukaan tiimit kuitenkin järjestävät yhteisiä backlogin tarkennustilaisuuksia tarkastellessaan toisiinsa läheisesti liittyvien storyjen tarkennusta tai miettiessään sovelluksen kehityksen suurempia linjauksia, esimerkiksi arkkitehtuuriin vaikuttavia asioita.

LeSS kannustaa kehitystiimejä kommunikoimaan mahdollisimman suoraan asiakkaiden tai loppukäyttäjien kanssa.

#### LeSS Huge

Jos tiimien määrä on suurempi kuin kahdeksan, suositellaan käytettäväksi _LeSS Huge_ -versiota. Edelleen oletetaan että kehitettävänä on ainoastaan yksi tuote, jolla on yksi product backlog sekä yksi vastuunalainen product owner.

Backlog kuitenkin jaetaan nyt _vaatimusalueisiin_ (engl. requirement area), joista jokaiselle on siitä vastuun kantava _area product owner_. Area product ownerit muodostavat tuotteen kokonaisuutta hallinnoiva _product owner -tiimin_, joka toimii koko tuotteen product ownerin johdolla.

![]({{ "/images/5-9.png" | relative_url }}){:height="380px" }

#### LeSS vs SAFe

Kiinnostavaa on, että sekä SAFe että LeSS ovat pitkälti syntyneet Suomessa ja Nokialla. Nokian organisaatiorakenteen takia Nokia Mobile Phonesin (NMP) ja Nokia Siemens Networksin (NSN) ohjelmistokehityksen tapa oli kuitenkin täysin erilainen, ja SAFe (NMP) ja LeSS (NSN) ovat samoista taustaperiaatteista ja yhteisestä syntykonsernista huolimatta hyvin erilaisia menetelmiä.

Ero kiteytyy siihen, miten menetelmät suhtautuvat Scrumiin: SAFe lisää Scrumin päälle uusia kerroksia, rooleja ja tapahtumia, kun taas LeSS pyrkii skaalaamaan Scrumia lisäämällä mahdollisimman vähän (_more with less_). Seuraava taulukko tiivistää keskeiset erot:

| | SAFe | LeSS |
|---|---|---|
| Laajuus | koko yritys, useita tuotteita ja tuotesalkun hallinta | yksi tuote |
| Roolit | paljon uusia rooleja, esim. RTE, product management ja system architect | samat kuin Scrumissa |
| Backlogit | hierarkia: portfolio, toimitusjuna ja tiimit | yksi product backlog |
| Product owner | tiimikohtainen, ominaisuuksista päättää product management | yksi koko tuotteelle |
| Suunnittelu | PI planning 8–12 viikon välein | yhteinen sprintin suunnittelu joka sprintissä |
| Tiimien välinen koordinointi | ylhäältä päin, ennalta määritellyt tapahtumat | hajautettu ja epämuodollinen, _just talk_ |
| Tiimien autonomia | rajattu | laaja |

SAFe:n vahvuus on juuri siinä, mihin LeSS ei ota kantaa. SAFe tarjoaa mallin useiden tuotteiden, budjetoinnin ja koko tuotesalkun hallintaan, ja sen voi ottaa käyttöön muuttamatta organisaation rakennetta kovin rajusti: olemassa oleville johtajille ja asiantuntijoille löytyy SAFe:sta yleensä jokin rooli. LeSS taas edellyttää usein suuria muutoksia, kuten mahdollinen komponenttitiimien korvaamista feature-tiimeillä ja välijohdon roolien karsimista.

Molempien menetelmien kanssa työskennelleiden konsulttien Aki Tikka ja Ran Nyman kirjoittama [menetelmien vertailu](https://gosei.eu/blog/less-safe-comparison/) kannattaa lukea.

Kuten aiemmin todettiin, SAFe on suosittu yritysjohdon keskuudessa, mutta se on saanut paljon kritiikkiä ketterän liikkeen keskeisiltä henkilöiltä, kuten Ken Schwaberilta. En myöskään itse ole kuullut kovin monen sovelluskehittäjän kehuvan SAFe:a.

En tiedä, kuvastaako se mitään menetelmien pitkän tähtäimen toimivuudesta, mutta SAFe:n kotia Nokia Mobile Phonesia ei enää ole olemassakaan. Nokia (Siemens) Networks taas on nykyinen Nokia, jossa LeSS-menetelmää on sovellettu pitkään.

### Spotifyn malli

Henrik Knibergin ja Anders Ivarssonin 2012 ilmestynyt artikkeli [Scaling Agile @ Spotify](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) kertoi suurelle yleisölle miten ruotsalainen musiikkistreamauspalvelu Spotify onnistui skaalaamaan toimintansa noin neljän vuoden aikana muutamasta sovelluskehittäjästä useaan sataan, eri kaupungeissa työskentelevään softakehittäjään säilyttäen toiminnassaan startupmaisen ketteryyden.

Spotifyn "malli" on melko yksinkertainen, se organisoi kehittäjät _tiimeihin_ (squad) jotka taas jakautuvat eri _heimoihin_ (tribe). Tiimi/heimorakenteen lisäksi malli sisältää myös hieman toisenlaisen jaottelun, jossa firman ihmiset jaotellaan heimojen sisällä _jaostoihin_ (chapter) sekä heimorajat ylittäviin _kiltoihin_ (guild):

![Spotifyn malli: heimot, tiimit, jaostot ja kilta]({{ "/images/5-spotify-yleiskuva.png" | relative_url }}){:width="750px" }

Vaikka Knibergin kuvauksen tarkoituksena ei ollutkaan se, että _muut firmat_ alkaisivat imitoimaan Spotifyn tapaa, näin kuitenkin kävi.

Kuvaus ei myöskään vastannut täysin Spotifyn todellisuutta. Spotifyllä vuosina 2011–2017 ketteränä valmentajana toiminut Joakim Sundén on [todennut](https://www.jeremiahlee.com/posts/failed-squad-goals/), että malli oli jo kirjoitushetkellä osin tavoite ja osin likiarvo: _"Even at the time we wrote it, we weren't doing it. It was part ambition, part approximation."_ Malli ei siis ole valmis viitekehys, vaan kuvaus yhden yrityksen tavasta toimia ja sen tavoitteista tiettynä ajankohtana.

Käydään nyt hieman tarkemmalla tasolla läpi Spotifyn mallia, tai sitä miltä se näytti noin vuonna 2012 ja siitä muutaman vuoden eteenpäin.

#### Squad eli tiimi

Spotifyn mallin ytimessä on noin 5–10 hengen tiimi, josta käytetään englanninkielistä termiä _squad_. Puhumme tässä kuitenkin tiimistä, sillä se lienee squadeista yleisimmin suomeksi käytetty termi.

Tiimit ovat ketterän ideaalin tapaan _cross-functional_, eli ne sisältävät kaiken tietotaidon vastuullaan olevien ohjelmiston osien saamisesta aina ideasta tuotantoympäristöön asti. Tiimit ovat itseorganisoituvia ja päättävät vapaasti omista työnteon käytänteistään: ne voivat käyttää sisäisesti Scrumia, Kanbania, Scrumbania tai mitä tahansa muuta työskentelyn tapaa.

![Tiimi, sen product owner ja agile coach]({{ "/images/5-spotify-tiimi.png" | relative_url }}){:width="400px" }

Kunkin tiimin vastuulla on jokin looginen osa sovellusta, usein suoraan asiakkaalle näkyvä ja itsenäisesti arvoa tuottava palanen, esimerkiksi iPhone-sovellus, soittolistat, viikon suositukset tai laskutus. Spotifyn tiimit ovat siis _feature-tiimejä_, samoin kuin LeSS-kehitysmallissa. Osa tiimeistä vastaa muiden tiimien hyödyntämistä sisäisistä asioista, kuten taustajärjestelmän suorituskyvystä.

Tiimeillä on _product owner_, joka huolehtii, että tiimin vastuulla olevaa sovelluksen osaa kehitetään kokonaisuuden kannalta järkevään suuntaan. Scrum mastereiden sijaan tiimien apuna toimivat _agile coachit_, eli ketteryyden valmentajat, jotka mm. fasilitoivat retrospektiivejä ja antavat tarvittaessa uraohjausta.

Tiimien on tarkoitus toimia mahdollisimman startupmaisesti ja olla suorassa yhteydessä loppukäyttäjiin. Ne hyödyntävät [Lean startup -menetelmästä](/osa2/#kokeileva-vaatimusmäärittely-lean-startup) tuttuja MVP:itä ja A/B-testausta validoidessaan uusien toiminnallisuuksien hyödyllisyyttä, ja niillä on valta tehdä jossain määrin liiketoimintaankin liittyviä päätöksiä autonomisesti. Tämä edellyttää vahvaa yhteistä visiota ja selkeitä mittareita, esimerkiksi päivittäisten aktiivisten käyttäjien määrää. Tiimien toimintaedellytyksiä, kuten tukea, vaikutusmahdollisuuksia ja julkaisemisen helppoutta, seurataan säännöllisillä kyselyillä.

#### Tribe eli heimo

Ideaalina on, että kukin tiimi on mahdollisimman itsenäinen yksikkö, joka voi toimia ilman riippuvuutta muista tiimeistä. Tiimien välillä on kuitenkin väkisin riippuvuutta ja myös synergiaa. Samojen aihepiirien ympärillä työskentelevät tiimit onkin jaettu _heimoihin_ (engl. tribe), jotka pitävät aika ajoin yhteisiä kokoontumisia:

![Heimo ja sen tiimit]({{ "/images/5-spotify-heimo.png" | relative_url }}){:width="620px" }

Vuoden 2012 kuvauksessa Spotifyn tiimit työskentelivät samassa tilassa, ja kaikkien heimon tiimien oli tarkoitus työskennellä lähekkäin, samassa rakennuksessa tai jopa samassa kerroksessa. Tämä mahdollisti helpon ja epämuodollisen kanssakäymisen heimon tiimien välillä. Nykyään tilanne on toinen: vuodesta 2021 Spotify on antanut työntekijöidensä [valita](https://newsroom.spotify.com/2021-02-12/distributed-first-is-the-future-of-work-at-spotify/), työskentelevätkö he toimistolla, etänä vai näiden yhdistelmänä.

Heimoon kuuluu maksimissaan kymmenkunta tiimiä, sillä heimojen koko halutaan pitää alle sadassa henkilössä. Rajaa perustellaan ns. [Dunbarin luvulla](https://en.wikipedia.org/wiki/Dunbar's_number), joka on teoreettinen kognitiivinen raja ihmisten lukumäärälle, jonka kanssa keskiverto ihminen pystyy ylläpitämään pysyviä sosiaalisia suhteita. Dunbarin luku on noin 150, ja Spotify halusi pysyä selvästi sen alapuolella. Kniberg perustelee rajaa myös seuraavasti: _When groups get too big, we start seeing more things like restrictive rules, bureaucracy, politics, extra layers of management, and other waste._

#### Chapter eli jaosto

Autonomisten tiimien varjopuolena on, että samoja ongelmia saatetaan ratkoa kerta toisensa jälkeen eri tiimeissä, eivätkä yhden tiimin oppimat asiat leviä muihin. Tätä varten Spotifyllä on _jaostot_ (engl. chapter), jotka koostuvat yhden heimon samankaltaista osaamista omaavista jäsenistä. Esimerkiksi heimon eri tiimien testaajat voivat muodostaa oman jaostonsa, samoin kaikki frontend-kehittäjät:

![Heimon jaostot ja chapter leadit]({{ "/images/5-spotify-jaosto.png" | relative_url }}){:width="520px" }

Jaostot kokoontuvat säännöllisesti jakamaan ongelmia ja ratkaisuja, ja ne tukevat jäsentensä ammatillista kehittymistä. Product owner vastaa kysymykseen _what to build next_, jaosto taas kysymykseen _how to build it well_. Kutakin jaostoa johtaa _chapter lead_, joka toimii jaoston jäsenten esihenkilönä mutta työskentelee itsekin jossain tiimissä. Jäljempänä esitellyn kritiikin mukaan juuri tämä rakenne osoittautui ongelmalliseksi, sillä chapter leadilla ei ollut vastuuta tiimin työn etenemisestä.

![Product owner vastaa siitä mitä rakennetaan, chapter lead siitä miten rakennetaan hyvin]({{ "/images/5-spotify-mita-miten.png" | relative_url }}){:width="460px" }

#### Guild eli kilta

Jaostot siis koostuvat yhden _heimon_ sisällä olevista saman kompetenssin omaavista henkilöistä. Kilta (engl. guild) on heimon tapainen mutta yli heimorajojen toimiva saman kompetenssin tai intressin omaavien henkilöiden ryhmä. Esimerkiksi testaajien kilta koostuu kaikkien testausjaostojen jäsenistä mutta myös muut asiasta kiinnostuneet, esim. web-kehittäjät voivat osallistua killan järjestämiin tapahtumiin.

![Killat yli heimorajojen]({{ "/images/5-spotify-kilta.png" | relative_url }}){:width="800px" }

Jaostot ja killat ovat lähellä jäljempänä esiteltävän Team Topologies -mallin mahdollistavia tiimejä: kaikissa on kyse osaamisen levittämisestä tiimirajojen yli.

#### Spotifyn mallin soveltaminen ja kritiikki

Spotifyn mallia on ruvettu soveltamaan monin paikoin muissakin yrityksissä. Spotifyn skaalaamisen tavan dokumentoineen ja maailmalle esitelleen Henrik Knibergin [mukaan](https://blog.crisp.se/2015/06/07/henrikkniberg/no-i-didnt-invent-the-spotify-model) Spotifyn mallia ei ollut tarkoitettu muualla sovellettavaksi, ja hänen mukaansa ei edes ole mitään Spotifyn mallia, sillä sovelluskehityksen tapa muuttuu Spotifyllä koko ajan, mukautuen yhä kasvavan yrityksen tarpeisiin.

Spotify on sittemmin lisännyt malliinsa muutaman uuden organisatorisen komponentin (trio ja allianssi) joiden avulla pystytään hallitsemaan kehityksen suuntaa isossa kuvassa. Spotifyllä on myös muutamia yli kaikkien heimojen toimivia henkilörooleja, mm. _chief architect_ eli henkilö, joka vastaa koko tuotteen arkkitehtuurista.

Spotifyn mallille on annettu internetissä rajuakin [kritiikkiä](https://www.jeremiahlee.com/posts/failed-squad-goals/). Onkin ilmeistä, että Spotifyn toiminta on kohdannut monia vaikeuksia firman kasvettua nopeasti ja tämä on johtanut Spotifyn mallin (mikäli mitään mallia siis voi edes sanoa olevan olemassa) muutoksiin ja mitä ilmeisemmin muokannut firman toimintaa kohti [perinteisempää jäykempää korporaatiota](https://www.youtube.com/watch?v=ar4lq1l8pAc&t=2462s&ab_channel=QAgileQualityinAgile).

Spotifyn mallia sovellettaessa on siis hyvä pitää mielessä että sen ei todellakaan ole tarkoitettu olevan staattinen rakennelma, jonka voi kopioida kirjaimellisesti toiseen kontekstiin. Moni asia Spotifyn mallissa onkin ainoastaan uusi nimi jollekin vanhalle tutulle asialle, jotka löytyvät suoraan esim. Scrumista, Leanista, SAFe:sta tai LeSS:istä, ja voikin olla viisaampi kääntyä suoraan näiden menetelmien kirjallisuuden pariin.

Spotifyn mallin suosion on osin arveltu johtuvan [sädekehävaikutuksesta (engl. halo effect)](https://fi.wikipedia.org/wiki/S%C3%A4dekeh%C3%A4vaikutus), eli myönteinen mielikuva Spotifystä tuotteena on saattanut olla osin sen takana, että on alettu myös kopioimaan ilman sen suurempia perusteita myös firman tapaa toimia. Tämä siitäkin huolimatta, että oman yrityksen toimintaympäristössä ei ole mitään Spotifyn toimintaympäristöä muistuttavaa.

Spotifyn mallia, tai ainakin sen käyttämää terminologiaa on omaksuttu käyttöön myös monessa suomalaisessa yrityksessä, mm. [Smartly](https://www.smartly.io/) soveltaa tiettyjä mallin piirteitä varsin suurella menestyksellä.

Jos Spotifyn malli kiinnostaa, kannattaa ehdottomasti katsoa [tämä](https://www.youtube.com/watch?v=Yvfz4HGtoPc&ab_channel=HenrikKniberg) ja [tämä](https://www.youtube.com/watch?v=vOt4BbWLWQw&ab_channel=HenrikKniberg) aihetta käsittelevä Youtube-video. Jos haluat myös kurkistaa Spotifyn osittain sotkuiseenkin todellisuuteen, kannattaa katsoa myös Joakim Sundénin esitelmä [You can do better than the Spotify Model](https://www.youtube.com/watch?v=gL6ou9UwqUQ&ab_channel=PreziConferenceTeam).

### Team Topologies

Spotifyn mallin jälkeen laajimmin omaksuttu tapa jäsentää ohjelmistokehityksen tiimirakennetta on Matthew Skeltonin ja Manuel Paisin kirjassa [Team Topologies](https://teamtopologies.com/key-concepts) (2019) esitetty malli. Toisin kuin SAFe tai LeSS, se ei ole prosessi, vaan tapa suunnitella tiimit ja niiden väliset rajapinnat niin, että työ virtaa nopeasti.

Mallin keskeinen käsite on tiimin _kognitiivinen kuorma_ (engl. cognitive load): tiimin vastuulla saa olla vain sen verran, kuin se pystyy kerralla hallitsemaan. Taustalla on myös [osassa 4](/osa4/#modulaarinen-monoliitti) mainittu Conwayn laki, jonka mukaan järjestelmän rakenne heijastaa sitä tekevän organisaation kommunikaatiorakennetta. Siksi tiimirakenne kannattaa suunnitella sen mukaan, millaisen arkkitehtuurin halutaan syntyvän. Tätä kutsutaan _käänteiseksi Conwayn liikkeeksi_ (engl. inverse Conway maneuver).

Malli tunnistaa neljä tiimityyppiä:

- _virtaan keskittyvä tiimi_ (engl. stream-aligned team) vastaa jostain asiakkaalle arvoa tuottavasta kokonaisuudesta alusta loppuun, samaan tapaan kuin LeSS:n feature-tiimit tai Spotifyn squadit. Valtaosa tiimeistä on tätä tyyppiä.
- _alustatiimi_ (engl. platform team) tarjoaa muille tiimeille sisäisiä palveluita, esimerkiksi tuotantoympäristöt, CI/CD-putket ja monitoroinnin, niin että tiimit voivat käyttää niitä itsepalveluna
- _mahdollistava tiimi_ (engl. enabling team) auttaa muita tiimejä omaksumaan uusia taitoja ja tekniikoita, hieman Spotifyn jaostojen ja kiltojen tapaan
- _monimutkaisen osajärjestelmän tiimi_ (engl. complicated-subsystem team) vastaa erityisosaamista vaativasta osasta, esimerkiksi laskenta-algoritmista

Tiimien välille määritellään kolme vuorovaikutustapaa: tiivis _yhteistyö_ (collaboration), toisen tiimin tarjoaman palvelun käyttö _palveluna_ (X-as-a-Service) ja _fasilitointi_ (facilitating), jossa tiimi auttaa toista oppimaan. Seuraava kuva havainnollistaa tiimityyppejä ja vuorovaikutustapoja kuvitteellisessa musiikkipalvelussa:

![Team Topologies -mallin tiimityypit ja vuorovaikutustavat]({{ "/images/5-team-topologies.png" | relative_url }}){:width="750px" }

Vuorovaikutustapa ei ole pysyvä. Tiivis yhteistyö sopii uuden asian selvittämiseen, mutta se on kallista ja hämärtää vastuita, joten sen on tarkoitus olla määräaikaista. Esimerkiksi kun alustatiimi rakentaa uutta julkaisuputkea, se voi aluksi tehdä tiivistä yhteistyötä yhden virtaan keskittyvän tiimin kanssa, kuten kuvan maksamisesta vastaavan tiimin kanssa. Kun putki on valmis, muut tiimit käyttävät sitä palveluna ilman jatkuvaa yhteydenpitoa. Myös fasilitointi on luonteeltaan väliaikaista: kun tiimi on omaksunut uuden taidon, mahdollistava tiimi siirtyy auttamaan seuraavaa tiimiä.

Alustatiimeihin liittyy 2020-luvulla yleistynyt käsite _platform engineering_: organisaatio rakentaa sisäisen kehitysalustan, jonka avulla tiimit voivat ottaa käyttöön ympäristöjä ja työkaluja itsenäisesti. Tarkoituksena on keventää virtaan keskittyvien tiimien kognitiivista kuormaa, jottei jokaisen tiimin tarvitse hallita koko infrastruktuuria itse.

## Ketterien menetelmien käyttö ja hyödyt tutkimuksen valossa

Tehdään vielä kurssin lopussa nopea katsaus ketterien menetelmien käyttöön ja hyötyihin liittyvään tutkimukseen.

### Miten laajasti ketteriä menetelmiä käytetään

Internetistä löytyy melko paljon erilaisia kyselytutkimuksia, jotka kartoittavat ketterien menetelmien käytön yleisyyttä. Suurin osa niistä on jo usean vuoden takaa, ja niiden tulokset vaihtelevat suuresti. Esimerkiksi vuonna 2018 [Project Management Instituten](https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf) kyselyn mukaan 46 % ohjelmistoprojekteista tehtiin ketterillä menetelmillä, kun taas [Stack Overflowin](https://survey.stackoverflow.co/2018/) yli 100 000 vastaajan kyselyssä 86 % kertoi työskentelevänsä ketterästi. Suomessa Oulun yliopiston [tutkimuksessa](https://doi.org/10.1145/2372251.2372275) vuonna 2012 ketteriä tai lean-menetelmiä käytti 58 % yrityksistä, ja Helsingin yliopiston ja Nitorin [selvityksessä](https://nitor.com/fi/artikkelit/nitor-ja-helsingin-yliopisto-selvittivat-suomalaisyritykset-ketteryyden-edellakavijoita) vuonna 2018 vain 5,9 % vastaajista kertoi, ettei ketteriä menetelmiä käytetä lainkaan. Ketterät menetelmät ovat siis jo pitkään olleet valtavirtaa, ja pelkkää käyttöastetta tuskin on enää mielekästä kysyä.

Valtaosa kyselyistä ei täytä tieteellisen tutkimuksen kriteerejä: otokset eivät välttämättä edusta koko populaatiota, ja osa tekijöistä on kaupallisia toimijoita, joiden intressinä saattaa olla itselleen suosiollisten tulosten julkaisu.

Tuoreempi tutkimus keskittyykin siihen, _miten_ menetelmiä käytännössä sovelletaan. Brasiliassa, Suomessa ja Uudessa-Seelannissa tehdyssä [tutkimuksessa](https://ieeexplore.ieee.org/document/7890614/) (2016) Scrumia käytti 71 %, Kanbania 50 %, leania 40 % ja vesiputousmallia 35 % vastaajista. Samassa organisaatiossa käytetään siis usein yhtä aikaa useampaa menetelmää. Laajassa kansainvälisessä [HELENA-kyselytutkimuksessa](https://arxiv.org/abs/2109.11435) havaittiin, että alle 15 % vastaajista toteuttaa projektejaan puhtaasti ketterästi tai puhtaasti perinteisesti. Valtaosa käyttää ns. _hybridimenetelmiä_, eli itse koottuja yhdistelmiä eri menetelmistä ja käytänteistä. Tutkijoiden johtopäätös on, että ketteryyttä ei voi määritellä pelkästään käytetyn menetelmän perusteella, vaan olennaista on, mitä käytänteitä tiimit todella soveltavat.

### Ohjelmistotoimituksen tila DORA-tutkimuksen valossa

Vuodesta 2006 ilmestynyt [State of Agile](https://stateofagile.com/) -raportti oli pitkään tunnetuin ketterien menetelmien käyttöä kartoittava kysely. Sen mukaan Scrum on selvästi yleisin ketterä menetelmä. Raportti on kuitenkin kaupallisen työkaluvalmistajan tuottama, ja sen tuorein, vuonna 2025 ilmestynyt 18. versio ei enää edes kysy tiimien käyttämistä menetelmistä.

Paremman kuvan siitä, miten hyvin organisaatiot todella hallitsevat ohjelmistokehityksen, antavat osan 3 luvussa [Tieteellinen evidenssi](/osa3/#tieteellinen-evidenssi) esitellyt DORA-raportit. Vuoteen 2024 asti DORA jakoi vastaajat neljään suoritustasoon DORA-mittareiden perusteella. [Vuoden 2024 raportissa](https://dora.dev/research/2024/dora-report/) tasot olivat seuraavat:

| Taso | Osuus vastaajista | Tuotantoonvientien tiheys | Muutoksen läpimenoaika | Epäonnistuneiden muutosten osuus | Palautumisaika |
|---|---|---|---|---|---|
| Elite | 19 % | tarpeen mukaan, useita kertoja päivässä | alle päivä | 5 % | alle tunti |
| High | 22 % | päivittäin–viikoittain | päivästä viikkoon | 20 % | alle päivä |
| Medium | 35 % | viikoittain–kuukausittain | viikosta kuukauteen | 10 % | alle päivä |
| Low | 25 % | kuukausittain–puolivuosittain | 1–6 kuukautta | 40 % | viikosta kuukauteen |

Parhaiten suoriutuvat organisaatiot vievät muutoksia tuotantoon tarpeen mukaan alle päivässä, kun heikoimmilla siihen kuluu kuukausia. Valtaosa organisaatioista on siis vielä kaukana siitä, mitä [jatkuva toimittaminen](/osa3#jatkuva-toimittaminen-ja-toimitusvalmius) mahdollistaisi, ja teknisissä käytänteissä on monella skarppaamisen paikka.

Taulukossa on myös kiinnostava yksityiskohta: medium-tason organisaatiot vievät muutoksia tuotantoon harvemmin kuin high-tason, mutta niiden muutokset epäonnistuvat harvemmin. Raportin mukaan ei ole yleispätevää vastausta siihen, kumpi on parempi, tiheämmät tuotantoonviennit vai harvemmat epäonnistumiset. Se riippuu sovelluksesta ja sen käyttäjien odotuksista. Raportti korostaakin, että tärkeämpää kuin tietyn tason saavuttaminen on se, että tiimi parantaa toimintaansa jatkuvasti.

Saman tutkimuksen mukaan teknisten käytänteiden lisäksi organisaatioiden tehokkuutta ennustavat mm. pienissä toimituserissä työskentely (work in small batches) ja keskeneräisen työn määrän rajoittaminen (limit work in process).

### Toimiiko ketterä ohjelmistokehitys

Ohjelmistoprojektin hallinnointimenetelmistä tutkimusta tekevä [Standish Group](https://www.standishgroup.com/) on julkaissut vuodesta 1994 alkaen ohjelmistoprojektien onnistumisen astetta kartoittavaa _Chaos Reportia_.

Raportti jakaa projektit onnistumisen suhteen kolmeen ryhmään:

- _successful_: projekti on _onnistunut_ jos se valmistuu aikataulussa, budjetoituun hintaan ja suunnitellussa laajuudessa
- _challenged_: projektin onnistuminen on _vaarantunut_, jos jokin onnistumisen osa-alueista (_aikataulu, budjetti, laajuus_) ei ole toteutunut, esimerkiksi jos sovellus on valmistunut aikataulussa, pysyy budjetin puitteissa, mutta kaikkea suunniteltua toiminnallisuutta ei ole toteutettu
- _failed_: projekti on _epäonnistunut_ jos se ei valmistu, tai sitä ei oteta koskaan käyttöön

Vuoden 2020 raportissa projektien onnistumisen aste näyttää seuraavalta:

![]({{ "/images/chaos10.png" | relative_url }}){:height="150px" }

Projektin koolla on todella suuri merkitys onnistumisen kannalta. Jos tarkastelussa otetaan huomioon projektin koko, on onnistumisprosentti seuraavanlainen:

![]({{ "/images/chaos11.png" | relative_url }}){:height="250px" }

Raportin lukujen perusteella ketterät menetelmät näyttäisivät toimivan vesiputousmallia paremmin projektin koosta riippumatta, ja ero kasvaa, kun projektien koko kasvaa. Lukuihin kannattaa kuitenkin suhtautua varauksella, kuten jäljempänä todetaan.

On kuitenkin selvää, että suuret ohjelmistohankkeet ovat riskialttiita, oli käytetty menetelmä mikä tahansa. Suuret hankkeet onkin syytä pilkkoa useammaksi pienemmäksi hankkeeksi, jotta onnistumistodennäköisyys kasvaisi.

Chaos-raportti sisältää muutakin mielenkiintoista dataa, esim. tarkempaa erittelyä onnistuneista ja epäonnistuneista projekteista. Raportin huono puoli on sen kaupallisuus: raportit ja niiden taustalla oleva data eivät ole julkisesti saatavilla.

Chaos-raportin lukuja on myös kritisoitu tieteellisesti. Erään [tutkimuksen](https://ieeexplore.ieee.org/document/5232804) mukaan raportin onnistumisen määritelmä on yksipuolinen: projekti katsotaan onnistuneeksi vain, jos se pysyy alkuperäisessä aikataulu-, budjetti- ja laajuusarviossa. Tällöin mitataan pikemminkin alkuperäisten arvioiden osuvuutta kuin sitä, tuottiko projekti arvoa. Ketterässä kehityksessä laajuuden muuttuminen on lisäksi tarkoituksellista, joten määritelmä sopii sen arviointiin huonosti.

[State of Agile](https://stateofagile.com/) -raportti erittelee tarkemmin ketteryydellä saavutettuja hyötyjä:

![]({{ "/images/5-16-2021.png" | relative_url }}){:height="400px" }

### Ketteryyden kritiikki

Ketteryyden suosion kasvaessa myös kritiikki on kasvanut, ja sitä ovat esittäneet usein juuri ketterän liikkeen perustajat itse. Agile-manifestin kirjoittajiin kuulunut Dave Thomas julisti jo vuonna 2014 kirjoituksessaan [Agile is Dead (Long Live Agility)](https://articles.pragdave.me/p/2014-03-04-time-to-kill-agilehtml), että sana _agile_ on muuttunut markkinointitermiksi, jonka avulla myydään konsultointia, koulutuksia ja työkaluja. Hän ehdotti, että puhuttaisiin mieluummin _ketteryydestä_ (engl. agility) eli toimintatavasta kuin tuotteistetuista menetelmistä.

Kritiikki kohdistuu erityisesti ketteryyden ympärille syntyneeseen teollisuuteen: lyhyillä kursseilla myönnettäviin sertifikaatteihin, raskaisiin skaalauskehyksiin ja tilanteisiin, joissa ketterän terminologian alla jatketaan vanhaa käskyttävää johtamista, kuten [osassa 1](/osa1/#scrumin-ongelmia) käsitelty Dark Scrum ja waterscrumfall. 2020-luvulla moni yritys on myös karsinut erillisiä ketteriä rooleja. Esimerkiksi yhdysvaltalainen pankki Capital One [lakkautti](https://www.bankingdive.com/news/capital-one-cuts-1100-tech-jobs-agile/640861/) vuonna 2023 yli 1 100 ketterää roolia ja siirsi niiden vastuut tiimeille ja tuotepäälliköille.

Kritiikki ei yleensä kohdistu ketterän manifestin arvoihin ja periaatteisiin, vaan siihen, miten niitä on sovellettu. Tähän viittaa myös edellä mainittu [HELENA-tutkimuksen](https://arxiv.org/abs/2109.11435) havainto: ketteryys ei synny valitusta menetelmästä, vaan tiimien todellisista käytänteistä.

### Etä- ja hybridityö

Ketterät menetelmät syntyivät aikana, jolloin tiimi työskenteli samassa tilassa. Agile-manifestin periaatteiden mukaan tehokkain tapa välittää tietoa kehitystiimissä on kasvokkain käytävä keskustelu. Covid-pandemian jälkeen etä- ja hybridityöstä on kuitenkin tullut ohjelmistoalalla yleistä. Esimerkiksi Spotify antaa työntekijöidensä valita työskentelytapansa, kuten [edellä](/osa5/#tribe-eli-heimo) todettiin.

Etätyön vaikutuksista on tehty myös laajaa tutkimusta. Microsoftin noin 61 000 työntekijän viestintäaineistoon perustuneessa [tutkimuksessa](https://www.nature.com/articles/s41562-021-01196-4) havaittiin, että koko yrityksen siirtyminen etätyöhön teki yhteistyöverkostoista staattisempia ja siiloutuneempia: oman ryhmän ulkopuolisten kanssa tehdyn yhteistyön osuus väheni noin neljänneksellä, ja viestintä siirtyi reaaliaikaisesta keskustelusta sähköpostiin ja pikaviesteihin. Kiinalaisen Trip.comin noin 1 600 työntekijän satunnaistetussa [kokeessa](https://www.nature.com/articles/s41586-024-07500-2) taas havaittiin, että kahtena päivänä viikossa etänä työskentely vähensi irtisanoutumisia noin kolmanneksella eikä heikentänyt suoriutumista tai ylenemistä. Mukana olleiden sovelluskehittäjien kirjoittaman koodin määrä ei myöskään muuttunut. Ohjelmistokehittäjiä koskeva Microsoftin [tutkimus](https://arxiv.org/abs/2008.11147) puolestaan osoitti, että kokemukset vaihtelevat suuresti: osa kehittäjistä menestyi kotoa käsin paremmin kuin toimistolla, osa taas kärsi esimerkiksi keskeytyksistä ja eristyneisyydestä.

Tutkimusten perusteella hybridityö näyttää toimivan yksilötasolla hyvin, mutta tiimien välinen spontaani tiedonkulku kärsii helposti. Tämä on olennaista erityisesti laajan skaalan ketterässä kehityksessä, joka perustuu pitkälti tiimien väliseen epämuodolliseen koordinaatioon, kuten LeSS:n periaate _just talk_ ja Spotifyn jaostot ja killat.

### Johtopäätöksiä

Evidenssiä ketterien menetelmien toimimisesta siis on. Näyttö ei kuitenkaan ole täysin kiistatonta, sillä kaikki edellä referoidut tutkimukset ovat kyselytutkimuksia, joissa käsitteistöä ei ole välttämättä kunnolla määritelty (esim. mitä ketteryydellä tai projektin onnistumisella tarkoitetaan) ja kyselyyn osallistuneet eivät useimmiten edusta tasaisesti koko populaatiota. Kaikkien kyselyjen tekijät eivät myöskään ole puolueettomia menetelmien suhteen, esim. State of Agile -raporttia nykyään tuottava [Digital.ai](https://digital.ai/) (aiemmin CollabNet/VersionOne) on ketteriä projektinhallintatyökaluja tuottava yritys. Tutkimusten validiteetti siis on hieman kyseenalainen.

Ketteristä menetelmistä on tehty myös runsaasti akateemista tutkimusta, muutama näistä mainittiinkin edellä tekstissä. Akateemisenkin tutkimuksen systemaattisuus, laatu ja tulosten yleistettävyys vaihtelee. Osan kolme luvussa [Tieteellinen evidenssi](/osa3/#tieteellinen-evidenssi) referoitu DORA-tutkimus lienee kattavin tällä hetkellä olemassa oleva ketterien ja lean-periaatteiden hyötyjä erittelevä tutkimus, ja sitä jatketaan edelleen vuosittaisina raportteina. Sekin perustuu kyselyihin, mutta sen menetelmät ovat huomattavasti huolellisemmat kuin useimmissa edellä mainituissa kyselyissä: mitattavat käsitteet on määritelty ja validoitu, ja tekijöiden välisiä yhteyksiä on analysoitu tilastollisilla malleilla. Tuloksia on julkaistu myös vertaisarvioiduissa julkaisuissa.

Olemassa on myös suuri määrä tutkimuksia, joissa rajaudutaan yksittäisten tekniikoiden, esim TDD:n, pariohjelmoinnin tai jatkuvan integraation vaikutusten arviointiin. Ohjelmistotuotannossa on kuitenkin liian paljon muuttujia, jotta jonkin yksittäisen tekijän vaikutusta voitaisiin täysin vakuuttavasti mitata empiirisesti. Menetelmiä soveltavat aina ihmiset, ja mittaustulos yhdellä ohjelmistotiimillä ei välttämättä yleisty mihinkään muihin olosuhteisiin.

Lähes kaikissa yksittäisen tekniikan esim. TDD:n hyötyjä mittaavissa tutkimuksissa ongelmana on se, että ne eivät mittaa tekniikoista saatavia pitkäaikaisia hyötyjä mm. ohjelmiston ylläpidolle ja jatkokehitettävyydelle. Sekä kansanviisaus että monet tutkimukset ovat todenneet, että valtaosa ohjelmiston kustannuksista muodostuu juurikin ylläpitovaiheen, eli ensimmäisen version julkaisun jälkeisistä kustannuksista. Esimerkiksi [tämä](https://www.researchgate.net/publication/221408114_Distribution_of_Cost_over_the_Application_Lifecycle_-_a_Multi-case_Study) tutkimus osoittaa, että peräti 79 % ohjelmiston kustannuksista muodostuu ylläpitovaiheen aikana. Onkin mahdollista, että jokin tekniikka tuottaa lyhytaikaisen hyödyn, mutta jopa heikentää tuottavuutta pitkällä aikavälillä.

Tekoäly tuo tutkimukseen uuden muuttujan. DORA-ryhmän vuoden 2025 raportin keskeinen havainto on, että tekoäly toimii _vahvistimena_: se parantaa hyvin toimivien tiimien suorituskykyä, mutta voimistaa myös heikosti toimivien organisaatioiden ongelmia. Ne käytänteet, joiden hyödyistä tässä osassa ja osassa 3 on esitelty näyttöä, eivät siis menetä merkitystään tekoälyn myötä vaan pikemminkin korostuvat. Aiheesta tarkemmin materiaalissa [Tekoäly ja ohjelmistotuotantoprosessi](/genai/#tekoäly-ja-ohjelmistotuotantoprosessi).
