"use strict";
// enum
// numeric enums
// enum Month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY,
// }
// console.log(Month.JAN)
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month.JAN);
