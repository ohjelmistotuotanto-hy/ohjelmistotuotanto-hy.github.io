---
layout: page
title: Part 5
title_long: 'Lean, scaling agile software development and agile software development in the light of research'
inheader: yes
permalink: /en/osa5/
source: osa5.md
source_commit: 85a3af3
---

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
  />
</a>

{% include en/miniproj_ilmo.md %}

The fifth week of the course covers three topics: the Lean philosophy, which has strongly influenced agile software development; scaling agile methods to larger projects; and various statistics and research findings on the use and benefits of agile methods.

## Typos in the material

{% include en/typo_instructions.md path="/osa5.md" %}

{% include en/norppa.md %}

## Lean

The concept of _Lean_ has already come up a few times during the course, so let us now take a closer look at what it is about.

### Background

Lean originates from Toyota's production and product development methods, and its roots can be traced back to the first half of the 20th century.

After the Second World War, Japan experienced a big reconstruction boom, but capital and raw materials were scarce. It was observed that improving quality raises productivity: the fewer defects and problems there are in products and production processes, the more productivity grows, which in turn leads to a larger market share and thereby to new jobs. A strong culture emphasising quality developed in Japanese companies.

The scarcity of resources led Toyota to develop the so-called _Just In Time (JIT)_ production model, where the ideal is to start manufacturing a product only once the buyer has already ordered it. The opposite is traditional mass production, where products are manufactured in advance in large quantities into inventory. The aim was to get the product to the consumer as quickly as possible after the order, i.e. to have the shortest possible _lead time_ from order to delivery.

The JIT production model brought many benefits. It was easy to adapt to changing customer needs, unlike in mass production, where products made into inventory had to be sold even if customers no longer wanted them. Because the lead time from order to customer was short, quality problems were revealed quickly,
unlike with products that might sit in inventory for months.

Mass production aimed to optimise the output of individual workers and machines, the ideal being that machines are utilised at 100% all the time. In Toyota's JIT production model, on the other hand, the target of optimisation became the lead time of the product. The aim was to eliminate all possible _waste_ that did not contribute to the fast _flow_ of the work, i.e. the product being manufactured, from order to customer. Factors hindering the flow, such as quality problems or suboptimal ways of working, were addressed immediately.

Unlike traditional mass production, Toyota also adopted a culture of optimising production that respects, listens to and _empowers_ its employees. Continuous improvement of ways of working at the level of the entire staff became an important principle. In practice, every employee was entitled and even obliged to, for example, stop the entire production line as soon as they noticed a problem.

#### Toyota production system, TPS

From 1965 onwards, Toyota began calling its way of working the [Toyota Production System](https://global.toyota/en/company/vision-and-philosophy/production-system/) (TPS). The first English-language publications on the subject date from 1977. Toyota's success aroused interest in the West, and at the end of the 1980s researchers at [MIT](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology) began to survey and document Toyota's production system in more detail. One of them, John Krafcik, introduced in his 1988 article _Triumph of the Lean Production System_ the term _lean_ production to describe the philosophy behind TPS.

In 1990, the book [The Machine That Changed the World](<https://en.wikipedia.org/wiki/The_Machine_That_Changed_the_World_(book)>) was published, bringing lean to wider awareness in the West.

During the last 30 years, a large number of books describing Toyota's production system have been published. One of the most famous and influential of these is [Jeffrey Liker's The Toyota Way](https://www.amazon.com/Toyota-Way-Management-Principles-Manufacturer/dp/0071392319) (2004).

Originally, lean at Toyota was a way of working that optimised car _production_. Later, lean has also been applied to product _development_. Production and product development are very different in nature, and the lean practices applied to them differ in many respects.

Lean has been applied to numerous different fields. It was introduced to software development by Mary and Tom Poppendieck's book [Lean software development, an agile toolkit](https://www.amazon.com/Lean-Software-Development-Agile-Toolkit/dp/0321150783), published in 2003. Despite its status as a classic, the book is outdated in places and interprets lean rather narrowly at times. The creators of Scrum, Ken Schwaber and Jeff Sutherland, were also very familiar with lean thinking, and many features of Scrum have been influenced by lean.

Lean has been applied to more and more things, from healthcare to bakeries and banking, as well as in public administration and universities. Lean, or the most diverse things sold under the lean label, have started to live a life of their own, separate from the Toyota production system, and nowadays it is sometimes hard to say what exactly someone means when they talk about lean.

In the following, we discuss lean in more detail based on Craig Larman and Bas Vodde's excellent book [Scaling Lean and Agile Development](https://www.amazon.com/Scaling-Lean-Agile-Development-Organizational/dp/0321480961). The chapter of the book that introduces lean is freely available [here](https://www.leanprimer.com/downloads/lean_primer.pdf). The chapter presents specifically the modern form of the Toyota production system.

### The goal, foundation and pillars of lean

In many sources, lean is illustrated with a diagram called the _lean thinking house_:

![]({{ "/images/5-1.png" | relative_url }}){:height="550px" }

Lean has a _goal_ located on the "top floor of the house", a _foundation_, two _pillars_ and a set of _principles_ supporting them (the 14 principles and the product development principles). In addition, there is a set of tools supporting lean, the most famous of which is probably Kanban, which has also been mentioned during the course.

The goal of lean is _to achieve a sustainable, fast way of getting "from idea to a product sold to the customer" without exploiting employees or partners, while maintaining a high level of quality and customer satisfaction._

For the goal to be possible, there must be a long-term-oriented lean way of working deeply rooted at all levels of the company, which managers apply and teach to their subordinates. This is called the _foundation of lean_.

The two pillars of lean are _continuous improvement_ and _respect for people_.

_Continuous improvement_ fundamentally defines Toyota's entire organisational culture, at the core of which is a willingness to learn and an atmosphere that encourages making changes. Katsuaki Watanabe, Toyota's president in 2005–2009, sums it up as follows:

> _The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, "Why are we doing this?"._

An atmosphere that encourages continuous learning and improvement is, in turn, only possible if all activity is based on _respect for people_. This means many concrete things, such as listening to, empowering and mentoring employees, and a meaningful and safe work environment. Toyota extends the principle to cover suppliers and end customers as well. For example, Toyota builds genuine partnerships with its suppliers that benefit both parties, and teaches lean thinking to its suppliers.

All this sounds abstract, and hopefully it becomes a bit more concrete when we shortly discuss the _lean principles_ that build on the goal and pillars of lean and guide lean work more concretely.

### Continuous improvement – value and waste

[Taiichi Ohno](https://en.wikipedia.org/wiki/Taiichi_Ohno), the developer of the Toyota production system, describes the principle of continuous improvement as follows:

> All we are doing is looking at the time line, from the moment the customer gives us an order to the point where we collect the cash. And we are reducing the time line by reducing the non-value-adding wastes.

According to Ohno, the way to achieve a faster production cycle is thus to eliminate things that do not produce _value_, i.e. _waste_.

What exactly does lean mean by value and waste? Value refers to the things and work steps that the customer is willing to pay for, i.e. those that benefit the customer. Waste, on the other hand, refers to everything related to production that does not bring direct or indirect value to the customer.

According to lean, there are three different types of waste: muri, mura and muda.

Let us first look at the clearest of these, _muda_-type waste. Lean originally identifies 7 sources of muda waste:

- over production
- in-process inventory
- over/extra processing
- transportation
- motion
- waiting
- defects

Originally these were types of waste related to car manufacturing production lines. Let us now go through the concepts while interpreting them in the context of software development.

#### Over production

Products should be manufactured only to the extent that the customer has ordered them, i.e. it does not pay to produce for inventory. Products made for inventory are problematic in many ways. They tie up capital and may also contain systematic defects that are noticed only when the products are taken into use.

Extra features of software can be thought of as over production. According to an often repeated claim, as much as [64% of software features](https://www.mountaingoatsoftware.com/agile/are-64-of-features-really-rarely-or-never-used) are either never or only very rarely used. The figure comes from a 2002 presentation by Jim Johnson of the Standish Group, and it was based on only four internal company applications, so it should not be generalised. The phenomenon is nevertheless familiar: a significant share of implemented features see little use. Implementing extra features costs money and increases the amount of code, which in turn makes further development harder.

#### In-process inventory

This category includes partially completed work and its storage, e.g. components that have no use yet. The problems are the same as with over production.

In software development, in-process inventory includes, for example, overly detailed requirements specifications for features that will not be implemented for a while, finished code that has not yet been tested or deployed, or code that implements features the customer _might_ want sometime in the future. In AI-assisted software development, a new kind of in-process inventory is pull requests that coding agents produce faster than the team can review them, see [AI and the software development process](/en/genai/#ai-and-the-software-development-process).

#### Over/extra processing

All extra work steps that are not necessary for a result of sufficient quality are also waste.

These include, for example, work steps forced by the process that have no significance for the end result, such as a mandatory design document that nobody ends up needing. A similarly harmful thing can be a requirement that the line coverage of tests must be 100%, since this can lead to writing almost useless tests that only increase coverage.

In some cases, code written with too high quality can also be considered over processing. If, for example, you are building an MVP to validate the usefulness of some feature ([see part 2](/en/osa2/#experimental-requirements-engineering-lean-startup)), it makes sense to implement it with lower quality than normal production code, and, for example, automated testing can be left out. When implementing an MVP, it is thus usually worth taking on [technical debt](/en/osa4/#technical-debt), which may then have to be paid back if it is decided that the feature implemented by the MVP stays in the system.

#### Transportation

Raw materials needed to make the product, or a partially completed product, should not have to be moved unnecessarily from one place to another.

In the context of software development, this means that the software being developed should be specified, designed, implemented, tested and deployed to production by a single team. So-called "handoffs", where for example the implemented software is passed from the development team to a separate team (e.g. a QA team) for testing, are considered waste.

#### Motion

Production equipment and materials should be arranged so that employees do not need to make extra movements or walk between workstations while manufacturing the product.

In software development, unnecessary motion has been interpreted as _task switching_, i.e. switching too rapidly between different tasks, e.g. working on many projects at the same time.

#### Waiting

Unnecessary waiting is, for example, time spent waiting for necessary raw materials to arrive, or for some piece of production equipment to become free from other use.

In the context of software development, unnecessary waiting happens when you have to wait for company management to approve the requirements specification, for testers to have time to test a new version of the program, for operations to deploy a new version of the application to production, for someone to merge a pull request...

#### Defects

If a systematic defect caused by the production line is not noticed in time, large quantities of defective products/components may be manufactured. It is even worse if defective products reach consumers. Replacing or repairing them is expensive, and the damage to the company's image is potentially large. If defects do occur, it is essential to detect and fix them as quickly as possible.

In software development, defects almost inevitably creep into the product, and it is cost-effective to carry out quality assurance as early as possible.

These original 7 muda wastes, adapted to the context of car manufacturing decades ago, have been reinterpreted for ever new contexts, such as software development.

Over the years, new forms of waste have also been proposed. One of these, _under-utilising people's potential_, has become fairly established. In English, this form of waste is described as _Under-realizing people’s potential and varied skill, insight, ideas, suggestion._

#### Muri- and mura-type waste

The various forms of _muda_-type waste just discussed are the most prominent of lean's forms of waste, and some sources do not even mention the two other types of waste, _mura_ and _muri_.

_Mura_-type waste is unevenness, non-uniformity or irregularity in ways of working or in the product being worked on.

In software development, for example, a greatly varying size of the user stories being implemented is mura-type waste, which may result in _muda_-type waste, e.g. a need for in-process inventory. This in turn weakens the flow of value, i.e. how long it takes for a user story to go from being placed in the backlog to being a finished part of the product.

The third type of waste, _muri_, means overburden or impossible demands (unreasonableness, impossible, too difficult). Thinking of a car production line, for example, running machines at 100% capacity without regular maintenance can be classified as muri. Interpreted for software development, muri could be, for example, overloading the staff. Muri-type waste, e.g. overloading the staff, is likely to result in muda, e.g. defects in the product.

### Kaizen

The idea of continuous improvement is thus to optimise operations by eliminating waste that does not produce value for the customer. Continuous improvement is often referred to by its Japanese name _kaizen_, which is a comprehensive philosophy concerning all employees:

> As a mindset, it suggests "My work is to do my work and to improve my work" and "continuously improve for its own sake."

Kaizen is also a concrete way of working:

- choose some technique/way of working and commit to following it for some time
- once the activity has stabilised, examine how well the chosen way of working works, optimise it with respect to the observed shortcomings, and thereby create a new standard way of working
- repeat this cycle forever...

Kaizen's cyclical improvement process often involves events held at regular intervals, so-called "kaizen events". Scrum's retrospectives are a classic example of kaizen events.

#### Lean tool: value stream mapping

A technique called [value stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping) is often used to find and map waste. The idea is to describe the product's path through the work steps of the process used, and to visualise the work steps that produce value for the product in relation to the product's entire manufacturing life cycle.

![]({{ "/images/5-2.png" | relative_url }}){:height="400px" }

The figure shows six work steps that a product, e.g. a user story, passes through. The time spent in each work step can be thought of as increasing the value of the work, e.g. the step _code and test_ takes 2 hours, which is necessary for the story to be released at all. Between the work steps, the story is in _in-process inventory_, waiting for the next work step, and in-process inventory is a form of waste. The purpose of value stream mapping is thus to bring out all the "in-process inventories", unnecessary waiting and unnecessary work steps, so that it is possible to think about how to minimise them.

The idea of value stream mapping has been extended to continuous monitoring of software development, called _value stream management_. The best-known example is the [Flow Framework](https://flowframework.org/) presented in Mik Kersten's book [Project to Product](https://itrevolution.com/product/project-to-product/) (2018). In it, work is divided into four types (new features, defects, risks and technical debt), and their flow is measured with metrics similar to the flow metrics presented in [part 2](/en/osa2/#limiting-work-in-progress). Particularly telling is _flow efficiency_: how large a share of the lead time is spent on really working on the item. Often it is only a fraction, and the rest of the time is spent waiting, i.e. exactly the waste that a value stream map tries to make visible.

#### Lean tool: root cause analysis - five whys

If value stream mapping or some other method reveals waste in the production process, i.e. things that do not produce value, the aim is to get rid of it. However, the purpose of continuous improvement, or kaizen, is not to treat mere symptoms, but to perform a _root cause analysis_ of the observed waste and thereby aim for more lasting and effective improvements.

One root cause analysis technique is [five whys](https://en.wikipedia.org/wiki/Five_whys), whose operation is easiest to illustrate with an example.

From the _value stream map_ in the previous figure, we notice that it takes 1.5 weeks from the code being completed (code and test) to getting it into production (deploy).

- **Why?** The QA department still has to verify that the code works in the staging environment.
- **Why?** The programmers do not have time to test the code themselves in the staging environment.
- **Why?** The programmers are busy implementing the user stories that are the goal of the sprint.
- **Why?** Bug fixes for the stories done during previous sprints take a surprising amount of time.
- **Why?** There is never time to do quality assurance properly in the sprint in which the stories are implemented.
- **Why?** Too many user stories are always taken into the sprints.

By repeatedly asking _why_ in this way (about five times), it is possible to get to the root cause of the problem, i.e. to the place where fixing things will hopefully eliminate the waste. The six why questions of the example thus reveal that the root cause of the problem is that _too many user stories are always taken into the sprints_, so to eliminate the waste it is probably best to start by reducing the amount of work in the sprints.

In fact, it would have been good to ask at least one more _why_. What matters for the root cause is why too many stories are taken into the sprints. Is it due to the development team itself or to forces outside the team?

The root cause is sought in the process, not in individual people. If the questioning ends with the answer "because someone made a mistake" or "because someone fell ill", it is worth asking once more why the process allowed the situation. Suppose, for example, that a team member falls ill and the work they were responsible for is left completely undone. Falling ill cannot be prevented, but the process should have guided them to report the absence right away. The team could then have reprioritised the work, and even if something had still been left undone, it would have been the least important thing. The same principle is followed in the software industry in so-called [blameless postmortems](/en/osa3/#canary-release) (see also [Google's description](https://sre.google/sre-book/postmortem-culture/)), where production incidents are reviewed without looking for culprits.

### Lean principles: pull system

The aim of lean is thus to optimise the time it takes from ordering a product to delivering it to the customer. The aim is to get value to _flow_ to the customer without unnecessary delays and work steps. The value stream map presented above thus visualises specifically the flow of value.

Lean's mechanism for optimising flow is the use of _pull systems_. A pull system is a production control method in which products, or the components needed by products, are made only when a customer order requires them. The opposite of this is a _push system_, where products and components are made in advance for inventory in the hope that they will sell.

For example, pizzerias work according to the pull principle: a pizza is made only when a customer orders it. Unicafe, on the other hand, is a push system: lunches are made in advance in the hope that customers will buy them.

The [chapter](/en/osa5#background) on the background of lean talked about the Just in time (JIT) production model. In practice, a pull system is a mechanism for implementing the JIT production model.

#### Kanban

A pull system is often implemented with [kanban](https://en.wikipedia.org/wiki/Kanban). The Japanese word kanban means a signal card, in English "card you can see". Kanban implements _visual control_, which makes it easy for employees to know what to do next.

When a customer orders a product, a kanban card corresponding to the order is taken to the factory.
If manufacturing the product requires, say, five different components, the components are "ordered" from the workstations that manufacture them by taking a kanban card corresponding to the order of each component to them. If manufacturing the components requires some other components, those are ordered on the same principle. When a component is ready, it is taken to whoever ordered it. At the same time, the kanban card is returned for making future orders.

Only a limited number of kanban cards are in use. This controls that too much work cannot pile up in any stage of production. In this way, kanban is used to "pull" the necessary components, instead of manufacturing large quantities of components into inventory in advance just in case.

As already mentioned, components made for in-process inventory are one form of lean waste. Stored components tie up capital, and if not enough orders come in, they may never be needed. In-process inventory may also delay the discovery of defects: if components had a manufacturing defect, it might take a long time before the defect was revealed, and large quantities of defective components might have already been manufactured into inventory.

In practice, production working on the pull principle may maintain small in-process inventories in order to optimise the lead time needed to manufacture the product.

#### Kanban in software development

Kanban has also been widely adopted in agile software development; it was already touched upon in [part 2](/en/osa2/#limiting-work-in-progress). In its principles, kanban in software development is somewhat different from the kanban used in traditional production.

A feature to be implemented, e.g. a user story or one of its technical tasks, corresponds to a kanban card that moves through the different work steps.

Flow, i.e. getting an individual story completed quickly, is achieved by limiting the amount of work in progress in certain work steps by setting _work in progress_ (WIP) limits.

The kanban board in the figure below is divided into three work steps, _analysis, develop, test_, each of which has a WIP limit. In-process inventories, _dev ready_ and _build ready_, have also been placed between the work steps, and they too have WIP limits.

![]({{ "/images/5-3.png" | relative_url }}){:height="400px" }

The kanban board in the figure allows a maximum of twenty user stories to be placed on it. When a story has passed through all the work steps, new capacity is freed on the kanban board, and the product owner can place the next story to be implemented in the _input queue_ step.

The WIP limits of the kanban board in the figure are not very strict, i.e. the amount of work in progress is quite large, at most 15 stories. Since lean considers work in progress to be waste (in-process inventory), the _flow of value_ on the kanban board in the figure is not very optimal. By lowering the WIP limits and removing in-process inventories, it might be possible to optimise the _lead time_, i.e. the time from when a user story is "ordered" until the feature it defines is ready.

The lean ideal would be so-called _one piece flow_, i.e. working so that each user story is completed in its entirety before starting the next one. This principle is applied in many places, but if the work is poorly organised, the principle can lead to too low _utilisation_. In practice this means that several people within the software team have to wait for others before they can continue their own work. For this reason, in most cases the team works on several stories at the same time instead of one. Finding suitable WIP limits thus always requires team-specific judgement and adaptation.

### Lean principles

For a pull system to work well, i.e. for customer value to flow evenly, it is beneficial if the durations of the different work steps do not vary too much. This relates to the lean principle _level the work_. Indeed, one of the three forms of lean waste was _mura_, i.e. irregularity or non-uniformity. A large variance in the duration of work steps or, in the context of software development, in the size of the user stories being implemented is one manifestation of this.

One cause of variance is defects. Lean principles therefore include _Stop and fix_ and _build quality in_.

_Stop and fix_ refers to an old Toyota principle under which anyone is obliged to stop the production line when they notice a defect, for example a damaged component. The principle requires that whoever stops the line is thanked rather than blamed. Otherwise people start to keep quiet about problems.

When the production line is stopped, the _root cause_ of the defect must be found out as quickly as possible (for example with the five whys method just covered), and the aim is to eliminate the possibility of the defect in the future, i.e. production must have quality built in, _build quality in_.

Of the practices of software development, automated testing and continuous integration can be seen as direct manifestations of the _stop and fix_ and _build quality in_ principles.

Traditional mass production focuses on keeping production equipment running at maximum capacity and employees busy all the time. The pay of individual employees is also often based on performance bonuses. The idea is that this makes the unit price of products as low as possible and maximises the company's productivity.

Instead of looking at the efficiency of individual employees and machines, lean focuses on the holistic development of systems by optimising the flow of value, and assumes that this is more profitable for the company in the long run. This is summed up in the principle _long term philosophy_.

For example, a high utilisation rate of an individual machine or rewarding individual performance can be _local optimisation_, which may even be harmful for the company as a whole. It may lead, for example, to manufacturing a lot of components that are never needed in the end. By focusing on the flow of value from order to customer instead of the performance of individual production equipment, people or teams, improvement efforts aim to take into account the bottlenecks of the entire production system.

There are far too many notorious examples of local optimisation, such as savings on premises costs made by different university departments. The rent the university pays for its buildings remains the same even if some department "saves" by leaving premises unused.

In pull systems, decisions related to production (e.g. how much of a product and the components it needs should be manufactured) are not usually made too early, but only when needed. In English this late decision making is characterised as _commit at the last responsible moment_, i.e. decisions are delayed, but not for so long that the delay causes problems. This is summed up in the principle _decide as late as possible_.

When a decision is made late, the significant advantage is that the maximum amount of information is available to support the decision, unlike with decisions made too early in advance, which are more speculative.

Once the decisions have been made, you act as quickly as possible in the spirit of the pull system, i.e.
_implement rapidly_ or _deliver as fast as possible_, so that value flows to the customer without unnecessary delays.

The faster value can be made to flow, the more decisions can be delayed and the better the information in light of which decisions can be made.

### The flow of value in agile software development

The application of the above principles is clearly visible in agile software development. Requirements are managed with a product backlog, which at its best is [DEEP](/en/osa2#a-good-product-backlog-is-deep), i.e. Detailed appropriately, emergent, estimated, prioritized.

Low-priority user stories are not defined in much detail. When the product owner selects a story to be implemented in the next sprint, the story's acceptance criteria are defined and its implementation is designed. Detailed requirements are thus not defined speculatively but _at the last responsible moment_. The stories selected for the sprint are completed during the sprint, i.e. _deliver as fast as possible_.

Scrum can thus be seen as a lean _pull system_, where each sprint takes in, one sprint at a time, the orders defined by the customer's representative at the last moment (i.e. in sprint planning at the latest), which are implemented as quickly as possible, i.e. during the sprint. Value, i.e. new features implemented to a working state, flows to the customer in the rhythm defined by the sprints.

In agile software development, the flow of value has been made more efficient with many different methods. Originally, and partly still, Scrum's aim is to release new features to production sprint by sprint, i.e. every few weeks. From the 2010s onwards, the cycle has been shortened: [continuous deployment](/en/osa3#continuous-deployment-and-delivery) can mean that even every commit leads to a release of a new version of the program, i.e. new value-producing features may appear in the software even dozens of times a day.

Scrum limits the amount of work in progress (which is one form of lean waste) by taking only as many user stories into the sprint as the team's velocity allows. A time-boxed sprint is not meaningful in every context, for example when applying continuous deployment.

In some places, there has therefore been a move to a "purer" pull system, where user stories are implemented one (or a slightly larger number) at a time as quickly as possible. When a story is completed, i.e. production capacity is freed, the product owner selects the next most important story, which is then defined, designed and implemented immediately from start to finish. Flow is ensured by having only one or at most a few user stories in progress at the same time. The Scrumban method mentioned in [part 2](/en/osa2/#limiting-work-in-progress) works largely in exactly this way.

### Growing into lean and the principles of leadership

At Toyota, most new employees are carefully trained to become familiar with the principles of lean thinking at a practical level. During several months of training, new employees work in many different jobs and are taught to recognise lean waste in its various forms. The purpose is to internalise the mentality of continuous improvement, or kaizen.

At the centre of Toyota's management culture are leaders/managers who act as teachers, mentors and coaches of lean thinking. The principle _grow leaders_ describes Toyota's way of growing managers who internalise the lean philosophy.

The principle _my manager can do my job better than me_ describes how managers are people who have grown into new responsibilities through different jobs within the company, and who also master the _hands on_ work that the employees are responsible for. Managers are primarily teachers and mentors of lean practices working on the front line.

One important principle of lean leadership is _go see_ (in Japanese genchi genbutsu): employees, and especially managers, should "see things with their own eyes" and not just sit at their desks reading facts reported by others. This relates to the ideal that managers are expected to _lead from the front line_ (in Japanese gemba), i.e. where the work is really done.

In the words of T. Ohno, the developer of the Toyota production system:

> You can’t come up with useful kaizen sitting at your desk... We have too many people these days who don’t understand the workplace. They think a lot, but they don’t see. I urge you to make a special effort to see what’s happening in the workplace. That’s where the facts are.

The role of the Scrum Master is partly in line with the ideals of lean leadership. However, the principle _my manager can do my job better than me_ does not apply to most Scrum Masters. In many development teams, the technical side of leadership is represented by more experienced employees acting as mentors, with titles such as lead developer or senior developer.

### Principles of lean product development

When lean is applied to _production_, the main focus is on improving operations by eliminating waste.

When lean is applied to _product development_ instead of optimising production, e.g. to designing entirely new car models, entirely new principles come up. The central idea in Toyota's product development is _out-learn the competitors, through generating more useful knowledge and using and remembering it effectively._

In lean product development, besides making operations more efficient, the focus is on _amplifying learning_ (_amplify learning_). It pays to aim for as _high-value information_ as possible, e.g. by paying attention to things that involve a lot of uncertainty (_focus on uncertain things_). Ideas that are uncertain and involve a high technical risk should be implemented/tested quickly, since delayed information about them has a high price (_cost of delay_).

One mechanism of lean product development for speeding up learning is _set based concurrent
development_. If the aim is to develop, say, a new engine cooling system, several alternative solutions are developed at the same time by different teams. The solutions being developed are compared at regular intervals, and some of them are eliminated. Finally, the solution that proves to be the best is selected for use in the final product.

The set based development method is radically different from the commonly applied _iterative_ development method, where the starting point is a single solution that is improved step by step.

In software development, the set based development method is applied fairly rarely, mainly in user interface design by initially presenting the customer with several parallel proposals for a possible user interface solution.

At Toyota, product development is led by a _chief engineer_ (in Japanese _shusa_), who is responsible for both the technical and the business success of the products. This is a typical lean leader working on the front line, who knows the practical work thoroughly but is also very close to the customer. Because of the technical background, the role differs from Scrum's _product owner_.

### Applying lean to different fields

Since the 1990s, lean has attracted great interest around the world, and attempts have been made to apply it in almost all fields, including software development. Lean principles were well known, for example, to the creators of Scrum, and although the original sources of Scrum do not use lean terminology, Scrum has lean features in many places.

The later development of agile methods has taken certain ideas, for example minimising the lead times of user stories, considerably further than the practices of Scrum and the early days of agile. There is indeed a lot of talk about lean software development.

Both agile methods and lean share the same fundamental principle: _continuous improvement of operations_. The line between lean and agile is not at all clear, and it is partly completely artificial. For example, the creators of Scrum certainly did not intend Scrum to be a static construct to be followed literally from now to eternity; that would not be agility.
Agility is an _inspect-and-adapt_ cycle that focuses on continuous improvement of operations, enabled by _transparency_. In practice, this is exactly the same idea as lean's _kaizen_.

Many problems have also been encountered in applying lean. Lean is a way of thinking developed for Toyota's needs, and the model has been refined and has changed over the decades.
It is therefore partly unclear how Toyota's practices can be transferred to other fields.

There is also research evidence on the benefits of lean in software development. The DORA research presented in the Part 3 chapter [Scientific evidence](/en/osa3/#scientific-evidence) found that lean management practices (e.g. limiting work in progress and making the flow of work visible) and lean product development practices (e.g. working in small batches and making use of customer feedback) predict better software delivery performance, a better organisational culture and less burnout.

Like agile, lean is not a set of tools, but a continuous way of working. In the words of Larman and Vodde:

> _In Toyota and in lean thinking, the idea is to repeat cycles of improvement experiments forever._

## Large-scale agile software development

Agile software development methods were originally intended for managing small teams. For example, according to the Scrum Guide, a Scrum team typically has at most ten people. What if the product requires a larger number of developers?

The basic principle is still to keep the teams small, but to increase production capacity by using more teams. This in turn requires that the work between the teams is coordinated somehow.

### Scrum of Scrums

A long-used way of scaling Scrum is the so-called _Scrum of Scrums_, where the idea is to form a coordinating team that includes one or, if needed, several members from each Scrum team, for example the Scrum Master or an experienced developer of the team. The Scrum of Scrums team can meet daily or less frequently, for example weekly.

The principle is already very old: one of the creators of Scrum, Jeff Sutherland, [reports](https://www.researchgate.net/publication/290823579_Agile_Can_Scale_Inventing_and_Reinventing_SCRUM_in_Five_Companies) having used it as early as 1996 in a company with dozens of Scrum teams. The product-specific Scrum of Scrums teams were further coordinated by a "management Scrum" of the company's management that met monthly. However, the description does not say, for example, how backlogs should be handled in larger-scale Scrum. This is addressed by the large-scale methods presented next.

### Large-scale agile methods

From the 2010s onwards, more attention has been paid to scaling agile, and several large-scale agile methods have been presented. Of these, the ones that have received the most attention are the Scaled Agile Framework, i.e.
[SAFe](https://framework.scaledagile.com/), Large Scale Scrum, i.e. [LeSS](https://less.works), and to some extent also Disciplined Agile, i.e. [DA](https://www.pmi.org/disciplined-agile), and [Scrum@scale](https://www.scrumatscale.com/).

What they have in common is that they extend agility by bringing in lean thinking. Unlike agile methods, lean is intended from the outset to work at a really large scale, and it contains more principles guiding the operations of the whole organisation than traditional agile. Let us now look at SAFe and LeSS in a bit more detail.

A systematic [literature review](https://doi.org/10.1109/TSE.2021.3069039) comparing large-scale methods found that research has focused on the practices of commercial methods at the expense of their underlying principles. In addition to ready-made frameworks, the review also compared methods tailored in-house by organisations such as Nokia and Ericsson.

### SAFe, the Scaled Agile Framework

The Scaled Agile Framework, SAFe, is the most popular large-scale agile method. In the annual [State of Agile](https://stateofagile.com/) surveys, SAFe has clearly been the most commonly mentioned scaling framework, although its share has declined in recent years and more and more organisations report that they do not use any ready-made scaling framework.

The main developer of SAFe is Dean Leffingwell, who worked as a consultant at Nokia Mobile Phones (NMP) in the 2000s. SAFe was largely born from the work done at Nokia. Nokia used a kind of pre-version of SAFe. The first official version of SAFe was released in 2011. The current version is 6.0.

To put it bluntly, SAFe combines all the best practices of agile and lean software development developed during the last 20 years, as well as a set of practices aimed at managing companies' products.

SAFe offers a large number of principles, individual and team roles, and concepts. SAFe calls itself a framework, i.e. the idea is that companies tailor a suitable process for themselves using the tools SAFe provides.

SAFe also offers four pre-tailored configurations of different sizes. The smallest of these, _Essential SAFe_, is intended for smaller companies and for the early stages of adopting SAFe. The largest configuration, _Full SAFe_, on the other hand, is suitable for massive companies managing several different products. The following figure illustrates the concepts of Full SAFe:

![]({{ "/images/5-4.png" | relative_url }}){:height="500px" }

At the core of the software development (can you find it in the figure?) is a slightly modified version of Scrum, to which a set of XP principles has been attached.

The coordination of teams is managed top down by grouping the set of teams responsible for one product under the concept of an _agile release train_ (ART). The Scrum teams of a release train work in sync with each other, together producing larger functional wholes during a _planning interval_ (PI) consisting of several sprints. In earlier versions of SAFe, the period was called a _program increment_.

Planning intervals and the release trains implementing them are in turn steered from ever higher up in the organisation by various roles. SAFe offers a lot of support for this too through its concepts and the roles it defines.

SAFe is documented in great detail, and it gives very detailed guidance to make adopting and following SAFe easier. The guidance is of course provided by highly paid consultants and by tailored training packages and certification.

SAFe seems to be especially popular with company management. This is understandable, since unlike most agile methods, SAFe offers the company's management a suitable amount of things to do in the form of roles and practices.

As mentioned earlier, SAFe contains practically all possible best practices of agile and lean software development, documented clearly and in detail. SAFe is thus a kind of supermarket of agile/lean development: everything is readily available in pre-packaged form. Pick and mix, open the package and follow the instructions...

SAFe has also received a lot of criticism. Part of the criticism is directed at the heaviness of the process defined by SAFe, and part at SAFe's top-down management nature.

For example, the creator of Scrum, Ken Schwaber, has [questioned whether SAFe is an agile method at all](https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/) in the sense of the original idea of agility. After all, the Agile Manifesto contains the principle _individuals and Interactions Over Processes and Tools_. SAFe, on the other hand, seems very heavy as a process.

### LeSS, Large Scale Scrum

Behind LeSS are Craig Larman and Bas Vodde, who worked as consultants in the early 2000s at, among others, Nokia Siemens Networks. Unlike SAFe, LeSS is extremely simple and very strongly based on Scrum. There are no new roles, artifacts or meetings.

There are two versions of LeSS: _LeSS_ for situations where 2-8 Scrum teams work on the product, and _LeSS Huge_ for situations where a larger number of teams is needed.

Both LeSS and LeSS Huge are based on the following assumptions

- one product is developed, with one product owner and one product backlog
- all teams have sprints that progress at the same time
- like in Scrum, the teams are cross-functional, i.e. they have all the competence needed to implement the features being developed for the product
- during the sprint, the teams together produce one new, releasable version of the product that provides value to the customer (one shippable product increment)

One LeSS implementation is thus intended for developing one product. If a company has several different products, each of them has its own LeSS implementation. Unlike SAFe, LeSS takes no position on how the company manages its product families.

LeSS emphasises that it is _not_ a separate administrative layer added on top of Scrum, but only a way in which Scrum's principles and artifacts can be applied as simply as possible at a larger scale.

#### Principles behind LeSS

Behind LeSS is a set of familiar principles of agile and lean development.

![]({{ "/images/5-5.png" | relative_url }}){:height="440px" }

The principles are almost the same as in SAFe, but one of them makes a clear difference between the methods. Here it is as a direct quote from the [documentation](https://less.works/less/framework/introduction)

_More with less:_

- We don’t want more roles because more roles leads to less responsibility to Teams
- We don’t want more artifacts because more artifacts leads to a greater distance between Teams and customers
- We don’t want more process because that leads to less learning and team ownership of process, instead we want more responsible Teams by having less (fewer) roles
- We want more customer-focused Teams building useful products by having less artifacts
- We want more Team ownership of process and more meaningful work by having less defined processes.
- _We want more with less_

In other words, by minimising the amount of process, roles and artifacts, the aim is for the teams themselves to take ownership of developing the product and of communicating with the customer.

More about the principles can be found in the LeSS [documentation](https://less.works/less/framework/introduction).

#### LeSS in practice

Let us take a closer look at the smaller configuration of LeSS, intended for managing about 2-8 teams.

The roles are the same as in normal Scrum. There is one product owner, and there can be a few Scrum Masters depending on the number of teams; one Scrum Master can sensibly take care of about 1-3 teams.

The teams are self-organising _feature teams_, i.e. each team focuses on implementing wholes that provide value to the customer. The team division thus _does not follow_ the architectural layers of the application, i.e. there are no separate frontend, backend and database teams, for example. Each team operates on all layers of the software, implementing the functionality described by user stories from start to finish at the level of the definition of done.

The artifacts are also the same as in normal Scrum. There is one product backlog, whereas each team has its own sprint backlog. All teams work on the same software during the sprint, i.e. the finished addition to the product produced by the sprint (in LeSS terms a _potentially shippable product increment_, in Scrum an [increment](/en/osa1/#scrum-accountabilities-artefacts-and-events)) is common to all teams.

![]({{ "/images/5-6.png" | relative_url }}){:height="350px" }

Unlike in normal Scrum, sprint planning consists of two parts.

In the first part, the product owner and representatives of all teams select from the product backlog the user stories that the different teams will implement during the next sprint.

The second part of planning is team-specific. Each team forms its own sprint backlog, which is used to manage the work within the sprint as in normal Scrum. However, if needed, several teams can also work in sync during the sprint, using a shared sprint backlog.

![]({{ "/images/5-7.png" | relative_url }}){:height="350px" }

The joint result of all teams (one shippable product increment) is reviewed together. The retrospective, on the other hand, has two levels: first, as in normal Scrum, a team-specific retrospective is held, and after that an overall retrospective examining the development process of the whole product, with representatives from all teams and possibly from company management.

![]({{ "/images/5-8.png" | relative_url }}){:height="350px" }

#### Other coordination between teams

Apart from the first part of sprint planning, the sprint review and the overall retrospective, which are common to all teams, LeSS does not require any other joint meetings for coordination between teams. Instead, it states that the teams decide among themselves how coordination happens.

LeSS gives a set of guidelines and recommendations on the subject:

- Prefer decentralized and informal coordination over centralized coordination
- Emphasize _just talk_ and informal networks via communicate in code, cross-team meetings, component mentors, travelers, scouts, and open spaces

The principle _just talk_ emphasises the importance of direct communication, and _communicate in code_ means a way of programming that makes it easier for teams to work together, e.g. shared coding conventions and continuous integration. _Scouts_ refers to visiting the daily scrums of other teams.

LeSS also mentions scrum of scrums meetings as one possible form of coordination between teams, but recommends more informal forms of communication instead.

#### Maintaining the backlog

In Scrum, the backlog is maintained continuously (backlog refinement, earlier also called backlog grooming) so that it stays [DEEP](/en/osa2#a-good-product-backlog-is-deep). Earlier versions of the Scrum Guide estimated that this takes at most about 10% of the developers' time. Unlike Scrum, LeSS pays explicit attention to backlog maintenance and gives guidance on the subject.

The product owner is responsible for the backlog and does all the prioritisation. Representatives of all teams, as well as of the application's various stakeholders, should also take part in backlog maintenance (grooming/refinement). By default, each team refines the stories that the team is likely to implement. As needed, however, teams organise joint backlog grooming sessions when looking at the refinement of closely related stories or thinking about larger guidelines for the development of the application, for example matters affecting the architecture.

LeSS encourages development teams to communicate as directly as possible with customers or end users.

#### LeSS Huge

If there are more than eight teams, the _LeSS Huge_ version is recommended. It is still assumed that only one product is being developed, with one product backlog and one responsible product owner.

The backlog is, however, now divided into _requirement areas_, each of which has an _area product owner_ responsible for it. The area product owners form a _product owner team_ that manages the product as a whole, led by the product owner of the whole product.

![]({{ "/images/5-9.png" | relative_url }}){:height="380px" }

#### LeSS vs SAFe

It is very interesting that both SAFe and LeSS were largely born in Finland and at Nokia. Because of Nokia's organisational structure, however, the software development practices of Nokia Mobile Phones (NMP) and Nokia Siemens Networks (NSN) were completely different, and SAFe (NMP) and LeSS (NSN) are very different methods despite their shared underlying principles and common parent group.

The [comparison of the methods](https://gosei.eu/blog/less-safe-comparison/) written by consultants Aki Tikka and Ran Nyman, who have worked with both methods, is well worth reading.

As noted earlier, SAFe is popular among company management, but it has received a lot of criticism from respected representatives of agile development. I have also never personally heard any software developer praise SAFe.

I do not know whether it says anything about the long-term viability of the methods, but the home of SAFe, Nokia Mobile Phones, no longer even exists. Nokia (Siemens) Networks, on the other hand, is today's Nokia, where the LeSS method has been applied for a long time.

### The Spotify model

Henrik Kniberg and Anders Ivarsson's 2012 article [Scaling Agile @ Spotify](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) told the general public how the Swedish music streaming service Spotify managed to scale its operations in about four years from a handful of developers to several hundred software developers working in different cities, while maintaining startup-like agility.

Spotify's "model" is fairly simple: it organises developers into _squads_, which in turn are divided into different _tribes_. In addition to the squad/tribe structure, the model also includes a somewhat different division, where the company's people are divided within tribes into _chapters_ and into _guilds_ that cross tribe boundaries:

![]({{ "/images/5-17.png" | relative_url }}){:height="380px" }

Although the purpose of Kniberg's description was not for _other companies_ to start imitating Spotify's way of working, that is what happened.

The description did not fully match Spotify's reality either. Joakim Sundén, who worked as an agile coach at Spotify in 2011–2017, has [said](https://www.jeremiahlee.com/posts/failed-squad-goals/) that even at the time of writing the model was partly an aim and partly an approximation: _"Even at the time we wrote it, we weren't doing it. It was part ambition, part approximation."_ The model is thus not a ready-made framework, but a description of one company's way of working and its aims at a particular point in time.

Let us now go through Spotify's model in a bit more detail, or rather what it looked like around 2012 and a few years after that.

#### Squad

At the core of Spotify's model is a team of about 5–10 people, called a _squad_.

In line with the agile ideal, the squads are _cross-functional_, i.e. they have all the know-how needed to take the parts of the software they are responsible for all the way from idea to the production environment. The squads are self-organising and freely decide on their own working practices: internally they can use Scrum, Kanban, Scrumban or any other way of working.

![]({{ "/images/5-18.png" | relative_url }}){:height="250px" }

Each squad is responsible for some logical part of the application, often a piece that is directly visible to the customer and produces value independently, for example the iPhone app, playlists, weekly recommendations or billing. Spotify's squads are thus _feature teams_, just as in the LeSS development model. Some squads are responsible for internal matters used by other squads, such as the performance of the backend system.

Squads have a _product owner_, who makes sure that the part of the application the squad is responsible for is developed in a direction that makes sense for the whole. Instead of Scrum Masters, the squads are helped by _agile coaches_, who, among other things, facilitate retrospectives and give career guidance when needed.

Squads are meant to work as much like startups as possible and to be in direct contact with end users. They use MVPs and A/B testing, familiar from the [Lean startup method](/en/osa2/#experimental-requirements-engineering-lean-startup), when validating the usefulness of new features, and they have the power to make even some business-related decisions autonomously. This requires a strong shared vision and clear metrics, for example the number of daily active users. The squads' working conditions, such as support, opportunities to have an influence and ease of releasing, are monitored with regular surveys.

#### Tribe

The ideal is that each squad is as independent a unit as possible, able to work without depending on other squads. However, there are inevitably dependencies and also synergies between squads. Squads working around the same topics are therefore grouped into _tribes_, which hold joint gatherings from time to time:

![]({{ "/images/5-20.png" | relative_url }}){:height="380px" }

In the 2012 description, Spotify's squads worked in the same space, and all the squads of a tribe were meant to work close to each other, in the same building or even on the same floor. This enabled easy and informal interaction between the squads of a tribe. Today the situation is different: since 2021, Spotify has let its employees [choose](https://newsroom.spotify.com/2021-02-12/distributed-first-is-the-future-of-work-at-spotify/) whether they work at the office, remotely or a combination of these.

A tribe has at most about ten squads, since the size of tribes is to be kept under a hundred people. The limit is justified by so-called [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar's_number), which is a theoretical cognitive limit on the number of people with whom an average person can maintain stable social relationships. Dunbar's number is about 150, and Spotify wanted to stay clearly below it. Kniberg also justifies the limit as follows: _When groups get too big, we start seeing more things like restrictive rules, bureaucracy, politics, extra layers of management, and other waste._

#### Chapter

The downside of autonomous squads is that the same problems may be solved again and again in different squads, and things learned by one squad do not spread to others. For this purpose, Spotify has _chapters_, which consist of members of one tribe with similar skills. For example, the testers of the different squads of a tribe can form their own chapter, and so can all frontend developers:

![]({{ "/images/5-21.png" | relative_url }}){:height="320px" }

Chapters meet regularly to share problems and solutions, and they support the professional development of their members. The product owner answers the question _what to build next_, while the chapter answers the question _how to build it well_. Each chapter is led by a _chapter lead_, who acts as the line manager of the chapter members but also works in some squad. According to the criticism presented below, this very structure turned out to be problematic, since the chapter lead had no responsibility for the progress of the squad's work.

![]({{ "/images/5-23.png" | relative_url }}){:height="280px" }

#### Guild

Chapters thus consist of people with the same competence within one _tribe_. A guild is similar to a chapter but is a group of people with the same competence or interest that works across tribe boundaries. For example, the testers' guild consists of the members of all testing chapters, but others interested in the topic, e.g. web developers, can also take part in the events organised by the guild.

![]({{ "/images/5-22.png" | relative_url }}){:height="360px" }

Chapters and guilds are close to the enabling teams of the Team Topologies model presented below: all of them are about spreading know-how across team boundaries.

#### Applying the Spotify model and its criticism

The Spotify model has been applied in many places in other companies as well. According to Henrik Kniberg, who documented Spotify's way of scaling and presented it to the world, [the Spotify model was not meant](https://blog.crisp.se/2015/06/07/henrikkniberg/no-i-didnt-invent-the-spotify-model) to be applied elsewhere, and according to him there is not even any Spotify model, since the way of developing software at Spotify changes all the time, adapting to the needs of the ever-growing company.

Spotify has since added a few new organisational components to its model (trio and alliance) that make it possible to manage the direction of development at the big-picture level. Spotify also has a few roles that work across all tribes, e.g. the _chief architect_, the person responsible for the architecture of the whole product.

The Spotify model has received even harsh [criticism](https://www.jeremiahlee.com/posts/failed-squad-goals/) on the internet. It is evident that Spotify's operations have faced many difficulties as the company has grown rapidly, and this has led to changes in the Spotify model (if any model can be said to exist at all) and has evidently shaped the company's operations towards a [more traditional, more rigid corporation](https://www.youtube.com/watch?v=ar4lq1l8pAc&t=2462s&ab_channel=QAgileQualityinAgile).

When applying the Spotify model, it is therefore good to keep in mind that it was certainly not meant to be a static construct that can be copied literally into another context. Many things in the Spotify model are only new names for something old and familiar that can be found directly in, for example, Scrum, Lean, SAFe or LeSS, and it may be wiser to turn directly to the literature on those methods.

The popularity of the Spotify model has been suggested to be partly due to the [halo effect](https://en.wikipedia.org/wiki/Halo_effect), i.e. the positive image of Spotify as a product may partly be behind people starting to copy the company's way of working as well, without much further justification. This is despite the fact that one's own company's operating environment has nothing resembling Spotify's operating environment.

The Spotify model, or at least its terminology, has also been adopted by many Finnish companies; for example, [Smartly](https://www.smartly.io/) applies certain features of the model with considerable success.

If you are interested in the Spotify model, you should definitely watch [this](https://www.youtube.com/watch?v=Yvfz4HGtoPc&ab_channel=HenrikKniberg) and [this](https://www.youtube.com/watch?v=vOt4BbWLWQw&ab_channel=HenrikKniberg) YouTube video on the topic. If you also want to peek into Spotify's sometimes messy reality, you should also watch Joakim Sundén's talk [You can do better than the Spotify Model](https://www.youtube.com/watch?v=gL6ou9UwqUQ&ab_channel=PreziConferenceTeam).

### Team Topologies

After the Spotify model, the most widely adopted way of structuring software development teams is the model presented in Matthew Skelton and Manuel Pais's book [Team Topologies](https://teamtopologies.com/key-concepts) (2019). Unlike SAFe or LeSS, it is not a process, but a way of designing teams and the interfaces between them so that work flows quickly.

The key concept of the model is the team's _cognitive load_: a team should be responsible for only as much as it can handle at once. Behind this is also Conway's law, mentioned in [part 4](/en/osa4/#modular-monolith), according to which the structure of a system reflects the communication structure of the organisation that builds it. This is why the team structure should be designed according to the kind of architecture you want to emerge.

The model identifies four team types:

- a _stream-aligned team_ is responsible for some whole that provides value to the customer from start to finish, in the same way as LeSS's feature teams or Spotify's squads. The great majority of teams are of this type.
- a _platform team_ provides internal services to other teams, for example production environments, CI/CD pipelines and monitoring, so that teams can use them as self-service
- an _enabling team_ helps other teams adopt new skills and techniques, somewhat like Spotify's chapters and guilds
- a _complicated-subsystem team_ is responsible for a part requiring special expertise, for example a calculation algorithm

Three interaction modes are defined between teams: close _collaboration_, using a service provided by another team _as a service_ (X-as-a-Service), and _facilitating_, where one team helps another learn.

Related to platform teams is the concept of _platform engineering_, which became common in the 2020s: the organisation builds an internal development platform that lets teams set up environments and tools independently. The purpose is to lighten the cognitive load of stream-aligned teams so that every team does not have to manage the whole infrastructure itself.

## The use and benefits of agile methods in the light of research

At the end of the course, let us take a quick look at research on the use and benefits of agile methods.

### How widely are agile methods used

The internet has quite a lot of different surveys mapping how common the use of agile methods is. Most of them are already several years old, and their results vary greatly. For example, according to a 2018 survey by the [Project Management Institute](https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf), 46% of software projects were carried out with agile methods, whereas in [Stack Overflow's](https://survey.stackoverflow.co/2018/) survey of over 100,000 respondents, 86% said they work in an agile way. In Finland, in a University of Oulu [study](https://doi.org/10.1145/2372251.2372275) in 2012, 58% of companies used agile or lean methods, and in a 2018 [survey](https://nitor.com/fi/artikkelit/nitor-ja-helsingin-yliopisto-selvittivat-suomalaisyritykset-ketteryyden-edellakavijoita) (in Finnish) by the University of Helsinki and Nitor, only 5.9% of respondents said that agile methods are not used at all. Agile methods have thus long been mainstream, and it hardly makes sense to ask about the mere adoption rate anymore.

The vast majority of the surveys do not meet the criteria of scientific research: the samples do not necessarily represent the whole population, and some of the authors are commercial actors whose interest may be to publish results favourable to themselves.

More recent research therefore focuses on _how_ the methods are applied in practice. In a [study](https://ieeexplore.ieee.org/document/7890614/) (2016) conducted in Brazil, Finland and New Zealand, 71% of respondents used Scrum, 50% Kanban, 40% lean and 35% the waterfall model. The same organisation thus often uses several methods at the same time. The large international [HELENA survey](https://arxiv.org/abs/2109.11435) found that less than 15% of respondents carry out their projects in a purely agile or purely traditional way. The vast majority use so-called _hybrid methods_, i.e. self-assembled combinations of different methods and practices. The researchers conclude that agility cannot be defined merely on the basis of the method used; what matters is which practices teams really apply.

### The state of software delivery in the light of DORA research

The [State of Agile](https://stateofagile.com/) report, published since 2006, was for a long time the best-known survey mapping the use of agile methods. According to it, Scrum is clearly the most common agile method. However, the report is produced by a commercial tool vendor, and its latest, 18th edition, published in 2025, no longer even asks about the methods teams use.

A better picture of how well organisations really master software development is given by the DORA reports presented in the Part 3 chapter [Scientific evidence](/en/osa3/#scientific-evidence). Until 2024, DORA divided respondents into four performance levels based on the DORA metrics. In the [2024 report](https://dora.dev/research/2024/dora-report/), the levels were as follows:

| Level | Share of respondents | Deployment frequency | Change lead time | Change failure rate | Recovery time |
|---|---|---|---|---|---|
| Elite | 19 % | on demand, several times a day | less than a day | 5 % | less than an hour |
| High | 22 % | daily–weekly | a day to a week | 20 % | less than a day |
| Medium | 35 % | weekly–monthly | a week to a month | 10 % | less than a day |
| Low | 25 % | monthly–every six months | 1–6 months | 40 % | a week to a month |

The best-performing organisations deploy changes to production on demand in less than a day, while for the weakest it takes months. The majority of organisations are thus still far from what [continuous delivery](/en/osa3#continuous-deployment-and-delivery) would make possible, and many have room to sharpen up their technical practices.

The table also has an interesting detail: medium-level organisations deploy changes to production less often than high-level ones, but their changes fail less often. According to the report, there is no universal answer to which is better, more frequent deployments or fewer failures. It depends on the application and the expectations of its users. The report therefore emphasises that more important than reaching a particular level is that the team continuously improves its way of working.

According to the same research, in addition to technical practices, organisational performance is predicted by, among other things, working in small batches (work in small batches) and limiting the amount of work in progress (limit work in process).

### Does agile software development work

The [Standish Group](https://www.standishgroup.com/), which does research on software project management methods, has published the _Chaos Report_ on the success rate of software projects since 1994.

The report divides projects into three groups in terms of success:

- _successful_: a project is _successful_ if it is completed on schedule, at the budgeted cost and with the planned scope
- _challenged_: a project's success is _challenged_ if one of the areas of success (_schedule, budget, scope_) has not been met, for example if the application was completed on schedule and stays within budget, but not all the planned functionality has been implemented
- _failed_: a project has _failed_ if it is not completed, or it is never taken into use

In the 2020 report, the success rate of projects looks as follows:

![]({{ "/images/chaos10.png" | relative_url }}){:height="150px" }

The size of a project has a really big impact on success. If the size of the project is taken into account, the success rate is as follows:

![]({{ "/images/chaos11.png" | relative_url }}){:height="250px" }

Based on the figures in the report, agile methods would seem to work better than the waterfall model regardless of project size, and the difference grows as projects get larger. The figures should, however, be taken with caution, as noted below.

It is clear, however, that large software projects are risky, whatever the method used. Large projects should therefore be split into several smaller projects to increase the probability of success.

The Chaos report contains other interesting data as well, e.g. a more detailed breakdown of successful and failed projects. The downside of the report is that it is commercial: the reports and the data behind them are not publicly available.

The Chaos report's figures have also been criticised scientifically. According to one [study](https://ieeexplore.ieee.org/document/5232804), the report's definition of success is one-sided: a project is considered successful only if it stays within the original schedule, budget and scope estimates. This measures the accuracy of the original estimates rather than whether the project produced value. Moreover, in agile development changes in scope are intentional, so the definition is poorly suited to evaluating it.

The [State of Agile](https://stateofagile.com/) report breaks down the benefits achieved with agility in more detail:

![]({{ "/images/5-16-2021.png" | relative_url }}){:height="400px" }

### Criticism of agility

As agility has grown in popularity, so has the criticism, and it has often been voiced by the very founders of the agile movement. Dave Thomas, one of the authors of the Agile Manifesto, declared as early as 2014 in his post [Agile is Dead (Long Live Agility)](https://articles.pragdave.me/p/2014-03-04-time-to-kill-agilehtml) that the word _agile_ has turned into a marketing term used to sell consulting, training and tools. He suggested that we should talk about _agility_, i.e. a way of working, rather than productised methods.

The criticism is directed especially at the industry that has grown up around agility: certificates granted after short courses, heavy scaling frameworks, and situations where the old command-and-control management continues under agile terminology, such as Dark Scrum and waterscrumfall discussed in [part 1](/en/osa1/#problems-of-scrum). In the 2020s, many companies have also cut separate agile roles. For example, the US bank Capital One [eliminated](https://www.bankingdive.com/news/capital-one-cuts-1100-tech-jobs-agile/640861/) over 1,100 agile roles in 2023 and transferred their responsibilities to teams and product managers.

The criticism is usually not directed at the values and principles of the Agile Manifesto, but at how they have been applied. This is also reflected in the finding of the [HELENA study](https://arxiv.org/abs/2109.11435) mentioned above: agility does not come from the chosen method, but from the practices teams really follow.

### Remote and hybrid work

Agile methods were born at a time when a team worked in the same space. According to the principles of the Agile Manifesto, the most efficient way of conveying information within a development team is face-to-face conversation. After the Covid pandemic, however, remote and hybrid work have become common in the software industry. For example, Spotify lets its employees choose how they work, as noted [above](/en/osa5/#tribe).

Extensive research has also been done on the effects of remote work. A [study](https://www.nature.com/articles/s41562-021-01196-4) based on the communication data of about 61,000 Microsoft employees found that the whole company moving to remote work made collaboration networks more static and siloed: the share of collaboration with people outside one's own group decreased by about a quarter, and communication shifted from real-time conversation to email and instant messaging. A randomised [experiment](https://www.nature.com/articles/s41586-024-07500-2) with about 1,600 employees of the Chinese company Trip.com, on the other hand, found that working remotely two days a week reduced resignations by about a third and did not weaken performance or promotions. The amount of code written by the software developers involved did not change either. A Microsoft [study](https://arxiv.org/abs/2008.11147) on software developers, in turn, showed that experiences vary greatly: some developers did better working from home than at the office, while others suffered from, for example, interruptions and isolation.

Based on the research, hybrid work seems to work well at the individual level, but spontaneous information flow between teams easily suffers. This is especially relevant for large-scale agile development, which relies heavily on informal coordination between teams, such as LeSS's principle _just talk_ and Spotify's chapters and guilds.

### Conclusions

So there is evidence that agile methods work. The evidence is not entirely indisputable, however, since all the studies summarised above are surveys in which the concepts are not necessarily properly defined (e.g. what is meant by agility or project success), and the participants mostly do not represent the whole population evenly. Nor are the authors of all surveys impartial with respect to the methods; for example, [Digital.ai](https://digital.ai/) (formerly CollabNet/VersionOne), which currently produces the State of Agile report, is a company that makes agile project management tools. The validity of the studies is thus somewhat questionable.

There has also been a lot of academic research on agile methods, a few of which were mentioned in the text above. The systematicity, quality and generalisability of academic research also vary. The DORA research summarised in the Part 3 chapter [Scientific evidence](/en/osa3/#scientific-evidence) is probably the most comprehensive research currently available that breaks down the benefits of agile and lean principles, and it continues with annual reports. It too is based on surveys, but its methods are considerably more careful than in most of the surveys mentioned above: the concepts being measured have been defined and validated, and the relationships between factors have been analysed with statistical models. The results have also been published in peer-reviewed publications.

There is also a large number of studies that limit themselves to evaluating the effects of individual techniques, e.g. TDD, pair programming or continuous integration. However, software development has too many variables for the effect of any single factor to be measured empirically in a fully convincing way. Methods are always applied by people, and a measurement result in one software team does not necessarily generalise to any other circumstances.

The problem with almost all studies measuring the benefits of an individual technique, e.g. TDD, is that they do not measure the long-term benefits of the techniques, for example for the maintenance and further development of the software. Both folk wisdom and many studies have found that the majority of the costs of software arise precisely in the maintenance phase, i.e. after the release of the first version. For example, [this](https://www.researchgate.net/publication/221408114_Distribution_of_Cost_over_the_Application_Lifecycle_-_a_Multi-case_Study) study shows that as much as 79% of software costs arise during the maintenance phase. It is thus possible that some technique produces a short-term benefit but even weakens productivity in the long run.

AI brings a new variable to research. A key finding of the DORA group's 2025 report is that AI acts as an _amplifier_: it improves the performance of well-functioning teams, but also magnifies the problems of poorly functioning organisations. The practices for whose benefits evidence has been presented in this part and in part 3 thus do not lose their significance with AI, but rather become more important. More on this topic in the material [AI and the software development process](/en/genai/#ai-and-the-software-development-process).
