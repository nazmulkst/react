import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override){
        let text = 'I love JavaScript Language';
        if(override) text = override;
        
        return (
            <div>
                {text}
            </div>
        );
    }
}