import {Context, createContext} from "react";
import {ITask} from "../Domain/ITask";

export const TaskListContext: Context<ITask> = createContext({} as ITask);
