---
layout: page
title: Miniprojekti
title_long: 'Miniprojekti'
permalink: /miniprojekti/
inheader: yes
---

### Ajankohtaista

<div style="color:black; border-style: solid; border-width: thick; border-color: green; padding: 10px; margin-bottom: 15px; padding: 10px; background-color: #F1EFEF;">
  <ul style="margin-bottom: -2px">
    <li>Projektit käynnissä!</li>
  </ul>
</div>

### Tärkeät linkit

- Toteutettavan ohjelman [kuvaus](/speksi)
- [Arvosteluperusteet](/miniprojektin_arvosteluperusteet)
- Alun [checklist](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/misc/ohjeita.md)
- Eräs [esimerkkibacklog](https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit#gid=1)
- Ohje Flaskin käyttöön [täällä](/flask)
- [Boilerplate](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate) 

### Johdanto

- Kurssin viikoilla 4-7 tehdään miniprojekti
- **Kurssin läpipääsy edellyttää hyväksyttyä osallistumista miniprojektiin** tai sen [hyväksilukemista](/osa0#miniprojektin-hyv%C3%A4ksilukeminen)

- Projekti tehdään noin 4-6 hengen ryhmissä
- Projektissa ohjelmoidaan jonkin verran, **pääpaino ei ole ohjelmoinnissa** vaan systemaattisen prosessin (tästä lisää myöhemmin) noudattamisessa.
- **Jokaisen ryhmän jäsenen on tarkoitus tehdä kunkin sprintin aikana töitä noin 6 tuntia projektin eteen**
  - Asiakastapaamisiin menevää aikaa ei lasketa viikoittaiseen työaikaan!
- Ryhmä tekee kussakin sprintissä sen minkä se sprinttiin varatussa ajassa pystyy tekemään, ei enempää eikä vähempää
  - Kuuden tunnin työajan reilu ylittäminen siis **ei ole** järkevää, se on suorastaan kiellettyä
- Sovellus tulee toteuttaa kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) tutulla Flask-sovelluskehyksellä, ja sen tulee tallentaa tietonsa PostgreSQL-tietokantaan
  - PostgreSQL:ta ei tarvitse välttämättä asentaa omalle kone, voit käyttää pilvipalveluna tarjottavaa tietokantaa, katso [täältä](https://ohjelmistotuotanto-hy.github.io/flask/#tietokanta) ohje
- ohje Flaskin käyttöön [täällä](/flask), **on erittäin tärkeää että luet tämän ohjeen**

### Ryhmän muodostaminen

- Ryhmät muodostetaan 10.11. alkavalla viikolla pidettävissä aloitustilaisuuksissa
  - aloitustilaisuuden kesto on noin 2 tuntia
- Aloitustilaisuudet (jokainen osallistuu yhteen)
  - ma 10.11. 14-16 C222
  - ti 11.11. 14-16 C321
  - ke 12.11. 10-12 C222
  - ke 12.11. 12-14 C222
  - to 13.11. 14-16 B222
  - to 13.11. 16-18 B222
- Aloitustilaisuuksien [ryhmajako](/ryhmajako)
- Aloitustilaisuuteen tullessa on syytä tuntea materiaalin osien 1 ja 2 asioista ainakin seuraavat:
  - Scrum
  - sprintti
  - user story
  - product backlog
  - sprint backlog
  - hyväksymäkriteeri
  - definition of done
- Tämä dokumentti ja miniprojektin [arvosteluperusteet](/miniprojektin_arvosteluperusteet) on myös syytä lukea huolellisesti ennen aloitustilaisuutta

### Työn eteneminen

Seuraavien viikkojen asiakastapaaminen (sprintin katselmointi ja uuden sprintin suunnittelu) tapahtuu saman 2h sisällä missä aloitustilaisuus pidetään. Tilaisuuden kesto on 30 minuuttia. Aika kerrotaan palautussovelluksen välilehdeltä [miniproject]({{site.stats_url}}/miniproject)

#### viikko 3 (11-15.11.)

- Ryhmä muodostetaan
- Ryhmät tapaavat asiakkaan aloitustilaisuuksissa
- Projekti tulee rekisteröidä palautussovellukseen <{{site.stats_url}}>.
  - **Yksi ryhmäläinen** kirjautuu järjestelmään, menee välilehdelle _miniprojects_
    - Luo projektin _create project_ -napista avautuvasta lomakkeesta
    - Ja jakaa muille ryhmäläisille luodun projektin id:n
  - **Muut ryhmäläiset** kirjautuvat järjestelmään ja liittyvät id:n avulla ryhmään _join project_ -napista avautuvasta lomakkeesta
  - **Jokaisen ryhmäläisen on oltava rekisteröitynyt projektiin viimeistään ensimmäisen sprintin lopuksi pidettävässä asiakastapaamisessa.**
    - Ne ryhmäläiset joita ei ole rekisteröity ensimmäisen sprintin asiakastapaamiseen mennessä, eivät saa ryhmälle sprintistä tulevia pisteitä

#### viikko 4 (17-21.11.)

- Sprintin 1 katselmointi ja sprintin 2 suunnittelu

#### viikko 5 (24-28.11.)

- Sprintin 2 katselmointi ja sprintin 3 suunnittelu

#### viikko 6 (1-5.12.)

- Sprintin 3 katselmointi ja sprintin 4 suunnittelu

#### viikko 7 (9-13.12.)

- Loppudemot (jokainen ryhmä osallistuu yhteen tilaisuuteen)
  - ke 10.12. klo 10-12 B123
  - to 11.12. klo 10-12 A111
- Jokainen ryhmä osallistuu yhteen loppudemoon
- Ei erillistä asiakaspalaveria

### Toteutettava ohjelmisto

Alustava kuvaus [täällä](/speksi). Kuulet asiakkaalta lisää.

### Toteutusteknologia

Sovellus tulee toteuttaa kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) tutulla Flask-sovelluskehyksellä, ja sen tulee tallentaa tietonsa PostgreSQL-tietokantaan
- Riittää että sovellus toimii kehitysvaiheessa sovelluskehittäjien koneella

Flaskia ei kannata missään tapauksessa käyttää miten sattuu, muuten sovelluksen konfiguroinnissa saattaa ajautua pahoihin vaikeuksiin. Lue ohje Flaskin käytöstä [täältä](/flask)

### Tekniset ja prosessiin liittyvät vaatimukset

- Ryhmä laatii yhdessä asiakkaan kanssa _product backlogin_
  - Vaatimukset kirjataan backlogiin user storyina
- Sprintin suunnittelun yhteydessä ryhmä sitoutuu toteuttamaan sopivan määrän backlogin kärjessä olevista user storyistä
  - Jokaisen ryhmäläisen "työaika" on 6 tuntia viikossa
    - Työajan ylittävä sankarikoodaus ei ole suositeltavaa, se on jopa kiellettyä
  - Ryhmä sitoutuu ainoastaan niihin storyihin, jotka se kuvittelee kykenevänsä toteuttamaan sprintissä **definition of donen** määrittelemällä laatutasolla. Definition of done on määritelty alla
  - Kannattaa huomata, että storyihin sitoutuminen ei tarkoita sitä, että ne on pakko tehdä valmiiksi. Ohjelmistoja tehdessä sattuu ja tapahtuu ennakoimattomia asioita, ja aina suunnitelmat eivät toteudu.
  - Asiakkaalle ei kannata luvata liikaa, ja varsinkin ensimmäisten sprinttien aikana arvioissa on oltava varovainen, konfiguroimiseen, testaamiseen ja ryhmän järjestäytymiseen tulee kulumaan paljon aikaa
- Ryhmä ylläpitää _sprint backlogia_
  - User storyt jaetaan sprintin suunnittelussa teknisen tason tehtäviksi eli _taskeiksi_ jotka sijoitetaan sprint backlogiin
  - Ryhmä tekee päivittäin jäljellä olevan työajan arvioinnin ja dokumentoi tämän sprintin burndown-käyränä
    - burndownin sijaan on myös mahdollista tehdä sprintille ylöspäin kasvava burnup-kaavio, ks lisää [täältä](https://ohjelmistotuotanto-hy.github.io/osa2/#burndown--ja-burnup-kaaviot)
  - Sprint backlogista tulee ilmetä kunkin taskin osalta
    - jäljellä olevan työajan estimaatti
    - taskin tila (esim. aloitettu, ohjelmoitu, testauksessa, valmis)
    - taskin tekijä(t)
- Ryhmä toteuttaa jatkuvaa integraatiota (continuous integration) GitHub Actionsin avulla
- Koodi on talletettu GitHubiin
- Projektin GitHub-repositoriolla on järkevä README.md

#### Product ja sprint backlog

- Backlogissa vaatimukset ilmaistaan järkevästi muotoiltuna user storyinä
  - **miniprojektissa ei ole tarvetta estimoida user storya**, ainoastaan sprintissä olevien taskien työmäärä estimoidaan
- Kuten edellä todettiin sprint backlogista tulee ilmetä kunkin taskin osalta
  - jäljellä olevan työajan estimaatti
  - taskin tila (esim. aloitettu, ohjelmoitu, testauksessa, valmis)
  - taskin tekijä(t)
- Backlogit voi toteuttaa esim. Google Docs -spreadsheetinä, mallia voi ottaa seuraavista:
  - erään ohtuprojektin [backlogit](https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit#gid=1)
  - <http://www.mountaingoatsoftware.com/scrum/sprint-backlog> (tämä on sikäli huono, että siitä eivät ilmene taskin tekijät)
- Backlogit voi tehdä Google Docsin sijaan myös johonkin backlogien ylläpitämiseen tarkoitettuun työkaluun, yksi aika hyvä vaihtoehto on [GitHub projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
  - kannattaa varmistaa, että työkalu kuitenkin tukee edellä lueteltuja vaatimuksia


#### Definition of done

Seuraavassa lähtökohta definition donelle. Ryhmän tulee määritellä GitHub-repositorioon oma, omiin lähtökohtiin sopiva DoD

- User storyille tulee määritellä hyväksymiskriteerit, jotka dokumentoidaan sprintistä 2 alkaen [Robot Frameworkin](/robot_framework/) syntaksilla
  - hyvänä käytäntönä on laittaa README:stä linkki hyväksymäkriteerit määritteleviin tiedostoihin
- Toteutetun koodin testikattavuuden tulee olla kohtuullinen
- Asiakas pääsee näkemään koko ajan koodin ja testien tilanteen CI-palvelusta
- Koodin ylläpidettävyyden tulee olla mahdollisimman hyvä
  - järkevä nimeäminen
  - järkevä/selkeä ja perusteltu arkkitehtuuri
  - yhtenäinen koodityyli (valvotaan Pylintin avulla)

#### Repositorio ja README

README:ssa tulee löytyä ainakin seuraavat asiat:

- Linkit backlogeihin (backlogeista tulee olla luettavissa olevat versiot julkisessa internetissä)
- Linkki CI-palveluun
- Linkki sovelluksen toimivaan versioon (jos sovellus on verkossa)
- Työlle tulee määritellä lisenssi <https://help.github.com/articles/licensing-a-repository/>

### Vihjeitä ryhmätyöskentelyyn

Melko varma resepti epäonnistumiseen on huono kommunikaatio. Tehkää siis asioita mahdollisimman paljon yhdessä, mieluiten paikan päällä kampuksella tai jos se ei onnistu niin esim. Discordin voice chatissa. Ylipäänsä on hyvä kommunikoida ryhmälle mitä lähtee tekemään ja milloin on saanut sen valmiiksi, tällöin vältytään päällekkäisyyksiltä. Erityisesti projektin alkuvaiheessa esim. GitHub-actionsia konfiguroitaessa yhdessä tapahtuvaan työskentelyyn kannattaa panostaa. Projektin kuluessa omatoiminenkin työskentely muuttuu jo helpommaksi jos ja kun ryhmä on sopinut työskentelyn periaatteista ja pelisäännöistä.

Pariohjelmointi/konfigurointi on havaittu erittäin hyödylliseksi. Voikin olla hyvä idea, että jokaista user storya työstää aina kaksi henkilöä.

Jokaiselle asialle, kuten vaikkapa README.md-tiedostolle, project backlogille ja sprint backlogille kannattanee nimetä vastuuhenkilö joka varmistaa, että ryhmä hoitaa asian. Asian X vastuuhenkilö ei välttämättä siis tee asiaa itse, vaan varmistaa että se tulee tehdyksi.

Pitäkää ohjelma koko ajan toimintakykyisenä. On erittäin huono idea koittaa saada viikon aikana eri ihmisten koodaamat tuotokset integroitua tunti ennen asiakaspalaveria...

Katso myös [checklist](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/misc/ohjeita.md) projektin alkuun.

### Työn arvostelu

Arvosteluperusteet löytyvät [täältä](/miniprojektin_arvosteluperusteet/)