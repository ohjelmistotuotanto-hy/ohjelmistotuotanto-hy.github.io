---
layout: page
title: Viikko 7
inheader: no
permalink: /tehtavat7/
---

## Viikko 7

<div class="important">
  DRAFT: Pahasti kesken...
</div>

**HUOM**: [Kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. 

*Alla olevien tehtävien deadline on maanantaina 16.12. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ke 14-16 B221

Maanantain pajaa ei tällä viikolla pidetä.

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/7), joiden deadline on sunnuntaina 15.12. klo 23:59:00.  

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat4.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: branchin "siirtäminen" [versionhallinta]

_tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

* tee repoosi branchi nimeltä haara ja tee masteriin ja haaraan committeja siten että saat aikaan seuraavankaltaisen tilanteen:

<pre>
/------master
--
   \---haara
</pre>

* eli sekä master että haara ovat edenneet muutamien commitien verran haarautumisen tapahduttua
  * huom: komennolla <code>gitk --all</code> näet kaikki haarat, kokeile!
* yhtäkkiä huomaat, että master:iin tekemäsi asiat eivät olekaan kovin hyviä ja haara:ssa on paljon parempaa tavaraa, haluaisitkin että haara:sta tulisi uusi master
* tämä onnistuu kun menet masteriin ja annat komennon <code>git reset --hard haara</code>
  * varmista että komento toimii oikein
  * vanhan master-haarankaan tavarat eivät katoa mihinkään, jos niihin jostain syystä vielä halutaan palata
  * vanhaan committiin palaaminen onnistuu, jos commitin id on tiedossa -- jos ei, on olemassa [muutamia keinoja](http://stackoverflow.com/questions/4786972/list-of-all-git-commits) sen selvittämiseksi

### 2. git: rebase [versionhallinta]

Lue <http://git-scm.com/book/en/Git-Branching-Rebasing> ja <https://www.atlassian.com/git/tutorials/rewriting-history#git-rebase>

Aikaansaa seuraavankaltainen tilanne

<pre>
------- master
\
 \--- haara
</pre>

"rebeissaa" haara masteriin, eli aikaansaa seuraava tilanne:

<pre>
------- master
       \
        \--- haara
</pre>

Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

"mergeä" master vielä haaraan:

<pre>
-------
       \     master
        \--- haara
</pre>

Lopputuloksena pitäisi siis olla lineaarinen historia ja master sekä haara samassa. Varmista jälleen komennolla <code>gitk --all</code> että kaikki on kunnossa.

Poista branch haara. Etsi googlaamalla komento jolla saat tuhottua branchin.

### 3. ja 4. (kahden rastin tehtävä) KPS yksin- ja kaksinpeli

[Kurssirepositorion](https://github.com/mluukkai/ohjelmistotuotanto2018) hakemistosta 
[koodi/viikko7/KiviPaperiSakset](https://github.com/mluukkai/ohjelmistotuotanto2018/tree/master/koodi/viikko7/KiviPaperiSakset) löytyy tutun pelin tietokoneversio 

* ohjelmassa on kolme pelimoodia: ihminen vs. ihminen, ihminen vs. yksinkertainen tekoäly ja ihminen vs. monimutkainen tekoäly
* koodi sisältää runsaat määrät copy pastea, muutenkaan oliosuunnittelun periaatteet eivät ole vielä alkuperäisellä ohjelmoijalla olleet hallussa
* poista koodista kaikki toisteisuus ja tee siitä rakenteellisesti luennon 8 hengessä oikeaoppinen
  * pelaa-metodi tulee toteuttaa [template-metodina](https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/web/oliosuunnittelu.md#template-method)
  * sopivan peliolion (kaksinpeli, helppo yksinpeli, vaikea yksinpeli) luominen tulee toteuttaa staattisen tehdasmetodin avulla
  * pääohjelmalla ei saa olla riippuvuuksia konkreettisiin pelin toteuttaviin luokkiin

* jos teet tehtävän mielestäsi kaikkien tyylisääntöjen mukaan, merkkaa 2 rastia, jos ratkaisu ei ole kaikin osin tyylikäs, merkkaa yksi rasti

## #5. lunttilappu

kertaa koealue ja tee koetta varten käsinkirjoitettu, A4:n kokoinen lunttilappu (molempien puolien käyttö sallittu) ks. [luennon 10 kalvot](https://github.com/mluukkai/ohjelmistotuotanto2018/tree/master/kalvot/luento10.pdf)

**HUOM:** lue kaikki kokeeseen liittyvät vihjeet luennon 10 kalvoilta!

### 6. pullrequestin mergeäminen (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Mergeä jokin miniprojektillesi tehty pull request (myös toisen miniprojektisi jäsenen tekemän pull requestin mergeäminen käy). Voit tehdä tehtävän yhdessä muiden miniprojektisi ryhmäläisten kanssa. Laita palautusrepositorioosi tiedosto MERGE.md ja sen sisällöksi linkki mergettyyn pullrequestiin.

Jos miniprojektillesi ei ole tehty pullrequestia, voit korvata tehtävän artikkelireferaatilla. 

### 7. kurssipalaute

Anna kurssipalautetta WebOodissa. En ole varma voiko palautteen antaa jo nyt ja vaikka voisi voit antaa palautteen esim. kokeen jälkeen. Rasti tähän tehtävään on lupaus että annat palautteen jossain vaiheessa.

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
