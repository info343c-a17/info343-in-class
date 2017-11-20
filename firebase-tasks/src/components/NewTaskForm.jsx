import React, {Component} from "react";

export default class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskTitle: ""
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.tasksRef.push({
            title: this.state.newTaskTitle
        });
        this.setState({newTaskTitle: ""});
    }

    render() {
        return (
            <form onSubmit={evt => this.handleSubmit(evt)}>
                <input type="text"
                    className="form-control"
                    value={this.state.newTaskTitle}
                    placeholder="what do you need to do?"
                    onInput={evt => this.setState({newTaskTitle: evt.target.value})}
                />
            </form>
        );
    }
}