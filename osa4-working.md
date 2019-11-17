### Kasvattaminen leanin ja johtajuuden periaatteet

Toyotalla useimmat uudet työntekijät koulutetaan huolellisesti perehtymään käytännön tasolla lean-ajattelun periaatteisiin. Useiden kuukauden koulutuksen aikana uudet työntekijät työskentelevät monissa eri työtehtävissä ja heidät opetetaan tunnistamaan lean-hukka sen eri muodoissa. Tarkoituksena on sisäistää jatkuvan parantamisen eli kaizen mentaliteetti.

Toyotan johtamiskulttuurissa keskiössä on lean-ajattelun opettajina, mentoreina ja työn valmenajana toimivat johtajat/managerit. Periaate *grow leaders* kuvaa Toyotan tapaa kasvattaa lean-toimintafilosofian sisäistäviä managereja. 

Periaate *my manager can do my job better than me* kuvaa sitä, että managerit ovat ovat firman sisällä eri työtehtävien kautta uusiin vastuisiin kasvaneita ihmisiä, jotka hallitsevat myös työntekijöiden vastuulla olevan _hands on_ -työn. Managerit ovat ensisijaisesti toiminnan etulinjassa toimivia lean-käytänteiden opettajia ja mentoreita.
 
Eräs tärkeä leanin johtamisen periaate on *go see* (japaniksi genchi genbutsu), työntekijöiden, erityisesti managerien tulee "nähdä asiat omin silmin" eikä pelkästään istua työpöydän ääressä lukemassa muiden raportoimia faktoja. Tämä liittyy siihen ideaaliin, että managerien oletetaan _johtavat etulinjassa_ (japaniksi gemba) eli siellä missä työ tosiasiallisesti tehdään.

Toyota production systemsin kehittäjän T. Ohnon sanoin:

> You can’t come up with useful kaizen sitting at your desk... We have too many people these days who don’t understand the workplace. They think a lot, but they don’t see. I urge you to make a special effort to see what’s happening in the workplace. That’s where the facts are.

Scrum masterin rooli on osin leanin johtajuuden ideaalien mukainen. Tosin useimpiin scrum mastereihin ei päde periaate _my manager can do my job better than me_. Monissa ohjelmisokehitystiimeissä teknistä puolta johtajuudesta edustaa edustavat esim, lead developer - tai senior developer -nimikkeellä olevat kokeneemmat mentorin roolissa toimivat työntekijät.

### Lean-tuotekehityen periaatteita

Sovellettaessa leania _tuotantoon_ (engl. production), pääasiallisena fokuksena on toiminnan parantaminen hukkaa eliminoimalla.

Sovellettaessa leania tuotannon optimoinnin sijaan _tuotekehitykseen_ (development) esim. kokonaan uusien automallien suunnitteluun, nousee esiin kokonaan uusia periaatteita.
Kantavana ideana Toyotan tuotekehityksessä on _out-learn the competitors, through generating more useful knowledge and using and remembering it effectively._ 

Leanissa tuotekehityksessä fokukseen nouseekin toiminnan tehostamisen lisäksi _oppimisen kiihdyttäminen_ (engl. *amplify learning*). Kannattaa pyrkiä mahdollisimman _arvokkaaseen tietoon_ (engl. *high-value information*), mm. kiinnittämällä huomio asioihin, mihin sisältyy paljon epävarmuutta (*focus on uncertain things*). Epävarmat ja suuren teknisen riskin sisältävät ideat kannattaa toteuttaa/testata nopeasti, niiden suhteen viivästyneellä tiedolla on korkea hinta (*cost of delay*).

Eräs leanin tuotekehityksen mekanismi oppimisen nopeuttamiseen on *set based concurrent
development*. Jos tarkoituksena on kehittää esim. uusi moottorin jäähdytysjärjestelmä, aletaan yhtä aika kehittämään useita vaihtoehtoisia ratkaisuja eri tiimien toimesta. Tasaisin väliajoin kehitettäviä ratkaisuja vertaillaan, ja osa niistä karsitaan. Lopulta parhaaksi osoittautuva ratkaisu valitaan käytettäväksi lopputuotteessa.

Set based development -menetelmä on radikaalisti erilainen kuin usein sovellettava _iteratiivinen_ kehitysmenetelmä, missä lähtökohtana on yksi askeleittain paranneltava ratkaisu.

Ohjelmistokehityskessä set based development -menetelmää sovelletaan melko harvoin, lähinnä käyttöliittymäsuunnittelussa esittelemällä asiakkaalle aluksi useita rinnakkaisia ehdotelmia mahdollisesta käyttöliittymäratkaisusta.

Toyotalla tuotekehitystä johtaa *chief technical engineer*, joka on vastuussa sekä tuotteiden teknisestä että liiketoiminnallisesta menestyksestä. Kyseessä tyypillinen leanin etulinjassa toimiva johtaja, joka tuntee tarkasti käytännön työn, mutta on myös erittäin lähellä asiakasta. Rooli poikkeaa Scrumin _product ownerista_ teknisen taustansa takia.

### Leanin soveltaminen eri aloille

90-luvulta alkaen lean on herättänyt maailmalla suurta kiinnostusta ja sitä on pyritty soveltamaan lähes kaikilla aloilla ohjelmistokehitys mukaan lukien. Lean-periaatteet ovat olleet hyvin esim. Scrumin kehittäjien tiedossa ja vaikka Scrumin alkuperäiset lähteet eivät käytäkään leanin terminologiaa, on Scrumissa monin paikoin piirteitä leanista. 

Viime aikainen ketterien menetelmien kehitys on vienyt tiettyjä ideoita, esimerkiksi arvoketjun optimoimista user storyjen läpimenoaikoja minimoimalla huomattavasti Scrumin ja ketterän alkuaikojen käytänteitä pidemmälle, nykyään puhutaankin paljon leanista ohjelmistokehityksestä.

Sekä ketterissä menetelmissä, että leanissa on sama fundamentaali periaate, _toimintojen jatkuva kehittäminen_. Rajanveto leanin ja ketterän välillä ei olekaan ollenkaan selvä ja osin täysin keinotekoista. Esimerkiksi Scrumin kehittäjät eivät ole missään nimessä tarkoittaneet Scrumia staattiseksi rakennelmaksi, jota noudatetaan kirjaimellisesti tästä ikuisuuteen, sellainen toiminta ei olisi ketteryyttä.
Ketteryyttä on _läpinäkyvyyden_ (engl. transparency) mahdollistava toimintojen jatkuvaan parantamiseen keskittyvä _inspect-and-adapt_-sykli. Käytännössä tämä on täsmälleen sama idea kuin leanin _kaizen_.

Leanin soveltamisessa on kohdattu myös paljon ongelmia. Lean on ajattelumalli, joka on kehitetty Toyotan tarpeisiin, malli on jalostunut ja muuttunut vuosikymmenten kuluessa.
Onkin osin epäselvää miten Toyotan käytänteet siirretään eri aloille.

Kuten agile, myös lean ei ole joukko työkaluja vaan jatkuva toimintatapa, Toyotan CEO:n [Akio Toyodan](https://en.wikipedia.org/wiki/Akio_Toyoda) sanoin

- _The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, "Why are we doing this?"_ 
- _In Toyota and in lean thinking, the idea is to repeat cycles of improvement experiments forever._