import withCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <h1 onMouseOver={incrementCount}>Hovered {count} items</h1>
    );
}

export default withCounter(HoverCounter);
// import React from "react";

// export default class HoverCounter extends React.Component {
//     state = {
//         count: 0
//     }

//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }))
//     }

//     render(){
//         const {count} = this.state;
//         return (
//             <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
//         )
//     }
// }