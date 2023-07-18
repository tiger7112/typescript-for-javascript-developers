export{};

let name = '泰我';

name = 'taiga';

let nickname = 'taiga ' as const;

let profile = {
    name: 'taiga',
    age: 27
} as const;

profile.name = 'ahahahha';
profile.age = 28;

// 内容：as const
// まとめてreadonlyとすることができる