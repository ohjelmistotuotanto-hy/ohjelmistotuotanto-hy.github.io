---
layout: page
title: 'Part 1'
title_long: 'Software engineering, agility, Scrum'
inheader: yes
permalink: /en/osa1/
source: osa1.md
source_commit: 85a3af3
---

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons license" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
  />
</a>

{% include en/miniproj_ilmo.md %}

The first part begins with an overview of _software engineering_, its history and its knowledge areas. After that we look first at the so-called waterfall model, a formerly popular way of managing software projects, and then at agile methods, the way of developing and managing software projects that dominates today.

The second half of this part focuses on the most popular agile method, _Scrum_, which gives one concrete set of guidelines for how agile software projects can be managed.

Have you already read [Part 0](/en/osa0), which goes through the course arrangements and grading principles in more detail?

### Typos in the material

{% include en/typo_instructions.md path="/en/osa1.md" %}

{% include en/norppa.md %}

## Software engineering and its knowledge areas

IEEE (Institute of Electrical and Electronics Engineers), one of the most influential organisations in our field, defines software engineering as follows:

> The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software; that is, the application of engineering to software

According to IEEE, software engineering means a systematic, disciplined and quantifiable approach to developing, operating and maintaining software. The final remark of the definition says that it is an "engineering" approach to developing software.

The definition comes from the IEEE terminology standard (originally IEEE Std 610.12-1990, nowadays ISO/IEC/IEEE 24765), and it is also used by [SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering), the _Software Engineering Body of Knowledge_, in which IEEE has defined through a committee what it means by software engineering and which knowledge areas it considers to belong to software engineering.

> Side note: the Finnish term for software engineering is _ohjelmistotuotanto_, and as a term it is in fact rather poor. If the Finnish term were translated back into English, the result would be _software production_, i.e. manufacturing programs. The term production is usually used for the straightforward building of products; for example, if a factory makes chairs, you could say that its business is _chair production_. 
Making software is a very different activity from, for example, making a chair. For "building" software, English uses the term development, so you can say that a _company develops software for accounting_. Development is an activity that involves more than straightforward production: it includes, among other things, design and asking what kind of product is needed in the first place, and why. Software engineering thus means applying an "engineering" approach to software development.

### Knowledge areas of software engineering

According to [version 4 of SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4), published in 2024, software engineering is divided into the following knowledge areas:

- Software requirements
- Software architecture
- Software design
- Software construction
- Software testing
- Software maintenance
- Software engineering operations
- Software configuration management
- Software engineering management
- Software engineering process
- Software engineering models and methods
- Software engineering economics
- Software security
- Software quality

The list does not yet include _Software engineering professional practice_, which covers professional practices and ethics, or the three knowledge areas describing foundational skills (computing, mathematical and engineering foundations).

_Software requirements_ means the requirements set for the software, i.e. how the end user or the customer thinks the software being built should work.

_Software design_, on the other hand, means designing the internal structure of software that has the desired functionality. A central part of design is _Software architecture_, the high-level structure of the program.

_Software construction_ refers to the activities that turn the designed software into a working product, in practice programming and debugging.

As you might guess, _software testing_ means the methods used to ensure that the software works as intended and that it is free enough of defects to be used.

Most software is never finished for good. When the first version is taken into use, maintenance, _software maintenance_, begins: bugs are fixed and the software is extended with new features.

Closely related to maintenance is _Software engineering operations_, which SWEBOK has raised into a knowledge area of its own: all the activities that ensure that the software and its new versions get into the hands of the end users. 

_Software configuration management_ refers to configuring the libraries, hardware and build process involved in deploying the software, as well as to versioning the software.

Making software involves a lot of planning, coordination, administration and reporting, i.e. "management"; this is what _software engineering management_ refers to.

_Software engineering process_, the software development process, describes the ways or methods in which the people developing the software should carry out and schedule the different activities (requirements, design, construction, testing) that developing software requires. We will return to this topic in more detail later in this part.

_Software engineering models and methods_ describes the more detailed methods used in software development, such as modelling and various design methods.

The quality of software, _software quality_, is an even broader perspective than testing on whether the software is good enough. A more central question than being bug-free and working correctly is whether the software suits the users' needs at all, i.e. whether it is fit for its purpose. One central element of quality is the security of software, _Software security_.

Software rarely lives in a vacuum. Most often it is used to automate and streamline some activity, so there is a commercial motivation behind it. On the other hand, developing software is expensive, so the price tag of developing and maintaining software is large. Examining the economic drivers and realities related to software is covered by _Software engineering economics_.

Software engineering thus encompasses a large number of very different things. This course covers all of these knowledge areas at least to some extent. Since the number of topics is really large and time is limited, some of them are unfortunately covered only superficially. However, the master's studies offer advanced courses on many of the topics.

At this stage, the most important thing for a beginning software student is to get an overall picture of the whole field of software engineering and then to apply and reflect on the theory in practical software work, for example on the [Software Engineering Project](https://github.com/HY-TKTL/TKT20007-Ohjelmistotuotantoprojekti) course of the Department of Computer Science or in working life. Advanced courses on the topic are likely to be much more rewarding once the student already has some practical work experience in the field.

## Phases and lifecycle of software

The previous section mentioned the knowledge areas of software engineering

- Software requirements
- Software design
- Software construction
- Software testing
- Software maintenance

These can be thought of as forming the _phases_ through which software progresses during its development. These phases are sometimes called the _software lifecycle_. Over time there have been different ways of structuring software development with respect to the lifecycle, i.e. how and by whom the phases have been carried out has varied.

### Code'n'fix

In the early days of computing, hardware was very expensive and software was "trivial" compared to hardware. At first, programming was done by connecting cables and a bit later in machine code. The users of the applications, such as physicists calculating the trajectories of projectiles, usually programmed the applications they needed themselves.

Application development was largely done with a _code and fix_ mentality: you coded and checked whether the software worked. Because the software was simple and relatively cheap, this was no bottleneck for the work; on the contrary, it made the work easier, as calculations could be done by computer instead of by hand.

Gradually, software began to grow. Higher-level programming languages such as Fortran, Cobol and Algol were developed, and software started to be used outside the defence industry as well. Software began to be made for end users who were no longer software professionals, so the gap between the makers of software and its end users began to grow.

The software field started to run into trouble. According to [Wikipedia](https://en.wikipedia.org/wiki/Software_crisis), the problems included the following

- budgets were exceeded and projects fell behind schedule
- software was inefficient, its quality was poor and it did not meet the users' needs
- maintaining and extending the code was difficult
- and quite often, despite good intentions, the software could not be delivered at all

### Software crisis

At a conference organised by NATO in Garmisch-Partenkirchen, Germany, in October 1968, it was indeed stated that the world was in a _software crisis_. From the conference, the term spread into general use.

The term refers to the difficulty of building usable, correctly working, efficient and extensible software with the available resources.

One of the pioneers of computing, Turing Award winner Edsger Dijkstra, put it as follows in a [talk](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD340.html) he gave in 1972

> The major cause of the software crisis is that the machines have become several orders of magnitude more powerful! To put it quite bluntly: as long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.

So when there were no computers, programming was not a problem. The first computers had little computing power, and they caused only small problems for programming. With massively powerful computers, programming has also become a massive problem...

### Software development as an engineering discipline: software engineering

The term _software engineering_ had been used occasionally before, for example by Margaret Hamilton, who led the software development of the Apollo program in the 1960s. The term became widely known at the 1968 NATO [conference](http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF), whose name was deliberately chosen to be provocative. One early definition of the term, formulated by the German Fritz Bauer, goes as follows

> The establishment and use of sound engineering principles in order to obtain economically software that is reliable and works efficiently on real machines

The idea emerged that instead of the _code'n'fix_ mentality, software development should be like any other engineering work: as in building bridges, for example, the artefact to be built should first be precisely specified (requirements) and designed (design) without gaps, after which building it (construction) is a fairly straightforward phase.

### Waterfall or linear model

Winston Royce's article [Managing the development of Large Software Systems](https://web.archive.org/web/20230308124552/http://www-scf.usc.edu/~csci201/lectures/Lecture11/royce1970.pdf), published in 1970, discusses the problems of developing large software systems. On page 2 of the article, Royce presents a simple _process model_ (i.e. a set of guidelines for sequencing the work phases), in which the phases of the software lifecycle are carried out linearly one after another:

![Waterfall model]({{ "/images/vesiputous.png" | relative_url }})

Royce's version of the figure looks like this:

![]({{ "/images/1-1.png" | relative_url }})

The straightforward linear model, which came to be called the waterfall model, quickly gained popularity. The model makes sense in many ways: first you should find out what is being built, and only after that take care of the design. When the design is ready, the product can be built and then tested to make sure it works as intended. This is how many other fields of production work, after all.

The popularity of the waterfall model was partly due to the fact that the United States Department of Defense (DoD), at the time one of the largest buyers of software in the world, began to require all its subcontractors to follow the process (the standards DOD-STD-2167 from 1985 and DOD-STD-2167A from 1988). Other organisations producing software also thought that since the DoD requires the waterfall model, it must be a good thing and a practice worth adopting.

The waterfall model relies heavily on the different phases being carried out by separate teams. A group of analysts works out the requirements for the application together with the customer, software architects receive the results of the requirements engineering and design the program based on them. Programmers implement the application according to the architects' design and hand it over to testers for quality assurance. This feels like a natural division of labour: each phase is done by a group of people specialised in the working methods of that phase.

For information to flow between the different phases of software development, the results of each phase must be carefully documented. In particular, the requirements engineering done with the customer must be done carefully and documented well, since all later phases assume that the requirements have been recorded comprehensively and without errors.

Working according to the waterfall model is sometimes characterised as [Big Design Up Front](https://en.wikipedia.org/wiki/Big_design_up_front), abbreviated BDUF, to describe the fact that the whole software is exhaustively specified and designed before the programming phase begins. The term BDUF is usually used in a negative sense to describe the heaviness of the waterfall model.

A software process following the waterfall model is usually carefully planned, resourced and scheduled in advance, which is why it is sometimes called a _plan based process_, or a plan-driven process.

#### Problems of the waterfall model

Software engineering according to the waterfall model has not proven particularly successful.

The waterfall model assumes that the phases of software engineering happen one after another and that, at least in large projects, each phase is carried out by different people. This leads to several problems.

The most central problem is that no matter how carefully the requirements engineering is done, the requirements will almost certainly change along the way. It has turned out that when customers order software, they do not know or cannot say what they want or need. The customer's needs may also change during the project. The business environment may change, new legislation comes in, companies merge, the global economy turns, a global pandemic hits... The longer the development process of the software, the more certain it is that the requirements will evolve.

It has also been seen time after time that the customer starts wanting changes as soon as they see the finished result. Because software is an abstract product that does not necessarily have earlier models, it is very hard for customers to think through all the functionality in advance at a level where it could be completely locked down, as the waterfall model assumes.

There is also the risk that designers or programmers misinterpret the documented requirements of the customer, or that the customer was not fully understood when the requirements were recorded, i.e. the requirements were documented incorrectly to begin with. In fact, this is not even a risk: it is practically certain that misunderstandings and differences in interpretation will occur, however precise the documentation.

Separating requirements engineering, design and implementation as the waterfall model does is in practice senseless or even impossible. The chosen software architecture, i.e. the "high-level structure", and the implementation technologies used greatly affect the cost of the specified features. When specifying, you should therefore also think about design and implementation, and about the form in which the customer's requirements can be implemented with reasonable resources in the first place.

Separating design and implementation has not proven to be a working idea either. It is impossible to design software so that implementation is a straightforward mechanical task; part of the design inevitably happens only during the programming phase.

Software engineering based on the waterfall model thus largely rests on an analogy with other engineering disciplines: the artefact to be built must first be specified and designed without gaps, after which building it (construction) is a trivial phase.

> Traditionally, programming has been likened to the "construction phase", which is considered trivial, and all the challenge has been thought to lie in specification and design. This analogy has, however, come under criticism, since designing software so precisely that the design can be turned straightforwardly into code has proven impossible.
>
> In his 1992 essay [What is Software Design?](https://www.developerdotstar.com/mag/articles/reeves_design_main.html), Jack Reeves argued that the trivial construction phase of the traditional engineering analogy is not programming in the software process, but compiling the program code. Thus the program code is in fact the final design of the software, in the sense in which the engineering disciplines understand design.

In software development following the waterfall model, testing is carried out once the software is finished. Quality assurance that happens only at the end, however, reveals problems far too late. Fixing defects may become very expensive, since testing may reveal problems that force radical changes to the structure of the software or even to its requirements.

If you want to read more about the problems of the waterfall model, take a look at Martin Fowler's article [The New Methodology](http://martinfowler.com/articles/newMethodology.html).

#### Royce and the waterfall model

Paradoxically, Royce, who is considered the father of the waterfall model, _does not recommend_ using the straightforward linear model in his article. Royce does present the linear waterfall model on page 2 of the article, but states that it is _not suitable_ for carrying out complex software projects.

Royce recommends first making a prototype of the application, and designing and implementing the final software only in the light of the experience gained from it. Towards the end of the article, Royce indeed presents a model in which the software is made in two iterations, a figure from Royce's article:

![]({{ "/images/1-3.png" | relative_url }})

The waterfall model, or at least naming Royce as the father of the waterfall model, is thus a big misunderstanding. Fortunately, Royce's article is available on the internet nowadays (although only on web.archive.org anymore), and everyone can check for themselves what Royce said about the waterfall model.

### Iterative and incremental software development

The _iterative_ way of making software, a reaction to the problems of the linear model, started to become common in the 80s and 90s (e.g. Barry Boehm's spiral model, the prototype model, the Rational Unified Process).

In the iterative model, development work is divided into short periods, usually a few weeks long, called _iterations_. Each iteration goes through all phases of the software process: part of the software is specified, designed, implemented and tested. Unlike in the waterfall model, comprehensive specification and design are thus not done right at the start; instead they become more precise as development progresses.

The model is also _incremental_: each iteration produces a working addition (an increment) to what was there before, so the software grows piece by piece. The terms describe two different things. _Iterative_ means repeating the same work cycle and improving the output based on feedback, while _incremental_ means that the software grows gradually. In practice, today's methods are both.

The customer is met between every iteration: the customer sees the current version of the program and can influence the course of the following iterations. Because the software grows incrementally, a basic version of it can be put into the hands of end users while development is still ongoing.

The following figure illustrates the model. Specification and design carry more weight at the beginning, but implementation and testing already start in the first iteration, and the software grows with each iteration.

![Iterative and incremental software development]({{ "/images/1-4.svg" | relative_url }})

So already in 1970, Royce, the "father" of the waterfall model, recommended precisely an iterative approach (the two-iteration version) as the development model for complex software. However, the method Royce proposed was not incremental in the sense described above, since only a prototype was built during the first iteration, and the real application was specified, designed and implemented based on it.

The United States Department of Defense also changed its position. In 1994, the standard that favoured the waterfall was replaced by MIL-STD-498, which also allowed iterative development, and the acquisition guideline DoD 5000.2, published in 2000, went as far as recommending an iterative software process:

> There are two approaches, evolutionary (iterative) and single step (waterfall), to full capability. An evolutionary approach is preferred. ... In this approach, the ultimate capability delivered to the user is divided into two or more blocks, with increasing increments of capability...software development shall follow an iterative spiral development process in which continually expanding software versions are based on learning from earlier development. It can also be done in phases

In fact, iterative software development is a much older idea than the waterfall model. For example, the software of NASA's Project Mercury, which took the first American into space, was developed iteratively at the turn of the 50s and 60s, with iterations as short as half a day. The space shuttle software was made in the late 70s, when the waterfall model was dominant, but it too was eventually developed using an iterative process, in 8-week iterations over 31 months. You can read more about this in Larman and Basili's excellent article [incremental and iterative development, a brief history](http://www.craiglarman.com/wiki/downloads/misc/history-of-iterative-larman-and-basili-ieee-computer.pdf).

### Agile software development

The process models of the 1980s and 1990s emphasised careful project planning, formal quality control, detailed analysis and design methods, and a precise, strictly controlled software process. The process models particularly supported the development of large, long-lived software, but for small and medium-sized software they often proved unnecessarily rigid.

Traditional process models (including iterative ones) have aimed to minimise the significance of the individual doing the work. The idea has been that the individual is a "factory worker" who can easily be replaced by another without any effect on the progress of the software process.

As a result of this conflict, a set of agile methods emerged, which emphasised the software itself and the importance of the software's customer and developers instead of detailed design and documentation.

### Agile manifesto

In February 2001, 17 pioneers of agile methods gathered for a meeting that resulted in the [agile manifesto](http://agilemanifesto.org/), a view of what agile software development means:

![Manifesto for Agile Software Development]({{ "/images/manifesto.jpeg" | relative_url }})

The manifesto has been translated into many languages, including [Finnish](https://agilemanifesto.org/iso/fi/manifesto.html). In English, the manifesto reads as follows:

We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:

- _Individuals and interactions_ over processes and tools
- _Working software_ over comprehensive documentation
- _Customer collaboration_ over contract negotiation
- _Responding to change_ over following a plan

That is, while there is value in the items on the right, we value the items on the left more.

The manifesto thus consists of four statements, each containing a juxtaposition, that express what agile methods consider most essential in software development. The first statement says that various tools and processes can be important, but the developers, users and customers of the software and the interaction between them are _even more important_. The second statement does not deny the importance of documentation, but says that in the end the most important thing is working software. The agile manifesto thus does not forbid or consider worthless the things the "old world" considered important, such as _following a plan_, but points out that there are things that are even more essential, such as _responding to change_.

The [group of authors](https://agilemanifesto.org/authors.html) of the manifesto includes many familiar and influential names, such as Kent Beck, Robert Martin, Ken Schwaber, Martin Fowler and Alistair Cockburn, who have significantly shaped the prevailing way of developing software today.

### Agile principles

In addition to the above, the manifesto contains 12 agile principles that give somewhat more concrete guidance for action. Let us now go through the principles and also consider the ideas behind them.

Let us start with three principles.

> Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.

> Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.

> Working software is the primary measure of progress.

The most essential thing of all, and the measure of the project's progress, is delivering working software that produces value to the customer. Unlike in the waterfall model, delivering finished functionality starts early, and it is done repeatedly by iterating fairly frequently. The manifesto talks about delivering every couple of weeks or months; nowadays the ideal delivery interval is even shorter, even releasing several versions of the application every day. This is possible with the practices of [continuous delivery](/en/osa3#continuous-deployment-and-delivery) and [DevOps](/en/osa3#devops). The delivery performance of software teams is nowadays often measured with the so-called [DORA metrics](https://dora.dev/guides/dora-metrics/), the central ones including deployment frequency and the time it takes for a change to get from being made into production.

> Business people and developers must work together daily throughout the project.

> The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.

> Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.

In the waterfall model, the fundamental principle was that building the software starts with comprehensive requirements engineering, during which the customer's requirements are found out, carefully documented and "frozen", i.e. changes to the requirements are not even allowed after that. The next time the customer takes part in the development work may be only at the end, doing acceptance testing.

The principles of the agile manifesto are the complete opposite. Customers and developers are expected to work in close, even daily, collaboration throughout the development of the software. Communication is handled in a lighter way instead of heavy documentation, even by talking. At the time of the manifesto, conversation meant face-to-face conversation, but as remote and hybrid work have become common, the principle is interpreted more loosely: alongside face-to-face conversation there are now video meetings and asynchronous, written communication, e.g. in chat, issues and pull requests, which at the same time leaves a trace of the decisions. The attitude towards requirements engineering has also been turned upside down. The customer may change their requirements in the middle of development, and is even encouraged to do so if changing the requirements lets the customer gain a competitive advantage.

> Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.

> The best architectures, requirements, and designs emerge from self-organizing teams.

The agile principles trust that when software developers are given a suitable working environment, they will do their best to deliver a valuable application to the customer without any need for external control. There is also no need for separate roles of an analyst collecting requirements or a software architect taking care of design: software teams work best by self-organising, i.e. by deciding on their working methods themselves. You can also think of it this way: if there are people in these roles, they work as part of the teams and not in separate teams.

> At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

The principle mentioned earlier, _Welcome changing requirements..._, thus describes how agile makes it possible, and even encourages, to change the direction of the product's development as new needs arise. Similarly, the development team is expected to examine its own way of working and continuously change it for the better.

> Simplicity--the art of maximizing the amount of work not done--is essential.

The waterfall model and other older development methods gave great weight to documentation and various reports "required by the process", which took a lot of time and effort without contributing much to finishing the product itself. In agile methods, the idea is to eliminate as far as possible everything that is not essential for the primary goals (_Working software is the primary measure of progress_). Software developers also tend to build all kinds of extras into the software just in case they are needed in the future, and in the agile spirit this, too, should be viewed critically.

The last two principles are the ones that most often tend to be forgotten:

> Continuous attention to technical excellence and good design enhances agility.

> Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.

Agility requires that the team is able to change the direction of development when necessary as new needs arise. This in turn requires that the team maintains the quality of the software at a sufficient level. If the internal structure of the application is a poor, duct-taped hack, it becomes ever harder to extend it with new functionality, especially functionality whose need could not be anticipated earlier. So if not enough attention is paid to quality, agility is lost and the development of the application becomes very slow. This also means that the software must be designed to a sufficient extent. In agile development, however, design does not happen all at once in advance, but continuously throughout development: the structure is improved by refactoring as new needs arise. Without continuous care for the structure of the application, [technical debt](/en/osa4#technical-debt) accumulates in it, and its structure does not stay of high quality.

Software projects are often approached in a deadline-driven way: close to the deadline, people switch to a panicked overtime mode in order to squeeze together a working product. After that there is a breather, but soon the next important deadline is ahead, and as the years go by the risk of burnout starts to grow. All of this also often results in low-quality code that gets harder to modify day by day.

The manifesto, however, reminds us that such a rat race is not necessary, and recommends that the application be developed at a pace that can be sustained, say, forever.

### Agile methods and Lean

Agile methods is an umbrella term for several different methods. In the early 2000s, [Extreme programming](http://www.extremeprogramming.org/), or XP, was the most popular of the agile methods. Nowadays very few apply "textbook" XP, but many of its practices have lived on and have been adopted into the toolkit of many software teams. We will get to know many XP practices during the course.

XP has gradually been overtaken by [Scrum](https://www.scrum.org/), which is probably the most used software development method in the world at the moment. For example, according to the annually published [State of Agile](https://stateofagile.com/) survey, Scrum is clearly the most common method used by agile teams. We will look at Scrum in more detail in the next section.

Agile software development has been strongly influenced by the _lean_ thinking behind the [Toyota production system](https://global.toyota/en/company/vision-and-philosophy/production-system/). The term lean indeed often appears alongside or instead of the term agile when talking about software development. [Kanban](https://en.wikipedia.org/wiki/Kanban), which originates from lean, has been widely applied to software development. It often complements some agile method such as Scrum. The combination of kanban and Scrum is known as Scrumban (the term was coined by Corey Ladas in 2008). Many teams nowadays also use kanban alone, in which case the work does not proceed in sprints but as a steady flow ([The Kanban Guide](https://kanbanguides.org/)). We will return to Lean and [kanban](/en/osa5#kanban) in more detail in [Part 5](/en/osa5#lean) of the course.

Agile methods were originally developed for managing individual, fairly small software teams. Since the late 2000s, several extensions to agile methods have been outlined, e.g. [SAFe](https://framework.scaledagile.com/) and [LeSS](https://less.works/), which make it possible to manage entities consisting of several software teams. In addition to the agile principles, these large-scale development methods rely heavily on the principles of lean. We will return to this in [Part 5](/en/osa5#large-scale-agile-software-development) of the course.

There is also research evidence of the benefits of agile methods, although it is more mixed than the marketing of the methods would suggest. For example, Dybå and Dingsøyr's [systematic literature review](https://doi.org/10.1016/j.infsof.2008.01.006) (2008) found several benefits of agility, e.g. related to customer collaboration and job satisfaction, but noted that the quality of the studies varied. Hoda, Salleh and Grundy's [review](https://doi.org/10.1109/MS.2018.290111318) (2018) describes how research on agility has moved from the practices of individual teams to large-scale agility, DevOps and the effects of agility on the whole organisation.

## Scrum

Let us now look at the most used of the agile methods, [Scrum](https://www.scrum.org/). Let us first examine a few fundamental assumptions behind Scrum and other agile methods.

### From plan-driven models to agility

As [stated earlier](#problems-of-the-waterfall-model), the basic problem of the waterfall model is that requirements cannot be specified nor the software designed exhaustively in advance, and testing at the end reveals problems too late.

The iterative process models developed in the 80s and 90s fix many of these shortcomings, but they are still strongly plan-based and assume that software engineering is, to some extent, a _controllable process_.

At the centre was thus a precise project plan (which, of course, could evolve in iterative models) and following it, as well as a clear division of roles: project managers, analysts, architects, programmers and testers each form their own teams related to their areas of responsibility.

### Basic assumptions of agile methods

Most software projects are unique in nature. The requirements differ from those of any software already built. The people doing the work often change, and each team has its own competences and personalities. Implementation technologies also evolve all the time, so new projects are likely to be done in a way that is not already familiar to all software developers.

Because of these factors, agile methods hold that it is sensible to start from the assumption that this is not a controlled process whose progress can be planned precisely in advance. It is better to think of software development as a _product development project_ that involves a lot of uncertainty and unknowns. Instead of an approach based on a precise advance plan, such projects are better managed with an _empirical process_.

The principles behind an [empirical process](https://resources.scrumalliance.org/Article/empirical-process-control-scrum) are _transparency_, _inspection_ and _adaptation_. It is essential that the whole team is as aware as possible of what is going on and what is being talked about, e.g. what is meant when something is said to be done. So there must be a high degree of transparency regarding matters related to the project, which in turn makes continuous inspection of the state of things possible: is the development of the product heading in the direction that matches the customer's current view, and do the team's practices support the development of the application in the best possible way. If, and _when_, room for improvement is found, the direction of the product's development or the team's working principles are adapted (adaptation).

Agile methods also assume that traditional, top-down command-and-control management and dividing people and teams into different areas of responsibility (designer, programmer, tester, frontend, backend) does not produce optimal results.

Instead, it is assumed that people work best in [self-organizing](https://www.mountaingoatsoftware.com/blog/the-role-of-leaders-on-a-self-organizing-team) teams, where the team is left to work in peace and trusted to take responsibility for its own work. A self-organising team works as a collective, sharing responsibility for what it does, i.e. the team succeeds and fails together. Shared responsibility requires that mistakes can be talked about without blame, see [psychological safety](#psychological-safety).

### Background of Scrum

Let us now look at Scrum, which is currently by far the most popular agile method/process model.

The term Scrum and some of the principles behind it first appear in the article [The new new product development game](https://hbr.org/1986/01/the-new-new-product-development-game), published in 1986, in which the Japanese professors Takeuchi and Nonaka describe the working principles shared by a group of successful companies (e.g. Fuji-Xerox, Canon, Honda, NEC, Epson, Brother, 3M, Xerox, Hewlett-Packard).

Scrum as we know it today, originally aimed at software development, was developed by Ken Schwaber and Jeff Sutherland in the mid-1990s. The basic content of Scrum is defined by [The Scrum guide](https://scrumguides.org/), a 13-page document that is updated from time to time. The current version is from 2020. In summer 2025, Jeff Sutherland, together with Ralph Jocham and John Coleman, published the [Scrum Guide Expansion Pack](https://scrumexpansion.org/), a considerably longer complement to the Scrum Guide, which covers e.g. product thinking and the role of AI in Scrum teams. It does not replace the Scrum Guide but is an optional add-on.

In the words of its developers

> Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.

The developers of Scrum point out that it is a framework, which can be used to manage the development of complex products so that the customer gets maximal value from the products. The developers of Scrum emphasise that it is not a process or a technique that alone would give sufficient guidance for the work. According to the 2020 Scrum Guide, Scrum is _purposefully incomplete_, i.e. it defines only the parts that are necessary to implement Scrum. So it is a framework that gives the guidelines for development but allows, and in fact requires, other methods and techniques too, each of which must be chosen case by case.

The most important goal of Scrum is to make the performance of the working methods used visible and thus enable continuous improvement of the product and the working environment, i.e. the above-mentioned trio of _transparency, inspection_ and _adaptation_ is at the heart of Scrum.

Earlier versions of the Scrum Guide described Scrum as

- _Lightweight_
- _Simple to understand_
- _Extremely difficult to master_

Although this characterisation was left out of the 2020 Scrum Guide, it still holds true. Unlike some other software development models (such as the [Rational Unified Process](https://en.wikipedia.org/wiki/Rational_Unified_Process), popular around the turn of the millennium, or SAFe, intended for large-scale development), Scrum contains only a few "rules", and the Scrum Guide that defines them can be read in half an hour. Everything seems clear and simple, but reality is often different. To work effectively, Scrum requires deep familiarity and years of experience. Merely following the rules mechanically is not enough.

### Scrum in brief

Scrum is an iterative and incremental method, or according to its developers a framework, in which software development happens in iterations of at most one month, which in Scrum are called _sprints_.

Development is the responsibility of the _Scrum team_, which consists of the developers, the _scrum master_ and the _product owner_. The team typically has at most ten people. The scrum master helps the team, for example, in following and improving the process and in removing impediments. The _product owner_ manages the project's _backlog_, which contains the requirements set for the software to be built in the project, in prioritised order.

At the start of each sprint, the team chooses from the project backlog the requirements to be implemented during the sprint, i.e. the features that are meant to be implemented during the sprint. During the sprint, the Scrum team implements the requirements chosen for the sprint in a self-managing way, with software that works with respect to those requirements as the result.

![]({{ "/images/2-1.png" | relative_url }})

#### Scrum: accountabilities, artefacts and events

Let us still go through Scrum terminology in a bit more detail before going into the specifics.

Scrum defines three different _accountabilities_: the developers, the scrum master and the product owner. The Scrum Guide used to talk about roles; the 2020 version replaced the term with accountabilities to emphasise that these are not job titles but a matter of who is responsible for what. The product owner has a fairly established Finnish translation, _tuotteenomistaja_, but the course mostly uses the English term.

The _artefacts_ of Scrum, i.e. its "concrete things", are the _product backlog_, the _sprint backlog_ (the sprint's task list) and the _increment_, a finished, usable addition to the software. Each artefact has a _commitment_ that gives the artefact a direction and against which progress can be assessed:

- the product backlog has the _product goal_
- the sprint backlog has the _sprint goal_
- the increment has the _definition of done_

In Scrum, work is paced by _sprints_, iterations of at most one month. Sprints include a few _standard meetings_: sprint planning, daily scrum meetings, the sprint review and the retrospective. The Scrum Guide calls these events, and the sprint itself is also an event, containing all the others. So there are five events in all.

### Product backlog

The product backlog is a prioritised list of the requirements the customer has set for the product, i.e. the desired features and functions. The backlog may also contain, for example, larger bug fixes.

The items in the backlog aim at the _product goal_, which describes the desired future state of the product. The product goal is a longer-term objective towards which the sprints lead one at a time.

It is considered good practice for the requirements recorded in the backlog to be meaningful, value-producing functionalities at the customer's level, e.g. in an online store a functionality could be _a purchase can be added to the shopping cart_, or in a study administration system _a student can register for a course they have added to their personal study plan_. Not all tasks related to software development can be formulated, at least not easily, as functionality meaningful at the customer's level. Refactoring, i.e. modifying the structure of the software, may be such a task. These must be recorded in the backlog anyway, otherwise transparency is compromised.

The requirements at the top of the backlog, i.e. those with the highest priority, are chosen to be implemented during the next sprint. This is why the requirements at the top of the backlog are usually recorded in more detail than those at the tail of the backlog.

The backlog is maintained and refined continuously; this is called _backlog refinement_. Often the aim is also to estimate the amount of work needed to implement the requirements in the backlog. The effort estimates are made by the developers. The Scrum Guide does not prescribe an estimation technique. Common approaches include so-called story points, but some teams give up estimation altogether and instead aim to split the work into small, equally sized pieces (the so-called _#NoEstimates_ movement). We will return to estimation in [Part 2](/en/osa2).

Scrum does not define the form in which the backlog and its requirements are presented. The established practice is to present the requirements as so-called _user stories_, which we will get to know in [Part 2](/en/osa2/#user-story).

### Product owner

The product backlog is managed by the _product owner_, who decides what can be added to the backlog and prioritises the requirements in the backlog.

According to Scrum, the product owner is a single person, not a committee. Several people may of course influence the prioritisation, but the product owner makes the final decisions on priorities.

The product owner is responsible for defining and communicating the product goal, for the backlog and thus for the direction of development, i.e. for what is being built into the application and in which order. The product owner's job is to prioritise the requirements in the product backlog so that the buyer/customer of the application gets maximal benefit from the product. To be able to do this, the product owner naturally has to communicate as widely as possible with all stakeholders of the application.

The product owner is also responsible for making sure that the developers really understand the requirements chosen for implementation.

Nowadays the product owner's job is often viewed from the perspective of _product thinking_. The key is to distinguish between the _output_, i.e. the finished features, and the _outcome_, i.e. the change in the users' behaviour or in the business that the features aim at. The number of implemented features does not yet tell whether the software has been useful. Scrum's product goal also describes a desired state and does not list features to be implemented. We will return to finding out the users' real needs in [Part 2](/en/osa2#experimental-requirements-engineering-lean-startup).

### Scrum master

Every Scrum team has a _scrum master_, a person who is responsible for making sure that the rules and spirit of Scrum are followed in the development work. The scrum master is also responsible for the effectiveness of the Scrum team. The scrum master is, however, not a traditional project manager but rather a coach who supports the team. The scrum master used to be characterised by the term _servant leader_; the 2020 Scrum Guide talks about _true leaders who serve_ the Scrum team and the wider organisation.

The scrum master's tasks include guiding the team in following good practices and encouraging and helping the team in self-management and in improving its ways of working. The scrum master also handles practical matters, e.g. organises Scrum meetings and coordinates communication with stakeholders.

Perhaps the most central task of the scrum master is to try to eliminate impediments to the development work. An impediment is often something outside the team's control, and to remove it the scrum master has to negotiate with the company's management or with other software teams. Such an impediment could also be, for example, that the development team has no access to the production environment or even to similar server environments, or that the application being developed depends on interfaces that are the responsibility of other vendors, and they are not finished on time or do not work as specified.

An "impediment" can also be related to the team's ways of working, in which case the scrum master guides the team to change its behaviour so that the impediment hurting productivity is removed.

The scrum master's job is also to give the developers peace to work and to protect the team, e.g. from outsiders' attempts to interfere with the work during the sprint.

In some situations, the scrum master helps the product owner maintain the product backlog. This is important especially if the product owner is inexperienced and does not yet know how to formulate the users' requirements for the backlog in the best possible way.

The scrum master thus does everything possible so that the team has optimal conditions for developing an application that produces value for the customer.

### Developers

The developers are the members of the Scrum team who create a usable addition to the software in every sprint. Earlier versions of the Scrum Guide talked about a separate development team, whose size was defined as 3-9 people. In the 2020 version there is only one Scrum team, whose size, including the product owner and the scrum master, is typically at most ten people. There are no sub-teams or hierarchies within the team.

Although everyone is called a developer, some team members may specialise in a particular area, e.g. testing or backend programming. The whole team, however, always shares the responsibility for the development work.

Scrum teams should be _cross-functional_, i.e. the team should contain all the skills needed for designing, implementing, testing and even operating the system in the production environment.

The teams are autonomous: the principle is that the team is not managed from the outside, but the developers decide how many requirements from the backlog are chosen for implementation in the sprint. The team also decides itself who does what, when, and how the sprint goal is reached. The 2020 Scrum Guide describes the team as _self-managing_; earlier the term _self-organizing_ was used. Autonomy alone is, however, not enough: self-management works best when the team members trust each other.

The Scrum Guide takes no position on where the team works. For a long time, the ideal was for the team to work in the same space and full-time in the same team. Nowadays more and more teams work in a hybrid or remote model, which emphasises the importance of agreed communication practices and of tools that support transparency.

### Sprint

In Scrum, development work is thus divided into iterations of at most one month, called sprints.
The length of the sprint is typically always the same within a project; nowadays the most popular sprint length is probably 2 weeks. The sprint is "time-boxed", i.e. under no circumstances is the sprint extended in the middle of the sprint. Only the product owner can cancel the sprint, if the sprint goal becomes obsolete.

At the start of each sprint, the team chooses from the project backlog the requirements to be implemented during the sprint. The backlog has been prioritised by the product owner, and the requirements are always chosen from the top of the prioritised list. In this way the product owner steers the order in which things are implemented. The developers, however, choose for the sprint only as much as they estimate they can get done.

During the sprint, the Scrum team implements the software features chosen for the sprint in a self-managing way.

The principle in Scrum is that each sprint produces at least one _increment_, a usable, finished addition to the product. So the aim of the sprint is to produce features that are ready for use, not just a pile of almost working code. Several increments may be created during a sprint, and they can be delivered to users even before the end of the sprint. The review at the end of the sprint should therefore not be seen as a gate after which releasing can finally happen.

During the sprint, no changes are made that would endanger the sprint goal, and quality is not compromised. However, the content of the sprint can be clarified and renegotiated with the product owner as more is learned about what is being implemented. The scrum master protects the team if someone from the outside tries to get the developers to do things during the sprint that are not essential for the sprint goal.

### Definition of done

One of the principles of the agile manifesto raises the quality of software as a factor that enhances agility

> Continuous attention to technical excellence and good design enhances agility.

Scrum also places great weight on the quality of the software produced. After all, each sprint must result in an increment, a finished part of the software that is ready for use.

To reach agreement on the level of quality at which the software must be implemented, Scrum defines a _definition of done_, i.e. what it means that a requirement has been implemented to completion. If the organisation has a common definition of done, it is followed; otherwise the Scrum team creates one itself. If several teams develop the same product, they share a common definition of done.

Done is most often defined to mean that the requirement has been analysed, designed, programmed, tested, the testing automated, documented, integrated into the rest of the software and deployed to the production environment. At best, then, the definition of done is defined so that when something is said to be done, there is no extra work left related to it.

When the goal at the end of the sprint is a working program, this specifically means requirements that work and are implemented to completion at the level of the definition of done. If a requirement from the backlog does not meet the definition of done, it cannot be released or even presented in the sprint review; instead it returns to the product backlog to be implemented later.

If it turns out during the sprint that the team does not have time to implement everything planned, it is not acceptable to compromise on quality; instead, some of the requirements are left for the next sprint.

The definition of done is one of the ways Scrum strives for _transparency_. Since in agile software development the most important measure of progress is finished software, it is very important that everyone has the same view of what "done" means. This is by no means self-evident if it is not precisely defined. It is quite common that when a software developer says, after two days of programming, that some feature is "almost done", it eventually takes a couple of weeks before it is completely done in the sense that the customers of the application can use the new feature.

### Sprint planning

Before each sprint, a _sprint planning_ meeting is held.

The 2020 Scrum Guide defines three topics for sprint planning: _why_ the sprint is valuable, _what_ can be done in the sprint, and _how_ the chosen work will get done.

The first topic is to find out _why_ the sprint is valuable. The product owner proposes how the sprint could increase the value of the product and advance the product goal, and the whole Scrum team formulates the _sprint goal_ together.

The second topic is to find out _what_ is done during the sprint. The product owner presents the requirements at the top of the product backlog to the team. The team must get enough clarity on the requirements to be able to estimate, at least roughly, how many resources implementing each requirement would take, since the team must estimate how many of the backlog's requirements it can implement during the sprint _at the quality defined by the definition of done_.

The sprint goal is a more general statement than the individual requirements of what the upcoming sprint aims to achieve. It gives the developers flexibility, since the work needed to reach the sprint goal can be clarified as the sprint progresses.

The third topic of the planning meeting is to find out _how_ the sprint goal will be reached.

This usually means that the team designs the requirements chosen for implementation at the necessary level. The output of this phase is often a list of tasks that must be done during the sprint in order to implement the requirements chosen for the sprint. The tasks identified during planning are recorded in the sprint backlog, the sprint's task list.

Unlike the product backlog, which is written "in the customer's language", the items in the sprint backlog are often expressed in the developers' language, and they include many technical-level things that are not yet interesting from the customer's point of view in themselves. The sprint backlog is above all a tool for organising the work of the Scrum team's developers.

The maximum length of sprint planning is 8 hours for a one-month sprint; for shorter sprints the meeting is usually shorter.

We will return to sprint planning in more detail and with concrete examples in [Part 2](/en/osa2/#sprint-planning).

### Daily scrum – the daily meeting

On every working day of the sprint, a _daily scrum_ is held, a meeting of at most 15 minutes. The meeting is intended for the developers, and it is always held at the same time and in the same place. The meeting is often held in the morning, but the Scrum Guide does not require this.

The 2020 Scrum Guide defines the purpose of the daily scrum as follows:

- The purpose of the daily scrum is to inspect progress toward the sprint goal and adapt the sprint backlog as necessary, i.e. adjust the upcoming planned work.
- The developers can select whatever structure and techniques they want for the meeting, as long as the daily scrum focuses on progress toward the sprint goal and produces an actionable plan for the next day of work.

The daily scrum is thus not just a status meeting but part of Scrum's inspect-and-adapt cycle: the state of things is inspected daily, and the development work is redirected when necessary so that the sprint goal can still be reached.

The latest Scrum Guide does not prescribe the format of the meeting, but the three-question model recommended by earlier versions of the Scrum Guide is still common. In it, each developer in turn answers the questions

- What did I accomplish since the last meeting?
- What do I intend to accomplish before the next meeting?
- What impediments are there to my progress?

The risk of this model is that the meeting turns into individual developers reporting. It is therefore a good idea to look at the questions from the perspective of the sprint goal. Talking about impediments, on the other hand, requires that team members dare to admit that they are stuck.

The meeting is meant to be short, and overly rambling discussion is not desirable. If someone has problems or impediments to progress, they are returned to in more detail after the daily scrum. According to the Scrum Guide, the developers often meet for more detailed discussions right after the daily meeting.

If there is a need for other meetings, e.g. for design or for clarifying requirements, those meetings must be held separately from the daily scrum. Scrum takes no position on other meetings during the sprint.

### Sprint review

At the end of the sprint, a sprint review is held. The review is an informal event during which the Scrum team presents what the sprint achieved to all stakeholders interested in the product being developed.

The purpose of the review is to inspect, demo and try out the implemented, working software. According to the Scrum Guide, the review is a working session and should not be limited to a presentation. So instead of a slide show, the review should show working software and discuss it.

Only features that have been completely implemented, i.e. at the level of the definition of done, are demonstrated in the review. The aim is to give as realistic a picture as possible of how the development of the application is progressing.

A common practice, although the Scrum Guide does not mention it separately, is that the product owner verifies (either in the review or before it) which of the requirements developed in the sprint have been implemented acceptably, i.e. that they work according to assumptions and expectations in addition to having been implemented at the quality level defined by the definition of done. Requirements that are not accepted as implemented are moved back to the product backlog to be finished during later sprints.

During the review, the stakeholders give feedback on the product and can, for example, suggest new requirements to be added to the product backlog. At the same time, progress towards the product goal is assessed. The review often also creates a need to partially reprioritise the product backlog.

The length of the review is also limited: at most four hours for a one-month sprint, usually less for shorter sprints.

### Retrospective

One of the principles of the agile manifesto states the following

> At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

In Scrum, the _retrospective_ held at the end of each sprint embodies this principle. Whereas the other Scrum meetings are mostly intended for examining the direction of the product, in the retrospective the Scrum team examines specifically its own working process. The maximum length of the retrospective is three hours for a one-month sprint.

The aim is to identify what went well and where there is room for improvement. The meeting comes up with solutions to some of the problem areas, which the team tries to fix during the next sprint. A retrospective is only useful when problems can be raised without looking for someone to blame: the focus is on the process, not on individual people.

Over time, [numerous techniques](https://retrospectivewiki.org) have been developed for holding retrospectives, and e.g. [Retromat](https://retromat.org/) collects hundreds of ready-made retrospective exercises. We will return to them in the exercises.

### Principles of Scrum: transparency - inspection - adaptation

As mentioned earlier, there are three principles behind Scrum: transparency, inspection and adaptation. The retrospective is specifically a tool for inspecting and adapting the _development process_.

Inspecting the _product being developed_ and adapting its direction is supported by several Scrum tools. These include, for example, the short development cycle proceeding in sprints, the product backlog, which can be reprioritised when necessary, and the regular meetings. 

Inspection and adaptation are made possible by transparency: things are not hidden, but the direction of the product's development, the definition of done and the status of the ongoing sprint are kept openly visible to everyone all the time, and things are discussed both sprint by sprint and daily.

In other words, the transparency of things makes their continuous inspection possible, and as a result both the ways of working and the product being developed can be adapted in the desired direction.

![]({{ "/images/2-2.png" | relative_url }})

### Scrum values

The Scrum guide also highlights a set of _values_ as an essential factor in making the right kind of mindset for effective software development possible.

> When these values are embodied by the Scrum Team and the people they work with, the empirical Scrum pillars of transparency, inspection, and adaptation come to life building trust.

There are five values: _commitment_, _focus_, _openness_, _respect_ and _courage_.

The team must be _committed_ to achieving a common goal and _focus_ on doing the right things. There must also be the _courage_ to make decisions and to face even the hardest issues, i.e. to be open about both successes and problems, while _respecting_ all team members and the stakeholders of the software at all times.

[A Scrum book](https://pragprog.com/titles/jcscrum/a-scrum-book/), published in autumn 2019, states that the values create _fertile soil_ that allows software development to flourish.

So Scrum must under no circumstances be slavish adherence to the instructions of the Scrum Guide. For Scrum to work, a suitable attitude and orientation are needed in applying it. The nature of Scrum, based on inspection and adaptation, even leads to teams acting against some of Scrum's guidelines at some point, if the team's optimal functioning requires it.

### Psychological safety

Of the Scrum values, openness, respect and courage lead to honest and transparent communication and interaction. If, however, the values are not realised in the team, it is hard for a single person to strive for them. This phenomenon is described by the concept of _psychological safety_, which Amy Edmondson [defined in 1999](https://doi.org/10.2307/2666999) as a shared belief held by members of a team that the team is safe for interpersonal risk taking. Such risks include, for example, asking questions, admitting one's own lack of knowledge or a mistake, expressing a dissenting opinion and raising problems. Psychological safety does not mean that everyone always agrees, but that people dare to talk about disagreement. For example, in Google's [study](https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness) of the effectiveness of its own teams, psychological safety was found to be the most important factor in team success.

Agile practices and psychological safety reinforce each other. The retrospective and the daily scrum require that people dare to talk about problems in them, and on the other hand the practices themselves build safety. In agile software teams, psychological safety is supported especially by avoiding blame (no blame), i.e. seeing mistakes as problems of the process rather than of individuals, by shared decision-making, and by openness to feedback and criticism. Psychological safety cannot be demanded or forced; it is built on trust in the team members.

What matters a lot for psychological safety is how the team is led. Leadership is not only the job of a manager or a scrum master. In a self-managing team, leadership happens all the time, e.g. when someone runs a meeting, proposes a solution or takes responsibility for handling something, and everyone's behaviour in these situations affects whether others dare to speak up. Safety is also needed in the other direction: taking the initiative is a risk, and it feels natural mainly when others appreciate it. Team members do not have to be friends, but they must respect each other in order to trust each other.

### Problems of Scrum

In many places, Scrum has proven to be a better way of developing software than the waterfall model or other plan-driven models. Scrum is, however, no [silver bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet), i.e. a universal recipe that would solve all the problems of software development, and as the use of Scrum becomes more common, the number of failed Scrum projects also grows.

One reason for the problems is said to be [ScrumBut](https://www.scrum.org/resources/what-scrumbut):

- We use Scrum, but having a Daily Scrum every day is too much overhead, so we only have one per week.
- We use Scrum, but Retrospectives are a waste of time, so we don't do them.
- We use Scrum, but we can't build a piece of functionality in two weeks, so our Sprints are 3 months long

ScrumBut thus refers to following some parts of Scrum but making really big compromises on some essential parts, so that the principles of transparency, inspection or adaptation are compromised too much.

Distributed software development, the use of subcontractors and projects of massive scale still pose challenges for Scrum and other agile methods, although a lot of attention has since been paid to them. [Uncle Bob Martin's criticism of Scrum](https://www.infoq.com/news/2010/02/scrum-failings) raises these and a few other essential points, which can be summarised in four items:

- _Technical practices are missing_: Scrum is a project management framework, and it gives no technical recommendations, e.g. about automated testing.
- _The role of the scrum master_: a certified scrum master can turn into a micromanaging project manager.
- _The limits of self-management and scaling_: Scrum overemphasises the self-management of teams and does not say how to work with several teams.
- _Managing the product backlog_: Scrum gives too little guidance on organising the product backlog.

Because Scrum takes no position on the _technical principles_ of software development, there is a big risk that not enough attention is paid to the internal quality of the application, which in turn may erode agility. Development may progress quickly at first, but slows down over time as the application's technical debt makes extending it ever harder. This risk is raised especially if the project has no automated tests. Scrum takes no position on testing the application.

Martin considers the role of the scrum master problematic in many ways. First, he is bothered by the certification system: scrum masters are fast-trained in courses of a couple of days, and sometimes the scrum master is a person who previously held the title of project manager. Even though the certificate has been earned, the person's way of working may not have changed in any way other than the new terminology.

Although Martin fears that scrum masters are often just managers in disguise, he also considers it problematic that Scrum assumes teams to be fully self-organising. Self-organisation works in many contexts and for some teams, but it has its limits; especially if several Scrum teams are building the product, relying on self-organisation alone can lead to problems.

Managing a complicated product is complex, yet Scrum takes no position whatsoever on organising the product backlog and leaves the developers on their own in this respect.

Uncle Bob's criticism is from 2010, but it is still largely valid. Later criticism has been presented by, among others, Ron Jeffries, a signatory of the agile manifesto, who describes in his essay [Dark Scrum](https://ronjeffries.com/articles/016-09ff/defense/) (2016) how Scrum easily becomes a tool for management to control developers. In the 2020s, many companies have also reduced separate scrum master and agile coach roles and moved their tasks to teams and managers. From the perspective of psychological safety, excessive control also weakens the team's agility, since people no longer dare to talk openly about problems and mistakes.

The [Scaled agile framework, or SAFe](https://framework.scaledagile.com/), which has become popular alongside Scrum especially in Finland, in fact offers many remedies for the problems raised by Martin as well. SAFe has, however, also received strong criticism, and even authoritative figures (such as Ken Schwaber, the developer of Scrum, in his post [unSAFe at any speed](https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/)) have even questioned the agility of the method. We will take a superficial look at SAFe in [Part 5](/en/osa5/#large-scale-agile-methods).

Scrum, like other agile ways of development, has largely emerged among software developers. A fairly commonly reported problem when moving to agile development is that the rest of the organisation stays completely the same. The result is often a development model that has been given the name [waterscrumfall](https://www.infoq.com/news/2011/12/water-scrum-fall-is-the-norm/), where only the development of new features of the program follows Scrum, while budgeting, requirements management and deployment to production still follow the old controlled processes.

Let us conclude our preliminary look at Scrum with the apt summary from earlier versions of the Scrum Guide:
_Scrum is easy to understand but extremely difficult to master_.

## Large language models in software development

Tools based on large language models, such as [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/) and GitHub [Copilot](https://github.com/features/copilot), have changed software development rapidly. From the early code completion and chat interfaces, we have moved on to _agents_ (e.g. Copilot's Agent mode, Claude Code and Cursor), which can independently make changes spanning several files, run code and tests, and fix their own work based on error messages.

I myself use [Claude Code](https://claude.com/product/claude-code) when coding, but since it is a paid tool, the course uses GitHub Copilot, which is natively integrated into VS Code. University students can get the Copilot Student version for free through GitHub [Education](https://github.com/education/students). Alternatively, you can do the exercises with the open source [OpenCode](/en/opencode/) agent using the CurreChat language models.

Perhaps the biggest problem of language models is hallucination: they sometimes generate answers that look completely convincing but are in fact total nonsense. In programming, hallucinated code is often caught quickly if the code does not work. When using agents, hallucination in programming is indeed fairly rare nowadays, since the agent runs the code and tests itself and fixes errors based on them. More problematic are situations where AI-generated code seems to work but contains bugs or security vulnerabilities that are harder to detect. If no attention is paid to this, AI also often writes new code instead of reusing existing code, which can lead to the codebase deteriorating. The risks are summarised in more detail in the [AI material](/en/genai/#risks-summarised).

So when using AI, the responsibility always remains with the programmer.

Research on the effect of AI on productivity is contradictory, and the results become outdated quickly as the tools develop. A central conclusion of Google's [DORA report](https://dora.dev/research/2025/dora-report/) (2025) is that AI works as an _amplifier_: it improves the performance of well-functioning teams, but it also amplifies the problems of poorly functioning organisations. The topics covered on this course, such as requirements management, automated testing, continuous integration and good software design, are thus even more important in the age of AI. More on this in the [AI material](/en/genai/#ai-and-the-software-development-process).

The rapid development of language models puts a programming student in a challenging position: is it worth it, or even necessary, to learn programming at all anymore, when an agent writes code faster than a human?

When writing code becomes cheap, what becomes more valuable is what the agent cannot do for us. The most important of these is setting the direction. An agent skilfully implements what it is told, but it does not know what would be worth doing. Humans are needed to find out what the customer really needs, to prioritise what to do and to assess whether the software produces value for the customer. An agent that produces code quickly is useless if it builds the wrong thing.

Deep technical skills are still needed. An agent's output is increasingly assessed through tests, the working application and design decisions rather than only by reading the code line by line, but that too requires an understanding of how software is built and what a good solution looks like. Without this understanding, you also cannot steer the agent in the right direction. So learning programming is still worth it, but the focus shifts from producing lines of code to managing the whole: designing software, assessing solutions and ensuring quality.

Using AI in software engineering is covered in more detail in the separate material [AI in software engineering](/en/genai/), which progresses week by week at the pace of the [AI] exercises.
