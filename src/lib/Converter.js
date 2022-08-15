export function toCelsius(farhenheit){
    return (farhenheit - 32) * 5/9;
}

export function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

export function convert(temparature, convertTo){
    const input = parseFloat(temparature);

    if(Number.isNaN(input)){
        return '';
    }

    const output = convertTo(input);
    const round = Math.round(output * 1000) / 1000;
    
    return round;
}