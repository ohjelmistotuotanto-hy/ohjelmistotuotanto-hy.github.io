# Materiaalin katselmointi: avoimet huomiot (syyskuu 2026)

Osien 1–5 katselmoinnissa löytyneet asiat, joita ei vielä korjattu. Nopeat faktavirheet ja osan 1 Scrum Guide 2020 -päivitys on jo tehty.

Rivinumerot ovat suuntaa antavia, sillä korjaukset ovat siirtäneet rivejä. Kohdat löytyvät helpoimmin otsikon tai lainatun tekstin perusteella.

Tiedosto on jätetty Jekyll-buildin ulkopuolelle (`_config.yml` → `exclude`).

---

## Yleiset, kaikkia osia koskevat

- **Vanhentuneet aikailmaisut.** Moni asia esitetään "viime aikoina", "viime vuosina" tai "uuden ajan" ilmiönä, vaikka se on 10–25 vuotta vanha. Esimerkkejä: Lean startup (2011), story mapping (2014), #NoEstimates (2012), continuous delivery (2010), trunk-based development, tutkiva testaus ja SAFe (2011). Aikailmaisut kannattaa käydä läpi hakemalla sanoja "viime", "uuden ajan" ja "tuore".
- **Vanhentuneet ja kuolleet linkit.** Kaikissa osissa on http-linkkejä ja kadonneita sivustoja, esim. oualline.com, butunclebob.com, satisfice.com, IBM developerWorks, citeseerx, c2.com, alistair.cockburn.us, pcuf.fi, oodesign.com ja scaledagileframework.com (nykyään framework.scaledagile.com). Sourcemaking-linkit ovat nykyään refactoring.guru. Linkit kannattaa tarkistaa automaattisesti linkintarkistimella.
- **"Facebook" → Meta** useassa kohdassa.
- **Tutkimusaineisto.** Tutkimukset ja tilastot ovat pääosin vuosilta 2012–2022. Tilalle tai rinnalle kannattaa ottaa DORA-raportit (2019–2025), SPACE (Forsgren ym. 2021) ja DevEx (Noda ym. 2023).
- **Lisenssi** on CC BY-NC-SA 3.0. Versiota 4.0 kannattaa harkita.
- **Toistot osien välillä.** Vesiputousmallin ongelmat käsitellään osassa 1 kahdesti, osassa 3 kolmesti ja osittain osassa 2. Lean- ja Kanban-tausta toistuu osissa 2 ja 5.
- **DevOpsin paikka.** sisallys.md ja osa4 lupaavat DevOpsia osaan 4, mutta se käsitellään osassa 3.

---

## Osa 1: Ohjelmistotuotanto ja Scrum

### Vielä korjattavaa
- **MIL-STD-498** on vuodelta 1994. Vesiputousta koskeva lainaus ja vuosi 2000 viittaavat todennäköisesti DoDI 5000.2 -ohjeeseen. Tarkista lähde.
- **Scrumban-linkki** osoittaa Poppendieckien Lean-kirjaan. Scrumbanin esitti Corey Ladas (2009).
- **SWEBOK:** mainitse versio 4.0 (2024).
- **"Palaamme ... osassa 2"** (ohjelmistotuotannon osa-alueiden yhteydessä): prosessia käsitellään itse asiassa tässä osassa.
- **Uncle Bobin Scrum-kritiikki** on vuodelta 2010. Kohta "30 Day Sprints are too long" on nykyään merkityksetön. Listan voisi tiivistää 3–4 kohtaan ja täydentää tuoreemmalla kritiikillä, esim. "agile industrial complex", Jeffries 2018 ja sertifiointiteollisuus.
- **Henkilökohtainen Copilot-maininta** LLM-osiossa vanhenee nopeasti. Sen voisi yleistää.
- **Ketterät periaatteet -luvussa** "self-organizing teams" on manifestin termi ja saa jäädä. Scrum-osuudessa termi on nyt päivitetty muotoon self-managing.

### Lisättävää
1. **Kanban omana vaihtoehtonaan ja hybridimallit.** Kanban Guide ja flow-mittarit (WIP, cycle time, throughput, work item age). Tutkimus (esim. HELENA, Kuhrmann ym.) osoittaa hybridien olevan valtavirtaa.
2. **Tekoälyn vaikutus prosessiin** 1–2 kappaleena, ja tarkemmin linkkinä genai.md:hen. DORA 2025: AI vahvistaa organisaation olemassa olevia vahvuuksia ja heikkouksia. METR 2025: kokeneet kehittäjät olivat 19 % hitaampia, vaikka kokivat olevansa nopeampia. Pullonkaula siirtyy vaatimuksiin ja katselmointiin.
3. **Etä- ja hybriditiimit.** Miten manifestin "face-to-face conversation" -periaatetta tulkitaan nyt: asynkroninen viestintä ja kirjallinen kulttuuri.
4. **Tuoteajattelu:** outcome vs. output ja tuotetiimit vs. projektit (Cagan). Liittyy PO:n rooliin.

### Tiivistettävää
- Sprintin pituus toistuu yhä useassa kohdassa (Scrum lyhyesti, vastuut ja artefaktit, Sprintti).
- Vesiputouksen ongelmien kertaus Scrum-luvun alussa on lähes toistoa aiemmasta.
- Daily scrumin historiaosuus: kolmen kysymyksen malli ja A Scrum Book -lainaus. Nyt kun 2020-kuvaus on mukana, historian voisi tiivistää.
- "Fertile soil" -viittaus (A Scrum Book) ja RUP-vertailu tuovat vähän lisäarvoa.

### Muuta
- **Koe- ja monivalintakysymykset** kannattaa tarkistaa Scrum-päivityksen jälkeen: 3–9 kehittäjää, sprint planningin kesto, kaksi vs. kolme aihetta, scrum masterin rooli hylkäämisessä ja potentially shippable.

---

## Osa 2: Vaatimusmäärittely

### Vanhentunutta
- **Kustannuskäyrä** ("On tunnettu tosiasia...") ja **epävarmuuden kartio** esitetään kiistattomina, vaikka niiden näyttö on kiistelty (Bossavit: *The Leprechauns of Software Engineering*; Todd Littlen data). Muotoilu kannattaa pehmentää.
- **Scrum Guide 2020 -termit:** backlog grooming → *refinement*, kehitystiimi → *Developers*, "sitoutua" sprintin sisältöön → sprint goal / forecast.
- **"Product backlog koostuu nimenomaan user storyistä"** ei pidä paikkaansa. Backlogissa on myös bugeja, teknistä velkaa ja spikeja.
- **"Alan suurimman auktoriteetin"**: auktoriteettipuhe kannattaa poistaa.
- **User story -formaattien suosiokaavio** on vanha kuva ilman lähdettä tai vuotta.
- **Pelien koukuttavuuden maksimointi** esimerkkinä on eettisesti ongelmallinen, koska DSA kieltää dark patternit.
- **Estimoinnin painotus:** story pointit, skaalat, planning poker ja velositeetti vievät noin 200 riviä. Velositeetin käyttö tavoitteena tai tiimien vertailussa kannattaisi nostaa esiin anti-patternina.
- **Definition of Ready** esitetään ongelmattomana, vaikka tiukka DoR-portti tunnetaan anti-patternina.
- **"Fyysinen taskboard ylivertainen" / "paras käytäntö"** ei vastaa hybridityön aikaa.
- **Työkalulista:** Pivotal Tracker lopetettiin 2025. Trac ja Bugzilla ovat bugiseurantajärjestelmiä. Nykyisiä vaihtoehtoja ovat Jira, Linear, GitHub Projects ja Azure Boards.
- **Tuntiburndown ja taulukkolaskentapohja** ovat historiallista käytäntöä.
- **A/B-testin rinnastus spikeen** ontuu, ja MVP ja A/B-testaus sekoittuvat keskenään.
- **Linkit:**
  - Richard Lawrencen user story -linkissä on välilyönti, ja sivusto on nykyään humanizingwork.com
  - Shoren *Art of Agile Development* -kirjasta on 2. painos
  - pcuf.fi-PDF (2009)
  - karhatsu (2013)
  - Scrumban-kandi

### Lisättävää
1. **Outcome vs. output, product discovery ja dual-track:** opportunity solution tree (Torres), OKR:t ja hypoteesipohjainen backlog.
2. **Kokeilu tuotannossa:** feature flagit, canary-julkaisu ja A/B-testauksen edellytykset (käyttäjämäärä, tilastollinen voima, mittarit). Kytkee Lean startupin osan 3 CI/CD:hen.
3. **Sääntely ei-toiminnallisina vaatimuksina:**
   - EU:n saavutettavuusdirektiivi (EAA), velvoitteet 28.6.2025 alkaen (WCAG 2.2 / EN 301 549)
   - Cyber Resilience Act (raportointivelvoite 9/2026 alkaen) ja security by design
   - AI Act, NIS2
   - GDPR on jo mainittu
4. **Flow-pohjainen ennustaminen:** throughput, cycle time ja Monte Carlo -simulaatio. Luonteva jatko #NoEstimates-osiolle.
5. **Tekoäly vaatimustyössä:** storyjen ja hyväksymiskriteerien luonnostelu sekä hyväksymiskriteerit agentin speksinä. Lyhyt maininta ja linkki genai.md:hen.
6. **Jobs-to-be-done ja impact mapping** kartoitusmenetelmiin.

### Tiivistettävää
- Taskilista esiintyy kahdesti.
- Tuntiestimointi, tuntiburndown ja taulukkolaskentataulu: pari lausetta historiana riittää.
- Product ownerin uudelleenpriorisointiesimerkit A–D ja neljä kuvaa: yksi kappale riittää.
- Vesiputousosio on osittain päällekkäinen osan 1 kanssa.
- Planning pokerin ja skaalojen yksityiskohdat: suhteellinen estimointi riittää periaatteen tasolla.
- Lean- ja Kanban-tausta on päällekkäinen osan 5 kanssa.

---

## Osa 3: Laadunhallinta, testaus, CI/CD

### Vanhentunutta
- **"Bugit on taloudellisesti edullista paikallistaa mahdollisimman aikaisin"** esitetään tunnettuna tosiasiana, vaikka evidenssi on heikko (Menzies ym. 2017, "Are delayed issues harder to resolve?"). Muotoilu kannattaa pehmentää.
- **Jenkins "todennäköisesti yhä maailman käytetyin"**: kyselyissä GitHub Actions on nykyään edellä. Travis (travis-ci.org suljettiin 2021) kannattaa poistaa ja lisätä tilalle GitLab CI.
- **"Yksittäinen palvelin varataan CI-palvelimeksi"**: nykyään käytetään efemeerisiä kontitettuja runnereita.
- **Feature toggle:** vakiintunut termi on nykyään *feature flag* (mm. CNCF:n OpenFeature).
- **Blue-green** on ensisijaisesti julkaisutekniikka eikä "tuotannossa testaamisen tekniikka", ja kohdassa sekoittuu mukaan liikenteen peilaus (shadow traffic).
- **Järjestelmätestauksesta vastaavat "laadunhallinnasta vastaavat ihmiset"** on ristiriidassa myöhemmin esitetyn cross-functional-tiimin kanssa.
- **Feature branchit vs. TBD:** vastakkainasettelu "feature branchit turvallisempia aloittelijoille" on keinotekoinen. Nykykäytäntö on lyhytikäiset branchit + PR + merge queue, mikä on trunkbaseddevelopment.com:n mukaan TBD:tä.
- **Työkalut:**
  - Pylint → Ruff (koskee myös pylint.md:tä)
  - Airbnb-tyyliopas on käytännössä ylläpitämätön
  - Coverage-linkissä on kovakoodattu versio 7.11.0
- **BDD:** Robot Framework esitetään yhtenä suosituimmista, vaikka se on kapea-alainen. Cucumber ja Gherkin (Given–When–Then) puuttuvat kokonaan.
- **Esimerkit:** Flickr ja TMC:n noin 2013 pull request ovat vanhoja. PR-esimerkki kuvaa fork-mallin, vaikka tiimeissä PR tehdään normaalisti saman repon branchista.
- **Pariohjelmointitutkimus** on noin vuodelta 2000. Tilalle esim. meta-analyysi Hannay ym. 2009.
- **Accelerate** (data 2013–2017) ei ole enää "toistaiseksi vakuuttavin" evidenssi. Päivitä DORA-raporteilla.

### Lisättävää
1. **DORA-metriikat** (deployment frequency, lead time, change fail rate, recovery time, rework rate) evidenssiosioon, ja ristiviite genai.md:n AI-havaintoihin.
2. **Observability ja SRE:** lokit, metriikat ja jäljet (OpenTelemetry), SLO:t ja error budget sekä blameless postmortem. Canary-osio nojaa monitorointiin, mutta käsitteitä ei esitellä.
3. **Toimitusketjun turvallisuus ja DevSecOps:** Dependabot/Renovate, SAST (CodeQL), salaisuuksien skannaus ja SBOM. Cyber Resilience Act tekee aiheesta ajankohtaisen.
4. **Nykyaikainen testausstrategia:** testing trophy / honeycomb (tukee omaa kantaasi pyramidia vastaan), contract testing (Pact), flaky testit.
5. **Property-based testing** (Hypothesis) ekvivalenssiluokkien jatkoksi. Mutaatiotestauksen työkalut (mutmut, Stryker, PIT) ja maininta, että mutaatiotestauksella voi arvioida AI:n generoimia testejä.
6. **Expand/contract (parallel change)** -skeemamigraatiot. Tietokantamuutoksia käsittelevä kohta kuvaa ongelman mutta ei ratkaisua.

### Tiivistettävää
- Vesiputousmallin integraatiohelvetti toistuu kolmesti.
- Daily build ja smoke test: 2–3 lausetta historiana riittää.
- Travis- ja Jenkins-kappale: yksi lause riittää.
- TMC-kuvakaappaukset: korvaa ajankohtaisella esimerkillä tai poista, koska AI-katselmointiesimerkki on jo mukana.
- Vuoden 2016 kyselylomakkeen kysymykset: korvaa DORA-metriikoilla.

---

## Osa 4: Ohjelmiston suunnittelu

### Vielä korjattavaa (koodi)
- **Pinorakentajan immutability-väite ei pidä.** Oletusargumenttibugi on korjattu, mutta dekoroidut pinot jakavat edelleen saman sisemmän `Pino`-olion. Esimerkin `kryptattu_pino` ja `kryptattu_loki_pino` käsittelevät siis samaa dataa. Korjaus: rakentaja säilyttää olion sijaan *tehdasfunktion*, ja `pino()` luo aina uuden pinon:
  ```python
  class Pinorakentaja:
      def __init__(self, luo_pino=Pino):
          self._luo_pino = luo_pino

      def prepaid(self, krediitit):
          return Pinorakentaja(lambda: PrepaidPino(self._luo_pino(), krediitit))

      def pino(self):
          return self._luo_pino()
  ```
  Samalla tekstin selitys ("rakentaja pitää oliomuuttujassa rakentumassa olevaa pinoa") muuttuu.

### Vanhentunutta
- **"Pythonissa ei ole selkeää rajapinnan käsitettä"** on vanhentunut, sillä `typing.Protocol` (PEP 544) ja ABC:t ovat olemassa. Missään esimerkissä ei ole tyyppivihjeitä. Duck typingin rinnalle kuuluu Protocol + mypy/pyright.
- **Java-henkiset suunnittelumallit:**
  - `@staticmethod`-tehtaat: Pythonissa `@classmethod` tai moduulitason funktio
  - strategy ja command (Summa- ja Tulo-luokat): Pythonissa funktiot tai `operator`-moduuli sanakirjassa
  - aliluokkien `__init__`, joka vain kutsuu `super()`, on tarpeeton
  - builder korvautuu usein avainsana-argumenteilla tai dataclassilla
  - nimi "dekoraattori" sekoittuu Pythonin `@decorator`-syntaksiin, ja ero pitäisi mainita
- **IEEE 1471-2000** on korvattu standardilla ISO/IEC/IEEE 42010 (2011/2022).
- **"Ei yleisesti käytössä olevaa notaatiota"** ei enää pidä: C4-malli ja diagrams-as-code (Mermaid, Structurizr) ovat de facto -standardeja.
- **Mikropalvelut:**
  - "yleistynyt viime aikoina" on vanhentunut, ja mikropalvelut esitetään kerrosarkkitehtuurin ratkaisuna
  - vuoden 2026 konsensus: modulaarinen monoliitti oletuksena, ja mikropalvelut perustellaan organisaation ja skaalan kautta (Conwayn laki, esim. Prime Video 2023)
  - "muutokset yhdessä palvelussa eivät vaikuta mihinkään muualle" on liian vahva väite
- **Redux** esimerkkinä on vanhahko.
- **"Kommentit koodihajuna"** on liian jyrkkä. Docstringit ja "miksi"-kommentit ovat arvokkaita, myös AI-agenttien kontekstina.
- **Linkit:** courses.helsinki.fi, IBM developerWorks, citeseerx, alistair.cockburn.us, infoq 2008, c2.com, Clean Code cheat sheet 2011, oodesign.com ja sourcemaking.

### Lisättävää
1. **Modulaarinen monoliitti** ja päätöskriteerit mikropalveluille.
2. **Hexagonal / ports & adapters / clean architecture:** luonteva jatke DI:lle ja repositoriolle.
3. **C4-malli ja ADR:t laajemmin.** Nyt ADR on vain yksi linkki. Molemmat toimivat myös AI-agenttien kontekstina.
4. **Tyyppivihjeet, Protocol ja staattinen analyysi** (mypy/pyright, Ruff). "Program to an interface" konkretisoituu Pythonissa juuri näin.
5. **Tapahtumapohjainen arkkitehtuuri ja API-suunnittelu:** idempotenssi, versiointi, outbox, sync vs. async sekä REST/gRPC/OpenAPI lyhyesti.
6. **AI:n vaikutus tekniseen velkaan:** GitClear-havainnot DRY- ja refaktorointilukujen yhteyteen. Mukaan arkkitehtuurin fitness functionit, esim. import-linter.

### Tiivistettävää
- Arkkitehtuurin määritelmät: kolme pitkää sitaattia → yksi sitaatti ja Fowler.
- Nollasprintti ja Schwaber-kiista ovat historiallinen sivupolku.
- Laskinesimerkki (noin 300 riviä, strategy → command → template method): strategy-vaiheen voi tiivistää funktioiksi.
- Pinotehdas on välivaihe ennen builderia, ja sen voi lyhentää.
- `map`- ja `filter`-selitykset: list comprehension on idiomaattisempi.
- Tiivistä C-koodia koskeva kappale on vanhanaikainen johdanto.

---

## Osa 5: Lean, laajan skaalan ketterä, tutkimus

### Vanhentunutta
- **Scrum Guide 2020 -jäänteet:** "3-9 henkilöä" (Scrum of Scrums -kohta), "5-10 % backlog groomingiin" (prosenttiluku on poistettu guidesta, ja termi on nykyään *refinement*) ja "potentially shippable".
- **State of Agile:**
  - luvut ovat vuosilta 2020–2022
  - "jo 15 vuoden ajan" on vanhentunut
  - raportin muoto on muuttunut, joten SAFe-osuuden "vuosittaisten kyselyjen 30–40 %" jää ilman tuoretta lähdettä
- **Disciplined Agile -linkki:** PMI osti DA:n 2019, joten linkki kannattaa päivittää.
- **SAFe-linkki** → framework.scaledagile.com. Tarkista myös, onko version 6.0 jälkeen tullut uutta versiota.
- **Käyttöastetutkimukset** ovat vuosilta 2012–2018 (PMI, Stack Overflow, Oulu, HELENA, Nitor, Deloitte), ja väite "tuoreempia ei näytä löytyvän" ei enää pidä. Uudempaa on esim. Edison, Wang & Conboy 2022 (IEEE TSE).
- **Chaos Report** esitetään ilman menetelmäkritiikkiä (Eveleens & Verhoef 2010, Glass). Päätelmä "ketterät näyttävät toimivan paremmin" on vahva näin heikolle datalle.
- **"64 % toiminnallisuuksista"** perustuu Standishin vuoden 2002 anekdoottiin, ja linkattu Cohnin kirjoitus kyseenalaistaa sen. Luku ei saa näyttää faktalta.
- **Spotify-malli:** tekstin kannattaa sanoa suoraan, ettei mallia koskaan toteutettu Spotifylla sellaisenaan. Otsikko "Spotifyn ketterän skaalaamisen viitekehys" vahvistaa myyttiä. Oletus, että koko heimo työskentelee samassa kerroksessa, on vanhentunut, sillä Spotify on "Work From Anywhere" -yritys.
- **Pienemmät:**
  - väite, että Nokia soveltaa edelleen LeSSiä, on tarkistamatta
  - "lanseeraavat" on väärässä aikamuodossa
  - HY:n lean-tilaisuudet
  - lean primer -linkki on http-muotoinen

### Lisättävää
1. **Team Topologies** (stream-aligned-, platform-, enabling- ja complicated-subsystem-tiimit, kognitiivinen kuorma) ja **platform engineering**. Päivittää Spotify-osuutta.
2. **Flow-mittarit ja value stream management:** Flow Framework (Kersten), flow time, throughput ja flow efficiency. Jatkaa lean-osuutta.
3. **DORA / SPACE / DevEx** State of Agilen ja Chaos Reportin tilalle tai rinnalle.
4. **Agile backlash ja kritiikki:** "Agile is dead" -keskustelu, sertifiointiteollisuus, Scrum Master -roolien karsinta 2023–2024 ja SAFe-kritiikin jatkuminen.
5. **Etä- ja hybridityön tutkimus.**
6. **Tekoäly** 1–2 virkkeenä ja linkkinä genai.md:hen: AI toimii vahvistimena (DORA 2025), ja katselmoinnista tulee uusi pullonkaula ("odotus"-hukka).

### Tiivistettävää
- Vanhat käyttöastekyselyt → yksi kappale ("ketterä on valtavirtaa").
- State of Agile -kuvat 2020–2022 → yksi kuva tai korvaus DORA-tuloksilla.
- Spotifyn squad-mittarit ja chapter/guild-yksityiskohdat, jos Team Topologies lisätään.
- Scrum of Scrums -historia.

---

## Tehtäviä koskevat huomiot

- **tehtavat3.md:** kuva _images/seleniumerror.png_ (debuggausosio) on Selenium-ajalta. Tilalle kannattaa ottaa Browser-kirjaston kuvakaappaus raportista _log.html_.
- **pylint.md** ja siihen viittaavat tehtävät: Ruff Pylintin tilalle tai rinnalle.
- **sisallys.md:** osan 4 linkeissä on 13 vanhentunutta `viikko-5`-ankkuria, vaikka luvut on nykyään merkitty viikolle 6. Lisäksi osa5:n linkeissä on kaksi rikkinäistä ankkuria (työntekijöiden tarpeeton liikkuminen, muu tiimien välinen koordinointi).
