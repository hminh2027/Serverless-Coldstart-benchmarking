import { HttpStatus } from '@nestjs/common';
import { AppModule } from '../app.module';
import { UserService } from '../core/user/user.service';
import { NestFactory } from '@nestjs/core';
import { Context } from 'aws-lambda';

export const handler = async (event: any, context: Context, callback: any) => {
  console.log(
    '--- this is a custom lambda, but still can using nest application service ---',
  );
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const userService = appContext.get(UserService);

  const createdUser = await userService.createUser({
    id: 69,
    name: 'User 69',
    email: '',
  });

  console.log('createdUser', createdUser);
  return {
    body: JSON.stringify(createdUser),
    statusCode: HttpStatus.OK,
  };
};
