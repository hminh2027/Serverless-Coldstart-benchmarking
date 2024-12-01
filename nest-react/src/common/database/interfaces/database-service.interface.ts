import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IDatabaseService {
  createOptions(): TypeOrmModuleOptions;
}
