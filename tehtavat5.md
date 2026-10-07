---
layout: page
title: Viikko 5
inheader: no
permalink: /tehtavat5/
---

{% include laskari_info.md part=5 %}

Tehtävissä 1-3 jatketaan Gitin harjoittelua. Nämä tehtävät eivät näy palautuksissa mitenkään.

Tehtävä 4 liittyy materiaalin ohjelmistosuunnittelua käsittelevän [osan 4](/osa4/) niihin lukuihin, joihin on merkitty <span style="color:blue">[viikko 5]</span>. Tehtävissä 5 ja 6 jatketaan kurssin [tekoäly]-tehtävien sarjaa, ja hyödynnetään tekoälyä koodin katselmoinnissa sekä koodin tuottamisessa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

{% include uv_ongelma.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 4-6 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, sinne tehtävän hakemiston _viikko5_ sisälle. Tehtäviä 1-3 ei palauteta.

Katso tarkempi ohje palautusrepositoriota koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

{% include checkbox_reset.md %}

### 1. Git: vahingossa tuhotun tiedoston palautus [versionhallinta]

Viikon 4 [tehtävässä 7](/tehtavat4/#7-git-tägit-versionhallinta) palasimme jo menneisyyteen checkouttaamalla tagillä merkittyyn kohtaan. Katsotaan nyt miten voimme palauttaa jonkun menneisyydessä olevan tilanteen uudelleen voimaan.

Voit tehdä tämän ja kaksi seuraavaa tehtävää mihin tahansa repositorioon, tehtävät eivät näy palautuksissa.

<input type="checkbox"> Tee tiedosto nimeltään _important.txt_, lisää ja committaa se Gitiin

<input type="checkbox"> Poista tiedosto ja committaa

- Vihje: katso poiston jälkeen komennolla <code>git status</code>, missä tilassa poistettu tiedosto on. Pelkkä tiedoston poistaminen ei vielä vie poistoa staging-alueelle, vaan se on tehtävä komennolla <code>git add important.txt</code> (tai <code>git add .</code>). Vaihtoehtoisesti tiedoston voi poistaa suoraan komennolla <code>git rm important.txt</code>, joka sekä poistaa tiedoston että lisää poiston staging-alueelle

<input type="checkbox"> Tee jotain muutoksia _johonkin_ tiedostoon ja committaa

Historiasi näyttää seuraavalta

```
   (1) ─────────────── (2) ─────────────── (3)  ◄── HEAD
    │                   │                   │
 important.txt       important.txt       muutos johonkin
 lisätään            poistetaan          toiseen tiedostoon

 important.txt:      important.txt:      important.txt:
 on olemassa         ei ole              ei ole
```

Nykyhetki eli HEAD on (3). Commitissa (1) tiedosto _important.txt_ on olemassa, mutta commitista (2) alkaen sitä ei enää ole.
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

Olemme jo törmänneet parissa aiemmassa tehtävässä ([viikko 1, tehtävä 11](/tehtavat1#11-github-actions-osa-3) ja [ja viikko 2 tehtävä 14](/tehtavat2/#14-git-ep%C3%A4ajantasaisen-kloonin-pushaaminen-versionhallinta)) Gitin käsitteeseen *rebase*. Otetaan nyt selvää tarkemmin mistä on kysymys.

<input type="checkbox"> Lue <https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase> tai/ja <http://git-scm.com/book/en/Git-Branching-Rebasing>.

<input type="checkbox"> Aikaansaa seuraavankaltainen tilanne branchien _main_ ja _haara_ välille:

![]({{ "/images/lh5-rebase1.png" | relative_url }}){:height="250px" }

> Kuvassa jokainen ympyrä (A, B, C, ...) vastaa yhtä committia, commitien väliset nuolet osoittavat vanhemmasta commitista uudempaan, ja laatikot _main_ ja _haara_ näyttävät, mihin committiin kukin branch osoittaa.

Haara _haara_ on siis erkaantunut mainista commitin B jälkeen, ja molempiin on sen jälkeen tehty committeja. Muutosten ei kannata kohdistua samoihin tiedostoihin, jotta vältyt konflikteilta.

<input type="checkbox"> Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

<input type="checkbox"> "Rebeissaa" _haara_ _mainiin_, eli aikaansaa seuraava tilanne:

![]({{ "/images/lh5-rebase2.png" | relative_url }}){:height="250px" }

Haaran commitit on nyt siirretty mainin viimeisimmän commitin D perään. Commitit E' ja F' sisältävät samat muutokset kuin alkuperäiset E ja F, mutta ne ovat uusia committeja, joilla on eri id:t. Tämän näet esim. komennolla <code>git log</code>.

<input type="checkbox"> Varmista komennolla <code>gitk --all</code> että tilanne on haluttu.

"Mergeä" _haara_ vielä _mainiin_, jolloin tilanne on seuraava:

![]({{ "/images/lh5-rebase3.png" | relative_url }}){:height="190px" }

Lopputuloksena pitäisi siis olla lineaarinen historia ja main sekä haara samassa. Koska _haara_ on rebasen jälkeen mainin suora jatke, merge on ns. _fast-forward_, eli main-viite vain siirtyy osoittamaan committiin F' eikä erillistä merge-committia synny.

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

*Tee tämä refaktorointi ilman agentin apua!*

Jos haluat käyttää jotain muuta kieltä kuin Pythonia, löytyy koodista ja testeistä versioita useilla eri kielillä osoitteesta [https://github.com/emilybache/Tennis-Refactoring-Kata](https://github.com/emilybache/Tennis-Refactoring-Kata).

<input type="checkbox"> Kun olet valmis, commitoi koodi ja pushaa haara *tennis_refactoring* GitHubiin

Lisää samankaltaisia refaktorointitehtäviä löytyy Emily Bachen [GitHubista](https://github.com/emilybache).

### 5. Pull request ja koodin katselmointi [tekoäly]

Lue ennen tehtävien 5 ja 6 tekemistä materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) viikon 5 osuus [AI katselmoinnissa ja pilviagentti](/genai/#ai-katselmoinnissa-ja-pilviagentti-viikko-5).

Tehtävien tekeminen edellyttää, että sinulla on [GitHub Education](/tehtavat2/#github-education) -jäsenyys.

**Huomio Copilotin AI credit -kiintiöstä:** Copilot Student -versiossa on käytössä 200 _AI credit_ -yksikköä kuukaudessa (1 credit = 0,01 dollaria). Sekä Copilotin tekemä koodin katselmointi että pilviagentti kuluttavat näitä, ja kulutus riippuu muutosten koosta ja työn määrästä. GitHubin oman arvion mukaan yksi katselmointi maksaa kevyimmällä _Lite_-tasolla noin 0,05–1 dollaria ja oletuksena olevalla _Balanced_-tasolla noin 0,25–5 dollaria. Yksi Balanced-tason katselmointi voi siis pahimmillaan kuluttaa koko kuukauden AI credit -kiintiön. Käytä tämän viikon tehtävissä katselmointiin aina Lite-tasoa, ja pidä pull requestit pieninä. AI credit -kiintiön kulutusta voit seurata osoitteessa <https://github.com/settings/billing>.

<input type="checkbox"> Tee nyt GitHubissa Pull request haarasta *tennis_refactoring* haaraan *main*

GitHub ehkä jo ehdottaa Pull requestin tekemistä

![]({{ "/images/pr1.png" | relative_url }})

<input type="checkbox"> Varmista, että PR kohdistuu haarasta *tennis_refactoring* haaraan *main*. 

<input type="checkbox"> Kirjoita PR:lle kuvaus. Voit ottaa esim. [täältä](https://medium.com/@jmanuellugo96/how-to-write-an-awesome-pull-request-pr-description-bdd2c6e48418) tai [täältä](https://www.hackerone.com/blog/writing-great-pull-request-description) mallia kuvaukselle.

![]({{ "/images/pr22.png" | relative_url }})

<input type="checkbox"> Pyydä GitHub Copilotia tekemään PR:llesi koodin katselmointi. Valitse ennen katselmoinnin pyytämistä Copilotin nimen vierestä löytyvästä valikosta katselmoinnin tasoksi _Lite_ ja paina sen jälkeen _Request_:

![]({{ "/images/pr-lite.png" | relative_url }})

<input type="checkbox"> Odota katselmoinnin valmistumista, siihen menee yleensä muutamia minuutteja

<input type="checkbox"> Käy katselmoinnin tulos läpi. Hyväksy ehdotetut muutokset halutessasi ja merkitse kommentit selvitetyiksi (_resolve conversation_)

Kommenttien yhteydessä on myös nappi _Fix with Copilot_, joka käynnistää pilviagentin tekemään korjauksen. Tämä kuluttaa AI credit -kiintiötä, joten tee korjaukset mieluummin itse tai hyväksy Copilotin ehdottamat muutokset suoraan.

<input type="checkbox"> Mergeä Pull request main-haaraan

<input type="checkbox"> Kirjoita raportti katselmoinnista palautusrepositorioon hakemistoon _viikko5_ talletettavaan tiedoston _review.md_

Kerro raportissa
- Mitä huomioita Copilot teki koodistasi
- Olivatko ehdotetut muutokset hyviä
- Kuinka hyödylliseksi koit Copilotin tekemän katselmoinnin
- Huomasiko Copilot jotain, minkä olisit itse jättänyt huomaamatta? Entä jäikö siltä jotain oleellista huomaamatta?

Lisää aiheesta [GitHubin dokumentaatiossa](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-code-review)

### 6. Good vibe with warehouses [tekoäly]

Palataan jälleen viikolta 1 tutun *Ohtuvaraston* pariin. Tehtävässä on tarkoitus saada GitHubin pilviagentti ([Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)) koodaamaan Ohtuvarastolle web-käyttöliittymä, esim. Flask-sovelluskehystä käyttäen

<input type="checkbox"> Varmista, että Ohtuvarastosta on GitHubissa ajantasainen versio!

<input type="checkbox"> Tee repositorioosi [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue), jossa kuvaat mahdollisimman tarkasti minkälaisen sovelluksesta haluat:

![]({{ "/images/issue0.png" | relative_url }})

Pidä sovelluksen laajuus pienenä, sillä pilviagentin AI credit -kiintiön kulutus kasvaa tehtävän koon mukana. Riittää, että sovelluksella voi
- luoda useita varastoja (nimi ja tilavuus)
- listata varastot saldoineen
- lisätä varastoon tavaraa ja ottaa sieltä tavaraa

Varastojen muokkaamista, poistamista tai muita lisäominaisuuksia ei tässä tehtävässä tarvita. Myös mahdolliset käytettävät kirjastot kuten Flask kannattaa mainita kuvauksessa.

Copilot käyttää issuen kuvausta promptina, joten kuvauksen laatuun kannattaa panostaa. Voit kirjoittaa kuvauksen esim. [viikon 3 tehtävän 8](/tehtavat3/#8-agentti-ja-hyväksymistestit-tekoäly) tapaan user storyina, joilla on selkeät hyväksymiskriteerit. Pyydä kuvauksessa myös automatisoituja testejä.

> **Jos AI credit -kiintiö loppuu:** Jos AI credit -kiintiösi on loppumassa tai loppuu kesken tehtävän, voit tehdä tehtävän myös VS Coden agenttitilassa. Tämä on todennäköisesti kevyempää, sillä agentti suorittaa komennot omalla koneellasi eikä GitHub Actionsissa, ja voit pysäyttää sen, jos se lähtee väärään suuntaan. Tee tällöin seuraavasti:
> - tee issue kuten alla on neuvottu
> - luo uusi haara, esim. `git checkout -b web-ui`
> - anna issuen kuvaus agentille promptina VS Codessa
> - käy agentin tekemät muutokset läpi, commitoi ja pushaa haara GitHubiin
> - tee haarasta pull request, ja kirjoita sen kuvaukseen `Fixes #<issuen numero>`
> - tee pull requestille oma katselmointi kuten alla on neuvottu, mutta pyydä katselmoinnin muutokset agentilta VS Codessa ja pushaa ne samaan haaraan
>
> Pilviagentin seuraamiseen liittyvät askeleet voit tällöin ohittaa.

<input type="checkbox"> Assignaa issue Copilotille:

![]({{ "/images/issue1.png" | relative_url }}){:height="130px" }

Copilotin valitseminen avaa ikkunan _Assign agent to issue_:

![]({{ "/images/robot0.png" | relative_url }}){:height="300px" }

Ikkunassa voi antaa agentille lisäohjeita (_Optional prompt_) sekä valita repositorion, haaran, josta työ aloitetaan, käytettävän agentin ja mallin (_Auto_). Oletusasetukset riittävät, ja lisäohjekentän voi jättää tyhjäksi, sillä issuen kuvaus toimii agentin spesifikaationa. Copilot Student -versiossa malli valitaan joka tapauksessa automaattisesti.

<input type="checkbox"> Käynnistä agentti painamalla _Assign_

Copilot avaa työskentelyään varten draft-tilaisen pull requestin, jonka kuvausta se päivittää työn edetessä.

Voit tarkkailla Copilotin työskentelyä esim. pull requestin sivulta (välilehti Pull requests) napilla "View session". Session löytää myös repositorion välilehdeltä _Agents_ sekä issuen sivulta.

Session-näkymästä näet, mitä Copilot tekee. Se aloittaa pystyttämällä itselleen ympäristön, eli kloonaa repositorion ja käynnistää muutaman [MCP-palvelimen](/genai/#mcp-eli-model-context-protocol), joiden avulla se saa käyttöönsä lisätyökaluja, esim. mahdollisuuden käyttää sovellusta selaimella. Tämän jälkeen Copilot tutustuu projektiin ja alkaa toteuttaa muutoksia:

![]({{ "/images/robot2.png" | relative_url }})

Näkymän yläosassa näkyy myös session käyttämä malli sekä tähän mennessä kulunut määrä AI creditejä. Kuvan noin 7 minuutin sessio kulutti 3 AI creditiä.

<input type="checkbox"> Odota kunnes Copilot on valmis

Itselläni Copilotilla meni työhön noin 7 minuuttia. Tiedät Copilotin olevan valmis seuraavista merkeistä:
- session näkymässä Copilotin työvaiheen nimen perässä (heti tehtävän aloitusviestin alla) näkyy vihreä väkänen ja työhön kulunut aika, yllä olevassa kuvassa ✓ 7m 18s
- Copilot pyytää sinulta katselmointia: pull requestin sivun yläosaan ilmestyy keltainen ilmoitus _Copilot requested your review on this pull request_, ja nimesi näkyy kohdassa _Reviewers_. Saat pyynnöstä myös GitHub-ilmoituksen
- pull requestin kuvaus on päivittynyt yhteenvedoksi tehdyistä muutoksista
- pull requestin aikajanalle on tullut merkintä _Copilot finished work on behalf of ..._

Valmis pull request näyttää esim. seuraavalta:

![]({{ "/images/robot11.png" | relative_url }})

Pull requestin kuvauksesta näet, mitä Copilot teki ja miten sovellus käynnistetään. Copilotin luoman koodin näet välilehdeltä _Files changed_.

<input type="checkbox"> Pull request on edelleen draft-tilassa. Muuta sen tilaa painamalla nappia _Ready for review_. Nappi löytyy _Conversation_-välilehden alaosasta. Vaihtoehtoisesti voit painaa pull requestin sivun yläoikealla olevaa nappia _Not ready_ ja valita avautuvasta paneelista _Ready for review_

<input type="checkbox"> Hae pull requestin koodi omalla koneellasi

Tämä tapahtuu komennoilla `git fetch` ja `git checkout`:

```
$ git fetch
remote: Enumerating objects: 38, done.
remote: Counting objects: 100% (36/36), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 25 (delta 9), reused 18 (delta 5), pack-reused 0 (from 0)
Unpacking objects: 100% (25/25), 13.12 KiB | 206.00 KiB/s, done.
From github.com:mattiluukkainen/ohtuvarasto26
 * [new branch]      copilot/add-web-interface-for-warehouses -> origin/copilot/add-web-interface-for-warehouses
$ git checkout copilot/add-web-interface-for-warehouses
branch 'copilot/add-web-interface-for-warehouses' set up to track 'origin/copilot/add-web-interface-for-warehouses'.
Switched to a new branch 'copilot/add-web-interface-for-warehouses'
```

Branchin nimen saat kopioitua Pull requestin sivulta.

<input type="checkbox"> Varmista, että koodi toimii

Sovelluksen käynnistysohje löytyy projektin README-tiedostosta, jota Copilot on päivittänyt. Ohje on myös pull requestin kuvauksessa.

<input type="checkbox"> Tutustu Copilotin tekemään koodiin omalla koneellasi VS Codessa. Jos vastaan tulee jotain, mitä et ymmärrä, esim. tuntematon kirjasto, Flaskin toimintaperiaate tai testien rakenne, pyydä Copilotia selittämään asia. Käytä tähän chatin _Ask_-tilaa (valitaan chat-ikkunan alareunan valikosta, ks. tarvittaessa [tämä](/genai/#jos-valikossa-on-vain-agent)), jolloin Copilot vastaa kysymyksiin muuttamatta koodia

_Katselmoinnin tekeminen edellyttää, että ymmärrät mitä koodi tekee. Agentin tuottama koodi ei ole omaa koodia, joten sen tarkastamisessa tarvitaan hieman vaivannäköä._

<input type="checkbox"> Tee sovellukselle katselmointi GitHubissa

Pääset tekemään katselmoinnin Pull requestin sivun yläoikealla olevasta napista "Add your review". Saatat joutua uudelleenlataamaan sivun, jotta nappi ilmestyy näkyviin

<input type="checkbox"> Vaadi katselmoinnissa jotain muutoksia tai laajennuksia sovellukseen:

![]({{ "/images/issue5.png" | relative_url }}){:height="450px" }

Kokoa kaikki muutospyynnöt samaan katselmointiin, sillä jokainen pyyntö käynnistää uuden agenttisession, joka kuluttaa AI credit -kiintiötä. Yksi korjauskierros riittää.

Valitse siis lomakkeelta _Request changes_. **Kommenteissa tulee mainita [@copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github), jotta Copilot suostuu tekemään muutokset**

<input type="checkbox"> Seuraa jälleen Copilotin edistymistä napilla "View session"

<input type="checkbox"> Varmista vielä omalla koneellasi, että koodi toimii muutosten jälkeen

Copilot pushaa muutokset samaan haaraan, jonka olet jo hakenut koneellesi. Saat muutokset omalle koneellesi komennolla `git pull`, kun olet kyseisessä haarassa (tarkista tarvittaessa komennolla `git status`).

<input type="checkbox"> Kun olet tyytyväinen mergeä Pull request main-haaraan

<input type="checkbox"> Viikolla 1 tehty GitHub Actions -työnkulku käynnistyy, kun main-haaraan pushataan, eli nyt mergen jälkeen. Varmista, että CI menee läpi. Jos Copilot on muokannut työnkulkua, esim. lisännyt siihen testien suorittamisen, tarkista myös, että muutokset ovat järkeviä

<input type="checkbox"> Kirjoita raportti katselmoinnista palautusrepositorioon hakemistoon _viikko5_ talletettavaan tiedoston _vibe.md_

Kerro raportissa
- Päätyikö Copilot toimivaan ja hyvään ratkaisuun
- Miten varmistit, että ratkaisu toimii?
- Tekikö agentti testit, ja olivatko ne hyviä?
- Oliko koodi selkeää
- Opitko jotain uutta Copilotin tekemää koodia lukiessasi

Tässä erittäin yksinkertaisessa tapauksessa [vibekoodaus](/genai/#vibe-coding-vs-hallittu-agenttinen-ohjelmistokehitys) saattaa tuottaa hämmästyttävänkin hyvän lopputuloksen. Tilanne on kuitenkin aivan erilainen todellisen, isomman järjestelmän kanssa. Pelkkä vibetys, eli haluttavan toiminnallisuuden kuvailu, ei useimmiten riitä siihen, että ulos saadaan toimiva ja robusti ratkaisu.

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
