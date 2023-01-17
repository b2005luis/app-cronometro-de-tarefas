import {TaskItemProperty} from "./Domain/TaskItemProperty";
import {Component} from "react";
import {ITask} from "../../../../Shared/Domain/ITask";

export class TaskItem extends Component<TaskItemProperty, ITask> {

    constructor(props: TaskItemProperty) {
        super(props);
        this.state = this.props.task;
    }

    public getSelectedTask() {
        this.setState({
            ...this.state,
            selected: true
        });

        localStorage.setItem("selectedTask", JSON.stringify(this.state));

        window.postMessage(this.state);
    }

    render() {
        return (
            <section className="ui segment"
                     onClick={this.getSelectedTask.bind(this)}>
                <header className="ui header">{this.state.title}</header>
                <div className="ui content">
                    <div>Tempo Restante: <strong>{this.state.time}</strong></div>
                    <div>ID: {this.state.id}</div>
                </div>
            </section>
        );
    }

}
