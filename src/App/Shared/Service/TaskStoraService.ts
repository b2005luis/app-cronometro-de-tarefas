import {ITask, ITasks} from "../Domain/ITask";

export class TaskStoraService {

    private STORAGE_NAME: string = "TaskList";
    public data: ITasks = new Map<string, ITask>();

    public loadTaskData() {
        let storageData = localStorage.getItem(this.STORAGE_NAME);
        if (storageData != null) {
            let hsonData: Array<ITask> = JSON.parse(storageData) ?? new Array<ITask>();
            hsonData?.map(task => {
                this.data.set(task.id, task);
            });
        }
    }

    public persistTask(task: ITask) {
        this.loadTaskData();
        this.data.set(task.id, task);
        this.saveTasks();
    }

    public deleteTask(task: ITask) {
        this.loadTaskData();
        this.data.delete(task.id);
        this.saveTasks();
    }


    private saveTasks() {
        let tasks = new Array<ITask>();
        this.data.forEach(task => {
            tasks.push(task);
        });
        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(tasks));
    }
}
