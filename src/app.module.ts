import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/todo.entity';

// tslint:disable-next-line:no-var-requires
const ormconfig = require(`../ormconfig.${process.env.NODE_ENV || 'development'}.js`);

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      ...ormconfig,
      entities: [
        Todo,
      ],
    } as TypeOrmModuleOptions),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
