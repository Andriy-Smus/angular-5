import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public addStatus = true;
  public newTask!: any;
  public addTask = '';

  public editStatus = false;
  public changeTask!: string;
  public numChangeTask!: number;

  writeTask(): void {
    if(this.addTask !== ''){
      this.addStatus = false;
    } else this.addStatus = true;
  }

  public taskData = [
    {
      task: 'HTML',
      status: true
    },
    {
      task: 'JavaScript',
      status: false
    },
    {
      task: 'Angular',
      status: false
    }
  ];

  public countTask = this.taskData.length;

  createTask(): void{
    if(this.addTask !== ''){
      this.newTask = {
        task: this.addTask,
        status: false
      }
      this.taskData.push(this.newTask);
      this.addTask = '';
      this.countTask = this.taskData.length;
    }
  }

  isCheckbox(index: number): void{
    this.taskData[index].status = !this.taskData[index].status
  }

  deleteTask(index: number): void{
    this.taskData.splice(index, 1);
    this.countTask = this.taskData.length;
  }

  editTask(index: number): void{
    this.editStatus = true;
    this.changeTask = this.taskData[index].task;
    this.numChangeTask = index;
  }

  addChange(): void{
    this.taskData[this.numChangeTask].task = this.changeTask;
    this.editStatus = false;
  }
}
