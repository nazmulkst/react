import withCounter from "../HOC/withCounter";

const ClickCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <button type="button" onClick={incrementCount}>Clicked {count} times</button>
    )
}

export default withCounter(ClickCounter);
// import React from "react";

// export default class ClickCounter extends React.Component {
//     state = {
//         count: 0
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }))
//     }

//     render(){
//         const {count} = this.state;
//         return (
//             <>
//                 <button type="button" onClick={this.incrementCount}>Clicked {count} times</button>
//                 <br />
//                 <br />
//             </>
//         );
//     }
// }