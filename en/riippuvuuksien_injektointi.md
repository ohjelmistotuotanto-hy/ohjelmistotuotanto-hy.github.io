---
layout: page
title: Dependency injection
inheader: no
permalink: /en/riippuvuuksien_injektointi/
source: riippuvuuksien_injektointi.md
source_commit: 81a8f02
---

Dependency injection is a design pattern in which the dependencies an object needs, such as other objects or services, are given to it from the outside, for example through the constructor or a method call. This pattern improves the testability of classes and reduces unnecessary dependencies between them.

The code below can be found as a uv project in the course [exercise repository]({{site.python_exercise_repo_url}}) in the directory koodi/viikko1/riippuvuuksien-injektointi

Let's look at a very simple calculator (the code is in Finnish: _Laskin_ = calculator, _suorita_ = run, _luku_ = number, _vastaus_ = answer, _laske_summa_ = calculate sum, _Summa_ = sum):

```py
class Laskin:
    def suorita(self):
        while True:
            luku1 = int(input("Luku 1:"))

            if luku1 == -9999:
                return

            luku2 = int(input("Luku 2:"))

            if luku2 == -9999:
                return

            vastaus = self._laske_summa(luku1, luku2)

            print(f"Summa: {vastaus}")

    def _laske_summa(self, luku1, luku2):
        return luku1 + luku2

def main():
    laskin = Laskin()

    laskin.suorita()

if __name__ == "__main__":
    main()
```

The unfortunate thing about the program is that the class <code>Laskin</code> has a *concrete dependency* on the functions <code>print</code> <code>input</code> that handle printing and reading input.

Concrete dependencies make testing harder and make the program difficult to extend.

### Eliminating the dependency

Let's isolate printing and reading input into a separate object of the class `KonsoliIO` (_lue_ = read, _kirjoita_ = write, _teksti_ = text):

```python
class KonsoliIO:
    def lue(self, teksti):
        return input(teksti)

    def kirjoita(self, teksti):
        print(teksti)
```

Let's modify the class <code>Laskin</code> so that it receives, as a constructor parameter, an object through which it handles the communication with the user:

```python
class Laskin:
    def __init__(self, io):
        self._io = io

    def suorita(self):
        while True:
            luku1 = int(self._io.lue("Luku 1:"))

            if luku1 == -9999:
                return

            luku2 = int(self._io.lue("Luku 2:"))

            if luku2 == -9999:
                return

            vastaus = self._laske_summa(luku1, luku2)

            self._io.kirjoita(f"Summa: {vastaus}")

    def _laske_summa(self, luku1, luku2):
        return luku1 + luku2

```

The application is now started so that the object handling the communication is _injected_ into it as a constructor parameter:

```python
def main():
    io = KonsoliIO()     # the dependency is created outside the class
    laskin = Laskin(io). # the dependency is given to the class

    laskin.suorita()

main()
```

Dependency injection has a fancy name, but in the end it is a really simple thing: dependencies are not created inside a class, they are given to it from the outside.

### Testing

One of the benefits of dependency injection is that testing becomes a lot easier.

It is now easy to write unit tests for the calculator. For the tests, we implement a fake class, a "stub", that from the outside behaves in the same way as objects of the class `KonsoliIO`:

```python
class StubIO:
    def __init__(self, inputs):
        self.inputs = inputs
        self.outputs = []

    def lue(self, teksti):
        return self.inputs.pop(0)

    def kirjoita(self, teksti):
        self.outputs.append(teksti)
```

So the stub can be given the "user's inputs" as a constructor parameter. After the run, the program's outputs can be asked from the stub.

Here is a test:

```python
class TestLaskin(unittest.TestCase):
    def test_yksi_summa_oikein(self):
        # the test hardcodes 1, 3 and -9999 as the program's inputs
        io = StubIO(["1", "3", "-9999"]).  

        laskin = Laskin(io)
        laskin.suorita()

        # check that the program printed the correct sum
        self.assertEqual(io.outputs[0], "Summa: 4")
```

### Summary

So dependency injection is really an extremely simple technique; many of you have probably already used it in the introductory programming courses.

As a second example, let's look at a computer game. The behaviour of games often depends on random numbers. If the game is coded as follows, automated testing is very difficult (_Peli_ = game, _liikuta pelaajaa_ = move the player, _suunta_ = direction):

```python
class Peli: 
    def liikuva_pelaajaa(self):
      suunta = random.randint(0, 8)
```

So the class Peli has a direct dependency on the random number generator _random_, whose method _randint_ it calls to create the number that determines the direction in which the player moves. 

From the testing point of view, the situation gets easier by using dependency injection. If the random number generator is _injected_ into the game as follows (_arpa_ = die/lottery)

```python
class Peli: 
    def __init__(self, arpa):
        self._arpa = arpa

  def liikuva_pelaajaa(self):
    suunta = self._arpa.randint(0, 8)
```

then, when testing, the game can be injected with a version of the random number generator whose numbers can be controlled from the tests. For example, here is a version of the random number generator that always returns the number 1 when the method _randint_ is called:

```python
class Arpa:
    def randint(self, a, b):
        return 1
```
