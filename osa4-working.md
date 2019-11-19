## Ketterien menetelmien käyttö ja hyödyt tutkimuksen valossa

Tehdään vielä kurssin lopussa nopea katsaus ketterien menetelmien käytöön ja hyödyllisyytteen liittyvään tutkimukseen.

### Miten laajasti ketteriä mentelemiä käytetään

Internetistä löytyy melko paljon erilaisia kyselytytkimuksia, jotka kartoittavan ketterien menetelmien käytön yleisyyttä. 

Max Steinmetz [artikkeli vuodelta 2018](https://www.targetprocess.com/blog/agile-statistics/) referoi useampaa eri kyselytytkimusta, joista löytyy erilaisia lukemia, mm. [Project Management Instituten](https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf) kyselyn 46% ja [Stack owerflowin](https://insights.stackoverflow.com/survey/2018#development-practices) yli sadan tuhannen vastaajan kyselyn lukema 85.9%. 

Googlailemalla löytyy runsaasti lisää erilaisia kyselyjä, ja kaikissa ketteryyden käyttöaste sijoittuu suunilleen näiden kahden prosentin väliin, useimmiten reilusti viiden kymmenen yläpuolelle.

Valtaosa internetissä olevista kyselyistä ei täytä tieteellisen tutkimuksen kriteerejä, niiden tutkimusotokset eivät ole välttämättä kattavia ja tutkimusmetodologiakin voi olla kyseenlalainen. Osa tutkimusten tekijöistä on kaupallisia toimijoita joiden intressinä saattaa olla itselleen suosiollisten tulosten julkaisu.

Aiheesta on tehty myös jonkun verran tieteellistä tutkimusta. Oulun yliopiston tutkijoiden artikkelin [Survey on Agile and Lean usage in Finnish software industry](http://esem.cs.lth.se/industry_public/Rodriguezetal_ESEM2012_IndustryTrack_1_0.pdf) mukaan 58% tutkimukseen osallistuneista 200 yrityksestä ilmoitti käyttäänsä ketteriä tai lean-menetelmiä ohjelmistokehityksessä.

Loppuvuodesta 2016 julkaistussa Brasiliassa, Suomessa ja Uudessa Seelannissa tehdyssä tutkimuksessa [Adoption and Suitability of Software Development Methods and Practices](https://ieeexplore.ieee.org/document/7890614/) päädyttiin seuraaviin lukuihineri  menetelmien käytön osalta
- Scrum 71.2%
- Kanban 49.5% 
- Lean 39.7%
- Waterfall 35.3%

Helsingin yliopiston ja Nitorin loppuvuodesta 2018 tekemän [selvityksen mukaan](https://www.nitor.com/fi/uutiset-ja-blogi/nitor-ja-helsingin-yliopisto-selvittivat-suomalaisyritykset-ketteryyden-edellakavijoita2)
ainoastaan 5.9 % vastaajista ilmoitti että ketterät menetelmät eivät ole yrityksessä ollenkaan käytössä:

![]({{ "/images/5-9a.png" | absolute_url }}){:height="300px" }

Kuten lukemat osoittavat, ketterä kehitys valtaa alaa. Sama trendi on näkyvissä Yhdysvaltojen hallituksen alaisissa ohjelmistoprojekteissa, joissa hitaan liikkeellelähdön jälkeen [agile on noussut](https://www2.deloitte.com/insights/us/en/industry/public-sector/agile-in-government-by-the-numbers.html) dominoivaan asemaan

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

Evidenssiä ketterien menetelmien toimimisesta siis on. Näyttö ei kuitenkaan ole täysin kiistatonta, sillä kaikki edereferoidut tutkimukset ovat kyselytutkimuksia, joissa käsitteistöä ei ole välttämättä kunnolla määritelty (esim. mitä ketteryydellä tai projektin onnistumisella tarkoitetaan) ja kyselyyn osallistuneet eivät välttämättä edusta tasaisesti koko populaatiota. Kaikkien kyselyjen tekijät eivät myöskääm puolueettomia menetelmien suhteen, esim. State of Agile -raporttia tuottava [CollabNet/VersionOne](https://www.collab.net/) ketteriä projektinhallintatyökaluja tuottava yritys. Tutkimusten validiteetti siis on hieman kyseenalainen.

Ketteristä menetelmistä on tehty myös runsaasti akateemista tutkimusta, kahteen näistä  viitattiinkin edellä tekstissä. Akateemisenkin tutkimuksen systemaattisuus, laatu ja tulosten yleistettävyys vaihtelee. Osa akateemisesta tutkimuksesta, esim. edellä viitatut ketterien menetelmien käytön yleisyyttä kartoittaneet tuktimukst on tehty kyselytytkimuksena. 

On myös tutkimuksia joissa rajaudutaan yksittäisten tekniikoiden, esim TDD:n, pariohjelmoinnin hyötyjen mittaamiseen tai jatkuvan integraation hyötyjen mittaamiseen ja kartoittamiseen. Ohjelmistotuotannossa on kuitenkin liian paljon muuttujia, jotta jonkin yksittäisen tekijän vaikutusta voitaisiin täysin vakuuttavasti mitata empiirisesti. Menetelmiä soveltavat kuitenkin aina ihmiset, ja mittaustulos yhdellä ohjelmistotiimillä ei välttämättä yleisty mihinkään muihin olosuhteisiin.