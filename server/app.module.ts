import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './environment';

const {
  dbHost: host,
  dbPort: port,
  dbUser: username,
  dbPass: password,
  dbName: database,
  env,
} = config;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities: ['**/*.entity{.ts,.js}'],
      migrationsTableName: 'migration',
      migrations: ['server/migration/*.ts'],
      cli: {
        migrationsDir: 'server/migration',
      },
      ssl: env === 'prod',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
