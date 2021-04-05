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
   // id = this.genId(this.projects);


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects()
        .subscribe((data) => this.projects = data);
  }



  add(): void {
    //name = name.trim();
   //const tempProject = new Project();
   //this.selectedProject.name = name;
   this.selectedProject.date = new Date().toUTCString();


    if (!this.selectedProject.name) { return; }
    this.projectService.addProject(this.selectedProject)
      .subscribe(project => {
        this.projects.push(project);
      });
  }

   /*genId(projects: Project[]): number {
    return projects.length>0 ? Math.max(...projects.map(project => project.id))+1: 1;
   }*/
  //onSelect(project: Project){
    //console.log((<HTMLElement>event.target).id);
    //console.log(project)
    //this.selectedProject = project;
    //this.projectIdToShow = (<HTMLElement>event.target).id;
    //this.isShowDetails = !this.isShowDetails
    //dashboard.isShowDetails = true;
//  }

}
