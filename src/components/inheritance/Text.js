// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Emoji from "./Emoji";

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        const decoratedText = this.addEmoji('I love Javascript from Text Component','🇧🇩');
        return super.render(decoratedText);
    }
}