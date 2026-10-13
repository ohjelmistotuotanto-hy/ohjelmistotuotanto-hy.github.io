## Kurssimateriaali OKD:ssä

Kurssimateriaali buildataan Docker-kuvaksi, jota tarjoillaan OKD:ssä nginx-kontista. Proxy tarjoilee sivuston osoitteessa study.cs.helsinki.fi/ohtu ja poistaa polusta `/ohtu`-alun ennen kuin pyyntö välitetään eteenpäin.

Koska materiaalin linkit ovat muotoa `/osa1`, `/images/...` jne., [rebase.rb](rebase.rb) lisää buildatun sivuston kaikkiin juuresta alkaviin osoitteisiin alun `/ohtu` (build-argumentti `BASE_PATH`). Lähdekoodiin ja GitHub Pagesin versioon tämä ei vaikuta. [nginx.conf](nginx.conf) tarjoilee polut kuten `/osa1` ja `/tehtavat1` suoraan ilman uudelleenohjauksia, koska nginxin tekemästä uudelleenohjauksesta puuttuisi `/ohtu`.

Deployaus noudattaa [miniprojekti-boilerplaten](https://github.com/ohjelmistotuotanto-hy/miniprojekti-boilerplate) ohjeita:

1. Docker-kuva `ghcr.io/ohjelmistotuotanto-hy/ohtu-materiaali` buildataan GitHub Actionsilla (`.github/workflows/okd-poc.yaml`) jokaisesta masteriin pushauksesta. OKD hakee uuden kuvan automaattisesti.
2. Ensimmäisellä kerralla kirjaudu `oc`-työkalulla klusteriin `okd-cs-test-0` ja suorita tässä hakemistossa

```sh
oc apply -k .
```

Kuvan voi buildata ja kokeilla paikallisesti repositorion juuressa:

```sh
docker build -f okd-poc/Dockerfile -t ohtu-materiaali .
docker run --rm -p 8080:8080 ohtu-materiaali
```

Paikallisesti ajettaessa linkit osoittavat polkuun `/ohtu/...`, joten ne toimivat vain proxyn takana.
