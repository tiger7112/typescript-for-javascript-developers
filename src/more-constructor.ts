export{};

class Person {
    // public name: string;
    // protected age: number;

    constructor (public name: string, protected age: number) {
        // this.name = name;
        // this.age = age;
    }
}

const me = new Person('taisan', 28);
console.log(me);