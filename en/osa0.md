---
layout: page
title: Part 0
title_long: 'Introduction'
inheader: yes
permalink: /en/osa0/
source: osa0.md
source_commit: 85a3af3
---

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons license" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
  />
</a>

{% include en/miniproj_ilmo.md %}

This course is an introduction to _software engineering_ for students who already know how to program. Software engineering is a systematic way of building somewhat larger software in a team of several people for an external customer. The course places particular emphasis on so-called agile software development methods.

## Prerequisites and content

The prerequisites for the course are the following courses (or equivalent knowledge)
- [Introduction to Programming and Advanced Course in Programming](https://ohjelmointi-26.mooc.fi/)
- [Introduction to Databases](https://tikape.mooc.fi/syksy-2026/)
- [Databases and Web Programming](https://hy-tikawe.github.io/materiaali/) (previously called Tietokantasovellus)

The courses [Ohjelmistotekniikka](https://ohjelmistotekniikka-hy.github.io/) (Software Development Methods) and [Tietokone työvälineenä](https://tkt-lapio.github.io/) (Computer as a Tool) are also useful.

After completing the course, students should have sufficient knowledge and technical skills to work as a junior developer in a small software team, for example on the [Software Engineering Project](https://github.com/HY-TKTL/TKT20007-Ohjelmistotuotantoprojekti) course of the Department of Computer Science.

In more detail, after completing the course the student

- knows the phases of the software process (requirements engineering, design, implementation and quality assurance)
- knows how requirements are managed in an agile software development process
- understands the responsibilities and nature of design, implementation and testing in agile software development
- recognises the importance of teamwork and knows ways to support it in an agile team
- understands the fundamentals of software quality assurance
- is able to make software development controlled and repeatable with version control, automated testing and continuous integration
- is able to use AI in a controlled way in software development

## Completing the course and grading

The course consists of three components: lectures, weekly exercises and the mini project.

### Lectures

The course has 10 lectures and five guest lectures. The lectures mainly cover the concepts and theory of software engineering, the same topics this material focuses on.

The lectures are held in hall B123, and the recordings are available after the lectures, provided that the Unitube recording works... The 2025 recordings are also available; their content is broadly the same.

### Exercises

The course has weekly exercises. **There are two types of exercises**.

- **Weekly multiple choice quizzes** that review the theory covered in the lectures and in this material. The deadline for the quizzes is _on Sunday at 23.59_.

- The other part of the exercises deals with **programming, version control, automated testing and using AI in software development**. Their deadline is _on Monday at 23.59_ (the deadline of week 7 is different, see the [exercise page](/en/tehtavat/)). The programming language of the exercises is Python.

The expected workload of the exercises is about 8 hours in weeks 1–2, about 6 hours in week 3, about 4 hours in weeks 4–6 and about 6 hours in week 7. Answering the multiple choice quizzes is relatively quick, but answering them sensibly requires attending the lectures and/or reading the material of the week.

### AI on the course

The weekly exercises include exercises tagged [AI], in which you practise the controlled use of coding agents in software development. The related theory is in the separate material [AI in software engineering](/en/genai/). You can do these exercises either with GitHub Copilot or with [OpenCode](/en/opencode/) using the CurreChat language models. To review the course material, you can use the [OhtuBotit](/en/ohtubotit/), e.g. Kertaaja, which asks you questions about the material. Note, however, that the [lecture diaries](/en/osa0/#replacing-the-multiple-choice-quizzes-with-a-lecture-diary) that replace the multiple choice quizzes must be written by yourself without AI.

### Mini project

During weeks 3–7 of the course there is a _mini project_, a small group assignment whose main purpose is to practise project management, teamwork and some quality assurance techniques.

Each mini project group consists of 4–6 students. The groups also have a customer whom the group meets weekly. For the first week, you should reserve 90 minutes for the customer meeting, and 30 minutes in later weeks.

At the end of the course there is a joint two-hour demo session for the mini projects.

You should reserve a total of about 6 hours per week for working on the mini project.

_Passing the course requires_ a passed or credit-transferred mini project.

The mini projects meet their customer on campus.

More about the mini project [here](/en/miniprojekti).

#### Credit transfer for the mini project

You do not need to take part in the mini project if you meet the criteria for credit transfer of the _Software Engineering Project (10 cr)_ course based on work experience.

The criteria can be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/koulutusohjelmasi-harjoitteluohjeet) under _Laaja suoritus: Ohjelmistoprojekti_

Unlike credit transfer for the Software Engineering Project, credit transfer for the mini project only requires _three months of work experience_.

If you get the mini project credit-transferred based on work experience, let us know by email (matti.luukkainen@helsinki.fi) once you have done the exercises of the first week.

**NOTE:** credit transfer for the mini project is requested by sending an email to matti.luukkainen@helsinki.fi, so **DO NOT SEND THE EMAIL** to kumpula-student@helsinki.fi.

### Grading of the course

The course has a total of 40 points, divided between the components as follows

- exercises 10 points
  - multiple choice quizzes related to the lectures 2 points
  - weekly programming, version control and configuration exercises 8 points
- mini project 11 points
- exam 18 points
- attending guest lectures in person 1 point (0.33 points for attending one guest lecture, so you get full points by attending three times)

Grade 1 requires 20 points, and grade 5 requires 36 points.

In addition, passing requires a passed (or credit-transferred) mini project and at least half of the exam points. **Extra time** for the exam is requested from the teacher by email (matti.luukkainen@helsinki.fi).

If your mini project is credit-transferred, your points from the exam and the exercises are scaled by multiplying them by 40/29, and the grade is determined based on the scaled points.

#### Scoring of the exercises

The weekly multiple choice quizzes are thus worth _2 course points_. Full course points require 90% of the _multiple choice points (mcp)_.

The points are determined by the following table:

| multiple choice points | course points |
| ---------------------- | :-----------: |
| 4.5                    |       2       |
| 4.0                    |      1.5      |
| 3.5                    |       1       |
| 3.0                    |      0.5      |
| 2.5                    |       0       |

All multiple choice quizzes are sets of statements, each of which can be true or false. The multiple choice questions of each week are worth one _mcp_, which is calculated as follows:

- if _correctAnswers/numberOfStatements_ is less than or equal to 0.45, the result is 0 mcp.
- if _correctAnswers/numberOfStatements_ is greater than 0.45, the number of mcp grows linearly so that you get one mcp when all answers are correct.

The regular exercises are worth _8 course points_. Full course points require completing 90% of the regular exercises. Completing 10% of the exercises gives one course point, and from there the points grow linearly up to full points. For example, 50% of the exercises gives 4.5 course points.

## Replacing the multiple choice quizzes with a lecture diary

The multiple choice quizzes review the lectures of weeks 1–6 of the course (2/40 points). The quizzes have stirred up feelings, and I am not a fan of multiple choice quizzes myself. The benefits are, however, undeniable: since the quizzes were introduced, exam results have improved. This is in line with the so-called testing effect (also known as retrieval practice): actively recalling things improves learning clearly more than just rereading the material ([Roediger & Karpicke 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x)).

There is also an alternative to the multiple choice quizzes: **a weekly lecture diary!**

A lecture diary is a summary of the topics of the week's lectures, about one A4 page long and written in your own words. The format can be almost anything: prose, a bulleted list or, say, a mind map. You can write the lecture diary on a computer or by hand.

Under no circumstances, however, may the lecture diary be plagiarised (i.e. copy-pasted from the lecture material) or, for example, generated with AI. This is considered academic misconduct and will be handled according to the University of Helsinki [policies on misconduct](https://studies.helsinki.fi/ohjeet/artikkeli/mita-ovat-vilppi-ja-plagiointi).

The **deadline for each week's lecture diary is Sunday of that week at 23:59**, and it is submitted by email to matti.luukkainen@helsinki.fi. Each week's submission gives 0–1 _multiple choice points_. You get less than one point mainly if the lecture diary has not been done seriously. Multiple choice points from lecture diaries are converted to course points just like regular multiple choice points, see the [previous section](/en/osa0/#scoring-of-the-exercises).

**NOTE:** you cannot do the multiple choice quizzes for some weeks and lecture diaries for others. You may of course do both, in which case your course points are determined by whichever goes better. So **if you decide to write lecture diaries, write them starting from the first week**. 

## Version control 1 cr

As a bonus, you get a course completion for _Versionhallinta (Version Control) 1 cr_ by completing _all_ the version control exercises of this course (they are marked in the exercises) and passing the mini project (or getting it credit-transferred).

## Lectures - exercises - mini project

The course thus has three main components: the lectures, the weekly exercises and the mini project. The components are quite different in nature, which has sometimes confused students.

The lectures focus mainly on the theory and concepts of software development. Of the exercises, the multiple choice quizzes are related to each week's lectures.

The topics of the more technical exercises on programming, version control, automated testing and using AI are, on the other hand, hardly covered in the lectures at all (except for the theory of testing). The theory related to the AI exercises is in the separate material [AI in software engineering](/en/genai/), which the lectures touch on only briefly.

The idea of the mini project, in turn, is to combine the theory of the lectures with the more technical topics of the exercises and apply them in practice in a small software project.

The exam focuses mostly on theory and applying it in practice. The most technical topics of the exercises, such as version control, are not asked in the exam. More details on the exam and how to prepare for it will be given in the last lecture of the course.

As we will soon see, software engineering covers a wide range of different things, from leading people all the way to the most technical operations run on the command line. This is also reflected in the structure of the course: the course has components of different kinds, all of which are equally important, and each has its own weight in the grading. Theory is assessed based on your exam performance, and the most practical skills through "continuous assessment" based on the points from the exercises and your performance in the mini project.

## Schedule

{% include en/aikataulu.md path="/en/osa0.md" %}

## Typos in the material

When you notice typos in the course material, suggest a fix. The course material is in the repository
[https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io) in the files [osa0.md](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/blob/master/osa0.md) etc.

You start making a change suggestion by clicking the _pencil icon_ of the file. GitHub then automatically makes your own copy (fork) of the repository.

Once the text has been edited as desired, click the _Commit changes..._ button in the top right corner, write a short description of the change and select _Propose changes_.

After this, create a _pull request_ from the change suggestion by clicking _Create pull request_.

And when the course staff merges the pull request, the typo is fixed in the material.
