
## Loppupäätelmiä testauksesta ja laadunhallinnasta

Tässä luvussa esitettävät asiat ovat osin omia, kokemuksen ja kirjallisuuden perusteella syntyneitä testaukseen liittyviä mielipiteitä.

Ketterissä menetelmissä kantavana teemana on arvon tuottaminen asiakkaalle ja tätä kannattaa käyttää ohjenuorana myös arvioitaessa mitä ja miten paljon projektissa tulisi testata. Testauksella ei ole itseisarvoista merkitystä, mutta testaamattomuus alkaa pian heikentää tuotteen laatua liikaa sekä hidastaa kehitysnopeutta radikaalilla tavalla. Joka tapauksessa testausta ja laadunhallintaa on tehtävä paljon ja toistuvasti, tämän takia testauksen automatisointi on yleensä pidemmällä tähtäimellä kannattavaa.

Testauksen automatisointi ei ole halpaa eikä helppoa. Väärin, väärään aikaan tai väärälle "tasolle" tehdyt automatisoidut testit voivat tuottaa enemmän harmia ja kustannuksia kuin hyötyä, erityisen suuri riski on käyttöliittymän kautta tehtävillä testeillä.
 
Jos ohjelmistossa on komponentteja, jotka tullaan ehkä poistamaan tai korvaamaan pian, on useimmiten järkeväintä olla automatisoimatta niiden testejä. Esimerkiksi osassa 2 esitelty [MVP eli Minimal Viable Product](/osa2#vaatimusm%C3%A4%C3%A4rittely-2010-luvulla) on karsittu toteutus, jonka avulla halutaan nopeasti selvittää, onko jokin ominaisuus ylipäätään käyttäjien kannalta arvokas. Jos MVP:n toteuttama ominaisuus osoittautuu tarpeettomaksi, se poistetaan järjestelmästä. MVP-periaattella tehty ominaisuus on siis useimmiten viisasta tehdä ilman testien automatisointia.

Ongelmallista kuitenkin usein on, että kertakäyttöiseksi tarkoitettu komponentti voi jäädä järjestelmään pitkäksikin aikaa, joskus jopa pysyvästi koska sitä "ei ole aikaa" toteuttaa kunnolla.

Kokonaan uutta ohjelmistoa tai komponenttia tehtäessä on yleensä järkevää antaa ohjelman rakenteen ensin stabiloitua ja tehdä kattavammat testit vasta myöhemmin. Komponenttien testattavuus kannattaa kuitenkin pitää koko ajan mielessä vaikka niille ei heti testejä tehtäisikään.

Oppikirjamääritelmän mukaista TDD:tä sovelletaan melko harvoin. Välillä kuitenkin TDD on hyödyllinen väline, esim. kehitettäessä rajapintoja, joita käyttäviä komponentteja ei ole vielä olemassa. Testit tekee samalla vaivalla kuin koodia käyttävän "pääohjelman".

Kattavien yksikkötestejä ei kannata tehdä ohjelman kaikille luokille, usein vaihtoehto on tehdä integraatiotason testejä ohjelman isompien komponenttien rajapintoja vasten. Tällaiset testit pysyvät todennäköisemmin valideina komponenttien sisäisen rakenteen muuttuessa. Yksikkötestaus on hyödyllisimmillään kompleksia logiikkaa sisältävien luokkien testauksessa. 

Vaikka käyttöliittymän läpi tehtävät järjestelmätason testit ovatkin riskialttiita käyttöliittymän mahdollisten muutosten takia, ovat ne usein hyödyllisin testien muoto, sillä toisin kuin esim. yksikkötestit, ne testaavat sovellusta kokonaisuudessaan (eli end to end). 

Automaattisia testejä kannattaa kirjoittaa mahdollisimman paljon etenkin niiden järjestelmän komponenttien rajapintoihin, joita muokataan usein. Liian aikaisessa vaiheessa projektia tehtävät käyttöliittymän läpi suoritettavat testit saattavat aiheuttaa kohtuuttoman paljon ylläpitovaivaa, sillä testit hajoavat helposti pienistäkin käyttöliittymään tehtävistä muutoksista. Eli on syytä olla tarkkana sen suhteen missä vaiheessa käyttöliittymän läpi tapahtuva automatisoitu testaaminen kannattaa aloittaa.

Testitapausten kannattaa olla mahdollisimman paljon testattavan komponentin oikeiden käyttöskenaarioiden kaltaisia. Pelkkiä testauskattavuutta kasvattavia testejä on turha tehdä.

Testitapauksissa kannattaa käyttää mahdollisimman oikean kaltaista dataa, erityisesti järjestelmätason testeissä. Koodissa nimittäin lähes aina hajoaa jokin kun käytetään oikeaa dataa riippumatta siitä, miten hyvin testaus on suoritettu. Parasta onkin jos staging-ympäristössä on käytössä sama data kuin tuotantoympäristössä. 

Ehdottomasti kaikkein tärkein asiana sovelluksen laadunhallinnan kannalta on mahdollisimman usein tapahtuva tuotantoonvienti. Se taas edellyttää hyvin rakennettua deployment pipelineä, kohtuullista testauksen automatisointia ja helpottuu oleellisesti jos feature branchien sijaan käytetään trunk based development -periaatetta. Suosittelen lämpimästi että tuotantoonvienti tapahtuu niin usein kuin mahdollista, jopa useita kertoja päivässä. Tämä takaa yleensä sen, että pahoja integrointiongelmia ei synny, ja sovellukseen syntyvät regressiot havaitaan ja pystytään korjaamaan mahdollisimman nopeasti.

