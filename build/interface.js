"use strict";
class Asus {
    constructor(name, isGaming) {
        this.isGaming = true;
        this.name = name,
            this.isGaming = isGaming;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
class Macbook {
    constructor() {
        this.keyboardLight = true;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
let asus = new Asus("hilman", true);
asus.on();
console.log(asus.name);
