# Materiaalin katselmointi: avoimet huomiot (syyskuu 2026)

Osien 0–5 katselmoinnissa löytyneet asiat, joita ei vielä korjattu. Nopeat faktavirheet ja osan 1 Scrum Guide 2020 -päivitys on jo tehty. Lokakuussa 2026 osat 0–3 tarkistettiin uudelleen, ja niiden korjatut kohdat on poistettu listalta.

Rivinumerot ovat suuntaa antavia, sillä korjaukset ovat siirtäneet rivejä. Kohdat löytyvät helpoimmin otsikon tai lainatun tekstin perusteella.

Tiedosto on jätetty Jekyll-buildin ulkopuolelle (`_config.yml` → `exclude`).

---

## Yleiset, kaikkia osia koskevat

- **Vanhentuneet aikailmaisut.** Moni asia esitetään "viime aikoina" tai "viime vuosina" yleistyneenä, vaikka se on 10–25 vuotta vanha. Osat 0–3 on korjattu. Jäljellä:
  - osa4: mikropalvelut "yleistynyt viime aikoina"
  - osa5: Lean "viime vuosina" vaikutteita antanut (johdanto), arvon virtauksen tehostaminen ja jatkuvaan toimittamiseen siirtyminen "viime aikoina" / "viime aikojen trendinä", "viime aikainen ketterien menetelmien kehitys" sekä "tuoreempia ei näytä löytyvän" (käyttöastetutkimukset)
- **Vanhentuneet ja kuolleet linkit.** Kaikissa osissa on http-linkkejä ja kadonneita sivustoja, esim. oualline.com, butunclebob.com, satisfice.com, IBM developerWorks, citeseerx, c2.com, alistair.cockburn.us, pcuf.fi, oodesign.com ja scaledagileframework.com (nykyään framework.scaledagile.com, korjattu osassa 1 mutta ei vielä osassa 5). Sourcemaking-linkit ovat nykyään refactoring.guru. Linkit kannattaa tarkistaa automaattisesti linkintarkistimella. Osan 3 http-linkit on tarkistettu: jäljellä olevat (butunclebob.com, extremeprogramming.org) eivät toimi https:llä.
- **Tutkimusaineisto.** Tutkimukset ja tilastot ovat pääosin vuosilta 2012–2022. Tilalle tai rinnalle kannattaa ottaa DORA-raportit (2019–2025), SPACE (Forsgren ym. 2021) ja DevEx (Noda ym. 2023). Osan 3 evidenssiosio on päivitetty DORA-tutkimuksella ja -mittareilla, jäljellä erityisesti osa 5.
- **Toistot osien välillä.** Vesiputousmallin ongelmat käsitellään osassa 3 ja osittain osassa 2 (osan 1 toisto on poistettu, osan 3 toistoja on tiivistetty). Lean- ja Kanban-tausta toistuu osissa 2 ja 5.

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
4. **Agile backlash ja kritiikki:** "Agile is dead" -keskustelu, sertifiointiteollisuus, Scrum Master -roolien karsinta 2023–2024 ja SAFe-kritiikin jatkuminen. Osassa 1 on nyt lyhyesti Dark Scrum, roolien karsinta ja Schwaberin *unSAFe at any speed*, joten osassa 5 voi syventää ja viitata osaan 1.
5. **Etä- ja hybridityön tutkimus.**
6. **Tekoäly** 1–2 virkkeenä ja linkkinä genai.md:hen: AI toimii vahvistimena (DORA 2025), ja katselmoinnista tulee uusi pullonkaula ("odotus"-hukka).

### Tiivistettävää
- Vanhat käyttöastekyselyt → yksi kappale ("ketterä on valtavirtaa").
- State of Agile -kuvat 2020–2022 → yksi kuva tai korvaus DORA-tuloksilla.
- Spotifyn squad-mittarit ja chapter/guild-yksityiskohdat, jos Team Topologies lisätään.
- Scrum of Scrums -historia.

---

## Seuraavaan kurssiin

Muutokset, joita ei kannata tehdä kesken kurssin, koska ne koskevat jo tehtyjä tehtäviä tai miniprojektin arvosteluperusteita.

- **Pylint → Ruff.** Pylint on viikon 2 tehtävien 6–8 ja tekoälytehtävän ytimessä (.pylintrc, GitHub Actions, precommit hook), ja miniprojektin ohjeet ja arvosteluperusteet edellyttävät Pylint-sääntöjä CI:ssä. Muutos koskee ainakin tiedostoja pylint.md, tehtavat2.md, miniprojekti.md, _miniprojekti.md ja _mp_arvosteluperusteet.md sekä tehtävärepositorion .pylintrc-tiedostoja. osa3.md mainitsee Ruffin jo vaihtoehtona.
