---
layout: page
title: Viikko 5
inheader: no
permalink: /tehtavat5/
---

{% include laskari_info.md part=5 %}

Tehtävissä 1-3 jatketaan Gitin harjoittelua. Nämä tehtävät eivät näy palautuksissa mitenkään.

Tehtävä 4 liittyy materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span>. Tehtävissä 5 ja 6 pääsemme hyödyntämään tekoälyä koodin katselmoinnissa sekä koodin tuottamisessa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include poetry_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 4-6 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, sinne tehtävän hakemiston _viikko5_ sisälle. Tehtäviä 1-3 ei palauteta.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: vahingossa tuhotun tiedoston palautus [versionhallinta]

Viikon 4 [tehtävässä 5](/tehtavat4/#5-git-tägit-versionhallinta) palasimme jo menneisyyteen checkouttaamalla tagillä merkittyyn kohtaan. Katsotaan nyt miten voimme palauttaa jonkun menneisyydessä olevan tilanteen uudelleen voimaan.

Voit tehdä tämän ja kaksi seuraavaa tehtävää mihin tahansa repositorioon, tehtävät eivät näy palautuksissa.

<input type="checkbox"> Tee tiedosto nimeltään _important.txt_, lisää ja committaa se Gitiin

<input type="checkbox"> Poista tiedosto ja committaa

<input type="checkbox"> Tee jotain muutoksia _johonkin_ tiedostoon ja committaa

Historiasi näyttää seuraavalta

```
(1) - (2) - (3)
```

Nykyhetki eli HEAD on (3). Commitissa (1) tiedosto _important.txt_ on olemassa ja (2):ssa important.txt:ää ei ole.
- Huom: komennolla <code>gitk</code> voit tutkia historiaa

Haluamme palauttaa tiedoston _important.txt_.

<input type="checkbox"> Selvitä sen commitin id, jossa tiedosto vielä on olemassa, tämä onnistuu gitk:lla tai komennolla <code>git log</code> 

<input type="checkbox"> Anna komento <code>git checkout 3290b03cea08af987ee7ea57bb98a4886b97efe0 -- important.txt</code> missä pitkä merkkijono on siis kyseisen commitin id

<input type="checkbox"> Varmista että tiedosto  _important.txt_ on ilmestynyt staging-alueelle komennolla <code>git status</code>

<input type="checkbox"> Tee commit

Kadonnut tiedosto _important.txt_ on palannut, ja versionhallinnassa!

 Huom: koko id:tä ei komennossa tarvitse antaa, riittää antaa alusta niin monta merkkiä, että niiden perusteella id voidaan päätellä yksikäsitteisesti repositoriosi historiassa:
  - _"Generally, eight to ten characters are more than enough to be unique within a project. For example, as of October 2017, the Linux kernel (which is a fairly sizable project) has over 700,000 commits and almost six million objects, with no two objects whose SHA-1s are identical in the first 11 characters."_ Ks. lisää [täältä](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1)
- Täsmälleen samalla tavalla onnistuu olemassa olevan tiedoston vanhan version palauttaminen.

### 2. Git: commitin muutosten kumoaminen [versionhallinta]

Jatketaan siitä mihin edellisessä tehtävässä jäimme. Huomaamme, että juuri tehty commit oli virhe.

<input type="checkbox"> Kumotaan se komennolla <code>git revert HEAD --no-edit</code>
  
Komennossa HEAD viittaa siihen committiin, jonka kohdalla nyt ollaan.

<input type="checkbox"> Varmista, että edellisen commitin tekemä muutos (eli tiedoston _important.txt_ lisääminen) kumoutuu

Komennon `git revert` seurauksena syntyy uusi commit, jossa edellisessä tehdyt muutokset on kumottu
- Ilman optiota **no-edit** pääset editoimaan kumoamiseen liittyvään commitiin tulevaa viestiä
- Huom: sanomalla <code>git checkout HEAD^</code> pääsemme takaisin kumottuun tilanteeseen, eli mitään ei ole lopullisesti kadotettu

Vastaavalla tavalla voidaan kumota, eli revertata mikä tahansa commit, eli: <code>git revert kumottavancommitinid</code>

### 3. Git: rebase [versionhallinta]

Olemme jo törmänneet parissa aiemmassa tehtävässä ([viikko 1, tehtävä 11](/tehtavat1#11-github-actions-osa-3) ja [ja viikko 2 tehtävä 13](/tehtavat2/#13-git-ep%C3%A4ajantasaisen-kloonin-pushaaminen-versionhallinta)) Gitin käsitteeseen *rebase*. Otetaan nyt selvää tarkemmin mistä on kysymys.

<input type="checkbox"> Lue <https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase> tai/ja <http://git-scm.com/book/en/Git-Branching-Rebasing>.

<input type="checkbox"> Aikaansaa seuraavankaltainen tilanne branchien _main_ ja _haara_ välille:

```
------- main
\
 \--- haara
```

<input type="checkbox"> "Rebeissaa" _haara_ _mainiin_, eli aikaansaa seuraava tilanne:

```
------- main
       \
        \--- haara
```

<input type="checkbox"> Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

"Mergeä" _haara_ vielä _mainiin_, jolloin tilanne on seuraava:

```
------- \     main
         \--- haara
```

Lopputuloksena pitäisi siis olla lineaarinen historia ja main sekä haara samassa.

<input type="checkbox"> Varmista jälleen komennolla <code>gitk --all</code> että kaikki on kunnossa.

<input type="checkbox"> Poista branch _haara_. Kysy tarvittaessa AI:lta tai Googlelta miten branchin poisto tapahtuu.

Mikä on rebase-komennon käyttötarkoitus? Atlassianin [git-ohje](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) perustelee asiaa näin

> The primary reason for rebasing is to maintain a linear project history. For example, consider a situation where the main branch has progressed since you started working on a feature branch. You want to get the latest updates to the main branch in your feature branch, but you want to keep your branch's history clean so it appears as if you've been working off the latest main branch. This gives the later benefit of a clean merge of your feature branch back into the main branch. Why do we want to maintain a "clean history"? The benefits of having a clean history become tangible when performing Git operations to investigate the introduction of a regression.


### 4. Tenniksen pisteenlaskun refaktorointi

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko5/tennis_, löytyy ohjelma, joka on tarkoitettu tenniksen [pisteenlaskentaan](https://github.com/emilybache/Tennis-Refactoring-Kata#tennis-kata).

<input type="checkbox"> Kopioi projekti palautusrepositorioosi, hakemiston viikko5 sisälle

<input type="checkbox"> Tee commit ja pushaa koodi GitHubiin

<input type="checkbox"> Tee tehtävää varten oma haara nimeltään *tennis_refactoring*

<input type="checkbox"> Varmista vielä, että olet seuraavassa tilanteessa ennen kuin jatkat seuraaviin askeleisiin

```
$ git status
On branch tennis_refactoring
nothing to commit, working tree clean
```

Pisteenlaskennan rajapinta on yksinkertainen. Metodi `get_score` kertoo voimassa olevan tilanteen tenniksessä käytetyn pisteenlaskennan määrittelemän tavan mukaan. Sitä mukaa kun jompi kumpi pelaajista voittaa palloja, kutsutaan metodia `won_point`, jossa parametrina on pallon voittanut pelaaja.

Esim. käytettäessä pisteenlaskentaa seuraavasti:

```python
game = TennisGame("player1", "player2")

print(game.get_score())

game.won_point("player1")
print(game.get_score())

game.won_point("player1")
print(game.get_score())

game.won_point("player2")
print(game.get_score())

game.won_point("player1")
print(game.get_score())

game.won_point("player1")
print(game.get_score())
```

tulostuu

```
Love-All
Fifteen-Love
Thirty-Love
Thirty-Fifteen
Forty-Fifteen
Win for player1
```

Tulostuksessa siis kerrotaan mikä on pelitilanne kunkin pallon jälkeen kun _player1_ voittaa ensimmäiset 2 palloa, _player2_ kolmannen pallon ja _player1_ loput 2 palloa.

Tenniksen pisteenlaskennasta voit lukea enemmän esim. [Wikipediasta](https://en.wikipedia.org/wiki/Tennis_scoring_system#Description), mutta se ei ole välttämätöntä tämän tehtävän tekemisen kannalta.

Pisteenlaskentaohjelman koodi toimii ja sillä on erittäin kattavat testit. Koodi on kuitenkin sisäiseltä laadultaan kelvotonta.

<input type="checkbox"> Tehtävänä on refaktoroida koodi luettavuudeltaan mahdollisimman ymmärrettäväksi

- Koodissa tulee välttää ["taikanumeroita"](<https://en.wikipedia.org/wiki/Magic_number_(programming)>) ja huonosti nimettyjä muuttujia
- Koodi kannattaa jakaa moniin pieniin metodeihin, jotka nimennällään paljastavat oman toimintalogiikkansa
- Etene refaktoroinnissa _todella pienin askelin_
- Suorita testejä mahdollisimman usein
- Yritä pitää ohjelma koko ajan toimintakunnossa, eli älä hajota testejä
- **Testeihin ohjelmassa ei tarvitse eikä edes saa koskea**

Jos haluat käyttää jotain muuta kieltä kuin Pythonia, löytyy koodista ja testeistä versioita useilla eri kielillä osoitteesta [https://github.com/emilybache/Tennis-Refactoring-Kata](https://github.com/emilybache/Tennis-Refactoring-Kata).

<input type="checkbox"> Kun olet valmis, commitoi koodi ja pushaa haara *tennis_refactoring* GitHubiin

Lisää samankaltaisia refaktorointitehtäviä löytyy Emily Bachen [GitHubista](https://github.com/emilybache).

### 5. Pull request ja koodin katselmointi

Tämän tehtävän tekeminen edellyttää, että sinulla on [GitHub Education](/tehtavat2/#github-education) -jäsenyys.

<input type="checkbox"> Tee nyt GitHubissa Pull request haarasta *tennis_refactoring* haaraan *main*

GitHub ehkä jo ehdottaa Pull requestin tekemistä

![]({{ "/images/pr1.png" | absolute_url }})

<input type="checkbox"> Varmista, että PR kohdistuu haastasta *tennis_refactoring* haaraan *main*. 

<input type="checkbox"> Kirjoita PR:lle kuvaus. Voit ottaa esim. [täältä](https://medium.com/@jmanuellugo96/how-to-write-an-awesome-pull-request-pr-description-bdd2c6e48418) tai [täältä](https://www.hackerone.com/blog/writing-great-pull-request-description) mallia kuvaukselle.

![]({{ "/images/pr2.png" | absolute_url }})

<input type="checkbox"> Pyydä GitHub Copilotia tekemään PR:llesi koodin katselmointi:

![]({{ "/images/pr3.png" | absolute_url }}){:height="130px" }

<input type="checkbox"> Odota katselmoinnin valmistumista... omassa tapauksessani taisi mennä noin 10 minuuttia

<input type="checkbox"> Käy katselmoinnin tulos läpi. Hyväksy ehdotetut muutokset halutessasi ja merkitse kommentit selvitetyiksi (_resolve conversation_)

<input type="checkbox"> Mergeä Pull request main-haaraan

<input type="checkbox"> Kirjoita raportti katselmoinnista palautusrepositorioon hakemistoon _viikko5_ talletettavaan tiedoston _review.md_

Kerro raportissa
- Mitä huomioita Copilot teki koodistasi
- Olivatko ehdotetut muutokset hyviä
- Kuinka hyödylliseksi koit Copilotin tekemän katselmoinnin

Lisää aiheesta [GitHubin dokumentaatiossa](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

### 6. Good vibe with warehouses

Palataan jälleen viikolta 1 tutun *Ohtuvaraston* pariin. Tehtävässä on tarkoitus saada tekoäly koodaamaan Ohtuvarastolle web-käyttöliittymä, esim. Flask-sovelluskehystä käyttäen

<input type="checkbox"> Tee repositorioosi [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue), jossa kuvaat mahdollisimman tarkasti minkälaisen sovelluksesta haluat:

![]({{ "/images/issue0.png" | absolute_url }}){:height="350px" }

Sovelluksen pitäisi mahdollistaa useiden varastojen luominen, muokkaaminen ja sisällön lisääminen tai poistaminen. Myös mahdolliset käytettävät kirjastot kuten Flask kannattaa mainita kuvauksessa.

Copilot käyttää issuen kuvausta promptina, joten kuvauksen laatuun kannattaa panostaa.

<input type="checkbox"> Assignaa issue Copilotille:

![]({{ "/images/issue1.png" | absolute_url }}){:height="130px" }

Copilot avaa Pull requestin työskentelyään varten:

![]({{ "/images/issue2.png" | absolute_url }})

<input type="checkbox"> Mene Pull requestin näkymään (ks. välilehti Pull requests), ja sieltä edelleen nappia "View session" painamalla katsomaan Copilotin työskentelyä

Copilot aloittaa tutustumalla projektiin ja luo suunnitelman

![]({{ "/images/issue3.png" | absolute_url }})

<input type="checkbox"> Seuraa Copilotin edistymistä

Copilotilla voi mennä aika kauan koodaillessa. Nyt on hyvä hetki esim. keittää kahvit tai hakea jääkaapista energiajuomatölkki.

<input type="checkbox"> Odota kunnes Copilot on valmis

Kun Copilot on valmis (itselläni meni noin 15 min) näet sen luoman koodin Pull requestin sivulta. Ainakin omassa tapauksessani Copilot on lisännyt PR:n sivulle myös kuvakaappauksia sovelluksesta.

<input type="checkbox"> Pull request on tällä hetkellä draft-tilassa. ;uuta sen tilaa painamalla nappia "Ready for review"

<input type="checkbox"> Hae pull requestin koodia omalla koneellasi

Tämä tapahtuu komennoilla `git fetch` ja `git checkout`:

```
$ git fetch
remote: Enumerating objects: 38, done.
remote: Counting objects: 100% (36/36), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 25 (delta 9), reused 18 (delta 5), pack-reused 0 (from 0)
Unpacking objects: 100% (25/25), 13.12 KiB | 206.00 KiB/s, done.
From github.com:mluukkai/ohtuvarasto25
 * [new branch]      copilot/add-warehouse-management-ui -> origin/copilot/add-warehouse-management-ui
   a359cc1..7211227  user_interface -> origin/user_interface
$ git checkout copilot/add-warehouse-management-ui
branch 'copilot/add-warehouse-management-ui' set up to track 'origin/copilot/add-warehouse-management-ui'.
Switched to a new branch 'copilot/add-warehouse-management-ui'
```

<input type="checkbox"> Varmista, että koodi toimii

Oma sovellukseni oli konfiguroitu siten, että osoitteen http://localhost:5000/ sijaan sovellukseen pääsee käsiksi osoitteesta http://127.0.0.1:5000/

<input type="checkbox"> Tee sovellukselle katselmointi GitHubissa

Pääset tekemään katselmoinnin Pull requestin sivun yläoikealla olevasta napista "Add your review". Saatat joutua uudelleenlataamaan sivun, jotta nappi ilmestyy näkyviin

<input type="checkbox"> Vaadi katselmoinnissa jotain muutoksia sovellukseen:

![]({{ "/images/issue5.png" | absolute_url }}){:height="450px" }

Valitse siis lomakkeelta _Request changes_. Kommenteissa tulee mainita [@copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr), jotta Copilot suostuu tekemään muutokset

<input type="checkbox"> Seuraa jälleen Copilotin edistymistä napilla "View session"

<input type="checkbox"> Varmista vielä omalla koneellasi, että koodi toimii muutosten jälkeen

<input type="checkbox"> Kun olet tyytyväinen mergeä Pull request main-haaraan

<input type="checkbox"> Kirjoita raportti katselmoinnista palautusrepositorioon hakemistoon _viikko5_ talletettavaan tiedoston _vibe.md_

Kerro raportissa
- Päätyikö Copilot toimivaan ja hyvään ratkaisuun
- Oliko koodi selkeää
- Opitko jotain uutta Coplotin tekemää koodia lukiessasi

Tässä erittäin yksinkertaisessa tapauksessa vibekoodaus saattaa tuottaa hämmästyttävänkin hyvän lopputuloksen. Tilanne on kuitenkin aivan erilainen todellisen, isomman järjestelmän kanssa, pelkkä vibetys, eli haluttavan toiminnallisuuden kuvailu ei useimmiten riitä siihen että ulos saadaan toimiva ja robusti ratkaisu.

{% include submission_instructions.md %}

### Vapaaehtoinen bonus-tehtävä

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko5/int-joukko_ on alun perin Javalla tehty, mutta nyt Pythoniksi alkuperäiselle tyylille uskollisena käännetty aloittelevan ohjelmoijan ratkaisu syksyn 2011 Ohjelmoinnin jatkokurssin [viikon 2 tehtävään 3](http://www.cs.helsinki.fi/u/wikla/ohjelmointi/jatko/s2011/harjoitukset/2/). 

<input type="checkbox"> Kopioi projekti palautusrepositorioosi, hakemiston viikko5 sisälle.

Kyseinen opiskelija on edennyt urallaan pitkälle, hän on työskennellyt mm. Googlella ja useassa korkean profiilin Piilaakson start upissa.

Koodi simuloi vanhanaikaista ohjelmointikieltä kuten C:tä missä ei ole Pythonin listan tapaista valmista tietorakennetta, vaan ainoastaan listoja, joiden koko on kiinteä, ja joka määritellään listan luomishetkellä. Koodissa listan luominen tapahtuu metodilla `_luo_lista`:

```python
class IntJoukko:
    # tämä metodi on ainoa tapa luoda listoja
    def _luo_lista(self, koko):
        return [0] * koko

    def __init__(self, kapasiteetti=None, kasvatuskoko=None):
        # ...
        
        # luodaan lista, jolla haluttu kapasiteetti
        self.ljono = self._luo_lista(self.kapasiteetti)
        self.alkioiden_lkm = 0
```

Kun joukkoon lisätään riittävä määrä uusia lukuja, tulee eteen tilanne, että joukon sisäistä listaa on kasvatettava. Tämä tapahtuu luomalla uusi lista metodilla `_luo_lista`:

```python
    def lisaa(self, n):
        # ...
                
        # ei enää tilaa, luodaan uusi lista lukujen säilyttämiseen
        self.ljono = self._luo_lista(self.alkioiden_lkm + self.kasvatuskoko)

```

Koodi jättää hieman toivomisen varaa sisäisen laatunsa suhteen. Refaktoroi luokan `IntJoukko` koodi mahdollisimman siistiksi ja helposti ylläpidettäväksi.:

<input type="checkbox"> Poista copypaste

<input type="checkbox"> Vähennä monimutkaisuutta

<input type="checkbox"> Anna muuttujille selkeät nimet

<input type="checkbox"> Tee metodeista pienempiä ja hyvän koheesion omaavia

Ratkaisusi tulee toimia siten, että edelleen joukon sisäisen listan koko on kiinteä, ja lista luodaan metodilla `_luo_lista`, eli jos lista täyttyy, luodaan uusi lista metodin avulla.

Koodissa on joukko yksikkötestejä, jotka helpottavat refaktorointia.

**HUOM:** Suorita refaktorointi mahdollisimman pienin askelin, pidä koodi koko ajan toimivana. Suorita testit jokaisen refaktorointiaskeleen jälkeen!
