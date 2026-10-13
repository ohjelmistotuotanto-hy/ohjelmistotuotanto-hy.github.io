---
layout: page
title: OhtuBotit
inheader: no
permalink: /ohtubotit/
---

Kurssin botit toimivat CurreChatissa, ja niiden käyttö edellyttää kirjautumista yliopiston tunnuksilla. Avaa botti klikkaamalla sen nimeä:

- [Kertaaja](#kertaaja): botti kyselee sinulta kysymyksiä kurssimateriaalista
- [KurssimateriaaliChat](#materiaali): voit kysyä mitä tahansa koko kurssimateriaalista

<style>
  details.bot { margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.3rem; padding: 0.5rem 1rem; }
  details.bot summary { cursor: pointer; font-size: 1.25rem; font-weight: bold; }
  details.bot[open] summary { margin-bottom: 0.5rem; }
</style>

<script>
  // CurreChat embed login handling, shared by all embeds on this page.
  // Each embed has its own element ids (suffix), and messages are matched
  // to the right iframe by event.source.
  let curreLoginWindow = null

  const embedCurre = (suffix) => {
    const iframe = document.getElementById(`cc-iframe-${suffix}`)
    const loginInfo = document.getElementById(`login-popup-info-${suffix}`)
    const popupBlockedInfo = document.getElementById(`popup-blocked-info-${suffix}`)
    const details = document.getElementById(suffix)
    let successLoading = false

    // The chat is loaded only when its section is opened
    details.addEventListener("toggle", () => {
      if (details.open && !iframe.getAttribute("src")) {
        iframe.src = iframe.dataset.src
      }
    })
    const openFromHash = () => {
      if (location.hash === `#${suffix}`) {
        details.open = true
      }
    }
    window.addEventListener("hashchange", openFromHash)
    openFromHash()

    const toggleLoginInfo = (show) => {
      loginInfo.style.display = show ? "block" : "none"
    }

    iframe.onload = async () => {
      if (successLoading || !iframe.getAttribute("src")) {
        return
      }
      toggleLoginInfo(true)

      // Listen for a pong message from the iframe
      window.addEventListener("message", function handler(event) {
        if (event.origin !== "https://curre.helsinki.fi" || event.source !== iframe.contentWindow) {
          return
        }
        if (event.data.type === "pong") {
          successLoading = true
          window.removeEventListener("message", handler)
          toggleLoginInfo(false)
        }
      })

      iframe.contentWindow?.postMessage({ type: "ping" }, "https://curre.helsinki.fi")
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (successLoading) {
        toggleLoginInfo(false)
        return
      }

      // Open CC in a new window and do a handshake with it. Only one login
      // window is opened even if several embeds need a login.
      if (!curreLoginWindow || curreLoginWindow.closed) {
        curreLoginWindow = window.open(
          "https://curre.helsinki.fi/chat/login-helper", "_blank",
          "width=600,height=400,rel=opener")
      }
      const windowProxy = curreLoginWindow
      if (!windowProxy) {
        popupBlockedInfo.style.display = "block"
      }

      const nonce = crypto.randomUUID()

      window.addEventListener("message", function handler(event) {
        if (event.origin !== "https://curre.helsinki.fi") {
          return
        }
        if (event.data.type === "login-success" && event.data.nonce === nonce) {
          // Reload the iframe to reflect the new login state
          successLoading = true
          iframe.src = iframe.src
          toggleLoginInfo(false)
          windowProxy?.close()
          window.removeEventListener("message", handler)
        }
      })

      window.addEventListener("beforeunload", () => {
        windowProxy?.close()
      })

      window.addEventListener("focus", () => {
        // Reload the iframe to reflect the new login state
        iframe.src = iframe.src
        toggleLoginInfo(false)
        windowProxy?.close()
      })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      windowProxy?.postMessage({ type: "login-query", nonce }, "https://curre.helsinki.fi")
    }
  }
</script>

<details class="bot" id="kertaaja">
  <summary>Kertaaja</summary>
  <p>Botti kyselee sinulta kysymyksiä kurssimateriaaliin (osat 1-3) liittyen. Voit pyytää esim. <em>Kysy 5 kysymystä koko materiaalista</em> tai <em>Kysy 3 kysymystä Scrumista ja arvostele sen jälkeen, kuinka vastasin</em>. Tai ihan mitä vaan keksit!</p>
  <div lang="fi" style="position: relative;" translate="yes"><iframe
      id="cc-iframe-kertaaja"
      style="border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.3rem;"
      data-src="https://curre.helsinki.fi/chat/hy-opt-cur-2627-7a893cd5-d161-4815-ac8e-422dd8953ff9?embedded=true&amp;promptId=95dcc2c9-3713-4eeb-bf88-bc9e3cbac408"
      width="100%" height="800px">
    </iframe>
    <div id="login-popup-info-kertaaja"
      style="position: absolute; top: 0; left: 0; display: none; padding: 4rem; white-space: pre-line;">
      <p>Sinun pitää uudistaa kirjautumissessiosi käyttääksesi CurreChattiä.
        Kirjautuminen avautuu uuteen ikkunaan. Jos niin ei tapahtunut, <a
          href="https://curre.helsinki.fi/chat/login-helper" target="_blank"
          rel="noopener opener">paina tästä</a>.</p>
      <p id="popup-blocked-info-kertaaja" style="display: none; margin-top: 1rem;">
        Ponnahdusikkunaa ei voitu avata, joten käytä yllä olevaa linkkiä.</p>
    </div>
  </div>
  <script>embedCurre("kertaaja")</script>
</details>

<details class="bot" id="materiaali">
  <summary>KurssimateriaaliChat</summary>
  <p>Voit kysyä mitä tahansa koko kurssimateriaalista, esim. miten kurssi arvostellaan, milloin koe pidetään tai mikä on viikon 4 luentojen aiheena.</p>
  <div lang="fi" style="position: relative;" translate="yes"><iframe
      id="cc-iframe-materiaali"
      style="border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 0.3rem;"
      data-src="https://curre.helsinki.fi/chat/hy-opt-cur-2627-7a893cd5-d161-4815-ac8e-422dd8953ff9?embedded=true&amp;promptId=45b183a7-58c2-48ce-bcb3-63bbfc8b0745"
      width="100%" height="800px">
    </iframe>
    <div id="login-popup-info-materiaali"
      style="position: absolute; top: 0; left: 0; display: none; padding: 4rem; white-space: pre-line;">
      <p>Sinun pitää uudistaa kirjautumissessiosi käyttääksesi CurreChattiä.
        Kirjautuminen avautuu uuteen ikkunaan. Jos niin ei tapahtunut, <a
          href="https://curre.helsinki.fi/chat/login-helper" target="_blank"
          rel="noopener opener">paina tästä</a>.</p>
      <p id="popup-blocked-info-materiaali" style="display: none; margin-top: 1rem;">
        Ponnahdusikkunaa ei voitu avata, joten käytä yllä olevaa linkkiä.</p>
    </div>
  </div>
  <script>embedCurre("materiaali")</script>
</details>
