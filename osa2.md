---
layout: page
title: osa 2
inheader: yes
permalink: /osa2/
---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
  <img alt="Creative Commons -lisenssi" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
  />
</a>

# Scrum

Tutustumme nyt ketteristä menetelmistä eniten käytettyyn, eli [Scrumiin](https://www.scrum.org/). Tarkastellaan ensin muutamaa perustavanlaatuista  Scrumin ja muidenkin ketterien menetelmien taustalla olevaa perusolettamusta.

## Vesiputousmallin ongelmia

Kertauksena edellisestä luvusta voidaan kiteyttää vesiputousmallin suurimmat ongelmat:

- Useimmiten on mahdotonta määritellä ohjelmiston vaatimukset tyhjentävästi  projektin alkuvaiheessa. Asiakas ei yleensä ymmärrä vielä alussa mitä haluaa ja bisnesympäristö muuttuu projektin kuluessa.
- Suunnittelu sillä tasolla, että ohjelmointi on triviaali ja ennustettava rakennusvaihe, rinnastettavissa esim. talon rakennukseen, on mahdotonta.
Ohjelmointi on osa suunnitteluprosessia, ohjelmakoodi on tuotteen lopullinen suunnitelma. Suunnittelu taas on teknisesti haastavaa, riskejä sisältävää toimintaa.

90-luvulla kehitellyt iteratiiviset prosessimallit korjaavat monia näistä epäkohdista, mutta ne kuitenkin ovat vielä vahvasti suunnitelmavetoisia (engl plan based) ja olettavat että ohjelmistotuotanto on jossain määrin _kontrolloitavissa oleva prosessi_.

Eli keskiössä on tarkka projektisuunnitelma (joka toki iteratiivisissa malleissa voi elää) ja sen noudattaminen, selkeä roolijako: projektipäälliköt, analyytikot, arkkitehdit, ohjelmoijat, testaajat.

## Ketterien menetelmien perusolettamuksia 

Useimmat ohjelmistoprojektit ovat laadultaan uniikkeja. Vaatimukset ovat erilaiset kuin millään jo tehdyllä ohjelmistolla. Tekijätit vaihtuvat usein, kukin tiimi on omanlaisilla kompetensseilla ja persoonallisuuksilla varustettu. Myös toteutusteknologiat kehittyvät koko ajan, joten uusia projekteja tehdään todennäköisesti tavalla, joka ei ole kaikille tuttu.

Järkevää onkin lähteä oletuksesta että kyseessä ei ole kontrolloitu prosessi, joka voidaan tarkkaan etukäteen suunnitella. Järkevämpää onkin ajatella ohjelmiston kehittämien tuotekehitysprojektina, joka sisältää runsaasti epävarmuutta ja tuntemattomia kysymyksiä. Tälläisten projektien hallinnointiin sopii tarkkaan etukäteissuunnitelmaan perustuvan lähestymistavan sijaan _empiirinen prosessi_.

Empiirisessä prosessissa taustalla olevina periaatteina on _läpinäkyvyys_ (transparency), tarkkailu (inspection) ja muokauttaminen (adaptation). On siis oleellista, että koko tiimi on mahdollisimman hyvin selvissä siitä mitä tapahtuu ja mistä puhutaan, esim. mitä tarkoitetaan kun jonkin asian sanotaan olevan valmiina. Projektiin liittyvien asioiden suhteen tulee siis vallita suuri läpinäkyvyys (transparency) joka taas mahdollistaa asioiden tilan jatkuvan tarkkailun (inspection), eli onko tuotteen kehitys menossa sinne suuntaan mikä on asiakkan nykyisen näkemyksen mukainen ja tukevatko tiimin käytänteet optimaalisella tavalla sovelluksen kehitystä. Jos ja _kun_ asioissa havaitaan parannuksen varaa, mukautetaan (adaptation) tuotteen kehityssyyntaa tai tiimin toiminnan periaatteita.

Ketterien menetelmien oletuksena on, että perinteinen command-and-control tyylinen hallinnointi ja ihmisten sekä tiimien jakaminen eri vastuualueisiin (suunnittelija, ohjelmoija, testaaja, frontend, backend) ei tuota optimaalista tulosta.

Sensijaan ketterät menetelmät uskovat vahvasti siihen että ihmiset toimivat parhaiten itseorganisoituvissa tiimeissä, jossa tiimille annetaan työskentelyrauha ja uskotaan tiimin omaan kykyyn ottaa vastuu toiminnastaan. Itseorganisoituva tiimi toimii kollektiivina, kantaen yhteisen vastuun tekemisistään, eli tiimi onnistuu ja epäonnistuu yhdessä.

## Scrumin taustaa

Tutustumme kurssin aikana suhteellisen tarkasti Scrumiin, joka on tällä hetkellä selvästi suosituin ketterä menetelmä/prosessimalli
[Schwaber, Sutherland: The Scrum Guide]
Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value
Scrum is:
Lightweight
Simple to understand Extremely difficult to master

Scrum is a process framework that has been used to manage complex product development since the early 1990s
Scrum is not a process or a technique for building products; rather, it is a framework within which you can employ various processes and techniques.
Scrum makes clear the relative efficacy of your product management and development practices so that you can improve

## Scrum lyhyesti

Iteratiivinen ja inkrementaalinen menetelmä (tai kehittäjiensä mukaan framework eli menetelmäkehys)
Kehitys tapahtuu 1-4 viikon iteraatioissa, joita Scrumissa kutsutaan
sprinteiksi
Scrum-tiimi koostuu 3-10:stä kehittäjästä
Scrum master toimii tiimin apuna ohjaten mm. prosessin noudattamisessa sekä toimien rajapintana yrityksen hallintoon
Product owner eli tuotteen omistaja hallinnoi projektin backlogia
backlog sisältää priorisoidussa järjestyksessä projektissa toteutettavan ohjelmiston ominaisuudet/vaatimukset/toiminnot

Jokaisen sprintin alussa tiimi valitsee projektin backlogista sprintin aikana toteutettavat vaatimukset
Sprintin aikana scrum-tiimi toteuttaa itseorganisoidusti sprintiin valitut vaatimukset lopputuloksena vaatimusten osalta toimiva ohjelmisto

