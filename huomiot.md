# Materiaalin katselmointi: avoimet huomiot

Osien 0–5 katselmoinnissa löytyneet asiat, joita ei vielä ole korjattu. Osat 3–5 on käyty läpi marraskuussa 2026.

Tiedosto on jätetty Jekyll-buildin ulkopuolelle (`_config.yml` → `exclude`).

---

## Yleiset

- **Tietoisesti ennallaan:** Lean- ja Kanban-tausta toistuu osissa 2 ja 5. Osasta 4 on jätetty pois hexagonal-arkkitehtuuri sekä tapahtumapohjaisten järjestelmien ja API-suunnittelun yksityiskohdat (kuuluvat muille kursseille), ja pinotehdas on jätetty builderin motivaatioksi.

---

## Kalvot

Kalvot 5–10 tarkistettiin ja synkattiin materiaalin kanssa marraskuussa 2026. Luentojen 1–4 kalvoja ei ole tarkoitus tarkistaa.

Tarkoituksella pois kalvoilta (älä ehdota uudelleen): blue-green-deployment, mikropalvelujen kommunikaatio, yksikkötestibugin halvemmuus-väitteen lievennys, ATDD/BDD ja Given–When–Then, flaky-testit, stagingin GDPR-maininta, teksti-tv-ekvivalenssiesimerkki, Testcontainers ja Pact, expand/contract sekä Cunninghamin lainavertaus.

---

## Seuraavaan kurssiin

Muutokset, joita ei kannata tehdä kesken kurssin, koska ne koskevat jo tehtyjä tehtäviä tai miniprojektin arvosteluperusteita.

- **Pylint → Ruff.** Pylint on viikon 2 tehtävien 6–8 ja tekoälytehtävän ytimessä (.pylintrc, GitHub Actions, precommit hook), ja miniprojektin ohjeet ja arvosteluperusteet edellyttävät Pylint-sääntöjä CI:ssä. Muutos koskee ainakin tiedostoja pylint.md, tehtavat2.md, miniprojekti.md, _miniprojekti.md ja _mp_arvosteluperusteet.md sekä tehtävärepositorion .pylintrc-tiedostoja. osa3.md mainitsee Ruffin jo vaihtoehtona.
- **Osan 4 laskinesimerkki funktionaaliseksi.** Strategy-vaiheen `Summa`- ja `Tulo`-luokat voisi korvata funktioilla tai `operator`-moduulin funktioilla sanakirjassa (nyt mainittu vain lainauslaatikossa). Muutos koskee viikon 6 tehtäviä, jotka rakentuvat esimerkin varaan.
