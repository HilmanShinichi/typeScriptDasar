"use strict";
// tipe data pada balikan function
function getName() {
    return "hello, example string";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("Example void");
}
printName();
//argumen types
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(20, 10);
const Add = (val1, val2) => {
    return val1 + val2;
};
const hasil = Add(10, 30);
//console.log(hasil)
// default parameter
const fullName = (first, last = "Septiana") => {
    return `${first} ${last}`;
};
//console.log(fullName("Hilman"))
// optional parameter
const getGolDarah = (val1, val2) => {
    return `${val1} ${val2}`;
};
console.log(getGolDarah("A", "AB"));
