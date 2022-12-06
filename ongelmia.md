---
layout: page
title: Python-ongelmia
inheader: no
permalink: /ongelmia/
---

## urllib3 or chardet doesn't match a supported 

Joissain tilanteissa poetry hajoaa kokonaan ja jokainen komento aiheuttaa seuraavan virheen:

```
/usr/lib/python3/dist-packages/requests/init.py:89: RequestsDependencyWarning: urllib3 (1.26.12) or chardet (3.0.4) doesn't match a supported version!
warnings.warn("urllib3 ({}) or chardet ({}) doesn't match a supported "
```

Ongelma korjaantuu komennolla

```
pip install requests --upgrade
```

## Keyring

Jos komennon _poetry install_ suorittaminen pyytää keyring-salasanaa tai aiheuttaa virheen

```
Failed to open keyring: org.freedesktop.DBus.Error.ServiceUnknown: The name :1.165
```

suorita terminaalissa 

```
export PYTHON_KEYRING_BACKEND=keyring.backends.fail.Keyring
```

ja sen jälkeen suorita komento _poetry install_ uudestaan. 

Kyseisen rivin voi laittaa .bashrc (tai vastaavaan) tiedostoon, jotta sitä ei ole tarvetta suorittaa jokaisen terminaali-istunnon aluksi.

## Lisää ohjeita

Muutama lisäohje löytyy Ohjelmistotekniikan [materiaalista](https://ohjelmistotekniikka-hy.github.io/python/viikko2#ratkaisuja-yleisiin-ongelmiin)
