export{};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('taiga', 13);
console.log(taro);

type PersonType =typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['taiga', 33];

const taiga = new Person(...profile);

console.log(taiga);