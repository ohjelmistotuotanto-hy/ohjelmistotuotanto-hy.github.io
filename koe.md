---
layout: page
title: Kokeen mallivastaukset ja arvosteluperusteet
inheader: no
permalink: /koe/
---

## Tehtävä 1 _Scrum ja user story_ (6p) 

Tehtävän arvioi Matti Luukkainen. Omasta arvioinnista voi tarvittaessa kysyä matti.luukkainen@helsinki.fi tai telegramissa

**(a)  Scrumin tärkeä taustaperiaate on adaptation eli mukauttaminen. Mitä tällä tarkoitetaan, ja miten Scrum pyrkii edesauttamaan mukauttamista?**

**(b) Eräs scrumin määrittelemistä eventeistä eli tapahtumista on sprintin suunnittelukokous. Mitä kokouksessa tapahtuu ja ketkä siihen osallistuvat?**

**(c) Mitä tarkoitetaan user storylla?**

**(d) Minkälainen on hyvä user story?**

## Tehtävä 2: _Estimointi_ (2p) 

Tehtävän arvioi Mauri Karlin. Omasta arvioinnista voi tarvittaessa kysyä mauri.karlin@helsinki.fi tai telegramissa

**(a) Mitä tarkoitetaan estimoinnilla?**

**(b) Minkä takia ohjelmistoprojekteissa suoritetaan estimointia?**

**(c) Miten estimointi tyypillisesti tapahtuu ketterissä ohjelmistoprojekteissa?**

**(d) Mitä tarkoitetaan NoEstimates-liikeellä?**


## Tehtävä 3: _Lean Startup_ (2p) 

Tehtävän arvioi Mauri Karlin. Omasta arvioinnista voi tarvittaessa kysyä mauri.karlin@helsinki.fi tai telegramissa

**(a) Mitä tarkoitetaan Lean startup -menetelmällä? Mihin ja miten sitä käytetään?**

**(b) Mitä tarkoittaa käsite Minimal Viable Product (MVP)?**

**(c) Entä A/B-testaus?**

## Tehtävä 4: _Laadunhallinta_ (5p) 

Tehtävän arvioi Tero Tapio. Omasta arvioinnista voi tarvittaessa kysyä tero.tapio@helsinki.fi tai telegrammissa.

**(a) Mitä tarkoitetaan verifioinnilla ja validoinnilla?**

Verifioimalla varmistetaan että ohjelmisto/ominaisuus täyttää sille sovitut vaatimusmäärittelyt.
Validoimalla varmistetaan että ohjelmisto/ominaisuus vastaa asiakkaan odotuksia ja tarpeita.

**(b) Mitä tarkoitetaan ohjelmiston sisäisellä laadulla?**

Sisäinen laatu viittaa ohjelmiston asiakkaalle näkymättömän osan, eli koodin laatuun. Hyvälaatuinen koodi on mm. järjestelmällistä ja helppolukuista, ja noudattaa hyväksi havaittuja käytäntöjä (best practices). Huonolaatuista koodia on vaikea tulkita tai jatkokehittää.

**(c) Mitä tarkoittavat jatkuva integraatio (continuous integration), jatkuva toimitusvalmius (continuous delivery) ja jatkuva käyttöönotto (continuous deployment)?**

Jatkuva integraatio toteutuu kun kehittäjät liittävät uuden tai muokkaamansa koodin mahdollisimman usein (jopa useasti päivässä) yhteiseen koodikantaan. Jokainen lisäys testataan automaattisesti CI-palvelimella jotta varmistuu että muutokset toimivat muuallakin kuin kehitttäjän omalla koneella.

Jatkuva toimitusvalmius jatkaa CI:tä pidemmälle siten, että jokainen uusi versio koodikannasta siirretään automaattisesti testipalvelimelle (staging), jossa se testataan uudestaan mahdollisimman paljon tuotantoympäristöä muistuttavilla asetuksilla ja datalla. Näin ohjelmistosta on aina valmis versio, joka voidaan (asiakkaan) halutessa/luvalla siirtää tuotantoon vaivattomasti.

Jatkuva käyttöönotto ei odota manuaalista hyväksyntää, vaan jokainen uusi versio ohjelmistosta siirretään onnistuneen integraation ja testipalvelintestien jälkeen automaattisesti tuotantoon.

**(d) Mikä on feature toggle/flag ja mihin tarkoitukseen niitä käytetään?**

FT/F ehdollistaa (esim. if-lauseella) osan koodia, jolloin se voidaan piilottaa tuotantoversioon jatkokehitystä varten (feature branchien sijaan), tai ajaa vain tietylle käyttäjäkunnalle (canary, A/B) testaamista varten.

**(e) Mitä tarkoitetaan käsitteellä tekninen velka (technical debt)? Mitä haittaa/hyötyä teknisestä velasta on?**

Teknistä velkaa kerryttävät ohjelmistotekniset ratkaisut, jotka on vahingossa tai tarkoituksellisesti tehty siten, että laadun sijaan on panostettu nopeaan ja helppoon toteutukseen, mutta jotka heikentävät koodin laatua ja siten vaikeuttavat jatkokehitystä.
- Hyöty: MVP:n tai prototyypin saamista tuotantoon voidaan nopeuttaa ottamalla teknistä velkaa.
- Haitta: Jatkokehitys on työlästä, vaikeaa, tai vaatii refaktorointia.


## Tehtävä 5 (5p) 

Tehtävän arvioi Jami Kousa. Omasta arvioinnista voi tarvittaessa kysyä jami.kousa@helsinki.fi tai telegrammissa. 

**(a) Ketterien menetelmien yhteydessä puhutaan usein inkrementaalisesta arkkitehtuurista? Mitä tällä tarkoitetaan? Mitä hyvää/huonoa lähestymistavalla on?**

Ideana on, että arkkitehtuuri mietitään ja dokumentoidaan riittävällä tasolla projektin alussa. Ohjelmiston "lopullinen" arkkitehtuuri muodostuu iteraatio iteraatiolta samalla kun ohjelmistoon toteutetaan uutta toiminnallisuutta. 0,5p

Etuja: 0,25p
- Vältetään liian aikaisin tehtävää ja myöhemmin todennäköisesti turhaksi osoittautuvaa työtä.
- Koska arkkitehtuuria ei suunnittele joku ulkopuoleinen, sen kommunikointi tiimille ei edellytä raskasta dokumentaatiota.
- Kehittäjät todennäköisesti sitoutuvat paremmin tiimin luoman ja omistaman arkkitehtuurin noudattamiseen

Riskejä: 0,25p
- Ohjelmiston sisäinen laatu alkaa ajan myötä heikentyä ja lopulta ohjelmisto on muodoton kasa spagettikoodia, eli big ball of mud

**(b) Mitä tarkoitetaan käsitteellä DevOps?**

DevOps pyrkii edistämään ohjelmistokehittäjien ja ylläpitäjien yhteistyötä. 0,25p DevOpsissa usein pyrkimyksenä on tehdä sovelluskehityksen aikaansaannosten käyttöönotto mahdollisimman sujuvaksi käyttäen monia työkaluja sen automatisointiin (automaattiset testit, continuous deployment, etc.) 0,25p mutta se perustuu pohjimmiltaan kulttuurisiin tekijöihin, tiimirakenteisiin, sekä asioiden sallimiseen. 0,5p

**(c) Mitä tarkoitetaan Just in time -tuotantomallilla ja pull-systeemeillä?**

JIT -tuotantomallissa ideaalina on aloittaa tuotteen valmistaminen vasta kun ostaja on jo tilannut tuotteen. Pyrkimys oli saada tuote tilauksen jälkeen mahdollisimman nopeasti kuluttajalle, eli haluttiin mahdollisimman lyhyt sykliaika (engl. cycle time) tilauksesta toimitukseen. 0,5p

Käytännössä pull-systeemi on mekanismi JIT-tuotantomallin toteuttamiseen. Pull-systeemissä tuotteita, tai tuotteiden tarvitsemia komponentteja tehdään ainoastaan asiakkaan tilauksen niitä edellyttäessä eikä varastoon. Vastakohta on push-systeemi, missä tuotteita ja komponentteja tehdään etukäteen varastoon ja toivotaan sitten että tuotteet ja komponentit menevät kaupaksi. 0,5p

**(d) Mitä lean tarkoittaa muri- ja mura-tyyppisellä hukalla?**

Muri: ylikuormitusta tai mahdottomia vaatimuksia 0,5p

Mura: epäsäännöllisyyttä tai epäyhdenmukaisuutta työtavoissa tai työstettävässä tuotteessa. 0,5p

**(e) Mitä tarkoitetaan work in progress eli WIP-rajoitteilla? Miten niitä sovelletaan ohjelmistotuotannossa?**

WIP-rajoitteita käytetään rajaamaan samanaikaisesti tehtävää työtä. Sillä saadaan aikaan ‘Virtaus’, eli yksittäisen storyn nopea valmistuminen. 0,5p Ohjelmistotuotannossa niitä sovelletaan mm. rajoittamalla in progress olevien taskien määrää & rajoittamalla user storyjen määrää kanban taululla. 0,5p
