import { Injectable } from '@nestjs/common';
import { config } from './environment';
import { AppStatus } from '@st/interfaces';
import { Connection } from 'typeorm';

const { appName, port } = config;

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}

  getStatus(): AppStatus {
    return {
      message: `${appName} is running in port ${port} and db is ${
        this.connection.isConnected ? 'connected' : 'disconnected'
      }`,
    };
  }
}
