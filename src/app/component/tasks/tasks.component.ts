import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mockData';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: any = TASKS;

  constructor() {}
  ngOnInit(): void {}

  delete(task: any) {

    this.tasks = this.tasks.filter((item: any) => {
      return item.id != task.id;
    });
  }
}
