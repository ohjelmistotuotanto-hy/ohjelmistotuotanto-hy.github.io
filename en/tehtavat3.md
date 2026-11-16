---
layout: page
title: Week 3
inheader: no
permalink: /en/tehtavat3/
source: tehtavat3.md
source_commit: 85a3af3
---

{% include en/laskari_info.md part=3 %}

This week's exercises are about Robot Framework, a tool for automating the acceptance testing of user stories. Exercise 8 continues the course's series of [AI] exercises.

### Typos or unclear instructions in the exercises?

{% include en/typo_instructions.md %}

{% include en/norppa.md %}

{% include en/uv_ongelma.md %}

### Submitting the exercises

The exercises are submitted to GitHub, and you mark the completed exercises in the submission app <{{site.stats_url}}> on the "my submission" tab.

Exercises 1 and 5-9 are submitted to the **submission repository** you used in the previous weeks, inside the directory _viikko3_. Exercises 2-4 are submitted to a separate, new repository.

See more detailed instructions about the submission repository [here](/en/tehtavat1#submission-repositories-for-the-exercises).

### GitHub Education

{% include en/copilot_info.md %}

{% include en/checkboxit.md %}

### 1. Getting to know Robot Framework

<input type="checkbox"> Read the Robot Framework introduction [here](/en/robot_framework) and do the exercises in it.

### 2. Web counter

**NOTE:** if you are using Docker, read [this](/en/docker#docker-and-robot-tests)!

Next we move on to the world of web applications. We assume that you are at least somewhat familiar with the [Flask](https://flask.palletsprojects.com/en/stable/) library from the course [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/) (Databases and Web Programming, formerly _Aineopintojen harjoitustyö: Tietokantasovellus_).

Let us look at an example project that offers the functionality familiar from the previous exercise. It can be found in the subdirectory viikko3/webcounter of the course repository.

<input type="checkbox"> Create a brand new repository for this and the next two exercises, named for example _webcounter_, and add a link to it in the README.md file of the *submission repository* you use for the other exercises.

<input type="checkbox"> Install the project's dependencies with the command `uv sync` and start it in the virtual environment with the command `python3 src/index.py`.

Once the application has started, you can use it by opening the address <http://localhost:5001> in your browser:

![]({{ "/images/laskuri1.png" | relative_url }}){:height="350px" }

So the application runs on _localhost_, i.e. on your own machine, in _port_ 5001.
You can shut the application down by pressing `ctrl+c` or `ctrl+d` on the command line.

The structure of the application is mostly the same as in the example applications of the course [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/).

The file _app.py_ defines the functions that handle page requests:

```python
from flask import Flask, redirect, render_template
from counter import Counter

app = Flask(__name__)
cnt = Counter()

@app.route("/")
def index():
    return render_template("index.html", value=cnt.value)

@app.route("/increment", methods=["POST"])
def increment():
    cnt.increase()
    return redirect("/")
```

The HTML templates of the application are defined in the directory _templates_. The only view of the application shows the value of the counter object stored in the variable _cnt_. The view also contains two buttons. The button "Paina" (Press) causes a POST request to the route _increment_. The route handler increments the counter and _redirects_ the application back to the root address. The button "Nollaa" (Reset) does not work at the moment.

A couple of tests have been written for the application with Robot Framework. The tests are run as usual with the command _robot src/tests_, but before running them we have to do a few extra tricks.

The tests use Robot Framework's [Browser](https://robotframework-browser.org/) library, which makes it possible to simulate using a browser from code. The Browser library is based on Microsoft's [Playwright](https://playwright.dev/) tool, which controls the browser directly.

> In addition to the library, the project's dependencies include the package _robotframework-browser-batteries_, which contains the [Node.js](https://nodejs.org/en) runtime the library needs, so you do not have to install Node.js separately.

<input type="checkbox"> Before moving on to the tests, install the Chromium browser used by the tests with the command `uv run rfbrowser install chromium`.

The browser is installed inside the project's virtual environment. This means that the installation has to be done separately for each project, and again if you delete the directory _.venv_.

<input type="checkbox"> Start the web application from the command line as in the previous exercise.
 
Make sure with your browser that the application is running. Make sure that the counter value of the application is 0. If it is something else, restart the application.

<input type="checkbox">  Open a new terminal window and run the project's tests in the virtual environment with the command `robot src/tests`.

The command should successfully run two test cases, `At start the counter is zero` and `When button pressed twice the counter is two`. You can follow the execution of the test cases in the browser window that opens.

#### Problems?

[These instructions](/en/browser_asennusohjeet/) may help.

#### Getting to know the tests

The tests in the file `increment.robot` look like this:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
At start the counter is zero
    Go To  ${HOME_URL}
    Get Title  ==  Laskuri
    Get Text  body  *=  nappia painettu 0 kertaa

When button pressed twice the counter is two
    Go To  ${HOME_URL}
    Click  button >> text=Paina
    Click  button >> text=Paina
    Get Text  body  *=  nappia painettu 2 kertaa
```

If we ignore the _Settings_ section at the beginning, what the tests do is fairly obvious. The keywords used, [Go To](https://marketsquare.github.io/robotframework-browser/Browser.html#Go%20To), [Click](https://marketsquare.github.io/robotframework-browser/Browser.html#Click), [Get Title](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Title) and [Get Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Text), are ready-made keywords provided by the Browser library.

The keywords `Get Title` and `Get Text` fetch a value from the page, and you can also give them an [assertion operator](https://marketsquare.github.io/robotframework-browser/Browser.html#Assertions) and an expected value. For example, <code>Get Title &nbsp;== &nbsp;Laskuri</code> checks that the title of the page is exactly _Laskuri_, and <code>Get Text &nbsp;body &nbsp;*= &nbsp;nappia painettu 0 kertaa</code> checks that the text of the page's `body` element _contains_ the given string. If the condition does not hold, the test fails. When needed, the Browser library waits a moment (by default at most 10 seconds) for the condition to hold before it declares the test failed.

#### How does the Browser library find the elements on the page?

The test cases interact with various HTML elements, such as text fields and buttons. A _selector_ tells a keyword which element it targets. The Browser library supports [several selector types](https://marketsquare.github.io/robotframework-browser/Browser.html#Finding%20elements), of which the most important are:

| selector | finds |
| --------- | ------ |
| `id=foo` | the element whose `id` attribute has the value _foo_ |
| `text=foo` | the element whose text content is or contains _foo_ |
| `button` | a CSS selector, in this case a [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) element |
| `input[name="foo"]` | a CSS selector: an `input` element whose `name` attribute has the value _foo_ |

Selectors can also be chained with `>>`, in which case the latter selector is searched for among the elements found by the former. So the call <code>Click &nbsp;button >> text=Paina</code> looks for a `button` element whose text is _Paina_, i.e. the following button defined in the file _src/templates/index.html_:

```html
<button type="submit">
  Paina
</button>
```

Plain <code>Click &nbsp;text=Paina</code> would also work in this case, since there are no other elements on the page with the text _Paina_.

#### Getting to know the tests, continued

There are several things worth noting in the `*** Settings ***` section. The line

```robot
Resource  resource.robot
```

says that the test should use the definitions (i.e. resources) made in the file `resource.robot`.

The contents of the file `resource.robot` are as follows:

```robot
*** Settings ***
Library  Browser

*** Variables ***
${DELAY}     500ms
${HOME_URL}  http://localhost:5001
${BROWSER}   chromium

*** Keywords ***
Open And Configure Browser
    New Browser  browser=${BROWSER}  headless=False  slowMo=${DELAY}
    New Context
    New Page  about:blank
```

The `*** Settings ***` section takes into use the Browser library mentioned above, which brings along numerous new keywords, all of which are documented [here](https://marketsquare.github.io/robotframework-browser/Browser.html).

The file also has a `*** Variables ***` section, where you can define variables that are available to all keywords. Note that the defined variables are written in upper case, unlike arguments. You should always prefer variables over hard-coded values.

The `*** Keywords ***` section defines the keyword `Open And Configure Browser`, which initialises the browser for the tests:

- The keyword starts the browser with the Browser library's [New Browser](https://marketsquare.github.io/robotframework-browser/Browser.html#New%20Browser) keyword, giving the browser to use as the value of the `browser` argument. By default it is _chromium_. Other options are _firefox_ and _webkit_, which have to be installed separately with the command `uv run rfbrowser install firefox` or `uv run rfbrowser install webkit`.
- The argument `headless=False` specifies that the browser window is visible while the tests run.
- The argument `slowMo` adds a delay as long as the value of the `DELAY` variable between each browser operation. A longer delay makes it easier to follow the test execution.
- [New Context](https://marketsquare.github.io/robotframework-browser/Browser.html#New%20Context) creates a new _context_ in the browser, separate from the others. In practice it corresponds to an incognito window of the browser: the context has its own cookies and other state. If needed, the size of the browser window can be set when creating the context with the argument `viewport`; here the default size is used.
- [New Page](https://marketsquare.github.io/robotframework-browser/Browser.html#New%20Page) opens a new tab in the context, in this case an empty page.

Let us go back to the file `increment.robot`, whose `*** Settings ***` section at the beginning is as follows

```robot
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
  ...
```

The section uses the settings `Suite Setup` and `Suite Teardown`, which we have not seen before. Their meanings are as follows:

- With the `Suite Setup` setting we can run a keyword before the first test case of the file, so at the start _Open And Configure Browser_, defined in the file `resource.robot`, is run
- With the `Suite Teardown` setting we can run a keyword after the last test case of the file; in our case we close the browser with the keyword [Close Browser](https://marketsquare.github.io/robotframework-browser/Browser.html#Close%20Browser)

**Note that for the tests to work, the application must start from a state where the counter value is 0. So always restart the application before running the tests!**

<input type="checkbox"> Once you have run the tests successfully and got to know the application and the tests, this exercise is done.

### 3. Resetting the web counter

<input type="checkbox">  Extend the application so that the button "Nollaa" resets the counter.

<input type="checkbox">  Write a Robot test that verifies that resetting works.

Write the test in the file `reset.robot`. The test looks roughly like this

```robot
*** Settings ***
Resource  resource.robot
Suite Setup  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
When counter has a nonzero value and it is reset the value becomes zero
   ...
```

**Remember** that for the existing tests to work, the application must start from a state where the counter value is 0. So always restart the application before running the tests!

### 4. Running the web application's tests in GitHub Actions

Robot tests that use the Browser library are fairly easy to run in GitHub Actions too. 

A few changes have to be made to the configuration.

<input type="checkbox"> Extend the file `resource.robot` as follows:

```robot
*** Settings ***
Library  Browser

*** Variables ***
${SERVER}    localhost:5001
${DELAY}     500ms
${HOME_URL}  http://${SERVER}
${BROWSER}   chromium
${HEADLESS}  false

*** Keywords ***
Open And Configure Browser
    IF  $HEADLESS == 'true'
        New Browser  browser=${BROWSER}  headless=True
    ELSE
        New Browser  browser=${BROWSER}  headless=False  slowMo=${DELAY}
    END
    New Context
    New Page  about:blank
```

We have now added the variable _HEADLESS_. By setting it to _true_ we can run the tests with a [headless](https://en.wikipedia.org/wiki/Headless_browser) browser, i.e. a browser without a user interface. We have also specified that when running headless, no delay is added between operations, so that the tests are not slowed down unnecessarily.

> Note that the condition is written as `$HEADLESS == 'true'` and not `${HEADLESS} == 'true'`. Robot Framework evaluates the `IF` condition as a Python expression, and the form `$HEADLESS` refers to the variable the same way as a Python variable. If we used the form `${HEADLESS}`, Robot Framework would substitute the value of the variable into the expression as such, and the expression would be `false == 'true'`, which would cause an error.

Headless execution is done as follows:

```bash
robot --variable HEADLESS:true src/tests
```

<input type="checkbox"> Create a GitHub Actions configuration for the project that looks like this:

```yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - name: Install uv
        uses: astral-sh/setup-uv@v10.1.0
        with:
          python-version: '3.14'
      - name: Install dependencies
        run: uv sync
      - name: Install Playwright browser
        run: uv run rfbrowser install --with-deps chromium
      - name: Run robot tests
        run: bash run_robot_tests.sh
```

Before the tests are run in the last step, the Chromium browser used by the tests is installed. The option `--with-deps` also installs the operating system libraries the browser needs. Since the tests are run in headless mode in GitHub Actions, no display or driver is needed.

To run the application's tests in GitHub Actions, these steps have to be performed with command-line commands. 

For this purpose we can use the following bash script `run_robot_tests.sh`, which can be found in the exercise template:

```bash
#!/bin/bash

echo "Running tests"

# start the Flask server in the background
uv run python3 src/index.py &

echo "started Flask server"

# wait until the server is ready to accept requests
while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:5001)" != "200" ]];
  do sleep 1;
done

echo "Flask server is ready"

# run the tests
uv run robot --variable HEADLESS:true src/tests

status=$?

# stop the Flask server in port 5001
kill $(lsof -t -i:5001)

exit $status
```

<input type="checkbox"> Make sure that `run_robot_tests.sh` is included in your project.

<input type="checkbox"> Push the exercise repository to GitHub and make sure that GitHub Actions runs the tests successfully.

<input type="checkbox"> Finally, extend the application so that the counter can be set to a desired value.

After the extension the application may look like this:

![]({{ "/images/webcounter2.png" | relative_url }}){:height="240px" }

If needed, review [here](/en/tehtavat3/#how-does-the-browser-library-find-the-elements-on-the-page) how the Browser library finds the elements on the page.

Instructions for handling forms can be found in the material of the course [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/osa3/). **NOTE:** after receiving the form data you must do a `redirect`, just like when handling button presses, see [Post/Redirect/Get](https://en.wikipedia.org/wiki/Post/Redirect/Get).

<input type="checkbox"> Write Robot tests for the feature.

If the form has an input field whose attribute _name_ has the value _value_:

```html
<input type="text" name="value" />
```

a Robot test can type the value 10 into the field with the keyword [Fill Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Fill%20Text) as follows:

```
Fill Text  input[name="value"]  10
```

<input type="checkbox"> Finally, fix the tests so that every test file starts from a situation where the counter value is zero.

### Debugging Robot Framework tests

Before moving on to the next set of exercises, let us bring up an important topic.

It is likely that while writing the tests you will run into problems that are not trivial to solve. When a test case fails, it is worth considering the possible causes:

- Is the problem in the test, i.e. does the application work as it should? You can for example test the application manually. If so, focus on fixing the test
- Is the problem in the application, i.e. does the manually tested application not work as it should? If so, focus on examining how the program executes in the failing test case

If the tests fail, the Browser library takes a screenshot of the situation where the test detects the problem. After running the tests, you can find the screenshot in the generated test report by drilling down into the report of the failed test. While doing exercise 7 of this week, I ran into the following:

![]({{ "/images/errormsg.png" | relative_url }}){:height="350px" }

In this case the problem was very easy to fix.

Next, let us look at other techniques that make hunting for bugs easier and faster.

#### Limiting the number of tests to run

When you run into a failing test case, it is worth speeding things up by running only the failing test case. Let us assume that in exercise 4 you have written the following test for setting the counter value in the file _set.robot_:

```robot
When counter is set to 10 the value is ten
    Go To  ${HOME_URL}
    Click  button >> text=Paina
    Fill Text  input[name="value"]  10
    Click  button >> text=Aseta
    Get Text  body  *=  nappia painettu 10 kertaa
```

If the test fails, we can run only it with the following command:

```
robot -t "When counter is set to 10 the value is ten" src/tests/set.robot
```

So the `robot` command is given the name of the test case to run with the `-t` option, along with the file where the test case is located.

#### Following the execution of the program

If manual testing alone does not reveal the bug, it is worth examining how the execution of the program proceeds. First you have to narrow down in some way where the problem might be. The good old trick of adding debug output with _print_ already takes you a long way. 

In some cases heavier tools may be needed. Let us assume that the test in the previous example fails, and the page reads _nappia painettu 11 kertaa_ (button pressed 11 times). The problem is probably in the route handler that sets the value. We can stop the execution of the program at the desired line with Python's built-in function `breakpoint`, which starts the [pdb](https://docs.python.org/3/library/pdb.html) debugger:

```python
from flask import Flask, redirect, render_template, request
from counter import Counter

app = Flask(__name__)
cnt = Counter()

# ...

@app.route("/set", methods=["POST"])
def set_value():
    value = int(request.form["value"])
    # stop the execution of the program at this line
    breakpoint()
    cnt.increment(value)
    return redirect("/")
```

Now restart the application so that the changes to the code take effect. Then run only the failing test case as instructed above. When the button press in the test causes a POST request to the route _/set_, the execution of the code stops and a prompt like the following appears in the terminal **running the application**:

```
> /polku/webcounter/src/app.py(20)set_value()
-> breakpoint()
(Pdb)
```

This is an interactive command line where we can execute code. The arrow (`->`) points to the line where the execution is. Let us check the values of the variable `value` and the counter:

```
(Pdb) value
10
(Pdb) cnt.value
1
```

So we type input on the command line and press Enter. The value from the form is correct, and after the button press in the test the counter value is 1, as it should be. Let us step through the code line by line with the command `next`:

```
(Pdb) next
> /polku/webcounter/src/app.py(21)set_value()
-> cnt.increment(value)
(Pdb) next
> /polku/webcounter/src/app.py(22)set_value()
-> return redirect("/")
(Pdb) cnt.value
11
```

Found the bug: the method `increment` increases the counter by the given amount, even though the value should be set.

The most important pdb commands are:

| command | action |
| ------- | -------- |
| `next` (or `n`) | executes the next line |
| `step` (or `s`) | executes the next line and steps into a function call |
| `list` (or `l`) | shows the code around the current line |
| `continue` (or `c`) | continues execution until the next breakpoint |

You can see the value of a variable or an expression by typing it on the command line. If the name of the variable is the same as one of the pdb commands, e.g. `n` or `c`, use the form `p n`.

When you have finished debugging, give the command `continue` and remove the `breakpoint` call from the code.

> **Note:** By default, the Browser library waits at most 10 seconds for e.g. the condition of the keyword `Get Text` to hold. If you debug longer than this, the test fails with a timeout. This does no harm, since the purpose of debugging is to find out what happens in the application. Run the test again once you have fixed the bug.

### 5. WebLogin, part 1

Let us now look at a web application with a slightly more complex structure, which can be found in the directory _viikko3/login_ of the [course repository]({{site.python_exercise_repo_url}}). 

<input type="checkbox"> Fetch the project and copy it to your **submission repository**, inside the directory _viikko3_.

<input type="checkbox"> Install the project's dependencies with the command `uv sync` and start it in the virtual environment with the command `python3 src/index.py`.

<input type="checkbox"> Also install the Chromium browser used by the tests with the command `uv run rfbrowser install chromium`.

- This is a new project with its own virtual environment. So the browser installed in exercise 2 is not available to this project.

Once the application has started, you can use it by opening the address <http://localhost:5001> in your browser. So the application runs on _localhost_, i.e. on your own machine, in _port_ 5001.

The application is very simple; it offers only two features:
- a user can register, i.e. create a username in the system
- a registered user can log in to the system

![]({{ "/images/weblogin1.png" | relative_url }}){:height="300px" }

Next, let us get to know the structure of the application. The application follows a so-called layered architecture, i.e. its structure is similar to the [reference application](https://github.com/ohjelmistotekniikka-hy/python-todo-app/blob/master/dokumentaatio/arkkitehtuuri.md) of the course Ohjelmistotekniikka.

The structure of the application and how the tests relate to it look like this:

![]({{ "/images/lh3-weblogin-rakenne.svg" | relative_url }})

As in the application of the previous exercises, the user interface is implemented in the file `app.py` and the directory `templates`. The _application logic_ related to managing the users of the program is placed in its own class `UserService`.

The version of the application in use does not really store user data anywhere more permanent, such as a database or a file; the user data is kept only in main memory.

One thing worth noting is that the `UserService` object does not store `User` objects in memory directly but indirectly through an object of the `UserRepository` class. What is this about?
The `UserRepository` class abstracts, i.e. hides, the logic related to managing users from the other objects of the application.

#### The Repository design pattern

There are several _design patterns_ for separating data operations from application logic, such as [Data Access Object](https://en.wikipedia.org/wiki/Data_access_object), [Active Record](https://en.wikipedia.org/wiki/Active_record_pattern) and [Repository](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design). The fundamental idea of all these design patterns is that the details of data operations should be hidden from the application logic.

For example, in the repository design pattern this means that operations on the data are performed through various functions or methods, such as `find_all`, `create` and `delete`. Thanks to this abstraction, the application logic is not aware of the details of the operations, so that for example the way the data is stored can easily be changed.

The application has a class `UserRepository` that follows the repository design pattern. The class stores the users of the application in the machine's memory. If we decided to store the users in a PostgreSQL database, for example, this would not require changes outside the class.

Next, a brief look at how the user interface of the application, i.e. the route handlers and the generation of views, works.

Requests to the path "/", i.e. the root of the application at the address <http://localhost:5001>, are handled by the following piece of code:

```python
@app.route("/")
def render_home():
    return render_template("index.html")
```

Using the [Jinja](https://jinja.palletsprojects.com/) library, the code renders an HTML page from the template in the file _src/templates/index.html_ and returns it to the user's browser.

The template looks like this:

```html
{% raw %}{% extends "layout.html" %} {% block title %} Ohtu Application {%
endblock %} {% block body %}
<h1>Ohtu Application</h1>

<ul>
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register new user</a></li>
</ul>
{% endblock %}{% endraw %}
```

All the _GET_ definitions are similar: they only render an HTML page (the templates defining their contents are located in the directory _src/templates_) and return the page to the browser.

The _POST_ definitions are more complex; they handle data sent with forms. For example, a user's login attempt is handled by the following code:

```python
@app.route("/login", methods=["POST"])
def handle_login():
    username = request.form.get("username")
    password = request.form.get("password")

    try:
        user_service.check_credentials(username, password)
        return redirect_to_ohtu()
    except Exception as error:
        flash(str(error))
        return redirect_to_login()
```

The code accesses the data the user sent with the _form_ through the _request_ object:

```python
username = request.form.get("username")
password = request.form.get("password")
```

The code checks that the username and password are correct by calling the method `check_credentials` of the `UserService` object. If the login succeeds, the user is redirected to the page at the path "/ohtu". If it fails, the `check_credentials` method raises an exception, which we handle in the `except` block by redirecting the user to the page at the path "/login" and showing the message of the error there as an error message.

<input type="checkbox"> Now get to know the structure and functionality of the application.

#### Getting to know the tests

Let us first look at the common settings and keywords of the test cases, which can be found in the file `src/tests/resource.robot`. Its contents are as follows:

```robot
*** Settings ***
Library  Browser
Library  ../AppLibrary.py

*** Variables ***
${SERVER}        localhost:5001
${DELAY}         500ms
${HOME_URL}      http://${SERVER}
${LOGIN_URL}     http://${SERVER}/login
${REGISTER_URL}  http://${SERVER}/register
${BROWSER}       chromium
${HEADLESS}      false

*** Keywords ***
Open And Configure Browser
    IF  $HEADLESS == 'true'
        New Browser  browser=${BROWSER}  headless=True
    ELSE
        New Browser  browser=${BROWSER}  headless=False  slowMo=${DELAY}
    END
    New Context
    New Page  about:blank

Login Page Should Be Open
    Get Title  ==  Login

Main Page Should Be Open
    Get Title  ==  Ohtu Application main page

Go To Login Page
    Go To  ${LOGIN_URL}

```

The contents of the file are similar to the previous exercises. This time,
in addition to the Browser library, the `*** Settings ***` section also takes into use the project's own library `AppLibrary.py`, which defines two keywords needed in the project, `Reset Application` and `Create User`.

The `*** Keywords ***` section also defines a few general-purpose keywords:
- `Login Page Should Be Open` and `Main Page Should Be Open`, whose purpose is to check that the user is on the right page. They use the [Get Title](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Title) keyword, which checks the value of the [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) element of the HTML page. Instead of the value of the title element, we could for example check that a certain text is found on the page by using the [Get Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Text) keyword
- The `Go To Login Page` keyword uses the [Go To](https://marketsquare.github.io/robotframework-browser/Browser.html#Go%20To) keyword to open the login page in the browser; its URL is stored in the `LOGIN_URL` variable

Next, let us look at the test cases themselves by opening the file `src/tests/login.robot`. The file's `*** Settings ***` section is as follows:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application Create User And Go To Login Page
```

In addition to what the tests of the previous exercises used, there is now also `Test Setup`, which runs the keyword `Reset Application Create User And Go To Login Page` before *each* test.

The file's `*** Keywords ***` section contains keywords used by the test cases:

- The `Login Should Succeed` keyword checks that the user has moved to the right page after a successful login
- The `Login Should Fail With Message` keyword checks that the user is on the login page and that a certain error message is found on the page. The check uses the [Get Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Get%20Text) keyword with the operator `*=`, which checks that the desired text is found on the page
- The `Set Username` and `Set Password` keywords type the given values into specific fields using the [Fill Text](https://marketsquare.github.io/robotframework-browser/Browser.html#Fill%20Text) and [Fill Secret](https://marketsquare.github.io/robotframework-browser/Browser.html#Fill%20Secret) keywords. The fields are found by their `id` attribute with the selectors `id=username` and `id=password`. Fill Secret works like Fill Text, but it does not write the typed value into the test log. This is why the value is given to it in the form `$password` and not `${password}`
- The ` Reset Application Create User And Go To Login Page` keyword empties the application's "database", i.e. the users created there, creates a new user in the application and opens the login page

If needed, review [here](/en/tehtavat3/#how-does-the-browser-library-find-the-elements-on-the-page) how the Browser library finds the elements on the page.

<input type="checkbox"> Now create a new file `home.robot` and add the following test cases to it:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application And Go To Starting Page

*** Test Cases ***
Click Login Link
    Click  text=Login
    Login Page Should Be Open

Click Register Link
    Click  text=Register new user
    Register Page Should Be Open

*** Keywords ***

Reset Application And Go To Starting Page
  Reset Application
  Go To Starting Page
```

So the test cases should test that clicking the "Login" and "Register new user" links opens the right page. The links are clicked with the predefined [Click](https://marketsquare.github.io/robotframework-browser/Browser.html#Click) keyword, and each link is identified by its text with the selector `text=...`. 

<input type="checkbox"> Run the tests

> Remember that the browser must be installed and the application must be running when you run the tests, see [these instructions](/en/browser_asennusohjeet/#possible-problems)

The result is most likely an error message telling which keywords are undefined:

```
Click Register Link                                                   | FAIL |
Setup failed:
No keyword with name 'Go To Starting Page' found.
```

<input type="checkbox"> Implement the undefined keywords used by the test.

**NOTE:** the idea is that the keyword `Go To Starting Page` takes the application to the path /, i.e. the start page.

### 6. WebLogin, part 2

Let us continue implementing acceptance tests for logging in. Before that, let us take a quick look at what the implementation of the AppLibrary library looks like. The class `AppLibrary` that defines the library is in the file _src/AppLibrary.py_, whose contents are as follows:

```python
import requests


class AppLibrary:
    def __init__(self):
        self._base_url = "http://localhost:5001"

    def reset_application(self):
        requests.post(f"{self._base_url}/tests/reset")

    def create_user(self, username, password):
        data = {
            "username": username,
            "password": password,
            "password_confirmation": password
        }

        requests.post(f"{self._base_url}/register", data=data)
```

It is essential that the tests always start from the same state, and in particular that the state of the application's database is well known at the start of the tests. 

The keyword `Reset Application`, defined by the method `reset_application`, sends a _POST_ request to the path "/tests/reset" of the application. The request is handled by the following function:

```python
@app.route("/tests/reset", methods=["POST"])
def reset_tests():
    user_repository.delete_all()
    return "Reset"
```

The function deletes all users of the application and thus resets the state of the application. So this is a way of resetting the database implemented only for the use of the tests.

Similarly, the method `create_user` sends a _POST_ request to the path "/register" of the application. The function handling the request creates a new user if it is valid:

```python
@app.route("/register", methods=["POST"])
def handle_register():
    username = request.form.get("username")
    password = request.form.get("password")
    password_confirmation = request.form.get("password_confirmation")

    try:
        user_service.create_user(username, password, password_confirmation)
        return redirect_to_welcome()
    except Exception as error:
        flash(str(error))
        return redirect_to_register()
```


<input type="checkbox"> Add the following test case for the user story _User can log in with valid username/password-combination_ to the file `login.robot`:

```robot
Login With Nonexistent Username
# ...
```

### 7. WebLogin, part 3

<input type="checkbox"> Write the following test cases for the user story _A new user account can be created if a proper unused username and a proper password are given_ in a new file `register.robot`:

```robot
*** Settings ***
Resource  resource.robot
Suite Setup     Open And Configure Browser
Suite Teardown  Close Browser
Test Setup      Reset Application Create User And Go To Register Page

*** Test Cases ***

Register With Valid Username And Password
# ...

Register With Too Short Username And Valid Password
# ...

Register With Valid Username And Too Short Password
# ...

Register With Username That Is Already In Use
#

*** Keywords ***
#...
```

The username and password follow these rules:

- The username must be a string at least 3 characters long that is not yet in use
- The password must be at least 8 characters long

There are further requirements for the password, but they will be implemented only in exercise 8.

<input type="checkbox"> Extend your code so that the tests pass. 

The right place for the changes to the code is the method `validate` of the `UserService` class in the file <i>src/services/user_service.py</i>.

**Pro tips**:
- Proceed one test case and the code implementing it at a time
- If needed, review [here](/en/tehtavat3/#how-does-the-browser-library-find-the-elements-on-the-page) how the Browser library finds the elements on the page
- Use the login tests as a model!
- Remember [this](/en/tehtavat3/#debugging-robot-framework-tests), and especially [this](/en/tehtavat3/#following-the-execution-of-the-program) from there

#### Where should keywords be placed?

When writing the registration tests, you will soon notice that you need the same keywords as in the login tests, e.g. the keywords `Set Username` and `Set Password`, which are defined in the file `login.robot`. Keywords can be placed either in the `*** Keywords ***` section of the test file or in the shared file `resource.robot`. The rule of thumb is as follows:

- The **test file** is for keywords that are used only in the tests of that file. E.g. `Login Should Succeed` and `Login Should Fail With Message` relate only to logging in, so they belong in the file `login.robot`. Likewise, registration checks such as `Register Should Succeed` belong in the file `register.robot`.
- The **file `resource.robot`** is for keywords that are used in several test files. Examples are `Open And Configure Browser`, which initialises the browser, keywords that navigate to a page, such as `Go To Login Page` and `Go To Register Page`, and keywords that check the page, such as `Login Page Should Be Open` and `Register Page Should Be Open`. Variables shared by all tests, such as the page addresses, also belong here.

When you notice that you need a keyword in a test file that is already defined in another test file, **do not copy it**; move it to the file `resource.robot` instead. E.g. if `register.robot` needs the keywords `Set Username` and `Set Password`, move them from the file `login.robot` to the file `resource.robot`. Copied keywords drift apart over time, and changes have to be made in many places.

If a keyword with the same name is defined both in a test file and in the file `resource.robot`, Robot Framework uses the test file's own definition. This can cause confusing situations, so when you move a keyword to the file `resource.robot`, remember to remove it from its original place.

### 8. Agent and acceptance tests [AI]

{% include ai_valitsin.html %}

Let us continue the series of [AI] exercises that started in [exercise 9](/en/tehtavat2/#9-first-contact-with-a-coding-agent-ai) of week 2. You can find a summary of the feedback collected from the week 2 exercise [here](/en/palaute_viikko2/).

If needed, review the chapters [What a language model is](/en/genai/#what-is-a-language-model) and [Forms of AI-assisted programming](/en/genai/#forms-of-ai-assisted-programming) of the material [AI in software engineering](/en/genai/) you read last week.

<input type="checkbox"> Before doing this exercise, read the chapters [Agentic coding](/en/genai/#agentic-coding), [Context management](/en/genai/#managing-context) and [Requirements as a prompt](/en/genai/#requirements-as-a-prompt).

The exercise uses <span class="vain-copilot">GitHub Copilot in VS Code</span><span class="vain-opencode">[OpenCode](/en/opencode/)</span>. You can of course also do the exercise with some other AI-assisted coding tool.

Let us continue with the WebLogin application. Make sure that the changes of exercises 5-7 have been committed before you let the agent touch the code.

<div class="vain-copilot" markdown="1">
<input type="checkbox"> Open the directory _viikko3/login_ in VS Code as its own workspace (e.g. with the command `code .` in the directory _viikko3/login_), so that the agent focuses only on this project

<input type="checkbox"> Open Copilot's Chat view and select the _Agent_ mode
</div>

<div class="vain-opencode" markdown="1">
<input type="checkbox"> Start OpenCode in the directory _viikko3/login_, so that the agent focuses only on this project

<input type="checkbox"> Make sure that the Build agent is in use
</div>

<input type="checkbox"> Generate an [instructions file](/en/genai/#managing-context) for the project by typing `/init` in the chat

The agent examines the project and creates the file <span class="vain-copilot">_.github/copilot-instructions.md_ or _AGENTS.md_</span><span class="vain-opencode">_AGENTS.md_</span>.

<input type="checkbox"> Read the instructions file carefully and correct or complete it as needed. The file should state at least the following:

- the project is a uv project, and commands are run in the form `uv run ...`
- how the application is started and which port it runs in
- how the Robot Framework tests are run (`uv run robot src/tests`) and that the application must be running during the tests
- where the validation of the username and password takes place

Keep the instructions file concise. It is attached to every request given to the agent.

<input type="checkbox"> Commit the instructions file

There are two more requirements related to registration that were not implemented in exercise 7:

```
User story: The password must not consist of letters only

Acceptance criteria:
- the password "kalle123" is accepted
- the password "kalle#abc" is accepted
- the password "kallekalle" is rejected and an error message is shown to the user
- the password "KalleKalle" is rejected and an error message is shown to the user
```

```
User story: The password and the password confirmation must match

Acceptance criteria:
- if the password and its confirmation match, registration succeeds
- if the password and its confirmation differ, registration fails and an error message is shown to the user
```

The requirement of exercise 7 about the minimum length of the password is still in force.

<div class="vain-opencode" markdown="1">
<input type="checkbox"> By default OpenCode runs commands without asking, so enable [command approval](/en/opencode/#approving-commands) by adding the setting to the file _opencode.json_. If you created the file in the root of your submission repository in week 2, the setting is already in force
</div>

Implement the stories with the agent **one at a time**. Do the following for each story:

<input type="checkbox"> Ask the agent to **first** write the story's acceptance criteria as Robot Framework tests in the file _register.robot_ and to make sure that the tests do not pass

<input type="checkbox"> Only after this, ask the agent to implement the functionality so that the tests pass

<input type="checkbox"> Let the agent run the application and the tests itself. Read every command before you approve it to be run

<input type="checkbox"> When the agent is done, run all the tests yourself and make sure that they pass

<input type="checkbox"> Go through the change the agent made, e.g. with the command `git diff`. Did the agent make changes to places it was not asked to touch? Remove the unnecessary code, or ask the agent to remove it

How can you be sure that the tests written by the agent really test the new functionality?

<input type="checkbox"> Break the implementation **yourself** on purpose in at least two different ways, e.g. accept a password consisting of letters only or remove the check of the password confirmation, and after each break make sure that at least one test fails

<input type="checkbox"> Restore the working implementation and commit the changes

<input type="checkbox"> Write a report of your experiences in the file _ai.md_ in the directory _viikko3_

In the report, tell
- What kind of instructions file did the agent generate, and what did you have to fix?
- Did the agent follow the request to write the tests before the implementation?
- How much did you have to steer the agent along the way?
- Did the tests fail when you broke the implementation on purpose?
- What new things did you learn?

<input type="checkbox"> After doing the exercise, read the chapter [Responsibility and expertise](/en/genai/#responsibility-and-competence) of the AI material

### 9. Retrospective techniques

<input type="checkbox"> Get to know the retrospective techniques presented in the [mini project instructions](/en/miniprojekti/#holding-a-retrospective).

<input type="checkbox"> Write a summary of about 200 words on the topic in the file _retro.md_ in the directory _viikko3_ of your submission repository.

In your summary, also reflect on what makes a retrospective an event where people dare to bring up problems.

Make sure that your mini project team holds a retrospective at the end of the first sprint!

### 10. Practising the daily scrum

In this exercise we use an [OhtuBot](/en/ohtubotit/) to practise telling about being stuck in a daily scrum. The bot plays your team, and you tell the team about your problem. The bot works in Finnish. The practice is not graded, and it is fine to fail.

<input type="checkbox"> Go through at least three simulations with the bot. Try different ways of acting and different blockers in different simulations.

<input type="checkbox"> After the simulations, reflect on what a good daily scrum looks like. Write 100–200 words about your reflections in the file _daily.md_ in the directory _viikko3_ of your submission repository.

{% include curre_embed.html %}

<details class="bot" id="daily">
  <summary>Daily Scrum</summary>
  <p>Start the conversation by telling what the team's way of working is like: <em>turvallinen</em> (safe), <em>vaihteleva</em> (varying) or <em>syyllistävä</em> (blaming).</p>
  <p>You have been stuck with your task for two days already, and it is important for you to share this with the team. Pick one of the problems below and tell your team about it in your own words:</p>
  <ol>
    <li>You cannot get the project to start on your machine.</li>
    <li>The task is too abstract, and you do not know how to proceed with it.</li>
    <li>You do not know databases well enough, and you are nervous about making a schema change.</li>
    <li>Come up with a blocker of your own.</li>
  </ol>
  <div lang="fi" style="position: relative;" translate="yes"><iframe
      id="cc-iframe-daily"
      style="border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.3rem;"
      data-src="https://curre.helsinki.fi/chat/hy-opt-cur-2627-7a893cd5-d161-4815-ac8e-422dd8953ff9?embedded=true&amp;promptId=52864821-4356-4200-b629-520093ea6573"
      width="100%" height="800px">
    </iframe>
    <div id="login-popup-info-daily"
      style="position: absolute; top: 0; left: 0; display: none; padding: 4rem; white-space: pre-line;">
      <p>You need to renew your login session to use CurreChat.
        The login opens in a new window. If that did not happen, <a
          href="https://curre.helsinki.fi/chat/login-helper" target="_blank"
          rel="noopener opener">click here</a>.</p>
      <p id="popup-blocked-info-daily" style="display: none; margin-top: 1rem;">
        The pop-up window could not be opened, so use the link above.</p>
    </div>
  </div>
  <script>embedCurre("daily")</script>
</details>

{% include en/submission_instructions.md %}

Add a link to the webcounter repository you made for exercises 2-4 in the README.md file of your submission repository.
