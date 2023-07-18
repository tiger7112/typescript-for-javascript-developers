export{};

let profile1: object = { name:'Ham' };
profile1 = { birth:1999 };

let profile2: {
    name: string;
} = { name:'Ham' };
profile2 = { name:'aho' };
console.log(profile2);