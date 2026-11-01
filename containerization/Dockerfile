# Built from the repository root: docker build -f containerization/Dockerfile .
FROM ruby:2.7 AS build

ARG BASE_PATH=/ohtu

WORKDIR /src
RUN gem install bundler -v 1.17.3
COPY Gemfile Gemfile.lock ./
RUN bundle _1.17.3_ install

COPY . .
RUN bundle _1.17.3_ exec jekyll build -d /site \
  && ruby containerization/rebase.rb /site "$BASE_PATH"

FROM nginxinc/nginx-unprivileged:alpine

# CVE-2026-111497 (Broccoli2Shell): brotli-libs 1.2.0 in the base image is vulnerable
USER root
RUN apk upgrade --no-cache brotli-libs
USER 101

COPY containerization/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site /usr/share/nginx/html

EXPOSE 8080
