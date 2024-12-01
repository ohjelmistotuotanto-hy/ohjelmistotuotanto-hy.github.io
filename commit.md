---
layout: page
title: Commitin kuvaaminen
inheader: no
permalink: /commit
---

Hyvä commit ja hyvä commit-viesti ovat kriittisiä osia ohjelmistokehityksen versionhallinnassa. Ne parantavat koodin luettavuutta, helpottavat virheiden jäljittämistä ja tekevät yhteistyöstä tehokkaampaa. Seuraavassa muutamia vinkkejä hyvän commitin ja commit-viestin luomiseen:

#### Hyvä commit:

**Yksi asia kerrallaan:** Jokaisen commitin tulisi tehdä vain yksi looginen muutos. Tämä tekee muutosten seuraamisesta ja mahdollisten virheiden löytämisestä helpompaa.
Pienet ja tiheät commitit: Pienet commitit ovat helpommin hallittavissa ja testaamisessa. Tiheät commitit varmistavat, että muutokset eivät kasva liian suuriksi ja vaikeasti hallittaviksi.

**Testattavuus:** Varmista, että commitit ovat testattavissa ja että koodi toimii jokaisen commitin jälkeen. Tämä auttaa välttämään rikkinäisiä tiloja koodipohjassa.

#### Hyvä commit-viesti:

- Selkeä ja kuvaava otsikko: Ensimmäinen rivi (otsikko) tulisi olla lyhyt ja ytimekäs, yleensä alle 50 merkkiä. Sen tulisi kertoa selkeästi, mitä muutos tekee.
- Käytä imperatiivimuotoa: Käytä imperatiivimuotoa (esim. "Lisää", "Korjaa", "Poista"), koska se on yleisesti hyväksytty tapa ja tekee commit-viesteistä yhdenmukaisia.
- Kuvaile muutokset tarkemmin: Otsikon jälkeen voi olla tyhjä rivi ja sitten tarkempi kuvaus muutoksista. Tämä osa voi olla pidempi ja se voi sisältää lisätietoja, kuten miksi muutos tehtiin ja mitä vaikutuksia sillä on.
- Linkitä asiaankuuluvia tietoja: Jos commit liittyy johonkin bugiraporttiin, tai muuhun tikettiin, mainitse se commit-viestissä (esim. "Fixes #123" tai "Completes #234").

Esimerkki hyvästä commit-viestistä:

<pre>

Lisää käyttäjän kirjautumisvalidaatio

- Lisää tarkistus käyttäjänimen ja salasanan pituudelle
- Lisää virheilmoitukset puuttuville kentille
- Päivitä testit kattamaan uudet validointisäännöt

Korjaa issuen #42

</pre>

Tämä viesti kertoo selkeästi, mitä commit tekee, antaa lisätietoja tehdyistä muutoksista ja linkittää asiaankuuluvaan bugiraporttiin.

Noudattamalla näitä periaatteita parannat koodin hallittavuutta ja teet yhteistyöstä muiden kehittäjien kanssa sujuvampaa.

Lisää hyvistä commiteista esim. seuraavissa:
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Cbeams: How to Write a Git Commit Message](https://cbea.ms/git-commit/)