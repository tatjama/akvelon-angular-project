import { Task } from "../tasks/task.model";

export class Project{
  id: number;
  name: string;
  date: string;
  tasks: Task[];
}
