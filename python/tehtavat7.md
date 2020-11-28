---
layout: page
title: Viikko 7
inheader: no
permalink: /python/tehtavat7/
---

## Viikko 7

_Alla olevien tehtävien deadline on maanantaina 16.12. klo 23:59_

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa

- ke 14-16 B221

Maanantain pajaa ei tällä viikolla pidetä.

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2020/quiz/7), joiden deadline on poikkeuksellisesti perjantaina 20.12 klo 23:59:00. Tehtävät ilmestyvät ke 12.12. klo 23 mennessä.

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/main/tehtavat7.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: stash [versionhallinta]

_Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

Lue <https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning> kohtaan _Creative stashing_ asti.

Oletetaan että olet repositoriossa, jossa on ainakin kaksi branchia: master ja joku toinen (kutsutaan sitä tässä nimellä **toinen**).

- Ollessasi master-branchissa tee branchissa oleviin tiedostoihin muutoksia, joita lisäät staging-alueelle ja joitain muutoksia joita et vielä "äddää", komennon _git status_ tuloksen tulee näyttää siis suunilleen seuraavalta

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   README.md
    modified:   src/main/java/Main.java

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   src/main/java/Olutvarasto.java
```

- Pomosi käskee sinua välittömästi tekemään pari muutosta branchiin **toinen**. Et kuitenkaan halua vielä comittoida masterissa olevia muutoksia
- Jos siirryt branchiin **toinen** tekemättä comittia, tulee hirveä sotku, sillä muutokset pysyvät muutoksina toisessakin branchissa
- **git stash** pelastaa tästä tilanteesta, eli stashaa masterissa olevat muutoset
  - Kokeile ennen ja jälkeen stash-komennon komentoa <code>git status</code>
- Siirry branchiin toinen, tee sinne joku muutos jonka committaat
- Palaa jälleen masteriin
- Palauta stashatyt muutokset komennolla <code>git stash apply</code>
  - Varmista että muutokset palasivat
  - Kuten huomaat, staging-alueelle jo lisätty muutos ei palaa staging-alueelle, vaan joudut lisäämään sen uudelleen
  - Jos edellisessä komento olisi annettu muodossa <code>git stash apply --index</code>, olisi tilanne palautunut täysin ennalleen

### 2. Git: branchin "siirtäminen" [versionhallinta]

_Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

- Tee repoosi branchi nimeltä haara ja tee masteriin ja haaraan committeja siten että saat aikaan seuraavankaltaisen tilanteen:

```
    ____master
__/
  \_____haara
```

- Eli sekä master että haara ovat edenneet muutamien commitien verran haarautumisen tapahduttua
  - Huom: komennolla <code>gitk --all</code> näet kaikki haarat, kokeile!
- Yhtäkkiä huomaat, että master:iin tekemäsi asiat eivät olekaan kovin hyviä ja haara:ssa on paljon parempaa tavaraa, haluaisitkin että haara:sta tulisi uusi master
- Tämä onnistuu kun menet masteriin ja annat komennon <code>git reset --hard haara</code>
  - Varmista että komento toimii oikein
  - Vanhan master-haarankaan tavarat eivät katoa mihinkään, jos niihin jostain syystä vielä halutaan palata
  - Vanhaan committiin palaaminen onnistuu, jos commitin id on tiedossa -- jos ei, on olemassa [muutamia keinoja](http://stackoverflow.com/questions/4786972/list-of-all-git-commits) sen selvittämiseksi

<!-- TODO -->
### 3. ja 4. (kahden rastin tehtävä) KPS yksin- ja kaksinpeli

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2020) hakemistosta _koodi/viikko7/KiviPaperiSakset_ löytyy tutun pelin tietokoneversio.

- Ohjelmassa on kolme pelimoodia: ihminen vs. ihminen, ihminen vs. yksinkertainen tekoäly ja ihminen vs. monimutkainen tekoäly
- Koodi sisältää runsaat määrät copy pastea, muutenkaan oliosuunnittelun periaatteet eivät ole vielä alkuperäisellä ohjelmoijalla olleet hallussa
- Poista koodista kaikki toisteisuus ja tee siitä rakenteellisesti materiaalin [osan 4](/osa4) hengessä oikeaoppinen
  - `pelaa`-metodi tulee toteuttaa [template-metodina](/osa4#suunnittelumalli-template-method-viikko-5)
  - Sopivan peliolion (kaksinpeli, helppo yksinpeli, vaikea yksinpeli) luominen tulee toteuttaa staattisen tehdasmetodin, tai funktion avulla
  - Pääohjelmalla ei saa olla riippuvuuksia konkreettisiin pelin toteuttaviin luokkiin

Jos teet tehtävän mielestäsi kaikkien tyylisääntöjen mukaan, merkkaa 2 rastia, jos ratkaisu ei ole kaikin osin tyylikäs, merkkaa yksi rasti.

### 5. Lunttilappu

_Tehtävän ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

Kertaa koealue ja tee koetta varten käsinkirjoitettu, A4:n kokoinen lunttilappu (molempien puolien käyttö sallittu) ks. [ohje kokeeseen](/ohje_kokeeseen)

### 6. Pull requestin mergeäminen (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Mergeä jokin miniprojektillesi tehty pull request (myös toisen miniprojektisi jäsenen tekemän pull requestin mergeäminen käy). Voit tehdä tehtävän yhdessä muiden miniprojektisi ryhmäläisten kanssa. Jos olet jo mergennyt pull requestin miniprojektiisi kurssin aikana, se riittää tämän tehtävä merkkaamiseksi.

Laita palautusrepositorioosi tiedosto _MERGE.md_ ja sen sisällöksi linkki mergettyyn pullrequestiin.

**Vaihtoehtoinen tehtävä**

Jos et ollut miniprojektissa tai et halua tehdä mergeämistä, voit merkata tehtävän tehdyksi listaamalla kurssin monivalintatehtävistä ne, jotka on ilmaistu mielestäsi epäselvästi tai moniselitteisesti.

Laita palautusrepositorioosi tiedosto _QUIZZ.md_, ja listaa epäselvät kohdat sinne.

**Toinen vaihtoehtoinen tehtävä**

Toinen korvaava vaihtoehto on kirjoittaa referaatti, viime vuoden [laskareiden speksin](https://github.com/mluukkai/Ohjelmistotuotanto2018/blob/main/laskarit/7.md#4-referaatti) mukaan.

### 7. Kurssipalaute

Anna kurssipalautetta WebOodissa. Voit antaa palautteen myös kokeen jälkeen. Rasti tähän tehtävään on lupaus että annat palautteen jossain vaiheessa.

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2020>
