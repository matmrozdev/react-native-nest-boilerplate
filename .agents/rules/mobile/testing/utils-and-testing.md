---
title: Mobile utilities and testing
description: Define mobile helper extraction, utility ownership and naming, mandatory utility tests, and unit-test quality conventions.
scope: mobile
applies_to:
  - mobile helper extraction
  - mobile utility creation
  - mobile unit-test creation
  - mobile unit-test modification
related_skills:
  - implement-mobile-code
---

# Mobile utilities and testing

## Helper placement

Keep a function used by one component or module inside that owning file:

```tsx
const getButtonState = (...) => {
  // ...
};

export const Button = (...) => {
  // ...
};
```

Extract a function into an owner's `utils/` directory only when it is reused by
multiple consumers or represents meaningful standalone pure logic that
benefits from isolated testing.

Place extracted utilities in the closest owner, such as `ui/utils/`,
`features/profile/utils/`, or `services/analytics/utils/`. Do not place loose
utility files next to unrelated components.

## Utility naming and coverage

Use descriptive kebab-case names that communicate responsibility:

```text
format-profile-name.ts
resolve-button-variant.ts
map-auth-response.ts
```

Do not use `utils.ts`, `helpers.ts`, `common.ts`, `misc.ts`, or
`ComponentName.utils.ts`.

Give every standalone utility extracted into `utils/` a colocated unit test:

```text
features/profile/utils/
├── format-profile-name.ts
└── format-profile-name.test.ts
```

## Test files and suites

Name tests after their source files using `<source-file-name>.test.ts`. Use
`ComponentName.test.tsx` only when component testing is warranted. Do not add
component or screen tests until the project adopts them.

Use the exact function, method, hook, or unit name in the top-level `describe`
block:

```ts
describe('formatProfileName', () => {});
describe('mapProfileResponse', () => {});
describe('AuthService.login', () => {});
```

Do not use vague suite names such as `profile utils` or `helpers`.

Write every `it(...)` description as a natural continuation of `it`. Never use
`should`:

```ts
it('returns an empty label when the name is missing', () => {});
it('breaks the loop after finding the first matching item', () => {});
it('throws when the input contains an unsupported value', () => {});
```

## Test quality

- Verify observable behavior instead of implementation details.
- Test one meaningful behavior per test.
- Cover important boundaries and edge cases.
- Use precise assertions and the smallest meaningful test data.
- Keep tests deterministic.
- Mock only external boundaries.
- Avoid unnecessary test logic.

Use Arrange, Act, and Assert structure through spacing:

```ts
it('trims surrounding whitespace from the profile name', () => {
  const profileName = '  Alex  ';

  const result = formatProfileName(profileName);

  expect(result).toBe('Alex');
});
```

Do not add `// Arrange`, `// Act`, or `// Assert` comments unless they genuinely
clarify a complex test.
