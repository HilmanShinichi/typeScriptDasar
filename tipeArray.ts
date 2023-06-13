// Array
let names: string[] = ["Hilman","Septiana","Mufid"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// mengubah array
console.log(names[2]= 'irma')

// Tipe data Tuple
let student: [string, string, number] = ["1001", "Hilman", 90];

//tuple tidak bisa di isi dengan tipe data berbeda dan
// tidak bisa di tambah push melebihi yang di tentukean

console.log(student[0] = 5) // tidak bisa beda tipe data
console.log(student[2] = 5) // bisa tipe data sama 

console.log(student[2])

let namesLagi: Array<String> = []
namesLagi.push("Hilman")
namesLagi.push("Septiana")
namesLagi.push("Mufid")

console.log(namesLagi);

namesLagi.push("lakul");

console.log(namesLagi)

// untuk hapus data array

let names: string[] = ["Hilman","Septiana","Mufid"];
let student: [string, string, number] = ["1001", "Hilman", 90];

delete names[0];
delete names[1];
delete names[0];
