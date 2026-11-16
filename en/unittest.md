---
layout: page
permalink: /en/unittest
title: Unittest and testing
source: unittest.md
source_commit: 81a8f02
---

_This guide is a copy of the [Unittest guide](https://ohjelmistotekniikka-hy.github.io/python/viikko2#unittest-ja-testaaminen) of the course Ohjelmistotekniikka (Software Development Methods), with a few additions. The linked original is in Finnish._

Let's get to know writing unit tests with the [unittest](https://docs.python.org/3/library/unittest.html) framework. In unit tests, the targets of testing are the smallest building blocks of the program, i.e. individual functions as well as objects of classes and their methods.

As an example, we use the class `Maksukortti` (payment card), which contains methods for loading money and buying meals of different prices (_edullinen_ = affordable, _maukas_ = tasty, _saldo_ = balance, _lataa rahaa_ = load money, _syö_ = eat):

```python
# meal prices are in cents
EDULLINEN = 250
MAUKAS = 400

class Maksukortti:
    def __init__(self, saldo):
        # the balance is in cents
        self.saldo = saldo

    def syo_edullisesti(self):
        if self.saldo >= EDULLINEN:
            self.saldo -= EDULLINEN

    def syo_maukkaasti(self):
        if self.saldo >= MAUKAS:
            self.saldo -= MAUKAS

    def lataa_rahaa(self, maara):
        if maara < 0:
            return

        self.saldo += maara

        if self.saldo > 15000:
            self.saldo = 15000

    def __str__(self):
        saldo_euroissa = round(self.saldo / 100, 2)

        return "Kortilla on rahaa {:0.2f} euroa".format(saldo_euroissa)
```

**NOTE:** All monetary values, such as the balance of the payment card and the prices of meals, are in cents.

### Exercise

Create a directory _maksukortti_. In the terminal, inside the directory, run the command needed to initialise the project:

```bash
uv init --python 3.14 --no-package
```

The option `--no-package` prevents uv from initialising the project as a package, so no module named after the project is created in the _src_ directory. You can delete the example file _main.py_ created by the command as unnecessary.

Let's install the [pytest](https://docs.pytest.org/en/stable/) framework, which makes running tests easier, as a development dependency of the project. The dependency is installed in the same directory with the command:

```bash
uv add pytest --dev
```

Next, create the following structure in the _maksukortti_ directory:

```
maksukortti/
  src/
    maksukortti.py
    tests/
      __init__.py
      maksukortti_test.py
  ...
```

Add the code of the `Maksukortti` class shown above to the file _src/maksukortti.py_.

Next, let's try to run the tests. Enter the virtual environment with the command `source .venv/bin/activate`, after which run the command `pytest src`. Running the command suggests that no tests were run. The reason is simply that we have not implemented any tests yet.

Let's implement our project's first test in the file <i>src/tests/maksukortti_test.py</i>. The contents of the file should be the following:

```python
import unittest
from maksukortti import Maksukortti

class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        print("Set up goes here")

    def test_hello_world(self):
        self.assertEqual("Hello world", "Hello world")
```

Let's run the command `pytest src` again in the virtual environment, and we notice that one test has been run successfully.

The command `pytest src` looks for tests to run in the _src_ directory of the project's root directory, as well as recursively in all of its subdirectories. For pytest to know which tests to run, **you must follow the correct naming conventions.** These conventions are:

- The names of test files must end with the suffix <i>\_test</i>, e.g. <i>maksukortti_test.py</i>
- The name of a test class must start with the prefix _Test_, e.g. `TestMaksukortti`
- The names of the test methods of a test class must start with the prefix <i>test\_</i>, e.g. `test_hello_world`

Note that the test directory must contain an empty <i>\_\_init\_\_.py</i> file so that Python finds the modules correctly. Without the file, the test would crash with the error:

```
ModuleNotFoundError: No module named 'maksukortti'
```

If the test directory has subdirectories, they must also contain an empty <i>\_\_init\_\_.py</i> file.

Next, let's write the first sensible test, which tests that the constructor of the `Maksukortti` class sets the balance correctly:

```python
import unittest
from maksukortti import Maksukortti

class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        print("Set up goes here")

    def test_konstruktori_asettaa_saldon_oikein(self):
        # initialise a payment card with 10 euros (1000 cents)
        kortti = Maksukortti(1000)
        vastaus = str(kortti)

        self.assertEqual(vastaus, "Kortilla on rahaa 10.00 euroa")
```

The first line creates a card whose balance becomes 10 euros. The purpose of the test is to make sure that the number given as the constructor parameter becomes the initial balance of the card. This is verified by finding out the card's balance. The balance can be found from the string representation produced by the card's `__str__` method. The second line of the test creates the string representation of the variable `kortti` (card) and stores it in the variable `vastaus` (answer). The last line checks whether the answer is the same as the expected result, i.e. "Kortilla on rahaa 10.00 euroa" ("The card has 10.00 euros").

The check is done with the `assert` command, which is widely used in unittest. The command tests whether the expected result given to it as the first parameter is the same as the result obtained in the test, given as the second parameter. There are many different [assert](https://docs.python.org/3/library/unittest.html#assert-methods) methods.

Next, let's run the test with the command `pytest src` and hope that the test passes.

An alternative way to define the same test would be the following:

```python
def test_konstruktori_asettaa_saldon_oikein(self):
    kortti = Maksukortti(1000)

    self.assertEqual(str(kortti), "Kortilla on rahaa 10.00 euroa")
```

So the value returned by the method call is not stored separately in a variable; instead the call is made directly inside the assertEqual comparison. What happens is that before the comparison itself is done, the function call is made and its return value is what gets compared.

It is a good idea to make sure that the test really finds errors, so let's change the previous test so that it does not pass (in the assertEqual method we claim that the balance is 9 euros):

```python
def test_konstruktori_asettaa_saldon_oikein(self):
    kortti = Maksukortti(1000)

    self.assertEqual(str(kortti), "Kortilla on rahaa 9.00 euroa")
```

Running the tests suggests that the test did not run successfully. For each failed test there is a detailed explanation of the cause of the problem. In addition, the failed files and methods are listed in a more compact form at the end:

```
FAILED src/tests/maksukortti_test.py::TestMaksukortti::test_konstruktori_asettaa_saldon_oikein -
AssertionError: 'Kortilla on rahaa 9.00 euroa' != 'Kortilla on rahaa 10.00 euroa'
```

Next, let's write a test that makes sure the card's balance decreases when the method `syo_edullisesti` is called:

```python
def test_syo_edullisesti_vahentaa_saldoa_oikein(self):
    kortti = Maksukortti(1000)
    kortti.syo_edullisesti()

    self.assertEqual(str(kortti), "Kortilla on rahaa 7.50 euroa")
```

Again the test starts by creating a card. Next, the card's method under test is called, and the last line makes sure that the result is the desired one, i.e. that the card's balance has decreased by the price of an affordable lunch.

### A few remarks

Both tests are simple and test only one thing; this is the recommended practice, even though it is possible to put several calls to the `assertEqual` method in one test. The tests are named so that the name clearly tells what the test tests. In addition, you must always remember to use the <i>test\_</i> prefix in the method name. All the tests are independent of each other, e.g. paying with the card affects the card's balance only in the test where the card payment happens. The order of the tests in the test code does not matter. You should run the tests as often as possible, i.e. whenever you write a test (or change the normal code), run the tests!

Our tests are a bit unfortunate in the sense that they test the change in the payment card's state through the card's string representation. We could also formulate the test so that it checks directly from the payment card's instance variable `saldo` that its value is correct after a meal has been paid for:

```python
def test_syo_edullisesti_vahentaa_saldoa_oikein_2(self):
    kortti = Maksukortti(1000)
    kortti.syo_edullisesti()

    # check that 7.5 euros, i.e. 750 cents, of balance is left
    self.assertEqual(kortti.saldo, 750)
```

This is a bit unfortunate, since one can think that the way the card stores its balance in cents is an internal matter of the card, which the programmer who implemented the card may even change later.

So let's add a new method `saldo_euroina` (balance in euros) to the card, which makes it possible to ask for the card's balance in euros:

```python
class Maksukortti:
    # ...

    def saldo_euroina(self):
        return self.saldo / 100
```     

Let's change the test to use the new method:

```python
def test_syo_edullisesti_vahentaa_saldoa_oikein_2(self):
    kortti = Maksukortti(1000)
    kortti.syo_edullisesti()

    self.assertEqual(kortti.saldo_euroina(), 7.5)
```

### More tests

Let's write two more tests:

```python
def test_syo_maukkaasti_vahentaa_saldoa_oikein(self):
    kortti = Maksukortti(1000)
    kortti.syo_maukkaasti()

    self.assertEqual(kortti.saldo_euroina(), 6.0)

def test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi(self):
    kortti = Maksukortti(200)
    kortti.syo_edullisesti()

    self.assertEqual(kortti.saldo_euroina(), 2.0)
```

The first test checks that eating a tasty meal reduces the balance correctly. The second test makes sure that an affordable lunch cannot be bought if the card's balance is too low.

### Test setup

We notice that our test code has repetition: the first three tests all create a similar card with a balance of 10 euros.

So let's move the creation into the setup method `setUp` defined in the test class:

```python
class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        self.kortti = Maksukortti(1000)

    def test_konstruktori_asettaa_saldon_oikein(self):
        self.assertEqual(str(self.kortti), "Kortilla on rahaa 10.00 euroa")


    def test_syo_edullisesti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_edullisesti()

        self.assertEqual(self.kortti.saldo_euroina(), 7.5)

    def test_syo_maukkaasti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_maukkaasti()

        self.assertEqual(self.kortti.saldo_euroina(), 6.0)

    def test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi(self):
        self.kortti.syo_edullisesti()

        self.assertEqual(self.kortti.saldo_euroina(), 2.0)
```

The `setUp` method is run **before each test case** (i.e. test method). So each test case gets a `Maksukortti` object with a balance of 10 euros. Note that the payment card under test is stored in the test class's instance variable on the line `self.kortti = Maksukortti(1000)`. This way the test methods can see the payment card created by the `setUp` method.

Test methods can also initialise objects suitable for different purposes, as has been done in the test method `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`. Note that in this case `self.kortti` refers to the instance variable initialised in the `setUp` method, whereas `kortti` refers to a variable local to the method.

### Tests for loading money

Let's also write tests for the method `lataa_rahaa`. The first test makes sure that loading succeeds, and the second tests that the card's balance does not grow larger than 150 euros.

```python
def test_kortille_voi_ladata_rahaa(self):
    self.kortti.lataa_rahaa(2500)

    self.assertEqual(str(self.kortti), "Kortilla on rahaa 35.00 euroa")

def test_kortin_saldo_ei_ylita_maksimiarvoa(self):
    self.kortti.lataa_rahaa(20000)

    self.assertEqual(str(self.kortti), "Kortilla on rahaa 150.00 euroa")
```

### Testing edge cases

Finally, add the following tests for the payment card:

- Eating a tasty lunch does not make the balance negative; use the test `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi` as a model
- Loading a negative amount does not change the card's balance
- You can buy an affordable lunch with the card when the card has exactly the price of an affordable lunch (i.e. 2.5 euros)
- You can buy a tasty lunch with the card when the card has exactly the price of a tasty lunch (i.e. 4 euros)

**NOTE:** It is recommended that one test tests only "one thing" at a time. So make each of the above a test of its own.

**NOTE2:** Always write the `assertEqual` commands so that the obtained result is the first parameter
and the expected result is the second parameter. For example:

```python
self.assertEqual(self.kortti.saldo_euroina(), 150.0)
```

### The tests are independent of each other

It was already mentioned above that the tests are independent of each other, i.e. the tests work like small independent functions. What does this mean exactly?

The payment card is tested with several small test methods, the name of each starting with the prefix <i>test\_</i>. Each separate test tests one small thing, e.g. that the card's balance decreases by the price of a lunch. The idea is that each test starts from a "clean slate", i.e. before each test a new card is created in the `setUp` method that does the initialisation.

So each test starts from a situation where the card has just been created. After that, the test either calls the method under test directly, or first brings about a suitable initial situation and then calls the method under test. This was done in the test method `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`, where a separate payment card was initialised whose balance is not enough for buying an affordable lunch. This was used to test that eating an affordable lunch does not make the balance negative.

### The whole test class

```python
import unittest
from maksukortti import Maksukortti

class TestMaksukortti(unittest.TestCase):
    def setUp(self):
        self.kortti = Maksukortti(1000)

    def test_konstruktori_asettaa_saldon_oikein(self):
        self.assertEqual(str(self.kortti), "Kortilla on rahaa 10.00 euroa")


    def test_syo_edullisesti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_edullisesti()

        self.assertEqual(self.kortti.saldo_euroina(), 7.5)

    def test_syo_maukkaasti_vahentaa_saldoa_oikein(self):
        self.kortti.syo_maukkaasti()

        self.assertEqual(self.kortti.saldo_euroina(), 6.0)

    def test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi(self):
        kortti = Maksukortti(200)
        kortti.syo_edullisesti()

        self.assertEqual(kortti.saldo_euroina(), 2.0)

    def test_kortille_voi_ladata_rahaa(self):
        self.kortti.lataa_rahaa(2500)

        self.assertEqual(self.kortti.saldo_euroina(), 35.0)

    def test_kortin_saldo_ei_ylita_maksimiarvoa(self):
        self.kortti.lataa_rahaa(20000)

        self.assertEqual(self.kortti.saldo_euroina(), 150.0)
```

### Have we tested enough: test coverage

We are satisfied; we believe there are now enough test cases. Is that really so? Fortunately, there are tools that can check the line and branch coverage of tests. _Line coverage_ measures which lines of code the test run has gone through. Of course, even full line coverage does not guarantee that the program works correctly, but it is better than nothing. _Branch coverage_, on the other hand, measures which execution branches of the code have been gone through. Execution branches mean, for example, the choices of if statements.

Since branch coverage typically gives a more realistic picture of test coverage, we use it as the measure of test coverage on the course.

### Test coverage report

Test coverage can be collected from the test run with the [coverage](https://coverage.readthedocs.io/en/latest/) tool. It is installed as a development dependency of the project with the command:

```bash
uv add coverage --dev
```

Test coverage of the tests run with the `pytest src` command is collected in the virtual environment with the command:

```bash
coverage run --branch -m pytest src
```

With the `--branch` flag of the command we can collect the [branch coverage](https://coverage.readthedocs.io/en/latest/branch.html) of the tests. Note that the `pytest src` command limits the search for tests to the _src_ directory in the project's root directory. After running the command, we can print a report of the collected test coverage on the command line with the command:

```bash
coverage report -m
```

The result looks like this:

```
Name                            Stmts   Miss Branch BrPart  Cover   Missing
---------------------------------------------------------------------------
src/maksukortti.py                 22      1      8      2    90%   15->exit, 20
src/tests/__init__.py               0      0      0      0   100%
src/tests/maksukortti_test.py      23      0      0      0   100%
---------------------------------------------------------------------------
TOTAL                              45      1      8      2    94%
```

### Excluding files from the report

From the output we notice that the report contains a large number of files that are irrelevant for the project. We can configure which files test coverage is collected from in the _.coveragerc_ file in the project's root directory. If we want to include only the project's _src_ directory in the test coverage, the configuration is the following:

```
[run]
source = src
```

We can exclude files and directories from the test coverage. It could make sense, for example, to exclude the test directory, the directory of the user interface code and the _src/index.py_ file from the test coverage. This is done with the following change to the _.coveragerc_ file:

```
[run]
source = src
omit = src/**/__init__.py,src/tests/**,src/ui/**,src/index.py
```

Now running the commands `coverage run --branch -m pytest src` and `coverage report -m` includes only the files of the _src_ directory we want:

```
Name                 Stmts   Miss Branch BrPart  Cover   Missing
----------------------------------------------------------------
src/maksukortti.py      22      1      8      2    90%   15->exit, 20
----------------------------------------------------------------
TOTAL                   22      1      8      2    90%
```

### A more visual test coverage report

A clearer presentation than the report read on the command line can be generated with the command:

```bash
coverage html
```

Running the command creates the directory _htmlcov_ in the project's root directory. You can view the report in a browser by opening the file _index.html_ in the directory. The report that opens in the browser looks roughly like this:

![]({{ "/images/unittest0.png" | relative_url }})

From the report we see that the branch coverage of the whole code is 90%. We can see the branch coverage of an individual file in the "coverage" column of the table. If we click the name of an individual file in the table, the file's code opens along with the branches covered by the tests. Covered branches are shown as green bars next to the line number. Branches that have not been covered at all are highlighted in red. If, on the other hand, a branch is partially covered, it is highlighted in yellow. By hovering the mouse over the line, we see a more detailed explanation of why the branch is not fully covered:

![]({{ "/images/unittest.png" | relative_url }})

![](/assets/images/python/coverage-tiedosto.png)

In the situation shown in the image, two if conditions never got the value `True`, so those branches were not handled in the tests.

After changes to the code, you need to run two commands to find out the new test coverage. You can run both commands "with a single press of a button" by putting them on the same line separated by a semicolon

```bash
coverage run --branch -m pytest src; coverage html
```

### A note on testing larger projects

Note that the **subdirectories** of the _src_ directory (not the _src_ directory itself) must contain empty <i>\_\_init\_\_.py</i> files so that all the desired files are included in the test coverage. For example, in the [reference application]({{site.python_reference_app_url}}) of the course Ohjelmistotekniikka, the <i>\_\_init\_\_.py</i> files have been added as follows:

```
src/
  entities/
    __init__.py
    todo.py
    ...
  repositories/
    __init__.py
    todo_repository.py
    ...
  services/
    __init__.py
    todo_service.py
  ...
```
