---
layout: page
title: Selitystä viikon 3 tehtävään 2 ja 3 testien rakenteesta
inheader: no
permalink: /viikko3-t2/
---

Tiedostossa `AppLibrary.py` kaikki metodit ovat Robotin avainsanojen toteutuksia. Koska kyseessä on komentorivisovellus, joutuu AppLibrary myös luomaan konstruktorissaan testattavaa sovellusta vastaavan olion App. Esim. web-sovellusta testatessa tätä tarvetta ei (välttämättä) ole, ja AppLibraryn rooli voi olla ainoastaan avainsanojen toteuttaminen.

Konstruktori luo testattavan sovelluksen, ja injektoi sille StubIO-olion, jonka kautta testi pääsee kommunikoimaan sovelluksen kanssa, sekä UserServicen:

```py
class AppLibrary:
    def __init__(self):
        self._io = StubIO()
        self._user_repository = UserRepository()
        self._user_service = UserService(self._user_repository)

        self._app = App(
            self._user_service,
            self._io
        )
```

Konstruktiori siis tekee käytännössä saman kuin miten sovellus käynnistyy normaalisti:

```py
def main():
    user_repository = UserRepository()
    user_service = UserService(user_repository)
    console_io = ConsoleIO()
    app = App(user_service, console_io)

    app.run()
```

AppLibraryn konstruktori ei kuitenkaan vielä käynnistä ohjelmaa sen metodilla `run`.


Testien käyttämiä _avainsanoja_ ovat

```
Run Application
Input
Output Should Contain
Create User
```

Näistä ensimmäisen toteuttaa AppLibraryssä seuraava metodi:

```py
class AppLibrary:
    #...

    def run_application(self):
        self._app.run()
```

Eli kyseessä on sovelluksen käynnistys.

Ennen sovelluksen käynnistämistä, sille annetaan käyttäjän simuloidut syötteet parametrillisen avainsanan `Input` avulla. Avainsana on toteutettu seuraavasti luokassa AppLibraryssä:

```py
class AppLibrary:
    def __init__(self):
        self._io = StubIO()

        # ...

    def input(self, value):
        self._io.add_input(value)
```

Metodi siis lisää syötteen sovellusoliolle App injektoidulle StubIO-oliolle.


Avainsanan `Output Should Contain` tarkoitus on testata StubIO-olion avulla onko sovellus reagoinut halutulla tavalla sille annetuun simuloituun syötteeseen. Avainsanan toteutus on seuraava:

```py
class AppLibrary:
    def __init__(self):
        self._io = StubIO()

        # ...

    def output_should_contain(self, value):
        outputs = self._io.outputs

        if not value in outputs:
            raise AssertionError(
                f"Output \"{value}\" is not in {str(outputs)}"
            )
```

Testien käytössä on vielä kolmaskin avainsana `Create User`, joka on käytössä testien alustuksessa. Avainsanan avulla luodaan sovellukselle "oletuskäyttäjä". 

Robot-testeissä on tavanomaista suorittaa alustustoimenpiteet "käyttöliittymän ohi", eli suoraan sovelluslogiikan tasolla. AppLibrary:ssä tämä tapahtuu siten, että kutsutaan suoraan UserService-olion metodia jonka nimi sattuu nyt olemaan sama:

```py
class AppLibrary:
    def __init__(self):
        self._user_repository = UserRepository()
        self._user_service = UserService(self._user_repository)

        # ...

    def create_user(self, username, password):
        self._user_service.create_user(username, password)
```

Testiasetelmaa olisi mahdollista suoraviivaistaa siten, että oletuskäyttäjä luotaisiinkin suoraan AppLibrary:n konstruktorissa, samalla kun sovellus alustetaan:

```py
class AppLibrary:
    def __init__(self):
        self._io = StubIO()
        user_service = UserService(UserRepository())
        # luodaan oletuskäyttäjä
        user_service.create_user("kalle", "kalle123")

        self._app = App(
            user_service,
            self._io
        )

    def input(self, value):
        self._io.add_input(value)

    def output_should_contain(self, value):
        outputs = self._io.outputs

        if not value in outputs:
            raise AssertionError(
                f"Output \"{value}\" is not in {str(outputs)}"
            )

    def run_application(self):
        self._app.run()
```

Näin avainsana `Create User` ja sen toteutus voitaisiin poistaa.
