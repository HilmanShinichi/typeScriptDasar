"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.getAge = () => {
            return this.age;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunanya
// private = hanya bisa di akses dari class itu sendiri
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
//let admin = new Admin("081320546022", "hilman", 22);
// admin.setName("mufid");
// console.log(admin.getName());
// console.log(admin.getAge());
// console.log(admin.phone);
// admin.email = "example@gmail.com"
// console.log(admin.email)
//static
console.log(Admin.getRoleName);
