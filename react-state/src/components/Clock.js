import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        //We Need this
        super(props);
        //this.state = 
        //only allowed in the constructor
        this.state = {date: new Date()};
        //this.setState()
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}