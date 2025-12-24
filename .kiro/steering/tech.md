# Tech Stack

## Core Technologies
- Node.js (>=20)
- TypeScript (ES2021 target)
- Express.js (HTTP framework)
- MikroORM (database ORM with PostgreSQL)
- Awilix (dependency injection)

## Build System
- Yarn 3.2.1 (package manager with workspaces)
- Turborepo (monorepo build orchestration)
- TypeScript compiler (tsc)
- tsup (bundling for some packages)
- SWC (fast compilation for tests)

## Frontend (Admin Dashboard)
- React 18
- Vite
- TailwindCSS
- Custom UI component library (@medusajs/ui)

## Testing
- Jest (unit and integration tests)
- Vitest (for some packages)
- Supertest (API testing)

## Code Quality
- ESLint (Google style base + TypeScript rules)
- Prettier (formatting)

## Common Commands

```bash
# Install dependencies
yarn

# Build all packages
yarn build

# Run linting
yarn lint

# Run unit tests
yarn test

# Run integration tests
yarn test:integration:packages
yarn test:integration:http
yarn test:integration:modules

# Generate OpenAPI specs
yarn openapi:generate

# Create a changeset for versioning
yarn changeset
```

## TypeScript Configuration
- Strict null checks enabled
- Decorator metadata enabled (for ORM)
- Module resolution: Node16
- Source maps enabled
- Declaration files generated

## Code Style Rules
- No semicolons
- Double quotes for strings
- Trailing commas (ES5 style)
- 80 character line limit
- Arrow functions always have parentheses
