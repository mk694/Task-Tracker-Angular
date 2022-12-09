import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() public task: any;
  @Output() deleteTask: any = new
  EventEmitter()
  faTimes: any;
  constructor() {}
  ngOnInit(): void {
    this.faTimes = faTimes;
  }

  clicked(id: any) {
    this.deleteTask.emit(id);
  }
    // this.task.filter((item: any) => {
    //   return item.id != id;
    // });
}
