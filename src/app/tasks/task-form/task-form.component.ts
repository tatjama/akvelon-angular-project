import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Project } from '../../projects/project.model';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {

  newTask:Task = new Task();
  title:string ="Add new task";
  //updatedTasks: Task[];
  updatedProject: Project;

  @Input() project:Project;
  @Output() addedTaskEvent = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newTask.date = new Date().toLocaleDateString().slice(0,10).replace(/\//g, ".");
    this.newTask.projectId = this.project.id;
    if(!this.newTask.title){return; }

    //clone new object project from project
    this.updatedProject = Object.assign({}, this.project);
    this.updatedProject.tasks.push(this.newTask);
    this.addedTaskEvent.emit(this.updatedProject);
  }
}
