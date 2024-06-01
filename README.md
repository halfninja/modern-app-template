# Frontend / Backend app

This is an example of a now fairly common pattern for a two-part app - a JVM-based backend app that serves a JSON API, and a frontend SvelteKit app which fetches from it. Both services are reverse proxied through a Caddy web server so they can be accessible over the same origin.

## Quickstart

Requirements:

* Docker Compose 1.22 or later

Run `docker compose up --watch`. You should be able to browse to https://localhost/ (bypassing certificate warnings) and see a very basic Svelte page which fetches the heading text from the backend API server. It may take a little while to show up on first start as the backend process compiles the application on demand.

The `--watch` flag means that you should be able to make changes in either the frontend or backend and the respective development modes for each app should apply those changes. Try changing the message in `HomeController.scala` then refreshing the page.