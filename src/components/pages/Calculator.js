import React from "react";
import { convert, toCelsius, toFahrenheit } from "../../lib/Converter";
import TemparatureInput from "../assets/TemparatureInput";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
    state = {
        temparature: '',
        scale: ''
    };

    changeHandler = (e, scale) => {
        console.log(scale);
        this.setState({
            temparature: e.target.value,
            scale
        });
    }

    render(){
        const {temparature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temparature, toCelsius) : temparature;
        const fahrenheit = scale === 'c' ? convert(temparature, toFahrenheit) : temparature;
        console.log('celsius: ', celsius);
        console.log('fahrenheit: ', fahrenheit);
        return (
            <div>
                <TemparatureInput temparature={celsius} scale="c" onTemparatureChange={this.changeHandler}/>
                <TemparatureInput temparature={fahrenheit} scale="f" onTemparatureChange={this.changeHandler}/>
                <BoilingVerdict celsius={parseFloat(temparature)} />
            </div>
        )
    }
}

// import React from "react";
// import BoilingVerdict from "./BoilingVerdict";

// export default class Calculator extends React.Component {
//     state = {
//         temparature: ''
//     };

//     onTemparatureChange = (e) => {
//         this.setState({
//             temparature: e.target.value,
//         });
//     }

//     render(){
//         const {temparature} = this.state;
//         return (
//             <div>
//             <fieldset>
//                 <legend>Enter temparetue in Celsius</legend>
//                 <input type="text" value={temparature} onChange={this.onTemparatureChange} />
//             </fieldset>
//             <BoilingVerdict celsius={parseFloat(temparature)} />
//             </div>
//         )
//     }
// }