import {ITask} from "../../../Shared/Domain/ITask";

export class StopwatchService {

    public execute(task: ITask): ITask {
        let currentTime = this.timeToMillis(task.time);
        task.time = this.getDecrementedTime(currentTime);
        if (currentTime < 1) {
            task.completed = true;
        }
        return task;
    }

    private timeToMillis(time: string): number {
        let [h, m, s] = time.split(":");
        let hours = Number.parseInt(h) * 3600;
        let minutes = Number.parseInt(m) * 60;
        let seconds = Number.parseInt(s);
        return (hours + minutes + seconds) * 1000;
    }

    private getDecrementedTime(timestamp: number): string {
        let date = new Date("2000-01-01T00:00:00");
        date.setTime((date.getTime() + timestamp) - 1000);
        return date.toLocaleTimeString();
    }

}
