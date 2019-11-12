
## Loppupäätelmiä testauksesta ja laadunhallinnasta

Seuraavassa esitettävät asiat ovat osin omia, kokemuksen ja kirjallisuuden perusteella syntyneitä testaukseen liittyviä mielipiteitä.

Ketterissä menetelmissä kantavana teemana on arvon tuottaminen asiakkaalle ja
tätä kannattaa käyttää ohjenuorana myös arvioitaessa mitä ja miten paljon projektissa tulisi testata. Testauksella ei ole itseisarvoista merkitystä, mutta testaamattomuus alkaa pian heikentää tuotteen laatua liikaa. Joka tapauksessa testausta ja laadunhallintaa on tehtävä paljon ja toistuvasti, tämän takia testauksen automatisointi on yleensä pidemmällä tähtäimellä kannattavaa.

Testauksen automatisointi ei ole halpaa eikä helppoa ja väärin, väärään aikaan tai väärälle "tasolle" tehdyt automatisoidut testit voivat tuottaa enemmän harmia ja kustannuksia kuin hyötyä, erityisen suuri riski on käyttöliittymän kautta tehtävillä testeillä.
 
Jos ohjelmistossa on komponentteja, jotka tullaan ehkä poistamaan tai korvaamaan pian, saattaa olla järkevää olla automatisoimatta niiden testejä. Esimerkiksi viikolla esitelty [MVP eli Minimal Viable Product](viikko2) on karsittu toteutus, jonka avulla halutaan nopeasti selvittää, onko jokin ominaisuus ylipäätään käyttäjien kannalta arvokas. Jos MVP:n toteuttama ominaisuus osoittautuu tarpeettomaksi, se poistetaan järjestelmästä. MVP-periaattella tehty ominaisuus on siis useimmiten viisasta tehdä ilman testien automatisointia.

Ongelmallista kuitenkin usein on, että kertakäyttöiseksi tarkoitettu komponentti voikin jäädä järjestelmään pitkäksikin aikaa, joskus jopa pysyvästi koska sitä "ei ole aikaa" koodata kunnolla.

Kokonaan uutta ohjelmistoa tai komponenttia tehtäessä voi olla järkevää antaa ohjelman rakenteen ensin stabiloitua ja tehdä kattavammat testit vasta myöhemmin.
Komponenttien testattavuus kannattaa kuitenkin pitää koko ajan mielessä vaikka niille ei heti testejä tehtäisikään.

Kattavien yksikkötestien tekeminen ei välttämättä ole mielekästä ohjelman kaikille luokille, parempi vaihtoehto voi olla tehdä integraatiotason testejä ohjelman isompien komponenttien rajapintoja vasten. Testit pysyvät todennäköisemmin valideina komponenttien sisäisen rakenteen muuttuessa. Yksikkötestaus lienee hyödyllisimmillään kompleksia logiikkaa sisältäviä luokkia testattaessa. 

Oppikirjamääritelmän mukaista TDD:tä sovelletaan melko harvoin. Välillä kuitenkin TDD on hyödyllinen väline, esim. kehitettäessä rajapintoja, joita käyttäviä komponentteja ei ole vielä olemassa. Testit tekee samalla vaivalla kuin koodia käyttävän "pääohjelman".
 
Testitapauksista kannattaa aina tehdä mahdollisimman paljon testattavan komponentin oikeita käyttöskenaarioita vastaavia. Pelkkiä testauskattavuutta kasvattavia testejä on turha tehdä.

Testitapauksissa kannattaa käyttää mahdollisimman oikeanlaista dataa, erityisesti järjestelmätason testeissä. Koodissa nimittäin lähes aina hajoaa jokin kun käytetään oikeaa dataa riippumatta siitä miten hyvin testaus on suoritettu.
Parasta onkin jos staging-ympäristössä on käytössä sama data kuin tuotantoympäristössä. 

Automaattisia testejä kannattaa kirjoittaa mahdollisimman paljon etenkin niiden järjestelmän komponenttien rajapintoihin, joita muokataan usein. Liian aikaisessa vaiheessa projektia tehtävät käyttöliittymän läpi suoritettavat testit saattavat aiheuttaa kohtuuttoman paljon ylläpitovaivaa, sillä testit hajoavat helposti pienistäkin käyttöliittymään tehtävistä muutoksista.

Vaikka käyttöliittymän läpi tehtävät järjestelmätason testit ovatkin riskialttiita käyttöliittymän mahdollisten muutosten takia, ovat ne usein hyödyllisin testien muoto, sillä toisin kuin esim. yksikkötestit, ne testaavat sovellusta kokonaisuudessaan (eli end to end).

Kaikkein tärkeimpänä asiana sovelluksen laadun kannalta pidän mahdollisimman tiheää tuotantoonvientiä, ja se taas edellyttää hyvin rakennettua deployment pipelineä, kohtuullista testauksen automatisointia ja helpottu oleellisesti jos feature branchien sijaan käytetään trunk based development -periaatetta. Suosittelen lämpimästi että tuotantoonvienti tapahtuu niin usein kuin mahdollista, jopa useita kertoja päivässä. Tämä takaa yleensä sen, että pahoja integrointiongelmia ei synny, ja sovellukseen syntyvät regressiot havaitaan ja pystytään korjaamaan mahdollisimman nopeasti.