import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  color: any = 'red';
  text: any = 'Close';

  @Input() showAdd: any = false;

  constructor() {}
  ngOnInit(): void {};

  clicked() {
    this.color = this.showAdd ? 'green' : 'red';
    this.text = this.showAdd ? 'Add' : 'Close';
    this.showAdd = !this.showAdd;
  }
}
