import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  title: string = "Update project";
  @Input() selectedProject: Project;
  @Output() updateProjectEvent = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.updateProjectEvent.emit(this.selectedProject)
  }
}
