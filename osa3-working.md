## Tuotannossa tapahtuva testaaminen ja laadunhallinta

Perinteisesti on ajateltu, että kaiken ohjelmiston laadunhallintaan liittyvän testauksen tulee tapahtua ennen kuin ohjelmisto tai sen uudet toiminnallisuudet on otettu käyttöön eli viety tuotantoympäristöön. Viime aikoina erityisesti web-sovellusten kehityksessä on noussut esiin suuntaus, missä osa laadunhallinnasta tapahtuu monitoroimalla tuotannossa olevaa ohjelmistoa.

![]({{ "/images/3-13.png" | absolute_url }}){:height="330px" }

### Blue-green-deployment

Eräs tuotannossa tapahtuvan testaamisen tekniikka on [blue-green-deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html), missä periaatteena on ylläpitää rinnakkain kahta tuotantoympäristöä (tai palvelinta), joista käytetään nimiä blue ja green.

Tuotantoympäristöistä vain toinen on ohjelmiston käyttäjien aktiivisessa käytössä. Käyttäjien ja tuotantopalvelinten välissä oleva komponentti esim, ns. reverse proxynä toimiva web-palvelin (kuvassa router) ohjaa käyttäjien liikenteen aktiivisena olevaan ympäristöön. 

Kun järjestelmään toteutetaan uusi ominaisuus, deployataan se ensin passiivisena olevaan ympäristöön.
 
![]({{ "/images/3-14.png" | absolute_url }}){:height="250px" }

Passiiviselle, uuden ominaisuuden sisältämälle ympäristölle voidaan sitten tehdä erilaisia testejä, esim. osa käyttäjien liikenteestä voidaan ohjata aktiivisen lisäksi passiiviseen ympäristöön ja varmistaa, että se toimii odotetulla tavalla.

Kun uuden ominaisuuden sisältävän passiivinen ympäristön todetaan toimivan ongelmattomasti myös tuotantoympäristössä, voidaan palvelinten rooli vaihtaa, uuden ominaisuuden sisältämästä palvelimesta tulee uusi aktiivinen tuotantoympäristö.
Aktiivisen tuotantoympäristön vaihto tapahtuu määrittelemällä web- palvelin ohjaamaan liikenne uudelle palvelimelle.

Jos uuden ominaisuuden sisältämässä ympäristössä havaitaan aktivoinnin jälkeen jotain ongelmia, on mahdollista suorittaa erittäin nopeasti _rollback-operaatio_, eli vaihtaa vanha versio jälleen aktiiviseksi.

On tarkoituksenmukaista, että kaikki blue-green-deploymentiin liittyvät testit, niiden tulosten varmistaminen, tuotantoympäristön vaihto ja mahdollinen rollback tapahtuvat automatisoidusti.

### Canary release

Blue-green-deploymentin hieman pidemmälle viedyssä versiossa [canary-releasessa](https://martinfowler.com/bliki/CanaryRelease.html) uuden ominaisuuden sisältävään ympäristöön ohjataan osa, esim. 5% järjestelmän käyttäjistä:

![]({{ "/images/3-15.png" | absolute_url }}){:height="250px" }

Uuden ominaisuuden sisältämää versiota monitoroidaan aktiivisesti ja jos ongelmia ei ilmene, vähitellen kaikki liikenne ohjataan uuteen versioon.
Kuten blue-green-deploymentin tapauksessa, ongelmatilanteissa palautetaan käyttäjät aiempaan, toimivaksi todettuun versioon.

Uuden version toimivaksi varmistaminen siis perustuu _järjestelmän monitorointiin_.
Jos kyseessä olisi esim. sosiaalisen median palvelu, monitoroinnissa voitaisiin tarkastella esim:
- palvelun muistin ja prosessoriajan kulutusta sekä verkkoliikenteen määrää - sovelluksen eri sivujen vasteaikoja eli latautumiseen menevää aikaa 
- kirjautuneiden käyttäjien määrää
- luettujen ja lähetettyjen viestien määriä per käyttäjä
- kirjautuneen käyttäjän sovelluksessa viettämää aikaa

Monitoroinnissa tulee siis palvelimen yleisen toimivuuden lisäksi seurata
_käyttäjätason metriikoita_ (engl. bussiness level metrics). Jos niissä huomataan eroja aiempaan, esim. kirjautuneet käyttäjät eivät lähetä viestejä samaa määrää kuin keskimäärin normaalisti, voidaan olettaa, että sovelluksen uudessa versiossa saattaa olla joku ongelma ja voi olla tarpeen tehdä rollback vanhaan järjestelmäversioon ja analysoida vikaa tarkemmin.

Myös canary releasejen yhteydessä testauksen ja kaikkien tuotantoon vientiin liittyvän on syytä tapahtua automatisoidusti. 
 
Nimi canary release periytyy kaivostyöläisten tavasta käyttää kanarialintuja tutkimaan sitä onko kaivoksessa myrkyllisiä kaasuja, jos kaivokseen viety lintu ei kuole, ilma on turvallista

## Tuotannossa testaaminen ja tietokanta

Edellisillä kuvissa oli merkitty järjestelmän vanhalle ja uudelle versiolle erillinen tietokantapalvelin (database server).

Tilanne ei välttämättä ole tämä ja erityisesti canary releasejen yhteydessä järjestelmän molemmat versiot käyttävät yleensä samaa tietokantaa:
 
![]({{ "/images/3-16.png" | absolute_url }}){:height="250px" }

Tämä taas asettaa haasteita, jos järjestelmään toteutetut uudet ominaisuudet edellyttävät muutoksia tietokannan skeemaan sillä canary releasejen yhteydessä tarvitaan usein yhtä aikaa sekä tietokannan uutta että vanhaa versiota

Jos järjestelmän uusi ja vanha versio joutuvat jostain syystä käyttämään eri tietokantaa, täytyy kantojen tila synkronoida, jotta järjestelmien vaihtaminen onnistuu saumattomasti yhteen kantaa sovelluksen tekemät päivitykset on siis tavalla tai toisella tehtävä myös toiseen, kenties skeemaltaan jo muuttuneeseen kantaan.
 
## Feature toggle

Canary releasea havainnollistavassa kuvassa järjestelmän uusi ja vanha versio näytettiin erillisenä palvelimena. Sama voidaan toteuttaa myös käyttäen yksittäistä palvelinta ns. [feature toggleja](https://martinfowler.com/articles/feature-toggles.html) hyödyntämällä. Sama asia kulkee myös nimillä feature flag, conditional feature, config flag, nimi feature toggle alkaa kuitenkin vakiintua.

Feature togglejen periaate on erittäin yksinkertainen. Koodiin laitetaan ehtolauseita, joiden avulla osa liikenteestä ohjataan vanhan toteutuksen sijaan uuteen laadun hallinnan alla olevaan toteutukseen.

Esimerkiksi sosiaalisen median palvelussa voitaisiin käyttäjälle näytettävien uutisten listaan asettaa feature toggle, jonka avulla tietyin perustein valituille käyttäjille näytettäisiinkin uuden algoritmin perusteella generoitu lista uutisia:

![]({{ "/images/3-17.png" | absolute_url }}){:height="200px" }

Canary releaset eivät ole feature togglejen ainoa sovellus, niitä käytetään
yleisesti myös eliminoimaan tarve pitkäikäisille feature brancheille, eli sen sijaan, että uusia ominaisuuksia toteutetaan erilliseen haaraan versionhallinnassa joka ominaisuuksien valmistumisen yhteydessä mergetään pääkehityshaaraan, uudet ominaisuudet tehdään suoraan pääkehityshaaraan, mutta ne piilotetaan käyttäjiltä feature toggleilla.

Käytännössä feature toggle siis palauttaa aina vanhan version normaaleille käyttäjille, sovelluskehittäjien ja testaajien taas on mahdollista valita kumman version feature toggle palauttaa. Kun ominaisuus on valmis testattavaksi laajemmalla joukolla, voi feature togglen avulla sitten esim. julkaista ominaisuuden ensin kehittäjäyrityksen omaan käyttöön ja lopulta osalle käyttäjistä canary releasena. Lopulta feature toggle ja vanha toteutus voidaan poistaa.

Suuret internetpalvelut kuten Facebook, Netflix, Google ja Flickr soveltavat laajalti canary releaseihin ja feature toggleihin perustuvaa kehitysmallia. 

## Feature branchit ja merge hell

Edellisessä luvussa mainittiin [feature branchit](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), kyseessä on siis käytäntö, missä uudet ominaisuudet, esimerkikri user storyn vaatima toiminnallisuus toteutetaan ensin omaan versionhallinnan haaraansa (branch) ja ominaisuuden valmistuttua haara mergetään pääkehityshaaraan (esim. masteriin).

Monet pitävät feature brancheja versionhallinnan käytön best practicena. Viime aikoina on kuitenkin ruvettu monissa piireissä pitämään feature branchaystä ikävänä käytänteenä, sillä se johtaa helposti pahoihin merge-konflikteihin, erityisesti jos branchit ovat pitkäikäisiä.

Seurauksena pienimuotoinen integraatiohelvetti, _merge hell_ ja normipäivä ohjelmistotiimissä alkaa muistuttaa seuraavaa

![]({{ "/images/3-18.png" | absolute_url }}){:height="80px" }
 
Viime aikaisena suuntauksena on noussut esiin [trunk based development](https://trunkbaseddevelopment.com/) missä pitkäikäisiä feature brancheja ei käytetä ollenkaan.

Kaikki muutokset tehdään suoraan pääkehityshaaraan, josta käytetään nimitystä trunk. Pääkehityshaara voi olla master tai joku erillinen branch käytännöistä riippuen. Ohjelmiston kustakin julkaistusta versiosta saatetaan tarvittaessa tehdä oma _release branch_.

Trunk-pohjainen kehitys pakottaa sovelluskehittäjät tekemään pieniä, nopeasti päähaaraan mergettäviä muutoksia. Trunk-pohjainen kehitys yhdistetään usein feature toggleihin, näin puolivalmiitakin ominaisuuksia voidaan helposti ohjelmoida suoraan päähaaraan ilman sovelluksen olemassa olevan toiminnallisuuden sotkemista.

Trunk-pohjainen kehitysmalli edellyttää sovelluskehittäjiltä kuria ja systemaattisuutta. Feature togglejen holtiton käyttö voi johtaa feature toggle helvettiin... 

Trunk-pohjaista kehitysmallia noudattavat esim. Google, Facebook ja Netflix.

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