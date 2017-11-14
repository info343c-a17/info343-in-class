import React from "react";

export default class ChannelView extends React.Component {
    render() {
        return (
            <h1>Channel #{this.props.match.params.chanName}</h1>
        );
    }
}