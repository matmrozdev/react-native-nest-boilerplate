---
name: implement-mobile-code
description: Implement or refactor mobile code and Maestro E2E coverage by selecting and applying the repository's focused architecture, component, styling, utility-testing, E2E, and integration rules. Use for source changes under apps/mobile or apps/e2e, including Expo Router routes, feature screens and components, reusable UI, hooks, API modules, storage, services, configuration, providers, utilities, tests, themes, animations, test IDs, and Maestro flows.
---

# Implement mobile code

## Workflow

1. Inspect the requested change and the relevant existing mobile files before
   choosing a structure.
2. Read `../../rules/mobile/framework/expo.md` and follow its versioned Expo
   documentation requirement.
3. Read `../../rules/mobile/architecture/architecture.md` to identify the owner
   and target directory.
4. Read the focused rules that match the change:
   - Read `../../rules/mobile/components/components.md` for components, screens,
     hooks, types, exports, barrels, naming, or imports.
   - Read `../../rules/mobile/styling/styling.md` for styles, themes, tokens,
     image assets, or animations.
   - Read `../../rules/mobile/testing/utils-and-testing.md` for helpers,
     utilities, or tests.
   - Read `../../rules/mobile/testing/maestro-e2e.md` for Maestro flows,
     critical mobile journeys, E2E setup, or test IDs.
   - Read `../../rules/mobile/integrations/integrations.md` for API transport,
     feature requests, storage, external SDKs, configuration, or providers.
5. Implement the change according to the selected rules in the narrowest owner.
6. Review the result against every selected rule and resolve conflicts at the
   canonical rule rather than duplicating or overriding it locally.
7. Run formatting, mobile type checking, linting, and the narrowest relevant
   unit tests.
8. Complete the required Wiki-impact check for architecture, dependency,
   feature, or workflow changes.

## Validation

From the repository root, run the checks supported by the change:

```sh
pnpm format:check
pnpm --filter mobile typecheck
pnpm lint
```

Run the narrowest relevant mobile test command when tests exist. Treat
automated checks as partial guardrails and manually verify the decisions owned
by the selected rules.
