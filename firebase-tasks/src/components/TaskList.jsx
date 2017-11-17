import React from "react";
import Task from "./Task";

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tasksSnapshot: undefined
        }
    }

    componentDidMount() {
        this.props.tasksRef.on("value",
            snapshot => this.setState({tasksSnapshot: snapshot}));
    }

    componentWillUnmount() {
        this.props.tasksRef.off("value");
    }

    toggleDone() {

    }
    
    render() {
        if (!this.state.tasksSnapshot) {
            return <div>Loading... please be patient</div>;
        }

        let tasks = [];
        this.state.tasksSnapshot.forEach(taskSnapshot => {
            tasks.push(<Task key={taskSnapshot.key} taskSnapshot={taskSnapshot} />)
        });

        return (
            <ul>
                {tasks}
            </ul>
        );
    }
}