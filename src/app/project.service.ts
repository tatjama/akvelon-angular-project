import { Injectable } from '@angular/core';

//Https
import { Observable, of } from 'rxjs';

//Components
import { PROJECTS } from './mock-projects';
import { Project } from './project';

//Service
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects():Observable<Project[]> {
    const projects = of(PROJECTS);
    this.messageService.add("Project Service message: fetched Projects")
    return projects
  }
}
