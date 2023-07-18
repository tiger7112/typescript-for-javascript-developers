export{};

function error(message:string): never {
    throw new Error(message);
}

try{
    let result = error('TEST');
    console.log({ result });
} catch(ERROR){
    console.log({ ERROR });
}