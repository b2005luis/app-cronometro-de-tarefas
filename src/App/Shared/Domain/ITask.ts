import {Dispatch, SetStateAction} from "react";

export interface ITask {
    id: string;
    title: string;
    time: string;
    selected: boolean;
    completed: boolean;
}

export type ITasks = Map<string, ITask>;

export type DispatchTasks = Dispatch<SetStateAction<ITasks>>;
