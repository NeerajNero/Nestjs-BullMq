import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class NotificationService {
  constructor(
    @InjectQueue('notification')
    private readonly notificationQueue: Queue,
  ) {}

  async enqueueJob() {
    const time = new Date().toISOString();

    await this.notificationQueue.add('send-notification', {
      message: 'Hello from API',
      time,
    });

    console.log('📨 Job queued at:', time);

    return {
      status: 'queued',
      time,
    };
  }
}
