---
layout: page
title: Viikko 1
inheader: no
permalink: /tehtavat1
---

{% include miniproj_ilmo.md %}

{% include laskari_info.md part=1 %}

Tämän viikon tehtävissä harjoitellaan ensin muutaman tärkeän ohjelmistokehityksen työkalun (_komentorivi, versionhallinta, riippuvuuksien hallinta, automatisoitu testaus, jatkuva integraatio_) käyttöä.

Laskarien lopuksi harjoitellaan _riippuvuuksien injektointia_, joka on melko simppeli mutta erittäin käyttökelpoinen tekniikka, jonka avulla sovellusten testattavuutta on mahdollista parantaa.

### Typoja tai epäselvyyksiä tehtävissä?

{% include typo_instructions.md %}

{% include norppa.md %}

### Tehtävien palauttaminen

Tehtävät palautetaan GitHubiin, sekä merkitsemällä tehdyt tehtävät palautussovellukseen <{{site.stats_url}}> välilehdelle "my submission". Viikon tehtävät palautetaan yhdellä kertaa, eli tee merkintä palautussovellukseen vasta kun olet valmis viikon tehtävien osalta.

Käytännössä tällä viikolla tehdään palautusta varten **kaksi erillistä** GitHub-repositoriota:

- ensimmäinen (nimeltään ohtuvarasto) tehtäviä 2-13 varten ja
- toinen tehtäviä 14-17 varten (käytetään tästä nimitystä **palautusrepositorio**)

Repositorioista jälkimmäistä (johon tehtävät 14-17 palautetaan) käytetään myös muiden viikkojen tehtävien palautusrepositoriona.

Jos et vielä tiedä mikä on GitHub ja repositorio, niin pian opit.

Tehtäviä 0 ja 1 ei varsinaisesti palauteta minnekään. Tehtävää 0 ei myöskään lasketa varsinaiseksi tehtäväksi, sen tekeminen ei vaikuta laskaripisteisiin.

{% include checkboxit.md %}

### 0. Orientaatio

<input type="checkbox"> Lue nyt vielä kerran mitä tehtävien palauttamisesta sanotaan. Tällä viikolla siis tehtävät palautetaan kahteen repositorioon...

### 1. Komentorivi

**Tätä tehtävää ei palauteta mihinkään**

Graafisten käyttöliittymien olemassaolosta huolimatta ohjelmistoalalla on edelleen erittäin tärkeää hallita komentorivin eli terminaalin käyttö. Itse asiassa komentorivin merkitys on jopa nousussa.

<input type="checkbox"> Varmista, että osaat käyttää "riittävästi" komentoriviä (ks. alla oleva lista).

Jos osaamisessasi on puutteita, kertaa haluamastasi resurssista. Muutama esimerkki:

- Kurssin Tietokone työvälineenä [komentorivimateriaali](https://tkt-lapio.github.io/komentorivi/) (suomeksi)
- Software Carpentryn [The Unix Shell](https://swcarpentry.github.io/shell-novice/) -oppaan osat _2. Navigating Files and Directories_ ja _3. Working With Files and Directories_. Osat kattavat lähes kaikki alla luetellut asiat, ja niissä on runsaasti harjoituksia. Oppaan [asennusohjeet](https://swcarpentry.github.io/shell-novice/#setup) neuvovat myös Windows-käyttäjiä
- Ubuntun [The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners) -tutoriaali, noin tunnin mittainen käytännönläheinen johdatus
- Generoi materiaalia tekoälyn avulla, ks. vihje tehtävän lopussa

Jos perusasiat ovat jo hallussa ja haluat syventää osaamistasi, kannattaa katsoa MIT:n [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) -kurssin ensimmäinen luento _Course Overview + Introduction to the Shell_. Komentorivin käyttöä voi harjoitella myös pelillisesti [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) -tehtäväsarjan alkupään tasoilla.

Tämän tehtävän jälkeen sinun tulisi hallita seuraavat asiat:

- Käsitteet
  - Root directory
  - Home directory
  - Parent directory
  - Child directory
  - Working directory
  - `..`, `~` ja `*`
- Ja osata käyttää komentoja
  - `pwd`
  - `cd`
  - `ls`, `ls -a`, `ls -l`, `ls -t`
  - `mkdir`
  - `touch`
  - `cp`
  - `rm`, `rm -r`
  - `mv`

Tulet tarvitsemaan komentorivin käyttötaitoja tällä kurssilla ja muutenkin opinnoissasi.

Tehtävää ei palauteta mitenkään. Voit merkitä tehtävän tehdyksi kun osaat yllä luetellut asiat.

<details markdown="1" class="vihje">
<summary markdown="span">Vihje: tekoälyn hyödyntäminen tehtävässä</summary>

[Tehtävässä](/tehtavat1#1-komentorivi) on aiheena riittävän komentoriviosaamisen varmistaminen. Tehtävässä annetaan linkki muutamaan materiaaliin. Niiden läpikäymisen sijaan voi pyytää tekoälyltä, esim. CurreChatilta tai Copilot Chatilta, sopivaa oppimateriaalia aiheesta. Otetaan osa tehtävänannosta ja muotoillaan sopiva prompti:

![]({{ "/images/cc1.png" | relative_url }}){: width="70%"}

AI luo oppimateriaalin:

![]({{ "/images/cc2.png" | relative_url }})

AI:ta voi myös pyytää generoimaan tehtäviä aiheesta:

![]({{ "/images/cc3.png" | relative_url }})

Kysymysten yhteyteen tulleet vihjeet spoilaavat ehkä liikaa. AI:ta voi toki pyytää poistamaan vihjeet.

Omat vastaukset voi tietysti antaa AI:n tarkastettavaksi. Kuten aina, myös oppimateriaalia ja tehtäviä generoitaessa on mahdollista, että AI hallusinoi ja kertoo mitä sattuu. Linuxin komentorivin kaltaisesta aihepiiristä kysyttäessä hallusinoinnin todennäköisyys ei ole kovin korkea, ja esim. hallusinoidut komentojen virheelliset muodot selviävät nopeasti kokeillessa.

</details>

### 2. GitHubiin [versionhallinta]

<input type="checkbox"> Jos sinulla ei jostain syystä ole vielä tunnusta [GitHubiin](https://github.com), luo se nyt.

<input type="checkbox"> Luo GitHubiin repositorio nimellä _ohtuvarasto_

**Tämän tehtävän lisäksi tehtävät 3-13 tehdään nyt luotuun ohtuvarasto-repositorioon.**

- Klikkaa yläpalkin oikeassa reunassa olevaa "Create a new repo"-ikonia
- **Laita rasti** kohtaan "Add a README file"

![]({{ "/images/repo26.png" | relative_url }})

<input type="checkbox"> **Jos et ole vielä luonut** koneellesi _ssh-avainta_ ja lisännyt sitä GitHubiin tee se nyt

- Ohje [täällä](/avain)

Näin pystyt käyttämään GitHubia ilman salasanan syöttämistä koneelta, josta juuri luodun avaimen salainen pari löytyy

<input type="checkbox"> Jos et ole jo aiemmin niin tehnyt, konfiguroi nimesi ja email-osoitteesi paikallisen koneesi Git:iin antamalla komennot:

```bash
git config --global user.name "Your Name"
git config --global user.email my.address@gmail.com
```

Oletuseditoriksi kannattaa Linuxilla ja macOS:lla konfiguroida _nano_:

```bash
git config --global core.editor nano
```

ja Windowsilla _notepad_:

```bash
git config --global core.editor notepad
```

Tosin jos olet vimin käyttäjä, voit jättää edellisen tekemättä.

<input type="checkbox"> Kloonaa nyt GitHubiin tehty repositorio **paikalliselle koneelle**. Tämä tapahtuu antamalla komentoriviltä komento:

```bash
git clone git@github.com:omatunnustahan/ohtuvarasto.git
```

missä komennon `git clone` parametrina on repositoriosi sivulla näkyvä merkkijono (huomaa, että formaatin on oltava SSH):

![]({{ "/images/lh1-2-22.png" | relative_url }})

Nyt paikalliselle koneellesi syntynyt hakemisto _ohtuvarasto_ (hakemiston nimi on sama kuin repositoriosi), joka on GitHubissa olevan repositorion klooni.

### GitHub Education

{% include copilot_info.md %}

### 3. Gitin alkeet [versionhallinta]

Olet jo todennäköisesti käyttänyt Gitiä aiemmilla kursseilla. Tässä tehtävässä harjoitellaan seuraavia komentoja:

- `git add`
- `git commit`
- `git status`
- `git checkout -- file`
- `git reset HEAD`

**Jos et vielä hallitse komentoja**, käy läpi kurssin Ohjelmistotekniikka
[Git-tutoriaali](/versionhallinta). Pelkän lukemisen sijaan kannattanee myös tehdä itse tutoriaalin Git-operaatiot.

Lisää Git-ohjeita löytyy runsaasti internetistä, esim:

- [Pro Git -opas](http://git-scm.com/book), kannattaa lukea näin alkuun luku 2
- [GitHubin helpit](https://help.github.com/articles/)
- <https://www.atlassian.com/git/tutorials>
- <https://we.riseup.net/debian/git-development-howto>
- <http://www.ralfebert.de/tutorials/git/>

**Tee nyt seuraavat:**

<input type="checkbox"> Mene edellisessä tehtävässä luotuun repositorion klooniin (eli komennon `git clone` luomaan hakemistoon)

<input type="checkbox"> Lisää ja committaa repositorioon kaksi tiedostoa ja kaksi hakemistoa, joiden sisällä on tiedostoja

- Muista hyödyllinen komento `git status`

<input type="checkbox"> Muuta ainakin kahden tiedoston sisältöä ja committaa muutokset repositorioon

<input type="checkbox"> Tee _.gitignore_-tiedosto, jonka avulla Git jättää huomiotta repositorion juurihakemistossa olevat _tmp_-päätteiset tiedostot sekä seuraavat hakemistot:
- <i>.venv</i>
- <i>\_\_pycache\_\_</i>
- <i>.pytest_cache</i>

Huomaa, että hakemistojen <i>.venv</i> ja <i>.pytest_cache</i> nimet alkavat pisteellä. Pistealkuiset hakemistot ja tiedostot eivät näy oletusarvoisesti komennon `ls` listauksissa, saat ne näkyville komennolla `ls -a`

<input type="checkbox"> Lisää tmp-päätteisiä tiedostoja hakemistoon ja varmista että Git jättää ne huomioimatta

- Saat asian tarkastettua komennolla `git status`

<input type="checkbox"> Lisää myös hakemisto nimeltä <i>\_\_pycache\_\_</i> ja hakemiston sisälle joku tiedosto. Varmista, että hakemisto sisältöineen ei mene versionhallinnan alaisuuteen

<input type="checkbox"> Lisää ja commitoi _.gitignore_-tiedosto repositorioosi

<input type="checkbox"> Seuraavat kohdat puhuvat Gitin staging-alueesta. Jos et tiedä mistä on kysymys, selvitä mistä kyse. Asia kyllä selviää ylle linkitetyistä ohjeista

<input type="checkbox"> Tee muutos johonkin tiedostoon. Älä lisää tiedostoa "staging"-alueelle

<input type="checkbox">  Peru muutos (`git status`-komento antaa vihjeen miten tämä tapahtuu)

<input type="checkbox"> Tee muutos ja lisää tiedosto "staging"-alueelle, varmista että muutosta ei enää näy tiedostossa

<input type="checkbox"> Peru muutos (`git status`-komento antaa vihjeen miten tämä tapahtuu), varmista että muutosta ei enää näy tiedostossa

**git add -p**

Tutoriaaleissa ei valitettavasti käytetä `git add`-komennon hyödyllistä muotoa `git add -p`

<input type="checkbox"> Tee muutoksia muutamiin tiedostoihin ja lisää muutokset staging-alueelle komennon git add -p avulla

- Jos lisäät projektiin uusia tiedostoja, ei `git add -p` huomaa niitä, eli ne on lisättävä staging-alueelle erikseen
- _Käytä jatkossa komentoa `git add -p` aina kun se on suinkin mahdollista!_

Komennolla `man git add` saat lisätietoa optiosta ja mm. vastausvaihtoehtojen selitykset.

<details markdown="1" class="vihje">
<summary markdown="span">Vihje: tekoälyn hyödyntäminen tehtävässä</summary>

Kuten olettaa saattaa, AI osaa Gitiä varsin hyvin. Esim. sopivan .gitignore-tiedoston saa helposti:

![]({{ "/images/cc4.png" | relative_url }})

Voi olla hyödyllisempää ja/tai opettavaisempaa opetella asia pidemmän kaavan kautta ja syvällisemmin [dokumentaatiosta](https://git-scm.com/docs/gitignore). Tai sitten ei. Oleellista lienee ymmärtää .gitignore:n käytön periaatteet, mutta tarkka syntaksi on sellainen asia, että sen opettelu lähinnä kuormittaa, ja detaljien ulkoistaminen AI:lle on järkevää. Toki tässäkin tapauksessa on varmistettava, että tiedosto on oikein konfiguroitu, ja että vääriä tiedostoja ei pääse lipsahtamaan versionhallinnan alaisuuteen.

</details>

### 4. Tiedostojen lisääminen GitHubiin [versionhallinta]

Tehtävässä 2 tehtiin GitHubiin repositorio "ohtuvarasto", joka liitettiin paikalliselle koneelle luotuun repositorioon "remote repositoryksi". Synkronoidaan paikallisen repositorion ja GitHubin tilanne:

<input type="checkbox"> "Pushaa" nämä GitHubissa olevaan etärepositorioon antamalla komento `git push`

<input type="checkbox"> Varmista selaimella, että lisätyt tiedostot menevät GitHubiin

GitHubissa pitäisi näyttää suunnilleen seuraavalta

![]({{ "/images/lh1-3-22.png" | relative_url }})

### 5. Monta kloonia samasta repositoriosta [versionhallinta]

Yleensä on tapana pitää GitHubissa olevaa repositoriota tiedostojen "keskitettynä" sijoituspaikkana ja liittää paikallisella koneella oleva repositorio GitHubissa olevan repositorion etärepositorioksi, kuten teimme tehtävässä 1.

Jos työskennellään useammalta koneelta, on GitHubissa olevasta repositoriosta monta kloonia ja kloonien tila on pidettävä ajantasalla.

Luodaan nyt harjoituksen vuoksi paikalliselle koneelle repositoriosta toinen klooni:

<input type="checkbox"> Mene komentoriville ja esim. kotihakemistoosi (tai johonkin paikkaan, joka ei ole Git-repositorio)

<input type="checkbox"> Anna komento `git clone git@github.com:githubtunnus/repositorionNimi.git nimiKloonille`

- _githubtunnus_ ja _repositorionNimi_ selviävät GitHubista repositoriosi tehtävän 2 toisen kuvan osoittamasta paikasta
- _nimiKloonille_ tulee olemaan kloonatun repositorion nimi, varmista että annat nimen, jonka nimistä tiedostoa tai hakemistoa ei jo ole kansiossa

<input type="checkbox"> Mene kloonattuun repositorioon ja lisää sinne jotain tiedostoja. Committaa lopuksi

<input type="checkbox"> "Pushaa" muutokset GitHubiin

<input type="checkbox"> Varmista selaimella, että lisätyt tiedostot menevät GitHubiin

**Mene nyt tehtävässä 2 tehtyyn GitHub-repositorion klooniin.**

<input type="checkbox"> Alkuperäinen paikallinen klooni ei ole enää ajantasalla, "pullaa" sinne muutokset komennolla `git pull`

<input type="checkbox"> Varmista että molempien paikallisten repositorioiden sisältö on nyt sama

<input type="checkbox"> Lisää alkuperäiseen klooniin joitain tiedostoja ja pushaa ne GitHubiin

<input type="checkbox"> Mene jälleen tässä tehtävässä tehtyyn klooniin ja pullaa

### 6. Repositorion siivous [versionhallinta]

Valmistaudutaan seuraavaan tehtävään siivoamalla repositoriostamme ylimääräiset tiedostot

<input type="checkbox"> Mene repositoriosi alkuperäiseen, tehtävässä 2 tekemääsi klooniin

- Voit poistaa tehtävää 5 varten tekemäsi harjoituskloonin

<input type="checkbox"> **Poista repositorioistasi** kaikki hakemistot sekä muut tiedostot paitsi _.git_, _.gitignore_ ja _README.md_

<input type="checkbox"> Committaa muutokset

- Varmista komennolla _git status_ että kaikki muutokset ovat versionhallinnassa, eli että Git ei ilmoita joidenkin tiedostojen olevan _Changes not staged for commit_
- Joudut ehkä kertaamaan tehtävän 3 linkittämistä tutoriaaleista tai kysymään AI:ta miten tiedostojen poistaminen Gitistä tapahtuu

<input type="checkbox"> Pushaa muutokset GitHubiin. Katso selaimella, että GitHubissa kaikki on ajan tasalla, eli että repositoriossa ei ole mitään muuta kuin tiedostot _.gitignore_ ja _README.md_

Haetaan sitten seuraavissa tehtävissä käytettävä koodi:

<input type="checkbox"> Hae osoitteesta <https://github.com/ohjelmistotuotanto-hy/tehtavat/raw/main/viikko1/varasto.zip> löytyvä zipattu paketti

<input type="checkbox"> Pura paketti sopivaan paikkaan

<input type="checkbox"> Siirrä paketin sisällä olevat tiedostot kloonattuun repositorioon siten, että **paketissa olevat tiedostot ja hakemistot tulevat repositorion juureen**

Repositoriosi sisältävän hakemiston tulee nyt näyttää seuraavalta:

![]({{ "/images/lh1-1-25.png" | relative_url }})

<input type="checkbox"> Lisää ja committoi zipistä puretut tavarat repositorioosi ja pushaa ne GitHubiin

<input type="checkbox"> Katso vielä kerran selaimella, että GitHubissa kaikki on ajan tasalla

**Huomaa, että repositoriosi tulee näyttää tehtävän jälkeen suunnilleen seuraavalta:**

![]({{ "/images/varasto.png" | relative_url }})

**Jos hakemisto _src_ ja tiedostot _pyproject.toml_ ym. eivät ole repositorion juuressa, siirrä ne sinne ennen kuin siirryt eteenpäin.**

### 7. uv

Tämän kurssin ohjelmointitehtävissä käytetään Pythonia. Kurssilla käytetään Python-projektien riippuvuuksien _ja_ Python-version hallintaan [uv](/uv)-komentorivityökalua, joten aloitetaan asentamalla se.

<input type="checkbox"> Asenna uv seuraamalla [uv-ohjeen](/uv#asennus) asennusosiota

- Kurssilla käytetään uv:n versiota 0.12 (tai uudempaa). Jos koneellasi on vanhempi versio, se on syytä päivittää komennolla `uv self update`
- Jos kohtaat ongelmia, katso [täältä](/uv#ratkaisuja-yleisiin-ongelmiin) ratkaisuja joihinkin tyypillisiin ongelmatilanteisiin

Kun uv on asennettu, sen avulla onnistuu myös kurssilla tarvittavan Python-version asentaminen, mitään erillistä Python-asennusta ei siis tarvita:

```bash
uv python install 3.14
```

Tarkista asennetut versiot komennolla `uv python list`. Kun myöhemmin luot uuden uv-projektin komennolla `uv init --python 3.14`, uv käyttää automaattisesti juuri asentamaasi versiota. Katso tarvittaessa lisää [uv-ohjeen](/uv#python-version-hallinta) kohdasta _Python-version hallinta_.

Koodin editointiin suosittelemme [Visual Studio Code](https://code.visualstudio.com/) -editoria.

Ohjelmoinnin peruskursseilla olet saattanut suorittaa koodia painamalla VS Coden nuoli-painiketta, ja testejä painamalla silmä-painiketta. Ammattimaisessa ohjelmistokehityksessä koodin suorittaminen ja testaamisen on tapahduttava toistettavalla tavalla, ja siten että operaatiot pystytään suorittamaan millä tahansa koneella, _skriptatusti_ komentoriviltä, eli riippumatta VS Coden kaltaisista kehitysympäristöistä.

Koodin suorittaminen komentoriviltä `python3`-komennolla ei itsessään ole kovin hankalaa. Ongelmia alkaa syntyä vasta, kun projekti tarvitsee ulkoisia _riippuvuuksia_ erilaisten asennettavien kirjastojen muodossa. Kirjastojen asennukseen ja hallintaan tarvitaan erilisiä työkaluja. Pythonin kohdalla on perinteisesti käytetty tähän tarkoitukseen [pip](https://pypi.org/project/pip/)-komentorivityökalua.

Jotta samalla tietokoneella olevien projektien riippuvuuksissa ei syntyisi ristiriitoja, on käytössä usein niin kutsuttuja projektikohtaisia _virtuaaliympäristöjä_. Virtuaaliympäristöjä luodaan ja käytetään [venv](https://docs.python.org/3/library/venv.html)-moduulin kautta.

Juuri asentamasi uv yhdistää molemmat työkalut: se asentaa ja hallinnoi projektin riippuvuuksia pipin tapaan ja luo projektille automaattisesti oman virtuaaliympäristön. Näin kaikki riippuvuuksien hallintaan liittyvä hoituu yhdellä työkalulla, eikä pipiä tai venv-moduulia tarvitse käyttää erikseen.

Edellisessä tehtävässä lisättiin repositorioon uv-muodossa oleva varasto-projekti. Projekti sisältää erittäin yksinkertaisen varaston hallintaan soveltuvaa koodia. Varaston hallinnasta vastaa _src/varasto.py_-tiedossa määritelty luokka `Varasto`. Luokkaa käyttää _src/index.py_-tiedossa määritelty funktio `main`.

<input type="checkbox"> Tutki uv-muotoisen projektin hakemistorakennetta esim. antamalla komento `tree` projektihakemiston juuressa (`tree` ei ole uv:hen liittyvä käsky vaan normaali shell-komento)

<details markdown="1" class="vihje">
<summary markdown="span">Vihje: tree-komennon käyttö eri käyttöjärjestelmissä</summary>

- Windowsissa komennosta käyttökelpoisin muoto on `tree /F` Jos käytössäsi on Windowsissa _git bash_ komento on muotoa `cmd //c tree`
- **HUOM:** macOS:ssä ei ole oletusarvoisesti `tree`-komentoa
- Mikäli koneellasi on [Homebrew](https://brew.sh/) asennettuna, saat `tree`-komennon asennettua komennolla `brew install tree`
- Myöskään kaikissa Linuxeissa ei komento `tree` ole oletusarvoisesti asennettu. Debian-pohjaisissa Linuxeissa (esim Ubuntussa) saat asennettua `tree`-komennon komennolla `sudo apt-get install tree`

</details>

<input type="checkbox"> Tarkastele projektin määrittelevän tiedoston _pyproject.toml_ sisältöä

- Tiedosto määrittelee mm. projektin käyttämät riippuvuudet

Ohjelmakoodin editointi kannattaa tehdä järkevällä editorilla, esim. Visual Studio Codella, mutta uv-komentojen suorittaminen onnistuu helpoiten komentoriviltä.

{% include no_pip.md %}

**Tee nyt seuraavat toimenpiteet**.

<input type="checkbox"> Asenna varasto-projektin riippuvuudet suorittamalla sen juurihakemistossa komento `uv sync`

<input type="checkbox"> Käynnistä sovellus komennolla `uv run python3 src/index.py`

- [Run](https://docs.astral.sh/uv/reference/cli/#uv-run)-komento suorittaa annetun komennon (tässä tapauksessa `python3 src/index.py`) virtuaaliympäristössä

<input type="checkbox"> Siirry _virtuaaliympäristöön_ komennolla `source .venv/bin/activate`

<input type="checkbox"> Suorita komento `python3 src/index.py`

- Virtuaaliympäristössä komentoja voi suorittaa "normaalisti", eli ilman `uv run` -komentoa
- Kun uutta koodia kehitetään ja suoritetaan tiheässä syklissä, on komentojen suorittaminen kätevintä tehdä virtuaaliympäristön sisällä

<input type="checkbox"> Poistu virtuaaliympäristöstä komennolla `deactivate`

<input type="checkbox"> Suorita testit komennolla `uv run pytest`

- Testien suorittamista varten on käytössä [pytest](https://docs.pytest.org/en/stable/)-sovelluskehys

### 8. Yksikkötestit

Laadunvarmistus on ohjelmistokehityksen ehkä tärkein vaihe, ja sen tärkein keino on testaus. Ohjelmistoja joudutaan testaamaan paljon, joten testaus kannattaa automatisoida mahdollisimman pitkälle. Tämä korostuu iteratiivisessa eli ketterässä ohjelmistokehityksessä, jossa samat testit on ajettava uudelleen aina, kun ohjelmaa muutetaan.

Tekoälyavusteinen sovelluskehitys tekee testauksesta entistäkin tärkeämpää. Tekoäly tuottaa nopeasti paljon koodia, joka näyttää usein uskottavalta mutta voi silti olla virheellistä. Kattavat automaattiset testit ovat paras keino varmistaa, että koodi, oli sen kirjoittanut ihminen tai tekoäly, toimii niin kuin pitää, ja että aiemmin toiminut toiminnallisuus ei hajoa muutosten myötä.

Python-maailmassa automatisoidun testaamisen johtava työkalu on [unittest](https://docs.python.org/3/library/unittest.html), johon olet saattanut jo tutustunut kurssilla Ohjelmistotekniikka.

<input type="checkbox"> Jos unittest on vieras, tai päässyt unohtumaan, kertaa sen perusteet [tästä unittest-ohjeesta](/unittest).

Edellisen tehtävän _ohtuvarastossa_ on jo jonkun verran unittest-testejä, **laajennetaan nyt testejä**.

Muista, että testit voi suorittaa projektin juurihakemistossa komennolla `uv run pytest` tai siirtymällä virtuaaliympäristöön komennolla `source .venv/bin/activate` ja suorittamalla sen jälkeen komennon `pytest`.

<input type="checkbox"> Täydennä varasto-projektin testejä siten, että luokan `Varasto` testien haarautumakattavuudeksi (branch coverage) tulee 100%

- Joudut huomioimaan ainakin tapaukset, joissa varastoon yritetään laittaa liikaa tavaraa ja varastosta yritetään ottaa enemmän kuin siellä on
- Edellinenkään ei vielä riitä

<input type="checkbox"> Testauksen rivikattavuuden saat selville [coverage](https://coverage.readthedocs.io/en/coverage-5.3/)-työkalun avulla. Tutustu työkaluun lukemalla [Coverage-ohje](/unittest#onko-jo-testattu-tarpeeksi-testauskattavuus)

<input type="checkbox"> Ota työkalu projektissasi käyttöön asentamalla se projektin _kehityksen aikaiseksi riippuvuudeksi_ komennolla:

```bash
uv add coverage --dev
```

<input type="checkbox"> Lisää projektin juurihakemistoon konfiguraatiotiedosto _.coveragerc_, jossa kerrotaan, mistä projektin tiedostoista testikattavuutta kerätään. Tiedoston sisällön tulee olla seuraava:

```text
[run]
source = src
```

<input type="checkbox"> Siirry virtuaaliympäristöön komennolla `source .venv/bin/activate`

<input type="checkbox" style="margin-left: 20px"> Suorita komento `coverage run --branch -m pytest`. Komento suorittaa testit ja kerää testien haarautumakattavuuden

<input type="checkbox" style="margin-left: 20px"> Tämän jälkeen suorita komento `coverage html`. Komento muodostaa raportin kerättyjen tietojen perusteella

<input type="checkbox"> Projektin juurihakemistoon pitäisi ilmestyä hakemisto _htmlcov_. Voit tarkastella HTML-muotoista testikattavuusraporttia avaamalla selaimessa hakemiston _htmlcov_ tiedoston _index.html_

- Klikkaamalla raportista yksittäisen tiedoston nimeä näet, mitkä koodin suorituksen haarat on vielä testaamatta

<input type="checkbox"> Lisää projektin _.gitignore_-tiedostoon tiedosto _.coverage_ ja hakemisto _htmlcov_

<input type="checkbox"> Kun luokan `Varasto` (tiedoston _src/varasto.py_) testien haarautumakattavuus (branch coverage) on 100%, pushaa tekemäsi muutokset GitHubiin

- Raportissa on luultavasti mukana myös muita tiedostoja, mutta ainoastaan _src/varasto.py_-tiedoston haarautumakattavuus tarvitsee olla 100%. Opimme myöhemmin, kuinka ylimääräiset tiedostot pystyy jättämään raportin ulkopuolelle
- Kun muokkaat testejä, muista suorittaa komennot `coverage run --branch -m pytest` ja `coverage html` uudelleen, jotta raportti päivittyy
- Saat suoritettua molemmat komennot "yhdellä napin painalluksella" sijoittamalla ne samalle riville puolipisteellä eroteltuna `coverage run --branch -m pytest; coverage html`

<details markdown="1" class="vihje">
<summary markdown="span">Vihje: tekoälyn hyödyntäminen tehtävässä</summary>

AI:n avulla on luonnollisestikin helppo generoida koodin lisäksi myös testejä. Chat-käyttöliittymän sijaan testien generointiin kannattaa käyttää VS Coden Copilotin _Agent_-tilaa, jossa tekoäly voi luoda tiedostoja ja suorittaa koodia (agenteista tarkemmin [viikolla 3](/genai/#kielimallit-ja-agentit-ohjelmoinnin-apuna-viikko-3)).

Kokeillaan miten agentti selviää viikon 1 tehtävästä 8. Agentti avataan VS Coden Chat-näkymästä:

![]({{ "/images/agent1.png" | relative_url }}){: width="90%"}

Annetaan agentille ohje:

_generate tests for #file:varasto.py so that brach coverage is 100%_

![]({{ "/images/agent2.png" | relative_url }}){: width="90%"}

Agentti kertoo mitä on tekemässä, eli ensin se haluaa suorittaa komennon, joka selvittää testikattavuuden. Komento näyttää hieman oudolta, ja suoritusluvan antamisen jälkeen selviää, että se ei toimi. Agentti ehdottaa paria komentoa, kunnes se keksii että kyseessä on uv-projekti:

![]({{ "/images/agent3.png" | relative_url }}){: width="90%"}

Uusi komento toimii. Hetken kuluttua agentti on tehnyt ehdotuksen uusista testeistä, joiden avulla kattavuus nousee sataan prosenttiin:

![]({{ "/images/agent4.png" | relative_url }})

Vastuumme tuntevina koodareina käymme testit läpi ennen kuin hyväksymme ne. Testeissä on käytetty meille tuntematonta metodia `assertAlmostEqual`. Emme hyväksy koodia, jota emme ymmärrä, joten selvitämme ensin, mistä on kyse. Voimme kysyä asiaa agentilta tai katsoa unittestin [dokumentaatiosta](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertAlmostEqual):


![]({{ "/images/agent5.png" | relative_url }})

Ymmärrämme nyt testit, olemme myös oppineet uuden asian kiitos tekoälyn!
Olemme nyt tyytyväisiä ja commitoimme muutokset GitHubiin.

</details>

### Bonustehtävä: alias

uv:tä käyttäessä voit suorittaa komentoja joko pitkässä muodossa, eli

```bash
uv run pytest
```

tai siirtyä virtuaaliympäristöön komennolla `source .venv/bin/activate`, jolloin komennon alkuosaa ei tarvita:

```bash
pytest
```

Virtuaaliympäristö on siis varsin kätevä, mutta virtuaaliympäristön avaava komento, on aika ikävä ja vaikea muistaa.

Voit helpottaa tekemällä komennolle helpommin muistettavan _aliaksen_. Tee halutessasi alias virtuaaliympäristön käynnistämiseen. Etsi ohjeet internetistä tai kysy [CurreChatiltä]({{site.curre}}) esim. promptilla

_miten teen Ubuntuun aliaksen joka suorittaa komennon source .venv/bin/activate_

### 9. GitHub Actions, osa 1

uv:n avulla testien suorittaminen on mahdollista tehdä skriptattavaksi, eli helposti komentoriviltä yhdellä komennolla suoritettavaksi. Seuraava askel on suorittaa [buildausprosessi](https://en.wikipedia.org/wiki/Software_build), eli ohjelman suorittamiseen vaadittavat toimenpiteet ja siihen liittyvien testien suoritus, erillisellä _build-palvelimella_ (engl. build server).

Ideana on, että ohjelmistokehittäjä noudattaa seuraavaa sykliä:

- Uusin versio koodista haetaan versionhallinnan keskitetystä repositoriosta ohjelmistokehittäjän koneelle
- Lisäykset ja niitä testaavat testit tehdään paikalliseen kopioon
- Testit suoritetaan ohjelmistokehittäjän koneella
- Jos kaikki on kunnossa, paikalliset muutokset lähetetään keskitettyyn repositorioon
- Build-palvelin seuraa keskitettyä repositoriota ja kun siellä huomataan muutoksia, hakee ja kääntää build-palvelin muuttuneen koodin ja suorittaa sille testit
- Build-palvelin raportoi havaituista virheistä

Erillisen build-palvelimen avulla varmistetaan, että ohjelmisto toimii muuallakin kuin muutokset tehneen ohjelmistokehittäjän koneella. Tätä käytännettä kutsutaan _jatkuvaksi integraatioksi_ (engl. continuous integration). Palaamme asiaan tarkemmin kurssin [kolmannessa osassa](/osa3#jatkuva-integraatio).

Nykyään alkaa olla yleistä, että erillisen build-palvelimen sijaan käytetään jotain verkossa olevaa build-palvelua (engl. build service), jolloin softakehittäjien ei tarvitse huolehtia ollenkaan buildaukseen käytettävän palvelimen ja sen ohjelmistojen asentamisesta.

Kurssilla käytetään GitHubiin sisäänrakennettua [Actions](https://github.com/features/actions)-ominaisuutta hoitamaan automatisoitu buildaus.

Konfiguroidaan seuraavaksi GitHub Actions huolehtimaan projektistamme.

<input type="checkbox"> Valitse GitHub-repositoriostasi välilehti _Actions_ ja klikkaa _set up a workflow yourself_-linkkiä:

![]({{ "/images/py-lh1-20.png" | relative_url }})

Valinta avaa actionien konfiguraatiotiedoston.

<input type="checkbox"> Muuta tiedosto seuraavaan muotoon:

```yml
name: CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v5
      - name: Install uv
        uses: astral-sh/setup-uv@v10.1.0
        with:
          python-version: "3.14"
      - name: Install dependencies
        run: uv sync
      - name: Run tests
        run: uv run coverage run --branch -m pytest
```

<input type="checkbox"> Paina vihreää _Commit changes_ -nappia, ja anna sopiva commit-viesti.

Konfiguraatiotiedosto (jonka nimi on oletusarvoisesti _main.yml_) tallettuu repositorioosi hakemiston _.github/workflows_ alle:

![]({{ "/images/py-lh1-21-22.png" | relative_url }})

GitHub siis committoi uuden tiedoston automaattisesti repositorioosi.

<input type="checkbox"> Pullaa repositorion koodi omalle koneellesi. Konfiguraatiotiedosto näkyy nyt myös siellä, esim. Visual Studio Code -editorilla se näyttää seuraavalta:

![]({{ "/images/workflow.png" | relative_url }})

<input type="checkbox"> Avaa repositorion välilehti _Actions_, huomaat että sinne on ilmestynyt hieman tavaraa:

![]({{ "/images/py-lh1-23-23.png" | relative_url }})

### 10. GitHub Actions, osa 2

Katsotaan hieman tarkemmin mitä GitHub Actionien konepellin alla tapahtuu.

GitHub Actionit ovat sarjoja erilaisia "toimenpiteitä", joita GitHub voi suorittaa repositoriossa olevalle koodille. Actionin toiminta määritellään hakemiston _.github/workflows_ sijoitettavissa _.yml_-päätteisissä tiedostoissa.

Tarkastellaan äsken määrittelemäämme tiedostoa:

```yml
name: CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v5
      - name: Install uv
        uses: astral-sh/setup-uv@v10.1.0
        with:
          python-version: "3.14"
      - name: Install dependencies
        run: uv sync
      - name: Run tests
        run: uv run coverage run --branch -m pytest

```

Kohta [on](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) määrittelee missä tilanteissa actionit suoritetaan. Konfiguraatiomme määrää, että actionit suoritetaan aina kun repositorion päähaaraan pushataan koodia.

Osiossa [jobs](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobs) voidaan määritellä yksi tai useampi "työ", eli useasta askeleesta koostuva tehtäväsarja. Määrittelimme tällä kertaa vain yhden työn, jolle annoimme nimen _build_. Jos töitä olisi useita, suorittaisi GitHub Actions ne rinnakkain.

Yksittäinen työ koostuu useista askelista, jotka on määritelty työn alla kohdassa [steps](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps).

GitHub varaa työn askelien suorittamista varten virtuaalikoneen. Kohta [runs-on](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) määrittelee minkälaisella käyttöjärjestelmällä työn askeleet suoritetaan. Esimerkkimme tapauksessa suoritusympäristö on Ubuntu Linux.

Esimerkkimme tapauksessa työ koostuu neljästä askeleesta. Ensimmäinen askel

```yml
- uses: actions/checkout@v5
```

suorittaa valmiiksi määritellyn actionin [checkout](https://github.com/marketplace/actions/checkout), joka dokumentaationsa mukaan tekee seuraavaa

> This action checks-out your repository under \$GITHUB_WORKSPACE, so your workflow can access it.

Eli _checkout_ action siis hakee repositorion koodin askeleet suorittavalle virtuaalikoneelle.

Toinen askel on action [setup-uv](https://github.com/astral-sh/setup-uv), joka asentaa työn suorittavalle virtuaalikoneelle uv:n, sekä `python-version`-parametrin avulla myös haluamamme Python-version. Versionumero kannattaa antaa lainausmerkeissä, eli muodossa `"3.14"`, sillä muuten YAML tulkitsee sen liukuluvuksi, jolloin esim. versio `3.10` muuttuisi muotoon `3.1`.

```yml
- name: Install uv
  uses: astral-sh/setup-uv@v10.1.0
  with:
    python-version: "3.14"
```

Molemmat näistä actioneista olivat GitHubin [marketplacesta](https://github.com/marketplace?type=actions) löytyviä valmiita actioneja. Esim. Pythonin asentaminen työn suorittavalle virtuaalikoneelle on itsessään aika monimutkainen toimenpide, mutta valmiiksi määritelty action tekee sen helpoksi.

Kolmas askel asentaa projektin riippuvuudet `uv sync`-komennolla.

Neljäs askel on kaikkein tärkein, se suorittaa uv:n avulla projektin testit ja kerää testikattavuuden:

```yml
- name: Run tests
  run: uv run coverage run --branch -m pytest
```

<input type="checkbox"> Tee nyt koodiin muutos, joka hajottaa testit ja committaa ja pushaa muutos GitHubiin.

Hetken kuluttua actions-välilehdellä pitäisi näkyä että commiteja on kaksi, ja että viimeisin on tilaltaan "punainen":

![]({{ "/images/broken1.png" | relative_url }})

Klikkaamalla rikki mennyttä committia, päästään tarkastelemaan hieman tarkemmin actionin suorituksen etenemistä:

![]({{ "/images/broken2.png" | relative_url }})

Kuten odotettua, testi ei mennyt läpi. Riippuen GitHubin asetuksista, olet myös saattanut saada email-muistutuksen rikki menneestä buildista.

<input type="checkbox"> Korjaa testi ja pushaa muutokset uudelleen GitHubiin. Tarkkaile jälleen Actions-näkymää ja varmista, että kaikki toimii oikein.

### 11. GitHub Actions, osa 3

<input type="checkbox"> Laita repositoriossa olevaan tiedostoon _README.md_ koodin tilasta kertova _Status Badge_.

[Tämän](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge) ohjeen mukaan badgen osoite on muotoa

```
https://github.com/OWNER/REPOSITORY/actions/workflows/WORKFLOW-FILE/badge.svg
```

Esimerkiksi omassa tapauksessani badgelinkki on

```
https://github.com/mattiluukkainen/ohtuvarasto26/actions/workflows/main.yml/badge.svg
```

<input type="checkbox"> Lisää badge editoimalla tiedostoa _README.md_ suoraan GitHubissa:

![]({{ "/images/badge1.png" | relative_url }})

Oikein toimiva badge näyttää seuraavalta:

![]({{ "/images/badge1.png" | relative_url }})

Badge toimii siis sen indikaattorina onko repositoriossasi oleva koodi testien puolesta kunnossa!

<input type="checkbox"> Tee nyt jokin muutos koneellasi repositorioon johonkin muuhun tiedostoon kuin README.md ja yritä pushata koodi GitHubiin. Toimenpiteestä seuraa virhe:

```
To github.com:mattiluukkainen/ohtuvarasto26.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'git@github.com:mattiluukkainen/ohtuvarasto26.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Tulet todennäköisesti törmäämään vastaavaan virheeseen usein. Syynä virheelle on se, että yrität pushata muutoksia GitHubiin vaikka GitHub on "edellä" paikallista repositoriotasi (ts. sinne lisättiin tiedosto _README.md_).

Ongelma ratkeaa seuraavasti.

<input type="checkbox"> Tee ensin komento `git pull`. Saat Gitiltä pitkän valitusviestin:

```
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 645 bytes | 215.00 KiB/s, done.
From github.com:mattiluukkainen/ohtuvarasto26
   6f1cd65..aa6c099  main       -> origin/main
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
```

Käytännössä Git haluaa tietää minkälaisella strategialla paikallisen ja etärepositoriosi koodi tulisi yhdistää. Vaihtoehdoista kannattanee valita keskimäinen.

<input type="checkbox"> Anna komentorivillä komento

```
git config pull.rebase true
```

Käytännössä valittu vaihtoehto tarkoittaa sitä, että Git suorittaa uudet lokaalit commitit etärepositoriossa olevien committien perään.

<input type="checkbox"> Pullaa koodi uudelleen komennolla `git pull`, jonka jälkeen komento `git push` onnistuu. Jatkossa vastaavista tilanteista selviää komennoilla `git pull` ja `git push`.

Jos muutit paikallisesti tiedostoa README.md, saatoit aiheuttaa ns. merge-konfliktin jonka selvittämiseen vaaditaan jo hieman vaivaa. Palaamme asiaan tulevilla viikoilla...

<input type="checkbox"> **Tee vielä** lopuksi badgestasi linkki Actions-välilehdelle. Eli kun badgea painetaan, tulee selaimen ohjautua repositorion Actions-välilehdelle, esim. omassa tapauksessani osoitteeseen <https://github.com/mattiluukkainen/ohtuvarasto26/actions>

### 12. Codecov

Tehtävässä 8 määrittelimme projektin testauskattavuuden coveragen avulla. <https://codecov.io> -palvelu mahdollistaa projektien koodikattavuuden julkaisemisen verkossa.

<input type="checkbox"> Kirjaudu [Codecoviin](https://codecov.io) (GitHub login)

<input type="checkbox"> Lisää repositorio Codecoviin alaisuuteen:

![]({{ "/images/ccov1.png" | relative_url }})

Saatat joutua odottamaan hetken, ennen kuin Codecov löytää repositoriosi. On myös mahdollista, että joudut vielä sallimaan repositorion näkymisen GitHubin [asetusten](https://github.com/apps/codecov) kautta.

Projektin lisäämisen jälkeen aukeavassa näkymässä oleva **Step 3** sisältää oleellisen tärkeän asian, eli Codecovin _tokenin_:

![]({{ "/images/ccov2.png" | relative_url }})

Käytännössä Codecovin (repository) token on _avain_, jonka avulla palvelu tunnistaa projektin. Tällaisten avainten käytölle on tyypillistä, että niitä ei haluta kaikkien saataville julkiseen repositorioon.

**Unohda askeleet 1 ja 2!** 

<input type="checkbox"> Lisää nyt avain Github Actioneiden käyttöön [tätä ohjetta](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets#creating-secrets-for-a-repository) seuraten.

Saamme muodostettua Codecovin ymmärtämän testikattavuusraportin käyttämällä `coverage html`-komennon sijaan komentoa `coverage xml`. Kyseinen komento muodostaa XML-muotoisen testikattavuusraportin.

<input type="checkbox"> Lisää GitHub Action -konfiguraation loppuun kaksi uutta askelta:

```yml
{% raw %}
- name: Coverage report
  run: uv run coverage xml
- name: Coverage report to Codecov
  uses: codecov/codecov-action@v5
  env:
    CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
{% endraw %}
```

**HUOM** rivit on sisennettävä samalle tasolle kuin muut stepit.

Kertauksena:

1. Luo avain Codecovin ohjeiden mukaan
1. Siirrä avain GitHubin secretiksi (Githubin repossa settings -> secrets and variables / actions -> New repository secret -> nimeksi CODECOV_TOKEN ja arvoksi avain)
1. Lisää yllä olevat vaiheet GitHub Action -konfiguraatiosi

Kun seuraavan kerran koodi pushataan GitHubiin, ilmestyy Codecoviin koodin testikattavuusraportti:

![]({{ "/images/codecov3.png" | relative_url }})

Käytännössä pyydämme nyt GitHub Actioneja suorittamaan ensin testit ja keräämään testikattavuuden (komennolla `uv run coverage run --branch -m pytest`), jonka jälkeen muodostetaan XML-muotoinen testikattavuusraportti (komennolla `uv run coverage xml`). Tämä testikattavuusraportti lähetetään Codeviin.

GitHub Actionien loki näyttää miten askelten suoritus etenee:

![]({{ "/images/codecov4.png" | relative_url }})

<input type="checkbox"> Lisää repositoriosi README.md-tiedostoon myös Codecov-badge. Löydät badgen repositorion Codecov-sivun Configuration-valikosta.

Projektisi GitHub-sivun tulisi lopulta näyttää suunnilleen seuraavalta:

![]({{ "/images/ccov5.png" | relative_url }})

Huomaa, että GitHub Actionin ja Codecovin badget eivät päivity täysin reaaliajassa. Eli vaikka projektin testikattavuus nousisi, kestää hetken, ennen kuin badge näyttää tuoreen tilanteen.

### 13. Parempi testikattavuus

Projektin testauskattavuutta häiritsee nyt se, että myös tiedosto _src/index.py_-tiedosto lasketaan testikattavuuteen. Voimme määritellä, että joitain tiedostoja tai kokonaisia hakemistoja jätetään huomioimatta kattavuusraportin generoinnissa.

<input type="checkbox"> Lisää juurihakemiston _.coveragerc_-tiedostoon `omit`-konfiguraatio ja määrittele siinä huomioimatta jätettävät tiedostot:

```
[run]
source = src
omit = src/index.py, , src/tests/**
```

Konfiguraatiossa määritellä pilkulla eroteltuna niin kutsuttaja [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>)-polkuja. Voimme jättää huomioimatta esimerkiksi yksittäisen tiedoston polun (_src/index.py_), tai kaikki tietyn hakemiston alla olevat polut (_src/tests/\*\*_).

<input type="checkbox"> Pushaa koodi GitHubiin ja varmista, että Codecov generoi raportin siten, että _src/index.py_-tiedosto jätetään huomioimatta.

### Tehtävien palautusrepositoriot

Kuten jo aiemmin todettiin, tällä viikolla tehdään palautusta varten **kaksi erillistä** GitHub-repositoriota:

- ensimmäinen (nimeltään ohtuvarasto) tehtäviä 2-13 varten ja
- toinen tehtäviä 14-17 varten (käytetään tästä nimitystä **palautusrepositorio**)

Repositorioista jälkimmäistä (johon tehtävät 14-17 palautetaan) käytetään myös muiden viikkojen tehtävien palautusrepositoriona.

<input type="checkbox"> Luo siis nyt **uusi repositorio**.

Nyt luotavan palautusrepositorion rakenne voi olla esimerkiksi seuraava:

```
viikko1
  riippuvuuksien-injektointi
  nhl-statistics-1
viikko2
  uv-web
  project-reader
  nhl-reader
viikko3
  webcounter
  login
...
```

<input type="checkbox"> Jotta palautusrepositorioon ei pääsisi sinne kuulumatonta roskaa, kannattaa sen juureen tehdä tiedosto _.gitignore_, joka sisältää ainakin seuraavat rivit

```
__pycache__/
.venv/
.pytest_cache/
.coverage
htmlcov/
output.xml
log.html
report.html
selenium-screenshot-*.png
```

### 14. Riippuvuuksien injektointi osa 1

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositoriota mihin teit tehtävät 2-13**

Tutustumme kurssin aikana muutamiin _suunnittelumalleihin_ (engl. design pattern), eli hyviksi tunnettuihin useisiin erilaisiin tilanteisiin sopiviin ratkaisutapoihin, joiden soveltaminen usein parantaa koodin ylläpidettävyyttä.

Kurssin ensimmäinen suunnittelumalli _riippuvuuksien injektointi_ (engl. dependency injection), on yksinkertainen periaate, jota noudattamalla koodin automatisoitua testaamista on monissa tilanteissa mahdollista helpottaa ratkaisevalla tavalla.

<input type="checkbox"> Tutustu riippuvuuksien injektointiin lukemalla [tämä dokumentti](/riippuvuuksien_injektointi/)

<input type="checkbox"> Hae esimerkkiprojekti kurssin [tehtävärepositorion]({{site.python_exercise_repo_url}}) hakemistosta _viikko1/riippuvuuksien-injektointi_

- Järkevintä lienee että kloonaat repositorion paikalliselle koneellesi
- **Tämän jälkeen kannattaa kopioida projekti tehtävien 14-17 palautukseen käyttämäsi palautusrepositorion sisälle**
- **HUOM** lue 15 cm ylempää miten koodi kannattaa organisoida palautusrepositorion sisälle

<input type="checkbox"> Varmista että koodi, sekä sen testit toimivat

- Jos unohdit jo miten uv-projektit toimivat, kertaa [tehtävästä 7](/tehtavat1#7-uv)

<input type="checkbox"> Tee sovellukseen uusi testi, joka varmistaa, että laskin osaa laskea oikein kaksi peräkkäistä laskutoimitusta

### 15. Riippuvuuksien injektointi osa 2: NHL-tilastot

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositoriota mihin teit tehtävät 2-13**

Kurssin [tehtävärepositorion]({{site.python_exercise_repo_url}}) hakemistossa _viikko1/nhl-statistics_ on ohjelma, jonka avulla on mahdollista tutkia <https://nhl.com>-sivulla olevia tilastotietoja (vaihtamalla sovelluksen käyttämää URL:ia, voit katsoa eri kausien tilastoja).

<input type="checkbox"> Kopioi projekti **palautusrepositorion** alle omaksi hakemistoksi

- HUOM: nyt EI KÄYTETÄ tehtävien 2-13 ohtuvarasto-repositoriota!

<input type="checkbox"> Asenna projektin riippuvuudet suorittamalla sen juurihakemistossa komento `uv sync`

- Ohjelma koostuu kolmesta luokasta.
  - `StatisticsService` on palvelun tarjoava luokka, se tarjoaa metodit yhden pelaajan tietojen näyttämiseen, pistepörssin näyttämiseen ja yhden joukkueen pelaajien tietojen näyttämiseen
  - `Player` on luokka, jonka olioina `StatisticsService`-luokka käsittelee yksittäisen pelaajan tietoja
  - `PlayerReader` on luokka, jonka avulla ohjelma käy hakemassa pelaajien tiedot internetistä
- Ohjelma on nyt ikävästi struktoroitu ja esim. yksikkötestaus on kovin hankalaa

**Itse tehtävä:**

<input type="checkbox"> Muokkaa ohjelman rakennetta siten, että `StatisticsService`-luokka saa konstruktoriparametrina `PlayerReader`-luokan olion, ja että `PlayerReader` saa konstruktoriparametrina osoitteen mistä se hakee pelaajien tiedot

<input type="checkbox"> Muokkaa pääohjelma siten, että se injektoi `StatisticsService`-oliolle `PlayerReader`-luokan olion (jolle on annettu konstruktoriparametrina haluttu osoite) ja kokeile että ohjelma toimii edelleen:

```python
stats = StatisticsService(
  PlayerReader("https://studies.cs.helsinki.fi/nhlstats/2024-25/players.txt")
)
```

**HUOM:** jos törmäät virheeseen `URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed`, mahdollinen ratkaisu ongelmaan löytyy [täältä](https://stackoverflow.com/a/42334357).

### 16. NHL-tilastot-ohjelman yksikkötestaus

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositoriota mihin teit tehtävät 2-13**

_Jos olet laiska, voit ulkoistaa tämän(kin) tehtävän AI:lle. Oppimisen kannalta on kuitenkin parempi, että teet tehtävän suurimmaksi osaksi itse, ongelmiin ja yksityiskohtiin voit toki pyytää apua. Esim. sopivien assert-lauseiden generoinnissa tekoäly on hyvä apu._

<input type="checkbox"> Tee yksikkötestit luokalle `StatisticsService`

- Muista nimetä testitiedosto, testiluokka ja testimetodit [unittest-ohjeiden](/unittest) mukaisesti. Muuten Pytest ei löydä suoritettavia testejä
- Testien haarautumakattavuuden tulee `StatisticsService`-luokan osalta olla 100% (mittaa kattavuus coveragen avulla, katso [tehtävä 8](https://ohjelmistotuotanto-hy.github.io/tehtavat1#8-yksikkötestit))
  - Huomaa, että kattavuusraportti ei generoidu ennen kun sovellukseen on lisätty testejä
  - Muiden luokkien testikattavuudesta ei tarvitse välittää
- Testit eivät saa käyttää verkkoyhteyttä
- Verkkoyhteyden tarpeen saat eliminoitua luomalla testiä varten `PlayerReader`-luokkaa muistuttavan "stubin", jonka sisälle kovakoodaat palautettavan pelaajalistan

```python
import unittest
from statistics_service import StatisticsService
from player import Player

class PlayerReaderStub:
    def get_players(self):
        return [
            Player("Semenko", "EDM", 4, 12),  #  4+12 = 16
            Player("Lemieux", "PIT", 45, 54), # 45+54 = 99
            Player("Kurri",   "EDM", 37, 53), # 37+53 = 90
            Player("Yzerman", "DET", 42, 56), # 42+56 = 98
            Player("Gretzky", "EDM", 35, 89)  # 35+89 = 124
        ]

class TestStatisticsService(unittest.TestCase):
    def setUp(self):
        # annetaan StatisticsService-luokan oliolle "stub"-luokan olio
        self.stats = StatisticsService(
            PlayerReaderStub()
        )

    # ...
```

Kun injektoit `PlayerReaderStub`-olion testissä `StatisticsService`-oliolle, palauttaa se aina saman pelaajalistan.

### 17. NHL-tilastot-ohjelman laajennus

**Tämä tehtävä tehdään juuri luomaasi palautusrepositorioon, eli EI KÄYTETÄ ohtuvarasto-repositoriota mihin teit tehtävät 2-13**

<input type="checkbox"> Muuta luokan `StatisticsService` metodia `top` siten, että sille voidaan antaa toinen parametri, joka määrittelee millä "parhausperusteella" metodi palauttaa pelaajat.

Metodin toiminnallisuus selviää seuraavasta:

```python
from statistics_service import StatisticsService, SortBy
from player_reader import PlayerReader

def main():
    stats = StatisticsService(
      PlayerReader("https://studies.cs.helsinki.fi/nhlstats/2024-25/players.txt")
    )

    # järjestetään kaikkien tehopisteiden eli maalit+syötöt perusteella
    print("Top point getters:")
    for player in stats.top(5, SortBy.POINTS):
        print(player)

    print()
    # metodi toimii samalla tavalla kuin yo. kutsu myös ilman toista parametria
    for player in stats.top(5):
        print(player)

    print()
    # järjestetään maalien perusteella
    print("Top point goal scorers:")
    for player in stats.top(5, SortBy.GOALS):
        print(player)

    print()
    # järjestetään syöttöjen perusteella
    print("Top by assists:")
    for player in stats.top(5, SortBy.ASSISTS):
        print(player)
```

Järjestämiskriteeri määritellään [Enum](https://docs.python.org/3/library/enum.html)-arvona:

```python
from enum import Enum

class SortBy(Enum):
    POINTS = 1
    GOALS = 2
    ASSISTS = 3
```

<input type="checkbox"> Määrittele Enum tiedostossa statistics_service.py esim. ennen luokan StatisticsService määrittelyä.

<input type="checkbox"> Tee myös testit, jotka varmentavat metodin uuden version toiminnallisuuden. Jos StatisticsService-luokan käyttämä järjestämistapa näyttää vieraalta, Ohjelmointikurssin [materiaalissa](https://ohjelmointi-25.mooc.fi/osa-12/1-funktio-parametrina) avataan asiaa hieman tarkemmin.

#### Miksi Enum?

Miksi tehtävässä 17 halutaan että järjestämisen periaate ilmaistaan enumien avulla? Eikö ihan yhtä hyvin voitaisi ilmaista vaikkapa numeron avulla mikä haluttu järjestys on, eli kirjoittaa koodi seuraavasti:

```python
def main():
    stats = StatisticsService(
      PlayerReader("https://studies.cs.helsinki.fi/nhlstats/2023-24/players.txt")
    )

    # järjestetään pisteiden perusteella, parametrina oleva 1 määrää järjestyksen
    for player in stats.top(10, 1):
        print(player)

    # järjestetään syöttöjen perusteella, parametrina oleva 3 määrää järjestyksen
    print("Top by assists:")
    for player in stats.top(10, 3):
        print(player)
```

Periaatteessa tämä kyllä toimisi. Tälläistä tapaa kutsutaan [taikanumeroiden](https://stackoverflow.com/questions/47882/what-are-magic-numbers-and-why-do-some-consider-them-bad) käytöksi. Tapaa pidetään ohjelmoijien keskuudessa erittäin paheksuttavana. Alun perin koodin kirjoittanut muistaa ehkä hetken mitä taikanumerot ilmaisevat. Kun aikaa kuluu ja koodarit vaihtuvat alkaa asia kuitenkin hämärtymään ja on omiaan aiheuttamaan ikäviä bugeja. Tämän takia taikanumeroita tulee välttää, ja käyttää niiden sijaan esim. enumeita tai vaikkapa vakioita (eli muuttujia, joiden arvoa ei muuteta).

### Tehtävien palautus

<input type="checkbox"> Lisää tehtävät 14-17 sisältävään repositorioosi (eli ns. palautusrepositorioosi) tiedosto _README.md_, mihin laitat linkin tehtävät 2-13 sisältävään ohtuvarasto-repositorioosi.

Palautusrepositorion pitäisi näyttää nyt suunnilleen seuraavalta

![]({{ "/images/lh1-31-22.png" | relative_url }})

<input type="checkbox"> Pushaa kaikki tekemäsi tehtävät (paitsi ne, joissa mainitaan, että tehtävää ei palauteta mihinkään) GitHubiin palautusrepositorioosi ja merkkaa tekemäsi tehtävät palautussovellukseen <{{site.stats_url}}>, välilehdelle _my submissions_.

- Kerro palautussovelluksessa tehtävät 14-17 sisältävä repositoriosi.
- Jos et tehnyt tehtäviä 14-17, voit laittaa linkin tehtävät 2-13 sisältävään ohtuvarasto-repositorioon.

Palautuslomakkeen löydät painamalla sinistä nappia

![]({{ "/images/lh1-palautus.png" | relative_url }})
