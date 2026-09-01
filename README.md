# React Native Nest Boilerplate

A production-minded monorepo starter for an Expo React Native application and
a NestJS API. It includes authentication, secure mobile sessions, PostgreSQL,
Prisma, reusable UI foundations, validation, tests, CI, and agent workflow
rules without prescribing a product domain.

## Included

- Expo SDK 57 with Expo Router and protected authenticated routes
- Native and JavaScript tab navigation
- React Query API state and automatic access-token refresh
- Secure refresh-token storage on native platforms
- Registration, login, logout, session restoration, and current-user screens
- NestJS authentication with rotating refresh tokens and replay protection
- PostgreSQL and Prisma with an authentication-only initial migration
- Swagger API documentation
- Reusable themed UI components powered by React Native Unistyles
- Maestro E2E infrastructure for critical authentication journeys
- ESLint, Prettier, commitlint, Husky, Jest, CodeQL, and GitHub Actions
- Reusable repository rules and agent skills under `.agents/`

## Requirements

- Node.js 24+
- pnpm 11.25+
- Docker with Docker Compose
- Android Studio or Xcode for native development
- Java 17+ and Maestro CLI 2.10.0 for mobile E2E tests

## Setup

```sh
pnpm install
cp apps/api/.env.example apps/api/.env
cp apps/mobile/.env.example apps/mobile/.env
docker compose up -d
pnpm db:migrate
```

Create the isolated test database once:

```sh
docker compose exec postgres createdb -U postgres app_test
cp apps/api/test.env.example apps/api/.env.test
```

Run the API and mobile application in separate terminals:

```sh
pnpm dev:api
pnpm dev:mobile
```

The API serves Swagger documentation at `http://localhost:3000/docs`.

## Validation

```sh
pnpm typecheck
pnpm lint
pnpm format:check
pnpm --filter api test
pnpm --filter mobile test
pnpm test:e2e:api
pnpm validate:e2e
pnpm test:e2e:mobile:smoke
```

See [`apps/e2e/README.md`](apps/e2e/README.md) for the disposable database,
device build, API URL, Maestro installation, and complete auth-suite setup.

## Customize first

Before shipping an application, replace the example Expo identifiers and
assets in `apps/mobile/app.json`, rotate all secrets, configure production CORS,
and rename the secure-storage key if multiple derived apps may coexist on one
device.

## Structure

```text
apps/
  api/       NestJS, Prisma, PostgreSQL, and authentication
  e2e/       Maestro workspace, account setup, flows, and runner
  mobile/    Expo, React Native, protected navigation, and reusable UI
packages/
  e2e-contract/ shared stable selectors for mobile and Maestro
.agents/     reusable engineering rules and task skills
```
