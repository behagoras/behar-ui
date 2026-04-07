# behar-ui

[![TypeScript](https://img.shields.io/badge/TypeScript-4-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-%E2%89%A516-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-6-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![npm](https://img.shields.io/badge/npm-behar--ui--tsdx-CB3837?logo=npm)](https://www.npmjs.com/package/behar-ui-tsdx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React component library built with TypeScript, MUI, Emotion, and Styled Components. Packaged with tsdx for zero-config builds, tested with Jest, and documented in Storybook.

Currently ships a `BeharTable` component with typed props for headers, rows, and cell content. Designed as a base for personal project UI consistency.

## Usage

```bash
npm install behar-ui-tsdx
```

```tsx
import { BeharTable } from 'behar-ui-tsdx';

<BeharTable
  headers={[
    { cell: 'Name', key: 'name' },
    { cell: 'Calories', key: 'calories' },
  ]}
  rows={[
    { cells: ['Frozen yoghurt', 159] },
    { cells: ['Ice cream', 237] },
  ]}
/>
```

## Development

```bash
git clone https://github.com/behagoras/behar-ui.git
cd behar-ui
npm install

npm start          # Watch mode (tsdx)
npm run storybook  # Component playground on :6006
npm test           # Jest tests
npm run build      # Production build
```

## Tooling

- **tsdx** for bundling (CJS + ESM outputs) with size-limit checks
- **Storybook 6** for interactive component development
- **Jest** + react-test-renderer for unit tests
- **Husky** pre-commit hook runs lint before every commit
- **GitHub Actions** for CI (size check on PRs)

## Project Structure

```
src/
  components/
    BeharTable/       Table component, types, tests
  types/              Shared type definitions
stories/              Storybook stories
example/              Consumer usage example
.github/workflows/    CI for size and lint checks
```

## Publishing

```bash
npm run publish   # Bumps patch version and publishes to npm
```

## License

MIT
