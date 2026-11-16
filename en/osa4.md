---
layout: page
title: Part 4
inheader: yes
title_long: 'Software design'
permalink: /en/osa4/
source: osa4.md
source_commit: 81a8f02
---

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
  />
</a>

{% include en/miniproj_ilmo.md %}

Of the phases of the software life cycle, we have now covered requirements engineering and quality assurance. The topic of this part is software design and implementation.

This part contains a lot of code examples.

The chapter [Design patterns](#design-patterns-week-6) at the end of this part is related to the week 6 exercises, so you can skip it during the earlier weeks.

## Typos in the material

{% include en/typo_instructions.md path="/osa4.md" %}

{% include en/norppa.md %}

## Software design

Software design is usually divided into two phases: architectural design and object or component design.

In _architectural design_, the structure of the program is outlined at a coarse level: you think about which larger structural components the program consists of, how the components communicate and what the interfaces between them look like.

In _object or component design_, on the other hand, you design in more detail how individual components, classes and methods should be implemented.

In addition to these technical viewpoints, somewhere between specifying and designing software lies [user interface and user experience design](https://www.itewiki.fi/opas/kayttoliittymasuunnittelu-ux-user-experience-design-eli-kayttajakokemus/) (link in Finnish), which unfortunately this course material cannot go into. The department has a few advanced courses on the topic, e.g. [Human computer interaction](https://studies.helsinki.fi/courses/course-unit/otm-c94acd22-fb07-4850-92d0-7f6150b11c58/CSM13401?cpId=hy-lv-77).

When software design takes place depends on the development process used.
In the waterfall model, design happens after requirements engineering, and programming starts only once the design is finished and documented. In agile methods, design is done in every sprint as needed, and usually no detailed design document is written.

A design process following the waterfall model is hardly used anywhere anymore, and at least requirements engineering and architectural design overlap.

Detailed and heavy design before programming, sometimes called [Big Design Up Front](https://en.wikipedia.org/wiki/Big_Design_Up_Front) (BDUF), is still done. It is particularly suitable for systems where the application domain is well known and the requirements do not change.

## Software architecture

The concept of _software architecture_ has existed for decades. The term became established in general use during the 2000s and has also become a job title, _software architect_, which refers to an employee more experienced than a regular programmer.

Most people in the field have some idea of what software architecture means. Despite attempts, however, the term has not been defined in a way everyone would agree on.

The standard on describing architectures, [ISO/IEC/IEEE 42010](https://en.wikipedia.org/wiki/ISO/IEC_42010) (originally IEEE 1471 from 2000), defines the concept as follows:

> Software architecture is the fundamental organization of a system, embodied in its components, their relationships to each other and to the environment, and the principles governing its design and evolution.

Other definitions emphasize the same things in slightly different ways. According to [Philippe Kruchten](https://www.semanticscholar.org/paper/The-Rational-Unified-Process-An-Introduction%2C-3rd-Kruchten/3239cd654d82aa775cf9382a4d2ad834a3ea1014), architecture is a _set of significant decisions about the organization of a software system_. McGovern et al., on the other hand, stress in the book _A Practical Guide to Enterprise Architecture_ that the purpose of architectural decisions is to support the quality attributes required of the system.

Although the definitions of architecture vary somewhat, they share a set of common themes. According to every definition, architecture defines the structure of the software, i.e. its division into separate parts and the interfaces between the parts. In addition to structure, architecture also addresses behavior: it defines the responsibilities of the architecture-level building blocks and the ways they communicate with each other.

Architecture focuses on the most important structural principles of the system. It does not describe the system in detail but concentrates on the big picture and acts as an _abstraction_.

In the article [Who needs an architect](https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf), Martin Fowler states that _you might end up defining architecture as things that people perceive as hard to change_. The important structural principles of a system may also change over time, so architecture [is not immutable](https://web.archive.org/web/20160105123447/http://www.ibm.com/developerworks/rational/library/feb06/eeles/), but changing it radically can be challenging.

Almost the same thing, expressed a little differently, was in Kruchten's definition mentioned above,
_set of significant decisions about the organization of a software system_: architecture is formed through architectural decisions, i.e. a set of fundamental choices concerning the structure and operation of the software.

### Factors affecting the architecture

[Part 2](/en/osa2) mentioned that the requirements of a system are divided into two classes, functional and non-functional requirements.

The non-functional [quality requirements](/en/osa2#non-functional-requirements) of a system (the "-ilities") have a significant effect on the architecture. Quality requirements include, for example, usability, performance, scalability, fault tolerance, data consistency, security, maintainability, extensibility, testability, cost, time-to-market, ...

Since some quality requirements may conflict with each other, the architect has to find a compromise that satisfies all stakeholders. For example, time-to-market, i.e. how quickly the application can be delivered to end users, and low cost probably conflict with almost all other quality requirements.

Data consistency, availability and fault tolerance are properties between which compromises often have to be made. For distributed systems it has even been proven that if the network between the parts fails, the system cannot both respond to all requests and guarantee that all parts see the same up-to-date data (see the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)).

Implementation technologies also affect the architecture, for example the frameworks used and integration with existing systems, as does the environment of the system, e.g. regulations in medicine and aviation and the required operating standards.

The most important role of architecture is to give the development and maintenance of the application a framework that lets the application keep meeting not only the functional requirements set by the customer but also the quality requirements set for the system.

Sometimes the architecture originally chosen for an application no longer serves its purpose. This can happen, for example, if the quality requirements of the application change radically, e.g. if the application needs to scale to a much larger number of users than the original architecture can handle. Changing the architecture is difficult and expensive, but sometimes there is no other option.

### Architectural style

Software architecture is usually based on one or more _architectural styles_, meaning proven ways to structure certain types of applications.

There are a [large number](https://en.wikipedia.org/wiki/Architectural_pattern) of architectural styles, e.g.:

- Layered architecture
- Model-view-controller
- Pipes-and-filters
- Client-server
- Publish-subscribe
- Event driven
- REST
- Microservice architecture
- Service-oriented architecture

Most often, the structure of an application shows features of several architectural styles.

### Layered architecture

The best known and most widely used architectural style is surely _layered architecture_, which aims to divide the application into conceptual layers, where each layer performs the task of its own "level of abstraction" using only the services of the layer below it.

In a layered architecture, the topmost layers are closer to the user. The topmost layer is usually the user interface, and below it is the layer responsible for the application logic. The lowest layers focus on low-level matters, such as storing data or communicating over the network. The following picture shows as an example the layer structure of an imaginary online store, which is presented in more detail below:

![Layered architecture: the user interface views use OstoskoriService and TilausService of the application logic, which use the repositories of the persistence layer, which in turn use the database]({{ "/images/4-22.png" | relative_url }}){:height="350px" }

In practice, each layer is a collection of related objects or components that form a logical whole in terms of the functionality of their level of abstraction.

Layered architecture has many advantages. Layering makes maintenance easier, since if changes are made to the service interface of a layer, i.e. the part visible to other layers, the changes require maintenance only in the layer directly above it. For example, changes to the user interface do not affect the other layers, and changes to the layer responsible for storing data do not affect the user interface.

Keeping the application logic independent of the user interface makes it easier to port the program to new platforms, for example to run in a mobile environment in addition to the web. The services of the lowest layers, such as the persistence layer or at least parts of it, can possibly be reused in other applications as well.

Layered architecture is a clear and well-understood model for developers, but applying it may lead to massive monolithic applications that are eventually hard to extend and whose scaling to support large numbers of simultaneous users may become a problem.

#### Architecture of the online store

Let us look at the online store in a bit more detail. It is a simple web application implemented with Python and the Flask library, which renders the HTML pages shown to the user on the server using templates. The layers divide the work as follows:

- The _user interface_ consists of Flask routes and templates. The routes receive the HTTP requests sent by the browser, call the application logic and render the HTML page shown as the response using a template.
- The _application logic_ consists of services. `OstoskoriService` takes care of adding products to the shopping cart and removing them from it, and of calculating the price of the cart. `TilausService` creates an order from the contents of the shopping cart, charges it through the payment provider and stores it.
- The repositories of the _persistence layer_ handle the database operations. `TuoteRepository` fetches product data from the database, and `TilausRepository` stores the orders that are made.
- In addition, the application has _entities_, i.e. classes corresponding to the concepts of the application, `Tuote` (product), `Ostoskori` (shopping cart) and `Tilaus` (order), whose objects the layers pass to each other.

For example, when a customer presses the "add to cart" button next to a product, the browser sends an HTTP request that is handled by the shopping cart route. The route calls a method of `OstoskoriService`, which fetches the product data using `TuoteRepository` and adds the product to the customer's shopping cart. Finally, the route shows the updated shopping cart using the template _ostoskori.html_. So the route itself neither handles the database nor calculates prices, and the service, in turn, knows nothing about HTML pages or HTTP requests.

The layer structure of the application can be seen at the code level in how the code of the application is divided into directories:

```
src/
├── entities/
│   ├── tuote.py
│   ├── ostoskori.py
│   └── tilaus.py
├── repositories/
│   ├── tuote_repository.py
│   └── tilaus_repository.py
├── services/
│   ├── ostoskori_service.py
│   └── tilaus_service.py
├── ui/
│   ├── ostoskori_routes.py
│   ├── tilaus_routes.py
│   └── templates/
│       ├── tuotteet.html
│       ├── ostoskori.html
│       └── tilaus.html
└── app.py
```

The dependencies between the directories can be illustrated with a UML [package diagram](https://ohjelmistotekniikka-hy.github.io/python/viikko3#pakkauskaavio) (link in Finnish), where each directory is shown as a package:

![UML package diagram: ui depends on the package services, which depends on the packages repositories and entities; the repositories depend on the classes Tuote and Tilaus of the entities package]({{ "/images/4-23.png" | relative_url }}){:height="400px" }

The dependencies between the layers drawn as packages are marked with dashed lines. The user interface _ui_ depends on the application logic _services_, which in turn depends on the persistence layer _repositories_.

In practice, a dependency means that code in an upper layer calls some method in the code of a lower layer. In the spirit of layered architecture, dependencies only go from top to bottom, so e.g. the code of the application logic layer does not call the code of the user interface layer.

Both the application logic and the persistence services use the objects of the package _entities_. Although logically the package belongs to the "business logic layer" above the persistence services, at the code level the lower persistence layer depends on the package, since it handles the code of the package's classes.

> The rules of a layered architecture, such as the application logic not being allowed to depend on the user interface, erode easily if compliance is not monitored. The rules can be checked automatically, e.g. with the tool [import-linter](https://import-linter.readthedocs.io/), which is given the allowed dependencies between packages. When the check is added to the CI pipeline, a change that breaks a rule is noticed immediately. Automatic checks like this that monitor properties of the architecture are called _fitness functions_.

### Microservice architecture

One of the drawbacks of layered architecture mentioned above was that applying it may lead to massive monolithic applications that are eventually hard to extend and whose scaling to large numbers of users may become a problem.

_Microservice architecture_ (microservices), which became common in the 2010s especially in large web services, aims to solve these problems. It divides the application into several small, independent services running on the network, which communicate with each other over the network.

![Microservice architecture: the user interface calls the services of the online store (user management, product search, recommendations, shopping cart and payments) over the network; each service has its own database, and some of the services call each other]({{ "/images/4-18.png" | relative_url }}){:height="300px" }

In an application based on microservices, the individual services are made as _independent_ and loosely coupled as possible. For example, the services do not use a shared database and do not share code. The services do not call each other's methods directly; instead, they communicate over the network.

Microservices are meant to be relatively small and take care of only "one thing". If the online store used as an example above were implemented as microservices instead of a single application following a layered architecture, the separate microservices could be, for example:

- User management
- Product recommendations
- Product search
- Shopping cart functionality
- Functionality that handles payment for purchases

#### Benefits of microservices

Functionality is usually added to a system following a microservice architecture by implementing new services or extending existing ones.
Extending the application can thus be easier than in a layered architecture, where an extension usually requires modifying code in every layer.

An application using microservices can be easier to scale, since the microservices that form a performance bottleneck can be run as several parallel instances.

With microservices, the application can easily be developed with several programming languages or different frameworks. Unlike in monolithic projects, nothing requires all microservices to be implemented with the same technology.

Microservices can be divided among different teams. Each team owns one or a few services and can develop them fairly independently: the team decides on the internal implementation of its services itself, and only the interfaces between services need to be agreed on with the other teams. In a large organization this significantly reduces the need for coordination between teams. The background to this is the so-called [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law): the structure of a system reflects the communication structure of the organization that developed it.

Each service can also be released to production independently of the others. Changes can thus be taken into use quickly and in small steps, and one team's unfinished work does not block the releases of other teams.

Microservices can also isolate faults: if e.g. the recommendation service crashes, customers can still search for products and make purchases. This, however, requires that the services have been designed to work even if a service they use does not respond.

#### Communication between microservices

So microservices communicate with each other over the network. There are several different ways to communicate.

A simple option is to use the HTTP protocol for communication, i.e. the same mechanism web browsers use to talk to servers. In this case, the microservices are said to provide a REST API for communication. In the week 2 exercises, NHL statistics were fetched from a REST API that provides data in JSON format.

An alternative, much more flexible means of communication is to use _messaging_ (message queue/bus).

The services do not send messages directly to each other; instead, there is a messaging service running on the network that takes care of delivering the messages between the services.

![Messaging: user management publishes new_user messages and the shopping cart publishes new_order messages to the messaging service; the service delivers them to the notification, recommendation and payment services that have subscribed to the topic]({{ "/images/4-26.png" | relative_url }}){:height="400px" }

The principle of messaging is that services _publish_ messages to the messaging service. Messages typically have a _topic_ and, in addition, _data content_, for example:

```json
{
  "topic": "new_user",
  "data": {
    "username": "Arto Hellas",
    "age": 31,
    "education": "PhD",
    "occupation": "Aalto University"
  }
}
```

Services can _subscribe_ to the messages on the topics they are interested in. For example, the service responsible for notifications could subscribe to messages whose topic is _new_user_ and send a welcome message to the new user. User management, which published the message, in turn does not know which services receive it. The messaging service forwards the messages it receives to all services that have subscribed to that topic.

So all messages are delivered through the messaging service, i.e. the services do not communicate directly with each other. This makes the microservices very loosely coupled, and changes can be made to one service without affecting the others, as long as the format and meaning of the messages stay the same. The messages thus become a contract between the services, and changing it requires just as much coordination as changing any interface.

From the sender's point of view, sending messages is _asynchronous_, i.e. the service sends a message and immediately continues executing its code, regardless of whether the message has been delivered to the services that subscribed to it.

Architectures based on delivering asynchronous messages (often also called _events_) are also called _event-driven_ architectures. Not all event-driven architectures are by any means microservice architectures; e.g. a user interface implemented with Python's Tkinter library communicates with the application using events.

#### Challenges of microservices

Despite their many advantages, applying a microservice architecture brings a whole set of new challenges. First of all, dividing the application into sensible microservices is difficult. A bad division into services may produce an application where every service has to talk over the network with, in the worst case, dozens of other services, and the performance of the application suffers. On the other hand, if a new feature affects several services, the changes have to be coordinated between the services and the teams responsible for them.

Debugging and testing an application consisting of several services is more complicated than debugging a monolithic one. This is especially true if the microservices use messaging.

Operating software consisting of dozens or hundreds of microservices on production servers is challenging and requires extensive automation. The same applies to the development environment and continuous integration.
Successfully applying microservices therefore requires a strong DevOps culture.

Container technology, which in practice means the [Docker](https://www.docker.com/) software, is widely used with microservices. Simplifying a little, containers are lightweight virtual machines, large numbers of which can be run on a single server. If a microservice runs in its own container, it is in practice equivalent to running the microservice on its own machine.

The topic is important, but unfortunately we cannot go into it at all
within this course. Fortunately, the Open University offers a suitable course on the topic: [DevOps with Docker](https://docker-hy.github.io/).

### Modular monolith

Because of the challenges of microservices, many well-known experts in the field recommend not choosing them by default. Sam Newman, who has written books about microservices, has [stated](https://www.infoq.com/news/2020/05/monolith-decomposition-newman/) that microservices should not be the default choice, and that you should turn to them only when simpler means are not enough. [Martin Fowler](https://martinfowler.com/bliki/MonolithFirst.html), in turn, recommends starting with a monolith and splitting it into services only when there is a clear need. People also move in the other direction: in 2023, the Amazon Prime Video team [reported](https://web.archive.org/web/20231230202019/https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90) that it had combined its video quality monitoring system, which consisted of distributed services, into a single application, which cut its infrastructure costs by 90%.

An intermediate form is the _modular monolith_. The application is released as a single whole, but internally it is divided by functionality into modules that have clear interfaces and do not use each other's internal parts or database tables. If needed, the module boundaries can later be turned into service boundaries.

Good reasons for microservices are especially the size of the organization and the different scalability needs of the parts of the system. When dozens of teams develop the same system, the benefits of dividing it into services start to outweigh the extra work it causes.

### Example: the course feedback system Norppa

Finally, let us look at what architecture looks like in a real system in production use. As an example we use the University of Helsinki course feedback system [Norppa](https://norppa.helsinki.fi), which is also used to collect feedback on this course. In addition to the University of Helsinki, Norppa is used by Tampere University and the University of Jyväskylä. Norppa has been developed and is maintained by the university's [Toska](https://toska.dev/) team, and its source code is [openly available on GitHub](https://github.com/UniversityOfHelsinkiCS/palaute).

The following picture shows the services related to Norppa:

![Overall architecture of Norppa: the UI running in the user's browser calls Norppa's backend through Shibboleth login; the backend uses a database and a Redis cache. Every night the Updater fetches all data from the Importer through the API Gateway and writes it into Norppa's database. The Importer's Fetcher fetches new data from SISU every hour and publishes it to a message queue, from which Workers write it into the Importer's database. The Importer API reads the database and serves the Updater and other applications through the API Gateway]({{ "/images/4-31.png" | relative_url }})

The picture shows that Norppa does not follow just one architectural style. Norppa's own core is a web application following a layered architecture, the core is part of a larger whole consisting of services, and one of the services, the Importer, is based on messaging. As stated earlier, the structure of an application most often shows features of several architectural styles.

#### Norppa's core: layered architecture

Norppa's core consists of a user interface implemented with React that runs in the browser (a single page application, SPA) and a server implemented with Node.js. The user interface talks to the server through a REST API using data in JSON format. The requests pass through the university's Shibboleth single sign-on service, so the server always knows who the user is.

![Norppa's layered architecture: at the top, as the presentation layer, the UI running in the browser; below it Shibboleth login; as the application logic layer Norppa's backend with its REST API and application logic; and at the bottom, as the data layer, the database and the Redis cache. Each layer uses only the layer below it]({{ "/images/4-32.png" | relative_url }}){:height="350px" }

The internal structure of the server is also layered, and the layers can be seen directly in the [directory structure](https://github.com/UniversityOfHelsinkiCS/palaute/tree/master/src/server):

- _routes_ contains the REST API handlers, which receive the HTTP requests and call the application logic
- _services_ contains the application logic, e.g. who is allowed to see the feedback of which course
- _models_ contains the definitions of the database tables, with which the data is stored in a PostgreSQL database

So the structure is very similar to the online store presented earlier. In addition, the server keeps frequently needed data in a Redis cache, so it does not have to be fetched from the SQL database on every request.

#### Norppa as part of a whole of services

Not all the functionality Norppa needs has been implemented in Norppa's own code. Part of the functionality is in Toska's shared services, which are used not only by Norppa but also by other applications developed by Toska:

- [JAMI](https://github.com/UniversityOfHelsinkiCS/jami) determines the user's access rights based on data from the university's identity management
- Pate takes care of sending emails, e.g. reminders to give feedback
- Importer fetches course and student data from the university's student information system SISU and provides it to other applications

In addition, Norppa has its own separate service, the [Updater](https://github.com/UniversityOfHelsinkiCS/norppa-updater), which every night fetches all course and student data from the Importer and updates it into Norppa's database.

![Norppa's services: the user uses Norppa, which uses its own database and the services JAMI (access rights) and Pate (emails). The Updater writes into Norppa's database and fetches the data from the Importer through the API Gateway; the Importer has its own database and fetches its data from SISU. Other applications also use the Importer through the API Gateway]({{ "/images/4-33.png" | relative_url }})

The whole has many features of a microservice architecture. Each service is its own application, which is released separately and has its own database. The services communicate with each other over the network, and other applications access the Importer's data through the _API Gateway_. An API Gateway is a service that routes requests coming from outside to the right services.

Dividing the system into services brings clear advantages. For example, handling SISU is complicated, and since it has been implemented once in the Importer, not every Toska application has to implement it itself. Faults can also be isolated: for example, an outage of the email service Pate does not prevent giving feedback. When Norppa is taken into use at another university, it is enough to implement that university's own version of the Updater, JAMI, Pate and the Importer, and Norppa's core can be deployed as it is.

The whole does not, however, follow the principles of microservices slavishly: the Updater writes directly into Norppa's database. The Updater and Norppa are therefore tightly coupled through the structure of the database, and if Norppa's database tables are changed, the Updater often has to be changed as well. The solution is practical, since both are maintained by the same team and the Updater's only task is to bring data into Norppa.

Norppa's core itself is not divided into microservices either. It is one application developed by one team, i.e. exactly the kind of situation where dividing it into microservices would cause more trouble than benefit.

#### Importer: a service based on messaging

The internal structure of the Importer is based on messaging. The Importer's _Fetcher_ fetches from SISU, every hour, the data that has changed since the previous fetch. The Fetcher does not, however, process and store the data itself; instead it publishes it as messages to a [BullMQ](https://bullmq.io/) message queue. The messages are processed from the queue by a set of _Workers_, which transform the data into a suitable format and store it in the Importer's database. Other applications read the stored data through the _Importer API_.

![Messaging in the Importer: data fetched from SISU goes to the Fetcher, which publishes it to the BullMQ message queue. From the queue, three parallel Workers process the messages and write them into the database, which the Importer API reads]({{ "/images/4-34.png" | relative_url }}){:height="400px" }

Using a message queue has several advantages:

- The Fetcher and the Workers are loosely coupled: the Fetcher does not know who processes the messages
- The queue evens out the load: if a lot of changed data comes from SISU at once, the messages wait in the queue, and processing can be sped up by starting more Workers
- If a Worker crashes in the middle of processing, the message is not lost but stays in the queue waiting to be processed again

BullMQ is a Node.js library that stores the queue in a Redis database. Unlike in the publish-subscribe model presented above, where a message is delivered to everyone who has subscribed to the topic, in the queue each message is given to only one Worker for processing. A queue like this is called a job queue or work queue.

### Describing the architecture

There is no single standardized notation for describing software architectures. In the golden age of UML in the late 1990s and the 2000s, architecture was often described with UML component and package diagrams, but nowadays they are rarely seen. Most often, architecture is described with informal box-and-arrow diagrams, like the following architecture description drawn on a whiteboard by my own [development team](https://toska.dev/):

![]({{ "/images/arkkit3.png" | relative_url }}){:height="450px" }

A common problem with informal diagrams is that they do not show at what level of detail the system is being described and what the boxes and arrows acually mean. Simon Brown's [C4 model](https://c4model.com/), which has gained popularity in recent years, aims to address this. In it, the architecture is described on four increasingly detailed levels: system context, containers, components and, if needed, code. C4 does not prescribe an exact notation; its idea is that each diagram has a clear level and every box and arrow is labeled.

Let us take the online store presented above as an example. At the highest level, in the _context diagram_, the system is a single box, and the diagram shows its users and the external systems it works with:

![C4 context diagram: the customer browses and buys products in the online store, which forwards payments to the payment provider and sends order confirmations through the email service]({{ "/images/4-19.png" | relative_url }}){:height="300px" }

The _container diagram_ opens up the contents of the system. By a container, C4 means a separately run and deployed part of the system that executes code or stores data, for example a web application, a mobile application or a database. The diagram also shows the implementation technology of each container and how the containers communicate:

![C4 container diagram: the customer uses the online store's Flask web application with a browser over HTTPS; the web application uses a PostgreSQL database and calls the external payment provider and email service]({{ "/images/4-24.png" | relative_url }}){:height="300px" }

> The term _container_ happens to be the same as the name used for the containers of tools like [Docker](https://www.docker.com/), but a C4 container does not mean a Docker container. A C4 container, for example a web application or a database, can certainly be run in a Docker container, but just as well directly on a server, in a cloud service or, say, on the user's phone.

The _component diagram_ details the internal structure of one container. The component diagram of the web application shows the same layer structure that we already saw with layered architecture: the user interface uses the services of the application logic, which use the database through the repositories. In addition, the diagram shows which components communicate with parts outside the container:

![C4 component diagram: the customer uses the user interface component of the web application (Flask routes and templates), which calls OstoskoriService and TilausService, which use TuoteRepository and TilausRepository; TilausService also calls the payment provider, and the repositories use the database]({{ "/images/4-25.png" | relative_url }}){:height="400px" }

The fourth level, code, is described if needed e.g. with UML class or package diagrams, but most often it is not drawn at all. Diagrams are increasingly drawn as code with text-based tools such as [Mermaid](https://mermaid.js.org/) and [Structurizr](https://structurizr.com/), which allows them to be versioned alongside the code.

The different levels of C4 serve different needs: high-level diagrams can be used to structure discussions with different stakeholders, and more detailed diagrams act as a guide for more detailed design and extension of the system. Pictures alone are not enough, however; the responsibilities of the components, the interfaces between them and the forms of communication must also be described. Otherwise the risk grows that the architecture is not followed.

A useful architecture description also justifies the [architectural choices](https://adr.github.io/) that have been made. It is not at all rare that, a couple of years later, people wonder about some architecture-level design decisions made in the software, and nobody remembers anymore the carefully considered reasons behind them.

A lightweight practice has become established for recording decisions: the _Architecture Decision Record_ (ADR). For each significant architectural decision, a short Markdown file, usually at most a page long, is written and stored in version control alongside the code, e.g. in the directory _docs/adr_. According to Michael Nygard's [original template](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), an ADR describes the context of the decision, the decision itself and its consequences, including the negative ones. Old decisions are not edited; if a decision changes, a new ADR is written that supersedes the previous one. This way the history of the decisions, along with their justifications, is preserved.

For example, the choice of database for the online store described above could be recorded as follows:

```markdown
# ADR 3: PostgreSQL as the database

Status: accepted 12.3.2026

## Context
Order and product data is relational and requires transactions.
The team knows SQL.

## Decision
Use PostgreSQL managed by a cloud provider.

## Consequences
+ transactions and integrity for orders
+ no database server of our own to maintain
- schema changes require migrations
- lock-in to the cloud provider
```

## Architecture in agile methods

A central theme of agile methods is the fast delivery of working software that produces value for the customer. This is stated clearly already in the principles of the Agile Manifesto:

- _Our highest priority is to satisfy the customer through early and continuous delivery of valuable software._

- _Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale._

Agile methods favor simplicity in design decisions:

- _Simplicity, the art of maximizing the amount of work not done, is essential_

Designing and documenting the architecture, on the other hand, has traditionally been a fairly long phase preceding the start of programming, a kind of _Big Design Up Front_. Agile methods and "architecture-driven" software development are thus to some extent in conflict with each other.

### Incremental architecture

In connection with agile methods, people often talk about [incremental design and architecture](https://www.jamesshore.com/Agile-Book/incremental_design.html).

The idea is that the architecture is thought out and documented to a _sufficient_ level at the start of the project. The final architecture of the software takes shape iteration by iteration while new functionality is implemented in the software. For example, an application following a layered architecture is not built "one layer at a time"; instead, in each iteration a small piece of every layer is built, as much as implementing the functionality of the iteration requires.

A fairly typical way is to start projects with a so-called [sprint zero](https://www.infoq.com/news/2008/09/sprint_zero/), during which e.g. a preliminary architecture, the development environment and the backlog are created. Scrum does not recognize the concept of sprint zero, and it has been criticized for tempting teams to do design without producing working software. Even sprint zero should therefore aim for a working, if minimal, skeleton of the software, e.g. the walking skeleton presented next.

### Walking skeleton

A common approach to incremental architecture is to use a _walking skeleton_. [Alistair Cockburn](https://web.archive.org/web/20160210222727/http://alistair.cockburn.us/Walking+skeleton) describes the concept as follows:

> A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function. It need not use the final architecture, but it should link together the main architectural components.
>
> The architecture and the functionality can then evolve in parallel.
>
> What constitutes a walking skeleton varies with the system being designed.
>
> For a layered architecture system, it is a working connection between all the layers.
>
> The walking skeleton is not complete or robust and it is missing the flesh of the application functionality. Incrementally, over time, the infrastructure will be completed and full functionality will be added.
>
> A walking skeleton, is permanent code, built with production coding habits, regression tests, and is intended to grow with the system.

So right at the start of the project, preferably already in the first sprint, the aim is to implement a _walking skeleton_ containing the frame of the designed architecture: it already contains a skeleton of all the basic components of the architecture, stub components corresponding to the layers, and the communication between them.

This skeleton is then gradually grown as the project progresses and the functionality of the application grows.

A walking skeleton is not just throwaway code; the code of the application is built around it. So when building the skeleton, it is already appropriate, where it makes sense, to program with the quality required of production code, i.e. following the project's Definition of Done.

### Benefits of incremental architecture

Traditionally, for example when using the waterfall model, a software architect has been responsible for the architecture, and programmers have been obliged to follow the architecture defined for the application.

Agile methods do not, as a starting point, recognize a separate architect role. For example, in Scrum all team members taking part in creating the increment have the title Developer, and no separate specialized roles are recognized within the team. The ideal of agile methods is that the development team creates the architecture together, which is also one of the principles of the Agile Manifesto:

- The best architectures, requirements, and designs emerge from self-organizing teams.

According to the agile ideal, the architecture of the software, like the code, is _collectively owned by the team_. This has a few advantages.

Developers are likely to be more committed to following an architecture created and owned by the team than an architecture defined by an architect outside the team sitting in an "ivory tower". Joint design does, however, require that everyone dares to propose their own solutions and to question the proposals of others. Otherwise the proposal of the most experienced team member easily becomes the architecture just because nobody suggests anything else.

The documentation of an architecture designed by the team itself can be light and informal, e.g. drawn on a whiteboard, since the team knows the spirit of the architecture in any case and is able to follow it. If someone outside designs the architecture, communicating it to the team requires heavier documentation.

The assumption in agile methods is that the best possible architecture cannot be designed at the start of the project, when the requirements, the environment and the implementation technologies are not yet known. It makes sense to change architectural decisions already made if it turns out over time that earlier choices do not support the development of the software in the best way.

So, as with requirements engineering, in architectural design agile methods also try to avoid work that is done too early and is likely to turn out to be unnecessary later.

An architecture collectively owned by the team is, however, an ideal that is not realized as such everywhere. Many organizations working in an agile way also employ architects, especially when several teams develop the same system or when the system has to fit together with the organization's other systems. For example, the large-scale agile development model [SAFe](/en/osa5#safe-the-scaled-agile-framework) defines several architect roles. In many software companies, on the other hand, technical guidelines that cross team boundaries are the responsibility of experienced developers, whose title may be e.g. _staff engineer_ or _principal engineer_. The task of an architect working in an agile spirit is, however, usually to support the teams and reconcile their solutions, not to dictate the architecture from above.

### Risks of incremental architecture

An incremental approach to forming the architecture requires good internal quality from the code and great discipline from the development team.

[Martin Fowler](https://martinfowler.com/articles/designDead.html) puts it as follows:

> Essentially, incremental design means that the design of the system grows as the system is implemented. Design is part of the programming processes and as the program evolves the design changes.
>
> In its common usage, incremental design is a disaster. The design ends up being the aggregation of a bunch of ad-hoc tactical decisions, each of which makes the code harder to alter.

According to Fowler's observations, the ideal of incremental architecture and design is only rarely realized. Most often, developer carelessness, schedule pressure and other reasons lead to the internal quality of the software starting to deteriorate over time, and eventually the software is a shapeless pile of spaghetti code, a [big ball of mud](https://www.laputan.org/mud/), whose maintenance and further development become very challenging.

Coding agents amplify this risk. An agent produces code quickly, and without guidance it easily makes exactly the kind of decisions Fowler warns about: it gets the requested functionality working, but it does not know the team's architectural guidelines unless it is told about them. If, for example, the agent needs data from the database in a route of the online store, it may call the repository directly from the route, bypassing the application logic layer. As a single change the solution works, but the layer structure erodes, and at the speed of an agent the erosion progresses quickly.

In the era of agents, it is therefore more important than ever that the key principles of the architecture are written down. The rules between layers and the most important guidelines should be recorded in the project's [instruction file](/en/genai/#managing-context), and [ADRs](#describing-the-architecture) kept in version control alongside the code act as context for an agent just as they do for a new team member. Instructions do not, however, guarantee that the agent follows them, so automatically checking the architectural rules in the CI pipeline, e.g. with the import-linter mentioned earlier, is especially useful with agents. The architectural decisions themselves still remain the team's responsibility. You can consider alternatives with an agent and draft an ADR, but evaluating the decision requires that the team understands what it is deciding.

## Object and component design

So the architecture of an application provides a framework that guides the more detailed design and implementation of the application. Design at this more detailed level is called object or component design, and its purpose is to refine the interfaces between the architectural components and to outline the more detailed class or module structure of the program.

In waterfall-style work, component design may be documented in great detail, e.g. using UML class and sequence diagrams. Especially in agile software development, however, detailed design usually happens only during programming.

Above all, software design aims to maximize the [internal quality of the code](/en/osa3#unit-testing), i.e. to keep the structure of the application easy to maintain and extend.

Important factors for maintainability and extensibility include the following:

- The code should be clear to read, and it should express, e.g. through naming, as clearly as possible what the code does, and bring out the "design" underlying the code
- It must be possible to change one place without the change causing side effects in parts of the code that the person making the change cannot anticipate
- If an extension or bug fix needs to be made to the program, it should be easy to find out where in the code the change should be made
- If "one thing" is changed in the program, all changes should happen in only one place in the code (a method, class or component)
- After changes and extensions, it should be easy to check that the change does not cause side effects elsewhere in the system

From the point of view of maintainability and extensibility, good code has a set of common properties, or _quality attributes_, such as the following:

- Encapsulation
- High cohesion
- Few dependencies
- No repetition
- Testability
- Clarity
- Simplicity

The first four are properties of the structure of the code, and testability and clarity largely follow from them. This is not mere folk wisdom: the principles of encapsulation, cohesion and dependencies were already formulated in research in the 1970s, and their connection to software quality has since been studied empirically. For example, [Tornhill and Borg](https://doi.org/10.1145/3524843.3528091) (2022) analyzed the codebases of 39 commercial software systems and found that low-quality code had 15 times more defects than high-quality code and that making changes to it took on average more than twice as long.

Let us now get acquainted with these quality attributes and with the principles and design solutions that make it possible to write code of high quality in terms of maintainability. Many of these principles of good design have been named and documented as _design patterns_.

We have already seen a few design patterns during the course, at least the following: _dependency injection_ and _repository_. Most of the design patterns covered in this course originated in object-oriented programming. Some of the design patterns are also relevant when using other paradigms, such as functional programming. Other paradigms also have their own design patterns, but we do not cover them in this course.

### Encapsulation

The [Advanced Course in Programming](https://ohjelmointi-21.mooc.fi/osa-9/3-kapselointi) (link to the Finnish version) defines _encapsulation_ as follows:

> A class can hide its attributes from its clients. In Python, this is done by adding an underscore to the beginning of the name of the attribute variable. Hiding data from the client is called encapsulation. As the name says, the attribute is "enclosed in a capsule", and the client is offered a suitable interface through which the data can be handled.

Let us take the shopping cart of the online store as an example:

```python
class Ostoskori:
    def __init__(self):
        self._ostokset = []

    def lisaa(self, tuote):
        self._ostokset.append(tuote)

    def hinta(self):
        return sum(t.hinta for t in self._ostokset)
```

> The established Python convention is to mark attributes and methods intended for use only inside the class with a _single_ underscore, like `self._ostokset` in the example. The underscore does not prevent using the attribute from outside the class; it is a matter of convention.

Only the methods `lisaa` (add) and `hinta` (price) are visible to the code that uses the shopping cart. The fact that the purchases are stored in a list is an internal matter of the class. If the way of storing them is changed later, e.g. to a dictionary where the key is the product and the value its quantity, the change is confined within the class, and the code that uses the shopping cart does not need to be touched. The shopping cart thus encapsulates the form in which the purchases are stored, as well as how the total price of the purchases is calculated.

A beginner programmer often associates encapsulation specifically with _defining the attributes of an object as hidden and creating accessor methods for them where needed_. This is, however, a rather narrow view of encapsulation. In addition to the internal state of an object, the target of encapsulation can be e.g. the type of the object used, the algorithm used, the way objects are created, the structure of the component used, etc...

A broader view of encapsulation was formulated already by David Parnas in his classic article [On the criteria to be used in decomposing systems into modules](https://doi.org/10.1145/361598.361623) (1972). According to Parnas, a program should be divided into modules so that each module hides inside it one design decision that is likely to change, e.g. a data structure or an algorithm. The principle is called _information hiding_.

Many design patterns are precisely about encapsulating things at different levels, and we will soon see examples of this.

The aim of encapsulation can also be seen at the level of software architecture. For example, in a layered architecture, an upper layer uses only the interface the layer below it offers outwards; everything else is encapsulated out of sight. Similarly, in microservice architectures, an individual service encapsulates the internal logic of its functionality and offers outwards only an interface that is used over the network.

### Cohesion

_Cohesion_ means how well the code in a method, class or component focuses on implementing a single specific piece of functionality. The highest possible degree of cohesion is considered a good thing. The concepts of cohesion and coupling were introduced by Stevens, Myers and Constantine in their article [Structured Design](https://doi.org/10.1147/sj.132.0115) (1974).

So you should aim for cohesion at all levels of the program: in methods, classes and components.

#### Cohesion at the method level

As an example, let us look at a method that fetches data from a database. The code of the method looks like this:

```python
# SQL_SELECT_PRODUCTS is a constant that contains an SQL query

def find_all_products(self):
    connection = sqlite3.connect(DATABASE_FILE_PATH)
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()
    cursor.execute(SQL_SELECT_PRODUCTS)
    rows = cursor.fetchall()

    products = []

    for row in rows:
        products.append(Product(row["name"], row["brand"], row["retail_price"]))

    connection.close()

    return products
```

The method does many things:

- Creates a connection to the database
- Makes a database query
- Goes through the result rows of the query and creates a `Product` object for each result row
- Closes the connection

The method also operates on many different _levels of abstraction_. On the one hand, it deals with technical database-level matters such as opening a database connection and making a query; on the other hand, with `Product` objects that are meaningful at the level of the application logic.

So the method's level of cohesion is very poor.

The method is easy to _refactor_ by splitting it into smaller parts, whose calls the original method coordinates.

```python
def find_all_products(self):
    connection = self.get_database_connection()
    rows = self.get_rows(connection)
    products = self.get_products_by_rows(rows)
    connection.close()

    return products

def get_database_connection(self):
    connection = sqlite3.connect(DATABASE_FILE_PATH)
    connection.row_factory = sqlite3.Row

    return connection

def get_rows(self, connection):
    cursor = connection.cursor()
    cursor.execute(SQL_SELECT_PRODUCTS)

    return cursor.fetchall()

def get_products_by_rows(self, rows):
    products = []

    for row in rows:
        products.append(Product(row["name"], row["brand"], row["retail_price"]))

    return products
```

The individual methods now all operate on the same level of abstraction and are descriptively named.

#### Cohesion at the class level

The aim of class-level cohesion is that a class is _responsible_ for only one thing. This is also known as the [single responsibility](https://en.wikipedia.org/wiki/Single_responsibility_principle) principle (SRP). Robert Martin defines that a class has one responsibility _if it has only one reason to change_.

In the first exercises of the course, we looked at a simple calculator:

```python
class Laskin:
    def __init__(self):
        self.lue = input
        self.kirjoita = print

    def suorita(self):
        while True:
            luku1 = int(self.lue("Luku 1:"))

            if luku1 == -9999:
                return

            luku2 = int(self.lue("Luku 2:"))

            if luku2 == -9999:
                return

            vastaus = self.laske_summa(luku1, luku2)

            self.kirjoita(f"Summa: {vastaus}")

    def laske_summa(self, luku1, luku2):
        return luku1 + luku2
```

The class violates the single responsibility principle. Why? The principle says that a class may have only one responsibility, i.e. one reason to change. This class, however, has several reasons to change:

- We want to implement new arithmetic operations for the class
- We want to handle communication with the user in some other way than through the console

Communication with the user can be separated into its own class, an object _io_ of which is injected into the calculator as a constructor parameter. This reduces the responsibilities of the Laskin (calculator) class:

```python
class Laskin:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        while True:
            luku1 = int(self.io.lue("Luku 1:"))

            if luku1 == -9999:
                return

            luku2 = int(self.io.lue("Luku 2:"))

            if luku2 == -9999:
                return

            vastaus = self.laske_summa(luku1, luku2)

            self.io.kirjoita(f"Summa: {vastaus}")

    def laske_summa(self, luku1, luku2):
        return luku1 + luku2
```

Now a change in the way of communicating does not require any changes to the class `Laskin`, provided that the new way of communicating implements the same method interface through which the `Laskin` class handles communication, i.e. the methods `lue` (read) and `kirjoita` (write).

So even though, from the point of view of its user, the class `Laskin` still does the same things as before, it does not handle everything itself but _delegates_ some of its responsibilities elsewhere.

The communication can be implemented e.g. as follows:

```python
class KonsoliIO:
    def lue(self, teksti):
        return input(teksti)

    def kirjoita(self, teksti):
        print(teksti)
```

The calculator is configured by injecting into it an object that implements the methods `lue` and `kirjoita`. The injection happens through a constructor parameter:

```python
def main():
    io = KonsoliIO()
    laskin = Laskin(io)

    laskin.suorita()
```

For testing, a _stub_, i.e. a fake component, can be implemented, with which a test can control the "user's" inputs and read the program's output:

```python
class StubIO:
    def __init__(self, inputs):
        self.inputs = inputs
        self.outputs = []

    def lue(self, teksti):
        return self.inputs.pop(0)

    def kirjoita(self, teksti):
        self.outputs.append(teksti)
```

The structure of the improved calculator as a class diagram:

![](https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-1.png)

The class is not yet optimal in every respect when it comes to extensibility. We will return to this shortly.

#### Cohesion at the component level

Cohesion and the _single responsibility_ principle are not only concepts related to object-oriented programming but universal principles of good code. If you think of the React library used in the course [Full stack open](https://fullstackopen.com/), its principle is also to compose the user interface from small components, each of which focuses on one thing, e.g. rendering the HTML code of a single button. Handling the state of the application, on the other hand, is separated from the views into its own whole, e.g. a state management library such as Redux or Zustand, which is responsible only for the state and its changes.

The principle of cohesion is also visible at the level of application architectures. In a layered architecture, each layer of the application focuses on matters of its own level of abstraction; e.g. the application logic does not concern itself with the user interface or the way data is stored. In microservice architectures, cohesion shows up a bit differently: an individual microservice focuses on implementing a single piece of business-level functionality, e.g. the recommendation algorithm or the billing of an online store.

#### Why high cohesion?

Let us summarize why you should aim for high cohesion:

- _A change targets one place._ When a class has only one reason to change, e.g. changing the way the calculator communicates only affects the IO class, the change does not cause side effects elsewhere.
- _The code is easier to understand._ The name of a class or function that focuses on one thing tells what it does.
- _The code is easier to test._ The calculation logic of the calculator can be tested with StubIO without the console. Similarly, in a web application, input validation can be tested without an HTTP request and a database if the validation has been separated into its own whole.
- _The code can be reused._ Functionality separated into its own whole, e.g. input validation, can also be used elsewhere.

### Low coupling

A program written in the spirit of the single responsibility principle consists of a large number of objects/components with a large number of small methods.

Objects have to interact with each other to implement the functionality of the program. The principle of _low coupling_ aims to eliminate dependencies between classes and objects.

Since by the principle of high cohesion there are many objects, dependencies are inevitable. So how can dependencies be eliminated? The idea is to eliminate unnecessary dependencies _and_ to avoid dependencies on concrete things.

A dependency should target something that does not change easily, i.e. an interface. The same idea goes by a couple of different names:

- Program to an interface, not to an implementation
- Depend on abstractions, not on concrete implementation

The first formulation comes from the book that made design patterns famous, [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns) (Gamma, Helm, Johnson and Vlissides, 1994). The latter is Robert Martin's [dependency inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle) principle (1996).

In Java and many other statically typed languages, an interface is a language construct of its own. In Python, interfaces have traditionally been informal: an interface means the knowledge of what kind of methods the object used as a dependency has, and any object that has the required methods will do (so-called [duck typing](https://en.wikipedia.org/wiki/Duck_typing)).

<details markdown="1" class="lisatieto">
<summary markdown="span">More information: defining an interface in Python</summary>

In Python, an interface can also be written out explicitly as a [Protocol](https://docs.python.org/3/library/typing.html#typing.Protocol) class. For example, the interface of the `KonsoliIO` class from the earlier calculator example would look like this:

```python
from typing import Protocol

class IO(Protocol):
    def lue(self, teksti: str) -> str: ...
    def kirjoita(self, teksti: str) -> None: ...
```

When the calculator's constructor parameter is typed with this interface, i.e. `def __init__(self, io: IO)`, a type checker such as [mypy](https://mypy-lang.org/) or [Pyright](https://github.com/microsoft/pyright) ensures already before the program is run that the object given to the calculator has the required methods. A class implementing the interface does not need to inherit from it; it is enough that it has the right kind of methods.

</details>

A concrete dependency can be eliminated by giving the object the implementations of its dependencies, for example through the constructor or a method call. We have done this in the course since the very first week. In the [week 1 exercises](/en/tehtavat1/#15-dependency-injection-part-2-nhl-statistics), the `StatisticsService` handling NHL statistics initially created the `PlayerReader` object it needed by itself, and that object fetched the player data from the internet. The concrete dependency was eliminated by changing the class so that it receives the reader as a constructor parameter:

```python
class StatisticsService:
    def __init__(self, reader):
        self._players = reader.get_players()

# in the application, the players are fetched from the internet
stats = StatisticsService(PlayerReader(url))

# the tests use a stub that returns a hard-coded list of players
stats = StatisticsService(PlayerReaderStub())
```

`StatisticsService` no longer knows where the players come from. Any object that has the method `get_players` will do for it, and thanks to this, the class could be tested without a network connection. In the same way, the calculator's dependency on the console was replaced with an `io` object given through the constructor. The dependency injection design pattern thus serves as a tool for eliminating concrete dependencies.

Some of the dependencies between classes are unnecessary, and they should be eliminated by changing the responsibilities of the classes.

Inheritance also creates a dependency between the inheriting class and the class it inherits from. The bank account example [Favour composition over inheritance](#favour-composition-over-inheritance-or-when-not-to-inherit) at the end of this part shows how to get rid of the dependency caused by inheritance with the help of the design patterns [strategy](#strategy) and [static factory method](#static-factory-method). In the [calculator example](#encapsulating-functionality-the-calculator-and-strategy), on the other hand, the calculator's dependencies on individual arithmetic operations are eliminated by encapsulating the operations as objects of their own with the help of the design patterns strategy and [command](#command). The examples are related to the week 6 exercises.

<details markdown="1" class="lisatieto">
<summary markdown="span">More information: measuring cohesion and coupling</summary>

Cohesion and the amount of coupling can also be measured. Chidamber and Kemerer defined [object-oriented design metrics](https://doi.org/10.1109/32.295895) (1994), which include e.g. LCOM (lack of cohesion in methods), which measures how unified the methods of a class are, and CBO (coupling between objects), which measures the dependencies of a class.

LCOM is based on whether the methods of a class use the same attributes. As an example, let us look at the following class:

```python
class Tilaus:
    def __init__(self, tuotteet, email):
        self._tuotteet = tuotteet
        self._email = email

    def hinta(self):
        return sum(t.hinta for t in self._tuotteet)

    def tuotteiden_maara(self):
        return len(self._tuotteet)

    def email_kelvollinen(self):
        return "@" in self._email

    def email_palvelin(self):
        return self._email.split("@")[1]
```

The methods `hinta` and `tuotteiden_maara` use only the attribute `_tuotteet` (products), while the methods `email_kelvollinen` and `email_palvelin` use only the attribute `_email`. The methods thus divide into two groups that have no attributes in common, and the LCOM value of the class is high, i.e. its cohesion is weak. This suggests that the class has two separate responsibilities and that handling the email address should be separated into its own class.

CBO, in turn, tells how many other classes a class is coupled to, i.e. how many other classes' methods or attributes it uses or how many other classes use it. The `Tilaus` (order) of the example uses the attribute `hinta` of the product objects, so its own code couples it to one other class.

The metrics have been found to be connected to code quality. [Basili et al.](https://doi.org/10.1109/32.544352) (1996) found that the metrics predicted the fault-proneness of classes: the more dependencies a class had, the more likely it was to contain defects. The metrics are, however, only indicative: they tell you which parts of the code deserve attention, but not how the code should be fixed.

</details>

### No repetition

Of the quality attributes of code, we have covered _encapsulation, cohesion_ and _low coupling_. Next up is redundancy, i.e. repetition.

Beginner programmers are warned about the dangers of repetition from the very first steps of their careers; surely everyone has heard the warning: _don't copy-paste code_!

In the field, the principle warning against repetition is called [don't repeat yourself](https://wiki.c2.com/?DontRepeatYourself), and it is often referred to by the abbreviation _DRY_.

The most obvious form of repetition in code is exactly copy-paste, and it is often easy to eliminate e.g. with functions or methods. Not all repetition is as obvious, and many design patterns are precisely about eliminating more subtle forms of repetition. We will see examples of this in the chapter [Design patterns](#design-patterns-week-6) at the end of this part.

The most obvious problem with a code snippet copied to many places is that if a bug is found in the copied code or the logic of its functionality needs to change, it is laborious to make the change in many places. Usually a code snippet copied to many places is also a sign that e.g. the cohesion of the code could be improved. The problem is not only theoretical. [Juergens et al.](https://doi.org/10.1109/ICSE.2009.5070547) (2009) studied copied code in several industrial software systems and found that when only some of the copies had been changed and the difference had not been made on purpose, every second such inconsistency was a defect.

The DRY principle acually goes much further than just eliminating repetition in code. The definition in the book [Pragmatic programmer](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), _every piece of knowledge must have a single, unambiguous, authoritative representation within a system_, suggests that in addition to code, the principle should be extended to other parts of the system as well, such as the database schema, tests, build scripts etc.

The spirit of the Pragmatic programmer's definition may not be fully graspable without a concrete example. Suppose the online store we have developed were also taken into use in countries that do not use the euro as their currency. If the application does not follow the DRY principle in handling currency, the change would presumably require changes in several different places in the application. If, on the other hand, the handling of currency had a _single authoritative representation_, e.g. it were encapsulated well enough as the responsibility of the class `Money`, adding support for other currencies might require nothing more than modifying the code of a single class.

#### Good vs. bad copy-paste

Although avoiding repetition in code, configurations, the database schema etc. is generally a good thing, it may sometimes make sense to at least first make a quick solution based on copy-paste and [refactor](/en/osa4/#refactoring) the code into a cleaner form later if needed.

In many situations, removing copy-paste has a price: it may make the application more complicated. Sandi Metz has summarized this as [duplication is far cheaper than the wrong abstraction](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction): an abstraction made too early that turns out to be wrong can end up more expensive than repetitive code. A small amount of repetitive code can be a perfectly adequate solution, and removing it is not necessarily worth the trouble. If, however, the same structure has to be copied to more and more places, the original solution no longer bends to the needs and refactoring starts to pay off. The [Gutenberg reader](#gutenberg-reader-removing-non-trivial-copy-paste) covered at the end of this part is an example of such a situation.

A fairly good principle is therefore [three strikes and you refactor](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>): similar code logic in two places is more or less ok, but if it has to be copied to a third place, it is better to refactor the code so that the copy-paste is eliminated.

### Testability

An important feature of good code is its testability, i.e. the code is easy to test thoroughly with unit and integration tests. Easy testability usually follows from the code consisting of loosely coupled components with clear responsibilities.

Conversely, if thoroughly testing the code is difficult, it is often a consequence of the responsibilities of the components not being clear and the components having too many dependencies.

Since the first week of the course, we have aimed for good testability of code, e.g. by removing unnecessary dependencies with dependency injection.

### Clarity

In the past, because of the limited resources of computers, code was often written to be as compact and efficient as possible at the expense of readability. Nowadays the aim is code that, already through its naming and structure, expresses as well as possible what it does.

In addition to clear naming, other hallmarks of readable, or "clean", code are many things already familiar to us:

- consistent indentation and formatting
- short functions and methods that focus on one thing
- avoiding deeply nested structures
- replacing "magic numbers" with named constants
- comments only where the code does not express its purpose by itself

These and many other practices are covered e.g. in Python's style guide [PEP 8](https://peps.python.org/pep-0008/) and in Robert Martin's book [Clean Code](https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884).

Why is writing clear code so important; isn't it enough that the coder understands what the code is about? This is definitely not enough, since most of the time spent on programming goes into reading and understanding existing code. [Xia et al.](https://doi.org/10.1109/TSE.2017.2734091) (2018) followed the work of 78 professional programmers for a total of more than 3,000 hours and found that about 58% of working time was spent on understanding code. Robert Martin has estimated the [ratio of reading to writing](https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is) to be as high as 10:1. Code, whether written by yourself or by someone else, has to be read when debugging and when extending the application.

It is very typical that your own code, which was so clear back when you wrote it, is not quite as clear a couple of months later:

![]({{ "/images/4-13.jpg" | relative_url }}){:height="350px"}

### Simplicity

Design patterns increase the flexibility of code, but flexibility has its price: in the [calculator example](#encapsulating-functionality-the-calculator-and-strategy) at the end of this part, the number of classes grows and understanding how the program works becomes harder. That is why the list of quality attributes also includes _simplicity_. The principle is often referred to by the abbreviations KISS (keep it simple, stupid) and [YAGNI](https://martinfowler.com/bliki/Yagni.html) (you aren't gonna need it). The latter comes from Extreme Programming, and according to it you should not add functionality or flexibility to the code in case it might be needed someday. Anticipated needs often never materialize, and unused flexibility makes the code harder to understand and change.

So a design pattern should be taken into use only when there is a real need for it, e.g. when the same repetitive structure comes up for the third time (see [three strikes and you refactor](#good-vs-bad-copy-paste)). When the code is kept tested and clean, adding flexibility by [refactoring](#refactoring) is easy later as well. The principle is also relevant when using coding agents, since agents easily produce unnecessary abstractions and prepare for situations that were not asked for.

### Code smell

Suspicious features in code have come to be called _code smells_.

[Paraphrasing](https://martinfowler.com/books/refactoring.html) Martin Fowler's definition, a code smell is a fairly easily noticeable sign that something is wrong in the code. Although even a beginner programmer may be able to detect a code smell, the real cause behind it may lie somewhere deeper, even in the design of the program. A code smell thus tells that, for one reason or another, the internal quality of the code is not at the best possible level.

There are many kinds of code smells at many levels. A few examples of easily recognizable smells:

- Duplicated code
- Methods and functions that are too long
- Classes with too many instance variables
- Classes with too much code
- Parameter lists of methods that are too long
- Unclear names of variables, methods or classes
- Comments

In fact, all of these are signs of phenomena that weaken the quality attributes of good code listed above. For example, a very long method probably means that the cohesion of the method is poor; likewise, a class with a lot of code or instance variables very likely means that the single responsibility principle is not being followed. If the methods of a class have many parameters, it may indicate that some of the data is the responsibility of the wrong class, or that the method should rather be in some other class. The harmfulness of code smells has also been studied. For example, [Khomh et al.](https://doi.org/10.1007/s10664-011-9171-y) (2012) analyzed the version history of several open source projects and found that classes containing smelly structures had to be changed more often and contained defects more often than other classes.

Listing comments as a code smell may seem surprising. The point is that a comment explaining _what_ the code does is often a sign that the code should be written more clearly, e.g. with better naming or by splitting it into smaller parts. Such comments also easily become outdated when the code is changed but the comment is not. Not all comments are smells, however. Valuable comments are those that tell _why_ the code has been written in a certain way, e.g. the justification for an unusual solution or a reference to a bug report, as well as docstrings describing how to use functions and classes. These are useful both for humans and for coding agents.

Let us take a couple of examples of slightly less obvious code smells.

[Primitive obsession](https://sourcemaking.com/refactoring/primitive-obsession) means a situation where some concrete concept, e.g. an _address_ or an _amount of money_, is represented with variables of primitive types (e.g. a string or an integer), instead of defining a class to represent it.

The name [shotgun surgery](https://sourcemaking.com/refactoring/shotgun-surgery) describes a situation where changing or extending one logical thing, or fixing a bug in it, causes a series of changes in really many other places in the code as well. This is a symptom of the functionality not being encapsulated well enough in one code module, i.e. a design that violates the DRY principle.

There are large numbers of lists of code smells on the internet, e.g. the following

- <https://sourcemaking.com/refactoring/bad-smells-in-code>
- <https://blog.codinghorror.com/code-smells/>

### Refactoring

The cure for problems in the internal quality of an application's code is _refactoring_, i.e. a change to the code, for example to the structure of a class, that nevertheless keeps its functionality unchanged.

Refactoring as a systematic means of improving the internal quality of code was brought to the awareness of the masses by Martin Fowler's book [Refactoring](https://martinfowler.com/books/refactoring.html), published in 1999. The second, completely rewritten edition of the book came out in 2018.

Fowler's book lists numerous refactoring operations that improve the structure of code and suit specific situations. The refactorings listed in the book can also be found [on the internet](https://refactoring.com/catalog/index.html). Here are a few examples:

- _Rename variable/method/class_: rename a badly named thing
- _Extract method_: split a method that is too long by extracting smaller methods from it
- _Move field/method_: move an instance variable or a method to another class
- _Extract superclass_: create a superclass and move part of the class's functionality into it

In quite many less straightforward refactoring operations, suboptimal code is refactored into better code by applying some design pattern. Joshua Kerievsky has written an excellent book on the topic, [Refactoring to patterns](https://martinfowler.com/books/r2p.html).

The examples in the chapter [Design patterns](#design-patterns-week-6) at the end of this part make refactorings of this kind, e.g.

- The interest payment strategy of the accounts, [replace conditional with polymorfism](https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html)
- Creating the accounts, [replace constructor with factory function](https://refactoring.com/catalog/replaceConstructorWithFactoryFunction.html)
- The commands of the calculator, [replace function with command](https://refactoring.com/catalog/replaceFunctionWithCommand.html)
- The binary operations of the calculator, [form template method](https://sourcemaking.com/refactoring/form-template-method).

An almost absolute prerequisite for refactoring (excluding simple automatically performed refactorings such as _rename variable_) is the existence of comprehensive tests. The purpose of refactoring is only to improve the internal structure of a class or component; the functionality visible from the outside should stay unchanged, and making sure of this without tests is laborious.

When refactoring, you should definitely proceed in small steps, i.e. one controlled change at a time. The tests should be run after every refactoring operation so that a possible regression, i.e. breaking code that worked before, is noticed as quickly as possible.

You should refactor almost all the time. When the internal quality of the code stays clean, extending the code is pleasant and making small refactoring operations is relatively effortless. If the internal quality of the code is allowed to deteriorate, extending it becomes slow, and refactoring also becomes more and more laborious. Some software development teams have therefore written into their _Definition of Done_ that being done includes the code having been refactored clean enough. Cleanliness may be monitored e.g. through [code review done as pull requests](/en/osa3/#code-review-github-and-pull-requests).

Some refactorings, e.g. renaming methods or classes or splitting long methods into smaller ones, are easy. This is not always the case, however. Sometimes there is a need for larger-scale refactorings in which the structure of the program, i.e. its architecture, changes. Such refactorings may take days or even weeks, and performing them so that the code keeps working the whole time is already fairly challenging.

With coding agents, refactoring needs special attention. An agent usually optimizes for getting the requested functionality working, and it would rather add new code than clean up existing code. This can also be seen in [GitClear's research](https://www.gitclear.com/ai_assistant_code_quality_2025_research), according to which, as AI-assisted programming became more common, the share of copy-pasted code among changed lines grew and the share of moved code related to refactoring dropped clearly (see the [AI material](/en/genai/#design-principles-and-the-agent) for more). It is therefore a good idea to ask the agent to refactor as a separate step, in the spirit of the red-green-refactor cycle of [TDD](/en/osa3/#test-driven-development): first get the functionality working, then make the code clean. Principles such as reusing existing code instead of copying it should also be written into the project's instruction file (e.g. `AGENTS.md`). On the other hand, agents have made refactoring cheap: when comprehensive tests are in place, an agent carries out even an extensive refactoring quickly.

### Technical debt

Code is not always optimal in its internal quality, and sometimes it is even in the customer's interest to write lower-quality code. Poor design and/or programming has come to be described with the concept of _[technical debt](https://martinfowler.com/bliki/TechnicalDebt.html)_. The term was introduced by [Ward Cunningham ](http://c2.com/doc/oopsla92.html) in 1992. He compared code written on the basis of incomplete understanding to a loan, the interest on which is paid until the code is fixed to match a better understanding.

Programming done by taking shortcuts may quickly produce some functionality, but the hasty solution will be paid back with interest later _if_ the program is meant to be extended. In practice, the problems in internal quality that have accumulated in the code, i.e. _technical debt_, start to slow down development, and implementing new features becomes harder and more expensive all the time.

On the other hand, if the time to pay the interest never comes, e.g. the program is just a prototype or is never taken into use, taking on technical debt is a worthwhile solution from the customer's point of view.

[Part 2](/en/osa2/#experimental-requirements-engineering-lean-startup) covered the _lean startup_ way of validating the usefulness of new features of software by building a _minimum viable product (MVP)_ implementing the feature, i.e. a just barely sufficient solution with which the usefulness of the feature can be tested. As the name already suggests, an MVP is by nature a construction in which technical debt is deliberately taken on. _If_ the feature turns out to be wanted, the technical debt is paid off by making a more robust implementation of the functionality.

Taking on short-term technical debt may sometimes even be necessary. For example, because of the market situation, it may be essential to get the product to consumers as quickly as possible, or the opportunity may be missed altogether.
For startup companies, the situation may be such that the company has to choose between technical debt and certainly running out of money. By making something quickly with poor internal quality, the company may be able to raise enough funding to continue operating. In situations like this, technical debt is taken on deliberately, and the poor quality of the application's code and the lack of testing are dealt with later.

So technical debt is not just a bad thing; used strategically it is even a good tool, just like e.g. a mortgage: without a loan, not everyone can afford to own a home. It is essential, however, to size the loan correctly, or the consequence may be a loss of creditworthiness.

There can thus be many kinds of reasons behind technical debt, e.g. recklessness, lack of skill, ignorance or a deliberate decision. Martin Fowler [divides](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) technical debt into four different classes:

1. Reckless and deliberate: "we do not have time for design"
2. Reckless and inadvertent: "what is layering?"
3. Prudent and inadvertent: "now we know how we should have done it"
4. Prudent and deliberate: "we must ship now and will deal with consequences"

The _reckless_ technical debt of classes 1 and 2 can be thought of as bad technical debt. The former arises deliberately, i.e. thinking that there is no time for quality; the latter arises inadvertently, through lack of skill.

Classes 3 and 4 are _prudent_ technical debt, i.e. debt that arises after consideration. Class 4 is exactly the situation where e.g. an MVP is being made, or the code has to be released right away for some compelling reason and it is decided to deal with the consequences later. Class 3 is a very common situation: the software was designed and built with the best intentions, but only much later, when the architecture and design have already been fixed, is enough learned about the nature of the application to know _how the application should have been designed_. Such a situation may end up being resolved by refactoring the architecture of the application to better match the needs.

Technical debt cannot be dealt with, however, if it is not talked about. Admitting debt that arose from lack of skill in particular can feel like admitting one's own lack of skill, so the team should treat debt as a shared matter rather than looking for whoever caused it.

### Code quality and coding agents

The quality attributes presented in this part do not lose their significance even though an ever larger share of code is produced with the help of coding agents. An agent sees only part of the codebase at a time, so the same things apply to it as to a human getting to know the code. When the cohesion of the code is high, there are few dependencies, and the code is free of repetition and clearly named, the agent finds the place to change more easily and the change stays local. Comprehensive tests are a prerequisite for changes made by an agent in the same way as for refactoring.

This has also been studied. [Borg et al.](https://arxiv.org/abs/2601.02200) (2026) asked language models to refactor 5,000 Python files and checked with tests whether the behavior of the code was preserved. Five medium-sized language models broke the behavior of high-quality code about 15–30% less often than that of low-quality code. With the most powerful models, however, no difference was observed. The researchers represent a company that measures code quality, so the results should be taken with some caution.

An agent can also erode code, since it gets the requested functionality working quickly but does not on its own follow the principles of good design or take care of the architecture of the software. There is more on this in the chapter [Design principles and the agent](/en/genai/#design-principles-and-the-agent) of the AI material. The end result is not, however, inevitably worse code. In a [controlled experiment](https://arxiv.org/abs/2507.00788) (Borg et al. 2025, 151 participants), code written with the help of AI was no harder to develop further than code written without AI. What matters is how well the agent is guided and how its output is reviewed.

The extreme case is so-called [vibe coding](/en/genai/#vibe-coding-vs-controlled-agentic-software-development), where the code produced by the agent is accepted without reading it, as long as it seems to work. The result is two kinds of debt. Technical debt accumulates when copy-paste, unnecessary abstractions and unrefactored structures are left in the code. Alongside technical debt, _[cognitive debt](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/)_ can also arise: when nobody gets familiar with the code written by the agent, the team ends up maintaining an application whose workings nobody understands anymore. The design principles of this part are exactly the knowledge with which the agent's output is evaluated.

## Design patterns [week 6]

A _design pattern_ is a named and documented solution to a problem that comes up repeatedly in software design. A design pattern is not ready-made code or a library, but a description of the idea of a solution, which is adapted to the situation at hand. In addition to its name, a pattern typically tells which problem it suits, what the structure of the solution is like and what consequences using it has. The names are an important part of the benefit of design patterns, since they give software developers a shared vocabulary: when someone says they are using a strategy or a decorator, others immediately know what kind of structure is meant.

The idea comes from building architecture. In his book [A Pattern Language](https://en.wikipedia.org/wiki/A_Pattern_Language) (1977), the architect Christopher Alexander described problems that recur in the design of buildings and cities and their proven solutions. Kent Beck and Ward Cunningham brought the idea to programming [in 1987](https://c2.com/doc/oopsla87.html), and design patterns were brought to wide awareness by the book [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns) (Gamma, Helm, Johnson and Vlissides, 1994), whose authors are known as the _Gang of Four_ (GoF). The book presents 23 object-oriented design patterns divided into three groups: creational patterns (e.g. factory and builder), structural patterns (e.g. decorator) and behavioral patterns (e.g. strategy, command and template method). Since then, patterns have also been documented for many other levels; e.g. the _repository_ already familiar to us comes from Martin Fowler's book [Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/) (2002).

Design patterns have also been criticized. Many of the patterns in the GoF book patch limitations of the object-oriented programming languages of the 1990s, such as C++, and e.g. Peter Norvig [showed](https://norvig.com/design-patterns/) already in 1996 that in dynamic languages most of the book's patterns become simpler or unnecessary. We will see the same with Python: a strategy can often be implemented as just a function passed as a parameter. In addition, eager use of patterns easily leads to unnecessarily complex code, as was noted in the section [simplicity](#simplicity).

Next, let us get acquainted with a set of design patterns through examples. The examples illustrate the quality attributes covered above: the bank account and calculator examples relate to [low coupling](#low-coupling) and encapsulation, the Gutenberg reader to [avoiding repetition](#no-repetition). Finally, using a stack example, we get acquainted with the design patterns decorator and builder.

### Favour composition over inheritance, or when not to inherit

As was noted in connection with [low coupling](#low-coupling), inheritance creates a dependency between the inheriting class and the class it inherits from, and in some cases this can be problematic. One cornerstone of object-oriented design is therefore the principle [Favour composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance), i.e. prefer objects that work together over inheritance.

Let us look at an example that illustrates the situation.

We have a class that models a bank account:

```python
class Tili:
    def __init__(self, tilinumero, omistaja, korkoprosentti):
        self.tilinumero = tilinumero
        self.omistaja = omistaja
        self.korkoprosentti = korkoprosentti
        self.saldo = 0

    def siirra_rahaa_tililta(self, tilille, summa):
        if self.saldo < summa:
            return False

        self.saldo = self.saldo - summa
        tilille.saldo = tilille.saldo + summa

        return True

    def maksa_korko(self):
        self.saldo = self.saldo * (1 + self.korkoprosentti)
```

The customer's requirements change, and there is a need for an account whose interest is based on either the 1, 3, 6 or 12 month Euribor rate. We decide to create a new class `EuriborTili` by inheriting the class `Tili` (account) and overriding the method `maksa_korko` (pay interest) so that the current value of the Euribor rate is fetched from the web:

```python
class EuriborTili(Tili):
    def __init__(self, tilinumero, omistaja, kuukauden):
        super().__init__(tilinumero, omistaja, 0)
        self.kuukauden = kuukauden

    def get_korko(self):
        data = urllib.request.urlopen(
            "https://www.euribor-rates.eu/en/current-euribor-rates/"
        ).read()

        rivi_pattern = re.compile(r"Euribor " + str(self.kuukauden) + " months[^%]+%")
        rivi_match = rivi_pattern.search(str(data))

        if rivi_match is None:
            return 0

        sarake_pattern = re.compile(r"\-?([0-9]|\.)+ %")
        sarake_match = sarake_pattern.search(rivi_match.group(0))

        if sarake_match is None:
            return 0

        return float(sarake_match.group(0).replace("%", "").strip())

    def maksa_korko(self):
        self.saldo = self.saldo * (1 + self.get_korko())
```

We notice that the `EuriborTili` class violates the _single responsibility_ principle, since in addition to normal account-related operations the class contains code that fetches data from the internet. The responsibilities should be clarified and fetching the interest rate should be separated into its own class behind an interface:

```python
class EuriborLukija:
    def __init__(self, kuukauden):
        self.kuukauden = kuukauden

    def get_korko(self):
        data = urllib.request.urlopen(
            "https://www.euribor-rates.eu/en/current-euribor-rates/"
        ).read()

        rivi_pattern = re.compile(r"Euribor " + str(self.kuukauden) + " months[^%]+%")
        rivi_match = rivi_pattern.search(str(data))

        if rivi_match is None:
            return 0

        sarake_pattern = re.compile(r"\-?([0-9]|\.)+ %")
        sarake_match = sarake_pattern.search(rivi_match.group(0))

        if sarake_match is None:
            return 0

        return float(sarake_match.group(0).replace("%", "").strip())

class EuriborTili(Tili):
    def __init__(self, tilinumero, omistaja, kuukauden):
        super().__init__(tilinumero, omistaja, 0)
        self.euribor = EuriborLukija(kuukauden)

    def maksa_korko(self):
        self.saldo = self.saldo * (1 + self.euribor.get_korko())
```

The `EuriborTili` class is now starting to be fairly clean, while the `EuriborLukija` (Euribor reader) class would have a lot of room for improvement; e.g. the _cohesion_ of its only method is poor: the method does far too many things.

Next, we notice that there is a need for a _fixed-term account_, which is otherwise similar to `Tili`, but money cannot be transferred out of a fixed-term account until this has been made possible after a certain period of time. Once again we inherit the class `Tili`:

```python
class MaaraaikaisTili(Tili):
    def __init__(self, tilinumero, omistaja, korkoprosentti):
        super().__init__(tilinumero, omistaja, korkoprosentti)
        self.nostokielto = True

    def salli_nosto(self):
        self.nostokielto = False

    def siirra_rahaa_tililta(self, tilille, summa):
        if self.nostokielto:
            return False

        return super().siirra_rahaa_tililta(tilille, summa)
```

At this point, the structure of the program looks like this:

![]({{ "/images/4-8.png" | relative_url }}){:height="120px" }

Next comes the idea of _fixed-term accounts that use the Euribor rate_. How should we do this now? Part of the functionality is in the class _MaaraaikaisTili_ and part in the class _EuriborTili_...

Handling interest payment with inheritance was not the best solution after all; it is better to follow the _favor composition over inheritance_ principle. So let us separate _interest payment_ into classes of its own that implement the method `get_korko` (get interest):

```python
class TasaKorko:
    def __init__(self, korko):
        self.korko = korko

    def get_korko(self):
        return self.korko

class EuriborKorko:
    def __init__(self, kuukausi):
        self.lukija = EuriborLukija(kuukausi)

    def get_korko(self):
        return self.lukija.get_korko()
```

The need for a separate `EuriborTili` class disappears, and plain `Tili` in a slightly modified form is enough:

```python
class Tili:
    def __init__(self, tilinumero, omistaja, korko):
        self.tilinumero = tilinumero
        self.omistaja = omistaja
        self.korko = korko
        self.saldo = 0

    def siirra_rahaa_tililta(self, tilille, summa):
        if self.saldo < summa:
            return False

        self.saldo = self.saldo - summa
        tilille.saldo = tilille.saldo + summa

        return True

    def maksa_korko(self):
        self.saldo = self.saldo * (1 + self.korko.get_korko())
```

Different accounts are created as follows:

```python
normaali = Tili("1234-1234", "Jami Kousa", TasaKorko(0.04))
euribor12 = Tili("4422-3355", "Lea Kutvonen", EuriborKorko(12))
```

The structure of the program is now as follows:

![]({{ "/images/4-9.png" | relative_url }}){:height="120px" }

Let us still change the class `Tili` so that accounts can be created without the constructor:

```python
class Tili:
    def __init__(self, tilinumero, omistaja, korko):
        self.tilinumero = tilinumero
        self.omistaja = omistaja
        self.korko = korko
        self.saldo = 0

    @staticmethod
    def luo_euribor_tili(tilinumero, omistaja, kuukausia):
        return Tili(tilinumero, omistaja, EuriborKorko(kuukausia))

    @staticmethod
    def luo_maaraaikais_tili(tilinumero, omistaja, korko):
        return MaaraaikaisTili(tilinumero, omistaja, TasaKorko(korko))

    @staticmethod
    def luo_kaytto_tili(tilinumero, omistaja, korko):
        return Tili(tilinumero, omistaja, TasaKorko(korko))

    def vaihda_korkoa(self, korko):
        self.korko = korko

    # ...
```

We added three _static helper methods_ to the class to make creating accounts easier. Accounts can now be created as follows:

```python
maaraaikais = Tili.luo_maaraaikais_tili("1234-1234", "Jami Kousa", 0.025)
euribor12 = Tili.luo_euribor_tili("4422-3355", "Lea Kutvonen", 12)
fyrkka = Tili.luo_euribor_tili("7895-4571", "Indre Zliobaite", 1)
```

### Static factory method

The principle we used of creating objects with static methods is a very well-known design pattern, the _static factory method_.

The static factory method used in the account example is the simplest of the many variants of the factory design pattern. The principle of the design pattern is that the class is given a static factory method or methods, which use the constructor and create the instances of the class.

A factory method can be used to hide details related to creating an object; in the example, the creation and even the existence of the interest objects was hidden from the user of the account with the help of the factory method.

A factory method can also be used to hide the acual class of the created object from the user; in the example, this was done with the fixed-term account.

So a factory method helps with _encapsulation_: the details related to creating an object, and even the acual nature of the object, are hidden from the user of the object. This, in turn, enables very flexible extensibility.

A static factory method is not a particularly good solution from the point of view of testing; in our example it would be hard to create an account that is given a mock object instead of an interest object. Right now this is possible, though, because the constructor has not been completely hidden.

> In Python, a factory method is often implemented as a [`@classmethod`](https://docs.python.org/3/library/functions.html#classmethod) method instead of a `@staticmethod` method. A class method receives the class as its first parameter, so the factory method also works correctly in subclasses. Just as often, the factory is simply a module-level function, since in Python not everything has to be inside a class.

More information about the factory design pattern e.g. [here](https://sourcemaking.com/design_patterns/factory_method) and [here](https://www.oodesign.com/factory-method-pattern).

So with factory methods we can encapsulate the acual type of a class. Jami's account is a fixed-term account, but it is requested from a factory method located in the `Tili` class; the real type of the object has been deliberately hidden from the user. The user of the fixed-term account thus no longer has a concrete dependency on the class `MaaraaikaisTili`.

We also made a method with which the interest of an account can be changed. Jami's fixed-rate fixed-term account can easily be changed on the fly into a three-month Euribor account:

```python
maaraaikais.vaihda_korkoa(EuriborKorko(3))
```

So by giving up inheritance, the object structure becomes considerably clearer, and we gain run-time flexibility (the way interest is calculated) that is not possible using inheritance.

### Strategy

The technique with which interest payment is handled is also a design pattern, called _strategy_.

Strategy can be used to handle a situation where the behavior of different objects is otherwise the same, but a different "algorithm" is used at certain points. In our example, this algorithm was determining the interest rate. The same situation can often also be handled with inheritance without using separate objects, but strategy enables a much more dynamic solution, since strategy objects can be swapped at run time. Using strategy nicely embodies the "favour composition over inheritance" principle.

More information about the strategy design pattern [here](https://www.oodesign.com/strategy-pattern) and [here](https://sourcemaking.com/design_patterns/strategy).

### Separating responsibilities: creating an account in the bank

We just created static helper methods for the class `Tili` for creating accounts. It might, however, make more sense to move the responsibility for creating accounts to a separate class, `Pankki` (bank). The bank can also easily manage generating the account numbers:

```python
class Pankki:
    def __init__(self):
        self.numero = 0

    def generoi_tilinumero(self):
        self.numero = self.numero + 1
        return f"12345-{self.numero}"

    def kayttotili(self, omistaja, korko):
        return Tili(self.generoi_tilinumero(), omistaja, TasaKorko(korko))

    def maaraaikaistili(self, omistaja, korko):
        return MaaraaikaisTili(self.generoi_tilinumero(), omistaja, TasaKorko(korko))

    def euribortili(self, omistaja, kuukauden):
        return Tili(self.generoi_tilinumero(), omistaja, EuriborKorko(kuukauden))

    def maaraaikais_euribortili(self, omistaja, kuukauden):
        return MaaraaikaisTili(self.generoi_tilinumero(), omistaja, EuriborKorko(kuukauden))
```

Accounts are created through the bank as follows:

```python
spankki = Pankki()

euriborTili = spankki.euribortili("Lea Kutvonen", 6)
maaraaikaistili = spankki.maaraaikaistili("Arto Hellas", 0.15)
```

So whoever creates an account no longer has to take care of generating account numbers.

Each factory method has thus been turned from a static method of the class itself into an instance method placed in another class.

The responsibilities of the classes have become clearer: `Tili` is responsible for matters related to a single account, such as the balance. The account also knows the object that holds the information about the interest related to the account. `Pankki`, on the other hand, manages all its accounts, and it is also used to generate the account numbers when accounts are created.

### Encapsulating functionality: the calculator and strategy

We have extended the `Laskin` class to handle other arithmetic operations as well:

```python
class Laskin:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        while True:
            komento = self.io.lue("Komento:")

            if komento == "lopetus":
                return

            luku1 = int(self.io.lue("Luku 1:"))
            luku2 = int(self.io.lue("Luku 2:"))

            vastaus = 0

            if komento == "summa":
                vastaus = self.laske_summa(luku1, luku2)
            elif komento == "tulo":
                vastaus = self.laske_tulo(luku1, luku2)
            elif komento == "erotus":
                vastaus = self.laske_erotus(luku1, luku2)

            self.io.kirjoita(f"Tulos: {vastaus}")

    def laske_summa(self, luku1, luku2):
        return luku1 + luku2

    def laske_tulo(self, luku1, luku2):
        return luku1 * luku2

    def laske_erotus(self, luku1, luku2):
        return luku1 - luku2
```

The solution is not satisfactory in every respect. What if we want other operations than sum (summa), product (tulo) and difference (erotus)? The if mess is going to grow.

We decide to start using the _strategy design pattern_, i.e. to handle the arithmetic operation in its own class. Let us implement a class `Operaatiotehdas` (operation factory) that has a static factory method `luo` (create):

```python
class Operaatiotehdas:
    @staticmethod
    def luo(operaatio):
        if operaatio == "summa":
            return Summa()
        elif operaatio == "tulo":
            return Tulo()

        return Erotus()
```

The static factory method `luo` can be used to create objects corresponding to the arithmetic operations. The classes responsible for the arithmetic operations must implement the method `laske` (calculate), which takes two parameters. The classes corresponding to the arithmetic operations are defined as follows:

```python
class Summa:
    def laske(self, luku1, luku2):
        return luku1 + luku2

class Tulo:
    def laske(self, luku1, luku2):
        return luku1 * luku2

class Erotus:
    def laske(self, luku1, luku2):
        return luku1 - luku2
```

The `Laskin` class becomes considerably simpler:

```python
class Laskin:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        while True:
            komento = self.io.lue("Komento:")

            if komento == "lopetus":
                return

            luku1 = int(self.io.lue("Luku 1:"))
            luku2 = int(self.io.lue("Luku 2:"))

            operaatio = Operaatiotehdas.luo(komento)

            self.io.kirjoita(f"Tulos: {operaatio.laske(luku1, luku2)}")
```

The nice thing about the calculator now is that we can add operations without having to change the class `Laskin` in any way; the only place in the existing code that requires a change is the method `luo` of the class `Operaatiotehdas`.

The structure of the application looks like this:

![]({{ "/images/4-10.png" | relative_url }}){:height="250px" }

> Since functions in Python are values that can be stored in variables and data structures, a strategy is often implemented in Python as just a function. The arithmetic operations could e.g. be stored in a dictionary `{"summa": operator.add, "tulo": operator.mul}`, in which case separate classes are not needed. We will return to using functions as strategies in the chapter on the [Gutenberg reader](#gutenberg-reader-removing-non-trivial-copy-paste).

### The calculator and command objects

What if we want operations for the calculator other than ones taking 2 parameters, e.g. the square root? Let us change the nature of the classes implementing the arithmetic operations so that the communication with the user is also moved to be their responsibility.

With this change, we switch to using the _command_ design pattern, a close relative of the Strategy design pattern. The classes implementing a command are extremely simple. They are given an `IO` object through the constructor, and they implement the method `suorita` (execute). A command can only be executed, and it does not even return anything!

Creating the separate command objects is moved to a new class `Komentotehdas` (command factory):

```python
class Komentotehdas:
    def __init__(self, io):
        self.io = io

    def hae(self, komento):
        if komento == "summa":
            return Summa(self.io)
        elif komento == "tulo":
            return Tulo(self.io)
        elif komento == "nelio":
            return Nelio(self.io)
        elif komento == "lopeta":
            return Lopeta(self.io)

        return Tuntematon(self.io)
```

With the `hae` (get) method, the command factory returns the command object corresponding to the string parameter. Since the responsibility for communicating with the user has been moved to the command objects, they are given an `IO` object as a constructor parameter.

The if mess looks a bit unpleasant. It is easy to get rid of, however, by storing the separate commands in a dictionary:

```python
class Komentotehdas:
    def __init__(self, io):
        self.io = io

        self.komennot = {
            "summa": Summa(self.io),
            "tulo": Tulo(self.io),
            "nelio": Nelio(self.io),
            "lopeta": Lopeta(self.io)
        }

    def hae(self, komento):
        if komento in self.komennot:
            return self.komennot[komento]

        return Tuntematon(self.io)
```

The individual commands are very simple:

```python
class Summa:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        luku1 = int(self.io.lue("Luku 1:"))
        luku2 = int(self.io.lue("Luku 2:"))

        self.io.kirjoita(f"Vastaus: {luku1 + luku2}")

class Nelio:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        luku = int(self.io.lue("Luku 1:"))

        self.io.kirjoita(f"Vastaus: {luku * luku}")

class Tuntematon:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        self.io.kirjoita("Sallitut komennot: summa, tulo, nelio, lopeta")

class Lopeta:
    def __init__(self, io):
        self.io = io

    def suorita(self):
        self.io.kirjoita("Kiitos ja näkemiin!")
        sys.exit(0)
```

The class `Laskin` becomes even simpler. It does hardly anything anymore except create the command factory and contain an infinite loop inside which the commands corresponding to the user's input are executed:

```python
class Laskin:
    def __init__(self, io):
        self.io = io
        self.komennot = Komentotehdas(io)

    def suorita(self):
        while True:
            komento = self.io.lue("Komento:")
            self.komennot.hae(komento).suorita()
```

The structure of the program at this point:

![]({{ "/images/4-11.png" | relative_url }}){:height="250px" }

### Command

So, following the idea of the command design pattern, we isolated the functionality related to each separate arithmetic operation into an object of its own, in such a way that all operations implement a simple interface that has only the method `suorita`.

In the previous version of the program, we applied the strategy design pattern, where the separate arithmetic operations were implemented as objects of their own. The command design pattern differs in that we have now encapsulated the whole execution of the command, including the communication with the user, into objects of their own. The interface of the command objects is simple: they have only one method, `suorita`. In the strategy design pattern, on the other hand, the interface of the strategy objects varies depending on the situation.

In the example, the commands were created with an object that provides a factory method, and the ifs were hidden inside the factory. In the example, the `suorita` method of the command objects was executed immediately, but this is not necessarily the case: commands could e.g. be put in a queue and executed later.

More about the command design pattern e.g. [here](https://www.oodesign.com/command-pattern) and [here](https://sourcemaking.com/design_patterns/command).

### Extracting common code into a superclass

Since commands that ask the user for two parameters, such as sum, product and difference, have a lot in common, let us create an [abstract superclass](https://realpython.com/ref/glossary/abstract-base-class/) for them (i.e. a class that is made only for inheritance; objects cannot be created from the class itself):

```python
from abc import ABC, abstractmethod
class BinaariOperaatio(ABC):
    def __init__(self, io):
        self.io = io
        self.luku1 = 0
        self.luku2 = 0

    def suorita(self):
        self.luku1 = int(self.io.lue("Luku 1:"))
        self.luku2 = int(self.io.lue("Luku 2:"))

        tulos = self.laske()

        self.io.kirjoita(f"Vastaus: {tulos}")

    @abstractmethod
    def laske(self):
        pass
```

The commands corresponding to sum and product become even simpler:

```python
class Summa(BinaariOperaatio):
    def laske(self):
        return self.luku1 + self.luku2

class Tulo(BinaariOperaatio):
    def laske(self):
        return self.luku1 * self.luku2
```

If we wanted to implement more two-parameter operations in the application, for example difference, a very simple addition would be enough:

```python
class Erotus(BinaariOperaatio):
    def laske(self):
        return self.luku1 - self.luku2
```

And best of all, the only other class that has to be touched is the `Komentotehdas` class, which creates the commands.

The program has thus been made quite flexible in terms of extensibility. New operations are easy to add, and adding one does not cause changes in many places in the code. After all, the `Laskin` class has no dependencies except on the `Komentotehdas` class and on the `KonsoliIO` class injected through the constructor.

![]({{ "/images/4-12.png" | relative_url }}){:height="300px" }

The price of the flexibility is the growing number of classes. At a quick glance, it may be hard to see how the program works, especially if you are not used to this style, since in addition to the factory and command design patterns, the _template method_ design pattern (for implementing the two-parameter command) has also been hidden in it.

### Template method

The template method design pattern suits situations where the execution of two or more operations is very similar and differs only in one or a few steps related to the operation.

The execution of the Summa (sum) and Tulo (product) commands is essentially the same:

1. Read luku1 from the user
2. Read luku2 from the user
3. _Calculate the result of the operation_
4. Print the result of the operation

Only the third step, i.e. _calculating the result of the operation_, differs between computing the sum and the product.

In the spirit of template method, this is handled by creating an abstract superclass whose method `suorita` implements the whole execution logic of the command:

```python
class BinaariOperaatio(ABC):
    # ...

    def suorita(self):
        self.luku1 = int(self.io.lue("Luku 1:"))
        self.luku2 = int(self.io.lue("Luku 2:"))

        tulos = self.laske()

        self.io.kirjoita(f"Vastaus: {tulos}")

    @abstractmethod
    def laske(self):
        pass
```

The varying part of the execution logic, i.e. calculating the result of the operation, is defined as the method `laske`, which the method `suorita` calls.

The concrete implementations `Summa` and `Tulo` override the method `laske`, defining how the calculation happens in a specific concrete situation:

```python
class Summa(BinaariOperaatio):
    def laske(self):
        return self.luku1 + self.luku2
```

The method `suorita` of the class is a _template method_, which defines the execution so that the differing part of the execution is defined as a method of the superclass that the subclasses override. A template method thus makes it possible to define a "generic algorithm skeleton" that can be specialized in a suitable way in the subclasses.

![Template method: the method suorita of the superclass BinaariOperaatio defines the skeleton of the execution, and the subclasses Summa, Tulo and Erotus implement the varying step laske]({{ "/images/4-28.svg" | relative_url }})

The strategy design pattern is partly related to the template method: in it, a whole algorithm or part of an algorithm is replaced with an implementation in a separate class. Strategies can be swapped during execution, whereas with a template method a given object works the same way for its whole lifetime.

More about the template method design pattern [here](https://www.oodesign.com/template-method-pattern).

### Gutenberg reader: removing non-trivial copy-paste

In connection with [avoiding repetition](#no-repetition), it was noted that not all repetition is as obvious as direct copy-paste. As an example of this, let us look at the class `GutenbergLukija` (Gutenberg reader), which is meant for analyzing the content of books found in [Project Gutenberg](https://www.gutenberg.org/):

```python
class GutenbergLukija:
    def __init__(self, osoite):
        self._rivit = []

        data = request.urlopen(osoite)

        for rivi in data:
            self._rivit.append(rivi.decode("utf-8").strip())

    def rivit(self):
        palautettavat = []

        for rivi in self._rivit:
            palautettavat.append(rivi)

        return palautettavat

    def rivit_jotka_paattyvat_huutomerkkiin(self):
        ehdot_tayttavat = []

        for rivi in self._rivit:
            if rivi.endswith("!"):
                ehdot_tayttavat.append(rivi)

        return ehdot_tayttavat

    def rivit_joilla_sana(self, sana):
        ehdot_tayttavat = []

        for rivi in self._rivit:
            if sana in rivi:
                ehdot_tayttavat.append(rivi)

        return ehdot_tayttavat
```

The class has three methods: `rivit` (lines), which returns all the lines of the book, and `rivit_jotka_paattyvat_huutomerkkiin` (lines ending with an exclamation mark) and `rivit_joilla_sana` (lines containing a word), which work as the names of the methods suggest.

The class is used as follows:

```python
def main():
    osoite = "https://www.gutenberg.org/files/2554/2554-0.txt"
    kirja = GutenbergLukija(osoite)

    for rivi in kirja.rivit_joilla_sana("olut"):
        print(rivi)

if __name__ == "__main__":
    main()
```

The class has been programmed in a "traditional" imperative style: the lines of the book are gone through with a for statement, and for each line a conditional statement checks whether the line meets the criteria of the method in question, e.g. ends with an exclamation mark. Expressed as pseudocode, each method thus follows the same pattern:

```
ehdot_tayttavat = []

for each line of the book:
    if the line meets the condition of the method:
        add the line to the list ehdot_tayttavat

return ehdot_tayttavat
```

In the method `rivit`, the condition is always true, i.e. all lines qualify.

The three methods for fetching the content of the book offered by the class `GutenbergLukija` are clearly very similar in structure. All of them go through every line of the book and return some (or all) of them to the caller of the method. The methods differ in _which lines of the book they return_. So the methods are almost copy-paste, but they differ from each other enough that eliminating the copy-paste is not entirely straightforward.

If we think about how the methods work, we can think that each method has its own _strategy_ for returning lines, and apart from the strategy, everything else is the same. This is an excellent place to apply the strategy design pattern. If we separate the strategy for selecting lines into its own class, we can manage with only one method that goes through the lines.

Let us implement the classes responsible for the selection strategy so that they implement the method `test`. The method must return `True` if the line received as a parameter matches the condition, otherwise `False`. Let us start by implementing the `SisaltaaSanan` (contains word) class:

```python
class SisaltaaSanan:
    def __init__(self, sana):
        self.sana = sana

    def test(self, rivi):
        return self.sana in rivi
```

The idea is to create, for each different _search condition_ for books, a class of its own that checks the condition. An object of the `SisaltaaSanan` class can be created as follows:

```python
ehto = SisaltaaSanan("olut")
```

With the object, we can check whether strings contain the word _olut_ (beer):

```python
ehto = SisaltaaSanan("olut")
ehto.test("internetin paras suomenkielinen olutsivusto on olutopas.info")
ehto.test("Python 3.15 julkaistiin 09.10.2026")
```

The first of the method calls would return `True` and the latter `False`.

The lines that meet the right condition can be returned from the book by adding a method to the class `GutenbergLukija`:

```python
def rivit_jotka_tayttavat_ehdon(self, ehto):
    palautettavat_rivit = []

    for rivi in self._rivit:
        if ehto.test(rivi):
            palautettavat_rivit.append(rivi)

    return palautettavat_rivit
```

and the lines containing the word _olut_ can be printed as follows:

```python
for rivi in kirja.rivit_jotka_tayttavat_ehdon(SisaltaaSanan("olut")):
    print(rivi)
```

By defining suitable condition classes, we can get rid of the original methods for fetching lines. The application also becomes considerably more flexible in that new search conditions can easily be added by defining new classes that implement the `test` method.

![Strategy in the Gutenberg reader: going through the lines is the same for all searches, and the varying condition is given to the method as a parameter]({{ "/images/4-27.svg" | relative_url }})

Instead of classes, the conditions can also be expressed in a simpler form, for example as functions or lambdas. Next, let us get a little acquainted with _functional programming_, whose cornerstone is precisely making use of functions. Let us modify the `rivit_jotka_tayttavat_ehdon` method so that the `ehto` (condition) received as a parameter is a callable value:

```python
def rivit_jotka_tayttavat_ehdon(self, ehto):
    palautettavat_rivit = []

    for rivi in self._rivit:
        if ehto(rivi):
            palautettavat_rivit.append(rivi)

    return palautettavat_rivit
```

Notice how `ehto.test(rivi)` changed into the form `ehto(rivi)`. We can now use a _lambda_ to give the condition:

```python
for rivi in kirja.rivit_jotka_tayttavat_ehdon(lambda rivi: "olut" in rivi):
    print(rivi)
```

A lambda is a kind of more compact representation of a function. Like a function, a lambda can have parameters. In the example, the lambda has the parameter `rivi`. Unlike a function, a lambda is always defined on a single line. The defined line is executed and its value is returned without a separate `return` statement.

With lambdas, it is easy to define arbitrary conditions. The following prints all lines on which either of the words _olut_ (beer) or _maito_ (milk) appears. For clarity, the lambda expression expressing the condition is now defined on its own line:

```python
ehto = lambda rivi: "olut" in rivi or "maito" in rivi

for rivi in kirja.rivit_jotka_tayttavat_ehdon(ehto):
    print(rivi)
```

We can also implement functions that return lambdas:

```python
def sisaltaa_sanan(sana):
    return lambda rivi: sana in rivi

for rivi in kirja.rivit_jotka_tayttavat_ehdon(sisaltaa_sanan("olut")):
    print(rivi)
```

Notice how in this example the function `sisaltaa_sanan` resembles the factory methods of the factory design pattern.

Let us still refactor the `GutenbergLukija` class by making use of Python's functional programming toolkit. Since the methods of the class handle lists a lot, we can use the functions [map](https://docs.python.org/3/library/functions.html#map) and [filter](https://docs.python.org/3/library/functions.html#filter).

The function `map` can be used to modify the elements of a list (or any other iterator). The function has two parameters. The first parameter is a lambda (or a similar callable value), which receives an element of the iterator as its parameter and returns the new value of the element. The second parameter is the iterator from whose elements a new iterator is formed with the lambda. So the `map` function does not change the iterator it receives as a parameter, but returns a new iterator with the desired modifications.

We can use the `map` function for example in the constructor of the `GutenbergLukija` class:

```python
def __init__(self, osoite):
    rivit_iterator = map(
        lambda rivi: rivi.decode("utf-8").strip(),
        request.urlopen(osoite)
    )

    self._rivit = list(rivit_iterator)
```

The call `request.urlopen(osoite)` returns the content of the book line by line as bytes. The function `map` calls the lambda given as the first parameter for each line in turn: the lambda converts the bytes into a string with the method `decode` and removes whitespace from the beginning and end of the line with the method `strip`. The result is an iterator whose elements are the lines cleaned up this way. In the original constructor, the same was done with a for loop in which the lines were added to a list one at a time.

Notice that the `map` function does not return a list but an iterator. An iterator can easily be turned into a list with the [list](https://docs.python.org/3/library/functions.html#func-list) function.

Another useful function for handling lists is the `filter` function, with which the elements of a list (or any other iterator) can be filtered. The function has two parameters. The first parameter is a lambda (or a similar callable value), which receives an element of the iterator as its parameter and returns `True` if the element should be included in the filtered iterator, otherwise `False`. The second parameter is the iterator whose elements are filtered. Like the `map` function, the `filter` function does not change the iterator it receives as a parameter but returns a new iterator whose elements have been filtered with the given condition.

A good use case for the `filter` function is the method `rivit_jotka_tayttavat_ehdon` of the `GutenbergLukija` class:

```python
def rivit_jotka_tayttavat_ehdon(self, ehto):
    palautettavat_rivit_iterator = filter(ehto, self._rivit)

    return list(palautettavat_rivit_iterator)
```

We can give the condition received as a parameter directly to the `filter` function.

In Python, the same thing is often done more idiomatically with a [list comprehension](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions), e.g. `[rivi for rivi in self._rivit if ehto(rivi)]`. List comprehensions and `map`/`filter` are different ways of expressing the same functional thinking.

### Decorated stack

We have implemented a stack for a customer:

```python
class Pino:
    def __init__(self):
        self.alkiot = []

    def push(self, alkio):
        self.alkiot.append(alkio)

    def pop(self):
        return self.alkiot.pop()

    def empty(self):
        return len(self.alkiot) == 0

def main():
    pino = Pino()

    print("Pinotaan, tyhjä lopettaa:")

    while True:
        pinoon = input()

        if not pinoon:
            break

        pino.push(pinoon)

    while not pino.empty():
        print(pino.pop())

if __name__ == "__main__":
    main()
```

Our customer wants a few new versions of the stack (pino):

- `KryptattuPino`, in which the elements are stored in the stack encrypted; the elements come out of the stack normally
- `LokiPino`, in which information about the stack operations and their parameters and return values is stored in a log
- `PrepaidPino`, which stops working once the number of operations defined as a constructor parameter has been performed on it

In addition, all possible combinations have to be implemented:

- `KryptattuLokiPino`
- `LokiKryptattuPino` (the difference from the previous one being that the parameters are not logged encrypted)
- `KryptattuPrepaidPino`
- `KryptattuLokiPrepaidPino`
- `LokiPrepaidPino`

This starts to sound bad, especially when the Product Owner hints that in the next sprint more versions of the stack are likely to be required, e.g. ÄänimerkillinenPino (stack with a beep), RajallisenkapasiteetinPino (stack with limited capacity) and, of course, all the combinations will be needed as well...

Fortunately, the _decorator_ design pattern fits exactly this situation! Let us create the three new versions of the stack as decorated stacks. Let us first look at PrepaidPino:

```python
class PrepaidPino:
    def __init__(self, pino, krediitteja):
        self.pino = pino
        self.krediitteja = krediitteja

    def kuluta_krediitti(self):
        if self.krediitteja == 0:
            raise Exception("Pinossa ei ole enää käyttöoikeutta")

        self.krediitteja = self.krediitteja - 1

    def push(self, alkio):
        self.kuluta_krediitti()
        self.pino.push(alkio)

    def pop(self):
        self.kuluta_krediitti()
        return self.pino.pop()

    def empty(self):
        self.kuluta_krediitti()
        return self.pino.empty()
```

The `PrepaidPino` class **contains** a stack, which it receives as a constructor parameter. The `PrepaidPino` class uses the stack it contains to store all its elements. So every operation of the `PrepaidPino` class _delegates_ implementing the functionality of the operation to the stack it contains.

A `PrepaidPino` is created as follows:

```python
pino = PrepaidPino(Pino(), 5)
```

So we create a normal `Pino` and give it to the `PrepaidPino` class as a constructor parameter together with the credits of the stack.

The implementations of the two other stacks are as follows:

```python
class KryptattuPino:
    def __init__(self, pino):
        self.pino = pino

    def dekryptaa(self, alkio):
        dekryptattu = ""
        merkkijono_alkio = str(alkio)

        for i in range(0, len(merkkijono_alkio)):
            dekryptattu = dekryptattu + chr(ord(merkkijono_alkio[i]) - 1)

        return dekryptattu

    def kryptaa(self, alkio):
        kryptattu = ""
        merkkijono_alkio = str(alkio)

        for i in range(0, len(merkkijono_alkio)):
            kryptattu = kryptattu + chr(ord(merkkijono_alkio[i]) + 1)

        return kryptattu

    def push(self, alkio):
        self.pino.push(self.kryptaa(alkio))

    def pop(self):
        return self.dekryptaa(self.pino.pop())

    def empty(self):
        return self.pino.empty()

class LokiPino:
    def __init__(self, pino, loki):
        self.pino = pino
        self.loki = loki

    def push(self, alkio):
        self.loki.kirjoita(f"Push: {alkio}")
        self.pino.push(alkio)

    def pop(self):
        alkio = self.pino.pop()
        self.loki.kirjoita(f"Pop: {alkio}")

        return alkio

    def empty(self):
        onko_tyhja = self.pino.empty()
        self.loki.kirjoita(f"Empty: {onko_tyhja}")

        return onko_tyhja
```

The principle is the same: the stack decorators `LokiPino` and `KryptattuPino` delegate all their operations to the `Pino` objects they contain. `LokiPino` writes an entry for every operation targeting the stack. _KryptattuPino_, on the other hand, encrypts every string put into the stack using a primitive algorithm and decrypts the strings taken from the stack back into plain text.

We can form a stack that writes an entry about the stack operations and encrypts the elements of the stack as follows:

```python
class KonsoliLoki:
    def kirjoita(self, viesti):
        print(viesti)

loki = KonsoliLoki()
pino = KryptattuPino(LokiPino(Pino(), loki))
```

So a decorated stack consists of nested layers. When the string `"olut"` is added to the stack, the outermost layer `KryptattuPino` encrypts it into the form `"pmvu"` and passes it on, `LokiPino` records the operation in the log, and the ordinary `Pino` innermost stores the element. When taking from the stack, the layers are gone through in the opposite order:

![Decorated stack: the push operation passes through the layers KryptattuPino and LokiPino to the innermost stack, and the pop operation goes back out]({{ "/images/4-29.svg" | relative_url }})

Since `LokiPino` is inside the encrypting layer, the elements are logged encrypted. If the decorators were in the other order, the log would show the elements in plain text.

So with decoration we get many different combinations of features for the stack with relatively little programming. If we had tried to handle everything with normal inheritance, the number of classes would have grown exponentially with respect to the number of different features, and nothing would have come of reuse either.

So decoration is essentially not inheritance but _delegation_; once again the object-oriented design principle "favour composition over inheritance" has shown its power.

> Python also has a language feature called a [decorator](https://docs.python.org/3/glossary.html#term-decorator), i.e. an annotation written with the `@` sign in front of a function or class, such as the `@staticmethod` used above or `@mcp.tool()` in the MCP server of week 7. Despite the name, it is not the same thing as the decorator design pattern. There is, however, a similarity in the idea: a Python decorator is a function that receives a function as its parameter and returns a new function that extends the behavior of the original, in the same way that a decorated stack extends the behavior of the stack it contains.

More about the decorator design pattern e.g. [here](https://sourcemaking.com/design_patterns/decorator)

### Stack factory

Creating stacks with different features is a bit unpleasant for the user. Let us make a stack factory to make creating them easier:

```python
class Pinotehdas:
    def prepaid_pino(self, krediitit):
        return PrepaidPino(Pino(), krediitit)

    def loki_pino(self, loki):
        return LokiPino(Pino(), loki)

    def kryptattu_pino(self):
        return KryptattuPino(Pino())

    def kryptattu_prepaid_pino(self, krediitit):
        return KryptattuPino(self.prepaid_pino(krediitit))

    def kryptattu_loki_pino(self, loki):
        return KryptattuPino(self.loki_pino(loki))

    def prepaid_kryptattu_loki_pino(self, krediitit, loki):
        return PrepaidPino(self.kryptattu_loki_pino(loki), krediitit)

    # many, many more builders...
```

The factory class is unpleasant and contains a horrible number of methods. If more features are added to the stack, the factory will get out of hand.

Thanks to the factory, however, creating a stack is easy:

```python
tehdas = Pinotehdas()

omapino = tehdas.kryptattu_prepaid_pino(100)
```

As we can see, the factory design pattern is not ideal for the situation. Next, let us instead try the _builder_ design pattern.

### Stack builder

The builder design pattern suits our situation very well. Our aim is to make it possible to create a stack in the following style:

```python
rakenna = Pinorakentaja()

pino = rakenna.prepaid(10).kryptattu().pino()
```

The method names of the builder and the name of the builder variable have been chosen in an interesting way (in Finnish, `rakenna` means "build"). The aim has been an expression for creating the stack that resembles natural language as closely as possible. This is in fact a [DSL](https://martinfowler.com/bliki/DomainSpecificLanguage.html) (domain specific language) for creating stacks.

Let us first create a basic version of the builder, which is only suitable for creating normal stacks:

```python
rakenna = Pinorakentaja()

pino = rakenna.pino()
```

We get the first version of the builder working as follows:

```python
class Pinorakentaja:
    def __init__(self, luo_pino=Pino):
        self._luo_pino = luo_pino

    def pino(self):
        return self._luo_pino()
```

So the builder does not create the stack right away but stores a function with which the stack is created. The default value is the class `Pino` itself, since a class is also callable: `Pino()` creates a new stack. The acual stack is created only when it is requested with the method `pino`, and every call creates a new stack.

Let us now extend the builder so that we can create prepaid stacks as follows:

```python
rakenna = Pinorakentaja()

pino = rakenna.prepaid(10).pino()
```

For the above not to cause a syntax error, a method with the signature `prepaid(self, krediitit)` must be added to the builder. So for it to be possible to call the method `pino` on the object resulting from the method, the method `prepaid` must return a builder. The skeleton of our builder thus extends as follows:

```python
class Pinorakentaja:
    def __init__(self, luo_pino=Pino):
        self._luo_pino = luo_pino

    def prepaid(self, krediitit):
        # ???

    def pino(self):
        return self._luo_pino()
```

When we call the method `prepaid` on the builder, the builder returns a new `Pinorakentaja` object. Its creation function first creates a stack with the creation function of the previous builder and decorates it into a prepaid stack:

```python
class Pinorakentaja:
    def __init__(self, luo_pino=Pino):
        self._luo_pino = luo_pino

    def prepaid(self, krediitit):
        def luo_prepaid_pino():
            pino = self._luo_pino()
            return PrepaidPino(pino, krediitit)

        return Pinorakentaja(luo_prepaid_pino)

    def pino(self):
        return self._luo_pino()
```

The function `luo_prepaid_pino` defined inside the method is the creation function of the new builder. It is not called yet in the method `prepaid`; instead it is given to the new builder for safekeeping. Since the function is this short, it can be written more compactly as a lambda expression:

```python
    def prepaid(self, krediitit):
        return Pinorakentaja(lambda: PrepaidPino(self._luo_pino(), krediitit))
```

On the same principle, we add methods to the builder with which the stack under construction can be decorated into a logging stack or an encrypting stack:

```python
class Pinorakentaja:
    def __init__(self, luo_pino=Pino):
        self._luo_pino = luo_pino

    def prepaid(self, krediitit):
        return Pinorakentaja(lambda: PrepaidPino(self._luo_pino(), krediitit))

    def kryptattu(self):
        return Pinorakentaja(lambda: KryptattuPino(self._luo_pino()))

    def loggaava(self, loki):
        return Pinorakentaja(lambda: LokiPino(self._luo_pino(), loki))

    def pino(self):
        return self._luo_pino()
```

The code of the builder may seem a little confusing at first.

So the builder is used as follows:

```python
rakenna = Pinorakentaja()

pino = rakenna.kryptattu().prepaid(10).pino()
```

Here we asked the builder for an encrypted prepaid stack with 10 credits. Each method call in the chain returns a new builder whose "recipe" has one more decorator layer added, and the acual stack is created only by calling the method `pino`:

![Stack builder: the calls kryptattu and prepaid each return a new builder whose recipe has one more decorator layer, and the call pino creates the finished stack]({{ "/images/4-30.svg" | relative_url }})

In a similar way, stacks with other features can be created:

```python
rakentaja = Pinorakentaja()

pino1 = rakentaja.pino()  # creates a normal stack
pino2 = rakentaja.kryptattu().loggaava(loki).prepaid(10).pino()  # creates just what you would expect!
```

Notice that the builder's method calls always create a new builder, so the previous builder is not modified. This prevents potential bugs that could arise, for example, in the following code:

```python
rakentaja = Pinorakentaja()

kryptattu_rakentaja = rakentaja.kryptattu()
kryptattu_loki_rakentaja = kryptattu_rakentaja.loggaava(loki)

kryptattu_pino = kryptattu_rakentaja.pino()
kryptattu_loki_pino = kryptattu_loki_rakentaja.pino()
```

If the methods did not always create a new builder but used the same reference, `kryptattu_rakentaja` in the example code would acually build an encrypted stack that writes to the log. This would be very confusing and would easily give rise to bugs that are hard to debug. In addition, since every `pino()` call creates a completely new stack, stacks created with different builders do not share data with each other either. This is a very useful and widely used principle called _immutability_. The basic idea of the principle is that methods and functions that modify objects should not make the modifications directly to the reference they receive, but return a reference to a new object that contains the desired changes. For example, the functions `map` and `filter`, which always return a new iterator, follow this principle.

The implementation of the builder is based on a technique called [method chaining](https://en.wikipedia.org/wiki/Method_chaining). Methods that by their nature would otherwise not return any value have been made to return the builder object. This, in turn, makes it possible to call a method on the builder returned by another method, and in this way method calls can be chained one after another an arbitrary number of times. The motivation for method chaining is usually to make the interface of the object, in terms of usability, a DSL that resembles natural language as closely as possible.

> You should not use a builder just because an object has many optional constructor parameters. In Python, [keyword arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments) and default values are enough for this, e.g. `Tilaus(tuote="kirja", maara=2, lahjapaketointi=True)`. A builder is useful in situations like the stack builder, where the object is assembled from a varying number of parts that decorate each other.

## Software licenses

Read the text on software licenses by Akira Taguchi [here](/en/lisenssit).
