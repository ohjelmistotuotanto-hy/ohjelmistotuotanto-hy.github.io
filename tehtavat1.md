---
layout: page
title: Viikko 1
inheader: no
permalink: /tehtavat1
---

## Viikko 1

*Allaolevien tehtävien deadline on maanantaina 2.11. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä zoomissa:

- Maanantai 14-16 [zoom](https://helsinki.zoom.us/j/63962392550?pwd=RzluTjZWYmNLb0g4bjRxb0ZlckRkUT09) alkaen 2.11
- Perjantai 10-12 [zoom](https://helsinki.zoom.us/j/64396759243)

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/1), joiden deadline on sunnuntaina 1.11. klo 23:59:00.  

Tämän viikon tehtävissä harjoitellaan ensin muutaman tärkeän ohjelmistokehityksen työkalun (_komentorivi, versionhallinta, buildin hallinta, automatisoitu testaus, jatkuva integraatio_) käyttöä.

Laskarien lopuksi harjoitellaan _riippuvuuksien injektointia_ joka on melko simppeli mutta erittäin käyttökelpoinen tekniikka, jonka avulla sovellusten testattavuutta on mahdollista parantaa.

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/main/tehtavat1.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>. Käytännössä tällä viikolla tehdään palautusta varten kaksi erillistä GitHub-repositoria, ensimmäinen tehtäviä 2-13 varten ja toinen tehtäviä 14-16 varten. Jos et vielä tiedä mikä on GitHub ja repositorio, niin pian opit.

Tehtävää 1 ei varsinaisesti palauteta minnekään.

### 1. komentorivi

Graafisten käyttöliittymien olemassaolosta huolimatta ohjelmistoalalla on edelleen erittäin tärkeää hallita komentorivin eli terminaalin käyttö. Itse asiassa komentorivin merkitys on jopa nousussa. 

Varmista, että osaat käyttää "riittävästi" komentoriviä (ks. alla oleva lista). 

Jos osaamisessasi on puutteita (ks. alla oleva lista) kertaa haluamastasi resurssista:

- <https://www.codecademy.com/learn/learn-the-command-line> online-kurssin kaksi ensimmäistä osaa _Navigating the File System_ ja _Viewing and Changing the File System_
- <https://ryanstutorials.net/linuxtutorial/> oppaasta 4 osaa: _1. The Command Line_, _2. Basic Navigation_, _3.More About Files_ ja _5. File Manipulation_

Myös kurssin Tietokone työvälineenä tämän syksyn [komentorivimateriaali](https://tkt-lapio.github.io/command-line/) käsittelee myös suurta osaa tehtävän komennoista.

*HUOM. Codecademy vaatii kirjautumisen Facebook, Google tai GitHub -tunnuksella. Kurssilla käytetään muutenkin GitHubia, eli se tunnus pitäisi kaikilla olla olemassa, jotta pääsee kirjautumaan.*

Tämän tehtävän jälkeen sinun tulisi hallita seuraavat asiat:
* käsitteet
  * root directory
  * home directory
  * parent directory
  * child directory
  * working directory
  * .. ja *
* ja osata käyttää komentoja
  * pwd
  * cd
  * ls, ls -a, ls -l, ls -t
  * mkdir
  * touch
  * cp
  * rm, rm -r
  * mv

Tulet tarvitsemaan komentorivin käyttötaitoja tällä kurssilla ja muutenkin opinnoissasi.

Tehtävää ei palauteta mitenkään. Voit merkitä tehtävän tehdyksi kun osaat yllä luetellut asiat.

### 2. Githubiin [versionhallinta]

Jos sinulla ei jostain syystä ole vielä tunnusta [GitHubiin](https://github.com), luo se nyt.

Luo githubiin repositorio nimellä ohtu-2020-viikko1 

* klikkaa yläpalkin oikeassa reunassa olevaa  "Create a new repo"-ikonia 
* **laita rasti** kohtaan Initialize this repository with a README 

![]({{ "/images/lh1-1.png" | absolute_url }})

**Jos et ole vielä luonut** koneellesi _ssh-avainta_, tee se nyt

* Ohje avaimen luomiseen esim. [täällä](https://www.howtoforge.com/linux-basics-how-to-install-ssh-keys-on-the-shell). Riittää että teet stepit 1 ja 2 tai kurssin [Ohjelmistotekniikka](https://github.com/mluukkai/Ohjelmistotekniikka-syksy-2020/blob/main/tehtavat/viikko1.md#julkinen-avain)-materiaalista

Lisää julkinen avain githubiin:

* <https://github.com/settings/ssh>

Näin pystyt käyttämään GitHubia ilman salasanan syöttämistä koneelta, josta juuri luodun avaimen salainen pari löytyy

Jos et ole jo aiemmin niin tehnyt, konfiguroi nimesi ja email-osoitteesi paikallisen koneesi git:iin antamalla komennot:

    git config --global user.name "Your Name"
    git config --global user.email my.address@gmail.com

Oletuseditoriksi kannattaa Linuxilla ja macOS:lla konfiguroida _nano_

    git config --global core.editor nano
    
ja Windowsilla  _notepad_

    git config --global core.editor notepad    

Tosin jos olet vimin käyttäjä, voit jättää edellisen tekemättä.

Kloonaa nyt githubiin tehty repositorio **paikalliselle koneelle**. Tämä tapahtuu antamalla komentoriviltä komento

    git clone git@github.com:omatunnustahan/ohtu-2019-viikko1.git

missä komennon <code>git clone</code> parametrina on repositoriosi sivulla näkyvä merkkijono (huomaa, että formaatin on oltava SSH):

![]({{ "/images/lh1-2.png" | absolute_url }})

Nyt paikalliselle koneellesi syntynyt hakemisto <code>ohtu-2019-viikko1</code> (hakemiston nimi on sama kuin repositoriosi), joka on on githubissa olevan repositorion klooni.

### 3. Gitin alkeet [versionhallinta]

Olet jo todennäköisesti käyttänyt Gitiä aiemmilla kursseilla. Tässä tehtävässä harjoitellaan seuraavia komentoja:

* git add
* git commit
* git status
* git checkout -- file
* git reset HEAD
* .gitignore

* Jos et vielä hallitse komentoja, käy läpi kurssin Ohjelmistotekniikka 
[Git-tutoriaali](https://github.com/mluukkai/Ohjelmistotekniikka-syksy-2020/blob/main/tehtavat/viikko1.md#gitin-alkeet). Pelkän lukemisen sijaan kannattanee myös tehdä itse tutoriaalin git-operaatiot.

Lisää git-ohjeita löytyy runsaasti internetistä, esim:
  * [Pro Git -opas](http://git-scm.com/book), kannattaa lukea näin alkuun luku 2
  * [Githubin helpit](https://help.github.com/articles/)
  * <https://www.atlassian.com/git/tutorials>
  * <https://we.riseup.net/debian/git-development-howto>
  * <http://www.ralfebert.de/tutorials/git/>

**Tee nyt seuraavat:**

* mene edellisessä tehtävässä luotuun repositorion klooniin (eli komennon <code>git clone</code> luomaan hakemistoon)
* lisää ja committaa repositorioon kaksi tiedostoa ja kaksi hakemistoa, joiden sisällä on tiedostoja
  * muista hyödyllinen komento git status
* muuta ainakin kahden tiedoston sisältöä ja committaa muutokset repositorioon
* tee .gitignore-tiedosto, jossa määrittelet, että repositorion juurihakemistossa olevat tiedostot, joiden pääte on _tmp_ ja hakemistot joiden nimi on _build_ ja _.gradle_ ignoroidaan 
  * huomaa, että ainoastaan hakemisto nimeltä _build_ pitää ignoroida, tiedostot joiden nimi alkaa sanalla build, esim tehtävässä 7 lisättävä _build.gradle_ eivät saa ignoroitua!
  * toinen ignorattava hakemisto on siis _.gradle_, jonka nimi alkaa pisteellä
  * pistealkuiset hakemistot ja tiedostot eivät näy oletusarvoisesti komennon _ls_ listauksissa, saat ne näkyville komennolla _ls -a_
* lisää tmp-päätteisiä tiedostoja hakemistoon ja varmista että git jättää ne huomioimatta
  * saat asian tarkastettua komennolla _git status_
* lisää myös hakemisto nimeltä _build_  ja hakemiston sisälle joku tiedosto. Varmista että build sisältöineen ei mene versionhallinnan alaisuuteen
* lisää ja commitoi .gitignore repositorioosi
* tee muutos johonkin tiedostoon. Älä lisää tiedostoa "staging"-alueelle
  * peru muutos (git status -komento antaa vihjeen miten tämä tapahtuu)
* tee muutos ja lisää tiedosto "staging"-alueelle
  * peru muutos (git status -komento antaa vihjeen miten tämä tapahtuu)

**git add -p**

* tutoriaaleissa ei valitettavasti käytetä git add -komennon hyödyllistä muotoa <code>git add -p</code> 
* tee muutoksia muutamiin tiedostoihin ja lisää muutokset staging-alueelle komennon git add -p avulla
* jos lisäät projektiin uusia tiedostoja, ei git add -p huomaa niitä, eli ne on lisättävä staging-alueelle erikseen 
* _käytä jatkossa komentoa git add -p aina kun se on suinkin mahdollista!_

komennolla man git add saat lisätietoa optiosta ja mm. vastausvaihtoehtojen selitykset. 

### 4. Tiedostojen lisääminen GitHubiin [versionhallinta]

Tehtävässä 2 tehtiin GitHubiin repositorio, joka liitettiin paikalliselle koneelle luotuun repositorioon "remote repositoryksi". Synkronoidaan paikallisen repositorion ja githubin tilanne:

* "pushaa" nämä GitHubissa olevaan etärepositorioon antamalla komento <code>git push</code>
* varmista selaimella, että lisätyt tiedostot menevät GitHubiin

Githubissa pitäisi näyttää suunilleen seuraavalta

![]({{ "/images/lh1-3.png" | absolute_url }})

### 5. Monta kloonia samasta repositoriosta [versionhallinta]

Yleensä on tapana pitää GitHubissa olevaa repositorioa tiedostojen "keskitettynä" sijoituspaikkana ja liittää paikallisella koneella oleva repositorio GitHubissa olevan repositorion etärepositorioksi, kuten teimme tehtävässä 1. 

Jos työskennellään useammalta koneelta, on githubissa olevasta repositoriosta monta kloonia ja kloonien tila on pidettävä ajantasalla.

Luodaan nyt harjoituksen vuoksi paikalliselle koneelle repositoriosta toinen klooni:

* mene komentoriville ja esim. kotihakemistoosi  (tai johonkin paikkaan, joka ei ole git-repositorio) 
* anna komento `git clone git@github.com:githubtunnus/repositorionNimi.git nimiKloonille`
  * githubtunnus ja repositorionNimi selviävät  GitHubista repositoriosi tehtävän 2 toisen kuvan osoittamasta paikasta
  * *nimiKloonille* tulee olemaan kloonatun repositorion nimi, varmista että annat nimen, jonka nimistä tiedostoa tai hakemistoa ei jo ole kansiossa
* mene kloonattuun repositorioon ja lisää sinne jotain tiedostoja. Committaa lopuksi
* "pushaa" muutokset GitHubiin
* varmista selaimella, että lisätyt tiedostot menevät GitHubiin

**Mene nyt tehtävässä 1 tehtyyn GitHub-repositorion klooniin.**

* alkuperäinen paikallinen klooni ei ole enää ajantasalla, "pullaa" sinne muutokset komennolla <code>git pull</code>
* varmista että molempien paikallisten repositorioiden sisältö on nyt sama
* lisää alkuperäiseen kopioon joitain tiedostoja ja pushaa ne GitHubiin
* mene jälleen kloonattuun kopioon ja pullaa

### 6 Repositorion siivous [versionhallinta]

Valmistaudutaan seuraavaan tehtävään siivoamalla repositoriostamme ylimääräiset tiedostot

* mene repositoriosi alkuperäiseen, tehtävässä 2 tekemääsi klooniin
  * voit poistaa tehtävää 5 varten tekemäsi harjoituskloonin
* poista repositorioistasi kaikki hakemistot sekä muut tiedostot paitsi _.gitignore_ ja _README.md_  
* committaa muutokset 
  * varmista komennolla _git status_ että kaikki muutokset ovat versionhallinnassa, eli että git ei ilmoita joidenkin tiedostojen olevan _Changes not staged for commit_ 
  * joudut ehkä kertaamaan tehtävän 3 linkittämistä tutoriaaleista sitä miten tiedostojen poistaminen gitistä tapahtuu
* pushaa muutokset githubiin. Katso selaimella, että GitHubissa kaikki on ajan tasalla, eli että repositiossa ei ole mitään muuta kuin tiedostot _.gitignore_ ja _README.md_ 

Haetaan sitten seuraavissa tehtävissä käytettävä koodi

* hae osoitteesta <https://github.com/ohjelmistotuotanto-hy/syksy2020/blob/main/ohtuvarasto.zip?raw=true> löytyvä zipattu paketti
* pura paketti sopivaan paikkaan 
* siirrä paketin sisällä olevat tiedostot kloonattuun repositorioon siten, että **paketissa olevat tiedostot ja hakemistot tulevat repositorion juureen**

* repositoriosi sisältävän hakemiston tulee nyt näyttää seuraavalta

![]({{ "/images/lh1-4.png" | absolute_url }})

* lisää ja committoi zipistä puretut tavarat repositorioosi ja pushaa ne githubiin
* katso vielä kerran selaimella, että GitHubissa kaikki on ajan tasalla

**Huomaa, että repositoriosi tulee näyttää tehtävän jälkeen suunnilleen seuraavalta:**

![]({{ "/images/lh1-5.png" | absolute_url }})

**Jos hakemisto _src_ ja tiedostot _build.gradle_ ym. eivät ole repositorion juuressa, siirrä ne sinne ennen kuin siirryt eteenpäin.**

### 7. Gradle

Tämän kurssin ohjelmointitehtävissä käytetään Javaa. Jos koneellasi ei ole vielä Javaa asennettuna, pääset helpoimmalla seuraamalla [ohjelmointikurssien](https://www.mooc.fi/fi/installation/netbeans) ohjeita Javan ja Netbeansin asentamiselle. Kurssin tehtäviä ei kuitenkaan palauteta TMC-liitännäisen avulla, joten se TMCbeans ei ole välttämätön kurssin suorittamiselle, myös muut editorit käyvät.

Ohjelmoinnin peruskursseilla koodi suoritettiin painamalla NetBeansin "vihreää nuolta", ja testit painamalla "mustaa silmää". Ammattimaisessa ohjelmistokehityksessä koodin suorituskelpoiseksi tekemisen ja testaamisen on tapahduttava toistettavalla tavalla, ja siten että operaatiot pystytään suorittamaan millä tahasa koneella, _skriptatusti_ komentoriviltä, eli riippumatta NetBeansin kaltaisista kehitysympäristöistä.

Tähän tarkoitukseen on kehitetty useita _build-ohjelmistoja_. Olet ehkä käyttänyt aikaisemmilla kursseilla [Mavenia](https://maven.apache.org/). Tällä kurssilla käytetään [Gradlea](https://gradle.org), joka on uusissa projekteissa paljolti korvannut Mavenin. Se on Mavenia helpommin konfiguroitava, ja joissain tilanteissa myös tätä nopeampi.

Gradlen dokumentaatio sisältää seuraavan kuvauksen:

> Gradle is a build tool with a focus on build automation and support for multi-language development. If you are building, testing, publishing, and deploying software on any platform, Gradle offers a flexible model that can support the entire development lifecycle from compiling and packaging code to publishing web sites. Gradle has been designed to support build automation across multiple languages and platforms including Java, Scala, Android, C/C++, and Groovy, and is closely integrated with development tools and continuous integration servers including Eclipse, IntelliJ, and Jenkins.

* edellisessä tehtävässä lisättiin repositorioon gradle-muodossa oleva projekti, joka sisältää aikoinaan [ohjelmoinnin perusteissa](http://www.cs.helsinki.fi/u/wikla/ohjelmointi/materiaali/02_oliot/#15) olleen luokan <code>Varasto</code>, sen käyttöä demonstroivan pääohjelman ja muutaman JUnit-testin
* tutki gradle-muotoisen projektin hakemistorakennetta esim. antamalla komento <code>tree</code> projektin sisältävän hakemiston juuressa (_tree_ ei ole gradleen liittyvä käsky vaan normaali shell-komento)
  * Windowsissa komennosta käyttökelpoisin muoto on <code>tree /F</code>
  * Jos käytössäsi on Windowsissa _git bash_ komento on muotoa <code>cmd //c tree</code>
  * HUOM: macOS:ssä ei ole oletusarvoisesti tree-komentoa
  * mikäli koneellasi on [HomeBrew](http://mxcl.github.com/homebrew/) asennettuna, saat tree:n asennettua <code>brew install tree</code>
  * myöskään kaikissa linuxeissa ei komento _tree_ ole  oletusarvoisesti asennettu. debian-pohjaisissa linuxeissa (esim ubuntussa) saat asennettua tree:n komennolla <code>sudo apt-get install tree</code>
* tarkastele projektin määrittelevän tiedoston _build.gradle_ sisältöä
  * tiedosto määrittelee mm. pääohjelman sijainnin `mainClassName = 'ohtu.ohtuvarasto.Main'`  

**Avaa edellisen tehtävän projekti suosikki-idelläsi**

* Huomaa, että NetBeans ei tue oletusarvoisesti Gradlea, ja joudut asentamaan gradle-pluginin valitsemalla _tools -> plugins -> available plugins_
  * Uudet versiot Eclipsestä ja IntelliJ IDEAsta osaavat avata Gradle-projekteja suoraan
* HUOM: jos et ole aiemmin kääntänyt koneellasi gradle-muotoisia projekteja, saattaa IDE valittaa tässä vaiheessa joidenkin kirjastojen (mm. JUnit) puuttumisesta. Asia korjaantuu "buildaamalla" tai kääntämällä projekti komentoriviltä (ohjeet alla) 

Ohjelmakoodin editointi kannattaa tehdä IDE:llä kuten usein myös ohjelman ja testien ajaminenkin, mutta **gradlea kannattaa kuitenkin ehdottomasti totutella käyttämään myös komentoriviltä.** 

**Kokeillaan nyt gradlen käyttöä komentoriviltä**
 
Gradle on siinä mielessä mielenkiintoinen työkalu, että sitä ei ole pakko asentaa ennen käytön aloittamista. Gradle-projektit sisältävät skriptit _gradlew_ (Linuxille) ja _gradlew.bat_ (Windowsille), jotka osaavat tarvittaessa asentaa Gradlen koneellesi.

Suorita projektin juuressa (eli samassa hakemistossa missä tiedosto _build.gradle_ sijaitsee) komento <code>./gradlew build</code> (Linux) <code>gradlew.bat build</code> (Windows). Gradle asentuu koneellesi. 

Jos edelliset komennot eivät toimi, asenna gradle koneellesi ja käytä suoraan komentoa <code>gradle build</code>. 

Huomaa, että gradlen version tulee olla vähintään 5.6. Esim. laitoksen koneilla valmiina oleva versio on liian vanha. Versio selviää komennolla _gradle -v_, ja tuloksen pitäisi näyttää suunilleen seuraavalta:

````
$ gradle -v

------------------------------------------------------------
Gradle 6.7
------------------------------------------------------------

Build time:   2020-10-14 16:13:12 UTC
Revision:     312ba9e0f4f8a02d01854d1ed743b79ed996dfd3

Kotlin:       1.3.72
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.8 compiled on May 10 2020
JVM:          11.0.8 (AdoptOpenJDK 11.0.8+10)
OS:           Mac OS X 10.14.6 x86_64

➜  repo git:(main)
```

* **HUOM** macOS:llä automaattinen asentuminen ei ole ainakaan kaikilla toiminut. Eli macOS-käyttäjien kannattaa aloittaa asentamalla _gradle_ [homebrew:illa](https://gradle.org/install#with-homebrew), ja suorittaa komento muodossa <code>gradle build</code>. Jos et jo käytä [homebrewia](https://brew.sh), kannattaa aloittaa nyt.

Jos mikään yo. komennoista ei päädy ilmoitukseen _BUILD SUCCESSFUL_ on todennäköisesti Javan konfiguraatiossa jotain häikkää. Koneellasi tulee olla _Java Development Kit_ (eli JDK) asennettuna ja ympäristömuuttuja *JAVA_HOME* tulee olla asetettu siten, että sen arvona on JDK:n sijainti, ks. esim. <http://www.robertsindall.co.uk/blog/setting-java-home-variable-in-windows/>. JAVA_PATH:in asettamisen jälkeen komentorivi tulee käynnistää uudelleen. 

> Jos saat JDK:n asennuksesta ja *JAVA_HOME*:n asettamisesta ja komentorivin uudelleenkäynnistämisestä  huolimatta virheen _Could not find tools.jar_, tee projektiisi tiedosto _gradle.properties_ ja määrittele sinne JDK:n sijainti seuraavaan tyyliin (polun kohdalle siis tulee oman koneesi JDK:n polku):
>
><pre>
>org.gradle.java.home=C:\\Program Files\\Java\\jdk1.11.0_45
></pre>
>
>Lisää tiedostoon _.gitignore_ rivi 
>
><pre>
>gradle.properties
></pre>
>
>Emme halua laittaa määrittelyä versionhallintaan asti, sillä kyseessä on konekohtainen asetus.
>
>Jos jouduit tekemään tämän ratkaisun, on todennäköistä, että joudut toimimaan samoin jatkossa kaikkien gradle-projektien kohdalla.

Kun komento <code>./gradlew build</code> (Linux, macOS) tai <code>gradlew.bat build</code> (Windows) tai <code>gradle build</code> toimii, olet valmis siirtymään seuraavaan kohtaan.

**Tee nyt seuraavat toimenpiteet**. Ohjeen kaikissa kohdissa komento on annettu muodossa <code>gradle toimenpide</code>, käytä sitä komennon muotoa joka toimii koneellasi, suositeltavinta on käyttää versiota <code>./gradlew</code>, näin varmistat että käytössäsi on uusin gradlen versio.

* aloita nyt puhtaalta pöydältä komennolla <code>gradle clean</code>
  * käytä siis komennosta muotoa <code>./gradlew</code> jos <code>gradle</code> ei toimi
* tee juuressa komento <code>tree</code>
* käännä koodi: <code>gradle build</code>
  * tee jälleen juuressa komento tree. Mitä muutoksia huomaat?
* suorita pääohjelma komennolla <code>gradle run</code>
* tee <code>gradle clean</code>
  * suorita cleanin jälkeen tree-komento. Mitä clean tekee?
* suorita testit komennolla <code>gradle test</code>
  * suorita jälleen komento <code>tree</code>
  * huomaat, että testien ajaminen luo hakemiston _build/reports/tests/test_. Testien diagnostiikka tulee tähän hakemistoon
* avaa selaimella testien tuloksen raportoiva tiedosto _build/reports/tests/test/index.html_

Tehdään seuraavaksi projektista [jar](https://en.wikipedia.org/wiki/JAR_(file_format))-tiedosto, joka paketoi projektin käännetyn koodin yhdeksi tiedostoksi, joka voidaan suorittaa millä tahansa koneella, mille on asennettu java.

* Lisää tiedostoon _build.gradle_ seuraava:

```groovy
jar {
    manifest {
        attributes 'Main-Class': 'ohtu.ohtuvarasto.Main'
    }
}
```

Lisätty konfiguraatio kertoo, mikä ohjelman luokista on ns. pääohjelma, eli sisältää metodin _main_

* generoi jar-tiedosto komennolla <code>gradle jar</code>
  *  komennolla tree näet minne hakemistoon jar tulee
* suorita jar-tiedosto komennolla <code>java -jar tiedoston_nimi.jar</code>
  * komento tulee suorittaa hakemistosta, jossa jar-tiedosto sijaitsee 
* voit nyt suorittaa ohjelman millä tahansa koneella kopioimalla jar-tiedoston koneelle ja suorittamalla edellä mainitun komennon. 

### 8. JUnit

Ohjelmistokehityksen ehkä tärkein vaihe on laadunvarmistus, laadunvarmistuksen tärkein keino taas on testaus, joka on syytä automatisoida mahdollisimman pitkälle, sillä ohjelmistoja joudutaan testaamaan paljon. Erityisesti iteratiivisessa/ketterässä ohjelmistokehityksessä samat testit on suoritettava uudelleen aina ohjelman muuttuessa. 

Java-maailmassa automatisoidun testaamisen johtava työkalu on JUnit, johton olet todennäköisesti jo tutustunut kurssilla Ohjelmistotekniikka. 
  * Jos JUnit on vieras tai pääsyt unohtumaan kertaa perusteet kurssin Ohjelmistotekniikka [JUnit-ohjeesta](https://github.com/mluukkai/Ohjelmistotekniikka-syksy-2020/blob/main/web/junit.md) 

Edellisen tehtävän esimerkkisovelluksessa on jo jonkun verran JUnit-testejä, **laajennetaan nyt testejä**.

**HUOM** tehtävässä käytettävä _jacoco_-plugin edellyttää toimiakseen gradlen versiota 5.6. Voit testata käyttämäsi version komennolla _gradle -v_. 

Muista, että testit suoritetaan komennolla <code>gradle test</code>

* Täydennä Ohtuvaraston testejä siten, että luokan _Varasto_ testien rivikattavuudeksi (line coverage) tulee 100%
  * joudut huomioimaan ainakin tapaukset, joissa varastoon yritetään laittaa liikaa tavaraa ja varastosta yritetään ottaa enemmän kuin siellä on
  * edellinenkään ei vielä riitä
* testauksen rivikattavuuden saat selville Gradlen [JaCoCo](https://docs.gradle.org/current/userguide/jacoco_plugin.html#gsc.tab=0)-pluginin avulla
* ota plugin projektissasi käyttöön muuttamalla tiedoston _build.gradle_ alku muotoo:

```groovy
plugins {
    id 'application'
    id 'jacoco'
}
```
ja suorittamalla komento <code>gradle test jacocoTestReport</code>
* näet html-muodossa olevean testien rivikattavuusraportin avaamalla selaimella tiedoston _build/reports/jacoco/test/html/index.html_
  * pääset klikkailemalla luokkien ja metodien nimiä näkemään mitkä rivit ovat vielä testien ulottumattomissa
  * **HUOM** jos jacoco aiheuttaa virheilmoituksen _Could not resolve all files for configuration ':jacocoAgent'._ , vaihda tiedostosta _build.gradle_ merkkijono _jcenter()_ muotoon _mavenCentral()_
  * **HUOM2** jos gradle ilmoittaa _:jacocoTestReport SKIPPED_, suorita komento <code>gradle clean</code> ja yritä uudelleen.

* kun luokan <code>Varasto</code> testien rivikattavuus (line coverage) on 100%, pushaa tekemäsi muutokset GitHubiin

**HUOM** tehtävässä käytettävä _jacoco_-plugin edellyttää toimiakseen riittävän uuden gradlen version Voit tarkistaa käyttämäsi version komennolla _gradle -v_. Cubbli-Linuxien oletusarvoinen versio on 4.4.1. ja sitä käyttäessä (eli komennolla _gradle_) jacoco ei toimi:

```
mluukkai@melkki:~/ohtu-2019-viikko1$ gradle test jacocoTestReport
Starting a Gradle Daemon (subsequent builds will be faster)

> Task :test
Exception in thread "main" java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
```

Komennolla _./gradlew_ on käytössä projektin lokaali versio 6.7.0. ja sillä projekti toimii.

```
mluukkai@melkki:~/ohtu-2019-viikko1$ ./gradlew test jacocoTestReport

...

BUILD SUCCESSFUL in 16s
```

### 9. GitHub Actions, osa 1

Gradlen avulla ohjelmiston käännös ja testien suorittaminen on mahdollista tehdä skriptattavaksi, eli komentoriviltä helposti suoritettavaksi. Käännöksen automatisoinnin jälkeen seuraava askel on suorittaa buildausprosessi, eli ohjelman kääntäminen ja siihen liittyvien testien suoritus, erillisellä _build-palvelimella_ (engl. build server).

Ideana on, että ohjelmistokehittäjä noudattaa seuraavaa sykliä:
- uusin versio koodista haetaan versionhallinnan keskitetystä repositoriosta ohjelmistokehittäjän koneelle
- lisäykset ja niitä testaavat testit tehdään paikalliseen kopioon
- käännös ja testit ajetaan paikalliseen kopioon ohjelmistokehittäjän työasemalla
- jos kaikki on kunnossa, paikalliset muutokset lähetetään keskitettyyn repositorioon
- build-palvelin seuraa keskitettyä repositoriota ja kun siellä huomataan muutoksia, hakee ja kääntää build-palvelin muuttuneen koodin ja suorittaa sille testit
- build-palvelin raportoi havaituista virheistä

Erillisen build-palvelimen avulla varmistetaan, että ohjelmisto toimii muuallakin kuin muutokset tehneen ohjelmistokehittäjän koneella. Tätä käytännettä kutsutaan _jatkuvaksi integraatioksi_ (engl. continuous integration). Palaamme asiaan tarkemmin kurssin [kolmannessa osassa](http://localhost:4000/osa3#jatkuva-integraatio).

Nykyään alkaa olla yleistä, että erillisen build-palvelimen sijaan käytetään jotain verkossa olevaa "build-ohjelmistoa", jolloin softakehittäjien ei tarvitse huolehtia ollenkaan buildaukseen käytettävän palvelimen ja sen ohjelmistojen asentamisesta.

Kurssilla käytetään GitHubiin 15.11.2019 julkaistua ja sen jälkeen nopeasti suuren suosion saavuttanutta [Actions](https://github.com/features/actions)-ominaisuutta hoitamaan automatisoitu buildaus.

Konfiguroidaan seuraavaksi GitHub Actions huolehtimaan projektistamme. 

Valitse GitHub-repositoriostasi välilehti _Actions_ ja _Java with Gradle_:

![]({{ "/images/lh1-20.png" | absolute_url }})

Valinta avaa actionien konfiguraatiotiedoston. Muuta se seuraavaan muotoon:

```
name: Java CI with Gradle

on:
  push:
    branches: [ main ]

jobs:
  run_tests:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up JDK 1.11
      uses: actions/setup-java@v1
      with:
        java-version: 1.11
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    - name: Test with Gradle
      run: ./gradlew test
```

Paina vihreää _Start commit_ -nappia, ja anna sopiva commit-viesti.

Konfiguraatiotiedosto (jonka nimi on oletusarvoisesti _gradle.yml_) tallettuu repositorioosi hakemiston `.github/workflows` alle:

![]({{ "/images/lh1-21.png" | absolute_url }})

GitHub siis committoi uuden tiedoston automaattisesti repositorioosi.

Kun nyt pullaat repositorion koodin omalle koneellesi, näkyy konfiguraatiotiedosto myös siellä, esim. VS Code -editorilla se näyttää seuraavalta:

![]({{ "/images/lh1-22.png" | absolute_url }})

Kun avaan nyt repositorion välilehden _Actions_, huomaat että sinne on ilmestynyt hieman tavaraa:

![]({{ "/images/lh1-23.png" | absolute_url }})

### 10. GitHub Actions, osa 2

Katsotaan hieman tarkemmin mitä GitHub actionien konepellin alla tapahtuu.

GitHub actionit ovat sarjoja erilaisia "toimenpiteitä", joita GitHub voi suorittaa repositoriossa olevalle koodille. Actionin toiminta määritellään hakemiston _.github/workflows_ sijoitettavissa _.yml_-päätteisissä tiedostoissa. 

Tarkastellaan äsken määrittelemäämme tiedostoa:

```
name: Java CI with Gradle

on:
  push:
    branches: [ main ]

jobs:
  run_tests:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up JDK 1.11
      uses: actions/setup-java@v1
      with:
        java-version: 1.11
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    - name: Test with Gradle
      run: ./gradlew test
```

Kohta [on](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) määrittelee missä tilanteissa actionit suoritetaan. Konfiguraatiomme määrää, että actionit suoritetaan aina kun repositorion päähaaraan pushataan koodia.

Osoissa [jobs](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobs) voidaan määritellä yksi tai useampi "työ", eli useasta askeleesta koostuva tehtäväsarja. Määrittelimme tällä ketaa vain yhden työn, jolle annoimme nimen *run_tests*. Jos töitä olisi useita, suorittaisi GitHub actions ne yhtä aikaa.

Yksittäinen työ koostuu useista askelista, jotka on määritelty työn alla kohdassa [steps](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps).

GitHub varaa työn askelien suorittamista varten virtuaalikoneen. Kohta [runs-on](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) määrittelee minkälaisella käyttöjärjestelmällä työn askeleet suoritetaan. Esimerkkimme tapauksessa suoritusympäristö on Ubuntu Linux.

Esimerkkimme tapauksessa työ koostuu neljästä askeleesta. Ensimmäinen askel 

```
- uses: actions/checkout@v2
```

suorittaa valmiiksi määritellyn actionin [checkout](https://github.com/marketplace/actions/checkout), joka dokumentaationsa mukaan tekee seuraavaa

> This action checks-out your repository under $GITHUB_WORKSPACE, so your workflow can access it.

Eli _checkout_ action siis hakee repositorion koodin askeleet suorittavalle virtuaalikoneelle. 

Toinen askel on action [setup-java](https://github.com/marketplace/actions/setup-java-jdk), joka asentaan työn suorittavalle virtuaalikoneelle Javan.

Molemmat näistä actioneista olivat GitHubin [marketplacesta](https://github.com/marketplace?type=actions) löytyviä valmiita actioneja. Esim. Javan asentaminen työn suorittavalle virtuaalikoneelle on itsessään aika monimutkainen toimenpide, mutta valmiiksi määritelty action tekee sen helpoksi.

Kolmas askel on hieman erilainen:

```
- name: Grant execute permission for gradlew
  run: chmod +x gradlew
```

Se suorittaa komentorivillä komennon, joka antaa suoritusoikeuden tiedostoon _gradlew_. 

Neljäs askel on kaikkein tärkein, se suorittaa gradlen avulla projektin testit:

```
- name: Test with Gradle
  run: ./gradlew test
```

Tee nyt koodiin muutos, joka hajottaa testit ja committaa muutos githubiin.

Hetken kuluttua actions-välilehdellä pitäisi näkyä että commiteja on kaksi (kuvassa niitä on vahingossa kolme), ja että viimeisin on tilaltaan "punainen":

![]({{ "/images/lh1-24.png" | absolute_url }})


Klikkaamalla rikki mennyttä committia, päästään tarkastelemaan hieman tarkemmin actionin suorituksen etenemistä:

![]({{ "/images/lh1-25.png" | absolute_url }})

Kuten odotettua, testi ei mennyt läpi. Riippuen GitHubin asetuksista, olet myös saattanut saada email-muistutuksen rikki menneestä buildista:

![]({{ "/images/lh1-26.png" | absolute_url }})

Korjaa testi ja pushaa muutokset uudelleen GitHubiin. Tarkkaile jälleen Actions-näkymää ja varmista, että kaikki toimii oikein.

### 11. GitHub Actions, osa 3

Laita repositiossa olevaan tiedostoon _README.md_ koodin tilasta kertova _Status Badge_.  

[Tämän](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge) ohjeen mukaan badgen osoite on muotoa

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

*WORKFLOW_NAME* on määritelty konfiguraatiotiedostossa:

```
name: Java CI with Gradle

on:
  push:
    branches: [ main ]

  ....
```

Olemme käyttäneet oletusarvoista nimeä _Java CI with Gradle_, nimi voi kuitenkin olla mikä vaan. Nimessä olevat välilyönnit korvataan osoitteessa merkeillä _%20_.

Esimerkiksi omassa tapauksessani badgelinkki on

```
https://github.com/mluukkai/ohtu-viikko1-s2020/workflows/Java%20CI%20with%20Gradle/badge.svg
```

Lisää badge editoimalla tiedostoa README.md suoraan GitHubissa:

![]({{ "/images/lh1-27.png" | absolute_url }})

Oikein toimiva badge näyttää seuraavalta:

![]({{ "/images/lh1-28.png" | absolute_url }})

Badge toimii siis sen indikaattorina onko repositoriossasi oleva koodi testien puolesta kunnossa!


Tee nyt jokin muutos koneellasi repositorioon ja yritä pushata koodi GitHubiin. Toimenpiteestä seuraa virhe:

<pre>
To github.com:mluukkai/ohtu-viikko1-s2020.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:mluukkai/ohtu-2019-viikko1.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
</pre>

Tulet todennäköisesti törmäämään vastaavaan virheeseen usein. Syynä virheelle on se, että yrität pushata muutoksia GitHubiin vaikka GitHub on "edellä" paikallista repositorioasi (ts. sinne lisättiin tiedosto README.md).

Ongelma ratkeaa, kun teet ensin komennon <code>git pull</code> ja pushaat koodin vasta sen jälkeen. 

Pullauksen yhteydessä syntyy ns. merge commit ja git avaa oletuseditorisi ja haluaa että määrittelet commit messagen. Jos et ole muuttanut gitin käyttämää oletuseditoria, on käytössä _vim_ joka toimii hieman erilaisilla periaatteilla kuin monet muut editorit. Joudut ehkä googlaamaan että pääset vimistä ulos... 

### 12. Codecov

Tehtävässä 8 määrittelimme projektin testauskattavuuden _JaCoCo:n_ avulla. <https://codecov.io> -palvelu mahdollistaa projektien koodikattavuuden julkaisemisen verkossa.

* kirjaudu [Codecoviin](https://codecov.io) (GitHub sign up)
* lisää repositorio Codecoviin alaisuuteen: 

![]({{ "/images/lh1-12.png" | absolute_url }})

Saatat joutua odottamaan hetken, ennen kuin codecov löytää repositoriosi. Jos pieni odottelukaan ei auta, voit mennä suoraan repositoriosi codecov-osoitteeseen, joka on muotoa https://codecov.io/gh/githubtunnus/repositorio, omassa tapauksessani siis <https://codecov.io/gh/mluukkai/ohtu-viikko1-s2020>

Saat Codecov:in tarkkailemaan projektisi koodikattavuutta lisäämällä tiedoston _build.gradle_ loppuun seuraava:

```groovy
jacocoTestReport {
    reports {
        xml.enabled true
        html.enabled true
    }
}
```

Sekä lisäämällä tiedoston GitHub actionit konfiguroivan tiedoston loppuun seuraavat rivit:

```yml
    - name: Code coverage rapost
      run: ./gradlew jacocoTestReport
    - name: Data to codecov
      run: bash <(curl -s https://codecov.io/bash)
```

**HUOM1** rivit on sisennettävä samalle tasolle kuin muut stepit.

**HUOM2** et tarvitse Codecovin tarjoamaa _upload tokenia_ mihinkään:

![]({{ "/images/lh1-13.png" | absolute_url }})

Kun seuraavan kerran pushaamme koodin Githubiin, ilmestyy Codecov:iin koodin testikattavuusraportti:

![]({{ "/images/lh1-14.png" | absolute_url }})

Klikkaailemalla sivun alalaidassa olevasta kohdasta _Files_ tiedostojen nimiä, pääset katsomaan yksittäisten luokkien testauksen kattamat rivit:

![]({{ "/images/lh1-15.png" | absolute_url }})

Käytännössä pyydämme nyt GitHub actioneja suorittamaan onnistuneen testien suorituksen (eli komennon <code>gradle test</code>) jälkeen gradle-komennon, joka ensin suorittaa testien kattavuusanalyysin JaCoCo:lla ja sen jälkeen lähettää tiedot Codecoviin.

GitHub actionien loki näyttää miten askelten suoritus etenee:

![]({{ "/images/lh1-29.png" | absolute_url }})

Lisää repositoriosi README.md-tiedostoon myös Codecov-badge. Löydät badgen Codecovin settings-valikosta.

Projektisi GitHub-sivun tulisi lopulta näyttää suunnilleen seuraavalta (poislukien liian alhainen testauskattvuus):

![]({{ "/images/lh1-30.png" | absolute_url }})

Huomaa, että GitHub actionin ja Codecovin badget eivät päivity täysin reaaliajassa. Eli vaikka projektin testikattavuus nousisi, kestää hetken, ennen kuin badge näyttää tuoreen tilanteen.

### 13. Parempi testauskattavuus

Projektin testauskattavuutta häiritsee nyt se, että myös pääohjelma _Main_ lasketaan testikattavuuteen.

Voimme määritellä, että joidenkin pakkausten sisältö jätetään huomioimatta kattavuusraportin generoinnissa.

Luo projektiin uusi pakkaus nimeltä _paaohjelma_ samalle tasolle kuin _ohtu_, siirrä pääohjelma, eli luokka _Main_ luomaasi pakkaukseen ja muuta _build.gradle_:n _jacocoTestReport_ muotoon:

```
jacocoTestReport {
    reports {
        xml.enabled true
        html.enabled true
    }
    afterEvaluate {
        classDirectories.setFrom(files(classDirectories.files.collect {
            fileTree(dir: it, exclude: ['paaohjelma/**'])
        }))
    }
}
```

Muutoksen jälkeen pakkausrakenteen pitäisi näyttää NetBeansissa seuraavalta

![]({{ "/images/lh1-31.png" | absolute_url }})

Muuta myös tiedoston _build.gradle_  muut viitteet pääohjelmaan oikeaan muotoon ja varmista, että 
[tehtävässä 7](/tehtavat1#7-gradle) mainitut ohjelman suoritus komennolla _gradle run_ ja generoidun jar-tiedoston suorittaminen edelleen toimivat.

Pushaa koodi Githubiin ja varmista, että Codecov generoi raportin siten, että _Main_ jätetään huomioimatta.

### Tehtävien palautusrepositoriot

Tehtävät 14-16 kannattaa tehdä *eri repositorioon* kuin mihin teit tehtävät 2-13. Voit käyttää tehtävien 14-16 repositoriota myös seuraavien viikkojen tehtävien palauttamiseen. Nyt luotavan repositorion rakenne voi tällöin olla esim. seuraava:

```
viikko1
  tehtavat14-16
viikko2
  tehtavat1-4
  tehtavat5-7
viikko3
   tehtavat1-2
   tehtava3
   tehtavat7-11
...
```

Lisää tehtäviin 2-13 käyttämäsi repositorion README.md-tiedostoon linkki tehtävien 14-16 palautusrepositorioosi.

Tehtävien 2-13 repositorion README.md-tiedoston tulisi siis näyttää suunnilleen tältä

![]({{ "/images/lh1-32.png" | absolute_url }})

### 14. riippuvuuksien injektointi osa 1

Tutustumme kurssin aikana muutamiin _suunnittelumalleihin_ (engl. design pattern), eli hyviksi tunnettuihin useisiin erilaisiin tilanteisiin sopiviin ratkaisutapoihin, joiden soveltaminen usein parantaa koodin laatua.

Kurssin ensimmäinen suunnittelumalli _riippuvuuksien injektointi_ (engl. dependency injection), on yksinkertainen periaate, jota noudattamalla koodin automatisoitua testaamista on monissa tilanteissa mahdollista helpottaa ratkaisevalla tavalla. 

* Tutustu riippuvuuksien injektointiin lukemalla [tämä dokumentti](/riippuvuuksien_injektointi/)
* hae esimerkkiprojekti kurssin [tehtävärepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistosta [koodi/viikko1/RiippuvuuksienInjektointi1](https://github.com/ohjelmistotuotanto-hy/syksy2020/tree/main/koodi/viikko1/RiippuvuuksienInjektointi1) ja kokeile että se toimii
  * järkevintä lienee että kloonaat repositorion paikalliselle koneellesi
  * **tämän jälkeen kannattaa kopioida projekti tehtävien 14-16 palautukseen käyttämäsi repositorion sisälle**

Tutustu riippuvuuksien injektointiin esimerkin avulla. Saat suoritettua koodin komennolla _gradle run_. Jos haluat suorittaa koodin ilman gradlen välitulostuksia, anna komento muodossa _gradle -q --console plain run_

### 15. riippuvuuksien injektointi osa 2: NHL-tilastot

* Kurssin [tehtävärepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistossa [koodi/viikko1/NHLStatistics1](https://github.com/ohjelmistotuotanto-hy/syksy2020/tree/main/koodi/viikko1/NhlStatistics1) on ohjelma, jonka avulla on mahdollista tutkia <https://nhl.com>-sivulla olevia tilastotietoja (koronan takia NHL:ää ei juuri tällä hetkellä pelata, ja tilastot ovat viine vuodelta)
  * Kopioi projekti edellisen tehtävän repositorion alle omaksi hakemistoksi
* Ohjelma koostuu kolmesta luokasta.
  * <code>Statistics</code> on palvelun tarjoava luokka, se tarjoaa metodit yhden pelaajan tietojen näyttämiseen, pistepörssin näyttämiseen ja yhden joukkueen pelaajien tietojen näyttämiseen
  * <code>Player</code>  on luokka, jonka olioina Statistics käsittelee yksittäisen pelaajan tietoja
  * <code>PlayerReader</code>  on luokka, jonka avulla ohjelma käy hakemassa pelaajien tiedot internetistä
* Ohjelma on nyt ikävästi struktoroitu ja esim. yksikkötestaus on kovin hankalaa
 * **HUOM:** kun suoritat koodin ensimmäisen kerran (komennolla _gradle run_), saattaa kestää hetken ennen kuin ohjelman käyttämä palvelin herää. Seuraavat suorituskerrat ovat nopeampia.

**Itse tehtävä:**

* Määrittele rajapinta <code>Reader</code>, jolla on samat julkiset metodit kuin PlayerReaderilla, eli ainoastaan metodi <code>getPlayers()</code>. Laita PlayerReader toteuttamaan rajapinta.
  * HUOM: NetBeansissa on automaattinen refaktorointiominaisuus, jonka avulla luokasta saa helposti generoitua rajapinnan, jolla on samat metodit kuin luokalla. Klikkaa luokan kohdalla hiiren oikeaa nappia, valitse refactor ja "extract interface"
* Muokkaa ohjelman rakennetta siten, että Statictics saa konstruktoriparametrina <code>Reader</code>-tyyppisen olion.
* Muokkaa pääohjelma siten, että se injektoi Statistics-oliolle PlayerReaderin ja kokeile että ohjelma toimii edelleen:

``` java
Statistics stats = new Statistics( new PlayerReader("https://nhlstatisticsforohtu.herokuapp.com/players.txt") );
```

### 16. NHLStatistics-ohjelman yksikkötestaus

* tee yksikkötestit luokalle Statistics
  * testien kattavuuden (sekä instructions että branches) tulee Statistics-luokan osalta olla 100% (mittaa kattavuus JaCoCo:lla, ks. [tehtävä 8](/tehtavat1#8-junit))
  * testit eivät saa käyttää verkkoyhteyttä
  * verkkoyhteyden tarpeen saat eliminoitua luomalla testiä varten rajapinnan Reader-toteuttavan "stubin", jonka sisälle kovakoodaat palautettavan pelaajalistan
  * voit luoda stubin testin sisälle anonyyminä sisäluokkana seuraavasti:

``` java
public class StatisticsTest {
 
    Reader readerStub = new Reader() {
 
        public List<Player> getPlayers() {
            ArrayList<Player> players = new ArrayList<>();
 
            players.add(new Player("Semenko", "EDM", 4, 12));
            players.add(new Player("Lemieux", "PIT", 45, 54));
            players.add(new Player("Kurri",   "EDM", 37, 53));
            players.add(new Player("Yzerman", "DET", 42, 56));
            players.add(new Player("Gretzky", "EDM", 35, 89));
 
            return players;
        }
    };
 
    Statistics stats;

    @Before
    public void setUp(){
        // luodaan Statistics-olio joka käyttää "stubia"
        stats = new Statistics(readerStub);
    }  
}
```

Kun injektoit readerStub-olion testissä Statistics-oliolle, palauttaa se aina saman pelaajalistan.

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät (paitsi ne joissa mainitaan, että tehtävää ei palauteta mihinkään) GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>
