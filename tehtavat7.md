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

**Tämän viikon tehtävät 3-7 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, hakemiston viikko7 sisälle. Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät.

Katso tarkempi ohje palautusrepositorioita koskien [täältä](/tehtavat1#teht%C3%A4vien-palautusrepositoriot).

{% include checkbox_reset.md %}

### 1. Git: stash [versionhallinta]

_Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät_

<input type="checkbox"> Lue <https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning> kohtaan _Creative stashing_ asti, tai hanki muualta vastaavat tiedot.

Oletetaan että olet repositoriossa, jossa on ainakin kaksi branchia: main ja jokin toinen (kutsutaan sitä tässä nimellä **experimental**).

<input type="checkbox"> Ollessasi main-branchissa tee branchissa oleviin tiedostoihin muutoksia, joita lisäät staging-alueelle ja joitain muutoksia joita et vielä lisää. 

<input type="checkbox"> Varmista, että komennon _git status_ tulos näyttää suunnilleen seuraavalta

```
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   src/index.py

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	README.md
```

Pomosi käskee sinua välittömästi tekemään pari muutosta branchiin **experimental**. Et kuitenkaan halua vielä commitoida mainissa olevia muutoksia. Jos siirryt branchiin **experimental** tekemättä committia, tulee hirveä sotku, sillä muutokset pysyvät muutoksina toisessakin branchissa. **git stash** pelastaa tästä tilanteesta: 

<input type="checkbox"> Stashaa mainissa olevat muutokset

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

![]({{ "/images/lh7-haara.svg" | relative_url }})

Eli sekä main että haara ovat edenneet muutamien commitien verran haarautumisen tapahduttua. Huom: komennolla <code>gitk --all</code> näet kaikki haarat, kokeile!

Yhtäkkiä huomaat, että mainiin tekemäsi asiat eivät olekaan kovin hyviä ja haarassa on paljon parempaa tavaraa, haluaisitkin että haarasta tulisi uusi main. Tämä onnistuu kun menet mainiin ja annat komennon <code>git reset --hard haara</code>

<input type="checkbox"> Varmista että komento toimii oikein
  
  Vanhan main-haarankaan tavarat eivät katoa mihinkään, jos niihin jostain syystä vielä halutaan palata. Vanhaan committiin palaaminen onnistuu, jos commitin id on tiedossa. Jos ei, on olemassa [muutamia keinoja](http://stackoverflow.com/questions/4786972/list-of-all-git-commits) sen selvittämiseksi.

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

Erilliset peliluokat perivät tämän luokan ja erikoistavat sitä tarpeidensa mukaan:

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

### 5. Web-käyttöliittymä agentin avulla [tekoäly]

Tehdään edellisen tehtävän kivi-paperi-sakset-pelille agentin avulla web-käyttöliittymä.

<input type="checkbox"> Tee palautusrepositorioosi kopio projektin hakemistosta nimellä _kivi-paperi-sakset-original_, jolloin edellisen tehtävän jälkeinen tilanne jää talteen, ja commitoi

<input type="checkbox"> Avaa hakemisto _viikko7/kivi-paperi-sakset_ VS Codessa omana workspacenaan ja luo projektille [ohjetiedosto](/genai/#kontekstin-hallinta). Kirjaa ohjetiedostoon ainakin seuraavat asiat:

- kyseessä on uv-projekti
- olemassa olevaa koodia tulee hyödyntää mahdollisimman paljon, eikä pelilogiikkaa saa toteuttaa uudelleen
- jos käytössäsi on Mac, sovellus ei saa käyttää porttia 5000, joka on Macissa varattu

Tässä tehtävässä **ei kannata ehdä välicommiteja**, vaan kaikki tehtävän muutokset commitoidaan vasta lopussa. Näin tehtävän lopussa tehtävä katselmointi kohdistuu kaikkiin agentin tekemiin muutoksiin.

<input type="checkbox"> Toteuta agentin avulla sovellukselle web-käyttöliittymä. Voit joko suunnitella toteutuksen ensin _Plan_-tilassa [viikon 6](/tehtavat6/#7-suunnittele-ensin-toteuta-sitten-tekoäly) tapaan tai antaa tehtävän suoraan _Agent_-tilassa (jos _Plan_ puuttuu valikosta, ks. [tämä](/genai/#jos-valikossa-on-vain-agent))

<input type="checkbox"> Pyydä agenttia tekemään sovellukselle Robot Frameworkilla testit. Varmista, että pystyt suorittamaan testit myös itse.

<input type="checkbox"> Pyydä agenttia muuttamaan peliä siten, että se päättyy, kun jompikumpi osapuoli on saavuttanut viisi voittoa

<input type="checkbox"> Tee peliin vielä agentin avulla jokin haluamasi muutos

<input type="checkbox"> Muuta koodia **ilman agentin apua** siten, että peli päättyy vasta, kun toisella on vähintään kolme voittoa **ja** kahden voiton johto. 

<input type="checkbox"> Pyydä agenttia korjaamaan testit ja laajentamaan niitä ottamaan huomioon uuden lopetuslogiikan

<input type="checkbox"> Käy läpi agentin tekemä koodi sekä testit. Jos koodissa on jotain sinulle vierasta, pyydä agenttia selittämään, mistä on kyse

Tehdään vielä koodille katselmointi uudelleenkäytettävän [prompt-tiedoston](/genai/#prompt-tiedostot-ja-räätälöidyt-agentit) avulla.

Lue ennen jatkamista materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) viikon 7 osuus [Agentin laajentaminen ja räätälöinti](/genai/#agentin-laajentaminen-ja-räätälöinti-viikko-7).

<input type="checkbox"> Luo palautusrepositoriosi juureen tiedosto _.github/prompts/review.prompt.md_, joka ohjeistaa agenttia katselmoimaan koodin ja raportoimaan löydökset. Katselmoinnin tulee tarkastella ainakin seuraavia asioita:

- [osan 4](/osa4/) suunnitteluperiaatteet, erityisesti toisteisuus ja turhat riippuvuudet 
- testien kattavuus ja laatu
- tietoturva, esim. onko sovellus käynnistetty `debug=True`-asetuksella, onko koodissa kovakoodattuja salaisuuksia ja validoidaanko käyttäjän syöte

VS Code etsii prompt-tiedostoja workspacen juuren hakemistosta _.github/prompts_. Koska sovellus on palautusrepositorion alihakemistossa, prompt-tiedosto ei ole käytettävissä, jos VS Codessa on auki pelkkä hakemisto _viikko7/kivi-paperi-sakset_.

Katselmointi kohdistuu _working treehen_, eli tiedostojen nykyiseen tilaan commitoimattomine muutoksineen.

<input type="checkbox"> Jotta agentti huomioi myös uudet tiedostot, lisää ne gitiin komennolla `git add`, mutta älä vielä commitoi niitä

<input type="checkbox"> Avaa VS Codessa koko palautusrepositorio, eli sen juurihakemisto, ja suorita katselmointi chatissa. Kerro komennossa, mikä projekti katselmoidaan, esim. `/review kivi-paperi-sakset`:

![]({{ "/images/juuri.png" | relative_url }})

Kuvassa VS Codessa on avattu palautusrepositorion juurihakemisto (_ohtu-palautus..._), jonka alla on hakemisto _.github/prompts_.

<input type="checkbox"> Korjaa (itse tai agentin avulla) ainakin yksi katselmoinnin löydös ja commitoi lopuksi kaikki tehtävän muutokset

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko7_ talletettavaan tiedostoon _agent.md_

Kerro raportissa
- Päätyikö agentti toimivaan ratkaisuun, ja miten varmistuit siitä?
- Kuinka paljon jouduit ohjaamaan agenttia matkan varrella?
- Kuinka hyviä agentin tekemät testit olivat?
- Onko agentin tekemä koodi ymmärrettävää, ja miten agentti muutti edellisessä tehtävässä tekemääsi koodia?
- Oliko itse tehtävän muutoksen tekeminen helppoa?
- Mitä katselmointi löysi, ja olivatko löydökset aiheellisia?
- Mitä uutta opit?

### 6. MCP [tekoäly]

Tutustutaan tässä tehtävässä [MCP-palvelimiin](/genai/#mcp-eli-model-context-protocol) ensin käyttämällä valmista palvelinta ja sen jälkeen toteuttamalla oma. Lisäksi kokeillaan, miten [skillsillä](/genai/#skillsit) voi ohjeistaa agenttia käyttämään palvelinta.

**Valmiin palvelimen käyttö**

[Playwright MCP](https://github.com/microsoft/playwright-mcp) -palvelimen avulla agentti pystyy käyttämään selainta. Palvelimen käyttö edellyttää, että koneellesi on asennettu [Node.js](https://nodejs.org/) (versio 18 tai uudempi).

<input type="checkbox"> Lisää edellisen tehtävän projektiin tiedosto _.vscode/mcp.json_, jolla Playwright MCP otetaan käyttöön:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

<input type="checkbox"> Käynnistä palvelin (VS Code näyttää tiedoston päällä _Start_-painikkeen) ja varmista chatin työkaluvalikosta (_Configure Tools_), että palvelimen työkalut ovat agentin käytössä

<input type="checkbox"> Käynnistä kivi-paperi-sakset-sovellus ja pyydä agenttia pelaamaan selaimella yksi peli jokaisessa pelimoodissa ja raportoimaan, toimiiko käyttöliittymä odotetusti

Seuraa, mitä agentti tekee selaimessa. Löysikö agentti käyttöliittymästä ongelmia?

**Skills käyttöliittymän testaamiseen**

Edellä agentille piti kertoa, miten käyttöliittymä testataan. Tallennetaan ohjeet [skillsiksi](/genai/#skillsit), jolloin agentti osaa käyttää niitä jatkossa itsenäisesti.

<input type="checkbox"> Luo projektiin tiedosto _.github/skills/ui-testaus/SKILL.md_, joka ohjeistaa agenttia testaamaan sovelluksen käyttöliittymän selaimella. Kirjoita skillsille kuvaus (`description`), josta agentti ymmärtää, milloin skillsiä tulee käyttää. Kirjaa ohjeisiin ainakin

- miten sovellus käynnistetään ja missä portissa se toimii
- mitkä pelimoodit ja tilanteet testataan, esim. pelin päättyminen kahden voiton johtoon ja virheellinen syöte
- miten agentin tulee raportoida tulokset

<input type="checkbox"> Aloita uusi chat-keskustelu ja pyydä agenttia esim. tarkastamaan, toimiiko sovelluksen käyttöliittymä, mainitsematta skillsiä. Tarkista chatista, ottiko agentti skillsin käyttöön. Jos ei ottanut, paranna kuvausta ja kokeile uudelleen

<input type="checkbox"> Tee käyttöliittymään jokin pieni muutos ja pyydä agenttia varmistamaan, että sovellus toimii edelleen. Käyttääkö agentti skillsiä?

**Oma MCP-palvelin**

Toteutetaan seuraavaksi oma MCP-palvelin, jonka avulla agentti voi tehdä kyselyjä NHL-tilastoihin viikon 6 koodia hyödyntäen.

<input type="checkbox"> Kopioi viikon 6 projekti _query-language_ palautusrepositorioosi hakemiston _viikko7_ sisälle ja avaa se VS Codessa omana workspacenaan

<input type="checkbox"> Lisää projektiin MCP-kirjasto komennolla `uv add "mcp[cli]"`

<input type="checkbox"> Luo tiedosto _src/mcp_server.py_, jonka pohjana voit käyttää seuraavaa:

```python
from mcp.server import MCPServer
from statistics import Statistics
from player_reader import PlayerReader

URL = "https://studies.cs.helsinki.fi/nhlstats/2024-25/players.txt"
stats = Statistics(PlayerReader(URL))

mcp = MCPServer("NHL-tilastot")


@mcp.tool()
def top_scorers(how_many: int) -> list[str]:
    """Return the players with the most points in the NHL 2024-25 season."""
    return [str(player) for player in stats.top_scorers(how_many)]


if __name__ == "__main__":
    mcp.run()
```

**Huom:** MCP-kirjasto kehittyy nopeasti. Jos yllä oleva import ei toimi, käytössäsi on kirjaston vanhempi versio, jossa palvelinluokka on `FastMCP` ja se importataan `from mcp.server.fastmcp import FastMCP`.

<input type="checkbox"> Testaa palvelinta [MCP Inspectorilla](https://github.com/modelcontextprotocol/inspector) komennolla `npx @modelcontextprotocol/inspector uv run python src/mcp_server.py` ja varmista, että työkalu `top_scorers` toimii

<input type="checkbox"> Lisää palvelimelle ainakin seuraavat työkalut:

- `team_players`, joka palauttaa annetun joukkueen pelaajat
- `query_players`, joka palauttaa merkkijonona annetun kyselyn tuloksen käyttäen viikon 6 tehtävän 7 `parse`-funktiota. Jos et tehnyt tehtävää 7, voit toteuttaa työkalun esim. siten, että sille annetaan joukkue sekä maalien ja syöttöjen minimimäärät, ja kysely muodostetaan `QueryBuilder`-luokan avulla

Voit toteuttaa työkalut itse tai agentin avulla, mutta varmista, että ymmärrät palvelimen koodin. Kirjoita työkaluille kuvaavat docstringit, sillä agentti päättää niiden perusteella, milloin ja miten työkaluja käytetään. Kirjoita työkalujen kuvauksiin myös kyselykielen syntaksi.

<input type="checkbox"> Tee työkaluille yksikkötestit. Työkalut ovat tavallisia Python-funktioita, joten niitä voi testata normaaliin tapaan

<input type="checkbox"> Rekisteröi palvelin VS Codeen lisäämällä projektiin tiedosto _.vscode/mcp.json_:

```json
{
  "servers": {
    "nhl": {
      "command": "uv",
      "args": ["run", "--directory", "${workspaceFolder}", "python", "src/mcp_server.py"]
    }
  }
}
```

<input type="checkbox"> Käynnistä palvelin ja kysy agentilta luonnollisella kielellä kysymyksiä, joihin se tarvitsee palvelimesi työkaluja, esim. _"Keillä NYR:n pelaajilla on vähintään 10 maalia mutta alle 20 maalia?"_ tai _"Kuka Edmontonin pelaaja teki eniten pisteitä?"_

<input type="checkbox"> Seuraa, mitä työkaluja agentti kutsuu ja millä parametreilla. Kokeile, miten docstringien muuttaminen vaikuttaa agentin toimintaan

<input type="checkbox"> Commitoi muutokset

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko7_ talletettavaan tiedostoon _mcp.md_

Kerro raportissa
- Miten Playwright MCP -palvelimen käyttö sujui, ja löysikö agentti selaimella ongelmia?
- Ottiko agentti skillsin käyttöön ilman erillistä pyyntöä? Miten kuvauksen sanamuoto vaikutti siihen?
- Milloin käyttäisit skillsiä, milloin prompt-tiedostoa ja milloin ohjetiedostoa?
- Osasiko agentti käyttää oman palvelimesi työkaluja oikein?
- Miten docstringit vaikuttivat agentin toimintaan?
- Mitä riskejä liittyisi palvelimeen, joka voisi myös muuttaa dataa, tai joka hakisi dataa epäluotettavista lähteistä?

### 7. Tekoäly ja minä [tekoäly]

Lue ennen tehtävän tekemistä materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) viimeinen luku [Lopuksi](/genai/#lopuksi-viikko-7), joka kokoaa yhteen tekoälyn käyttöön liittyviä riskejä ja tutkimustietoa tekoälyn vaikutuksista ohjelmistotuotantoon.

<input type="checkbox"> Kirjoita hakemistoon _viikko7_ talletettavaan tiedostoon _reflektio.md_ noin sivun (noin 500 sanaa) pohdinta tekoälyn käytöstä ohjelmistokehityksessä

Pohdi kirjoituksessasi ainakin seuraavia:
- Miten tekoälyn käyttösi muuttui kurssin aikana?
- Missä tekoäly auttoi eniten, ja missä siitä oli haittaa?
- Mitkä kurssilla opituista ohjelmistotuotannon käytänteistä ovat mielestäsi tärkeimpiä agentteja käytettäessä?
- Minkälaiset pelisäännöt tekoälyn käytölle sopisit miniprojektisi tiimin kanssa, tai tulevassa työpaikassasi?

### 8. Kurssipalaute

Anna kurssipalautetta osoitteessa <{{site.norppa}}>. Voit antaa palautteen myös kokeen jälkeen. Rasti tähän tehtävään on lupaus siitä, että annat palautteen jossain vaiheessa. **Palautetta voi antaa välillä 9.–26.12.2026**. 

**HUOM** jos menet palautteenanto-osoitteeseen ennen loppupalautteen alkupäivää, näet kurssin "jatkuvan palauten" lomakkeen. Tässä tehtävässä tarkoitetaan kuitenkin 9.12. aukeavaa normaalia loppupalautetta.

{% include submission_instructions.md %}
