function getData(value: any) {
    return value;
}

console.log(getData("Hilman").length)
console.log(getData(123).length)

// Generic
function myData<T>(value: T) {
    return value
}

console.log(myData("Septiana").length);
console.log(myData(123.222222343).toFixed(2));

const arrowFunc = <T>(value: T) =>{
    
}

