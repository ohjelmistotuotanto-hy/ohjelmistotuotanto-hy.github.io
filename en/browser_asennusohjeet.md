---
layout: page
title: Installing the Browser library and troubleshooting
inheader: no
permalink: /en/browser_asennusohjeet/
source: browser_asennusohjeet.md
source_commit: 85a3af3
---

## Typos in the material

{% include en/typo_instructions.md path="/python/browser_asennusohjeet.md" %}

The course's Robot tests that use a browser are written with Robot Framework's [Browser](https://robotframework-browser.org/) library, which is based on the [Playwright](https://playwright.dev/) tool. Separate browser drivers are **not needed**.

## Installation

The exercise templates have the packages _robotframework-browser_ and _robotframework-browser-batteries_ as dependencies. The latter contains the Node.js runtime the library needs, so you do not have to install Node.js separately. The dependencies are installed as usual with the command `uv sync`.

The browser used by the tests is installed in the project directory with the command

```bash
uv run rfbrowser install chromium
```

The browser is installed inside the project's virtual environment. This means the installation has to be done separately for each project, and again if the _.venv_ directory is removed or the Browser library is updated.

The tests use Playwright's own Chromium browser, not a Chrome that may be installed on your machine. If you want, you can also use Firefox or WebKit (Safari's browser engine):

```bash
uv run rfbrowser install firefox
robot --variable BROWSER:firefox src/tests
```

**Note:** do not use the command `rfbrowser init`, since it is meant for the situation where Node.js has been installed separately without the _robotframework-browser-batteries_ package.

### Linux and WSL

On Linux (and in Windows WSL) the browser may need operating system libraries that are missing from your machine. You can install them with the same command by adding the option `--with-deps`:

```bash
uv run rfbrowser install --with-deps chromium
```

The command installs the libraries with the operating system's package manager, so it will ask for the administrator (root) password.

WSL2 on Windows 11 can also display graphical applications, so the window of the browser running the tests should be visible. If the window does not open, run the tests in headless mode, see [exercise 4](/en/tehtavat3/#4-running-the-web-applications-tests-in-github-actions) of week 3.

## Possible problems

### The browser has not been installed

The following error message tells you that the browser used by the tests has not been installed:

```
Suite setup failed:
Error: browserType.launch: Executable doesn't exist at .../chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
```

You do not need the `npx` command suggested by the error message. Install the browser with the command `uv run rfbrowser install chromium` instead.

### The application is not running

The following error message tells you that you are running the tests without the application being up:

```
At start the counter is zero                                          | FAIL |
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5001/
Call log:
  - navigating to "http://localhost:5001/", waiting until "load"
```

The tests assume that the application is running. So start the application in one terminal, open a new one and run the tests there.

### A test fails even though the application works

If a test fails even though the application works correctly when you test it with a browser, check the report _log.html_ created after the test run. The Browser library takes a screenshot at the moment of failure; it is shown in the report and saved in the directory _browser/screenshot_. Often the problem is a selector that does not find the desired element. More about selectors [here](/en/tehtavat3/#how-does-the-browser-library-find-the-elements-on-the-page).
