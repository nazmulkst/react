import React from "react";
import ClickChange from "../components/render/ClickChange";
import ThemeContent from "./ThemeContext";
// import {useContext} from "react";

export default class Content extends React.Component {
    // for function componet
    // const context = useContext(ThemeContent);
    // const {theme, switchTheme} = context;
    state = {
        count: 0
    }

    changeAction = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount(){
        console.log(this.context)
    }
    
    render(){
        const {count} = this.state;
        const {theme, switchTheme} = this.context;
        console.log('content rendered')
        return (
            <>
            
                <ClickChange count={count} changeHandler={this.changeAction} theme={theme} switchTheme={switchTheme} />
            
                {/* <ThemeContent.Consumer>
                    {({theme, switchTheme}) => (
                            <ClickChange count={count} changeHandler={this.changeAction} theme={theme} switchTheme={switchTheme} />
                        )}
                </ThemeContent.Consumer> */}
                <br />
                <br />
            </>
        )
    }
}

Content.contextType = ThemeContent;