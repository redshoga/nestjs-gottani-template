module.exports = {
  ...require("./ormconfig.development.js"),
  entities: ["src/**/*.entity.ts"],
  migrations: ["migrations/*.ts"],
  cli: {
    migrationsDir: 'migrations',
  }
}
