import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  selectedTask: Task;
  @Input() tasks:Task[];
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(task): void {
    this.selectedTask === task? this.selectedTask = undefined:
    this.selectedTask = task;

  }

}
