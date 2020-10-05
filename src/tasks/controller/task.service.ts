import { Injectable } from '@nestjs/common';
import { Task } from '../model/task';

import { Environment } from 'roit-environment';
import { ModelMapper, JsonProperty } from "@roit/roit-model-mapper";

import axios from 'axios';

@Injectable()
export class TaskService {

  tasks: Task[];

  constructor(){
    if(Environment.currentEnv() == 'dev'){
      this.tasks= [
        {id: 1, description: "Tarefa Dev 1", completed: false,cep:undefined, endereco: undefined},
        {id: 2, description: "Tarefa Dev 2", completed: true,cep:undefined, endereco: undefined},
      ];
    }
  }

  getAll(){
    return this.tasks;
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  async create(task: Task){
    let lastId = 0;
    let endereco = undefined;
  
    if(this.tasks.length > 0){
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    
    await axios.get('https://viacep.com.br/ws/'+ task.cep +'/json/')
      .then(function (response) {
          task.endereco = response.data;
          endereco = ModelMapper.deserialize(Task,task);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    this.tasks.push(endereco);
  
    return endereco;
  }

  async update(task: Task){
    let taskArray = this.getById(task.id);
    let endereco = undefined;
  
    if(taskArray){
      taskArray.description = task.description;
      taskArray.completed = task.completed;

      if(task.cep){
        taskArray.cep = task.cep;
        await axios.get('https://viacep.com.br/ws/'+ task.cep +'/json/')
        .then(function (response) {
            taskArray.endereco = response.data;
            endereco = ModelMapper.deserialize(Task,taskArray);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        this.tasks[task.id - 1] = endereco;
        taskArray = endereco;
        return endereco;
      }else{
        return taskArray;
      }      
    }   
  }

  delete(id: number){
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
