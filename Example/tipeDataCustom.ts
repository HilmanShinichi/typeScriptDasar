//!TIPE DATA CUSTOM

type TemanType = {
    name: String;
    smart:boolean;
    debt?:number; // ? adalah optional
}

let TemanKita: TemanType;

TemanKita = {
    name: "ivan",
    smart:false,
    debt: 45_000,
}

console.log({TemanKita})