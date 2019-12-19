# nestjs-gottani-templates

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter + various features repository.

## What is "gottani"

**ごった煮[gottani]**

(n) various foods cooked together,hodgepodge,hotchpotch,mulligan stew

## Features

- [x] Strict TypeScript (`strict: true`)
- [x] VSCode settings, Auto format settings (in `/.vscode/settings.json`)
- [x] HMR(Hot Module Replacement) exec settings
- [x] ConfigModule setting (use `*.env` files for environment variables)
- [x] CORS settings (in `/src/main.ts`)
- [x] Global logger(`morgan`) settings (in `/src/main.ts`)
- [x] Local logger settings (in `/src/logger.ts`, in `/src/request-logger.middleware.ts`)
- [x] Security settings (use `helmet`) (in `/src/main.ts`)
- [x] Start/End MySQL scripts using docker
- [x] Swagger settings (`http://localhost:3000/api`)
- [x] Validation settings using `class-validator`
- [x] CI setting using GitHub Actions (in `/.github/workflows/ci.yml`. refer to https://github.com/redshoga/nestjs-gottani-template/pull/1)
- [x] Versioning settings (in `/src/main.ts`)
- [ ] CRUD samples (in `/src/todo`)
  - [x] Create
  - [ ] Read
  - [ ] Update
  - [ ] Delete
- [ ] Test Sample (in `/src/todo`)
  - [ ] E2E
  - [ ] Service
  - [ ] Controller
- [x] TypeORM sample code included (in `/src/todo/todo.entity.ts`)
- [x] Migration settings
- [ ] Add adding initial/seed data script (in `/src/seed-data.ts`, `/src/seed.ts`)
- [ ] Formatter settings
- [ ] Log level filter settings
- [ ] VSCode debugging settings

## Recommend VSCode Extensions
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Installation

```bash
$ npm install
```

Please access `http://localhost:3000/0.1`.

## Use MySQL

For bash user (MacOS, UNIX)

```bash
# start
$ sh ./db/bash/start.sh

# end
$ sh ./db/bash/end.sh
```

For powershell, cmd user (Windows)

```powershell
#start
$ db/batch/start.bat

#end
$ db/batch/end.bat
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

## DB & Migration

```bash
# reset DB
$ npm run db:init

# exec migration files
$ npm run db:migrate

# plant seed data to DB
$ npm run db:seed

# initilalize DB
$ npm run db:init

# create migration file
$ npm run migration:generate -- { FILE_NAME }
```

## License

MIT Licensed.
