export{};

function add(a: number, b: string) {
    return a + b;
};

type ReturnTypeFromAdd = ReturnType<typeof add>;

console.log();