## Kurssimateriaalin kontitus

Kurssimateriaali buildataan Docker-kuvaksi `ghcr.io/ohjelmistotuotanto-hy/ohtu-materiaali`, jossa sivustoa tarjoillaan nginx:llä. Kuva buildataan GitHub Actionsilla (`.github/workflows/containerization.yaml`) jokaisesta masteriin pushauksesta, ja ArgoCD deployaa sen osoitteeseen <https://studies.cs.helsinki.fi/ohtu/>.

Proxy poistaa polusta `/ohtu`-alun ennen kuin pyyntö välitetään kontille. Koska materiaalin linkit ovat muotoa `/osa1`, `/images/...` jne., [rebase.rb](rebase.rb) lisää buildatun sivuston kaikkiin juuresta alkaviin osoitteisiin alun `/ohtu` (build-argumentti `BASE_PATH`). Lähdekoodiin ja GitHub Pagesin versioon tämä ei vaikuta. [nginx.conf](nginx.conf) tarjoilee polut kuten `/osa1` ja `/tehtavat1` suoraan ilman uudelleenohjauksia, koska nginxin tekemästä uudelleenohjauksesta puuttuisi `/ohtu`.

Kuvan voi buildata ja kokeilla paikallisesti repositorion juuressa:

```sh
docker build -f containerization/Dockerfile -t ohtu-materiaali .
docker run --rm -p 8080:8080 ohtu-materiaali
```

Paikallisesti ajettaessa linkit osoittavat polkuun `/ohtu/...`, joten ne toimivat vain proxyn takana.
