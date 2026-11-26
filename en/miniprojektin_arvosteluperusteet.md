---
layout: page
title: Mini project grading criteria
inheader: no
permalink: /en/miniprojektin_arvosteluperusteet/
source: miniprojektin_arvosteluperusteet.md
source_commit: 364039b
---

- [Grading criteria for the first sprint](/en/miniprojektin_arvosteluperusteet#grading-criteria-for-the-first-sprint)
- [Grading criteria for the second sprint](/en/miniprojektin_arvosteluperusteet#grading-criteria-for-the-second-sprint)
- [Grading criteria for the third sprint](/en/miniprojektin_arvosteluperusteet#grading-criteria-for-the-third-sprint)
- [Grading criteria for the fourth sprint](/en/miniprojektin_arvosteluperusteet/#grading-criteria-for-the-fourth-sprint)
- [Final steps](/en/miniprojektin_arvosteluperusteet#final-steps)

You can get at most 11 course points from the mini project according to the following criteria and principles:

- For each sprint, **the group** can get 2.5 course points, i.e. at most 10 points from the four sprints
  - The primary grading criteria are following the process, steady progress and the quality of the features implemented in the program
  - The process also includes the ground rules and the retrospectives. What is assessed is that they have been done properly, not what has been decided in them.
  - The number of implemented features matters fairly little in the grading, but not zero, i.e. you need to write some code too
  - More detailed sprint-specific grading criteria below
- Individual performance is worth -1p ... 1p; in exceptional cases -2p or 2p is possible
  - The points for individual performance are based on the peer review done at the end and on the "digital footprint" visible in the group's repository and backlogs
  - When assessing individual performance, the following are valued:
    - Physical and mental presence
    - An active approach
    - Reliability
    - Smooth group work
    - Steady work
    - Raising problems constructively and helping others
    - Contribution to the group's outputs (code, tests, deployment pipeline, backlogs)
      - [make sure that your commits show up correctly on GitHub](/en/miniprojektin_arvosteluperusteet#make-sure-that-your-commits-show-up-correctly-on-github)
  - **Hero coding cannot compensate for otherwise deficient group work**
  - Also take the working time of about 6 hours per sprint seriously. Going well over the working time does not bring "extra points", rather the opposite.

Unjustified non-participation in any sprint leads to failing the mini project.

### Grading criteria for the first sprint

The project must be registered in the submission app <{{site.stats_url}}>.

- **One group member** logs in to the system and goes to the _miniprojects_ tab
  - Creates the project with the form opened by the _create project_ button
  - And shares the id of the created project with the other group members
- **The other group members** log in to the system and join the group using the id with the form opened by the _join project_ button

**Every group member must be registered in the project by the customer meeting held at the end of the first sprint at the latest.**
- Group members who have not registered by the customer meeting of the first sprint do not get the group's points for the sprint

Links to the project's backlogs and other documents (and the whole world must have read access to them), and to GitHub Actions (or another CI service in use) must be put in the README of the project's GitHub repository!

Points are awarded for the following:

- (0.25p) GitHub README:
  - The README contains a link to the group's ground rules (the file `pelisaannot.md`, see [tips for group work](/en/miniprojekti/#tips-for-group-work))
    - Only the fact that the ground rules have been drawn up is assessed, not their content
  - The README contains a link to the backlogs (and _the whole world_ has read access to them)
  - The definition of done is written down explicitly
  - A link to the application running on the OKD cluster (it is enough that the boilerplate or the first story of the sprint works there)
- (0.25p) product backlog
  - The backlog is DEEP (the stories do not need to be estimated)
- (0.25p) sprint 1 backlog
  - The user stories selected for the sprint are split into technical-level tasks
  - The progress of the sprint is tracked based on the finished tasks with a burndown or burnup chart
    - The chart can be, e.g., one drawn automatically by GitHub Projects
  - Each task shows who is working on it
  - The status of each task is visible (e.g. todo, doing, done)
- (0.25p) the acceptance criteria of the user stories selected for sprint 1 are written down
- (0.25p) testing
  - The project has at least one Robot test written by the group itself (the ready-made tests of the boilerplate do not count)
- (0.25p) continuous integration
  - The project's code is on GitHub
  - GitHub Actions runs the tests and they pass
- (0.25p) implementation
  - At least _one_ of the stories agreed for the sprint goal is implemented at the level required by the _definition of done_
  - the stories are assessed in the version running on the OKD cluster: **if the application does not work in OKD, you get at most half of the points for this item (0.125p)**
- (0.25p) the work has been done steadily
  - All the work must not have been done on a single day
- (0.25p) GitHub has a sensibly defined .gitignore and the repository contains no files that do not belong there
- (0.25p) the group has prepared properly for the sprint review
  - The person running the review has been agreed on and the necessary preparations have been made in advance
  - During the review, the user stories selected for the sprint that have been implemented according to their acceptance criteria are demonstrated to the customer

The maximum for the sprint is 2.5 points.

#### Retrospective

- A retrospective must be held at the end of sprint 1
- Instructions for holding a retrospective can be found in the [mini project instructions](/en/miniprojekti/#holding-a-retrospective)
- Short notes on the retrospective must be written in the file `retro.md` placed in the root of the project repository
- Based on the observations of the retrospective, at least three _concrete improvements_ must be identified, i.e. things in which the team improves its way of working in the next sprint
  - it must be possible to check at the end of the sprint whether an improvement was carried out: e.g. _every pull request is reviewed before merging_ rather than _we communicate better_
  - the improvements are written down in the notes and added to the backlog of the next sprint as tasks of their own, each with a person responsible
- At the beginning of each retrospective, the improvements from the previous retrospective are reviewed, and the notes record how each one was carried out (yes / partly / no) and why
- Based on the retrospective, it is also a good idea to update the group's ground rules when needed
- The retrospective affects the scoring of sprint 2

### Grading criteria for the second sprint

Points are awarded for the following:

- (0.25p) product backlog
  - The backlog is DEEP (the stories do not need to be estimated)
- (0.25p) sprint 2 backlog
  - The user stories selected for the sprint are split into technical-level tasks
  - The progress of the sprint is tracked based on the finished tasks with a burndown or burnup chart
  - Each task shows who is working on it
- (0.25p) the acceptance criteria of the stories selected for sprint 2 are written down
- (0.25p) at least some of the stories are tested at the story level (with Robot Framework)
- (0.25p) the application has at least one unit test written by the group itself (the ready-made tests of the boilerplate do not count)
  - like in the boilerplate, the tests can be written with the unittest library, and they are run with pytest
  - you should read [this](/en/flask/#about-the-tests) note on testing
- (0.25p) continuous integration
  - The CI service runs the tests
  - the main branch is not broken at the end of the sprint
- (0.125p) sensible Pylint rules have been defined for the project and they are checked by CI
- (0.25p) most of the user stories of the sprint are implemented at the level required by the definition of done
  - the stories are assessed in the version running on the OKD cluster: **if the application does not work in OKD, you get at most half of the points for this item (0.125p)**
- (0.125p) a [release](https://help.github.com/articles/creating-releases/) has been created on GitHub of the working version shown in the demo.
  - the release must have a sensible name and description, see an example e.g. [here](/en/release)
- (0.125p) A [retrospective](/en/miniprojektin_arvosteluperusteet/#retrospective) has been held at the end of sprint 1, proper notes have been made of it, and they contain at least three concrete improvements
- (0.25p) The improvements from the sprint 1 retrospective are tasks in the sprint 2 backlog, and the team has acted on them
- (0.125p) the group has prepared properly for the sprint review
  - The review is run by a different person than in the previous review
  - The person running the review has been agreed on and the necessary preparations have been made in advance
  - During the review, the customer is shown that each user story selected for the sprint has been implemented according to its acceptance criteria
- **Hold a retrospective at the end of the sprint**; the points for the retrospective are given in the grading of sprint 3, see the [instructions](/en/miniprojektin_arvosteluperusteet/#retrospective)

The maximum for the sprint is 2.5 points.

### Grading criteria for the third sprint

Points are awarded for the following:

- (0.25p) product backlog
  - The backlog is DEEP (the stories do not need to be estimated)
  - No junk that does not belong there remains in the backlog, the statuses of the stories are recorded correctly, etc...
- (0.25p) the acceptance criteria of the stories selected for sprint 3 are written in Robot Framework files
  - The acceptance criteria are **not written separately in the backlog**; instead, each story in the backlog has a link to its acceptance test file
- (0.25p) sprint 3 backlog
  - Requirements as in the previous sprints
- (0.25p) fairly comprehensive testing at the story level
- (0.25p) the program has a suitable amount of unit tests
  - still pay attention to [this](/en/flask/#about-the-tests) note on testing
- (0.25p) continuous integration
  - The CI service runs the unit and story tests and PyLint
  - the main branch has been broken in at most about 25% of the commits of the sprint 
- (0.125p) a link from the GitHub README to the test coverage report
  - the report covers only the files that make sense to unit test
- (0.125p) A [retrospective](/en/miniprojektin_arvosteluperusteet/#retrospective) has been held at the end of sprint 2, proper notes have been made of it, and they contain at least three concrete improvements
  - the notes show how the improvements from the sprint 1 retrospective were carried out
- (0.25p) The improvements from the sprint 2 retrospective are tasks in the sprint 3 backlog, and the team has acted on them
- (0.25p) most of the user stories of the sprint are implemented at the level required by the definition of done
  - the stories are assessed in the version running on the OKD cluster: **if the application does not work in OKD, you get at most half of the points for this item (0.125p)**
- (0.125p) release and license
  - a properly named and described [release](https://help.github.com/articles/creating-releases/) has been created on GitHub of the working version shown in the demo
  - a suitable license has been chosen for the program and defined in the repository. Read more about software licenses [here](/en/lisenssit/)
- (0.125p) the group has prepared properly for the sprint review
  - The review is run by a different person than in the previous review
  - The person running the review has been agreed on and the necessary preparations have been made in advance
  - During the review, the customer is shown that each user story selected for the sprint has been implemented according to its acceptance criteria
  - In the review, the application is shown with a projector. Connecting the computer to the projector **must be practised** in advance, e.g. the display must already be configured correctly (display mirroring), or you must be able to do the configuration in at most five seconds

The maximum for the sprint is 2.5 points.

### Grading criteria for the fourth sprint

Points are awarded for the following:

- (0.375p) backlogs
  - The product backlog is DEEP (the stories do not need to be estimated)
  - No junk that does not belong there remains in the backlog, the statuses of the stories are recorded correctly, etc...
  - Requirements for the sprint 4 backlog as in the previous sprints
- (0.25p) the acceptance criteria of the stories selected for sprint 4 are written in Robot Framework files
  - The acceptance criteria are not written separately in the backlog; instead, the backlog links to the acceptance test file
- (0.125p) the relevant parts of the application are tested with unit tests
  - coverage report in the README file
  - pay attention to [this](/en/flask/#about-the-tests) note on testing
- (0.25p) fairly comprehensive testing at the story level
  - the tests work at least when run locally
- (0.25p) continuous integration
  - The CI service runs the unit and story tests as well as Pylint
  - the main branch has been broken in at most about 25% of the commits of the sprint 
- (0.25p) most of the user stories of the sprint are implemented at the level required by the definition of done
  - the stories are assessed in the version running on the OKD cluster: **if the application does not work in OKD, you get at most half of the points for this item (0.125p)**
- (0.125p) A [retrospective](/en/miniprojektin_arvosteluperusteet/#retrospective) has been held at the end of sprint 3, proper notes have been made of it, and they contain at least three concrete improvements
  - the notes show how the improvements from the sprint 2 retrospective were carried out
- (0.25p) The improvements from the sprint 3 retrospective are tasks in the sprint 4 backlog, and the team has acted on them
- (0.25p) The internal quality of the code is at a reasonable level
  - the code is divided sensibly into files and directories
  - the code uses sensible naming 
  - the code does not contain too much obvious copy-paste
  - the code contains no junk that does not belong there, e.g. commented-out code
- (0.125p) The commits and commit messages are sensibly formed (in most of the commits of the sprint), see instructions [here](/commit) 
- (0.25p) the group has prepared properly for the final demo (the preparation is assessed based on how the demo goes)
  - You can connect the computer to the projector quickly (in 5 seconds) so that the display is configured correctly
  - It has been agreed in advance who does what
  - You have thought about what to present
    - Present the most important functionality; there is little time in the demo, so do not get sidetracked
  - The test data is sensible
    - the database must not be empty beforehand
    - the data in the database and the inputs used in the demo are sensible, i.e. _not_ for example _12345_, _asdf_, _nimi1_, _nimi2_
  - **Read the last bullet again**; for some reason 25% miss it...
    - if such input is seen, the points drop straight to zero

The maximum for the sprint is 2.5 points.

### Final steps

_Coming later!_

### Make sure that your commits show up correctly on GitHub

Since the number (and quality) of the commits made to GitHub affects your individual points, make sure that you have configured your email address in Git (see [exercise 2 of the week 1 exercises](/en/tehtavat1#2-to-github-version-control)), that your username shows up correctly in the repository's commit list when you commit to your group's repository, and that your username appears in the repository's [contributors](https://github.com/ohjelmistotuotanto-hy/ohjelmistotuotanto-hy.github.io/graphs/contributors) list.

It is recommended that everyone makes one test commit (from their own machine) right at the start and checks that Git has been configured correctly.

### Pair programming and commits

If you pair program (you should!), you can make the commits show up for both of you
by following [these instructions](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).

### Missing commits

If your commit shows (despite configuring Git's email address) a grey symbol like the lower one of the following

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit1.png)

Click the name of the grey commit to see the email address that is attached to the commit but that GitHub does not recognise as yours.

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit2.png)

Add the address in the _settings_ menu:

![](https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit3.png)
