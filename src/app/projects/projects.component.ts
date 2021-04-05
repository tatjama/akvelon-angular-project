import { Component, OnInit } from '@angular/core';

import { Project } from '../project';

//Service
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    title: string = 'Projects';
    projects: Project[] = [];
    selectedProject: Project = new Project();


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects()
        .subscribe((data) => this.projects = data);
  }

  add(): void {
   this.selectedProject.date = new Date().toUTCString();

    if (!this.selectedProject.name) { return; }
    this.projectService.addProject(this.selectedProject)
      .subscribe(project => {
        this.projects.push(project);
      });
  }
}
