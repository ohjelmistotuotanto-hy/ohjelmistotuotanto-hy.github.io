---
layout: page
title: Viikko 7
inheader: no
permalink: /tehtavat7/
---

{% include paivitys_kesken.md %}

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 3-5 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, hakemiston viikko7 sisälle. Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

### 1. Git: stash [versionhallinta]

_Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

<input type="checkbox"> Lue <https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning> kohtaan _Creative stashing_ asti, tai hanki muualta vastaavat tiedot.

Oletetaan että olet repositoriossa, jossa on ainakin kaksi branchia: main ja jokin toinen (kutsutaan sitä tässä nimellä **experimental**).

<input type="checkbox"> Ollessasi main-branchissa tee branchissa oleviin tiedostoihin muutoksia, joita lisäät staging-alueelle ja joitain muutoksia joita et vielä lisää. 

<input type="checkbox">  Varmista, että komennon _git status_ tulos näyttää suunnilleen seuraavalta

```
$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   src/index.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	READEME.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Pomosi käskee sinua välittömästi tekemään pari muutosta branchiin **experimental**. Et kuitenkaan halua vielä commitoida mainissa olevia muutoksia. Jos siirryt branchiin **experimental** tekemättä committia, tulee hirveä sotku, sillä muutokset pysyvät muutoksina toisessakin branchissa. **git stash** pelastaa tästä tilanteesta: 

<input type="checkbox"> Stashaa mainissa olevat muutoset

  Kokeile ennen ja jälkeen stash-komennon komentoa <code>git status</code>

<input type="checkbox"> Siirry branchiin **experimental**, tee sinne jokin muutos jonka committaat

<input type="checkbox"> Palaa jälleen mainiin

<input type="checkbox"> Palauta stashatyt muutokset komennolla <code>git stash apply</code>

<input type="checkbox"> Varmista että muutokset palasivat

Kuten huomaat, staging-alueelle jo lisätty muutos ei palaa staging-alueelle, vaan joudut lisäämään sen uudelleen. Jos edellisessä komento olisi annettu muodossa <code>git stash apply --index</code>, olisi tilanne palautunut täysin ennalleen.

### 2. Git: branchin "siirtäminen" [versionhallinta]

_Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

<input type="checkbox"> Tee repoosi branchi nimeltä **haara**

<input type="checkbox">  Tee mainiin ja haaraan committeja siten että saat aikaan seuraavankaltaisen tilanteen:

```
    main
__/
  \_____haara
```

Eli sekä main että haara ovat edenneet muutamien commitien verran haarautumisen tapahduttua. Huom: komennolla <code>gitk --all</code> näet kaikki haarat, kokeile!

Yhtäkkiä huomaat, että mainiin tekemäsi asiat eivät olekaan kovin hyviä ja haarassa on paljon parempaa tavaraa, haluaisitkin että haarasta tulisi uusi main. Tämä onnistuu kun menet mainiin ja annat komennon <code>git reset --hard haara</code>

<input type="checkbox"> Varmista että komento toimii oikein
  
  Vanhan main-haarankaan tavarat eivät katoa mihinkään, jos niihin jostain syystä vielä halutaan palata. Vanhaan committiin palaaminen onnistuu, jos commitin id on tiedossa -- jos ei, on olemassa [muutamia keinoja](http://stackoverflow.com/questions/4786972/list-of-all-git-commits) sen selvittämiseksi.

### 3. ja 4. (kahden rastin tehtävä) KPS yksin- ja kaksinpeli

[Kurssirepositorion]({{site.python_exercise_repo_url}}) hakemistosta _viikko7/kivi-paperi-sakset_ löytyy tutun pelin tietokoneversio.

<input type="checkbox"> Kopioi projekti palautusrepositorioosi, hakemiston viikko7 sisälle.

- Ohjelmassa on kolme pelimoodia: ihminen vs. ihminen, ihminen vs. yksinkertainen tekoäly ja ihminen vs. monimutkainen tekoäly
- Koodi sisältää runsaat määrät copy pastea, muutenkaan oliosuunnittelun periaatteet eivät ole vielä alkuperäisellä ohjelmoijalla olleet hallussa

<input type="checkbox"> Poista koodista kaikki toisteisuus ja tee siitä rakenteellisesti materiaalin [osan 4](/osa4) hengessä oikeaoppinen

- `pelaa`-metodi tulee toteuttaa [template-metodina](/osa4#suunnittelumalli-template-method-viikko-6)
- Sopivan peliolion (kaksinpeli, helppo yksinpeli, vaikea yksinpeli) luominen tulee toteuttaa staattisen tehdasmetodin, tai funktion avulla
- Pääohjelmalla ei saa olla riippuvuuksia konkreettisiin pelin toteuttaviin luokkiin

Jos teet tehtävän mielestäsi kaikkien tyylisääntöjen mukaan, merkkaa 2 rastia, jos ratkaisusi ei ole kaikin osin tyylikäs, merkkaa yksi rasti.

**Vinkki:** eräs tapa lähteä liikkeelle on muodostaa yliluokka `KiviPaperiSakset`, joka sisältää kaikille kolmelle pelityypille yhteisen koodin:

```python
class KiviPaperiSakset:
    def pelaa(self):
        tuomari = Tuomari()

        ekan_siirto = self._ensimmaisen_siirto()
        tokan_siirto = self._toisen_siirto(ekan_siirto)

        while self._onko_ok_siirto(ekan_siirto) and self._onko_ok_siirto(tokan_siirto):
            # ...

        print("Kiitos!")
        print(tuomari)

    def _ensimmaisen_siirto(self):
        return input("Ensimmäisen pelaajan siirto: ")

    # tämän metodin toteutus vaihtelee eri pelityypeissä
    def _toisen_siirto(self, ensimmaisen_siirto):
        raise Exception("Tämä metodi pitää korvata aliluokassa")

    def _onko_ok_siirto(self, siirto):
        return siirto == "k" or siirto == "p" or siirto == "s"
```

Erilliset pelit sitten perivät luokan ja erikoistavat sitä tarpeidensa mukaan:

```python
# luokka perii luokan KiviPaperiSakset
class KPSPelaajaVsPelaaja(KiviPaperiSakset):
    # toteutetaan metodi pelityypin mukaisesti
    def _toisen_siirto(self, ensimmaisen_siirto):
        tokan_siirto = input("Toisen pelaajan siirto: ")

        return tokan_siirto
```

**HUOM** riippuen siitä miten tehtävän teet, on mahdollista että törmäät seuraavaan virheeseen:

```
ImportError: cannot import name 'KiviPaperiSakset' from partially initialized module 'kivi_paperi_sakset' (most likely due to a circular import) (/Users/mluukkai/opetus/ohtu2022/ohtu-s22-palautukset/viikko7/kivi-paperi-sakset/src/kivi_paperi
```

Syynä itselläni oli se, että importtasin seuraavasti 

Tiedostossa _kivi_paperi_sakset.py_:

```python
from kps_pelaaja_vs_pelaaja import KPSPelaajaVsPelaaja

# ...

class KiviPaperiSakset:
    # ...

# tehdasfunktio, tarvitsee importteja
def luo_peli(tyyppi):
    if tyyppi == 'a':
        return KPSPelaajaVsPelaaja()
    if tyyppi == 'b':
        return KPSTekoaly()
    if tyyppi == 'c':
        return KPSParempiTekoaly()

    return None
```

ja tiedostossa _kps_pelaaja_vs_pelaaja.py_:

```python
from kivi_paperi_sakset import KiviPaperiSakset


class KPSPelaajaVsPelaaja(KiviPaperiSakset):
    # ...
```

Kaksi tiedostoa päätyi importtaamaan toisensa, eli syntyi <i>circular import</i>, jota Python ei osaa hanskata. Itse ratkaisin ongelman määrittelemällä tehdasfunktion _luo_peli_ omassa tiedostossaan.

### 5. AI Agent in action

Tämän tehtävän tekeminen edellyttää, että käytössäsi on [VS Coden GitHub copilot](https://code.visualstudio.com/docs/copilot/chat/copilot-chat#_builtin-chat-modes). Voit toki tehdä tehtävän myös jollain muulla AI-avusteisella koodaustyökalulla tai ilman AI:ta.

Jatketaan edellisen tehtävän koodin parissa.

<input type="checkbox">  Ennen kun koodiin alkaa tulla muutoksia, tee palautusrepositorioosi kopio projektin sisältävästä hakemistosta. Anna kopiolle nimi _kivi-paperi-sakset-original_

<input type="checkbox">  Avaa Copilotin Chat-ikkuna Agent-moodissa:

![]({{ "/images/agent.png" | absolute_url }}){:height="450px" }

Tehdään sovellus muutamassa vaiheessa

<input type="checkbox">  Yritä saada agentti rakentamaan sovelluksellesi Web-käyttöliittymä

- muistita agenttia, että kyseessä on Poetry-projekti
- komenna agenttia käyttämään mahdollisimman paljon olemasaolevaa koodia
- ohjelma kannattaa suorittaa siten, että pyydät agentin käynnistämään sen, näin agentti osaa korjata koodin jos se ei jostain syystä käynnisty
- jos agentti luo sovelluksen joka käyttää porttia 5000 ja käytössäsi on Mac, pyydä agentilta jonkin muun portin käyttöä, 5000 on Macissa ehkä varattu portti

<input type="checkbox"> Kun sovellus toimii, käske agenttia tekemään sovellukselle automatisoidut testit. Pyydä agenttia myös varmistamaan, että testit menevät läpi

<input type="checkbox"> Pyydä agenttia muuttamaan sovellusta (ja testejä) siten, että jokaisessa peliä pelataan niin kauan kunnes toinen osapuoli on saavuttanut 5 voittoa.

<input type="checkbox"> Tee peliin vielä agentin avulla joku haluamasi muutos.

<input type="checkbox"> Muuta vielä koodia ilman agentin apua siten, että pelit päättyvät kun 3 toinen pelaajista saavuttaa kolme voittoa.

<input type="checkbox"> Varmista, että myös testit toimivat edelleen.

<input type="checkbox"> Käy läpi agentin tekemä koodi. Jos koodissa on jotain itsellesi vierasta, pyydä agenttia selittämään mistä on kyse

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko7_ talletettavaan tiedoston _agent.md_

Kerro raportissa
- Päätyikö Agentti toimivaan ratkaisuun?
- Kuinka paljon jouduit antamaan agentille komentoja matkan varrella?
- Onko agentin tekemä koodi ymmärrettävää?
- Miten Agentti on muuttanut edellisessä tehtässä tekemääsi koodia?
- Mitä uutta opit?

### 6. Kurssipalaute

Anna kurssipalautetta osoitteessa <{{site.norppa}}>. Voit antaa palautteen myös kokeen jälkeen. Rasti tähän tehtävään on lupaus siitä, että annat palautteen jossain vaiheessa. **Palautetta voi antaa välillä 10-27.12.2024**. 

**HUOM** jos menet palautteenanto-osoitteeseen ennen loppupalautteen alkupäivää, näet kurssin "jatkuvan palauten" lomakkeen. Tässä tehtävässä tarkoitetaan kuitenkin 10.12. aukeavaa normaalia loppupalautetta.

{% include submission_instructions.md %}
