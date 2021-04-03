# AkvelonAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Test

Need to implement a repository of tasks for projects. 

Main idea is to develop SPA, which shows projects and gives the possibility to add new one. Also need to implement a button to watch project details with a list of the tasks.

"Task" is an entity that contains at least the following fields: 
identifier
task name
task description
creation date
estimate (in hours)

Each task must belong to one project (one-to-many relation). "Project" is an entity that contains:
identifier 
name
creation date

Technologies:
Frontend: Angular 2+ or ReactJS (SPA)
Backend: fake api or another way to store data

Approach to work:
You need to work in github / bitbucket, in the end you need to provide access to the repository.
First you need to break down the work into its components and evaluate each component. Create a plan and commit it to the repository.
Try to use RxJS if it’s Angular or Redux/Saga if it’s React
Implement your components using one or more @Directive if it’s Angular

Key assessment parameters:
Requirements completeness
Code quality
Ready for deployment (Example: App containerization or deployment yaml and etc)
You have implemented tests for components or other functional parts using libraries for testing





