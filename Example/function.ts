//!Function

function create(): number {
    return 2;
}

// Arrow function
const create2 = (): string => "example arrow";

//console.log(create())


function create3(): void {
    console.log("example void tanpa return langsung mengembalikan data")
}

create3()

function add(x: number, y: number): void {
    const z: number = x + y;
    console.log("hasilnya adalah: " + z)
}

add(10, 20)


// pake return karena bukan void .. hasilnya definisikan string berisi parameter
function add2(x: number, y: number): string {
    return `${x} ditambah ${y} hasilnya ${x + y}`;
}



console.log(add2(10, 20))
