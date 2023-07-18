export{};

const reducer = (accumulater: number, carrentValue: number) => {
    // console.log({ accumulater, carrentValue });
    return accumulater + carrentValue;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

