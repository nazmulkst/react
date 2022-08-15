import React from "react";


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default function TemparatureInput({temparature, onTemparatureChange, scale}){
    return (
        <fieldset>
            <legend>Enter temparetue in {scaleNames[scale]}</legend>
            <input type="text" value={temparature} onChange={(e) => onTemparatureChange(e, scale)} />
        </fieldset>
    );
}
// export default class TemparatureInput extends React.Component {
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
//         const {scale} = this.props;
//         return (
//             <div>
//                 <fieldset>
//                     <legend>Enter temparetue in {scaleNames[scale]}</legend>
//                     <input type="text" value={temparature} onChange={this.onTemparatureChange} />
//                 </fieldset>
//                 {/* <BoilingVerdict celsius={parseFloat(temparature)} /> */}
//             </div>
//         )
//     }
// }