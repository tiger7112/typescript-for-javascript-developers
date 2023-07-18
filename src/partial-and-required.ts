export{};

// partial
type Profile = {
    name: string;
    age: number;
    zipCode: number;
};

type pertialType = Partial<Profile>;


// required
type Profile2 = {
    name: string;
    age?: number;
    zipCode?: number;
};

type requiredType = Required<Profile>;
