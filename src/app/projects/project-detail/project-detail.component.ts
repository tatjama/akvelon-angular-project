import { Component, OnInit, Input } from '@angular/core';

//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//Service
import { ProjectService } from '../project.service';

import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

   project: Project;
   selectedProject: Project;
   isShowingAddForm: boolean = false;
   isShowingUpdateForm: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private projectService: ProjectService,
      private location: Location
      ) { }

  ngOnInit(): void {
    this.getProject()
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
    .subscribe(project => {
      this.project = project;
      //clone new project from project
      this.selectedProject = Object.assign({}, project)
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(event: Event): void {
    this.projectService.updateProject(this.selectedProject)
      .subscribe(() => this.goBack());
  }
  showAddForm(): void {
    this.isShowingAddForm = !this.isShowingAddForm;
  }
  showUpdateForm(): void {
    this.isShowingUpdateForm = !this.isShowingUpdateForm;
  }
  addTask(project: Project){
    this.projectService.updateProject(project)
    .subscribe(project=>this.project = project);
  }

}
