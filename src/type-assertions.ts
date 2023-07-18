export{};

let name: any = 'たい';
// let length = name.length as number;
let length = (name as string).length; //　こちらの方が推奨されている
let length = (<string>name).length;



length = 'foo';


// 　内容：型アサーション
// 　型指定の方法