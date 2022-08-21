import React from "react";
import Content from "./Content";

export default class Section extends React.Component{
    shouldComponentUpdate(){
        return false;
    }
    
    render(){
        console.log('section rendered')
        return (
            <Content />
        )
    }
}

// export default function Section(){
//     return (
//         <Content />
//     )
// }