import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//service
import { ProjectService } from '../project.service';

import { Project } from '../project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  title: string = "Add a new project";
  projects: Project[] = [];
  addedProject: Project = new Project();
  //@Output()
  //addedProjectEvent = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects()
        .subscribe((data) => this.projects = data);
  }

  add(): void {
   this.addedProject.date = new Date().toUTCString();
    if (!this.addedProject.name) { return; }
    this.projectService.addProject(this.addedProject)
      .subscribe(project => {
        this.projects.push(project);
       // this.addedProjectEvent.emit();
      });

  }

}
