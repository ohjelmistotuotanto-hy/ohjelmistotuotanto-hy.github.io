---
layout: page
title: Flask
title_long: 'Flaskin ja tietokannan käyttö miniprojektissa'
permalink: /flask/
inheader: no
---

[https://github.com/mluukkai/ohtu_boilerplate/actions](https://github.com/mluukkai/ohtu_boilerplate)

Robot-testit:

```
robot src/story_tests
```

Yksikkötestit:

```
pytest src/tests
```

Tiedosto _.env_

```python
DATABASE_URL=postgresql://xxx
TEST_ENV=true
SECRET_KEY=satunnainen_merkkijono
```