---
layout: page
permalink: /docker
title: Poetry Dockerissa
---

Paras tapa asentaa Poetry on se, että ei asenna sitä ollenkaan! Tarkemmin sanottuna, ei asenneta Poetryä suoraan omalle koneelle, vaan sen sijaan käytetään Pythonin ja Poetryn sisältämää Docker imagea ja suoritetaan komennot imagesta luodun Docker-kontin sisällä.


Seuraavassa käydään läpi kaksi tapaa, kurssille tehdyn Docker imagen käyttö, sekä VS Coden Dev Containerit.

#### Docker imagen käyttö

Jos haluat käyttää Dockeria "suoraan", voit hyödyntää kurssia varten konfiguroitua Docker imagea [mluukkai/poetry](https://hub.docker.com/repository/docker/mluukkai/poetry/general), ks myös [GitHub-repositorio](https://github.com/mluukkai/docker-poetry).

Poetryn käyttö tapahtuu seuraavasti. Mene hakemistoon, jossa haluat suorittaa Poetry-komentoja. Joudut (todennäköisesti) antamaan hakemiston sisältöön kirjoitus- ja lukuoikeudet Dockerille komennolla:

```
chmod  o=rw .
```

Suorita seuraava komento

```
docker run -it --volume="$PWD:/mydir" mluukkai/poetry:intel
```

Jos koneesi on M1 mac, komennon muoto on seuraava:

```
docker run -it --volume="$PWD:/mydir" mluukkai/poetry:m1
```

Komento avaa komentotulkin Docker-konttiin, jossa kaikki Poetry-komennot, esim. `poetry init`, `poetry add`, `eval $(poetry env activate)` ym. ovat käytettävissä. Virtuaaliympäristön käynnistämiseen on myös tehty alias `activate`.

Kontti näkee kaikki käynnistyshakemistossa olevat tiedostot. Voit editoida tiedostoja normaaliin tapaan tekstieditorilla kontin ulkopuolella. Docker-kontissa oleva komentotulkki sulkeutuu komennolla `exit`.

Lisää Dockerista kurssilla [DevOps with Docker](https://devopswithdocker.com/).

#### Visual Studio Dev Containers

VS Coden [Dev containers](https://code.visualstudio.com/docs/devcontainers/containers) -laajennus tarjoaa erittäin kliinisen ja helppokäyttöisen tavan Dockerin hyödyntämiseen softakehityksessä.

Jos koneellasi on Docker, on Dev Containerien käyttö erittäin helppoa.

Aloita asentamalla Dev Containers -laajennus: 

![]({{ "https://code.visualstudio.com/assets/docs/devcontainers/tutorial/dev-containers-extension.png"}}){: width="70%"}


Olemassa olevalle Poetry-projektille kehitysympäristön asentaminen tapahtuu [tätä ohjetta](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-an-existing-folder-in-a-container) noudatellen seuraavasti:

Avaa VS Codeen hakemisto, jonka sisällä on Poetry-projekti. 

Suoritetaan komento _Dev Containers: Open Folder in Container_:

![]({{ "/images/dc0.png" | absolute_url }}){: width="80%"}

Avataan nykyinen hakemisto, ja valitaan ensimmäinen vaihtoehto, joka tallentaa kehitysympäristön konfiguraatiot nykyiseen hakemistoon:

![]({{ "/images/dc4.png" | absolute_url }}){: width="80%"}

Poetry ei ole tarjolla heti, joten valitaan _Show all templates_:

![]({{ "/images/dc5.png" | absolute_url }}){: width="80%"}

Tämän jälkeen haluamamme löytyy:

![]({{ "/images/dc6.png" | absolute_url }}){: width="80%"}

Valitaan seuraavaksi Pythonin versio. Valitettavasti tuorein tarjolla oleva Pythonin versio on 3.11. Seuraavista valinnoista otetaan _default_ ja _ok_.

Kestää hetken, kunnes ympäristö on valmis. Tämän jälkeen Poetry on käytettävissä VS Coden terminaalin kautta:

![]({{ "/images/dc3.png" | absolute_url }}){: width="80%"}

Muuta ei tarvita!

Dev Containers tallettaa kehitysympäristön tiedot projektin juuressa olevaan hakemistoon _.devcontainer_. Hakemisto sisältää konfiguraatiotiedoston _.devcontainer.json_ sekä tiedoston _Dockerfile_, jotka yhdessä määrittelevät kehitysympäristön.

Valmiiksi konfiguroidussa Python with Poetry -ympäristössä on nyt käytössä Pythoinin versio 3.11. Versio on itseasiassa helppo päivittää muuttamalla yhtä riviä Dockerfilestä:

```python
FROM mcr.microsoft.com/devcontainers/base:jammy

//...

# Python and poetry installation
USER $USER
ARG HOME="/home/$USER"
ARG PYTHON_VERSION=3.11. # vaihdetaan tähän 3.12

ENV PYENV_ROOT="${HOME}/.pyenv"
ENV PATH="${PYENV_ROOT}/shims:${PYENV_ROOT}/bin:${HOME}/.local/bin:$PATH"

// ...
```

Muutoksen jälkeen VS Code buildaa imagen uudelleen, ja tämän jälkeen kehitystympäristön python on päivittynyt!

Seuraavan kerran, kun palaat projektin pariin, valitse _Dev Containers: Reopen in Container_:

![]({{ "/images/dc7.png" | absolute_url }}){: width="80%"}


#### Docker ja Robot-testit

Web-sovelluksia testatessa käytä imagen [mluukkai/poetry](https://hub.docker.com/repository/docker/mluukkai/poetry) sijaan imagea [mluukkai/poetry-robot](https://hub.docker.com/repository/docker/mluukkai/poetry-robot/). Image toimii ainoastaan intelin prosessoriarkkitehtuurilla varustetuilla koneilla, eli M1 käyttäjät joutuvat etsimään jonkun muun ratkaisun...

Jotta kontissa suoritettu web-sovellus näkyisi isäntäkoneelle, tulee konttia käynnistettäessä julkaista kontin portti 5001 (jossa sovellus toimii) isäntäkoneen porttiin. Tämä tapahtuu seuraavasti:

```bash
docker run -it -p 5001:5001 --volume="$PWD:/mydir" mluukkai/poetry-robot
```

Robot-testit suoritetaan menemällä komennolla `docker exec` samaan kontiin, missä sovellus on jo päällä: 

```bash
docker exec -it kontainerintunnistetahan bash
```

Kontin tunniste selviää komennolla `docker ps`.

Testit toimivat valitettavasti ainoastaan ns. headless-tilassa, jonka saat päälle [tehtävän 4](/tehtavat3/#4-web-sovelluksen-testien-suorittamien-github-actioneissa) alussa neuvotulla tavalla.

Testit on mahdollista saada toimimaan myös siten että testejä suorittava selain näytetään. Tämä vaatii kuitenkin erinäistä säätöä, googlaa jos kiinnostaa esim. hakusanoilla [linux docker gui apps](https://www.google.com/search?q=linux+docker+gui+apps).