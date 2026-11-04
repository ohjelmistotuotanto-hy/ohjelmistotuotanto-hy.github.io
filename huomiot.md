# Materiaalin katselmointi: avoimet huomiot (syyskuu 2026)

Osien 0–5 katselmoinnissa löytyneet asiat, joita ei vielä korjattu. Nopeat faktavirheet ja osan 1 Scrum Guide 2020 -päivitys on jo tehty. Lokakuussa 2026 osat 0–3 tarkistettiin uudelleen, ja niiden korjatut kohdat on poistettu listalta.

Rivinumerot ovat suuntaa antavia, sillä korjaukset ovat siirtäneet rivejä. Kohdat löytyvät helpoimmin otsikon tai lainatun tekstin perusteella.

Tiedosto on jätetty Jekyll-buildin ulkopuolelle (`_config.yml` → `exclude`).

---

## Yleiset, kaikkia osia koskevat

- **Vanhentuneet aikailmaisut.** Moni asia esitetään "viime aikoina" tai "viime vuosina" yleistyneenä, vaikka se on 10–25 vuotta vanha. Osat 0–4 on korjattu. Jäljellä:
  - osa5: Lean "viime vuosina" vaikutteita antanut (johdanto), arvon virtauksen tehostaminen ja jatkuvaan toimittamiseen siirtyminen "viime aikoina" / "viime aikojen trendinä", "viime aikainen ketterien menetelmien kehitys" sekä "tuoreempia ei näytä löytyvän" (käyttöastetutkimukset)
- **Vanhentuneet ja kuolleet linkit.** Kaikissa osissa on http-linkkejä ja kadonneita sivustoja, esim. oualline.com, butunclebob.com, satisfice.com, IBM developerWorks, citeseerx, c2.com, alistair.cockburn.us, pcuf.fi, oodesign.com ja scaledagileframework.com (nykyään framework.scaledagile.com, korjattu osassa 1 mutta ei vielä osassa 5). Sourcemaking-linkit ovat nykyään refactoring.guru. Linkit kannattaa tarkistaa automaattisesti linkintarkistimella. Osien 3 ja 4 linkit on tarkistettu: osan 3 jäljellä olevat http-linkit (butunclebob.com, extremeprogramming.org) eivät toimi https:llä, ja osan 4 kuolleet linkit on korvattu arkistokopioilla tai poistettu.
- **Tutkimusaineisto.** Tutkimukset ja tilastot ovat pääosin vuosilta 2012–2022. Tilalle tai rinnalle kannattaa ottaa DORA-raportit (2019–2025), SPACE (Forsgren ym. 2021) ja DevEx (Noda ym. 2023). Osan 3 evidenssiosio on päivitetty DORA-tutkimuksella ja -mittareilla, jäljellä erityisesti osa 5.
- **Toistot osien välillä.** Vesiputousmallin ongelmat käsitellään osassa 3 ja osittain osassa 2 (osan 1 toisto on poistettu, osan 3 toistoja on tiivistetty). Lean- ja Kanban-tausta toistuu osissa 2 ja 5.

---

## Osa 4: Ohjelmiston suunnittelu

Katselmoitu ja korjattu. Tietoisesti jätetty pois, koska aiheet kuuluvat muille kursseille: hexagonal-arkkitehtuuri (ports & adapters) sekä tapahtumapohjaisten järjestelmien ja API-suunnittelun yksityiskohdat (idempotenssi, versiointi, outbox). Pinotehdas jätettiin ennalleen builderin motivaatioksi.

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
- **Osan 4 laskinesimerkki funktionaaliseksi.** Strategy-vaiheen `Summa`- ja `Tulo`-luokat voisi korvata funktioilla tai `operator`-moduulin funktioilla sanakirjassa (nyt mainittu vain lainauslaatikossa). Muutos koskee viikon 6 tehtäviä, jotka rakentuvat esimerkin varaan.
