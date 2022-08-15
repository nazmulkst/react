import React from "react";

export default class Emoji extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(){      
        return (
           // eslint-disable-next-line react/destructuring-assignment
           this.props.children({addEmoji: this.addEmoji})
        );
    }
}