// tipe data pada balikan function

function getName(): string{
    return "hello, example string"
}

console.log(getName());

function getAge(): number{
    return 123
}

function printName(): void {
    console.log("Example void")
}

printName()

//argumen types
function multiply(val1:number, val2:number ):number {
    return val1 * val2;
}

const result = multiply(20, 10);

//console.log(result)

// function as type

type Tambah = (val1: number, val2:number) => number

const Add: Tambah = (val1: number, val2:number): number =>{
    return val1 + val2
}

const hasil = Add(10, 30);
//console.log(hasil)


// default parameter

const fullName = (first: string, last: string = "Septiana"): string =>{
    return `${first} ${last}`
}

//console.log(fullName("Hilman"))

// optional parameter
const getGolDarah = (val1: string, val2?: string): string => {
    return `${val1} ${val2}`
}

console.log(getGolDarah("A","AB"))