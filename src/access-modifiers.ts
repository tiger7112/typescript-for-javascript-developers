export{};

class Person {
    public name: string;
    // private age: number;
    protected age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

let taro = new Person('taro', 25, '日本');
// let hanako = new Person();
// console.log(taro.profile());
console.log(taro.profile());

console.log(taro.name);
// console.log(taro.age);
