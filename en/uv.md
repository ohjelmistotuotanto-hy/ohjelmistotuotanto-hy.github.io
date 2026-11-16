---
layout: page
permalink: /en/uv
title: uv and dependency management
source: uv.md
source_commit: 81a8f02
---

In large and complex software projects, producing all the code yourself is no longer practical. For example, it does not make sense for every software project to implement its own programming interface for database operations, or a framework for testing code. So that the wheel does not have to be reinvented every time, software developers have created a huge number of open source _libraries_ that anyone can use in their projects.

The source code of libraries can often be read on version control platforms such as GitHub. Libraries are often updated continuously, and these updates produce new _versions_ of the libraries. Library versions are published in various registries, from which they are easy to install. [The Python Package Index](https://pypi.org/) (PyPI) is one such registry, meant for Python libraries.

The library versions used in a project are the project's _dependencies_. In Python projects, dependencies are typically installed in project-specific _virtual environments_ so that the dependencies of projects on the same computer do not conflict. To make managing dependencies and virtual environments easy, we use the command line tool [uv](https://docs.astral.sh/uv/) on the course. uv is a fast tool implemented in Rust that handles the management of Python versions, virtual environments and dependencies all at once.

### Why uv?

The Python ecosystem offers several competing tools for managing dependencies and virtual environments. The best known include [pip](https://pypi.org/project/pip/) and [venv](https://docs.python.org/3/library/venv.html), which come with Python itself, and the third-party tools [Poetry](https://python-poetry.org/), [Pipenv](https://pipenv.pypa.io/) and [conda](https://docs.conda.io/).

- **pip + venv** are tools in Python's standard library, so nothing extra needs to be installed. Using them, however, involves quite a lot of manual work: you have to create and activate the virtual environment yourself, dependencies are often listed just in a _requirements.txt_ file without proper version locking, and the tool cannot manage the Python version used.
- **Poetry** brought proper dependency locking (_poetry.lock_) and tidy _pyproject.toml_-based project management to the Python world, but it is considerably slower than uv and cannot install or manage Python versions itself.
- **conda** is designed especially for the needs of data analytics and scientific computing, and it can also install non-Python dependencies (e.g. C libraries), but it is heavy and slow for general-purpose application development.

The biggest advantages of uv over its competitors are:

- **Speed.** uv is implemented in Rust and is typically tens of times faster than pip or Poetry at installing dependencies.
- **Everything in one tool.** uv handles the management of Python versions, virtual environments and dependencies, and separate tools (e.g. pyenv) are not needed.
- **A simple, standards-compliant project structure.** uv uses the _pyproject.toml_ format of Python's official [PEP 621](https://peps.python.org/pep-0621/) standard, which makes projects compatible with other tools as well.
- **Active development.** uv is currently the fastest-spreading dependency management tool in the Python community, and [Astral](https://astral.sh/), the company behind it, also develops other popular Python tools such as the [Ruff](https://docs.astral.sh/ruff/) linter.

### Notes on commands

On many computers, Python 3 commands are run with the command `python3` instead of `python`. Check the version in use with the command:

```bash
python3 --version
```

If for some reason the command `python3` is not found, check the version used by the `python` command with the command:

```bash
python --version
```

If in both cases the version is lower than 3.14, don't worry: uv can install and manage Python versions itself, so a separate Python installation is not necessarily needed, see below.

_The course uses uv version 0.12 (or newer). If your machine has an older version, you should update it with the command `uv self update`!_

### Installation

Before we can take a closer look at using uv, it has to be installed. Follow the installation instructions below that suit your computer's operating system; it is also a good idea to take a look at uv's [official](https://docs.astral.sh/uv/getting-started/installation/) installation instructions.

**NOTE:** with all installation methods, you may have to close and reopen the terminal window before the uv commands start working.

#### Installation on Linux and macOS

Install uv by running the following command in the terminal:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

The installation script automatically adds the path of the uv binary to the `PATH` variable (typically the directory _$HOME/.local/bin_). Restart the terminal and make sure the installation succeeded by running the command `uv --version`. The command should print the installed version.

#### Installation on Windows

Install uv by running the following command in PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Restart the terminal and make sure the installation succeeded by running the command `uv --version`. The command should print the installed version.

### Managing Python versions

uv can also install Python versions itself, so a separate Python installation is not necessarily needed. You can install, for example, Python version 3.14 with the command:

```bash
uv python install 3.14
```

You can see the installed versions with the command:

```bash
uv python list
```

When a project is initialised as described below, requiring a specific Python version, uv installs that version automatically if needed, and running the `uv python install` command separately is not necessarily needed.

### Initialising a project

Let's practise using uv by creating a small example project. Create a directory _uv-testi_ in a location of your choice. Open the directory in the terminal and run the command:

```bash
uv init --python 3.14 --no-package
```

The option `--python 3.14` given with the command sets the project's Python version requirement to at least version 3.14. uv does not ask any questions when the command is run; instead it creates the necessary files directly, already filled in.

The option `--no-package` is important: without it, `uv init` by default initialises the project as an installable _package_, in which case it creates, among other things, a subdirectory named after the project in the _src_ directory, and a `[build-system]` section in the _pyproject.toml_ file. On this course, our projects are simpler applications, not packages to be published, so `--no-package` keeps the project structure tidy.

After running the command, a few files appear in the directory: _pyproject.toml_, _.python-version_, _README.md_ and _main.py_. The file _.python-version_ tells which Python version is used in the project by default. The contents of the _pyproject.toml_ file are roughly the following:

```
[project]
name = "uv-testi"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.14"
dependencies = []
```

In the `[project]` section we see, among other things, the Python version requirement we set when running the `uv init` command, which has the form `requires-python = ">=3.14"`. This means that using the project requires at least Python version 3.14. The `dependencies` entry, in turn, will contain the project's dependencies once they are added.

Finally, let's delete the example file _main.py_ created by the `uv init` command as unnecessary, since we will later write our code in the _src_ directory.

### Installing dependencies

{% include en/no_pip.md %}

Next, let's install the first dependency in our project. The easiest way to find dependencies is to google and look for suitable GitHub repositories or PyPI pages in the search results. As an example, let's install the [cowsay](https://pypi.org/project/cowsay/) library in our project. This is done in the project's root directory (the same directory where the _pyproject.toml_ file is) with the command:

```bash
uv add cowsay
```

So the installation command has the form `uv add <library>`. After running the command, we notice that new content has appeared in the `dependencies` entry of the _pyproject.toml_ file:

```
dependencies = [
    "cowsay>=6.1",
]
```

By default, the `uv add` command installs the latest version of the library, which at the time of running the command was `6.1`. Often this is exactly what we want. If we want, however, we can install for example version `5.0` of the cowsay library with the command:

```bash
uv add cowsay==5.0
```

If we wanted to remove the library from our project's dependencies, we could do it with the command:

```bash
uv remove cowsay
```

Let's keep the cowsay library installed for now, though.

When dependencies are added or removed, uv automatically updates the project's virtual environment (in the directory _.venv_, which is created in the project root) as well as the file _uv.lock_. The file contains the exact version information of all installed dependencies, which allows uv to always install exactly the same versions. For this reason, the file must be added to version control.

The directory _.venv_, on the other hand, _must not be stored_ in version control, so you should add it to the _.gitignore_ file right away.

If you just want to make sure that all dependencies defined in the _pyproject.toml_ file are installed (e.g. after cloning a project made by someone else), you can do it with the command:

```bash
uv sync
```

The command also initialises the virtual environment if needed. In practice, you rarely need to run the command separately, since for example the `uv run` command introduced in the next section synchronises the dependencies automatically before running.

### Running commands in the virtual environment

Next, let's add a directory _src_ to the _uv-testi_ directory and a file _index.py_ in it. Add the following lines of code to the file:

```python
import cowsay

cowsay.tux("uv is awesome!")
```

In the code we use the `import` statement to make the cowsay library available. If we run the file in the terminal with the command:

```bash
python3 src/index.py
```

The result is the following error message:

```
ModuleNotFoundError: No module named 'cowsay'
```

This is because we are not inside the project's virtual environment, which is why Python cannot find our project's dependencies. This is fixed by using the [run](https://docs.astral.sh/uv/reference/cli/#uv-run) command:

```bash
uv run python3 src/index.py
```

So the `uv run` command runs the given command in the virtual environment, inside which Python finds our dependencies. Before running, the command also makes sure that the dependencies are up to date (i.e. if needed, it does what the `uv sync` command does).

When a project is under active development and commands are run in the terminal all the time, it can be handy to stay inside the virtual environment instead of writing `uv run` in front of every command. This is done by activating the virtual environment directly with the command:

```bash
source .venv/bin/activate
```

(On Windows, the corresponding command is `.venv\Scripts\activate`.)

When we are in the virtual environment, the name of the virtual environment is shown in parentheses in front of the command prompt:

```bash
$ (uv-testi)
```

Inside the virtual environment we can run the command "normally", i.e. without the `uv run` command:

```bash
python3 src/index.py
```

We can leave the virtual environment with the command `deactivate`.

### Development dependencies

With uv, dependencies can be grouped according to their purpose. A fairly common way of grouping dependencies is to divide them into _development-time_ and _runtime_ dependencies. Development dependencies are needed while developing the software, but they are not necessary for running the program.

By default, running the command `uv add` installs dependencies in the `dependencies` entry of the file. In addition to these dependencies, we can install dependencies in our project that we only need during development. These include all the dependencies that are not needed for starting the application itself (e.g. running the command `python3 src/index.py`).

Development dependencies are installed by giving the `--dev` flag to the `uv add` command. For example, the [pytest](https://pytest.org/) library, which will soon become familiar, can be installed as a development dependency with the following command:

```bash
uv add pytest --dev
```

Running the command adds the pytest library as a dependency to the `dev` group of the `[dependency-groups]` section of the _pyproject.toml_ file:

```
[dependency-groups]
dev = [
    "pytest>=9.1.1",
]
```

Defining development dependencies is handy because it reduces the number of dependencies to install when we only want to run the application. In that situation, the dependencies can be installed with the command `uv sync --no-dev`.

**NOTE:** `uv run` synchronises the dependencies automatically before running, and by default it does this _including the development dependencies_. So if you have installed the dependencies with the command `uv sync --no-dev`, a plain `uv run` command installs the development dependencies back. If you want to run a command without the development dependencies, use the command `uv run --no-dev`.

{% include en/no_pip.md %}

### Solutions to common problems

#### The virtual environment is broken

If you encounter a strange error that you suspect is caused by a broken virtual environment or broken dependencies, delete the virtual environment and the lock file and reinstall the dependencies, i.e. give the commands:

```
rm -rf .venv
rm uv.lock
uv sync
```

Then try again!

#### uv does not find the right Python version

If uv complains that it cannot find the Python version required in the _pyproject.toml_ file, install the required version with uv itself:

```bash
uv python install 3.14
```

and then run `uv sync` again.

#### Updating uv itself

If you suspect that an outdated version of uv is causing problems, update it with the command:

```bash
uv self update
```

and then try the failed command again.
