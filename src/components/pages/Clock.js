import React from "react";
import Button from "../assets/Button";

class Clock extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = { date: new Date(), locale: 'bn-BD' };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    // can be this conflict remove by using array function
    // handleClick2 = () => {
    //     this.setState({
    //         locale: 'en-US'
    //     })
    // }

    handleClick = (locale) => {
        this.setState({
            // locale: 'en-US'
            locale,
        })
    }


    tick(){
        this.setState({
            date: new Date()
        })
        // this.setState((state, props) => {
            
        // })
    }

    render() {
        const {date, locale} = this.state; // Destructure
        const {area} = this.props;
        let button;
        if(locale === 'bn-BD'){
           button = <Button change={this.handleClick} locale="en-US"/>
        } else {
           button = <Button change={this.handleClick} locale="bn-BD"/>
        }
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {date.toLocaleTimeString(locale)}.</h2>
                {/* <h2>It is {this.state.date.toLocaleTimeString(locale)}.</h2> */}
                <h3>It is {area}</h3>
                {/* <p><Button change={this.handleClick.bind(this, 'en-US')}>Click Here 2</Button></p> */}
                {/* <p>{button}</p> */}
                <p>{button}</p>
                <p>{locale === 'bn-BD' ? <Button change={this.handleClick} locale="en-US" show={false} enabled={false} /> : <Button change={this.handleClick} locale="bn-BD" show enabled/> }</p>
                {/* <p><button type="button" onClick={this.handleClick2}>Click Here 1</button></p>
                <p><button type="button" onClick={() => this.handleClick('en-US')}>Click Here 2</button></p>
                <p><button type="button" onClick={this.handleClick.bind(this, 'ru')}>Click Here 3</button></p> */}
            </div>
        );
    }
}



export default Clock;