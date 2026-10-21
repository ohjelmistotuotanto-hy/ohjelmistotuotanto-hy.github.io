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
    <li>Miniprojektin <a href='/miniprojektin_arvosteluperusteet/#lopputoimenpiteet'>lopputoimenpiteet</a></li>
  </ul>
</div>

### Tärkeät linkit

- Toteutettavan ohjelman [kuvaus](/speksi)
- [Arvosteluperusteet](/miniprojektin_arvosteluperusteet)
- Alun [checklist](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/misc/ohjeita.md)
- Ohje Flaskin käyttöön [täällä](/flask)
- [Boilerplate](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate) 

### Johdanto

- Kurssin viikoilla 3-7 tehdään miniprojekti
- **Kurssin läpipääsy edellyttää hyväksyttyä osallistumista miniprojektiin** tai sen [hyväksilukemista](/osa0#miniprojektin-hyv%C3%A4ksilukeminen)

- Projekti tehdään noin 4-6 hengen ryhmissä
- Projektissa ohjelmoidaan jonkin verran, **pääpaino ei ole ohjelmoinnissa** vaan systemaattisen prosessin (tästä lisää myöhemmin) noudattamisessa.
- **Jokaisen ryhmän jäsenen on tarkoitus tehdä kunkin sprintin aikana töitä noin 6 tuntia projektin eteen**
  - Asiakastapaamisiin menevää aikaa ei lasketa viikoittaiseen työaikaan!
- Ryhmä tekee kussakin sprintissä sen minkä se sprinttiin varatussa ajassa pystyy tekemään, ei enempää eikä vähempää
  - Kuuden tunnin työajan reilu ylittäminen siis **ei ole** järkevää, se on suorastaan kiellettyä
- Sovellus tulee toteuttaa kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) tutulla Flask-sovelluskehyksellä, ja sen tulee tallentaa tietonsa SQLite-tietokantaan
  - SQLite ei vaadi erillistä tietokantapalvelinta, katso [ohje](/flask/#tietokanta)
- ohje Flaskin käyttöön [täällä](/flask), **on erittäin tärkeää että luet tämän ohjeen**

### Ryhmän muodostaminen

- Ryhmät muodostetaan 9.11. alkavalla viikolla pidettävissä aloitustilaisuuksissa
  - aloitustilaisuuden kesto on noin 2 tuntia
- Aloitustilaisuudet (jokainen osallistuu yhteen)
  - ma 9.11. klo 14–16 C220
  - ti 10.11. klo 14–16 D122
  - ke 11.11. klo 16–18 C220
  - to 12.11. klo 10–12 BK114
  - to 12.11. klo 14–16 B222
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

#### viikko 3 (9.–13.11.)

- Ryhmä muodostetaan
- Ryhmät tapaavat asiakkaan aloitustilaisuuksissa
- Projekti tulee rekisteröidä palautussovellukseen <{{site.stats_url}}>.
  - **Yksi ryhmäläinen** kirjautuu järjestelmään, menee välilehdelle _miniprojects_
    - Luo projektin _create project_ -napista avautuvasta lomakkeesta
    - Ja jakaa muille ryhmäläisille luodun projektin id:n
  - **Muut ryhmäläiset** kirjautuvat järjestelmään ja liittyvät id:n avulla ryhmään _join project_ -napista avautuvasta lomakkeesta
  - **Jokaisen ryhmäläisen on oltava rekisteröitynyt projektiin viimeistään ensimmäisen sprintin lopuksi pidettävässä asiakastapaamisessa.**
    - Ne ryhmäläiset joita ei ole rekisteröity ensimmäisen sprintin asiakastapaamiseen mennessä, eivät saa ryhmälle sprintistä tulevia pisteitä

#### viikko 4 (16.–20.11.)

- Sprintin 1 katselmointi ja sprintin 2 suunnittelu

#### viikko 5 (23.–27.11.)

- Sprintin 2 katselmointi ja sprintin 3 suunnittelu

#### viikko 6 (30.11.–4.12.)

- Sprintin 3 katselmointi ja sprintin 4 suunnittelu

#### viikko 7 (7.–11.12.)

- Loppudemot (jokainen ryhmä osallistuu yhteen tilaisuuteen)
  - ti 8.12. klo 14–16 B123
  - ke 9.12. klo 10–12 B123
- Jokainen ryhmä osallistuu yhteen loppudemoon
- Ei erillistä asiakaspalaveria

### Toteutettava ohjelmisto

Alustava kuvaus [täällä](/speksi). Kuulet asiakkaalta lisää.

### Toteutusteknologia

Sovellus tulee toteuttaa kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) tutulla Flask-sovelluskehyksellä, ja sen tulee tallentaa tietonsa SQLite-tietokantaan
- Riittää että sovellus toimii kehitysvaiheessa sovelluskehittäjien koneella

Flaskia ei kannata missään tapauksessa käyttää miten sattuu, muuten sovelluksen konfiguroinnissa saattaa ajautua pahoihin vaikeuksiin. Lue ohje Flaskin käytöstä [täältä](/flask)

### Tekniset ja prosessiin liittyvät vaatimukset

- Ryhmä laatii yhdessä asiakkaan kanssa _product backlogin_
  - Vaatimukset kirjataan backlogiin user storyina
- Sprintin suunnittelun yhteydessä ryhmä valitsee toteutettavaksi sopivan määrän backlogin kärjessä olevista user storyistä
  - Jokaisen ryhmäläisen "työaika" on 6 tuntia viikossa
    - Työajan ylittävä sankarikoodaus ei ole suositeltavaa, se on jopa kiellettyä
  - Ryhmä valitsee ainoastaan ne storyt, jotka se arvioi ehtivänsä toteuttamaan sprintissä **definition of donen** määrittelemällä laatutasolla. Definition of done on määritelty alla
  - Kannattaa huomata, että valinta on ennuste eikä lupaus: storyja ei ole pakko saada valmiiksi. Ohjelmistoja tehdessä sattuu ja tapahtuu ennakoimattomia asioita, ja aina suunnitelmat eivät toteudu.
  - Asiakkaalle ei kannata luvata liikaa, ja varsinkin ensimmäisten sprinttien aikana arvioissa on oltava varovainen, konfiguroimiseen, testaamiseen ja ryhmän järjestäytymiseen tulee kulumaan paljon aikaa
- Ryhmä ylläpitää _sprint backlogia_
  - User storyt jaetaan sprintin suunnittelussa teknisen tason tehtäviksi eli _taskeiksi_ jotka sijoitetaan sprint backlogiin
  - Ryhmä seuraa sprintin etenemistä valmistuneiden taskien perusteella burndown- tai burnup-kaaviona
    - kaavio voi olla esim. GitHub Projectsin automaattisesti piirtämä
  - Sprint backlogista tulee ilmetä kunkin taskin osalta
    - taskin tila (esim. aloitettu, ohjelmoitu, testauksessa, valmis)
    - taskin tekijä(t)
- Ryhmä toteuttaa jatkuvaa integraatiota (continuous integration) GitHub Actionsin avulla
- Koodi on talletettu GitHubiin
- Projektin GitHub-repositoriolla on järkevä README.md

#### Product ja sprint backlog

- Backlogissa vaatimukset ilmaistaan järkevästi muotoiltuna user storyinä
  - **miniprojektissa user storyja tai taskeja ei tarvitse estimoida**, sprintin etenemistä seurataan valmistuneiden taskien perusteella
- Kuten edellä todettiin sprint backlogista tulee ilmetä kunkin taskin osalta
  - taskin tila (esim. aloitettu, ohjelmoitu, testauksessa, valmis)
  - taskin tekijä(t)
- Backlogit kannattaa toteuttaa jollain backlogien ylläpitämiseen tarkoitetulla työkalulla, yksi hyvä vaihtoehto on [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects), jonka Insights-näkymä piirtää myös burnup-kaavion
  - kannattaa varmistaa, että työkalu tukee edellä lueteltuja vaatimuksia
  - myös taulukkolaskentaohjelma, esim. Google Sheets, kelpaa


#### Definition of done

Seuraavassa lähtökohta definition donelle. Ryhmän tulee määritellä GitHub-repositorioon oma, omiin lähtökohtiin sopiva DoD

- User storyille tulee määritellä hyväksymiskriteerit, jotka dokumentoidaan sprintistä 2 alkaen [Robot Frameworkin](/robot_framework/) syntaksilla
  - hyvänä käytäntönä on laittaa README:stä linkki hyväksymiskriteerit määritteleviin tiedostoihin
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