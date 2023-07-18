export{};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.February);
console.log(Months.December);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    // YELLOW = '#FFFF00',
    BLACK = '#000000'
};

let GREEN = COLORS.GREEN;
console.log({GREEN});

enum COLORS {
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}

COLORS.YELLOW;
console.log({COLORS});

