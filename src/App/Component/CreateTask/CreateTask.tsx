import React, {Component, FormEvent} from "react";
import {ITask} from "../../Shared/Domain/ITask";
import {v4 as uuid_v4} from "uuid";
import {TaskStoraService} from "../../Shared/Service/TaskStoraService";
import {CreateTaskProperty} from "./Domain/CreateTaskProperty";

export class CreateTask extends Component<CreateTaskProperty, ITask> {

    private taskStoraService: TaskStoraService = new TaskStoraService();

    constructor(props: CreateTaskProperty) {
        super(props);
        this.state = CreateTask.defaultState();
    }

    private static defaultState(): ITask {
        return {
            id: uuid_v4(),
            title: "",
            time: "00:00:00",
            selected: false,
            completed: false
        } as ITask;
    }

    private saveTask(event: FormEvent) {
        event.preventDefault();

        this.taskStoraService.persistTask(this.state);

        this.setState(CreateTask.defaultState());

        return this.props.createNewTask();
    }

    public render() {
        return (
            <>
                <form className="ui segment form"
                      method="POST"
                      onSubmit={(event) => this.saveTask(event)}>
                    <h3 className="ui segment header">
                        Nova Tarefa
                    </h3>
                    <div className="field">
                        <label htmlFor="task-title">Nome da Tarefa</label>
                        <input
                            type="text"
                            name="task-title"
                            value={this.state?.title}
                            onChange={(event) => this.setState({...this.state, title: event.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="task-time">Nome da Tarefa</label>
                        <input
                            type="time"
                            name="task-time"
                            step={1}
                            value={this.state?.time}
                            onChange={(event) => this.setState({...this.state, time: event.target.value})}
                        />
                    </div>
                    <div className="field">
                        <button type="submit" className="ui blue button">
                            <i className="save icon"/> Salvar tarefa
                        </button>
                    </div>
                </form>
            </>
        );
    }

}
