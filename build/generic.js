"use strict";
function getData(value) {
    return value;
}
console.log(getData("Hilman").length);
console.log(getData(123).length);
// Generic
function myData(value) {
    return value;
}
console.log(myData("Septiana").length);
console.log(myData(123.222222343).toFixed(2));
const arrowFunc = (value) => {
};
