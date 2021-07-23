import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  Res,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';
import { Response } from 'express';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Delete(':id')
  deteleTask(@Param('id') id): Promise<Task> {
    return this.taskService.deleteTask(id);
  }

  @Put('/update')
  updateTask(@Body() task: CreateTaskDto, @Query('id') id): Promise<Task> {
    console.log(task);
    console.log(id);
    return this.taskService.editTask(id, task);
  }
}
