import { Injectable } from '@angular/core';
import { PROJECTS } from './mock-projects';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS
  }
}
