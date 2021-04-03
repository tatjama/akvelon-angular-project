import { Injectable } from '@angular/core';

//Https
import { Observable, of } from 'rxjs';

//Components
import { PROJECTS } from './mock-projects';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects():Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects
  }
}
