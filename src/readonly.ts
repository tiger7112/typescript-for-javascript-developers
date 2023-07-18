export{};

class VisaCard {
    // readonly owner: string;

    constructor(public readonly owner: string) {
        // this.owner = owner;
    }
}

let myVisaCard = new VisaCard('tiasan');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'kanosan';