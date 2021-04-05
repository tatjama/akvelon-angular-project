import { Project } from './Project';


export const PROJECTS: Project[] = [
  {
    id:1,
    name: 'Project 1',
    date: '01.04.2021',
    tasks: [
      {
        id: 1,
       title: 'Task 1',
       description: 'You ned TODO task 1',
       date: '01.04.2021',
       estimate: 5,
       projectId:1
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'You ned TODO task 2',
        date: '02.04.2021',
        estimate: 2,
        projectId:1
      },
      {
        id: 3,
       title: 'Task 3',
       description: 'You ned TODO task 3',
       date: '03.04.2021',
       estimate: 1,
       projectId:1
      }
    ]
  },
  {
    id:2,
    name: 'Project 2',
    date: '31.03.2021',
    tasks: [
      {
        id: 4,
        title: 'Task 4',
        description: 'You ned TODO task 4',
        date: '03.04.2021',
        estimate: 10,
        projectId:2
      },
      {
        id: 5,
        title: 'Task 5',
        description: 'You ned TODO task 5',
        date: '02.04.2021',
        estimate: 6,
        projectId:2
      },
      {
        id: 6,
        title: 'Task 6',
        description: 'You ned TODO task 6',
        date: '04.04.2021',
        estimate: 6,
        projectId:2
      }
    ]
  },
  {
    id:3,
    name: 'Project 3',
    date: '30.03.2021',
    tasks: [
      {
        id: 7,
       title: 'Task 7',
       description: 'You ned TODO task 7',
       date: '31.03.2021',
       estimate: 1,
       projectId:3
      },
      {
        id: 8,
        title: 'Task 8',
        description: 'You ned TODO task 8',
        date: '02.04.2021',
        estimate: 5,
        projectId:3
      },
      {
        id: 9,
       title: 'Task 9',
       description: 'You ned TODO task 9',
       date: '03.04.2021',
       estimate: 10,
       projectId:3
      },
      {
        id: 10,
        title: 'Task 10',
        description: 'You ned TODO task 10',
        date: '03.04.2021',
        estimate: 11,
        projectId:3
      }
    ]
  },

]

