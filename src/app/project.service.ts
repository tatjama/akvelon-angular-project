import { Injectable } from '@angular/core';

//Https
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

//Components
import { PROJECTS } from './mock-projects';
import { Project } from './project';

//Service
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'http://localhost:3000/projects';
  private tasksUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient,  private messageService: MessageService) { }

  private log(message:string){
    this.messageService.add(`Project Service message: ${message}`)
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
         tap(_ => this.log('fetched Projects')),
         catchError( this.handleError<Project[]>("getProjects", []))
        )
  }

  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find(p => p.id === id) as Project;
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(project);
  }

  private handleError<T>(operation = 'operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error)
        this.log(`${operation} failed: ${error.message} `)
        return of(result as T)
      }
  }
}
