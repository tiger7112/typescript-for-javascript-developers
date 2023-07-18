export{};

const debugProfile = (name: string, age: number) => {
    console.log({name, age});
};

debugProfile('taiga', 23);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['michel', 11];

debugProfile(...profile);