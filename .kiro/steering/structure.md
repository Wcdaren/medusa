# Project Structure

This is a Yarn workspaces monorepo managed with Turborepo.

## Top-Level Directories

```
packages/           # All publishable packages
integration-tests/  # Integration test suites
www/               # Documentation website
scripts/           # Build and CI scripts
.changeset/        # Changeset files for versioning
```

## Package Organization

### `packages/core/`
Core framework packages shared across modules:
- `framework` - Main framework with HTTP, config, database utilities
- `types` - TypeScript type definitions
- `utils` - Shared utility functions
- `workflows-sdk` - Workflow definition and execution
- `orchestration` - Workflow orchestration engine
- `modules-sdk` - Module loading and registration
- `core-flows` - Pre-built commerce workflows
- `js-sdk` - JavaScript client SDK

### `packages/modules/`
Independent commerce modules (each is a separate npm package):
- `product`, `cart`, `order`, `payment`, `pricing`
- `customer`, `user`, `auth`, `api-key`
- `fulfillment`, `inventory`, `stock-location`
- `promotion`, `tax`, `region`, `currency`
- `notification`, `file`, `store`, `sales-channel`
- `event-bus-local`, `event-bus-redis`
- `workflow-engine-inmemory`, `workflow-engine-redis`
- `providers/` - Provider implementations (payment, fulfillment, auth, etc.)

### `packages/medusa/`
Main Medusa application package that bundles all modules and exposes APIs.

### `packages/admin/`
Admin dashboard packages:
- `dashboard` - React admin UI application
- `admin-sdk` - SDK for admin extensions
- `admin-bundler` - Build tooling for admin
- `admin-vite-plugin` - Vite plugin for admin builds

### `packages/design-system/`
UI component library:
- `ui` - React components
- `icons` - Icon components
- `ui-preset` - TailwindCSS preset
- `toolbox` - Design utilities

### `packages/cli/`
Command-line tools:
- `medusa-cli` - Main CLI for Medusa projects
- `create-medusa-app` - Project scaffolding
- `oas/` - OpenAPI specification tools

## Module Structure Pattern
Each module follows this structure:
```
src/
  index.ts           # Public exports
  models/            # MikroORM entities
  services/          # Business logic
  migrations/        # Database migrations
  __tests__/         # Unit tests
  __fixtures__/      # Test fixtures
```

## Integration Tests
```
integration-tests/
  api/               # Legacy API tests
  http/              # HTTP endpoint tests
  modules/           # Module integration tests
  helpers/           # Test utilities
  factories/         # Test data factories
```

## Branch Strategy
- `develop` - Main development branch (Medusa 2.x)
- `v1.x` - Maintenance branch for Medusa 1.x
