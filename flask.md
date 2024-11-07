---
layout: page
title: Flaskin ja tietokannan käyttö miniprojektissa
title_long: 'Flaskin ja tietokannan käyttö miniprojektissa'
permalink: /flask/
inheader: no
---

tdb

<https://github.com/mluukkai/ohtu_boilerplate>

PostgreSQL-tietokanta, esim. <https://aiven.io>

Tiedosto _.env_

```python
DATABASE_URL=postgresql://xxx
TEST_ENV=true
SECRET_KEY=satunnainen_merkkijono
```

DATABASE_URL on Aiven.io:sta löytyvä Service URI:

![]({{ "/images/aiven.png" | absolute_url }}){:height="350px" }


Robot-testit:

```
robot src/story_tests
```

Yksikkötestit:

```
pytest src/tests
```

