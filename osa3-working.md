



## DevOps

Jatkuvan toimitusvalmiuden (Continuous delivery), käyttöönoton (Continuous deployment) ja tuotannossa testaamisen soveltaminen ei useimmiten ole ollenkaan suoraviivaista.

Perinteisesti yrityksissä on ollut tarkka erottelu sovelluskehittäjien (developers, dev) ja tuotantopalvelimista vastaavan järjestelmäylläpitäjien (operations, ops) välillä. On erittäin tavallista, että sovelluskehittäjät eivät pääse edes kirjautumaan tuotantopalvelimille ja sovellusten tuotantoon vieminen sekä esim. tuotantotietokantaan tehtävät skeeman päivitykset tapahtuvat ylläpitäjien toimesta.

Tälläisessä ympäristössä esim. continuous deploymentin harjoittaminen on erittäin haastavaa, tilanne ajautuukin helposti siihen, että tuotantopalvelimelle pystytään viemään uusia versioita vain harvoin, esimerkiksi vain 4 kertaa vuodessa.
Joustavammat toimintamallit uusien ominaisuuksien tuotantoon viemisessä vaativatkin täysin erilaista kulttuuria, sellaista, missä kehittäjät (dev) ja ylläpito (ops) työskentelevät tiiviissä yhteistyössä. Esim. sovelluskehittäjille tulee antaa tarvittava pääsy tuotantopalvelimelle tai Scrum-tiimiin sijoitetaan ylläpitovastuilla olevia ihmisiä.

Toimintamallia missä dev ja ops työskentelevät tiiviisti yhdessä on alettu
kutsua termillä [DevOps](https://en.wikipedia.org/wiki/DevOps). DevOps on termi, joka on nykyään monin paikoin esillä esim. työpaikkailmoituksissa voidaan arvostaa DevOps-taitoja tai jopa etsiä ihmistä DevOps-tiimiin.

On myös myynnissä mitä erilaisempia DevOps-työkaluja. On kuitenkin erittäin epäselvää mitä kukin tarkoittaa DevOps:illa

Suurin osa (järkevistä) määritelmistä tarkoittaa DevOpsilla nimenomaan kehittäjien ja järjestelmäylläpidon yhteistä työnteon tapaa jonka pyrkimyksenä on tehdä sovelluskehityksen aikaansannosten käyttöönotto mahdollisimman sujuvaksi. Tämän takia onkin hyvä puhua DevOps-kulttuurista.

On olemassa joukko käsitteellisiä ja teknisiäkin työkaluja, jotka usein liitetään DevOps-tyyliseen työskentelyyn, esim.

- automatisoitu testaus
- continuous deployment
- laitteistokapasiteetin virtualisointi ja kontainerisointi (docker)
- infrastructure as code
- pilvipalveluna toimivat palvelimet ja sovellusympäristöt (PaaS, IaaS, SaaS)

Monet edellisistä ovat kehittyneet vasta viimeisen 5-10 vuoden aikana ja täten mahdollistaneet DevOps:in helpomman soveltamisen.

Eräs tärkeimmistä DevOps:ia mahdollistavista asioista on ollut siirtyminen yhä enemmän käyttämään fyysisten palvelinten sijaan virtuaalisia ja pilvessä toimivia palvelimia, tällöin raudastakin on tullut "koodia", englanniksi tästä käytetään nimitystä [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).

Tämä on tehnyt palvelinten ohjelmoinnillisen hallinnoinnin mahdolliseksi. Palvelinten konfiguraatioita voidaan tallettaa versionhallintaan ja jopa testata. Sovelluskehitys ja ylläpito ovat alkaneet muistuttaa enemmän toisiaan kuin vanhoina (huonoina) aikoina.

Työkalujen käyttöönotto ei kuitenkaan riitä, DevOps:in "tekeminen" lähtee pohjimmiltaan kulttuurisista tekijöistä, tiimirakenteista, sekä asioiden sallimisesta..
 
Scrumin ja agilen eräs tärkeimmistä periaatteista on tehdä kehitystiimeistä itseorganisoituvia ja "cross functional", eli sellaisia että ne sisältävät kaiken tietotaidon uusien ominaisuuksien Definition of Donen tasolla valmiiksi saattamista varten. DevOps onkin eräs keino viedä ketteryyttä askeleen pitemmälle, mahdollistaa se, että ketterät tiimit ovat todella cross functional ja että ne pystyvät viemään vaivattomasti toteuttamansa uudet toiminnallisuudet tuotantoympäristöön asti ja jopa testaamaan ja operoimaan niitä tuotannossa.

Eräs parhaista DevOpsin määritelmistä [Daniel Storin](http://turnoff.us/geek/devops-explained/) käsialaa:

![]({{ "/images/3-19.png" | absolute_url }}){:height="750px" }
 
## Yhteenveto - ketterän testauksen nelikettä

Ketterän testauksen kenttää voidaan jäsentää alunperin Brian Maric käsialaa olevan [Agile Testing Quadrants](http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/) -kaavion avulla.

![]({{ "/images/3-20.png" | absolute_url }}){:height="350px" }

Ketterän testauksen menetelmät voidaan siis jakaa neljään luokkaan (Q1...Q4) seuraavien dimensioiden suhteen:
- business facing vs. technology facing, kohdistuuko testaus käyttäjän kokemaan toiminnallisuuteen vai enemmän ohjelmist sisäisen toiminnallisuuden yksityiskohtiin 
- supporting team vs. critique to the product, onko testien rooli toimia sovelluskehittäjien tukena vai varmistaa sovelluksen ulkoinen laatu

Testit ovat suurelta osin automatisoitavissa, mutta esim. tutkiva testaaminen (exploratory testing) ja käyttäjän hyväksymätestaus (user acceptance testing) ovat luonteeltaan manuaalista työtä edellyttäviä.

Kaikilla "neljänneksillä" on oma roolinsa ja paikkansa ketterässä ohjelmistokehityksessä, ja on pitkälti kontekstisidonnaista missä suhteessa testaukseen ja laadunhallintaan käytettävissä olevat resurssit kannattaa kuhunkin neljännekseen kohdentaa.

Kaavio on jo hieman vanha, alunperin vuodelta 2003 joten se ei tunne vielä käsitett tuotannossa testaaminen.

## Loppupäätelmiä testauksesta ja laadunhallinnasta

Seuraavassa esitettävät asiat ovat osin omia, kokemuksen ja kirjallisuuden perusteella syntyneitä testaukseen liittyviä mielipiteitä.

Ketterissä menetelmissä kantavana teemana on arvon tuottaminen asiakkaalle ja
tätä kannattaa käyttää ohjenuorana myös arvioitaessa mitä ja miten paljon projektissa tulisi testata. Testauksella ei ole itseisarvoista merkitystä, mutta testaamattomuus alkaa pian heikentää tuotteen laatua liikaa. Joka tapauksessa testausta ja laadunhallintaa on tehtävä paljon ja toistuvasti, tämän takia testauksen automatisointi on yleensä pidemmällä tähtäimellä kannattavaa.

Testauksen automatisointi ei ole halpaa eikä helppoa ja väärin, väärään aikaan tai väärälle "tasolle" tehdyt automatisoidut testit voivat tuottaa enemmän harmia ja kustannuksia kuin hyötyä, erityisen suuri riski on käyttöliittymän kautta tehtävillä testeillä.
 
Jos ohjelmistossa on komponentteja, jotka tullaan ehkä poistamaan tai korvaamaan pian, saattaa olla järkevää olla automatisoimatta niiden testejä. Esimerkiksi viikolla esitelty [MVP eli Minimal Viable Product](viikko2) on karsittu toteutus, jonka avulla halutaan nopeasti selvittää, onko jokin ominaisuus ylipäätään käyttäjien kannalta arvokas. Jos MVP:n toteuttama ominaisuus osoittautuu tarpeettomaksi, se poistetaan järjestelmästä. MVP-periaattella tehty ominaisuus on siis useimmiten viisasta tehdä ilman testien automatisointia.

Ongelmallista kuitenkin usein on, että kertakäyttöiseksi tarkoitettu komponentti voikin jäädä järjestelmään pitkäksikin aikaa, joskus jopa pysyvästi koska sitä "ei ole aikaa" koodata kunnolla.

Kokonaan uutta ohjelmistoa tai komponenttia tehtäessä voi olla järkevää antaa ohjelman rakenteen ensin stabiloitua ja tehdä kattavammat testit vasta myöhemmin.
Komponenttien testattavuus kannattaa kuitenkin pitää koko ajan mielessä vaikka niille ei heti testejä tehtäisikään.

Kattavien yksikkötestien tekeminen ei välttämättä ole mielekästä ohjelman kaikille luokille, parempi vaihtoehto voi olla tehdä integraatiotason testejä ohjelman isompien komponenttien rajapintoja vasten. Testit pysyvät todennäköisemmin valideina komponenttien sisäisen rakenteen muuttuessa. Yksikkötestaus lienee hyödyllisimmillään kompleksia logiikkaa sisältäviä luokkia testattaessa. 

Oppikirjamääritelmän mukaista TDD:tä sovelletaan melko harvoin. Välillä kuitenkin TDD on hyödyllinen väline, esim. kehitettäessä rajapintoja, joita käyttäviä komponentteja ei ole vielä olemassa. Testit tekee samalla vaivalla kuin koodia käyttävän "pääohjelman".
 
Testitapauksista kannattaa aina tehdä mahdollisimman paljon testattavan komponentin oikeita käyttöskenaarioita vastaavia. Pelkkiä testauskattavuutta kasvattavia testejä on turha tehdä.

Testitapauksissa kannattaa käyttää mahdollisimman oikeanlaista dataa, erityisesti järjestelmätason testeissä. Koodissa nimittäin lähes aina hajoaa jokin kun käytetään oikeaa dataa riippumatta siitä miten hyvin testaus on suoritettu.
Parasta onkin jos staging-ympäristössä on käytössä sama data kuin tuotantoympäristössä. 

Automaattisia testejä kannattaa kirjoittaa mahdollisimman paljon etenkin niiden järjestelmän komponenttien rajapintoihin, joita muokataan usein. Liian aikaisessa vaiheessa projektia tehtävät käyttöliittymän läpi suoritettavat testit saattavat aiheuttaa kohtuuttoman paljon ylläpitovaivaa, sillä testit hajoavat helposti pienistäkin käyttöliittymään tehtävistä muutoksista.

Vaikka käyttöliittymän läpi tehtävät järjestelmätason testit ovatkin riskialttiita käyttöliittymän mahdollisten muutosten takia, ovat ne usein hyödyllisin testien muoto, sillä toisin kuin esim. yksikkötestit, ne testaavat sovellusta kokonaisuudessaan (eli end to end).

Kaikkein tärkeimpänä asiana sovelluksen laadun kannalta pidän mahdollisimman tiheää tuotantoonvientiä, ja se taas edellyttää hyvin rakennettua deployment pipelineä, kohtuullista testauksen automatisointia ja helpottu oleellisesti jos feature branchien sijaan käytetään trunk based development -periaatetta. Suosittelen lämpimästi että tuotantoonvienti tapahtuu niin usein kuin mahdollista, jopa useita kertoja päivässä. Tämä takaa yleensä sen, että pahoja integrointiongelmia ei synny, ja sovellukseen syntyvät regressiot havaitaan ja pystytään korjaamaan mahdollisimman nopeasti.