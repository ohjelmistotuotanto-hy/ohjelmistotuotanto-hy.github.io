---
layout: page
title: Mini project topic description
inheader: no
permalink: /en/speksi/
source: speksi.md
source_commit: 85a3af3
---

## Background

Pooki, a doctoral student, needs a system that helps them keep the references used in writing their thesis organised and in a suitable format for the thesis. Like everyone who has come through the Department of Computer Science, Pooki writes their dissertation with [LaTeX](https://www.latex-project.org/).

When using LaTeX, the text looks like this:

```latex
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

So the text contains LaTeX commands starting with a backslash that affect formatting. The critical command for the software built in the mini project is _\cite{viiteavain}_ (_viiteavain_ = reference key), which is used to mark references.

In LaTeX documents, references are written in the so-called BibTeX format. The references of the document above look like this:


```bibtex
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

The first "field" of each reference is the key (e.g. _VPL11_ in the topmost one), which is used to cite the reference from the LaTeX file.

LaTeX supports several different types of references, such as _inproceedings, article_ and _book_ in the example. Each reference type has a set of possible fields, such as _author, title_ and _year_.

The result "compiled" with LaTeX looks like this:

![]({{ "/images/latex.png" | relative_url }})

We notice that the text properly ends with the references, and managing references is exactly what the software to be built now is meant to make easier.

You can write LaTeX with a text editor and compile the document into PDF from the command line when [LaTeX](https://www.latex-project.org/) is installed on your machine. Nowadays, however, it is very common to create LaTeX documents directly with the online service [Overleaf](https://www.overleaf.com/). 

The document above can be viewed in [this](https://www.overleaf.com/read/pxspwqwfzgrj) Overleaf project.

More about BibTeX, for example, in the following:

- <https://en.wikipedia.org/wiki/BibTeX>
- <https://www.overleaf.com/learn/latex/Bibliography_management_with_bibtex>

An example of a somewhat larger BibTeX file can be found [here](/bibtex).

## Description of the system

So Pooki wants a system with which they can manage references easily. The program must have at least the following features:
- it must be possible to add references to the system in a human-friendly way, for example using a form
- it must be possible to generate a BibTeX file suitable for a LaTeX document from the references in the system
- it must also be possible to list the references in a more human-friendly format
- it should be possible to filter the reference lists somehow
  - e.g. by author, year, publication
  - it would be good if a set of categories or tags could be attached to each reference, allowing more precise searches
- it would be great if, when given a link to e.g. the ACM Digital Library, [like this](https://dl.acm.org/doi/10.1145/2380552.2380613), the software would crawl the reference's details from there
  - other databases such as [Google Scholar](https://scholar.google.com/) could be supported as well
- an even better feature would be fetching the data based on a [DOI](https://www.doi.org/) identifier
- keep in mind that LaTeX allows all sorts of fields for the different reference types, but quite many of these fields are completely useless, at least for people writing a master's thesis
- the application must be implemented with the Flask framework familiar from the course [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) (Databases and Web Programming), and it must store its data in an SQLite database
  - the application must be usable online: it is deployed to the department's [OKD cluster](/en/miniprojekti/#implementation-technology), and the version on the cluster must be updated automatically as development progresses
  - the application does not necessarily need user management, i.e. you may assume that Pooki is the only user of the system.
  - read the guide on using Flask [here](/en/flask)


The requirements are refined with the customer in weekly meetings.
