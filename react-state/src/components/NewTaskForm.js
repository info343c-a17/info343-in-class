import React from "react";

export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ""}
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onNewTask({title: this.state.title});
        this.setState({title: ""});
    }


    render() {
        return (
            <form action="#" onSubmit={(evt) => this.handleSubmit(evt)}>
                <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onInput={(evt) => this.setState({title: evt.target.value})}
                    placeholder="what do you need to do?"
                />
            </form>
        );
    }
}