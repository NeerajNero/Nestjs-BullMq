import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        port: 6379,
        host: '127.0.0.1',
      },
    }),
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
