# API application

NestJS API with PostgreSQL, Prisma, Swagger, request validation, access tokens,
rotating refresh sessions, logout revocation, and authentication tests.

Copy `.env.example` to `.env`, start PostgreSQL from the repository root, then
run:

```sh
pnpm db:migrate
pnpm start:dev
```

Swagger documentation is available at `http://localhost:3000/docs`.

For E2E tests, create an isolated database and copy the test environment:

```sh
docker compose exec postgres createdb -U postgres app_test
cp test.env.example .env.test
pnpm test:e2e
```

The test harness refuses to clear a database whose name does not explicitly
contain `test`.
