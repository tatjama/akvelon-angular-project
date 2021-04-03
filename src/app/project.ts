import { Task } from "./task";

export interface Project{
  id: number;
  name: string;
  date: string;
  tasks: Task[];
}
