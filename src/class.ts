export class User {
  constructor(public name: string, public age: number) {}

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };

  getAge = (): number => {
    return this.age;
  };
}

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunanya
// private = hanya bisa di akses dari class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: String;
  private _email: string = "";
  static getRoleName: string = "Admin"

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email():string {
    return this._email
  }
}

//let admin = new Admin("081320546022", "hilman", 22);

// admin.setName("mufid");
// console.log(admin.getName());
// console.log(admin.getAge());
// console.log(admin.phone);


// admin.email = "example@gmail.com"
// console.log(admin.email)

//static
console.log(Admin.getRoleName)