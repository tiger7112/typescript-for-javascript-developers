export{};

interface profile {
    name: string;
    underTwenty: boolean;
    [index:string]: string | number | boolean;


}

let profile: profile = {name: 'tai', underTwenty: true};

profile.name = 'ham';
profile.age = 14;
profile.nationality = 'osaka';