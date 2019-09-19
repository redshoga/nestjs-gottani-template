# nestjs-gottani-templates

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter + various features repository.

## What is "gottani"

**ごった煮[gottani]**

(n) various foods cooked together,hodgepodge,hotchpotch,mulligan stew

## Features

- [x] VSCode settings, Auto format settings (in `/.vscode/settings.json`)
- [x] HMR(Hot Module Replacement) exec settings
- [x] ConfigModule Setting (use `*.env` files for environment variables)
- [x] CORS Settings (in `/src/main.ts`)
- [x] Logger(`morgan`) Settings (in `/src/main.ts`)
- [x] Security Settings (use `helmet`) (in `/src/main.ts`)
- [x] Start/End MySQL scripts using docker
- [x] TypeORM sample code included (in `/src/photo/`)
- [x] Swagger settings (`http://localhost:3000/api`)
- [x] Validation settings using `class-validator`
- [x] Authentication settings using `passport`
- [ ] Migration settings
- [ ] Add adding initial/seed data script

## Recommend VSCode Extensions
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Installation

```bash
$ npm install
```

## Use MySQL

```bash
# start
$ sh ./db/start.sh

# end
$ sh ./db/end.sh
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# develop mode using HRM
$ npm run hmr
$ npm run start:hmr
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).
