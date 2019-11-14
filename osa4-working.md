### Tekninen velka

Koodi ei ole aina sisäiseltä laadultaan optimaalista, ja joskus on jopa asiakkaan kannalta tarkoituksenmukaista tehdä vähemmän laadukasta koodia. Huonoa suunnittelua tai/ja ohjelmointia on ruvettu kuvaamaan käsitteellä _tekninen velka_ (engl. technical debt).

Oikoteitä ottamalla tehdyllä ohjelmoinnilla saadaan ehkä nopeasti aikaan jotain toiminnallisuutta, mutta hätäinen ratkaisu tullaan maksamaan korkoineen takaisin myöhemmin _jos_ ohjelmaa on tarkoitus laajentaa. Käytännössä käy siis niin, että koodiin kertyneet sisäisen laadun ongelmat, eli _tekninen velka_ alkaa hidastamaan kehitystyön etenemistä, ja uusien ominaisuuksien toteuttamisesta tulee koko ajan hankalammaksi ja kalliimmaksi. 

Toisaalta jos korkojen maksun aikaa ei koskaan tule, eli ohjelma on esimerkiksi pelkkä prototyyppi tai sitä ei koskaan oteta käyttöön, on teknisen velan ottaminen asiakkaan kannalta kannattava ratkaisu.

[Osassa 2](/osa2/#vaatimusmäärittely-2010-luvulla) käsiteltiin _lean startup_ -ideologian mukaista tapaa ohjelmiston uusien ominaisuuden hyödyllisyyden validointiin rakentamalla ominaisuuden toteuttama _minimal viable product (MVP)_, eli juuri ja juuri riittävä ratkaisu, jonka avulla ominaisuuden käyttökelpoisuutta voidaan testata. Kuten nimikin jo antaa ymmärtää, MVP on luonteeltaan sellainen rakennelma, että sitä tehdessä otetaan tietoisesti teknistä velkaa. _Jos_ ominaisuus osoittautuu halutuksi, maksetaan tekninen velka pois tekemällä toiminnallisuudelle robustimpi toteutus.

Lyhytaikaisen teknisen velan ottaminen voi joskus olla jopa välttämätöntä. Esimerkiksi markkinatilanteen takia saattaa olla oleellista saada tuote kuluttajille mahdollisimman nopeasti tai muuten tilaisuus saattaa mennä kokonaan ohi. Startup-yrityksillä tilanne voi olla se, että firma joutuu valitsemaan teknisen velan ja varman rahojen loppumisen välillä, eli tekemällä jotain nopeasti huonolla sisäisellä laadulla, firma saattaa pystyä keräämään riittävästi rahoitusta jatkaakseen toimintaansa. Tämänkaltaisissa tilanteissa otetaan tietoisesti teknistä velkaa ja sovelluksen koodin huonosta laadusta ja testauksen puuttumisesta huolehditaan myöhemmin. 

Tekninen velka ei siis ole pelkästään paha asia, vaan strategisesti käytettynä hyväkin väline, aivan kuten esim. asuntolaina, ilman lainaa kaikilla ei ole varaa omistusasuntoon. On kuitenkin oleellista mitoittaa lainan määrä oikein, muuten seurauksena saattaa olla luottokelpoisuuden menetys.

Teknisen velan takana voi siis olla monenlaisia syitä, esim. holtittomuus, osaamattomuus, tietämättömyys tai tarkoituksella tehty päätös. Martin Fowler [jakaa](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) teknisen velan neljään eri luokkaan:

1. reckless and deliberate: "we do not have time for design"
2. reckless and inadverent: "what is layering"?
3. prudent and inadverent: "now we know how we should have done it"
4. prudent and deliberate: "we must ship now and will deal with consequences"

Luokkien 1 ja 2, joista Fowler käyttää termiä _reckless_ eli holtiton tai uhkarohkea, voi ajatella olevan huonoa teknistä velkaa. Toinen syntyy tarkoituksella, eli ajatellen että ei ole aikaa laadulle, toinen taas syntyy osaamattomuuden takia.

Luokat 3 ja 4 ovat harkinnan alla (engl. _prudent_) syntynyttä teknistä velkaa. Luokka 4 on juurikin tilanne, jossa ollaan esim. tekemässä MVP:tä, tai jonkun pakon takia koodi on saatava julkaistua heti ja seuraukset päätetään hoitaa myöhemmin. Luokka 3 on kovin yleinen tilanne, ohjelmistoa suunniteltiin ja rakennettiin parhaiden aikomusten mukaan, mutta vasta paljon myöhemmin, kun arkkitehtuuri ja design on jo lyöty lukkoon vasta opitaan sovelluksen luonteesta sen verran että tiedetään _kuinka sovellus olisi tullut suunnitella_. Tälläinen tilanne saatetaan päätyä ratkaisemaan refaktoroimalla sovelluksen arkkitehtuuri paremmin tarpeita vastaavaksi. 
