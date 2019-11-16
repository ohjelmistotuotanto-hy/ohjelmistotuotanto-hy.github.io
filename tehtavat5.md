---
layout: page
title: Viikko 5
inheader: no
permalink: /tehtavat5/
---

## Viikko 5

<div class="important">
  DRAFT: Pahasti kesken...
</div>

**HUOM**: [Kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. 

*Alla olevien tehtävien deadline on maanantaina 2.12. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ma 14-16 B221 
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/5), joiden deadline on sunnuntaina 1.12. klo 23:59:00.  

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat5.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: tägit [versionhallinta]

Tutustutaan tässä tehtävässä Gitin tageihin:

> Git has the ability to tag specific points in history as being important. Typically people use this functionality to mark release points (v1.0, and so on)

Lue ensin [http://git-scm.com/book/en/Git-Basics-Tagging](http://git-scm.com/book/en/Git-Basics-Tagging) (voit skipata kohdat 'signed tags' ja 'verifying tags')

Tee seuraavat repositorioon, jonka palautat
* tee tägi nimellä tagi1 (lightweight tag riittää)
* tee kolme committia (eli 3 kertaa muutos+add+commit)
* tee tägi nimellä tagi2
* katso <code>gitk</code>-komennolla miltä historiasi näyttää
* palaa tagi1:n aikaan, eli anna komento <code>git checkout tagi1</code>
  * varmista, että tagin jälkeisiä muutoksia ei näy
* palaa nykyaikaan
  * tämä onnistuu komennolla <code>git checkout master</code>
* lisää tägi _edelliseen_ committiin
  * operaatio onnistuu komennolla <code>git tag tagi1b HEAD^</code> , eli HEAD^ viittaa nykyistä "headia" eli olinpaikkaa historiassa edelliseen committiin
  * joissain windowseissa muoto <code>HEAD^</code> ei toimi, sen sijasta voit käyttää muotoa <code>HEAD~</code>
  * tai katsomalla commitin tunniste (pitkä numerosarja) joko komennolla <code>git log</code> tai gitk:lla
* kokeile molempia tapoja, tee niiden avulla kahteen edelliseen committiin tagit (tagi1a ja tagi1b)
* katso komennolla <code>gitk</code> miltä historia näyttää

Tagit eivät mene automaattisesti etärepositorioihin. Pushaa koodisi githubiin siten, että myös tagit siirtyvät mukana. Katso ohje [täältä](http://git-scm.com/book/en/Git-Basics-Tagging#Sharing-Tags)

Varmista, että tagit siirtyvät Githubiin:

![](https://github.com/mluukkai/ohjelmistotuotanto2018/raw/master/images/viikko4-1.png)

### 2. git: monta etärepositorioa [versionhallinta]

_Tätä tehtävää ei palauteta mihinkään!_

Ensimmäisen viikon [viimeisessä tehtävässä](https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/laskarit/1.md#17-forkkaa-repositorio-httpsgithubcommluukkaiohjelmistotuotanto2018) forkattiin kurssirepositorio. Eli käytännössä kurssirepositoriosta tehtiin "kopio" oman GitHub-tunnuksen alle. 

Kuvassa tunnuksen _mluukkai72_ forkkaama versio kurssirepositoriosta (**HUOM** kuva on kevään 2017 kurssin repositoriosta jonka nimi oli _mluukkai/ohtu2017_):

![](https://github.com/mluukkai/ohtu2017/raw/master/images/lh6-1.png)

Forkattu versio ei kuitenkaan pysy ajan tasalla kurssirepositorioon tehtyjen muutosten kanssa. Ajantasaistetaan nyt forkattu repositorio. Lue ensin <https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes>

Toimi nyt seuraavasti:
* kloonaa forkkaamasi repositorio omalle koneellesi (jos se ei ole jo kloonattu)
* varmista komennolla _git remote -v_ että kloonatun repositorion _origin_ on githubissa oleva forkaamasi versio
<pre>
$ git remote -v
origin  https://github.com/mluukkai72/ohjelmistotuotanto2018.git (fetch)
origin  https://github.com/mluukkai72/ohjelmistotuotanto2018.git (push)
</pre>
* liitä forkatun repositorion paikallisen kopion remoteksi alkuperäinen kurssirepositorio eli _https://github.com/mluukkai/ohjelmistotuotanto2018.git_ esim. jollain nimellä, esim. _kurssirepo_
* varmista komennolla _git remote -v_ että repositoriolla on nyt kaksi eri remoterepositorioa

<pre>
$ git remote -v
kurssirepo  https://github.com/mluukkai/ohjelmistotuotanto2018.git (fetch)
kurssirepo  https://github.com/mluukkai/ohjelmistotuotanto2018.git (push)
origin  https://github.com/mluukkai72/ohjelmistotuotanto2018.git (fetch)
origin  https://github.com/mluukkai72/ohjelmistotuotanto2018.git (push)
</pre>

* pullaa alkuperäisen kurssirepositorio master-haaran sisältö paikalliseen repositorioon (komennolla _git pull kurssirepo master_)
  * pullaus siis aiheuttaa sen, että etärepositorin master-haara mergetään lokaalin repositorion masteriin
  * tämä voi aiheuttaa konfliktin, jos, niin ratkaise konflikti!
* nyt forkatun repositorion lokaali versio on ajantasalla kurssirepositorion kanssa. 
* pushaa lokaalin repositorion sisältö originiin, eli githubissa olevaan forkattuun repositorioon
* varmista, että githubissa olevassa forkatussa repositoriossa on nyt kurssirepositorion uusi sisältö

### 3. git: stash [versionhallinta]

_Tätä tehtävää ei palauteta mihinkään!_

Lue [http://git-scm.com/book/en/Git-Tools-Stashing](http://git-scm.com/book/en/Git-Tools-Stashing) kohtaan Un-applying a Stash asti.

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

### 4. Laskin ja komento-oliot

[Kurssirepositorion](https://github.com/mluukkai/ohjelmistotuotanto2018) hakemistosta [koodi/viikko6/Laskin](https://github.com/mluukkai/ohjelmistotuotanto2018/tree/master/koodi/viikko6/Laskin) löytyy hieman modifioitu versio syksyn 2016 Ohjelmoinnin jatkokurssin viikon 5 [tehtävästä](https://www.cs.helsinki.fi/group/java/s16-materiaali/viikko12/#193laskin).

Sovellusta on laajennettu lisäämällä siihen painike _undo_-toiminnallisuutta varten, undoa ei kuitenkaan ole vielä toteutettu.

Sovelluksen varsinainen toimintalogiikka on luokassa <code>Tapahtumankuuntelija</code>. Koodissa on tällä hetkellä hieman ikävä if-hässäkkä:

``` java
@Override
public void handle(Event event) {
    int arvo = 0;

    try {
        arvo = Integer.parseInt(syotekentta.getText());
    } catch (Exception e) {
    }

    if (event.getTarget() == plus) {
        sovellus.plus(arvo);
    } else if (event.getTarget() == miinus) {
        sovellus.miinus(arvo);
    } else if (event.getTarget() == nollaa) {
        sovellus.nollaa();
    } else {
        System.out.println("undo pressed");
    }
    
    int laskunTulos = sovellus.tulos();
    
    syotekentta.setText("");
    tuloskentta.setText("" + laskunTulos);
    
    if ( laskunTulos==0) {
        nollaa.disableProperty().set(true);
    } else {
        nollaa.disableProperty().set(false);
    }
    undo.disableProperty().set(false);
}
```

Refaktoroi koodi iffittömäksi itseopiskelumateriaalissa esiteltyä suunnittelumallia [command](https://github.com/mluukkai/ohjelmistotuotanto2018/blob/master/web/oliosuunnittelu.md#laskin-ja-komento-olio) käyttäen.

Tässä tehtävässä ei tarvitse vielä toteuttaa undo-komennon toiminnallisuutta!

Luokka <code>Tapahtumankuuntelija</code> voi näyttää refaktoroituna esim. seuraavalta:

``` java
public class Tapahtumankuuntelija implements EventHandler {
    private Button undo;
    private Sovelluslogiikka sovellus;
    
    private Map<Button, Komento> komennot;
    private Komento edellinen = null;
 

    public Tapahtumankuuntelija(TextField tuloskentta, TextField syotekentta, Button plus, Button miinus, Button nollaa, Button undo) {
        this.undo = undo;
        this.sovellus = new Sovelluslogiikka();
        komennot = new HashMap<>();
        komennot.put(plus, new Summa(tuloskentta, syotekentta,  nollaa, undo, sovellus) );
        komennot.put(miinus, new Erotus(tuloskentta, syotekentta, nollaa, undo, sovellus) );
        komennot.put(nollaa, new Nollaa(tuloskentta, syotekentta,  nollaa, undo, sovellus) );
    }
    
    @Override
    public void handle(Event event) {
        if ( event.getTarget() != undo ) {
            Komento komento = komennot.get((Button)event.getTarget());
            komento.suorita();
            edellinen = komento;
        } else {
            edellinen.peru();
            edellinen = null;
        }                  
    }

}
```

Komennoilla on nyt siis kaksi julkista metodia <code>void suorita()</code> ja <code>void peru()</code>.

### 5. Undo

Toteuta nyt laskimeen myös _undo_-toiminnallisuus. Periaatteena on siis tallettaa jokaiseen komentoon sen verran dataa, että kutsuttaessa metodia <code>peru</code> komento osaa palauttaa tilanteen joka oli voimassa (eli käytännössä laskimen arvon) ennen komennon suoritusta.

Riittää että ohjelma muistaa edelliseksi suoritetun komennon, eli undo-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin komento-olio-suunnittelumallin avulla olisi melko helppo toteuttaa myös useamman undo- tai redo-toiminnallisuuden hallitseva sovellus.

### 6. Retrospektiivitekniikat

Wikipedian mukaan retrospektiivi on _"a meeting held by a project team at the end of a project or process (often after an iteration) to discuss what was successful about the project or time period covered by that retrospective, what could be improved, and how to incorporate the successes and improvements in future iterations or projects."_

Tutustu sivulla [http://retrospectivewiki.org/index.php?title=Retrospective_Plans](http://retrospectivewiki.org/index.php?title=Retrospective_Plans) esiteltyihin retrospektiivitekniikoihin [Start, Stop, Continue, More of, Less of Wheel](http://retrospectivewiki.org/index.php?title=Start,_Stop,_Continue,_More_of,_Less_of_Wheel) ja [Glad, Sad, Mad](http://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad)

Tee aiheesta noin 0.25 sivun tiivistelmä repositorion juureen sijoitettavaan tiedostoon _retro.md_

Pidä huoli siitä, että miniprojektitiimisi pitää ensimmäisen sprintin lopussa jompaa kumpaa tekniikkaa noudattavan retrospektiivin!



### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkkaa tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
