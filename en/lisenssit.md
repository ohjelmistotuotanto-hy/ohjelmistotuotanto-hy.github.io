---
layout: page
title: Software licenses
inheader: no
permalink: /en/lisenssit/
source: lisenssit.md
source_commit: 81a8f02
---

This part of the course has covered the design and implementation of software. Next, we look at the point in software design where licensing plays a significant role.

This section was written by [Akira Taguchi](https://github.com/lambdakilo/).

Imagine that for your ohtu mini project you build a graphing calculator. You publish your source code on GitHub, and someone contacts you. They praise your work and would like to make it the default calculator in the operating system distribution they are developing, Cubbli. However, they tell you that this is not possible until you have licensed your program under a suitable license. What do you do?

### Software license basics
A software license is a legal instrument that governs the use and redistribution of software. For software developers this usually shows up as a LICENSE file published along with the source code. The contents of this LICENSE file determine the chosen software license. An example of uv's software license: [https://github.com/astral-sh/uv/blob/main/LICENSE-MIT](https://github.com/astral-sh/uv/blob/main/LICENSE-MIT).

A software license is chosen according to the intended use. The following website is a good starting point for finding just the right software license for your purpose: [https://choosealicense.com/](https://choosealicense.com/). You can copy the license you want from the website to the clipboard and use it as the contents of your repository's LICENSE file (see the uv example).

Although the Appendix page of the Choose a License website ([https://choosealicense.com/appendix/](https://choosealicense.com/appendix/)) gives a good comparison of licenses, let's still go roughly through a few of the more commonly used licenses:

| License | Terms | Type |
|-------|--------|---------|
| MIT License | The license text must be kept in the source code, and closed versions, among other things, are allowed | Permissive |
| GNU General Public License, i.e. GPL | The source code must be published under the same license, and closed versions are not allowed | Protective
| GPL 2.0 | Same as GPL, but with emphasis that closed versions are not allowed, not even because of other legal obligations | Protective
| GPL 3.0 | Same as GPLv2, but with emphasis that not even the hardware running the software may restrict the obligations of the GPL license | Protective
| Mozilla Public License 2.0 | Same as GPL, except that if the project grows significantly large, the license can be changed, e.g. Chromium -> Chrome | Permissive |
| The Unlicense | Do whatever you want | Open |
| - (No license) | You own all rights | Proprietary |
| CC BY | The license text must be kept in the work. Can be applied to non-software, e.g. course material | Permissive |
| CC BY NC | Same as CC BY, but commercial use is forbidden (NC, Non-Commercial) | Permissive

### Practice

Let's first look at which licenses other software uses.

Which license does Robot Framework use: [https://github.com/robotframework/robotframework](https://github.com/robotframework/robotframework)?

<details>
	<summary>
		Answer
	</summary>
	Apache 2.0 License
</details>

<br>

Which license does Visual Studio Code use: [https://github.com/microsoft/vscode/](https://github.com/microsoft/vscode/)?
<br>

<details>
	<summary>
		Answer
	</summary>
		MIT License
</details>

<br>

Next, let's practise choosing a license for the ohtu mini project.

I want the source code of my mini project to be usable in any way, as long as the original author is credited. I choose

<ol type="a">
  <li>MIT License</li>
  <li>The Unlicense</li>
</ol>

<details>
	<summary>
		Answer
	</summary>
	a. MIT License
</details>

<br>

If my mini project is used in a larger piece of software, I want the larger project to be able to use a different license than the original license of the mini project, if it so wishes. I choose 

<ol type="a">
  <li>MIT License</li>
  <li>Mozilla Public License 2.0</li>
</ol>

<details>
	<summary>
		Answer
	</summary>
	b. Mozilla Public License 2.0
</details>

<br>

### Free or open

Many people often mix up free software and open source. The [Wikipedia article](https://fi.wikipedia.org/wiki/Vapaa_ohjelmisto/) (in Finnish) on free software is a good place to start clearing up the confusion. In short: sometimes licenses that are too open restrict the freedoms of others. For example, the MIT License is so open that it can be used to deny a third party the freedom to run, study, improve or share source code that was once MIT-licensed. In this juxtaposition, software freedom often refers to the strong copyleft mechanism. So semantics play a big role in this topic.

### Final words on licenses

Hopefully you now know how to license your ohtu mini project as well as your future software projects. Software licenses are, however, largely legal jargon, and sometimes you find yourself in a situation where you need a lawyer. But don't be alarmed. [As a rule, licensing mistakes are primarily resolved by talking](https://opensource.stackexchange.com/questions/5699/has-the-mit-license-been-battle-tested-in-court). If something remained unclear, send your questions to Akira Taguchi's alumni email or ask the teaching assistants for help.
