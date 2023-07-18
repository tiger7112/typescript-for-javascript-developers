export{};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'taiga',
    age: 24
};

me.age++;

console.log(me);

type readonlyProfile = Readonly<Profile>;

const friend: readonlyProfile = {
    name: 'okaka',
    age: 22,
}

// friend.age++;

type Yomitori<T> = { readonly [P in keyof T]: T[P] };
type YomitoriProfile = Yomitori<Profile>;