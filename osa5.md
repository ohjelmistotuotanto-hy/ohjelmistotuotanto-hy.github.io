---
layout: page
title: Osa 5
title_long: 'Lean'
inheader: yes
permalink: /osa5/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

Kurssin aikana on jo muutamaan kertaan sivuttu käsitettä Lean, katsotaan nyt hieman tarkemmin mistä on kysymys
Lean on syntyisin Toyotan tuotannon ja tuotekehityksen menetelmistä
Toisen maailmansodan jälkeen Japanissa oli suuri jälleenrakennuksen buumi, mutta pääomaa ja raaka-aineita oli saatavissa niukalti
Havaittiin, että laadun parantaminen nostaa tuottavuutta: mitä vähemmän tuotteissa ja tuotantoprosesseissa on virheitä ja ongelmia, sitä enemmän tuottavuus kasvaa, ja se taas johtaa markkinaosuuden kasvuun ja sitä kautta uusiin työmahdollisuuksiin
Japanilaisiin yrityksiin tuli vahva laatua korostava kulttuuri
Resurssien niukkuus johti siihen, että Toyota kehitti ns. Just In Time (JIT) -tuotantomallin, missä ideaalina oli aloittaa tuotteen valmistus vasta kun ostaja oli jo tilannut tuotteen
Vastakohtana tälle on perinteinen massatuotanto, missä tehdään paljon tuotteita varastoon

Pyrkimys oli saada tuote tilauksen jälkeen mahdollisimman nopeasti kuluttajalle: lyhyt sykliaika (cycle time) tilauksesta toimitukseen
Taustaa
 
JIT-tuotanto JIT-tuotantomallista oli monia hyötyjä
Asiakkaiden muuttuviin tarpeisiin oli helppo valmistautua toisin kuin massatuotannossa, missä varastoon tehdyt tuotteet oli saatava myydyksi vaikka ne eivät olisi enää asiakkaan mieleen
Koska tuotteen sykliaika (tilauksesta asiakkaalle) oli lyhyt, laatuongelmat paljastuivat nopeasti
Toisin kuin mahdollisesti kuukausia varastossa olevilla tuotteilla

Massatuotanto pyrki optimoimaan yksittäisten työntekijöiden ja koneiden työpanosta (ideaalina että koneiden käyttöaste on koko ajan 100%)
Toyotan JIT-tuotantomallissa optimoinnin kohteeksi tuli tuotteen sykliaika
Pyrittiin eliminoimaan kaikki mahdollinen jäte tai hukka (waste), joka ei edesauttanut työn (eli tuotannon alla olevan tuotteen) nopeampaa virtausta (flow) tilauksesta asiakkaalle
Virtausta estäviin tekijöihin, esim. laatuongelmiin puututtiin heti
Käytännössä jokainen työntekijä oli oikeutettu ja velvollinen pysäyttämään tuotantolinjan havaitessaan ongelmia

Työntekijöitä kunnioittava, kuunteleva ja vastuuttava (empowering) tuotannon optimoimisen kulttuuri

Toimintatapojen kaikilla tasoilla tapahtuva jatkuva parantaminen

Vuodesta 1965 alkaen Toyota alkoi kutsua toimintatapaansa Toyota Production Systemiksi
Ensimmäiset englanninkieliset julkaisut aiheesta ovat vuodelta 1977
Toyotan menestys herätti kiinnostusta länsimaissa ja MIT:in tutkijat alkoivat 1980-luvun lopussa kartoittamaan ja dokumentoimaan tarkemmin Toyotan tuotantojärjestelmää
Tutkijat lanseeraavat nimikkeen lean- (eli virtaviivainen) tuotanto Vuonna 1990 ilmestyi kirja The Machine That Changed the World,
joka toi leanin laajempaan länsimaalaiseen tietoisuuteen
Toyota alkoi 2000-luvulla käyttämään tuotantojärjestelmästään myös sisäisesti nimitystä lean

Viimeisen 25 vuoden aikana on ilmestynyt suuri määrä kirjoja, jotka kuvaavat Toyotan tuotantojärjestelmää, eräs kuuluisimmista ja vaikutusvaltaisimmista näistä on Jeffrey Likerin The Toyota Way (2001)
 
Toyota production system (TPS)
 
Alun perin lean oli Toyotalla autojen tuotantoa (production) optimoiva toimintatapa, sittemmin leania on ruvettu hyödyntämään myös tuotekehityksessä (development)
Tuotanto ja tuotekehitys ovat luonteeltaan hyvin erilaisia ja niihin sovellettavat lean-käytänteet eroavatkin paikoin

Leania on sovellettu lukuisille eri aloille, ohjelmistotuotantoon sen lanseerasi 2003 ilmestynyt Mary ja Tom Poppendieckin kirja Lean software development, an agile toolkit
Klassikon asemastaan huolimatta kirja on jo paikoin vanhentunut ja tulkitsee leania osin melko suppeasti
Scrumin kehittäjät Ken Schwaber ja Jeff Sutherland tunsivat lean- ajattelun, ja monet Scrumin piirteet ovat saaneet vaikutteita leanista

Leania on ruvettu soveltamaan yhä suurempaan määrään asioita, aina terveydenhoidosta, pankkitoimintaan
Lean tai mitä erilaisemmat lean-nimikkeen alla olevat (ja myytävät) asiat ovatkin alkaneet elämään omaa, Toyota producton systemistä erillistä elämäänsä ja nykyään on välillä vaikea sanoa tarkemmin mistä on kyse kun joku puhuu leanista

Lean tuotanto ja tuotekehitys
 
Lean prduction-delvelopment-thinking Käsittelemme nyt tarkemmin leania Craig Larmanin ja Bas Vodden
mainioon kirjaan Scaling Lean & Agile Development perustuen
Leania esittelevä luku ositteessa
http://www.leanprimer.com/downloads/lean_primer.pdf
Luku esittelee nimenomaan Toyota production systemin modernia muotoa

Leania havainnollistetaan useissa lähteissä lean thinking houseksi nimitettävänä kaaviona joka on esitelty seuraavalla kalvolla
Kaavio havainnollistaa, että leanilla on
tavoite (goal)
perusta (foundation)
kaksi peruspilaria (pilars) ja
joukko näitä tukevia periaatteita (14 principles ja product development -periaatteet)

Näiden lisäksi on olemassa joukko leania tukevia työkaluja

Työkaluista kuuluisin lienee kurssinkin aikana mainittu Kanban
 
Lean: tavoite ja perusta Leanin tavoite (goal)
Sustainable shortest lead time, best quality and value (to people and society), most customer delight, lowest cost, high morale, safety
Tavoitteena saada aikaan pysyvä nopea tapa edetä ”ideasta asiakkaalle myytyyn tuotteeseen”
siten että tämä tapahtuu työntekijöitä ja yhteistyökumppaneita riistämättä, ylläpitäen korkea laatutaso ja asiakastyytyväisyys

Leanin perusta (foundation)
Management applies and teaches lean thinking, and bases decisions on this long-term philosophy
Jotta tavoite on mahdollinen, tulee taustalla olla syvälle yrityksen kaikille tasoille juurtunut pitkälle tähtäävä lean-toimintatapa, mitä johtajat soveltavat ja opettavat alaisille

Lean rakentuu kahden peruspilarin varaan
jatkuvan parantaminen (continuous improvement) ihmisten kunnioittaminen (respect for people)

Leanin peruspilarit
jatkuvan parantaminen (continuous improvement)
Defines Toyota’s basic approach to doing business
The true value of continuous improvement is in creating an atmosphere of continuous learning and an environment that not only accepts, but actually embraces change
The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, “Why are we doing this?”
Such an environment can only be created where there is respect for people ihmisten kunnioittaminen (respect for people)
Includes concrete actions and culture within Toyota
not making people do wasteful work but instead real teamwork
mentoring to develop skillful people
humanizing the work and environment, safe and clean environment, and philosophical integrity among the management team

Leanin tavoitetta ja peruspilareja tukevat konkreettisemmat toimintaa ohjaavat lean-periaatteet (lean principler) joita käsittelemme pian

TPS:n kehittäjä Taiichi Ohno kuvaa jatkuvan parantamisen periaatetta seuraavasti:
All we are doing is looking at the time line, from the moment the customer gives us an order to the point where we collect the cash
And we are reducing the time line by reducing the non-value- adding wastes

Keino päästä nopeampaan tuotantosykliin on siis eliminoida arvoa (value) tuottamattomia asioita eli jätettä (waste)
Mitä lean tarkalleen ottaen tarkoittaa arvolla ja jätteellä?
Arvolla tarkoitetaan niitä asioita ja työnteon vaiheita, mistä asiakas on valmis maksamaan, eli mitkä tuottavat asiakkaalle hyötyä
Jätteellä taas tarkoitetaan kaikkea tuotantoon liittyvää, mikä ei tuota asiakkaalle arvoa
Lean tunnistaa alunperin 7 lähdettä jätteelle (muda)
Over-prodution, In-process inventory, extra processing, transportation, motion, waiting, defects

Jatkuva parantaminen – arvo ja jäte
 
Lean-jäte ohjelmistotuotannon näkökulmasta Over-prodution ylituotanto
Tuotteita tulee valmistaa ainoastaan siinä määrin mitä asiakas on niitä tilannut, eli ei kannata tehdä varastoon
Ohjelmistojen ylimääräiset toiminnallisuudet voidaan ajatella olevan ylituotantoa
tutkimuksien mukaan 64% ohjelmistojen toiminnallisuuksista on joko ei ollenkaan tai ainoastaan erittäin harvoin käytettyjä

In-process inventory välivarastointi
Tähän kategoriaan kuuluu osittain tehty työ ja sen säilöminen
Ilmentymiä ohjelmistotuotannossa
Tarkka vaatimusmäärittely ominaisuuksille joita ei vielä toteuteta Valmis koodi mikä ei ole vielä testattu tai otettu käyttöön
Koodi joka toteuttaa asiakkaan ehkä tulevaisuudessa haluamia toiminnallisuuksia

extra processing liikatyö
prosessin pakottamat turhat työvaiheet ”Pyörän keksiminen uudelleen”

Lean-jäte ohjelmistotuotannon näkökulmasta Transportation tarpeeton materiaalin siirtely
Ohjelmistojen kontekstissa ns ”handoff”, eli jos ohjelmistotuote esim.
määritellään ja toteutetaan erillisten tiimien toimesta tai

toteutetaan ja viedään tuotantoon erillisten tiimien toimesta Motion työntekijöiden tarpeeton liikkuminen

Waiting turha odotus
Esim. aika, joka joudutaan odottamaan että yrityksen johto hyväksyy vaatimusmäärittelyn, testaajat ehtivät testaamaan ohjelman uuden version, ylläpito vie sovelluksen uuden version tuotantoon, joku mergeää pullrequestin...

Defects viat
Järjestelmässä on väkisinkin jossain tuotannon vaiheessa vikoja, mutta testaaminen ja vikojen havaitseminen vasta tuotannon loppuvaiheessa on asiakkaan arvon tuottamisen kannalta erittäin epäoptimaalista

– –
Ohjelmistotuotannossa task switching: eli liian nopea vaihtelu eri työtehtävien välillä, esim. työskentely yhtäaikaa monessa projektissa

Lean-jäte ohjelmistotuotannon näkökulmasta Myöhemmin on ehdotettu alkuperäisten jätteiden lisäksi uusia, mm.
Under-realizing people’s potential and varied skill, insight, ideas, suggestion

Lean jakaa jätteet kahteen eri luokkaan
Pure waste
These are non-value adding actions that in principle can and should be eliminated now
For example, if a group is participating in the waste of defects with test-last and correct-last, that can be replaced with acceptance test-driven development

Temporarily necessary waste
These are things we must do because of some constraint, but still correctly classify as waste.
Eg. banks must do “regulatory compliance” activities that are required by law, but they are not value-adding actions in the eyes of the paying customer
These are temporary wastes because in the future it may be possible to change things so they are no longer necessary
 
Jatkuvassa parantamisessa on siis tarkoitus optimoida toimintaa eliminoimalla asiakkaalle arvoa tuottamatonta jätettä
Jatkuvasta parantamisesta käytetään usein sen japaninkielista nimitystä kaizen
Kaizen on kaikkia työntekijöitä koskeva kattava toimintafilosofia:
As a mindset, it suggests “My work is to do my work and to improve my work” and “continuously improve for its own sake.”

Kaizeniin liittyvä syklinen parannusprosessiin saattavat liittyä tasaisin väliajoin pidettävät tilaisuudet ”kaizen event”:it

Jatkuva parantaminen
Kaizen on myös konkreettinen tapa toimia
choose and practice techniques/processes “by the book” that the team and/or product group has agreed to try, until they are well understood and mastered
experiment until you find a better way, then make that the new temporary ‘standard’
repeat forever

Scrumin retrospektiivit ovat klassinen esimerkki kaizen eventeistä
 
Value stream mapping
Jätteen kartoittamisessa käytetään usein value stream mappingia
Ideana on kuvata tuotteen kulku käytetyn prosessin työvaiheiden läpi ja visualisoida tuotteelle arvoa tuottavat työvaiheet suhteessa tuotteen koko valmistuksen elinkaareen

Jos esim value steream mapping paljastaa prosessista jätteitä, eli arvoa tuottamattomia asioita (ks 7 jätetyypin lista), tulee niistä hankkiutua eroon
Kaizenissa ei kuitenkaan ole tarkoitus lääkitä pelkkää oiretta, vaan tehdä jätteelle perimmäisen syyn analyysi (root cause analysis) ja pyrkiä näin kestävämpiin ja vaikuttavampiin parannuksiin
Eräs root cause analysis -tekniikka on ”five whys”, esim.
Miksi koodin valmistumisesta menee 1.5 viikkoa sen tuotantoon saamiseen?
QA-osaston on vielä varmistettava, että koodi toimii staging-ympäristössä
Miksi? Ohjelmoijilla ei ole aikaa testata koodia itse staging-ympäristössä
Miksi? Ohjelmoijilla on kiire sprintin tavoitteena olevien user storyjen tekemisessä
Miksi? Edellisten sprinttien aikana tehtyjen storyjen bugikorjaukset vievät yllättävän paljon aikaa
Miksi? Laadunhallintaa ei ehditä koskaan tekemään kunnolla siinä sprintissä missä storyt toteutetaan

Näin kysymällä toistuvasti miksi on mahdollista päästä ongelman perimmäisen syyn lähteille, eli sinne mitä korjaamalla jäte saadaan toivon mukaan eliminoitua

Perimmäisen syyn analyysi - five whys

Leanissa on siis tarkoitus optimoida aikaa, mikä kestää tuotteen suunnittelusta sen asiakkaalle toimittamiseen
Arvo pyritään saamaan virtaamaan (flow) asiakkaalle ilman turhia viiveitä ja työvaiheita
Value stream map visualisoi arvon virtausta
Leanin mekanismi virtauksen optimointiin on pull-systeemien käyttö
Pull-systeemillä tarkoitetaan tuotannonohjaustapaa, missä tuotteita, tai tuotteiden tarvitsemia komponentteja tehdään ainoastaan asiakkaan tilauksen saapuessa
Näiden vastakohta on push-systeemi, missä tuotteita ja komponentteja tehdään etukäteen varastoon ja toivotaan sitten että tuotteet ja komponentit menevät kaupaksi
Esim. pizzeriat toimivat pull-periaatteen mukaan, pizza valmistetaan vasta kun asiakas tilaa sen. Unicafe taas on push-systeemi, lounaita tehdään varastoon ja toivotaan että ne menevät kaupaksi asiakkaille.

Pull-systeemi toteutetaan usein kanbanin avulla
Kanban tarkoittaa signaalikorttia
Kanban toteuttaa visuaalisen ohjauksen, minkä avulla työntekijöiden on helppo tietää miten seuraavaksi tulee toimittaa

Leanin periaatteita: pull-systeemi
 
Kanban
Kun asiakas tilaa tuotteen, viedään tilausta vastaava kanban-kortti tehtaalle
Jos tuotteen valmistaminen edellyttää esim. viittä eri komponenttia, ”tilataan” komponentit niitä valmistavilta työpisteiltä viemällä niihin kunkin komponentin tilausta vastaava kanban-kortti
Jos komponenttien valmistus edellyttää jotain muita komponentteja, tilataan nekin samalla periaatteella

Kun komponentti on valmis, viedään se tilaajalle, samalla kanban-kortti palautetaan tulevien tilauksien tekemistä varten
Kanban-kortteja on käytössä vain rajallinen määrä, tällä kontrolloidaan sitä että liikaa työtä ei pääse kasautumaan mihinkään tuotannon vaiheeseen
Näin kanbanin avulla ”vedetään” (pull) tarvittavat komponentit, sensijaan että komponentteja olisi etukäteen valmistettu varalta suuret määrät varastoon
Varastoon tehdyt komponentit muodostaisivat riskin
Niitä ei välttämättä tarvittaisi jos tilauksia ei tulisi tarpeeksi
Jos komponenteissa olisi valmistusvika, saattaisi kestää kauan kunnes vika paljastuisi ja viallisia komponentteja olisi ehkä ehditty tekemään suuri määrä

Käytännössä pull-periaatteella toimiva tuotanto saattaa ylläpitää pieniä välivarastoja saadakseen tuotteen valmistamiseen kuluvan sykliajan optimoitua

Kanban on otettu laajalti käyttöön myös ketterässä ohjelmistokehityksessä, luennon 4 kalvoissa puhutaan asiasta enemmän
Ohjelmistopuolen kanban on periaatteiltaan hieman erilainen Toteutettavaa toiminnallisuutta, esim. user storyä vastaa kanban-kortti Kortti kulkee eri työvaiheiden kautta
virtaus, eli yksittäisen storyn nopea valmistuminen saadaan aikaan rajoittamalla tietyissä työvaiheissa kesken olevan työn määrää WIP (work in progress) -rajoitteilla

Kanban ohjelmistotuotannossa
 
Jotta pull-järjestelmä toimii hyvin, eli asiakkaan arvo virtaa tasaisesti, on edullista jos eri työvaiheiden kestoon ei liity liikaa varianssia, tähän liittyy leanin periaate level the work
Yksi varianssin aiheuttaja ovat viat. Leanin periaatteita ovatkin
Stop and fix
Build quality in

Stop and fix viittaa Toyotan vanhaan periaatteeseen, missä kuka tahansa on velvollinen pysäyttämään tuotantolinjan vian, esim. vaurioituneen komponentin havaitessaan
vian perimmäinen syy (root cause) tulee selvittää mahdollisimman nopeasti ja pyrkiä eliminoimaan vian mahdollisuus tulevaisuudessa eli tuotantossa tulee olla laatu sisäänrakennettua build quality in

Ohjelmistotuotannon käytänteistä Continuous integration ja automaattinen testaus voidaan nähdä suoraan stop and fix - ja build quality in -periaatteiden ilmentymänä

Leanin periaatteita
 
Perinteisessä massatuotannossa keskitytään pitämään tuotantolaitteistot käynnissä maksimikapasiteetilla ja työntekijät koko ajan työllistettyinä
Yksittäisten työntekijöiden palkkauskin perustuu usein suorituskohtaisiin bonuksiin


Näin ajatellaan että tuotteiden yksikköhinta saadaan mahdollisimman alhaiseksi ja yrityksen tuottavuus maksimoituu
Yksittäisten työntekijöiden ja koneiden tehokkuuden tarkastelun sijaan lean keskittyy arvoketjujen optimoinnin avulla järjestelmien konaisvaltaiseen kehttämiseen ja olettaa, että se on pidemmällä tähtäimellä yritykselle kannattavampaa (long term philosophy)
Yksittäisen koneen suuri käyttöaste voi olla lokaalia optimointia, joka voikin yrityksen kannalta olla jopa haitallista
Esim. valmistetaan paljon komponentteja, mitä ei lopulta tarvita

Surullisen kuuluisia esimerkkejä lokaalista optimoinnista on paljon, mm. yliopistojen eri laitosten säästöt tilakustannuksista
Yliopiston rakennuksista maksama vuokra on edelleen sama vaikka jokin laitos ”säästää” jättämällä tiloja käyttämättä

Keskittymällä arvon virtaukseen pyritään toiminnan parannuksessa ottamaan huomioon koko tuotantosysteemiä koskevat pullonkaulat

Leanin periaatteita
 
Leanin periaatteita
Decide as late as possible
Pull-systeemeissä ei ole tapana tehdä tuotantoon liittyviä päätöksiä (esim. miten paljon tuotetta ja sen tarvitsemia komponentteja tulee valmistaa) aikaisessa vaiheessa, vaan vasta tarpeen vaatiessa
Englanniksi tätä myöhäistä päätöksen tekemistä luonnehditaan myös seuraavasti commit at the last responsible moment, eli päätöksiä viivytetään, mutta ei kuitenkaan niin kauaa että viivyttely aiheuttaa ongelmia

Kun päätös tehdään myöhään on tästä se merkittävä etu, että päätöksen teon tueksi on käytettävissä maksimaalinen määrä tietoa
Toisin kuin liian etukäteen tehtävissä päätöksissä mitkä ovat enemmän spekulatiivisia

Kun päätökset on tehty, toimitaan pull-systeemin hengessä mahdollisimman nopeasti
implement rapidly tai deliver as fast as possible
näin arvo saadaan virtaamaan asiakkaalle ilman turhia viiveitä

Mitä nopeammin arvo saadaan virtaamaan, sitä enemmän päätöksiä on mahdollista viivyttää ja päätökset voidaan tehdä entistä paremman tiedon valossa

Edellisen kalvon periaatteiden soveltaminen näkyy selkeästi ketterässä ohjelmistotuotannossa
Vaatimuksia hallitaan product backlogilla, joka on parhaassa tapauksessa DEEP
Detailed aproproately, emergent, estimated, prioritized
Tarkkoja vaatimuksia ei määritellä spekulatiivisesti vaan at the last
responsible moment
Alhaisen prioriteetin user storyjä ei ole kovin tarkkaan määritelty
Kun product owner valitsee storyn seuraavaan sprinttiin toteutettavaksi määritellään storyn hyväksymäkriteerit ja suunnitellaan se toteutuksen osalta
Ja deliver as fast as possible eli toteutetaan valmiiksi seuraavan sprintin aikana

Scrum voidaankin nähdä leanin mukaisena pull-systeeminä, missä jokaiseen sprinttiin otetaan kerrallaan asiakkaan edustajan viime hetkellä viimeistelemät tilaukset, jotka toteutetaan nopeasti, eli sprintin aikana
Arvo (eli toimivaksi asti toteutetut toiminnallisuudet) virtaa asiakkaalle sprinttien määrittelemässä rytmissä

Arvon virtaaminen ketterässä ohjelmistotuotannossa
 
Ketterässä ohjelmistotuotannossa on viime aikoina ruvettu tehostamaan arvon virtausta usein eri menetelmin
Alunperin Scrumin pyrkimys viedä uusia ominaisuuksia tuotantoon sprinteittäin Viime aikojen trendinä on ollut tihentää sykliä
Jatkuva tuotantoonvienti eli continuous deployment voi tarkoittaa sitä, että jopa jokainen commit johtaa tuotantoonvientiin

Arvon virtaaminen ketterässä ohjelmistotuotannossa
Scrum rajoittaa kesken olevan työn määrää (joka on siis eräs lean waste) siten, että sprinttiin otetaan vaan tiimin velositeetin verran user storyjä
Kaikissa konteksteissa, esimerkiksi jatkuvaa tuotantoonvientiä sovellettaessa aikarajoitettu sprintti ei ole mielekäs
Paikoin onkin siirrytty ”puhtaampaan” pull-systeemiin, missä user storyjä toteutetaan yksi kerrallaan niin nopeasti kuin mahdollista
Kun tuotantokapasiteettia vapautuu, valitsee product owner tärkeimmän storyn
Story määritellään, suunnitellaan ja sitten toteutetaan välittömästi alusta loppuun
Virtaus varmistetaan sillä, että yhtä aikaa työn alla ei ole kuin 1 tai korkeintaan muutama story

Luennolla 4 mainittu Scrumban-menetelmä toimii pitkälti juuri näin
 
Toyotalla useimmat uudet työntekijät koulutetaan huolellisesti perehtymään käytännön tasolla lean-ajattelun periaatteisiin
Useiden kuukauden koulutuksen aikana uudet työntekijät työskentelevät monissa eri työtehtävissä
Heidät opetetaan tunnistamaan lean-jäte eri muodoissaan
Tarkoituksena on sisäistää jatkuvan parantamisen (kaizen) mentaliteetti

Johtamiskulttuurissa keskiössä on lean-ajattelun opettajina, mentoreina ja työn valmenajana toimivat johtajat/managerit
Periaate grow leaders kuvaa Toyotan tapaa kasvattaa lean- toimintafilosofian sisäistäviä johtajia
Periaate my manager can do my job better than me kuvaa sitä, että johtajat ovat ovat firman sisällä eri työtehtävien kautta uusiin vastuisiin kasvavia ihmisiä, jotka hallitsevat myös työntekijöiden vastuulla olevan hands on -työn
Johtajat ovat ensisijaisesti toiminnan etulinjassa toimivia lean- käytänteiden opettajia ja mentoreita

Leanin johtajat
 
Leanin johtajat
Eräs tärkeä johtamisen periaate on go see (genchi genbutsu)
Työntekijöiden, erityisesti managerien tulee ”nähdä asiat omin silmin” eikä pelkästään istua työpöydän ääressä lukemassa muiden raportoimia faktoja
Tämä liittyy siihen ideaaliin, että johtajien oletetaan johtavat etulinjassa (gemba) eli siellä missä työ tosiasiallisesti tehdään

Toyota production systemsin kehittäjän T. Ohnon sanoin:
You can’t come up with useful kaizen sitting at your desk... We have too many people these days who don’t understand the workplace. They think a lot, but they don’t see. I urge you to make a special effort to see what’s happening in the workplace. That’s where the facts are.

Scrum masterin rooli on osin leanin ideaalien mukainen. Tosin kaikkiin scrum mastereihin ei päde periaate my manager can do my job better than me
Monissa ohjelmistoyrityksissä teknistä puolta johtajuudesta edustaa edustavat esim, lead developer - tai senior developer -nimikkeellä olevat kokeneemmat mentorin roolissa toimivat työntekijät

Sovellettaessa leania tuotantoon (production), pääasiallisena fokuksena on toiminnan parantaminen jätettä eliminoimalla
Sovellettaessa leania tuotannon optimoinnin sijaan tuotekehitykseen (development) esim. kokonaan uusien automallien suunnitteluun, nousee esiin uusia periaatteita
Toyotalla periaatteena tuotekehityksessä on
out-learn the competitors, through generating more useful knowledge and using and remembering it effectively

Fokukseen nousee toiminnan tehostamisen lisäksi oppimisen kiihdyttäminen (amplify learning)
Kannattaa pyrkiä mahdollisimman arvokkaaseen tietoon (high-value information), mm. kiinnittämällä huomio asioihin, mihin sisältyy paljon epävarmuutta (focus on uncertain things)
Epävarmat ja suuren teknisen riskin sisältävät ideat tulee toteuttaa/testata nopeasti, niiden suhteen viivästyneellä tiedolla on korkea hinta (cost of delay)

Lean-tuotekehityen periaatteita
 
Lean-tuotekehityen periaatteita
Eräs leanin mekanismi oppimisen nopeuttamiseen on set based concurrent
development
Jos tarkoituksena on kehittää esim. uusi moottorin jäähdytysjärjestelmä, aletaan yhtä aika kehittämään useita vaihtoehtoisia ratkaisuja eri tiimien toimesta
Tasaisin väliajoin kehitettäviä ratkaisuja vertaillaan, ja osa niistä karsitaan
Lopulta parhaaksi osoittautuva ratkaisu valitaan käytettäväksi lopputuotteessa

Set based -menetelmä on melko erilainen kuin useimmiten sovellettava iteratiivinen kehitysmenetelmä, missä lähtökohtana on yksi askeleittain paranneltava ratkaisu
Ohjelmistotuotannossa set based -menetelmää sovelletaan aika harvoin, lähinnä käyttöliittymäsuunnittelussa esittelemällä asiakkaalle aluksi useita rinnakkaisia ehdotelmia mahdollisesta käyttöliittymäratkaisusta

Toyotalla tuotekehitystä johtaa chief technical engineer
Vastuussa sekä tuotteiden teknisestä että liiketoiminnallisesta menestyksestä
Kyseessä tyypillinen leanin etulinjassa toimiva johtaja joka tuntee tarkasti käytännön työn, mutta on myös erittäin lähellä asiakasta
Poikkeaa Scrumin Product Ownerista teknisen taustansa takia

90-luvulta alkaen lean on herättänyt maailmalla suurta kiinnostusta ja sitä on pyritty soveltamaan lähes kaikilla aloilla ohjelmistokehitys mukaan lukien
Lean-periaatteet ovat olleet hyvin esim. Scrumin kehittäjien tiedossa ja vaikka Scrumin alkuperäiset lähteet eivät käytäkään leanin terminologiaa, on Scrumissa monin paikoin piirteitä leanista
Viime aikainen ketterien menetelmien kehitys on vienyt tiettyjä ideoita (mm. arvoketjun optimoimista user storyjen läpimenoaikoja minimoimalla) huomattavasti Scrumin ja ketterän alkuaikojen käytänteitä pidemmälle
Nykyään puhutaan paljon leanista ohjelmistokehityksestä

Sekä ketterissä menetelmissä, että leanissa on sama fundamentaali periaate, toimintojen jatkuva kehittäminen
Rajanveto leanin ja ketterän välillä ei olekaan ollenkaan selvä ja oikeastaan täysin keinotekoista
Esim. Scrumin kehittäjät eivät ole tarkoittaneet Scrumia staattiseksi rakennelmaksi, jota noudatetaan kirjaimellisesti tästä ikuisuuteen, sellainen toiminta ei olisi ketteryyttä.
Ketteryyttä on läpinäkyvyyden mahdollistava toimintojen parantamiseen keskittyvä inspect-and-adapt-sykli

Käytännössä tämä on täsmälleen sama idea kuin leanin kaizen
Leanin soveltaminen eri aloille

Leanin soveltamisessa on kohdattu myös paljon ongelmia
Lean on ajattelumalli, joka on kehitetty Toyotan tarpeisiin, malli on jalostunut ja muuttunut aikojen kuluessa
on osin epäselvää miten Toyotan käytänteet siirretään eri aloille

Kuten agile, myös lean ei ole joukko työkaluja vaan jatkuva toimintatapa, Toyotan CEO:n sanoin
The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, “Why are we doing this?”
In Toyota and in lean thinking, the idea is to repeat cycles of improvement experiments forever.

## skaala

Laajan mittakaavan ketterä
 
Scrum of Scrums Scrum of Scrums -periaate on jo hyvin vanha
Artikkelissa Agile Can Scale: Inventing and Reinventing SCRUM in Five Companies toinen Scrumin kehittäjistä Jeff Sutherland kertoo harjottaneensa Scrum of Scrumia jo vuonna 1996
Sutherland sovelsi periaatetta firmassa, missä oli satoja sovelluskehittäjiä ja kymmeniä Scrum-tiimejä joiden vastuulla oli useita eri tuotteita
Jokaisen tuotteen tiimejä kordinoi oma, kerran viikossa kokoontuva Scrum of Scrums -tiim
Koko firman tuotejoukkoa hallinnoi ”management Scrum” eli Scrum of Scrum of Scrums -tiimi joka kokoontui kuukausittain
Ylimmän tason management Scrum -tiimi koostui yrityksen johdosta, tuotepäälliköistä ja johtavista ohjelmistoarkkitehdeistä

Sutherlandin kuvaus ei ole kovin seikkaperäinen, ja se ei anna viitteitä miten esim backlogien suhteen tulisi toimia laajemman skaalan Scrumissa

Viimeisen kymmenen vuoden aikana ketterän skaalaamiseen on alettu kiinnittämään enemmän huomiota ja on esitelty useita laajan mittakaavan ketteriä menetelmiä
Näistä eniten huomiota saaneet ovat
Scaled Agile Framework eli SAFe
http://www.scaledagileframework.com

Yhteistä näille on se, että ne laajentavat ketteryyttä ottamalla mukaan lean-ajattelua, eli viime viikolla käsittelemäämme Toyota Production Systemistä kehittynyttä tuotanto-, tuotekehitys- ja johtamismenetelmää
Toisin kuin ketterät menetelmät, lean on lähtökohtaisesti tarkoitettu toimimaan todella suuressa skaalassa ja se sisältääkin enemmän koko organisaation toimintaa ohjaavia periaatteita kuin perinteinen ketterä
Käsitellään nyt hieman tarkemmin SAFea ja LeSS:iä (DA on listatuista menetelmistä vähimmälle huomiolle jäänyt)

Large Scale Scrum eli LeSS
https://less.works
Laajan mittakaavan ketterä
Disiplined Agile eli DA
http://www.disciplinedagiledelivery.com
 
SAFe:n pääasiallinen kehittäjä on David Leffingwell joka toimi Nokia Mobile Phonesissa (NMP) konstulttina 2000-luvulla
SAFe on syntynyt pitkälti Nokialla tehdyn työn pohjalta
NMP:lla olikin käytössä eräänlainen esiversio SAFe:sta
SAFe:n virallinen ensimmäinen version julkaistiin 2011


Kärjistetysti sanoen SAFe yhdistää kaikki viimeisen 20 vuoden aikana kehitetyt ketterän ja leanin ohjelmistokehityksen parhaat käytänteet sekä joukon yrityksien tuotteiden hallinnointiin suunnattuja käytänteitä
SAFe tarjoaa suuren määrän käytänteitä (principles), henkilä- ja tiimirooleja sekä käsitteitä
SAFe sanoo olevansa framework eli menetelmäkehys, tarkoitus on että yritykset räätälöivät itselleen sopivanlaisen prosessin käyttäen SAFe:n tarjoamia työkaluja
SAFe tarojaa myös 4 erikokoista valmiiksi räätälöityä konfiguraatiota
Näistä pienin Essential SAFe on tarkoitettu pienemmille yrityksille ja SAFen soveltamisen alkuvaiheeseen
Konfiguraatiosta suurin Full SAFe taas soveltuu massiivisten, useita eri tuotteita hallitsevan yrityksen käyttöön

Seuraavalla kalvolla oleva kaavio havainnollistaa Full SAFen käsitteistöä

SAFe
Sovelluskehityksen ytimessä on SAFen hieman modifioima Scrum
Tiimien kordinointia hallitaan ylhäältä päin (top down) kokoamalla yhdestä tuotteesta vastaavien tiimien joukko käsitteen release train alle
Release trainin Scrum-tiimit toimivat synkroonissa toistensa kanssa tuottaen yhdessä isompia kokonaisuudessa useammasta sprintistä koostuvan product increment -ajanjakson aikana

Product incrementtejä ja niitä toteuttavia release traineja taas ohjaillaan yhä korkeammalta organisaatiosta erilaisten johtajien toimesta
SAFe tarjoaa tähänkin paljon tukea käsitteistön ja märittelemiensä roolien kautta

SAFe on dokumentoitu laajasti ja se antaa erittäin yksityiskohtaista ohjeistusta helpottamaan SAFen käyttöönottoa ja noudattamista
Ohjeistusta antavat tietysti kallispalkkaiset konsultit ja räätälöidyt koulutuspaketit ja sertifiointi

SAFe vaikuttaa olevan firmojen johdon suosiossa
Toisin kuin ketterät menetelmät yleensä SAFe tarjoaakin firman managementille sopivasti tekemistä roolien ja käytänteiden muodossa
 
Kuten aiemmin mainittu, sisältää SAFe käytännössä kaikki mahdolliset ketterän ja lean-ohjelmistokehityksen parhaat käytänteet
Kaikki vieläpä selkeästi ja yksityiskohtaisesti dokumenoituna

SAFe onkin eräänlainen agile/lean-kehityksen supermarket, kaikki on helposti saatavissa valmiina pakatussa mudossa
Pick and mix, avaa paketti ja seuraa ohjetta...
SAFe käytetään paljon ja se on erityisen suosittu Suomessa
SAFe on saanut osakseen myös paljon kritiikkiä
Osa kritiikistä kohdistuu SAFen määrittelemän prosessin raskauteen
Osa taas SAFe:n top down -management luonteeseen

Esim. Scrumin kehittäjä Ken Schwaber on kyseenalaistanut sen että onko SAFe ylipäätään ketterä menetelmä ketteryyden alkuperäisen idean mukaan
Agile Manifestossahan on periaate Individuals and Interactions Over Processes and Tools

SAFe taas prosessina vaikuttaa kovin raskaalta
SAFen kritiikkiä
 

LeSS:in taustalla on Craig Larman ja Bas Vodde jotka työskentelivät konsultteina 2000-luvun alussa mm. Nokia Siemens Networksilla
Toisin kuin SAFe®, LeSS on erittäin yksinkertainen, hyvin vahvasti Scrumiin pohjautuva
Uusia rooleja, artifakteja ja palavereja ei ole LeSSistä on kaksi eri versiota
LeSS tilanteisiin, missä tuotetta tekee 2-8 Scrum-tiimiä
LeSS Huge tilanteisiin, missä tiimejä tarvitaan suurempi määrä
 
LeSS eli Large Scale Scrum
 
LeSS
Sekä LeSS että LeSS Huge perustuvat seuraaville oletuksille
Kehitetään yhtä tuotetta, jolla on yksi Product Owner ja yksi Product Backlog
Kaikilla tiimeillä on samaan aikaan etenevät Sprintit
Tiimit tekevät sprintin aikana yhdessä tuotteesta yhden uuden version
one shippable product increment

Yksi LeSS-toteutus on tarkoitettu siis yhden tuotteen kehittämiseen.
Jos yrityksellä on useita ei tuotteita, niitä kutakin varten on oma LeSS-toteutuksensa
Eli oma erillinen product backlog ja Product owner kullekin LeSS-toteutukselle LeSS ei ota kantaa siihen miten firma hallinnoi tuoteperheitään

LeSS is Scrum Large-Scale Scrum (LeSS) isn’t new and improved Scrum
It’s not Scrum at the bottom for each team, and something different layered on top


applied to many teams cross-functional, cross-component, full-stack feature teams of 3–9 learning-focused people that do all to create done items and a shippable product
working together The teams are working together because they have a common goal to deliver one common shippable product at the end of a common Sprint, and each team cares about this because they are a feature team responsible for the whole, not a part
one product A broad complete end-to-end customer-centric solution that real customers use
It’s not a component, platform, layer, or library

It’s about figuring out how to apply the principles, elements, and elegance of Scrum in a large-scale context, as simply as possible
Like Scrum and other truly agile frameworks, LeSS is “barely sufficient methodology”

LeSSin taustalla olevat periaatteet: more with less LeSSin taustalla on joukko tuttuja ketterän ja lean-kehityksen periaatteita
Periaatteet ovat lähes samat kuin SAFe:ssa, yksi periaatteista tekee kuitenkin selvää eroa menetelmien välille
More with less
We don’t want more roles because more roles leads to less responsibility to Teams
We don’t want more artifacts because more artifacts leads to a greater distance between Teams and customers
We don’t want more process because that leads to less learning and team ownership of process
Instead we want more responsible Teams by having less (fewer) roles
We want more customer-focused Teams building useful products by having less artifacts
We want more Team ownership of process and more meaningful work by having less defined processes.

We want more with less
 LeSS: periaatteet
Lisää periaatteista https://less.works/less/framework/introduction.html
 

LeSS
Katsotaan hieman tarkemmin LeSS:in pienempää konfiguraatiota
The smaller LeSS framework is for one (and only one) Product Owner who owns the product, and who manages one Product Backlog worked on by teams in one common Sprint, optimizing for the whole product.
The LeSS framework elements are about the same as one-team Scrum:
Roles
one Product Owner
two to eight Teams
a Scrum Master for one to three teams

Teams are feature teams
true cross-functional and cross-component full-stack teams that work together in a shared code environment
  
each doing everything to create done items
 
Artifacts
One potentially shippable product increment one Product Backlog,
a separate Sprint Backlog for each Team

Events
One common Sprint for the whole product
it includes all teams and ends in one potentially shippable product increment

Sprintin suunnittelun ensimmäisessä osassa Product Owner ja tiimien edustajat valitsevat Product Backlogilta kaikille eri tiimille seuraavan sprintin storyt
Suunnittelun toisessa osassa tiimit muodostavat kukin oman sprint backlogin joiden avulla sprintin sisäinen toiminta hallitaan normaalin Scrumin tapaan
LeSS: kaksiosainen sprintin suunnittelu
 
LeSS: sprintin katselmointi ja kaksiosainen retrospektiivi
Kaikkien tiimien yhteinen aikaansaannos (one shippable product increment) katselmoidaan yhdessä
Retrospektiivi on kaksitasoinen: tiimikohtainen ja koko tuotteen valmistusprosessia tarkasteleva overall-retrospektiivi, missä on edustus kaikista tiimeistä ja mahdollisesti yrityksen johdosta
 
Kaikille tiimeille yhteisen sprintin suunnittelun (ensimmäisen osan), Sprint reviewin ja overall-retrospektiivin lisäksi LeSS ei edellytä muita tiimien väliseen koordinaatioon tarkoitettuja yhteisiä tapaamisia
LeSS antaa joukon aiheeseen liittyviä ohjeita ja suosituksia Cross-team coordination is decided by the teams
Prefer decentralized and informal coordination over centralized coordination
Emphasize Just Talk and informal networks via communicate in code, cross-team meetings, component mentors, travelers, scouts, and open spaces
Just Talk korostaa suoran kommunikoinnin tärkeyttä
Communicate in code tarkoittaa ryhmien välistä työskentelyä helpottava ohjelmointitapaa, mm. yhteisiä koodikäytänteitä ja jatkuvaa integraatiota
Scouteilla tarkoitetaan muiden tiimien daily scrumissa vierailemista

LeSS mainitsee myös Scrum of Scrums -palaverit yhtenä mahdollisena tiimienvälisen koordinoinnin muotona, mutta suosittelee mielummin informaalimpia kommunikaation muotoja

LeSS: Muu tiimien välinen koordinointi
 

Scrum olettaa, että noin 5-10% sprintin työskentelystä käytetään backlog groomingiin, jonka tarkoituksena siis pitää backlog DEEP:inä
LeSS kiinnittää eksplisiittisesti huomioita backlogin ylläpitämiseen
The Product Owner shouldn’t work alone on Product Backlog refinement
He is supported by the multiple Teams working directly with customers/users and other stakeholders
All prioritization goes through the Product Owner
Clarification is as much as possible directly between the Teams and customer/users and other stakeholders
Product Backlog Grooming is done per team for the items they are likely going to do in the future
Do multi-team and/or overall grooming to increase shared understanding and exploiting coordination opportunities when having closely related items or a need for broader input/learning

LeSS siis rohkaisee voimakkaasti sovelluskehittäjien ja asiakkaiden/loppukäyttäjien läheiseen kanssakäymiseen

LeSS: Backlogin ylläpito
 
LeSS huge
Edelleen yksi tuote ja yksi product backlog ja yksi vastuunalainen product owner
Backlog jaetaan vaatimusalueisiin (requirement area)


Jokaiselle alueelle siitä vastaava Area Product Owner
Muodostetaan koko tuotetta hallinnoiva Product owner -tiimi
Vaikka kyseessä yksi backlog, tarjotaan siihen oma aluekohtainen näkymä

On erittäin mielenkiintoista että molemmat SAFe ja LeSS ovat pitkälti syntyneet Suomessa ja Nokialla
Nokian organisaatiorakenteen takia Nokia Mobile Phonesin (NMP) ja Nokia Siemens Networksin (NSN) ohjelmistokehitystapa oli kuitenkin täysin erilainen
SAFe (NMP) ja LeSS (NSN) ovat samoista taustaperiaatteistaan ja yhteisestä syntykonsernista huolimatta hyvin erilaisia menetelmiä
Osoitteesta http://gosei.fi/blog/less-safe-comparison/ löytyy hyvä vertailu menetelmistä
Kuten aiemmin todettiin SAFe on suosittu yritysjohdon keskuudessa, mutta saanut paljon kritiikkiä arvovaltaistenkin ketterän kehityksen edustajien toimesta
En tiedä kuvastaako se mitään menetelmien pitkän tähtäimen toimivuudesta, mutta SAFe:n kotia Nokia Mobile Phonesia ei enää ole olemassakaan, Nokia (Siemens) Networks taas on nykyinen Nokia ja soveltaa edelleen LeSS-menetelmää
LeSS vs SAFe

Miten laajalti Agilea käytetään Internetistä löytyy aiheesta jossain määrin dataa
Forrester surveyed (2009) nearly 1,300 IT professionals and found that 35 percent of respondents stated that agile most closely reflects their development process
http://www.infoworld.com/d/developer-world/agile-software-development -now-mainstream-190

Agile methodologies are the primary approach for 39 percent of responding developers, making Agile development the dominant methodology in North America. Waterfall development, is the primary methodology of 16.5 percent of respondents (2010)
http://visualstudiomagazine.com/articles/2010/03/01/developers-mix-and -match-agile-approaches.aspx

HP:n vuonna 2015 tekemä tutkimus julistaa ”Agile is the new normal”
Tutkimuksessa 601 vastaajaa

Miten laajalti Agilea käytetään HP:n tutkimus ei määrittele kovin hyvin käsitteitä
A hybrid approach: incorporate at least some Agile solutions and principles
Leaning towards agile jää määrittelemättä


https://www.hpe.com/h20195/v2/GetPDF.aspx/4AA5-7619ENW.pdf
Ketteryys on Suomessa suosittua:
The results of the survey reveal that a majority of respondents'
organizational units are using agile and/or lean methods (58%)
Markkula ym.: Survey on Agile and Lean usage in Finnish software industry, ESEM 2012 (ks. ACM digital library)
http://esem.cs.lth.se/industry_public/Rodriguezetal_ESEM2012_IndustryT rack_1_0.pdf

Loppuvuodesta 2016 julkaistussa Brasiliassa, Suomessa ja Uudessa Seelannissa tehdyssä tutkimuksessa ”Adoption and Suitability of Software Development Methods and Practices” mainitaan seuraavat luvut
Scrum was most often utilized by respondents (71.2%), with Kanban (49.5%), Lean (39.7%) and Waterfall (35.3%) following in that order

http://ieeexplore.ieee.org/document/7890614/
 

Miten laajalti Agilea käytetään
Kuten edellisten kalvojen lukemat osoittavat, ketterä kehitys valtaa alaa
Sama trendi on näkyvissä Yhdysvaltojen hallituksen alaisissa ohjelmistoprojekteissa, joissa hitaan liikkeellelähdön jälkeen agile on noussut dominoivaan asemaan
https://www2.deloitte.com/insights/us/en/industry/public-sector/agile- in-government-by-the-numbers.html

 
VersionOnen ”internetin virallisesta” vuosiraportista
http://stateofagile.versionone.com

Mitä ketteriä menetelmiä käytetään?
 
VersionOne:
Ketterät käytänteet
 Ketterät ”engineering”-käytänteet
Suomen tilanne:
http://esem.cs.lth.se/industry_public/Rodriguezetal_ESEM2012_Indust ryTrack_1_0.pdf
 Ketterät käytänteet Suomesta tehdyssä tutkimuksessa (n=225)
 
Projektien onnistuminen: ketterä vastaan perinteinen Standish CHAOS raport 2015 (tutkittu yli 50000 projektia ympäri maailman)
https://www.infoq.com/articles/standish-chaos-2015

Kuten tämä(kin) tutkimus osoittaa, on suurien projekteien epäonnistumisriski huomattavasti pieniä korkeampi
 Ketteryydellä saavutettuja etuja tarkemmin eriteltynä
 Ketteryydellä saavutettuja etuja Suomessa...
 Suurimmat haasteet ketterien menetelmien käytössä
 
Evidenssiä on, mutta... Oikeastaan kaikki edelliset olivat kyselytutkimuksia
Käsitteitä ei ole kunnolla määritelty (esim. mitä ketteryydellä tai projektin onnistumisella tarkoitetaan)
Kyselyyn osallistuneet eivät välttämättä edusta tasaisesti koko populaatiota
Kaikkien kyselyjen tekijät eivät puolueettomia menetelmien suhteen (esim. VersionOne)

Eli tutkimusten validiteetti on kyseenalainen
Toisaalta kukaan ei ole edes yrittänyt esittää evidenssiä, jonka mukaan vesiputousmalli toisi systemaattisia etuja ketteriin menetelmiin verrattuna
Myös akateemista tutkimusta on todella paljon (mm. Markkulan ym. kyselytutkimus) ja eri asioihin kohdistuvaa. Akateemisenkin tutkimuksen systemaattisuus, laatu ja tulosten yleistettävyys vaihtelee
Ohjelmistotuotannossa on liian paljon muuttujia, jotta jonkin yksittäisen tekijän vaikutusta voitaisiin täysin vakuuttavasti mitata empiirisesti
Menetelmiä soveltavat kuitenkin aina ihmiset, ja mittaustulos yhdellä ohjelmistotiimillä ei välttämättä yleisty mihinkään muihin olosuhteisiin

Olemassa olevan evidenssin nojalla kuitenkin näyttää siltä, että ongelmistaan huolimatta ketterät menetelmät ovat ainakin joissakin tapauksissa järkevä tapa ohjelmistokehitykseen