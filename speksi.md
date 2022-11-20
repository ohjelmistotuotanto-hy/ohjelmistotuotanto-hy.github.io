---
layout: page
title: Miniprojektin aiheen kuvaus
inheader: no
permalink: /speksi/
---

Kandiohjaaja Kalle Ilves tarvitsee järjestelmän, joka auttaisi Kallen ohjaamia opiskelijoita pitämään kanditöiden kirjottamisessa käytetyt lähdeviitteet järjestyksessä ja sopivassa muodossa kandia varten. Kuten kaikki TKT:n opiskelijat, myös kaikki Kallen ohjattavat kirjoittavat kandin [LaTeX](https://www.latex-project.org/):illa.

LaTeX:ia käytettäessä teksti näyttää seuraavalta:

```
\documentclass{article}
\usepackage[utf8]{inputenc}

\title{Ohtun esimerkki}
\author{Matti Luukkainen}
\date{November 2022}

\begin{document}

\maketitle

\section{Johdanto}

Tehostettu kisällioppiminen \cite{VPL11} (Engl. eXtreme Apprenticeship, XA) on
alunperin ohjelmoinnin alkeisopetukseen kehitetty kisällioppimisen \cite{CBH91}
johdannainen. XA-menetelmä pyrkii ohjelmointitaidon lisäksi kiinnittämään 
panostamaan myös laadukkaan koodin \cite{Martin09} luomiseen. 

\bibliographystyle{plain} 
\bibliography{references}

\end{document}
```

Tekstissä on siis mukana muotoiluun vaikuttavia vinoviivalla alkavia LaTeX-komentoja. Miniprojektissa tehtävän softan kriittinen komento on _\cite{viiteavain}_ jonka avulla lähdeviiteet merkataan. 

LaTeX-dokumenteissa lähdeviitteet kirjoitetaan ns. BibTeX-muodossa. Ylläolevan dokumentin lähdeviitteet näyttävät seuraavalta:


```
@inproceedings{VPL11,
    author = {Vihavainen, Arto and Paksula, Matti and Luukkainen, Matti},
    title = {Extreme Apprenticeship Method in Teaching Programming for Beginners.},
    year = {2011},
    booktitle = {SIGCSE '11: Proceedings of the 42nd SIGCSE technical symposium on Computer science education},
}

@article{CBH91,
    author = {Allan Collins and John Seely Brown and Ann Holum},
    title = {Cognitive apprenticeship: making thinking visible},
    journal = {American Educator},
    year = {1991},
    volume = {6},
    pages = {38--46}
}

@book{Martin09,
    author = {Martin, Robert},
    title = {Clean Code: A Handbook of Agile Software Craftsmanship},
    year = {2008},
    publisher = {Prentice Hall},
}
```

Jokaisen lähdeviitteen ensimmäinen "kenttä" on avain (esim ylimmässä _VPL11_), jota käyttämällä LaTeX-tiedostosta muodostetaan lähdeviite.

Latex tukee useita eri tyyppisiä viitteitä, kuten esimerkin _inproceedings, article_ ja _book_. Jokaisen tyyppisellä viitteellä on joukko erilaisia mahdollisia kenttiä, kuten _author, title_ ja _year_

LaTeX:illa "käännetty" loipputulos näyttää seuraavalta:

![]({{ "/images/latex.png" | absolute_url }})

Huomaamme että teksti päättyy oikeaoppisesti lähdeviitteisiin ja juuri lähdeviitteiden hallintaan nyt toteutettavan ohjelmiston on tarkoitus tuoda helpotusta.

LaTeX:ia voi kirjoittaa tekstieditorilla ja dokumentin voi kääntää Pdf-muotoon komentoriviltä kun [LaTeX](https://www.latex-project.org/) on asennettuna koneelle. Nykyään on kuitenkin erittäin yleistä tehdä LaTeX-dokumentteja suoraan verkossa olevalla [Overleaf](https://www.overleaf.com/)-palvelulla. 

Yo. dokumentti on nähtävillä [tässä](https://www.overleaf.com/read/pxspwqwfzgrj) olevassa Overleaf-projektissa.

Lisää BibTeXistä esim. seuraavassa:

- <https://en.wikipedia.org/wiki/BibTeX>
- <https://www.overleaf.com/learn/latex/Bibliography_management_with_bibtex>

Esimerkki hieman laajemmasta BibTeX-tiedostosta [täällä](/bibtex)

Kalle haluaa järjestelmän, jonka avulla hänen opiskelijat voivat hallinnoida viitteitä helposti. Ohjelmalla pitää olla ainakin seuraavat ominaisuudet:
- viitteitä pitää pystyä lisäämään järjestelmään ihmiselle hyvässä muodossa, esimerkiksi jonkun lomakkeen avulla
  - esim. ääkköset pitää toimia kunnolla, ei saa joutua lisäämään hankalassa muodossa kuten yllä, samoin kirjainlyhenteet
- järjestelmässä olevista viitteistä pitää saada generoitua LaTeX-dokumenttiin sopiva BibTeX-muotoinen tiedosto
- myös viitteiden listaaminen ihmiselle sopivammassa formaatissa pitää onnistua
- viitelistoja pitäisi pystyä jotenkin rajoittamaan
  - esim. kirjottajan, vuoden, julkaisun mukaan
  - olisi kyllä hyvä, jos jokaiseen viitteeseen voisi liittää joukon kategorioita tai tägejä, jotka mahdollistaisivat tarkemmat haut
-  ihan jees jos kyseessä on yhdellä koneella toimiva sovellus, parempi olisi kuitenkin jos se olisi verkossa ja joka paikassa käytettävissä
- jos toimii vaan paikallisella koneella, pitää eri koneiden välillä pystyä jotenkin synkronoimaan talletetut viitteet
- sellanen olisi loistavaa, että jos antaa linkin esim ACM:n digitaaliseen kirjastoon, esim. [näin](https://dl.acm.org/doi/10.1145/2380552.2380613), niin softa crawlaa sieltä viitteen tiedot
  - myös muita tiedokantoja kuten google scholaria voi tukea
- jopa vielä parempi feature olisi datan haku [doi](https://www.doi.org/)-tunnisteen perusteella
- kannattaa muistaa että LaTeX mahdollistaa vaikka mitä kenttiä eri viitetyypeille, näistä kentistä aika moni on kuitenkin ainakin kandin tekijöille ihan turhia

vaatimuksia tarkennetaan asiakkaan kanssa viikoittaisissa palavereissa