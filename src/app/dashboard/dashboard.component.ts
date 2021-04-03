import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectsComponent } from '../projects/projects.component';
import {ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //selectedProject?: Project = {id:1, name:"Project 1", date:"03.04.2021", tasks:[]};
  selectedProject?: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
