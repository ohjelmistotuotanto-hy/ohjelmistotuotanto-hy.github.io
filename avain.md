---
layout: page
permalink: /avain
inheader: no
title: Julkinen avain
---

- Luo salausavain antamalla komentoriviltä komento `ssh-keygen`
  - Voit vastata kaikkiin kysymyksiin enterillä
- Syntyy kaksi salausavainta, salainen ja julkinen. Ne sijoitetaan kotihakemistosi alla olevaan hakemistoon .ssh
- Mene hakemistoon ja anna komentoriviltä komento `ssh-add`
- Katso hakemiston sisältöä
- Tiedosto *id_rsa.pub* sisältää julkisen avaimen, se on tarkoitus kopioida GitHubiin jotta avaimeen perustuva kirjautuminen onnistuisi
- Näet tiedoston sisällön komennolla cat `id_rsa.pub`
- Mene GitHubin asetussivulle klikkaamalla oikean yläkulman symbolista ja valitsemalla settings
- Valitse settingseistä SSH and GPG keys

![]({{ "/images/ssh0.png" | absolute_url }})

- Luo uusi SSH-avain (New SSH key)
- Anna avaimelle joku title (esim. TKT) ja kopioi tiedoston id_rsa.pub sisältö kohtaan key:

![]({{ "/images/ssh1.png" | absolute_url }})