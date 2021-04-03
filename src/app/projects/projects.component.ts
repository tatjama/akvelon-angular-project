import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    title: string = 'Projects';
    projects: Project[] = [];
    isShowDetails: boolean = false;
    projectIdToShow:string;
  constructor() { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projects = PROJECTS;
  }
  showDetails(event:Event){
    console.log((<HTMLElement>event.target).id);
    this.projectIdToShow = (<HTMLElement>event.target).id;
    //this.isShowDetails = !this.isShowDetails
    this.isShowDetails = true;
  }

}
