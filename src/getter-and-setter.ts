export{};

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor (owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner(){
        return this._owner;
    }
    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    debugPrint(){
        return `secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('taisan', 1234567890);
// card.owner = 'ham';
// console.log(card.secretNumber);
// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());

// 内容：参照（get）や更新（set）をできるgetterとsetterという細かい単位でアクセスを制御する機能

