import { Injectable } from '@nestjs/common';
import { IDatabaseService } from '../interfaces/database-service.interface';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseService implements IDatabaseService {
  constructor(private readonly configService: ConfigService) {}

  createOptions(): TypeOrmModuleOptions {
    const databaseOptions: TypeOrmModuleOptions = {
      type: 'mysql',
      autoLoadEntities: true,
      host: this.configService.get('DATABASE_HOST'),
      port: this.configService.get('DATABASE_PORT'),
      database: this.configService.get('DATABASE_NAME'),
      username: this.configService.get('DATABASE_USERNAME'),
      password: this.configService.get('DATABASE_PASSWORD'),
      // TODO: config env var
      // logging: this.configService.get('NODE_ENV') === 'DEVELOPMENT',
      synchronize: true,
    };

    return databaseOptions;
  }
}
