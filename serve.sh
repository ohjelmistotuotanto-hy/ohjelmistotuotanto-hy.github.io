#!/bin/sh
export JEKYLL_VERSION=3.5
docker run  --volume="$PWD:/srv/jekyll" -p 4000:4000 -it mluukkai/kastomjekyl jekyll serve --watch --drafts

# see https://ddewaele.github.io/running-jekyll-in-docker/

# docker run  --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve --watch --drafts
# docker run  --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:3.8 jekyll serve --watch --drafts

# oma image luotu missä commitoitu bundlattu kontainer
# docker commit d786c075de25 mluukkai/kastomjekyl