---
layout: page
title: Generatiivinen AI kurssilla
inheader: no
permalink: /genai/
---

### Kurssin GPT

Kurssilla on käytössä HY:n tarjoama [CurreChat](<{{site.curre}}>), joka on Azuressa hostattu GPT-pohjainen chat, johon syötettyä materiaalia ei käytetä kielimallien kouluttamiseen.

Chatia on mahdollisuus käyttää "normaalisti", tai siten, että Chatin hakuindeksinä (ks. lisää [täältä](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)) on kurssimateriaali. Hakuindeksi otetaan käyttöön valitsemalla alustukseksi _Materiaali_:

![]({{ "/images/chat0.png" | absolute_url }}){: width="70%"}

Hakuindeksiä käytettäessä Chat pyrkii vastaamaan kysymyksiin ainoastaan materiaaliin pohjautuen:

![]({{ "/images/chat2.png" | absolute_url }}){: width="70%"}

Hakuindeksiä käyttäessä mahdollisuus AI:n hallusinoinnille on paljon pienempi kuin chatin vapaassa käytössä. Virheet ovat kuitenkin mahdollisia, ja käyttö tapahtuu omalla vastuulla, tärkeät asiat kuten vaikkapa kokeen aika ja paikka tulee aina tarkastaa kurssisivulta.

### Kielimallit koodarin apuna

Laajat kielimallit, kuten [ChatGPT](https://chatgpt.com/auth/login), [Claude](https://claude.ai/login?returnTo=%2F%3F) ja GitHub [Copilot](https://github.com/features/copilot) ovat osoittautuneet erittäin hyödyllisiksi ohjelmistokehityksessä.  

Itse käytän koodatessa pääasiassa GitHub Copilottia, joka on nykyään natiivisti integroitu VS Codeen.  Yliopisto-opiskelijat saavat Copilot Pro -version käyttöönsä ilmaiseksi GitHub [Student Developer Packin](https://education.github.com/pack) kautta.

Copilotin ja muiden kielimallien antamien vihjeiden hyödyllisyyden aste vaihtelee. Kielimallien ehkä suurin ongelma on hallusinointi, ne generoivat välillä täysin vakuuttavan näköisiä vastauksia mitkä kuitenkin ovat täysin päättömiä. Ohjelmoidessa toki hallusinoitu koodi jää usein nopeasti kiinni jos koodi ei toimi. Ongelmallisempia tilanteita ovat ne, missä kielimallin generoima koodi näyttää toimivan, mutta se sisältää vaikeammin havaittavia bugeja tai esim. tietoturvahaavoittuvuuksia.

Toinen ongelma kielimallien soveltamisessa ohjelmistokehitykseen on se, että kielimallien on vaikea hahmottaa isompia projekteja, ja esim. generoida toiminnallisuutta, joka edellyttäisi muutoksia useisiin tiedostoihin. Kielimallit eivät myöskään nykyisellään osaa yleistää koodia, eli jos koodissa on esim. olemassaolevia funktioita tai komponentteja, joita kielimalli pystyisi pienin muutoksin hyödyntämään siltä pyydettyyn toiminnallisuuteen, ei kielimalli tähän aina taivu. Tästä voi olla seurauksena se, että koodikanta rapistuu sillä kielimallit generoivat koodiin paljon toisteisuutta (ks. lisää esim. [täältä](https://visualstudiomagazine.com/articles/2024/01/25/copilot-research.aspx)).

Kielimalleja käytettäessä vastuu siis jää aina ohjelmoijalle.

Kielimallien nopea kehitys asettaa ohjelmointia opiskelevan haastavaan asemaan: kannattaako ja tarvitseeko enää ylipäätään opetella ohjelmointia vanhan liiton tyyliin, kun lähes kaiken saa kielimalleilta valmiina?

Tässä kohtaa kannattaa muistaa C-kielen kehittäjän Brian Kerninghamin vanha viisaus

![]({{ "/images/kerningham.png" | absolute_url }})

Eli koska ongelmien selvittely on kaksi kertaa vaikeampaa kuin ohjelmointi, ei kannata ohjelmoida sellaista koodia minkä vain juuri ja juuri itse ymmärtää. Miten debuggaus mahtaakaan onnistua tilanteessa missä ohjelmointi on ulkoistettu kielimallille ja ohjelmistokehittäjä ei ymmärrä debugattavaa koodia ollenkaan?

Toistaiseksi kielimallien ja tekoälyn kehitys on vielä siinä vaiheessa, että ne eivät ole itseriittoisia, ja vaikeimmat ongelmat jäävät ihmisten selvitettäväksi. Tämän takia aloittelevien ohjelmistokehittäjien on kaiken varalta opeteltava ohjelmoimaan sujuvasti. Voi olla, että kielimallien kehityksestä huolimatta tarvitaankin entistä syvällisempää osaamista. Tekoäly tekee ne helpot asiat, mutta ihmistä tarvitaan kaikkein kiperimpien tekoälyn aiheuttamien sotkujen selvittelyyn. GitHub Copilot onkin varsin hyvin nimetty tuote, kyseessä on Copilot eli lentoperämies/nainen. Ohjelmoija on edelleen kapteeni ja kantaa lopullisen vastuun.

Oman näkemykseni (jonka varmaan lähes jokainen alalla toimiva jakaa) mukaan siis on edelleen oleellista hankkia syvällinen tekninen osaaminen. Syynä tälle on myös se, että AI on yhtä hyvä kuin sille annettu prompti. Promptaaminen taas on haastavaa, jos syvällinen tekninen osaaminen puuttuu. Generatiivista tekoälyä kannattaa mielestäni ehdottomasti hyödyntää, kunhan muistaa että käyttö on riittävissä määrin produktiivista. 

Kielimallit kehittyvät koko ajan. Erityisen suuren avun ohjelmistokehityksen kannalta ovat tuoneet [agentit](https://cloud.google.com/discover/what-are-ai-agents), jotka osaavat tehdä suurempia kokonaisuuksia käyttäjän kehoitteista. Visual Studio Code -editoriin on ollut jo jonkin aikaa integroituna [agenttimoodi](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode), joka on nostanut AI:n kyvykkyyttä huomattavasti. Agenttimoodissa tekoäly osaa koodin generoinnin lisäksi mm. luoda tiedostoja, suorittaa koodia, ja korjata generoimaansa koodia koodin suorituksessa tapahtuneiden virheiden perusteella.

Osaan kurssin tehtäviä liittyy tekoälyn käyttöön liittyviä viheitä. Vihjeet löytyvät tästä tiedostosta, mutta ne on tarkoitettu luettavaksi tehtäviä tehdessä. Tehtävien kohdalta on linkki tehtävään liittyvään vihjeeseen.

## Viikko 1 - Tehtävä 1

[Tehtävässä](/tehtavat1#1-komentorivi) on aiheena riittävän komentoriviosaamisen varmistaminen. Tehtävässä annetaan linkki muutamaan materiaaliin, näiden läpikäymisen sijaan voi pyytää ChatGPT:tä sopivaa oppimateriaalia aiheesta. Otetaan osa tehtävänannosta ja muotoillaan sopiva prompti:

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

Kokeillaan miten agenttimoodi selviää viikon 1 tehtävästä 8. Konfiguraation jälkeen agentti saadaan auki yläreunan kuvakkeesta:

![]({{ "/images/cc5.png" | absolute_url }}){: width="90%"}

Valittavana on iso kasa erilaisia kielimalleja, itse olen viime aikoina tykästynyt Claude Sonet 4:n.

Annetaan agentille ohje:

_generate tests for varasto.py so that branch coverage is 100%_

![]({{ "/images/cc-6.png" | absolute_url }}){: width="90%"}

Agentti kertoo mitä on tekemässä, eli ensin se haluaa suorittaa komennon, joka selvittää testikattavuuden. Komento näyttää hieman oudolta, ja suoritusluvan antamisen jälkeen selviää, että se ei toimi. Agentti ehdottaakin uutta komentoa:

![]({{ "/images/cc-7.png" | absolute_url }}){: width="90%"}

Uusi komento toimii, ja muutaman muunkin komennon suoritettuaan agentti on tehnyt ehdotuksen uusista testeistä, joiden avulla kattavuus nousee sataan prosenttiin:

![]({{ "/images/cc-8.png" | absolute_url }})

Vastuumme tuntevina koodareina käydään testit läpi. Agentti on laittanut testeihin ehkä turhan runsaasti kommentteja sillä testien tarkoitusperä käy ilmi jo testin nimestä. Poistetaan turhat kommentit (tai pyydetään agenttia poistamaan ne) ja commitoidaan muutokset GitHubiin.

## Viikko 2 - Tehtävä 3

Vihje 2 kehotti tutustumaan Pythonin _filter_-funktioon. [Dokumentaatio](https://docs.python.org/3/library/functions.html#filter) on kehnoa, kuten aika monesti Pythonin tapauksessa on. 

Tekoäly antaa varsin hyvät ohjeet promptilla _miten pythonin funktio filter toimii_

![]({{ "/images/cc2-1.png" | absolute_url }}){: width="90%"}

Esimerkeissä esiintyy _lambda_ jonka toimintaperiaate on päässyt unohtumaan, kysytään AI:ltä seuraavalla promptilla
_kerro miten pyytonin lambda toimii_.

Idea toivon mukaan selkiytyy ja tehtävä ratkeaa.

Myös vihjeessä 3 mainittujen f-merkkijonojen toiminnasta saa tekoälyltä hyviä vastauksia, promti voi olla esim _kertaa pythonin f-merkkijonojen toimintaperiaatteet_

Perusteiden jälkeen voi kokeilla hieman tarkemmin tehtävään soveltuvaa promptia:
_miten f-merkkijonoilla saa sarakkeisteun tulostuksen_ 
