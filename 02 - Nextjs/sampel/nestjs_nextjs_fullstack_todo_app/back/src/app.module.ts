import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TodoModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
