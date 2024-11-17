---
layout: page
title: Flaskin ja tietokannan käyttö miniprojektissa
title_long: 'Flaskin ja tietokannan käyttö miniprojektissa'
permalink: /flask/
inheader: no
---

Miniprojektin sovellus toteutetaan kurssilta [Tietokannat ja Web-ohjelmointi](https://hy-tsoha.github.io/materiaali/) tutulla Flask-sovelluskehyksellä, ja sen tulee tallentaa tietonsa PostgreSQL-tietokantaan.

Flask-sovelluksen konfigurointi siten, että esim. GitHub Actionien avulla tapahtuva automatisoitu testaus on jossain määrin haastavaa, ja tämän takia kurssille on luotu pohja <https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate> joka auttaa alkuun.

Pohja sisältää yksinkertaisen Todo- eli työlistasovelluksen joka tallettaa tiedot PostgreSQL-tietokantaan, muutaman Robot-testin, unittest-kirjastolla tehdyn yksikkötestin sekä testit suorittavan GitHub Actions workflown.

**Jos haluatte välttyä konfiguraation aiheuttamasta tuskasta, on suositeltavaa, että teette oman sovelluksenne pohjaa mukaillen**, lue myös [Protips](/flask/#protips)!

[Viikon 3](/tehtavat3) laskarit on syytä tehdä ennen kuin aloitat miniprojektin koodaamisen!

### Sovelluksen toiminnallisuus

Sovelluksen tarjoama toiminnallisuus on hyvin vähäinen. Sovellus näyttää Todot ja niiden tilan, sekä mahdollistaa tekemättömän työn merkkaamisen tehdyksi:

![]({{ "/images/todo3.png" | absolute_url }}){:width="600px" }

Käyttäjä voi myös luoda uusia Todoja:

![]({{ "/images/todo2.png" | absolute_url }}){:width="550px" }

Muuta toiminnallisuutta sovellus ei valitettavasti tarjoa.

### Sovelluksen käynnistäminen

Sovellus siis tarvitsee toimiakseen PostgreSQL-tietokannan. Kannattaa käyttää jotain internetpalveluna tarjottavaa tietokantaa. Eräs hyvä ja ilmainen vaihtoehto on <https://aiven.io>. 

Sovelluksen juureen tulee luoda ympäristömuuttujat määrittelevä tiedosto nimeltään _.env_, jonka sisältö on seuraava

```.env
DATABASE_URL=postgresql://xxx
TEST_ENV=true
SECRET_KEY=satunnainen_merkkijono
```

Tietokannan osoitteen määrittelevä `DATABASE_URL` on aiven.io:sta löytyvä Service URI:

![]({{ "/images/aiven.png" | absolute_url }}){:height="350px" }

**HUOM** urlin alun on oltava muodossa `postgresql://` EI muodossa `postgres://` kuten aiven.io:ssa   .

Sovellus käynnistetään Poetry-virtuaaliympäristössä komennolla

```sh
python src/index.py
```

**Huomaa** että ennen kuin käynnistät sovelluksen ensimmäisen kerran, tulee suorittaa komento, joka luo sovelluksen käyttämän tietokantataulun:

```sh
python src/db_helper.py
```


Yksikkötestit suoritetaan komennolla:

```sh
pytest src/tests
```

Robot-testit suoritetaan komennolla:

```sh
robot src/story_tests
```

### Sovelluksen rakenne

Rakenteeltaan sovellus on samankaltainen kuin [viikon 3 laskareiden](/tehtavat3/#5-weblogin-osa-1) WebLogin-sovellus. Sovellus jakautuu seuraaviin tiedostoihin

```
├── index.py
├── app.py
├── config.py
├── util.py
├── db_helper.py
├── entities
│   └── todo.py
├── repositories
│   └── todo_repository.py
├── templates
│   ├── index.html
│   ├── layout.html
│   └── new_todo.html
├── story_tests
│   ├── resource.robot
│   └── todos.robot
└── tests
│   └── validate_todo_test.py
```

- `index.py` on sovelluksen käynnistävä tiedosto
- `app.py` sisältää reittien käsittelijät
- `config.py` sisältää mm. Flask-sovelluksen sekä tietokannan konfiguroinnit
- `util.py` sisältää apufunktion, jonka avulla validoidaan lisättävät Todot
- `db_helper.py` sisältää muutaman tietokantaoperaation, joita käytetään sovelluksen testiympäristön pystytyksessä
- hakemisto `entities` sisältää sovelluksen tietosisältöä kuvaavat luokat
- hakemisto `repositories` sisältää tietosisällön tietokantaan tallettamisesta vastaavat luokat
- hakemisto `templates` sisältää näkymäpohjat
- Robot-testit on sijoitettu tiedostoon `story_tests` ja unittestit tiedostoon `tests`

#### Tietokannan käyttö

Todo-olioihin liittyvät tietokantaoperaatiot on siis kapseloitu tiedostoon `repositories/todo_repository.py`. Esim. kaikki Todot kannasta hakeva funktio näyttää seuraavalta:

```py
from entities.todo import Todo

def get_todos():
    result = db.session.execute(text("SELECT id, content, done FROM todos"))
    todos = result.fetchall()
    return [Todo(todo[0], todo[1], todo[2]) for todo in todos] 
```

Funktio siis palauttaa SQL:stä hakemansa rivit luokan `Todo` olioina. Luokka on määritelty tiedostossa `entities/todo.py`

```py
class Todo:
    def __init__(self, id, content, done):
        self.id = id
        self.content = content
        self.done = done

    def __str__(self):
        is_done = "Done" if self.done else "not done"
        return f"{self.content}, {is_done}"
```

Muut osat ohjelmaa (esim. `app.py`) eivät siis käsittele suoraan tietokantarivejä, vaan näistä muodostettuja olioita. Näin muun ohjelman kannalta se, mihin oliot lopulta tallennetaan on samatekevää, ja tallennustapa voitaisiin myös tarvittaessa muuttaa.

Tiedosto `db_helpers.py` sisältää muutaman lähinnä testien tarvitseman apufunktion:

```py
table_name = "todos"

def table_exists(name):
  sql_table_existence = text(
    "SELECT EXISTS ("
    "  SELECT 1"
    "  FROM information_schema.tables"
    f" WHERE table_name = '{name}'"
    ")"
  )

  result = db.session.execute(sql_table_existence)
  return result.fetchall()[0][0]

def reset_db():
  print(f"Clearing contents from table {table_name}")
  sql = text(f"DELETE FROM {table_name}")
  db.session.execute(sql)
  db.session.commit()

def setup_db():
  if table_exists(table_name):
    print(f"Table {table_name} exists, dropping")
    sql = text(f"DROP TABLE {table_name}")
    db.session.execute(sql)
    db.session.commit()

  print(f"Creating table {table_name}")
  sql = text(
    f"CREATE TABLE {table_name} ("
    "  id SERIAL PRIMARY KEY, "
    "  content TEXT NOT NULL,"
    "  done BOOLEAN DEFAULT FALSE"
    ")"
  )

  db.session.execute(sql)
  db.session.commit()

if __name__ == "__main__":
    with app.app_context():
      setup_db()
```

Funktio `setup_db`, alustaa tietokannan, eli luo sinne taulun ´todos´. Funktio `reset_db` tyhjentää tietokantataulun sisällön. Jos tiedosto suoritetaan "pääohjelmana", se luo tietokannan.

#### Testien alustus ja suorittaminen

Robot-testit on konfiguroitu Viikon 3 [tehtävän 4](/tehtavat3/#4-web-sovelluksen-testien-suorittamien-github-actioneissa) tapaan, eli testit suoritetaan skriptin _run_robot_tests.sh_ avulla. Skriptissä on nyt pieni ero aiempaan

```sh
#!/bin/bash

echo "Running tests"

# luodaan tietokanta
poetry run python src/db_helper.py

echo "DB setup done"

# käynnistetään Flask-palvelin taustalle
poetry run python3 src/index.py &

echo "started Flask server"

# jatkuu samalla tavalla kuin viikon 3 tehtävässä 4
```

Ennen sovelluksen käynnistämistä skripti suorittaa komennon `python src/db_helper.py`, joka luo GitHub Actioniin liitettyyn tietokantaan sovelluksen tarvitseman taulun _todos_. Käytännössä tämä tapahtuu suorittamalla seuraava SQL-komento:

```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY, 
  content TEXT NOT NULL,
  done BOOLEAN DEFAULT FALSE
)
```

`Test Setup` määrittelee, että ennen jokaista testiä suoritetaan avainsana `Reset Todos`:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup      Open And Configure Browser
Suite Teardown   Close Browser
Test Setup       Reset Todos

# ...

*** Keywords ***
Reset Todos
    Go To  ${RESET_URL}
```

Komento tekee HTTP-pyynnön osoitteeseen _reset_db_, jonka käsittelijä kutsuu tietokannan tyhjentämisestä huolehtivaa funktiota `reset_db`:

```py
from db_helper import reset_db

# ...

# testausta varten oleva reitti
if test_env:
    @app.route("/reset_db")
    def reset_database():
        reset_db()
        return jsonify({ 'message': "db reset" })
```

Kyseinen reitinkäsittelijä on tarkoitettu ainoastaan testien käyttöön. Reitinkäsittelijää ei luoda ollenkaan jos tiedostossa _.env_ määritellään ympäristömuuttujan *TEST_ENV* arvoksi _false_:

```.env
DATABASE_URL=postgresql://xxx
TEST_ENV=false
SECRET_KEY=satunnainen_merkkijono
```

Tämä asetus on syytä tehdä kun sovellus viedään todelliseen tuotantoympäristöön.

### Testeistä

Sovelluksen automatisoitu testaus on tehty suurimmaksi osaksi Robotilla. Robot-testien lisäksi sovelluksessa on muutama unittest-kirjastolla toteutettu yksikkötesti, joiden avulla testataan tiedostossa _util.py_ määriteltyä apufunktiota `validate_todo`, joka tarkistaa onko luotavan Todon sisältö oikean kokoinen (5-100 merkkiä pitkä). Sovellukseen olisi voitu periaatteessa tehdä enemmänkin yksikkötestejä mutta koska suurin osa sovelluksen koodista on tietokannan tai HTTP-pyyntöjen käsittelyä, on testit kätevämpi tehdä käyttäjän toimintaa simuloivilla Robot-testeillä.

Miniprojekteissa saattaa tulla esiin hieman enemmän toiminnallisuutta (esim. BibTexin generointi) jonka testaaminen kannattaa hoitaa yksikkötesteillä.

Robot-testien toimintaperiaate on samankaltainen kuin viikon 3 [tehtävissä](/tehtavat3).

Yksi testeistä on hieman mielenkiintoisempi. Testi luo kaksi Todoa ja klikkaa toiseen liittyvää nappia. Tilanne on siis seuraava:

![]({{ "/images/todo4.png" | absolute_url }}){:height="250px" }

Painettavan napin etsiminen ei nyt onnistu pelkästään napin tekstin perusteella sillä saman tekstin omaavia nappeja on kaksi. Testi näyttää seuraavalta

```robot
After adding two todos and marking one done, there is one unfinished
    Go To  ${HOME_URL}
    Click Link  Create new todo
    Input Text  content  Buy milk
    Click Button  Create
    Click Link  Create new todo
    Input Text  content  Clean house
    Click Button  Create
    Click Button  //li[div[contains(text(), 'Buy milk')]]/form/button
    Page Should Contain  things still unfinished: 1
    Page Should Contain  Buy milk, done
```

Oikea nappi on nyt etsitty käyttäen [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath):a, joka on yksi Robotin tukemista tavoista etsiä elementtejä Web-sivuilta.

Selvitin ratkaisun ChatGPT:n avulla. Annoin promptiksi näkymäpohjan ja kysymyksen miten Robot-testissä painetaan _tiettyyn_ Todon liittyvää nappia. Tekoäly antoi ystävällisesti oikean vastauksen ja selityksen XPath-komennon toiminnosta:

>The XPath `//li[div[contains(text(), 'Specific Todo Content')]]/form/button` is used to locate the button within the form for the specific todo item that is not done. Adjust the XPath as necessary to match the actual structure of your HTML.
>
>Here is a more detailed breakdown of the XPath:
>
>```
>//li[div[contains(text(), 'Specific Todo Content')]]
>    Selects the <li> element that contains a <div> with the specified text.
>/form/button
>    Selects the <button> element within the <form> inside the selected <li>.
>```

Lisää tavoista elementtien etsimiseen testeissä voi lukea Robotin [dokumentaatiosta](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Locating%20elements).


### Protips

Miniprojekti kannattaa rakentaa joko copypasteamalla boilerplaten konfiguraatiot tai kopioimalla projekti itselleen ja muokkaamalla sitä sopivasti.

Kannattaa edetä **todella pienin askelin** ja pushata koodia useasti GitHubiin.

Sovellus tulee pitää **KOKO AJAN** sellaisessa tilassa että kaikki testit menevät GitHub Actioneissa läpi. Jos GHA menee punaiselle, älkää missään tapauksessa lisätkö koodia ennen kuin ongelmat on korjattu.

Jos päädyt koodaamaan esim. 2 tuntia ja yrität sen jälkeen saada testit toimimaan, tulee todennäköisesti kulumaan vähintään 4 tuntia debuggaukseen. Jos taas koodaat vain 5 minuuttia, ja tarkistat sen jälkeen menevätkö testit läpi, debuggaukseen kuluva aika on ehkä vain minuutin. Eli pienet askeleet tarkoittaa suurta säästöä ajassa.
