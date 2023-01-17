import React, {Component} from "react";
import {CreateTask} from "../CreateTask/CreateTask";
import {TaskList} from "./TaskList/TaskList";
import {Stopwatch} from "../Stopwatch/Stopwatch";
import {TaskStoraService} from "../../Shared/Service/TaskStoraService";
import {ITasks} from "../../Shared/Domain/ITask";
import {CreateTaskProperty} from "../CreateTask/Domain/CreateTaskProperty";

export class TaskGrid extends Component<any, ITasks> {

    private taskStoraService: TaskStoraService = new TaskStoraService();

    constructor(props: CreateTaskProperty) {
        super(props);
        this.state = this.defaultState();
    }

    public defaultState(): ITasks {
        this.taskStoraService.loadTaskData();
        return this.taskStoraService.data;
    }

    public updateTaskList(): void {
        let taskList = this.defaultState();
        this.setState(taskList);
    }

    public render() {
        return (
            <>
                <section className="ui stackable grid fluid container">
                    <div className="ui center aligned one column row">
                        <div className="wide column">
                            <Stopwatch/>
                        </div>
                    </div>
                    <div className="two column row">
                        <div className="wide column">
                            <CreateTask createNewTask={this.updateTaskList.bind(this)}/>
                        </div>
                        <div className="wide column">
                            <TaskList tasks={this.state}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}
