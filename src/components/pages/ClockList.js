import Clock from "./Clock";

function ClockList({quantities = [], area}){
    return (
        <div>
            {quantities.map((key) => (
                <Clock key={key} area={area}/>
                ))}
        </div>
    );
}

export default ClockList;