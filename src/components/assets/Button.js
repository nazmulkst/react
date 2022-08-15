import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps){
        const {change:currentChange, locale: currentLocale} = this.props;
        const {change:nextChange, locale: nextLocale} = nextProps;

        if(currentChange === nextChange && currentLocale === nextLocale){
            return false;
        }

        return true;
    }

    render(){
        const {change, locale, show, enabled} = this.props;
        if(!enabled) return null;
        return (
            // <p><button type="button" onClick={this.handleClick2}>Click Here 1</button></p>
            // <p><button type="button" onClick={change}>Click Here 2</button></p>
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {show && <p>Hello</p>}
            </div>
            // <p><button type="button" onClick={this.handleClick.bind(this, 'ru')}>Click Here 3</button></p>
        )
    }
}

export default Button;