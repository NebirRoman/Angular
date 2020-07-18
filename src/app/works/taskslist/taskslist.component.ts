import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';
import { Task } from './task.model';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.scss']
})
export class TaskslistComponent implements OnInit {
  user: string = 'Ivan Ivanov';
  task: string;
  taskList: Array<ITask> = [];
  count: number = 0;
  saveMod: boolean;
  index: number;
  validTask: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  addTask(): void {
    if(this.task){
      this.validTask = true;
      this.taskList.push(new Task(this.task, false));
      this.count = this.taskList.length;
      this.task = '';
    }
    else{
      this.validTask = false
    }
  }
  saveTask():void {
    if(this.task){
      this.taskList[this.index].name = this.task;
    }
    this.task = '';
    this.saveMod = false;
  }
  editTask(task: ITask, i: number): void {
    this.task = task.name;
    this.saveMod = true;
    this.index = i;
  }
  deleteTask(i: number): void{
    this.taskList.splice(i, 1);
    this.count = this.taskList.length;
  }
  changeStatus(task: ITask): void {
    task.status = !task.status;
  }
}
