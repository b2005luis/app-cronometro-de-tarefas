import {v4 as uuid} from "uuid";
import React, {Component} from "react";
import {MessageProperties} from "./Domain/MessageProperties";
import {IMessage} from "./Domain/IMessage";

export class Message extends Component<MessageProperties, IMessage> {

    constructor(props: any) {
        super(props);
        this.state = this.props.message;
    }

    public render() {
        return (
            <>
                <section className="ui icon message">
                    <i className="icon">{this.props.message.icon}</i>
                    <div className="content">
                        <div className="header">{this.props.message.title}</div>
                        <>
                            {this.state?.content.map(contentPart => (
                                <div key={uuid()}>{contentPart}</div>
                            ))}
                        </>
                    </div>
                </section>
            </>
        )
    }

}
