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
    selectedProject: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects()
        .subscribe((data) => this.projects = data);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.projectService.addProject({ name } as Project)
      .subscribe(project => {
        this.projects.push(project);
      });
  }

  onSelect(project: Project){
    //console.log((<HTMLElement>event.target).id);
    //console.log(project)
    this.selectedProject = project;
    //this.projectIdToShow = (<HTMLElement>event.target).id;
    //this.isShowDetails = !this.isShowDetails
    //dashboard.isShowDetails = true;
  }

}
