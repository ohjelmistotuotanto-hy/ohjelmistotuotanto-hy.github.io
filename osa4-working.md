
## Laajan skaalan ketterä ohjelmistokehitys
 
Ketterät ohjelmistotuotantomenetelmät ovat alunperin tarkoitettu pienten tiimien hallintaan. Esimerkiksi Scrum mainitsee kehitystiimin koostuvan 3-9:stä henkilöstä Entä jos on kyseessä tuote, joka edellyttää suurempaa kehittäjäjoukkoa?

Perusperiaatteena on edelleen pitää tiimit pieninä, mutta kasvattaa tuotantokapasiteettia käyttämällä useampia tiimejä. Tämä taas edellyttää, että tiimien välistä työtä on koordinoitava jollain tavalla.

### Scrum of Scrums

Jo kauan käytetty tapa Scrumin skaalaamiseen on niinsanottu _Scrum of Scrums_ missä ideana on muodostaa koordinoiva tiimi, johon kuuluu yksi tai
tarvittaessa useampikin jäsen jokaisesta Scrum-tiimistä. Perinteisin tapa lienee koostaa kordinointitiimi Scrum mastereista, jissain tilanteissa parempi henkilö koordinointiin voi kuitenkin olla ns lead developer, eli Scrum-tiimin kokeneempi sovelluskehittäjä.
Scrum of Scrums -tiimi voi tavata joka päivä tai jos se ei ole tarpeen niin esimerkiksi viikoittain.

Scrum of Scrums Scrum of Scrums -periaate on jo hyvin vanha. Artikkelissa [Agile Can Scale: Inventing and Reinventing SCRUM in Five Companies](https://www.researchgate.net/publication/290823579_Agile_Can_Scale_Inventing_and_Reinventing_SCRUM_in_Five_Companies) toinen Scrumin kehittäjistä Jeff Sutherland kertoo harjottaneensa Scrum of Scrumia jo vuonna 1996.

Sutherland sovelsi periaatetta firmassa, missä oli satoja sovelluskehittäjiä ja kymmeniä Scrum-tiimejä, joiden vastuulla oli useita eri tuotteita.

Jokaisen tuotteen tiimejä kordinoi oma, kerran viikossa kokoontuva Scrum of Scrums -tiimi.
Koko firman tuotejoukkoa hallinnoi "management Scrum" eli Scrum of Scrum of Scrums -tiimi joka kokoontui kuukausittain. Tämä ylimmän tason management Scrum-tiimi koostui yrityksen johdosta, tuotepäälliköistä ja johtavista ohjelmistoarkkitehdeistä.

Sutherlandin kuvaus ei ole kovin seikkaperäinen, ja se ei anna viitteitä miten esim backlogien suhteen tulisi toimia laajemman skaalan Scrumissa.

### Laajan skaalan ketterät menetelmät

Viimeisen kymmenen vuoden aikana ketterän skaalaamiseen on alettu kiinnittämään enemmän huomiota ja on esitelty useita laajan mittakaavan ketteriä menetelmiä.
Näistä eniten huomiota saaneet ovat Scaled Agile Framework eli
[SAFe](http://www.scaledagileframework.com), Large Scale Scrum eli [LeSS](https://less.works) ja jossain määrin myös Disiplined Agile eli [DA](http://www.disciplinedagiledelivery.com)

Yhteistä näille on se, että ne laajentavat ketteryyttä ottamalla mukaan lean-ajattelua.
Toisin kuin ketterät menetelmät, lean on lähtökohtaisesti tarkoitettu toimimaan todella suuressa skaalassa ja se sisältääkin enemmän koko organisaation toimintaa ohjaavia periaatteita kuin perinteinen ketterä. Käsitellään nyt hieman tarkemmin SAFea ja LeSS:iä. DA on listatuista menetelmistä vähimmälle huomiolle jäänyt, joten jätämme sen välistä.

### SAFe® eli Scaled Agile Framework

Scaled Agile Framework eli SAFe® on tämän hetken suosituin laajan mittakaavan ketterä menetelmä, [erään tutkimuksen](https://www.cprime.com/resource/white-papers/scaling-agile-survey-2017/) mukaan 45 % laajan mittakaavan ketterää kehitystä tekevistä organisaatiota hyödyntää SAFe:a, joka on tällä hetkellä käytössä myös Helsingin Yliopiston opetushallinnon tietojärjestelmien ja web-palveluiden kehityksessä.

SAFe:n pääasiallinen kehittäjä on David Leffingwell, joka toimi Nokia Mobile Phonesissa (NMP) konstulttina 2000-luvulla. SAFe® on syntynyt pitkälti Nokialla tehdyn työn pohjalta, missä käytettiin eräänlaista SAFe:n esiversiota. SAFe:n virallinen ensimmäinen version julkaistiin 2011, tällä hetkellä on menossa versio 4.5.

Kärjistetysti sanoen SAFe® yhdistää kaikki viimeisen 20 vuoden aikana kehitetyt ketterän ja leanin ohjelmistokehityksen parhaat käytänteet sekä joukon yrityksien tuotteiden hallinnointiin suunnattuja käytänteitä.

SAFe® tarjoaa suuren määrän periaatteita (engl. principles), henkilä- ja tiimirooleja sekä käsitteitä. SAFe® kutsuu itseään menetelmäkehykseksi (engl. framework) eli  tarkoitus on, että yritykset räätälöivät itselleen sopivanlaisen prosessin käyttäen SAFe:n tarjoamia työkaluja.

SAFe® tarojaa myös neljä erikokoista valmiiksi räätälöityä konfiguraatiota.
Näistä pienin Essential SAFe® on tarkoitettu pienemmille yrityksille ja SAFen soveltamisen alkuvaiheeseen. Konfiguraatiosta suurin Full SAFe® taas soveltuu massiivisten, useita eri tuotteita hallitsevan yrityksen käyttöön.Seuraava kuva havainnollistaa Full SAFen käsitteistöä:

![]({{ "/images/5-4.png" | absolute_url }}){:height="500px" }

Sovelluskehityksen ytimessä on SAFen hieman modifioima Scrum, johon on liitettu joukko XP:n periaatteita.

Tiimien kordinointia hallitaan ylhäältä päin (engl. top down) kokoamalla yhdestä tuotteesta vastaavien tiimien joukko käsitteen _toimitusjuna_ (engl. release train) alle. Release trainin Scrum-tiimit toimivat synkroonissa toistensa kanssa tuottaen yhdessä isompia kokonaisuudessa useammasta sprintistä koostuvan _product increment_ -ajanjakson aikana.

Product incrementtejä ja niitä toteuttavia release traineja taas ohjaillaan yhä korkeammalta organisaatiosta erilaisten henkilöroolien toimesta. SAFe® tarjoaa tähänkin paljon tukea käsitteistön ja märittelemiensä roolien kautta.

SAFe® on dokumentoitu todella laajasti ja se antaa erittäin yksityiskohtaista ohjeistusta helpottamaan SAFen käyttöönottoa ja noudattamista. Ohjeistusta antavat tietysti kallispalkkaiset konsultit ja räätälöidyt koulutuspaketit ja sertifiointi.

SAFe® vaikuttaa olevan erityisesti firmojen johdon suosiossa. Tämä on ymmärrettävää, sillä toisin kuin useimmat ketterät menetelmät, SAFe® tarjoaa firman managementille sopivasti tekemistä roolien ja käytänteiden muodossa. 
 
Kuten aiemmin mainittu, sisältää SAFe® käytännössä kaikki mahdolliset ketterän ja lean-ohjelmistokehityksen parhaat käytänteet vieläpä selkeästi ja yksityiskohtaisesti dokumenoituna. SAFe® onkin eräänlainen agile/lean-kehityksen supermarket, kaikki on helposti saatavissa valmiina pakatussa mudossa. Pick and mix, avaa paketti ja seuraa käyttöohjetta ohjetta...

SAFe® on saanut osakseen myös paljon kritiikkiä. Osa kritiikistä kohdistuu SAFen määrittelemän prosessin raskauteen, osa taas SAFe:n top down -management luonteeseen.

Esim. Scrumin kehittäjä Ken Schwaber on [kyseenalaistanut sen että onko SAFe® ylipäätään ketterä menetelmä](https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/) ketteryyden alkuperäisen idean mukaan.
Agile Manifestossahan on periaate _individuals and Interactions Over Processes and Tools_, 
SAFe® taas prosessina vaikuttaa kovin raskaalta. 

### LeSS eli Large Scale Scrum

LeSS:in taustalla on Craig Larman ja Bas Vodde jotka työskentelivät konsultteina 2000-luvun alussa mm. Nokia Siemens Networksilla. Toisin kuin SAFe®, LeSS on erittäin yksinkertainen, hyvin vahvasti Scrumiin pohjautuva. Uusia rooleja, artifakteja ja palavereja ei ole.

LeSSistä on kaksi eri versiota, _LeSS_ tilanteisiin, missä tuotetta tekee 2-8 Scrum-tiimiä ja _LeSS huge_ tilanteisiin, missä tiimejä tarvitaan suurempi määrä.
 
Sekä LeSS että LeSS huge perustuvat seuraaville oletuksille
- kehitetään yhtä tuotetta, jolla on yksi product owner ja yksi product backlog
- kaikilla tiimeillä on samaan aikaan etenevät sprintit
- tiimit ovat Scrumin tapaan cross-functional ja full-stack eli ne sisältävät kaiken tarvittavan kompetenssin kokonaisen tuotteen osan tekemiseen
- tiimit tekevät sprintin aikana yhdessä tuotteesta yhden uuden, julkaisuvalmiin, asiakkaalle arvoa tuotavan version (engl. one shippable product increment)

Yksi LeSS-toteutus on tarkoitettu siis yhden tuotteen kehittämiseen. Jos yrityksellä on useita ei tuotteita, niitä kutakin varten on oma LeSS-toteutuksensa, Toisin kuin SAFe, LeSS ei ota mitenkään kantaa siihen miten firma hallinnoi tuoteperheitään.

LeSS korostaa, kyseessä _ei_ ole erillinen Scrumin päälle lisätty hallinnollinen kerros vaan ainoastaan tapa miten Scrumin periaatteita ja artefakteja voidaan soveltaa mahdollisimman yksinkertaisella tavalla laajemmassa skaalassa.  

#### LeSSin taustalla olevat periaatteet

 LeSSin taustalla on joukko tuttuja ketterän ja lean-kehityksen periaatteita.

![]({{ "/images/5-5.png" | absolute_url }}){:height="400px" }

Periaatteet ovat lähes samat kuin SAFe:ssa, yksi periaatteista tekee kuitenkin selvää eroa menetelmien välille, esitetään se tässä suorana sitaattina [dokumentaatiosta](https://less.works/less/framework/introduction.html#LeSSPrinciples)

*More with less:*

- We don’t want more roles because more roles leads to less responsibility to Teams
- We don’t want more artifacts because more artifacts leads to a greater distance between Teams and customers
- We don’t want more process because that leads to less learning and team ownership of process, instead we want more responsible Teams by having less (fewer) roles
- We want more customer-focused Teams building useful products by having less artifacts
- We want more Team ownership of process and more meaningful work by having less defined processes.
- *We want more with less*

Eli minimoimalla prosessin, roolien ja artefaktien määrä pyritään siihen että tiimit ottavat itse omistajuuden tuotteen kehittämisestä ja asiakkaan kanssa käytävästä kommunikaatiosta.

Lisää periaatteista [LeSS:in](https://less.works/less/framework/introduction.html) dokumentaatiossa.
 
#### LeSS käytännössä

Katsotaan hieman tarkemmin LeSS:in pienempää konfiguraatiota, jonka on tarkoitettu noin 2-8 tiimin hallintaan. 

Henkilöroolit ovat samat kuin normaalissa Scrumissa. Product ownereita on yksi, Scrum mastereita voi olla muutamia riippuen tiimien määrästä, yksi scrum master pytyy hoitamaan järkevästi noin 1-3 tiimin asioita.

Tiimit ovat itseorganisoituvia _full-stack, feature-tiimejä_, eli jokainen tiimi keskittyy asiakkaalle arvoa tuottavien kokonaisuuksien toteuttamiseen. Tiimijako siis _ei noudata_ sovelluksen arkkitehtuurisia kerroksia, eli ei ole esimerkiksi erillisiä frontend-,backend- ja tietokantatiimejä, kukin tiimi operoi ohjelmiston kaikilla tasoilla toteuttaen alusta loppuun user storyjen kuvaaman toiminnallisuuden definition of donen tasalla.

Myös artifaktit ovat samat kuin normaalissa Scrumissa. Product backlogeja on yksi, Sprint backlog sensijaan on jokaisella tiimillä oma. Kaikki tiimit työstävät sprintin aikana samaa ohjelmistoa, _potentially shippable product icremet_ eli sprintin tuotoksena oleva ohjelmiston valmiiksi asti tehty laajennus on kaikille tiimeille sama.

![]({{ "/images/5-6.png" | absolute_url }}){:height="350px" }

Sprintin suunnittelu eli sprint planning on normaalista Scrumista poiketen kaksiosainen.

Ensimmäisessä osassa product owner ja kaikkien tiimien edustajat valitsevat product backlogilta eri tiimille seuraavan sprintin aikana toteutettavan user storyt.

Suunnittelun toinen osa on tiimikohtainen. Kukin tiimi muodostaa oman sprint backlogin, joiden avulla sprintin sisäinen toiminta hallitaan normaalin Scrumin tapaan. Tarpeen vaatiessa tosin useampikin tiimi voi toimia sprintin aikana synkroonissa, käyttäen yhteistä sprint backlogia.
 
![]({{ "/images/5-7.png" | absolute_url }}){:height="350px" }

Kaikkien tiimien yhteinen aikaansaannos (one shippable product increment) katselmoidaan yhdessä. Retrospektiivi taas on kaksitasoinen, ensin pidetään normaalin Scrumin tapaan tiimikohtainen retrospektiivi ja tämän jälkeen koko tuotteen valmistusprosessia tarkasteleva overall-retrospektiivi, missä on edustus kaikista tiimeistä ja mahdollisesti yrityksen johdosta.

![]({{ "/images/5-8.png" | absolute_url }}){:height="350px" }

#### Muu tiimien välinen koordinointi

Kaikille tiimeille yhteisen sprintin suunnittelun ensimmäisen osan, Sprint reviewin ja overall-retrospektiivin lisäksi LeSS ei edellytä muita tiimien väliseen koordinaatioon tarkoitettuja yhteisiä tapaamisia vaan toteaa että tiimit päättävät keskenään miten koordinaatio tapahtuu.

LeSS antaa joukon aiheeseen liittyviä ohjeita ja suosituksia:
- prefer decentralized and informal coordination over centralized coordination
- Emphasize _just talk_ and informal networks via communicate in code, cross-team meetings, component mentors, travelers, scouts, and open spaces

Periaate _just talk_ korostaa suoran kommunikoinnin tärkeyttä, _communicate in code_ tarkoittaa ryhmien välistä työskentelyä helpottava ohjelmointitapaa, esimerkiksi. yhteisiä koodikäytänteitä ja jatkuvaa integraatiota. _Scouteilla_ tarkoitetaan muiden tiimien daily scrumissa vierailemista.

LeSS mainitsee myös Scrum of Scrums -palaverit yhtenä mahdollisena tiimienvälisen koordinoinnin muotona, mutta suosittelee mielummin informaalimpia kommunikaation muotoja.

#### Backlogin ylläpito

Scrum olettaa, että noin 5-10% sprintin työskentelystä käytetään backlog groomingiin, jonka tarkoituksena siis pitää backlog [DEEP](/linkki_deep):inä. Toisin kuin Scrum, LeSS kiinnittää eksplisiittisesti huomioita backlogin ylläpitämiseen ja antaa aiheeseen liittyvää ohjeistusta.

Product owner on vastuussa backlogista, ja hoitaa kaiken priorisoinnin. Backlogin ylläpidossa (grooming/refinement) tulee olla mukana myös kaikkien tiimien sekä sovelluksen eri sidosryhmien. Oletusarvoisesti kukin tiimi hoitaa niiden storyjen tarkentamista mitkä tiimi tulee todennäköisesti toteuttamaan. Tarpeen mukaan tiimit kuitenkin järjestävät yhteisiä backlogin groomaustilaisuuksia tarkastellessaan toisiinsa läheisesti liittyvien storyjen tarkennusta tai miettiessään sovelluksen kehityksen suurempiin linjauksiin, esimerkiksi arkkitehtuuriin vaikuttavia asioita.

LeSS kannustaa kehittäjätiimejä kommunikoimaan mahdollisimman suoraan asiakkaiden tai loppukäyttäjien kanssa.
 
#### LeSS huge

Jos tiimien määrä on suurempi kuin kahdeksan, suositellaan käytettäväksi _LeSS huge_ -versiota. Edelleen oletataan että kehitettävänä on ainoastaan yksi tuote, jolla on yksi product backlog sekä yksi vastuunalainen product owner.

Backlog kuitenkin jaetaan nyt _vaatimusalueisiin_ (engl. requirement area), joista jokaiselle on siitä vastuun kantava _area product owner_. Area product ownerit muodostavat tuotteen kokonaisuutta hallinnoiva _product owner -tiimin_, joka toimii koko tuotteen product ownerin johdolla.

![]({{ "/images/5-9.png" | absolute_url }}){:height="380px" }

#### LeSS vs SAFe

On erittäin mielenkiintoista että molemmat SAFe® ja LeSS ovat pitkälti syntyneet Suomessa ja Nokialla. Nokian organisaatiorakenteen takia Nokia Mobile Phonesin (NMP) ja Nokia Siemens Networksin (NSN) ohjelmistokehitystapa oli kuitenkin täysin erilainen, ja 
SAFe® (NMP) ja LeSS (NSN) ovat samoista taustaperiaatteistaan ja yhteisestä syntykonsernista huolimatta hyvin erilaisia menetelmiä.

Molempien menetelmien kanssa työskennelleiden konsulttien Aki Tikka ja Ran Nyman kirjoittama [menetelmien vertailu](https://gosei.fi/blog/less-safe-comparison/) kannattaa lukea.

Kuten aiemmin todettiin SAFe® on suosittu yritysjohdon keskuudessa, mutta saanut paljon kritiikkiä arvovaltaistenkin ketterän kehityksen edustajien toimesta, en myöskään itse ole kuullut kenenkään sovelluskehittäjän kehuvan SAFe®:a.

En tiedä kuvastaako se mitään menetelmien pitkän tähtäimen toimivuudesta, mutta SAFe:n kotia Nokia Mobile Phonesia ei enää ole olemassakaan, Nokia (Siemens) Networks taas on nykyinen Nokia ja soveltaa edelleen LeSS-menetelmää.
