---
layout: page
title: Viikko 5
inheader: no
permalink: /tehtavat5/
---

## Viikko 5

**HUOM**: [kurssikoe](https://courses.helsinki.fi/fi/TKT20006/133010615) maanantaina 16.12. 9-12 salissa A111. Kokeeseen tulee ilmoittautua viimeistään 10 päivää ennen kokeen alkua. 

*Alla olevien tehtävien deadline on maanantaina 2.12. klo 23:59*

Apua tehtävien tekoon kurssin [Telegram](https://telegram.me/ohjelmistotuotanto)-kanavalla sekä pajassa
- ma 14-16 B221 
- ke 14-16 B221

Muista myös tämän viikon [monivalintatehtävät](https://study.cs.helsinki.fi/stats/courses/ohtu2019/quiz/5), joiden deadline on sunnuntaina 1.12. klo 23:59:00.  

Tehtävissä 1-3 jatketaan gitin harjoittelua. Tehtävät 2 ja 3 eivät näy palautuksissa mitenkään.

Tehtävät 4 ja 5 liittyvät materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span>.

Tehtävä 6 käsittelee retrospektiivitekniikoita.

### Typoja tai epäselvyyksiä tehtävissä?

Tee [korjausehdotus](/osa0#typoja-materiaalissa) editoimalla [tätä](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/tehtavat5.md) tiedostoa GitHubissa.

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. git: tägit [versionhallinta]

Tutustutaan tässä tehtävässä Gitin tageihin:

> Git has the ability to tag specific points in history as being important. Typically people use this functionality to mark release points (v1.0, and so on)

Lue ensin [http://git-scm.com/book/en/Git-Basics-Tagging](http://git-scm.com/book/en/Git-Basics-Tagging) (voit skipata kohdat 'signed tags' ja 'verifying tags')

Tee seuraavat samaan repositorioon, mihin palautat tehtäväsi:

* tee tägi nimellä tagi1 (lightweight tag riittää)
* tee kolme committia (eli 3 kertaa muutos + add + commit)
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

Varmista, että tagit siirtyvät GitHubiin:

![](https://github.com/mluukkai/ohjelmistotuotanto2018/raw/master/images/viikko4-1.png)

### 2. git: vahingossa tuhotun tiedoston palautus [versionhallinta]

Edellisessä tehtävässä palasimme jo menneisyyteen checkouttaamalla tagillä merkittyyn kohtaan. Katsotaan nyt miten voimme palauttaa jonkun menneisyydessä olevan tilanteen uudelleen voimaan.

Voit tehdä tämän ja seuraavan tehtävän mihin tahansa repositorioon, tehtävät eivät näy palautuksissa.

* tee jokin tiedosto, esim. nimeltään _xxx_, lisää ja committaa se
* poista tiedosto ja committaa
* tee jotain muutoksia johonkin tiedostoon ja committaa
* historiasi näyttää seuraavalta

<pre>
(1) - (2) - (3)
</pre>
    
* Nykyhetki eli HEAD on (3). Commitissa (1) tiedosto _xxx_ on olemassa nykyhetkellä ja (2):ssa xxx:ää ei ole.
  * huom: komennolla <code>gitk</code> voit tutkia historiaa
* haluamme palauttaa tiedoston
* selvitä sen commitin id, jossa tiedosto vielä on olemassa, tämä onnistuu gitk:lla tai <code>git log</code> -komennolla
* anna komento <code>git checkout 3290b03cea08af987ee7ea57bb98a4886b97efe0 -- xxx</code> missä pitkä merkkijono on siis kyseisen commitin id
  * varmista että tiedosto on ilmestynyt staging-alueelle komennolla <code>git status</code>
* tee commit
* _xxx_ on palannut!
* HUOM: koko id:tä ei komennossa tarvitse antaa, riittää antaa alusta niin monta merkkiä, että niiden perusteella id voidaan päätellä yksikäsitteisesti repositoriosi historiassa
  * "Generally, eight to ten characters are more than enough to be unique within a project. For example, as of October 2017, the Linux kernel (which is a fairly sizable project) has over 700,000 commits and almost six million objects, with no two objects whose SHA-1s are identical in the first 11 characters." [7.1 Git Tools - Revision Selection
](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1)

* Täsmälleen samalla tavalla onnistuu olemassa olevan tiedoston vanhan version palauttaminen.

### 3. git: commitin muutosten kumoaminen [versionhallinta]

* huomaamme, että juuri tehty commit oli virhe, kumotaan se sanomalla <code>git revert HEAD --no-edit</code>
  * HEAD siis viittaa siihen committiin minkä kohdalla nyt ollaan
* syntyy uusi commit, jossa edellisessä tehdyt muutokset on kumottu
  * ilman optiota __no-edit__ pääset editoimaan kumoamiseen liittyvään commitiin tulevaa viestiä 
  * huom: sanomalla <code>git checkout HEAD^</code> pääsemme takaisin kumottuun tilanteeseen, eli mitään ei ole lopullisesti kadotettu
* vastaavalla tavalla voidaan revertata mikä tahansa commit, eli: <code>git revert kumottavancommitinid</code>

### 4. Laskin ja komento-oliot

[Kurssirepositorion](https://github.com/ohjelmistotuotanto-hy/syksy2019) hakemistoissa _koodi/viikko5/LaskinFXNN_, löytyy hieman modifioitu versio syksyn 2016 Ohjelmoinnin jatkokurssin viikon 5 [tehtävästä](https://www.cs.helsinki.fi/group/java/s16-materiaali/viikko12/#193laskin).

Koodista on kolme eri versiota, _LaskinFX8_, jonka pitäisi toimia Java8:llä (myös cubbli-linuxeilla, ks. README), _LaskinFX11_, jonka pitäisi toimia Java11:lla ja _LaskinSwing_, jonka pitäisi toimia kaikilla versiolla.

Valitse sellainen versio, joka toimii koneellasi (komennolla _gradle run_).


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

Versiossa _LaskinSwing_ metodi näyttää hieman erilaiselta, sillä se käyttää FX:n sijaan _Swing_-käyttöliittymäkirjastoa.

Refaktoroi koodi iffittömäksi kurssimateriaalin osassa 4 esiteltyä suunnittelumallia [command](https://ohjelmistotuotanto-hy.github.io/osa4#laskin-ja-komento-olio-viikko-5) käyttäen.

Tässä tehtävässä ei tarvitse vielä toteuttaa undo-komennon toiminnallisuutta!

Luokka <code>Tapahtumankuuntelija</code> (Java FX-versioissa) voi näyttää refaktoroituna esim. seuraavalta:

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

Toteuta laskimeen myös _undo_-toiminnallisuus. Periaatteena on siis tallettaa jokaiseen komentoon sen verran dataa, että kutsuttaessa metodia <code>peru</code> komento osaa palauttaa tilanteen, joka oli voimassa (eli käytännössä laskimen arvon) ennen komennon suoritusta.

Riittää että ohjelma muistaa edelliseksi suoritetun komennon, eli undo-toimintoa ei tarvitse osata suorittaa kahta tai useampaa kertaa peräkkäin. Tosin komento-suunnittelumallin avulla olisi melko helppo toteuttaa myös useamman undo- tai redo-toiminnallisuuden hallitseva sovellus.

### 6. Retrospektiivitekniikat

Wikipedian mukaan retrospektiivi on _"a meeting held by a project team at the end of a project or process (often after an iteration) to discuss what was successful about the project or time period covered by that retrospective, what could be improved, and how to incorporate the successes and improvements in future iterations or projects."_

Tutustu [täällä](http://retrospectivewiki.org/index.php?title=Retrospective_Plans) esiteltyihin retrospektiivitekniikoihin [Start, Stop, Continue, More of, Less of Wheel](http://retrospectivewiki.org/index.php?title=Start,_Stop,_Continue,_More_of,_Less_of_Wheel) ja [Glad, Sad, Mad](http://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad)

Tee aiheesta noin 0.25 sivun (eli noin 125 sanaa) tiivistelmä repositorion juureen sijoitettavaan tiedostoon _retro.md_

Pidä huoli siitä, että miniprojektitiimisi pitää ensimmäisen sprintin lopussa jompaa kumpaa tekniikkaa noudattavan retrospektiivin!

### Tehtävien palautus

Pushaa kaikki tekemäsi tehtävät GitHubiin ja merkitse tekemäsi tehtävät palautussovellukseen <https://study.cs.helsinki.fi/stats/courses/ohtu2019>
