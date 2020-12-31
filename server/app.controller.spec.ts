import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
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
} = config;

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
        }),
        ScheduleModule.forRoot(),
        GraphQLModule.forRoot(),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return running status for health check', () => {
      expect(appController.healthCheck()?.message).toBe(
        'exchange is running in port 3000 and db is connected',
      );
    });
  });
});
