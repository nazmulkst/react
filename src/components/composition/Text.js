export default function Text({addEmoji, addBracket}){
    let text = 'I love Javascript from text component';

    if(addEmoji){
        text = addEmoji ? addEmoji(text, '✔️') : text;
    }
    if(addBracket){
        text = addBracket ? addBracket(text) : text;
    }

    return <div>{text}</div>;
}