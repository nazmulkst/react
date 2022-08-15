import React from "react";

export default class Bracket extends React.Component{
    // eslint-disable-next-line class-methods-use-this
    addBracket = (text) => `[${text}]`;

    render(){
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({addBracket: this.addBracket});
    }
}