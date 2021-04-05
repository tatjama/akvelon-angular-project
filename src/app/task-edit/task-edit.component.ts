import { Component, OnInit } from '@angular/core';

//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//Service
import { ProjectService } from '../project.service';

import { Project } from '../project';
import { Task } from '../task';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  id: number;
  addedTask = new Task();

  constructor(
    private route: ActivatedRoute,
      private projectService: ProjectService,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  onSubmit(): void {
    this.addedTask.date = new Date().toUTCString()
    this.addedTask.projectId = this.id;
    console.log(this.addedTask);
    if (!this.addedTask.title) { return; }
    this.projectService.addTask(this.addedTask).subscribe((data) => console.log(data));


  }
}
