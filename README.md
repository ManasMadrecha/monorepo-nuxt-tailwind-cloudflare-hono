# Monorepo for Nuxt Tailwind Cloudflare Hono

> Multiple API + Multiple Apps + One Website

by CA Manas Madrecha

## How to use

1. Clone the repo
2. Run `npm i:all` to install the dependencies for all workspaces
3. Run `npm run dev:b` to start the backend API server
4. Run `npm run dev:f` to start the frontend apps and website

Individual workspaces can be started using `npm run dev:<workspace>`

## How to deploy

1. Run `npm run build:all` to build all workspaces
2. Run `npm run deploy:all` to deploy all workspaces

- Deploy the `b/api` to Cloudflare  
- Deploy the `f/apps` to Cloudflare
- Deploy the `f/website` to Cloudflare Pages

Individual workspaces can be deployed using `npm run deploy:<workspace>`

## How to add new apps

1. Add new worker to the `b/api` directory (optional if you want to add new API endpoints)
2. Add new app to the `f/apps` directory
3. Add new page to the `f/website/pages` directory.
