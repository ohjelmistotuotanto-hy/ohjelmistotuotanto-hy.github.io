---
layout: page
title: Mini project
title_long: 'Mini project'
permalink: /en/miniprojekti/
inheader: yes
source: miniprojekti.md
source_commit: 81a8f02
---

### News

<div style="color:black; border-style: solid; border-width: thick; border-color: green; padding: 10px; margin-bottom: 15px; padding: 10px; background-color: #F1EFEF;">
  <ul style="margin-bottom: -2px">
    <li><a href="/en/miniprojektin_arvosteluperusteet/#grading-criteria-for-the-first-sprint">Grading criteria</a> for the first sprint</li>
    <li><a href="/en/miniprojektin_arvosteluperusteet/#grading-criteria-for-the-second-sprint">Grading criteria</a> for the second sprint</li>
  </ul>
</div>

### Important links

- [Grading criteria](/en/miniprojektin_arvosteluperusteet)
- [Checklist](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/misc/ohjeita.md) for the start (in Finnish)
- Instructions for using Flask [here](/en/flask)
- [Boilerplate](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate) 
- [Example and instructions for making the backlogs](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/BACKLOG.md)
- [Description](/en/speksi) of the software to be built

### Introduction

- The mini project is done during weeks 3–7 of the course
- **Passing the course requires accepted participation in the mini project** or a [credit transfer](/en/osa0#credit-transfer-for-the-mini-project) for it

- The project is done in groups of about 4–6 people
- The project involves some programming, but **the main focus is not on programming** but on following a systematic process (more on this later).
- **Each group member is expected to work about 6 hours on the project during each sprint**
  - Time spent in customer meetings is not counted in the weekly working time!
- In each sprint, the group does what it can do in the time reserved for the sprint, no more and no less
  - Going well over the six hours of working time is therefore **not** sensible, it is downright forbidden

### Forming the group

- The groups are formed in the kick-off sessions held during the week starting on 9.11.
  - a kick-off session lasts about 2 hours
- Kick-off sessions (everyone attends one)
  - Mon 9.11. at 14–16 C220
  - Tue 10.11. at 14–16 D122
  - Wed 11.11. at 16–18 C220
  - Thu 12.11. at 10–12 BK114
  - Thu 12.11. at 14–16 B222
  - You can see your kick-off session on the [miniproject]({{site.stats_url}}/miniproject) tab of the submission app
- When you come to the kick-off session, you should know at least the following topics from parts 1 and 2 of the material:
  - Scrum
  - sprint
  - user story
  - product backlog
  - sprint backlog
  - acceptance criterion
  - definition of done
  - [psychological safety](/en/osa1#psychological-safety)
- You should also read this document and the mini project [grading criteria](/en/miniprojektin_arvosteluperusteet) carefully before the kick-off session

### Progress of the work

The customer meetings of the following weeks (sprint review and planning of the new sprint) take place within the same 2-hour slot as the kick-off session. A meeting lasts 30 minutes. The time is shown on the [miniproject]({{site.stats_url}}/miniproject) tab of the submission app

The instructor has two roles in the meetings:

1. the customer, who gives you the requirements of the application, accepts the implemented features and is not necessarily very technically skilled
2. a mentor, who gives feedback on your technical and methodological work

In the first meeting, the instructor tells you how the change of role shows. You can also ask to talk with the mentor or the customer when the need arises. You can contact the instructor between the meetings too if the group has problems. The way of contacting is agreed with the instructor.
#### week 3 (9.–13.11.)

- The group is formed
- The groups meet the customer in the kick-off sessions
- The project must be registered in the submission app <{{site.stats_url}}>.
  - **One group member** logs in to the system and goes to the _miniprojects_ tab
    - Creates the project with the form opened by the _create project_ button
    - And shares the id of the created project with the other group members
  - **The other group members** log in to the system and join the group using the id with the form opened by the _join project_ button
  - **Every group member must be registered in the project by the customer meeting held at the end of the first sprint at the latest.**
    - Group members who have not registered by the customer meeting of the first sprint do not get the group's points for the sprint

#### week 4 (16.–20.11.)

- Sprint 1 review and sprint 2 planning

#### week 5 (23.–27.11.)

- Sprint 2 review and sprint 3 planning

#### week 6 (30.11.–4.12.)

- Sprint 3 review and sprint 4 planning

#### week 7 (7.–11.12.)

- Final demos (each group attends one session)
  - Tue 8.12. at 14–16 B123
  - Wed 9.12. at 10–12 B123
- Each group attends one final demo
- No separate customer meeting

### The software to be built

A preliminary description is [here](/en/speksi). You will hear more from the customer.

### Implementation technology

The application must be implemented with the Flask framework familiar from the course [Tietokannat ja Web-ohjelmointi](https://hy-tikawe.github.io/materiaali/), and it must store its data in an SQLite database
- SQLite does not need a separate database server, see the [instructions](/en/flask/#database)
- The application is deployed to the university's OKD cluster following the boilerplate's [deployment instructions](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/DEPLOYMENT.md)
  - the deployment is done once for the whole group, but two group members should be responsible for it so that the know-how is not in the hands of only one person
  - a project (namespace) has already been created on the cluster for each group. You can see its name on the [miniproject]({{site.stats_url}}/miniproject) tab of the submission app under _OKD-projekti_
  - installing the `oc` command line tool and logging in to the cluster are explained [here](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/OKD.md). The cluster is only visible from the university network, i.e. via Eduroam or the University of Helsinki VPN
  - the Docker image built by GitHub Actions must be public
  - the file `secret.env` containing secrets is not added to version control
  - once the application has been deployed, the version on the cluster is [updated automatically](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/DEPLOYMENT.md#automaattinen-päivittyminen) whenever code pushed to the main branch passes the GitHub Actions tests. However, you must run the command `oc apply -k .` yourself if, for example, the file `kustomization.yaml`, the files in the `manifests` directory or the file `secret.env` change, see [Milloin deployaus tulee tehdä itse?](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/DEPLOYMENT.md#milloin-deployaus-tulee-tehdä-itse) (When do you need to deploy yourself?)
  - **the database on the cluster is not updated automatically**: you must create the database tables on the cluster yourself after the first deployment and whenever the file `src/schema.sql` changes, see [Tietokanta klusterilla](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/DEPLOYMENT.md#tietokanta-klusterilla) (Database on the cluster). Note that the initialisation destroys all data in the cluster's database

Do not under any circumstances use Flask haphazardly, otherwise you may run into serious trouble configuring the application. Read the [instructions for using Flask](/en/flask), **it is extremely important that you read them**.

### Technical and process requirements

- The group draws up the _product backlog_ together with the customer
  - The requirements are recorded in the backlog as user stories, each story as its own issue
- In sprint planning, the group selects a suitable number of user stories from the top of the backlog to be implemented
  - The group only selects the stories it estimates it can implement during the sprint at the quality level defined by the **definition of done**. The definition of done is given below
  - Note that the selection is a forecast, not a promise: the stories do not have to be finished. When building software, unforeseen things happen, and plans do not always work out.
  - Do not promise too much to the customer, and be careful with your estimates especially during the first sprints: configuration, testing and getting the group organised will take a lot of time
- The group maintains the _sprint backlog_
  - In sprint planning, the user stories are split into technical-level tasks that are placed in the sprint backlog
    - In GitHub Projects, the tasks are made _sub-issues_ of the story
    - a sprint can also contain tasks that are not related to any story, e.g. configuring CI or the retrospective
  - The group tracks the progress of the sprint based on the finished tasks with a burnup (or burndown) chart
    - the chart can be, for example, the sprint-specific burnup chart drawn by the Insights view of GitHub Projects
  - For each task, the sprint backlog must show
    - the status of the task (e.g. Todo, In Progress, Done)
    - who is working on the task
- During the first sprint, the group draws up shared ground rules (see [tips for group work](#tips-for-group-work)) and saves them in the repository in the file `pelisaannot.md`, which is linked from the README
  - the ground rules are updated when needed, e.g. based on the retrospective
- The group holds a retrospective at the end of each sprint (see [holding a retrospective](#holding-a-retrospective))
  - the most important observations of the retrospective and at least three concrete improvements are recorded in the file `retro.md` in the root of the repository, and the improvements are added as tasks to the backlog of the next sprint
- The group practises continuous integration with GitHub Actions
- The application has been deployed to the OKD cluster, and the version on the cluster is updated automatically when changes made to the main branch pass the CI tests (continuous deployment)
- The code is stored in GitHub
- The project's GitHub repository has a sensible README.md

#### Product and sprint backlog

- In the backlog, the requirements are expressed as sensibly worded user stories
  - **in the mini project, user stories and tasks do not need to be estimated**; the progress of the sprint is tracked based on the finished tasks
- **You should make the backlogs with GitHub Projects and follow the example and instructions in the boilerplate's [BACKLOG.md](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/BACKLOG.md) file**
  - the easiest way is to copy the ready-made [backlog template](https://github.com/orgs/ohjelmistotuotanto-hy/projects/2), which already has the fields _Sprint_ and _Tyyppi_, the views _Product backlog_ and _Sprint 1–4 backlog_, and sprint-specific burnup charts
  - see the [example project](https://github.com/orgs/ohjelmistotuotanto-hy/projects/1) for a model: it has the backlogs of the boilerplate's todo application in the middle of sprint 2
  - the example backlogs are also presented in part 2 of the material, see [Example: backlogs with GitHub Projects](/en/osa2/#example-backlogs-with-github-projects)
- The product backlog must be DEEP
  - the stories are in order of priority, the most important at the top
  - the top stories are described in detail with their acceptance criteria, those further down may be coarser
  - the backlog shows the status of each story and the sprint it has been taken into
- In the sprint backlog, each task has a status (Todo, In Progress, Done) and an assignee (Assignees)
  - when you start a task, mark yourself as its assignee and move it to In Progress
  - close the task's issue as soon as the task is finished, otherwise the burnup chart does not show the acual progress of the sprint
- In the stories of sprint 1, the acceptance criteria can be written in the issue as text; from sprint 2 onwards they are written as Robot Framework tests and the issue gets a link to the test file


#### Definition of done

Below is a starting point for the definition of done. The group must define its own DoD, suited to its own circumstances, in the GitHub repository

- Acceptance criteria must be defined for the user stories, and from sprint 2 onwards they are documented with [Robot Framework](/en/robot_framework/) syntax
  - a good practice is to link from the README to the files that define the acceptance criteria
- The test coverage of the implemented code must be reasonable
- The customer can see the status of the code and the tests in the CI service at all times
- The maintainability of the code must be as good as possible
  - sensible naming
  - a sensible/clear and justified architecture
  - a consistent code style (enforced with Pylint)
- A story is done only when it works in the version of the application running on the OKD cluster

#### Use of AI

Using coding agents and other AI tools in the mini project is allowed. The definition of done also applies to AI-generated code: it must be tested and maintainable in the same way as code you write yourself. The group is responsible for all code that ends up in the repository, and each group member must understand what the code they bring into the repository does. More on the controlled use of AI in the material [AI in software engineering](/en/genai/).

#### Repository and README

The README must contain at least the following:

- Links to the product backlog and the sprint backlogs (readable versions of the backlogs must be available on the public internet; check that the links work when not logged in, e.g. in an incognito window of your browser)
- A link to the CI service
- A link to the application running on the OKD cluster
- A license must be defined for the work <https://help.github.com/articles/licensing-a-repository/>

### Tips for group work

A fairly sure recipe for failure is poor communication. So do as much as possible together, preferably on site on campus or, if that is not possible, e.g. in a Discord voice chat. In general, it is good to tell the group what you are about to work on and when you have finished it, which avoids overlapping work. Especially at the beginning of the project, e.g. when configuring GitHub Actions, it pays to invest in working together. As the project goes on, working independently also becomes easier if and when the group has agreed on its working principles and ground rules.

In the ground rules, you should agree at least on which communication channel you use and how quickly messages are answered, how absences and late arrivals are announced, how decisions are made and what is done if someone does not stick to what was agreed. The group should also meet at least once informally, e.g. over coffee or games, since getting to know each other makes collaboration easier. In the first sprint, you can count 30 minutes of such a meeting in the sprint's working time.

Tell the group about problems as soon as you notice them. If your work is delayed or remains unfinished, the group still has time to reprioritise the tasks. When something goes wrong, look for the cause in the process rather than in people, see [psychological safety](/en/osa1#psychological-safety). Asking for help and admitting what you do not know are completely expected in the project, especially when the experience levels of the group members vary.

The group has no appointed leader, so taking the initiative may feel awkward. Take turns leading the meetings and retrospectives, and when someone takes the lead, thank them for it. You can also talk about leadership: it is perfectly fine to say that you appreciate it when someone takes the lead, or that you like leading yourself.

Pair programming and configuring together have been found to be extremely useful. It may well be a good idea to always have two people working on each user story.

For each thing, such as the README.md file, the product backlog and the sprint backlog, you should appoint a person responsible who makes sure that the group takes care of it. So the person responsible for thing X does not necessarily do it themselves but makes sure that it gets done.

Keep the program working at all times. It is a very bad idea to try to integrate the outputs coded by different people during the week an hour before the customer meeting...

See also the [checklist](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate/blob/main/misc/ohjeita.md) for the start of the project (in Finnish).

#### Holding a retrospective

In a retrospective, the team examines its own way of working: what went well in the sprint, what could be improved and how the improvements are put into practice in the next sprint. You can hold the retrospective with any technique. Here are three options:

- [Start, Stop, Continue, More of, Less of Wheel](https://retrospectivewiki.org/index.php?title=Start,_Stop,_Continue,_More_of,_Less_of_Wheel): the team collects things that should be started, stopped or continued, as well as things that should be done more or less.
- [Glad, Sad, Mad](https://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad): everyone tells what made them glad, sad and mad in the sprint, and together you look for things to improve based on them.
- A round-based model, described below.

More techniques can be found e.g. in the [Retrospective Wiki](https://retrospectivewiki.org/index.php?title=Retrospective_Plans).

If you do not know where to start, try the round-based model. In it, nobody needs to come up with more than one thing at a time:

1. Choose a scribe who writes down the things that come up.
2. Go through how the improvements from the previous retrospective were carried out.
3. Everyone silently thinks for one minute of one thing that went well in the sprint. Then each person briefly presents theirs, and it is discussed. The thinking time can be extended to two minutes if needed.
4. The same is repeated for one thing that could be improved.
5. The same is repeated for one thing that should be stopped.
6. The round is gone through two or more times if there is time.

Finally, agree on at least three concrete improvements for the next sprint. It must be possible to check at the end of the sprint whether an improvement was carried out, e.g. _every pull request is reviewed before merging_ rather than _we communicate better_. Reserve about half an hour for the retrospective, a bit more if needed. However, the retrospective should not take more than an hour, since only about 6 hours of working time per sprint are reserved for the mini project.

### Grading the work

The grading criteria can be found [here](/en/miniprojektin_arvosteluperusteet/)
