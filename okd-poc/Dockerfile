# Built from the repository root: docker build -f okd-poc/Dockerfile .
FROM ruby:2.7 AS build

ARG BASE_PATH=/ohtu

WORKDIR /src
RUN gem install bundler -v 1.17.3
COPY Gemfile Gemfile.lock ./
RUN bundle _1.17.3_ install

COPY . .
RUN bundle _1.17.3_ exec jekyll build -d /site \
  && ruby okd-poc/rebase.rb /site "$BASE_PATH"

FROM nginxinc/nginx-unprivileged:alpine

COPY okd-poc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site /usr/share/nginx/html

EXPOSE 8080
