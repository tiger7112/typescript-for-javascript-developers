export{};

class Me {
    static isProgrammer: boolean = true;
    static firstName = 'Taiga';
    static lastName = 'Kano';

    static work() {
        return `HEY This is ${this.firstName} HEY HEY`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);

console.log(Me.work());
