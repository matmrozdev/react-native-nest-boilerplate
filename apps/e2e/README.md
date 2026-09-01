# Mobile E2E tests

This workspace owns the Maestro flows that exercise the installed mobile app
against a running API. The flows target standalone Expo development builds,
not Expo Go.

## Prerequisites

- Java 17 or newer
- Maestro CLI 2.10.0
- a running Android emulator or iOS simulator
- the API running against a disposable E2E database
- the mobile development build installed on the target device

Install the pinned Maestro version on macOS or Linux:

```sh
export MAESTRO_VERSION=2.10.0
curl -Ls "https://get.maestro.mobile.dev" | bash
maestro --version
```

See the official [Maestro installation guide](https://docs.maestro.dev/maestro-cli/how-to-install-maestro-cli)
for Windows, WSL, Homebrew, and manual installation options.

## Local environment

Start PostgreSQL and create a disposable database once:

```sh
docker compose up -d
docker compose exec postgres createdb -U postgres app_e2e
```

Copy `apps/api/.env.example` to `apps/api/.env`, replace its example secrets,
and run migrations and the API with the E2E database URL:

```sh
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app_e2e?schema=public pnpm db:migrate:deploy
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app_e2e?schema=public pnpm dev:api
```

Build the mobile app with an API URL reachable from the device. Android
emulators normally use `http://10.0.2.2:3000`; iOS simulators can use
`http://localhost:3000`.

```sh
EXPO_PUBLIC_API_URL=http://10.0.2.2:3000 pnpm mobile android
```

The Maestro setup scripts run on the host and use `http://localhost:3000` by
default. Override the defaults without editing flows:

```sh
MAESTRO_API_URL=http://localhost:3000 \
MAESTRO_APP_ID=com.example.reactnativeneststarter \
pnpm test:e2e:mobile
```

## Commands

Run from the monorepo root:

```sh
pnpm test:e2e:mobile
pnpm test:e2e:mobile:auth
pnpm test:e2e:mobile:smoke
pnpm validate:e2e
```

`validate:e2e` checks YAML syntax, flow metadata, critical-flow isolation, and
test-ID references without requiring a device. Executing the actual Maestro
suite requires the installed app, running API, and connected device.

## Test data

Every flow generates a unique `@example.test` email. Registration creates the
account through the UI because registration is the behavior under test. Other
auth flows seed their account through `POST /auth/register` with Maestro's
built-in HTTP client, then exercise login, session restoration, or logout
through the UI. Never point these setup scripts at production.

The shared selector contract lives in
`packages/e2e-contract/src/test-ids.json`. The runner exposes those values to
Maestro, while the mobile app imports the same contract.
