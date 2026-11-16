---
layout: page
permalink: /en/avain
inheader: no
title: Public key
source: avain.md
source_commit: 85a3af3
---

- Create a key pair by running the command `ssh-keygen` on the command line
  - You can answer all the questions by pressing enter
- Two keys are created, a private one and a public one. They are placed in the directory .ssh under your home directory
- Go to that directory and run the command `ssh-add` on the command line
- Look at the contents of the directory
- The file *id_rsa.pub* contains the public key. It is meant to be copied to GitHub so that key-based login works
- You can see the contents of the file with the command `cat id_rsa.pub`
- Go to the GitHub settings page by clicking the icon in the top right corner and selecting Settings
- In the settings, select SSH and GPG keys

![]({{ "/images/ssh0.png" | relative_url }})

- Create a new SSH key (New SSH key)
- Give the key some title (e.g. TKT) and copy the contents of the file id_rsa.pub into the key field:

![]({{ "/images/ssh1.png" | relative_url }})
