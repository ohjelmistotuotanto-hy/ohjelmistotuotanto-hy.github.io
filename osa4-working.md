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

Tiimit ovat itseorganisoituvia _full-stack, feature-tiimejä_, eli jokainen tiimi keskittyy asiakkaalle arvoa tuottavien kokonaisuuksien toteuttamiseen. Tiimijako siis _ei noudata_ sovelluksen arkkitehtuurisia kerroksia, eli ei ole esimerkiksi erillisiä frontend-, backend- ja tietokantatiimejä, kukin tiimi operoi ohjelmiston kaikilla tasoilla toteuttaen alusta loppuun user storyjen kuvaaman toiminnallisuuden definition of donen tasalla.

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

On erittäin mielenkiintoista että molemmat SAFe ja LeSS ovat pitkälti syntyneet Suomessa ja Nokialla. Nokian organisaatiorakenteen takia Nokia Mobile Phonesin (NMP) ja Nokia Siemens Networksin (NSN) ohjelmistokehitystapa oli kuitenkin täysin erilainen, ja 
SAFe (NMP) ja LeSS (NSN) ovat samoista taustaperiaatteistaan ja yhteisestä syntykonsernista huolimatta hyvin erilaisia menetelmiä.

Molempien menetelmien kanssa työskennelleiden konsulttien Aki Tikka ja Ran Nyman kirjoittama [menetelmien vertailu](https://gosei.fi/blog/less-safe-comparison/) kannattaa lukea.

Kuten aiemmin todettiin SAFe on suosittu yritysjohdon keskuudessa, mutta saanut paljon kritiikkiä arvovaltaistenkin ketterän kehityksen edustajien toimesta, en myöskään itse ole kuullut kenenkään sovelluskehittäjän kehuvan SAFe:a.

En tiedä kuvastaako se mitään menetelmien pitkän tähtäimen toimivuudesta, mutta SAFe:n kotia Nokia Mobile Phonesia ei enää ole olemassakaan, Nokia (Siemens) Networks taas on nykyinen Nokia ja soveltaa edelleen LeSS-menetelmää.
