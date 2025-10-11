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

## CurreChat

....

[CurreChat](<{{site.curre}}>)

## Viikko 1 - Tehtävä 1

[Tehtävässä](http://localhost:4000/tehtavat1#1-komentorivi) on iheena riittävän komentoriviosaamisen varmistaminen. Tehtävässä annetaan linkki muutamaan materiaaliin, näiden läpikäymisen sijaan voi pyytää ChatGPT:tä sopivaa oppimateriaalia aiheesta. Otetaan osa tehtävänannosta ja muotoillaan sopiva prompti:

![]({{ "/images/cc1.png" | absolute_url }}){: width="70%"}

AI luo oppimateriaalin:

![]({{ "/images/cc2.png" | absolute_url }})

AI:ta voi myös pyytää generoimaan tehtäviä aiheesta:

![]({{ "/images/cc3.png" | absolute_url }})

Kysymysten yhteyteen tulleet vihjeet spoilaavat ehkä liikaa. AI:ta voi toki pyytää poistamaan vihjeet. 

Omat vastaukset voi tietysti antaa AI:n tarkastettavaksi. Kuten aina, myös oppimateriaalia ja tehtäviä generoitaessa on mahdollista, että AI hallusinoi ja kertoo mitä sattuu. Linuxin komentorivin kaltaisesta aihepiiristä kysyttäessä hallusinoinnin todennäköisyys ei ole kovin korkea, ja esim. hallusinoidut komentojen virheelliset muodot selviävät nopeasti kokeillessa. 

## Viikko 1 - Tehtävä 3

Kuten olettaa saattaa, AI osaa Gitiä varsin hyvin. Esim. sopivan .gitignore-tiedoston saa helposti:

![]({{ "/images/cc4.png" | absolute_url }})

Voi olla hyödyllisempää ja/tai opettavaisempaa opetella asia pidemmän kaavan kautta ja syvällisemmin [dokumentaatiosta](https://git-scm.com/docs/gitignore). Tai sitten ei. Oleellista lienee ymmärtää .gitignore:n käytön periaatteet mutta ehkä tarkka syntaksi on sellainen asia, että sen opettelu lähinnä kuormittaa, ja detaljien ulkoistaminen AI:lle on järkevää. Toki tässäkin tapauksessa on varmistettava, että tiedosto on oikein konfiguroitu, ja että vääriä tiedostoja ei pääse lipsahtamaan versionhallinnan alaisuuteen.

## Viikko 1 - Tehtävä 8

AI:n avulla on luonnollisestikin helppo generoida koodin lisäksi myös testejä. Chat-käyttöliittymän sijaan koodin ja erityisesti testien generointiin on parempi käyttää kehittyneimpiä välineitä, esim. VS Codeen sisäänrakennettua [Copilot agenttimoodia](https://code.visualstudio.com/docs/copilot/copilot-coding-agent). Agenttimoodissa tekoäly voi koodin kirjoittamisen lisäksi luoda tiedostoja, ja suorittaa koodia. Agenttimoodia käyttämällä tekoäly voikin yrittää korjailla ja parannella omia tekemisiään, ja koodarin ei tarvitse kopioida esim. koodin aiheuttamia virheilmoituksia tekoälylle.

Kokeillaan miten agenttimoodi selviää viikon 1 tehtävästä 8. Konfiguraatiden jälkeen agentti saadaan auki yläreunan kuvakkeesta:

![]({{ "/images/cc5.png" | absolute_url }}){: width="90%"}

Valittavana on iso kasa erilaisia kielimalleja, itse olen viime aikoina tykästynyt Claude Sonet 4:n.

Annetaan agentille ohje:

_generate tests for varasto.py so that branch coverage is 100%_

![]({{ "/images/cc-6.png" | absolute_url }}){: width="90%"}

Agentti kertoo mitä on tekemässä, eli ensin se haluaa suorittaa komennon, joka selvittää testikattavuuden. Komento näyttää hieman oudolta, ja suoritusluvan antamisen jälkeen selviää, että se ei toimi. Agentti ehdottaakin uutta komentoa:

![]({{ "/images/cc-7.png" | absolute_url }}){: width="90%"}

Uusi komento toimii, ja muutaman muunkin komennon suoritettuaan agentti on tehnyt ehdotuksen uusista testeistä, joiden avulla kattavuus saadaan sataan prosenttiin:

![]({{ "/images/cc-8.png" | absolute_url }})

Vastuumme tuntevina koodareina käydään testit läpi. Agentti on laittanut testeihin ehkä turhan runsaasti kommentteja sillä testien tarkoitusperä käy ilmi jo testin nimestä. Poistetaan turhat kommentit (tai pyydetään agenttia poistamaan ne) ja commitoidaan muutokset GitHubiin.