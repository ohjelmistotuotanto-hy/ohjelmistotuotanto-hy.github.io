---
layout: page
title: Week 7
inheader: no
permalink: /en/tehtavat7/
source: tehtavat7.md
source_commit: 81a8f02
---

### Typos or unclear instructions in the exercises?

{% include en/typo_instructions.md %}

### Submitting the exercises

The exercises are submitted to GitHub and by marking the completed exercises in the submission app <{{site.stats_url}}> on the "my submission" tab.

**This week's exercises 3-8 are submitted** to the **submission repository** you have already used in previous weeks, inside the directory viikko7. Exercises 1 and 2 do not need to show up in the submission; it is enough that you do them.

See more detailed instructions on the submission repositories [here](/en/tehtavat1#submission-repositories-for-the-exercises).

{% include en/checkbox_reset.md %}

### 1. Git: stash [version control]

_Exercises 1 and 2 do not need to show up in the submission; it is enough that you do them_

<input type="checkbox"> Read <https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning> up to the section _Creative stashing_, or find the corresponding information elsewhere.

Let us assume that you are in a repository that has at least two branches: main and some other one (let us call it **experimental** here).

<input type="checkbox"> While in the main branch, make changes to the files in the branch, some of which you add to the staging area and some of which you do not add yet. 

<input type="checkbox"> Make sure that the output of the command _git status_ looks roughly like this

```
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   src/index.py

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	README.md
```

Your boss orders you to immediately make a couple of changes to the branch **experimental**. However, you do not want to commit the changes in main yet. If you switch to the branch **experimental** without committing, you get a terrible mess, since the changes stay as changes in the other branch too. **git stash** saves you from this situation: 

<input type="checkbox"> Stash the changes in main

  Try the command <code>git status</code> before and after the stash command

<input type="checkbox"> Switch to the branch **experimental**, make some change there and commit it

<input type="checkbox"> Return to main

<input type="checkbox"> Restore the stashed changes with the command <code>git stash apply</code>

<input type="checkbox"> Make sure that the changes came back

As you notice, the change that was already added to the staging area does not return to the staging area, but you have to add it again. If the previous command had been given in the form <code>git stash apply --index</code>, the situation would have been restored completely.

### 2. Git: "moving" a branch [version control]

_Exercises 1 and 2 do not need to show up in the submission; it is enough that you do them_

<input type="checkbox"> Create a branch called **haara** in your repo

<input type="checkbox">  Make commits to main and haara so that you get the following kind of situation:

![]({{ "/images/lh7-haara.svg" | relative_url }})

So both main and haara have moved on by a few commits after the branching. Note: with the command <code>gitk --all</code> you can see all branches, try it!

Suddenly you notice that the things you did in main are not very good after all and haara has much better stuff, so you would like haara to become the new main. This works when you go to main and give the command <code>git reset --hard haara</code>

<input type="checkbox"> Make sure that the command works correctly
  
  The contents of the old main branch do not disappear either, in case you for some reason want to go back to them. Going back to an old commit works if you know the commit's id. If not, there are [a few ways](http://stackoverflow.com/questions/4786972/list-of-all-git-commits) to find it out.

### 3. and 4. (a two-checkmark exercise) RPS single and two-player game

In the directory _viikko7/kivi-paperi-sakset_ of the [course repository]({{site.python_exercise_repo_url}}) there is a computer version of the familiar game rock-paper-scissors (kivi-paperi-sakset).

<input type="checkbox"> Copy the project to your submission repository, inside the directory viikko7.

- The program has three game modes: human vs. human, human vs. simple AI and human vs. complex AI
- The code contains plenty of copy-paste, and in general the original programmer had not yet mastered the principles of object-oriented design

<input type="checkbox"> Remove all repetition from the code and make it structurally sound in the spirit of [Part 4](/en/osa4) of the material

- The method `pelaa` must be implemented as a [template method](/en/osa4#template-method)
- Creating a suitable game object (two-player game, easy single-player game, hard single-player game) must be implemented with a static factory method or a function
- The main program must not have dependencies on the concrete classes implementing the games

If you think you did the exercise following all the style rules, mark 2 checkmarks; if your solution is not elegant in every respect, mark one checkmark.

**Tip:** one way to get started is to create a superclass `KiviPaperiSakset` that contains the code common to all three game types:

```python
class KiviPaperiSakset:
    def pelaa(self):
        tuomari = Tuomari()

        ekan_siirto = self._ensimmaisen_siirto()
        tokan_siirto = self._toisen_siirto(ekan_siirto)

        while self._onko_ok_siirto(ekan_siirto) and self._onko_ok_siirto(tokan_siirto):
            # ...

        print("Kiitos!")
        print(tuomari)

    def _ensimmaisen_siirto(self):
        return input("Ensimmäisen pelaajan siirto: ")

    # the implementation of this method varies between game types
    def _toisen_siirto(self, ensimmaisen_siirto):
        raise Exception("Tämä metodi pitää korvata aliluokassa")

    def _onko_ok_siirto(self, siirto):
        return siirto == "k" or siirto == "p" or siirto == "s"
```

The separate game classes inherit this class and specialise it according to their needs:

```python
# the class inherits the class KiviPaperiSakset
class KPSPelaajaVsPelaaja(KiviPaperiSakset):
    # implement the method according to the game type
    def _toisen_siirto(self, ensimmaisen_siirto):
        tokan_siirto = input("Toisen pelaajan siirto: ")

        return tokan_siirto
```

**NOTE** depending on how you do the exercise, you may run into the following error:

```
ImportError: cannot import name 'KiviPaperiSakset' from partially initialized module 'kivi_paperi_sakset' (most likely due to a circular import) (/Users/mluukkai/opetus/ohtu2022/ohtu-s22-palautukset/viikko7/kivi-paperi-sakset/src/kivi_paperi
```

In my case the reason was that I imported as follows 

In the file _kivi_paperi_sakset.py_:

```python
from kps_pelaaja_vs_pelaaja import KPSPelaajaVsPelaaja

# ...

class KiviPaperiSakset:
    # ...

# factory function, needs imports
def luo_peli(tyyppi):
    if tyyppi == 'a':
        return KPSPelaajaVsPelaaja()
    if tyyppi == 'b':
        return KPSTekoaly()
    if tyyppi == 'c':
        return KPSParempiTekoaly()

    return None
```

and in the file _kps_pelaaja_vs_pelaaja.py_:

```python
from kivi_paperi_sakset import KiviPaperiSakset


class KPSPelaajaVsPelaaja(KiviPaperiSakset):
    # ...
```

The two files ended up importing each other, i.e. a <i>circular import</i> was created, which Python cannot handle. I solved the problem by defining the factory function _luo_peli_ in its own file.

### 5. Web user interface with an agent [AI]

{% include ai_valitsin.html %}

{% include en/opencode_hyvaksynta.md %}

Let us make a web user interface for the rock-paper-scissors game of the previous exercise with the help of an agent.

<input type="checkbox"> In your submission repository, make a copy of the project directory called _kivi-paperi-sakset-original_, so that the state after the previous exercise is preserved, and commit

<input type="checkbox"> <span class="vain-copilot">Open the directory _viikko7/kivi-paperi-sakset_ in VS Code as its own workspace</span><span class="vain-opencode">Start OpenCode in the directory _viikko7/kivi-paperi-sakset_</span> and create an [instructions file](/en/genai/#managing-context) for the project<span class="vain-opencode">, `AGENTS.md`, e.g. with the command `/init`</span>. Write at least the following in the instructions file:

- this is a uv project
- the existing code must be reused as much as possible, and the game logic must not be reimplemented
- if you are using a Mac, the application must not use port 5000, which is reserved on Macs

Let us build the application in a few phases. **Commit after each phase**, so that you can go back to the previous working state if needed.

<input type="checkbox"> Implement a web user interface for the application with the help of the agent. You can either plan the implementation first <span class="vain-copilot">in _Plan_ mode</span><span class="vain-opencode">with the Plan agent</span> like in [week 6](/en/tehtavat6/#7-plan-first-then-implement-ai) or give the task directly <span class="vain-copilot">in _Agent_ mode (if _Plan_ is missing from the menu, see [this](/en/genai/#if-the-menu-only-has-agent))</span><span class="vain-opencode">to the Build agent</span>

<input type="checkbox"> Ask the agent to write tests for the application with Robot Framework. Make sure that you can also run the tests yourself.

<input type="checkbox"> Ask the agent to change the game so that it ends when either side has reached five wins

<input type="checkbox"> Make one more change of your choice to the game with the help of the agent

<input type="checkbox"> Change the code **without the help of the agent** so that the game ends only when one player has at least three wins **and** a lead of two wins. 

<input type="checkbox"> Ask the agent to fix the tests and extend them to take the new ending logic into account

<input type="checkbox"> Go through the code and the tests made by the agent. If there is something in the code that is unfamiliar to you, ask the agent to explain what it is about

Let us also review the code with the help of a reusable [prompt file](/en/genai/#prompt-files-and-custom-agents) <span class="vain-opencode">(in OpenCode a [command](https://opencode.ai/docs/commands/))</span>.

<input type="checkbox"> Before continuing, read the introduction of the week 7 section [Extending and customising the agent](/en/genai/#extending-and-customising-the-agent-week-7) of the material [AI in software engineering](/en/genai/) and the chapter [Prompt files and custom agents](/en/genai/#prompt-files-and-custom-agents).

<input type="checkbox"> Create the file <span class="vain-copilot">_.github/prompts/katselmointi.prompt.md_</span><span class="vain-opencode">_.opencode/commands/katselmointi.md_</span> in the project, which instructs the agent to review the project's code and report its findings. The review must look at at least the following:

- the design principles of [Part 4](/en/osa4/), especially repetition and unnecessary dependencies 
- the coverage and quality of the tests
- security, e.g. whether the application is started with the setting `debug=True`, whether the code has hard-coded secrets and whether user input is validated

Agents easily take shortcuts: "review" is interpreted as reviewing only the latest changes, only some of the files are read, or the work is delegated to a subagent that is given a narrower task than the original. So also write the way of working and the format of the report into the prompt file:

- the review covers the whole project and must not be limited to git diff, i.e. the latest changes
- the agent first makes a list of all source code and test files of the project and goes through each one
- the agent does the review itself and does not delegate it to a subagent
- the agent does not change files during the review
- each aspect is handled in its own section, and if nothing worth remarking is found for some aspect, this is stated with a justification
- for each finding, the file and lines and a suggested fix are given
- at the end of the report, all files that were gone through are listed

<div class="vain-copilot" markdown="1">
Notes on using the prompt file:

- VS Code looks for prompt files in the directory _.github/prompts_ at the root of the workspace, so the file must be created in the directory _viikko7/kivi-paperi-sakset/.github/prompts_, and VS Code must have the project directory open
- prompt files only work in VS Code's _Local_ harness (see [this](/en/genai/#if-the-menu-only-has-agent)). In other harnesses, such as _Copilot_, the prompt file is not loaded, and the command does not do what the file asks

<input type="checkbox"> Select _Local_ as the harness at the bottom of the Chat view and run the review in the chat with the command `/katselmointi`
</div>

<div class="vain-opencode" markdown="1">
Add a header to the beginning of the command file that defines the command's description and runs the command with the Plan agent. This way the agent cannot change files during the review:

```markdown
---
description: Reviews the code of the whole project
agent: plan
---

Review the project's code ...
```

<input type="checkbox"> Run the review with the command `/katselmointi`
</div>

<input type="checkbox"> Check whether the agent followed the instructions of the prompt file: did it go through all the files, and is the report in the requested format (you can ask the agent about this). If not, ask the agent to improve the prompt file if needed and to do a new review.

<input type="checkbox"> Fix (yourself or with the agent) at least one finding of the review and commit

<input type="checkbox"> Write a report on your experiences into a file _agent.md_ stored in the directory _viikko7_

In the report, tell
- Did the agent arrive at a working solution, and how did you make sure of it?
- How much did you have to steer the agent along the way?
- How good were the tests made by the agent?
- Is the code made by the agent understandable, and how did the agent change the code you made in the previous exercise?
- Was it easy to make the change yourself?
- Did the agent follow the instructions of the prompt file? How did you make sure of it, and did the prompt file need to be changed?
- What did the review find, and were the findings justified?
- What new things did you learn?

### 6. MCP and skills [AI]

{% include ai_valitsin.html %}

{% include en/opencode_hyvaksynta.md %}

An agent can only work with the tools it has available. <span class="vain-copilot">VS Code's agent</span><span class="vain-opencode">OpenCode's Build agent</span> can read and edit files and run commands in the terminal, but it cannot, for example, see what the web user interface made in the previous exercise looks like in a browser. [MCP](/en/genai/#mcp-the-model-context-protocol) (Model Context Protocol) is an open standard that allows new tools to be added to an agent as _MCP servers_.

<input type="checkbox"> Before starting, read the chapter [MCP, the Model Context Protocol](/en/genai/#mcp-the-model-context-protocol) of the material.

The exercise has two parts:

1. we take into use a ready-made MCP server that lets the agent use a browser and test the web user interface made in the previous exercise
2. we save the instructions for testing the user interface as [skills](/en/genai/#skills), so that from then on the agent can test the user interface on its own

In the next exercise we will also implement our own MCP server.

**Using a ready-made server**

[Playwright](https://playwright.dev/) is a browser automation tool that can be used to programmatically open web pages, click on them and fill in forms. The [Playwright MCP](https://github.com/microsoft/playwright-mcp) server offers these operations as tools for the agent, i.e. it lets the agent use a browser like a human. Using the server requires that [Node.js](https://nodejs.org/) (version 18 or newer) is installed on your machine.

> **Installing Node.js**
>
> First check whether Node.js is already installed with the command `node --version`. If the command prints version 18 or newer, you can continue. Note that _robotframework-browser-batteries_ from the Robot Framework exercises of week 3 contains its own Node.js, which is not available from the command line, so you probably have to install Node.js separately.
>
> - **Mac:** install it with [Homebrew](https://brew.sh/) using the command `brew install node` or download the installer (version _LTS_) from <https://nodejs.org/>
> - **Windows:** download the installer (version _LTS_) from <https://nodejs.org/> or install it with the command `winget install OpenJS.NodeJS.LTS`
> - **Linux:** the Node.js version in the distributions' package managers is often old, so preferably install it with [nvm](https://github.com/nvm-sh/nvm): first install nvm following its instructions and then Node.js with the command `nvm install --lts`
>
> The installation also includes the command `npx`, which <span class="vain-copilot">VS Code</span><span class="vain-opencode">OpenCode</span> uses to start the server. Restart <span class="vain-copilot">VS Code</span><span class="vain-opencode">the terminal</span> after the installation so that it finds the commands.

<div class="vain-copilot" markdown="1">
VS Code reads the MCP server definitions (file _.vscode/mcp.json_) and skills (directory _.github/skills_) from the root of the workspace, just like prompt files. So keep working with the directory _viikko7/kivi-paperi-sakset_ open in VS Code.

<input type="checkbox"> Add the file _.vscode/mcp.json_ to the project of the previous exercise to take Playwright MCP into use:

```json
{
  "servers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest", "--browser", "chromium"]
    }
  }
}
```

The option `-y` accepts the package download automatically, and `--browser chromium` sets Playwright's own Chromium as the browser to use.

<input type="checkbox"> Start the server by clicking the _Start_ link shown above the server name `"playwright"` in the file, and check from the chat's tools menu (_Configure Tools_, the tool icon in the bar below the input field) that the server's tools are available to the agent

![]({{ "/images/pieni_nappi.png" | relative_url }}){: width="70%"}

> **If the server does not start**
>
> You can see the server's logs by selecting _More..._ next to the _Start_ link and then _Show Output_. The most common cause of problems is that VS Code does not find the command `npx`. This happens especially if Node.js has been installed with [nvm](https://github.com/nvm-sh/nvm).
>
> Background: when a command such as `npx` is given without a path, the operating system looks for it in the directories listed in the environment variable `PATH`. `PATH` is a list of directories separated by colons (semicolons on Windows), and you can see its value in the terminal with the command `echo $PATH`. Every program inherits its environment variables from the program that started it. The terminal's `PATH` is formed when the shell reads its initialisation files at startup, e.g. _~/.zshrc_ or _~/.bashrc_. For example, nvm adds the Node.js directory to `PATH` precisely in an initialisation file, so `npx` is found in the terminal. However, VS Code and the MCP servers it starts do not necessarily get the same `PATH`, in which case `npx` is not found.
>
> The problem is fixed by writing the full path of `npx` into the configuration. Find out the path in the terminal with the command `which npx` (on Windows `where npx`). Since `npx` also needs the command `node` and other commands, also add an `env` section that defines `PATH`. Copy its value from the output of the command `echo $PATH` in the terminal (in Windows PowerShell `$env:PATH`). Note that the `PATH` in the `env` section replaces the whole `PATH`, so it must also include the system's own directories, such as _/usr/bin_ and _/bin_. For example, on a Mac using nvm the configuration may look like this:
>
> ```json
> {
>   "servers": {
>     "playwright": {
>       "type": "stdio",
>       "command": "/Users/kayttaja/.nvm/versions/node/v24.21.0/bin/npx",
>       "args": ["-y", "@playwright/mcp@latest", "--browser", "chromium"],
>       "env": {
>         "PATH": "/Users/kayttaja/.nvm/versions/node/v24.21.0/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
>       }
>     }
>   }
> }
> ```
>
> The `PATH` in the example contains nvm's Node.js directory, Homebrew's directories (_/usr/local/bin_ and _/opt/homebrew/bin_) and the macOS system directories. Replace the paths with your own. If the server starts but the browser does not open, install Playwright's Chromium with the command `npx playwright install chromium`.
</div>

<div class="vain-opencode" markdown="1">
OpenCode reads the MCP server definitions from the file _opencode.json_ at the root of the project and skills from the directory _.opencode/skills_. So keep working with OpenCode started in the directory _viikko7/kivi-paperi-sakset_.

<input type="checkbox"> Add the file _opencode.json_ to the root of the project of the previous exercise to take Playwright MCP into use. If the file already exists, e.g. because of [command approval](/en/opencode/#approving-commands), add the `mcp` section inside it:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp@latest", "--browser", "chromium"],
      "enabled": true
    }
  }
}
```

The option `-y` accepts the package download automatically, and `--browser chromium` sets Playwright's own Chromium as the browser to use.

<input type="checkbox"> Restart OpenCode, since it starts the servers when it starts. Make sure in the terminal with the command `opencode mcp list` that the server is running

> **If the server does not start**
>
> The most common cause of problems is that OpenCode does not find the command `npx`. This happens especially if Node.js has been installed with [nvm](https://github.com/nvm-sh/nvm).
>
> Background: when a command such as `npx` is given without a path, the operating system looks for it in the directories listed in the environment variable `PATH`. `PATH` is a list of directories separated by colons (semicolons on Windows), and you can see its value in the terminal with the command `echo $PATH`. Every program inherits its environment variables from the program that started it. The terminal's `PATH` is formed when the shell reads its initialisation files at startup, e.g. _~/.zshrc_ or _~/.bashrc_. For example, nvm adds the Node.js directory to `PATH` precisely in an initialisation file. If OpenCode is started from somewhere other than such a terminal, it does not necessarily get the same `PATH`, in which case `npx` is not found.
>
> The problem is fixed by writing the full path of `npx` in the `command` section. Find out the path in the terminal with the command `which npx` (on Windows `where npx`). Since `npx` also needs the command `node` and other commands, also add an `environment` section that defines `PATH`. Copy its value from the output of the command `echo $PATH` in the terminal (in Windows PowerShell `$env:PATH`). Note that the `PATH` in the `environment` section replaces the whole `PATH`, so it must also include the system's own directories, such as _/usr/bin_ and _/bin_. For example, on a Mac using nvm the definition may look like this:
>
> ```json
> "playwright": {
>   "type": "local",
>   "command": ["/Users/kayttaja/.nvm/versions/node/v24.21.0/bin/npx", "-y", "@playwright/mcp@latest", "--browser", "chromium"],
>   "environment": {
>     "PATH": "/Users/kayttaja/.nvm/versions/node/v24.21.0/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
>   },
>   "enabled": true
> }
> ```
>
> Replace the paths with your own. If the server starts but the browser does not open, install Playwright's Chromium with the command `npx playwright install chromium`.
</div>

<input type="checkbox"> Start the rock-paper-scissors application and ask the agent to play one game in each game mode with the browser and to report whether the user interface works as expected

Follow what the agent does in the browser. Did the agent find problems in the user interface?

**Skills for testing the user interface**

Above, the agent had to be told separately that the user interface is tested with a browser and what should be checked. If the testing is to be done after every user interface change, repeating the instructions every time is laborious. The instructions could be written in the instructions file, but then they would be in the agent's context in every request, even when they are not needed.

[Skills](/en/genai/#skills) solve this: at first the agent only sees the skill's description and loads the full instructions into its context only when the task at hand matches the description.

<input type="checkbox"> Before continuing, read the chapter [Skills](/en/genai/#skills) of the material. Let us save the instructions for testing the user interface as a skill.

<input type="checkbox"> Create the file <span class="vain-copilot">_.github/skills/ui-testaus/SKILL.md_</span><span class="vain-opencode">_.opencode/skills/ui-testaus/SKILL.md_</span> in the project, which instructs the agent to test the application's user interface with a browser

The file begins with a YAML header that defines the skill's name (`name`) and description (`description`). The name must be the same as the name of the skill's directory, here _ui-testaus_. The header is followed by the instructions themselves as ordinary Markdown:

```markdown
---
name: ui-testaus
description: 'Tests the web user interface of the application with a browser. Use when the user interface has been changed or when asked to test the user interface.'
---
1. Start the application with the command ...
2. ...
```

The description is the most important part of a skill, since at first the agent sees only it and decides based on it when the skill is used. So the description should tell both what the skill does and in which situations it should be used.

Write in the instructions at least

- how the application is started and on which port it runs
- that the testing is done with a browser using Playwright MCP
- which game modes and situations are tested, e.g. the game ending with a lead of two wins and invalid input
- how the agent should report the results, e.g. a list of the tested situations and their outcomes

<div class="vain-copilot" markdown="1">
<input type="checkbox"> Make sure that VS Code finds the skill. Type the command `/skills` in the chat; it lists the skills available to the agent:

![]({{ "/images/skills1.png" | relative_url }})

The project's own skills are shown under the heading _project_. Under the heading _plugin_ are the skills that come with VS Code's extensions, so your list may look different from the one in the picture. If the skill is not found, check the location and name of the file and that `name` in the header matches the name of the directory.
</div>

<div class="vain-opencode" markdown="1">
<input type="checkbox"> Make sure that OpenCode finds the skill. OpenCode has no `/skills` command, so ask the agent which skills it has available. If the skill is not found, check the location and name of the file and that `name` in the header matches the name of the directory.
</div>

<input type="checkbox"> Start a new <span class="vain-copilot">chat conversation</span><span class="vain-opencode">conversation with the command `/new`</span> and ask the agent e.g. to check whether the application's user interface works, without mentioning the skill. Check from <span class="vain-copilot">the steps in the chat</span><span class="vain-opencode">the conversation</span> whether the agent loaded the skill<span class="vain-opencode"> (loading a skill shows up as a call of the `skill` tool)</span>. If it did not, improve the description and try again

<div class="vain-copilot" markdown="1">
<input type="checkbox"> You can also start a skill yourself by typing `/` and the name of the skill in the chat. Try the command `/ui-testaus`
</div>

<div class="vain-opencode" markdown="1">
<input type="checkbox"> You can also start a skill yourself by typing `/` and the name of the skill. In OpenCode this requires that the following is added to the skill's header:

```yaml
metadata:
  opencode/slash: "true"
```

Add the definition and try the command `/ui-testaus`
</div>

<input type="checkbox"> Make some small change to the user interface and ask the agent to make sure that the application still works. Does the agent use the skill?

<input type="checkbox"> Commit the changes

<input type="checkbox"> Write a report on your experiences into a file _mcp.md_ stored in the directory _viikko7_

In the report, tell
- How did using the Playwright MCP server go, and did the agent find problems with the browser?
- Did the agent take the skill into use without a separate request? How did the wording of the description affect this?
- When would you use a skill, when a prompt file and when an instructions file?

### 7. Your own MCP server [AI]

{% include ai_valitsin.html %}

{% include en/opencode_hyvaksynta.md %}

<input type="checkbox"> Before starting, read the chapter [Your own MCP server](/en/genai/#your-own-mcp-server) of the material.

In addition to ready-made servers, you can also implement an MCP server yourself. This way you can give the agent access to e.g. the functionality of your own application or a company's internal data. Let us implement our own MCP server that lets the agent make queries on NHL statistics using the code of week 6.

The server is an ordinary Python program whose functions are marked with the decorator `@mcp.tool()`. From the type definitions and docstrings of the functions, the MCP library forms descriptions of the tools, based on which the agent decides when and how the tools are called. <span class="vain-copilot">VS Code</span><span class="vain-opencode">OpenCode</span> starts the server in the background, and the agent communicates with it through standard input and output.

<input type="checkbox"> Copy the week 6 project _query-language_ to your submission repository inside the directory _viikko7_<span class="vain-copilot"> and open it in VS Code as its own workspace</span>

<input type="checkbox"> Add the MCP library to the project with the command `uv add "mcp[cli]"`

<input type="checkbox"> Create the file _src/mcp_server.py_; you can use the following as its basis:

```python
from mcp.server import MCPServer
from statistics import Statistics
from player_reader import PlayerReader

URL = "https://studies.cs.helsinki.fi/nhlstats/2024-25/players.txt"
stats = Statistics(PlayerReader(URL))

mcp = MCPServer("NHL-tilastot")


@mcp.tool()
def top_scorers(how_many: int) -> list[str]:
    """Return the players with the most points in the NHL 2024-25 season."""
    return [str(player) for player in stats.top_scorers(how_many)]


if __name__ == "__main__":
    mcp.run()
```

**Note:** the MCP library is evolving quickly. If the import above does not work, you have an older version of the library, in which the server class is `FastMCP` and it is imported with `from mcp.server.fastmcp import FastMCP`.

[MCP Inspector](https://github.com/modelcontextprotocol/inspector) is a browser-based tool for testing an MCP server without an agent. With the Inspector you can call the server's tools by hand and see what the server offers to the agent: the names, descriptions and parameters of the tools.

<input type="checkbox"> Start the Inspector in the project directory with the command

```
npx @modelcontextprotocol/inspector uv run python src/mcp_server.py
```

The command starts the Inspector and opens it in the browser at an address of the form `http://127.0.0.1:6274/?MCP_INSPECTOR_API_TOKEN=...`. The token at the end of the address protects the Inspector so that other programs running on the machine cannot use it. If the browser does not open by itself, copy the address with the token from the terminal.

<input type="checkbox"> Connect the Inspector to the server

The Inspector opens on the _Servers_ tab, which shows the server `uv` defined based on the start command. Connect to the server with the switch in the top right corner of the card, after which the card says _Connected_:

![]({{ "/images/mcp1.png" | relative_url }})

On the right edge, on the _Protocol_ tab, you can see the [JSON-RPC](https://www.jsonrpc.org/specification) messages between the Inspector and the server. For example, the message `tools/list` is a request with which the client asks the server for the tools it offers. <span class="vain-copilot">VS Code</span><span class="vain-opencode">OpenCode</span> and the server exchange the same messages when the agent uses the server.

If the status of the messages stays _PENDING_ and no tools appear on the _Tools_ tab, send the message `tools/list` again from the ↻ icon of its card (the lower arrow in the picture).

<input type="checkbox"> Test the tool `top_scorers`

Go to the _Tools_ tab and select `top_scorers` from the list. On the right, the tool's description, i.e. the function's docstring, opens along with a field for the parameter _How Many_. Give the parameter a value and press _Execute Tool_, and the result returned by the tool is shown below:

![]({{ "/images/mcp2.png" | relative_url }})

The description and the parameters are exactly the information based on which the agent decides when and how the tool is used.

If the server does not start or connecting fails, you can see the error message on the _Console_ tab on the right edge. Typical causes are an error in the Python code or running the command in the wrong directory.

Remember that the server must not print anything to standard output, e.g. with an ordinary `print` command, since the output messes up the communication between the server and the Inspector. Printing to the standard error stream (`print(..., file=sys.stderr)`) is allowed, however.

<input type="checkbox"> Add at least the following tools to the server:

- `team_players`, which returns the players of the given team
- `query_players`, which returns the result of a query given as a string, using the `parse` function of week 6 exercise 7. If you did not do exercise 7, you can implement the tool e.g. so that it is given a team and the minimum numbers of goals and assists, and the query is formed with the `QueryBuilder` class

You can implement the tools yourself or with the agent, but make sure that you understand the server's code. Write descriptive docstrings for the tools, since the agent decides based on them when and how the tools are used. Also write the syntax of the query language in the tool descriptions.

<div class="vain-copilot" markdown="1">
<input type="checkbox"> Register the server in VS Code by adding the file _.vscode/mcp.json_ to the project:

```json
{
  "servers": {
    "nhl": {
      "type": "stdio",
      "command": "uv",
      "args": ["run", "--directory", "${workspaceFolder}", "python", "src/mcp_server.py"]
    }
  }
}
```

If the server does not start because VS Code does not find the command `uv`, do as with the Playwright server in the [previous exercise](#6-mcp-and-skills-ai), i.e. write the full path of `uv` (`which uv`) into the configuration.
</div>

<div class="vain-opencode" markdown="1">
<input type="checkbox"> Register the server in OpenCode by adding it to the project's file _opencode.json_ (create the file if it does not exist yet):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "nhl": {
      "type": "local",
      "command": ["uv", "run", "python", "src/mcp_server.py"],
      "enabled": true
    }
  }
}
```

If the server does not start because OpenCode does not find the command `uv`, do as with the Playwright server in the [previous exercise](#6-mcp-and-skills-ai), i.e. write the full path of `uv` (`which uv`) into the configuration.
</div>

<input type="checkbox"> Start the server<span class="vain-opencode"> by starting OpenCode in the project directory</span> and ask the agent questions in natural language for which it needs your server's tools, e.g. _"Which NYR players have at least 10 goals but fewer than 20 goals?"_ or _"Which Edmonton player scored the most points?"_

<input type="checkbox"> Follow which tools the agent calls and with which parameters

<div class="vain-copilot" markdown="1">
The tool calls made by the agent are shown in the chat among the steps of the agent's response, e.g. _query_players – nhl (MCP Server)_. By opening a tool call you can see what the server returned (_Output_). However, the parameters of the call are not necessarily shown under _Input_, which may contain only the name of the server and the tool.

You can make the parameters visible by adding logging to the server. 
</div>

<div class="vain-opencode" markdown="1">
The tool calls made by the agent are shown in the conversation along with their parameters. Let us still add logging to the server, which shows the calls the server receives regardless of the agent.
</div>

Since the server must not print to standard output, let us write the log to a file:

```python
from pathlib import Path

LOG_FILE = Path(__file__).parent.parent / "mcp.log"

def log(message: str):
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        print(message, file=f)

@mcp.tool()
def team_players(team: str) -> list[str]:
    """..."""
    log(f"team_players(team={team!r})")
    # ...
```

The log is written to the file _mcp.log_ in the project's root directory. Also add the file to _.gitignore_.

The most convenient way to follow the log is in a separate terminal with the command

```
tail -f mcp.log
```

which shows the lines written to the file as they appear. In Windows PowerShell the corresponding command is `Get-Content mcp.log -Wait`.

<input type="checkbox"> Try how changing the docstrings affects the agent's behaviour. The server has to be restarted after changes, <span class="vain-copilot">e.g. with the _Restart_ link shown above the server name in the file _.vscode/mcp.json_</span><span class="vain-opencode">i.e. restart OpenCode</span>

<input type="checkbox"> Write a report on your experiences into a file _oma_mcp.md_ stored in the directory _viikko7_

In the report, tell
- Was the agent able to use the tools of your own server correctly?
- How did the docstrings affect the agent's behaviour?
- What risks would be involved in a server that could also change data, or that fetched data from untrusted sources?

### 8. AI and me [AI]

<input type="checkbox"> Before doing the exercise, read the last chapter [Conclusion](/en/genai/#finally-week-7) of the material [AI in software engineering](/en/genai/), which brings together risks related to using AI and research on the effects of AI on software engineering.

<input type="checkbox"> Write a reflection of about one page (about 500 words) on using AI in software development into a file _reflektio.md_ stored in the directory _viikko7_

In your text, reflect on at least the following:
- How did your use of AI change during the course?
- Where did AI help the most, and where was it a hindrance?
- Which of the software engineering practices learned on the course do you think are the most important when using agents?
- What kind of ground rules for using AI would you agree on with your mini project team, or at your future workplace?
- How did the use of AI affect how much you discussed the code and the solutions with your team?

### 9. Course feedback

Give course feedback at <{{site.norppa}}>. You can also give the feedback after the exam. The checkmark for this exercise is a promise that you will give feedback at some point. **Feedback can be given between 9 and 26 December 2026**. 

**NOTE** if you go to the feedback address before the start date of the final feedback, you will see the course's "continuous feedback" form. This exercise, however, refers to the normal final feedback that opens on 9 December.

{% include en/submission_instructions.md %}
