import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessTokenGuard } from './guards';
import { ListModule } from './list-module/list.module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.MONGO_URI}`,
    ),
    UserModule,
    ListModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
