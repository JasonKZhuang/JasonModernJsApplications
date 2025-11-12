# Modern.js App

## Setup and Run

Install the dependencies:

```bash
yarn install
```

Start the dev server:

```bash
yarn dev
```

Enable optional features or add a new entry:

```bash
yarn new
```

Build the app for production:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn serve
```

## Configure Biome
```bash
yarn add -D -E @biomejs/biome
# generate a biome.json configuration file.
yarn exec biome init

# Format all files
yarn exec biome format --write

# Format specific files
yarn exec biome format --write <files>

# Lint files and apply safe fixes to all files
yarn exec biome lint --write

# Lint files and apply safe fixes to specific files
yarn exec biome lint --write <files>

# Format, lint, and organize imports of all files
yarn exec biome check --write

# Format, lint, and organize imports of specific files
yarn exec biome check --write <files>
```

[Migrate from ESLint and Prettier](https://biomejs.dev/guides/migrate-eslint-prettier/)
