import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private tasksModel: Model<Task>) {}

  async getTasks() {
    return await this.tasksModel.find();
  }
  async getTask(id: string) {
    return await this.tasksModel.findById(id);
  }
  async createTask(task: CreateTaskDto) {
    const newTask = await new this.tasksModel(task);
    return await newTask.save();
  }
  async deleteTask(id: string) {
    return await this.tasksModel.findByIdAndDelete(id);
  }
  async editTask(id: string, task: CreateTaskDto) {
    return await this.tasksModel.findByIdAndUpdate(id, task);
  }
}
