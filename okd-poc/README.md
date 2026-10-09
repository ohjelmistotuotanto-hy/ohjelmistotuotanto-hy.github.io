## Kertaaja POC

Testisivu, jolla kokeillaan toimiiko CurreChatin upotus helsinki.fi-domainissa. Sivu on staattinen [index.html](index.html), jota tarjoillaan nginx-kontista.

Deployaus noudattaa [miniprojekti-boilerplaten](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate) ohjeita:

1. Docker-kuva `ghcr.io/ohjelmistotuotanto-hy/kertaaja-poc` buildataan GitHub Actionsilla (`.github/workflows/okd-poc.yaml`) aina kun hakemistoon `okd-poc` pushataan muutoksia. Kuvan on oltava julkinen (Packages → Package settings → Change visibility → Public).
2. Korvaa tiedostossa `kustomization.yaml` molemmat `<namespace>`-kohdat OKD-projektin nimellä.
3. Kirjaudu `oc`-työkalulla OKD-klusteriin, valitse projekti (`oc project <namespace>`) ja suorita tässä hakemistossa

```sh
oc apply -k .
```

Sivu löytyy osoitteesta https://route-&lt;namespace&gt;.ext.okd-cs-test-0.k8s.cs.helsinki.fi
