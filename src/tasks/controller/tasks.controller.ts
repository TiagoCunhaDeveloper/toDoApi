import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from '../model/task';
import { TaskService } from './task.service';

import { Success } from '../model/response';
import { OkResponse } from "@roit/roit-response-handler";


@Controller('tasks')
export class TasksController {

  constructor(
    private taskService: TaskService
  ){ }

  @Get()
  async getAll() : Promise<Success>{
    return OkResponse(this.taskService.getAll());
  }

  @Get(':id')
  async getById(@Param('id') id: number) : Promise<Success>{
    return OkResponse(this.taskService.getById(id));
  }

  @Post()
  async create(@Body() task: Task) : Promise<Success> {
    return OkResponse(await this.taskService.create(task));
  }

  @Put(':id')
  async update(@Body() task: Task,@Param('id') id: number) : Promise<Success> {
    task.id = id;
    return OkResponse(await this.taskService.update(task));
  }

  @Delete(':id')
  async delete(@Param('id') id: number){
    return this.taskService.delete(id);
  }
}
