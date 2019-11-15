---
layout: page
title: Miniprojektin speksi
inheader: no
permalink: /speksi/
---

## Lukuvinkkikirjasto

Asiakkaanne on innokas tietojenkäsittelytieteen ammattikirjallisuuden lukija. Hän lukee  mm. blogipostauksia ja kirjoja sekä kuuntelee podcasteja. Hänen selaimensa bookmark-kansio alkaa olla jo aika täynnä sekalaisia linkkejä ja olisi aikaa laittaa lukuvinkit järjestykseen. Asiakas haluaisi lukuvinkeilleen sovelluksen, jossa erilaiset linkit ja muut muistiinpanot pysyisivät järjestyksessä. 

Lukuvinkeistä pitäisi pystyä tallentamaan otsikon ja kirjoittajan lisäksi esimerkiksi erilaisia tageja ja url. Lisäksi lukuvinkkiin pitää pystyä lisäämään lyhyt kuvaus sekä mahdollisesti muitakin kommentteja tai muistiinpanoja. Vinkkejä pitäisi pystyä selaamaan erilaisten hakukriteerien avulla. Merkitsemällä vinkkeihin myös aiheeseen liittyviä kursseja saisi vinkit jaoteltua kätevästi eri kurssien käsittelemien aihepiirien mukaan. 

Olisi kätevää, jos lukuvinkit voisi jaotella myös luettuihin ja lukemista odottaviin. Lukuvinkin yhteyteen kannattaa ehkä tallentaa tieto lukemisen ajankohdasta.

Parasta olisi, jos vinkkejä voisi tallentaa jonkin web-käyttöliittymän avulla, mutta myös paikallinen komentoriviltä käytettävä sovellus käy.

Esimerkkejä tallennettavista lukuvinkeistä:

```
Kirjoittaja: Robert Martin
Otsikko: Clean Code: A Handbook of Agile Software Craftsmanship
Tyyppi: Kirja
ISBN: 978-0132350884
Tagit: Ohjelmointi, design patterns
Related courses: TKT20006 Ohjelmistotuotanto

Otsikko: Merge sort algorithm
Url: https://www.youtube.com/watch?v=TzeBrDU-JaY
Related courses: TKT20001 Tietorakenteet ja algoritmit
Tyyppi: video
Kommentti: Hyvä selitys merge sortin toiminnasta esimerkin avulla 

Otsikko: Consistency models
Kirjoittaja: Nicola Apicella
Url: https://dev.to/napicellatwit/consistency-models-52l
Tyyppi: Blogpost
Related courses: TKT21001 Tietokannan suunnittelu, CSM13001 Distributed Systems

Author: Sami Honkonen
Podcastin nimi: Boss Level Podcast
Otsikko: Jim Benson on Personal Kanban, Lean Coffee and collaboration
Kuvaus: "Personal Kanban, which is an approach to dealing with the overload of stuff you need to deal with. 
  We dig into into its two simple rules, visualizing work and limiting work in progress. 
  We then walk through Lean Coffee, which is a simple and effective way to run your meetings."
Tyyppi: Podcast
Tagit: Kanban, Lean Coffee
Related courses: TKT20006 Ohjelmistotuotanto
```

Erityyppisten lukuvinkkien sisältämät tiedot vaihtelevat hieman vinkin tyypin mukaan. Kirjasta pitäisi tallentaa ainakin kirjoittaja ja teoksen nimi. Videoista ja blogipostauksissa riittää minimissään otsikko ja url. Podcast-jaksoista täytyy olla ainakin podcastin nimi, otsikko ja lyhyt kuvausteksti.

Asikkaan tyypillisimmät kkäyttöskenaariot vinkkikirjastolle ovat:

- Uuden vinkin lisääminen
- Vinkkien selailu
- Vinkin muokkaaminen

Jos sovellus toimii webissä niin se voisi olla myös monen henkilön käytössä. Vinkkien lisääminen vain youtube-urlin perusteella olisi siisti feature. Myös kirjan lisääminen pelkän isbn-numeron perusteella tekisi vinkkien lisäämisestä nopeaa.

Nyt on pääasiana päästä nopeesti alkuun ja tehdä jotain toimivaa seuravan viikon palaveriin. Vaatimuksia tarkennetaan viikottaisissa palavereissa. 