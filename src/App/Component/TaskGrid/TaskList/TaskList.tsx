import {ITasks} from "../../../Shared/Domain/ITask";
import {TaskItem} from "./TaskItem/TaskItem";
import {TaskListProperty} from "./Domain/TaskListProperty";
import {IMessage} from "../../Message/Domain/IMessage";
import {Message} from "../../Message/Message";
import {Component} from "react";

export class TaskList extends Component<TaskListProperty, ITasks> {

    constructor(props: TaskListProperty) {
        super(props);
        this.state = this.props.tasks;
    }

    public renderTaskItens(): Array<JSX.Element> {
        let taskItens: Array<JSX.Element> = new Array<JSX.Element>();
        this.state?.forEach((task, key) => {
            taskItens.push(
                <TaskItem key={key}
                          task={task}
                />
            );
        });
        return taskItens;
    }

    public render() {
        if (this.state.size > 0) {
            return (
                <>
                    <section className="ui segment">
                        <h3 className="ui segment header">
                            Lista de Tarefas
                        </h3>
                        <div className="ui fluid container segments">
                            {this.renderTaskItens()}
                        </div>
                    </section>
                </>
            );
        } else {
            return (
                <>
                    <Message message={{
                        icon: "🤗",
                        title: "Nada por aqui!",
                        content: [
                            "Nenhuma tarefa para exibir...",
                            "Curta o seu dia!"
                        ]
                    } as IMessage}/>
                </>
            );
        }
    }

}
