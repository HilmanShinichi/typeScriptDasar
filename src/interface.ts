interface Laptop {
    name:string;
    on():void;
    off():void;
}

class Asus implements Laptop {
    name!: string;
    isGaming: boolean = true;

     constructor(name: string, isGaming:boolean){
            this.name = name,
            this.isGaming = isGaming
     }

    on(): void {
        console.log("Nyala")
    }
    off(): void {
        console.log("Mati")
    }
}

class Macbook implements Laptop {
    name!: string;
    keyboardLight: boolean = true
    on(): void {
        console.log("Nyala")
    }
    off(): void {
        console.log("Mati")
    }
}

let asus = new Asus("hilman", true)
asus.on()
console.log(asus.name)