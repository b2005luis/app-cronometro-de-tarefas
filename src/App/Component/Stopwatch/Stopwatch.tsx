import {Component} from "react";
import {ITask} from "../../Shared/Domain/ITask";
import {StopwatchService} from "./Service/StopwatchService";

export class Stopwatch extends Component<any, ITask> {

    private stopwatchService: StopwatchService = new StopwatchService();

    constructor(props: any) {
        super(props);
        this.state = Stopwatch.defaultState();
    }

    private onMessage(message: MessageEvent) {
        this.setState(message.data);
    }

    private executeTimer() {
        setTimeout(() => {
            let newState = this.stopwatchService.execute(this.state);
            if (newState.completed) {
                newState.selected = false;
                this.setState(Stopwatch.defaultState());
            } else {
                this.setState(newState);
                this.executeTimer();
            }
        }, 1000);
    }

    private static defaultState(): ITask {
        return {
            title: "Nenhuma tarefa selecionada",
            time: "00:00:00",
            completed: true
        } as ITask;
    }

    public render() {
        window.onmessage = message => this.onMessage(message);

        return (
            <>
                <section className="ui segment">
                    <div className="ui statistic content">
                        <header className="ui header">{this.state?.title}</header>
                        <div className="ui value">{this.state?.time}</div>
                    </div>
                    <div className="actions">
                        <button className="ui grey button"
                                onClick={this.executeTimer.bind(this)}>
                            <i className="clock icon"/> Iniciar
                        </button>
                    </div>
                </section>
            </>
        );
    }

}
