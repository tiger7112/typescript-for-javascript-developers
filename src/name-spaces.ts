export{};


namespace Japanese {
    class Person {
        constructor (public name:string) {}
    }
}

namespace foreign {
    export namespace NewYork {
        export class Person {
            constructor (public firstName: string, public middleName: string, public lastName: string) {}
        }
    }
}


const me = new foreign.NewYork.Person('たいさん', 'sky', '叶');
console.log(me);