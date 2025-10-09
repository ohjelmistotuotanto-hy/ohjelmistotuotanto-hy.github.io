---
layout: page
title: Generatiivinen AI koodarin apuna
inheader: no
permalink: /genai/
---

Suuret kielimallit, kuten [ChatGPT](https://chatgpt.com/auth/login), [Claude](https://claude.ai/login?returnTo=%2F%3F) ja GitHub [Copilot](https://github.com/features/copilot) ovat osoittautuneet erittäin hyödyllisiksi ohjelmistokehityksessä.

Itse käytän pääasiassa Copilottia, joka on nykyään natiivisti integroitu VS Codeen. Lisäksi yliopisto-opiskelijat saavat Copilot Pro -version käyttöönsä ilmaiseksi GitHub [Student Developer Packin](https://education.github.com/pack) kautta.

Copilotin ja muiden kielimallien antamien vihjeiden hyödyllisyyden aste vaihtelee. Kielimallien ehkä suurin ongelma on hallusinointi, ne generoivat välillä täysin vakuuttavan näköisiä vastauksia mitkä kuitenkin ovat täysin päättömiä. Ohjelmoidessa toki hallusinoitu koodi jää usein nopeasti kiinni jos koodi ei toimi. Ongelmallisempia tilanteita ovat ne, missä kielimallin generoima koodi näyttää toimivan, mutta se sisältää vaikeammin havaittavia bugeja tai esim. tietoturvahaavoittuvuuksia.

Toinen ongelma kielimallien soveltamisessa ohjelmistokehitykseen on se, että kielimallien on vaikea "hahmottaa" isompia projekteja, ja esim. generoida toiminnallisuutta, joka edellyttäisi muutoksia useisiin tiedostoihin. Kielimallit eivät myöskään nykyisellään osaa yleistää koodia, eli jos koodissa on esim. olemassaolevia funktioita tai komponentteja, joita kielimalli pystyisi pienin muutoksin hyödyntämään siltä pyydettyyn toiminnallisuuteen, ei kielimalli tähän taivu. Tästä voi olla seurauksena se, että koodikanta rapistuu sillä kielimallit generoivat koodiin paljon toisteisuutta, ks. lisää esim. täältä.

Kielimalleja käytettäessä vastuu siis jää aina ohjelmoijalle.

Kielimallien nopea kehitys asettaa ohjelmointia opiskelevan haastavaan asemaan: kannattaako ja tarvitseeko enää ylipäätään opetella ohjelmointia vanhan liiton tyyliin, kun lähes kaiken saa kielimalleilta valmiina?

Tässä kohtaa kannattaa muistaa C-kielen kehittäjän Brian Kerninghamin vanha viisaus

![]({{ "/images/kerningham.png" | absolute_url }})

Eli koska ongelmien selvittely on kaksi kertaa vaikeampaa kuin ohjelmointi, ei kannata ohjelmoida sellaista koodia minkä vain juuri ja juuri itse ymmärtää. Miten debuggaus mahtaakaan onnistua tilanteessa missä ohjelmointi on ulkoistettu kielimallille ja ohjelmistokehittäjä ei ymmärrä debugattavaa koodia ollenkaan?

Toistaiseksi kielimallien ja tekoälyn kehitys on vielä siinä vaiheessa, että ne eivät ole itseriittoisia, ja vaikeimmat ongelmat jäävät ihmisten selvitettäväksi. Tämän takia aloittelevienkin ohjelmistokehittäjien on kaiken varalta opeteltava ohjelmoimaan todella hyvin. Voi olla, että kielimallien kehityksestä huolimatta tarvitaankin entistä syvällisempää osaamista. Tekoäly tekee ne helpot asiat, mutta ihmistä tarvitaan kaikkein kiperimpien tekoälyn aiheuttamien sotkujen selvittelyyn. GitHub Copilot onkin varsin hyvin nimetty tuote, kyseessä on Copilot eli lentoperämies/nainen. Ohjelmoija on edelleen kapteeni ja kantaa lopullisen vastuun.

## Viikko 1 - Tehtävä 1

koe

![]({{ "/images/cc1.png" | absolute_url }})

toinen koe

![]({{ "/images/cc2.png" | absolute_url }})