import { Module } from '@nestjs/common';
import { TaskService } from './controller/task.service';
import { TasksController } from './controller/tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TaskService]
})
export class TasksModule {}
