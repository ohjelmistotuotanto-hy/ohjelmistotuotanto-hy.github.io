---
layout: page
title: Viikko 7
inheader: no
permalink: /tehtavat7/
---

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission".

**Tämän viikon tehtävät 3-8 palautetaan** jo edellisillä viikoilla käyttämääsi **palautusrepositorioon**, hakemiston viikko7 sisälle. Tehtävien 1 ja 2 ei tarvitse näkyä palautuksessa, riittää kun teet tehtävät.

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

Tehdään sovellus muutamassa vaiheessa. **Commitoi jokaisen vaiheen jälkeen**, näin pääset tarvittaessa palaamaan edelliseen toimivaan tilanteeseen.

<input type="checkbox"> Toteuta agentin avulla sovellukselle web-käyttöliittymä. Voit joko suunnitella toteutuksen ensin _Plan_-tilassa [viikon 6](/tehtavat6/#7-suunnittele-ensin-toteuta-sitten-tekoäly) tapaan tai antaa tehtävän suoraan _Agent_-tilassa (jos _Plan_ puuttuu valikosta, ks. [tämä](/genai/#jos-valikossa-on-vain-agent))

<input type="checkbox"> Pyydä agenttia tekemään sovellukselle Robot Frameworkilla testit. Varmista, että pystyt suorittamaan testit myös itse.

<input type="checkbox"> Pyydä agenttia muuttamaan peliä siten, että se päättyy, kun jompikumpi osapuoli on saavuttanut viisi voittoa

<input type="checkbox"> Tee peliin vielä agentin avulla jokin haluamasi muutos

<input type="checkbox"> Muuta koodia **ilman agentin apua** siten, että peli päättyy vasta, kun toisella on vähintään kolme voittoa **ja** kahden voiton johto. 

<input type="checkbox"> Pyydä agenttia korjaamaan testit ja laajentamaan niitä ottamaan huomioon uuden lopetuslogiikan

<input type="checkbox"> Käy läpi agentin tekemä koodi sekä testit. Jos koodissa on jotain sinulle vierasta, pyydä agenttia selittämään, mistä on kyse

Tehdään vielä koodille katselmointi uudelleenkäytettävän [prompt-tiedoston](/genai/#prompt-tiedostot-ja-räätälöidyt-agentit) avulla.

Lue ennen jatkamista materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) viikon 7 osuuden [Agentin laajentaminen ja räätälöinti](/genai/#agentin-laajentaminen-ja-räätälöinti-viikko-7) johdanto ja luku [Prompt-tiedostot ja räätälöidyt agentit](/genai/#prompt-tiedostot-ja-räätälöidyt-agentit).

<input type="checkbox"> Luo projektiin tiedosto _.github/prompts/katselmointi.prompt.md_, joka ohjeistaa agenttia katselmoimaan projektin koodin ja raportoimaan löydökset. Katselmoinnin tulee tarkastella ainakin seuraavia asioita:

- [osan 4](/osa4/) suunnitteluperiaatteet, erityisesti toisteisuus ja turhat riippuvuudet 
- testien kattavuus ja laatu
- tietoturva, esim. onko sovellus käynnistetty `debug=True`-asetuksella, onko koodissa kovakoodattuja salaisuuksia ja validoidaanko käyttäjän syöte

Agentit ottavat helposti oikoteitä: "katselmointi" tulkitaan pelkkien viimeisimpien muutosten katselmoinniksi, vain osa tiedostoista luetaan, tai työ delegoidaan aliagentille, jolle annetaan alkuperäistä kapeampi tehtävänanto. Kirjaa siksi prompt-tiedostoon myös työskentelytapa ja raportin muoto:

- katselmointi kohdistuu koko projektiin, eikä sitä saa rajata git diffiin eli viimeisimpiin muutoksiin
- agentti muodostaa ensin luettelon projektin kaikista lähdekoodi- ja testitiedostoista ja käy jokaisen läpi
- agentti tekee katselmoinnin itse, eikä delegoi sitä aliagentille
- agentti ei muuta tiedostoja katselmoinnin aikana
- jokainen näkökulma käsitellään omassa osiossaan, ja jos jostain näkökulmasta ei löydy huomautettavaa, se kerrotaan perusteluineen
- jokaisesta löydöksestä kerrotaan tiedosto ja rivit sekä korjausehdotus
- raportin lopussa luetellaan kaikki läpikäydyt tiedostot

Huomioita prompt-tiedoston käytöstä:

- VS Code etsii prompt-tiedostoja workspacen juuren hakemistosta _.github/prompts_, eli tiedosto tulee luoda hakemistoon _viikko7/kivi-paperi-sakset/.github/prompts_, ja VS Codessa tulee olla auki projektin hakemisto
- prompt-tiedostot toimivat ainoastaan VS Coden _Local_-harnessissa (ks. [tämä](/genai/#jos-valikossa-on-vain-agent)). Muissa harnesseissa, kuten _Copilot_, prompt-tiedostoa ei ladata, ja komento ei tee sitä mitä tiedostossa pyydetään

<input type="checkbox"> Valitse Chat-näkymän alalaidasta harnessiksi _Local_ ja suorita katselmointi chatissa komennolla `/katselmointi`

<input type="checkbox"> Tarkista, noudattiko agentti prompt-tiedoston ohjeita: kävikö se läpi kaikki tiedostot, ja onko raportti pyydetyn muotoinen (voit kysyä tätä agentilta). Jos ei, pyydä agenttia parantamaan tarvittaessa prompt-tiedostoa ja tekemään uusi katselmointi.

<input type="checkbox"> Korjaa (itse tai agentin avulla) ainakin yksi katselmoinnin löydös ja commitoi

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko7_ talletettavaan tiedostoon _agent.md_

Kerro raportissa
- Päätyikö agentti toimivaan ratkaisuun, ja miten varmistuit siitä?
- Kuinka paljon jouduit ohjaamaan agenttia matkan varrella?
- Kuinka hyviä agentin tekemät testit olivat?
- Onko agentin tekemä koodi ymmärrettävää, ja miten agentti muutti edellisessä tehtävässä tekemääsi koodia?
- Oliko itse tehtävän muutoksen tekeminen helppoa?
- Noudattiko agentti prompt-tiedoston ohjeita? Miten varmistit sen, ja pitikö prompt-tiedostoa muuttaa?
- Mitä katselmointi löysi, ja olivatko löydökset aiheellisia?
- Mitä uutta opit?

### 6. MCP ja skillsit [tekoäly]

Agentti pystyy toimimaan vain niillä työkaluilla, jotka sillä on käytössään. VS Coden agentti osaa lukea ja muokata tiedostoja sekä suorittaa komentoja terminaalissa, mutta se ei esimerkiksi näe, miltä edellisessä tehtävässä tehty web-käyttöliittymä näyttää selaimessa. [MCP](/genai/#mcp-eli-model-context-protocol) (Model Context Protocol) on avoin standardi, jonka avulla agentille voidaan lisätä uusia työkaluja _MCP-palvelimina_.

Lue ennen aloittamista materiaalin luku [MCP eli Model Context Protocol](/genai/#mcp-eli-model-context-protocol).

Tehtävässä on kaksi osaa:

1. otetaan käyttöön valmis MCP-palvelin, jonka avulla agentti voi käyttää selainta ja testata edellisessä tehtävässä tehdyn web-käyttöliittymän
2. tallennetaan käyttöliittymän testausohjeet [skillsiksi](/genai/#skillsit), jolloin agentti osaa testata käyttöliittymän jatkossa omatoimisesti

Seuraavassa tehtävässä toteutetaan vielä oma MCP-palvelin.

**Valmiin palvelimen käyttö**

[Playwright](https://playwright.dev/) on selainautomaatiotyökalu, jolla voidaan ohjelmallisesti avata web-sivuja, klikkailla niitä ja täyttää lomakkeita. [Playwright MCP](https://github.com/microsoft/playwright-mcp) -palvelin tarjoaa nämä toiminnot agentin työkaluiksi, eli sen avulla agentti pystyy käyttämään selainta kuten ihminen. Palvelimen käyttö edellyttää, että koneellesi on asennettu [Node.js](https://nodejs.org/) (versio 18 tai uudempi).

> **Node.js:n asennus**
>
> Tarkista ensin, onko Node.js jo asennettu, komennolla `node --version`. Jos komento tulostaa version 18 tai uudemman, voit jatkaa. Huomaa, että viikon 3 Robot Framework -tehtävien _robotframework-browser-batteries_ sisältää oman Node.js:n, joka ei ole käytettävissä komentoriviltä, joten Node.js on todennäköisesti asennettava erikseen.
>
> - **Mac:** asenna [Homebrew'lla](https://brew.sh/) komennolla `brew install node` tai lataa asennusohjelma (versio _LTS_) osoitteesta <https://nodejs.org/>
> - **Windows:** lataa asennusohjelma (versio _LTS_) osoitteesta <https://nodejs.org/> tai asenna komennolla `winget install OpenJS.NodeJS.LTS`
> - **Linux:** jakeluiden paketinhallinnan Node.js-versio on usein vanha, joten asenna mieluummin [nvm](https://github.com/nvm-sh/nvm):n avulla: asenna ensin nvm sen ohjeiden mukaan ja sen jälkeen Node.js komennolla `nvm install --lts`
>
> Asennuksen mukana tulee myös komento `npx`, jolla VS Code käynnistää palvelimen. Käynnistä VS Code asennuksen jälkeen uudelleen, jotta se löytää komennot.

VS Code lukee MCP-palvelinten määrittelyt (tiedosto _.vscode/mcp.json_) ja skillsit (hakemisto _.github/skills_) workspacen juuresta, samoin kuin prompt-tiedostot. Työskentele siis edelleen siten, että VS Codessa on auki hakemisto _viikko7/kivi-paperi-sakset_.

<input type="checkbox"> Lisää edellisen tehtävän projektiin tiedosto _.vscode/mcp.json_, jolla Playwright MCP otetaan käyttöön:

```json
{
  "servers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest", "--browser", "chromium"]
    }
  }
}
```

Optio `-y` hyväksyy paketin latauksen automaattisesti, ja `--browser chromium` määrittelee käytettäväksi selaimeksi Playwrightin oman Chromiumin.

<input type="checkbox"> Käynnistä palvelin klikkaamalla tiedostossa palvelimen nimen `"playwright"` yläpuolella näkyvää _Start_-linkkiä, ja varmista chatin työkaluvalikosta (_Configure Tools_, syöttökentän alapalkin työkalukuvake), että palvelimen työkalut ovat agentin käytössä

![]({{ "/images/pieni_nappi.png" | relative_url }}){: width="70%"}

> **Jos palvelin ei käynnisty**
>
> Palvelimen lokit näet valitsemalla _Start_-linkin vierestä _More..._ ja sieltä _Show Output_. Yleisin syy ongelmiin on se, että VS Code ei löydä komentoa `npx`. Näin käy etenkin, jos Node.js on asennettu [nvm](https://github.com/nvm-sh/nvm):llä.
>
> Taustaa: kun komento, kuten `npx`, annetaan ilman polkua, käyttöjärjestelmä etsii sitä ympäristömuuttujan `PATH` luettelemista hakemistoista. `PATH` on kaksoispisteillä (Windowsissa puolipisteillä) erotettu lista hakemistoja, ja sen arvon näet terminaalissa komennolla `echo $PATH`. Jokainen ohjelma perii ympäristömuuttujat ohjelmalta, joka sen käynnisti. Terminaalin `PATH` muodostuu, kun shell lukee käynnistyessään alustustiedostonsa, esim. _~/.zshrc_ tai _~/.bashrc_. Esimerkiksi nvm lisää Node.js:n hakemiston `PATH`:iin juuri alustustiedostossa, joten `npx` löytyy terminaalista. VS Code ja sen käynnistämät MCP-palvelimet eivät kuitenkaan välttämättä saa käyttöönsä samaa `PATH`:ia, jolloin `npx` ei löydy.
>
> Ongelma korjautuu kirjoittamalla konfiguraatioon `npx`:n koko polku. Selvitä polku terminaalissa komennolla `which npx` (Windowsissa `where npx`). Koska `npx` tarvitsee lisäksi komentoa `node` ja muita komentoja, lisää myös kohta `env`, jossa määritellään `PATH`. Kopioi sen arvoksi terminaalin `PATH` komennon `echo $PATH` tulosteesta (Windowsin PowerShellissä `$env:PATH`). Huomaa, että `env`-kohdan `PATH` korvaa koko `PATH`:n, joten mukana on oltava myös järjestelmän omat hakemistot, kuten _/usr/bin_ ja _/bin_. Esim. nvm:ää käyttävällä Macilla konfiguraatio voi näyttää seuraavalta:
>
> ```json
> {
>   "servers": {
>     "playwright": {
>       "type": "stdio",
>       "command": "/Users/kayttaja/.nvm/versions/node/v24.21.0/bin/npx",
>       "args": ["-y", "@playwright/mcp@latest", "--browser", "chromium"],
>       "env": {
>         "PATH": "/Users/kayttaja/.nvm/versions/node/v24.21.0/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
>       }
>     }
>   }
> }
> ```
>
> Esimerkin `PATH` sisältää nvm:n Node.js-hakemiston, Homebrew'n hakemistot (_/usr/local/bin_ ja _/opt/homebrew/bin_) sekä macOS:n järjestelmähakemistot. Korvaa polut omilla poluillasi. Jos palvelin käynnistyy mutta selain ei aukea, asenna Playwrightin Chromium komennolla `npx playwright install chromium`.

<input type="checkbox"> Käynnistä kivi-paperi-sakset-sovellus ja pyydä agenttia pelaamaan selaimella yksi peli jokaisessa pelimoodissa ja raportoimaan, toimiiko käyttöliittymä odotetusti

Seuraa, mitä agentti tekee selaimessa. Löysikö agentti käyttöliittymästä ongelmia?

**Skills käyttöliittymän testaamiseen**

Edellä agentille piti kertoa erikseen, että käyttöliittymä testataan selaimella ja mitä siinä tulee tarkastaa. Jos testaus halutaan tehdä jokaisen käyttöliittymämuutoksen jälkeen, ohjeiden toistaminen joka kerta on työlästä. Ohjeet voisi kirjata ohjetiedostoon, mutta silloin ne olisivat agentin kontekstissa jokaisessa pyynnössä, myös silloin kun niitä ei tarvita.

[Skills](/genai/#skillsit) ratkaisee tämän: agentti näkee aluksi vain skillsin kuvauksen ja lataa varsinaiset ohjeet kontekstiinsa vasta, kun käsillä oleva tehtävä vastaa kuvausta.

Lue ennen jatkamista materiaalin luku [Skillsit](/genai/#skillsit). Tallennetaan käyttöliittymän testausohjeet skillsiksi.

<input type="checkbox"> Luo projektiin tiedosto _.github/skills/ui-testaus/SKILL.md_, joka ohjeistaa agenttia testaamaan sovelluksen käyttöliittymän selaimella

Tiedoston alussa on YAML-muotoinen otsake, jossa määritellään skillsin nimi (`name`) ja kuvaus (`description`). Nimen tulee olla sama kuin skillsin hakemiston nimi, eli tässä _ui-testaus_. Otsakkeen jälkeen tulevat varsinaiset ohjeet tavallisena Markdownina:

```markdown
---
name: ui-testaus
description: 'Testaa sovelluksen web-käyttöliittymän selaimella. Käytä kun käyttöliittymää on muutettu tai kun pyydetään testaamaan käyttöliittymä.'
---
1. Käynnistä sovellus komennolla ...
2. ...
```

Kuvaus on skillsin tärkein osa, sillä agentti näkee aluksi ainoastaan sen ja päättää sen perusteella, milloin skillsiä käytetään. Kuvauksessa kannattaa siis kertoa sekä mitä skills tekee, että missä tilanteissa sitä tulee käyttää.

Kirjaa ohjeisiin ainakin

- miten sovellus käynnistetään ja missä portissa se toimii
- että testaus tehdään selaimella Playwright MCP:n avulla
- mitkä pelimoodit ja tilanteet testataan, esim. pelin päättyminen kahden voiton johtoon ja virheellinen syöte
- miten agentin tulee raportoida tulokset, esim. lista testatuista tilanteista ja niiden lopputuloksista

<input type="checkbox"> Varmista, että VS Code löytää skillsin. Kirjoita chatiin komento `/skills`, joka listaa agentin käytössä olevat skillsit:

![]({{ "/images/skills1.png" | relative_url }})

Projektin omat skillsit näkyvät otsikon _project_ alla. Otsikon _plugin_ alla ovat VS Coden laajennusten mukanaan tuomat skillsit, joten listasi voi näyttää erilaiselta kuin kuvassa. Jos skillsiä ei löydy, tarkista tiedoston sijainti ja nimi sekä se, että otsakkeen `name` vastaa hakemiston nimeä.

<input type="checkbox"> Aloita uusi chat-keskustelu ja pyydä agenttia esim. tarkastamaan, toimiiko sovelluksen käyttöliittymä, mainitsematta skillsiä. Tarkista chatin työvaiheista, latasiko agentti skillsin käyttöönsä. Jos ei ladannut, paranna kuvausta ja kokeile uudelleen

<input type="checkbox"> Skillsin voi käynnistää myös itse kirjoittamalla chatiin `/` ja skillsin nimen. Kokeile komentoa `/ui-testaus`

<input type="checkbox"> Tee käyttöliittymään jokin pieni muutos ja pyydä agenttia varmistamaan, että sovellus toimii edelleen. Käyttääkö agentti skillsiä?

<input type="checkbox"> Commitoi muutokset

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko7_ talletettavaan tiedostoon _mcp.md_

Kerro raportissa
- Miten Playwright MCP -palvelimen käyttö sujui, ja löysikö agentti selaimella ongelmia?
- Ottiko agentti skillsin käyttöön ilman erillistä pyyntöä? Miten kuvauksen sanamuoto vaikutti siihen?
- Milloin käyttäisit skillsiä, milloin prompt-tiedostoa ja milloin ohjetiedostoa?

### 7. Oma MCP-palvelin [tekoäly]

Lue ennen aloittamista materiaalin luku [Oma MCP-palvelin](/genai/#oma-mcp-palvelin).

Valmiiden palvelinten lisäksi MCP-palvelimen voi toteuttaa myös itse. Näin agentin käyttöön saa esim. oman sovelluksen toiminnallisuutta tai yrityksen sisäistä dataa. Toteutetaan oma MCP-palvelin, jonka avulla agentti voi tehdä kyselyjä NHL-tilastoihin viikon 6 koodia hyödyntäen.

Palvelin on tavallinen Python-ohjelma, jonka funktiot merkitään dekoraattorilla `@mcp.tool()`. MCP-kirjasto muodostaa funktioiden tyyppimäärittelyistä ja docstringeistä työkalujen kuvaukset, joiden perusteella agentti päättää, milloin ja miten työkaluja kutsutaan. VS Code käynnistää palvelimen taustalle, ja agentti kommunikoi sen kanssa standardisyötteen ja -tulosteen välityksellä.

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

[MCP Inspector](https://github.com/modelcontextprotocol/inspector) on selainpohjainen työkalu, jolla MCP-palvelinta voi testata ilman agenttia. Inspectorilla voi kutsua palvelimen työkaluja käsin ja nähdä, mitä palvelin agentille tarjoaa: työkalujen nimet, kuvaukset ja parametrit.

<input type="checkbox"> Käynnistä Inspector projektin hakemistossa komennolla

```
npx @modelcontextprotocol/inspector uv run python src/mcp_server.py
```

Komento käynnistää Inspectorin ja avaa sen selaimeen osoitteeseen, joka on muotoa `http://127.0.0.1:6274/?MCP_INSPECTOR_API_TOKEN=...`. Osoitteen lopussa oleva token suojaa Inspectoria siten, että muut koneella ajettavat ohjelmat eivät pääse käyttämään sitä. Jos selain ei aukea itsestään, kopioi osoite tokeneineen terminaalista.

<input type="checkbox"> Yhdistä Inspector palvelimeen

Inspector avautuu _Servers_-välilehdelle, jossa näkyy käynnistyskomennon perusteella määritelty palvelin `uv`. Yhdistä palvelimeen kortin oikeassa yläkulmassa olevasta kytkimestä, jolloin kortissa lukee _Connected_:

![]({{ "/images/mcp1.png" | relative_url }})

Oikeassa reunassa, välilehdellä _Protocol_, näkyvät Inspectorin ja palvelimen väliset [JSON-RPC](https://www.jsonrpc.org/specification)-viestit. Esimerkiksi viesti `tools/list` on pyyntö, jolla client kysyy palvelimelta sen tarjoamat työkalut. Samoja viestejä vaihtavat myös VS Code ja palvelin, kun agentti käyttää palvelinta.

Jos viestien tila jää muotoon _PENDING_, eikä _Tools_-välilehdellä näy työkaluja, lähetä viesti `tools/list` uudelleen sen kortin ↻-kuvakkeesta (kuvassa alempi nuoli).

<input type="checkbox"> Testaa työkalua `top_scorers`

Siirry välilehdelle _Tools_ ja valitse listasta `top_scorers`. Oikealle avautuu työkalun kuvaus, eli funktion docstring, sekä kenttä parametrille _How Many_. Anna parametrille arvo ja paina _Execute Tool_, jolloin työkalun palauttama tulos näkyy alapuolella:

![]({{ "/images/mcp2.png" | relative_url }})

Kuvaus ja parametrit ovat juuri sitä tietoa, jonka perusteella agentti päättää, milloin ja miten työkalua käytetään.

Jos palvelin ei käynnisty tai yhdistäminen epäonnistuu, näet virheilmoituksen oikean reunan välilehdeltä _Console_. Tyypillisiä syitä ovat virhe Python-koodissa tai se, että komento on suoritettu väärässä hakemistossa.

Muista, että palvelin ei saa tulostaa mitään standarditulosteeseen esim. tavallisella `print`-komennolla, sillä tulosteet sotkevat palvelimen ja Inspectorin välisen kommunikaation. Standardivirhevirtaan tulostaminen (`print(..., file=sys.stderr)`) on sen sijaan sallittua.

<input type="checkbox"> Lisää palvelimelle ainakin seuraavat työkalut:

- `team_players`, joka palauttaa annetun joukkueen pelaajat
- `query_players`, joka palauttaa merkkijonona annetun kyselyn tuloksen käyttäen viikon 6 tehtävän 7 `parse`-funktiota. Jos et tehnyt tehtävää 7, voit toteuttaa työkalun esim. siten, että sille annetaan joukkue sekä maalien ja syöttöjen minimimäärät, ja kysely muodostetaan `QueryBuilder`-luokan avulla

Voit toteuttaa työkalut itse tai agentin avulla, mutta varmista, että ymmärrät palvelimen koodin. Kirjoita työkaluille kuvaavat docstringit, sillä agentti päättää niiden perusteella, milloin ja miten työkaluja käytetään. Kirjoita työkalujen kuvauksiin myös kyselykielen syntaksi.

<input type="checkbox"> Rekisteröi palvelin VS Codeen lisäämällä projektiin tiedosto _.vscode/mcp.json_:

```json
{
  "servers": {
    "nhl": {
      "type": "stdio",
      "command": "uv",
      "args": ["run", "--directory", "${workspaceFolder}", "python", "src/mcp_server.py"]
    }
  }
}
```

Jos palvelin ei käynnisty, koska VS Code ei löydä komentoa `uv`, toimi kuten [edellisen tehtävän](#6-mcp-ja-skillsit-tekoäly) Playwright-palvelimen kohdalla, eli kirjoita konfiguraatioon `uv`:n koko polku (`which uv`).

<input type="checkbox"> Käynnistä palvelin ja kysy agentilta luonnollisella kielellä kysymyksiä, joihin se tarvitsee palvelimesi työkaluja, esim. _"Keillä NYR:n pelaajilla on vähintään 10 maalia mutta alle 20 maalia?"_ tai _"Kuka Edmontonin pelaaja teki eniten pisteitä?"_

<input type="checkbox"> Seuraa, mitä työkaluja agentti kutsuu ja millä parametreilla

Agentin tekemät työkalukutsut näkyvät chatissa agentin vastauksen työvaiheiden joukossa, esim. _query_players – nhl (MCP Server)_. Avaamalla työkalukutsun näet, mitä palvelin palautti (_Output_). Kutsun parametrit eivät kuitenkaan välttämättä näy kohdassa _Input_, jossa saattaa olla ainoastaan palvelimen ja työkalun nimi.

Parametrit saa näkyviin lisäämällä palvelimeen lokituksen. Koska palvelin ei saa tulostaa standarditulosteeseen, kirjoitetaan loki tiedostoon:

```python
from pathlib import Path

LOG_FILE = Path(__file__).parent.parent / "mcp.log"

def log(message: str):
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        print(message, file=f)

@mcp.tool()
def team_players(team: str) -> list[str]:
    """..."""
    log(f"team_players(team={team!r})")
    # ...
```

Loki kirjoitetaan projektin juurihakemiston tiedostoon _mcp.log_. Lisää tiedosto myös _.gitignore_:en.

Lokia on kätevintä seurata erillisessä terminaalissa komennolla

```
tail -f mcp.log
```

joka näyttää tiedostoon kirjoitettavat rivit sitä mukaa kun niitä syntyy. Windowsin PowerShellissä vastaava komento on `Get-Content mcp.log -Wait`.

<input type="checkbox"> Kokeile, miten docstringien muuttaminen vaikuttaa agentin toimintaan. Palvelin on käynnistettävä uudelleen muutosten jälkeen, esim. tiedoston _.vscode/mcp.json_ palvelimen nimen yläpuolella näkyvän _Restart_-linkin avulla

<input type="checkbox"> Kirjoita raportti kokemuksistasi hakemistoon _viikko7_ talletettavaan tiedostoon _oma_mcp.md_

Kerro raportissa
- Osasiko agentti käyttää oman palvelimesi työkaluja oikein?
- Miten docstringit vaikuttivat agentin toimintaan?
- Mitä riskejä liittyisi palvelimeen, joka voisi myös muuttaa dataa, tai joka hakisi dataa epäluotettavista lähteistä?

### 8. Tekoäly ja minä [tekoäly]

Lue ennen tehtävän tekemistä materiaalin [Tekoäly ohjelmistotuotannossa](/genai/) viimeinen luku [Lopuksi](/genai/#lopuksi-viikko-7), joka kokoaa yhteen tekoälyn käyttöön liittyviä riskejä ja tutkimustietoa tekoälyn vaikutuksista ohjelmistotuotantoon.

<input type="checkbox"> Kirjoita hakemistoon _viikko7_ talletettavaan tiedostoon _reflektio.md_ noin sivun (noin 500 sanaa) pohdinta tekoälyn käytöstä ohjelmistokehityksessä

Pohdi kirjoituksessasi ainakin seuraavia:
- Miten tekoälyn käyttösi muuttui kurssin aikana?
- Missä tekoäly auttoi eniten, ja missä siitä oli haittaa?
- Mitkä kurssilla opituista ohjelmistotuotannon käytänteistä ovat mielestäsi tärkeimpiä agentteja käytettäessä?
- Minkälaiset pelisäännöt tekoälyn käytölle sopisit miniprojektisi tiimin kanssa, tai tulevassa työpaikassasi?

### 9. Kurssipalaute

Anna kurssipalautetta osoitteessa <{{site.norppa}}>. Voit antaa palautteen myös kokeen jälkeen. Rasti tähän tehtävään on lupaus siitä, että annat palautteen jossain vaiheessa. **Palautetta voi antaa välillä 9.–26.12.2026**. 

**HUOM** jos menet palautteenanto-osoitteeseen ennen loppupalautteen alkupäivää, näet kurssin "jatkuvan palauten" lomakkeen. Tässä tehtävässä tarkoitetaan kuitenkin 9.12. aukeavaa normaalia loppupalautetta.

{% include submission_instructions.md %}
