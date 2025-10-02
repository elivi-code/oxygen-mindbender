# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Prerequisites

### Node.js Version

- **Required**: Node.js 22.17.0 or higher
- **Package Manager**: Yarn 4.1.1 (defined in packageManager field)
- **NPM**: 10.0.0 or higher

Use `.nvmrc` for local development:

```bash
nvm use 22 # Uses the default Node.js 22 version as defined in .nvmrc
```

## Development Commands

### Build Commands

- `yarn build` - Full build (clears dist, builds JS, copies types, builds TS, copies icons)
- `yarn build:dev` - Development build with watch mode
- `yarn build:js` - Build JavaScript using Babel (excludes certain packages)
- `yarn build:ts` - Build TypeScript packages using tsc
- `yarn build:storybook` - Build Storybook documentation

### Testing Commands

- `yarn test` - Run all tests with Jest
- `yarn test:watch` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage report
- `yarn test:ci` - Run tests in CI mode with coverage
- `yarn test:treeshake` - Test tree-shaking capabilities

### Linting Commands

- `yarn lint` - Run ESLint and Stylelint
- `yarn lint:fix` - Run linting with auto-fix
- `yarn lint:eslint` - Run ESLint only
- `yarn lint:stylelint` - Run Stylelint only

### Linting Requirements

- **ALWAYS run lint after making changes**: All code changes must pass lint rules before completion
- Run `yarn lint` to check for violations
- Run `yarn lint:fix` to automatically fix fixable issues
- All remaining lint errors must be resolved manually
- Never commit code that fails linting - this will break CI/CD pipelines

### Development Tools

- `yarn storybook` - Start Storybook development server on port 9001
- `yarn changelog` - Generate changelog
- `yarn exportThemeJson` - Export theme tokens to JSON

### Package Management

- `yarn lerna:version` - Version packages using Lerna
- `yarn lerna:publish` - Publish packages to npm
- `yarn create:release` - Create a new release

## Repository Architecture

### Monorepo Structure

This is a Lerna-based monorepo with Yarn workspaces containing the 8x8 Oxygen design system. All packages are located in `/packages/*` and follow the naming convention `@8x8/oxygen-<component>`.

### Key Directories

- `/packages/` - Individual component packages
- `/docs/` - Documentation and guidelines (Storybook stories)
- `/.storybook/` - Storybook configuration
- `/scripts/` - Build and release scripts
- `/coverage/` - Test coverage reports

### Package Structure

Each package follows a consistent structure:

```
packages/<component>/
├── src/
│   ├── index.ts                    # Main export file
│   ├── components/                 # React components
│   ├── styled/                     # Styled components
│   ├── constants/                  # Component constants
│   ├── types.ts                    # TypeScript types
│   └── utils/                      # Utility functions
├── examples/                       # Storybook examples
├── dist/                          # Build output
└── package.json                   # Package configuration
```

### Core Dependencies

- **Theme System**: `@8x8/oxygen-theme` (tokens), `@8x8/oxygen-constants` (component themes)
- **Configuration**: `@8x8/oxygen-config` (OxygenProvider)
- **Utilities**: `@8x8/oxygen-utils`, `@8x8/oxygen-icon`
- **Styling**: `styled-components` (CSS-in-JS)

## Component Development Patterns

### Component Export Strategy

- **Default Export**: Primary component (e.g., `Button`)
- **Named Exports**: Secondary components, utilities, types
- **Type Exports**: TypeScript interfaces and enums

### Theming Integration

- **NEW COMPONENTS**: Use global theme exposed through `OxygenProvider` (no withTheme HOC needed)
- **LEGACY COMPONENTS**: Use `withTheme()` HOC only for older components with custom themes
- Theme variants: Classic, Light/Dark, Neo (NeoLight/NeoDark)
- Access theme tokens through `@8x8/oxygen-constants`
- **IMPORTANT**: All new components should rely on the global theme, not component-specific themes

### Styled Components Pattern

- Separate styled components in `/styled` directory
- Use theme props for consistent styling
- Follow component naming: `StyledComponentName`

### TypeScript Usage

- All new components must be written in TypeScript
- Define props interfaces in `types.ts`
- Export types for consumer use
- Use proper generic typing for reusable components
- **Props interface extension**: If component spreads `...props` to a root element, the props interface must extend the appropriate HTML element attributes:
  - For `div` elements: `extends React.HTMLAttributes<HTMLDivElement>`
  - For `button` elements: `extends React.ButtonHTMLAttributes<HTMLButtonElement>`
  - For `input` elements: `extends React.InputHTMLAttributes<HTMLInputElement>`
  - This ensures proper TypeScript support for all valid HTML attributes

## Testing Strategy

### Test Framework

- **Jest** with React Testing Library
- **Enzyme** for legacy tests (being phased out)
- **Snapshot testing** for component rendering
- **Coverage reporting** with thresholds

### Test Location

- Component tests: `src/index.test.tsx`
- Test utilities: `__tests__/` directory
- Mocks: `__mocks__/` directory

### Test Commands

- Single test: `yarn test -- --testNamePattern="ComponentName"`
- Watch mode: `yarn test:watch`
- Coverage: `yarn test:coverage`

### Test Guidelines

- **DO NOT mock Icons in tests**: Icons should not be mocked so that integration issues are caught when icons change. If an icon change breaks a component, we want to see that test failing.
- Use real icons in tests to ensure proper integration testing
- Mock only external dependencies and styled components when necessary for isolation
- **Avoid snapshot tests**: Snapshot tests are brittle and don't provide clear feedback about what's broken. Instead, test specific CSS rules and properties that are influenced by props using `jest-styled-components` matchers
- **Test specific behavior**: Write tests that check for specific CSS properties, colors, sizes, etc. rather than entire component snapshots
- **Always use OxygenProvider**: All tests should render components wrapped with `OxygenProvider` to ensure proper theme integration and realistic testing conditions
- **Always return expect in waitFor**: For all `waitFor` calls, ensure they have a return value (preferably the expect itself), otherwise the test will pass without waiting for the result. Use `await waitFor(() => expect(...))` instead of `await waitFor(() => { expect(...) })`

## Build System

### TypeScript Configuration

- **Build Config**: `tsconfig.build.json` for compilation
- **Dev Config**: `tsconfig.json` extends build config
- **Target**: ES2021 with React JSX
- **Incremental**: Uses TypeScript project references

### Babel Configuration

- **Presets**: `@babel/preset-env`, `@babel/preset-react`, `@babel/preset-typescript`
- **Config**: `babel.config.js`

### Package Build Process

1. TypeScript compilation (`tsc -b`)
2. Babel transpilation for JS packages
3. Type definition generation
4. Icon and graphics copying
5. Parallel builds across packages

## Storybook Integration

### Story Organization

- **Examples**: `/examples` directory in each package
- **Documentation**: `.stories.tsx` files with component docs
- **Playground**: Interactive component playground stories

### Story Types

- **Documentation**: Component API and usage
- **Examples**: Common use cases
- **Playground**: Interactive props manipulation
- **Guidelines**: Design system guidelines

### Story Patterns

- **IMPORTANT**: Always wrap Oxygen components with `ComponentSection` in stories
- `ComponentSection` reacts to theme changes to allow proper rendering with Storybook theme switcher
- Each Oxygen component instance should have its own `ComponentSection` wrapper
- Non-Oxygen elements (like explanatory text) can be outside `ComponentSection`

## Release Process

### Version Management

- **Fixed Versioning**: All packages use same version (2.97.0)
- **Lerna**: Manages package versioning and publishing
- **Changelog**: Automated changelog generation
- **Git Tags**: Created during release process

### Changelog Format

- **Package-Level Updates**: Update individual package `CHANGELOG.md` files in `/packages/{package}/CHANGELOG.md`
- **Root Changelog**: **NEVER** manually update `/CHANGELOG.md` - this file is updated programmatically during release
- **Jira References**: Use regular parentheses for Jira IDs, not markdown links (e.g., `(OX-1234)`)
- **Link Generation**: Correct markdown links are automatically created during changelog generation
- **Structure**: Follow existing format with package sections and subsections in this order:
  1. **Changed** - Changes to existing functionality
  2. **Added** - New features and functionality
  3. **Removed** - Removed features or functionality
  4. **Fixed** - Bug fixes and corrections

### Release Commands

- `yarn update:version` - Update all package versions
- `yarn changelog:update-version` - Update changelog version
- `yarn create:release` - Create new release

## Code Quality Standards

### ESLint Configuration

- **Config**: Airbnb with custom rules
- **TypeScript**: `@typescript-eslint` integration
- **React**: React-specific rules and hooks
- **Accessibility**: `jsx-a11y` plugin

### Prettier Configuration

- **Style**: Single quotes, no semicolons, trailing commas
- **Arrow Parens**: Avoid when possible
- **Config**: Defined in `package.json`
- **IMPORTANT**: Always ensure code is properly formatted with Prettier. Users run Prettier on save in VS Code.
- **Always run prettier on each file change**

### File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_CASE or camelCase
- **Types**: PascalCase interfaces with descriptive names

## Development Workflow

### Adding New Components

1. Create package directory in `/packages/`
2. Set up package.json with proper dependencies
3. Implement component in TypeScript
4. Add styled components and theme integration
5. Create comprehensive tests
6. Add Storybook examples
7. Update build configuration if needed

### Modifying Existing Components

1. Check for breaking changes in API
2. Update TypeScript types if needed
3. Maintain backward compatibility
4. Add/update tests for new functionality
5. Update Storybook examples
6. Consider theme system impact

### Common Patterns

- **Ref Forwarding**: Use `React.forwardRef` for proper ref handling
- **Props Spreading**: Use `...props` for flexible API and always spread all props to the root element
- **Theme Integration**: Always use theme tokens, never hard-coded values
- **Accessibility**: Follow WCAG guidelines and use semantic HTML
- **TestId Pattern**: Use `getTestAttributes(testId)` in component, not in styled component
  - Handle testId in main component: `{...getTestAttributes(testId)} {...props}`

## Package Dependencies

### Internal Dependencies

- Core packages: `theme`, `constants`, `utils`, `config`
- Component packages can depend on other component packages
- Avoid circular dependencies

### External Dependencies

- **React**: ^16.8.2 || ^17 || ^18 (peer dependency)
- **Styled Components**: ^4.1.2 || >=4.1.2 (peer dependency)
- **TypeScript**: For type definitions and build
- **Lodash**: Utility functions (specific imports only)

## Performance Considerations

### Tree Shaking

- All packages are side-effect free
- Use named exports for optimal bundling
- Avoid default exports for utilities

### Bundle Size

- Monitor bundle impact of new dependencies
- Use dynamic imports for large utilities
- Consider code splitting for complex components

### Theme Performance

- Theme tokens are cached
- Use theme HOC pattern for efficient updates
- Avoid inline styles that recreate on every render

## Documentation Standards

### README Prop Tables

Use TypeScript-style prop tables for consistency across all packages. Follow this format:

```markdown
### ComponentName

`interface ComponentNameProps`

| Name       | Type                             | Default     | Description                       |
| :--------- | :------------------------------- | :---------- | :-------------------------------- |
| `children` | `React.ReactNode`                | `undefined` | Rendered content inside component |
| `variant?` | `'primary' \| 'secondary'`       | `'primary'` | Visual style variant              |
| `size?`    | `'small' \| 'medium' \| 'large'` | `'medium'`  | Component size                    |
| `testId?`  | `string`                         | `undefined` | Test ID DOM attribute value       |
```

**Format Rules:**

- **Props Order**: List required props first, then optional props (marked with `?`)
- Use backticks around prop names (e.g., `children`, `variant?`)
- Use TypeScript union syntax with escaped pipes (e.g., `'primary' \| 'secondary'`)
- Use backticks around string literal values (e.g., `'primary'`)
- Include `?` for optional props
- Use `undefined` as default for optional props without explicit defaults
- Keep descriptions concise and consistent

## Changelog Guidelines

### Changelog Preparation

- **Changed subcategory**: In the changelog, only call out the "Changed" subcategory for public-facing changes

### Prettier Configuration

- **Always run prettier on each file change**

# important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.
