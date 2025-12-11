import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('notification')
export class NotificationProcessor extends WorkerHost {
  async process(job: Job<any>): Promise<any> {
    console.log('📦 Job received:', job.data);

    await new Promise((res) => setTimeout(res, 2000));

    console.log('✅ Job completed');
  }
}
