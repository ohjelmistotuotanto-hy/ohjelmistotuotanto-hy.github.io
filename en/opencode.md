---
layout: page
title: OpenCode
inheader: no
permalink: /en/opencode/
source: opencode.md
source_commit: 536e749
---

You can do the course's [AI] exercises either with GitHub Copilot in VS Code or with the open source coding agent [OpenCode](https://opencode.ai). The grounds for the choice are explained in [exercise 9](/en/tehtavat2/#9-first-contact-with-a-coding-agent-ai) of week 2. This page explains how to install OpenCode and how to use it. The exercise descriptions contain instructions for both tools: when you choose OpenCode with the switch at the beginning of an exercise, the description is shown for OpenCode.

OpenCode is just an agent and has no language model of its own. Using it therefore requires an API key for some language model service, e.g. Anthropic, OpenAI, Google or OpenRouter. University students can, however, use the language models of [CurreChat](<{{site.curre}}>) free of charge, and this is the recommended way on the course, see [Using CurreChat](#using-currechat). The agent concepts, such as context, instruction file, plan mode and MCP, are the same as in the material [AI in software engineering](/en/genai/), so the course exercises work just as well with OpenCode.

**Note:** the exercises were originally made for Copilot, and the OpenCode versions of the exercises for week 7 have not yet been tested as thoroughly. If there are errors or unclear parts in the instructions, please report them.

## Why OpenCode?

- OpenCode is open source, and it works in the terminal independently of the editor. The way it is used resembles Claude Code.
- It supports dozens of language model services, so you can switch models freely. Locally run models can also be used.
- Many features are compatible with other tools, for example the instruction file `AGENTS.md` and skills in the [Agent Skills](https://agentskills.io) format.

OpenCode evolves quickly. If some instruction below no longer holds, check the up-to-date information in the [documentation](https://opencode.ai/docs).

## Installation

The easiest way to install is npm, if you have Node.js installed:

```bash
npm install -g opencode-ai
```

On macOS and Linux you can also install it with Homebrew:

```bash
brew install anomalyco/tap/opencode
```

On Windows, OpenCode works best inside [WSL](https://learn.microsoft.com/windows/wsl/). Alternatively, you can install it with npm, Scoop (`scoop install opencode`) or Chocolatey (`choco install opencode`).

Check the installation with the command `opencode --version`.

## Connecting a language model service

The recommended way is to use CurreChat. If you already have an API key for some other service, you can use that too, see [Other language model services](#other-language-model-services).

### Using CurreChat

As a university student you can use [CurreChat](<{{site.curre}}>)'s language models in OpenCode, in which case you do not need your own paid API key. The API key and a ready-made OpenCode configuration are obtained from CurreChat:

1. Open _API-avaimet_ (API keys) from the hamburger menu in the top right corner of CurreChat
2. Give the key a name, e.g. _ohtu26_, and press _Luo uusi avain_ (Create new key)
3. A box _Uusi avain luotu_ (New key created) appears. Press _Lataa opencode.json_ (Download opencode.json) in it, and you get a configuration with your key already filled in. The key is shown only once, so if you need it later, copy it to a safe place with the _Kopioi_ (Copy) button. You can also get the configuration later from _Käytä Opencoden kanssa_ (Use with OpenCode), but then you have to replace `YOUR_API_KEY` in the file with the key yourself
4. Move the downloaded file to `~/.config/opencode/opencode.json` (or to the project root as `opencode.json`). If the directory _~/.config/opencode_ already has a file `opencode.jsonc`, copy the contents of the downloaded file into it instead of creating a second file next to it

![]({{ "/images/avain2.png" | relative_url }}){:width="600px" }

Do not save the key in a public repository. If you put the configuration in the project root, add `opencode.json` to the `.gitignore` file.

The following models are available in the configuration:

| Model | Token limit |
|---|---|
| `gpt-6-luna` | 1,200,000 tokens per week |
| `gpt-5-mini` | 1,200,000 tokens per week |
| `gpt-5.5` | 200,000 tokens per week |
| `gpt-6.1-sol` | 200,000 tokens per week |
| `Mistral-Large-3-1` | 200,000 tokens per week |
| `gemma-4-26B-A4B` | no limit |

**Note:** CurreChat's tokens are not unlimited. So use primarily the model `gpt-6-luna`, which together with `gpt-5-mini` has the largest weekly limit, and switch to a heavier model only if it cannot handle the task. You switch models in OpenCode with the command `/models`, which opens a list of the available models. If you run out of tokens, you can get more by sending a message to matti.luukkainen@helsinki.fi or to the user _mluukkai_ on Discord.

[Gemma 4](https://huggingface.co/google/gemma-4-26B-A4B) is free. It is an open model run on the university's own hardware in the OpenShift cluster of the IT Center (Tietotekniikkakeskus), so its performance is limited.

### Other language model services

If you want to use some other language model service, start OpenCode in the terminal with the command `opencode` and give the following command in its user interface

```
/connect
```

Choose from the list the service whose API key you have, and paste the key when asked. Then choose the model to use with the command

```
/models
```

You can also connect directly from the command line with the command `opencode auth login`, and you can see the available models with the command `opencode models`. The list of supported services and service-specific instructions can be found in the [documentation](https://opencode.ai/docs/providers/).

A handy option is [OpenRouter](https://openrouter.ai), which with a single API key gives you access to practically any language model, from Anthropic's, OpenAI's and Google's models to open models. This makes it easy to try out and compare different models without having to create an account for each service.

Usage with an API key is usually billed by the tokens used, and agentic coding consumes a lot of them. Set a monthly usage limit in the service's dashboard so that the bill does not come as a surprise. The choice of model has a significant effect on the price, and a mid-range model is usually quite enough for the course exercises.

## Usage

Unlike Copilot, which is integrated into the VS Code editor, OpenCode is an application that runs in the terminal. The conversation with the agent happens in the terminal, and the changes the agent makes show up in the files just as when using Copilot. So you can read and edit the code in any editor, including VS Code, and you can use OpenCode e.g. in VS Code's own terminal or in a separate terminal window.

In your submission repository, go to the project directory, e.g. the project of the week 2 [AI] exercise, and start OpenCode:

```bash
cd viikko2/nhl-reader
opencode
```

As with Copilot, open OpenCode only in the directory of the project you are working on. The course submission repository contains many projects, and the agent easily gets confused if it sees all of them.

### Instruction file

The command `/init` analyses the project and creates the instruction file `AGENTS.md` in its root. OpenCode reads the instruction file automatically at the beginning of every conversation. The same file is also used by e.g. Copilot and Codex. Read the generated file and fix it if needed, see [Managing context](/en/genai/#managing-context).

### Build and Plan agents

OpenCode has two built-in agents, and you switch between them with the **Tab** key. The selected agent is shown in the bottom right corner of the screen.

- **Build** makes changes to the code and runs commands. It corresponds to Copilot's _Agent_ mode.
- **Plan** does not change the code; instead it explores it and draws up a plan. It corresponds to Copilot's _Plan_ mode, and it can also be used for questions like Copilot's _Ask_ mode. More on the importance of planning in the section [Plan first](/en/genai/#plan-mode).

### Referring to files

By typing `@` and the beginning of a file name you can attach the file to your request, e.g. `Selitä miten @src/player_reader.py toimii` ("Explain how @src/player_reader.py works"). This corresponds to Copilot's `#file` reference.

### Undoing changes

The command `/undo` undoes the agent's latest changes, and the command `/redo` restores them. The real safety net, however, is still version control: commit after every accepted step and read `git diff` before committing, see [Git as a safety net](/en/genai/#git-as-a-safety-net).

### Approving commands

**Note:** Unlike Copilot in VS Code, OpenCode by default runs commands and edits files without asking for permission. If you want to approve commands and edits yourself, add a file `opencode.json` to the project root:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": "ask",
    "edit": "ask"
  }
}
```

You do not need to create the file separately for each project. OpenCode looks for configuration not only in the directory where it was started but also in all of its parent directories, and merges the settings of the files it finds. On the course, the easiest option is to put the file in the **root of the submission repository**, so that the setting applies to the projects of all weeks:

```
palautusrepositorio
├── opencode.json
├── viikko1
├── viikko2
│   └── nhl-reader
└── ...
```

If some project also has its own `opencode.json`, such as the MCP server definitions of week 7, its settings are merged with the settings of the file in the root. In conflicts concerning the same setting, the file closer to the start directory wins.

This means you can override the approval in a single project. If, for example, you want the agent of some experimental project to work without asking, add an `opencode.json` to the project directory with the permissions set to `allow`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": "allow",
    "edit": "allow"
  }
}
```

You can also fine-tune the permissions command by command. For example, the following setting allows the commands `git status`, `git diff` and `pytest` without asking, but the agent still asks for permission for other commands:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": {
      "*": "ask",
      "git status*": "allow",
      "git diff*": "allow",
      "pytest*": "allow"
    }
  }
}
```

The last matching rule applies, so the general `*` rule is written first. Avoid broad rules such as `git *`, since it would also allow e.g. the commands `git push` and `git reset --hard`.

You can also put the setting in the file `~/.config/opencode/opencode.json`, which applies to all projects on your machine.

## Copilot features in OpenCode

| Copilot (VS Code) | OpenCode |
|---|---|
| Ask, Agent and Plan modes | Plan and Build agents (Tab switches) |
| `.github/copilot-instructions.md` or `AGENTS.md` | `AGENTS.md` (created with the command `/init`) |
| `#file` reference | `@` reference |
| prompt files `.github/prompts/*.prompt.md` | commands `.opencode/commands/*.md`, see the [documentation](https://opencode.ai/docs/commands/) |
| skills `.github/skills/` | skills `.opencode/skills/`, `.claude/skills/` or `.agents/skills/` |
| MCP servers `.vscode/mcp.json` | MCP servers under the `mcp` key of the `opencode.json` file |

For example, the Playwright MCP server of week 7 is defined in OpenCode as follows:

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
