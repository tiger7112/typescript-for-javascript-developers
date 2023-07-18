export{};

// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('100'));
console.log(echo<boolean>(true));

class Mirror<T> {
    constructor(public value: T){}
    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('HELLO GENERICS').echo());
console.log(new Mirror<boolean>(true).echo());


// 内容： classやメソッドを汎用的に型指定できる機能
// インスタンス生成や呼び出しがわで型を指定する