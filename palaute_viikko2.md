---
layout: page
title: Viikon 2 AI-tehtävän palaute
inheader: no
permalink: /palaute_viikko2/
---

Yhteenveto viikon 2 [tekoäly]-tehtävän ([Ensikosketus koodausagenttiin](/tehtavat2/#9-ensikosketus-koodausagenttiin-tekoäly)) palautteesta.

Vastaajia 39.

## Taustakysymykset

**Aiempi kokemus koodausagenteista**

| Kokemus | Vastaajia | Osuus |
|---|---|---|
| Ei kokemusta | 23 | 59 % |
| Olen joskus kokeillut | 10 | 26 % |
| Olen käyttänyt jonkin verran | 3 | 8 % |
| Käytän lähes päivittäin | 3 | 8 % |

Valtaosalle tehtävä oli ensikosketus agentteihin.

**Agentti kurssilla**

| Agentti | Vastaajia | Osuus |
|---|---|---|
| GitHub Copilot | 25 | 64 % |
| OpenCode | 14 | 36 % |

## Kommentit viikon 2 tehtävästä (28 vastausta)

Yleissävy on myönteinen: tehtävää pidettiin hyvänä ja opettavaisena johdatuksena agentteihin. Monen mielestä se oli kuitenkin kevyt ja lyhyt.

Toistuvat teemat:

- **Tokenien rajallisuus** oli selvästi yleisin moite. Kokeilu ja erehdys tuntui ahdistavalta, ja tokeneita kului paljon pienilläkin malleilla, kuten GPT 5.5 minillä. Lisäksi ihmeteltiin, miksi "rajoittamattomatkin" mallit kuluttavat rajoitettua kiintiötä.
- **Copilotin ongelmat:** Copilot tuntui sekavalta, sen muutoksia oli vaikea seurata ja inline-toiminto sekoili. Yksi vastaaja ei saanut Copilotia toimimaan ollenkaan ja jätti tehtävän väliin.
- **OpenCode sai kiitosta.** Sen nopeaa lisäämistä Copilotin rinnalle arvostettiin ja komentorivityöskentelystä innostuttiin. Windowsilla konfiguroinnissa oli kuitenkin vääntämistä.
- **Hyöty pienissä muutoksissa kyseenalaistettiin.** Yhden vastaajan mukaan pienet inkrementaaliset muutokset syntyvät nopeammin ilman agenttia, koska suurin aikasyöppö on agentin käytön "overhead" eikä odottelu.
- **Koodin laatu ja ymmärrettävyys:** Generoitu koodi toimi, mutta sen tyyli vaihteli. Agentin koodia on vaikeampi tarkistaa kuin omaa, joten virheitä voi helposti päästä läpi. Osa muokkasi koodia itse säilyttääkseen ymmärryksensä siitä.

## Mielipiteet AI:n yleistymisestä (31 vastausta)

Kanta on enimmäkseen pragmaattinen ja varauksellinen: agentteja pidetään väistämättöminä ja hyödyllisinä, mutta ne vaativat valvontaa ja ymmärrystä.

- **Myönteistä:** Agentit nopeuttavat mekaanisia ja toistuvia tehtäviä, kuten testejä ja lint-korjauksia. Ne myös mahdollistavat työskentelyn korkeammalla abstraktiotasolla, ja niiden osaamista arvostetaan työelämässä.
- **Ehtona ymmärrys:** Toistuva ajatus on, että ihmisen täytyy ymmärtää, mitä koodi tekee, ja hyväksyä muutokset viime kädessä itse. Vibe-koodaus ei korvaa ohjelmistotuotannon osaamista.
- **Huolet:**
  - työmarkkinat ja erityisesti aloittelijoiden asema ("kuin olisi ostanut Teboilin 2022")
  - kasvavat tehokkuusvaatimukset
  - omien taitojen rapautuminen ja koodikannan heikkenevä tuntemus
  - "slop" ja tyytyminen huonoon koodiin
  - ilmastovaikutukset
  - impostor-tunne, kun työ ei tunnu omalta
- **Kärkevimmät kommentit:** "pelottaa", "harmillista", "ei ole tuonut muuta kuin surua ja inhoa".
- **Opiskelunäkökulma:** Yksi vastaaja kokee, että opintojen työmäärä pakottaa käyttämään AI:ta, koska aikaa selvittää virheitä perinteisesti ei jää.

## Kehityskohteet palautteen perusteella

1. Tokenikiintiöt ja niiden toiminta kannattaa selittää selvemmin, tai kiintiötä voisi kasvattaa.
2. Copilotin käyttöönottoon tarvitaan parempaa tukea. OpenCode vaikuttaa toimivan sujuvammin.
3. Tehtävä voisi olla haastavampi tai laajempi, jos agenttien hyötyjä halutaan näyttää. Pienissä muutoksissa agentin hyöty jää helposti näkymättömiin.
4. Huolet työelämästä ja omasta oppimisesta tulisi käsitellä kurssilla, esimerkiksi työelämän näkökulmien kautta, koska niistä kysyttiin suoraan.
