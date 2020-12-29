import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AppStatus } from './interfaces';

@ApiTags('config')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Health Check',
  })
  healthCheck(): AppStatus {
    return this.appService.getStatus();
  }
}
