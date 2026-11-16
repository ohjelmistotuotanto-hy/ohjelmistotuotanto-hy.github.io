---
layout: page
title: OhtuBotit
inheader: no
permalink: /en/ohtubotit/
source: ohtubotit.md
source_commit: 85a3af3
---

The course bots run in CurreChat, and using them requires logging in with your university account. Open a bot by clicking its name:

- [Kertaaja](#kertaaja): the bot asks you questions about the course material
- [KurssimateriaaliChat](#materiaali): you can ask anything about the whole course material

{% include curre_embed.html %}

<details class="bot" id="kertaaja">
  <summary>Kertaaja</summary>
  <p>The bot asks you questions about the course material (parts 1–3). You can ask it, for example, <em>Ask 5 questions about the whole material</em> or <em>Ask 3 questions about Scrum and then grade how I answered</em>. Or anything else you come up with!</p>
  <div lang="fi" style="position: relative;" translate="yes"><iframe
      id="cc-iframe-kertaaja"
      style="border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.3rem;"
      data-src="https://curre.helsinki.fi/chat/hy-opt-cur-2627-7a893cd5-d161-4815-ac8e-422dd8953ff9?embedded=true&amp;promptId=95dcc2c9-3713-4eeb-bf88-bc9e3cbac408"
      width="100%" height="800px">
    </iframe>
    <div id="login-popup-info-kertaaja"
      style="position: absolute; top: 0; left: 0; display: none; padding: 4rem; white-space: pre-line;">
      <p>You need to renew your login session to use CurreChat.
        The login opens in a new window. If it did not, <a
          href="https://curre.helsinki.fi/chat/login-helper" target="_blank"
          rel="noopener opener">click here</a>.</p>
      <p id="popup-blocked-info-kertaaja" style="display: none; margin-top: 1rem;">
        The popup window could not be opened, so use the link above.</p>
    </div>
  </div>
  <script>embedCurre("kertaaja")</script>
</details>

<details class="bot" id="materiaali">
  <summary>KurssimateriaaliChat</summary>
  <p>You can ask anything about the whole course material, e.g. how the course is graded, when the exam is held or what the topic of the week 4 lectures is.</p>
  <div lang="fi" style="position: relative;" translate="yes"><iframe
      id="cc-iframe-materiaali"
      style="border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.3rem;"
      data-src="https://curre.helsinki.fi/chat/hy-opt-cur-2627-7a893cd5-d161-4815-ac8e-422dd8953ff9?embedded=true&amp;promptId=45b183a7-58c2-48ce-bcb3-63bbfc8b0745"
      width="100%" height="800px">
    </iframe>
    <div id="login-popup-info-materiaali"
      style="position: absolute; top: 0; left: 0; display: none; padding: 4rem; white-space: pre-line;">
      <p>You need to renew your login session to use CurreChat.
        The login opens in a new window. If it did not, <a
          href="https://curre.helsinki.fi/chat/login-helper" target="_blank"
          rel="noopener opener">click here</a>.</p>
      <p id="popup-blocked-info-materiaali" style="display: none; margin-top: 1rem;">
        The popup window could not be opened, so use the link above.</p>
    </div>
  </div>
  <script>embedCurre("materiaali")</script>
</details>
