import { Component, OnInit, Input } from '@angular/core';

//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//Service
import { ProjectService } from '../project.service';

import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

   project?: Project;

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
    .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.projectService.updateProject(this.project)
      .subscribe(() => this.goBack());
  }

}
