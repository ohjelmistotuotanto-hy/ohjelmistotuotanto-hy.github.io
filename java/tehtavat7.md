---
layout: page
title: Viikko 7
inheader: no
permalink: /java/tehtavat7/
---

{% include java.md %}

{% include laskari_info.md part=7 %}

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md path="/tehtavat7.md" %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: stash [versionhallinta]

_tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

Lue <https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning> kohtaan _Creative stashing_ asti.

Oletetaan että olet repositoriossa, jossa on ainakin kaksi branchia: master ja joku toinen (kutsutaan sitä tässä nimellä __toinen__).

* ollessasi master-branchissa tee branchissa oleviin tiedostoihin muutoksia, joita lisäät staging-alueelle ja joitain muutoksia joita et vielä "äddää", komennon _git status_ tuloksen tulee näyttää siis suunilleen seuraavalta

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
 
* pomosi käskee sinua välittömästi tekemään pari muutosta branchiin __toinen__. Et kuitenkaan halua vielä comittoida masterissa olevia muutoksia
* jos siirryt branchiin __toinen__ tekemättä comittia, tulee hirveä sotku, sillä muutokset pysyvät muutoksina toisessakin branchissa
* **git stash** pelastaa tästä tilanteesta, eli stashaa masterissa olevat muutoset
  * kokeile ennen ja jälkeen stash-komennon komentoa <code>git status</code>
* siirry branchiin toinen, tee sinne joku muutos jonka committaat
* palaa jälleen masteriin
* palauta stashatyt muutokset komennolla <code>git stash apply</code>
  * varmista että muutokset palasivat
  * kuten huomaat, staging-alueelle jo lisätty muutos ei palaa staging-alueelle, vaan joudut lisäämään sen uudelleen
  * jos edellisessä komento olisi annettu muodossa <code>git stash apply --index</code>, olisi tilanne palautunut täysin ennalleen

### 2. git: branchin "siirtäminen" [versionhallinta]

_tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

* tee repoosi branchi nimeltä haara ja tee masteriin ja haaraan committeja siten että saat aikaan seuraavankaltaisen tilanteen:

<pre>
    ____master
__/
  \_____haara
</pre>

* eli sekä master että haara ovat edenneet muutamien commitien verran haarautumisen tapahduttua
  * huom: komennolla <code>gitk --all</code> näet kaikki haarat, kokeile!
* yhtäkkiä huomaat, että master:iin tekemäsi asiat eivät olekaan kovin hyviä ja haara:ssa on paljon parempaa tavaraa, haluaisitkin että haara:sta tulisi uusi master
* tämä onnistuu kun menet masteriin ja annat komennon <code>git reset --hard haara</code>
  * varmista että komento toimii oikein
  * vanhan master-haarankaan tavarat eivät katoa mihinkään, jos niihin jostain syystä vielä halutaan palata
  * vanhaan committiin palaaminen onnistuu, jos commitin id on tiedossa -- jos ei, on olemassa [muutamia keinoja](http://stackoverflow.com/questions/4786972/list-of-all-git-commits) sen selvittämiseksi

### 3. ja 4. (kahden rastin tehtävä) KPS yksin- ja kaksinpeli

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _koodi/viikko7/KiviPaperiSakset_ löytyy tutun pelin tietokoneversio. 

* ohjelmassa on kolme pelimoodia: ihminen vs. ihminen, ihminen vs. yksinkertainen tekoäly ja ihminen vs. monimutkainen tekoäly
* koodi sisältää runsaat määrät copy pastea, muutenkaan oliosuunnittelun periaatteet eivät ole vielä alkuperäisellä ohjelmoijalla olleet hallussa
* poista koodista kaikki toisteisuus ja tee siitä rakenteellisesti materiaalin [osan 4](/java/osa4) hengessä oikeaoppinen
  * pelaa-metodi tulee toteuttaa [template-metodina](/java/osa4#suunnittelumalli-template-method-viikko-5)
  * sopivan peliolion (kaksinpeli, helppo yksinpeli, vaikea yksinpeli) luominen tulee toteuttaa staattisen tehdasmetodin avulla
  * pääohjelmalla ei saa olla riippuvuuksia konkreettisiin pelin toteuttaviin luokkiin

Jos teet tehtävän mielestäsi kaikkien tyylisääntöjen mukaan, merkkaa 2 rastia, jos ratkaisu ei ole kaikin osin tyylikäs, merkkaa yksi rasti.

**Muista** että voit suorittaa ohjelman ilman gradlen ikäviä välitulosteita antamalla komennolle _gradle run_ seuraavat lisäoptiot:

```java
gradle -q --console=plain run
```

**Vihje:** eräs tapa lähteä liikkeelle on muodostaa yliluokka `KiviPaperiSakset`, joka sisältää kaikille kolmelle pelityypille yhteisen koodin:

```java
public abstract class KiviPaperiSakset {
    private static final Scanner scanner = new Scanner(System.in);
    
    // tämä on ns template metodi
    public void pelaa() {
        Tuomari tuomari = new Tuomari();
        // ...
        
        String ekanSiirto = ensimmaisenSiirto();
        System.out.print("Toisen pelaajan siirto: ");
        String tokanSiirto = toisenSiirto();
        
        while (onkoOkSiirto(ekanSiirto) && onkoOkSiirto(tokanSiirto)) {
           // ...
        }

        System.out.println();
        System.out.println("Kiitos!");
        System.out.println(tuomari);
    }
    
    protected String ensimmaisenSiirto() {
        System.out.print("Ensimmäisen pelaajan siirto: ");
        return scanner.nextLine();
    }

    // tämä on abstrakti metodi sillä sen toteutus vaihtelee eri pelityypeissä
    abstract protected String toisenSiirto();
    
    protected static boolean onkoOkSiirto(String siirto) {
        return "k".equals(siirto) || "p".equals(siirto) || "s".equals(siirto);
    }
}
``` 

Erilliset pelit sitten perivät abstraktin luokan ja erikoistavat sitä tarpidensa mukaan:

```java
public class KPSPelaajaVsPelaaja extends KiviPaperiSakset {

    // funktio pelaa peritääm

    @Override
    protected String toisenSiirto() {
        System.out.print("Toisen pelaajan siirto: ");
        return scanner.nextLine();  
    }

    // ...
}
```

### 5. Pull requestin mergeäminen (tätä tehtävää ei lasketa versionhallintatehtäväksi)

Mergeä jokin miniprojektillesi tehty pull request (myös toisen miniprojektisi jäsenen tekemän pull requestin mergeäminen käy). Voit tehdä tehtävän yhdessä muiden miniprojektisi ryhmäläisten kanssa. Jos olet jo mergennyt pull requestin miniprojektiisi kurssin aikana, se riittää tämän tehtävä merkkaamiseksi. 

Laita palautusrepositorioosi tiedosto _MERGE.md_ ja sen sisällöksi linkki mergettyyn pullrequestiin. 

**Vaihtoehtoinen tehtävä**

lue joku alla olevista ja tee siitä noin 0.25 sivun referaatti

* Lauri Suomalaisen kandidaattityö [Ohjelmistotuotantomenetelmien kehittyminen 1950-luvulta nykypäivään](https://www.cs.helsinki.fi/u/mluukkai/ohtu/suomalainen-kandi.pdf)
* Tero Huomon kandidaattityö [Ohjelmistoarkkitehtuurin sisällyttäminen ketteriin ohjelmistotuotantomenetelmiin](https://www.cs.helsinki.fi/u/mluukkai/ohtu/huomo-kandi.pdf) 
* Kasper Hirvikosken kandidaattityö [Metriikat käytänteiden tukena ohjelmiston laadun arvioimisessa](https://www.cs.helsinki.fi/u/mluukkai/ohtu/hirvikoski-kandi.pdf)
* Kenny Heinosen kandidaattityö [Ohjelmistoala ja ryhmätyöskentely](https://www.cs.helsinki.fi/u/mluukkai/ohtu/heinononen-kandi.pdf)
* Eero Laineen kandidaattityö [Johtaminen perinteisissä ja ketterissä ohjelmistotuotantoprojekteissa](https://www.cs.helsinki.fi/u/mluukkai/ohtu/laine-kandi.pdf)
* Esa Kortelaisen kandidaattityö [Jatkuva eksperimentointi ohjelmistokehityksen tukena](https://www.cs.helsinki.fi/u/mluukkai/ohtu/kortelainen-kandi.pdf)
* Kalle Ilveksen kandidaattityö [Scrumban-menetelmän käyttö ketterässä ohjelmistokehityksessä](https://www.cs.helsinki.fi/u/mluukkai/ohtu/ilves-kandi.pdf)

### 6. Kurssipalaute

Anna kurssipalautetta [täällä](https://coursefeedback.helsinki.fi/targets/37221267/feedback). Voit antaa palautteen myös kokeen jälkeen. Rasti tähän tehtävään on lupaus että annat palautteen jossain vaiheessa. **Palautetta voi antaa välillä 14.12.2022 - 28.12.2022**

**HUOM** jos menet palautteenanto-osoitteeseen ennen loppupalautteen alkupäivää, näet kurssin "jatkuvan palauten" lomakkeen. Tässä tehtävässä tarkoitetaan kuitenkin 14.12. aukeavaa normaalia loppupalautetta.


{% include submission_instructions.md %}
